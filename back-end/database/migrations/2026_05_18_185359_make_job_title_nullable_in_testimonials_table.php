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
    Schema::table('testimonials', function (Blueprint $table) {
        // تعديل الحقل ليصبح nullable
        $table->string('job_title')->nullable()->change();
    });
}

public function down(): void
{
    Schema::table('testimonials', function (Blueprint $table) {
        // إعادته لإجباري في حال التراجع
        $table->string('job_title')->nullable(false)->change();
    });
}
};
