<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    public function index()
    {
        $campaigns = Campaign::all();
        return response()->json($campaigns);
    }
    public function store(Request $request)
{
    // التحقق من البيانات
    $validated = $request->validate([
        'title_ar' => 'required|string|max:255',
        'title_en' => 'required|string|max:255',
        'description_ar' => 'required|string',
        'description_en' => 'required|string',
        'image_url' => 'required|url',
    ]);

    // حفظ الحملة في قاعدة البيانات
    $campaign = Campaign::create($validated);

    return response()->json([
        'message' => 'تم حفظ الحملة بنجاح',
        'data' => $campaign
    ], 201);
}
}
