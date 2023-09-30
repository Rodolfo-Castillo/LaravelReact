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
        Schema::create('estados_republicas', function (Blueprint $table) {
            $table->id();
            $table->string('estado');
            $table->timestamps();
        });

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'NO ESPECIFICADO',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Aguascalientes',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Baja California',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Baja California Sur',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Campeche',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Coahuila',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Colima',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Chiapas',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Chihuahua',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Durango',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'CDMX',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Guanajuato',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Guerrero',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Hidalgo',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Jalisco',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'México',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Michoacán',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Morelos',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Nayarit',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Nuevo León',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Oaxaca',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Puebla',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Querétaro',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Quintana Roo',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'San Luis Potosí',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Sinaloa',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Sonora',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Tabasco',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Tamaulipas',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Tlaxcala',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Veracruz',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Yucatán',
                "created_at" =>  \Carbon\Carbon::now(), # new \Datetime()
                "updated_at" => \Carbon\Carbon::now(),  # new \Datetime()
            )
        );

        DB::table('estados_republicas')->insert(
            array(
                'estado' => 'Zacatecas',
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
        Schema::dropIfExists('estados_republicas');
    }
};
