<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PayrollRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'month',
        'year',
        'payment_type',
        'base_salary',
        'task_earnings',
        'commission_earnings',
        'advances',
        'deductions',
        'bonuses',
        'net_payable',
        'status',
        'paid_at',
    ];

    public function employee()
    {
        return $this->belongsTo(User::class, 'employee_id');
    }
}
