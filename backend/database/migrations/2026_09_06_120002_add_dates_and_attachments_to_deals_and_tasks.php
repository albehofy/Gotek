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
        // 1. Deals table additions
        Schema::table('deals', function (Blueprint $table) {
            if (!Schema::hasColumn('deals', 'attachment_path')) {
                $table->string('attachment_path')->nullable()->after('description');
            }
            if (!Schema::hasColumn('deals', 'reference_link')) {
                $table->string('reference_link', 1000)->nullable()->after('attachment_path');
            }
            if (!Schema::hasColumn('deals', 'start_date')) {
                $table->date('start_date')->nullable()->after('reference_link');
            }
            if (!Schema::hasColumn('deals', 'end_date')) {
                $table->date('end_date')->nullable()->after('start_date');
            }
            if (!Schema::hasColumn('deals', 'shooting_date')) {
                $table->date('shooting_date')->nullable()->after('end_date');
            }
            if (!Schema::hasColumn('deals', 'delivery_date')) {
                $table->date('delivery_date')->nullable()->after('shooting_date');
            }
            if (!Schema::hasColumn('deals', 'dates_not_specified')) {
                $table->boolean('dates_not_specified')->default(false)->after('delivery_date');
            }
        });

        // 2. Tasks table additions
        Schema::table('tasks', function (Blueprint $table) {
            if (!Schema::hasColumn('tasks', 'due_date')) {
                $table->date('due_date')->nullable()->after('status');
            }
            if (!Schema::hasColumn('tasks', 'start_date')) {
                $table->date('start_date')->nullable()->after('due_date');
            }
            if (!Schema::hasColumn('tasks', 'end_date')) {
                $table->date('end_date')->nullable()->after('start_date');
            }
            if (!Schema::hasColumn('tasks', 'shooting_date')) {
                $table->date('shooting_date')->nullable()->after('end_date');
            }
            if (!Schema::hasColumn('tasks', 'delivery_date')) {
                $table->date('delivery_date')->nullable()->after('shooting_date');
            }
            if (!Schema::hasColumn('tasks', 'dates_not_specified')) {
                $table->boolean('dates_not_specified')->default(false)->after('delivery_date');
            }
            if (!Schema::hasColumn('tasks', 'is_standalone')) {
                $table->boolean('is_standalone')->default(false)->after('dates_not_specified');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropColumn([
                'due_date',
                'start_date',
                'end_date',
                'shooting_date',
                'delivery_date',
                'dates_not_specified',
                'is_standalone'
            ]);
        });

        Schema::table('deals', function (Blueprint $table) {
            $table->dropColumn([
                'attachment_path',
                'reference_link',
                'start_date',
                'end_date',
                'shooting_date',
                'delivery_date',
                'dates_not_specified'
            ]);
        });
    }
};
