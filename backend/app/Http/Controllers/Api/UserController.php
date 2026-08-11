<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::with(['department', 'roleModel']);

        if ($request->filled('role')) {
            $query->where('role', $request->role);
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

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'تم حذف المستخدم بنجاح'
        ]);
    }
}