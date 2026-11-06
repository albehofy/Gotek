<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Sync description to scope where scope is null or empty
        DB::table('tasks')
            ->whereNotNull('description')
            ->where('description', '!=', '')
            ->where(function ($q) {
                $q->whereNull('scope')->orWhere('scope', '');
            })
            ->update([
                'scope' => DB::raw('description')
            ]);

        // Sync scope to description where description is null or empty
        DB::table('tasks')
            ->whereNotNull('scope')
            ->where('scope', '!=', '')
            ->where(function ($q) {
                $q->whereNull('description')->orWhere('description', '');
            })
            ->update([
                'description' => DB::raw('scope')
            ]);
    }

    public function down(): void
    {
        // No destructive rollback needed
    }
};
