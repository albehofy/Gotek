<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Extend Deals
        Schema::table('deals', function (Blueprint $table) {
            if (!Schema::hasColumn('deals', 'department_id')) {
                $table->foreignId('department_id')->nullable()->constrained('departments')->onDelete('set null');
            }
            if (!Schema::hasColumn('deals', 'sales_person_id')) {
                $table->foreignId('sales_person_id')->nullable()->constrained('users')->onDelete('set null');
            }
            if (!Schema::hasColumn('deals', 'sales_commission_type')) {
                $table->enum('sales_commission_type', ['fixed', 'percentage'])->nullable()->default('fixed');
            }
            if (!Schema::hasColumn('deals', 'sales_commission_value')) {
                $table->decimal('sales_commission_value', 10, 2)->default(0);
            }
            if (!Schema::hasColumn('deals', 'agreed_scope')) {
                $table->text('agreed_scope')->nullable();
            }
        });

        // 2. Extend Tasks
        Schema::table('tasks', function (Blueprint $table) {
            if (!Schema::hasColumn('tasks', 'department_id')) {
                $table->foreignId('department_id')->nullable()->constrained('departments')->onDelete('set null');
            }
            if (!Schema::hasColumn('tasks', 'sub_category_id')) {
                $table->foreignId('sub_category_id')->nullable()->constrained('sub_categories')->onDelete('set null');
            }
            if (!Schema::hasColumn('tasks', 'parent_id')) {
                $table->foreignId('parent_id')->nullable()->constrained('tasks')->onDelete('cascade');
            }
            if (!Schema::hasColumn('tasks', 'scope')) {
                $table->text('scope')->nullable();
            }
            if (!Schema::hasColumn('tasks', 'company_margin')) {
                $table->decimal('company_margin', 10, 2)->default(0);
            }
        });

        // 3. Task Custom Fields Schema
        if (!Schema::hasTable('task_custom_fields')) {
            Schema::create('task_custom_fields', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('field_type')->default('text'); // text, number, select, date, boolean
                $table->json('options')->nullable();
                $table->boolean('is_required')->default(false);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('task_custom_field_values')) {
            Schema::create('task_custom_field_values', function (Blueprint $table) {
                $table->id();
                $table->foreignId('task_id')->constrained('tasks')->onDelete('cascade');
                $table->foreignId('custom_field_id')->constrained('task_custom_fields')->onDelete('cascade');
                $table->text('value')->nullable();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('task_custom_field_values');
        Schema::dropIfExists('task_custom_fields');

        Schema::table('tasks', function (Blueprint $table) {
            $table->dropForeign(['department_id']);
            $table->dropForeign(['sub_category_id']);
            $table->dropForeign(['parent_id']);
            $table->dropColumn(['department_id', 'sub_category_id', 'parent_id', 'scope', 'company_margin']);
        });

        Schema::table('deals', function (Blueprint $table) {
            $table->dropForeign(['department_id']);
            $table->dropForeign(['sales_person_id']);
            $table->dropColumn(['department_id', 'sales_person_id', 'sales_commission_type', 'sales_commission_value', 'agreed_scope']);
        });
    }
};
