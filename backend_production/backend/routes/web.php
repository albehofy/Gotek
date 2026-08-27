<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/backend', function () {
    return view('welcome');
});

// Serve uploaded media / images from external uploads directory or fallback storage
Route::get('/storage/{path}', function ($path) {
    $uploadsRoot = env('UPLOADS_PATH') ?: (is_dir(base_path('../uploads')) ? base_path('../uploads') : storage_path('app/public'));
    $filePath = realpath($uploadsRoot . '/' . $path);

    // Also check default storage path if not found in uploadsRoot
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
