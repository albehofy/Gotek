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
        if (Schema::hasTable('users')) {
            Schema::table('users', function (Blueprint $table) {
                if (!Schema::hasColumn('users', 'is_vip')) {
                    $table->boolean('is_vip')->default(false)->after('is_hold');
                }
                if (!Schema::hasColumn('users', 'client_category')) {
                    $table->string('client_category', 50)->default('normal')->after('is_hold');
                }
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('users')) {
            Schema::table('users', function (Blueprint $table) {
                if (Schema::hasColumn('users', 'client_category')) {
                    $table->dropColumn('client_category');
                }
            });
        }
    }
};
