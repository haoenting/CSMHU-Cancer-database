<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\DataController;
use App\Http\Controllers\UserController;

Route::get('/test', function () {
    return response()->json(['status' => 'ok']);
});
Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);

Route::post('/insert', [DataController::class, 'insert']);
Route::get('/getData/{id}', [DataController::class, 'getData']);
Route::get('/getPatient', [DataController::class, 'getPatient']);
Route::post('/modify', [DataController::class, 'modify']);

Route::get('/getAction', [UserController::class, 'getAction']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json([
        'username' => $request->user(),
    ]);
});






