<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLanguage
{
    public function handle(Request $request, Closure $next)
    {
        // قراءة الـ Header والتأكد من أنه نص وليس null
        $rawLocale = $request->header('lang') ?: $request->header('Accept-Language');

        if ($rawLocale) {
            // أخذ أول حرفين بأمان
            $locale = strtolower(substr($rawLocale, 0, 2));

            if (in_array($locale, ['ar', 'en'])) {
                app()->setLocale($locale);
                return $next($request);
            }
        }

        // اللغة الافتراضية إذا لم يرسل شيئاً أو أرسل لغة غير مدعومة
        app()->setLocale(config('app.fallback_locale', 'en'));

        return $next($request);
    }
}