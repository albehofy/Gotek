<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Deal;
use App\Models\Task;
use App\Models\Department;
use App\Models\NotificationModel;

class NotificationsAndClientPortalApiTest extends TestCase
{
    use RefreshDatabase;

    protected User $client;
    protected User $admin;
    protected Department $department;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create(['role' => 'admin']);
        $this->client = User::factory()->create(['role' => 'client']);
        $this->department = Department::create(['name' => 'General Dept', 'manager_id' => $this->admin->id]);
    }

    public function test_notifications_api_lifecycle()
    {
        $notif = NotificationModel::create([
            'user_id' => $this->admin->id,
            'type' => 'system',
            'title' => 'Test Notification',
            'message' => 'Notification content body',
            'is_read' => false
        ]);

        // Index
        $resIndex = $this->actingAs($this->admin)->getJson('/api/notifications');
        $resIndex->assertStatus(200)->assertJsonPath('unread_count', 1);

        // Unread
        $resUnread = $this->actingAs($this->admin)->getJson('/api/notifications/unread');
        $resUnread->assertStatus(200)->assertJsonPath('unread_count', 1);

        // Mark Single as Read
        $resMark = $this->actingAs($this->admin)->postJson("/api/notifications/{$notif->id}/read");
        $resMark->assertStatus(200);

        // Mark All as Read
        $resMarkAll = $this->actingAs($this->admin)->postJson('/api/notifications/read-all');
        $resMarkAll->assertStatus(200);

        // Delete
        $resDel = $this->actingAs($this->admin)->deleteJson("/api/notifications/{$notif->id}");
        $resDel->assertStatus(200);
    }

    public function test_client_portal_dashboard_note_and_approval()
    {
        $deal = Deal::create([
            'title' => 'Client Project Deal',
            'client_id' => $this->client->id,
            'created_by' => $this->admin->id,
            'total_price' => 12000,
            'status' => 'active'
        ]);

        $task = Task::create([
            'title' => 'Social Media Content Plan',
            'description' => 'Plan details',
            'department_id' => $this->department->id,
            'deal_id' => $deal->id,
            'client_id' => $this->client->id,
            'client_price' => 4000,
            'status' => 'in_review',
            'priority' => 'high'
        ]);

        // Dashboard
        $dashRes = $this->actingAs($this->client)->getJson('/api/client-portal/dashboard');
        $dashRes->assertStatus(200)
            ->assertJsonPath('data.client_name', $this->client->name);

        // Add Note
        $noteRes = $this->actingAs($this->client)->postJson("/api/client-portal/tasks/{$task->id}/note", [
            'note' => 'Please update line 3 of content plan'
        ]);
        $noteRes->assertStatus(201);

        $task->refresh();
        $this->assertEquals('changes_requested', $task->status);

        // Approve Task
        $appRes = $this->actingAs($this->client)->postJson("/api/client-portal/tasks/{$task->id}/approve");
        $appRes->assertStatus(200);

        $task->refresh();
        $this->assertEquals('approved', $task->status);
    }
}
