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
 
// بدل project_id القديم
$table->foreignId('internal_project_id')->constrained('internal_projects')->onDelete('cascade');        $table->foreignId('department_id')->constrained();
 
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
