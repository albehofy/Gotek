<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Deal;
use App\Models\FinanceCategory;
use App\Models\CustodyAccount;

class FinanceApiTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected User $client;
    protected User $employee;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create(['role' => 'admin']);
        $this->client = User::factory()->create(['role' => 'client']);
        $this->employee = User::factory()->create(['role' => 'employee']);
    }

    public function test_finance_summary_ledger_and_categories()
    {
        // 1. Finance Category Store & Index
        $catRes = $this->actingAs($this->admin)->postJson('/api/finance/categories', [
            'name_ar' => 'مصروفات تشغيلية',
            'name_en' => 'Operational Expenses',
            'type' => 'expense'
        ]);
        $catRes->assertStatus(201);
        $categoryId = $catRes->json('data.id');

        $this->actingAs($this->admin)->getJson('/api/finance/categories')->assertStatus(200);

        // 2. Ledger Store & Index
        $ledgerRes = $this->actingAs($this->admin)->postJson('/api/finance/ledger', [
            'date' => now()->toDateString(),
            'type' => 'expense',
            'category_id' => $categoryId,
            'amount' => 1500,
            'payment_method' => 'instapay',
            'description' => 'Software License Subscription'
        ]);
        $ledgerRes->assertStatus(201);

        $this->actingAs($this->admin)->getJson('/api/finance/ledger')->assertStatus(200);

        // 3. Summary
        $summaryRes = $this->actingAs($this->admin)->getJson('/api/finance/summary');
        $summaryRes->assertStatus(200)->assertJsonStructure(['summary' => ['total_income', 'total_expenses', 'net_balance']]);
    }

    public function test_client_payments_and_balances()
    {
        $deal = Deal::create([
            'title' => 'Branding Deal',
            'client_id' => $this->client->id,
            'created_by' => $this->admin->id,
            'total_price' => 10000,
            'status' => 'active'
        ]);

        // Payment
        $payRes = $this->actingAs($this->admin)->postJson('/api/finance/client-payments', [
            'deal_id' => $deal->id,
            'client_id' => $this->client->id,
            'amount' => 4000,
            'payment_date' => now()->toDateString(),
            'payment_method' => 'bank_transfer',
            'receipt_ref' => 'REF-12345'
        ]);
        $payRes->assertStatus(201);

        // Client Balances
        $balRes = $this->actingAs($this->admin)->getJson('/api/finance/client-balances');
        $balRes->assertStatus(200);
    }

    public function test_custody_issue_and_return()
    {
        $issueRes = $this->actingAs($this->admin)->postJson('/api/finance/custody/issue', [
            'employee_id' => $this->employee->id,
            'issued_amount' => 2000,
            'notes' => 'Event equipment purchases'
        ]);
        $issueRes->assertStatus(201);
        $custodyId = $issueRes->json('data.id');

        $this->actingAs($this->admin)->getJson('/api/finance/custody')->assertStatus(200);

        $returnRes = $this->actingAs($this->admin)->postJson("/api/finance/custody/{$custodyId}/return", [
            'returned_amount' => 500,
            'notes' => 'Returned unused cash'
        ]);
        $returnRes->assertStatus(200)
            ->assertJsonPath('data.status', 'settled')
            ->assertJsonPath('data.spent_amount', 1500);
    }

    public function test_fixed_assets_payroll_and_partner_splits()
    {
        // Fixed Asset
        $assetRes = $this->actingAs($this->admin)->postJson('/api/finance/fixed-assets', [
            'name' => 'MacBook Pro M3',
            'value' => 35000,
            'purchase_date' => now()->toDateString()
        ]);
        $assetRes->assertStatus(201);

        $this->actingAs($this->admin)->getJson('/api/finance/fixed-assets')->assertStatus(200);
        $this->actingAs($this->admin)->getJson('/api/finance/partner-splits')->assertStatus(200);
        $this->actingAs($this->admin)->getJson('/api/finance/payroll')->assertStatus(200);
    }
}
