<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\BlogResource;
class BlogController extends Controller
{
    public function index()
    {
        return BlogResource::collection(Blog::latest()->get());
    }

public function store(StoreBlogRequest $request)
{
    // 1. Initialize variables as null so they exist if no file is uploaded
    $path = null;
    $type = null;

    // 2. Only process media if the file is present in the request
    if ($request->hasFile('media')) {
        $file = $request->file('media');
        
        // Get extension and determine if it's a video or image
        $extension = $file->getClientOriginalExtension();
        $type = in_array(strtolower($extension), ['mp4', 'mov', 'avi']) ? 'video' : 'image';

        // Store the file and save the path
        $path = $file->store('blogs', 'public');
    }

    // 3. Create the record
    $blog = Blog::create([
        'title'       => $request->title,
        'description' => $request->description,
        'media_path'  => $path, // Will be null if no file
        'media_type'  => $type, // Will be null if no file
    ]);

    return new BlogResource($blog);
}

    public function show(Blog $blog)
    {
        return new BlogResource($blog);
    }

public function update(StoreBlogRequest $request, Blog $blog)
    {
        // Update basic info
        $blog->title = $request->title;
        $blog->description = $request->description;

        // Handle Media Update
        if ($request->hasFile('media')) {
            // Delete old file if exists
            if ($blog->media_path) {
                Storage::disk('public')->delete($blog->media_path);
            }

            $file = $request->file('media');
            $extension = strtolower($file->getClientOriginalExtension());
            $blog->media_type = in_array($extension, ['mp4', 'mov', 'avi']) ? 'video' : 'image';
            $blog->media_path = $file->store('blogs', 'public');
        }

        $blog->save();

        return new BlogResource($blog);
    }
    public function destroy(Blog $blog)
    {
        Storage::disk('public')->delete($blog->media_path);
        $blog->delete();
        return response()->json(['message' => 'Blog deleted']);
    }

    // --- Custom Love API ---

    public function love(Blog $blog)
    {
        $blog->increment('loves_count');
        return response()->json([
            'message' => 'Loved!',
            'loves_count' => $blog->loves_count
        ]);
    }

    public function unlove(Blog $blog)
    {
        if ($blog->loves_count > 0) {
            $blog->decrement('loves_count');
        }
        return response()->json([
            'message' => 'Unloved!',
            'loves_count' => $blog->loves_count
        ]);
    }
}