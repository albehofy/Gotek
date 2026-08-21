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
        $query = Task::with(['deal', 'department', 'subCategory', 'users', 'subtasks.users', 'subtasks.attachments', 'attachments', 'customFieldValues.field', 'notes.user', 'parent'])->latest();

        // Scope filtering based on role
        if ($user->role === 'employee') {
            $query->whereHas('users', function($q) use ($user) {
                $q->where('users.id', $user->id);
            });
        } elseif (in_array($user->role, ['department_manager', 'Department Manager'])) {
            $deptId = $user->department_id;
            if (!$deptId) {
                $dept = \App\Models\Department::where('manager_id', $user->id)->first();
                if ($dept) {
                    $deptId = $dept->id;
                }
            }
            if ($deptId) {
                $query->where(function($q) use ($deptId, $user) {
                    $q->where('department_id', $deptId)
                      ->orWhereHas('subCategory', function($subQ) use ($deptId) {
                          $subQ->where('department_id', $deptId);
                      })
                      ->orWhereHas('users', function($uQ) use ($user) {
                          $uQ->where('users.id', $user->id);
                      });
                });
            }
        } elseif ($user->role === 'client') {
            $query->whereHas('deal', function($q) use ($user) {
                $q->where('client_id', $user->id);
            });
        }
        // super_admin & admin: NO filter applied -> retrieves all tasks in all departments

        if ($request->filled('deal_id')) {
            $query->where('deal_id', $request->deal_id);
        }
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Return parent tasks only if explicitly requested
        if ($request->has('parents_only') && ($request->get('parents_only') === 'true' || $request->get('parents_only') === true)) {
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

            // Send notification to assigned employees (excluding current acting user)
            $currentUserId = auth()->id();
            foreach ($validated['user_ids'] as $uid) {
                if ($currentUserId && (int)$uid === (int)$currentUserId) {
                    continue;
                }
                $targetUser = User::find($uid);
                if ($targetUser && in_array(strtolower($targetUser->role), ['client'])) {
                    continue;
                }
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
        $oldStatus = $task->status;

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
        $newStatus = $validated['status'];

        $task->update([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? $task->description,
            'scope' => $validated['scope'] ?? $task->scope,
            'deal_id' => $validated['deal_id'] ?? $task->deal_id,
            'department_id' => $validated['department_id'] ?? $task->department_id,
            'sub_category_id' => $validated['sub_category_id'] ?? $task->sub_category_id,
            'priority' => $validated['priority'],
            'status' => $newStatus,
            'estimated_hours' => $validated['estimated_hours'] ?? $task->estimated_hours,
            'client_price' => $clientPrice,
            'employee_price' => $employeePrice,
            'company_margin' => $margin,
        ]);

        if (isset($validated['user_ids'])) {
            $task->users()->sync($validated['user_ids']);
        }

        if ($oldStatus !== $newStatus) {
            $this->notifyTaskStatusChange($task, $oldStatus, $newStatus);
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
        $oldStatus = $task->status;

        $request->validate([
            'status' => 'required|in:new,in_progress,content_creator,in_review,client_feedback,done,cancelled'
        ]);

        $newStatus = $request->status;
        $task->update(['status' => $newStatus]);

        if ($oldStatus !== $newStatus) {
            $this->notifyTaskStatusChange($task, $oldStatus, $newStatus);
        }

        return response()->json(['status' => 'success', 'data' => $task]);
    }

    private function notifyTaskStatusChange(Task $task, $oldStatus, $newStatus)
    {
        if ($oldStatus === $newStatus) {
            return;
        }

        $statusLabels = [
            'new'             => 'جديد',
            'in_progress'     => 'قيد التنفيذ',
            'content_creator' => 'صناعة المحتوى',
            'in_review'       => 'قيد المراجعة',
            'client_feedback' => 'ملاحظات العميل',
            'done'            => 'مكتمل',
            'cancelled'       => 'ملغاة'
        ];

        $newStatusName = $statusLabels[$newStatus] ?? $newStatus;

        $recipientIds = $task->users->pluck('id')->toArray();
        if (isset($task->created_by) && $task->created_by) {
            $recipientIds[] = $task->created_by;
        }
        if (isset($task->user_id) && $task->user_id) {
            $recipientIds[] = $task->user_id;
        }
        if (isset($task->client_id) && $task->client_id) {
            $recipientIds[] = $task->client_id;
        }

        $recipientIds = array_unique(array_filter($recipientIds));
        $currentUserId = auth()->id();

        foreach ($recipientIds as $uid) {
            if ($currentUserId && (int)$uid === (int)$currentUserId) {
                continue;
            }
            $targetUser = User::find($uid);
            if ($targetUser && in_array(strtolower($targetUser->role), ['client'])) {
                continue;
            }

            NotificationModel::create([
                'user_id' => $uid,
                'type' => 'status_change',
                'title' => 'تحديث حالة المهمة',
                'message' => 'تم تغيير حالة المهمة (' . $task->title . ') إلى: ' . $newStatusName,
                'notifiable_type' => Task::class,
                'notifiable_id' => $task->id
            ]);
        }
    }

    public function assignMembers(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $request->validate([
            'user_ids' => 'required|array'
        ]);

        $task->users()->sync($request->user_ids);

        $currentUserId = auth()->id();
        foreach ($request->user_ids as $uid) {
            if ($currentUserId && (int)$uid === (int)$currentUserId) {
                continue;
            }
            $targetUser = User::find($uid);
            if ($targetUser && in_array(strtolower($targetUser->role), ['client'])) {
                continue;
            }
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
            $currentUserId = auth()->id();
            foreach ($matches[1] as $mentionedName) {
                $user = User::where('name', 'like', '%' . trim($mentionedName) . '%')->first();
                if ($user && (int)$user->id !== (int)$currentUserId) {
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

        $userName = Auth::user() ? Auth::user()->name : 'مستخدم';
        $this->logActivity($task->id, "قام {$userName} برفع مرفق جديد: {$originalName}");

        return response()->json(['status' => 'success', 'data' => $attachment], 201);
    }

    public function deleteAttachment($id, $attachmentId)
    {
        $attachment = TaskAttachment::where('task_id', $id)->where('id', $attachmentId)->first();
        if (!$attachment) {
            return response()->json(['message' => 'المرفق غير موجود'], 404);
        }

        $fileName = $attachment->file_name ?? 'مرفق';
        if ($attachment->file_path && Storage::disk('public')->exists($attachment->file_path)) {
            Storage::disk('public')->delete($attachment->file_path);
        }
        $attachment->delete();

        $userName = Auth::user() ? Auth::user()->name : 'مستخدم';
        $this->logActivity($id, "قام {$userName} بحذف المرفق: {$fileName}");

        return response()->json(['status' => 'success', 'message' => 'تم حذف المرفق بنجاح']);
    }

    public function getActivity($id)
    {
        $task = Task::with(['notes.user', 'attachments.uploader', 'users'])->find($id);
        if (!$task) {
            return response()->json(['status' => 'error', 'message' => 'المهمة غير موجودة'], 404);
        }

        $items = collect([]);

        // 1. Task Creation Event
        $items->push([
            'id' => 'creation_' . $task->id,
            'type' => 'creation',
            'action_title' => 'إنشاء المهمة',
            'icon' => 'fa-circle-plus',
            'color' => '#818cf8',
            'description' => "تم إنشاء المهمة في النظام بعنوان: \"{$task->title}\"",
            'user_name' => 'نظام CRM',
            'created_at' => $task->created_at ? $task->created_at->toDateTimeString() : now()->toDateTimeString()
        ]);

        // 2. Activity Log DB Table entries
        try {
            $logEntries = \DB::table('activity_log')
                ->leftJoin('users', 'activity_log.causer_id', '=', 'users.id')
                ->where('subject_type', 'App\\Models\\Task')
                ->where('subject_id', $id)
                ->select('activity_log.*', 'users.name as user_name')
                ->get();

            foreach ($logEntries as $entry) {
                $type = 'general';
                $icon = 'fa-clock-rotate-left';
                $color = '#a855f7';
                $desc = $entry->description ?? '';

                if (str_contains($desc, 'حذف')) {
                    $type = 'delete';
                    $icon = 'fa-trash-can';
                    $color = '#f43f5e';
                } elseif (str_contains($desc, 'رفع') || str_contains($desc, 'مرفق')) {
                    $type = 'attachment';
                    $icon = 'fa-paperclip';
                    $color = '#06b6d4';
                } elseif (str_contains($desc, 'تعليق') || str_contains($desc, 'ملاحظة')) {
                    $type = 'note';
                    $icon = 'fa-comments';
                    $color = '#3b82f6';
                } elseif (str_contains($desc, 'حالة')) {
                    $type = 'status';
                    $icon = 'fa-bars-progress';
                    $color = '#f59e0b';
                } elseif (str_contains($desc, 'أعضاء') || str_contains($desc, 'إسناد')) {
                    $type = 'assignment';
                    $icon = 'fa-user-plus';
                    $color = '#10b981';
                }

                $items->push([
                    'id' => 'act_' . $entry->id,
                    'type' => $type,
                    'action_title' => 'تحديث نشاط',
                    'icon' => $icon,
                    'color' => $color,
                    'description' => $desc,
                    'user_name' => $entry->user_name ?? 'مستخدم',
                    'created_at' => $entry->created_at ?? now()->toDateTimeString()
                ]);
            }
        } catch (\Exception $e) {}

        // 3. Notes / Comments
        foreach ($task->notes as $note) {
            $author = $note->user ? $note->user->name : 'مستخدم';
            $items->push([
                'id' => 'note_' . $note->id,
                'type' => 'note',
                'action_title' => 'إضافة تعليق',
                'icon' => 'fa-comments',
                'color' => '#3b82f6',
                'description' => "قام {$author} بإضافة ملاحظة: \"{$note->note}\"",
                'user_name' => $author,
                'created_at' => $note->created_at ? $note->created_at->toDateTimeString() : now()->toDateTimeString()
            ]);
        }

        // 4. Attachments
        foreach ($task->attachments as $att) {
            $uploader = $att->uploader ? $att->uploader->name : 'مستخدم';
            $fileName = $att->file_name ?? 'مستند';
            $items->push([
                'id' => 'att_' . $att->id,
                'type' => 'attachment',
                'action_title' => 'رفع ملف',
                'icon' => 'fa-paperclip',
                'color' => '#06b6d4',
                'description' => "قام {$uploader} برفع المرفق: {$fileName}",
                'user_name' => $uploader,
                'created_at' => $att->created_at ? $att->created_at->toDateTimeString() : now()->toDateTimeString()
            ]);
        }

        // Sort descending by created_at timestamp & remove duplicate descriptions
        $unique = $items->unique(function ($i) {
            return $i['type'] . '_' . $i['description'];
        });

        $sorted = $unique->sortByDesc('created_at')->values()->all();

        return response()->json(['status' => 'success', 'data' => $sorted]);
    }

    private function logActivity($taskId, $description)
    {
        try {
            \DB::table('activity_log')->insert([
                'log_name' => 'task',
                'description' => $description,
                'subject_type' => 'App\\Models\\Task',
                'subject_id' => $taskId,
                'causer_type' => 'App\\Models\\User',
                'causer_id' => Auth::id() ?? 1,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        } catch (\Exception $e) {
            // ignore
        }
    }

    // --- Subtask Management API ---
    public function storeSubtask(Request $request, $parentId)
    {
        $parent = Task::findOrFail($parentId);
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'scope' => 'nullable|string',
            'priority' => 'nullable|in:low,medium,high,urgent',
            'file' => 'nullable|file|max:20480',
        ]);

        $subtask = Task::create([
            'title' => $request->title,
            'description' => $request->description ?? $request->scope ?? '',
            'scope' => $request->scope ?? $request->description ?? null,
            'parent_id' => $parent->id,
            'status' => 'todo',
            'priority' => $request->priority ?? $parent->priority ?? 'medium',
            'deal_id' => $parent->deal_id,
            'department_id' => $parent->department_id,
            'client_price' => 0,
            'employee_price' => 0,
        ]);

        // Process user_ids from array or JSON string (if sent via FormData)
        $userIds = $request->user_ids;
        if (is_string($userIds)) {
            $userIds = json_decode($userIds, true);
        }
        if (is_array($userIds) && count($userIds) > 0) {
            $subtask->users()->sync($userIds);
        }

        // Process file upload if provided
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $originalName = $file->getClientOriginalName();
            $mimeType = $file->getClientMimeType();
            $size = $file->getSize();
            $path = $file->store('task_attachments', 'public');
            $type = str_contains($mimeType, 'image') ? 'image' : (str_contains($mimeType, 'video') ? 'video' : 'document');

            TaskAttachment::create([
                'task_id' => $subtask->id,
                'file_path' => $path,
                'file_type' => $type,
                'file_name' => $originalName,
                'file_size' => $size,
                'uploaded_by' => Auth::id()
            ]);
        }

        $userName = Auth::user() ? Auth::user()->name : 'مستخدم';
        $this->logActivity($parent->id, "قام {$userName} بإضافة مهمة فرعية جديدة: {$subtask->title}");

        return response()->json(['status' => 'success', 'data' => $subtask->load(['users', 'attachments'])], 201);
    }

    public function toggleSubtask(Request $request, $id)
    {
        $subtask = Task::findOrFail($id);
        $newStatus = $subtask->status === 'done' ? 'new' : 'done';
        $subtask->update(['status' => $newStatus]);

        if ($subtask->parent_id) {
            $userName = Auth::user() ? Auth::user()->name : 'مستخدم';
            $stLabel = $newStatus === 'done' ? 'مكتملة' : 'قيد التنفيذ';
            $this->logActivity($subtask->parent_id, "قام {$userName} بتحديث حالة المهمة الفرعية ({$subtask->title}) إلى {$stLabel}");
        }

        return response()->json(['status' => 'success', 'data' => $subtask]);
    }

    public function deleteSubtask($id)
    {
        $subtask = Task::findOrFail($id);
        $parentId = $subtask->parent_id;
        $title = $subtask->title;
        $subtask->delete();

        if ($parentId) {
            $userName = Auth::user() ? Auth::user()->name : 'مستخدم';
            $this->logActivity($parentId, "قام {$userName} بحذف المهمة الفرعية: {$title}");
        }

        return response()->json(['status' => 'success', 'message' => 'تم حذف المهمة الفرعية بنجاح']);
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