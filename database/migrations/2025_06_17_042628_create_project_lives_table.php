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
        Schema::create('project_lives', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('desc');
            $table->string('img');
            $table->string('link');
            $table->date('tanggal_publish');
            $table->enum('status_publish', ['Publish', 'Not Publish'])->default('Publish');
            $table->enum('status', ['show', 'hide'])->default('show');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_lives');
    }
};
