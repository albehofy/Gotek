<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        $rolesData = [
            ['name' => 'مدير النظام العام (Super Admin)', 'slug' => 'super_admin', 'description' => 'كامل الصلاحيات والتحكم الإداري والمالي والتقني الشامل لكافة مفاصل المنظومة'],
            ['name' => 'مدير النظام (Admin)', 'slug' => 'admin', 'description' => 'إدارة العمليات التشغيلية، فريق العمل، الصفقات، المشاريع، والمحتوى'],
            ['name' => 'مدير قسم (Department Manager)', 'slug' => 'department_manager', 'description' => 'إدارة مهام القسم، متابعة الصفقات الخاصة به، وإسناد المهام لأعضاء فريقه'],
            ['name' => 'مدير حسابات (Account Manager)', 'slug' => 'account_manager', 'description' => 'متابعة العملاء، إدارة الصفقات والعقود، والاعتماد بالوكالة والتنسيق المالي'],
            ['name' => 'موظف (Employee)', 'slug' => 'employee', 'description' => 'تنفيذ المهام المسندة، تحديث الحالات، ورفع المخرجات والمرفقات'],
            ['name' => 'عميل (Client)', 'slug' => 'client', 'description' => 'الدخول لبوابة العميل، مراجعة واعتماد المهام، وتقديم الملاحظات'],
        ];

        $rolesMap = [];
        foreach ($rolesData as $rData) {
            $role = Role::firstOrCreate(['slug' => $rData['slug']], $rData);
            $role->update(['name' => $rData['name'], 'description' => $rData['description']]);
            $rolesMap[$rData['slug']] = $role;
        }

        $permissions = [
            // Deals & Contracts
            ['name' => 'عرض الصفقات والعقود', 'slug' => 'view_deals', 'module' => 'deals', 'description' => 'الاطلاع على قائمة الصفقات والعقود في النظام'],
            ['name' => 'إنشاء صفقات جديدة', 'slug' => 'create_deals', 'module' => 'deals', 'description' => 'إمكانية إضافة صفقات جديدة وتحديد الخدمات'],
            ['name' => 'تعديل الصفقات', 'slug' => 'edit_deals', 'module' => 'deals', 'description' => 'تعديل بيانات وتفاصيل الصفقات القائمة ومراحلها'],
            ['name' => 'حذف الصفقات', 'slug' => 'delete_deals', 'module' => 'deals', 'description' => 'حذف الصفقات من النظام نهائياً'],
            ['name' => 'الاطلاع على القيمة المالية للصفقات', 'slug' => 'view_deal_finances', 'module' => 'deals', 'description' => 'رؤية أسعار الصفقات والمبالغ والعمولات'],

            // Tasks
            ['name' => 'عرض كافة مهام النظام', 'slug' => 'view_all_tasks', 'module' => 'tasks', 'description' => 'الاطلاع على كافة المهام لجميع الأقسام'],
            ['name' => 'عرض مهام القسم فقط', 'slug' => 'view_dept_tasks', 'module' => 'tasks', 'description' => 'الاطلاع على مهام القسم التابع له فقط'],
            ['name' => 'عرض المهام المسندة للشخص', 'slug' => 'view_own_tasks', 'module' => 'tasks', 'description' => 'الاطلاع على المهام المسندة للموظف شخصياً فقط'],
            ['name' => 'إنشاء وتكليف مهام', 'slug' => 'create_tasks', 'module' => 'tasks', 'description' => 'إضافة مهام جديدة وتعيين الموظفين'],
            ['name' => 'تعديل وحالات المهام', 'slug' => 'edit_tasks', 'module' => 'tasks', 'description' => 'تعديل تفاصيل المهمة وتغيير حالتها ومرفقاتها'],
            ['name' => 'حذف المهام', 'slug' => 'delete_tasks', 'module' => 'tasks', 'description' => 'حذف المهام من النظام'],
            ['name' => 'إسناد وتغيير أعضاء المهمة', 'slug' => 'assign_task_members', 'module' => 'tasks', 'description' => 'إسناد أعضاء الفريق أو إزالتهم من المهام'],
            ['name' => 'الاعتماد نيابة عن العميل', 'slug' => 'approve_client_tasks', 'module' => 'tasks', 'description' => 'اعتماد وموافقة على المهام بالنيابة عن العميل'],

            // Clients
            ['name' => 'عرض قائمة العملاء', 'slug' => 'view_clients', 'module' => 'clients', 'description' => 'الاطلاع على قائمة وسجلات العملاء وأكوادهم'],
            ['name' => 'إضافة عميل جديد', 'slug' => 'create_clients', 'module' => 'clients', 'description' => 'إنشاء وتسجيل حساب عميل جديد'],
            ['name' => 'تعديل بيانات العملاء', 'slug' => 'edit_clients', 'module' => 'clients', 'description' => 'تعديل بيانات العملاء وكلمات المرور والاتصال'],
            ['name' => 'حذف العملاء', 'slug' => 'delete_clients', 'module' => 'clients', 'description' => 'حذف سجلات العملاء من النظام'],
            ['name' => 'تجميد حساب العميل (Hold)', 'slug' => 'hold_clients', 'module' => 'clients', 'description' => 'إيقاف وتعليق حساب العميل مؤقتاً'],
            ['name' => 'عرض البروفايل الشامل للعميل (360°)', 'slug' => 'view_client_profile', 'module' => 'clients', 'description' => 'الاطلاع على الأقسام الثلاثة والمالية الشاملة للعميل'],

            // Staff & Team
            ['name' => 'عرض فريق العمل والموظفين', 'slug' => 'view_staff', 'module' => 'staff', 'description' => 'الاطلاع على قائمة موظفي الشركة'],
            ['name' => 'إضافة موظف جديد', 'slug' => 'create_staff', 'module' => 'staff', 'description' => 'إنشاء حساب موظف جديد وتحديد قسمه'],
            ['name' => 'تعديل بيانات ورواتب الموظفين', 'slug' => 'edit_staff', 'module' => 'staff', 'description' => 'تعديل حسابات ورواتب وكلمات مرور الموظفين'],
            ['name' => 'حذف الموظفين', 'slug' => 'delete_staff', 'module' => 'staff', 'description' => 'حذف حسابات الموظفين من النظام'],
            ['name' => 'تجميد حساب الموظف (Hold)', 'slug' => 'hold_staff', 'module' => 'staff', 'description' => 'تعليق وإيقاف حساب الموظف واستبعاده من المهام'],
            ['name' => 'إسناد الأدوار والصلاحيات للمستخدمين', 'slug' => 'assign_user_roles', 'module' => 'staff', 'description' => 'تحديد المستويات والأدوار المتعددة للمستخدمين'],

            // Roles & Permissions
            ['name' => 'إدارة مصفوفة الأدوار والصلاحيات', 'slug' => 'manage_roles', 'module' => 'roles', 'description' => 'الوصول إلى مصفوفة الصلاحيات والتعديل عليها'],
            ['name' => 'إنشاء أدوار وظيفية جديدة', 'slug' => 'create_roles', 'module' => 'roles', 'description' => 'إضافة دور جديد وتحديد صلاحياته'],
            ['name' => 'تعديل الأدوار والصلاحيات', 'slug' => 'edit_roles', 'module' => 'roles', 'description' => 'تعديل مسميات الأدوار والصلاحيات المسندة لها'],
            ['name' => 'حذف الأدوار المخصصة', 'slug' => 'delete_roles', 'module' => 'roles', 'description' => 'حذف الأدوار غير الأساسية من النظام'],

            // Departments
            ['name' => 'إدارة الأقسام والخدمات', 'slug' => 'manage_departments', 'module' => 'departments', 'description' => 'إضافة وتعديل وحذف الأقسام وتعيين المدراء'],
            ['name' => 'إدارة الخدمات الفرعية للأقسام', 'slug' => 'manage_subcategories', 'module' => 'departments', 'description' => 'إدارة الفئات الفرعية التابعة للأقسام'],

            // Finance & Accounting
            ['name' => 'عرض رأس المال والسيولة', 'slug' => 'view_capital', 'module' => 'finance', 'description' => 'الاطلاع على رأس المال وصافي الأرباح والسيولة العامة'],
            ['name' => 'الإدارة المالية الكاملة', 'slug' => 'manage_finance', 'module' => 'finance', 'description' => 'الوصول الكامل إلى لوحة الحسابات والمالية'],
            ['name' => 'عرض مالية وأرباح القسم', 'slug' => 'view_dept_finance', 'module' => 'finance', 'description' => 'الاطلاع على الإيرادات والمصروفات الخاصة بالقسم'],
            ['name' => 'إدارة القيود اليومية والدفتر العام', 'slug' => 'manage_ledger', 'module' => 'finance', 'description' => 'إضافة وتعديل قيود اليومية المحاسبية'],
            ['name' => 'إدارة العُهد المالية للموظفين', 'slug' => 'manage_custody', 'module' => 'finance', 'description' => 'صرف وتسوية واسترداد العُهد المالية للموظفين'],
            ['name' => 'إدارة الأصول الثابتة', 'slug' => 'manage_fixed_assets', 'module' => 'finance', 'description' => 'تسجيل الأصول وحساب الإهلاك ومتابعتها'],
            ['name' => 'إدارة الرواتب ومسيرات القبض', 'slug' => 'manage_payroll', 'module' => 'finance', 'description' => 'اعتماد مسيرات الرواتب والمكافآت والخصومات'],
            ['name' => 'إدارة دفعات وسندات قبض العملاء', 'slug' => 'manage_client_payments', 'module' => 'finance', 'description' => 'تسجيل دفعات العملاء وسندات القبض البنكية والنقدية'],
            ['name' => 'إدارة توزيعات ونسب الشركاء', 'slug' => 'manage_partner_splits', 'module' => 'finance', 'description' => 'حساب وتوزيع الأرباح على الشركاء'],
            ['name' => 'إدارة تصنيفات وبنود المالية', 'slug' => 'manage_finance_categories', 'module' => 'finance', 'description' => 'إدارة شجرة بنود الإيرادات والمصروفات'],

            // Internal Projects
            ['name' => 'إدارة المشاريع الداخلية والتطوير', 'slug' => 'manage_internal_projects', 'module' => 'internal_projects', 'description' => 'إدارة مشاريع الوكالة الداخلية وتطوير العمل'],

            // CMS & Website
            ['name' => 'إدارة سابقة الأعمال والمشاريع', 'slug' => 'manage_portfolio', 'module' => 'cms', 'description' => 'إضافة وتعديل الأعمال المنشورة على موقع الوكالة'],
            ['name' => 'إدارة الباقات والخدمات المعروضة', 'slug' => 'manage_services', 'module' => 'cms', 'description' => 'إدارة الخدمات والباقات على الموقع'],
            ['name' => 'إدارة مقالات المدونة', 'slug' => 'manage_blogs', 'module' => 'cms', 'description' => 'نشر وتعديل المقالات والمحتوى الترويجي'],
            ['name' => 'إدارة آراء العملاء والشهادات', 'slug' => 'manage_testimonials', 'module' => 'cms', 'description' => 'إدارة تقييمات وشهادات العملاء المعروضة'],
            ['name' => 'إدارة الأسئلة الشائعة', 'slug' => 'manage_faqs', 'module' => 'cms', 'description' => 'إضافة وتعديل الأسئلة والأجوبة الشائعة'],
            ['name' => 'إدارة محتوى الصفحات وبيانات التواصل', 'slug' => 'manage_cms_content', 'module' => 'cms', 'description' => 'تعديل نصوص صفحات الموقع وبيانات الاتصال ورسائل الزوار'],

            // System & Notifications
            ['name' => 'استعراض سجل العمليات والرقابة', 'slug' => 'view_activity_logs', 'module' => 'system', 'description' => 'مراقبة سجل النشاطات والعمليات الرقابية في النظام'],
            ['name' => 'إرسال وإدارة الإشعارات العامة', 'slug' => 'manage_notifications', 'module' => 'system', 'description' => 'إرسال تنبيهات وإشعارات للمستخدمين والموظفين'],
            ['name' => 'الدخول لبوابة العميل', 'slug' => 'access_client_portal', 'module' => 'system', 'description' => 'صلاحية تسجيل الدخول واستخدام بوابة العميل الخاصة']
        ];

        $allPermIds = [];
        $adminPermIds = [];
        $deptManagerPermIds = [];
        $accountManagerPermIds = [];
        $employeePermIds = [];
        $clientPermIds = [];

        foreach ($permissions as $pData) {
            $perm = Permission::updateOrCreate(['slug' => $pData['slug']], $pData);
            $pid = $perm->id;
            $allPermIds[] = $pid;

            if (!in_array($pData['slug'], ['manage_roles', 'view_capital', 'manage_partner_splits'])) {
                $adminPermIds[] = $pid;
            }

            if (in_array($pData['slug'], [
                'view_deals', 'view_dept_tasks', 'create_tasks', 'edit_tasks',
                'view_dept_finance', 'manage_departments', 'assign_task_members'
            ])) {
                $deptManagerPermIds[] = $pid;
            }

            if (in_array($pData['slug'], [
                'view_deals', 'create_deals', 'edit_deals', 'view_deal_finances',
                'view_all_tasks', 'create_tasks', 'edit_tasks', 'approve_client_tasks',
                'view_clients', 'create_clients', 'edit_clients', 'view_client_profile',
                'manage_client_payments'
            ])) {
                $accountManagerPermIds[] = $pid;
            }

            if (in_array($pData['slug'], ['view_own_tasks', 'edit_tasks'])) {
                $employeePermIds[] = $pid;
            }

            if (in_array($pData['slug'], ['access_client_portal'])) {
                $clientPermIds[] = $pid;
            }
        }

        if (isset($rolesMap['super_admin'])) {
            $rolesMap['super_admin']->permissions()->sync($allPermIds);
        }
        if (isset($rolesMap['admin'])) {
            $rolesMap['admin']->permissions()->sync($adminPermIds);
        }
        if (isset($rolesMap['department_manager'])) {
            $rolesMap['department_manager']->permissions()->sync($deptManagerPermIds);
        }
        if (isset($rolesMap['account_manager'])) {
            $rolesMap['account_manager']->permissions()->sync($accountManagerPermIds);
        }
        if (isset($rolesMap['employee'])) {
            $rolesMap['employee']->permissions()->sync($employeePermIds);
        }
        if (isset($rolesMap['client'])) {
            $rolesMap['client']->permissions()->sync($clientPermIds);
        }
    }
}
