<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NotificationModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $query = NotificationModel::where('user_id', $user->id);

        if ($user && in_array(strtolower($user->role), ['client'])) {
            $query->whereNotIn('type', ['assignment', 'internal_assignment', 'status_change']);
        }

        $notifications = $query->orderBy('created_at', 'desc')
            ->paginate($request->get('per_page', 20));

        $unreadCount = (clone $query)->where('is_read', false)->count();

        return response()->json([
            'status' => 'success',
            'unread_count' => $unreadCount,
            'data' => $notifications
        ]);
    }

    public function unread()
    {
        $user = Auth::user();
        $query = NotificationModel::where('user_id', $user->id)->where('is_read', false);

        if ($user && in_array(strtolower($user->role), ['client'])) {
            $query->whereNotIn('type', ['assignment', 'internal_assignment', 'status_change']);
        }

        $notifications = $query->orderBy('created_at', 'desc')->get();

        return response()->json([
            'status' => 'success',
            'unread_count' => $notifications->count(),
            'data' => $notifications
        ]);
    }

    public function markAsRead($id)
    {
        $user = Auth::user();
        $notification = NotificationModel::where('user_id', $user->id)->findOrFail($id);

        $notification->update([
            'is_read' => true,
            'read_at' => now(),
        ]);

        return response()->json(['status' => 'success', 'message' => 'تم تمييز التنبيه كـ مقروء']);
    }

    public function markAllAsRead()
    {
        $user = Auth::user();
        NotificationModel::where('user_id', $user->id)
            ->where('is_read', false)
            ->update([
                'is_read' => true,
                'read_at' => now(),
            ]);

        return response()->json(['status' => 'success', 'message' => 'تم تمييز جميع التنبيهات كـ مقروءة']);
    }

    public function destroy($id)
    {
        $user = Auth::user();
        $notification = NotificationModel::where('user_id', $user->id)->findOrFail($id);
        $notification->delete();

        return response()->json(['status' => 'success', 'message' => 'تم حذف التنبيه بنجاح']);
    }
}