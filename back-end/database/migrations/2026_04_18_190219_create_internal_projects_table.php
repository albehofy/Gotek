<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('internal_projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            
            // الربط مع الأقسام
            $table->foreignId('department_id')->constrained()->onDelete('cascade');
            
            // بيانات الإدارة
            $table->enum('status', ['active', 'on_hold', 'completed', 'archived'])->default('active');
            $table->date('start_date');
            $table->date('end_date')->nullable();
            
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('internal_projects');
    }
};