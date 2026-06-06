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
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Admin User
        User::firstOrCreate(
            ['email' => 'admin@goteksa.com'],
            [
                'name' => 'Gotek Admin',
                'password' => bcrypt('password'),
            ]
        );

        // 2. Categories
        $catWeb = Category::create([
            'name' => ['en' => 'Web Development', 'ar' => 'تطوير الويب'],
            'description' => ['en' => 'Modern web apps', 'ar' => 'تطبيقات ويب حديثة'],
            'slug' => 'web-development',
            'image' => 'placeholder.png'
        ]);

        $catBrand = Category::create([
            'name' => ['en' => 'Branding', 'ar' => 'هوية تجارية'],
            'description' => ['en' => 'Creative branding', 'ar' => 'هوية إبداعية'],
            'slug' => 'brand-identity',
            'image' => 'placeholder.png'
        ]);

        $catAds = Category::create([
            'name' => ['en' => 'Paid Advertising', 'ar' => 'إعلانات مدفوعة'],
            'description' => ['en' => 'Performance marketing campaigns', 'ar' => 'حملات تسويقية مدفوعة'],
            'slug' => 'paid-advertising',
            'image' => 'placeholder.png'
        ]);

        $catPOS = Category::create([
            'name' => ['en' => 'POS Systems', 'ar' => 'أنظمة نقاط البيع'],
            'description' => ['en' => 'Custom POS cashier systems', 'ar' => 'أنظمة كاشير ونقاط بيع مخصصة'],
            'slug' => 'pos-systems',
            'image' => 'placeholder.png'
        ]);

        // 3. Projects (Rich Case-Studies)
        $p1 = Project::create([
            'title' => ['en' => 'Gotek E-Commerce', 'ar' => 'متجر جوتيك الإلكتروني'],
            'description' => ['en' => 'A robust e-commerce platform built with modern technologies.', 'ar' => 'منصة تجارة إلكترونية متطورة مبنية بأحدث التقنيات.'],
            'main_image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'category_id' => $catWeb->id,
            'img_alt' => 'Gotek E-Commerce Project',
            'ViewInHome' => true,
            'color' => '#1a1815',
            'emoji' => '🛍️',
            'tags' => ['E-Commerce', 'Angular', 'Laravel'],
            'client' => 'Gotek Retail KSA',
            'timeline' => '4 Months',
            'challenge' => [
                'en' => 'The client needed a highly scalable e-commerce website capable of handling 10k concurrent users with zero lag.',
                'ar' => 'كان العميل بحاجة إلى موقع تجارة إلكترونية قابل للتوسع بشكل كبير وقادر على التعامل مع 10 آلاف مستخدم متزامن دون أي تأخير.'
            ],
            'solution' => [
                'en' => 'We built a customized storefront with Angular and a robust REST API using Laravel, caching with Redis.',
                'ar' => 'قمنا ببناء واجهة متجر مخصصة باستخدام Angular وواجهة برمجة تطبيقات REST قوية باستخدام Laravel، مع التخزين المؤقت باستخدام Redis.'
            ],
            'results' => [
                ['value' => '150%', 'label' => 'Conversion Rate'],
                ['value' => '99.99%', 'label' => 'Uptime'],
                ['value' => '45%', 'label' => 'Sales Growth']
            ],
            'testimonial' => [
                'text' => 'Gotek exceeded our expectations. Our sales doubled in the first month!',
                'name' => 'Fahad Al-Mansoori',
                'role' => 'CEO, Gotek Retail',
                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
            ],
            'deliverables' => ['UI/UX Design', 'Laravel REST API', 'Angular Frontend', 'Payment Integration']
        ]);
        $p1->images()->createMany([
            ['image_path' => 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80'],
            ['image_path' => 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80']
        ]);

        $p2 = Project::create([
            'title' => ['en' => 'Aura Brand Redesign', 'ar' => 'إعادة تصميم هوية أورا'],
            'description' => ['en' => 'A complete visual overhaul for Aura corp.', 'ar' => 'تجديد شامل للهوية البصرية لشركة أورا.'],
            'main_image' => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'category_id' => $catBrand->id,
            'img_alt' => 'Aura Brand Redesign Project',
            'ViewInHome' => true,
            'color' => '#0f1015',
            'emoji' => '🎨',
            'tags' => ['Branding', 'Identity', 'Logo Design'],
            'client' => 'Aura Cosmetics',
            'timeline' => '2 Months',
            'challenge' => [
                'en' => 'Aura needed a modern brand identity that appeals to millennials in Saudi Arabia.',
                'ar' => 'كانت أورا بحاجة إلى هوية علامة تجارية حديثة تجذب جيل الألفية في المملكة العربية السعودية.'
            ],
            'solution' => [
                'en' => 'We redesigned their logo, typography, color palette, and created brand guidelines.',
                'ar' => 'أعدنا تصميم شعارهم وخطوطهم ولوحة ألوانهم وأنشأنا إرشادات العلامة التجارية.'
            ],
            'results' => [
                ['value' => '3x', 'label' => 'Brand Recall'],
                ['value' => '80%', 'label' => 'Positive Feedback']
            ],
            'testimonial' => [
                'text' => 'The new identity perfectly captures who we are. Amazing work!',
                'name' => 'Sarah Collins',
                'role' => 'Marketing Director, Aura',
                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
            ],
            'deliverables' => ['Logo Design', 'Brand Guidelines', 'Social Media Templates', 'Packaging Design']
        ]);
        $p2->images()->createMany([
            ['image_path' => 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80']
        ]);

        $p3 = Project::create([
            'title' => ['en' => 'Nova Real Estate', 'ar' => 'نوفا للعقارات'],
            'description' => ['en' => 'Interactive property listing platform.', 'ar' => 'منصة تفاعلية لعرض العقارات.'],
            'main_image' => 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'category_id' => $catWeb->id,
            'img_alt' => 'Nova Real Estate App',
            'ViewInHome' => true,
            'color' => '#2f2f3b',
            'emoji' => '🏢',
            'tags' => ['Real Estate', 'Search Engine', 'Interactive Map'],
            'client' => 'Nova Properties',
            'timeline' => '3 Months',
            'challenge' => [
                'en' => 'The client wanted a real estate platform with real-time property searching and interactive filters.',
                'ar' => 'أراد العميل منصة عقارية تبحث عن العقارات في الوقت الفعلي وفلاتر تفاعلية.'
            ],
            'solution' => [
                'en' => 'We implemented a custom search engine utilizing Elasticsearch and mapped listings using Mapbox.',
                'ar' => 'قمنا بتنفيذ محرك بحث مخصص باستخدام Elasticsearch ورسم الخرائط باستخدام Mapbox.'
            ],
            'results' => [
                ['value' => '200k', 'label' => 'Monthly Visitors'],
                ['value' => '3.5s', 'label' => 'Search Load Time']
            ],
            'testimonial' => [
                'text' => 'Our users love the interactive maps and filter options. Inquiries have skyrocketed!',
                'name' => 'Omar Hassan',
                'role' => 'Founder, Nova Properties',
                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
            ],
            'deliverables' => ['Interactive Maps', 'Elasticsearch Integration', 'SEO Optimization', 'Admin Panel']
        ]);
        $p3->images()->createMany([
            ['image_path' => 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80']
        ]);

        $p4 = Project::create([
            'title' => ['en' => 'Saudi Fast POS', 'ar' => 'نظام كاشير فاست السعودي'],
            'description' => ['en' => 'Tailored cashier and billing system for retail stores in Riyadh.', 'ar' => 'نظام كاشير وفواتير مخصص لمحلات التجزئة في الرياض.'],
            'main_image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'category_id' => $catPOS->id,
            'img_alt' => 'Saudi Fast POS cashier system',
            'ViewInHome' => true,
            'color' => '#cf5508',
            'emoji' => '💳',
            'tags' => ['POS', 'Cashier', 'Billing'],
            'client' => 'Riyadh Retail Group',
            'timeline' => '3 Months',
            'challenge' => [
                'en' => 'Integrating local tax guidelines (ZATCA e-invoicing) seamlessly with real-time sync.',
                'ar' => 'دمج إرشادات الضريبة المحلية (الربط الإلكتروني لهيئة الزكاة والدخل) بسلاسة مع المزامنة الفورية.'
            ],
            'solution' => [
                'en' => 'We built a compliant system with offline-first capabilities and ZATCA phase 2 integration.',
                'ar' => 'قمنا ببناء نظام متوافق مع إمكانية العمل دون اتصال بالإنترنت وتكامل المرحلة الثانية لهيئة الزكاة والدخل.'
            ],
            'results' => [
                ['value' => '100%', 'label' => 'Compliance'],
                ['value' => '0ms', 'label' => 'Offline Delay']
            ],
            'testimonial' => [
                'text' => 'The offline invoicing feature saved us multiple times during internet outages. Phenomenal support!',
                'name' => 'Mohamed Al-Otaibi',
                'role' => 'Operations Manager',
                'avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
            ],
            'deliverables' => ['Offline Cashier App', 'ZATCA E-Invoicing API', 'Sales Analytics Dashboard']
        ]);

        $p5 = Project::create([
            'title' => ['en' => 'Luxury Perfume Ads Campaign', 'ar' => 'حملة إعلانات العطور الفاخرة'],
            'description' => ['en' => 'Aggressive lead generation and sales campaign across Meta and Google.', 'ar' => 'حملة مكثفة لزيادة المبيعات وجلب العملاء عبر ميتا وجوجل.'],
            'main_image' => 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'category_id' => $catAds->id,
            'img_alt' => 'Luxury Perfume Ad Design',
            'ViewInHome' => true,
            'color' => '#e8620a',
            'emoji' => '✨',
            'tags' => ['Paid Ads', 'Snapchat Ads', 'Google Search'],
            'client' => 'Al-Rehab Perfumes',
            'timeline' => '1 Month',
            'challenge' => [
                'en' => 'High acquisition cost due to heavy competition in the perfume market.',
                'ar' => 'ارتفاع تكلفة الاستحواذ على العميل بسبب المنافسة الشديدة في سوق العطور.'
            ],
            'solution' => [
                'en' => 'We created video creatives highlighting the premium packaging and ran retargeting flows.',
                'ar' => 'أنشأنا تصميمات فيديو تسلط الضوء على التغليف الفاخر وقمنا بتشغيل تدفقات إعادة الاستهداف.'
            ],
            'results' => [
                ['value' => '4.2x', 'label' => 'ROAS'],
                ['value' => '-35%', 'label' => 'Acquisition Cost']
            ],
            'testimonial' => [
                'text' => 'Our orders went through the roof, and cost per purchase went down drastically.',
                'name' => 'Khalid Al-Ghamdi',
                'role' => 'Founder, Al-Rehab',
                'avatar' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop'
            ],
            'deliverables' => ['Ad Creatives & Video Scripts', 'Audience Targeting Strategy', 'Campaign Audits']
        ]);

        // 4. Services (Configured with translation keys matching translations.ts)
        Service::create([
            'icon' => 'fa-solid fa-bullseye',
            'title' => ['en' => 'svc_1_title', 'ar' => 'svc_1_title'],
            'subtitle' => ['en' => 'svc_filter_marketing', 'ar' => 'svc_filter_marketing'],
            'description' => ['en' => 'svc_1_desc', 'ar' => 'svc_1_desc'],
            'features' => [
                'en' => json_encode(['svc_1_f1', 'svc_1_f2', 'svc_1_f3', 'svc_1_f4', 'svc_1_f5']),
                'ar' => json_encode(['svc_1_f1', 'svc_1_f2', 'svc_1_f3', 'svc_1_f4', 'svc_1_f5'])
            ],
            'stats' => [
                'en' => json_encode([
                    ['label' => 'svc_1_card1_label', 'sub' => 'svc_1_card1_sub'],
                    ['label' => 'svc_1_card2_label', 'sub' => 'svc_1_card2_sub'],
                    ['label' => 'svc_1_card3_label', 'sub' => 'svc_1_card3_sub']
                ]),
                'ar' => json_encode([
                    ['label' => 'svc_1_card1_label', 'sub' => 'svc_1_card1_sub'],
                    ['label' => 'svc_1_card2_label', 'sub' => 'svc_1_card2_sub'],
                    ['label' => 'svc_1_card3_label', 'sub' => 'svc_1_card3_sub']
                ])
            ],
            'cta_text_en' => 'svc_1_cta',
            'cta_text_ar' => 'svc_1_cta',
            'cta_url' => '/contact',
            'order' => 1
        ]);

        Service::create([
            'icon' => 'fa-solid fa-fill-drip',
            'title' => ['en' => 'svc_2_title', 'ar' => 'svc_2_title'],
            'subtitle' => ['en' => 'svc_filter_design', 'ar' => 'svc_filter_design'],
            'description' => ['en' => 'svc_2_desc', 'ar' => 'svc_2_desc'],
            'features' => [
                'en' => json_encode(['svc_2_f1', 'svc_2_f2', 'svc_2_f3', 'svc_2_f4', 'svc_2_f5']),
                'ar' => json_encode(['svc_2_f1', 'svc_2_f2', 'svc_2_f3', 'svc_2_f4', 'svc_2_f5'])
            ],
            'stats' => [
                'en' => json_encode([
                    ['label' => 'svc_2_card1_label', 'sub' => 'svc_2_card1_sub', 'badge' => 'svc_2_card1_badge'],
                    ['label' => 'svc_2_card2_label', 'sub' => 'svc_2_card2_sub', 'badge' => 'svc_2_card2_badge'],
                    ['label' => 'svc_2_card3_label', 'sub' => 'svc_2_card3_sub', 'badge' => 'svc_2_card3_badge']
                ]),
                'ar' => json_encode([
                    ['label' => 'svc_2_card1_label', 'sub' => 'svc_2_card1_sub', 'badge' => 'svc_2_card1_badge'],
                    ['label' => 'svc_2_card2_label', 'sub' => 'svc_2_card2_sub', 'badge' => 'svc_2_card2_badge'],
                    ['label' => 'svc_2_card3_label', 'sub' => 'svc_2_card3_sub', 'badge' => 'svc_2_card3_badge']
                ])
            ],
            'cta_text_en' => 'svc_2_cta',
            'cta_text_ar' => 'svc_2_cta',
            'cta_url' => '/contact',
            'order' => 2
        ]);

        Service::create([
            'icon' => 'fa-solid fa-thumbs-up',
            'title' => ['en' => 'svc_3_title', 'ar' => 'svc_3_title'],
            'subtitle' => ['en' => 'svc_filter_marketing', 'ar' => 'svc_filter_marketing'],
            'description' => ['en' => 'svc_3_desc', 'ar' => 'svc_3_desc'],
            'features' => [
                'en' => json_encode(['svc_3_f1', 'svc_3_f2', 'svc_3_f3', 'svc_3_f4', 'svc_3_f5']),
                'ar' => json_encode(['svc_3_f1', 'svc_3_f2', 'svc_3_f3', 'svc_3_f4', 'svc_3_f5'])
            ],
            'stats' => [
                'en' => json_encode([
                    ['label' => 'svc_3_card1_label', 'sub' => 'svc_3_card1_sub'],
                    ['label' => 'svc_3_card2_label', 'sub' => 'svc_3_card2_sub'],
                    ['label' => 'svc_3_card3_label', 'sub' => 'svc_3_card3_sub']
                ]),
                'ar' => json_encode([
                    ['label' => 'svc_3_card1_label', 'sub' => 'svc_3_card1_sub'],
                    ['label' => 'svc_3_card2_label', 'sub' => 'svc_3_card2_sub'],
                    ['label' => 'svc_3_card3_label', 'sub' => 'svc_3_card3_sub']
                ])
            ],
            'cta_text_en' => 'svc_3_cta',
            'cta_text_ar' => 'svc_3_cta',
            'cta_url' => '/contact',
            'order' => 3
        ]);

        Service::create([
            'icon' => 'fa-solid fa-video',
            'title' => ['en' => 'svc_4_title', 'ar' => 'svc_4_title'],
            'subtitle' => ['en' => 'svc_filter_marketing', 'ar' => 'svc_filter_marketing'],
            'description' => ['en' => 'svc_4_desc', 'ar' => 'svc_4_desc'],
            'features' => [
                'en' => json_encode(['svc_4_f1', 'svc_4_f2', 'svc_4_f3', 'svc_4_f4', 'svc_4_f5']),
                'ar' => json_encode(['svc_4_f1', 'svc_4_f2', 'svc_4_f3', 'svc_4_f4', 'svc_4_f5'])
            ],
            'stats' => [
                'en' => json_encode([
                    ['label' => 'svc_4_card1_label', 'sub' => 'svc_4_card1_sub'],
                    ['label' => 'svc_4_card2_label', 'sub' => 'svc_4_card2_sub'],
                    ['label' => 'svc_4_card3_label', 'sub' => 'svc_4_card3_sub']
                ]),
                'ar' => json_encode([
                    ['label' => 'svc_4_card1_label', 'sub' => 'svc_4_card1_sub'],
                    ['label' => 'svc_4_card2_label', 'sub' => 'svc_4_card2_sub'],
                    ['label' => 'svc_4_card3_label', 'sub' => 'svc_4_card3_sub']
                ])
            ],
            'cta_text_en' => 'svc_4_cta',
            'cta_text_ar' => 'svc_4_cta',
            'cta_url' => '/contact',
            'order' => 4
        ]);

        Service::create([
            'icon' => 'fa-solid fa-window-maximize',
            'title' => ['en' => 'svc_5_title', 'ar' => 'svc_5_title'],
            'subtitle' => ['en' => 'svc_filter_tech', 'ar' => 'svc_filter_tech'],
            'description' => ['en' => 'svc_5_desc', 'ar' => 'svc_5_desc'],
            'features' => [
                'en' => json_encode(['svc_5_f1', 'svc_5_f2', 'svc_5_f3', 'svc_5_f4', 'svc_5_f5']),
                'ar' => json_encode(['svc_5_f1', 'svc_5_f2', 'svc_5_f3', 'svc_5_f4', 'svc_5_f5'])
            ],
            'stats' => [
                'en' => json_encode([
                    ['label' => 'svc_5_card1_label', 'sub' => 'svc_5_card1_sub'],
                    ['label' => 'svc_5_card2_label', 'sub' => 'svc_5_card2_sub'],
                    ['label' => 'svc_5_card3_label', 'sub' => 'svc_5_card3_sub']
                ]),
                'ar' => json_encode([
                    ['label' => 'svc_5_card1_label', 'sub' => 'svc_5_card1_sub'],
                    ['label' => 'svc_5_card2_label', 'sub' => 'svc_5_card2_sub'],
                    ['label' => 'svc_5_card3_label', 'sub' => 'svc_5_card3_sub']
                ])
            ],
            'cta_text_en' => 'svc_5_cta',
            'cta_text_ar' => 'svc_5_cta',
            'cta_url' => '/contact',
            'order' => 5
        ]);

        Service::create([
            'icon' => 'fa-solid fa-cash-register',
            'title' => ['en' => 'svc_6_title', 'ar' => 'svc_6_title'],
            'subtitle' => ['en' => 'svc_filter_tech', 'ar' => 'svc_filter_tech'],
            'description' => ['en' => 'svc_6_desc', 'ar' => 'svc_6_desc'],
            'features' => [
                'en' => json_encode(['svc_6_f1', 'svc_6_f2', 'svc_6_f3', 'svc_6_f4', 'svc_6_f5']),
                'ar' => json_encode(['svc_6_f1', 'svc_6_f2', 'svc_6_f3', 'svc_6_f4', 'svc_6_f5'])
            ],
            'stats' => [
                'en' => json_encode([
                    ['label' => 'svc_6_card1_label', 'sub' => 'svc_6_card1_sub'],
                    ['label' => 'svc_6_card2_label', 'sub' => 'svc_6_card2_sub'],
                    ['label' => 'svc_6_card3_label', 'sub' => 'svc_6_card3_sub']
                ]),
                'ar' => json_encode([
                    ['label' => 'svc_6_card1_label', 'sub' => 'svc_6_card1_sub'],
                    ['label' => 'svc_6_card2_label', 'sub' => 'svc_6_card2_sub'],
                    ['label' => 'svc_6_card3_label', 'sub' => 'svc_6_card3_sub']
                ])
            ],
            'cta_text_en' => 'svc_6_cta',
            'cta_text_ar' => 'svc_6_cta',
            'cta_url' => '/contact',
            'order' => 6
        ]);

        // 5. Testimonials
        Testimonial::create([
            'client_name' => 'Ahmed Al-Fahad',
            'job_title' => 'CEO, TechNova',
            'feedback' => json_encode(['en' => 'Gotek delivered our project on time and the quality exceeded our expectations. Highly recommended!', 'ar' => 'سلمت جوتيك مشروعنا في الوقت المحدد وتجاوزت الجودة توقعاتنا. نوصي بهم بشدة!']),
            'avatar_color' => '#e8620a',
            'rating' => 5
        ]);

        Testimonial::create([
            'client_name' => 'Sarah Collins',
            'job_title' => 'Marketing Director',
            'feedback' => json_encode(['en' => 'Their UI/UX team is incredible. They transformed our platform into a user-friendly masterpiece.', 'ar' => 'فريق تصميم تجربة المستخدم لديهم رائع. لقد حولوا منصتنا إلى تحفة سهلة الاستخدام.']),
            'avatar_color' => '#e8620a',
            'rating' => 5
        ]);

        Testimonial::create([
            'client_name' => 'Omar Hassan',
            'job_title' => 'Founder, StartupX',
            'feedback' => json_encode(['en' => 'Excellent communication and technical skills. They are true partners in success.', 'ar' => 'تواصل ممتاز ومهارات تقنية عالية. إنهم شركاء حقيقيون في النجاح.']),
            'avatar_color' => '#e8620a',
            'rating' => 5
        ]);

        // 6. Blogs
        Blog::create([
            'title' => ['en' => 'The Future of Web Development in 2026', 'ar' => 'مستقبل تطوير الويب في 2026'],
            'description' => ['en' => 'Exploring the latest trends in front-end frameworks and backend architectures.', 'ar' => 'استكشاف أحدث الاتجاهات في أطر عمل الواجهة الأمامية وهياكل الواجهة الخلفية.'],
            'media_path' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'media_type' => 'image',
            'loves_count' => 120,
            'img_alt' => 'Web Dev Trends'
        ]);

        Blog::create([
            'title' => ['en' => 'Why UX Design Matters More Than Ever', 'ar' => 'لماذا تصميم تجربة المستخدم أهم من أي وقت مضى'],
            'description' => ['en' => 'A deep dive into how user experience impacts business revenue and customer retention.', 'ar' => 'نظرة عميقة حول كيفية تأثير تجربة المستخدم على إيرادات الأعمال والاحتفاظ بالعملاء.'],
            'media_path' => 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'media_type' => 'image',
            'loves_count' => 85,
            'img_alt' => 'UX Design'
        ]);

        // 7. FAQs
        FAQ::create([
            'question_en' => 'How long does a typical project take?',
            'question_ar' => 'كم يستغرق المشروع النموذجي؟',
            'answer_en' => 'Depending on the scope, most projects take between 4 to 12 weeks from kick-off to launch.',
            'answer_ar' => 'اعتمادًا على النطاق، تستغرق معظم المشاريع من 4 إلى 12 أسبوعًا من البداية وحتى الإطلاق.',
        ]);

        FAQ::create([
            'question_en' => 'Do you provide post-launch support?',
            'question_ar' => 'هل تقدمون دعم ما بعد الإطلاق؟',
            'answer_en' => 'Yes, we offer various maintenance and support packages to ensure your platform runs smoothly.',
            'answer_ar' => 'نعم، نحن نقدم باقات صيانة ودعم متنوعة لضمان عمل منصتك بسلاسة.',
        ]);

        FAQ::create([
            'question_en' => 'What technologies do you specialize in?',
            'question_ar' => 'ما هي التقنيات التي تتخصصون فيها؟',
            'answer_en' => 'We specialize in modern stacks including Laravel, Angular, React, and Node.js.',
            'answer_ar' => 'نحن متخصصون في التقنيات الحديثة بما في ذلك لارافل، أنجولار، رياكت، ونود جي إس.',
        ]);
        
        // Ensure ContactInfo exists
        DB::table('contact_infos')->insert([
            'whatsapp_phone' => '+966500000000',
            'whatsapp_description' => 'Available 24/7',
            'official_email' => 'contact@goteksa.com',
            'company_address' => 'Riyadh, Saudi Arabia',
            'google_map_location' => 'https://maps.google.com',
            'emergency_support' => 'support@goteksa.com',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        // 8. Departments
        $devDept = \App\Models\Department::create([
            'name' => 'Development',
            'description' => 'Software and Web Development Team'
        ]);

        $designDept = \App\Models\Department::create([
            'name' => 'Design',
            'description' => 'UI/UX and Graphic Design Team'
        ]);

        $marketingDept = \App\Models\Department::create([
            'name' => 'Marketing',
            'description' => 'Digital Marketing and SEO Team'
        ]);

        // 9. Additional Users
        User::firstOrCreate(
            ['email' => 'manager@goteksa.com'],
            [
                'name' => 'Project Manager',
                'password' => bcrypt('password'),
                'role' => 'manager',
                'department_id' => $devDept->id
            ]
        );

        $emp1 = User::firstOrCreate(
            ['email' => 'employee1@goteksa.com'],
            [
                'name' => 'Frontend Developer',
                'password' => bcrypt('password'),
                'role' => 'employee',
                'department_id' => $devDept->id
            ]
        );

        $emp2 = User::firstOrCreate(
            ['email' => 'employee2@goteksa.com'],
            [
                'name' => 'UI/UX Designer',
                'password' => bcrypt('password'),
                'role' => 'employee',
                'department_id' => $designDept->id
            ]
        );

        User::firstOrCreate(
            ['email' => 'generator@goteksa.com'],
            [
                'name' => 'Task Generator Staff',
                'password' => bcrypt('password'),
                'role' => 'task_generator',
                'department_id' => null
            ]
        );

        User::firstOrCreate(
            ['email' => 'deptmanager@goteksa.com'],
            [
                'name' => 'Dev Dept Manager',
                'password' => bcrypt('password'),
                'role' => 'department_manager',
                'department_id' => $devDept->id
            ]
        );

        User::firstOrCreate(
            ['email' => 'client@goteksa.com'],
            [
                'name' => 'Gotek Client Partner',
                'password' => bcrypt('password'),
                'role' => 'client',
                'department_id' => null
            ]
        );

        // 10. Contact Messages
        \App\Models\ContactMessage::create([
            'full_name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'phone' => '+1234567890',
            'company_name' => 'Acme Corp',
            'service_needed' => 'Web Development',
            'budget_range' => '$5k - $10k',
            'project_details' => 'We need a new e-commerce website for our retail business.'
        ]);

        \App\Models\ContactMessage::create([
            'full_name' => 'Jane Smith',
            'email' => 'jane.smith@example.com',
            'phone' => '+0987654321',
            'company_name' => 'Startup Inc',
            'service_needed' => 'Digital Marketing',
            'budget_range' => '$1k - $5k',
            'project_details' => 'Looking for an SEO audit and social media strategy.'
        ]);

        // 11. Internal Projects
        $intProject1 = \App\Models\InternalProject::create([
            'title' => 'Gotek Official Website',
            'description' => 'Redesigning the company portfolio website.',
            'status' => 'active',
            'start_date' => now(),
            'end_date' => now()->addDays(30),
            'department_id' => $devDept->id
        ]);

        $intProject2 = \App\Models\InternalProject::create([
            'title' => 'Marketing Campaign Q3',
            'description' => 'Launch ads and social media posts for Q3.',
            'status' => 'active',
            'start_date' => now()->addDays(5),
            'end_date' => now()->addDays(45),
            'department_id' => $marketingDept->id
        ]);

        // 12. Tasks
        $task1 = \App\Models\Task::create([
            'internal_project_id' => $intProject1->id,
            'department_id' => $devDept->id,
            'title' => 'Design Homepage Mockup',
            'description' => 'Create a high-fidelity mockup for the new homepage.',
            'status' => 'done',
            'priority' => 'high'
        ]);

        // Assign task to user
        $task1->users()->attach($emp2->id);

        $task2 = \App\Models\Task::create([
            'internal_project_id' => $intProject1->id,
            'department_id' => $devDept->id,
            'title' => 'Implement Frontend Layout',
            'description' => 'Convert the homepage design into Angular code.',
            'status' => 'in_progress',
            'priority' => 'high'
        ]);

        $task2->users()->attach($emp1->id);

        // 13. Task Checklists
        \App\Models\TaskChecklist::create([
            'task_id' => $task2->id,
            'item_text' => 'Setup Angular Environment',
            'is_completed' => true
        ]);

        \App\Models\TaskChecklist::create([
            'task_id' => $task2->id,
            'item_text' => 'Build Navigation Component',
            'is_completed' => true
        ]);

        \App\Models\TaskChecklist::create([
            'task_id' => $task2->id,
            'item_text' => 'Integrate APIs',
            'is_completed' => false
        ]);
    }
}
