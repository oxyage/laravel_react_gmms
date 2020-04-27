<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSnmpTriggersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('snmp_triggers', function (Blueprint $table) {
            $table->id();
            $table->integer('trigger_id')->nullable();
            $table->string('oid');
            $table->string('community');
            $table->string('version');
            $table->tinyInteger('timeout');
            $table->tinyInteger('retries');
            $table->char('type', 20)->nullable();
            $table->string('value')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('snmp_triggers');
    }
}
