<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Deal;
use App\Models\Department;

class DealsApiTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected User $client;
    protected Department $department;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create([
            'role' => 'admin'
        ]);

        $this->client = User::factory()->create([
            'role' => 'client'
        ]);

        $this->department = Department::create([
            'name' => 'Marketing Department',
            'manager_id' => $this->admin->id
        ]);
    }

    public function test_admin_can_list_and_create_deals()
    {
        $responseCreate = $this->actingAs($this->admin)->postJson('/api/deals', [
            'title' => 'Website Redesign Deal',
            'description' => 'Complete website overhaul',
            'client_id' => $this->client->id,
            'department_id' => $this->department->id,
            'total_price' => 15000,
            'paid_amount' => 5000,
            'tasks' => [
                [
                    'title' => 'Design wireframes',
                    'client_price' => 5000
                ]
            ]
        ]);

        $responseCreate->assertStatus(201)
            ->assertJsonPath('status', 'success')
            ->assertJsonPath('data.title', 'Website Redesign Deal');

        $dealId = $responseCreate->json('data.id');

        $responseIndex = $this->actingAs($this->admin)->getJson('/api/deals');
        $responseIndex->assertStatus(200);

        $responseShow = $this->actingAs($this->admin)->getJson("/api/deals/{$dealId}");
        $responseShow->assertStatus(200)
            ->assertJsonPath('title', 'Website Redesign Deal');
    }

    public function test_admin_can_update_and_delete_deal()
    {
        $deal = Deal::create([
            'title' => 'SEO Campaign',
            'client_id' => $this->client->id,
            'department_id' => $this->department->id,
            'created_by' => $this->admin->id,
            'total_price' => 8000,
            'status' => 'pending'
        ]);

        $updateResponse = $this->actingAs($this->admin)->putJson("/api/deals/{$deal->id}", [
            'title' => 'SEO Campaign Updated',
            'total_price' => 10000,
            'status' => 'active'
        ]);

        $updateResponse->assertStatus(200)
            ->assertJsonPath('data.title', 'SEO Campaign Updated')
            ->assertJsonPath('data.status', 'active');

        $deleteResponse = $this->actingAs($this->admin)->deleteJson("/api/deals/{$deal->id}");
        $deleteResponse->assertStatus(200)
            ->assertJsonPath('message', 'تم حذف الصفقة بنجاح');

        $this->assertDatabaseMissing('deals', ['id' => $deal->id]);
    }

    public function test_client_access_restriction_on_deals()
    {
        $otherClient = User::factory()->create(['role' => 'client']);

        $deal = Deal::create([
            'title' => 'Confidential Deal',
            'client_id' => $otherClient->id,
            'created_by' => $this->admin->id,
            'total_price' => 5000,
            'status' => 'active'
        ]);

        $response = $this->actingAs($this->client)->getJson("/api/deals/{$deal->id}");
        $response->assertStatus(403);
    }
}
