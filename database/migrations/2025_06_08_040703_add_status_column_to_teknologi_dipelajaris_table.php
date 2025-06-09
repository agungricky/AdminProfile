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
        Schema::table('teknologi_dipelajaris', function (Blueprint $table) {
            $table->enum('status', ['show', 'Hide'])->after('image');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('teknologi_dipelajaris', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
