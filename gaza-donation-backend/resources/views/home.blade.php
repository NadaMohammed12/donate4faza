<!DOCTYPE html>
<html>
<head>
    <title>الحملات</title>
</head>
<body>
    <h1>قائمة الحملات</h1>

    @foreach($campaigns as $campaign)
        <div>
            <h2>{{ $campaign->title_ar }} / {{ $campaign->title_en }}</h2>
            <p>{{ $campaign->description_ar }}</p>
            <p>{{ $campaign->description_en }}</p>
            <img src="{{ $campaign->image_url }}" width="200" />
        </div>
    @endforeach
</body>
</html>
