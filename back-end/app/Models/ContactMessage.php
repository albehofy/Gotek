<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = [
        'full_name',
        'phone',
        'email',
        'company_name',
        'service_needed',
        'budget_range',
        'project_details',
    ];
}
