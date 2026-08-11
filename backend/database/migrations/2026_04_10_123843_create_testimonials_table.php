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
        Schema::create('testimonials', function (Blueprint $table) {
          $table->id();
        $table->string('client_name');
        $table->string('job_title');
        $table->string('company_name')->nullable();
        $table->text('feedback');
        $table->integer('rating')->default(0); // من 1 إلى 5
        $table->string('avatar_color')->default('#f26522'); // لون الدائرة (مثل البرتقالي في الصورة)
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};
