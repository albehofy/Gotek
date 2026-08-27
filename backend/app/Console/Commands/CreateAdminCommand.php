<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class CreateAdminCommand extends Command
{
    protected $signature = 'make:admin {email=admin@mediaglowegypt.com} {password=Mm123} {name=Media Glow Super Admin}';
    protected $description = 'Create or update a Super Admin account';

    public function handle(): int
    {
        $email = $this->argument('email');
        $password = $this->argument('password');
        $name = $this->argument('name');

        $superAdminRole = Role::firstOrCreate(
            ['slug' => 'super_admin'],
            ['name' => 'Super Admin', 'description' => 'System-wide full administrative access']
        );

        $user = User::updateOrCreate(
            ['email' => $email],
            [
                'name' => $name,
                'password' => Hash::make($password),
                'role' => 'super_admin',
                'role_id' => $superAdminRole->id,
                'payment_type' => 'salary_based',
                'base_salary' => 25000.00,
            ]
        );

        $this->info(" Super Admin created/updated successfully!");
        $this->table(
            ['Name', 'Email', 'Password', 'Role'],
            [[$user->name, $user->email, $password, $user->role]]
        );

        return 0;
    }
}
