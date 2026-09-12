<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        // 1. التأكد إن اليوزر مسجل دخول
        if (!Auth::check()) {
            return response()->json(['message' => 'يجب تسجيل الدخول أولاً'], 401);
        }

        // 2. التأكد إن الـ role بتاعه موجود ضمن المسموح لهم في الـ Route
        $user = Auth::user();
        $hasRole = in_array($user->role, $roles) ||
            (method_exists($user, 'hasRole') && collect($roles)->contains(fn($r) => $user->hasRole($r)));

        if (!$hasRole) {
            return response()->json(['message' => 'ليس لديك صلاحية للقيام بهذا الإجراء'], 403);
        }

        return $next($request);
    }
}