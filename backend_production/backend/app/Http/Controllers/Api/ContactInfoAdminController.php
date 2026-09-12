<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactInfoRequest;
use App\Models\ContactInfo;
use Illuminate\Http\JsonResponse;

class ContactInfoAdminController extends Controller
{
    // POST /api/contact-info  (only if no row exists)
    public function store(StoreContactInfoRequest $request): JsonResponse
    {
        if (ContactInfo::query()->exists()) {
            return response()->json([
                'message' => 'Contact info already exists. Delete it before creating a new one.',
            ], 422);
        }

        $info = ContactInfo::create($request->validated());

        return response()->json([
            'message' => 'Contact info created successfully.',
            'data' => $info,
        ], 201);
    }

    // PUT /api/contact-info  (updates the single row)
    public function update(StoreContactInfoRequest $request): JsonResponse
    {
        $info = ContactInfo::query()->first();
        if (!$info) {
            $info = ContactInfo::create($request->validated());
        } else {
            $info->update($request->validated());
        }

        return response()->json([
            'message' => 'Contact info updated successfully.',
            'data' => $info,
        ]);
    }

    // DELETE /api/contact-info  (removes the single row)
    public function destroy(): JsonResponse
    {
        $info = ContactInfo::query()->first();

        if (! $info) {
            return response()->json([
                'message' => 'No contact info to delete.',
            ], 404);
        }

        $info->delete();

        return response()->json([
            'message' => 'Contact info deleted successfully.',
        ]);
    }
}

