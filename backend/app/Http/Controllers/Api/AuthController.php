<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
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

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'بيانات الدخول غير صحيحة يا فنان'
            ], 401);
        }

        // Create Sanctum Token
        $token = $user->createToken('admin-token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'تم تسجيل الدخول بنجاح',
            'token' => $token,
            'role' => $user->role,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
                'department_id' => $user->department_id,
            ]
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $request->validated();

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role ?? 'client'
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'تم إنشاء الحساب بنجاح يا فنان',
            'token' => $token,
            'token_type' => 'Bearer',
            'role' => $user->role,
            'user' => $user
        ], 201);
    }
}
