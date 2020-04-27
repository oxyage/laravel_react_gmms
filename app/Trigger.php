<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trigger extends Model
{
    //
    protected $fillable = ['name',
                            'description',
                            'host',
                            'port',
                            'protocol',
                            'method'];

    /*
     *  $table->string('name');
            $table->string('description');
            $table->ipAddress('host');
            $table->integer('port');
            $table->enum('protocol', ['http', 'snmp']);
            $table->string('method'); // HTTP GET/POST | SNMP GET/SET
    */
}
