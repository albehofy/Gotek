<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */public function rules(): array
{
{
    return [
        'icon'         => ['nullable', 'string'],
        'order'        => ['nullable', 'integer'],
        'cta_url'      => ['nullable', 'string'],
        'cta_text_en'  => ['nullable', 'string'],
        'cta_text_ar'  => ['nullable', 'string'],
        'title'        => ['required', 'array'],
        'title.ar'     => ['required', 'string'],
        'title.en'     => ['required', 'string'],
        'subtitle'     => ['nullable', 'array'],
        'subtitle.ar'  => ['nullable', 'string'],
        'subtitle.en'  => ['nullable', 'string'],
        'description'  => ['required', 'array'],
        'description.ar' => ['required', 'string'],
        'description.en' => ['required', 'string'],
        // إضافة الـ Features والـ Stats هنا عشان الـ validated() يشوفهم
        'features'     => ['nullable', 'array'], 
        'stats'        => ['nullable', 'array'],
    ];
}
}}
