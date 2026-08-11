<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name'     => 'required|string|min:3|max:50',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|string|min:8', 
            'password_confirmation' => 'required|string|min:8|same:password',
            'role'     => 'nullable|string|in:admin,manager,employee,client'
        ];
    }
    public function messages(): array
    {
        return [
            'name.required'     => 'الاسم ضروري لتعريف الأدمن.',
            'email.unique'      => 'هذا البريد الإلكتروني مسجل مسبقاً لدينا.',
            'password.confirmed' => 'كلمتا السر غير متطابقتين، تأكد من حقل التأكيد.',
            'password.min'       => 'كلمة السر يجب أن تكون 8 رموز على الأقل لأمان حسابك.',
            'role.in'           => 'الدور غير صالح، اختر من: admin, manager, employee, client.',
        ];
    }
}
