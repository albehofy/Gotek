<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\TaskAttachment;
use App\Models\TaskNote;
use App\Models\TaskCustomField;
use App\Models\TaskCustomFieldValue;
use App\Models\NotificationModel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $query = Task::with(['deal', 'department', 'subCategory', 'users', 'subtasks', 'attachments', 'customFieldValues.field', 'notes.user'])->latest();

        // Scope filtering based on role
        if ($user->role === 'employee') {
            $query->whereHas('users', function($q) use ($user) {
                $q->where('users.id', $user->id);
            });
        } elseif (in_array($user->role, ['department_manager', 'Department Manager']) && $user->department_id) {
            $query->where(function($q) use ($user) {
                $q->where('department_id', $user->department_id)
                  ->orWhereHas('subCategory', function($subQ) use ($user) {
                      $subQ->where('department_id', $user->department_id);
                  });
            });
        } elseif ($user->role === 'client') {
            $query->whereHas('deal', function($q) use ($user) {
                $q->where('client_id', $user->id);
            });
        }

        if ($request->filled('deal_id')) {
            $query->where('deal_id', $request->deal_id);
        }
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Return parent tasks only for main board views, subtasks nested
        if ($request->get('parents_only', 'true') === 'true') {
            $query->whereNull('parent_id');
        }

        $tasks = $query->get();
        return response()->json($tasks);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'scope' => 'nullable|string',
            'deal_id' => 'nullable|exists:deals,id',
            'department_id' => 'nullable|exists:departments,id',
            'sub_category_id' => 'nullable|exists:sub_categories,id',
            'parent_id' => 'nullable|exists:tasks,id',
            'priority' => 'required|in:low,medium,high,urgent',
            'status' => 'required|in:new,in_progress,content_creator,in_review,client_feedback,done,cancelled',
            'estimated_hours' => 'nullable|integer',
            'client_price' => 'nullable|numeric|min:0',
            'employee_price' => 'nullable|numeric|min:0',
            'user_ids' => 'nullable|array',
            'custom_fields' => 'nullable|array'
        ]);

        $clientPrice = (float) ($validated['client_price'] ?? 0);
        $employeePrice = (float) ($validated['employee_price'] ?? 0);
        $margin = max(0, $clientPrice - $employeePrice);

        $task = Task::create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? '',
            'scope' => $validated['scope'] ?? null,
            'deal_id' => $validated['deal_id'] ?? null,
            'department_id' => $validated['department_id'] ?? null,
            'sub_category_id' => $validated['sub_category_id'] ?? null,
            'parent_id' => $validated['parent_id'] ?? null,
            'priority' => $validated['priority'],
            'status' => $validated['status'],
            'estimated_hours' => $validated['estimated_hours'] ?? 0,
            'client_price' => $clientPrice,
            'employee_price' => $employeePrice,
            'company_margin' => $margin,
        ]);

        if (!empty($validated['user_ids'])) {
            $task->users()->sync($validated['user_ids']);

            // Send notification to assigned employees
            foreach ($validated['user_ids'] as $uid) {
                NotificationModel::create([
                    'user_id' => $uid,
                    'type' => 'assignment',
                    'title' => 'تم إسناد مهمة جديدة لك',
                    'message' => 'تم إسناد المهمة: ' . $task->title,
                    'notifiable_type' => Task::class,
                    'notifiable_id' => $task->id
                ]);
            }
        }

        // Custom fields handling
        if (!empty($validated['custom_fields'])) {
            foreach ($validated['custom_fields'] as $cfId => $cfVal) {
                if ($cfVal !== null && $cfVal !== '') {
                    TaskCustomFieldValue::create([
                        'task_id' => $task->id,
                        'custom_field_id' => $cfId,
                        'value' => is_array($cfVal) ? json_encode($cfVal) : (string) $cfVal
                    ]);
                }
            }
        }

        return response()->json(['status' => 'success', 'data' => $task->load(['users', 'subCategory', 'attachments', 'customFieldValues.field'])], 201);
    }

    public function show($id)
    {
        $task = Task::with(['deal', 'department', 'subCategory', 'parent', 'subtasks.users', 'users', 'attachments', 'notes.user', 'customFieldValues.field'])->findOrFail($id);
        return response()->json($task);
    }

    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'scope' => 'nullable|string',
            'deal_id' => 'nullable|exists:deals,id',
            'department_id' => 'nullable|exists:departments,id',
            'sub_category_id' => 'nullable|exists:sub_categories,id',
            'priority' => 'required|in:low,medium,high,urgent',
            'status' => 'required|in:new,in_progress,content_creator,in_review,client_feedback,done,cancelled',
            'estimated_hours' => 'nullable|integer',
            'client_price' => 'nullable|numeric|min:0',
            'employee_price' => 'nullable|numeric|min:0',
            'user_ids' => 'nullable|array',
            'custom_fields' => 'nullable|array'
        ]);

        $clientPrice = (float) ($validated['client_price'] ?? $task->client_price);
        $employeePrice = (float) ($validated['employee_price'] ?? $task->employee_price);
        $margin = max(0, $clientPrice - $employeePrice);

        $task->update([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? $task->description,
            'scope' => $validated['scope'] ?? $task->scope,
            'deal_id' => $validated['deal_id'] ?? $task->deal_id,
            'department_id' => $validated['department_id'] ?? $task->department_id,
            'sub_category_id' => $validated['sub_category_id'] ?? $task->sub_category_id,
            'priority' => $validated['priority'],
            'status' => $validated['status'],
            'estimated_hours' => $validated['estimated_hours'] ?? $task->estimated_hours,
            'client_price' => $clientPrice,
            'employee_price' => $employeePrice,
            'company_margin' => $margin,
        ]);

        if (isset($validated['user_ids'])) {
            $task->users()->sync($validated['user_ids']);
        }

        if (!empty($validated['custom_fields'])) {
            foreach ($validated['custom_fields'] as $cfId => $cfVal) {
                TaskCustomFieldValue::updateOrCreate(
                    ['task_id' => $task->id, 'custom_field_id' => $cfId],
                    ['value' => is_array($cfVal) ? json_encode($cfVal) : (string) $cfVal]
                );
            }
        }

        return response()->json(['status' => 'success', 'data' => $task->load(['users', 'subCategory', 'attachments', 'customFieldValues.field'])]);
    }

    public function updateStatus(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $request->validate([
            'status' => 'required|in:new,in_progress,content_creator,in_review,client_feedback,done,cancelled'
        ]);

        $task->update(['status' => $request->status]);

        // Notify assigned staff of status change
        foreach ($task->users as $u) {
            NotificationModel::create([
                'user_id' => $u->id,
                'type' => 'status_change',
                'title' => 'تغيير حالة المهمة',
                'message' => 'تم تغيير حالة المهمة (' . $task->title . ') إلى: ' . $task->status,
                'notifiable_type' => Task::class,
                'notifiable_id' => $task->id
            ]);
        }

        return response()->json(['status' => 'success', 'data' => $task]);
    }

    public function assignMembers(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $request->validate([
            'user_ids' => 'required|array'
        ]);

        $task->users()->sync($request->user_ids);

        foreach ($request->user_ids as $uid) {
            NotificationModel::create([
                'user_id' => $uid,
                'type' => 'assignment',
                'title' => 'تم إسناد المهمة',
                'message' => 'تم إسناد المهمة: ' . $task->title,
                'notifiable_type' => Task::class,
                'notifiable_id' => $task->id
            ]);
        }

        return response()->json(['status' => 'success', 'data' => $task->load('users')]);
    }

    // --- Task Notes & @Mentions ---
    public function addNote(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $request->validate([
            'note' => 'required|string'
        ]);

        $note = TaskNote::create([
            'task_id' => $task->id,
            'user_id' => Auth::id(),
            'note' => $request->note
        ]);

        // Extract @mentions (e.g., @name or @id)
        preg_match_all('/@([a-zA-Z0-9_\-\.\s]+)/', $request->note, $matches);
        if (!empty($matches[1])) {
            foreach ($matches[1] as $mentionedName) {
                $user = User::where('name', 'like', '%' . trim($mentionedName) . '%')->first();
                if ($user) {
                    NotificationModel::create([
                        'user_id' => $user->id,
                        'type' => 'mention',
                        'title' => 'تمت إشارتك في تعليق',
                        'message' => Auth::user()->name . ' أشار إليك في المهمة: ' . $task->title,
                        'notifiable_type' => Task::class,
                        'notifiable_id' => $task->id
                    ]);
                }
            }
        }

        return response()->json(['status' => 'success', 'data' => $note->load('user')], 201);
    }

    // --- Task Attachments & Inline Image Upload ---
    public function addAttachment(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $request->validate([
            'file' => 'required|file|max:20480', // max 20MB
        ]);

        $file = $request->file('file');
        $originalName = $file->getClientOriginalName();
        $mimeType = $file->getClientMimeType();
        $size = $file->getSize();

        $path = $file->store('task_attachments', 'public');

        $type = str_contains($mimeType, 'image') ? 'image' : (str_contains($mimeType, 'video') ? 'video' : 'document');

        $attachment = TaskAttachment::create([
            'task_id' => $task->id,
            'file_path' => $path,
            'file_type' => $type,
            'file_name' => $originalName,
            'file_size' => $size,
            'uploaded_by' => Auth::id()
        ]);

        return response()->json(['status' => 'success', 'data' => $attachment], 201);
    }

    // --- Custom Fields Metadata API ---
    public function getCustomFields()
    {
        $fields = TaskCustomField::all();
        return response()->json(['status' => 'success', 'data' => $fields]);
    }

    public function storeCustomField(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'field_type' => 'required|in:text,number,select,date,boolean',
            'options' => 'nullable|array',
            'is_required' => 'boolean'
        ]);

        $field = TaskCustomField::create($validated);
        return response()->json(['status' => 'success', 'data' => $field], 201);
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return response()->json(['message' => 'تم حذف المهمة بنجاح']);
    }
}