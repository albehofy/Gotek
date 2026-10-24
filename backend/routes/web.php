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
    return serveAppMediaFile($path);
})->where('path', '.*');

Route::get('/storage/{path}', function ($path) {
    return serveAppMediaFile($path);
})->where('path', '.*');

function serveAppMediaFile($path) {
    $cleanPath = ltrim($path, '/');
    $fileName = basename($cleanPath);

    $candidates = [
        base_path('../uploads/' . $cleanPath),
        base_path('../uploads/' . $fileName),
        public_path('uploads/' . $cleanPath),
        public_path('uploads/' . $fileName),
        storage_path('app/public/' . $cleanPath),
        storage_path('app/public/' . $fileName),
        storage_path('app/' . $cleanPath),
        base_path('../uploads/tasks/' . $fileName),
        base_path('../uploads/task_attachments/' . $fileName),
        base_path('../uploads/deals/' . $fileName),
        base_path('../uploads/users/' . $fileName),
        storage_path('app/public/tasks/' . $fileName),
        storage_path('app/public/deals/' . $fileName)
    ];

    $filePath = null;
    foreach ($candidates as $candidate) {
        if ($candidate && file_exists($candidate) && is_file($candidate)) {
            $filePath = $candidate;
            break;
        }
    }

    if (!$filePath) {
        abort(404, 'الملف المطلوب غير موجود في النظام');
    }

    $mime = mime_content_type($filePath) ?: 'application/octet-stream';
    $ext = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));
    if ($ext === 'svg') $mime = 'image/svg+xml';
    if ($ext === 'webp') $mime = 'image/webp';
    if (in_array($ext, ['jpg', 'jpeg'])) $mime = 'image/jpeg';
    if ($ext === 'png') $mime = 'image/png';
    if ($ext === 'pdf') $mime = 'application/pdf';
    if (in_array($ext, ['doc', 'docx'])) $mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    $headers = [
        'Access-Control-Allow-Origin' => '*',
        'Access-Control-Allow-Methods' => 'GET, OPTIONS',
        'Access-Control-Allow-Headers' => '*',
        'Content-Type' => $mime,
        'Cache-Control' => 'public, max-age=31536000',
    ];

    if (request()->has('download') || request()->query('dl') == '1') {
        return response()->download($filePath, $fileName, [
            'Access-Control-Allow-Origin' => '*',
            'Content-Type' => $mime
        ]);
    }

    return response()->file($filePath, $headers);
}

