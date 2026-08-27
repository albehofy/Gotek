<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('users')) {
            $driver = DB::getDriverName();
            if ($driver === 'mysql') {
                DB::statement("ALTER TABLE users MODIFY COLUMN role VARCHAR(50) NOT NULL DEFAULT 'viewer'");
            } else {
                Schema::table('users', function (Blueprint $table) {
                    $table->string('role', 50)->default('viewer')->change();
                });
            }
        }
    }

    public function down(): void
    {
        //
    }
};
