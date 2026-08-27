<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
// المسار الصحيح في الإصدارات الجديدة
use Illuminate\Contracts\Broadcasting\ShouldBroadcast; 
use Illuminate\Notifications\Messages\BroadcastMessage;

class TaskAssignedNotification extends Notification implements ShouldBroadcast
{
    use Queueable;

    public $task;

    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    public function via($notifiable)
    {
        // بنبعت تنبيه في الداتابيز وكمان Real-time (Broadcast)
        return ['database', 'broadcast'];
    }

    public function toArray($notifiable)
    {
        return [
            'task_id' => $this->task->id,
            'task_title' => $this->task->title,
            'message' => 'تم تعيين مهمة جديدة لك: ' . $this->task->title,
        ];
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'task_id' => $this->task->id,
            'task_title' => $this->task->title,
            'message' => 'تم تعيين مهمة جديدة لك: ' . $this->task->title,
        ]);
    }
}