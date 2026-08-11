<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectImage extends Model
{
    // السماح بإضافة مسار الصورة ومعرف المشروع
    protected $fillable = ['project_id', 'image_path'];

    // علاقة عكسية: الصورة تنتمي لمشروع واحد
    public function project() {
        return $this->belongsTo(Project::class);
    }
}
