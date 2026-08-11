<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Deal;
use App\Models\User;
use App\Models\NotificationModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DealController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user->role === 'client') {
            $deals = Deal::with(['client', 'creator', 'department', 'salesPerson', 'tasks.users', 'payments'])
                ->where('client_id', $user->id)
                ->latest()
                ->get();
        } elseif (in_array($user->role, ['department_manager', 'Department Manager']) && $user->department_id) {
            $deals = Deal::with(['client', 'creator', 'department', 'salesPerson', 'tasks.users', 'payments'])
                ->where('department_id', $user->department_id)
                ->orWhereHas('tasks', function($q) use ($user) {
                    $q->where('department_id', $user->department_id);
                })
                ->latest()
                ->get();
        } else {
            $deals = Deal::with(['client', 'creator', 'department', 'salesPerson', 'tasks.users', 'payments'])
                ->latest()
                ->get();
        }

        return response()->json($deals);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'agreed_scope' => 'nullable|string',
            'client_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'sales_person_id' => 'nullable|exists:users,id',
            'sales_commission_type' => 'nullable|in:fixed,percentage',
            'sales_commission_value' => 'nullable|numeric|min:0',
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
        ]);

        $validated['created_by'] = Auth::id();
        $validated['paid_amount'] = $validated['paid_amount'] ?? 0;
        $validated['status'] = 'pending';

        $deal = Deal::create($validated);

        // Send notification to department manager if deal assigned to department
        if ($deal->department_id && $deal->department?->manager_id) {
            NotificationModel::create([
                'user_id' => $deal->department->manager_id,
                'type' => 'assignment',
                'title' => 'صفقة جديدة بقسمك',
                'message' => 'تم إسناد الصفقة الجديد ' . $deal->title . ' لقسمك لتقسيمها إلى مهام.',
                'notifiable_type' => Deal::class,
                'notifiable_id' => $deal->id
            ]);
        }

        return response()->json(['status' => 'success', 'data' => $deal->load(['client', 'department', 'salesPerson'])], 201);
    }

    public function show($id)
    {
        $user = Auth::user();
        $deal = Deal::with([
            'client',
            'creator',
            'department',
            'salesPerson',
            'tasks.users',
            'tasks.subtasks',
            'tasks.attachments',
            'tasks.notes.user',
            'payments'
        ])->findOrFail($id);

        if ($user->role === 'client' && $deal->client_id !== $user->id) {
            return response()->json(['message' => 'غير مسموح لك بعرض هذه الصفقة'], 403);
        }

        return response()->json($deal);
    }

    public function update(Request $request, $id)
    {
        $deal = Deal::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'agreed_scope' => 'nullable|string',
            'client_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'sales_person_id' => 'nullable|exists:users,id',
            'sales_commission_type' => 'nullable|in:fixed,percentage',
            'sales_commission_value' => 'nullable|numeric|min:0',
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
            'status' => 'required|in:pending,active,completed,cancelled',
        ]);

        $deal->update($validated);

        return response()->json(['status' => 'success', 'data' => $deal->load(['client', 'department', 'salesPerson'])]);
    }

    public function destroy($id)
    {
        $deal = Deal::findOrFail($id);
        $deal->delete();

        return response()->json(['message' => 'تم حذف الصفقة بنجاح']);
    }
}
