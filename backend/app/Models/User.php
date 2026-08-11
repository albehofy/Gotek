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
        'department_id', // أضفنا ده عشان نربط المدير بقسمه
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
        ];
    }

    // علاقة المستخدم بالمهام (Many-to-Many)
    public function tasks()
    {
        return $this->belongsToMany(Task::class);
    }

    // علاقة المستخدم بالقسم (كل مدير أو موظف ينتمي لقسم)
    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}