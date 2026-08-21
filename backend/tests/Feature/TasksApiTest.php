<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Task;
use App\Models\Department;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class TasksApiTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected User $employee;
    protected Department $department;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create(['role' => 'admin']);
        $this->employee = User::factory()->create(['role' => 'employee']);
        $this->department = Department::create(['name' => 'Design Department', 'manager_id' => $this->admin->id]);
    }

    public function test_task_crud_and_status_updates()
    {
        // 1. Create Task
        $createRes = $this->actingAs($this->admin)->postJson('/api/tasks', [
            'title' => 'Design Landing Page',
            'description' => 'Create Figma mockups',
            'department_id' => $this->department->id,
            'priority' => 'high',
            'status' => 'in_progress',
            'client_price' => 5000,
            'employee_price' => 3000,
            'user_ids' => [$this->employee->id]
        ]);

        $createRes->assertStatus(201)
            ->assertJsonPath('status', 'success')
            ->assertJsonPath('data.title', 'Design Landing Page');

        $taskId = $createRes->json('data.id');

        // 2. Index & Show
        $this->actingAs($this->admin)->getJson('/api/tasks')->assertStatus(200);
        $this->actingAs($this->admin)->getJson("/api/tasks/{$taskId}")
            ->assertStatus(200)
            ->assertJsonPath('title', 'Design Landing Page');

        // 3. Update Task
        $updateRes = $this->actingAs($this->admin)->putJson("/api/tasks/{$taskId}", [
            'title' => 'Design Landing Page V2',
            'department_id' => $this->department->id,
            'priority' => 'urgent',
            'status' => 'in_progress',
            'client_price' => 6000,
            'employee_price' => 3500
        ]);

        $updateRes->assertStatus(200)
            ->assertJsonPath('data.title', 'Design Landing Page V2');

        // 4. Update Status Only
        $statusRes = $this->actingAs($this->admin)->putJson("/api/tasks/{$taskId}/status", [
            'status' => 'done'
        ]);

        $statusRes->assertStatus(200)
            ->assertJsonPath('data.status', 'done');

        // 5. Delete Task
        $delRes = $this->actingAs($this->admin)->deleteJson("/api/tasks/{$taskId}");
        $delRes->assertStatus(200);
    }

    public function test_task_notes_attachments_and_activity()
    {
        Storage::fake('public');

        $task = Task::create([
            'title' => 'Backend Development',
            'description' => 'API implementation',
            'department_id' => $this->department->id,
            'priority' => 'medium',
            'status' => 'in_progress',
            'client_price' => 4000,
            'employee_price' => 2000
        ]);

        // Add Note
        $noteRes = $this->actingAs($this->admin)->postJson("/api/tasks/{$task->id}/notes", [
            'note' => "Hi @{$this->employee->name}, check the swagger documentation!"
        ]);
        $noteRes->assertStatus(201);

        // Upload Attachment
        $file = UploadedFile::fake()->create('document.pdf', 100);
        $attachRes = $this->actingAs($this->admin)->postJson("/api/tasks/{$task->id}/attachments", [
            'file' => $file
        ]);
        $attachRes->assertStatus(201);
        $attachmentId = $attachRes->json('data.id');

        // Get Activity
        $actRes = $this->actingAs($this->admin)->getJson("/api/tasks/{$task->id}/activity");
        $actRes->assertStatus(200);

        // Delete Attachment
        $delAttach = $this->actingAs($this->admin)->deleteJson("/api/tasks/{$task->id}/attachments/{$attachmentId}");
        $delAttach->assertStatus(200);
    }

    public function test_subtasks_and_checklists()
    {
        $task = Task::create([
            'title' => 'Parent Task',
            'description' => 'Parent description',
            'department_id' => $this->department->id,
            'priority' => 'high',
            'status' => 'in_progress'
        ]);

        // Subtask
        $subRes = $this->actingAs($this->admin)->postJson("/api/tasks/{$task->id}/subtasks", [
            'title' => 'Child Subtask',
            'priority' => 'medium'
        ]);
        $subRes->assertStatus(201);
        $subtaskId = $subRes->json('data.id');

        $toggleSub = $this->actingAs($this->admin)->putJson("/api/tasks/subtasks/{$subtaskId}/toggle");
        $toggleSub->assertStatus(200)->assertJsonPath('data.status', 'done');

        $delSub = $this->actingAs($this->admin)->deleteJson("/api/tasks/subtasks/{$subtaskId}");
        $delSub->assertStatus(200);

        // Checklist
        $clStore = $this->actingAs($this->admin)->postJson("/api/tasks/{$task->id}/checklist", [
            'item_text' => 'Check database connection'
        ]);
        $clStore->assertStatus(201);
        $checkListId = $clStore->json('data.id');

        $this->actingAs($this->admin)->getJson("/api/tasks/{$task->id}/checklist")->assertStatus(200);

        $clToggle = $this->actingAs($this->admin)->putJson("/api/checklist/{$checkListId}/toggle");
        $clToggle->assertStatus(200)->assertJsonPath('is_completed', true);

        $clDel = $this->actingAs($this->admin)->deleteJson("/api/tasks/checklist/{$checkListId}");
        $clDel->assertStatus(200);
    }

    public function test_custom_fields()
    {
        $cfStore = $this->actingAs($this->admin)->postJson('/api/tasks/custom-fields', [
            'name' => 'Reviewer Email',
            'field_type' => 'text',
            'is_required' => false
        ]);
        $cfStore->assertStatus(201);

        $cfGet = $this->actingAs($this->admin)->getJson('/api/tasks/custom-fields');
        $cfGet->assertStatus(200);
    }
}
