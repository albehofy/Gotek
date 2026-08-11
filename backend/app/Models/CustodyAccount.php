<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustodyAccount extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'issued_amount',
        'returned_amount',
        'spent_amount',
        'status',
        'notes',
        'created_by',
    ];

    public function employee()
    {
        return $this->belongsTo(User::class, 'employee_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
