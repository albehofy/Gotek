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
    Schema::create('contracts', function (Blueprint $table) {
        $table->id();
        $table->foreignId('client_id')->constrained('users');
        $table->foreignId('admin_id')->constrained('users');
        $table->text('title');
        $table->longText('content');
        $table->timestamp('signed_at')->nullable();
        $table->json('audit_log')->nullable(); // لحفظ تاريخ التغييرات
        $table->softDeletes();
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contracts');
    }
};
