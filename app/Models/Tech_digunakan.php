<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tech_digunakan extends Model
{
    protected $table = 'tech_digunakans';
    protected $fillable = [
        'Teknologi',
        'status',
        'created_at',
        'updated_at'
    ];
}
