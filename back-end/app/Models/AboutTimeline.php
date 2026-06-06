<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutTimeline extends Model
{
    protected $fillable = [
        'year', 'title', 'description', 'order_index'
    ];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
        'order_index' => 'integer'
    ];
}
