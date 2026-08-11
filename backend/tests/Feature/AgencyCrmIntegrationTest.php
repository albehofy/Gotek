<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Role;
use App\Models\Permission;
use App\Models\Department;
use App\Models\SubCategory;
use App\Models\Deal;
use App\Models\Task;
use App\Models\TaskAttachment;
use App\Models\FinanceCategory;
use App\Models\LedgerEntry;
use App\Models\ClientPayment;
use App\Models\CustodyAccount;
use App\Models\FixedAsset;
use App\Models\PayrollRecord;
use App\Models\NotificationModel;

class AgencyCrmIntegrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_full_agency_crm_relational_flow()
    {
        // 1. Seed Roles & Permissions
        $adminRole = Role::create(['name' => 'Admin', 'slug' => 'admin']);
        $clientRole = Role::create(['name' => 'Client', 'slug' => 'client']);
        $empRole = Role::create(['name' => 'Employee', 'slug' => 'employee']);

        $permManageDeals = Permission::create(['name' => 'manage-deals', 'slug' => 'manage-deals']);
        $adminRole->permissions()->attach($permManageDeals->id);

        // 2. Create Users
        $admin = User::factory()->create([
            'name' => 'Admin User',
            'role' => 'admin',
            'role_id' => $adminRole->id
        ]);

        $salesperson = User::factory()->create([
            'name' => 'Sales Rep',
            'role' => 'employee',
            'role_id' => $empRole->id,
            'payment_type' => 'hybrid',
            'base_salary' => 5000,
            'commission_rate' => 10
        ]);

        $employee = User::factory()->create([
            'name' => 'Content Creator',
            'role' => 'employee',
            'role_id' => $empRole->id,
            'payment_type' => 'task_based'
        ]);

        $client = User::factory()->create([
            'name' => 'Acme Corp Client',
            'role' => 'client',
            'role_id' => $clientRole->id
        ]);

        // 3. Create Department & SubCategory with Partner Split
        $dept = Department::create([
            'name' => 'Media & Video Production',
            'manager_id' => $admin->id,
            'has_partner' => true,
            'partner_name' => 'ProMedia Partner',
            'partner_percentage' => 40
        ]);

        $subCat = SubCategory::create([
            'department_id' => $dept->id,
            'name_ar' => 'فيديو ريلز',
            'name_en' => 'Reels Video'
        ]);

        // 4. Create Deal with Sales Attribution
        $deal = Deal::create([
            'title' => 'Acme Corp Annual Campaign 2026',
            'client_id' => $client->id,
            'department_id' => $dept->id,
            'created_by' => $admin->id,
            'sales_person_id' => $salesperson->id,
            'sales_commission_type' => 'percentage',
            'sales_commission_value' => 10,
            'total_price' => 20000,
            'status' => 'in_progress',
            'agreed_scope' => '20 Videos + 10 Social Media Graphics'
        ]);

        $this->assertEquals(20000, $deal->calculated_total);
        $this->assertEquals(20000, $deal->remaining_balance);

        // 5. Create Task with Margin Auto-Derivation (client_price - employee_price)
        $task = Task::create([
            'title' => 'Produce 10 Reels Videos',
            'description' => 'Produce 10 Reels Videos for Acme Corp Campaign',
            'deal_id' => $deal->id,
            'department_id' => $dept->id,
            'sub_category_id' => $subCat->id,
            'created_by' => $admin->id,
            'client_price' => 10000,
            'employee_price' => 6000,
            'status' => 'content_creator',
            'priority' => 'high',
            'scope' => '10 Reels with color grading'
        ]);

        // Assert company_margin is auto-derived (10000 - 6000 = 4000)
        $this->assertEquals(4000, $task->company_margin);

        // 6. Assign Member & Add Note with @mention notification dispatch
        $task->users()->attach($employee->id);

        $responseNote = $this->actingAs($admin)->postJson("/api/tasks/{$task->id}/notes", [
            'note' => "Hi @{$employee->name}, please prioritize the intro animation!"
        ]);
        $responseNote->assertStatus(201);

        // Verify Notification was dispatched to employee
        $this->assertDatabaseHas('notifications', [
            'user_id' => $employee->id,
            'type' => 'mention'
        ]);


        // 7. Register Partial Client Payment (4 Payment Methods tested)
        $paymentResp = $this->actingAs($admin)->postJson('/api/finance/client-payments', [
            'deal_id' => $deal->id,
            'client_id' => $client->id,
            'amount' => 5000,
            'payment_method' => 'instapay',
            'payment_date' => now()->toDateString(),
            'receipt_ref' => 'INSTA-998811'
        ]);
        $paymentResp->assertStatus(201);

        // Verify remaining balance updated (Calculated total 10000 task sum - 5000 paid = 5000)
        $deal->refresh();
        $this->assertEquals(5000, $deal->remaining_balance);


        // Verify Income Ledger entry was created
        $this->assertDatabaseHas('ledger_entries', [
            'type' => 'income',
            'amount' => 5000,
            'payment_method' => 'instapay'
        ]);

        // 8. Custody Float Account Test (Issue & Return derivation)
        $custody = CustodyAccount::create([
            'employee_id' => $employee->id,
            'issued_amount' => 1000,
            'status' => 'open',
            'created_by' => $admin->id
        ]);


        $returnResp = $this->actingAs($admin)->postJson("/api/finance/custody/{$custody->id}/return", [
            'returned_amount' => 300
        ]);
        $returnResp->assertStatus(200);

        $custody->refresh();
        $this->assertEquals('settled', $custody->status);
        $this->assertEquals(700, $custody->spent_amount); // 1000 - 300 = 700

        // 9. Finance Summary Test
        $summaryResp = $this->actingAs($admin)->getJson('/api/finance/summary');
        $summaryResp->assertStatus(200);
        $summaryResp->assertJsonPath('summary.total_income', 5000);

        // 10. Partner Profit Split Test
        $partnerResp = $this->actingAs($admin)->getJson('/api/finance/partner-splits');
        $partnerResp->assertStatus(200);

        // 11. Payroll Hybrid Formula Test
        $payrollResp = $this->actingAs($admin)->getJson('/api/finance/payroll');
        $payrollResp->assertStatus(200);
        $payrollData = collect($payrollResp->json('data'))->firstWhere('employee_name', 'Sales Rep');
        $this->assertNotNull($payrollData);
        // net_payable = base_salary (5000) + commission_earnings (10000 calculated_total * 10% = 1000) = 6000
        $this->assertEquals(6000, $payrollData['net_payable']);



        // 12. Client Portal Test
        $portalResp = $this->actingAs($client)->getJson('/api/client-portal/dashboard');
        $portalResp->assertStatus(200);
        $portalResp->assertJsonPath('data.client_name', 'Acme Corp Client');
        $portalResp->assertJsonPath('data.financial_summary.remaining_balance', 5000);
    }
}

