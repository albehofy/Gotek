<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskCustomFieldValue extends Model
{
    use HasFactory;

    protected $fillable = ['task_id', 'custom_field_id', 'value'];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function field()
    {
        return $this->belongsTo(TaskCustomField::class, 'custom_field_id');
    }
}
