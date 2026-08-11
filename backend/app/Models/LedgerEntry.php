<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LedgerEntry extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'type',
        'category_id',
        'department_id',
        'deal_id',
        'client_id',
        'employee_id',
        'amount',
        'payment_method',
        'description',
        'receipt_path',
        'created_by',
    ];

    public function category()
    {
        return $this->belongsTo(FinanceCategory::class, 'category_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function deal()
    {
        return $this->belongsTo(Deal::class);
    }

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function employee()
    {
        return $this->belongsTo(User::class, 'employee_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
