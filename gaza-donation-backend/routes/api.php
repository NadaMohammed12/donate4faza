<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\DonorController;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DonationController;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\PayPalController;

Route::post('/donations/stripe/intent', [DonationController::class, 'createStripeIntent']);
Route::post('/donations/store', [DonationController::class, 'store']);


Route::post('/paypal/create-order', [PayPalController::class, 'createOrder']);
Route::post('/paypal/capture-order/{orderId}', [PayPalController::class, 'captureOrder']);

Route::get('/campaigns', [CampaignController::class, 'index', 'store']);
Route::get('/latest-donors', [DonorController::class, 'latestDonors']);
Route::post('/contact', [ContactController::class, 'store']);
Route::get('/total-donations', function () {
    $total = DB::table('donors')->sum('amount');
    return response()->json(['total' => $total]);
});
Route::get('/geoip', function () {
    try {
        $response = Http::get('https://ipapi.co/json/');
        return $response->json();
    } catch (\Exception $e) {
        return ['country_name' => '']; // قيمة افتراضية عند الخطأ
    }
});





