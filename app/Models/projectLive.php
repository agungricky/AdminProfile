<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class projectLive extends Model
{
    protected $table = 'project_lives';
    protected $fillable =
    [
        'id',
        'title',
        'desc',
        'img',
        'link',
        'tanggal_publish',
        'status_publish',
        'status'
    ];
}
