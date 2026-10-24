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
        $deals = Deal::where('client_id', $user->id)->with(['payments', 'tasks', 'attachments.uploader'])->latest()->get();
        $totalBilled = 0;
        $totalPaid = 0;

        foreach ($deals as $deal) {
            $deal->syncFinancialTotals();
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
        // Standalone client tasks
        $standaloneBilled = (float) Task::where('client_id', $user->id)
            ->whereNull('deal_id')
            ->whereNull('parent_id')
            ->where('status', '!=', 'cancelled')
            ->sum('client_price');
        $totalBilled += $standaloneBilled;
        $remainingBalance = max(0, $totalBilled - $totalPaid);

        // 3. Client Main Tasks (deals tasks + standalone client tasks)
        $dealIds = $deals->pluck('id');
        $tasks = Task::where(function($q) use ($dealIds, $user) {
                if ($dealIds->isNotEmpty()) {
                    $q->whereIn('deal_id', $dealIds);
                }
                $q->orWhere('client_id', $user->id);
            })
            ->whereNull('parent_id')
            ->with(['attachments', 'notes.user', 'subCategory', 'subtasks.users', 'subtasks.attachments', 'subtasks.notes.user', 'users', 'deal.attachments.uploader'])
            ->latest()
            ->get();

        // Privacy masking for client: mask employee names as 'مسؤول في النظام' and comments as 'مسؤول' / 'العميل'
        foreach ($tasks as $task) {
            $task->employee_price = 0;
            $task->company_margin = 0;
            if ($task->users) {
                foreach ($task->users as $u) {
                    $u->name = 'مسؤول في النظام';
                    $u->email = '';
                }
            }
            if ($task->subtasks) {
                foreach ($task->subtasks as $st) {
                    if ($st->users) {
                        foreach ($st->users as $su) {
                            $su->name = 'مسؤول في النظام';
                            $su->email = '';
                        }
                    }
                }
            }
            if ($task->notes) {
                foreach ($task->notes as $n) {
                    if ($n->user) {
                        $n->user->name = ($n->user->role === 'client') ? 'العميل' : 'مسؤول';
                        $n->user->email = '';
                    }
                }
            }
        }

        return response()->json([
            'status' => 'success',
            'data' => [
                'client_name' => $user->name,
                'client_email' => $user->email,
                'is_vip' => (bool) $user->is_vip,
                'client_category' => $user->client_category ?? ($user->is_vip ? 'vip' : 'normal'),
                'client_category_label' => $user->client_category_label,
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

        // Send notification to department manager, assigned staff & task creator (excluding the acting client)
        $recipients = $task->users->pluck('id')->toArray();
        if ($task->created_by) {
            $recipients[] = $task->created_by;
        }

        $deptId = $task->department_id ?? $task->deal?->department_id;
        if ($deptId) {
            $deptMgrId = \App\Models\Department::where('id', $deptId)->value('manager_id');
            if ($deptMgrId) {
                $recipients[] = $deptMgrId;
            }
            $deptMgrUsers = \App\Models\User::where('department_id', $deptId)
                ->whereIn('role', ['department_manager', 'Department Manager'])
                ->pluck('id')
                ->toArray();
            $recipients = array_merge($recipients, $deptMgrUsers);
        }

        $recipients = array_values(array_diff(array_unique(array_filter($recipients)), [(int)$user->id]));

        foreach ($recipients as $uid) {
            $targetUser = \App\Models\User::find($uid);
            if (!$targetUser) continue;

            NotificationModel::create([
                'user_id' => $uid,
                'type' => 'client_note',
                'title' => 'ملاحظة وتعديلات جديدة من العميل',
                'message' => 'أضاف العميل ' . $user->name . ' طلب تعديل على المهمة: ' . $task->title,
                'notifiable_type' => Task::class,
                'notifiable_id' => $task->id
            ]);

            try {
                \App\Services\EmailNotificationService::sendNotificationEmail(
                    $targetUser,
                    'ملاحظات ومراجعة جديدة من العميل (' . $task->title . ')',
                    'أضاف العميل ' . $user->name . ' ملاحظات وطلب تعديلات على المخرج',
                    "المهمة: {$task->title}\nالعميل: {$user->name}\nالملاحظة:\n\"{$validated['note']}\""
                );
            } catch (\Throwable $e) {}
        }

        $note->load('user');
        if ($note->user) {
            $note->user->name = 'العميل';
            $note->user->email = '';
        }

        return response()->json(['status' => 'success', 'data' => $note], 201);
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
            $targetUser = \App\Models\User::find($uid);
            if (!$targetUser) continue;

            NotificationModel::create([
                'user_id' => $uid,
                'type' => 'status_change',
                'title' => 'تم اعتماد المهمة بنجاح',
                'message' => 'قام ' . $actorName . ' باعتماد المهمة: ' . $task->title,
                'notifiable_type' => Task::class,
                'notifiable_id' => $task->id
            ]);

            \App\Services\EmailNotificationService::sendNotificationEmail(
                $targetUser,
                'تم اعتماد واستلام المخرج (' . $task->title . ')',
                'قام ' . $actorName . ' باعتماد المهمة والمخرج رسمياً',
                "المهمة: {$task->title}\nتم الاعتماد بنجاح وجاري استكمال باقي بنود المشروع."
            );
        }

        return response()->json(['status' => 'success', 'message' => 'تمت الموافقة والاعتماد بنجاح', 'data' => $task]);
    }
}
