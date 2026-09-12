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
        $login = $request->input('email') ?? $request->input('login') ?? $request->input('phone');

        $request->validate([
            'password' => 'required',
        ]);

        if (!$login) {
            return response()->json([
                'success' => false,
                'message' => 'الرجاء إدخال البريد الإلكتروني أو رقم الموبايل'
            ], 422);
        }

        $user = User::where(function ($query) use ($login) {
            $query->where('email', $login)
                  ->orWhere('phone', $login);
        })->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'بيانات الدخول غير صحيحة'
            ], 401);
        }

        if ($user->is_hold) {
            return response()->json([
                'success' => false,
                'is_held' => true,
                'message' => 'تم تعليق هذا الحساب من قبل الإدارة. يرجى مراجعة المسؤول.'
            ], 403);
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
                'phone' => $user->phone,
                'role' => $user->role,
                'department_id' => $user->department_id,
            ]
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'] ?? null,
            'password' => Hash::make($data['password']),
            'role' => $data['role'] ?? 'client'
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'تم إنشاء الحساب بنجاح',
            'token' => $token,
            'token_type' => 'Bearer',
            'role' => $user->role,
            'user' => $user
        ], 201);
    }
}
