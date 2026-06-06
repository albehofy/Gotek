<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->foreignId('deal_id')->nullable()->constrained('deals')->onDelete('cascade');
            $table->decimal('client_price', 10, 2)->nullable()->default(0);
            $table->decimal('employee_price', 10, 2)->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropForeign(['deal_id']);
            $table->dropColumn(['deal_id', 'client_price', 'employee_price']);
        });
    }
};
