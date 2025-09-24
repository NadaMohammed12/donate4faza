<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class DonateController extends Controller
{
    public function createStripeIntent(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:1',
            'currency' => 'required|string',
        ]);

        Stripe::setApiKey(env('STRIPE_SECRET'));

        $intent = PaymentIntent::create([
            'amount' => $request->amount * 100, // Stripe يأخذ بالسنتات
            'currency' => $request->currency,
            'metadata' => [
                'full_name' => $request->full_name,
                'email'     => $request->email,
                'country'   => $request->country,
                'campaign'  => $request->campaign,
            ],
        ]);

        return response()->json([
            'clientSecret' => $intent->client_secret,
        ]);
    }
}
