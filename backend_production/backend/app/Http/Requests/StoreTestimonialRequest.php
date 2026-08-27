<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTestimonialRequest extends FormRequest
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
            'client_name'  => 'required|string|max:255',
            'job_title'    => 'required|string|max:255',
            'feedback'     => 'required|array',
            'feedback.ar'  => 'required|string',
            'feedback.en'  => 'required|string',
            'rating'       => 'required|integer|min:1|max:5',
            'company_name' => 'nullable|string|max:255',
            'avatar_color' => 'nullable|string|max:7',
        ];
    }
}
