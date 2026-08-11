<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckPermission
{
    public function handle(Request $request, Closure $next, ...$permissions)
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'يجب تسجيل الدخول أولاً'], 401);
        }

        $user = Auth::user();

        // Super Admin bypasses all permission checks
        if ($user->role === 'super_admin' || $user->role === 'Super Admin') {
            return $next($request);
        }

        foreach ($permissions as $permission) {
            if ($user->hasPermission($permission)) {
                return $next($request);
            }
        }

        return response()->json(['message' => 'ليس لديك صلاحية للقيام بهذا الإجراء'], 403);
    }
}
