<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'manager_id',
        'has_partner',
        'partner_name',
        'partner_percentage',
    ];

    protected $casts = [
        'has_partner' => 'boolean',
        'partner_percentage' => 'decimal:2',
    ];

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function employees()
    {
        return $this->hasMany(User::class, 'department_id');
    }

    public function subCategories()
    {
        return $this->hasMany(SubCategory::class, 'department_id');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class, 'department_id');
    }

    public function deals()
    {
        return $this->hasMany(Deal::class, 'department_id');
    }

    public function fixedAssets()
    {
        return $this->hasMany(FixedAsset::class, 'department_id');
    }

    public function ledgerEntries()
    {
        return $this->hasMany(LedgerEntry::class, 'department_id');
    }
}