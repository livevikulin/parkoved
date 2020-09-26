<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    protected $table = 'p_board';
    public $timestamps = false;
    protected $fillable = [
        'id_user',
        'id_attr',
        'date'
    ];
}
