<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::where('role', 'employee')->get();

        return response()->json([
            'status' => 'success',
            'data' => $users
        ]);
    }

    public function team()
    {
        $founders = User::with('department')->whereIn('role', ['admin', 'manager', 'viewer'])->get();
        $team = User::with('department')->where('role', 'employee')->get();
        
        return response()->json([
            'status' => 'success',
            'data' => [
                'founders' => $founders,
                'team' => $team
            ]
        ]);
    }

    /**
     * حذف موظف
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'المستخدم غير موجود'], 404);
        }

        // حماية: المدير ميمسحش نفسه
        if (auth()->id() == $id) {
            return response()->json(['message' => 'لا يمكنك حذف حسابك الشخصي من هنا'], 403);
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'تم حذف الموظف بنجاح'
        ]);
    }
    public function updateDepartment(Request $request, $id)
{
    $request->validate([
        'department_id' => 'required|exists:departments,id', // تأكد إن القسم موجود فعلاً
    ]);

    $user = User::findOrFail($id);
    $user->department_id = $request->department_id;
    $user->save();

    return response()->json([
        'status' => 'success',
        'message' => 'تم نقل الموظف للقسم بنجاح',
        'data' => $user
    ]);
}
}