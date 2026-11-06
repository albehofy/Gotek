<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Category;
use App\Models\Role;
use App\Models\FinanceCategory;
use App\Models\Department;
use App\Models\SubCategory;
use App\Models\TaskCustomField;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Full Roles & Permissions Matrix
        $this->call(RolesAndPermissionsSeeder::class);

        $superAdminRole = Role::where('slug', 'super_admin')->first();

        // 2. The Sole Super Admin User
        $superAdminUser = User::updateOrCreate(
            ['email' => 'ceo@mediaglowegypt.com'],
            [
                'name' => 'محمد وجية',
                'password' => 'MediaGlow2024##',
                'role' => 'super_admin',
                'role_id' => $superAdminRole ? $superAdminRole->id : null,
                'payment_type' => 'salary_based',
                'base_salary' => 0.00,
            ]
        );

        if ($superAdminRole) {
            $superAdminUser->roles()->syncWithoutDetaching([$superAdminRole->id]);
        }

        // 3. Essential System Finance Categories
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

        // 4. Default Departments & Sub-categories
        $devDept = Department::firstOrCreate(['name' => 'Development'], ['description' => 'Software & Web Apps', 'has_partner' => false]);
        $designDept = Department::firstOrCreate(['name' => 'Graphics & Design'], ['description' => 'UI/UX and Graphic Design', 'has_partner' => false]);
        $photoDept = Department::firstOrCreate(['name' => 'Photography & Video'], [
            'description' => 'Media Production & Shoot Studio',
            'has_partner' => false,
            'partner_name' => null,
            'partner_percentage' => 0.00
        ]);

        SubCategory::firstOrCreate(['department_id' => $photoDept->id, 'name_ar' => 'ريبيلز وانستجرام'], ['name_en' => 'Reels & Shorts']);
        SubCategory::firstOrCreate(['department_id' => $photoDept->id, 'name_ar' => 'فيديو ترويجي'], ['name_en' => 'Promo Video']);
        SubCategory::firstOrCreate(['department_id' => $photoDept->id, 'name_ar' => 'تصوير منتجات'], ['name_en' => 'Product Shoot']);
        SubCategory::firstOrCreate(['department_id' => $designDept->id, 'name_ar' => 'تصاميم سوشيال ميديا'], ['name_en' => 'Social Media Posts']);
        SubCategory::firstOrCreate(['department_id' => $designDept->id, 'name_ar' => 'هوية بصرية كاملة'], ['name_en' => 'Full Brand Identity']);

        // 5. Task Custom Fields
        TaskCustomField::firstOrCreate(['name' => 'Deliverable Format'], ['field_type' => 'select', 'options' => ['MP4', 'PNG/PSD', 'Figma Link', 'ZIP Bundle'], 'is_required' => false]);
        TaskCustomField::firstOrCreate(['name' => 'Revision Limit'], ['field_type' => 'number', 'is_required' => false]);

        // 6. Media Glow Website & Production Content
        $this->call(MediaGlowCinemaContentSeeder::class);
    }
}
