<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactInfo extends Model
{
    protected $fillable = [
        'whatsapp_phone',
        'whatsapp_description',
        'whatsapp_cta_label',
        'official_email',
        'official_email_description',
        'sales_phone',
        'sales_person',
        'general_manager_phone',
        'general_manager_description',
        'company_address',
        'google_map_location',
        'business_hours_json',
        'emergency_support',
    ];
}

