<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if ($user && in_array($user->role, ['client', 'employee'])) {
            return response()->json(['message' => 'غير مسموح بتهيئة الأدوار والصلاحيات'], 403);
        }

        $roles = Role::with('permissions')->get();
        $permissions = Permission::all();
        return response()->json([
            'status' => 'success',
            'roles' => $roles,
            'permissions' => $permissions
        ]);
    }

    public function storeRole(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:roles,slug',
            'description' => 'nullable|string',
            'permission_ids' => 'nullable|array'
        ]);

        $role = Role::create([
            'name' => $validated['name'],
            'slug' => $validated['slug'],
            'description' => $validated['description'] ?? null,
        ]);

        if (!empty($validated['permission_ids'])) {
            $role->permissions()->sync($validated['permission_ids']);
        }

        return response()->json(['status' => 'success', 'data' => $role->load('permissions')], 201);
    }

    public function updateRolePermissions(Request $request, $id)
    {
        $role = Role::findOrFail($id);
        $validated = $request->validate([
            'permission_ids' => 'present|array'
        ]);

        $role->permissions()->sync($validated['permission_ids']);

        return response()->json(['status' => 'success', 'message' => 'تم تحديث صلاحيات الدور بنجاح', 'data' => $role->load('permissions')]);
    }

    public function assignUserRole(Request $request, $userId)
    {
        $user = User::findOrFail($userId);
        $validated = $request->validate([
            'role' => 'required|string',
            'role_id' => 'nullable|exists:roles,id'
        ]);

        $roleModel = null;
        if (!empty($validated['role_id'])) {
            $roleModel = Role::find($validated['role_id']);
        } else {
            $roleModel = Role::where('slug', $validated['role'])->first();
        }

        $user->update([
            'role' => $validated['role'],
            'role_id' => $roleModel ? $roleModel->id : $user->role_id
        ]);

        return response()->json(['status' => 'success', 'message' => 'تم تحديث دور المستخدم بنجاح', 'data' => $user]);
    }
}
