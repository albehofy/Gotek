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
     Schema::create('faqs', function (Blueprint $table) {
        $table->id();
        // النص بالعربية والإنجليزية (أو لغة واحدة حسب رغبتك)
        $table->string('question_en');
        $table->string('question_ar')->nullable();
        $table->text('answer_en');
        $table->text('answer_ar')->nullable();
        
        $table->integer('sort_order')->default(0); // للتحكم في الترتيب كما في الصورة
        $table->boolean('is_active')->default(true);
        $table->timestamps();
    });}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
         Schema::drop('faqs');
    }
};
