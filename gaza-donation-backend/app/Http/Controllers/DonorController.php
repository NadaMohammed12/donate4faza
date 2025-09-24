<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use Illuminate\Http\Request;

class DonorController extends Controller
{
    protected $fillable = [
        'full_name','country','email','amount','campaign'
    ];
    public function latestDonors()
    {
        
        return Donor::inRandomOrder()->take(100)->get();
    }



 public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'country'   => 'nullable|string|max:255',
            'email'     => 'nullable|email|max:255',
            'amount'    => 'required|numeric|min:1',
            'campaign'  => 'nullable|string|max:255',
        ]);

        Donor::create($validated);

        return response()->json(['message' => 'تم تسجيل التبرع بنجاح ✅'], 201);
    }
}




 
