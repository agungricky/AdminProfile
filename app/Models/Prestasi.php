<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prestasi extends Model
{
    protected $table = 'prestasis';
    protected $fillable = [
        'nama_prestasi',
        'tahun',
        'keterangan',
        'status',
        'created_at',
        'updated_at'
    ];
}
