<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactInfo;
use Illuminate\Http\JsonResponse;

class ContactInfoController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $info = ContactInfo::query()->first();

        if (! $info) {
            return response()->json([
                'data' => null,
            ]);
        }

        $hours = [];
        if ($info->business_hours_json) {
            $decoded = json_decode($info->business_hours_json, true);
            if (is_array($decoded)) {
                $hours = $decoded;
            }
        }

        return response()->json([
            'whatsapp_support' => [
                'label' => 'WhatsApp Support',
                'phone' => $info->whatsapp_phone,
                'description' => $info->whatsapp_description,
                'cta_label' => $info->whatsapp_cta_label,
            ],
            'official_email' => [
                'icon' => '✉️',
                'label' => 'Official Email',
                'email' => $info->official_email,
                'description' => $info->official_email_description,
                'cta_label' => 'Send Email →',
            ],
            'sales_marketing' => [
                'icon' => '📞',
                'label' => 'Sales & Marketing',
                'phone' => $info->sales_phone,
                'person' => $info->sales_person,
            ],
            'general_manager' => [
                'icon' => '🏢',
                'label' => 'General Manager',
                'phone' => $info->general_manager_phone,
                'description' => $info->general_manager_description,
            ],
            'location' => [
                'icon' => '📍',
                'label' => 'Company Address',
                'address' => $info->company_address,
                'cta_label' => 'View on Google Maps',
                'google_map_location' => $info->google_map_location,
            ],
            'business_hours' => [
                'label' => 'Business Hours',
                'schedule' => [
                    'sunday_thursday' => $hours['sunday_thursday'] ?? null,
                    'saturday' => $hours['saturday'] ?? null,
                    'friday' => $hours['friday'] ?? null,
                ],
                'emergency_support' => $info->emergency_support,
            ],
        ]);
    }
}

