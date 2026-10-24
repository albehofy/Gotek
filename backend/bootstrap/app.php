<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Auth\AuthenticationException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        channels: __DIR__.'/../routes/channels.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->api(append: [
            \App\Http\Middleware\SetLanguage::class,
        ]);
        $middleware->alias([
            'role' => \App\Http\Middleware\CheckRole::class,
            'check.role' => \App\Http\Middleware\CheckRole::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->render(function (NotFoundHttpException $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Resource or endpoint not found'
                ], 404);
            }
        });

        $exceptions->render(function (AuthenticationException $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Unauthenticated'
                ], 401);
            }
        });

        $exceptions->render(function (\Illuminate\Database\QueryException $e, Request $request) {
            if ($request->is('api/*')) {
                $code = $e->errorInfo[1] ?? 0;
                $sqlState = $e->errorInfo[0] ?? '';

                if ($code == 1451 || $code == 1452 || $sqlState === '23000') {
                    $msg = 'تعذر تنفيذ العملية لوجود سجلات أو بيانات مرتبطة بهذا العنصر في النظام';
                    if (config('app.debug')) {
                        $msg .= ' (' . $e->getMessage() . ')';
                    }
                    return response()->json([
                        'status' => 'error',
                        'message' => $msg
                    ], 422);
                }

                $msg = 'حدث خطأ في قاعدة البيانات أثناء معالجة الطلب';
                if (config('app.debug')) {
                    $msg .= ': ' . $e->getMessage();
                }
                return response()->json([
                    'status' => 'error',
                    'message' => $msg
                ], 500);
            }
        });

        $exceptions->render(function (\Throwable $e, Request $request) {
            if ($request->is('api/*')) {
                if ($e instanceof \Illuminate\Validation\ValidationException ||
                    $e instanceof NotFoundHttpException ||
                    $e instanceof AuthenticationException ||
                    $e instanceof \Illuminate\Database\QueryException) {
                    return null;
                }

                \Illuminate\Support\Facades\Log::error('API Unhandled Exception: ' . $e->getMessage(), [
                    'url' => $request->fullUrl(),
                    'method' => $request->method(),
                    'trace' => $e->getTraceAsString(),
                ]);

                $message = config('app.debug')
                    ? $e->getMessage()
                    : 'حدث خطأ في الخادم أثناء معالجة الطلب، يُرجى المحاولة مرة أخرى لاحقاً';

                return response()->json([
                    'status' => 'error',
                    'message' => $message
                ], 500);
            }
        });
    })
    ->create();
