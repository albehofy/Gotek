<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\{
    ProjectController, CategoryController, AuthController,
    ContactMessageController, ContactInfoController, ContactInfoAdminController,
    FAQController, ServiceController, BlogController, TestimonialController,
    HomePageController, TaskController, EmployeeDashboardController,
    InternalProjectController, ChecklistController, DepartmentController, UserController,
    NotificationController, ActivityController, ExtraController, AboutController,
    PageContentController, DealController
};

/*
|--------------------------------------------------------------------------
| Public Routes (الموقع التعريفي - لا يحتاج تسجيل دخول)
|--------------------------------------------------------------------------
*/
Route::get('/home-data', [HomePageController::class, 'index']);
Route::get('/stats', [HomePageController::class, 'stats']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('projects', [ProjectController::class, 'index']);
Route::get('projects/{project}', [ProjectController::class, 'show']);
Route::get('categories', [CategoryController::class, 'index']);
Route::get('team', [UserController::class, 'team']);
Route::get('about', [AboutController::class, 'index']);
Route::get('page-content/{page}', [PageContentController::class, 'show']);
Route::get('testimonials', [TestimonialController::class, 'index']);
Route::get('blogs', [BlogController::class, 'index']);
Route::get('blogs/{blog}', [BlogController::class, 'show']);
Route::get('services', [ServiceController::class, 'index']);
Route::get('services/{service}', [ServiceController::class, 'show']);
Route::get('/faqs', [FAQController::class, 'index']);
Route::get('/contact-info', ContactInfoController::class);
Route::post('/contact', [ContactMessageController::class, 'store']);

/*
|--------------------------------------------------------------------------
| Protected Routes (لوحة التحكم - يحتاج توكن Sanctum)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {

    // مسارات التنبيهات (الكل)
    Route::prefix('notifications')->group(function () {
        Route::get('/', [NotificationController::class, 'index']); // عرض الكل
        Route::get('/unread', [NotificationController::class, 'unread']); // غير المقروء
        Route::post('/{id}/read', [NotificationController::class, 'markAsRead']); // قراءة واحد
        Route::post('/read-all', [NotificationController::class, 'markAllAsRead']); // قراءة الكل
        Route::delete('/{id}', [NotificationController::class, 'destroy']); // حذف
    });

    // مسارات الصفقات (Deals)
    Route::prefix('deals')->group(function () {
        Route::get('/', [DealController::class, 'index']);
        Route::get('/{id}', [DealController::class, 'show']);
        Route::post('/', [DealController::class, 'store'])->middleware('role:admin,manager');
        Route::put('/{id}', [DealController::class, 'update'])->middleware('role:admin,manager');
        Route::delete('/{id}', [DealController::class, 'destroy'])->middleware('role:admin,manager');
        Route::post('/{id}/pay', [DealController::class, 'pay'])->middleware('role:admin,manager');
    });

    // --- 1. صلاحيات الأدمن فقط (Super Admin) ---
    Route::middleware('role:admin')->group(function () {
        Route::get('/users', [UserController::class, 'index']);
        Route::patch('/users/{id}/assign-department', [UserController::class, 'updateDepartment']);
        Route::delete('/users/{id}', [UserController::class, 'destroy']);
        
        // إعدادات التواصل الأساسية
        Route::post('/contact-info', [ContactInfoAdminController::class, 'store']);
        Route::put('/contact-info', [ContactInfoAdminController::class, 'update']);
        Route::delete('/contact-info', [ContactInfoAdminController::class, 'destroy']);
        Route::get('/contact', [ContactMessageController::class, 'index']);
    });

    // --- 2. صلاحيات الإدارة (Admin & Manager) ---
    Route::middleware('role:admin,manager')->group(function () {
        Route::get('/activity-logs', [ActivityController::class, 'index']);
        Route::apiResource('extras', ExtraController::class)->except(['index', 'show']);

        // إدارة الأقسام
        Route::get('departments/trash', [DepartmentController::class, 'trash']);
        Route::apiResource('departments', DepartmentController::class)->except(['index', 'show']);
        Route::post('departments/{id}/restore', [DepartmentController::class, 'restore']);
        Route::delete('departments/{id}/force-delete', [DepartmentController::class, 'forceDelete']);

        // المشاريع الخارجية (Portfolio)
        Route::post('projects', [ProjectController::class, 'store']);
        Route::put('projects/{project}', [ProjectController::class, 'update']);
        Route::delete('projects/{project}', [ProjectController::class, 'destroy']);

        // المدونة والخدمات والآراء
        Route::apiResource('services', ServiceController::class)->except(['index', 'show']);
        Route::post('about', [AboutController::class, 'store']);
        Route::post('page-content/{page}', [PageContentController::class, 'store']);
        Route::post('blogs', [BlogController::class, 'store']);
        Route::match(['put', 'patch'], 'blogs/{blog}', [BlogController::class, 'update']);
        Route::delete('blogs/{blog}', [BlogController::class, 'destroy']);
        Route::post('testimonials', [TestimonialController::class, 'store']);
        Route::put('testimonials/{testimonial}', [TestimonialController::class, 'update']);
        Route::delete('testimonials/{testimonial}', [TestimonialController::class, 'destroy']);
        Route::post('/faqs', [FAQController::class, 'store']);
        Route::put('/faqs/{faq}', [FAQController::class, 'update']);
        Route::delete('/faqs/{faq}', [FAQController::class, 'destroy']);
        Route::post('categories', [CategoryController::class, 'store']);
        Route::put('categories/{category}', [CategoryController::class, 'update']);
        Route::delete('categories/{category}', [CategoryController::class, 'destroy']);

        // المشاريع الداخلية والمهام
        Route::prefix('internal-projects')->group(function () {
            Route::get('/', [InternalProjectController::class, 'index']);
            Route::post('/', [InternalProjectController::class, 'store']);
            Route::get('/{id}', [InternalProjectController::class, 'show']);
            Route::delete('/{id}', [InternalProjectController::class, 'destroy']);
        });
    });

    // --- 3. صلاحيات إدارة المهام (Admin + Manager + Task Generator + Department Manager) ---
    Route::middleware('role:admin,manager,task_generator,department_manager')->group(function () {
        Route::prefix('tasks')->group(function () {
            Route::post('/', [TaskController::class, 'store']);
            Route::post('/{id}/assign', [TaskController::class, 'assignMembers']);
            Route::delete('/{id}', [TaskController::class, 'destroy']);
            
            // إدارة الـ Checklist (إضافة وحذف)
            Route::post('/{taskId}/checklist', [ChecklistController::class, 'store']);
            Route::delete('/checklist/{checkListId}', [ChecklistController::class, 'destroy']);
        });
    });

    // --- 4. صلاحيات التنفيذ (Employee + Admin + Manager + Dept Manager + Task Gen + Client) ---
    Route::middleware('role:employee,admin,manager,department_manager,task_generator,client')->group(function () {
        Route::get('/employee/dashboard', [EmployeeDashboardController::class, 'index']);
        
        Route::prefix('tasks')->group(function () {
            Route::get('/', [TaskController::class, 'index']); 
            Route::get('/{id}', [TaskController::class, 'show']);
            Route::put('/{id}/status', [TaskController::class, 'updateStatus']);
            
            // الملاحظات والمرفقات
            Route::post('/{id}/notes', [TaskController::class, 'addNote']);
            Route::get('/{id}/notes', [TaskController::class, 'getNotes']);
            Route::post('/{id}/attachments', [TaskController::class, 'addAttachment']);
        });

        // التفاعل مع المدونة (Love)
        Route::post('blogs/{blog}/love', [BlogController::class, 'love']);
        Route::post('blogs/{blog}/unlove', [BlogController::class, 'unlove']);

        // الـ Checklist (رؤية وتحديث الحالة فقط)
        Route::get('tasks/{taskId}/checklist', [ChecklistController::class, 'index']);
        Route::put('/checklist/{checkListId}/toggle', [ChecklistController::class, 'toggle']);
    });
});