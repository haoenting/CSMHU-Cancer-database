<?php
return [
    'api' => [
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class, // SPA 專用
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],

];


