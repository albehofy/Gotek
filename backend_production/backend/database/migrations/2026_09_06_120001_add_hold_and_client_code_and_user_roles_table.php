<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Add is_hold and client_code to users table
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'is_hold')) {
                $table->boolean('is_hold')->default(false)->after('role_id');
            }
            if (!Schema::hasColumn('users', 'client_code')) {
                $table->string('client_code', 30)->nullable()->unique()->after('id');
            }
        });

        // 2. Create role_user pivot table for multi-role support
        if (!Schema::hasTable('role_user')) {
            Schema::create('role_user', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
                $table->foreignId('role_id')->constrained('roles')->onDelete('cascade');
                $table->timestamps();

                $table->unique(['user_id', 'role_id']);
            });
        }

        // 3. Backfill role_user from existing users.role_id
        $usersWithRoles = DB::table('users')->whereNotNull('role_id')->get();
        foreach ($usersWithRoles as $u) {
            DB::table('role_user')->updateOrInsert(
                ['user_id' => $u->id, 'role_id' => $u->role_id],
                ['created_at' => now(), 'updated_at' => now()]
            );
        }

        // 4. Backfill client_code starting from 1001 for all existing clients
        $clients = DB::table('users')->where('role', 'client')->orderBy('id', 'asc')->get();
        $code = 1001;
        foreach ($clients as $c) {
            if (empty($c->client_code)) {
                DB::table('users')->where('id', $c->id)->update(['client_code' => (string)$code]);
                $code++;
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_user');

        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'client_code')) {
                $table->dropColumn('client_code');
            }
            if (Schema::hasColumn('users', 'is_hold')) {
                $table->dropColumn('is_hold');
            }
        });
    }
};
