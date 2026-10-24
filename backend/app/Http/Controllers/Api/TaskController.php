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
use App\Models\Department;
use App\Models\Deal;
use App\Services\EmailNotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $query = Task::with(['deal.attachments.uploader', 'department', 'subCategory', 'users', 'subtasks.users', 'subtasks.attachments', 'attachments', 'customFieldValues.field', 'notes.user', 'parent'])->latest();

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

        // By default, only retrieve top-level/main tasks so subtasks do not clutter the board
        if ($request->filled('task_type') && in_array(strtolower($request->get('task_type')), ['partials', 'partial', 'subtasks'])) {
            $query->whereNotNull('parent_id');
        } else {
            // Strictly main tasks only! Subtasks are eagerly loaded inside their parent task's subtasks relation
            $query->whereNull('parent_id');
        }

        $tasks = $query->get();

        $isRestricted = $user && in_array(strtolower($user->role), ['employee', 'department_manager', 'department manager']) && !$user->hasRole('super_admin') && !$user->hasRole('admin');
        if ($isRestricted) {
            $tasks->transform(function($t) {
                $t->client_price = 0;
                $t->employee_price = 0;
                $t->company_margin = 0;
                if ($t->deal) {
                    $t->deal->total_price = 0;
                    $t->deal->paid_amount = 0;
                    $t->deal->calculated_total = 0;
                    $t->deal->calculated_paid = 0;
                    $t->deal->remaining_balance = 0;
                    $t->deal->discount_value = 0;
                    $t->deal->sales_commission_value = 0;
                    $t->deal->unsetRelation('payments');
                }
                return $t;
            });
        }

        $isClient = $user && $user->role === 'client';
        if ($isClient) {
            $tasks->transform(function($t) {
                $t->employee_price = 0;
                $t->company_margin = 0;
                if ($t->users) {
                    foreach ($t->users as $u) {
                        $u->name = 'مسؤول في النظام';
                        $u->email = '';
                    }
                }
                if ($t->subtasks) {
                    foreach ($t->subtasks as $st) {
                        if ($st->users) {
                            foreach ($st->users as $su) {
                                $su->name = 'مسؤول في النظام';
                                $su->email = '';
                            }
                        }
                    }
                }
                if ($t->notes) {
                    foreach ($t->notes as $n) {
                        if ($n->user) {
                            $n->user->name = ($n->user->role === 'client') ? 'العميل' : 'مسؤول';
                            $n->user->email = '';
                        }
                    }
                }
                return $t;
            });
        }

        return response()->json($tasks);
    }

    public function store(Request $request)
    {
        if ($request->has('dates_not_specified')) {
            $val = $request->input('dates_not_specified');
            $request->merge([
                'dates_not_specified' => filter_var($val, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false
            ]);
        }

        if ($request->has('is_standalone')) {
            $val = $request->input('is_standalone');
            $request->merge([
                'is_standalone' => filter_var($val, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false
            ]);
        }

        if ($request->has('user_ids') && is_string($request->input('user_ids'))) {
            $decoded = json_decode($request->input('user_ids'), true);
            $request->merge(['user_ids' => is_array($decoded) ? $decoded : []]);
        }

        if ($request->has('assigned_user_ids') && is_string($request->input('assigned_user_ids'))) {
            $decoded = json_decode($request->input('assigned_user_ids'), true);
            $request->merge(['assigned_user_ids' => is_array($decoded) ? $decoded : []]);
        }

        if ($request->has('custom_fields') && is_string($request->input('custom_fields'))) {
            $decoded = json_decode($request->input('custom_fields'), true);
            $request->merge(['custom_fields' => is_array($decoded) ? $decoded : []]);
        }

        foreach (['deal_id', 'department_id', 'sub_category_id', 'parent_id', 'client_id'] as $nullableId) {
            if ($request->has($nullableId) && ($request->input($nullableId) === 'null' || $request->input($nullableId) === '')) {
                $request->merge([$nullableId => null]);
            }
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'scope' => 'nullable|string',
            'deal_id' => 'nullable|exists:deals,id',
            'client_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'sub_category_id' => 'nullable|exists:sub_categories,id',
            'parent_id' => 'nullable|exists:tasks,id',
            'priority' => 'required|in:low,medium,high,urgent',
            'status' => 'required|in:new,todo,in_progress,content_creator,in_review,client_review,client_feedback,done,completed,approved,cancelled',
            'due_date' => 'nullable|date',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'shooting_date' => 'nullable|date',
            'delivery_date' => 'nullable|date',
            'dates_not_specified' => 'nullable|boolean',
            'is_standalone' => 'nullable|boolean',
            'estimated_hours' => 'nullable|integer',
            'client_price' => 'nullable|numeric|min:0',
            'employee_price' => 'nullable|numeric|min:0',
            'user_ids' => 'nullable|array',
            'user_ids.*' => 'integer|exists:users,id',
            'assigned_user_ids' => 'nullable|array',
            'assigned_user_ids.*' => 'integer|exists:users,id',
            'attachments' => 'nullable|array',
            'attachments.*' => 'file|max:20480',
            'files' => 'nullable|array',
            'files.*' => 'file|max:20480',
            'custom_fields' => 'nullable|array'
        ]);

        $clientPrice = (float) ($validated['client_price'] ?? 0);
        $employeePrice = (float) ($validated['employee_price'] ?? 0);
        $margin = max(0, $clientPrice - $employeePrice);

        $isStandalone = $validated['is_standalone'] ?? empty($validated['deal_id']);

        $clientId = $validated['client_id'] ?? null;
        if (!empty($validated['deal_id']) && empty($clientId)) {
            $clientId = Deal::where('id', $validated['deal_id'])->value('client_id');
        }

        $task = Task::create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? '',
            'scope' => $validated['scope'] ?? null,
            'deal_id' => $validated['deal_id'] ?? null,
            'client_id' => $clientId,
            'department_id' => $validated['department_id'] ?? null,
            'sub_category_id' => $validated['sub_category_id'] ?? null,
            'parent_id' => $validated['parent_id'] ?? null,
            'priority' => $validated['priority'],
            'status' => $validated['status'],
            'due_date' => $validated['due_date'] ?? null,
            'start_date' => $validated['start_date'] ?? null,
            'end_date' => $validated['end_date'] ?? null,
            'shooting_date' => $validated['shooting_date'] ?? null,
            'delivery_date' => $validated['delivery_date'] ?? null,
            'dates_not_specified' => !empty($validated['dates_not_specified']),
            'is_standalone' => (bool)$isStandalone,
            'estimated_hours' => $validated['estimated_hours'] ?? 0,
            'client_price' => $clientPrice,
            'employee_price' => $employeePrice,
            'company_margin' => $margin,
        ]);

        $uploadedFiles = $request->file('attachments') ?: ($request->file('files') ?: []);
        if (!empty($uploadedFiles)) {
            foreach ($uploadedFiles as $file) {
                $origName = $file->getClientOriginalName();
                $mimeType = $file->getClientMimeType();
                $path = $file->store('tasks', 'public');
                $type = str_contains($mimeType, 'image') ? 'image' : (str_contains($mimeType, 'video') ? 'video' : 'document');
                TaskAttachment::create([
                    'task_id' => $task->id,
                    'file_path' => $path,
                    'file_type' => $type,
                    'file_name' => $origName,
                    'file_size' => $file->getSize(),
                    'uploaded_by' => Auth::id()
                ]);
            }
        }

        $assignedIds = !empty($validated['user_ids']) ? $validated['user_ids'] : (!empty($validated['assigned_user_ids']) ? $validated['assigned_user_ids'] : []);
        if (!empty($assignedIds)) {
            $task->users()->sync($assignedIds);

            // Send notification to assigned employees (excluding current acting user)
            $currentUserId = auth()->id();
            foreach ($assignedIds as $uid) {
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

        // Sync financial totals with parent deal if task is attached to a deal
        if ($task->deal_id) {
            $task->deal?->syncFinancialTotals();
        }

        return response()->json(['status' => 'success', 'data' => $task->load(['users', 'subCategory', 'attachments', 'customFieldValues.field'])], 201);
    }

    public function show($id)
    {
        $task = Task::with(['deal.attachments.uploader', 'department', 'subCategory', 'parent', 'subtasks.users', 'users', 'attachments', 'notes.user', 'customFieldValues.field'])->findOrFail($id);
        $user = Auth::user();
        $isRestricted = $user && in_array(strtolower($user->role), ['employee', 'department_manager', 'department manager']) && !$user->hasRole('super_admin') && !$user->hasRole('admin');
        if ($isRestricted) {
            $task->client_price = 0;
            $task->employee_price = 0;
            $task->company_margin = 0;
            if ($task->deal) {
                $task->deal->total_price = 0;
                $task->deal->paid_amount = 0;
                $task->deal->calculated_total = 0;
                $task->deal->calculated_paid = 0;
                $task->deal->remaining_balance = 0;
                $task->deal->discount_value = 0;
                $task->deal->sales_commission_value = 0;
                $task->deal->unsetRelation('payments');
            }
        }
        $isClient = $user && $user->role === 'client';
        if ($isClient) {
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

        return response()->json($task);
    }

    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $oldStatus = $task->status;

        if ($request->has('user_ids') && is_string($request->input('user_ids'))) {
            $decoded = json_decode($request->input('user_ids'), true);
            $request->merge(['user_ids' => is_array($decoded) ? $decoded : []]);
        }

        if ($request->has('custom_fields') && is_string($request->input('custom_fields'))) {
            $decoded = json_decode($request->input('custom_fields'), true);
            $request->merge(['custom_fields' => is_array($decoded) ? $decoded : []]);
        }

        if ($request->has('assigned_user_ids') && is_string($request->input('assigned_user_ids'))) {
            $decoded = json_decode($request->input('assigned_user_ids'), true);
            $request->merge(['assigned_user_ids' => is_array($decoded) ? $decoded : []]);
        }

        if ($request->has('dates_not_specified')) {
            $val = $request->input('dates_not_specified');
            $request->merge([
                'dates_not_specified' => filter_var($val, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false
            ]);
        }

        if ($request->has('is_standalone')) {
            $val = $request->input('is_standalone');
            $request->merge([
                'is_standalone' => filter_var($val, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false
            ]);
        }

        foreach (['deal_id', 'department_id', 'sub_category_id', 'client_id'] as $nullableId) {
            if ($request->has($nullableId) && ($request->input($nullableId) === 'null' || $request->input($nullableId) === '')) {
                $request->merge([$nullableId => null]);
            }
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'scope' => 'nullable|string',
            'deal_id' => 'nullable|exists:deals,id',
            'client_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'sub_category_id' => 'nullable|exists:sub_categories,id',
            'priority' => 'required|in:low,medium,high,urgent',
            'status' => 'nullable|in:new,todo,in_progress,content_creator,in_review,client_review,client_feedback,done,completed,approved,cancelled',
            'due_date' => 'nullable|date',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'shooting_date' => 'nullable|date',
            'delivery_date' => 'nullable|date',
            'dates_not_specified' => 'nullable|boolean',
            'is_standalone' => 'nullable|boolean',
            'estimated_hours' => 'nullable|integer',
            'client_price' => 'nullable|numeric|min:0',
            'employee_price' => 'nullable|numeric|min:0',
            'user_ids' => 'nullable|array',
            'user_ids.*' => 'integer|exists:users,id',
            'assigned_user_ids' => 'nullable|array',
            'assigned_user_ids.*' => 'integer|exists:users,id',
            'attachments' => 'nullable|array',
            'attachments.*' => 'file|max:20480',
            'files' => 'nullable|array',
            'files.*' => 'file|max:20480',
            'custom_fields' => 'nullable|array'
        ]);

        $clientPrice = (float) ($validated['client_price'] ?? $task->client_price);
        $employeePrice = (float) ($validated['employee_price'] ?? $task->employee_price);
        $margin = max(0, $clientPrice - $employeePrice);
        $newStatus = $validated['status'] ?? $task->status;

        $user = Auth::user();
        $isManagerOrAdmin = $this->canReopenCompletedTask($user);

        // Employee cannot alter task priority
        $priority = $validated['priority'];
        if (!$isManagerOrAdmin && $task->priority !== $priority) {
            $priority = $task->priority; // Keep existing priority
        }

        // Only Manager, Admin, Super Admin, or Department Manager can reopen or move completed tasks back
        $completedStatuses = ['done', 'completed', 'approved'];
        if (in_array($oldStatus, $completedStatuses) && !in_array($newStatus, $completedStatuses) && !$this->canReopenCompletedTask($user)) {
            return response()->json([
                'status' => 'error',
                'message' => 'المهمة مكتملة، ولا يمكن إرجاعها لحالة سابقة، يقتصر ذلك على المدير، الأدمن، السوبر أدمن، أو مدير القسم.'
            ], 403);
        }

        $clientId = $validated['client_id'] ?? $task->client_id;
        $oldDealId = $task->deal_id;
        $targetDealId = array_key_exists('deal_id', $validated) ? $validated['deal_id'] : $task->deal_id;
        if ($targetDealId && empty($clientId)) {
            $clientId = Deal::where('id', $targetDealId)->value('client_id');
        }

        $task->update([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? $task->description,
            'scope' => $validated['scope'] ?? $task->scope,
            'deal_id' => $targetDealId,
            'client_id' => $clientId,
            'department_id' => array_key_exists('department_id', $validated) ? $validated['department_id'] : $task->department_id,
            'sub_category_id' => array_key_exists('sub_category_id', $validated) ? $validated['sub_category_id'] : $task->sub_category_id,
            'priority' => $priority,
            'status' => $newStatus,
            'due_date' => array_key_exists('due_date', $validated) ? $validated['due_date'] : $task->due_date,
            'start_date' => array_key_exists('start_date', $validated) ? $validated['start_date'] : $task->start_date,
            'end_date' => array_key_exists('end_date', $validated) ? $validated['end_date'] : $task->end_date,
            'shooting_date' => array_key_exists('shooting_date', $validated) ? $validated['shooting_date'] : $task->shooting_date,
            'delivery_date' => array_key_exists('delivery_date', $validated) ? $validated['delivery_date'] : $task->delivery_date,
            'dates_not_specified' => array_key_exists('dates_not_specified', $validated) ? (bool)$validated['dates_not_specified'] : $task->dates_not_specified,
            'is_standalone' => array_key_exists('is_standalone', $validated) ? (bool)$validated['is_standalone'] : $task->is_standalone,
            'estimated_hours' => $validated['estimated_hours'] ?? $task->estimated_hours,
            'client_price' => $clientPrice,
            'employee_price' => $employeePrice,
            'company_margin' => $margin,
        ]);

        $assignedIds = !empty($validated['user_ids']) ? $validated['user_ids'] : (!empty($validated['assigned_user_ids']) ? $validated['assigned_user_ids'] : null);
        if ($assignedIds !== null) {
            $task->users()->sync($assignedIds);
        }

        $uploadedFiles = $request->file('attachments') ?: ($request->file('files') ?: []);
        if (!empty($uploadedFiles)) {
            foreach ($uploadedFiles as $file) {
                $origName = $file->getClientOriginalName();
                $mimeType = $file->getClientMimeType();
                $path = $file->store('tasks', 'public');
                $type = str_contains($mimeType, 'image') ? 'image' : (str_contains($mimeType, 'video') ? 'video' : 'document');
                TaskAttachment::create([
                    'task_id' => $task->id,
                    'file_path' => $path,
                    'file_type' => $type,
                    'file_name' => $origName,
                    'file_size' => $file->getSize(),
                    'uploaded_by' => Auth::id()
                ]);
            }
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

        // Sync financial totals with deal if task belongs to a deal or changed deals
        if ($oldDealId && (int)$oldDealId !== (int)$task->deal_id) {
            Deal::find($oldDealId)?->syncFinancialTotals();
        }
        if ($task->deal_id) {
            $task->deal?->syncFinancialTotals();
        }

        return response()->json(['status' => 'success', 'data' => $task->load(['users', 'subCategory', 'attachments', 'customFieldValues.field'])]);
    }

    public function updateStatus(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $oldStatus = $task->status;

        $request->validate([
            'status' => 'required|in:new,todo,in_progress,content_creator,in_review,client_review,client_feedback,done,completed,approved,cancelled'
        ]);

        $newStatus = $request->status;

        // Restriction: Once completed, only Manager, Admin, Super Admin, or Department Manager can move it back
        $completedStatuses = ['done', 'completed', 'approved'];
        if (in_array($oldStatus, $completedStatuses) && !in_array($newStatus, $completedStatuses)) {
            $user = Auth::user();
            if (!$this->canReopenCompletedTask($user)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'المهمة مكتملة، ولا يمكن إرجاعها لحالة سابقة، يقتصر ذلك على المدير، الأدمن، السوبر أدمن، أو مدير القسم.'
                ], 403);
            }
        }

        $task->update(['status' => $newStatus]);

        if ($oldStatus !== $newStatus) {
            $this->notifyTaskStatusChange($task, $oldStatus, $newStatus);
        }

        return response()->json(['status' => 'success', 'data' => $task]);
    }

    public function updatePriority(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $user = Auth::user();
        if (!$this->canReopenCompletedTask($user)) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح بتعديل أولوية المهمة، تقتصر الصلاحية على مدير القسم والإدارة.'
            ], 403);
        }

        $request->validate([
            'priority' => 'required|in:low,medium,high,urgent'
        ]);

        $task->update(['priority' => $request->priority]);

        return response()->json(['status' => 'success', 'data' => $task]);
    }

    /**
     * Check if the authenticated user has permission to reopen or move completed tasks back to prior statuses.
     * Allowed: super_admin, admin, manager, department_manager
     */
    protected function canReopenCompletedTask($user): bool
    {
        if (!$user) {
            return false;
        }

        $allowedRoles = [
            'super_admin',
            'admin',
            'manager',
            'department_manager'
        ];

        $role = strtolower(trim(str_replace(' ', '_', $user->role ?? '')));
        if (in_array($role, $allowedRoles)) {
            return true;
        }

        foreach ($allowedRoles as $roleSlug) {
            if ($user->hasRole($roleSlug)) {
                return true;
            }
        }

        try {
            if (\App\Models\Department::where('manager_id', $user->id)->exists()) {
                return true;
            }
        } catch (\Throwable $e) {}

        return false;
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

        if ($request->has('user_ids') && is_string($request->input('user_ids'))) {
            $decoded = json_decode($request->input('user_ids'), true);
            $request->merge(['user_ids' => is_array($decoded) ? $decoded : []]);
        }

        $request->validate([
            'user_ids' => 'nullable|array',
            'user_ids.*' => 'integer|exists:users,id'
        ]);

        $currentUser = Auth::user();
        $isSuperOrAdmin = $currentUser && (in_array($currentUser->role, ['super_admin', 'admin', 'Super Admin']) || $currentUser->hasRole('super_admin') || $currentUser->hasRole('admin'));
        $isDeptManager = $currentUser && (in_array($currentUser->role, ['department_manager', 'Department Manager']) || $currentUser->hasRole('department_manager') || ($task->department_id && $currentUser->department_id == $task->department_id));

        if (!$isSuperOrAdmin && !$isDeptManager) {
            return response()->json(['message' => 'غير مصرح للموظف بتعديل إسناد المهمة أو إزالة نفسه منها'], 403);
        }

        $userIds = $request->input('user_ids', []) ?? [];

        // Check if assigning any user that is on hold
        if (!empty($userIds)) {
            $holdUsers = User::whereIn('id', $userIds)->where('is_hold', true)->pluck('name')->toArray();
            if (!empty($holdUsers)) {
                return response()->json(['message' => 'لا يمكن إسناد المهمة لموظف موقوف مؤقتاً (Hold): ' . implode(', ', $holdUsers)], 422);
            }
        }

        // If Department Manager: can only assign members from his department
        if (!$isSuperOrAdmin && $isDeptManager && $currentUser->department_id) {
            $deptUserIds = User::where('department_id', $currentUser->department_id)->pluck('id')->toArray();
            foreach ($userIds as $uid) {
                if (!in_array($uid, $deptUserIds)) {
                    return response()->json(['message' => 'يمكن لمدير القسم إسناد المهمة فقط لأعضاء فريقه بالقسم'], 403);
                }
            }
        }

        $task->users()->sync($userIds);

        $currentUserId = auth()->id();
        foreach ($userIds as $uid) {
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
        $task = Task::with(['users', 'department', 'deal'])->findOrFail($id);
        $request->validate([
            'note' => 'required|string'
        ]);

        $sender = Auth::user();
        $senderId = $sender ? $sender->id : auth()->id();

        $note = TaskNote::create([
            'task_id' => $task->id,
            'user_id' => $senderId,
            'note' => $request->note
        ]);

        // Collect all stakeholders to notify (triggering realtime sound chime & notification):
        // 1. Assigned staff members
        $recipientIds = $task->users->pluck('id')->toArray();

        // 2. Deal creator & Sales person (if task is attached to a deal)
        if ($task->deal) {
            if ($task->deal->created_by) {
                $recipientIds[] = $task->deal->created_by;
            }
            if ($task->deal->sales_person_id) {
                $recipientIds[] = $task->deal->sales_person_id;
            }
        }

        // 3. Department manager(s)
        $deptId = $task->department_id ?? $task->deal?->department_id;
        $deptManagersFound = false;
        if ($deptId) {
            $deptMgrId = Department::where('id', $deptId)->value('manager_id');
            if ($deptMgrId) {
                $recipientIds[] = $deptMgrId;
                $deptManagersFound = true;
            }
            $deptMgrUsers = User::where('department_id', $deptId)
                ->whereIn('role', ['department_manager', 'Department Manager'])
                ->pluck('id')
                ->toArray();
            if (!empty($deptMgrUsers)) {
                $recipientIds = array_merge($recipientIds, $deptMgrUsers);
                $deptManagersFound = true;
            }
        }

        // If no department manager exists for this task, notify Super Admins as fallback management
        if (!$deptManagersFound) {
            $superAdminIds = User::where('role', 'super_admin')->pluck('id')->toArray();
            $recipientIds = array_merge($recipientIds, $superAdminIds);
        }

        // 4. If this is a subtask, notify parent task assignees
        if ($task->parent_id) {
            $parent = Task::with('users')->find($task->parent_id);
            if ($parent) {
                $recipientIds = array_merge($recipientIds, $parent->users->pluck('id')->toArray());
            }
        }

        // 5. Previous commenters on this task (thread participants)
        $prevCommenters = TaskNote::where('task_id', $task->id)->pluck('user_id')->toArray();
        $recipientIds = array_merge($recipientIds, $prevCommenters);

        // 6. Extract @mentions (e.g., @name or @id)
        preg_match_all('/@([a-zA-Z0-9_\-\.\s]+)/', $request->note, $matches);
        if (!empty($matches[1])) {
            foreach ($matches[1] as $mentionedName) {
                $mUser = User::where('name', 'like', '%' . trim($mentionedName) . '%')->first();
                if ($mUser) {
                    $recipientIds[] = $mUser->id;
                }
            }
        }

        // Exclude the sender themselves
        $recipientIds = array_values(array_diff(array_unique(array_filter($recipientIds)), [(int)$senderId]));

        foreach ($recipientIds as $uid) {
            $targetUser = User::find($uid);
            if (!$targetUser) continue;

            $notifTitle = 'تعليق جديد على المهمة: ' . $task->title;
            $notifMessage = ($sender ? $sender->name : 'مستخدم') . ': ' . Str::limit($request->note, 120);

            NotificationModel::create([
                'user_id' => $uid,
                'type' => 'comment',
                'title' => $notifTitle,
                'message' => $notifMessage,
                'notifiable_type' => Task::class,
                'notifiable_id' => $task->id
            ]);

            try {
                EmailNotificationService::sendNotificationEmail(
                    $targetUser,
                    'تعليق جديد على المهمة (' . $task->title . ')',
                    'أضاف ' . ($sender ? $sender->name : 'زميلك') . ' تعليقاً جديداً على المهمة',
                    "المهمة: {$task->title}\nالكاتب: " . ($sender ? $sender->name : '') . "\nالتعليق:\n\"{$request->note}\""
                );
            } catch (\Throwable $e) {
                // Ignore email network failures so the in-app notification & sound play instantly
            }
        }

        $note->load('user');
        if ($sender && $sender->role === 'client') {
            if ($note->user) {
                $note->user->name = 'العميل';
                $note->user->email = '';
            }
        }

        return response()->json(['status' => 'success', 'data' => $note], 201);
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

        $path = $file->store('tasks', 'public');

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
        $isClient = Auth::user() && Auth::user()->role === 'client';

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
                    'description' => $isClient ? 'تم تحديث النشاط' : $desc,
                    'user_name' => $isClient ? 'مسؤول في النظام' : ($entry->user_name ?? 'مستخدم'),
                    'created_at' => $entry->created_at ?? now()->toDateTimeString()
                ]);
            }
        } catch (\Exception $e) {}

        // 3. Notes / Comments
        foreach ($task->notes as $note) {
            $author = $isClient ? (($note->user && $note->user->role === 'client') ? 'العميل' : 'مسؤول') : ($note->user ? $note->user->name : 'مستخدم');
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
            $uploader = $isClient ? 'مسؤول في النظام' : ($att->uploader ? $att->uploader->name : 'مستخدم');
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
            'status' => 'new',
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
            $path = $file->store('tasks', 'public');
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
        $authUser = Auth::user();
        if (!$authUser || !$authUser->isSuperAdmin()) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بحذف المهام الفرعية. عمليات الحذف في النظام مقتصرة حصرياً على السوبر أدمن (Super Admin).'
            ], 403);
        }

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
        $authUser = Auth::user();
        if (!$authUser || !$authUser->isSuperAdmin()) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بحذف المهام. عمليات الحذف في النظام مقتصرة حصرياً على السوبر أدمن (Super Admin).'
            ], 403);
        }

        $task = Task::find($id);
        if (!$task) {
            return response()->json(['message' => 'المهمة غير موجودة'], 404);
        }

        DB::beginTransaction();
        try {
            // Delete notifications related to this task
            NotificationModel::where('notifiable_type', Task::class)
                ->where('notifiable_id', $task->id)
                ->delete();

            // Detach users
            $task->users()->detach();

            // Delete subtasks if any
            $subtasks = Task::where('parent_id', $task->id)->get();
            foreach ($subtasks as $subtask) {
                NotificationModel::where('notifiable_type', Task::class)
                    ->where('notifiable_id', $subtask->id)
                    ->delete();
                $subtask->users()->detach();
                $subtask->delete();
            }

            $dealId = $task->deal_id;
            $task->delete();
            DB::commit();

            if ($dealId) {
                Deal::find($dealId)?->syncFinancialTotals();
            }

            return response()->json([
                'status' => 'success',
                'message' => 'تم حذف المهمة بنجاح'
            ]);
        } catch (\Throwable $e) {
            DB::rollBack();
            Log::error('Task deletion failed: ' . $e->getMessage());
            return response()->json([
                'status' => 'error',
                'message' => 'تعذر حذف المهمة لوجود ارتباطات في النظام: ' . $e->getMessage()
            ], 422);
        }
    }
}