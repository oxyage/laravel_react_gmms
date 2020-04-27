<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class rts extends Model
{
    protected $fillable = ['name', 'coord_x', 'coord_y'];
    protected $table = 'rts';
}
