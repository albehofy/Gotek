<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
class Service extends Model
{
use HasTranslations;

    protected $fillable = [
        'icon', 'title', 'subtitle', 'description', 
        'features', 'stats', 'cta_text_en', 'cta_text_ar', 'cta_url', 'order'
    ];

    // الحقول التي تقبل لغات (JSON في قاعدة البيانات)
    public $translatable = ['title', 'subtitle', 'description', 'features', 'stats'];}
