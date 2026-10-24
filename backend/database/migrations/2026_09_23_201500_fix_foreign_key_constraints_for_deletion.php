<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $driver = DB::getDriverName();

        if ($driver === 'mysql') {
            // 1. client_payments: make deal_id and client_id nullable with ON DELETE SET NULL
            if (Schema::hasTable('client_payments')) {
                DB::statement('ALTER TABLE client_payments MODIFY COLUMN deal_id BIGINT UNSIGNED NULL');
                DB::statement('ALTER TABLE client_payments MODIFY COLUMN client_id BIGINT UNSIGNED NULL');

                try {
                    DB::statement('ALTER TABLE client_payments DROP FOREIGN KEY client_payments_deal_id_foreign');
                } catch (\Throwable $e) {}
                try {
                    DB::statement('ALTER TABLE client_payments ADD CONSTRAINT client_payments_deal_id_foreign FOREIGN KEY (deal_id) REFERENCES deals(id) ON DELETE SET NULL');
                } catch (\Throwable $e) {}

                try {
                    DB::statement('ALTER TABLE client_payments DROP FOREIGN KEY client_payments_client_id_foreign');
                } catch (\Throwable $e) {}
                try {
                    DB::statement('ALTER TABLE client_payments ADD CONSTRAINT client_payments_client_id_foreign FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE SET NULL');
                } catch (\Throwable $e) {}
            }

            // 2. tasks: make department_id nullable with ON DELETE SET NULL
            if (Schema::hasTable('tasks')) {
                DB::statement('ALTER TABLE tasks MODIFY COLUMN department_id BIGINT UNSIGNED NULL');

                try {
                    DB::statement('ALTER TABLE tasks DROP FOREIGN KEY tasks_department_id_foreign');
                } catch (\Throwable $e) {}
                try {
                    DB::statement('ALTER TABLE tasks ADD CONSTRAINT tasks_department_id_foreign FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL');
                } catch (\Throwable $e) {}
            }

            // 3. task_status_histories: make changed_by nullable with ON DELETE SET NULL
            if (Schema::hasTable('task_status_histories')) {
                DB::statement('ALTER TABLE task_status_histories MODIFY COLUMN changed_by BIGINT UNSIGNED NULL');

                try {
                    DB::statement('ALTER TABLE task_status_histories DROP FOREIGN KEY task_status_histories_changed_by_foreign');
                } catch (\Throwable $e) {}
                try {
                    DB::statement('ALTER TABLE task_status_histories ADD CONSTRAINT task_status_histories_changed_by_foreign FOREIGN KEY (changed_by) REFERENCES users(id) ON DELETE SET NULL');
                } catch (\Throwable $e) {}
            }

            // 4. task_checklists: make completed_by nullable with ON DELETE SET NULL
            if (Schema::hasTable('task_checklists')) {
                DB::statement('ALTER TABLE task_checklists MODIFY COLUMN completed_by BIGINT UNSIGNED NULL');

                try {
                    DB::statement('ALTER TABLE task_checklists DROP FOREIGN KEY task_checklists_completed_by_foreign');
                } catch (\Throwable $e) {}
                try {
                    DB::statement('ALTER TABLE task_checklists ADD CONSTRAINT task_checklists_completed_by_foreign FOREIGN KEY (completed_by) REFERENCES users(id) ON DELETE SET NULL');
                } catch (\Throwable $e) {}
            }

            // 5. contracts: make admin_id and client_id nullable with ON DELETE SET NULL
            if (Schema::hasTable('contracts')) {
                DB::statement('ALTER TABLE contracts MODIFY COLUMN admin_id BIGINT UNSIGNED NULL');
                DB::statement('ALTER TABLE contracts MODIFY COLUMN client_id BIGINT UNSIGNED NULL');

                try {
                    DB::statement('ALTER TABLE contracts DROP FOREIGN KEY contracts_admin_id_foreign');
                } catch (\Throwable $e) {}
                try {
                    DB::statement('ALTER TABLE contracts ADD CONSTRAINT contracts_admin_id_foreign FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE SET NULL');
                } catch (\Throwable $e) {}

                try {
                    DB::statement('ALTER TABLE contracts DROP FOREIGN KEY contracts_client_id_foreign');
                } catch (\Throwable $e) {}
                try {
                    DB::statement('ALTER TABLE contracts ADD CONSTRAINT contracts_client_id_foreign FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE SET NULL');
                } catch (\Throwable $e) {}
            }
        } else {
            // SQLite and other environments (used in unit tests)
            if (Schema::hasTable('client_payments')) {
                Schema::table('client_payments', function (Blueprint $table) {
                    $table->unsignedBigInteger('deal_id')->nullable()->change();
                    $table->unsignedBigInteger('client_id')->nullable()->change();
                });
            }
            if (Schema::hasTable('tasks')) {
                Schema::table('tasks', function (Blueprint $table) {
                    $table->unsignedBigInteger('department_id')->nullable()->change();
                });
            }
            if (Schema::hasTable('task_status_histories')) {
                Schema::table('task_status_histories', function (Blueprint $table) {
                    $table->unsignedBigInteger('changed_by')->nullable()->change();
                });
            }
            if (Schema::hasTable('task_checklists')) {
                Schema::table('task_checklists', function (Blueprint $table) {
                    $table->unsignedBigInteger('completed_by')->nullable()->change();
                });
            }
            if (Schema::hasTable('contracts')) {
                Schema::table('contracts', function (Blueprint $table) {
                    $table->unsignedBigInteger('admin_id')->nullable()->change();
                    $table->unsignedBigInteger('client_id')->nullable()->change();
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Safe reversible migration
    }
};
