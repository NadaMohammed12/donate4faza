<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PayPalCheckoutSdk\Core\PayPalHttpClient;
use PayPalCheckoutSdk\Core\SandboxEnvironment;
use PayPalCheckoutSdk\Core\ProductionEnvironment;
use PayPalCheckoutSdk\Orders\OrdersCreateRequest;
use PayPalCheckoutSdk\Orders\OrdersCaptureRequest;

class PayPalController extends Controller
{
    private $client;

    public function __construct()
    {
        $clientId = config('services.paypal.client_id');
        $clientSecret = config('services.paypal.secret');
        $mode = config('services.paypal.mode');

        $environment = $mode === 'sandbox'
            ? new SandboxEnvironment($clientId, $clientSecret)
            : new ProductionEnvironment($clientId, $clientSecret);

        $this->client = new PayPalHttpClient($environment);
    }

    public function createOrder(Request $request)
    {
        $amount = $request->input('amount', 10.00);

        $order = new OrdersCreateRequest();
        $order->prefer('return=representation');
        $order->body = [
            "intent" => "CAPTURE",
            "purchase_units" => [[
                "amount" => [
                    "currency_code" => "USD",
                    "value" => $amount
                ]
            ]]
        ];

        $response = $this->client->execute($order);
        return response()->json($response->result);
    }

    public function captureOrder($orderId)
    {
        $request = new OrdersCaptureRequest($orderId);
        $request->prefer('return=representation');

        $response = $this->client->execute($request);
        return response()->json($response->result);
    }
}

