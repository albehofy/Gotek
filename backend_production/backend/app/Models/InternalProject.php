<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InternalProject extends Model
{
    use SoftDeletes;

    protected $fillable = ['title', 'description', 'department_id', 'status', 'start_date', 'end_date'];

    public function department() {
        return $this->belongsTo(Department::class);
    }

    public function tasks() {
        return $this->hasMany(Task::class, 'internal_project_id');
    }
public function contract() {
    return $this->hasOne(Contract::class, 'internal_project_id');
}
    // ميزة إضافية: حساب نسبة الإنجاز تلقائياً
    public function getProgressAttribute() {
        $total = $this->tasks()->count();
        if ($total == 0) return 0;
        
        $completed = $this->tasks()->where('status', 'done')->count();
        return round(($completed / $total) * 100);
    }
}