<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskCustomField extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'field_type', 'options', 'is_required'];

    protected $casts = [
        'options' => 'array',
        'is_required' => 'boolean',
    ];

    public function values()
    {
        return $this->hasMany(TaskCustomFieldValue::class, 'custom_field_id');
    }
}
