<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use App\Models\Contract;
use App\Models\Deal;
use App\Models\Task;
use App\Models\ClientPayment;
use App\Models\LedgerEntry;
use App\Models\Department;
use App\Models\NotificationModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        if ($user && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح للعملاء بالوصول لقائمة العملاء والمستخدمين'], 403);
        }

        $query = User::with(['department', 'roleModel', 'roles']);

        // Type filter: employee / staff vs client
        if ($request->filled('type')) {
            if ($request->type === 'client') {
                $query->where(function($q) {
                    $q->where('role', 'client')
                      ->orWhere('role', 'Client')
                      ->orWhereHas('roles', fn($rq) => $rq->where('slug', 'client'))
                      ->orWhereHas('roleModel', fn($rq) => $rq->where('slug', 'client'));
                });
            } elseif (in_array($request->type, ['employee', 'staff'])) {
                $query->where(function($q) {
                    $q->where('role', '!=', 'client')
                      ->orWhereNull('role');
                });
            }
        } elseif ($request->filled('role')) {
            if ($request->role === 'client') {
                $query->where(function($q) {
                    $q->where('role', 'client')
                      ->orWhere('role', 'Client')
                      ->orWhereHas('roles', fn($rq) => $rq->where('slug', 'client'))
                      ->orWhereHas('roleModel', fn($rq) => $rq->where('slug', 'client'));
                });
            } elseif (in_array($request->role, ['employee', 'staff'])) {
                $query->where(function($q) {
                    $q->where('role', '!=', 'client')
                      ->orWhereNull('role');
                });
            } else {
                $query->where('role', $request->role);
            }
        }

        // Active only (exclude on hold users for dropdowns / assignment)
        if ($request->boolean('active_only') || $request->has('for_assignment')) {
            $query->where('is_hold', false);
        }

        if ($request->filled('is_hold')) {
            $query->where('is_hold', $request->boolean('is_hold'));
        }

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('client_code', 'like', "%{$search}%");
            });
        }

        if ($request->has('per_page') || $request->has('page')) {
            $perPage = (int) $request->input('per_page', 15);
            $paginatedUsers = $query->latest()->paginate($perPage);

            return response()->json([
                'status' => 'success',
                'data' => $paginatedUsers
            ]);
        }

        $users = $query->latest()->get();

        return response()->json([
            'status' => 'success',
            'data' => $users
        ]);
    }

    public function show($id)
    {
        $user = User::with(['department', 'roleModel', 'roles'])->findOrFail($id);
        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }

    public function team()
    {
        $founders = User::with('department')->whereIn('role', ['super_admin', 'admin', 'manager'])->where('is_hold', false)->get()->makeHidden(['base_salary', 'commission_rate', 'payment_type']);
        $team = User::with('department')->whereIn('role', ['employee', 'department_manager'])->where('is_hold', false)->get()->makeHidden(['base_salary', 'commission_rate', 'payment_type']);

        return response()->json([
            'status' => 'success',
            'data' => [
                'founders' => $founders,
                'team' => $team
            ]
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone' => 'nullable|string',
            'password' => 'required|string|min:6',
            'role' => 'required|string',
            'role_ids' => 'nullable|array',
            'role_ids.*' => 'integer|exists:roles,id',
            'client_code' => 'nullable|string|max:30|unique:users,client_code',
            'is_hold' => 'nullable|boolean',
            'department_id' => 'nullable|exists:departments,id',
            'payment_type' => 'nullable|in:task_based,salary_based,percentage_based,hybrid',
            'base_salary' => 'nullable|numeric|min:0',
            'commission_rate' => 'nullable|numeric|min:0',
        ]);

        $roleModel = Role::where('slug', $validated['role'])->first();

        // Calculate client_code if client and empty
        $clientCode = $validated['client_code'] ?? null;
        if ($validated['role'] === 'client' && empty($clientCode)) {
            $maxCode = DB::table('users')->whereNotNull('client_code')->max(DB::raw('CAST(client_code AS UNSIGNED)'));
            $clientCode = (string) max(1001, ($maxCode ? $maxCode + 1 : 1001));
        }

        $user = User::create([
            'client_code' => $clientCode,
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
            'role_id' => $roleModel ? $roleModel->id : null,
            'is_hold' => $validated['is_hold'] ?? false,
            'department_id' => $validated['department_id'] ?? null,
            'payment_type' => $validated['payment_type'] ?? 'salary_based',
            'base_salary' => $validated['base_salary'] ?? 0,
            'commission_rate' => $validated['commission_rate'] ?? 0,
        ]);

        // Multi-role checkboxes assignment
        if (!empty($validated['role_ids'])) {
            $user->roles()->sync($validated['role_ids']);
        } elseif ($roleModel) {
            $user->roles()->sync([$roleModel->id]);
        }

        return response()->json(['status' => 'success', 'data' => $user->load(['department', 'roleModel', 'roles'])], 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'phone' => 'nullable|string',
            'password' => 'nullable|string|min:6',
            'role' => 'required|string',
            'role_ids' => 'nullable|array',
            'role_ids.*' => 'integer|exists:roles,id',
            'client_code' => 'nullable|string|max:30|unique:users,client_code,' . $id,
            'is_hold' => 'nullable|boolean',
            'department_id' => 'nullable|exists:departments,id',
            'payment_type' => 'nullable|in:task_based,salary_based,percentage_based,hybrid',
            'base_salary' => 'nullable|numeric|min:0',
            'commission_rate' => 'nullable|numeric|min:0',
        ]);

        $roleModel = Role::where('slug', $validated['role'])->first();

        $data = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? $user->phone,
            'role' => $validated['role'],
            'role_id' => $roleModel ? $roleModel->id : $user->role_id,
            'department_id' => $validated['department_id'] ?? $user->department_id,
            'payment_type' => $validated['payment_type'] ?? $user->payment_type,
            'base_salary' => $validated['base_salary'] ?? $user->base_salary,
            'commission_rate' => $validated['commission_rate'] ?? $user->commission_rate,
        ];

        if (array_key_exists('is_hold', $validated)) {
            $data['is_hold'] = (bool) $validated['is_hold'];
        }

        if (array_key_exists('client_code', $validated) && !empty($validated['client_code'])) {
            $data['client_code'] = $validated['client_code'];
        }

        if (!empty($validated['password'])) {
            $data['password'] = Hash::make($validated['password']);
        }

        $user->update($data);

        // Sync roles
        if (!empty($validated['role_ids'])) {
            $user->roles()->sync($validated['role_ids']);
        } elseif ($roleModel) {
            $user->roles()->syncWithoutDetaching([$roleModel->id]);
        }

        return response()->json(['status' => 'success', 'data' => $user->load(['department', 'roleModel', 'roles'])]);
    }

    public function toggleHold($id)
    {
        $user = User::findOrFail($id);
        if (auth()->id() == $id) {
            return response()->json(['message' => 'لا يمكنك تعليق حسابك الشخصي'], 403);
        }

        $user->is_hold = !$user->is_hold;
        $user->save();

        if ($user->is_hold) {
            $user->tokens()->delete();
        }

        $statusText = $user->is_hold ? 'تم تعليق الحساب بنجاح (Hold)' : 'تم رفع التعليق وتنشيط الحساب بنجاح';

        return response()->json([
            'status' => 'success',
            'message' => $statusText,
            'data' => $user->load(['department', 'roleModel', 'roles'])
        ]);
    }

    public function clientProfile($id)
    {
        $client = User::with(['roleModel', 'roles'])->findOrFail($id);

        // Ensure client code exists
        if (empty($client->client_code)) {
            $maxCode = DB::table('users')->whereNotNull('client_code')->max(DB::raw('CAST(client_code AS UNSIGNED)'));
            $client->client_code = (string) max(1001, ($maxCode ? $maxCode + 1 : 1001));
            $client->save();
        }

        // Fetch all deals with their tasks and payments
        $deals = Deal::where('client_id', $client->id)
            ->with(['department', 'tasks.users', 'payments'])
            ->latest()
            ->get();

        $totalBilled = 0;
        $totalPaid = 0;
        $allPayments = [];

        foreach ($deals as $deal) {
            $totalBilled += (float) $deal->calculated_total;
            $totalPaid += (float) $deal->calculated_paid;

            if ($deal->payments && count($deal->payments) > 0) {
                foreach ($deal->payments as $p) {
                    $pData = $p->toArray();
                    $pData['deal_title'] = $deal->title;
                    $allPayments[] = $pData;
                }
            }
        }

        // Direct payments with client_id if any
        $directPayments = ClientPayment::where('client_id', $client->id)->whereNull('deal_id')->get();
        foreach ($directPayments as $dp) {
            $dpData = $dp->toArray();
            $dpData['deal_title'] = 'رصيد عام';
            $allPayments[] = $dpData;
            $totalPaid += (float) $dp->amount;
        }

        $remainingBalance = max(0, $totalBilled - $totalPaid);

        // Categorize deals by execution phase
        $requiredDeals = $deals->filter(function($d) {
            return in_array($d->status, ['pending', 'new', 'draft']);
        })->values();

        $inProgressDeals = $deals->filter(function($d) {
            return in_array($d->status, ['active', 'in_progress', 'won']);
        })->values();

        $completedDeals = $deals->filter(function($d) {
            return in_array($d->status, ['completed', 'approved', 'closed']);
        })->values();

        // Tasks associated with this client's deals
        $dealIds = $deals->pluck('id');
        $tasks = Task::whereIn('deal_id', $dealIds)
            ->with(['attachments', 'users', 'department'])
            ->latest()
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'client' => $client,
                'stats' => [
                    'total_billed' => $totalBilled,
                    'total_paid' => $totalPaid,
                    'remaining_balance' => $remainingBalance,
                    'deals_count' => $deals->count(),
                    'tasks_count' => $tasks->count(),
                    'completed_tasks_count' => $tasks->whereIn('status', ['done', 'approved', 'completed'])->count()
                ],
                'deals' => [
                    'all' => $deals,
                    'required' => $requiredDeals,
                    'in_progress' => $inProgressDeals,
                    'completed' => $completedDeals
                ],
                'payments' => $allPayments,
                'tasks' => $tasks
            ]
        ]);
    }

    public function updateDepartment(Request $request, $id)
    {
        $request->validate([
            'department_id' => 'required|exists:departments,id',
        ]);

        $user = User::findOrFail($id);
        $user->department_id = $request->department_id;
        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'تم نقل المستخدم للقسم بنجاح',
            'data' => $user
        ]);
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'المستخدم غير موجود'], 404);
        }

        if (auth()->id() == $id) {
            return response()->json(['message' => 'لا يمكنك حذف حسابك الشخصي من هنا'], 403);
        }

        $fallbackAdminId = auth()->id() ?: User::where('role', 'super_admin')->value('id') ?: 1;

        // Safely reassign created_by to prevent cascade deletion of company assets
        if (Schema::hasColumn('deals', 'created_by')) {
            Deal::where('created_by', $user->id)->update(['created_by' => $fallbackAdminId]);
        }
        if (Schema::hasColumn('client_payments', 'created_by')) {
            ClientPayment::where('created_by', $user->id)->update(['created_by' => $fallbackAdminId]);
        }
        if (Schema::hasColumn('ledger_entries', 'created_by')) {
            LedgerEntry::where('created_by', $user->id)->update(['created_by' => $fallbackAdminId]);
        }

        // Unlink or clean up user relations
        if (Schema::hasTable('contracts')) {
            Contract::where('client_id', $user->id)->orWhere('admin_id', $user->id)->delete();
        }
        if (Schema::hasColumn('deals', 'client_id')) {
            Deal::where('client_id', $user->id)->update(['client_id' => null]);
        }
        if (Schema::hasColumn('deals', 'sales_person_id')) {
            Deal::where('sales_person_id', $user->id)->update(['sales_person_id' => null]);
        }
        if (Schema::hasColumn('client_payments', 'client_id')) {
            ClientPayment::where('client_id', $user->id)->update(['client_id' => null]);
        }
        if (Schema::hasColumn('ledger_entries', 'employee_id')) {
            LedgerEntry::where('employee_id', $user->id)->update(['employee_id' => null]);
        }
        if (Schema::hasColumn('departments', 'manager_id')) {
            Department::where('manager_id', $user->id)->update(['manager_id' => null]);
        }
        
        $user->tasks()->detach();
        $user->roles()->detach();

        if (Schema::hasTable('notifications')) {
            NotificationModel::where('user_id', $user->id)->delete();
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'تم حذف المستخدم بنجاح'
        ]);
    }
}