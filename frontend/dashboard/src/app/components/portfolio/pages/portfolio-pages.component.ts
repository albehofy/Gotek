import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ToastService } from '../../../services/toast.service';

const PRESET_ICONS = [
  'fa-solid fa-film',
  'fa-solid fa-palette',
  'fa-solid fa-chart-line',
  'fa-solid fa-video',
  'fa-solid fa-camera',
  'fa-solid fa-bullhorn',
  'fa-solid fa-code',
  'fa-solid fa-wand-magic-sparkles',
  'fa-solid fa-clapperboard',
  'fa-solid fa-crown',
  'fa-solid fa-rocket',
  'fa-solid fa-laptop-code'
];

@Component({
  selector: 'app-portfolio-pages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio-pages.component.html',
  styleUrls: ['./portfolio-pages.component.css']
})
export class PortfolioPagesComponent implements OnInit {
  private apiService = inject(ApiService);
  private toastService = inject(ToastService);

  activeSection = 'home';
  loading = false;
  saving = false;
  presetIcons = PRESET_ICONS;

  pagesData: { [key: string]: any } = {
    home: {
      hero: {
        award_badge: { en: '★ PREMIER CINEMATIC PRODUCTION STUDIO 2026', ar: '★ استوديو إنتاج إعلامي وسينمائي متكامل' },
        tag: { en: 'Cinematic Film & Brand Studio', ar: 'استوديو الإنتاج المرئي والإعلاني' },
        title1: { en: 'We Craft Cinematic', ar: 'نصنع أفلاماً وتجارب بصرية' },
        title2: { en: 'Visuals That Resonate', ar: 'تُخلّد مكانة علامتك التجارية' },
        subtitle: { en: 'A premier cinematic and digital production studio leading major TVCs, brand films, and visual identities.', ar: 'استوديو إنتاج سينمائي ورقمي متكامل يقود الحملات الكبرى، الأفلام الإعلانية، والهويات البصرية الرائدة للشركات الطموحة في مصر والشرق الأوسط.' },
        btn1: { en: 'Start Your Project Now', ar: 'ابدأ مشروعك الآن' },
        reel_btn: { en: 'Watch Showreel', ar: 'مشاهدة الشوريل' },
        reel_badge: { en: '4K CINEMATIC REEL', ar: '4K CINEMATIC REEL' },
        showreel_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        showreel_poster: '/assets/hero-visual-premium.png'
      },
      stats: {
        stat1_num: '350+',
        stat1_label: { ar: 'مشروع تم إنجازه', en: 'Completed Projects' },
        stat2_num: '120+',
        stat2_label: { ar: 'فيلم إعلاني وتلفزيوني', en: 'Commercials & TVCs' },
        stat3_num: '15+',
        stat3_label: { ar: 'جائزة وتكريم إبداعي', en: 'Industry Awards' },
        stat4_num: '99%',
        stat4_label: { ar: 'نسبة رضا وثقة العملاء', en: 'Client Satisfaction' }
      },
      partners: {
        caption: { ar: 'شركاء النجاح والعلامات التي وضعت ثقتها فينا', en: 'Trusted by visionary brands across the Middle East' },
        brands: [
          { name: 'QIRMIZ', logo: '' },
          { name: 'AL NOOR', logo: '' },
          { name: 'TAKAMOL', logo: '' },
          { name: 'NILEWAVE', logo: '' },
          { name: 'ORBITA', logo: '' },
          { name: 'LUMINA', logo: '' }
        ]
      },
      pillars: [
        {
          index: '01',
          icon_type: 'icon',
          icon: 'fa-solid fa-film',
          title: { ar: 'الإنتاج السينمائي والإعلاني', en: 'Cinematic & Commercial Film' },
          desc: { ar: 'تصوير سينمائي بأعلى معايير 4K/8K، إعلانات تلفزيونية، وأفلام وثائقية وتجارية تحبس الأنفاس.', en: 'High-end 4K/8K cinematography, TVCs, and documentaries.' },
          btn_text: { ar: 'استكشف الخدمة', en: 'Explore Service' },
          url: '/services'
        },
        {
          index: '02',
          icon_type: 'icon',
          icon: 'fa-solid fa-palette',
          title: { ar: 'الهوية البصرية والإخراج الإبداعي', en: 'Brand Identity & Art Direction' },
          desc: { ar: 'بناء هويات بصرية أيقونية وتوجيه فني كامل يمنح علامتك تميزاً وحضوراً استثنائياً.', en: 'Iconic visual branding and comprehensive art direction.' },
          btn_text: { ar: 'استكشف الخدمة', en: 'Explore Service' },
          url: '/services'
        },
        {
          index: '03',
          icon_type: 'icon',
          icon: 'fa-solid fa-chart-line',
          title: { ar: 'الحملات الرقمية والتسويق المتكامل', en: 'Digital Campaigns & Growth' },
          desc: { ar: 'استراتيجيات إعلانية هجومية وإدارة حملات مدروسة تحقق أعلى عائد استثماري ونمو فعلي.', en: 'Performance-driven advertising and media campaigns.' },
          btn_text: { ar: 'استكشف الخدمة', en: 'Explore Service' },
          url: '/services'
        },
        {
          index: '04',
          icon_type: 'icon',
          icon: 'fa-solid fa-video',
          title: { ar: 'خدمات الإنتاج وتنظيم الفعاليات', en: 'Production Gear & Live Coverage' },
          desc: { ar: 'تأجير معدات التصوير الاحترافية، توفير أطقم العمل، وبث وتغطية الفعاليات الكبرى.', en: 'Cinema gear rental, field crews, and live multi-cam broadcasting.' },
          btn_text: { ar: 'استكشف الخدمة', en: 'Explore Service' },
          url: '/services'
        }
      ],
      process: {
        eyebrow: { ar: 'منهجية الإنتاج', en: 'Our Methodology' },
        title: { ar: 'من الفكرة الأولى حتى الشاشة الكبرى', en: 'From Concept to the Big Screen' },
        steps: [
          {
            num: '01',
            title: { ar: 'الاستكشاف والسيناريو', en: 'Discovery & Script' },
            desc: { ar: 'دراسة عميقة للرسالة والجمهور، وبناء المعالجة الدرامية والقصة المصورة بدقة.', en: 'In-depth message & audience research, dramatic treatment and storyboard.' }
          },
          {
            num: '02',
            title: { ar: 'ما قبل الإنتاج والمعاينة', en: 'Pre-Production & Casting' },
            desc: { ar: 'معاينة مواقع التصوير، اختيار الممثلين، وتجهيز خطة الإضاءة ومعدات السينما.', en: 'Location scouting, casting, lighting design, and gear prep.' }
          },
          {
            num: '03',
            title: { ar: 'التصوير والتنفيذ الفني', en: 'Principal Photography' },
            desc: { ar: 'أيام تصوير بإشراف مخرجين ومصوري سينما محترفين وبأحدث كاميرات ARRI وRED.', en: 'Shooting days led by top directors using cinema ARRI/RED cameras.' }
          },
          {
            num: '04',
            title: { ar: 'ما بعد الإنتاج والإطلاق', en: 'Post-Production & Mastering' },
            desc: { ar: 'المونتاج، تصحيح الألوان (Color Grading)، المؤثرات البصرية، والهندسة الصوتية.', en: 'Editing, color grading, VFX, sound design, and master delivery.' }
          }
        ]
      },
      testi: {
        quote: { ar: 'ميديا جلو يمتلكون رؤية سينمائية نادرة في المنطقة، الإنتاج كان بمستوى يفوق التوقعات ووضع علامتنا في مقدمة المنافسين.', en: 'Media Glow possesses rare cinematic vision; the production exceeded expectations.' },
        name: { ar: 'سارة المصري', en: 'Sarah Al-Masri' },
        role: { ar: 'المدير التنفيذي، مقهى قِرمز الفاخر', en: 'CEO, Qirmiz Luxury Roastery' }
      },
      cta: {
        eyebrow: { ar: 'هل أنت جاهز للإنتاج القادم؟', en: 'Ready for Next Production?' },
        title: { ar: 'دعنا نصنع لعلامتك عملاً لا يُنسى', en: 'Let Us Craft An Unforgettable Work' },
        sub: { ar: 'تحدث مباشرة مع فريق الإنتاج والإخراج لمناقشة فكرة مشروعك وتقدير الميزانية.', en: 'Speak directly with our directors and producers to bring your vision to life.' },
        btn: { ar: 'احجز جلسة نقاش الإنتاج', en: 'Book Production Session' }
      }
    },
    navigation: {
      brand_name: { ar: 'ميديا جلو', en: 'Media Glow' },
      studio_badge: 'STUDIO',
      links: {
        home: { ar: 'الرئيسية', en: 'Home' },
        services: { ar: 'خدمات الإنتاج', en: 'Production' },
        work: { ar: 'الأعمال المختارة', en: 'Selected Works' },
        process: { ar: 'مراحل العمل', en: 'Workflow' },
        about: { ar: 'عن الاستوديو', en: 'About Studio' },
        blogs: { ar: 'الرؤى والمدونة', en: 'Insights' },
        contact: { ar: 'تواصل معنا', en: 'Contact' }
      },
      cta_btn: { ar: 'ابدأ مشروعك', en: 'Start Project' }
    },
    about: {
      hero: {
        eyebrow: { ar: 'عن الاستوديو', en: 'About Studio' },
        title1: { ar: 'نبني علامات تجارية', en: 'We Build Brands' },
        title2: { ar: 'تترك أثراً حقيقياً', en: 'That Make An Impact' },
        sub: { ar: 'ميديا جلو استوديو إنتاج وتسويق رقمي يقود الحملات الكبرى، الأفلام الإعلانية، والهويات البصرية الرائدة.', en: 'Media Glow is a premier cinematic and digital production agency.' }
      },
      principles: [
        {
          num: '01',
          title: { ar: 'الوضوح التام', en: 'Total Clarity' },
          desc: { ar: 'لا تعقيد ولا مصطلحات مبهمة — بنشاركك كل خطوة وخطة عمل بوضوح وشفافية.', en: 'No jargon or guesswork — we share every step, milestone, and metric with complete transparency.' }
        },
        {
          num: '02',
          title: { ar: 'التركيز على العائد', en: 'ROI Driven' },
          desc: { ar: 'هدفنا مش مجرد أرقام وإعجابات، هدفنا زيادة مبيعاتك ونمو علامتك في السوق.', en: 'Our goal is not vanity likes, but tangible customer growth and bottom-line revenue.' }
        },
        {
          num: '03',
          title: { ar: 'حرفية التفاصيل', en: 'Craft in Detail' },
          desc: { ar: 'من الخطوط والألوان حتى سرعة تحميل الكود، كل تفصيلة معمولة بعناية.', en: 'From typography and palette to page speed and code architecture, everything is polished.' }
        }
      ]
    },
    services: {
      hero: {
        eyebrow: { ar: 'ماذا نقدّم', en: 'What We Deliver' },
        title: { ar: 'ركائز الإنتاج الإبداعي', en: 'Production Pillars' },
        desc: { ar: 'من الإنتاج السينمائي الضخم وحتى الحملات الرقمية الدقيقة، نقدم حلولاً متكاملة بدون وسطاء.', en: 'From large-scale cinema production to hyper-targeted digital campaigns, we deliver end-to-end solutions.' }
      }
    },
    portfolio: {
      hero: {
        eyebrow: { ar: 'أعمالنا المختارة', en: 'Selected Works' },
        title: { ar: 'إنتاجات تتحدث عن نفسها', en: 'Productions That Speak For Themselves' },
        desc: { ar: 'نستعرض جانباً من أحدث الأفلام، الإعلانات، والهويات البصرية التي قمنا بإنتاجها وإخراجها لشركائنا.', en: 'A curated showcase of recent commercials, brand films, and visual identities.' }
      }
    },
    blogs: {
      hero: {
        tag: { ar: 'الرؤى والمدونة', en: 'Insights & Knowledge' },
        title: { ar: 'مقالات وأسرار صناعة السينما والتسويق', en: 'Cinema Production & Marketing Insights' },
        desc: { ar: 'أحدث التحليلات والدروس المستفادة في عالم صناعة المحتوى البصري الفاخر وبناء البراندات.', en: 'The latest lessons and strategies in luxury media production and brand growth.' }
      }
    },
    contact: {
      hero: {
        eyebrow: { ar: 'تواصل مع الاستوديو', en: 'Contact Our Studio' },
        title: { ar: 'دعنا نصنع لعلامتك عملاً لا يُنسى', en: 'Let Us Craft An Unforgettable Work' },
        desc: { ar: 'تحدث مباشرة مع فريق الإنتاج والإخراج لمناقشة فكرة مشروعك وتقدير الميزانية وجدول التنفيذ.', en: 'Speak directly with our directors and producers to bring your project to life.' }
      },
      email: 'hello@mediaglowegypt.com',
      phone: '+20 100 000 0000',
      location: { ar: 'القاهرة • الرياض • دبي', en: 'Cairo • Riyadh • Dubai' },
      hours: { ar: 'الأحد – الخميس: 9:00 ص – 6:00 م', en: 'Sun – Thu: 9:00 AM – 6:00 PM' }
    },
    footer: {
      desc: { ar: 'استوديو متكامل لإنتاج الأفلام، الإعلانات، والهويات البصرية الفاخرة للعلامات الرائدة في الشرق الأوسط.', en: 'Premier studio for cinema, commercials, and luxury brand identities.' },
      email: 'hello@mediaglowegypt.com',
      phone: '+20 100 000 0000',
      address: { ar: 'القاهرة • الرياض • دبي', en: 'Cairo • Riyadh • Dubai' },
      socials: {
        whatsapp: 'https://wa.me/201000000000',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com'
      },
      copy: { ar: '© 2026 ميديا جلو للإنتاج الإعلامي. جميع الحقوق محفوظة.', en: '© 2026 Media Glow Media Production. All rights reserved.' },
      made: { ar: 'إنتاج سينمائي بمعايير عالمية', en: 'Cinematic Production of Global Standards' }
    }
  };

