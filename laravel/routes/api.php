<?php

use App\Http\Controllers\Api\TareaController;
use App\Http\Controllers\Api\EstadosRepublicaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::controller(TareaController::class)->group(function () {
    Route::get('/tareas', 'index');
    Route::post('/tarea', 'store');
    Route::get('/tarea/{id}', 'show');
    Route::put('/tarea/{id}', 'update');
    Route::delete('/tarea/{id}', 'destroy');
});

Route::controller(EstadosRepublicaController::class)->group(function () {
    Route::get('/entidades', 'index');
});
