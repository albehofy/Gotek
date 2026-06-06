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
   Schema::create('services', function (Blueprint $table) {
        $table->id();
        $table->string('icon')->nullable(); 
        $table->json('title');              // مترجم
        $table->json('subtitle')->nullable(); // مترجم (مثل Marketing)
        $table->json('description');        // مترجم
        $table->json('features')->nullable(); // مصفوفة مترجمة
        $table->json('stats')->nullable();    // إحصائيات JSON
        $table->string('cta_text_en')->nullable();
        $table->string('cta_text_ar')->nullable();
        $table->string('cta_url')->nullable();
        $table->integer('order')->default(0);
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
