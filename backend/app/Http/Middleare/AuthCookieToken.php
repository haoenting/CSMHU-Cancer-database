<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class AuthCookieToken
{
    public function handle(Request $request, Closure $next)
    {
        // 從 Cookie 拿 token
        $token = $request->cookie('auth_token');
        if (!$token) {
            return response()->json(['message' => 'Unauthenticated. No token.'], 401);
        }

        // 用 Sanctum 的 PersonalAccessToken 找 token
        $accessToken = PersonalAccessToken::findToken($token);
        if (!$accessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }

        // 將 user 綁到 request
        $request->setUserResolver(function () use ($accessToken) {
            return $accessToken->tokenable;
        });

        return $next($request);
    }
}
