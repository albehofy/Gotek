<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Department;

class InternalProjectsAndMiscApiTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected User $employee;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create(['role' => 'admin']);
        $this->employee = User::factory()->create(['role' => 'employee']);
    }

    public function test_internal_projects_crud()
    {
        $dept = Department::create(['name' => 'Internal Operations']);

        // Store
        $storeRes = $this->actingAs($this->admin)->postJson('/api/internal-projects', [
            'title' => 'Office Renovation',
            'department_id' => $dept->id,
            'start_date' => now()->toDateString(),
            'description' => 'Internal infrastructure work',
            'first_task_title' => 'Purchase Furniture',
            'assigned_to' => $this->employee->id
        ]);
        $storeRes->assertStatus(201);
        $projId = $storeRes->json('data.id');

        // Index
        $this->actingAs($this->admin)->getJson('/api/internal-projects')->assertStatus(200);

        // Show
        $this->actingAs($this->admin)->getJson("/api/internal-projects/{$projId}")
            ->assertStatus(200)
            ->assertJsonPath('title', 'Office Renovation');

        // Delete
        $delRes = $this->actingAs($this->admin)->deleteJson("/api/internal-projects/{$projId}");
        $delRes->assertStatus(200);
    }

    public function test_employee_dashboard_and_media_cleanup()
    {
        $dashRes = $this->actingAs($this->employee)->getJson('/api/employee/dashboard');
        $dashRes->assertStatus(200)->assertJsonPath('status', 'success');

        $cleanRes = $this->actingAs($this->admin)->postJson('/api/media/cleanup-old', [
            'years' => 2
        ]);
        $cleanRes->assertStatus(200)->assertJsonPath('status', 'success');
    }
}
