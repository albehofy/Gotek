<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'payment_type')) {
                $table->enum('payment_type', ['task_based', 'salary_based', 'percentage_based', 'hybrid'])->default('salary_based');
            }
            if (!Schema::hasColumn('users', 'base_salary')) {
                $table->decimal('base_salary', 10, 2)->default(0);
            }
            if (!Schema::hasColumn('users', 'commission_rate')) {
                $table->decimal('commission_rate', 5, 2)->default(0); // e.g. 10.00%
            }
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['payment_type', 'base_salary', 'commission_rate']);
        });
    }
};
