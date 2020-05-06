<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class rcu extends Model
{

    protected $fillable = ['name', 'host', 'rts_id'];
    protected $table = 'rcu';
}
