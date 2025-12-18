<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\DataController;


// login/logout 需要 session → 包 web middleware
Route::middleware('web')->group(function () {
    Route::get('/me', [UserController::class, 'checkAuth']);    // 驗證使用者是否登入
    Route::post('/login', [UserController::class, 'login']);    // session login
    Route::post('/logout', [UserController::class, 'logout']);  // session logout
    Route::post('/register', [UserController::class, 'register']); 
    Route::get('/getPatient', [DataController::class, 'getPatient']);
    Route::post('/insert', [DataController::class, 'insert']);
    Route::post('/modify', [DataController::class, 'modify']);
    Route::get('/getData', [DataController::class, 'getData']);
    Route::get('/getAction', [UserController::class, 'getAction']);
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api).*$'); // 避免攔截 /api 路由
