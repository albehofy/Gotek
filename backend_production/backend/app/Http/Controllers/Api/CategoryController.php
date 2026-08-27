<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    // عرض كل الفئات
    public function index() {
        $categories = Category::all();
        // Map images to absolute url if not starting with http
        $categories->map(function($category) {
            if ($category->image && !filter_var($category->image, FILTER_VALIDATE_URL)) {
                $category->image_url = asset('storage/' . $category->image);
            } else {
                $category->image_url = $category->image;
            }
            // For dashboard editing convenience, expose name_en, name_ar, description_en, description_ar
            $category->name_en = $category->getTranslation('name', 'en');
            $category->name_ar = $category->getTranslation('name', 'ar');
            $category->description_en = $category->getTranslation('description', 'en');
            $category->description_ar = $category->getTranslation('description', 'ar');
            return $category;
        });
        return response()->json($categories);
    }

    // إضافة فئة جديدة (Store)
    public function store(Request $request) {
        $request->validate([
            'name_ar' => 'required|string|max:255',
            'name_en' => 'required|string|max:255',
            'description_ar' => 'nullable|string',
            'description_en' => 'nullable|string',
            'image'   => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('categories', 'public');
        }

        $category = Category::create([
            'name' => [
                'ar' => $request->name_ar,
                'en' => $request->name_en,
            ],
            'description' => [
                'ar' => $request->description_ar ?? '',
                'en' => $request->description_en ?? '',
            ],
            'slug'  => str()->slug($request->name_en),
            'image' => $imagePath,
        ]);

        return response()->json(['message' => 'Created successfully', 'data' => $category], 201);
    }

    // تحديث فئة (Update)
    public function update(Request $request, Category $category) {
        $request->validate([
            'name_ar' => 'sometimes|string|max:255',
            'name_en' => 'sometimes|string|max:255',
            'description_ar' => 'nullable|string',
            'description_en' => 'nullable|string',
            'image'   => 'sometimes|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($category->image && !filter_var($category->image, FILTER_VALIDATE_URL)) {
                Storage::disk('public')->delete($category->image);
            }
            $category->image = $request->file('image')->store('categories', 'public');
        }

        $category->update([
            'name' => [
                'ar' => $request->name_ar ?? $category->getTranslation('name', 'ar'),
                'en' => $request->name_en ?? $category->getTranslation('name', 'en'),
            ],
            'description' => [
                'ar' => $request->description_ar ?? $category->getTranslation('description', 'ar'),
                'en' => $request->description_en ?? $category->getTranslation('description', 'en'),
            ],
            'slug' => $request->name_en ? str()->slug($request->name_en) : $category->slug,
        ]);

        return response()->json(['message' => 'Updated successfully', 'data' => $category]);
    }

    // حذف فئة
    public function destroy(Category $category) {
        if ($category->image && !filter_var($category->image, FILTER_VALIDATE_URL)) {
            Storage::disk('public')->delete($category->image);
        }
        $category->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}