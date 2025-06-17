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
        Schema::create('kariers', function (Blueprint $table) {
            $table->id();
            $table->string("perusahaan", 50);
            $table->string("jobdesk", 200);
            $table->enum("model_kerja", ['Fulltime', 'Part Time', 'Freelance', 'Remote', 'Project_based']);
            $table->string("lokasi", 50);
            $table->enum("status", ['show', 'hide'])->default('show');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kariers');
    }
};
