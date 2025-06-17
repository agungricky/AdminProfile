<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ketrampilan_Nonteknis extends Model
{
    protected $table = 'ketrampilan__nonteknis';
    protected $fillable = [
        'id',
        'nama_ketrampilan',
        'deskripsi',
        'status',
        'created_at',
        'updated_at'
    ];
}
