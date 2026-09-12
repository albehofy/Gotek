<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'client_code',
        'name',
        'email',
        'phone',
        'password',
        'role',
        'role_id',
        'is_hold',
        'department_id',
        'payment_type',
        'base_salary',
        'commission_rate',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_hold' => 'boolean',
            'base_salary' => 'decimal:2',
            'commission_rate' => 'decimal:2',
        ];
    }

    protected static function booted()
    {
        static::creating(function ($user) {
            if ($user->role === 'client' && empty($user->client_code)) {
                $maxCode = \Illuminate\Support\Facades\DB::table('users')
                    ->whereNotNull('client_code')
                    ->max(\Illuminate\Support\Facades\DB::raw('CAST(client_code AS UNSIGNED)'));
                $user->client_code = (string) max(1001, ($maxCode ? $maxCode + 1 : 1001));
            }
        });
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_user');
    }

    public function scopeActiveOnly($query)
    {
        return $query->where('is_hold', false);
    }

    public function roleModel()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'task_user');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function managedDepartment()
    {
        return $this->hasOne(Department::class, 'manager_id');
    }

    public function customNotifications()
    {
        return $this->hasMany(NotificationModel::class, 'user_id')->latest();
    }

    public function payrollRecords()
    {
        return $this->hasMany(PayrollRecord::class, 'employee_id');
    }

    public function custodyAccounts()
    {
        return $this->hasMany(CustodyAccount::class, 'employee_id');
    }

    public function hasRole($roleSlug)
    {
        if ($this->role === $roleSlug) {
            return true;
        }
        if ($this->roles && $this->roles->pluck('slug')->contains($roleSlug)) {
            return true;
        }
        return false;
    }

    public function hasPermission($permissionSlug)
    {
        if ($this->role === 'super_admin' || $this->role === 'Super Admin' || $this->hasRole('super_admin')) {
            return true;
        }

        if ($this->roleModel && $this->roleModel->permissions->pluck('slug')->contains($permissionSlug)) {
            return true;
        }

        foreach ($this->roles as $r) {
            if ($r->permissions->pluck('slug')->contains($permissionSlug)) {
                return true;
            }
        }

        return false;
    }
}