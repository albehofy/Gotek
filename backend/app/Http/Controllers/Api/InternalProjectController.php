<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\InternalProject;
use App\Models\Task;
use App\Models\Contract;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InternalProjectController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'department_id' => 'required|exists:departments,id',
            'start_date' => 'required|date',
            'description' => 'nullable|string',
            // بيانات المهمة الأولى اختياري
            'first_task_title' => 'nullable|string',
            'assigned_to' => 'nullable|exists:users,id',
        ]);

        // استخدام Transaction عشان نضمن إن كل حاجة تتكريت مع بعض أو مفيش حاجة تتكريت خالص
        $result = DB::transaction(function () use ($request, $validated) {
            
            // 1. إنشاء المشروع الداخلي
            $project = InternalProject::create([
                'title' => $validated['title'],
                'department_id' => $validated['department_id'],
                'description' => $validated['description'] ?? null,
                'start_date' => $validated['start_date'],
                'status' => 'active',
            ]);

            // 2. إنشاء أول مهمة (لو مبعوت بياناتها)
            if ($request->filled('first_task_title')) {
                $task = $project->tasks()->create([
                    'title' => $request->first_task_title,
                    'description' => $request->first_task_description ?? null,
                    'status' => 'todo',
                    'department_id' => $validated['department_id'],
                ]);

                // تعيين الموظف للمهمة
                if ($request->assigned_to) {
                    $task->assignedMembers()->attach($request->assigned_to);
                }
            }

            return $project->load('tasks');
        });

        return response()->json(['message' => 'تم تأسيس المشروع والمهمة الأولى بنجاح', 'data' => $result], 201);
    }
    /**
 * عرض قائمة المشاريع الداخلية
 */
public function index()
{
    $projects = InternalProject::with('department')->latest()->get();
    return response()->json($projects);
}

/**
 * عرض تفاصيل مشروع معين
 */
public function show($id)
{
    $project = InternalProject::with(['tasks', 'department'])->findOrFail($id);
    return response()->json($project);
}

/**
 * حذف مشروع
 */
public function destroy($id)
{
    $project = InternalProject::findOrFail($id);
    $project->delete();
    return response()->json(['message' => 'تم حذف المشروع بنجاح']);
}
}
