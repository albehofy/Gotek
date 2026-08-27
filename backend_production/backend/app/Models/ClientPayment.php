<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'deal_id',
        'client_id',
        'amount',
        'payment_date',
        'payment_method',
        'receipt_ref',
        'notes',
        'created_by',
    ];

    public function deal()
    {
        return $this->belongsTo(Deal::class);
    }

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
