<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contract extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'client_id',
        'admin_id',
        'deal_id',
        'title',
        'content',
        'signed_at',
        'audit_log'
    ];

    protected $casts = [
        'audit_log' => 'array',
        'signed_at' => 'datetime'
    ];

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function deal()
    {
        return $this->belongsTo(Deal::class, 'deal_id');
    }
}
