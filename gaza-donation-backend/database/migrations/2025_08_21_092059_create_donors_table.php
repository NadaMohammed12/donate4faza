<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('donors', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('country')->nullable();
            $table->string('email')->nullable();
            $table->decimal('amount', 10, 2); // قيمة التبرع
            $table->string('campaign')->nullable(); // الحملة المتبرع لها
            $table->timestamps(); // وقت الإنشاء والتعديل
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('donors');
    }
};
