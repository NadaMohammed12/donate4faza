<?php
return [
    'paths' => ['api/*', 'campaigns','latest-donors' ,'sanctum/csrf-cookie','contact','*'],

    'allowed_methods' => ['*'],
    // 'allowed_origins' => ['https://donate4gaza.org'],

    'allowed_origins' => ['http://localhost:5173','http://localhost:5174','http://localhost:3000' ],  //للحماية

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
