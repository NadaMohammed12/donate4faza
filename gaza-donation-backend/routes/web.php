<?php

//  use Illuminate\Support\Facades\Route;
//  use App\Http\Controllers\CampaignController;
//  use App\Http\Controllers\DonorController;
//  use Illuminate\Support\Facades\DB;
//  use App\Http\Controllers\ContactController;
//  use App\Http\Controllers\DonationController;

// Route::get('/campaigns', [CampaignController::class, 'index']);
// Route::post('/donate', [DonationController::class, 'store']);
// Route::get('/latest-donors', [DonorController::class, 'latestDonors']);
// Route::post('/contact', [ContactController::class, 'store']);
// Route::get('/total-donations', function () {
//     $total = DB::table('donors')->sum('amount');
//     return response()->json(['total' => $total]);
// });

// Route::post('/donations/stripe/intent',  [DonationController::class, 'createStripeIntent']);
// Route::post('/donations/stripe/webhook', [DonationController::class, 'stripeWebhook']); // Stripe webhook

// Route::post('/donations/paypal/create',  [DonationController::class, 'createPayPalOrder']);
// Route::post('/donations/paypal/capture', [DonationController::class, 'capturePayPalOrder']);


// Route::post('/donations/stripe/intent', [DonationController::class, 'createIntent']);
