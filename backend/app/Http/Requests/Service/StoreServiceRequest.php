<?php

namespace App\Http\Requests\Service;

use Illuminate\Foundation\Http\FormRequest;

class StoreServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // غيرتها لـ true عشان يشتغل معاك
    }

    public function rules(): array
    {
        return [
'icon'         => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'], // تأكد أنه ملف صورة            'order'       => ['nullable', 'integer'],
            'cta_url'     => ['nullable', 'string', 'max:2048'],
            'cta_text_en' => ['nullable', 'string', 'max:255'],
            'cta_text_ar' => ['nullable', 'string', 'max:255'],

            // حقول مترجمة (Title, Subtitle, Description)
            'title'    => ['required', 'array'],
            'title.ar' => ['required', 'string', 'max:255'],
            'title.en' => ['required', 'string', 'max:255'],

            'subtitle'    => ['nullable', 'array'],
            'subtitle.ar' => ['nullable', 'string', 'max:255'],
            'subtitle.en' => ['nullable', 'string', 'max:255'],

            'description'    => ['required', 'array'],
            'description.ar' => ['required', 'string'],
            'description.en' => ['required', 'string'],

            // حقول الـ JSON المعقدة (Features, Stats)
            'features'    => ['nullable', 'array'], // يجب أن تكون مصفوفة لغات
            'stats'       => ['nullable', 'array'], // مصفوفة كائنات (Objects)
        ];
    }
}