<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class karier extends Model
{
    protected $table = 'kariers';
    protected $fillable = [
        'perusahaan',
        'jobdesk',
        'model_kerja',
        'lokasi',
        'status',
        'created_at',
        'updated_at',
    ];
}
