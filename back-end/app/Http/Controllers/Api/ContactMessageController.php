<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactMessageController extends Controller
{
    /**
     * عرض الرسائل بنظام الصفحات (للمديرين)
     */
    public function index()
    {
        // تم استبدال get بـ paginate لضمان الأداء وسهولة العرض في الفرونت إند
        $messages = ContactMessage::latest()->paginate(10);

        return response()->json($messages);
    }

    /**
     * حفظ رسالة تواصل جديدة من العملاء
     */
    public function store(StoreContactMessageRequest $request)
    {
        $message = ContactMessage::create($request->validated());

        return response()->json([
            'message' => 'تم استلام رسالتك بنجاح.',
            'data' => $message,
        ], 201);
    }

    /**
     * حذف رسالة معينة
     */
    public function destroy($id)
    {
        $message = ContactMessage::find($id);

        if (!$message) {
            return response()->json([
                'message' => 'الرسالة غير موجودة.'
            ], 404);
        }

        $message->delete();

        return response()->json([
            'message' => 'تم حذف الرسالة بنجاح.'
        ], 200);
    }
}