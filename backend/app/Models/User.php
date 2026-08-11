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
        'name',
        'email',
        'password',
        'role',
        'role_id',
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
            'base_salary' => 'decimal:2',
            'commission_rate' => 'decimal:2',
        ];
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

    public function hasPermission($permissionSlug)
    {
        if ($this->role === 'super_admin' || $this->role === 'Super Admin') {
            return true;
        }

        if ($this->roleModel) {
            return $this->roleModel->permissions->pluck('slug')->contains($permissionSlug);
        }

        return false;
    }
}