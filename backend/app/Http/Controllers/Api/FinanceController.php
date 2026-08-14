<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FinanceCategory;
use App\Models\LedgerEntry;
use App\Models\ClientPayment;
use App\Models\CustodyAccount;
use App\Models\FixedAsset;
use App\Models\PayrollRecord;
use App\Models\Department;
use App\Models\Deal;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FinanceController extends Controller
{
    // --- Top-Level Dashboard & Accounts Summary ---
    public function summary()
    {
        $user = Auth::user();
        if ($user && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح للعملاء بدخول الإدارة المالية'], 403);
        }

        // Department Manager scope limit if not admin/super_admin
        $deptId = null;
        if (in_array($user->role, ['department_manager', 'Department Manager']) && $user->department_id) {
            $deptId = $user->department_id;
        }

        $incomeQuery = LedgerEntry::where('type', 'income');
        $expenseQuery = LedgerEntry::where('type', 'expense');
        $clientPaymentsQuery = ClientPayment::query();

        if ($deptId) {
            $incomeQuery->where('department_id', $deptId);
            $expenseQuery->where('department_id', $deptId);
        }

        $totalIncome = (float) $incomeQuery->sum('amount');


        $totalExpenses = $expenseQuery->sum('amount');
        $netRemainingBalance = $totalIncome - $totalExpenses;

        // Custody Total Summary
        $activeCustody = CustodyAccount::where('status', 'open')->sum('issued_amount') - CustodyAccount::where('status', 'open')->sum('returned_amount');

        // Assets Total (Super Admin / Admin view)
        $totalFixedAssets = FixedAsset::where('status', 'active')->sum('value');

        return response()->json([
            'status' => 'success',
            'summary' => [
                'total_income' => (float) $totalIncome,
                'total_expenses' => (float) $totalExpenses,
                'net_balance' => (float) $netRemainingBalance,
                'active_custody_float' => (float) $activeCustody,
                'total_fixed_assets' => (float) $totalFixedAssets,
                'company_capital' => (float) ($netRemainingBalance + $totalFixedAssets),
            ]
        ]);
    }

    // --- Ledger & Expense Logging ---
    public function getLedger(Request $request)
    {
        $user = Auth::user();
        if ($user && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح للعملاء بفتح السجل المالي'], 403);
        }

        $query = LedgerEntry::with(['category', 'department', 'deal', 'client', 'employee', 'creator'])->latest();

        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }
        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }
        if ($request->filled('department_id')) {
            $query->where('department_id', $request->department_id);
        }
        if ($request->filled('payment_method')) {
            $query->where('payment_method', $request->payment_method);
        }

        $entries = $query->paginate($request->get('per_page', 25));
        return response()->json(['status' => 'success', 'data' => $entries]);
    }

    public function storeLedger(Request $request)
    {
        $validated = $request->validate([
            'date' => 'required|date',
            'type' => 'required|in:income,expense,custody_issued,custody_returned',
            'category_id' => 'nullable|exists:finance_categories,id',
            'department_id' => 'nullable|exists:departments,id',
            'deal_id' => 'nullable|exists:deals,id',
            'client_id' => 'nullable|exists:users,id',
            'employee_id' => 'nullable|exists:users,id',
            'amount' => 'required|numeric|min:0.01',
            'payment_method' => 'required|in:cash,cash_hand,instapay,bank_transfer',
            'description' => 'nullable|string',
            'receipt_path' => 'nullable|string'
        ]);

        $validated['created_by'] = Auth::id();
        $entry = LedgerEntry::create($validated);

        return response()->json(['status' => 'success', 'data' => $entry->load(['category', 'department', 'creator'])], 201);
    }

    // --- Manageable Categories ---
    public function getCategories()
    {
        $categories = FinanceCategory::where('is_active', true)->get();
        return response()->json(['status' => 'success', 'data' => $categories]);
    }

    public function storeCategory(Request $request)
    {
        $validated = $request->validate([
            'name_ar' => 'required|string|max:255',
            'name_en' => 'nullable|string|max:255',
            'type' => 'required|in:expense,income',
        ]);

        $category = FinanceCategory::create($validated);
        return response()->json(['status' => 'success', 'data' => $category], 201);
    }

    // --- Client Partial Payments & Outstanding Balances ---
    public function getClientBalances()
    {
        $user = Auth::user();
        if ($user && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح للعملاء بفتح كشف أرصدة العملاء'], 403);
        }

        $clients = User::where('role', 'client')->get();
        $report = [];

        foreach ($clients as $client) {
            $deals = Deal::where('client_id', $client->id)->get();
            $totalBilled = 0;
            $totalPaid = 0;

            foreach ($deals as $deal) {
                $totalBilled += $deal->calculated_total;
                $totalPaid += $deal->calculated_paid;
            }

            $report[] = [
                'client_id' => $client->id,
                'client_name' => $client->name,
                'client_email' => $client->email,
                'deals_count' => $deals->count(),
                'total_billed' => $totalBilled,
                'total_paid' => $totalPaid,
                'outstanding_balance' => max(0, $totalBilled - $totalPaid)
            ];
        }

        return response()->json(['status' => 'success', 'data' => $report]);
    }

    public function storeClientPayment(Request $request)
    {
        $user = Auth::user();
        if ($user && $user->role === 'client') {
            return response()->json(['message' => 'غير مسموح للعملاء بتسجيل دفعات مالية بنفسهم'], 403);
        }
        $validated = $request->validate([
            'deal_id' => 'required|exists:deals,id',
            'client_id' => 'required|exists:users,id',
            'amount' => 'required|numeric|min:0.01',
            'payment_date' => 'required|date',
            'payment_method' => 'required|in:cash,cash_hand,instapay,bank_transfer',
            'receipt_ref' => 'nullable|string',
            'notes' => 'nullable|string'
        ]);

        $validated['created_by'] = Auth::id();
        $payment = ClientPayment::create($validated);

        // Update deal paid amount
        $deal = Deal::find($validated['deal_id']);
        $deal->increment('paid_amount', $validated['amount']);
        if ($deal->status === 'pending') {
            $deal->update(['status' => 'active']);
        }

        // Also record in primary ledger for income tracking
        LedgerEntry::create([
            'date' => $validated['payment_date'],
            'type' => 'income',
            'deal_id' => $deal->id,
            'client_id' => $validated['client_id'],
            'department_id' => $deal->department_id,
            'amount' => $validated['amount'],
            'payment_method' => $validated['payment_method'],
            'description' => 'دفعة جزئية للعقد/الصفقة: ' . $deal->title . (!empty($validated['notes']) ? ' - ' . $validated['notes'] : ''),

            'created_by' => Auth::id()
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'تم تسجيل الدفعة وتحديث رصيد العميل بنجاح',
            'data' => $payment->load(['deal', 'client'])
        ], 201);
    }

    // --- Custody Account Management (بند العهدة) ---
    public function getCustodyAccounts()
    {
        $custodyAccounts = CustodyAccount::with(['employee', 'creator'])->latest()->get();
        return response()->json(['status' => 'success', 'data' => $custodyAccounts]);
    }

    public function issueCustody(Request $request)
    {
        $validated = $request->validate([
            'employee_id' => 'required|exists:users,id',
            'issued_amount' => 'required|numeric|min:0.01',
            'notes' => 'nullable|string'
        ]);

        $custody = CustodyAccount::create([
            'employee_id' => $validated['employee_id'],
            'issued_amount' => $validated['issued_amount'],
            'returned_amount' => 0,
            'spent_amount' => $validated['issued_amount'],
            'status' => 'open',
            'notes' => $validated['notes'],
            'created_by' => Auth::id()
        ]);

        // Record in ledger as custody_issued
        LedgerEntry::create([
            'date' => now()->toDateString(),
            'type' => 'custody_issued',
            'employee_id' => $validated['employee_id'],
            'amount' => $validated['issued_amount'],
            'payment_method' => 'cash',
            'description' => 'تسليم عهدة للموظف: ' . $custody->employee?->name,
            'created_by' => Auth::id()
        ]);

        return response()->json(['status' => 'success', 'data' => $custody], 201);
    }

    public function returnCustody(Request $request, $id)
    {
        $custody = CustodyAccount::findOrFail($id);
        $validated = $request->validate([
            'returned_amount' => 'required|numeric|min:0',
            'spent_category_id' => 'nullable|exists:finance_categories,id',
            'notes' => 'nullable|string'
        ]);

        $returned = (float) $validated['returned_amount'];
        $issued = (float) $custody->issued_amount;
        $spent = max(0, $issued - $returned);

        $custody->update([
            'returned_amount' => $returned,
            'spent_amount' => $spent,
            'status' => 'settled',
            'notes' => !empty($validated['notes']) ? $custody->notes . ' | ' . $validated['notes'] : $custody->notes

        ]);

        // Log returned custody as income/incoming custody
        if ($returned > 0) {
            LedgerEntry::create([
                'date' => now()->toDateString(),
                'type' => 'custody_returned',
                'employee_id' => $custody->employee_id,
                'amount' => $returned,
                'payment_method' => 'cash',
                'description' => 'استلام المتبقي من العهدة من الموظف: ' . $custody->employee?->name,
                'created_by' => Auth::id()
            ]);
        }

        // Log net spent amount as expense
        if ($spent > 0) {
            LedgerEntry::create([
                'date' => now()->toDateString(),
                'type' => 'expense',
                'category_id' => $validated['spent_category_id'] ?? null,
                'employee_id' => $custody->employee_id,
                'amount' => $spent,
                'payment_method' => 'cash',
                'description' => 'مصروف العهدة الفعلي (العهدة المسلمة - المرجعة) للموظف: ' . $custody->employee?->name,
                'created_by' => Auth::id()
            ]);
        }

        return response()->json(['status' => 'success', 'message' => 'تم تسوية العهدة بنجاح', 'data' => $custody]);
    }

    // --- Partner Profit Split Report ---
    public function getPartnerProfitSplitReport()
    {
        $partneredDepts = Department::where('has_partner', true)->get();
        $report = [];

        foreach ($partneredDepts as $dept) {
            $income = LedgerEntry::where('department_id', $dept->id)->where('type', 'income')->sum('amount');
            $expenses = LedgerEntry::where('department_id', $dept->id)->where('type', 'expense')->sum('amount');
            $netProfit = max(0, $income - $expenses);

            $partnerPct = (float) $dept->partner_percentage;
            $partnerShare = ($netProfit * $partnerPct) / 100;
            $companyShare = $netProfit - $partnerShare;

            $report[] = [
                'department_id' => $dept->id,
                'department_name' => $dept->name,
                'partner_name' => $dept->partner_name,
                'partner_percentage' => $partnerPct,
                'company_percentage' => 100 - $partnerPct,
                'total_income' => (float) $income,
                'total_expenses' => (float) $expenses,
                'net_profit' => (float) $netProfit,
                'partner_share' => (float) $partnerShare,
                'company_share' => (float) $companyShare
            ];
        }

        return response()->json(['status' => 'success', 'data' => $report]);
    }

    // --- Fixed Assets Management ---
    public function getFixedAssets()
    {
        $assets = FixedAsset::with('department')->latest()->get();
        return response()->json(['status' => 'success', 'data' => $assets]);
    }

    public function storeFixedAsset(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'value' => 'required|numeric|min:0',
            'purchase_date' => 'nullable|date',
            'department_id' => 'nullable|exists:departments,id',
            'is_partnered_asset' => 'boolean',
            'notes' => 'nullable|string'
        ]);

        $asset = FixedAsset::create($validated);
        return response()->json(['status' => 'success', 'data' => $asset], 201);
    }

    // --- Payroll & Employee Calculations (Hybrid formula) ---
    public function getPayrollSummary(Request $request)
    {
        $month = $request->get('month', now()->month);
        $year = $request->get('year', now()->year);

        $employees = User::whereIn('role', ['employee', 'department_manager', 'manager'])->get();
        $payrollList = [];

        foreach ($employees as $employee) {
            $paymentType = $employee->payment_type ?? 'salary_based';
            $baseSalary = (float) $employee->base_salary;

            // Task earnings for task_based or hybrid
            $taskEarnings = 0;
            if (in_array($paymentType, ['task_based', 'hybrid'])) {
                $completedTasks = $employee->tasks()->where('status', 'done')->get();
                foreach ($completedTasks as $t) {
                    $taskEarnings += (float) $t->employee_price;
                }
            }

            // Commission earnings
            $commissionEarnings = 0;
            if (in_array($paymentType, ['percentage_based', 'hybrid'])) {
                $salesDeals = Deal::where('sales_person_id', $employee->id)->get();
                foreach ($salesDeals as $d) {
                    if ($d->sales_commission_type === 'percentage') {
                        $commissionEarnings += ($d->calculated_total * (float) $d->sales_commission_value) / 100;
                    } else {
                        $commissionEarnings += (float) $d->sales_commission_value;
                    }
                }
            }

            // Advances, Deductions, Bonuses from ledger/payroll
            $advances = LedgerEntry::where('employee_id', $employee->id)->where('type', 'expense')->whereHas('category', function($q) { $q->where('name_ar', 'like', '%سلف%'); })->sum('amount');
            $deductions = LedgerEntry::where('employee_id', $employee->id)->where('type', 'expense')->whereHas('category', function($q) { $q->where('name_ar', 'like', '%خصومات%'); })->sum('amount');
            $bonuses = LedgerEntry::where('employee_id', $employee->id)->where('type', 'expense')->whereHas('category', function($q) { $q->where('name_ar', 'like', '%مكافآت%')->orWhere('name_ar', 'like', '%حوافز%'); })->sum('amount');

            // HYBRID FORMULA CONFIRMED: net_payable = base + task + commission - advances - deductions + bonuses
            $netPayable = max(0, $baseSalary + $taskEarnings + $commissionEarnings - $advances - $deductions + $bonuses);

            $payrollList[] = [
                'employee_id' => $employee->id,
                'employee_name' => $employee->name,
                'department_name' => $employee->department?->name ?? 'General',
                'payment_type' => $paymentType,
                'month' => (int) $month,
                'year' => (int) $year,
                'base_salary' => $baseSalary,
                'task_earnings' => (float) $taskEarnings,
                'commission_earnings' => (float) $commissionEarnings,
                'advances' => (float) $advances,
                'deductions' => (float) $deductions,
                'bonuses' => (float) $bonuses,
                'net_payable' => (float) $netPayable,
            ];
        }

        return response()->json(['status' => 'success', 'data' => $payrollList]);
    }
}
