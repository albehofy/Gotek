<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title', 
        'description', 
        'media_path', 
        'media_type', 
        'loves_count',
        'img_alt'
    ];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
    ];
}