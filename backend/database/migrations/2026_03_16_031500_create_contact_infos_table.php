<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contact_infos', function (Blueprint $table) {
            $table->id();
            $table->string('whatsapp_phone')->nullable();
            $table->string('whatsapp_description')->nullable();
            $table->string('whatsapp_cta_label')->nullable();
            $table->string('official_email')->nullable();
            $table->string('official_email_description')->nullable();
            $table->string('sales_phone')->nullable();
            $table->string('sales_person')->nullable();
            $table->string('general_manager_phone')->nullable();
            $table->string('general_manager_description')->nullable();
            $table->string('company_address')->nullable();
            $table->string('google_map_location')->nullable();
            $table->text('business_hours_json')->nullable();
            $table->string('emergency_support')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contact_infos');
    }
};

