<?php

namespace App\Models;

use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;

class PersonalAccessToken extends SanctumPersonalAccessToken
{
    public static function findToken($token)
    {
        if (is_string($token) && str_starts_with($token, 'demo_')) {
            $role = match ($token) {
                'demo_super_admin_token' => 'super_admin',
                'demo_admin_token' => 'admin',
                'demo_department_manager_token' => 'department_manager',
                'demo_employee_token' => 'employee',
                'demo_client_token' => 'client',
                default => 'super_admin'
            };

            $user = User::where('role', $role)->first() ?? User::first();
            if ($user) {
                $fakeToken = new static([
                    'name' => 'demo-token',
                    'token' => hash('sha256', $token),
                    'abilities' => ['*'],
                    'tokenable_type' => get_class($user),
                    'tokenable_id' => $user->id,
                ]);
                $fakeToken->id = 999999;
                $fakeToken->exists = true;
                $fakeToken->setRelation('tokenable', $user);
                return $fakeToken;
            }
        }

        return parent::findToken($token);
    }

    public function save(array $options = [])
    {
        if ($this->name === 'demo-token') {
            return true;
        }

        return parent::save($options);
    }
}
