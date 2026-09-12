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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DealController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();

        $query = Deal::with(['client', 'creator', 'department', 'salesPerson', 'tasks.users', 'payments'])->latest();

        if ($user->role === 'client') {
            $query->where('client_id', $user->id);
        } elseif (in_array($user->role, ['department_manager', 'Department Manager']) && $user->department_id) {
            $query->where(function($q) use ($user) {
                $q->where('department_id', $user->department_id)
                  ->orWhereHas('tasks', function($tQ) use ($user) {
                      $tQ->where('department_id', $user->department_id);
                  });
            });
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
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
            'status' => 'nullable|string|in:pending,active,completed,cancelled,won,closed,in_progress',
            'tasks' => 'nullable|array',
            'tasks.*.title' => 'required|string|max:255',
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
        $dealData['sales_commission_type'] = $dealData['sales_commission_type'] ?? 'none';
        if ($dealData['sales_commission_type'] === 'none') {
            $dealData['sales_commission_value'] = 0;
        }

        if ($request->hasFile('attachment')) {
            $dealData['attachment_path'] = $request->file('attachment')->store('deal_attachments', 'public');
        }

        $deal = Deal::create($dealData);

        $tasks = $request->tasks;
        if (is_string($tasks)) {
            $tasks = json_decode($tasks, true);
        }
        if (!empty($tasks) && is_array($tasks)) {
            foreach ($tasks as $tData) {
                if (empty($tData['title'])) continue;

                $targetDeptId = !empty($tData['department_id']) ? (int)$tData['department_id'] : $deal->department_id;
                $clientPrice = (float)($tData['client_price'] ?? 0);
                $employeePrice = (float)($tData['employee_price'] ?? 0);
                $margin = max(0, $clientPrice - $employeePrice);

                $newTask = Task::create([
                    'title' => $tData['title'],
                    'description' => $tData['description'] ?? $tData['title'] ?? '',
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

        return response()->json(['status' => 'success', 'data' => $deal->load(['client', 'department', 'salesPerson', 'tasks.users'])], 201);
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
            'payments'
        ])->findOrFail($id);

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
        $deal = Deal::findOrFail($id);

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
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
            'status' => 'required|string|in:pending,active,completed,cancelled,won,closed,in_progress',
        ]);

        $data = $validated;
        unset($data['attachment']);
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

        if ($request->hasFile('attachment')) {
            $data['attachment_path'] = $request->file('attachment')->store('deal_attachments', 'public');
        }

        $deal->update($data);

        return response()->json(['status' => 'success', 'data' => $deal->load(['client', 'department', 'salesPerson'])]);
    }

    public function destroy(Request $request, $id)
    {
        $deal = Deal::findOrFail($id);
        $deleteFinancials = filter_var($request->query('delete_financials', $request->input('delete_financials', false)), FILTER_VALIDATE_BOOLEAN);

        if ($deleteFinancials) {
            // Delete payments and financial ledger entries associated with this deal
            ClientPayment::where('deal_id', $deal->id)->delete();
            LedgerEntry::where('deal_id', $deal->id)->delete();
        } else {
            // Unlink payments and financial ledger entries so company revenue and payroll remain intact
            ClientPayment::where('deal_id', $deal->id)->update(['deal_id' => null]);
            LedgerEntry::where('deal_id', $deal->id)->update(['deal_id' => null]);
        }

        // Delete associated tasks
        Task::where('deal_id', $deal->id)->delete();

        $deal->delete();

        return response()->json(['message' => 'تم حذف الصفقة بنجاح']);
    }
}
