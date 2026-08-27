<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlogRequest extends FormRequest
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
    public function rules(): array
    {
        return [
            'title'          => 'required|array',
            'title.en'       => 'required|string|max:255',
            'title.ar'       => 'required|string|max:255',
            'description'    => 'required|array',
            'description.en' => 'required|string',
            'description.ar' => 'required|string',
            'media'          => 'nullable|file|mimes:jpg,jpeg,png,mp4,mov,avi|max:20480',
            'media_type'     => 'nullable|in:image,video',
            'img_alt'        => 'nullable|string|max:255',
        ];
    }
}
