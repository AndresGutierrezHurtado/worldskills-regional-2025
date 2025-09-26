<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// Models
use \App\Models\Play;
use \App\Models\PlayTeam;

class PlayController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $search = request()->input('search', '');
            $plays = Play::with('teams');

            $plays = $plays->where(function ($query) use ($search) {
                $query->whereHas('teams', function ($query) use ($search) {
                    $query->where('teams.team_id', 'LIKE', "%$search%");
                    $query->orWhere('team_name', 'LIKE', "%$search%");
                    $query->orWhere('team_code', 'LIKE', "%$search%");
                });
                $query->orWhere('play_date', 'LIKE', "%$search%");
                $query->orWhere('play_start', 'LIKE', "%$search%");
            });

            $plays = $plays->orderBy('play_date', 'desc')->orderBy('play_start', 'desc')->get();

            return response()->json([
                'success' => true,
                'message' => 'Se obtuvieron los partidos correctamente: ',
                'data' => $plays
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Hubo un error al obtener los partidos: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $request->validate(
                [
                    'play_date' => 'required|date',
                    'play_date' => 'required',
                    // local
                    'local_id' => 'required|integer',
                    'local_goals' => 'required|integer',
                    'local_red' => 'required|integer',
                    'local_yellow' => 'required|integer',
                    // other
                    'team_id' => 'required|integer',
                    'team_goals' => 'required|integer',
                    'team_red' => 'required|integer',
                    'team_yellow' => 'required|integer',
                ],
                []
            );

            if (request()->input('local_id') === request()->input('team_id')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Los equipos deben ser distintos',
                ], 500);
            }

            $new = DB::transaction(function () {
                // crea play, lcoa, other
                $new = Play::create(request()->only('play_date', 'play_start'));

                $local = PlayTeam::create([
                    'play_id' => $new->play_id,
                    'team_id' => request()->input('local_id'),
                    'team_goals' => request()->input('local_goals'),
                    'team_red' => request()->input('local_red'),
                    'team_yellow' => request()->input('local_yellow'),
                    'team_local' => true,
                ]);

                $other = PlayTeam::create([
                    'play_id' => $new->play_id,
                    'team_id' => request()->input('team_id'),
                    'team_goals' => request()->input('team_goals'),
                    'team_red' => request()->input('team_red'),
                    'team_yellow' => request()->input('team_yellow'),
                    'team_local' => false,
                ]);

                return $new;
            });

            return response()->json([
                'success' => true,
                'message' => 'Se registró el resultado correctamente',
                'data' => $new,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Hubo un error al registrar el resultado: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            // Code
            return response()->json([
                'success' => false,
                'message' => 'Se ... correctamente: ',
                'data' => []
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Hubo un error al ...: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
