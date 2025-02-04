<?php

return [
    'stateful' => [
        'localhost:3000', // React 前端的運行域名，例如 localhost 或其他
    ],
    'middleware' => [
    'verify_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
    'encrypt_cookies' => App\Http\Middleware\EncryptCookies::class,
],
];