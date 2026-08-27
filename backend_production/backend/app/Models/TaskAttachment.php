<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskAttachment extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'file_path',
        'file_type',
        'file_name',
        'file_size',
        'uploaded_by',
    ];

    protected $appends = ['file_url', 'is_image'];

    public function getFileUrlAttribute()
    {
        if (!$this->file_path) return null;
        if (str_starts_with($this->file_path, 'http://') || str_starts_with($this->file_path, 'https://')) {
            return $this->file_path;
        }
        return asset('storage/' . ltrim($this->file_path, '/'));
    }

    public function getIsImageAttribute()
    {
        $ext = strtolower(pathinfo($this->file_path, PATHINFO_EXTENSION));
        return in_array($ext, ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg']) || str_contains($this->file_type, 'image');
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function uploader()
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }
}