  sections = [
    { id: 'home', icon: 'fa-solid fa-house', labelAr: 'الصفحة الرئيسية والشوريل والركائز (4 Pillars)', labelEn: 'Home, Showreel & 4 Pillars' },
    { id: 'navigation', icon: 'fa-solid fa-compass', labelAr: 'شريط التنقل والترويسة (Header & Nav)', labelEn: 'Header & Navigation' },
    { id: 'about', icon: 'fa-solid fa-building-user', labelAr: 'صفحة عن الوكالة (About Page)', labelEn: 'About Page' },
    { id: 'services', icon: 'fa-solid fa-toolbox', labelAr: 'صفحة دليل الخدمات (Services Page)', labelEn: 'Services Page' },
    { id: 'portfolio', icon: 'fa-solid fa-diagram-project', labelAr: 'صفحة معرض الأعمال (Portfolio)', labelEn: 'Portfolio Page' },
    { id: 'blogs', icon: 'fa-solid fa-newspaper', labelAr: 'صفحة المقالات (Blogs Page)', labelEn: 'Blogs Page' },
    { id: 'contact', icon: 'fa-solid fa-headset', labelAr: 'صفحة التواصل والبيانات (Contact Info)', labelEn: 'Contact Page' },
    { id: 'footer', icon: 'fa-solid fa-sliders', labelAr: 'تذييل الموقع والمقرات (Footer & Socials)', labelEn: 'Footer Content' }
  ];

