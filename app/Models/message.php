<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class message extends Model
{
    protected $table = 'messages';
    protected $fillable = [
        'id',
        'Fullname',
        'Email',
        'wa',
        'message',
        'created_at',
        'updated_at'
    ];
}
