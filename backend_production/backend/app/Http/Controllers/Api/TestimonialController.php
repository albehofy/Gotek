<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTestimonialRequest;

class TestimonialController extends Controller
{
    public function index() {
        $testimonials = Testimonial::latest()->get();
        // Expose feedback_en and feedback_ar for edit forms
        $testimonials->map(function($t) {
            $feedbackDecoded = is_string($t->feedback) ? json_decode($t->feedback, true) : $t->feedback;
            $t->feedback_en = $feedbackDecoded['en'] ?? '';
            $t->feedback_ar = $feedbackDecoded['ar'] ?? '';
            return $t;
        });
        return response()->json($testimonials);
    }

    // حفظ رأي جديد
    public function store(StoreTestimonialRequest $request) {
        $testimonial = Testimonial::create($request->validated());
        return response()->json(['message' => 'تم إضافة رأي العميل بنجاح', 'data' => $testimonial]);
    }

    // تحديث رأي
    public function update(Request $request, Testimonial $testimonial) {
        $validated = $request->validate([
            'client_name'  => 'sometimes|string|max:255',
            'job_title'    => 'sometimes|string|max:255',
            'feedback'     => 'sometimes|array',
            'feedback.ar'  => 'sometimes|string',
            'feedback.en'  => 'sometimes|string',
            'rating'       => 'sometimes|integer|min:1|max:5',
            'company_name' => 'nullable|string|max:255',
            'avatar_color' => 'nullable|string|max:7',
        ]);

        $testimonial->update($validated);
        return response()->json(['message' => 'تم التحديث بنجاح', 'data' => $testimonial]);
    }

    // حذف رأي
    public function destroy(Testimonial $testimonial) {
        $testimonial->delete();
        return response()->json(['message' => 'تم الحذف بنجاح']);
    }
}
