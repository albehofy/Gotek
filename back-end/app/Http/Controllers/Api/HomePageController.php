<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Testimonial;
use App\Models\Service;
use App\Models\Extra;
use App\Http\Resources\ExtraResource;
class HomePageController extends Controller
{
    public function index()
    {
        // جلب البيانات بطلب واحد
        $projects = Project::with('category')
            ->latest()
            ->take(5)
            ->get();
$extras = Extra::all();
        $testimonials = Testimonial::latest()
            ->take(3)
            ->get();
$featuredProjects = Project::where('ViewInHome', true)->latest()->take(6)->get();
        return response()->json([
            'status' => 'success',
            'data' => [
                'projects' => $projects,
                'testimonials' => $testimonials,
                'featuredProjects' => $featuredProjects, 
                'extras' => ExtraResource::collection($extras) // تم الربط بنجاح
            ]
        ]);
    }

    public function stats()
    {
        return response()->json([
            'projects' => '150+',
            'clients' => '2k+',
            'countries' => '12+',
            'awards' => '24+'
        ]);
    }
}