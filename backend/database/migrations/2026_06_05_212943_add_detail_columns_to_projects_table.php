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
        Schema::table('projects', function (Blueprint $table) {
            $table->string('color')->nullable();
            $table->string('emoji')->nullable();
            $table->json('tags')->nullable();
            $table->string('client')->nullable();
            $table->string('timeline')->nullable();
            $table->json('challenge')->nullable();
            $table->json('solution')->nullable();
            $table->json('results')->nullable();
            $table->json('testimonial')->nullable();
            $table->json('deliverables')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn([
                'color', 'emoji', 'tags', 'client', 'timeline',
                'challenge', 'solution', 'results', 'testimonial', 'deliverables'
            ]);
        });
    }
};
