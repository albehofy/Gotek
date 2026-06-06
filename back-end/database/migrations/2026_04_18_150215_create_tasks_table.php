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
 Schema::create('tasks', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->longText('description');
// بدل project_id القديم
        $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium');
        $table->enum('status', ['todo', 'in_progress', 'in_review', 'changes_requested', 'approved', 'done', 'cancelled'])->default('todo');
        $table->integer('estimated_hours')->default(0);
        $table->softDeletes();
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
