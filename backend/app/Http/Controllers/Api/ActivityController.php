<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Http\Request;
use App\Models\Task;

class ActivityController extends Controller
{
    /**
     * عرض سجل النشاطات بناءً على الصلاحيات
     */
   public function index()
{
    $user = auth()->user();

    // 1. الأدمن (أحمد) - يرى كل شيء
    if ($user->role === 'admin') {
        return response()->json(
            Activity::with('causer')->latest()->paginate(15)
        );
    }

    // 2. مدير القسم - تعديل الفلتر ليكون أكثر مرونة
    if ($user->role === 'manager') {
        return response()->json(
            Activity::with('causer')
                ->where('subject_type', 'App\Models\Task')
                ->whereHasMorph('subject', [\App\Models\Task::class], function ($query) use ($user) {
                    // لو المدير ملوش قسم، ممكن نخليه يشوف المهام اللي ملهاش قسم برضه (اختياري)
                    if ($user->department_id) {
                        $query->where('department_id', $user->department_id);
                    }
                })
                ->latest()
                ->paginate(15)
        );
    }

    return response()->json(['message' => 'غير مصرح لك'], 403);
}
}