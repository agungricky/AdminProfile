<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class project extends Model
{
    protected $table = 'projects';
    protected $fillable = ['title', 'description', 'link'];
    public $timestamps = true;
    
}
