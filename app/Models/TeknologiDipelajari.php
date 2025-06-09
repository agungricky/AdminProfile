<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeknologiDipelajari extends Model
{
    protected $table = 'teknologi_dipelajaris';
    protected $fillable = ['id', 'title', 'subTitle', 'image'];
}
