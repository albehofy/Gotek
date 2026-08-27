<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'agreed_scope',
        'client_id',
        'department_id',
        'sales_person_id',
        'sales_commission_type',
        'sales_commission_value',
        'total_price',
        'paid_amount',
        'status',
        'created_by',
    ];

    protected $appends = ['calculated_total', 'calculated_paid', 'remaining_balance', 'progress', 'department_breakdown'];

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function salesPerson()
    {
        return $this->belongsTo(User::class, 'sales_person_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class, 'deal_id');
    }

    public function payments()
    {
        return $this->hasMany(ClientPayment::class, 'deal_id')->latest();
    }

    public function getCalculatedTotalAttribute()
    {
        $taskSum = $this->tasks()->whereNull('parent_id')->sum('client_price');
        return $taskSum > 0 ? (float) $taskSum : (float) $this->total_price;
    }

    public function getCalculatedPaidAttribute()
    {
        $paymentSum = $this->payments()->sum('amount');
        return $paymentSum > 0 ? (float) $paymentSum : (float) $this->paid_amount;
    }

    public function getRemainingBalanceAttribute()
    {
        return max(0, $this->getCalculatedTotalAttribute() - $this->getCalculatedPaidAttribute());
    }

    public function getProgressAttribute()
    {
        $totalTasks = $this->tasks()->whereNull('parent_id')->count();
        if ($totalTasks === 0) return 0;
        $completedTasks = $this->tasks()->whereNull('parent_id')->where('status', 'done')->count();
        return round(($completedTasks / $totalTasks) * 100);
    }

    public function getDepartmentBreakdownAttribute()
    {
        $tasks = $this->tasks()->with(['department', 'subCategory.department'])->whereNull('parent_id')->get();
        $breakdown = [];

        foreach ($tasks as $task) {
            $dept = $task->department ?? $task->subCategory?->department ?? $this->department;
            $deptName = $dept ? $dept->name : 'General';
            $deptId = $dept ? $dept->id : 0;

            if (!isset($breakdown[$deptId])) {
                $breakdown[$deptId] = [
                    'department_id' => $deptId,
                    'department_name' => $deptName,
                    'task_count' => 0,
                    'total_client_price' => 0,
                    'total_employee_price' => 0,
                    'company_margin' => 0
                ];
            }

            $breakdown[$deptId]['task_count']++;
            $breakdown[$deptId]['total_client_price'] += (float) $task->client_price;
            $breakdown[$deptId]['total_employee_price'] += (float) $task->employee_price;
            $breakdown[$deptId]['company_margin'] += (float) ($task->client_price - $task->employee_price);
        }

        return array_values($breakdown);
    }
}
