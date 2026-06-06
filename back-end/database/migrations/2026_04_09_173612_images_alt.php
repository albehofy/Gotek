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
    $table->string('img_alt')->nullable(); // حقل مخصص للـ alt text
});
     Schema::table('blogs', function (Blueprint $table) {
    $table->string('img_alt')->nullable(); // حقل مخصص للـ alt text
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
