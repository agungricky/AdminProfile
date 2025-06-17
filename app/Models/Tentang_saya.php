<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tentang_saya extends Model
{
    protected $table = 'tentang_sayas';
    protected $fillable = [
        'deskripsi',
        'created_at',
        'updated_at',
    ];
}
