<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contract;
use App\Models\Deal;
use App\Models\Task;
use App\Models\TaskNote;
use App\Models\ClientPayment;
use App\Models\NotificationModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientPortalController extends Controller
{
    public function dashboard()
    {
        $user = Auth::user();

        // 1. Contracts
        $contracts = Contract::where('client_id', $user->id)->latest()->get();

        // 2. Deals & Account Balance
        $deals = Deal::where('client_id', $user->id)->with(['payments', 'tasks'])->latest()->get();
        $totalBilled = 0;
        $totalPaid = 0;

        foreach ($deals as $deal) {
            $totalBilled += $deal->calculated_total;
            $totalPaid += $deal->calculated_paid;

            $dealTasks = $deal->tasks;
            if ($dealTasks && $dealTasks->count() > 0) {
                $completedCount = $dealTasks->filter(function($t) {
                    return in_array($t->status, ['done', 'approved', 'completed']);
                })->count();
                $deal->progress = (int) round(($completedCount / $dealTasks->count()) * 100);
            } else {
                if (in_array($deal->status, ['won', 'closed', 'completed'])) {
                    $deal->progress = 100;
                } else if (in_array($deal->status, ['lost', 'cancelled'])) {
                    $deal->progress = 0;
                } else {
                    $deal->progress = 0;
                }
            }
        }
        $remainingBalance = max(0, $totalBilled - $totalPaid);

        // 3. Client Main Tasks (only top-level tasks where parent_id is null, with subtasks eagerly loaded)
        $dealIds = $deals->pluck('id');
        $tasks = Task::whereIn('deal_id', $dealIds)
            ->whereNull('parent_id')
            ->with(['attachments', 'notes.user', 'subCategory', 'subtasks.users', 'subtasks.attachments', 'subtasks.notes.user', 'users'])
            ->latest()
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'client_name' => $user->name,
                'client_email' => $user->email,
                'contracts' => $contracts,
                'deals' => $deals,
                'financial_summary' => [
                    'total_billed' => (float) $totalBilled,
                    'total_paid' => (float) $totalPaid,
                    'remaining_balance' => (float) $remainingBalance,
                ],
                'tasks' => $tasks
            ]
        ]);
    }

    public function addTaskNote(Request $request, $taskId)
    {
        $user = Auth::user();
        $task = Task::findOrFail($taskId);

        // Verify task belongs to a deal of this client
        $deal = Deal::where('id', $task->deal_id)->where('client_id', $user->id)->first();
        if (!$deal && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح لك بالملاحظات على هذه المهمة'], 403);
        }

        if ($user->role === 'client') {
            $allowedReviewStatuses = ['client_review', 'in_review', 'review', 'content_creator', 'changes_requested', 'client_feedback'];
            if (!in_array(strtolower($task->status), $allowedReviewStatuses)) {
                return response()->json(['message' => 'لا يمكنك طلب تعديلات إلا عندما تكون المهمة في مرحلة مراجعة العميل'], 422);
            }
        }

        $validated = $request->validate([
            'note' => 'required|string'
        ]);

        $note = TaskNote::create([
            'task_id' => $task->id,
            'user_id' => $user->id,
            'note' => $validated['note']
        ]);

        // Update task status to changes_requested if client leaves note
        $task->update(['status' => 'changes_requested']);

        // Send notification to department manager & assigned staff (excluding the acting client)
        $recipients = $task->users->pluck('id')->toArray();
        if ($task->department && $task->department->manager_id) {
            $recipients[] = $task->department->manager_id;
        }
        $recipients = array_unique(array_filter($recipients));

        foreach ($recipients as $uid) {
            if ((int)$uid === (int)$user->id) {
                continue; // Skip self-notification
            }
            NotificationModel::create([
                'user_id' => $uid,
                'type' => 'client_note',
                'title' => 'ملاحظة وتعديلات جديدة من العميل',
                'message' => 'أضاف العميل ' . $user->name . ' طلب تعديل على المهمة: ' . $task->title,
                'notifiable_type' => Task::class,
                'notifiable_id' => $task->id
            ]);
        }

        return response()->json(['status' => 'success', 'data' => $note->load('user')], 201);
    }

    public function approveTask(Request $request, $taskId)
    {
        $user = Auth::user();
        $task = Task::findOrFail($taskId);

        $isStaffApprover = in_array($user->role, ['account_manager', 'Account Manager', 'super_admin', 'admin', 'Super Admin'])
            || $user->hasRole('account_manager')
            || $user->hasRole('super_admin')
            || $user->hasRole('admin');

        if ($user->role === 'client') {
            $deal = Deal::where('id', $task->deal_id)->where('client_id', $user->id)->first();
            if (!$deal) {
                return response()->json(['message' => 'غير مسموح لك بالموافقة على هذه المهمة'], 403);
            }

            // Must be in client review stage
            $allowedReviewStatuses = ['client_review', 'in_review', 'review', 'content_creator', 'changes_requested', 'client_feedback'];
            if (!in_array(strtolower($task->status), $allowedReviewStatuses)) {
                return response()->json(['message' => 'لا يمكنك اعتماد المهمة إلا عندما تكون في مرحلة مراجعة العميل'], 422);
            }
        } elseif (!$isStaffApprover) {
            return response()->json(['message' => 'غير مصرح لك باعتماد المهمة نيابة عن العميل'], 403);
        }

        $task->update(['status' => 'approved']);

        $actorName = ($user->role === 'client') ? 'العميل ' . $user->name : ($user->name . ' (نيابة عن العميل)');

        // Notify assigned staff & dept manager (excluding acting client)
        $recipients = $task->users->pluck('id')->toArray();
        if ($task->department && $task->department->manager_id) {
            $recipients[] = $task->department->manager_id;
        }
        $recipients = array_unique(array_filter($recipients));

        foreach ($recipients as $uid) {
            if ((int)$uid === (int)$user->id) {
                continue; // Skip self-notification
            }
            NotificationModel::create([
                'user_id' => $uid,
                'type' => 'status_change',
                'title' => 'تم اعتماد المهمة بنجاح',
                'message' => 'قام ' . $actorName . ' باعتماد المهمة: ' . $task->title,
                'notifiable_type' => Task::class,
                'notifiable_id' => $task->id
            ]);
        }

        return response()->json(['status' => 'success', 'message' => 'تمت الموافقة والاعتماد بنجاح', 'data' => $task]);
    }
}
