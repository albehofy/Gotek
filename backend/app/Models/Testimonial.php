<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = ['client_name', 'job_title', 'company_name', 'feedback', 'rating', 'avatar_color'];
    protected $casts = [
        'feedback' => 'array',
    ];
}
