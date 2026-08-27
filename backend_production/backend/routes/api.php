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
    PageContentController, DealController, RoleController, FinanceController, ClientPortalController
};

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::get('/home-data', [HomePageController::class, 'index']);
Route::get('/home', [HomePageController::class, 'index']);
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
Route::get('/contact', [ContactMessageController::class, 'index']);
Route::post('/contact', [ContactMessageController::class, 'store']);
Route::delete('/contact/{id}', [ContactMessageController::class, 'destroy']);

/*
|--------------------------------------------------------------------------
| Protected Routes (Sanctum Authenticated)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {

    // Notification Center Routes
    Route::prefix('notifications')->group(function () {
        Route::get('/', [NotificationController::class, 'index']);
        Route::get('/unread', [NotificationController::class, 'unread']);
        Route::post('/{id}/read', [NotificationController::class, 'markAsRead']);
        Route::post('/read-all', [NotificationController::class, 'markAllAsRead']);
        Route::delete('/{id}', [NotificationController::class, 'destroy']);
    });

    // Client Portal Routes (Dedicated Client View)
    Route::prefix('client-portal')->group(function () {
        Route::get('/dashboard', [ClientPortalController::class, 'dashboard']);
        Route::post('/tasks/{taskId}/note', [ClientPortalController::class, 'addTaskNote']);
        Route::post('/tasks/{taskId}/approve', [ClientPortalController::class, 'approveTask']);
    });

    // Deals Management Routes
    Route::prefix('deals')->group(function () {
        Route::get('/', [DealController::class, 'index']);
        Route::get('/{id}', [DealController::class, 'show']);
        Route::post('/', [DealController::class, 'store']);
        Route::put('/{id}', [DealController::class, 'update']);
        Route::delete('/{id}', [DealController::class, 'destroy']);
    });

    // Task Management Routes
    Route::prefix('tasks')->group(function () {
        Route::get('/', [TaskController::class, 'index']);
        Route::post('/', [TaskController::class, 'store']);
        Route::get('/custom-fields', [TaskController::class, 'getCustomFields']);
        Route::post('/custom-fields', [TaskController::class, 'storeCustomField']);
        Route::get('/{id}', [TaskController::class, 'show']);
        Route::put('/{id}', [TaskController::class, 'update']);
        Route::put('/{id}/status', [TaskController::class, 'updateStatus']);
        Route::put('/{id}/priority', [TaskController::class, 'updatePriority']);
        Route::post('/{id}/assign', [TaskController::class, 'assignMembers']);
        Route::post('/{id}/notes', [TaskController::class, 'addNote']);
        Route::post('/{id}/attachments', [TaskController::class, 'addAttachment']);
        Route::delete('/{id}/attachments/{attachmentId}', [TaskController::class, 'deleteAttachment']);
        Route::get('/{id}/activity', [TaskController::class, 'getActivity']);
        Route::delete('/{id}', [TaskController::class, 'destroy']);

        // Subtasks
        Route::post('/{id}/subtasks', [TaskController::class, 'storeSubtask']);
        Route::put('/subtasks/{id}/toggle', [TaskController::class, 'toggleSubtask']);
        Route::delete('/subtasks/{id}', [TaskController::class, 'deleteSubtask']);

        // Checklist
        Route::post('/{taskId}/checklist', [ChecklistController::class, 'store']);
        Route::delete('/checklist/{checkListId}', [ChecklistController::class, 'destroy']);
    });

    // Departments & Sections Routes
    Route::prefix('departments')->group(function () {
        Route::get('/', [DepartmentController::class, 'index']);
        Route::post('/', [DepartmentController::class, 'store']);
        Route::get('/{id}', [DepartmentController::class, 'show']);
        Route::put('/{id}', [DepartmentController::class, 'update']);
        Route::post('/{id}/sub-categories', [DepartmentController::class, 'addSubCategory']);
        Route::put('/sub-categories/{subId}', [DepartmentController::class, 'updateSubCategory']);
        Route::delete('/sub-categories/{subId}', [DepartmentController::class, 'deleteSubCategory']);
        Route::delete('/{id}', [DepartmentController::class, 'destroy']);
    });

    // Users Management Routes
    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::put('/{id}', [UserController::class, 'update']);
        Route::patch('/{id}/assign-department', [UserController::class, 'updateDepartment']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
    });

    // Roles & Permissions Routes (Super Admin)
    Route::prefix('roles')->group(function () {
        Route::get('/', [RoleController::class, 'index']);
        Route::post('/', [RoleController::class, 'storeRole']);
        Route::put('/{id}/permissions', [RoleController::class, 'updateRolePermissions']);
        Route::post('/users/{userId}/assign', [RoleController::class, 'assignUserRole']);
    });

    // Full Accounting & Finance Routes
    Route::prefix('finance')->group(function () {
        Route::get('/summary', [FinanceController::class, 'summary']);
        Route::get('/ledger', [FinanceController::class, 'getLedger']);
        Route::post('/ledger', [FinanceController::class, 'storeLedger']);
        Route::get('/categories', [FinanceController::class, 'getCategories']);
        Route::post('/categories', [FinanceController::class, 'storeCategory']);
        Route::get('/client-balances', [FinanceController::class, 'getClientBalances']);
        Route::post('/client-payments', [FinanceController::class, 'storeClientPayment']);
        Route::get('/custody', [FinanceController::class, 'getCustodyAccounts']);
        Route::post('/custody/issue', [FinanceController::class, 'issueCustody']);
        Route::post('/custody/{id}/return', [FinanceController::class, 'returnCustody']);
        Route::get('/partner-splits', [FinanceController::class, 'getPartnerProfitSplitReport']);
        Route::get('/fixed-assets', [FinanceController::class, 'getFixedAssets']);
        Route::post('/fixed-assets', [FinanceController::class, 'storeFixedAsset']);
        Route::get('/payroll', [FinanceController::class, 'getPayrollSummary']);
    });

    // Portfolio Admin Resources
    Route::get('/activity-logs', [ActivityController::class, 'index']);
    Route::apiResource('extras', ExtraController::class)->except(['index', 'show']);
    Route::post('projects', [ProjectController::class, 'store']);
    Route::put('projects/{project}', [ProjectController::class, 'update']);
    Route::delete('projects/{project}', [ProjectController::class, 'destroy']);
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

    Route::prefix('internal-projects')->group(function () {
        Route::get('/', [InternalProjectController::class, 'index']);
        Route::post('/', [InternalProjectController::class, 'store']);
        Route::get('/{id}', [InternalProjectController::class, 'show']);
        Route::delete('/{id}', [InternalProjectController::class, 'destroy']);
    });

    Route::post('/media/cleanup-old', function (\Illuminate\Http\Request $request) {
        $years = (int) $request->input('years', 2);
        \Illuminate\Support\Facades\Artisan::call('media:cleanup-old', ['--years' => $years]);
        return response()->json([
            'status' => 'success',
            'message' => 'تم الحذف التلقائي للميديا والملفات والأرشيف الأقدم من سنتين بنجاح',
            'output' => \Illuminate\Support\Facades\Artisan::output()
        ]);
    });

    Route::get('tasks/{taskId}/checklist', [ChecklistController::class, 'index']);
    Route::put('/checklist/{checkListId}/toggle', [ChecklistController::class, 'toggle']);
    Route::get('/employee/dashboard', [EmployeeDashboardController::class, 'index']);
});