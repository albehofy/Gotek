<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Add discount fields to deals table
        if (Schema::hasTable('deals')) {
            Schema::table('deals', function (Blueprint $table) {
                if (!Schema::hasColumn('deals', 'discount_type')) {
                    $table->string('discount_type')->default('none')->after('total_price'); // none, fixed, percentage
                }
                if (!Schema::hasColumn('deals', 'discount_value')) {
                    $table->decimal('discount_value', 12, 2)->default(0)->after('discount_type');
                }
            });
        }

        // 2. Add is_vip to users table
        if (Schema::hasTable('users')) {
            Schema::table('users', function (Blueprint $table) {
                if (!Schema::hasColumn('users', 'is_vip')) {
                    $table->boolean('is_vip')->default(false)->after('is_hold');
                }
            });
        }

        // 3. Add is_monthly_plan and plan_duration_months to tasks table
        if (Schema::hasTable('tasks')) {
            Schema::table('tasks', function (Blueprint $table) {
                if (!Schema::hasColumn('tasks', 'is_monthly_plan')) {
                    $table->boolean('is_monthly_plan')->default(false)->after('dates_not_specified');
                }
                if (!Schema::hasColumn('tasks', 'plan_duration_months')) {
                    $table->integer('plan_duration_months')->default(1)->after('is_monthly_plan');
                }
            });
        }

        // 4. Create client_monthly_plans table
        if (!Schema::hasTable('client_monthly_plans')) {
            Schema::create('client_monthly_plans', function (Blueprint $table) {
                $table->id();
                $table->foreignId('client_id')->constrained('users')->onDelete('cascade');
                $table->string('month_year'); // e.g., 2026-09 or سبتمبر 2026
                $table->string('title')->nullable();
                $table->string('brief_pdf_path')->nullable();
                $table->string('brief_pdf_name')->nullable();
                $table->string('plan_pdf_path')->nullable();
                $table->string('plan_pdf_name')->nullable();
                $table->text('notes')->nullable();
                $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
                $table->timestamps();
            });
        }

        // 5. Create client_plans table (for PDF briefs/plans per client)
        if (!Schema::hasTable('client_plans')) {
            Schema::create('client_plans', function (Blueprint $table) {
                $table->id();
                $table->foreignId('client_id')->constrained('users')->onDelete('cascade');
                $table->string('plan_type')->default('monthly_brief'); // monthly_brief, approved_plan, other
                $table->string('title')->nullable();
                $table->string('file_name')->nullable();
                $table->string('file_path')->nullable();
                $table->string('file_url')->nullable();
                $table->foreignId('uploaded_by')->nullable()->constrained('users')->onDelete('set null');
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('deals')) {
            Schema::table('deals', function (Blueprint $table) {
                if (Schema::hasColumn('deals', 'discount_value')) $table->dropColumn('discount_value');
                if (Schema::hasColumn('deals', 'discount_type')) $table->dropColumn('discount_type');
            });
        }

        if (Schema::hasTable('users')) {
            Schema::table('users', function (Blueprint $table) {
                if (Schema::hasColumn('users', 'is_vip')) $table->dropColumn('is_vip');
            });
        }

        if (Schema::hasTable('tasks')) {
            Schema::table('tasks', function (Blueprint $table) {
                if (Schema::hasColumn('tasks', 'plan_duration_months')) $table->dropColumn('plan_duration_months');
                if (Schema::hasColumn('tasks', 'is_monthly_plan')) $table->dropColumn('is_monthly_plan');
            });
        }

        Schema::dropIfExists('client_plans');
        Schema::dropIfExists('client_monthly_plans');
    }
};
