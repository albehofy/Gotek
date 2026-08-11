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
    // تاريخ الحالات
    Schema::create('task_status_histories', function (Blueprint $table) {
        $table->id();
        $table->foreignId('task_id')->constrained()->onDelete('cascade');
        $table->string('from_status');
        $table->string('to_status');
        $table->foreignId('changed_by')->constrained('users');
        $table->timestamps();
    });

    // // المرفقات - Polymorphic
    // Schema::create('attachments', function (Blueprint $table) {
    //     $table->id();
    //     $table->morphs('attachable'); // task_id أو comment_id
    //     $table->string('file_path');
    //     $table->string('file_type');
    //     $table->integer('file_size'); // بالحجم الفعلي
    //     $table->string('thumbnail')->nullable();
    //     $table->foreignId('uploaded_by')->constrained('users');
    //     $table->timestamps();
    // });

// الـ Checklist (تم دمج كل الحقول هنا)
    Schema::create('task_checklists', function (Blueprint $table) {
        $table->id();
        $table->foreignId('task_id')->constrained()->onDelete('cascade');
        $table->string('item_text'); // أو item_description حسب رغبتك
        $table->boolean('is_completed')->default(false);
        $table->foreignId('completed_by')->nullable()->constrained('users');
        $table->timestamp('completed_at')->nullable();
        $table->timestamps();
    });
}
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('task_details_tables');
    }
};
