<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasColumn('tasks', 'client_id')) {
            Schema::table('tasks', function (Blueprint $table) {
                $table->unsignedBigInteger('client_id')->nullable()->after('deal_id')->index();
                $table->foreign('client_id')->references('id')->on('users')->nullOnDelete();
            });

            // Backfill client_id from deals for existing tasks
            if (DB::getDriverName() === 'mysql') {
                DB::statement("
                    UPDATE tasks t
                    INNER JOIN deals d ON t.deal_id = d.id
                    SET t.client_id = d.client_id
                    WHERE t.deal_id IS NOT NULL AND d.client_id IS NOT NULL
                ");
            } else {
                DB::table('tasks')
                    ->whereNotNull('deal_id')
                    ->whereNull('client_id')
                    ->get()
                    ->each(function ($task) {
                        $clientId = DB::table('deals')->where('id', $task->deal_id)->value('client_id');
                        if ($clientId) {
                            DB::table('tasks')->where('id', $task->id)->update(['client_id' => $clientId]);
                        }
                    });
            }
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('tasks', 'client_id')) {
            Schema::table('tasks', function (Blueprint $table) {
                $table->dropForeign(['client_id']);
                $table->dropColumn('client_id');
            });
        }
    }
};
