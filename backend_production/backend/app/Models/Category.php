<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Category extends Model
{
    use HasTranslations;

    // أضف description هنا ليصبح قابلاً للترجمة
    public $translatable = ['name', 'description']; 

    // أضف description هنا للسماح بالإدخال الجماعي
    protected $fillable = ['name', 'description', 'slug', 'image'];

    public function projects() {
        return $this->hasMany(Project::class);
    }
}