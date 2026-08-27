<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Department;
use App\Models\SubCategory;

class DepartmentsApiTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create(['role' => 'admin']);
    }

    public function test_department_crud_and_subcategories()
    {
        // 1. Create Department
        $createRes = $this->actingAs($this->admin)->postJson('/api/departments', [
            'name' => 'Video Production',
            'description' => 'Handles video creation',
            'has_partner' => true,
            'partner_name' => 'Media Corp',
            'partner_percentage' => 30,
            'sub_categories' => ['Reels', 'Documentaries']
        ]);

        $createRes->assertStatus(201)
            ->assertJsonPath('status', 'success')
            ->assertJsonPath('data.name', 'Video Production');

        $deptId = $createRes->json('data.id');

        // 2. Index & Show
        $this->actingAs($this->admin)->getJson('/api/departments')->assertStatus(200);
        $this->actingAs($this->admin)->getJson("/api/departments/{$deptId}")
            ->assertStatus(200)
            ->assertJsonPath('name', 'Video Production');

        // 3. Update Department
        $updateRes = $this->actingAs($this->admin)->putJson("/api/departments/{$deptId}", [
            'name' => 'Video Production & Animation',
            'has_partner' => true,
            'partner_name' => 'Media Corp',
            'partner_percentage' => 35
        ]);

        $updateRes->assertStatus(200)
            ->assertJsonPath('data.name', 'Video Production & Animation');

        // 4. Add SubCategory
        $subRes = $this->actingAs($this->admin)->postJson("/api/departments/{$deptId}/sub-categories", [
            'name_ar' => 'تصميم ثلاثي الأبعاد',
            'name_en' => '3D Design'
        ]);
        $subRes->assertStatus(201);
        $subId = $subRes->json('data.id');

        // 5. Update SubCategory
        $subUpdate = $this->actingAs($this->admin)->putJson("/api/departments/sub-categories/{$subId}", [
            'name_ar' => 'تصميم ثلاثي الأبعاد والأنيميشن',
            'name_en' => '3D Design & Animation'
        ]);
        $subUpdate->assertStatus(200);

        // 6. Delete SubCategory
        $subDel = $this->actingAs($this->admin)->deleteJson("/api/departments/sub-categories/{$subId}");
        $subDel->assertStatus(200);

        // 7. Delete Department
        $deptDel = $this->actingAs($this->admin)->deleteJson("/api/departments/{$deptId}");
        $deptDel->assertStatus(200);
    }
}
