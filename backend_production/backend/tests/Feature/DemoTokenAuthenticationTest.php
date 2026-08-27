<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Database\Seeders\DatabaseSeeder;

class DemoTokenAuthenticationTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(DatabaseSeeder::class);
    }

    public function test_demo_super_admin_token_can_access_protected_apis(): void
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer demo_super_admin_token',
            'Accept' => 'application/json',
        ])->getJson('/api/notifications');

        $response->assertStatus(200);

        $responseUsers = $this->withHeaders([
            'Authorization' => 'Bearer demo_super_admin_token',
            'Accept' => 'application/json',
        ])->getJson('/api/users');

        $responseUsers->assertStatus(200);

        $responseDeals = $this->withHeaders([
            'Authorization' => 'Bearer demo_super_admin_token',
            'Accept' => 'application/json',
        ])->getJson('/api/deals');

        $responseDeals->assertStatus(200);
    }
}
