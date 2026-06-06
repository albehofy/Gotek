<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\TaskChecklist;
use Illuminate\Http\Request;

class ChecklistController extends Controller
{
    // 1. عرض كل بنود الـ Checklist الخاصة بمهمة معينة
    public function index($taskId)
    {
        $checklists = TaskChecklist::where('task_id', $taskId)->get();
        return response()->json($checklists);
    }

    // 2. إضافة بند جديد للـ Checklist (للمدير أو الموظف)
   public function store(Request $request, $taskId)
{
    $request->validate([
        'item_text' => 'required|string|max:255', // تغيير الاسم هنا
    ]);

    $checklist = TaskChecklist::create([
        'task_id' => $taskId,
        'item_text' => $request->item_text, // وتغيير الاسم هنا
        'is_completed' => false
    ]);

    return response()->json(['message' => 'تم إضافة البند بنجاح', 'data' => $checklist], 201);
}
    // 3. تبديل حالة البند (خلص / لسه) - Toggle Status
    public function toggle($checkListId)
    {
        $item = TaskChecklist::findOrFail($checkListId);
        
        // عكس الحالة الحالية
        $item->update([
            'is_completed' => !$item->is_completed
        ]);

        return response()->json([
            'message' => 'تم تحديث حالة البند',
            'is_completed' => $item->is_completed
        ]);
    }

    // 4. حذف بند من الـ Checklist
    public function destroy($checkListId)
    {
        $item = TaskChecklist::findOrFail($checkListId);
        $item->delete();

        return response()->json(['message' => 'تم حذف البند']);
    }
}