<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactInfoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'whatsapp_phone' => ['required', 'string', 'max:50'],
            'whatsapp_description' => ['nullable', 'string', 'max:255'],
            'whatsapp_cta_label' => ['nullable', 'string', 'max:255'],

            'official_email' => ['required', 'email', 'max:255'],
            'official_email_description' => ['nullable', 'string', 'max:255'],

            'sales_phone' => ['nullable', 'string', 'max:50'],
            'sales_person' => ['nullable', 'string', 'max:255'],

            'general_manager_phone' => ['nullable', 'string', 'max:50'],
            'general_manager_description' => ['nullable', 'string', 'max:255'],

            'company_address' => ['required', 'string', 'max:255'],
            'google_map_location' => ['required', 'string', 'max:2048'],

            'business_hours' => ['required', 'array'],
            'business_hours.sunday_thursday' => ['required', 'string', 'max:255'],
            'business_hours.saturday' => ['required', 'string', 'max:255'],
            'business_hours.friday' => ['required', 'string', 'max:255'],

            'emergency_support' => ['nullable', 'string', 'max:255'],
        ];
    }

    public function validated($key = null, $default = null)
    {
        $data = parent::validated($key, $default);

        if (isset($data['business_hours'])) {
            $data['business_hours_json'] = json_encode($data['business_hours']);
            unset($data['business_hours']);
        }

        return $data;
    }
}

