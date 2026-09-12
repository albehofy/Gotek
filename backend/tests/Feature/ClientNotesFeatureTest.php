<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Role;
use App\Models\Permission;
use App\Models\Department;
use App\Models\Deal;
use App\Models\Task;
use App\Models\ClientPayment;

class ClientNotesFeatureTest extends TestCase
{
    use RefreshDatabase;

    protected $admin;
    protected $client;
    protected $employee;
    protected $superRole;
    protected $adminRole;
    protected $clientRole;
    protected $employeeRole;
    protected $dept;

    protected function setUp(): void
    {
        parent::setUp();

        $this->superRole = Role::create(['name' => 'Super Admin', 'slug' => 'super_admin']);
        $this->adminRole = Role::create(['name' => 'Admin', 'slug' => 'admin']);
        $this->clientRole = Role::create(['name' => 'Client', 'slug' => 'client']);
        $this->employeeRole = Role::create(['name' => 'Employee', 'slug' => 'employee']);

        $this->dept = Department::create(['name' => 'Photography & Editing']);

        $this->admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@test.com',
            'password' => bcrypt('password'),
            'role' => 'super_admin',
            'role_id' => $this->superRole->id,
        ]);

        $this->client = User::create([
            'name' => 'Test Client',
            'email' => 'client@test.com',
            'password' => bcrypt('password'),
            'role' => 'client',
            'role_id' => $this->clientRole->id,
        ]);

        $this->employee = User::create([
            'name' => 'Staff Member',
            'email' => 'staff@test.com',
            'password' => bcrypt('password'),
            'role' => 'employee',
            'role_id' => $this->employeeRole->id,
            'department_id' => $this->dept->id,
        ]);
    }

    public function test_client_code_is_generated_starting_from_1001()
    {
        $this->assertEquals('1001', $this->client->client_code);

        $client2 = User::create([
            'name' => 'Client 2',
            'email' => 'client2@test.com',
            'password' => bcrypt('password'),
            'role' => 'client',
        ]);
        $this->assertEquals('1002', $client2->client_code);
    }

    public function test_toggle_hold_on_user()
    {
        $this->actingAs($this->admin);

        $response = $this->patchJson("/api/users/{$this->employee->id}/toggle-hold");
        $response->assertStatus(200);
        $this->assertTrue($this->employee->fresh()->is_hold);

        // Try assigning member on hold
        $task = Task::create([
            'title' => 'Sample Task',
            'description' => 'Sample description',
            'department_id' => $this->dept->id,
            'priority' => 'high',
            'status' => 'new'
        ]);

        $assignRes = $this->postJson("/api/tasks/{$task->id}/assign", [
            'user_ids' => [$this->employee->id]
        ]);
        $assignRes->assertStatus(422);

        // Un-hold
        $this->patchJson("/api/users/{$this->employee->id}/toggle-hold");
        $this->assertFalse($this->employee->fresh()->is_hold);

        // Assign now succeeds
        $assignRes2 = $this->postJson("/api/tasks/{$task->id}/assign", [
            'user_ids' => [$this->employee->id]
        ]);
        $assignRes2->assertStatus(200);
    }

    public function test_multi_role_checkboxes_support()
    {
        $this->actingAs($this->admin);

        $response = $this->postJson("/api/users", [
            'name' => 'Multi Role User',
            'email' => 'multi@test.com',
            'password' => 'secret123',
            'role' => 'employee',
            'role_ids' => [$this->employeeRole->id, $this->adminRole->id]
        ]);
        $response->assertStatus(201);

        $newUser = User::where('email', 'multi@test.com')->first();
        $this->assertCount(2, $newUser->roles);
    }

    public function test_client_profile_endpoint_calculates_finances_accurately()
    {
        $this->actingAs($this->admin);

        $deal = Deal::create([
            'title' => 'Big Deal',
            'description' => 'Big deal description',
            'client_id' => $this->client->id,
            'created_by' => $this->admin->id,
            'total_price' => 10000,
            'paid_amount' => 4000,
            'status' => 'active'
        ]);

        ClientPayment::create([
            'deal_id' => $deal->id,
            'client_id' => $this->client->id,
            'amount' => 4000,
            'payment_date' => now(),
            'payment_method' => 'cash',
            'created_by' => $this->admin->id,
        ]);

        $response = $this->getJson("/api/clients/{$this->client->id}/profile");
        $response->assertStatus(200);
        $data = $response->json('data');

        $this->assertEquals(10000, $data['stats']['total_billed']);
        $this->assertEquals(4000, $data['stats']['total_paid']);
        $this->assertEquals(6000, $data['stats']['remaining_balance']);
        $this->assertCount(1, $data['deals']['all']);
    }

    public function test_client_approval_workflow_restrictions()
    {
        $deal = Deal::create([
            'title' => 'Design Project',
            'description' => 'Design project description',
            'client_id' => $this->client->id,
            'created_by' => $this->admin->id,
            'total_price' => 5000,
            'status' => 'active'
        ]);

        $task = Task::create([
            'title' => 'Logo Concept',
            'description' => 'Logo task description',
            'department_id' => $this->dept->id,
            'deal_id' => $deal->id,
            'priority' => 'medium',
            'status' => 'in_progress'
        ]);

        // Client cannot approve while in progress
        $this->actingAs($this->client);
        $failRes = $this->postJson("/api/client-portal/tasks/{$task->id}/approve");
        $failRes->assertStatus(422);

        // Put in review
        $task->update(['status' => 'client_review']);
        $okRes = $this->postJson("/api/client-portal/tasks/{$task->id}/approve");
        $okRes->assertStatus(200);
        $this->assertEquals('approved', $task->fresh()->status);
    }

    public function test_role_crud_operations()
    {
        $this->actingAs($this->admin);

        // Create
        $createRes = $this->postJson("/api/roles", [
            'name' => 'Copywriter',
            'slug' => 'copywriter',
            'description' => 'Content creator role'
        ]);
        $createRes->assertStatus(201);
        $roleId = $createRes->json('data.id');

        // Update
        $updateRes = $this->putJson("/api/roles/{$roleId}", [
            'name' => 'Senior Copywriter',
            'slug' => 'senior_copywriter'
        ]);
        $updateRes->assertStatus(200);
        $this->assertEquals('Senior Copywriter', Role::find($roleId)->name);

        // Delete custom role
        $delRes = $this->deleteJson("/api/roles/{$roleId}");
        $delRes->assertStatus(200);
        $this->assertNull(Role::find($roleId));

        // System role protection
        $protRes = $this->deleteJson("/api/roles/{$this->superRole->id}");
        $protRes->assertStatus(403);
    }
}
