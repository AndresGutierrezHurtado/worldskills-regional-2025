<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\PlayController;
use \App\Http\Controllers\TeamController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Teams routes
Route::get('/teams', [TeamController::class, 'index']);
Route::get('/teams/ranking', [TeamController::class, 'ranking']);
Route::get('/teams/{id}', [TeamController::class, 'show']);
Route::post('/teams', [TeamController::class, 'store']);

// Plays routes
Route::get('/plays', [PlayController::class, 'index']);
Route::post('/plays', [PlayController::class, 'store']);
