<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\User;
use App\Models\TaskNote;
use App\Models\Attachment;
use App\Events\TaskUpdated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Notifications\TaskAssignedNotification;

/**
 * @group إدارة المهام
 */
class TaskController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $query = Task::with(['users', 'internalProject', 'deal.client'])->latest();

        // If client, filter tasks belonging to their deals
        if ($user->role === 'client') {
            $query->whereHas('deal', function($q) use ($user) {
                $q->where('client_id', $user->id);
            });
        }
        // If employee, filter tasks assigned to them or their department
        elseif ($user->role === 'employee') {
            $query->where(function($q) use ($user) {
                $q->whereHas('users', function($qu) use ($user) {
                    $qu->where('users.id', $user->id);
                })->orWhere('department_id', $user->department_id);
            });
        }
        // If department manager, filter tasks in their department
        elseif ($user->role === 'department_manager') {
            $query->where('department_id', $user->department_id);
        }

        $tasks = $query->get();
        return response()->json($tasks);
    }

    public function store(Request $request) 
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'internal_project_id' => 'nullable|exists:internal_projects,id',
            'deal_id' => 'nullable|exists:deals,id',
            'assigned_to' => 'nullable|array',
            'assigned_to.*' => 'exists:users,id',
            'department_id' => 'required|exists:departments,id',
            'priority' => 'nullable|in:low,medium,high,urgent',
            'client_price' => 'nullable|numeric|min:0',
            'employee_price' => 'nullable|numeric|min:0',
        ]);

        $taskData = $request->except('assigned_to');
        $taskData['user_id'] = Auth::id(); // Creator of task
        $taskData['status'] = 'todo';

        $task = Task::create($taskData);

        if ($request->filled('assigned_to')) {
            $task->users()->sync($request->assigned_to);

            $employees = User::whereIn('id', $request->assigned_to)->get();
            foreach ($employees as $employee) {
                $employee->notify(new TaskAssignedNotification($task));
            }
        }

        // Broadcast websocket event
        broadcast(new TaskUpdated($task->load(['users', 'deal'])))->toOthers();

        return response()->json(['status' => 'success', 'data' => $task->load('users')]);
    }

    public function assignMembers(Request $request, $id)
    {
        $request->validate([
            'user_ids' => 'required|array',
            'user_ids.*' => 'exists:users,id'
        ]);

        $task = Task::findOrFail($id);
        
        // ربط الموظفين الجدد
        $task->users()->sync($request->user_ids);
        
        // إرسال إشعارات Real-time للناس الجديدة
        $users = User::whereIn('id', $request->user_ids)->get();
        foreach ($users as $user) {
            $user->notify(new TaskAssignedNotification($task));
        }

        // Broadcast websocket event
        broadcast(new TaskUpdated($task->load(['users', 'deal'])))->toOthers();

        return response()->json(['message' => 'تم تعيين الموظفين بنجاح وإرسال التنبيهات']);
    }

    public function show($id)
    {
        $task = Task::with(['users', 'internalProject', 'deal.client', 'checklists', 'notes.user', 'attachments'])->findOrFail($id);
        
        // Check permissions
        $user = Auth::user();
        if ($user->role === 'client' && (!$task->deal || $task->deal->client_id !== $user->id)) {
            return response()->json(['message' => 'غير مسموح لك بعرض هذه المهمة'], 403);
        }

        return response()->json($task);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate(['status' => 'required|in:todo,in_progress,in_review,changes_requested,approved,done,cancelled']);
        $task = Task::findOrFail($id);

        if (Auth::user()->role === 'employee') {
            $isAssigned = $task->users()->where('users.id', Auth::id())->exists();
            if (!$isAssigned && $task->department_id !== Auth::user()->department_id) {
                return response()->json(['message' => 'غير مسموح لك بتعديل هذه المهمة'], 403);
            }
        }

        $task->update(['status' => $request->status]);

        // Broadcast websocket event
        broadcast(new TaskUpdated($task->load(['users', 'deal'])))->toOthers();

        return response()->json(['status' => 'success', 'message' => 'تم تحديث الحالة', 'data' => $task]);
    }

    public function addAttachment(Request $request, $id)
    {
        $request->validate([
            'file' => 'required|file|max:51200', // Max 50MB
        ]);

        $task = Task::findOrFail($id);

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            // Store inside public disk
            $path = $file->store('attachments', 'public');

            $attachment = $task->attachments()->create([
                'file_path' => '/storage/' . $path,
                'file_name' => $file->getClientOriginalName(),
                'file_type' => $file->getClientMimeType(),
                'file_size' => $file->getSize(),
                'uploaded_by' => Auth::id()
            ]);

            // Broadcast websocket event
            broadcast(new TaskUpdated($task->load(['users', 'deal'])))->toOthers();

            return response()->json([
                'status' => 'success',
                'message' => 'تم رفع الملف بنجاح',
                'data' => $attachment
            ]);
        }

        return response()->json(['message' => 'لم يتم إرسال ملف'], 400);
    }

    public function addNote(Request $request, $id)
    {
        $request->validate([
            'note' => 'required|string',
        ]);

        $task = Task::findOrFail($id);

        $note = TaskNote::create([
            'task_id' => $task->id,
            'user_id' => Auth::id(),
            'note' => $request->note
        ]);

        // Broadcast websocket event
        broadcast(new TaskUpdated($task->load(['users', 'deal'])))->toOthers();

        return response()->json([
            'status' => 'success',
            'message' => 'تم إضافة الملاحظة بنجاح',
            'data' => $note->load('user')
        ]);
    }

    public function getNotes($id)
    {
        $task = Task::findOrFail($id);
        $notes = TaskNote::with('user')->where('task_id', $task->id)->latest()->get();
        return response()->json($notes);
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        if (!in_array(Auth::user()->role, ['admin', 'manager', 'department_manager'])) {
            return response()->json(['message' => 'ليس لديك صلاحية الحذف'], 403);
        }
        $task->delete();
        return response()->json(['message' => 'تم حذف المهمة']);
    }
}