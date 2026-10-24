<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('attachments', function (Blueprint $table) {
            if (!Schema::hasColumn('attachments', 'category')) {
                $table->string('category', 50)->nullable()->default('document')->after('file_size');
            }
            if (!Schema::hasColumn('attachments', 'description')) {
                $table->string('description', 255)->nullable()->after('category');
            }
        });
    }

    public function down(): void
    {
        Schema::table('attachments', function (Blueprint $table) {
            if (Schema::hasColumn('attachments', 'category')) {
                $table->dropColumn('category');
            }
            if (Schema::hasColumn('attachments', 'description')) {
                $table->dropColumn('description');
            }
        });
    }
};
