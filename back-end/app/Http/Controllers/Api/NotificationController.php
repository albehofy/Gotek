<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * 1. عرض كل التنبيهات (المقروءة وغير المقروءة)
     */
    public function index()
    {
        $notifications = auth()->user()->notifications;
        
        return response()->json([
            'success' => true,
            'data' => $notifications
        ]);
    }

    /**
     * 2. عرض التنبيهات غير المقروءة فقط (مهمة للـ Counter في الـ Navbar)
     */
    public function unread()
    {
        $unread = auth()->user()->unreadNotifications;

        return response()->json([
            'success' => true,
            'count' => $unread->count(),
            'data' => $unread
        ]);
    }

    /**
     * 3. تحديد تنبيه معين كمقروء
     */
    public function markAsRead($id)
    {
        $notification = auth()->user()->notifications()->findOrFail($id);
        $notification->markAsRead();

        return response()->json([
            'success' => true,
            'message' => 'تم تحديد التنبيه كمقروء'
        ]);
    }

    /**
     * 4. تحديد كل التنبيهات كمقروءة (زرار Mark all as read)
     */
    public function markAllAsRead()
    {
        auth()->user()->unreadNotifications->markAsRead();

        return response()->json([
            'success' => true,
            'message' => 'تم تحديد جميع التنبيهات كمقروءة'
        ]);
    }

    /**
     * 5. حذف تنبيه معين
     */
    public function destroy($id)
    {
        $notification = auth()->user()->notifications()->findOrFail($id);
        $notification->delete();

        return response()->json([
            'success' => true,
            'message' => 'تم حذف التنبيه بنجاح'
        ]);
    }
}