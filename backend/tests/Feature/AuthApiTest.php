<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_login_with_valid_email_credentials()
    {
        $user = User::factory()->create([
            'email' => 'testuser@example.com',
            'password' => Hash::make('secret123'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'testuser@example.com',
            'password' => 'secret123',
        ]);

        $response->assertStatus(200)
            ->assertJsonPath('success', true)
            ->assertJsonStructure(['token', 'user' => ['id', 'email', 'role']]);
    }

    public function test_user_can_login_with_phone_number()
    {
        $user = User::factory()->create([
            'email' => 'phoneuser@example.com',
            'phone' => '01012345678',
            'password' => Hash::make('secret123'),
        ]);

        $response = $this->postJson('/api/login', [
            'phone' => '01012345678',
            'password' => 'secret123',
        ]);

        $response->assertStatus(200)
            ->assertJsonPath('success', true);
    }

    public function test_login_fails_with_invalid_credentials()
    {
        $user = User::factory()->create([
            'email' => 'valid@example.com',
            'password' => Hash::make('secret123'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'valid@example.com',
            'password' => 'wrongpassword',
        ]);

        $response->assertStatus(401)
            ->assertJsonPath('success', false);
    }

    public function test_user_registration()
    {
        $payload = [
            'name' => 'New User',
            'email' => 'newuser@example.com',
            'phone' => '01099998888',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ];

        $response = $this->postJson('/api/register', $payload);

        $response->assertStatus(201)
            ->assertJsonPath('success', true)
            ->assertJsonStructure(['token', 'user']);

        $this->assertDatabaseHas('users', [
            'email' => 'newuser@example.com',
        ]);
    }

    public function test_suspended_user_cannot_login()
    {
        $user = User::factory()->create([
            'email' => 'helduser@example.com',
            'password' => Hash::make('secret123'),
            'is_hold' => true,
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'helduser@example.com',
            'password' => 'secret123',
        ]);

        $response->assertStatus(403)
            ->assertJsonPath('success', false);
    }
}
