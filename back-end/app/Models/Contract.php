<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contract extends Model
{
    use SoftDeletes;

    protected $fillable = ['client_id', 'admin_id', 'title', 'content', 'signed_at', 'audit_log'];

    protected $casts = [
        'audit_log' => 'array', // عشان يتعامل مع الـ JSON كـ Array أوتوماتيك
        'signed_at' => 'datetime'
    ];

    public function client() {
        return $this->belongsTo(User::class, 'client_id');
    }
}
