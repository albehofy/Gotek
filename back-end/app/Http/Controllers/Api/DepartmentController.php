<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * @group إدارة الأقسام
 * APIs لإدارة الأقسام داخل الوكالة (Graphic, Web, Social Media...)
 */
class DepartmentController extends Controller
{
    /**
     * عرض جميع الأقسام
     * @authenticated
     */
    public function index()
    {
        $departments = Department::with('manager')->get();
        return response()->json($departments);
    }

    /**
     * إنشاء قسم جديد
     * @authenticated
     * @bodyParam name string required اسم القسم. Example: Graphic Design
     * @bodyParam description string وصف القسم.
     * @bodyParam manager_id integer ID الموظف المسئول عن القسم.
     */
    public function store(Request $request)
    {
        // التحقق من الصلاحية (الأدمن فقط هو من يكريت الأقسام)
        if (Auth::user()->role !== 'admin') {
            return response()->json(['message' => 'غير مسموح لك بإنشاء أقسام'], 403);
        }

        $validated = $request->validate([
            'name' => 'required|string|unique:departments,name',
            'description' => 'nullable|string',
            'manager_id' => 'nullable|exists:users,id',
        ]);

        $department = Department::create($validated);

        return response()->json([
            'message' => 'تم إنشاء القسم بنجاح',
            'data' => $department
        ], 201);
    }

    /**
     * عرض تفاصيل قسم معين
     * @authenticated
     */
    public function show($id)
    {
        $department = Department::with(['manager', 'projects'])->findOrFail($id);
        return response()->json($department);
    }

    /**
     * حذف قسم (Soft Delete)
     * @authenticated
     */
    public function destroy($id)
    {
        if (Auth::user()->role !== 'admin') {
            return response()->json(['message' => 'غير مسموح لك بحذف الأقسام'], 403);
        }

        $department = Department::findOrFail($id);
        $department->delete();

        return response()->json([
            'message' => 'تم نقل القسم إلى سلة المهملات بنجاح',
            'deleted_at' => $department->deleted_at // اختياري عشان التأكيد
        ]);
    }
        /**
     * المحذوفات قسم (get Soft Delete)
     * @authenticated
     */
    public function trash()
{
    // التأكد من الصلاحيات (أدمن فقط)
    if (Auth::user()->role !== 'admin') {
        return response()->json(['message' => 'غير مسموح لك بالوصول لهذه البيانات'], 403);
    }

    // جلب الأقسام الممسوحة فقط "سوفت" مع مشاريعها الممسوحة أيضاً لو أحببت
    $trashedDepartments = Department::onlyTrashed()->get();

    return response()->json([
        'message' => 'سلة مهملات الأقسام',
        'data' => $trashedDepartments
    ]);
}
public function restore($id)
{
    $department = Department::withTrashed()->findOrFail($id);
    $department->restore();

    return response()->json(['message' => 'تم استعادة القسم بنجاح']);
}
public function forceDelete($id)
{
    $department = Department::withTrashed()->findOrFail($id);
    $department->forceDelete();

    return response()->json(['message' => 'تم حذف القسم من النظام']);
}
}