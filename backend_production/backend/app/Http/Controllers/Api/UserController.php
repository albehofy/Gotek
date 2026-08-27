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

class UserController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        if ($user && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح للعملاء بالوصول لقائمة العملاء والمستخدمين'], 403);
        }

        $query = User::with(['department', 'roleModel']);

        if ($request->filled('role')) {
            if (in_array($request->role, ['employee', 'staff'])) {
                $query->where(function($q) {
                    $q->where('role', '!=', 'client')
                      ->orWhereNull('role');
                });
            } else {
                $query->where('role', $request->role);
            }
        }

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%");
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

    public function team()
    {
        $founders = User::with('department')->whereIn('role', ['super_admin', 'admin', 'manager'])->get();
        $team = User::with('department')->whereIn('role', ['employee', 'department_manager'])->get();

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
            'department_id' => 'nullable|exists:departments,id',
            'payment_type' => 'nullable|in:task_based,salary_based,percentage_based,hybrid',
            'base_salary' => 'nullable|numeric|min:0',
            'commission_rate' => 'nullable|numeric|min:0',
        ]);

        $roleModel = Role::where('slug', $validated['role'])->first();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
            'role_id' => $roleModel ? $roleModel->id : null,
            'department_id' => $validated['department_id'] ?? null,
            'payment_type' => $validated['payment_type'] ?? 'salary_based',
            'base_salary' => $validated['base_salary'] ?? 0,
            'commission_rate' => $validated['commission_rate'] ?? 0,
        ]);

        return response()->json(['status' => 'success', 'data' => $user->load(['department', 'roleModel'])], 201);
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

        if (!empty($validated['password'])) {
            $data['password'] = Hash::make($validated['password']);
        }

        $user->update($data);

        return response()->json(['status' => 'success', 'data' => $user->load(['department', 'roleModel'])]);
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