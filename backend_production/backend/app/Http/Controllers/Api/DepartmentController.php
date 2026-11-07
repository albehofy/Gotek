<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\{Department, SubCategory, Task, Deal, User, FixedAsset, LedgerEntry, InternalProject};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{Auth, DB, Schema, Log};

class DepartmentController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if ($user && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح للعملاء بالدخول لقائمة الأقسام والمراكز'], 403);
        }

        $departments = Department::with(['manager', 'subCategories', 'employees'])->get();
        return response()->json($departments);
    }

    public function store(Request $request)
    {
        $authUser = Auth::user();
        if (!$authUser || (!$authUser->isSuperAdmin() && $authUser->role !== 'admin')) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بإنشاء الأقسام. تقتصر الصلاحية على مدير النظام والسوبر أدمن.'
            ], 403);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'manager_id' => 'nullable|exists:users,id',
            'has_partner' => 'boolean',
            'partner_name' => 'nullable|string|max:255',
            'partner_percentage' => 'nullable|numeric|min:0|max:100',
            'sub_categories' => 'nullable|array'
        ]);

        $department = Department::create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? '',
            'manager_id' => $validated['manager_id'] ?? null,
            'has_partner' => $validated['has_partner'] ?? false,
            'partner_name' => $validated['partner_name'] ?? null,
            'partner_percentage' => $validated['partner_percentage'] ?? 0,
        ]);

        // Auto sync manager role & department
        if (!empty($validated['manager_id'])) {
            $this->syncManagerRoleAndPermissions($department, (int)$validated['manager_id']);
        }

        if (!empty($validated['sub_categories'])) {
            foreach ($validated['sub_categories'] as $subName) {
                if (!empty($subName)) {
                    SubCategory::create([
                        'department_id' => $department->id,
                        'name_ar' => is_array($subName) ? ($subName['ar'] ?? $subName['en']) : $subName,
                        'name_en' => is_array($subName) ? ($subName['en'] ?? $subName['ar']) : $subName,
                    ]);
                }
            }
        }

        return response()->json(['status' => 'success', 'data' => $department->load(['subCategories', 'manager'])], 201);
    }

    public function show($id)
    {
        $department = Department::with(['manager', 'subCategories', 'employees', 'tasks', 'fixedAssets'])->findOrFail($id);
        return response()->json($department);
    }

    public function update(Request $request, $id)
    {
        $authUser = Auth::user();
        if (!$authUser || (!$authUser->isSuperAdmin() && $authUser->role !== 'admin')) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لمدير القسم بتعديل بيانات الأقسام أو إدارتها. تقتصر الصلاحية على مدير النظام والسوبر أدمن.'
            ], 403);
        }

        $department = Department::findOrFail($id);
        $oldManagerId = $department->manager_id ? (int)$department->manager_id : null;

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'manager_id' => 'nullable|exists:users,id',
            'has_partner' => 'boolean',
            'partner_name' => 'nullable|string|max:255',
            'partner_percentage' => 'nullable|numeric|min:0|max:100',
        ]);

        $department->update($validated);

        $newManagerId = !empty($validated['manager_id']) ? (int)$validated['manager_id'] : null;

        if ($oldManagerId !== $newManagerId) {
            // Revert old manager if not managing other departments
            if ($oldManagerId) {
                $managingOther = Department::where('manager_id', $oldManagerId)->where('id', '!=', $department->id)->exists();
                if (!$managingOther) {
                    $oldMgr = User::find($oldManagerId);
                    if ($oldMgr && $oldMgr->role === 'department_manager') {
                        $oldMgr->update(['role' => 'employee']);
                    }
                }
            }

            // Upgrade new manager
            if ($newManagerId) {
                $this->syncManagerRoleAndPermissions($department, $newManagerId);
            }
        }

        return response()->json(['status' => 'success', 'data' => $department->load(['subCategories', 'manager'])]);
    }

    /**
     * Assign existing employee to department
     */
    public function assignEmployee(Request $request, $id)
    {
        $authUser = Auth::user();
        if (!$authUser || (!$authUser->isSuperAdmin() && $authUser->role !== 'admin')) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بإضافة أو نقل موظفين بين الأقسام.'
            ], 403);
        }

        $department = Department::findOrFail($id);
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id'
        ]);

        $user = User::findOrFail($validated['user_id']);
        $user->update(['department_id' => $department->id]);

        return response()->json([
            'status' => 'success',
            'message' => 'تم تعيين الموظف للقسم بنجاح',
            'data' => $user
        ]);
    }

    /**
     * Automatically upgrade user to department_manager and link department
     */
    protected function syncManagerRoleAndPermissions(Department $department, int $managerId): void
    {
        $manager = User::find($managerId);
        if (!$manager) return;

        // Upgrade role to department_manager if not higher admin
        if (!in_array($manager->role, ['super_admin', 'admin'])) {
            $manager->update([
                'role' => 'department_manager',
                'department_id' => $department->id
            ]);

            $deptMgrRole = \App\Models\Role::where('slug', 'department_manager')->first();
            if ($deptMgrRole) {
                $manager->roles()->syncWithoutDetaching([$deptMgrRole->id]);
            }
        } else {
            // Admin or Super Admin managing department - keep their department_id assigned
            $manager->update(['department_id' => $department->id]);
        }
    }

    public function addSubCategory(Request $request, $id)
    {
        $department = Department::findOrFail($id);
        $validated = $request->validate([
            'name_ar' => 'required|string|max:255',
            'name_en' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        $sub = SubCategory::create([
            'department_id' => $department->id,
            'name_ar' => $validated['name_ar'],
            'name_en' => $validated['name_en'] ?? $validated['name_ar'],
            'description' => $validated['description'] ?? null
        ]);

        return response()->json(['status' => 'success', 'data' => $sub], 201);
    }

    public function updateSubCategory(Request $request, $subId)
    {
        $sub = SubCategory::findOrFail($subId);
        $validated = $request->validate([
            'name_ar' => 'required|string|max:255',
            'name_en' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        $sub->update([
            'name_ar' => $validated['name_ar'],
            'name_en' => $validated['name_en'] ?? $validated['name_ar'],
            'description' => $validated['description'] ?? $sub->description,
        ]);

        return response()->json(['status' => 'success', 'data' => $sub]);
    }

    public function deleteSubCategory($subId)
    {
        $authUser = Auth::user();
        if (!$authUser || (!$authUser->isSuperAdmin() && $authUser->role !== 'admin')) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بحذف التصنيفات الفرعية. عمليات الحذف في النظام مقتصرة حصرياً على الإدارة.'
            ], 403);
        }

        $sub = SubCategory::findOrFail($subId);
        $sub->delete();
        return response()->json(['status' => 'success', 'message' => 'تم حذف التصنيف الفرعي بنجاح']);
    }

    public function destroy($id)
    {
        $authUser = Auth::user();
        if (!$authUser || (!$authUser->isSuperAdmin() && $authUser->role !== 'admin')) {
            return response()->json([
                'status' => 'error',
                'message' => 'غير مصرح لك بحذف الأقسام. عمليات الحذف في النظام مقتصرة حصرياً على الإدارة.'
            ], 403);
        }

        $department = Department::findOrFail($id);

        DB::beginTransaction();
        try {
            // Unlink tasks and subcategories safely
            if (Schema::hasColumn('tasks', 'department_id')) {
                Task::where('department_id', $department->id)->update(['department_id' => null, 'sub_category_id' => null]);
            }
            if (Schema::hasColumn('deals', 'department_id')) {
                Deal::where('department_id', $department->id)->update(['department_id' => null]);
            }
            if (Schema::hasColumn('users', 'department_id')) {
                User::where('department_id', $department->id)->update(['department_id' => null]);
            }
            if (Schema::hasColumn('fixed_assets', 'department_id')) {
                FixedAsset::where('department_id', $department->id)->update(['department_id' => null]);
            }
            if (Schema::hasColumn('ledger_entries', 'department_id')) {
                LedgerEntry::where('department_id', $department->id)->update(['department_id' => null]);
            }
            if (Schema::hasTable('sub_categories')) {
                SubCategory::where('department_id', $department->id)->delete();
            }
            if (Schema::hasTable('internal_projects')) {
                InternalProject::where('department_id', $department->id)->delete();
            }

            $department->delete();
            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'تم حذف القسم وفك ارتباط السجلات التابعة له بنجاح'
            ]);
        } catch (\Throwable $e) {
            DB::rollBack();
            Log::error('Department destroy failed: ' . $e->getMessage(), ['exception' => $e]);
            return response()->json([
                'status' => 'error',
                'message' => 'تعذر حذف القسم: ' . $e->getMessage()
            ], 422);
        }
    }
}