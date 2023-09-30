<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tareas', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('descripcion');
            $table->string('creador');
            $table->integer('likes');
            $table->unsignedBigInteger('estadorepublica_id');
            $table->timestamps();
            $table->foreign('estadorepublica_id')->references('id')->on('estados_republicas');
        });

        DB::table('tareas')->insert(
            array(
                'titulo' => 'Demo 1',
                'descripcion' => 'Ejemplo',
                'creador' => 'Administrador',
                'likes' => '3',
                'estadorepublica_id' => '28',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('tareas')->insert(
            array(
                'titulo' => 'Demo 2',
                'descripcion' => 'Ejemplo demo 2',
                'creador' => 'yo',
                'likes' => '2',
                'estadorepublica_id' => '29',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tareas');
    }
};
