<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'بيانات الدخول غير صحيحة يا فنان'], 401);
        }

        // إنشاء التوكن (مفتاح الدخول)
        $token = $user->createToken('admin-token')->plainTextToken;

        return response()->json([
            'message' => 'أهلاً بك يا أدمن',
            'token' => $token,
            $user->role,
            $user->id
        ]);
    }
    /**
 * تسجيل مستخدم جديد (أدمن)
 * @unauthenticated
 */
public function register(RegisterRequest $request)
{
    $request->validated(); // سيتم التعامل مع الأخطاء تلقائياً من خلال FormRequest


    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'role' => $request->role ?? 'client' // لو ما تم تحديد دور، نخليه موظف بشكل افتراضي
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'تم إنشاء الحساب بنجاح يا فنان',
        'access_token' => $token,
        'token_type' => 'Bearer',
        'role' => $user->role // عشان الـ Front يعرف هو دخل بـ أنهي صلاحية
    ], 201);
}
}
