<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Categories
        Schema::create('finance_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name_ar');
            $table->string('name_en')->nullable();
            $table->enum('type', ['expense', 'income'])->default('expense');
            $table->boolean('is_system')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 2. Ledger Entries
        Schema::create('ledger_entries', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->enum('type', ['income', 'expense', 'custody_issued', 'custody_returned'])->default('expense');
            $table->foreignId('category_id')->nullable()->constrained('finance_categories')->onDelete('set null');
            $table->foreignId('department_id')->nullable()->constrained('departments')->onDelete('set null');
            $table->foreignId('deal_id')->nullable()->constrained('deals')->onDelete('set null');
            $table->foreignId('client_id')->nullable()->constrained('users')->onDelete('set null');
            $table->foreignId('employee_id')->nullable()->constrained('users')->onDelete('set null');
            $table->decimal('amount', 12, 2);
            $table->enum('payment_method', ['cash', 'cash_hand', 'instapay', 'bank_transfer'])->default('cash');
            $table->text('description')->nullable();
            $table->string('receipt_path')->nullable();
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });

        // 3. Client Payments
        Schema::create('client_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('deal_id')->constrained('deals')->onDelete('cascade');
            $table->foreignId('client_id')->constrained('users')->onDelete('cascade');
            $table->decimal('amount', 12, 2);
            $table->date('payment_date');
            $table->enum('payment_method', ['cash', 'cash_hand', 'instapay', 'bank_transfer'])->default('cash');
            $table->string('receipt_ref')->nullable();
            $table->text('notes')->nullable();
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });

        // 4. Custody Accounts (بند العهدة)
        Schema::create('custody_accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->constrained('users')->onDelete('cascade');
            $table->decimal('issued_amount', 12, 2)->default(0);
            $table->decimal('returned_amount', 12, 2)->default(0);
            $table->decimal('spent_amount', 12, 2)->default(0); // auto derived: issued - returned
            $table->enum('status', ['open', 'settled', 'overdue'])->default('open');
            $table->text('notes')->nullable();
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });

        // 5. Fixed Assets (الأصول الثابتة)
        Schema::create('fixed_assets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('value', 12, 2);
            $table->date('purchase_date')->nullable();
            $table->foreignId('department_id')->nullable()->constrained('departments')->onDelete('set null');
            $table->boolean('is_partnered_asset')->default(false);
            $table->enum('status', ['active', 'maintenance', 'written_off'])->default('active');
            $table->text('notes')->nullable();
            $table->timestamps();
        });

        // 6. Payroll Records (المرتبات المستحقة والسلف والخصومات والحوافز)
        Schema::create('payroll_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->constrained('users')->onDelete('cascade');
            $table->integer('month');
            $table->integer('year');
            $table->string('payment_type')->default('salary_based'); // task_based, salary_based, percentage_based, hybrid
            $table->decimal('base_salary', 12, 2)->default(0);
            $table->decimal('task_earnings', 12, 2)->default(0);
            $table->decimal('commission_earnings', 12, 2)->default(0);
            $table->decimal('advances', 12, 2)->default(0); // سلف
            $table->decimal('deductions', 12, 2)->default(0); // خصومات
            $table->decimal('bonuses', 12, 2)->default(0); // مكافآت / حوافز
            $table->decimal('net_payable', 12, 2)->default(0); // base + task + commission - advances - deductions + bonuses
            $table->enum('status', ['pending', 'approved', 'paid'])->default('pending');
            $table->timestamp('paid_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payroll_records');
        Schema::dropIfExists('fixed_assets');
        Schema::dropIfExists('custody_accounts');
        Schema::dropIfExists('client_payments');
        Schema::dropIfExists('ledger_entries');
        Schema::dropIfExists('finance_categories');
    }
};
