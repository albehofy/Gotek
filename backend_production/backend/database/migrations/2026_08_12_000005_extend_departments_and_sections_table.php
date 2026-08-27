<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('departments', function (Blueprint $table) {
            if (!Schema::hasColumn('departments', 'manager_id')) {
                $table->foreignId('manager_id')->nullable()->constrained('users')->onDelete('set null');
            }
            if (!Schema::hasColumn('departments', 'has_partner')) {
                $table->boolean('has_partner')->default(false);
            }
            if (!Schema::hasColumn('departments', 'partner_name')) {
                $table->string('partner_name')->nullable();
            }
            if (!Schema::hasColumn('departments', 'partner_percentage')) {
                $table->decimal('partner_percentage', 5, 2)->default(0); // e.g., 50.00%
            }
        });

        if (!Schema::hasTable('sub_categories')) {
            Schema::create('sub_categories', function (Blueprint $table) {
                $table->id();
                $table->foreignId('department_id')->constrained('departments')->onDelete('cascade');
                $table->string('name_ar');
                $table->string('name_en')->nullable();
                $table->text('description')->nullable();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('sub_categories');
        Schema::table('departments', function (Blueprint $table) {
            $table->dropForeign(['manager_id']);
            $table->dropColumn(['manager_id', 'has_partner', 'partner_name', 'partner_percentage']);
        });
    }
};
