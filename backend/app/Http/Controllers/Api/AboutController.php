<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AboutPage;
use App\Models\AboutTimeline;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $about = AboutPage::first();
        if (!$about) {
            $about = AboutPage::create([]);
        }
        $timeline = AboutTimeline::orderBy('order_index')->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'content' => $about,
                'timeline' => $timeline
            ]
        ]);
    }

    public function store(Request $request)
    {
        $about = AboutPage::first();
        if (!$about) {
            $about = AboutPage::create([]);
        }

        // Update about content
        $about->update([
            'hero' => $request->input('hero', $about->hero),
            'story' => $request->input('story', $about->story),
            'vision' => $request->input('vision', $about->vision),
            'mission' => $request->input('mission', $about->mission),
            'values' => $request->input('values', $about->values),
            'team_text' => $request->input('team_text', $about->team_text),
        ]);

        // Sync timeline (simple replace for now)
        if ($request->has('timeline')) {
            AboutTimeline::truncate();
            foreach ($request->input('timeline') as $index => $item) {
                AboutTimeline::create([
                    'year' => $item['year'] ?? null,
                    'title' => $item['title'] ?? null,
                    'description' => $item['description'] ?? null,
                    'order_index' => $index,
                ]);
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'About page updated successfully'
        ]);
    }
}
