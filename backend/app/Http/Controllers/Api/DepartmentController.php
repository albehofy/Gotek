<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        $department = Department::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'manager_id' => 'nullable|exists:users,id',
            'has_partner' => 'boolean',
            'partner_name' => 'nullable|string|max:255',
            'partner_percentage' => 'nullable|numeric|min:0|max:100',
        ]);

        $department->update($validated);

        return response()->json(['status' => 'success', 'data' => $department->load(['subCategories', 'manager'])]);
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

    public function destroy($id)
    {
        $department = Department::findOrFail($id);
        $department->delete();
        return response()->json(['message' => 'تم حذف القسم بنجاح']);
    }
}