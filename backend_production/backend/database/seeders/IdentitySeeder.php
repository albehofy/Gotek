<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Department;
use Illuminate\Support\Facades\Hash;

class IdentitySeeder extends Seeder
{
    public function up(): void
    {
        // 1. إنشاء قسم تجريبي
        $dept = Department::create([
            'name' => 'Backend Development',
            'description' => 'Responsible for API and Server logic'
        ]);

        // 2. إنشاء مستخدمين لكل Role
        $roles = ['admin', 'manager', 'team_lead', 'employee', 'client', 'viewer'];

        foreach ($roles as $role) {
            User::create([
                'name' => "Test " . ucfirst($role),
                'email' => $role . "@mediaglow.com",
                'password' => Hash::make('password'),
                'role' => $role,
                'department_id' => ($role !== 'admin' && $role !== 'client') ? $dept->id : null,
            ]);
        }
    }
}