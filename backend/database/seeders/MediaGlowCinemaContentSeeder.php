<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Service;
use App\Models\Project;
use App\Models\Blog;
use App\Models\Testimonial;
use App\Models\FAQ;
use App\Models\ContactInfo;
use App\Models\AboutPage;
use App\Models\AboutTimeline;
use App\Models\PageContent;
use Carbon\Carbon;

class MediaGlowCinemaContentSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Categories for Portfolio & Production
        $categoriesData = [
            [
                'slug' => 'cinema-commercials',
                'name' => [
                    'ar' => 'الإعلانات التجارية والسينمائية',
                    'en' => 'Commercials & Cinematic Ads'
                ],
                'description' => [
                    'ar' => 'إنتاج إعلانات تلفزيونية وحملات دعائية كبرى بأعلى معايير الإبهار البصري.',
                    'en' => 'High-end TV commercials and major digital brand films with cinematic precision.'
                ],
                'image' => 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'slug' => 'documentaries',
                'name' => [
                    'ar' => 'الأفلام الوثائقية والرسمية',
                    'en' => 'Documentaries & Docuseries'
                ],
                'description' => [
                    'ar' => 'سرد وثائقي ملهم يخلّد إنجازات المؤسسات والمشاريع القومية والقصص الإنسانية.',
                    'en' => 'Impactful documentary storytelling chronicling corporate milestones and human stories.'
                ],
                'image' => 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'slug' => 'brand-films',
                'name' => [
                    'ar' => 'أفلام الهوية واستعراض الشركات',
                    'en' => 'Brand Films & Corporate Profiles'
                ],
                'description' => [
                    'ar' => 'أفلام مؤسسية تروي رسالة ورؤية العلامة التجارية لترسيخ مكانتها السوقية.',
                    'en' => 'Premium brand anthems and cinematic corporate films that elevate authority.'
                ],
                'image' => 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'slug' => 'vfx-post-production',
                'name' => [
                    'ar' => 'المؤثرات البصرية وتصحيح الألوان',
                    'en' => 'VFX, CGI & Color Grading'
                ],
                'description' => [
                    'ar' => 'عمليات ما بعد الإنتاج، المؤثرات ثلاثية الأبعاد ومعايرة الألوان على DaVinci Resolve.',
                    'en' => 'Elite post-production, 3D visual effects, and master DaVinci Resolve grading.'
                ],
                'image' => 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'slug' => 'live-events',
                'name' => [
                    'ar' => 'تغطية الفعاليات والمؤتمرات الكبرى',
                    'en' => 'Mega Events & Live Multi-Cam'
                ],
                'description' => [
                    'ar' => 'بث مباشر متعدد الكاميرات وتغطيات سينمائية استثنائية لأضخم الفعاليات الإقليمية.',
                    'en' => 'Live multi-cam broadcasting and dynamic cinematic highlights for mega summits.'
                ],
                'image' => 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
            ],
        ];

        $categoriesMap = [];
        foreach ($categoriesData as $cData) {
            $cat = Category::updateOrCreate(
                ['slug' => $cData['slug']],
                [
                    'name' => $cData['name'],
                    'description' => $cData['description'],
                    'image' => $cData['image']
                ]
            );
            $categoriesMap[$cData['slug']] = $cat->id;
        }

        // 2. Services (6 Core Pillars of Media Glow Cinema Studio)
        $servicesData = [
            [
                'icon' => 'fa-solid fa-film',
                'title' => [
                    'ar' => 'الإنتاج الإعلاني والسينمائي المتكامل',
                    'en' => 'High-End Commercial & Cinema Production'
                ],
                'subtitle' => [
                    'ar' => 'من الفكرة حتى شاشات العرض الكبرى',
                    'en' => 'From Creative Blueprint to Prime Broadcast'
                ],
                'description' => [
                    'ar' => 'نقدم حلول إنتاج سينمائي متكاملة تشمل كتابة السيناريو، الإخراج الإبداعي، إدارة مواقع التصوير، وأسطول كاميرات سينمائية متطورة (ARRI Alexa 35 و RED V-Raptor 8K) بإضاءات سينمائية احترافية.',
                    'en' => 'Full-spectrum cinema production covering conceptual screenwriting, creative direction, location scouting, and top-tier camera packages (ARRI Alexa 35 & RED V-Raptor 8K) with industry-grade lighting rigs.'
                ],
                'features' => [
                    ['ar' => 'أسطول كاميرات ARRI & RED بدقة 8K', 'en' => 'ARRI Alexa 35 & RED 8K Cinema Packages'],
                    ['ar' => 'عدسات أنامورفيك سينمائية فاخرة (Cooke & Zeiss)', 'en' => 'Master Anamorphic Lenses (Cooke & Zeiss)'],
                    ['ar' => 'طاقم إخراج وإضاءة من نخبة صناع السينما', 'en' => 'Elite Directors, DPs & Master Gaffers'],
                    ['ar' => 'تصاريح وتأمين مواقع التصوير في مصر والخليج', 'en' => 'Regional Location Permits & Set Logistics']
                ],
                'stats' => [
                    ['label' => ['ar' => 'مشروع منجز', 'en' => 'Productions'], 'value' => '140+'],
                    ['label' => ['ar' => 'دقة سينمائية', 'en' => 'Max Master'], 'value' => '8K RAW'],
                    ['label' => ['ar' => 'جوائز إقليمية', 'en' => 'Industry Awards'], 'value' => '18']
                ],
                'cta_text_ar' => 'احجز استشارة إنتاجية',
                'cta_text_en' => 'Request Production Brief',
                'cta_url' => '/contact',
                'order' => 1
            ],
            [
                'icon' => 'fa-solid fa-wand-magic-sparkles',
                'title' => [
                    'ar' => 'المونتاج، المؤثرات البصرية وتصحيح الألوان',
                    'en' => 'Post-Production, VFX & Color Grading'
                ],
                'subtitle' => [
                    'ar' => 'سحر اللمسات الأخيرة في ستوديو ميديا جلو',
                    'en' => 'Master Finishing & Visual Perfection'
                ],
                'description' => [
                    'ar' => 'مختبر ما بعد الإنتاج مجهز بأحدث وحدات DaVinci Resolve Studio وشاشات Sony BVM المعتمدة لهوليوود. نقدم مونتاجاً سردياً دقيقاً، مؤثرات بصرية CGI ثلاثية الأبعاد، ومعايرة ألوان HDR مذهلة.',
                    'en' => 'State-of-the-art post-production suite equipped with DaVinci Resolve Studio and Hollywood-certified Sony BVM mastering monitors. Offering narrative offline editing, 3D CGI visual effects, and calibrated HDR color grading.'
                ],
                'features' => [
                    ['ar' => 'تصحيح ألوان سينمائي DaVinci Resolve Master HDR', 'en' => 'DaVinci Resolve Certified Color Grading (HDR)'],
                    ['ar' => 'مؤثرات بصرية CGI ثلاثية الأبعاد ومحاكاة واقعية', 'en' => '3D CGI, Photoreal Simulation & Compositing'],
                    ['ar' => 'مونتاج سردي وإيقاعي بأعلى معايير الإبهار', 'en' => 'Narrative Editorial & High-Paced Assembly'],
                    ['ar' => 'تسليم صيغ بث متعددة (TV, Cinema DCP, Social)', 'en' => 'Multi-Format Deliverables (DCP, Web, Broadcast)']
                ],
                'stats' => [
                    ['label' => ['ar' => 'ساعة معالجة', 'en' => 'Render Hours'], 'value' => '4,500+'],
                    ['label' => ['ar' => 'معدل الدقة', 'en' => 'Color Accuracy'], 'value' => '100% Rec709/P3']
                ],
                'cta_text_ar' => 'شاهد أعمال البوست برودكشن',
                'cta_text_en' => 'Explore Post Showcase',
                'cta_url' => '/portfolio',
                'order' => 2
            ],
            [
                'icon' => 'fa-solid fa-video',
                'title' => [
                    'ar' => 'تغطية الفعاليات والمؤتمرات الدولية والبث الحي',
                    'en' => 'Live Events & Multi-Cam Broadcasting'
                ],
                'subtitle' => [
                    'ar' => 'بث مباشر متعدد الكاميرات بجودة التلفزيون',
                    'en' => 'Broadcast-Grade Multi-Camera Engineering'
                ],
                'description' => [
                    'ar' => 'تغطية الفعاليات والمؤتمرات والمعارض الضخمة في مصر والسعودية بأطقم تصوير متعددة، عربات بث خارجي (OB Van)، كاميرات متحركة (Steadicam & Cable Cam)، وميكساج فوري للبث عبر الأقمار والإنترنت.',
                    'en' => 'Turnkey event coverage and live broadcasting across Egypt and the GCC. Featuring multi-cam setups, OB Van infrastructure, heavy-duty Steadicams, cable cams, and instantaneous satellite/digital streaming.'
                ],
                'features' => [
                    ['ar' => 'عربات بث وإنتاج خارجي بدقة 4K UHD', 'en' => '4K UHD Mobile Production & OB Infrastructure'],
                    ['ar' => 'أنظمة ستيديكام ودرون معتمدة وتصاريح طيران', 'en' => 'Certified Steadicam, Jib & Drone Operations'],
                    ['ar' => 'مونتاج فوري لنشرات الأخبار وHighlights اليومية', 'en' => 'Same-Day Same-Event Highlight Reels'],
                    ['ar' => 'بث مباشر متزامن لكافة منصات التواصل والشاشات', 'en' => 'Ultra-Low Latency Multi-Platform Streaming']
                ],
                'stats' => [
                    ['label' => ['ar' => 'فعالية كبرى', 'en' => 'Mega Summits'], 'value' => '85+'],
                    ['label' => ['ar' => 'نسبة المشاهدات', 'en' => 'Live Reach'], 'value' => '12M+']
                ],
                'cta_text_ar' => 'تنسيق تغطية مؤتمرك',
                'cta_text_en' => 'Book Event Coverage',
                'cta_url' => '/contact',
                'order' => 3
            ],
            [
                'icon' => 'fa-solid fa-lightbulb',
                'title' => [
                    'ar' => 'تطوير الاستراتيجيات وصناعة المحتوى الإبداعي',
                    'en' => 'Creative Strategy & Brand Storytelling'
                ],
                'subtitle' => [
                    'ar' => 'أفكار سينمائية ترفع القيمة السوقية للعلامة',
                    'en' => 'Narrative Campaigns Driving Tangible ROI'
                ],
                'description' => [
                    'ar' => 'نحول الرسائل التسويقية المعقدة إلى قصص ملهمة تلامس مشاعر الجمهور وتدفعهم للتفاعل. نبتكر مفاهيم إعلانية مبتكرة (Concepts) ورسم لوحات القصة (Storyboards) وخطط إطلاق الحملات.',
                    'en' => 'Transforming complex corporate messaging into unforgettable narrative stories. We craft bespoke creative concepts, detailed dynamic storyboards, and multi-channel launch rollouts.'
                ],
                'features' => [
                    ['ar' => 'تطوير المفاهيم الإبداعية وكتابة السيناريو (Scripts)', 'en' => 'Creative Concepting & Screenplay Development'],
                    ['ar' => 'رسم الستوري بورد ولوحات التخيل (Moodboards)', 'en' => 'Cinematic Storyboarding & Moodboard Curation'],
                    ['ar' => 'استراتيجيات توزيع المحتوى على وسائل الإعلام', 'en' => 'Omni-Channel Content Distribution Strategy'],
                    ['ar' => 'قياس العائد والتفاعل مع الحملات الإعلانية', 'en' => 'Performance Tracking & Brand Resonance Analytics']
                ],
                'stats' => [
                    ['label' => ['ar' => 'حملة إعلانية', 'en' => 'Brand Campaigns'], 'value' => '220+'],
                    ['label' => ['ar' => 'متوسط نمو التفاعل', 'en' => 'Engagement Boost'], 'value' => '+340%']
                ],
                'cta_text_ar' => 'ابدأ جلسة العصف الذهني',
                'cta_text_en' => 'Initiate Creative Brief',
                'cta_url' => '/contact',
                'order' => 4
            ],
            [
                'icon' => 'fa-solid fa-camera',
                'title' => [
                    'ar' => 'تصوير المنتجات الفاخرة والأزياء والسيارات',
                    'en' => 'Commercial Product, Fashion & Automotive'
                ],
                'subtitle' => [
                    'ar' => 'إضاءة دقيقة وتفاصيل فائقة النقاء',
                    'en' => 'Micro-Precision Lighting & Flawless Textures'
                ],
                'description' => [
                    'ar' => 'جلسات تصوير سينمائي للمنتجات والماركات العالمية داخل استوديوهاتنا المتخصصة مع معدات تحريك آلية (Motion Control Rigs)، إضاءات استوديو دقيقة، ومؤثرات سوائل وسرعات عالية (High-Speed Phantom).',
                    'en' => 'Ultra-precision commercial studio photography and macro cinematography. Featuring automated motion control robot rigs, surgical studio lighting, high-speed slow motion, and specialized liquid simulations.'
                ],
                'features' => [
                    ['ar' => 'روبوت تحريك الكاميرا (Motion Control Rig)', 'en' => 'Motion Control Robotic Camera Arms'],
                    ['ar' => 'تصوير حركة فائقة البطء بدقة عالية (Phantom High-Speed)', 'en' => 'Phantom High-Speed Slow Motion (1000fps+)'],
                    ['ar' => 'تصميم وبناء ديكورات استوديو مخصصة لكل منتج', 'en' => 'Custom Studio Set Design & Tabletop Engineering'],
                    ['ar' => 'ريتاتش وتلميع المنتجات على أعلى مستوى رقمي', 'en' => 'Flawless High-End Retouching & Compositing']
                ],
                'stats' => [
                    ['label' => ['ar' => 'منتج مصور', 'en' => 'Products Shot'], 'value' => '950+'],
                    ['label' => ['ar' => 'سرعة الإطار', 'en' => 'Slow-Mo Capture'], 'value' => '2,500 fps']
                ],
                'cta_text_ar' => 'شاهد معرض المنتجات',
                'cta_text_en' => 'View Tabletop Works',
                'cta_url' => '/portfolio',
                'order' => 5
            ],
            [
                'icon' => 'fa-solid fa-compact-disc',
                'title' => [
                    'ar' => 'الهندسة الصوتية والمكساج السينمائي Dolby Atmos',
                    'en' => 'Sound Design & Dolby Atmos Mixing'
                ],
                'subtitle' => [
                    'ar' => 'بيئة صوتية محيطية تأسر الحواس',
                    'en' => 'Immersive Spatial Audio Architecture'
                ],
                'description' => [
                    'ar' => 'الصوت يمثل 50% من التجربة السينمائية. نوفر تصميم مؤثرات صوتية مخصصة (Foley & SFX)، تسجيل تعليق صوتي من أفضل الأصوات العربية والأجنبية، ومكساج محيطي معتمد من Dolby Atmos.',
                    'en' => 'Sound represents 50% of the cinematic narrative. We engineer custom soundscapes, foley, certified Dolby Atmos 7.1.4 spatial audio, original orchestral scores, and master voice-over dubbing.'
                ],
                'features' => [
                    ['ar' => 'مكساج محيطي بنظام Dolby Atmos 7.1.4 المعتمد', 'en' => 'Dolby Atmos 7.1.4 Certified Spatial Mixing'],
                    ['ar' => 'تسجيل تعليق صوتي (Voice-Over) بنخبة الأصوات', 'en' => 'Premium Multilingual Voice-Over Talent Roster'],
                    ['ar' => 'تصميم مؤثرات صوتية حصرية وموسيقى تصويرية', 'en' => 'Bespoke Foley Sound Design & Original Scores'],
                    ['ar' => 'تنقية وتعديل مسارات الصوت القديمة والمعقدة', 'en' => 'Advanced Audio Restoration & Spectral Cleaning']
                ],
                'stats' => [
                    ['label' => ['ar' => 'مسار صوتي', 'en' => 'Audio Tracks'], 'value' => '600+'],
                    ['label' => ['ar' => 'معيار الصوت', 'en' => 'Mix Standard'], 'value' => 'Dolby 7.1.4']
                ],
                'cta_text_ar' => 'استمع للنماذج الصوتية',
                'cta_text_en' => 'Listen to Audio Reel',
                'cta_url' => '/contact',
                'order' => 6
            ]
        ];

        foreach ($servicesData as $sData) {
            Service::updateOrCreate(
                ['title->en' => $sData['title']['en']],
                $sData
            );
        }

        // 3. Featured Cinema Projects (Portfolio)
        $now = Carbon::now();
        $projectsData = [
            [
                'title' => [
                    'ar' => 'فيلم "رؤية الأفق" — الهيئة السعودية للسياحة',
                    'en' => '"Horizon Vision" — Saudi Tourism Authority'
                ],
                'description' => [
                    'ar' => 'فيلم سينمائي عالمي يوثق الطبيعة البكر والمعالم التاريخية في البحر الأحمر والعلا، تم تصويره خلال 25 يوماً باستخدام طائرات سينمائية وعدسات أنامورفيك نادرة لعرضه في المعارض العالمية.',
                    'en' => 'A global cinematic campaign unveiling the untouched frontiers of the Red Sea and AlUla. Captured across 25 shoot days utilizing heavy-lift cinema drones and rare anamorphic glass for worldwide broadcast.'
                ],
                'main_image' => 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
                'category_id' => $categoriesMap['cinema-commercials'] ?? null,
                'ViewInHome' => true,
                'color' => '#2dd4bf',
                'emoji' => '🎬',
                'tags' => ['ARRI Alexa 35', 'Anamorphic Glass', 'Drone Cinema', '8K Master', 'Color Grading'],
                'client' => 'Saudi Tourism Authority (STA)',
                'timeline' => '6 أسابيع (6 Weeks)',
                'challenge' => [
                    'ar' => 'تصوير مشاهد في مناطق جغرافية وعرة وشديدة التباين الضوئي بين كثبان الصحراء والشواطئ البحرية في ظروف مناخية صعبة.',
                    'en' => 'Capturing high dynamic range imagery across challenging arid desert sands and reflective marine waters under intense midday sunlight.'
                ],
                'solution' => [
                    'ar' => 'استخدام كاميرات ARRI Alexa 35 بنطاق ديناميكي 17 وقفة، وتجهيز وحدات تصوير متنقلة تعتمد على بطاريات شمسية وطائرات بدون طيار مرخصة.',
                    'en' => 'Deployed ARRI Alexa 35 sensors offering 17 stops of dynamic range paired with custom solar-powered field rigs and certified cinema heavy-lift drones.'
                ],
                'results' => [
                    'ar' => 'حقق الفيلم أكثر من 45 مليون مشاهدة عبر القنوات الرقمية وفاز بالجائزة الذهبية لأفضل إعلان ترويجي سياحي في دبي.',
                    'en' => 'Surpassed 45M+ organic impressions globally and clinched the Dubai Lynx Gold Trophy for Best Tourism Commercial.'
                ],
                'deliverables' => [
                    ['ar' => 'فيلم رئيسي مدة 3 دقائق بدقة 8K Master', 'en' => '3-Minute Master 8K Hero Film'],
                    ['ar' => '10 فواصل إعلانية للشاشات الرقمية 9:16', 'en' => '10 Social Cutdowns (9:16 Vertical UHD)'],
                    ['ar' => 'ألبوم فوتوغرافي عالي الدقة للطباعة الضخمة', 'en' => 'Key Visual Print Billboard Assets']
                ],
                'testimonial' => [
                    'text' => 'ميديا جلو ليست مجرد شركة إنتاج، بل شركاء رؤية حقيقيون ارتقوا بجماليات الفيلم لمستوى يضاهي أفلام ناشيونال جيوغرافيك وهوليوود.',
                    'name' => 'م. طارق الناصر',
                    'role' => 'مدير الاتصال التسويقي العالمي',
                    'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
                ]
            ],
            [
                'title' => [
                    'ar' => 'حملة إطلاق بورشه "إيقاع السرعة"',
                    'en' => 'Porsche "Speed Cadence" Launch Film'
                ],
                'description' => [
                    'ar' => 'إعلان تجاري عالي الحماس تم تصويره في حلبة كورنيش جدة ليلاً باستخدام سيارة تتبع مزودة بذراع إلكتروني (Russian Arm) وإضاءات نيون متزامنة بدقة ملليمترية.',
                    'en' => 'A pulse-pounding automotive commercial shot overnight on the Jeddah Corniche Circuit. Utilizing a precision Russian Arm chase vehicle and synchronized dynamic DMX pixel mapping.'
                ],
                'main_image' => 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
                'category_id' => $categoriesMap['cinema-commercials'] ?? null,
                'ViewInHome' => true,
                'color' => '#f43f5e',
                'emoji' => '🏎️',
                'tags' => ['Automotive', 'Russian Arm', 'High-Speed Tracking', 'Sound Design Dolby', 'Night Shoot'],
                'client' => 'Porsche Middle East',
                'timeline' => '4 أسابيع (4 Weeks)',
                'challenge' => [
                    'ar' => 'التقاط حركة السيارات بسرعات تتجاوز 180 كم/س في ظروف إضاءة ليلية منخفضة للغاية دون فقدان وضوح التفاصيل وتناسق الألوان.',
                    'en' => 'Tracking vehicles at speeds exceeding 180 km/h under low-light night conditions while preserving razor-sharp shadow texture.'
                ],
                'solution' => [
                    'ar' => 'تجهيز كاميرات RED V-Raptor 8K على ذراع جيروسكوبي عالي السرعة، مع شبكة إضاءة ذكية تغطي كامل المسار وتزامن الإطارات مع دوران المحرك.',
                    'en' => 'Equipped RED V-Raptor 8K on a gyro-stabilized flight head with automated track lighting tuned to the vehicle telemetry.'
                ],
                'results' => [
                    'ar' => 'زيادة طلبات الحجز المسبق للموديل الجديد بنسبة 65% خلال الأسبوع الأول من البث، وإشادة دولية بالمستوى البصري من مقر الشركة في شتوتغارت.',
                    'en' => 'Boosted model pre-orders by 65% in the first broadcast week, earning official creative acclaim from Porsche HQ Stuttgart.'
                ],
                'deliverables' => [
                    ['ar' => 'إعلان تلفزيوني 60 ثانية و 30 ثانية', 'en' => '60s & 30s Master TV Spots'],
                    ['ar' => 'مكساج صوتي محيطي Dolby Atmos بمؤثرات المحرك الحقيقية', 'en' => 'Dolby Atmos Spatial Engine Sound Mix'],
                    ['ar' => 'فيلم خلف الكواليس (Behind the Scenes)', 'en' => 'Cinematic Behind The Scenes Documentary']
                ],
                'testimonial' => [
                    'text' => 'الدقة الهندسية والاحترافية التي أظهرها فريق ميديا جلو على المضمار كانت مذهلة بكل المقاييس. النتيجة البصرية تجاوزت تطلعاتنا.',
                    'name' => 'كريستيان ماير',
                    'role' => 'المشرف الإقليمي لعلامة بورشه الشرق الأوسط',
                    'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
                ]
            ],
            [
                'title' => [
                    'ar' => 'الفيلم الوثائقي "صناع الغد" — صندوق الاستثمارات العامة',
                    'en' => '"Architects of Tomorrow" — PIF Docuseries'
                ],
                'description' => [
                    'ar' => 'سلسلة وثائقية ملهمة من 4 حلقات تسلط الضوء على الكوادر الشابة التي تقود مشاريع التحول الرقمي والطاقة النظيفة، تم تصويرها بأسلوب السينما الواقعية (Cinéma Vérité).',
                    'en' => 'A prestige 4-part docuseries profiling the pioneering minds behind sovereign green energy and frontier tech initiatives, captured through immersive Cinéma Vérité lens.'
                ],
                'main_image' => 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85',
                'category_id' => $categoriesMap['documentaries'] ?? null,
                'ViewInHome' => true,
                'color' => '#38bdf8',
                'emoji' => '🎥',
                'tags' => ['Docuseries', 'Interviews', '4K Cinema', 'Color Grading', 'Archive Restoration'],
                'client' => 'Public Investment Fund (PIF)',
                'timeline' => '3 أشهر (3 Months)',
                'challenge' => [
                    'ar' => 'دمج لقطات أرشيفية نادرة تعود لثلاثة عقود مضت مع لقطات حديثة فائقة الدقة 4K مع الحفاظ على وحدة الهوية البصرية ونبرة السرد.',
                    'en' => 'Seamlessly harmonizing 30-year-old archival analog reels with cutting-edge 4K sensor imagery without stylistic dissonance.'
                ],
                'solution' => [
                    'ar' => 'ترميم المواد الأرشيفية بالذكاء الاصطناعي وإعادة تلوينها في استوديوهاتنا لتتكامل بصرياً مع اللقطات الحديثة بسلاسة تامة.',
                    'en' => 'Applied AI neural restoration and master DaVinci tone-matching to bring historical archives to modern cinema fidelity.'
                ],
                'results' => [
                    'ar' => 'عرض المسلسل على كبرى المنصات التلفزيونية الإقليمية ونال تقييم 9.2/10 من النقاد مع انتشار واسع في الأوساط الأكاديمية.',
                    'en' => 'Aired across premier MENA broadcast networks, scoring a 9.2/10 critical rating and featured in university curricula.'
                ],
                'deliverables' => [
                    ['ar' => '4 حلقات وثائقية كاملة مدة كل منها 25 دقيقة', 'en' => '4 Full 25-Minute Broadcast Episodes'],
                    ['ar' => 'موسيقى تصويرية أوركسترالية حصرية', 'en' => 'Original Orchestral Score & Master Stems'],
                    ['ar' => 'كتاب مصور توثيقي للكوادر المشاركة', 'en' => 'Hardcover Coffee Table Editorial Book']
                ],
                'testimonial' => [
                    'text' => 'قدرة ميديا جلو على التقاط المشاعر الإنسانية الصادقة خلف الأرقام والمشاريع الضخمة جعلت هذا العمل خالداً في ذاكرة المشاهدين.',
                    'name' => 'د. منيرة السليمان',
                    'role' => 'المشرفة العامة على السلسلة الوثائقية',
                    'avatar' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
                ]
            ],
            [
                'title' => [
                    'ar' => 'التغطية الحية لقمة الطاقة العالمية — 16 كاميرا وبث فضائي',
                    'en' => 'Global Energy Summit — 16-Cam Live Broadcast'
                ],
                'description' => [
                    'ar' => 'إدارة وإنتاج البث التلفزيوني الحي المباشر لأضخم مؤتمر للطاقة بمشاركة 80 دولة، شملت التغطية كاميرات روبوتية، ترجمة فورية متزامنة، واستوديو تحليلي تفاعلي مع الواقع المعزز (AR).',
                    'en' => 'Full-scale live broadcast engineering for the landmark Global Energy Summit with delegates from 80 nations. Integrated robotic PTZ heads, real-time multilingual feeds, and interactive AR stage elements.'
                ],
                'main_image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85',
                'category_id' => $categoriesMap['live-events'] ?? null,
                'ViewInHome' => true,
                'color' => '#10b981',
                'emoji' => '📡',
                'tags' => ['Live Broadcast', '16 Cameras', 'OB Van', 'Augmented Reality', 'Zero Latency'],
                'client' => 'Aramco & Energy Consortium',
                'timeline' => '5 أيام بث مباشر (5 Days Live)',
                'challenge' => [
                    'ar' => 'إدارة 16 كاميرا متزامنة وبث حي لمدة 10 ساعات يومياً بدون خطأ واحد، مع إرسال إشارات فضائية لـ 45 قناة إخبارية عالمية.',
                    'en' => 'Managing 16 synchronized feeds over 10 consecutive live hours daily with zero latency margin to 45 international broadcast syndicates.'
                ],
                'solution' => [
                    'ar' => 'نشر عربتي بث خارجي بتقنية 4K مع شبكة ألياف ضوئية مزدوجة ونظام تحويل احتياطي فوري بنسبة أمان 100%.',
                    'en' => 'Deployed redundant dual-OB trucks linked via dark fiber rings with automated failover switching ensuring 99.999% uptime.'
                ],
                'results' => [
                    'ar' => 'تسليم بث نقي لـ 120 مليون مشاهد حول العالم دون انقطاع ثانية واحدة، وإشادة واسعة من الوفود الدبلوماسية.',
                    'en' => 'Broadcast reached 120M+ live households worldwide flawlessly, earning formal commendation from diplomatic delegations.'
                ],
                'deliverables' => [
                    ['ar' => 'تغذية بث مباشر عالمية (Clean Feed & Program Feed)', 'en' => 'Clean & Program Satellite Feeds'],
                    ['ar' => 'أكثر من 50 فيديو موجز يومي لمنصات السوشيال ميديا', 'en' => '50+ Rapid-Response Social Cutdowns'],
                    ['ar' => 'أرشيف رقمي كامل مشفر بدقة 4K لكافة الجلسات', 'en' => 'Fully Indexed 4K Master Cloud Archive']
                ],
                'testimonial' => [
                    'text' => 'فريق الهندسة والبث في ميديا جلو تصرفوا كأبطال حقيقيين، هدوء تام تحت الضغط ودقة بث تضاهي تغطيات الأولمبياد الدولية.',
                    'name' => 'م. حازم الغامدي',
                    'role' => 'مدير العمليات التكنولوجية للمؤتمر',
                    'avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
                ]
            ],
            [
                'title' => [
                    'ar' => 'حملة العطور الفاخرة "جوهر الشرق" — تصوير Phantom عالي السرعة',
                    'en' => '"Essence of Orient" Luxury Perfume Cinema Ad'
                ],
                'description' => [
                    'ar' => 'إعلان تلفزيوني فاخر لزجاجة عطر ماسية، تم استخدام كاميرا Phantom Flex4K بسرعة 2000 إطار في الثانية لالتقاط رذاذ العطر وجزيئات الذهب المعلقة مع إضاءة كريستالية متوهجة.',
                    'en' => 'A high-luxury commercial spot for a bespoke diamond-cut flacon. Captured on Phantom Flex4K at 2000fps to immortalize micro-droplet vapor and suspended gold leaf under crystal prism refractions.'
                ],
                'main_image' => 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85',
                'category_id' => $categoriesMap['brand-films'] ?? null,
                'ViewInHome' => true,
                'color' => '#fbbf24',
                'emoji' => '💎',
                'tags' => ['High Speed 2000fps', 'Phantom Flex4K', 'Liquid Simulation', 'Luxury Macro', 'Macro Lens'],
                'client' => 'Royal Oud & Fragrances Paris-Riyadh',
                'timeline' => '3 أسابيع (3 Weeks)',
                'challenge' => [
                    'ar' => 'التقاط حركة رذاذ السائل بدقة مجهرية متناهية دون تعرض الزجاجة للانعكاسات الضوئية المشوشة.',
                    'en' => 'Capturing micro-droplet kinetic trajectory at 2000fps without generating unwanted hot-spot glass reflections.'
                ],
                'solution' => [
                    'ar' => 'بناء منصة استوديو دائرية مانعة للانعكاسات مع فلاتر استقطاب خاصة وإضاءات HMI بقوة 18,000 واط مبردة مائياً.',
                    'en' => 'Built an anti-reflective cylindrical light tent with linear polarizers and water-cooled 18K HMI continuous lighting banks.'
                ],
                'results' => [
                    'ar' => 'نفدت الكمية الأولى من العطر (50,000 زجاجة) خلال 72 ساعة فقط من بدء الحملة الإعلانية على القنوات التلفزيونية والمنصات الرقمية.',
                    'en' => 'The premier run of 50,000 flacons sold out within 72 hours of campaign airing across luxury broadcast networks.'
                ],
                'deliverables' => [
                    ['ar' => 'إعلان سينمائي 45 ثانية للشاشات الفاخرة و IMAX', 'en' => '45s Master IMAX & Luxury Cinema Spot'],
                    ['ar' => 'سلسلة صور ماكرو فائقة الدقة 100 ميجابكسل للإعلانات الطرقية', 'en' => '100MP Billboard Mega-Resolution Stills']
                ],
                'testimonial' => [
                    'text' => 'كل قطرة ظهرت في الإعلان بدت وكأنها لوحة فنية ساحرة. ميديا جلو نقلت قيمة علامتنا التجارية إلى قمة سوق المنتجات الفاخرة.',
                    'name' => 'لوران بونيفوا',
                    'role' => 'المدير الإبداعي — دار رويال عود',
                    'avatar' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
                ]
            ],
            [
                'title' => [
                    'ar' => 'إعلان بنك المستقبل "نبض العملات الرقمية"',
                    'en' => 'Future Bank "Digital Pulse" Commercial'
                ],
                'description' => [
                    'ar' => 'إعلان يدمج بين تصوير الممثلين الواقعي وعوالم ثلاثية الأبعاد خيالية (CGI) تحاكي تدفق المعاملات المالية الفورية بأسلوب السايبربانك الأنيق.',
                    'en' => 'A visual tour-de-force combining live live-action talent with photoreal cyberpunk 3D CGI worlds illustrating instantaneous frictionless fintech transactions.'
                ],
                'main_image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
                'category_id' => $categoriesMap['vfx-post-production'] ?? null,
                'ViewInHome' => true,
                'color' => '#818cf8',
                'emoji' => '⚡',
                'tags' => ['VFX & CGI', 'Green Screen', 'Unreal Engine 5', 'Fintech', 'Motion Graphics'],
                'client' => 'NextGen Digital Bank',
                'timeline' => '5 أسابيع (5 Weeks)',
                'challenge' => [
                    'ar' => 'تصوير الممثلين أمام شاشات LED عملاقة (Virtual Production) بزوايا كاميرا حرة دون حدوث تشويه في حركة المنظور.',
                    'en' => 'Filming talent inside an LED volume (In-Camera VFX) with dynamic camera moves without perspective parallax tearing.'
                ],
                'solution' => [
                    'ar' => 'ربط حركة الكاميرا بمحرك Unreal Engine 5 في الوقت الفعلي مع محاكاة كاملة للإضاءة المحيطة المنعكسة على الممثلين.',
                    'en' => 'Synced sensor tracking with Unreal Engine 5 in real time, projecting dynamic photoreal lighting onto talent interactive geometry.'
                ],
                'results' => [
                    'ar' => 'تخفيض تكاليف التصوير الخارجي بنسبة 40% واكتمال المشروع قبل الموعد بـ 10 أيام مع تسجيل 200 ألف حساب جديد في الأسبوع الأول.',
                    'en' => 'Slashed physical set costs by 40%, wrapping 10 days ahead of schedule while acquiring 200,000 app registrations in week one.'
                ],
                'deliverables' => [
                    ['ar' => 'إعلان 60 ثانية و 15 ثانية للتلفزيون واليوتيوب', 'en' => '60s & 15s Omnichannel Broadcast Spots'],
                    ['ar' => 'حزمة تصاميم متحركة لواجهات التطبيق والموقع', 'en' => 'Dynamic UI/UX Motion Graphics Library']
                ],
                'testimonial' => [
                    'text' => 'الدمج بين الإنتاج الافتراضي والمؤثرات البصرية التي قدمتها ميديا جلو كان مبهراً وجعل بنكنا يبدو سابقاً لعصره بعقد كامل.',
                    'name' => 'أحمد العيسى',
                    'role' => 'رئيس الابتكار والتحول الرقمي',
                    'avatar' => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
                ]
            ]
        ];

        foreach ($projectsData as $pData) {
            Project::updateOrCreate(
                ['title->en' => $pData['title']['en']],
                $pData
            );
        }

        // 4. Testimonials (High-Profile Industry Leaders)
        $testimonialsData = [
            [
                'client_name' => 'د. مروان الشامي',
                'job_title' => 'رئيس قطاع التسويق والاتصال المؤسسي',
                'company_name' => 'مجموعة إعمار — Emaar Group',
                'feedback' => [
                    'ar' => 'العمل مع فريق ميديا جلو كان تجربة استثنائية بكل المقاييس. دقتهم في تنفيذ لقطات الطائرات السينمائية والمعايرة اللونية أعطت مشاريعنا العقارية فخامة تليق باسم إعمار. التزامهم بالمواعيد والاحترافية جعلهم خيارنا الأول دائماً.',
                    'en' => 'Collaborating with Media Glow was a world-class experience. Their mastery of heavy-lift cinema drones and DaVinci color grading elevated our flagship developments to unparalleled prestige. Their punctuality and craftsmanship set them apart.'
                ],
                'rating' => 5,
                'avatar_color' => '#2dd4bf'
            ],
            [
                'client_name' => 'م. فيصل القحطاني',
                'job_title' => 'المشرف العام على الإنتاج الإبداعي',
                'company_name' => 'الهيئة العامة للترفيه — موسم الرياض',
                'feedback' => [
                    'ar' => 'عندما يتعلق الأمر بفعاليات يحضرها مئات الآلاف ويبثها التلفزيون عالمياً، لا مجال لأي نسبة خطأ. ميديا جلو أثبتت جدارة فائقة في إدارة 16 كاميرا حية وعربات البث بدقة متناهية وإخراج حبس أنفاس المشاهدين.',
                    'en' => 'When producing events attended by hundreds of thousands and broadcast live globally, there is zero margin for error. Media Glow proved extraordinary capability orchestrating 16 live camera streams with breathtaking aesthetic precision.'
                ],
                'rating' => 5,
                'avatar_color' => '#38bdf8'
            ],
            [
                'client_name' => 'نورهان السعدني',
                'job_title' => 'مديرة العلامة التجارية الإقليمية',
                'company_name' => 'مرسيدس بنز الشرق الأوسط — Mercedes-Benz',
                'feedback' => [
                    'ar' => 'لقطات السرعة العالية والإضاءة الليلية التي نفذوها لإطلاق سيارتنا الكهربائية الجديدة كانت عملاً فنياً يضاهي هوليوود. تم تسليم النسخة النهائية بكافة التنسيقات قبل موعد الإطلاق بيومين كاملين، نتائج المبيعات تجاوزت خطتنا بنسبة 40%.',
                    'en' => 'The high-speed tracking and surgical night lighting they executed for our flagship EV launch were nothing short of Hollywood cinema. The master deliverables were delivered two days ahead of schedule, driving a 40% sales lift.'
                ],
                'rating' => 5,
                'avatar_color' => '#a855f7'
            ],
            [
                'client_name' => 'كريم عبد العزيز الرشيدي',
                'job_title' => 'منتج تنفيذي ومخرج تلفزيوني',
                'company_name' => 'شبكة قنوات الشرق بلومبرغ — Asharq News',
                'feedback' => [
                    'ar' => 'استوديوهات ميديا جلو تمتلك واحداً من أحدث أساطيل كاميرات ARRI وإضاءات Aputure في الشرق الأوسط. التعامل مع مهندسيهم ومديري التصوير لديهم يعطي راحة بال وثقة تامة بأن المخرج سيحصل على الكادر الذي يحلم به دون تنازلات.',
                    'en' => 'Media Glow studios host one of the most advanced ARRI and Aputure cinema fleets in the Middle East. Working with their DPs and technical gaffers grants total peace of mind that your cinematic vision will be captured without compromise.'
                ],
                'rating' => 5,
                'avatar_color' => '#f59e0b'
            ],
            [
                'client_name' => 'سارة المهندس',
                'job_title' => 'مؤسسة ورئيسة مجلس الإدارة',
                'company_name' => 'ڤيلفيت كوتور باريس — Velvet Haute Couture',
                'feedback' => [
                    'ar' => 'أعادوا اختراع الطريقة التي نعرض بها تصاميمنا الفاخرة. لقطات الماكرو لحرير الأقمشة وتطريز المجوهرات كانت تنبض بالحياة، وحملة الفيديو حققت أعلى نسبة طلبات في تاريخ علامتنا التجارية.',
                    'en' => 'They completely redefined how we present haute couture. Macro textures of raw silk and diamond embroideries came to vivid life, generating the highest conversion spike in our maison history.'
                ],
                'rating' => 5,
                'avatar_color' => '#10b981'
            ]
        ];

        foreach ($testimonialsData as $tData) {
            Testimonial::updateOrCreate(
                ['client_name' => $tData['client_name']],
                $tData
            );
        }

        // 5. Frequently Asked Questions (FAQ)
        $faqsData = [
            [
                'question_ar' => 'ما هي نوعية أسطول الكاميرات والمعدات المستخدمة في تصوير مشاريعكم؟',
                'question_en' => 'What camera fleet and production hardware does Media Glow deploy?',
                'answer_ar' => 'نمتلك أسطولاً سينمائياً داخلياً معتمداً من كبرى استوديوهات هوليوود، يتضمن كاميرات ARRI Alexa 35 و RED V-Raptor XL بدقة 8K، مصحوبة بعدسات أنامورفيك نادرة من Cooke و Zeiss Supreme Prime. كما يتوفر لدينا روبوتات تحريك الكاميرا (Motion Control)، أذرع سيارات تتبع (Russian Arm)، وطائرات بدون طيار مرخصة رسمياً للتصوير الجوي السينمائي.',
                'answer_en' => 'We own a certified premier cinema fleet featuring ARRI Alexa 35 and RED V-Raptor XL 8K systems, paired with master anamorphic glass from Cooke and Zeiss Supreme Primes. Our arsenal includes motion control camera robotics, high-speed Russian Arm chase vehicles, and licensed cinematic heavy-lift drone setups.',
                'sort_order' => 1,
                'is_active' => true
            ],
            [
                'question_ar' => 'كيف تبدأ رحلة العمل والتعاقد معكم لإنتاج إعلان أو فيلم وثائقي؟',
                'question_en' => 'What is the onboarding and contracting roadmap for a new production?',
                'answer_ar' => 'تبدأ العملية بجلسة استكشافية متعمقة (Discovery Session) لفهم أهداف علامتكم التجارية وميزانية العمل، يليها تقديم المفهوم الإبداعي (Creative Pitch) والستوري بورد وتوزيع الميزانية التقديرية. بمجرد توقيع العقد، يتولى منتج تنفيذي مخصص إدارة كافة مراحل ما قبل الإنتاج (Pre-Production)، أيام التصوير (Production)، والمونتاج والتلوين (Post-Production) مع تزويدكم بتقارير دورية مستمرة.',
                'answer_en' => 'We begin with an in-depth Discovery Session to dissect your brand milestones and targets, followed by an executive creative pitch, full storyboarding, and line-item budgeting. Upon contract execution, a dedicated Executive Producer oversees pre-production, principal photography, and post-production with real-time milestone reviews.',
                'sort_order' => 2,
                'is_active' => true
            ],
            [
                'question_ar' => 'ما هي المدة الزمنية المتوقعة من بداية الفكرة وحتى تسليم النسخة النهائية؟',
                'question_en' => 'What is the typical turnaround timeline from concept to final delivery?',
                'answer_ar' => 'تتراوح المدة الزمنية للإعلانات التجارية عالية الجودة بين 3 إلى 5 أسابيع تشمل التحضير والتصوير والمونتاج وتصحيح الألوان. للأفلام الوثائقية والمسلسلات الكبرى تمتد من 6 إلى 12 أسبوعاً. كما نوفر مساراً فائق السرعة (Fast-Track Sprint) للتغطيات الحية والحملات العاجلة يتيح تسليم المواد الأولية خلال 24 إلى 48 ساعة فقط.',
                'answer_en' => 'High-end commercial films typically require 3 to 5 weeks across pre-production, shoot days, editing, and master color grading. Prestige docuseries range from 6 to 12 weeks. We also provide a Fast-Track Sprint for time-sensitive launches and summits delivering highlight cuts within 24 to 48 hours.',
                'sort_order' => 3,
                'is_active' => true
            ],
            [
                'question_ar' => 'هل يحصل العميل على حقوق الملكية الفكرية الكاملة والمواد الخام (RAW)؟',
                'question_en' => 'Do we receive full commercial IP ownership and uncompressed RAW rushes?',
                'answer_ar' => 'نعم، بكل تأكيد. عند سداد الدفعة النهائية للمشروع، تنتقل كافة حقوق الملكية الفكرية وحقوق البث التجاري للعميل بنسبة 100% دون أي رسوم تجديد خفية. كما نوفر خيار تسليم هارد ديسك مشفر يحتوي على كافة اللقطات الخام غير المضغوطة (ProRes 4444 XQ / REDCODE RAW) ومشاريع الصوت الأصلية.',
                'answer_en' => 'Yes, absolutely. Upon final milestone settlement, 100% full commercial broadcast rights and intellectual property transfer to your organization with zero recurrent licensing fees. We also provide encrypted archival drives containing all uncompressed camera RAW rushes (ProRes 4444 XQ / REDCODE RAW) and project audio stems.',
                'sort_order' => 4,
                'is_active' => true
            ],
            [
                'question_ar' => 'هل تقدمون خدمات التصوير والبث المباشر خارج جمهورية مصر العربية؟',
                'question_en' => 'Does Media Glow operate across the GCC and internationally?',
                'answer_ar' => 'نعم، نمتلك مكاتب وشراكات تشغيلية مجهزة في المملكة العربية السعودية (الرياض وجدة) ودولة الإمارات العربية المتحدة (دبي). يمتلك طاقمنا خبرة واسعة في استخراج تصاريح التصوير الحكومية وتنظيم اللوجستيات ونقل المعدات الثقيلة في كافة أنحاء الشرق الأوسط وشمال أفريقيا وأوروبا.',
                'answer_en' => 'Yes, we operate dedicated production hubs in Saudi Arabia (Riyadh & Jeddah) and the United Arab Emirates (Dubai). Our crew possesses deep experience in fast-track governmental filming permits, customs carnets, and international mobile set logistics across MENA and Europe.',
                'sort_order' => 5,
                'is_active' => true
            ],
            [
                'question_ar' => 'ما هي خيارات وشروط السداد المتاحة للمؤسسات والشركات الكبرى؟',
                'question_en' => 'What payment terms and milestone structures are available for enterprises?',
                'answer_ar' => 'نعتمد نظام دفعات مرن مرتبط بالإنجاز (Milestone-based): عادة 40% كدفعة مقدمة لبدء التحضيرات وحجز الطواقم، 30% عند الانتهاء من مرحلة التصوير الميداني، و 30% عند اعتماد النسخة النهائية وقبل تسليم الماستر عالي الدقة. نوفر فواتير ضريبية إلكترونية معتمدة وإمكانية الدفع بالتحويل البنكي الدولي أو الاعتمادات المستندية للجهات الحكومية.',
                'answer_en' => 'We implement an agile milestone-based schedule: typically 40% mobilization advance to lock crew and set builds, 30% post-principal wrap, and 30% upon final master approval. We issue compliant digital tax invoices and support multi-currency bank transfers, letters of credit, and corporate escrow.',
                'sort_order' => 6,
                'is_active' => true
            ]
        ];

        foreach ($faqsData as $fData) {
            FAQ::updateOrCreate(
                ['question_en' => $fData['question_en']],
                $fData
            );
        }

        // 6. Insightful Industry Blogs
        $blogsData = [
            [
                'title' => [
                    'ar' => 'مستقبل السينما الرقمية: كيف تعيد مستشعرات ARRI Alexa 35 تعريف جودة الإعلانات؟',
                    'en' => 'The Future of Cinema: How ARRI Alexa 35 Sensors Redefine Commercial Standards'
                ],
                'description' => [
                    'ar' => 'في هذا المقال التقني المتعمق، يحلل مدير التصوير التنفيذي في ميديا جلو الفارق الجوهري الذي تقدمه تقنية REVEAL Color Science ونطاق التعريض البالغ 17 وقفة، وكيف يمنح العلامات التجارية صوراً تحاكي العين البشرية بدون بهتان أو تشويه في ظروف الإضاءة القاسية.',
                    'en' => 'In this technical breakdown, Media Glow Lead Cinematographer analyzes how the revolutionary REVEAL Color Science and 17 stops of exposure dynamic range empower brands with hyper-organic skin tones and uncompromised highlights even in unforgiving desert lighting.'
                ],
                'media_path' => 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=1200&q=80',
                'media_type' => 'image',
                'loves_count' => 124
            ],
            [
                'title' => [
                    'ar' => 'سيكولوجية الألوان في الإعلانات: لماذا يعتبر تصحيح الألوان HDR استثماراً بيعياً؟',
                    'en' => 'Color Psychology in Advertising: Why Master HDR Color Grading Drives Direct Sales'
                ],
                'description' => [
                    'ar' => 'الألوان ليست مجرد جماليات بصرية، بل هي لغة لاواعية تحفز مشاعر الثقة والفخامة والرغبة في الشراء. نستعرض كيف استطاعت جلسات معايرة الألوان على DaVinci Resolve تحويل مبيعات عملاء السيارات الفاخرة والعطور بنسب تجاوزت 50%.',
                    'en' => 'Color grading is not mere aesthetic decoration; it is a subconscious psychological trigger evoking prestige, luxury, and decisive purchase intent. We explore how tailored DaVinci Resolve color palettes generated 50%+ sales surges in luxury and automotive sectors.'
                ],
                'media_path' => 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
                'media_type' => 'image',
                'loves_count' => 98
            ],
            [
                'title' => [
                    'ar' => 'الإنتاج الافتراضي (Virtual Production): نهاية قيود الاستوديوهات وبداية عصر LED Volumes',
                    'en' => 'Virtual Production Unveiled: Dismantling Physical Limits with Real-Time LED Volumes'
                ],
                'description' => [
                    'ar' => 'كيف يمكن تصوير مشهد شروق الشمس على قمة جبل في سويسرا ومشهد ليلة ماطرة في طوكيو في نفس اليوم ومن داخل نفس الاستوديو؟ قراءة شاملة لتقنيات شاشات الـ LED المتزامنة مع محرك Unreal Engine 5 في استوديوهاتنا الحديثة.',
                    'en' => 'Capturing a Swiss sunrise and a rainy midnight Tokyo alleyway on the exact same shoot day inside the same soundstage. An exhaustive look into Unreal Engine 5 camera tracking and virtual production volumes powering contemporary cinema.'
                ],
                'media_path' => 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80',
                'media_type' => 'image',
                'loves_count' => 176
            ],
            [
                'title' => [
                    'ar' => 'الهندسة الصوتية المكانية Dolby Atmos: العنصر الخفي الذي يجعل إعلانك لا يُنسى',
                    'en' => 'Dolby Atmos Spatial Audio: The Subconscious Element Making Commercials Unforgettable'
                ],
                'description' => [
                    'ar' => 'الصوت يحمل 70% من الشحنة العاطفية لأي عمل سينمائي. نلقي الضوء على كواليس تصميم المؤثرات الصوتية المخصصة (Custom Sound Design) وكيف تجعل المشاهد يشعر وكأنه يجلس داخل قمرة القيادة أو في قلب الحدث.',
                    'en' => 'Acoustics carry 70% of the emotional resonance in narrative cinema. We dive behind the mixing desk to reveal how 7.1.4 Dolby spatial design places audiences directly into the driver seat, crafting deep neuro-sensory connection.'
                ],
                'media_path' => 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
                'media_type' => 'image',
                'loves_count' => 84
            ]
        ];

        foreach ($blogsData as $bData) {
            Blog::updateOrCreate(
                ['title->en' => $bData['title']['en']],
                $bData
            );
        }

        // 7. Contact Info
        ContactInfo::updateOrCreate(
            ['id' => 1],
            [
                'whatsapp_phone' => '+201000123456',
                'whatsapp_description' => 'الخط المباشر للمنتج التنفيذي وفريق الإنتاج الفوري (24/7 VIP Support)',
                'whatsapp_cta_label' => 'محادثة فورية مع المنتج التنفيذي',
                'official_email' => 'producers@mediaglowegypt.com',
                'official_email_description' => 'لإرسال ملخصات المشاريع (Creative Briefs) وطلبات عروض الأسعار الرسمية',
                'sales_phone' => '+201099887766',
                'sales_person' => 'م. حازم ممدوح — مدير علاقات العملاء والشراكات الإستراتيجية',
                'general_manager_phone' => '+201200001122',
                'general_manager_description' => 'مكتب الإدارة العامة والتنسيق الإقليمي (القاهرة والرياض)',
                'company_address' => 'مصر الجديدة، القاهرة — طريق الملك عبد العزيز، حي النفل، الرياض',
                'google_map_location' => 'https://maps.google.com/?q=Media+Glow+Studios',
                'business_hours_json' => json_encode([
                    'weekdays' => 'الأحد — الخميس: 9:00 ص — 7:00 م (KSA & EGY)',
                    'production_desk' => 'خط الطوارئ والإنتاج الميداني متاح على مدار الساعة (24/7)'
                ]),
                'emergency_support' => '+201000123456'
            ]
        );

        // 8. About Page & Milestones
        $aboutPage = AboutPage::first();
        if (!$aboutPage) {
            $aboutPage = new AboutPage();
        }
        $aboutPage->fill([
            'hero' => [
                'tag' => ['ar' => 'استوديو الإنتاج السينمائي الرائد', 'en' => 'Premier Cinema Production House'],
                'title' => ['ar' => 'نصنع لقطات تخلد في ذاكرة العالم', 'en' => 'Crafting Frames That Endure In Memory'],
                'desc' => [
                    'ar' => 'ميديا جلو هو استوديو إنتاج سينمائي متكامل يجمع بين نخبة المخرجين ومديري التصوير العالميين وأحدث أساطيل الكاميرات والعدسات في الشرق الأوسط.',
                    'en' => 'Media Glow is a turnkey cinema production studio combining visionary directors, master cinematographers, and the most advanced camera fleet in the MENA region.'
                ]
            ],
            'story' => [
                'ar' => 'انطلقت ميديا جلو برؤية واحدة: أن تكون الوجهة السينمائية الأولى للعلامات التجارية الطموحة والمؤسسات الكبرى التي تبحث عن الجودة الفائقة دون أدنى تنازل. قمنا بإنتاج أكثر من 140 عملاً سينمائياً وتلفزيونياً حازت على إشادة دولية وجوائز إقليمية مرموقة.',
                'en' => 'Media Glow was founded with a single mission: to become the ultimate cinema destination for ambitious brands and institutions seeking uncompromising visual excellence. We have produced over 140 cinematic and broadcast masterworks celebrated with regional and international accolades.'
            ],
            'vision' => [
                'ar' => 'إعادة صياغة معايير الإنتاج السينمائي الإعلاني في الشرق الأوسط ومنافسة كبرى استوديوهات هوليوود وأوروبا في الإتقان السردي والتقني.',
                'en' => 'To revolutionize commercial cinema standards across the Middle East, rivaling world-class European and Hollywood studios in narrative and technical mastery.'
            ],
            'mission' => [
                'ar' => 'تمكين شركائنا من سرد قصصهم الملهمة بأعلى درجات الإبهار البصري، وتوفير بيئة إنتاجية متكاملة تحت سقف واحد.',
                'en' => 'Empowering our partners to tell their inspiring stories with peerless visual grandeur, backed by end-to-end studio infrastructure under one roof.'
            ],
            'values' => [
                'ar' => ['الكمال البصري', 'الابتكار التقني', 'الالتزام الصارم بالمواعيد', 'الشراكة الإبداعية طويلة الأمد'],
                'en' => ['Visual Perfection', 'Technological Ingenuity', 'Rigorous Punctuality', 'Enduring Creative Partnership']
            ],
            'team_text' => [
                'ar' => 'فريقنا يضم نخبة من مديري التصوير المعتمدين، مهندسي الصوت، محرري الفيديو وخبراء المؤثرات البصرية شغفهم المشترك هو إخراج الكادر المثالي.',
                'en' => 'Our collective comprises certified DPs, master sound designers, narrative editors, and VFX artists united by a relentless passion for the flawless frame.'
            ]
        ]);
        $aboutPage->save();

        // About Timelines
        AboutTimeline::truncate();
        $timelinesData = [
            [
                'year' => '2020',
                'title' => ['ar' => 'التأسيس والانطلاق', 'en' => 'Foundation & Genesis'],
                'description' => [
                    'ar' => 'تأسيس استوديو ميديا جلو في القاهرة وبدء أولى الشراكات مع كبرى الشركات الإقليمية.',
                    'en' => 'Establishment of Media Glow studios in Cairo, forging inaugural alliances with major regional brands.'
                ],
                'order_index' => 1
            ],
            [
                'year' => '2022',
                'title' => ['ar' => 'توسيع أسطول الكاميرات', 'en' => 'Cinema Fleet Expansion'],
                'description' => [
                    'ar' => 'الاستثمار في أحدث كاميرات ARRI و RED وعدسات الأنامورفيك وتجهيز مختبر البوست برودكشن.',
                    'en' => 'Acquisition of ARRI & RED camera packages, master anamorphic sets, and dedicated post-production suites.'
                ],
                'order_index' => 2
            ],
            [
                'year' => '2024',
                'title' => ['ar' => 'التوسع الإقليمي في الرياض ودبي', 'en' => 'Regional Expansion to GCC'],
                'description' => [
                    'ar' => 'افتتاح مكتب العمليات الميدانية في الرياض لتغطية الفعاليات والمشاريع الكبرى في المملكة.',
                    'en' => 'Launch of the Riyadh operations hub, orchestrating mega-scale summits and national campaigns in KSA.'
                ],
                'order_index' => 3
            ],
            [
                'year' => '2026',
                'title' => ['ar' => 'عصر الإنتاج الافتراضي 8K', 'en' => 'The 8K Virtual Production Era'],
                'description' => [
                    'ar' => 'إطلاق استوديو الإنتاج الافتراضي (LED Volume) والمكساج المحيطي Dolby Atmos 7.1.4.',
                    'en' => 'Deployment of real-time LED virtual production volume and certified Dolby Atmos 7.1.4 spatial mastering.'
                ],
                'order_index' => 4
            ]
        ];

        foreach ($timelinesData as $tl) {
            AboutTimeline::create($tl);
        }

        // 9. Page Contents for Frontend View Overrides
        PageContent::updateOrCreate(
            ['page_name' => 'home'],
            ['content' => [
                'hero' => [
                    'award' => ['ar' => 'استوديو الإنتاج السينمائي الأول 2026', 'en' => '#1 CINEMATIC PRODUCTION STUDIO 2026'],
                    'title1' => ['ar' => 'نصنع لقطات', 'en' => 'CRAFTING CINEMA'],
                    'title2' => ['ar' => 'تخلد في الذاكرة', 'en' => 'THAT REDEFINES REALITY'],
                    'subtitle' => [
                        'ar' => 'استوديو إنتاج سينمائي متكامل. نمتلك أحدث أساطيل كاميرات ARRI & RED وعدسات أنامورفيك عالمية لصناعة إعلانات وأفلام وثائقية بمستوى هوليوود.',
                        'en' => 'Full-spectrum cinema production house. Deploying master ARRI & RED 8K fleets and anamorphic glass to engineer iconic commercials and prestige documentaries.'
                    ],
                    'cta_primary' => ['ar' => 'استكشف أعمالنا', 'en' => 'Explore Portfolio'],
                    'cta_secondary' => ['ar' => 'احجز استشارة إنتاجية', 'en' => 'Start a Project']
                ],
                'stats' => [
                    ['val' => '140+', 'lbl' => ['ar' => 'عملاً سينمائياً منجزاً', 'en' => 'Master Productions']],
                    ['val' => '8K', 'lbl' => ['ar' => 'دقة تصوير ومعالجة خام', 'en' => 'Cinema RAW Resolution']],
                    ['val' => '18', 'lbl' => ['ar' => 'جائزة إقليمية ودولية', 'en' => 'Industry Trophies']],
                    ['val' => '99.4%', 'lbl' => ['ar' => 'نسبة رضا واعتماد العملاء', 'en' => 'Client Retention Rate']]
                ]
            ]]
        );

        PageContent::updateOrCreate(
            ['page_name' => 'services'],
            ['content' => [
                'hero' => [
                    'tag' => ['ar' => 'قدرات استوديو ميديا جلو', 'en' => 'STUDIO CAPABILITIES'],
                    'title' => ['ar' => 'منظومة إنتاجية متكاملة تحت سقف واحد', 'en' => 'End-to-End Cinema Engineering Under One Roof'],
                    'desc' => [
                        'ar' => 'نجمع بين الإبداع الفني الصادق وأحدث التجهيزات التقنية العالمية لنقدم لعلامتك التجارية أعمالاً تخطف الأنظار وترسخ مكانتك في السوق.',
                        'en' => 'Bridging profound narrative artistry with premier global technology to deliver iconic cinematic work that cements brand prestige.'
                    ]
                ]
            ]]
        );

        PageContent::updateOrCreate(
            ['page_name' => 'portfolio'],
            ['content' => [
                'hero' => [
                    'tag' => ['ar' => 'أرشيف الأعمال المختارة', 'en' => 'CURATED ARCHIVE'],
                    'title' => ['ar' => 'تحف سينمائية صُنعت لتلهم الملايين', 'en' => 'Cinematic Masterpieces Engineered to Inspire Millions'],
                    'desc' => [
                        'ar' => 'جولة في باقة من أبرز إعلاناتنا وأفلامنا الوثائقية وتغطياتنا الحية التي نالت جوائز إقليمية وحققت أرقاماً قياسية لشركائنا.',
                        'en' => 'An exclusive tour of our award-winning commercials, documentaries, and mega-event broadcasts driving record impact for regional leaders.'
                    ]
                ]
            ]]
        );

        PageContent::updateOrCreate(
            ['page_name' => 'blogs'],
            ['content' => [
                'hero' => [
                    'tag' => ['ar' => 'رؤى وأسرار الصناعة', 'en' => 'CINEMA INSIGHTS'],
                    'title' => ['ar' => 'مقالات معمقة من كواليس صناع السينما', 'en' => 'Deep Perspectives from the Master Cinematographers'],
                    'desc' => [
                        'ar' => 'أسرار الإضاءة السينمائية، فلسفة تصحيح الألوان، وأحدث تقنيات الإنتاج الافتراضي من كواليس استوديو ميديا جلو.',
                        'en' => 'Lighting architecture, color theory psychology, and frontier virtual production insights straight from Media Glow soundstages.'
                    ]
                ]
            ]]
        );

        PageContent::updateOrCreate(
            ['page_name' => 'footer'],
            ['content' => [
                'tagline' => ['ar' => 'استوديو الإنتاج السينمائي والإعلاني الرائد في الشرق الأوسط', 'en' => 'Premier Commercial & Cinema Production Studio in MENA'],
                'address' => ['ar' => 'مصر الجديدة، القاهرة — حي النفل، طريق الملك عبد العزيز، الرياض', 'en' => 'Heliopolis, Cairo — Al-Nafl, King Abdulaziz Road, Riyadh'],
                'email' => 'producers@mediaglowegypt.com',
                'phone' => '+201000123456',
                'copy' => ['ar' => '© 2026 ميديا جلو ستوديو. جميع الحقوق الفكرية والإنتاجية محفوظة.', 'en' => '© 2026 Media Glow Studio. All intellectual and cinematic rights reserved.']
            ]]
        );
    }
}
