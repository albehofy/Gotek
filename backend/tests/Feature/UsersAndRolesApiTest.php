<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Role;
use App\Models\Permission;
use App\Models\Department;

class UsersAndRolesApiTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create(['role' => 'admin']);
    }

    public function test_user_crud_operations()
    {
        $dept = Department::create(['name' => 'IT Support']);

        // 1. Create User
        $createRes = $this->actingAs($this->admin)->postJson('/api/users', [
            'name' => 'John Staff',
            'email' => 'john.staff@example.com',
            'phone' => '01000001111',
            'password' => 'password123',
            'role' => 'employee',
            'department_id' => $dept->id,
            'payment_type' => 'salary_based',
            'base_salary' => 6000
        ]);

        $createRes->assertStatus(201)
            ->assertJsonPath('status', 'success')
            ->assertJsonPath('data.email', 'john.staff@example.com');

        $userId = $createRes->json('data.id');

        // 2. Index Users
        $this->actingAs($this->admin)->getJson('/api/users')->assertStatus(200);

        // 3. Update User
        $updateRes = $this->actingAs($this->admin)->putJson("/api/users/{$userId}", [
            'name' => 'John Staff Senior',
            'email' => 'john.staff@example.com',
            'role' => 'employee',
            'base_salary' => 7500
        ]);
        $updateRes->assertStatus(200)
            ->assertJsonPath('data.name', 'John Staff Senior');

        // 4. Assign Department
        $newDept = Department::create(['name' => 'DevOps']);
        $patchRes = $this->actingAs($this->admin)->patchJson("/api/users/{$userId}/assign-department", [
            'department_id' => $newDept->id
        ]);
        $patchRes->assertStatus(200);

        // 5. Delete User
        $delRes = $this->actingAs($this->admin)->deleteJson("/api/users/{$userId}");
        $delRes->assertStatus(200);
    }

    public function test_roles_and_permissions_management()
    {
        $perm = Permission::create(['name' => 'manage-finance', 'slug' => 'manage-finance']);

        // 1. Store Role
        $roleRes = $this->actingAs($this->admin)->postJson('/api/roles', [
            'name' => 'Finance Manager',
            'slug' => 'finance_manager',
            'description' => 'Role for finance staff',
            'permission_ids' => [$perm->id]
        ]);

        $roleRes->assertStatus(201)
            ->assertJsonPath('status', 'success')
            ->assertJsonPath('data.slug', 'finance_manager');

        $roleId = $roleRes->json('data.id');

        // 2. List Roles
        $this->actingAs($this->admin)->getJson('/api/roles')->assertStatus(200);

        // 3. Update Role Permissions
        $perm2 = Permission::create(['name' => 'view-reports', 'slug' => 'view-reports']);
        $permUpdate = $this->actingAs($this->admin)->putJson("/api/roles/{$roleId}/permissions", [
            'permission_ids' => [$perm->id, $perm2->id]
        ]);
        $permUpdate->assertStatus(200);

        // 4. Assign Role to User
        $employee = User::factory()->create(['role' => 'employee']);
        $assignRes = $this->actingAs($this->admin)->postJson("/api/roles/users/{$employee->id}/assign", [
            'role' => 'manager',
            'role_id' => $roleId
        ]);
        $assignRes->assertStatus(200);
    }
}
