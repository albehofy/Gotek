<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('deals')) {
            $driver = DB::getDriverName();
            if ($driver === 'mysql') {
                DB::statement("ALTER TABLE deals MODIFY COLUMN status VARCHAR(50) NOT NULL DEFAULT 'pending'");
            } else {
                Schema::table('deals', function (Blueprint $table) {
                    $table->string('status', 50)->default('pending')->change();
                });
            }
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('deals')) {
            $driver = DB::getDriverName();
            if ($driver === 'mysql') {
                DB::statement("ALTER TABLE deals MODIFY COLUMN status ENUM('pending', 'active', 'completed', 'cancelled') NOT NULL DEFAULT 'pending'");
            }
        }
    }
};
