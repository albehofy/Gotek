<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use App\Models\TaskChecklist;
class Task extends Model
{
    use SoftDeletes, HasFactory;
use LogsActivity;

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnly(['title', 'status', 'description']) // الحقول اللي تهمنا
            ->logOnlyDirty() // يسجل التعديل بس لو القيمة اتغيرت فعلاً
            ->dontSubmitEmptyLogs();
    }
    // تأكد من إضافة internal_project_id و user_id في الـ fillable
    protected $fillable = [
        'title', 
        'description', 
        'project_id', 
        'internal_project_id', 
        'deal_id',
        'client_price',
        'employee_price',
        'department_id', 
        'priority', 
        'status', 
        'estimated_hours',
        'user_id' // منشئ التاسك
    ];

    // 1. علاقة المشروع الداخلي
    public function internalProject()
    {
        return $this->belongsTo(InternalProject::class, 'internal_project_id');
    }

    // 2. الموظفين المسند إليهم التاسك (علاقة Many-to-Many)
    public function users()
    {
        return $this->belongsToMany(User::class, 'task_user'); 
    }

    public function assignedMembers()
    {
        return $this->users();
    }

    // 3. منشئ التاسك
    public function creator()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // 4. المرفقات (Polymorphic)
    public function attachments()
    {
        return $this->morphMany(Attachment::class, 'attachable');
    }

    // 5. الـ Checklist
    public function checklists()
    {
        return $this->hasMany(TaskChecklist::class, 'task_id');
    }

    // 6. تاريخ تغيير الحالات
    public function statusHistories()
    {
        return $this->hasMany(TaskStatusHistory::class);
    }

    // 7. الـ Deal المرتبط
    public function deal()
    {
        return $this->belongsTo(Deal::class, 'deal_id');
    }

    // 8. الملاحظات (Notes)
    public function notes()
    {
        return $this->hasMany(TaskNote::class, 'task_id');
    }
}