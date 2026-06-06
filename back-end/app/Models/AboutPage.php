<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutPage extends Model
{
    protected $fillable = [
        'hero', 'story', 'vision', 'mission', 'values', 'team_text'
    ];

    protected $casts = [
        'hero' => 'array',
        'story' => 'array',
        'vision' => 'array',
        'mission' => 'array',
        'values' => 'array',
        'team_text' => 'array',
    ];
}
