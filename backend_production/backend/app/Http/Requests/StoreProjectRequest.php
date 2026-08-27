<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
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
     */
    public function rules(): array {
    return [
         'title' => 'required|array',
        'title.en' => 'required|string|max:255',
        'title.ar' => 'required|string|max:255',

        'description' => 'required|array',
        'description.en' => 'required|string',
        'description.ar' => 'required|string',
        'main_image' => 'required|image',
        'category_id' => 'required|exists:categories,id',
        'img_alt' => 'nullable|string|max:255', // نص بديل للصورة
    ];
}
    // 3. رسائل الخطأ بالعربي (اختياري)
    public function messages(): array
    {
        return [
            'title.required' => 'عنوان المشروع مطلوب يا فنان.',
            'main_image.required' => 'لا بد من وجود صورة أساسية للمشروع.',
            'main_image.image' => 'الملف يجب أن يكون صورة فقط.',
        ];
    }
}
