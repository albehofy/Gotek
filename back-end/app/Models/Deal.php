<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Deal extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'client_id',
        'total_price',
        'paid_amount',
        'status',
        'created_by'
    ];

    protected $casts = [
        'total_price' => 'float',
        'paid_amount' => 'float',
    ];

    // relations
    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class, 'deal_id');
    }

    // Accessors
    public function getProgressAttribute()
    {
        $total = $this->tasks()->count();
        if ($total === 0) {
            return 0;
        }
        $completed = $this->tasks()->where('status', 'done')->count();
        return round(($completed / $total) * 100);
    }

    public function getRemainingBalanceAttribute()
    {
        return max(0, $this->total_price - $this->paid_amount);
    }
}
