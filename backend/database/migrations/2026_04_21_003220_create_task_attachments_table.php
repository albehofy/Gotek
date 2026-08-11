<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up()
{
    Schema::create('attachments', function (Blueprint $table) {
        $table->id();
        // الحقول السحرية للـ Polymorphic
        $table->morphs('attachable'); // دي بتكارييت حقلين: attachable_id و attachable_type
        
        $table->string('file_path');
        $table->string('file_name');
        $table->string('file_type');
        $table->unsignedBigInteger('file_size');
        $table->string('thumbnail')->nullable();
        
        // مين اللي رفع الملف
        $table->foreignId('uploaded_by')->constrained('users')->onDelete('cascade');
        
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attachments');
    }
};
