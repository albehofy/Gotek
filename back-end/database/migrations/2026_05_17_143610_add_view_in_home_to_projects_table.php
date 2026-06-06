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
        Schema::table('projects', function (Blueprint $table) {
            // إضافة الحقل وتعيين القيمة الافتراضية كـ false (0)
            $table->boolean('ViewInHome')->default(false)->after('description'); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            // حذف الحقل في حال تراجعنا عن الـ migration
            $table->dropColumn('ViewInHome');
        });
    }
};