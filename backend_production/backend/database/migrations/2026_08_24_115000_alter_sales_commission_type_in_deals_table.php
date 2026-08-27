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
                DB::statement("ALTER TABLE deals MODIFY COLUMN sales_commission_type VARCHAR(50) NULL DEFAULT 'none'");
            } else {
                Schema::table('deals', function (Blueprint $table) {
                    $table->string('sales_commission_type', 50)->nullable()->default('none')->change();
                });
            }
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('deals')) {
            $driver = DB::getDriverName();
            if ($driver === 'mysql') {
                DB::statement("ALTER TABLE deals MODIFY COLUMN sales_commission_type ENUM('fixed', 'percentage') NULL DEFAULT 'fixed'");
            }
        }
    }
};
