<?php

namespace App\Http\Requests\Service;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // مسموح بالتنفيذ
    }

    public function rules(): array
    {
        return [
            'icon'        => ['sometimes', 'nullable', 'string'],
            'order'       => ['sometimes', 'integer'],
            'cta_url'     => ['sometimes', 'nullable', 'string'],
            'cta_text_en' => ['sometimes', 'nullable', 'string'],
            'cta_text_ar' => ['sometimes', 'nullable', 'string'],

            // تحديث جزئي للغات
            'title'          => ['sometimes', 'array'],
            'title.ar'       => ['required_with:title', 'string'],
            'title.en'       => ['required_with:title', 'string'],

            'description'    => ['sometimes', 'array'],
            'description.ar' => ['required_with:description', 'string'],
            'description.en' => ['required_with:description', 'string'],

            'features'       => ['sometimes', 'nullable', 'array'],
            'stats'          => ['sometimes', 'nullable', 'array'],
        ];
    }
}