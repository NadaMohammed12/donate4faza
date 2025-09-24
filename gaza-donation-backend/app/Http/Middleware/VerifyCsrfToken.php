<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * المسارات المستثناة من CSRF
     * @var array<int, string>
     */


    protected $except = [
        '/contact',
         '/donate',
        '/donations/*',
         '/donations/stripe/intent',
    //   '/donations/stripe/webhook',
    //      '/donations/paypal/create',
    //     '/donations/paypal/capture',
    ];
}


  
