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
Schema::table('users', function (Blueprint $table) {
        $table->enum('role', ['admin', 'manager', 'team_lead', 'employee', 'client', 'viewer', 'task_generator', 'department_manager'])->default('viewer');
        $table->foreignId('department_id')->nullable()->constrained('departments')->onDelete('set null');
        $table->softDeletes();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