  ngOnInit() {
    this.loadCurrentPageData(this.activeSection);
  }

  setSection(sectionId: string) {
    this.activeSection = sectionId;
    this.loadCurrentPageData(sectionId);
  }

  loadCurrentPageData(page: string) {
    this.loading = true;
    this.apiService.getPageContent(page).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (res && res.data && typeof res.data === 'object' && Object.keys(res.data).length > 0) {
          this.mergeData(page, res.data);
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  private mergeData(page: string, incoming: any) {
    if (!incoming || typeof incoming !== 'object') return;
    const current = this.pagesData[page] || {};
    this.deepMerge(current, incoming);
    this.pagesData[page] = current;
  }

  private deepMerge(target: any, source: any) {
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object && !Array.isArray(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        this.deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  savePageData(page: string) {
    this.saving = true;
    this.apiService.updatePageContent(page, this.pagesData[page]).subscribe({
      next: () => {
        this.saving = false;
        this.toastService.success(`تم حفظ بيانات قسم (${this.getSectionLabel(page)}) بنجاح!`);
      },
      error: () => {
        this.saving = false;
        this.toastService.error(`حدث خطأ أثناء حفظ بيانات قسم ${page}`);
      }
    });
  }

  getSectionLabel(id: string): string {
    const s = this.sections.find(x => x.id === id);
    return s ? s.labelAr : id;
  }

  setPillarIconType(pillar: any, type: 'icon' | 'image') {
    pillar.icon_type = type;
    if (type === 'icon' && (!pillar.icon || pillar.icon.startsWith('http') || pillar.icon.includes('/'))) {
      pillar.icon = 'fa-solid fa-film';
    } else if (type === 'image' && (!pillar.icon || !pillar.icon.includes('/'))) {
      pillar.icon = '/assets/media-glow-icon.png';
    }
  }

  addBrandPartner() {
    if (!this.pagesData['home'].partners) {
      this.pagesData['home'].partners = { caption: { ar: '', en: '' }, brands: [] };
    }
    this.pagesData['home'].partners.brands.push({ name: 'علامة جديدة', logo: '' });
  }

  removeBrandPartner(index: number) {
    this.pagesData['home'].partners.brands.splice(index, 1);
  }

  isImageUrl(val: string): boolean {
    if (!val) return false;
    return val.startsWith('http://') || val.startsWith('https://') || val.startsWith('/') || val.startsWith('data:') || /\.(png|jpg|jpeg|svg|webp|gif)$/i.test(val);
  }
}
