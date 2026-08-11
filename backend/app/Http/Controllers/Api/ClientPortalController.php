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
        }
        $remainingBalance = max(0, $totalBilled - $totalPaid);

        // 3. Client Tasks (completed & in-progress)
        $dealIds = $deals->pluck('id');
        $tasks = Task::whereIn('deal_id', $dealIds)
            ->with(['attachments', 'notes.user', 'subCategory'])
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

        $validated = $request->validate([
            'note' => 'required|string'
        ]);

        $note = TaskNote::create([
            'task_id' => $task->id,
            'user_id' => $user->id,
            'note' => $validated['note']
        ]);

        // Update task status to client_feedback if client leaves note
        $task->update(['status' => 'client_feedback']);

        // Send notification to department manager & assigned staff
        $assignedUsers = $task->users;
        foreach ($assignedUsers as $assigned) {
            NotificationModel::create([
                'user_id' => $assigned->id,
                'type' => 'client_note',
                'title' => 'ملاحظة جديدة من العميل',
                'message' => 'أضاف العميل ' . $user->name . ' ملاحظة على المهمة: ' . $task->title,
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

        $deal = Deal::where('id', $task->deal_id)->where('client_id', $user->id)->first();
        if (!$deal && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح لك بالموافقة على هذه المهمة'], 403);
        }

        $task->update(['status' => 'approved']);

        // Notify assigned staff & dept manager
        foreach ($task->users as $assigned) {
            NotificationModel::create([
                'user_id' => $assigned->id,
                'type' => 'status_change',
                'title' => 'تمت الموافقة على المهمة',
                'message' => 'وافق العميل ' . $user->name . ' على المهمة: ' . $task->title,
                'notifiable_type' => Task::class,
                'notifiable_id' => $task->id
            ]);
        }

        return response()->json(['status' => 'success', 'message' => 'تمت الموافقة على المهمة بنجاح', 'data' => $task]);
    }
}
