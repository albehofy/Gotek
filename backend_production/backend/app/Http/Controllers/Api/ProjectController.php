<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    // 1. عرض كل المشاريع
    public function index() {
        $projects = Project::with('images', 'category')->latest()->get();
        
        $projects->map(function($p) {
            // Map main image URL
            $p->main_image_url = $p->image;
            // Expose properties for editing convenience
            $p->title_en = is_array($p->title) ? ($p->title['en'] ?? '') : '';
            $p->title_ar = is_array($p->title) ? ($p->title['ar'] ?? '') : '';
            $p->description_en = is_array($p->description) ? ($p->description['en'] ?? '') : '';
            $p->description_ar = is_array($p->description) ? ($p->description['ar'] ?? '') : '';
            $p->challenge_en = is_array($p->challenge) ? ($p->challenge['en'] ?? '') : '';
            $p->challenge_ar = is_array($p->challenge) ? ($p->challenge['ar'] ?? '') : '';
            $p->solution_en = is_array($p->solution) ? ($p->solution['en'] ?? '') : '';
            $p->solution_ar = is_array($p->solution) ? ($p->solution['ar'] ?? '') : '';
            
            if (is_array($p->testimonial)) {
                $p->testimonial_text = $p->testimonial['text'] ?? '';
                $p->testimonial_name = $p->testimonial['name'] ?? '';
                $p->testimonial_role = $p->testimonial['role'] ?? '';
                $p->testimonial_avatar = $p->testimonial['avatar'] ?? '';
            }
            return $p;
        });

        return response()->json($projects);
    }

    // 2. إضافة مشروع جديد (Store)
    public function store(Request $request) {
        $validatedData = $request->validate([
            'title_en' => 'required|string|max:255',
            'title_ar' => 'required|string|max:255',
            'description_en' => 'required|string',
            'description_ar' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'main_image' => 'required|image|mimes:jpg,png,jpeg|max:5120',
            'gallery.*' => 'image|mimes:jpg,png,jpeg|max:5120',
            'img_alt' => 'nullable|string',
            'ViewInHome' => 'nullable',
            'color' => 'nullable|string|max:7',
            'emoji' => 'nullable|string|max:255',
            'tags' => 'nullable',
            'client' => 'nullable|string',
            'timeline' => 'nullable|string',
            'challenge_en' => 'nullable|string',
            'challenge_ar' => 'nullable|string',
            'solution_en' => 'nullable|string',
            'solution_ar' => 'nullable|string',
            'results' => 'nullable',
            'testimonial_text' => 'nullable|string',
            'testimonial_name' => 'nullable|string',
            'testimonial_role' => 'nullable|string',
            'testimonial_avatar' => 'nullable|string',
            'deliverables' => 'nullable',
        ]);

        if (!$request->hasFile('main_image')) {
            return response()->json(['message' => 'ملف الصورة الأساسية غير موجود في الطلب'], 422);
        }
        
        $mainPath = $request->file('main_image')->store('projects', 'public');

        $project = Project::create([
            'title' => [
                'en' => $request->title_en,
                'ar' => $request->title_ar,
            ],
            'description' => [
                'en' => $request->description_en,
                'ar' => $request->description_ar,
            ],
            'main_image' => $mainPath,
            'category_id' => $request->category_id,
            'img_alt' => $request->img_alt ?? $request->title_en,
            'ViewInHome' => filter_var($request->ViewInHome ?? false, FILTER_VALIDATE_BOOLEAN),
            'color' => $request->color ?? '#000000',
            'emoji' => $request->emoji ?? '🏗️',
            'tags' => is_string($request->tags) ? json_decode($request->tags, true) : $request->tags,
            'client' => $request->client ?? '',
            'timeline' => $request->timeline ?? '',
            'challenge' => [
                'en' => $request->challenge_en ?? '',
                'ar' => $request->challenge_ar ?? '',
            ],
            'solution' => [
                'en' => $request->solution_en ?? '',
                'ar' => $request->solution_ar ?? '',
            ],
            'results' => is_string($request->results) ? json_decode($request->results, true) : $request->results,
            'testimonial' => [
                'text' => $request->testimonial_text ?? '',
                'name' => $request->testimonial_name ?? '',
                'role' => $request->testimonial_role ?? '',
                'avatar' => $request->testimonial_avatar ?? '',
            ],
            'deliverables' => is_string($request->deliverables) ? json_decode($request->deliverables, true) : $request->deliverables,
        ]);

        // رفع صور المعرض (Gallery)
        if ($request->hasFile('gallery')) {
            foreach ($request->file('gallery') as $file) {
                if ($file->isValid()) {
                    $path = $file->store('projects/gallery', 'public');
                    $project->images()->create(['image_path' => $path]);
                }
            }
        }

        return response()->json([
            'message' => 'تم إضافة المشروع بنجاح', 
            'data' => $project->load('images')
        ], 201);
    }

    // 3. عرض مشروع واحد
    public function show(Project $project) {
        $p = $project->load('images', 'category');
        $p->main_image_url = $p->image;
        $p->title_en = is_array($p->title) ? ($p->title['en'] ?? '') : '';
        $p->title_ar = is_array($p->title) ? ($p->title['ar'] ?? '') : '';
        $p->description_en = is_array($p->description) ? ($p->description['en'] ?? '') : '';
        $p->description_ar = is_array($p->description) ? ($p->description['ar'] ?? '') : '';
        $p->challenge_en = is_array($p->challenge) ? ($p->challenge['en'] ?? '') : '';
        $p->challenge_ar = is_array($p->challenge) ? ($p->challenge['ar'] ?? '') : '';
        $p->solution_en = is_array($p->solution) ? ($p->solution['en'] ?? '') : '';
        $p->solution_ar = is_array($p->solution) ? ($p->solution['ar'] ?? '') : '';
        
        if (is_array($p->testimonial)) {
            $p->testimonial_text = $p->testimonial['text'] ?? '';
            $p->testimonial_name = $p->testimonial['name'] ?? '';
            $p->testimonial_role = $p->testimonial['role'] ?? '';
            $p->testimonial_avatar = $p->testimonial['avatar'] ?? '';
        }
        return response()->json($p);
    }

    // 4. تحديث مشروع (Update)
    public function update(Request $request, Project $project) {
        $validatedData = $request->validate([
            'title_en' => 'sometimes|required|string|max:255',
            'title_ar' => 'sometimes|required|string|max:255',
            'description_en' => 'sometimes|required|string',
            'description_ar' => 'sometimes|required|string',
            'category_id' => 'sometimes|required|exists:categories,id',
            'main_image' => 'sometimes|image|mimes:jpg,png,jpeg|max:5120',
            'gallery.*' => 'image|mimes:jpg,png,jpeg|max:5120',
            'img_alt' => 'nullable|string',
            'ViewInHome' => 'nullable',
            'color' => 'nullable|string|max:7',
            'emoji' => 'nullable|string|max:255',
            'tags' => 'nullable',
            'client' => 'nullable|string',
            'timeline' => 'nullable|string',
            'challenge_en' => 'nullable|string',
            'challenge_ar' => 'nullable|string',
            'solution_en' => 'nullable|string',
            'solution_ar' => 'nullable|string',
            'results' => 'nullable',
            'testimonial_text' => 'nullable|string',
            'testimonial_name' => 'nullable|string',
            'testimonial_role' => 'nullable|string',
            'testimonial_avatar' => 'nullable|string',
            'deliverables' => 'nullable',
        ]);

        $data = [];
        
        // Handle translations
        if ($request->has('title_en') || $request->has('title_ar')) {
            $data['title'] = [
                'en' => $request->title_en ?? (is_array($project->title) ? ($project->title['en'] ?? '') : ''),
                'ar' => $request->title_ar ?? (is_array($project->title) ? ($project->title['ar'] ?? '') : ''),
            ];
        }

        if ($request->has('description_en') || $request->has('description_ar')) {
            $data['description'] = [
                'en' => $request->description_en ?? (is_array($project->description) ? ($project->description['en'] ?? '') : ''),
                'ar' => $request->description_ar ?? (is_array($project->description) ? ($project->description['ar'] ?? '') : ''),
            ];
        }

        if ($request->has('challenge_en') || $request->has('challenge_ar')) {
            $data['challenge'] = [
                'en' => $request->challenge_en ?? (is_array($project->challenge) ? ($project->challenge['en'] ?? '') : ''),
                'ar' => $request->challenge_ar ?? (is_array($project->challenge) ? ($project->challenge['ar'] ?? '') : ''),
            ];
        }

        if ($request->has('solution_en') || $request->has('solution_ar')) {
            $data['solution'] = [
                'en' => $request->solution_en ?? (is_array($project->solution) ? ($project->solution['en'] ?? '') : ''),
                'ar' => $request->solution_ar ?? (is_array($project->solution) ? ($project->solution['ar'] ?? '') : ''),
            ];
        }

        if ($request->has('testimonial_text') || $request->has('testimonial_name') || $request->has('testimonial_role') || $request->has('testimonial_avatar')) {
            $data['testimonial'] = [
                'text' => $request->testimonial_text ?? (is_array($project->testimonial) ? ($project->testimonial['text'] ?? '') : ''),
                'name' => $request->testimonial_name ?? (is_array($project->testimonial) ? ($project->testimonial['name'] ?? '') : ''),
                'role' => $request->testimonial_role ?? (is_array($project->testimonial) ? ($project->testimonial['role'] ?? '') : ''),
                'avatar' => $request->testimonial_avatar ?? (is_array($project->testimonial) ? ($project->testimonial['avatar'] ?? '') : ''),
            ];
        }

        // Direct fields
        foreach (['category_id', 'img_alt', 'color', 'emoji', 'client', 'timeline'] as $field) {
            if ($request->has($field)) {
                $data[$field] = $request->$field;
            }
        }

        if ($request->has('ViewInHome')) {
            $data['ViewInHome'] = filter_var($request->ViewInHome, FILTER_VALIDATE_BOOLEAN);
        }

        // Parse list fields
        foreach (['tags', 'results', 'deliverables'] as $listField) {
            if ($request->has($listField)) {
                $val = $request->$listField;
                $data[$listField] = is_string($val) ? json_decode($val, true) : $val;
            }
        }

        // Main Image Update
        if ($request->hasFile('main_image')) {
            if ($project->main_image && !filter_var($project->main_image, FILTER_VALIDATE_URL)) {
                Storage::disk('public')->delete($project->main_image);
            }
            $data['main_image'] = $request->file('main_image')->store('projects', 'public');
        }

        $project->update($data);

        // Upload new gallery images if provided
        if ($request->hasFile('gallery')) {
            foreach ($request->file('gallery') as $file) {
                if ($file->isValid()) {
                    $path = $file->store('projects/gallery', 'public');
                    $project->images()->create(['image_path' => $path]);
                }
            }
        }

        return response()->json([
            'message' => 'تم التحديث بنجاح', 
            'data' => $project->load('images')
        ]);
    }

    // 5. حذف مشروع وصوره نهائياً
    public function destroy(Project $project) {
        if ($project->main_image && !filter_var($project->main_image, FILTER_VALIDATE_URL)) {
            Storage::disk('public')->delete($project->main_image);
        }

        foreach ($project->images as $img) {
            if (!filter_var($img->image_path, FILTER_VALIDATE_URL)) {
                Storage::disk('public')->delete($img->image_path);
            }
            $img->delete();
        }
        
        $project->delete();
        
        return response()->json(['message' => 'تم حذف المشروع وجميع صوره بنجاح']);
    }
}