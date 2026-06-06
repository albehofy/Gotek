<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Deal;
use App\Models\User;
use App\Events\DealCreated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * @group إدارة الصفقات
 */
class DealController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if ($user->role === 'client') {
            $deals = Deal::with(['client', 'creator', 'tasks.users'])
                ->where('client_id', $user->id)
                ->latest()
                ->get();
        } else {
            $deals = Deal::with(['client', 'creator', 'tasks.users'])
                ->latest()
                ->get();
        }

        // Add calculated attributes to array
        $deals->each(function($deal) {
            $deal->progress = $deal->progress;
            $deal->remaining_balance = $deal->remaining_balance;
        });

        return response()->json($deals);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'client_id' => 'nullable|exists:users,id',
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
        ]);

        $validated['created_by'] = Auth::id();
        $validated['paid_amount'] = $validated['paid_amount'] ?? 0;
        $validated['status'] = 'pending';

        $deal = Deal::create($validated);

        // Broadcast to task generators
        broadcast(new DealCreated($deal))->toOthers();

        // Send database notifications to Task Generators
        $generators = User::where('role', 'task_generator')->get();
        foreach ($generators as $gen) {
            $gen->notify(new \App\Notifications\TaskAssignedNotification(new \App\Models\Task([
                'title' => $deal->title,
                'description' => 'صفقة جديدة جاهزة للتقسيم إلى مهام: ' . $deal->title,
                'status' => 'todo',
                'department_id' => 1 // placeholder or defaults
            ])));
        }

        return response()->json(['status' => 'success', 'data' => $deal], 201);
    }

    public function show($id)
    {
        $user = Auth::user();
        $deal = Deal::with(['client', 'creator', 'tasks.users', 'tasks.checklists', 'tasks.notes.user', 'tasks.attachments'])->findOrFail($id);

        if ($user->role === 'client' && $deal->client_id !== $user->id) {
            return response()->json(['message' => 'غير مسموح لك بعرض هذا العقد'], 403);
        }

        $deal->progress = $deal->progress;
        $deal->remaining_balance = $deal->remaining_balance;

        return response()->json($deal);
    }

    public function update(Request $request, $id)
    {
        $deal = Deal::findOrFail($id);

        if (!in_array(Auth::user()->role, ['admin', 'manager'])) {
            return response()->json(['message' => 'ليس لديك صلاحية تعديل هذه الصفقة'], 403);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'client_id' => 'nullable|exists:users,id',
            'total_price' => 'required|numeric|min:0',
            'paid_amount' => 'nullable|numeric|min:0',
            'status' => 'required|in:pending,active,completed,cancelled',
        ]);

        $deal->update($validated);

        return response()->json(['status' => 'success', 'data' => $deal]);
    }

    public function pay(Request $request, $id)
    {
        $deal = Deal::findOrFail($id);

        if (!in_array(Auth::user()->role, ['admin', 'manager'])) {
            return response()->json(['message' => 'ليس لديك صلاحية إضافة دفعات'], 403);
        }

        $request->validate([
            'amount' => 'required|numeric|min:0.01'
        ]);

        $deal->increment('paid_amount', $request->amount);

        // Update status to active if pending
        if ($deal->status === 'pending') {
            $deal->update(['status' => 'active']);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'تم تسجيل الدفعة بنجاح',
            'data' => [
                'paid_amount' => $deal->paid_amount,
                'remaining_balance' => $deal->remaining_balance
            ]
        ]);
    }

    public function destroy($id)
    {
        $deal = Deal::findOrFail($id);

        if (!in_array(Auth::user()->role, ['admin', 'manager'])) {
            return response()->json(['message' => 'ليس لديك صلاحية الحذف'], 403);
        }

        $deal->delete();
        return response()->json(['message' => 'تم حذف الصفقة بنجاح']);
    }
}
