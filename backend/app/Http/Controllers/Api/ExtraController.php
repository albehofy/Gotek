<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Extra;
use App\Http\Resources\ExtraResource;
use Illuminate\Http\Request;

class ExtraController extends Controller
{
    public function index()
    {
        return ExtraResource::collection(Extra::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:191',
            'description' => 'nullable|string',
            'value' => 'required|string|max:50',
        ]);

        $extra = Extra::create($request->all());

        return response()->json([
            'status' => 'Success',
            'message' => 'Stat created successfully',
            'data' => new ExtraResource($extra)
        ], 201);
    }

    public function show(Extra $extra)
    {
        return new ExtraResource($extra);
    }

    public function update(Request $request, Extra $extra)
    {
        $request->validate([
            'title' => 'sometimes|required|string|max:191',
            'description' => 'nullable|string',
            'value' => 'sometimes|required|string|max:50',
        ]);

        $extra->update($request->all());

        return response()->json([
            'status' => 'Success',
            'message' => 'Stat updated successfully',
            'data' => new ExtraResource($extra)
        ]);
    }

    public function destroy(Extra $extra)
    {
        $extra->delete();
        return response()->json(['message' => 'Stat deleted successfully']);
    }
}