<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        try {
            $search = request()->input('search', '');
            $teams = Team::with('plays', 'plays.teams');

            $teams = $teams->where(function ($query) use ($search) {
                $query->where('team_name', 'LIKE', "%$search%");
                $query->orWhere('team_code', 'LIKE', "%$search%");
                $query->orWhere('team_id', 'LIKE', "%$search%");
            });

            $teams = $teams->get();

            return response()->json([
                'success' => true,
                'message' => 'Se obtuvieron los equipos correctamente: ',
                'data' => $teams
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Hubo un error al obtener los equipos: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function ranking()
    {
        try {
            $teams = Team::all();

            $result = [];

            foreach ($teams as $team) {
                $json = $team->toArray();

                $json['stats'] = $team->stats();

                $result[] = $json;
            }

            return response()->json([
                'success' => true,
                'message' => 'Se obtuvieron las estadísticas correctamente: ',
                'data' => $result
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Hubo un error al obtener las estadísticas: ' . $e->getMessage(),
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
                    'team_name' => 'required|string',
                    'team_code' => 'required|string|min:3|max:3',
                    'team_flag' => 'required|image|dimensions:width=500,height=500|max:3072',
                ],
                [
                    'team_name.required' => 'El nombre del equipo es requerido',
                    'team_code.required' => 'El código del equipo es requerido',
                    'team_code.min' => 'El código del equipo debe tener 3 carácteres',
                    'team_code.max' => 'El código del equipo debe tener 3 carácteres',
                    'team_flag.required' => 'La imagen del equipo es requerida',
                    'team_flag.image' => 'El archivo debe ser una imagen',
                    'team_flag.dimensions' => 'La imagen debe tener 500px x 500px',
                    'team_flag.max' => 'La imagen debe pesar máximo 3MB',
                ]
            );

            $data = [
                'team_name' => request()->input('team_name'),
                'team_code' => request()->input('team_code'),
                'team_flag' => '/storage/teams/default.jpg',
            ];

            $new = Team::create($data);

            request()->file('team_flag')->storeAs('teams', $new->team_id . '.png', 'public');

            $new->update(['team_flag' => "/storage/teams/{$new->team_id}.png"]);

            return response()->json([
                'success' => true,
                'message' => 'Se almacenó el equipo correctamente: ',
                'data' => $new
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Hubo un error al almacenar el equipo: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $team = Team::find($id);

            $result = $team->toArray();

            $result['stats'] = $team->stats();

            return response()->json([
                'success' => true,
                'message' => 'Se Obtuvo el equipo correctamente: ',
                'data' => $result,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Hubo un error al obtener el equipo: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        //
    }
}
