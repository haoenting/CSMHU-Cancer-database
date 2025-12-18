<?php
return[
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost'], // 或 ['http://localhost'] 如果用同域
    'allowed_headers' => ['*'],
    'supports_credentials' => true,

];