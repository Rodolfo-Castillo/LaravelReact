<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tarea;
use Illuminate\Support\Facades\DB;


class TareaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tareas = DB::table('tareas')
            ->join('estados_republicas', 'estados_republicas.id', '=', 'tareas.estadorepublica_id')
            ->select(DB::raw('"tareas"."id","tareas"."titulo","tareas"."descripcion","tareas"."creador",
            "estados_republicas"."estado","tareas"."created_at","tareas"."likes",
            false as "hasVoted"'))
            ->orderBy('tareas.id')
            ->get();
        return $tareas;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $tarea = new Tarea();
        $tarea->titulo = $request->titulo;
        $tarea->descripcion = $request->descripcion;
        $tarea->descripcion = $request->descripcion;
        $tarea->creador = $request->creador;
        $tarea->likes = $request->likes;
        $tarea->estadorepublica_id = $request->idEntidad;
        $tarea->save();
        return response()->json([
            "data" => $tarea,
            "msg" => "Exito. Tarea guardada con exito."
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tarea = Tarea::find($id);
        return $tarea;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tarea = Tarea::findOrFail($request->id);
        $tarea->likes = $request->likes;
        $tarea->save();
        return response()->json([
            'data' => $tarea,
            'msg' => 'Exito. Like guardado con exito.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Tarea::destroy($id);
        return response()->json([
            'data' => $id,
            'msg' => 'Exito. Tarea eliminada con exito.'
        ]);
    }
}
