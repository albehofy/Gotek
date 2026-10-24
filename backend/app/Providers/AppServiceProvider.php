<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        \Laravel\Sanctum\Sanctum::usePersonalAccessTokenModel(\App\Models\PersonalAccessToken::class);

        try {
            if (\Illuminate\Support\Facades\Schema::hasTable('users')) {
                if (!\Illuminate\Support\Facades\Schema::hasColumn('users', 'is_vip')) {
                    \Illuminate\Support\Facades\Schema::table('users', function (\Illuminate\Database\Schema\Blueprint $table) {
                        $table->boolean('is_vip')->default(false)->after('is_hold');
                    });
                }
                if (!\Illuminate\Support\Facades\Schema::hasColumn('users', 'client_category')) {
                    \Illuminate\Support\Facades\Schema::table('users', function (\Illuminate\Database\Schema\Blueprint $table) {
                        $table->string('client_category', 50)->default('normal')->after('is_hold');
                    });
                }
            }

            if (\Illuminate\Support\Facades\Schema::hasTable('client_plans')) {
                if (!\Illuminate\Support\Facades\Schema::hasColumn('client_plans', 'deal_id')) {
                    \Illuminate\Support\Facades\Schema::table('client_plans', function (\Illuminate\Database\Schema\Blueprint $table) {
                        $table->unsignedBigInteger('deal_id')->nullable()->after('client_id');
                    });
                }
            }
        } catch (\Throwable $e) {}
    }
}
