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
use App\Models\TaskAttachment;
use App\Models\ClientPayment;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ComprehensiveSystemAuditTest extends TestCase
{
    use RefreshDatabase;

    protected $admin;
    protected $client;
    protected $employee;
    protected $manager;
    protected $dept;

    protected function setUp(): void
    {
        parent::setUp();

        Role::create(['name' => 'Super Admin', 'slug' => 'super_admin']);
        Role::create(['name' => 'Admin', 'slug' => 'admin']);
        Role::create(['name' => 'Department Manager', 'slug' => 'department_manager']);
        Role::create(['name' => 'Employee', 'slug' => 'employee']);
        Role::create(['name' => 'Client', 'slug' => 'client']);

        $this->dept = Department::create(['name' => 'التصوير والمونتاج']);

        $this->admin = User::create([
            'name' => 'Super Admin User',
            'email' => 'superadmin@audit.com',
            'password' => bcrypt('password123'),
            'role' => 'super_admin'
        ]);

        $this->manager = User::create([
            'name' => 'Dept Manager User',
            'email' => 'manager@audit.com',
            'password' => bcrypt('password123'),
            'role' => 'department_manager',
            'department_id' => $this->dept->id
        ]);

        $this->employee = User::create([
            'name' => 'Staff Creator',
            'email' => 'employee@audit.com',
            'password' => bcrypt('password123'),
            'role' => 'employee',
            'department_id' => $this->dept->id
        ]);

        $this->client = User::create([
            'name' => 'VIP Client Co',
            'email' => 'client@audit.com',
            'password' => bcrypt('password123'),
            'role' => 'client',
            'phone' => '01012345678'
        ]);
    }

    /** 1. Test Held User Exclusion & Login Blocker */
    public function test_held_user_cannot_login_and_is_excluded_from_active_dropdowns()
    {
        // Put employee on hold
        $holdRes = $this->actingAs($this->admin, 'sanctum')
            ->patchJson("/api/users/{$this->employee->id}/toggle-hold");
        $holdRes->assertStatus(200)
            ->assertJsonPath('data.is_hold', true);

        // Login should fail for held user
        $loginRes = $this->postJson('/api/login', [
            'email' => 'employee@audit.com',
            'password' => 'password123'
        ]);
        $loginRes->assertStatus(403)
            ->assertJsonPath('is_held', true);

        // Dropdown listing with active_only=true must NOT contain held employee
        $listRes = $this->actingAs($this->admin, 'sanctum')
            ->getJson('/api/users?active_only=1');
        $listRes->assertStatus(200);

        $ids = collect($listRes->json('data'))->pluck('id')->toArray();
        $this->assertNotContains($this->employee->id, $ids);
    }

    /** 2. Test Standalone Task Creation Without Deal */
    public function test_standalone_task_creation_without_deal_and_assigned_to_employee()
    {
        Storage::fake('public');

        $file1 = UploadedFile::fake()->image('mockup1.png');
        $file2 = UploadedFile::fake()->create('contract_spec.pdf', 150);

        $res = $this->actingAs($this->admin, 'sanctum')->postJson('/api/tasks', [
            'title' => 'مهمة تصميم منفردة بدون صفقة',
            'description' => 'تصميم شعار وبانرات ترويجية سريعة',
            'priority' => 'high',
            'status' => 'todo',
            'assigned_user_ids' => [$this->employee->id],
            'files' => [$file1, $file2]
        ]);

        $res->assertStatus(201)
            ->assertJsonPath('status', 'success');

        $taskId = $res->json('data.id');
        $task = Task::with(['attachments', 'users'])->find($taskId);

        $this->assertNotNull($task);
        $this->assertNull($task->deal_id);
        $this->assertTrue($task->users->contains($this->employee->id));
        $this->assertGreaterThanOrEqual(1, $task->attachments->count());
    }

    /** 3. Test Task Assignment Restrictions */
    public function test_employee_cannot_assign_task_members_while_admin_and_manager_can()
    {
        $task = Task::create([
            'title' => 'مهمة فنية تجريبية',
            'description' => 'وصف المهمة الفنية',
            'status' => 'in_progress',
            'priority' => 'medium'
        ]);

        // Regular employee attempt -> should fail 403
        $empRes = $this->actingAs($this->employee, 'sanctum')->postJson("/api/tasks/{$task->id}/assign", [
            'user_ids' => [$this->employee->id]
        ]);
        $empRes->assertStatus(403);

        // Manager of department attempt -> should succeed
        $mgrRes = $this->actingAs($this->manager, 'sanctum')->postJson("/api/tasks/{$task->id}/assign", [
            'user_ids' => [$this->employee->id]
        ]);
        $mgrRes->assertStatus(200);

        // Admin attempt -> should succeed
        $admRes = $this->actingAs($this->admin, 'sanctum')->postJson("/api/tasks/{$task->id}/assign", [
            'user_ids' => [$this->employee->id, $this->manager->id]
        ]);
        $admRes->assertStatus(200);
    }

    /** 4. Test Deals with Platform Management Dates and Photography Dates */
    public function test_deals_with_shooting_dates_and_platform_management_dates()
    {
        // 1. Photography & Montage Deal with shooting & delivery dates
        $deal1Res = $this->actingAs($this->admin, 'sanctum')->postJson('/api/deals', [
            'title' => 'صفقة فيديو إعلاني للمطعم',
            'client_id' => $this->client->id,
            'department_id' => $this->dept->id,
            'total_price' => 25000,
            'status' => 'in_progress',
            'shooting_date' => '2026-10-15',
            'delivery_date' => '2026-10-25',
            'dates_not_determined' => false,
            'deal_link' => 'https://drive.google.com/drive/folders/audit-demo'
        ]);
        $deal1Res->assertStatus(201);
        $this->assertStringContainsString('2026-10-15', (string)$deal1Res->json('data.shooting_date'));
        $this->assertStringContainsString('2026-10-25', (string)$deal1Res->json('data.delivery_date'));
        $this->assertEquals('https://drive.google.com/drive/folders/audit-demo', $deal1Res->json('data.deal_link'));

        // 2. Platform Management Deal with monthly start & end dates
        $deal2Res = $this->actingAs($this->admin, 'sanctum')->postJson('/api/deals', [
            'title' => 'إدارة حملات السوشيال ميديا لشهر نوفمبر',
            'client_id' => $this->client->id,
            'total_price' => 15000,
            'status' => 'in_progress',
            'start_date' => '2026-11-01',
            'end_date' => '2026-11-30'
        ]);
        $deal2Res->assertStatus(201);
        $this->assertStringContainsString('2026-11-01', (string)$deal2Res->json('data.start_date'));
        $this->assertStringContainsString('2026-11-30', (string)$deal2Res->json('data.end_date'));
    }

    /** 5. Test Client Portal Approval Workflow Restrictions */
    public function test_client_portal_approval_stage_guard_and_admin_delegated_approval()
    {
        $deal = Deal::create([
            'title' => 'صفقة هوية بصرية',
            'client_id' => $this->client->id,
            'created_by' => $this->admin->id,
            'total_price' => 18000,
            'status' => 'in_progress'
        ]);

        $task = Task::create([
            'title' => 'تصميم الهوية البصرية وشعار الشركة',
            'description' => 'وصف الهوية البصرية',
            'deal_id' => $deal->id,
            'status' => 'in_progress', // Not review yet
            'priority' => 'high'
        ]);

        // Client cannot approve when task is in in_progress
        $cliFailRes = $this->actingAs($this->client, 'sanctum')->postJson("/api/client-portal/tasks/{$task->id}/approve");
        $cliFailRes->assertStatus(422);

        // Transition task to client_review
        $task->update(['status' => 'client_review']);

        // Now client approval should succeed
        $cliPassRes = $this->actingAs($this->client, 'sanctum')->postJson("/api/client-portal/tasks/{$task->id}/approve");
        $cliPassRes->assertStatus(200);
        $this->assertEquals('approved', $task->fresh()->status);

        // Reset and test admin approving on behalf of client
        $task2 = Task::create([
            'title' => 'تطوير موقع وردبريس',
            'description' => 'وصف موقع وردبريس',
            'deal_id' => $deal->id,
            'status' => 'client_review',
            'priority' => 'medium'
        ]);

        $admApproveRes = $this->actingAs($this->admin, 'sanctum')->postJson("/api/client-portal/tasks/{$task2->id}/approve");
        $admApproveRes->assertStatus(200);
        $this->assertEquals('approved', $task2->fresh()->status);
    }

    /** 6. Test Client 360 Profile Accurate Non-Zero Financial Calculation */
    public function test_client_360_profile_calculates_all_real_finances()
    {
        $deal1 = Deal::create([
            'title' => 'عقد تصميم متجر إلكتروني',
            'client_id' => $this->client->id,
            'created_by' => $this->admin->id,
            'total_price' => 40000,
            'status' => 'in_progress'
        ]);

        $deal2 = Deal::create([
            'title' => 'عقد إنتاج فيديوهات ريلز',
            'client_id' => $this->client->id,
            'created_by' => $this->admin->id,
            'total_price' => 20000,
            'status' => 'in_progress'
        ]);

        // Record payments
        ClientPayment::create([
            'client_id' => $this->client->id,
            'deal_id' => $deal1->id,
            'amount' => 15000,
            'payment_date' => now()->toDateString(),
            'payment_method' => 'instapay',
            'created_by' => $this->admin->id
        ]);

        ClientPayment::create([
            'client_id' => $this->client->id,
            'deal_id' => $deal2->id,
            'amount' => 5000,
            'payment_date' => now()->toDateString(),
            'payment_method' => 'bank_transfer',
            'created_by' => $this->admin->id
        ]);

        // Fetch client 360 profile endpoint
        $res = $this->actingAs($this->admin, 'sanctum')->getJson("/api/clients/{$this->client->id}/profile");
        $res->assertStatus(200);

        $stats = $res->json('data.stats');
        $this->assertEquals(60000, $stats['total_billed']);
        $this->assertEquals(20000, $stats['total_paid']);
        $this->assertEquals(40000, $stats['remaining_balance']);
        $this->assertEquals(2, $stats['deals_count']);
    }

    /** 7. Test Employee Is Blocked From Financial Endpoints */
    public function test_employee_is_forbidden_from_finance_endpoints()
    {
        $resSummary = $this->actingAs($this->employee, 'sanctum')->getJson('/api/finance/summary');
        $resSummary->assertStatus(403);

        $resBalances = $this->actingAs($this->employee, 'sanctum')->getJson('/api/finance/client-balances');
        $resBalances->assertStatus(403);

        $resLedger = $this->actingAs($this->employee, 'sanctum')->getJson('/api/finance/ledger');
        $resLedger->assertStatus(403);
    }
}
