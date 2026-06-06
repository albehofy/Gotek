<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Task;

class EmployeeDashboardController extends Controller
{
    public function index()
{
    $user = Auth::user();

    // 1. جلب المهام مع كل العلاقات الممكنة (Eager Loading)
    $tasks = Task::whereHas('assignedMembers', function($query) use ($user) {
            $query->where('users.id', $user->id);
        })
        ->with([
            'internalProject:id,title,description,status', // تفاصيل المشروع
            'checklists', // بنود المهام
            'creator:id,name' // مين اللي كرت التاسك دي للموظف
        ])
        ->latest()
        ->get();

    // 2. معالجة البيانات لإضافة "تفاصيل ذكية" لكل تاسك
    $tasksData = $tasks->map(function($task) {
        return [
            'id' => $task->id,
            'title' => $task->title,
            'status' => $task->status,
            'priority' => $task->priority, // low, medium, high, urgent
            'due_date' => $task->due_date, // تاريخ التسليم
            'is_overdue' => $task->due_date ? now()->greaterThan($task->due_date) && $task->status !== 'done' : false,
            'project' => $task->internalProject,
            'assigned_by' => $task->creator->name ?? 'System',
            'checklist_stats' => [
                'total' => $task->checklists->count(),
                'completed' => $task->checklists->where('is_completed', true)->count(),
                'progress_percentage' => $task->checklists->count() > 0 
                    ? round(($task->checklists->where('is_completed', true)->count() / $task->checklists->count()) * 100) 
                    : 0,
            ],
            'created_at_human' => $task->created_at->diffForHumans(), // "منذ ساعتين" مثلاً
        ];
    });

    // 3. استخراج المشاريع مع إحصائيات سريعة لكل مشروع تخص الموظف
    $myProjects = $tasks->pluck('internalProject')->unique('id')->values()->map(function($project) use ($tasks) {
        return [
            'id' => $project->id,
            'title' => $project->title,
            'my_tasks_in_project' => $tasks->where('internal_project_id', $project->id)->count(),
        ];
    });

    // 4. إحصائيات المهام المتقدمة
    $stats = [
        'total_tasks' => $tasks->count(),
        'todo'        => $tasks->where('status', 'todo')->count(),
        'in_progress' => $tasks->where('status', 'in_progress')->count(),
        'done'        => $tasks->where('status', 'done')->count(),
        'urgent'      => $tasks->where('priority', 'urgent')->where('status', '!=', 'done')->count(),
        'overdue'     => $tasksData->where('is_overdue', true)->count(),
    ];

    // 5. التنبيهات الأخيرة (آخر 5 تنبيهات لم يقرأها)
    $latestNotifications = $user->unreadNotifications()->take(5)->get()->map(function($n) {
        return [
            'id' => $n->id,
            'data' => $n->data,
            'read_at' => $n->read_at,
            'created_at' => $n->created_at->diffForHumans(),
        ];
    });

    return response()->json([
        'status' => 'success',
        'timestamp' => now()->toDateTimeString(),
        'user_info' => [
            'id'    => $user->id,
            'name'  => $user->name,
            'role'  => $user->role,
            'email' => $user->email,
            'department' => $user->department?->name ?? 'No Department',
        ],
        'stats'         => $stats,
        'projects'      => $myProjects,
        'tasks'         => $tasksData,
        'notifications' => $latestNotifications
    ]);
}
}