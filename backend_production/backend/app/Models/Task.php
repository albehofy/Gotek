<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'scope',
        'deal_id',
        'department_id',
        'sub_category_id',
        'parent_id',
        'priority',
        'status',
        'estimated_hours',
        'client_price',
        'employee_price',
        'company_margin',
    ];

    protected $appends = ['computed_margin', 'subtasks_count'];

    protected static function booted()
    {
        static::saving(function ($task) {
            $task->company_margin = max(0, (float) $task->client_price - (float) $task->employee_price);
        });
    }

    public function getComputedMarginAttribute()
    {
        return max(0, (float) $this->client_price - (float) $this->employee_price);
    }


    public function getSubtasksCountAttribute()
    {
        return $this->subtasks()->count();
    }

    public function deal()
    {
        return $this->belongsTo(Deal::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function parent()
    {
        return $this->belongsTo(Task::class, 'parent_id');
    }

    public function subtasks()
    {
        return $this->hasMany(Task::class, 'parent_id')->with('users');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'task_user');
    }

    public function attachments()
    {
        return $this->hasMany(TaskAttachment::class, 'task_id')->latest();
    }

    public function notes()
    {
        return $this->hasMany(TaskNote::class, 'task_id')->with('user')->latest();
    }

    public function customFieldValues()
    {
        return $this->hasMany(TaskCustomFieldValue::class, 'task_id')->with('field');
    }

    public function assignedMembers()
    {
        return $this->belongsToMany(User::class, 'task_user');
    }

    public function checklists()
    {
        return $this->hasMany(TaskChecklist::class, 'task_id');
    }

    public function internalProject()
    {
        return $this->belongsTo(InternalProject::class, 'internal_project_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}