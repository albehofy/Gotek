<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Deal;
use App\Models\User;
use App\Models\Task;
use App\Models\Department;
use App\Models\ClientPayment;
use App\Models\LedgerEntry;
use App\Models\NotificationModel;
use App\Models\Attachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{Auth, DB, Log, Storage};

class DealController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();

        $query = Deal::with(['client', 'creator', 'department', 'salesPerson', 'tasks.users', 'payments', 'attachments.uploader'])->latest();

        if ($user->role === 'client') {
            $query->where('client_id', $user->id);
        } elseif (in_array(strtolower($user->role), ['department_manager', 'department manager'])) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لمدير القسم بالاطلاع على الصفقات والعقود المالية.'
            ], 403);
        } elseif ($user->role === 'sales') {
            $query->where('sales_person_id', $user->id);
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('agreed_scope', 'like', "%{$search}%")
                  ->orWhereHas('client', function($cq) use ($search) {
                      $cq->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%")
                        ->orWhere('phone', 'like', "%{$search}%");
                  });
            });
        }

        $isEmployee = $user && $user->role === 'employee' && !$user->hasRole('super_admin') && !$user->hasRole('admin') && !$user->hasRole('department_manager');

        $perPage = $request->input('per_page', 15);
        $deals = $query->latest()->paginate($perPage);

        $deals->getCollection()->transform(function($deal) use ($isEmployee) {
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

            if ($isEmployee) {
                $deal->total_price = 0;
                $deal->paid_amount = 0;
                $deal->calculated_total = 0;
                $deal->calculated_paid = 0;
                $deal->remaining_balance = 0;
                $deal->sales_commission_value = 0;
                $deal->unsetRelation('payments');
            }

            return $deal;
        });

        return response()->json($deals);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        if ($user && in_array(strtolower($user->role), ['department_manager', 'department manager', 'employee', 'client'])) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لمدير القسم أو الموظف بإنشاء صفقات أو عقود مالية. تقتصر الصلاحية على السوبر أدمن والإدارة.'
            ], 403);
        }
        if ($request->has('tasks') && is_string($request->input('tasks'))) {
            $decoded = json_decode($request->input('tasks'), true);
            $request->merge(['tasks' => is_array($decoded) ? $decoded : []]);
        }

        if ($request->has('dates_not_specified')) {
            $val = $request->input('dates_not_specified');
            $request->merge([
                'dates_not_specified' => filter_var($val, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false
            ]);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'agreed_scope' => 'nullable|string',
            'reference_link' => 'nullable|string|max:1000',
            'deal_link' => 'nullable|string|max:1000',
            'attachment' => 'nullable|file|max:20480',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'shooting_date' => 'nullable|date',
            'delivery_date' => 'nullable|date',
            'dates_not_specified' => 'nullable|boolean',
            'client_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'sales_person_id' => 'nullable|exists:users,id',
            'sales_commission_type' => 'nullable|in:none,fixed,percentage',
            'sales_commission_value' => 'nullable|numeric|min:0',
            'discount_type' => 'nullable|in:none,fixed,percentage',
            'discount_value' => 'nullable|numeric|min:0',
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
            'payment_method' => 'nullable|in:cash,cash_hand,instapay,bank_transfer',
            'status' => 'nullable|string|in:pending,active,completed,cancelled,won,closed,in_progress',
            'tasks' => 'nullable|array',
            'tasks.*.id' => 'nullable',
            'tasks.*.title' => 'required|string|max:255',
            'tasks.*.description' => 'nullable|string',
            'tasks.*.department_id' => 'nullable',
            'tasks.*.client_price' => 'nullable|numeric|min:0',
            'tasks.*.employee_price' => 'nullable|numeric|min:0',
            'tasks.*.due_date' => 'nullable|date',
            'tasks.*.start_date' => 'nullable|date',
            'tasks.*.end_date' => 'nullable|date',
            'tasks.*.shooting_date' => 'nullable|date',
            'tasks.*.delivery_date' => 'nullable|date',
            'tasks.*.dates_not_specified' => 'nullable|boolean',
        ]);

        $dealData = $validated;
        unset($dealData['tasks'], $dealData['attachment']);
        if (!empty($validated['deal_link']) && empty($dealData['reference_link'])) {
            $dealData['reference_link'] = $validated['deal_link'];
        }
        unset($dealData['deal_link']);
        $dealData['created_by'] = Auth::id();
        $dealData['paid_amount'] = $dealData['paid_amount'] ?? 0;
        $dealData['status'] = $validated['status'] ?? 'pending';
        $dealData['discount_type'] = $validated['discount_type'] ?? 'none';
        $dealData['discount_value'] = (float)($validated['discount_value'] ?? 0);
        $dealData['sales_commission_type'] = $dealData['sales_commission_type'] ?? 'none';
        if ($dealData['sales_commission_type'] === 'none') {
            $dealData['sales_commission_value'] = 0;
        }

        if ($request->hasFile('attachment')) {
            $dealData['attachment_path'] = $request->file('attachment')->store('deals', 'public');
        }

        $deal = Deal::create($dealData);

        // Process Down Payment / Deposit if provided during deal creation
        $paidAmount = (float)($dealData['paid_amount'] ?? 0);
        if ($paidAmount > 0) {
            $paymentMethod = $request->input('payment_method', 'cash') ?: 'cash';

            if ($deal->status === 'pending') {
                $deal->update(['status' => 'active']);
            }

            if (!empty($deal->client_id)) {
                ClientPayment::create([
                    'deal_id' => $deal->id,
                    'client_id' => $deal->client_id,
                    'amount' => $paidAmount,
                    'payment_date' => now()->toDateString(),
                    'payment_method' => $paymentMethod,
                    'receipt_ref' => 'DEPOSIT-' . $deal->id,
                    'notes' => 'دفعة مقدمة / عربون عند إنشاء الصفقة: ' . $deal->title,
                    'created_by' => Auth::id()
                ]);

                LedgerEntry::create([
                    'date' => now()->toDateString(),
                    'type' => 'income',
                    'deal_id' => $deal->id,
                    'client_id' => $deal->client_id,
                    'department_id' => $deal->department_id,
                    'amount' => $paidAmount,
                    'payment_method' => $paymentMethod,
                    'description' => 'عربون / دفعة مقدمة لصفقة: ' . $deal->title,
                    'created_by' => Auth::id()
                ]);
            }

            $methodNames = [
                'cash' => 'نقدي (Cash)',
                'cash_hand' => 'نقداً باليد',
                'instapay' => 'إنستاباي (InstaPay)',
                'bank_transfer' => 'تحويل بنكي'
            ];
            $methodLabel = $methodNames[$paymentMethod] ?? $paymentMethod;

            $this->recordActivity(
                $deal->id,
                "تم تسجيل دفعة مقدمة (عربون) بقيمة " . number_format($paidAmount, 2) . " ج.م بواسطة " . ($user->name ?? 'المستخدم') . " (طريقة التحصيل: {$methodLabel})",
                'payment',
                [
                    'title' => 'تسجيل عربون مقدم',
                    'field' => 'payment',
                    'amount' => $paidAmount,
                    'payment_method' => $paymentMethod,
                    'payment_method_label' => $methodLabel,
                    'icon' => 'fa-money-bill-wave',
                    'color' => '#10b981'
                ]
            );
        }

        // Upload dedicated Deal Plan, Brief, Contract & Document files
        if ($request->hasFile('brief_file')) {
            $this->processDealFileUpload($request->file('brief_file'), $deal, 'brief', 'بريف العمل والمواصفات');
        }
        if ($request->hasFile('plan_file')) {
            $this->processDealFileUpload($request->file('plan_file'), $deal, 'plan', 'الخطة الشهرية المعتمدة (PDF)');
        }
        if ($request->hasFile('contract_file')) {
            $this->processDealFileUpload($request->file('contract_file'), $deal, 'contract', 'عقد الاتفاق الرسمي');
        }
        if ($request->hasFile('attachment')) {
            $this->processDealFileUpload($request->file('attachment'), $deal, 'contract', 'ملف العقد الرسمي');
        }
        if ($request->hasFile('documents')) {
            foreach ($request->file('documents') as $docFile) {
                $this->processDealFileUpload($docFile, $deal, 'document');
            }
        }
        if ($request->hasFile('deal_files')) {
            foreach ($request->file('deal_files') as $dFile) {
                $this->processDealFileUpload($dFile, $deal, 'document');
            }
        }

        $tasks = $request->tasks;
        if (is_string($tasks)) {
            $tasks = json_decode($tasks, true);
        }
        if (!empty($tasks) && is_array($tasks)) {
            foreach ($tasks as $idx => $tData) {
                if (empty($tData['title'])) continue;

                $targetDeptId = !empty($tData['department_id']) ? (int)$tData['department_id'] : $deal->department_id;
                $clientPrice = (float)($tData['client_price'] ?? 0);
                $employeePrice = (float)($tData['employee_price'] ?? 0);
                $margin = max(0, $clientPrice - $employeePrice);

                $taskDesc = !empty($tData['description']) ? $tData['description'] : ($tData['scope'] ?? '');

                $newTask = Task::create([
                    'title' => $tData['title'],
                    'description' => $taskDesc,
                    'scope' => $taskDesc,
                    'deal_id' => $deal->id,
                    'client_id' => $deal->client_id,
                    'department_id' => $targetDeptId,
                    'client_price' => $clientPrice,
                    'employee_price' => $employeePrice,
                    'company_margin' => $margin,
                    'due_date' => $tData['due_date'] ?? null,
                    'start_date' => $tData['start_date'] ?? $deal->start_date ?? null,
                    'end_date' => $tData['end_date'] ?? $deal->end_date ?? null,
                    'shooting_date' => $tData['shooting_date'] ?? $deal->shooting_date ?? null,
                    'delivery_date' => $tData['delivery_date'] ?? $deal->delivery_date ?? null,
                    'dates_not_specified' => !empty($tData['dates_not_specified']) || (bool)$deal->dates_not_specified,
                    'status' => 'new',
                    'created_by' => Auth::id()
                ]);

                // Handle file upload for executive task if provided
                $taskFileKey = "task_file_{$idx}";
                if ($request->hasFile($taskFileKey)) {
                    $tFile = $request->file($taskFileKey);
                    $path = $tFile->store('tasks', 'public');
                    \App\Models\TaskAttachment::create([
                        'task_id' => $newTask->id,
                        'file_path' => $path,
                        'file_type' => str_contains($tFile->getClientMimeType(), 'image') ? 'image' : 'document',
                        'file_name' => $tFile->getClientOriginalName(),
                        'file_size' => $tFile->getSize(),
                        'uploaded_by' => Auth::id()
                    ]);
                }

                // Auto assign task to Department Manager
                if ($targetDeptId) {
                    $managerId = null;
                    $deptObj = Department::find($targetDeptId);
                    if ($deptObj && $deptObj->manager_id) {
                        $managerId = $deptObj->manager_id;
                    } else {
                        $managerUser = User::where('department_id', $targetDeptId)
                            ->whereIn('role', ['department_manager', 'Department Manager', 'manager'])
                            ->first();
                        if ($managerUser) {
                            $managerId = $managerUser->id;
                        }
                    }

                    if ($managerId) {
                        $newTask->users()->syncWithoutDetaching([$managerId]);

                        NotificationModel::create([
                            'user_id' => $managerId,
                            'type' => 'assignment',
                            'title' => 'مهمة جديدة مسندة إليك كمدير قسم',
                            'message' => 'تم إسناد المهمة "' . $newTask->title . '" من الصفقة "' . $deal->title . '" لك تلقائياً.',
                            'notifiable_type' => Task::class,
                            'notifiable_id' => $newTask->id
                        ]);
                    }
                }
            }
        }

        // Send notification to main department manager if deal assigned to department
        if ($deal->department_id && $deal->department?->manager_id && (int)$deal->department->manager_id !== (int)Auth::id()) {
            NotificationModel::create([
                'user_id' => $deal->department->manager_id,
                'type' => 'assignment',
                'title' => 'صفقة جديدة بقسمك',
                'message' => 'تم إسناد الصفقة الجديدة ' . $deal->title . ' لقسمك.',
                'notifiable_type' => Deal::class,
                'notifiable_id' => $deal->id
            ]);
        }

        $user = Auth::user();
        $this->recordActivity(
            $deal->id,
            "تم إنشاء الصفقة في النظام بواسطة " . ($user->name ?? 'المستخدم') . " بقيمة " . number_format((float)$deal->total_price, 2) . " ج.م",
            'creation',
            [
                'title' => 'إنشاء الصفقة والعقد',
                'field' => 'creation',
                'new' => (float)$deal->total_price,
                'status' => $deal->status,
                'icon' => 'fa-circle-plus',
                'color' => '#10b981'
            ]
        );

        return response()->json(['status' => 'success', 'data' => $deal->load(['client', 'department', 'salesPerson', 'tasks.users', 'tasks.attachments', 'attachments.uploader'])], 201);
    }

    public function show($id)
    {
        $user = Auth::user();
        $deal = Deal::with([
            'client',
            'creator',
            'department',
            'salesPerson',
            'tasks.users',
            'tasks.subtasks',
            'tasks.attachments',
            'tasks.notes.user',
            'payments',
            'attachments.uploader'
        ])->findOrFail($id);

        if ($user && in_array($user->role, ['department_manager', 'Department Manager'])) {
            return response()->json(['message' => 'غير مصرح لمدير القسم بالاطلاع على تفاصيل الصفقات والعقود المالية'], 403);
        }

        if ($user->role === 'client' && $deal->client_id !== $user->id) {
            return response()->json(['message' => 'غير مسموح لك بعرض هذه الصفقة'], 403);
        }

        $isEmployee = $user && $user->role === 'employee' && !$user->hasRole('super_admin') && !$user->hasRole('admin') && !$user->hasRole('department_manager');
        if ($isEmployee) {
            $deal->total_price = 0;
            $deal->paid_amount = 0;
            $deal->calculated_total = 0;
            $deal->calculated_paid = 0;
            $deal->remaining_balance = 0;
            $deal->sales_commission_value = 0;
            $deal->unsetRelation('payments');
        }

        return response()->json($deal);
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();
        if (!$this->canEditDeal($user)) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بتعديل بيانات الصفقة. صلاحية تعديل بيانات الصفقة والأسعار مقتصرة فقط على السوبر أدمن ومدير النظام.'
            ], 403);
        }

        $deal = Deal::findOrFail($id);

        if ($request->has('tasks') && is_string($request->input('tasks'))) {
            $decoded = json_decode($request->input('tasks'), true);
            $request->merge(['tasks' => is_array($decoded) ? $decoded : []]);
        }

        if ($request->has('dates_not_specified')) {
            $val = $request->input('dates_not_specified');
            $request->merge([
                'dates_not_specified' => filter_var($val, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false
            ]);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'agreed_scope' => 'nullable|string',
            'reference_link' => 'nullable|string|max:1000',
            'deal_link' => 'nullable|string|max:1000',
            'attachment' => 'nullable|file|max:20480',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'shooting_date' => 'nullable|date',
            'delivery_date' => 'nullable|date',
            'dates_not_specified' => 'nullable|boolean',
            'client_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'sales_person_id' => 'nullable|exists:users,id',
            'sales_commission_type' => 'nullable|in:none,fixed,percentage',
            'sales_commission_value' => 'nullable|numeric|min:0',
            'discount_type' => 'nullable|in:none,fixed,percentage',
            'discount_value' => 'nullable|numeric|min:0',
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
            'status' => 'required|string|in:pending,active,completed,cancelled,won,closed,in_progress',
            'tasks' => 'nullable|array',
            'tasks.*.id' => 'nullable',
            'tasks.*.title' => 'required|string|max:255',
            'tasks.*.description' => 'nullable|string',
            'tasks.*.department_id' => 'nullable',
            'tasks.*.client_price' => 'nullable|numeric|min:0',
            'tasks.*.employee_price' => 'nullable|numeric|min:0',
            'tasks.*.due_date' => 'nullable|date',
            'tasks.*.start_date' => 'nullable|date',
            'tasks.*.end_date' => 'nullable|date',
            'tasks.*.dates_not_specified' => 'nullable|boolean',
        ]);

        $data = $validated;
        unset($data['tasks'], $data['attachment']);
        if (!empty($validated['deal_link']) && empty($data['reference_link'])) {
            $data['reference_link'] = $validated['deal_link'];
        }
        unset($data['deal_link']);

        if (array_key_exists('sales_commission_type', $data)) {
            $data['sales_commission_type'] = $data['sales_commission_type'] ?? 'none';
            if ($data['sales_commission_type'] === 'none') {
                $data['sales_commission_value'] = 0;
            }
        }

        if (array_key_exists('discount_type', $data)) {
            $data['discount_type'] = $data['discount_type'] ?? 'none';
            if ($data['discount_type'] === 'none') {
                $data['discount_value'] = 0;
            }
        }

        if ($request->hasFile('attachment')) {
            $data['attachment_path'] = $request->file('attachment')->store('deals', 'public');
        }

        // Snapshot original deal fields before update for History & Audit logging
        $oldTitle = $deal->title;
        $oldTotalPrice = (float)$deal->total_price;
        $oldStatus = $deal->status;
        $oldDiscountType = $deal->discount_type;
        $oldDiscountValue = (float)$deal->discount_value;
        $oldCommissionType = $deal->sales_commission_type;
        $oldCommissionValue = (float)$deal->sales_commission_value;
        $oldClientId = (int)$deal->client_id;
        $oldSalesId = (int)$deal->sales_person_id;
        $oldDepartmentId = (int)$deal->department_id;
        $oldScope = $deal->agreed_scope;
        $oldStartDate = $deal->start_date ? $deal->start_date->format('Y-m-d') : null;
        $oldEndDate = $deal->end_date ? $deal->end_date->format('Y-m-d') : null;
        $oldDatesNotSpecified = (bool)$deal->dates_not_specified;

        $existingTasks = Task::where('deal_id', $deal->id)->whereNull('parent_id')->get()->keyBy('id');

        $deal->update($data);

        // Track and log field-by-field modifications in activity_log
        $changesCount = 0;

        // 1. Total Price Change (تعديل الأسعار)
        if (array_key_exists('total_price', $data) && (float)$data['total_price'] !== $oldTotalPrice) {
            $changesCount++;
            $newPrice = (float)$data['total_price'];
            $this->recordActivity(
                $deal->id,
                "تم تعديل السعر الإجمالي للصفقة من " . number_format($oldTotalPrice, 2) . " ج.م إلى " . number_format($newPrice, 2) . " ج.م بواسطة {$user->name}",
                'price_change',
                [
                    'title' => 'تعديل السعر الإجمالي للصفقة',
                    'old' => $oldTotalPrice,
                    'new' => $newPrice,
                    'icon' => 'fa-money-bill-wave',
                    'color' => '#10b981'
                ]
            );
        }

        // 2. Title Change
        if (array_key_exists('title', $data) && $data['title'] !== $oldTitle) {
            $changesCount++;
            $this->recordActivity(
                $deal->id,
                "تم تعديل عنوان الصفقة من \"{$oldTitle}\" إلى \"{$data['title']}\" بواسطة {$user->name}",
                'title_change',
                [
                    'title' => 'تعديل عنوان الصفقة',
                    'old' => $oldTitle,
                    'new' => $data['title'],
                    'icon' => 'fa-pen-to-square',
                    'color' => '#6366f1'
                ]
            );
        }

        // 3. Status Change
        if (array_key_exists('status', $data) && $data['status'] !== $oldStatus) {
            $changesCount++;
            $statusMap = [
                'pending' => 'قيد الانتظار',
                'active' => 'نشطة / سارية',
                'in_progress' => 'قيد التنفيذ',
                'completed' => 'مكتملة',
                'won' => 'تم التعاقد (Won)',
                'closed' => 'مغلقة',
                'cancelled' => 'ملغاة'
            ];
            $oldLabel = $statusMap[$oldStatus] ?? $oldStatus;
            $newLabel = $statusMap[$data['status']] ?? $data['status'];
            $this->recordActivity(
                $deal->id,
                "تم تغيير حالة الصفقة من \"{$oldLabel}\" إلى \"{$newLabel}\" بواسطة {$user->name}",
                'status_change',
                [
                    'title' => 'تغيير حالة الصفقة',
                    'old' => $oldLabel,
                    'new' => $newLabel,
                    'icon' => 'fa-arrows-rotate',
                    'color' => '#f59e0b'
                ]
            );
        }

        // 4. Discount Change
        if ((array_key_exists('discount_type', $data) && $data['discount_type'] !== $oldDiscountType) ||
            (array_key_exists('discount_value', $data) && (float)$data['discount_value'] !== $oldDiscountValue)) {
            $changesCount++;
            $oldDisc = ($oldDiscountType === 'percentage') ? ($oldDiscountValue . '%') : (($oldDiscountValue > 0) ? (number_format($oldDiscountValue, 2) . ' ج.م') : 'بدون خصم');
            $newDisc = ($data['discount_type'] === 'percentage') ? ($data['discount_value'] . '%') : (((float)($data['discount_value'] ?? 0) > 0) ? (number_format((float)$data['discount_value'], 2) . ' ج.م') : 'بدون خصم');
            $this->recordActivity(
                $deal->id,
                "تم تعديل خصم الصفقة من [{$oldDisc}] إلى [{$newDisc}] بواسطة {$user->name}",
                'discount_change',
                [
                    'title' => 'تعديل خصم العقد',
                    'old' => $oldDisc,
                    'new' => $newDisc,
                    'icon' => 'fa-tag',
                    'color' => '#ec4899'
                ]
            );
        }

        // 5. Sales Commission Change
        if ((array_key_exists('sales_commission_type', $data) && $data['sales_commission_type'] !== $oldCommissionType) ||
            (array_key_exists('sales_commission_value', $data) && (float)$data['sales_commission_value'] !== $oldCommissionValue)) {
            $changesCount++;
            $oldComm = ($oldCommissionType === 'percentage') ? ($oldCommissionValue . '%') : (($oldCommissionValue > 0) ? (number_format($oldCommissionValue, 2) . ' ج.م') : 'بدون عمولة');
            $newComm = ($data['sales_commission_type'] === 'percentage') ? ($data['sales_commission_value'] . '%') : (((float)($data['sales_commission_value'] ?? 0) > 0) ? (number_format((float)$data['sales_commission_value'], 2) . ' ج.م') : 'بدون عمولة');
            $this->recordActivity(
                $deal->id,
                "تم تعديل عمولة المبيعات من [{$oldComm}] إلى [{$newComm}] بواسطة {$user->name}",
                'commission_change',
                [
                    'title' => 'تعديل عمولة المبيعات',
                    'old' => $oldComm,
                    'new' => $newComm,
                    'icon' => 'fa-percent',
                    'color' => '#8b5cf6'
                ]
            );
        }

        // 6. Client Change
        if (array_key_exists('client_id', $data) && (int)$data['client_id'] !== $oldClientId) {
            $changesCount++;
            $oldClientName = User::find($oldClientId)?->name ?? 'غير محدد';
            $newClientName = User::find($data['client_id'])?->name ?? 'غير محدد';

            // Propagate client change to all tasks, subtasks, payments, and ledger entries of this deal
            $newCId = $data['client_id'];
            Task::where('deal_id', $deal->id)->update(['client_id' => $newCId]);
            $dealTaskIds = Task::where('deal_id', $deal->id)->pluck('id');
            if ($dealTaskIds->isNotEmpty()) {
                Task::whereIn('parent_id', $dealTaskIds)->update(['client_id' => $newCId]);
            }
            ClientPayment::where('deal_id', $deal->id)->update(['client_id' => $newCId]);
            LedgerEntry::where('deal_id', $deal->id)->update(['client_id' => $newCId]);

            $this->recordActivity(
                $deal->id,
                "تم تغيير عميل الصفقة من \"{$oldClientName}\" إلى \"{$newClientName}\" بواسطة {$user->name}",
                'client_change',
                [
                    'title' => 'تغيير العميل',
                    'old' => $oldClientName,
                    'new' => $newClientName,
                    'icon' => 'fa-user-tie',
                    'color' => '#06b6d4'
                ]
            );
        }

        // 7. Sales Person Change
        if (array_key_exists('sales_person_id', $data) && (int)$data['sales_person_id'] !== $oldSalesId) {
            $changesCount++;
            $oldSalesName = User::find($oldSalesId)?->name ?? 'لا يوجد';
            $newSalesName = User::find($data['sales_person_id'])?->name ?? 'لا يوجد';
            $this->recordActivity(
                $deal->id,
                "تم تغيير مسؤول المبيعات من \"{$oldSalesName}\" إلى \"{$newSalesName}\" بواسطة {$user->name}",
                'sales_change',
                [
                    'title' => 'تغيير مسؤول المبيعات',
                    'old' => $oldSalesName,
                    'new' => $newSalesName,
                    'icon' => 'fa-user-check',
                    'color' => '#3b82f6'
                ]
            );
        }

        // 8. Department Change
        if (array_key_exists('department_id', $data) && (int)$data['department_id'] !== $oldDepartmentId) {
            $changesCount++;
            $oldDeptName = Department::find($oldDepartmentId)?->name ?? 'عام';
            $newDeptName = Department::find($data['department_id'])?->name ?? 'عام';
            $this->recordActivity(
                $deal->id,
                "تم تغيير القسم المنفذ من \"{$oldDeptName}\" إلى \"{$newDeptName}\" بواسطة {$user->name}",
                'department_change',
                [
                    'title' => 'تغيير القسم المنفذ',
                    'old' => $oldDeptName,
                    'new' => $newDeptName,
                    'icon' => 'fa-sitemap',
                    'color' => '#14b8a6'
                ]
            );
        }

        // 9. Scope Change
        if (array_key_exists('agreed_scope', $data) && $data['agreed_scope'] !== $oldScope) {
            $changesCount++;
            $this->recordActivity(
                $deal->id,
                "تم تحديث بنود ونطاق العمل والمواصفات المتفق عليها بواسطة {$user->name}",
                'scope_change',
                [
                    'title' => 'تعديل نطاق العمل',
                    'icon' => 'fa-file-signature',
                    'color' => '#a855f7'
                ]
            );
        }

        // 10. Dates Change
        $newStartDate = $data['start_date'] ?? null;
        $newEndDate = $data['end_date'] ?? null;
        $newDatesNotSpec = !empty($data['dates_not_specified']);
        if ($newStartDate !== $oldStartDate || $newEndDate !== $oldEndDate || $newDatesNotSpec !== $oldDatesNotSpecified) {
            $changesCount++;
            $desc = $newDatesNotSpec
                ? "تم تعيين التواريخ الزمنية إلى 'غير محددة حالياً' بواسطة {$user->name}"
                : "تم تحديث الفترة الزمنية للصفقة (من {$newStartDate} إلى {$newEndDate}) بواسطة {$user->name}";
            $this->recordActivity(
                $deal->id,
                $desc,
                'dates_change',
                [
                    'title' => 'تعديل التواريخ الزمنية',
                    'icon' => 'fa-calendar-days',
                    'color' => '#64748b'
                ]
            );
        }

        // 11. Attachment Uploaded
        if ($request->hasFile('attachment')) {
            $changesCount++;
            $this->recordActivity(
                $deal->id,
                "تم رفع وتحديث ملف العقد / المرفق الخاص بالصفقة بواسطة {$user->name}",
                'attachment_change',
                [
                    'title' => 'تحديث مرفقات الصفقة',
                    'icon' => 'fa-paperclip',
                    'color' => '#0284c7'
                ]
            );
        }

        // Synchronize and update tasks inside this deal
        if ($request->has('tasks')) {
            $tasks = $request->tasks;
            if (is_string($tasks)) {
                $tasks = json_decode($tasks, true);
            }

            if (is_array($tasks)) {
                $keptTaskIds = [];

                foreach ($tasks as $idx => $tData) {
                    if (empty($tData['title'])) continue;

                    $targetDeptId = !empty($tData['department_id']) ? (int)$tData['department_id'] : $deal->department_id;
                    $clientPrice = (float)($tData['client_price'] ?? 0);
                    $employeePrice = (float)($tData['employee_price'] ?? 0);
                    $margin = max(0, $clientPrice - $employeePrice);

                    if (!empty($tData['id'])) {
                        // Update existing task
                        $existingTask = Task::where('deal_id', $deal->id)->find($tData['id']);
                        if ($existingTask) {
                            $oldTaskClientPrice = (float)$existingTask->client_price;
                            $oldTaskTitle = $existingTask->title;

                            $taskDesc = isset($tData['description']) && $tData['description'] !== '' 
                                ? $tData['description'] 
                                : (isset($tData['scope']) && $tData['scope'] !== '' ? $tData['scope'] : $existingTask->description);

                            $existingTask->update([
                                'title' => $tData['title'],
                                'description' => $taskDesc,
                                'scope' => $taskDesc,
                                'client_id' => $deal->client_id,
                                'department_id' => $targetDeptId,
                                'client_price' => $clientPrice,
                                'employee_price' => $employeePrice,
                                'company_margin' => $margin,
                                'due_date' => $tData['due_date'] ?? $existingTask->due_date,
                                'start_date' => $tData['start_date'] ?? $existingTask->start_date,
                                'end_date' => $tData['end_date'] ?? $existingTask->end_date,
                            ]);
                            Task::where('parent_id', $existingTask->id)->update(['client_id' => $deal->client_id]);
                            $keptTaskIds[] = $existingTask->id;
                            $targetTaskObj = $existingTask;

                            // Check if task price changed
                            if ($oldTaskClientPrice !== $clientPrice) {
                                $changesCount++;
                                $this->recordActivity(
                                    $deal->id,
                                    "تم تعديل سعر بند المهمة \"{$tData['title']}\" من " . number_format($oldTaskClientPrice, 2) . " ج.م إلى " . number_format($clientPrice, 2) . " ج.م بواسطة {$user->name}",
                                    'task_price_change',
                                    [
                                        'title' => 'تعديل سعر بند تنفيذي',
                                        'task_title' => $tData['title'],
                                        'old' => $oldTaskClientPrice,
                                        'new' => $clientPrice,
                                        'icon' => 'fa-file-invoice-dollar',
                                        'color' => '#10b981'
                                    ]
                                );
                            }
                        }
                    } else {
                        $taskDesc = !empty($tData['description']) ? $tData['description'] : ($tData['scope'] ?? '');

                        // Create newly added task
                        $newTask = Task::create([
                            'title' => $tData['title'],
                            'description' => $taskDesc,
                            'scope' => $taskDesc,
                            'deal_id' => $deal->id,
                            'client_id' => $deal->client_id,
                            'department_id' => $targetDeptId,
                            'client_price' => $clientPrice,
                            'employee_price' => $employeePrice,
                            'company_margin' => $margin,
                            'due_date' => $tData['due_date'] ?? null,
                            'start_date' => $tData['start_date'] ?? $deal->start_date ?? null,
                            'end_date' => $tData['end_date'] ?? $deal->end_date ?? null,
                            'dates_not_specified' => !empty($tData['dates_not_specified']) || (bool)$deal->dates_not_specified,
                            'status' => 'new',
                            'created_by' => Auth::id()
                        ]);
                        $keptTaskIds[] = $newTask->id;
                        $targetTaskObj = $newTask;

                        $changesCount++;
                        $this->recordActivity(
                            $deal->id,
                            "تمت إضافة بند/مهمة تنفيذية جديدة: \"{$tData['title']}\" بسعر عميل " . number_format($clientPrice, 2) . " ج.م بواسطة {$user->name}",
                            'task_added',
                            [
                                'title' => 'إضافة بند تنفيذي جديد',
                                'task_title' => $tData['title'],
                                'client_price' => $clientPrice,
                                'icon' => 'fa-plus-circle',
                                'color' => '#6366f1'
                            ]
                        );
                    }

                    // Check for file attachment for this task row
                    $taskFileKey = "task_file_{$idx}";
                    if (isset($targetTaskObj) && $request->hasFile($taskFileKey)) {
                        $tFile = $request->file($taskFileKey);
                        $path = $tFile->store('tasks', 'public');
                        \App\Models\TaskAttachment::create([
                            'task_id' => $targetTaskObj->id,
                            'file_path' => $path,
                            'file_type' => str_contains($tFile->getClientMimeType(), 'image') ? 'image' : 'document',
                            'file_name' => $tFile->getClientOriginalName(),
                            'file_size' => $tFile->getSize(),
                            'uploaded_by' => Auth::id()
                        ]);
                    }
                }

                // If explicit tasks list was submitted, remove tasks from this deal that were deleted in the UI
                $removedTasksQuery = Task::where('deal_id', $deal->id)->whereNull('parent_id');
                if (!empty($keptTaskIds)) {
                    $removedTasksQuery->whereNotIn('id', $keptTaskIds);
                }
                $removedTasks = $removedTasksQuery->get();

                    foreach ($removedTasks as $remTask) {
                        $changesCount++;
                        $this->recordActivity(
                            $deal->id,
                            "تم حذف البند/المهمة التنفيذية \"{$remTask->title}\" من الصفقة بواسطة {$user->name}",
                            'task_removed',
                            [
                                'title' => 'حذف بند تنفيذي',
                                'task_title' => $remTask->title,
                                'icon' => 'fa-trash-can',
                                'color' => '#f43f5e'
                            ]
                        );
                        // Delete subtasks first to maintain clean data integrity
                        Task::where('parent_id', $remTask->id)->delete();
                        $remTask->delete();
                    }
            }
        }

        // Sync financial totals so deal total price reflects the sum of its tasks
        $deal->syncFinancialTotals();

        // Upload dedicated Deal Plan, Brief, Contract & Document files if submitted
        if ($request->hasFile('brief_file')) {
            $this->processDealFileUpload($request->file('brief_file'), $deal, 'brief', 'بريف العمل والمواصفات');
        }
        if ($request->hasFile('plan_file')) {
            $this->processDealFileUpload($request->file('plan_file'), $deal, 'plan', 'الخطة الشهرية المعتمدة (PDF)');
        }
        if ($request->hasFile('contract_file')) {
            $this->processDealFileUpload($request->file('contract_file'), $deal, 'contract', 'عقد الاتفاق الرسمي');
        }
        if ($request->hasFile('attachment')) {
            $this->processDealFileUpload($request->file('attachment'), $deal, 'contract', 'ملف العقد الرسمي');
        }
        if ($request->hasFile('documents')) {
            foreach ($request->file('documents') as $docFile) {
                $this->processDealFileUpload($docFile, $deal, 'document');
            }
        }
        if ($request->hasFile('deal_files')) {
            foreach ($request->file('deal_files') as $dFile) {
                $this->processDealFileUpload($dFile, $deal, 'document');
            }
        }

        if ($changesCount === 0) {
            $this->recordActivity(
                $deal->id,
                "تم حفظ وتحديث بيانات الصفقة بواسطة {$user->name}",
                'general_update',
                [
                    'title' => 'تحديث بيانات الصفقة',
                    'icon' => 'fa-clock-rotate-left',
                    'color' => '#818cf8'
                ]
            );
        }

        return response()->json([
            'status' => 'success',
            'message' => 'تم تعديل بيانات الصفقة والمهام التنفيذية بنجاح',
            'data' => $deal->load(['client', 'department', 'salesPerson', 'tasks.users', 'tasks.attachments', 'payments', 'attachments.uploader'])
        ]);
    }

    public function destroy(Request $request, $id)
    {
        $user = Auth::user();
        if (!$this->isSuperAdmin($user)) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بحذف الصفقة. حذف الصفقات مقتصر حصرياً على السوبر أدمن (Super Admin) ولا يحق لمدير النظام حذف الصفقات.'
            ], 403);
        }

        $deal = Deal::findOrFail($id);
        $deleteFinancials = filter_var($request->query('delete_financials', $request->input('delete_financials', false)), FILTER_VALIDATE_BOOLEAN);

        DB::beginTransaction();
        try {
            if ($deleteFinancials) {
                // Delete payments and financial ledger entries associated with this deal
                ClientPayment::where('deal_id', $deal->id)->delete();
                LedgerEntry::where('deal_id', $deal->id)->delete();
            } else {
                // Unlink payments and financial ledger entries so company revenue and payroll remain intact
                ClientPayment::where('deal_id', $deal->id)->update(['deal_id' => null]);
                LedgerEntry::where('deal_id', $deal->id)->update(['deal_id' => null]);
            }

            // Delete associated subtasks first, then tasks
            $taskIds = Task::where('deal_id', $deal->id)->pluck('id');
            if ($taskIds->isNotEmpty()) {
                Task::whereIn('parent_id', $taskIds)->delete();
                Task::where('deal_id', $deal->id)->delete();
            }

            $deal->delete();
            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'تم حذف الصفقة بنجاح'
            ]);
        } catch (\Throwable $e) {
            DB::rollBack();
            Log::error('Deal destroy failed: ' . $e->getMessage(), ['exception' => $e]);
            return response()->json([
                'status' => 'error',
                'message' => 'تعذر حذف الصفقة: ' . $e->getMessage()
            ], 422);
        }
    }

    /**
     * Get Audit & Modification History for a Deal
     */
    public function history($id)
    {
        $user = Auth::user();
        $deal = Deal::with('creator')->findOrFail($id);

        if ($user->role === 'client' && $deal->client_id !== $user->id) {
            return response()->json(['message' => 'غير مصرح لك بعرض هذه الصفقة'], 403);
        }
        if (in_array($user->role, ['department_manager', 'Department Manager'])) {
            return response()->json(['message' => 'غير مصرح لمدير القسم بالاطلاع على تفاصيل الصفقات'], 403);
        }

        $activities = DB::table('activity_log')
            ->leftJoin('users', 'activity_log.causer_id', '=', 'users.id')
            ->where('activity_log.subject_type', Deal::class)
            ->where('activity_log.subject_id', $id)
            ->select(
                'activity_log.id',
                'activity_log.log_name',
                'activity_log.description',
                'activity_log.properties',
                'activity_log.created_at',
                'users.id as user_id',
                'users.name as causer_name',
                'users.role as causer_role',
                'users.email as causer_email'
            )
            ->orderBy('activity_log.id', 'desc')
            ->get();

        $history = $activities->map(function ($item) {
            $props = json_decode($item->properties ?? '{}', true) ?: [];
            $role = $item->causer_role ?? $props['causer_role'] ?? 'user';
            $roleLabel = match($role) {
                'super_admin', 'Super Admin' => 'سوبر أدمن (Super Admin)',
                'admin', 'Admin' => 'مدير النظام (Admin)',
                'manager', 'Manager' => 'مدير (Manager)',
                'sales' => 'مسؤول مبيعات (Sales)',
                default => $role
            };

            return [
                'id' => $item->id,
                'title' => $props['title'] ?? 'تعديل بيانات الصفقة',
                'description' => $item->description,
                'field' => $props['field'] ?? 'general',
                'old' => $props['old'] ?? null,
                'new' => $props['new'] ?? null,
                'icon' => $props['icon'] ?? 'fa-clock-rotate-left',
                'color' => $props['color'] ?? '#818cf8',
                'user' => [
                    'id' => $item->user_id,
                    'name' => $item->causer_name ?? $props['causer_name'] ?? 'مستخدم',
                    'role' => $role,
                    'role_label' => $roleLabel,
                    'email' => $item->causer_email ?? $props['causer_email'] ?? ''
                ],
                'created_at' => $item->created_at
            ];
        });

        // Ensure creation record exists in history
        if (!$history->contains('field', 'creation')) {
            $creator = $deal->creator;
            $history->push([
                'id' => 'deal_init_' . $deal->id,
                'title' => 'إنشاء الصفقة والعقد',
                'description' => 'تم إنشاء الصفقة في الأصل بقيمة ' . number_format((float)$deal->total_price, 2) . ' ج.م',
                'field' => 'creation',
                'old' => null,
                'new' => (float)$deal->total_price,
                'icon' => 'fa-circle-plus',
                'color' => '#10b981',
                'user' => [
                    'id' => $creator?->id,
                    'name' => $creator?->name ?? 'سوبر أدمن النظام',
                    'role' => $creator?->role ?? 'super_admin',
                    'role_label' => ($creator?->role === 'super_admin' || !$creator) ? 'سوبر أدمن (Super Admin)' : ($creator->name),
                    'email' => $creator?->email ?? ''
                ],
                'created_at' => $deal->created_at ? $deal->created_at->toDateTimeString() : now()->toDateTimeString()
            ]);
        }

        return response()->json([
            'status' => 'success',
            'data' => $history->values()
        ]);
    }

    /**
     * Helper: Record Activity in Activity Log for Deal
     */
    private function recordActivity($dealId, $description, $field = 'general', array $properties = [])
    {
        try {
            $user = Auth::user();
            $mergedProps = array_merge([
                'field' => $field,
                'causer_id' => $user?->id,
                'causer_name' => $user?->name ?? 'مستخدم',
                'causer_role' => $user?->role ?? 'unknown',
                'causer_email' => $user?->email ?? '',
                'created_at_human' => now()->translatedFormat('d M Y - h:i A')
            ], $properties);

            DB::table('activity_log')->insert([
                'log_name' => 'deal',
                'description' => $description,
                'subject_type' => Deal::class,
                'subject_id' => $dealId,
                'causer_type' => User::class,
                'causer_id' => $user?->id ?? 1,
                'properties' => json_encode($mergedProps, JSON_UNESCAPED_UNICODE),
                'created_at' => now(),
                'updated_at' => now()
            ]);
        } catch (\Throwable $e) {
            Log::warning('Failed to record deal activity log: ' . $e->getMessage());
        }
    }

    /**
     * Get all attachments for a deal (Accessible by Client, Staff, Department Managers, Admins)
     */
    public function getAttachments($id)
    {
        $deal = Deal::findOrFail($id);
        $user = Auth::user();

        // Clients can only access their own deal attachments
        if ($user && $user->role === 'client' && (int)$deal->client_id !== (int)$user->id) {
            return response()->json(['message' => 'غير مصرح لك باستعراض ملفات هذه الصفقة'], 403);
        }

        // All employees, department managers, and admins CAN view deal attachments (plan, brief, documents)
        $attachments = $deal->attachments()->with('uploader')->latest()->get();

        return response()->json([
            'status' => 'success',
            'data' => $attachments
        ]);
    }

    /**
     * Add single or multiple attachments to a deal
     */
    public function addAttachment(Request $request, $id)
    {
        $deal = Deal::findOrFail($id);
        $user = Auth::user();

        if (!$this->canEditDeal($user)) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك برفع ملفات في الصفقة. تقتصر الصلاحية على السوبر أدمن وإدارة النظام.'
            ], 403);
        }

        $request->validate([
            'file' => 'required|file|max:30720',
            'category' => 'nullable|string|in:brief,plan,contract,document',
            'description' => 'nullable|string|max:255'
        ]);

        $category = $request->input('category', 'document');
        $desc = $request->input('description');

        $attachment = $this->processDealFileUpload($request->file('file'), $deal, $category, $desc);

        return response()->json([
            'status' => 'success',
            'message' => 'تم رفع الملف بنجاح',
            'data' => $attachment->load('uploader')
        ], 201);
    }

    /**
     * Delete an attachment from a deal
     */
    public function deleteAttachment($id, $attachmentId)
    {
        $deal = Deal::findOrFail($id);
        $user = Auth::user();

        if (!$this->isSuperAdmin($user) && !$this->canEditDeal($user)) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بحذف ملفات الصفقة.'
            ], 403);
        }

        $attachment = Attachment::where('attachable_type', Deal::class)
            ->where('attachable_id', $deal->id)
            ->findOrFail($attachmentId);

        $fileName = $attachment->file_name;
        if (!empty($attachment->file_path)) {
            Storage::disk('public')->delete($attachment->file_path);
        }
        $attachment->delete();

        $this->recordActivity(
            $deal->id,
            "تم حذف الملف: \"{$fileName}\" من الصفقة بواسطة " . ($user?->name ?? 'المستخدم'),
            'file_deleted',
            [
                'title' => 'حذف ملف من الصفقة',
                'file_name' => $fileName,
                'icon' => 'fa-trash-can',
                'color' => '#f43f5e'
            ]
        );

        return response()->json([
            'status' => 'success',
            'message' => 'تم حذف الملف بنجاح'
        ]);
    }

    /**
     * Helper: Process uploaded file for Deal
     */
    private function processDealFileUpload($file, Deal $deal, string $category = 'document', ?string $customDesc = null): Attachment
    {
        $origName = $file->getClientOriginalName();
        $mime = $file->getClientMimeType();
        $ext = strtolower($file->getClientOriginalExtension());
        $size = $file->getSize();

        $fileType = match(true) {
            str_contains($mime, 'pdf') || $ext === 'pdf' => 'pdf',
            str_contains($mime, 'word') || str_contains($mime, 'document') || in_array($ext, ['doc', 'docx']) => 'word',
            str_contains($mime, 'excel') || str_contains($mime, 'sheet') || in_array($ext, ['xls', 'xlsx', 'csv']) => 'excel',
            str_contains($mime, 'image') || in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'svg']) => 'image',
            default => 'document'
        };

        $categoryLabels = [
            'brief' => 'بريف العمل والمواصفات',
            'plan' => 'الخطة الشهرية المعتمدة (PDF)',
            'contract' => 'عقد الاتفاق الرسمي',
            'document' => 'مستند إضافي'
        ];

        $path = $file->store('deals/attachments', 'public');

        $attachment = Attachment::create([
            'attachable_type' => Deal::class,
            'attachable_id' => $deal->id,
            'file_path' => $path,
            'file_name' => $origName,
            'file_type' => $fileType,
            'file_size' => $size,
            'category' => $category,
            'description' => $customDesc ?: ($categoryLabels[$category] ?? 'مستند إضافي'),
            'uploaded_by' => Auth::id()
        ]);

        $user = Auth::user();
        $catLabel = $categoryLabels[$category] ?? 'مرفق';
        $this->recordActivity(
            $deal->id,
            "تم رفع ملف {$catLabel}: \"{$origName}\" بواسطة " . ($user?->name ?? 'المستخدم'),
            'file_uploaded',
            [
                'title' => 'رفع ملف ومستند للصفقة',
                'file_name' => $origName,
                'file_type' => $fileType,
                'category' => $category,
                'icon' => ($fileType === 'pdf' ? 'fa-file-pdf' : ($fileType === 'excel' ? 'fa-file-excel' : ($fileType === 'word' ? 'fa-file-word' : 'fa-paperclip'))),
                'color' => '#06b6d4'
            ]
        );

        return $attachment;
    }

    /**
     * Helper: Check if user is Super Admin
     */
    private function isSuperAdmin($user = null): bool
    {
        $user = $user ?: Auth::user();
        if (!$user) return false;
        return in_array($user->role, ['super_admin', 'Super Admin']) || (method_exists($user, 'hasRole') && $user->hasRole('super_admin'));
    }

    /**
     * Helper: Check if user can edit deals & prices (Super Admin or System Manager/Admin)
     */
    private function canEditDeal($user = null): bool
    {
        $user = $user ?: Auth::user();
        if (!$user) return false;
        if (in_array(strtolower($user->role), ['department_manager', 'department manager', 'employee', 'client'])) return false;
        if ($this->isSuperAdmin($user)) return true;
        return in_array($user->role, ['admin', 'Admin', 'manager', 'Manager']) || (method_exists($user, 'hasRole') && $user->hasRole('admin'));
    }
}
