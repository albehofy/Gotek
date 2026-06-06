<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class FAQ extends Model
{
    protected $table = 'faqs';
    protected $fillable = [
        'question_en', 
        'question_ar', 
        'answer_en', 
        'answer_ar', 
        'sort_order', 
        'is_active'
    ];
}
