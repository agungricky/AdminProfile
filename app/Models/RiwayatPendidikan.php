<?php

namespace App\Models;

use GuzzleHttp\Promise\Create;
use Illuminate\Database\Eloquent\Model;

class RiwayatPendidikan extends Model
{
    protected $table = 'riwayat_pendidikans';
    protected $fillable =
    [
        'nama_sekolah',
        'tahun_masuk',
        'tahun_lulus',
        'jurusan',
        'keterangan',
        'status',
        'creted_at',
        'updated_at'
    ];
}
