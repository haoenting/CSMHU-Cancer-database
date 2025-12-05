<?php
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\DataController;
use App\Http\Controllers\UserController;

// 取得 CSRF cookie
Route::get('/sanctum/csrf-cookie', [AuthController::class, 'csrfCookie']);

// 登入/登出/註冊
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// 受保護 API
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
