<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hold extends Model
{
    protected $table = 'p_hold';
    public $timestamps = false;
    protected $fillable = [
        'id_attr',
        'counts'
    ];
}
