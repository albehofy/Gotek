<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Role;
use App\Models\Deal;
use App\Models\Task;
use App\Models\ClientPayment;
use App\Models\Department;

class ClientProfileAndBalancesFeatureTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected User $clientUser;
    protected Department $dept;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create(['role' => 'admin']);
        $this->clientUser = User::factory()->create([
            'role' => 'client',
            'client_code' => '1002',
            'name' => 'مطاعم السلطان',
            'email' => 'alsultan@gmail.com',
            'phone' => '010936667',
            'is_hold' => false
        ]);
        $this->dept = Department::create(['name' => 'الجرافيك']);
    }

    public function test_client_profile_returns_expected_structure_and_stats()
    {
        // 1. Create a deal for this client
        $deal = Deal::create([
            'client_id' => $this->clientUser->id,
            'department_id' => $this->dept->id,
            'title' => 'تصميم منيو وش وضهر',
            'total_price' => 600,
            'paid_amount' => 200,
            'status' => 'active',
            'created_by' => $this->admin->id
        ]);

        // 2. Add a payment
        ClientPayment::create([
            'deal_id' => $deal->id,
            'client_id' => $this->clientUser->id,
            'amount' => 200,
            'payment_date' => now()->toDateString(),
            'payment_method' => 'cash',
            'created_by' => $this->admin->id
        ]);

        // 3. Add a task
        Task::create([
            'deal_id' => $deal->id,
            'department_id' => $this->dept->id,
            'title' => 'تصميم الصفحة الأولى', 'description' => 'وصف المهمة',
            'status' => 'approved',
            'priority' => 'medium'
        ]);

        $response = $this->actingAs($this->admin)->getJson("/api/clients/{$this->clientUser->id}/profile");

        $response->assertStatus(200)
            ->assertJsonPath('status', 'success')
            ->assertJsonPath('data.client.id', $this->clientUser->id)
            ->assertJsonPath('data.client.client_code', '1002')
            ->assertJsonPath('data.client.name', 'مطاعم السلطان')
            ->assertJsonPath('data.stats.total_billed', 600)
            ->assertJsonPath('data.stats.total_paid', 200)
            ->assertJsonPath('data.stats.remaining_balance', 400)
            ->assertJsonPath('data.stats.deals_count', 1)
            ->assertJsonPath('data.stats.tasks_count', 1)
            ->assertJsonPath('data.stats.completed_tasks_count', 1);

        $this->assertIsArray($response->json('data.deals.all'));
        $this->assertIsArray($response->json('data.payments'));
        $this->assertIsArray($response->json('data.tasks'));
    }

    public function test_get_client_balances_for_admin()
    {
        $response = $this->actingAs($this->admin)->getJson('/api/finance/client-balances');

        $response->assertStatus(200)
            ->assertJsonPath('status', 'success');

        $data = $response->json('data');
        $this->assertIsArray($data);
        $this->assertNotEmpty($data);

        $found = collect($data)->firstWhere('id', $this->clientUser->id);
        $this->assertNotNull($found);
        $this->assertEquals('1002', $found['client_code']);
        $this->assertEquals(false, $found['is_hold']);
        $this->assertArrayHasKey('total_billed', $found);
        $this->assertArrayHasKey('total_paid', $found);
        $this->assertArrayHasKey('outstanding_balance', $found);
    }

    public function test_get_client_balances_forbidden_for_clients()
    {
        $response = $this->actingAs($this->clientUser)->getJson('/api/finance/client-balances');
        $response->assertStatus(403);
    }

    public function test_users_index_type_client_matches_all_client_role_configurations()
    {
        // Multi-role client via roles pivot
        $clientRole = Role::firstOrCreate(['slug' => 'client'], ['name' => 'Client']);
        $pivotClient = User::factory()->create([
            'role' => 'user',
            'client_code' => '1003',
            'name' => 'عميل الأدوار المتعددة',
            'email' => 'pivotclient@example.com'
        ]);
        $pivotClient->roles()->sync([$clientRole->id]);

        $response = $this->actingAs($this->admin)->getJson('/api/users?type=client');

        $response->assertStatus(200)
            ->assertJsonPath('status', 'success');

        $users = $response->json('data');
        $ids = collect($users)->pluck('id')->all();

        $this->assertContains($this->clientUser->id, $ids);
        $this->assertContains($pivotClient->id, $ids);
        $this->assertNotContains($this->admin->id, $ids);
    }
}
