<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Deal;
use App\Models\User;
use App\Models\Task;
use App\Models\Department;
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

        $deals = $query->paginate($request->get('per_page', 15));

        $deals->getCollection()->transform(function($deal) {
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
            'client_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'sales_person_id' => 'nullable|exists:users,id',
            'sales_commission_type' => 'nullable|in:none,fixed,percentage',
            'sales_commission_value' => 'nullable|numeric|min:0',
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
            'tasks' => 'nullable|array',
            'tasks.*.title' => 'required|string|max:255',
            'tasks.*.department_id' => 'nullable',
            'tasks.*.client_price' => 'nullable|numeric|min:0',
        ]);

        $dealData = $validated;
        unset($dealData['tasks']);
        $dealData['created_by'] = Auth::id();
        $dealData['paid_amount'] = $dealData['paid_amount'] ?? 0;
        $dealData['status'] = 'pending';

        $deal = Deal::create($dealData);

        // Process associated tasks & auto-assign to Department Managers
        if (!empty($request->tasks) && is_array($request->tasks)) {
            foreach ($request->tasks as $tData) {
                if (empty($tData['title'])) continue;

                $targetDeptId = !empty($tData['department_id']) ? (int)$tData['department_id'] : $deal->department_id;

                $newTask = Task::create([
                    'title' => $tData['title'],
                    'description' => $tData['description'] ?? $tData['title'] ?? '',
                    'deal_id' => $deal->id,
                    'client_id' => $deal->client_id,
                    'department_id' => $targetDeptId,
                    'client_price' => $tData['client_price'] ?? 0,
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

        return response()->json($deal);
    }

    public function update(Request $request, $id)
    {
        $deal = Deal::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'agreed_scope' => 'nullable|string',
            'client_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'sales_person_id' => 'nullable|exists:users,id',
            'sales_commission_type' => 'nullable|in:none,fixed,percentage',
            'sales_commission_value' => 'nullable|numeric|min:0',
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
            'status' => 'required|in:pending,active,completed,cancelled',
        ]);

        $deal->update($validated);

        return response()->json(['status' => 'success', 'data' => $deal->load(['client', 'department', 'salesPerson'])]);
    }

    public function destroy($id)
    {
        $deal = Deal::findOrFail($id);
        $deal->delete();

        return response()->json(['message' => 'تم حذف الصفقة بنجاح']);
    }
}
