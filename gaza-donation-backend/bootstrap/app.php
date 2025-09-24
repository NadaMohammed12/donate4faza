<?php
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use App\Http\Middleware\VerifyCsrfToken; // تأكد أنه مضاف


return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php', 
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // أزل النسخة الأصلية
        $middleware->web(remove: [
            \Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class,
        ]);

        // أضف نسختك المخصصة
        $middleware->web(prepend: [
            VerifyCsrfToken::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();


// use Illuminate\Foundation\Application;
// use Illuminate\Foundation\Configuration\Exceptions;
// use Illuminate\Foundation\Configuration\Middleware;





// })

//     // ->withMiddleware(function (Middleware $middleware): void {
//     //     $middleware->alias([
//     //         'csrf' => \App\Http\Middleware\VerifyCsrfToken::class,
//     //     ]);
//     // })
//     ->withExceptions(function (Exceptions $exceptions): void {
//         //
//     })->create();
