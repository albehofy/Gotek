<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Project;
use SebastianBergmann\CodeCoverage\Report\Xml\Project as XmlProject;

class Department extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'description', 'manager_id'];

    public function manager() {
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function projects() {
return $this->hasMany(InternalProject::class, 'department_id');    }

    public function members() {
        return $this->hasMany(User::class);
    }
}