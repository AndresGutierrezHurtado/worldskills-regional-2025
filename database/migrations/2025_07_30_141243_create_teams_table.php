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
        Schema::create('teams', function (Blueprint $table) {
            $table->id('team_id');
            $table->string('team_name');
            $table->string('team_code');
            $table->string('team_flag');
        });

        Schema::create('plays', function (Blueprint $table) {
            $table->id('play_id');
            $table->date('play_date');
            $table->time('play_start');
        });

        Schema::create('play_teams', function (Blueprint $table) {
            $table->foreignId('team_id')->constrained('teams', 'team_id');
            $table->foreignId('play_id')->constrained('plays', 'play_id');
            $table->integer('team_goals');
            $table->boolean('team_local');
            $table->integer('team_red');
            $table->integer('team_yellow');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
