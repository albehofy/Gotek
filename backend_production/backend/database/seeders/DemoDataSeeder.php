<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Service;
use App\Models\Project;
use Carbon\Carbon;

class DemoDataSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Create Categories
        $catWeb = Category::firstOrCreate(
            ['slug' => 'web-development'],
            [
                'name' => ['en' => 'Web Development', 'ar' => 'تطوير الويب'],
                'description' => ['en' => 'Modern web applications.', 'ar' => 'تطبيقات ويب حديثة.'],
            ]
        );

        $catMarketing = Category::firstOrCreate(
            ['slug' => 'digital-marketing'],
            [
                'name' => ['en' => 'Digital Marketing', 'ar' => 'التسويق الرقمي'],
                'description' => ['en' => 'Data-driven marketing campaigns.', 'ar' => 'حملات تسويقية مبنية على البيانات.'],
            ]
        );

        // 2. Create Services
        Service::firstOrCreate(
            ['title->en' => 'Web Development'],
            [
                'title' => ['en' => 'Web Development', 'ar' => 'تطوير الويب'],
                'subtitle' => ['en' => 'High Performance Applications', 'ar' => 'تطبيقات عالية الأداء'],
                'description' => ['en' => 'We build fast, scalable, and secure web applications tailored to your business needs.', 'ar' => 'نقوم ببناء تطبيقات ويب سريعة وقابلة للتطوير وآمنة مصممة خصيصًا لتلبية احتياجات عملك.'],
                'icon' => 'fa-solid fa-code',
                'features' => [
                    ['en' => 'React & Angular', 'ar' => 'رياكت وانجولار'],
                    ['en' => 'Scalable Backend', 'ar' => 'واجهة خلفية قابلة للتطوير'],
                    ['en' => 'API Integration', 'ar' => 'تكامل واجهة برمجة التطبيقات']
                ],
                'stats' => [
                    ['label' => ['en' => 'Projects', 'ar' => 'المشاريع'], 'value' => '150+'],
                    ['label' => ['en' => 'Uptime', 'ar' => 'وقت التشغيل'], 'value' => '99.9%']
                ],
                'cta_text_en' => 'Start Project',
                'cta_text_ar' => 'ابدأ المشروع',
                'cta_url' => '/contact',
                'order' => 1
            ]
        );

        Service::firstOrCreate(
            ['title->en' => 'Digital Marketing'],
            [
                'title' => ['en' => 'Digital Marketing', 'ar' => 'التسويق الرقمي'],
                'subtitle' => ['en' => 'Grow Your Audience', 'ar' => 'تنمية جمهورك'],
                'description' => ['en' => 'Data-driven strategies to boost your online presence and maximize ROI.', 'ar' => 'استراتيجيات تعتمد على البيانات لتعزيز تواجدك على الإنترنت وزيادة العائد على الاستثمار.'],
                'icon' => 'fa-solid fa-bullhorn',
                'features' => [
                    ['en' => 'SEO Optimization', 'ar' => 'تحسين محركات البحث'],
                    ['en' => 'Social Media Management', 'ar' => 'إدارة وسائل التواصل الاجتماعي'],
                    ['en' => 'PPC Campaigns', 'ar' => 'حملات الدفع لكل نقرة']
                ],
                'stats' => [
                    ['label' => ['en' => 'Clients', 'ar' => 'العملاء'], 'value' => '80+'],
                    ['label' => ['en' => 'Avg ROI', 'ar' => 'متوسط العائد'], 'value' => '320%']
                ],
                'cta_text_en' => 'Get a Quote',
                'cta_text_ar' => 'احصل على عرض سعر',
                'cta_url' => '/contact',
                'order' => 2
            ]
        );

        Service::firstOrCreate(
            ['title->en' => 'UI/UX Design'],
            [
                'title' => ['en' => 'UI/UX Design', 'ar' => 'تصميم واجهة وتجربة المستخدم'],
                'subtitle' => ['en' => 'Beautiful Experiences', 'ar' => 'تجارب جميلة'],
                'description' => ['en' => 'Crafting intuitive and engaging user interfaces that delight your customers.', 'ar' => 'تصميم واجهات مستخدم بديهية وجذابة تسعد عملائك.'],
                'icon' => 'fa-solid fa-pen-nib',
                'features' => [
                    ['en' => 'Wireframing', 'ar' => 'تخطيط الهياكل'],
                    ['en' => 'Prototyping', 'ar' => 'النماذج الأولية'],
                    ['en' => 'User Testing', 'ar' => 'اختبار المستخدم']
                ],
                'stats' => [
                    ['label' => ['en' => 'Designs', 'ar' => 'التصاميم'], 'value' => '200+'],
                    ['label' => ['en' => 'Awards', 'ar' => 'الجوائز'], 'value' => '12']
                ],
                'cta_text_en' => 'View Portfolio',
                'cta_text_ar' => 'عرض الأعمال',
                'cta_url' => '/portfolio',
                'order' => 3
            ]
        );

        // 3. Create Projects (dated back to last year: 2025)
        $lastYear = Carbon::now()->subYear();

        Project::firstOrCreate(
            ['title->en' => 'E-Commerce Revamp'],
            [
                'title' => ['en' => 'E-Commerce Revamp', 'ar' => 'تجديد المتجر الإلكتروني'],
                'description' => ['en' => 'A complete overhaul of a leading retail brand\'s online store.', 'ar' => 'إصلاح شامل للمتجر الإلكتروني لعلامة تجارية رائدة في مجال التجزئة.'],
                'main_image' => 'https://placehold.co/800x600/1a1a22/e8620a?text=Ecommerce+Project',
                'category_id' => $catWeb->id,
                'ViewInHome' => true,
                'tags' => ['React', 'Laravel', 'UI/UX'],
                'client' => 'RetailCorp Inc.',
                'timeline' => '3 Months',
                'challenge' => ['en' => 'Outdated UI and slow loading times.', 'ar' => 'واجهة مستخدم قديمة وأوقات تحميل بطيئة.'],
                'solution' => ['en' => 'Rebuilt from scratch using modern web technologies.', 'ar' => 'أعيد بناؤه من الصفر باستخدام تقنيات الويب الحديثة.'],
                'results' => ['en' => '200% increase in mobile conversions.', 'ar' => 'زيادة بنسبة 200% في تحويلات الهاتف المحمول.'],
                'created_at' => $lastYear,
                'updated_at' => $lastYear,
            ]
        );

        Project::firstOrCreate(
            ['title->en' => 'Fintech Dashboard'],
            [
                'title' => ['en' => 'Fintech Dashboard', 'ar' => 'لوحة معلومات التكنولوجيا المالية'],
                'description' => ['en' => 'A comprehensive analytics dashboard for a financial institution.', 'ar' => 'لوحة معلومات تحليلية شاملة لمؤسسة مالية.'],
                'main_image' => 'https://placehold.co/800x600/1a1a22/e8620a?text=Fintech+Dashboard',
                'category_id' => $catWeb->id,
                'ViewInHome' => true,
                'tags' => ['Angular', 'Node.js', 'Data Vis'],
                'client' => 'FinBank Ltd.',
                'timeline' => '5 Months',
                'challenge' => ['en' => 'Complex data streams difficult to interpret.', 'ar' => 'تدفقات بيانات معقدة يصعب تفسيرها.'],
                'solution' => ['en' => 'Created an interactive dashboard with real-time charts.', 'ar' => 'إنشاء لوحة معلومات تفاعلية مع رسوم بيانية في الوقت الفعلي.'],
                'results' => ['en' => 'Improved decision-making speed by 40%.', 'ar' => 'تحسين سرعة اتخاذ القرار بنسبة 40%.'],
                'created_at' => clone $lastYear->addMonth(),
                'updated_at' => clone $lastYear->addMonth(),
            ]
        );

        Project::firstOrCreate(
            ['title->en' => 'Social Media Campaign 2025'],
            [
                'title' => ['en' => 'Social Media Campaign 2025', 'ar' => 'حملة وسائل التواصل الاجتماعي 2025'],
                'description' => ['en' => 'A viral marketing campaign that reached millions.', 'ar' => 'حملة تسويق فيروسية وصلت إلى الملايين.'],
                'main_image' => 'https://placehold.co/800x600/1a1a22/e8620a?text=Marketing+Campaign',
                'category_id' => $catMarketing->id,
                'ViewInHome' => true,
                'tags' => ['Marketing', 'Social Media', 'Content'],
                'client' => 'Global Brand X',
                'timeline' => '1 Month',
                'challenge' => ['en' => 'Low brand awareness among Gen Z.', 'ar' => 'انخفاض الوعي بالعلامة التجارية بين الجيل Z.'],
                'solution' => ['en' => 'Targeted TikTok and Instagram influencer campaign.', 'ar' => 'حملة مستهدفة للمؤثرين على تيك توك وإنستجرام.'],
                'results' => ['en' => '5M+ views and 100k new followers.', 'ar' => 'أكثر من 5 ملايين مشاهدة و 100 ألف متابع جديد.'],
                'created_at' => clone $lastYear->addMonths(2),
                'updated_at' => clone $lastYear->addMonths(2),
            ]
        );
    }
}
