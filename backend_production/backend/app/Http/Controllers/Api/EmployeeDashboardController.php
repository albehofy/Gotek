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

        // 1. Fetch employee's assigned tasks with deal and department
        $tasks = Task::whereHas('users', function($query) use ($user) {
                $query->where('users.id', $user->id);
            })
            ->with([
                'deal:id,title,description,status,department_id,agreed_scope',
                'department:id,name',
                'subCategory:id,name_ar,name_en',
                'attachments'
            ])
            ->latest()
            ->get();

        $totalTasks = $tasks->count();
        $completedTasks = $tasks->filter(function($t) {
            return in_array($t->status, ['done', 'approved', 'completed']);
        })->count();

        $completionPercentage = $totalTasks > 0 ? (int) round(($completedTasks / $totalTasks) * 100) : 0;

        // 2. Deals under employee's work (WITHOUT financial data)
        $myDeals = $tasks->pluck('deal')->filter()->unique('id')->values()->map(function($d) use ($tasks) {
            $dealTasks = $tasks->where('deal_id', $d->id);
            $doneCount = $dealTasks->filter(function($t) {
                return in_array($t->status, ['done', 'approved', 'completed']);
            })->count();

            return [
                'id' => $d->id,
                'title' => $d->title,
                'status' => $d->status,
                'agreed_scope' => $d->agreed_scope,
                'my_tasks_count' => $dealTasks->count(),
                'my_completed_tasks_count' => $doneCount,
                'progress' => $dealTasks->count() > 0 ? (int) round(($doneCount / $dealTasks->count()) * 100) : 0
            ];
        });

        $stats = [
            'total_tasks' => $totalTasks,
            'completed_tasks' => $completedTasks,
            'completion_percentage' => $completionPercentage,
            'in_progress_tasks' => $tasks->whereIn('status', ['in_progress', 'content_creator', 'in_review', 'client_review'])->count(),
            'pending_tasks' => $tasks->whereIn('status', ['new', 'pending'])->count(),
            'deals_count' => $myDeals->count()
        ];

        return response()->json([
            'status' => 'success',
            'user_info' => [
                'id' => $user->id,
                'name' => $user->name,
                'role' => $user->role,
                'email' => $user->email,
                'department' => $user->department?->name ?? 'العام',
            ],
            'stats' => $stats,
            'deals' => $myDeals,
            'tasks' => $tasks
        ]);
    }
}