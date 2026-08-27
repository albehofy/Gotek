<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Category;
use App\Models\Project;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\Blog;
use App\Models\FAQ;
use App\Models\Role;
use App\Models\Permission;
use App\Models\FinanceCategory;
use App\Models\Department;
use App\Models\SubCategory;
use App\Models\TaskCustomField;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Roles & Permissions Seeder
        $superAdminRole = Role::firstOrCreate(['slug' => 'super_admin'], ['name' => 'Super Admin', 'description' => 'System-wide full administrative access']);
        $adminRole = Role::firstOrCreate(['slug' => 'admin'], ['name' => 'Admin', 'description' => 'Operational management access']);
        $deptManagerRole = Role::firstOrCreate(['slug' => 'department_manager'], ['name' => 'Department Manager', 'description' => 'Department-level deal, task and P&L access']);
        $employeeRole = Role::firstOrCreate(['slug' => 'employee'], ['name' => 'Employee', 'description' => 'Individual task executor & personal earnings view']);
        $clientRole = Role::firstOrCreate(['slug' => 'client'], ['name' => 'Client', 'description' => 'Dedicated client portal access']);

        $permissions = [
            ['name' => 'Manage Roles & Permissions', 'slug' => 'manage_roles', 'module' => 'roles'],
            ['name' => 'View System Capital', 'slug' => 'view_capital', 'module' => 'finance'],
            ['name' => 'Manage System Finance', 'slug' => 'manage_finance', 'module' => 'finance'],
            ['name' => 'View Department Finance', 'slug' => 'view_dept_finance', 'module' => 'finance'],
            ['name' => 'Create & Manage Deals', 'slug' => 'manage_deals', 'module' => 'deals'],
            ['name' => 'Manage Department Tasks', 'slug' => 'manage_dept_tasks', 'module' => 'tasks'],
            ['name' => 'View Assigned Tasks', 'slug' => 'view_own_tasks', 'module' => 'tasks'],
            ['name' => 'Access Client Portal', 'slug' => 'access_client_portal', 'module' => 'client_portal'],
        ];

        foreach ($permissions as $permData) {
            $perm = Permission::firstOrCreate(['slug' => $permData['slug']], $permData);
            if (in_array($perm->slug, ['manage_roles', 'view_capital', 'manage_finance'])) {
                $superAdminRole->permissions()->syncWithoutDetaching([$perm->id]);
            } else {
                $superAdminRole->permissions()->syncWithoutDetaching([$perm->id]);
                $adminRole->permissions()->syncWithoutDetaching([$perm->id]);
            }
        }

        // 2. Admin & Staff Users
        $superAdminUser = User::updateOrCreate(
            ['email' => 'admin@mediaglowegypt.com'],
            [
                'name' => 'Media Glow Super Admin',
                'password' => bcrypt('Mm123'),
                'role' => 'super_admin',
                'role_id' => $superAdminRole->id,
                'payment_type' => 'salary_based',
                'base_salary' => 25000.00
            ]
        );

        User::firstOrCreate(
            ['email' => 'admin@mediaglow.com'],
            [
                'name' => 'Default Super Admin',
                'password' => bcrypt('password'),
                'role' => 'super_admin',
                'role_id' => $superAdminRole->id,
                'payment_type' => 'salary_based',
                'base_salary' => 25000.00
            ]
        );

        $adminUser = User::firstOrCreate(
            ['email' => 'opadmin@mediaglow.com'],
            [
                'name' => 'Operations Admin',
                'password' => bcrypt('password'),
                'role' => 'admin',
                'role_id' => $adminRole->id,
                'payment_type' => 'salary_based',
                'base_salary' => 15000.00
            ]
        );

        // 3. Finance Categories (Exact Arabic Line Items requested)
        $financeCategoriesData = [
            // Expenses
            ['name_ar' => 'مرتبات إدارية', 'name_en' => 'Administrative Salaries', 'type' => 'expense'],
            ['name_ar' => 'مرتبات بيعية', 'name_en' => 'Sales Salaries', 'type' => 'expense'],
            ['name_ar' => 'هدايا وعروض', 'name_en' => 'Gifts & Offers', 'type' => 'expense'],
            ['name_ar' => 'المكافآت والخصومات', 'name_en' => 'Bonuses & Deductions', 'type' => 'expense'],
            ['name_ar' => 'تليفون وانترنت', 'name_en' => 'Phone & Internet', 'type' => 'expense'],
            ['name_ar' => 'ماء وغاز وكهرباء', 'name_en' => 'Water, Gas & Electricity', 'type' => 'expense'],
            ['name_ar' => 'انتقالات', 'name_en' => 'Transportation', 'type' => 'expense'],
            ['name_ar' => 'عمولات بيعية', 'name_en' => 'Sales Commissions', 'type' => 'expense'],
            ['name_ar' => 'عيديات', 'name_en' => 'Eid Bonuses', 'type' => 'expense'],
            ['name_ar' => 'أتعاب مهنية', 'name_en' => 'Professional Fees', 'type' => 'expense'],
            ['name_ar' => 'مطبوعات', 'name_en' => 'Printing', 'type' => 'expense'],
            ['name_ar' => 'ايجارات', 'name_en' => 'Rent', 'type' => 'expense'],
            ['name_ar' => 'مصاريف تأسيسية', 'name_en' => 'Founding Expenses', 'type' => 'expense'],
            ['name_ar' => 'مصاريف تطوير', 'name_en' => 'Development Expenses', 'type' => 'expense'],
            ['name_ar' => 'مصروفات نثرية', 'name_en' => 'Petty Expenses', 'type' => 'expense'],
            ['name_ar' => 'بوفيه', 'name_en' => 'Buffet / Pantry', 'type' => 'expense'],
            ['name_ar' => 'نظافة', 'name_en' => 'Cleaning', 'type' => 'expense'],
            ['name_ar' => 'الضيافة', 'name_en' => 'Hospitality', 'type' => 'expense'],
            ['name_ar' => 'صيانة واصلاح', 'name_en' => 'Maintenance & Repair', 'type' => 'expense'],
            ['name_ar' => 'مصاريف تحويل واستلام أموال', 'name_en' => 'Money Transfer & Collection Fees', 'type' => 'expense'],
            ['name_ar' => 'محاضر وقضايا', 'name_en' => 'Legal Reports & Cases', 'type' => 'expense'],
            // Income
            ['name_ar' => 'تحصيلات عقود وصفقات', 'name_en' => 'Deal & Contract Collections', 'type' => 'income'],
            ['name_ar' => 'خدمات واستشارات استثنائية', 'name_en' => 'Consulting & Services Income', 'type' => 'income'],
            ['name_ar' => 'وارد عهدة', 'name_en' => 'Custody Returned', 'type' => 'income'],
        ];

        foreach ($financeCategoriesData as $fc) {
            FinanceCategory::firstOrCreate(['name_ar' => $fc['name_ar']], array_merge($fc, ['is_system' => true, 'is_active' => true]));
        }

        // 4. Departments & Sub-categories & Partnerships
        $devDept = Department::firstOrCreate(['name' => 'Development'], ['description' => 'Software & Web Apps', 'has_partner' => false]);
        $designDept = Department::firstOrCreate(['name' => 'Graphics & Design'], ['description' => 'UI/UX and Graphic Design', 'has_partner' => false]);
        $photoDept = Department::firstOrCreate(['name' => 'Photography & Video'], [
            'description' => 'Media Production & Shoot Studio',
            'has_partner' => true,
            'partner_name' => 'Media Glow Production Partner',
            'partner_percentage' => 50.00
        ]);

        SubCategory::firstOrCreate(['department_id' => $photoDept->id, 'name_ar' => 'ريبيلز وانستجرام'], ['name_en' => 'Reels & Shorts']);
        SubCategory::firstOrCreate(['department_id' => $photoDept->id, 'name_ar' => 'فيديو ترويجي'], ['name_en' => 'Promo Video']);
        SubCategory::firstOrCreate(['department_id' => $photoDept->id, 'name_ar' => 'تصوير منتجات'], ['name_en' => 'Product Shoot']);
        SubCategory::firstOrCreate(['department_id' => $designDept->id, 'name_ar' => 'تصاميم سوشيال ميديا'], ['name_en' => 'Social Media Posts']);
        SubCategory::firstOrCreate(['department_id' => $designDept->id, 'name_ar' => 'هوية بصرية كاملة'], ['name_en' => 'Full Brand Identity']);

        // 5. Sample Task Custom Fields
        TaskCustomField::firstOrCreate(['name' => 'Deliverable Format'], ['field_type' => 'select', 'options' => ['MP4', 'PNG/PSD', 'Figma Link', 'ZIP Bundle'], 'is_required' => false]);
        TaskCustomField::firstOrCreate(['name' => 'Revision Limit'], ['field_type' => 'number', 'is_required' => false]);

        // 6. Additional Staff Users with Payment Types
        $mgrUser = User::firstOrCreate(
            ['email' => 'deptmanager@mediaglow.com'],
            [
                'name' => 'Photography Manager',
                'password' => bcrypt('password'),
                'role' => 'department_manager',
                'role_id' => $deptManagerRole->id,
                'department_id' => $photoDept->id,
                'payment_type' => 'salary_based',
                'base_salary' => 12000.00
            ]
        );
        $photoDept->update(['manager_id' => $mgrUser->id]);

        $empTaskBased = User::firstOrCreate(
            ['email' => 'creator@mediaglow.com'],
            [
                'name' => 'Content Creator Employee',
                'password' => bcrypt('password'),
                'role' => 'employee',
                'role_id' => $employeeRole->id,
                'department_id' => $photoDept->id,
                'payment_type' => 'task_based',
                'base_salary' => 0.00
            ]
        );

        $empHybrid = User::firstOrCreate(
            ['email' => 'hybrid@mediaglow.com'],
            [
                'name' => 'Hybrid Specialist',
                'password' => bcrypt('password'),
                'role' => 'employee',
                'role_id' => $employeeRole->id,
                'department_id' => $designDept->id,
                'payment_type' => 'hybrid',
                'base_salary' => 5000.00,
                'commission_rate' => 5.00
            ]
        );

        $clientUser = User::firstOrCreate(
            ['email' => 'client@mediaglow.com'],
            [
                'name' => 'Media Glow VIP Client',
                'password' => bcrypt('password'),
                'role' => 'client',
                'role_id' => $clientRole->id,
            ]
        );

        // 7. Seed Sample Portfolio Categories, Services, FAQs, etc. if empty
        if (Category::count() === 0) {
            Category::create(['name' => ['en' => 'Web Apps', 'ar' => 'تطبيقات الويب'], 'slug' => 'web-apps', 'description' => ['en' => 'Web Apps', 'ar' => 'تطبيقات الويب']]);
        }
    }
}
