<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('tasks')) {
            $driver = DB::getDriverName();
            if ($driver === 'mysql') {
                DB::statement("ALTER TABLE tasks MODIFY COLUMN status VARCHAR(50) NOT NULL DEFAULT 'new'");
            } else {
                Schema::table('tasks', function (Blueprint $table) {
                    $table->string('status', 50)->default('new')->change();
                });
            }
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('tasks')) {
            $driver = DB::getDriverName();
            if ($driver === 'mysql') {
                DB::statement("ALTER TABLE tasks MODIFY COLUMN status ENUM('todo','in_progress','in_review','changes_requested','approved','done','cancelled') NOT NULL DEFAULT 'todo'");
            }
        }
    }
};
