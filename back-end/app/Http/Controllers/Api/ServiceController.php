<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Requests\Service\StoreServiceRequest;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    // عرض الكل
    public function index() {
        $services = Service::orderBy('order')->get();
        return ServiceResource::collection($services);
    }

    // عرض خدمة واحدة
    public function show(Service $service) {
        return new ServiceResource($service);
    }

    // إضافة خدمة جديدة
    public function store(StoreServiceRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('icon')) {
            $path = $request->file('icon')->store('services/icons', 'public');
            $data['icon'] = $path;
        }

        // Serialize features
        if (isset($data['features']) && is_array($data['features'])) {
            $features = [];
            if (isset($data['features']['en'])) {
                $features['en'] = is_array($data['features']['en']) ? json_encode($data['features']['en']) : $data['features']['en'];
            }
            if (isset($data['features']['ar'])) {
                $features['ar'] = is_array($data['features']['ar']) ? json_encode($data['features']['ar']) : $data['features']['ar'];
            }
            $data['features'] = $features;
        }

        // Serialize stats
        if (isset($data['stats']) && is_array($data['stats'])) {
            $stats = [];
            if (isset($data['stats']['en'])) {
                $stats['en'] = is_array($data['stats']['en']) ? json_encode($data['stats']['en']) : $data['stats']['en'];
            }
            if (isset($data['stats']['ar'])) {
                $stats['ar'] = is_array($data['stats']['ar']) ? json_encode($data['stats']['ar']) : $data['stats']['ar'];
            }
            $data['stats'] = $stats;
        }

        $service = Service::create($data);

        return response()->json([
            'message' => 'Created successfully!',
            'data'    => new ServiceResource($service)
        ], 201);
    }

    // تحديث خدمة
    public function update(Request $request, Service $service) {
        $data = $request->all();

        if ($request->hasFile('icon')) {
            if ($service->icon && !filter_var($service->icon, FILTER_VALIDATE_URL)) {
                Storage::disk('public')->delete($service->icon);
            }
            $data['icon'] = $request->file('icon')->store('services/icons', 'public');
        }

        // Serialize features
        if (isset($data['features']) && is_array($data['features'])) {
            $features = [];
            if (isset($data['features']['en'])) {
                $features['en'] = is_array($data['features']['en']) ? json_encode($data['features']['en']) : $data['features']['en'];
            }
            if (isset($data['features']['ar'])) {
                $features['ar'] = is_array($data['features']['ar']) ? json_encode($data['features']['ar']) : $data['features']['ar'];
            }
            $data['features'] = $features;
        }

        // Serialize stats
        if (isset($data['stats']) && is_array($data['stats'])) {
            $stats = [];
            if (isset($data['stats']['en'])) {
                $stats['en'] = is_array($data['stats']['en']) ? json_encode($data['stats']['en']) : $data['stats']['en'];
            }
            if (isset($data['stats']['ar'])) {
                $stats['ar'] = is_array($data['stats']['ar']) ? json_encode($data['stats']['ar']) : $data['stats']['ar'];
            }
            $data['stats'] = $stats;
        }

        $service->update($data);
        return response()->json(['message' => 'Updated!', 'data' => new ServiceResource($service)]);
    }

    // حذف خدمة
    public function destroy(Service $service) {
        if ($service->icon && !filter_var($service->icon, FILTER_VALIDATE_URL)) {
            Storage::disk('public')->delete($service->icon);
        }
        $service->delete();
        return response()->json(['message' => 'Deleted!']);
    }
}
