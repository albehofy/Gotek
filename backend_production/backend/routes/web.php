<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/backend', function () {
    return view('welcome');
});

// Serve uploaded media / images from external uploads directory or fallback storage
Route::get('/uploads/{path}', function ($path) {
    $uploadsRoot = env('UPLOADS_PATH') ?: (is_dir(base_path('../uploads')) ? base_path('../uploads') : (is_dir(public_path('uploads')) ? public_path('uploads') : base_path('../uploads')));
    $filePath = realpath($uploadsRoot . '/' . $path);

    // Fallback: check task_attachments if requested tasks/ or vice versa
    if ((!$filePath || !file_exists($filePath)) && str_starts_with($path, 'tasks/')) {
        $alt = realpath($uploadsRoot . '/task_attachments/' . substr($path, 6));
        if ($alt && file_exists($alt)) $filePath = $alt;
    }
    if ((!$filePath || !file_exists($filePath)) && str_starts_with($path, 'task_attachments/')) {
        $alt = realpath($uploadsRoot . '/tasks/' . substr($path, 17));
        if ($alt && file_exists($alt)) $filePath = $alt;
    }
    if ((!$filePath || !file_exists($filePath)) && str_starts_with($path, 'deals/')) {
        $alt = realpath($uploadsRoot . '/deal_attachments/' . substr($path, 6));
        if ($alt && file_exists($alt)) $filePath = $alt;
    }
    if ((!$filePath || !file_exists($filePath)) && str_starts_with($path, 'deal_attachments/')) {
        $alt = realpath($uploadsRoot . '/deals/' . substr($path, 17));
        if ($alt && file_exists($alt)) $filePath = $alt;
    }

    if (!$filePath || !file_exists($filePath)) {
        $fallback = storage_path('app/public/' . $path);
        if (file_exists($fallback)) {
            $filePath = $fallback;
        }
    }

    if ($filePath && file_exists($filePath) && is_file($filePath)) {
        return response()->file($filePath);
    }

    abort(404);
})->where('path', '.*');

Route::get('/storage/{path}', function ($path) {
    $uploadsRoot = env('UPLOADS_PATH') ?: (is_dir(base_path('../uploads')) ? base_path('../uploads') : (is_dir(public_path('uploads')) ? public_path('uploads') : base_path('../uploads')));
    $filePath = realpath($uploadsRoot . '/' . $path);

    if ((!$filePath || !file_exists($filePath)) && str_starts_with($path, 'tasks/')) {
        $alt = realpath($uploadsRoot . '/task_attachments/' . substr($path, 6));
        if ($alt && file_exists($alt)) $filePath = $alt;
    }
    if ((!$filePath || !file_exists($filePath)) && str_starts_with($path, 'task_attachments/')) {
        $alt = realpath($uploadsRoot . '/tasks/' . substr($path, 17));
        if ($alt && file_exists($alt)) $filePath = $alt;
    }

    if (!$filePath || !file_exists($filePath)) {
        $fallback = storage_path('app/public/' . $path);
        if (file_exists($fallback)) {
            $filePath = $fallback;
        }
    }

    if ($filePath && file_exists($filePath) && is_file($filePath)) {
        return response()->file($filePath);
    }

    abort(404);
})->where('path', '.*');

