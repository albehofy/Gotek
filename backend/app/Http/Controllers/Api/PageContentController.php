<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PageContent;
use Illuminate\Http\Request;

class PageContentController extends Controller
{
    public function show($pageName)
    {
        $pageContent = PageContent::where('page_name', $pageName)->first();
        
        return response()->json([
            'status' => 'success',
            'data' => $pageContent ? $pageContent->content : []
        ]);
    }

    public function store(Request $request, $pageName)
    {
        $pageContent = PageContent::firstOrCreate(['page_name' => $pageName]);
        
        $pageContent->update([
            'content' => $request->input('content', [])
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Page content updated successfully',
            'data' => $pageContent->content
        ]);
    }
}
