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
        Schema::table('prestasis', function (Blueprint $table) {
            $table->string('title', 100)->before('id');
            $table->string('keterangan_detail', 250)->before('title');
            $table->string('kelompok', 250);
            $table->string('penyelenggara', 250);
            $table->string('sertiv');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('prestasis', function (Blueprint $table) {
            $table->dropColumn([
                'title',
                'keterangan_detail',
                'kelompok',
                'penyelenggara',
                'sertiv',
            ]);
        });
    }
};
