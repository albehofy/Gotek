<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FAQ;
use App\Http\Resources\FAQResource;
use Illuminate\Http\Request;

class FAQController extends Controller
{
    // عرض كل الأسئلة
    public function index()
    {
        $faqs = FAQ::orderBy('sort_order', 'asc')->get();

        return FAQResource::collection($faqs)
            ->additional(['status' => 'success']);
    }

    // إضافة سؤال جديد (للأدمن)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'question_en' => 'required|string|max:255',
            'answer_en'   => 'required|string',
            'sort_order'  => 'nullable|integer',
            'question_ar' => 'required|string|max:255',
            'answer_ar'   => 'required|string',
            'is_active'   => 'nullable|boolean',
        ]);

        $faq = FAQ::create($validated);

        return response()->json([
            'message' => 'FAQ created successfully',
            'data' => new FAQResource($faq)
        ], 201);
    }

    // تحديث سؤال (Update)
    public function update(Request $request, FAQ $faq)
    {
        $validated = $request->validate([
            'question_en' => 'sometimes|required|string|max:255',
            'answer_en'   => 'sometimes|required|string',
            'sort_order'  => 'nullable|integer',
            'question_ar' => 'sometimes|required|string|max:255',
            'answer_ar'   => 'sometimes|required|string',
            'is_active'   => 'nullable|boolean',
        ]);

        $faq->update($validated);

        return response()->json([
            'message' => 'FAQ updated successfully',
            'data' => new FAQResource($faq)
        ]);
    }

    // حذف سؤال (Destroy)
    public function destroy(FAQ $faq)
    {
        $faq->delete();
        return response()->json([
            'message' => 'FAQ deleted successfully'
        ]);
    }
}
