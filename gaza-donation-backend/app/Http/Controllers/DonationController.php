<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donor;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class DonationController extends Controller
{
    // Stripe: إنشاء Intent
    public function createStripeIntent(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $intent = PaymentIntent::create([
            'amount' => $request->amount * 100, // السنتات
            'currency' => 'usd',
        ]);

        return response()->json(['clientSecret' => $intent->client_secret]);
    }

    // تخزين بيانات المتبرع بعد الدفع الناجح
    public function store(Request $request)
    {
        $donor = Donor::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'country' => $request->country,
            'campaign' => $request->campaign,
            'amount' => $request->amount,
            'method' => $request->method,
        ]);

        return response()->json(['message' => 'Donor saved successfully']);
    }
}

