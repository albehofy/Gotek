<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'scope',
        'deal_id',
        'client_id',
        'department_id',
        'sub_category_id',
        'parent_id',
        'priority',
        'status',
        'due_date',
        'start_date',
        'end_date',
        'shooting_date',
        'delivery_date',
        'dates_not_specified',
        'is_standalone',
        'estimated_hours',
        'client_price',
        'employee_price',
        'company_margin',
    ];

    protected $attributes = [
        'description' => '',
        'priority' => 'medium',
        'status' => 'new',
        'client_price' => 0,
        'employee_price' => 0,
        'company_margin' => 0,
        'dates_not_specified' => false,
        'is_standalone' => false,
    ];

    protected $casts = [
        'dates_not_specified' => 'boolean',
        'is_standalone' => 'boolean',
        'due_date' => 'date',
        'start_date' => 'date',
        'end_date' => 'date',
        'shooting_date' => 'date',
        'delivery_date' => 'date',
    ];

    protected $appends = ['computed_margin', 'subtasks_count'];

    protected static function booted()
    {
        static::saving(function ($task) {
            $task->company_margin = max(0, (float) $task->client_price - (float) $task->employee_price);

            // Synchronize description and scope so task details/specs are never lost
            if (!empty($task->description) && empty($task->scope)) {
                $task->scope = $task->description;
            } elseif (!empty($task->scope) && empty($task->description)) {
                $task->description = $task->scope;
            } elseif ($task->isDirty('description') && !$task->isDirty('scope')) {
                $task->scope = $task->description;
            } elseif ($task->isDirty('scope') && !$task->isDirty('description')) {
                $task->description = $task->scope;
            }

            // Automatically sync client_id from deal if deal_id is provided and client_id is empty
            if ($task->deal_id && empty($task->client_id)) {
                $dealClientId = Deal::where('id', $task->deal_id)->value('client_id');
                if ($dealClientId) {
                    $task->client_id = $dealClientId;
                }
            }
        });

        static::saved(function ($task) {
            $task->syncDealAndFinance();
        });

        static::deleted(function ($task) {
            $task->syncDealOnDelete();
        });

        static::restored(function ($task) {
            $task->syncDealAndFinance();
        });
    }

    public function syncDealAndFinance()
    {
        $dealsToSync = array_filter(array_unique([
            $this->deal_id,
            $this->getOriginal('deal_id')
        ]));

        foreach ($dealsToSync as $dId) {
            $deal = Deal::find($dId);
            if ($deal) {
                // 1. Recalculate total_price from sum of client_price of top-level tasks
                $taskSum = (float) Task::where('deal_id', $deal->id)->whereNull('parent_id')->sum('client_price');
                if ($taskSum > 0) {
                    $deal->total_price = $taskSum;
                }

                // 2. Department sync if deal has no department
                if (!$deal->department_id && $this->department_id) {
                    $deal->department_id = $this->department_id;
                }

                $deal->saveQuietly();
            }
        }

        // 3. Log to Deal Activity History if task belongs to a deal
        if ($this->deal_id) {
            $user = \Illuminate\Support\Facades\Auth::user();
            $userName = $user?->name ?? 'مستخدم النظام';

            if ($this->wasRecentlyCreated) {
                $this->logDealActivity(
                    $this->deal_id,
                    "تمت إضافة مهمة جديدة للصفقة: \"{$this->title}\" بسعر عميل " . number_format((float)$this->client_price, 2) . " ج.م ومستحقات موظف " . number_format((float)$this->employee_price, 2) . " ج.م بواسطة {$userName}",
                    'task_created',
                    [
                        'title' => 'إضافة مهمة جديدة للصفقة',
                        'task_id' => $this->id,
                        'task_title' => $this->title,
                        'client_price' => (float)$this->client_price,
                        'employee_price' => (float)$this->employee_price,
                        'icon' => 'fa-plus-circle',
                        'color' => '#10b981'
                    ]
                );
            } else {
                if ($this->wasChanged('client_price')) {
                    $oldPrice = (float) $this->getOriginal('client_price');
                    $newPrice = (float) $this->client_price;
                    $this->logDealActivity(
                        $this->deal_id,
                        "تم تعديل سعر المهمة \"{$this->title}\" من " . number_format($oldPrice, 2) . " ج.م إلى " . number_format($newPrice, 2) . " ج.م بواسطة {$userName}",
                        'task_price_change',
                        [
                            'title' => 'تعديل سعر المهمة',
                            'task_id' => $this->id,
                            'task_title' => $this->title,
                            'old' => $oldPrice,
                            'new' => $newPrice,
                            'icon' => 'fa-money-bill-wave',
                            'color' => '#10b981'
                        ]
                    );
                }

                if ($this->wasChanged('employee_price')) {
                    $oldEmp = (float) $this->getOriginal('employee_price');
                    $newEmp = (float) $this->employee_price;
                    $this->logDealActivity(
                        $this->deal_id,
                        "تم تعديل مستحقات الموظف للمهمة \"{$this->title}\" من " . number_format($oldEmp, 2) . " ج.م إلى " . number_format($newEmp, 2) . " ج.م بواسطة {$userName}",
                        'task_employee_price_change',
                        [
                            'title' => 'تعديل مستحق الموظف',
                            'task_id' => $this->id,
                            'task_title' => $this->title,
                            'old' => $oldEmp,
                            'new' => $newEmp,
                            'icon' => 'fa-hand-holding-dollar',
                            'color' => '#f59e0b'
                        ]
                    );
                }

                if ($this->wasChanged('status')) {
                    $statusMap = [
                        'new' => 'جديدة',
                        'todo' => 'بانتظار البدء',
                        'in_progress' => 'قيد التنفيذ',
                        'content_creator' => 'كتابة المحتوى',
                        'in_review' => 'قيد المراجعة الفنية',
                        'client_review' => 'مراجعة العميل',
                        'client_feedback' => 'ملاحظات وتعديلات',
                        'done' => 'مكتملة',
                        'completed' => 'مكتملة',
                        'approved' => 'معتمدة نهائياً',
                        'cancelled' => 'ملغاة'
                    ];
                    $oldStatusLabel = $statusMap[$this->getOriginal('status')] ?? $this->getOriginal('status');
                    $newStatusLabel = $statusMap[$this->status] ?? $this->status;
                    $this->logDealActivity(
                        $this->deal_id,
                        "تم تغيير حالة المهمة \"{$this->title}\" من [{$oldStatusLabel}] إلى [{$newStatusLabel}] بواسطة {$userName}",
                        'task_status_change',
                        [
                            'title' => 'تغيير حالة مهمة',
                            'task_id' => $this->id,
                            'task_title' => $this->title,
                            'old' => $oldStatusLabel,
                            'new' => $newStatusLabel,
                            'icon' => 'fa-bars-progress',
                            'color' => '#8b5cf6'
                        ]
                    );
                }

                if ($this->wasChanged('title')) {
                    $oldTitle = $this->getOriginal('title');
                    $this->logDealActivity(
                        $this->deal_id,
                        "تم تعديل عنوان المهمة من \"{$oldTitle}\" إلى \"{$this->title}\" بواسطة {$userName}",
                        'task_title_change',
                        [
                            'title' => 'تعديل عنوان مهمة',
                            'task_id' => $this->id,
                            'old' => $oldTitle,
                            'new' => $this->title,
                            'icon' => 'fa-pen-to-square',
                            'color' => '#6366f1'
                        ]
                    );
                }

                if ($this->wasChanged('deal_id') && $this->getOriginal('deal_id')) {
                    $this->logDealActivity(
                        $this->deal_id,
                        "تم نقل وضم المهمة \"{$this->title}\" إلى هذه الصفقة بواسطة {$userName}",
                        'task_transferred',
                        [
                            'title' => 'إلحاق مهمة بالصفقة',
                            'task_id' => $this->id,
                            'task_title' => $this->title,
                            'icon' => 'fa-right-left',
                            'color' => '#06b6d4'
                        ]
                    );
                }
            }
        }
    }

    public function syncDealOnDelete()
    {
        if ($this->deal_id) {
            $deal = Deal::find($this->deal_id);
            if ($deal) {
                $taskSum = (float) Task::where('deal_id', $deal->id)->whereNull('parent_id')->sum('client_price');
                $deal->total_price = $taskSum;
                $deal->saveQuietly();
            }

            $user = \Illuminate\Support\Facades\Auth::user();
            $userName = $user?->name ?? 'مستخدم النظام';

            $this->logDealActivity(
                $this->deal_id,
                "تم حذف المهمة \"{$this->title}\" من الصفقة بواسطة {$userName}",
                'task_deleted',
                [
                    'title' => 'حذف مهمة من الصفقة',
                    'task_id' => $this->id,
                    'task_title' => $this->title,
                    'icon' => 'fa-trash-can',
                    'color' => '#f43f5e'
                ]
            );
        }
    }

    private function logDealActivity($dealId, $description, $field, array $properties = [])
    {
        try {
            $user = \Illuminate\Support\Facades\Auth::user();
            $mergedProps = array_merge([
                'field' => $field,
                'causer_id' => $user?->id,
                'causer_name' => $user?->name ?? 'مستخدم النظام',
                'causer_role' => $user?->role ?? 'admin',
                'causer_email' => $user?->email ?? '',
                'created_at_human' => now()->translatedFormat('d M Y - h:i A')
            ], $properties);

            \Illuminate\Support\Facades\DB::table('activity_log')->insert([
                'log_name' => 'deal',
                'description' => $description,
                'subject_type' => Deal::class,
                'subject_id' => $dealId,
                'causer_type' => User::class,
                'causer_id' => $user?->id ?? 1,
                'properties' => json_encode($mergedProps, JSON_UNESCAPED_UNICODE),
                'created_at' => now(),
                'updated_at' => now()
            ]);
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::warning('Task deal activity log failed: ' . $e->getMessage());
        }
    }

    public function getComputedMarginAttribute()
    {
        return max(0, (float) $this->client_price - (float) $this->employee_price);
    }


    public function getSubtasksCountAttribute()
    {
        return $this->subtasks()->count();
    }

    public function deal()
    {
        return $this->belongsTo(Deal::class);
    }

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function parent()
    {
        return $this->belongsTo(Task::class, 'parent_id');
    }

    public function subtasks()
    {
        return $this->hasMany(Task::class, 'parent_id')->with('users');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'task_user');
    }

    public function attachments()
    {
        return $this->hasMany(TaskAttachment::class, 'task_id')->latest();
    }

    public function notes()
    {
        return $this->hasMany(TaskNote::class, 'task_id')->with('user')->latest();
    }

    public function customFieldValues()
    {
        return $this->hasMany(TaskCustomFieldValue::class, 'task_id')->with('field');
    }

    public function assignedMembers()
    {
        return $this->belongsToMany(User::class, 'task_user');
    }

    public function checklists()
    {
        return $this->hasMany(TaskChecklist::class, 'task_id');
    }

    public function internalProject()
    {
        return $this->belongsTo(InternalProject::class, 'internal_project_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}