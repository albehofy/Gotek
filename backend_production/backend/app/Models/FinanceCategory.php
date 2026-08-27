<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinanceCategory extends Model
{
    use HasFactory;

    protected $fillable = ['name_ar', 'name_en', 'type', 'is_system', 'is_active'];

    public function ledgerEntries()
    {
        return $this->hasMany(LedgerEntry::class, 'category_id');
    }
}
