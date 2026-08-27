<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FixedAsset extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'value',
        'purchase_date',
        'department_id',
        'is_partnered_asset',
        'status',
        'notes',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
