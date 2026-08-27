<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaskChecklist extends Model
{
    protected $fillable = ['task_id', 'item_description','item_text', 'is_completed'];

public function task() {
    return $this->belongsTo(Task::class);
}
}
