<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ClientPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ClientPlanController extends Controller
{
    /**
     * GET /api/clients/{clientId}/plans
     * Returns all plans for a given client.
     * Accessible by: super_admin, admin, and the client themselves.
     */
    public function index(Request $request, $clientId)
    {
        $user = Auth::user();

        if ($user->role === 'client' && $user->id != $clientId) {
            return response()->json(['message' => 'غير مسموح'], 403);
        }

        if (in_array($user->role, ['department_manager', 'employee'])) {
            return response()->json(['message' => 'غير مسموح'], 403);
        }

        $plans = ClientPlan::with('deal')
            ->where('client_id', $clientId)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($plans);
    }

    /**
     * POST /api/clients/{clientId}/plans
     * Upload one or more PDF/Word/Excel files for a client (optionally linked to a deal).
     * Only super_admin / admin allowed.
     */
    public function store(Request $request, $clientId)
    {
        $user = Auth::user();

        if (!in_array($user->role, ['super_admin', 'admin', 'manager'])) {
            return response()->json(['message' => 'غير مسموح — الإدارة فقط'], 403);
        }

        $request->validate([
            'files'      => 'required|array|min:1',
            'files.*'    => 'file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,zip|max:30720',
            'plan_type'  => 'nullable|string|in:monthly_brief,approved_plan,contract,other',
            'title'      => 'nullable|string|max:255',
            'deal_id'    => 'nullable|exists:deals,id',
        ]);

        $dealId = $request->input('deal_id') ? (int) $request->input('deal_id') : null;
        $created = [];

        foreach ($request->file('files', []) as $file) {
            $originalName = $file->getClientOriginalName();
            $fileName = Str::uuid() . '_' . $originalName;
            $path = $file->storeAs("client_plans/{$clientId}", $fileName, 'public');

            $plan = ClientPlan::create([
                'client_id' => $clientId,
                'deal_id'   => $dealId,
                'plan_type' => $request->input('plan_type', 'monthly_brief'),
                'title'     => $request->input('title') ?: $originalName,
                'file_name' => $originalName,
                'file_path' => $path,
                'file_url'  => 'uploads/' . $path,
                'uploaded_by' => $user->id,
            ]);

            // Also attach file directly to the deal if deal_id was provided
            if ($dealId) {
                try {
                    $ext = strtolower($file->getClientOriginalExtension());
                    $fileType = match(true) {
                        $ext === 'pdf' => 'pdf',
                        in_array($ext, ['doc', 'docx']) => 'word',
                        in_array($ext, ['xls', 'xlsx']) => 'excel',
                        default => 'document'
                    };
                    $category = match($request->input('plan_type')) {
                        'monthly_brief' => 'brief',
                        'approved_plan' => 'plan',
                        'contract' => 'contract',
                        default => 'document'
                    };

                    \App\Models\Attachment::create([
                        'attachable_type' => \App\Models\Deal::class,
                        'attachable_id'   => $dealId,
                        'file_path'       => $path,
                        'file_name'       => $originalName,
                        'file_type'       => $fileType,
                        'category'        => $category,
                        'description'     => $request->input('title') ?: $originalName,
                        'file_size'       => $file->getSize(),
                        'uploaded_by'     => $user->id,
                    ]);
                } catch (\Throwable $e) {}
            }

            $created[] = $plan->load('deal');
        }

        return response()->json(['message' => 'تم رفع الملفات بنجاح', 'data' => $created], 201);
    }

    /**
     * DELETE /api/client-plans/{planId}
     * Only super_admin allowed.
     */
    public function destroy($planId)
    {
        $user = Auth::user();

        if (!$user || !$user->isSuperAdmin()) {
            return response()->json(['message' => 'غير مصرح لك بحذف ملفات وخطط العملاء. عمليات الحذف في النظام مقتصرة حصرياً على السوبر أدمن (Super Admin)'], 403);
        }

        $plan = ClientPlan::findOrFail($planId);

        // Delete physical file
        if ($plan->file_path) {
            Storage::disk('public')->delete($plan->file_path);
        }

        $plan->delete();

        return response()->json(['message' => 'تم حذف الملف']);
    }
}
