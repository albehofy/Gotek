import { Component, OnInit, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-controller-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './controller-dashboard.component.html',
  styleUrl: './controller-dashboard.component.css'
})
export class ControllerDashboardComponent implements OnInit {
  router = inject(Router);
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);

  sidebarOpen = false;
  activeTab = 'overview';
  activeDropdown: string | null = null;
  websiteMenuOpen = true;

  // FormGroups
  projectForm!: FormGroup;
  serviceForm!: FormGroup;
  blogForm!: FormGroup;
  categoryForm!: FormGroup;
  faqForm!: FormGroup;
  testimonialForm!: FormGroup;
  contactForm!: FormGroup;

  // Data lists
  projects: any[] = [];
  categories: any[] = [];
  servicesList: any[] = [];
  blogs: any[] = [];
  faqs: any[] = [];
  testimonials: any[] = [];
  inquiries: any[] = [];

  // Form visibility states
  showProjectForm = false;
  showServiceForm = false;
  showBlogForm = false;
  showCategoryForm = false;
  showFaqForm = false;
  showTestimonialForm = false;

  // Edit states
  isEditingProject = false;
  currentProjectId: string | null = null;
  isEditingService = false;
  currentServiceId: string | null = null;
  isEditingBlog = false;
  currentBlogId: string | null = null;
  isEditingCategory = false;
  currentCategoryId: string | null = null;
  isEditingFaq = false;
  currentFaqId: string | null = null;
  isEditingTestimonial = false;
  currentTestimonialId: string | null = null;

  // Loading states
  loadingProject = false;
  loadingService = false;
  loadingBlog = false;
  loadingCategory = false;
  loadingFaq = false;
  loadingTestimonial = false;
  loadingInfo = false;
  infoMessage = '';

  // File variables
  projectImageFile: File | null = null;
  projectImagePreview: string | null = null;
  categoryImageFile: File | null = null;
  categoryImagePreview: string | null = null;
  blogImageFile: File | null = null;
  blogImagePreview: string | null = null;

  // Overview stats
  overviewStats = {
    projects: 0,
    services: 0,
    testimonials: 0,
    inquiries: 0
  };
  recentProjects: any[] = [];
  projectsChartData: any[] = [];
  inquiriesChartData: any[] = [];

  // Legacy Section Data
  aboutData: any = {
    content: {
      hero: { en: { label: '', title1: '', desc: '' }, ar: { label: '', title1: '', desc: '' } },
      story: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } },
      vision: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } },
      mission: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } },
      values: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } },
      team_text: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } }
    },
    timeline: []
  };
  isSavingAbout = false;

  pagesData: { [key: string]: any } = {
    home: {
      hero: {
        award_badge: { ar: '★ استوديو إنتاج سينمائي ورقمي رائد — القاهرة · الرياض · دبي', en: '★ PREMIER FILM & MEDIA PRODUCTION STUDIO — CAIRO · RIYADH · DUBAI' },
        title1: { ar: 'نصنع أفلاماً وتجارب بصرية', en: 'We Produce Cinematic Films' },
        title2: { ar: 'تُخلّد مكانة علامتك التجارية', en: '& Iconic Brand Experiences' },
        subtitle: {
          ar: 'استوديو إنتاج سينمائي ورقمي متكامل يقود الحملات الكبرى، الأفلام الإعلانية، والهويات البصرية الرائدة للشركات الطموحة في الشرق الأوسط.',
          en: 'Full-service production house delivering commercial films, iconic visual systems, and high-impact digital campaigns for market leaders across the region.'
        },
        btn1: { ar: 'احجز استشارة الإنتاج', en: 'Schedule Production Discovery' },
        reel_btn: { ar: 'عرض الإعلانات والأفلام 2026', en: 'Watch 2026 Showreel' },
        showreel_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        showreel_poster: '/assets/media-glow-card.jpg'
      },
      stats: {
        stat1_num: '180+',
        stat1_label: { ar: 'فيلم وحملة إعلانية منجزة', en: 'Films & Commercial Campaigns' },
        stat2_num: '99.4%',
        stat2_label: { ar: 'نسبة رضا واحتفاظ الشركاء', en: 'Partner Retention & CSAT' },
        stat3_num: '8.4X',
        stat3_label: { ar: 'متوسط مضاعفة العائد على الإنفاق ROAS', en: 'Average ROAS Multiplier' },
        stat4_num: '14',
        stat4_label: { ar: 'جوائز إخراج وتميز بصري إقليمية', en: 'Regional Creative & Film Awards' }
      },
      services_bento: {
        eyebrow: { ar: 'تخصصات الإنتاج والاستوديو', en: 'CAPABILITIES & STUDIO DISCIPLINES' },
        title: { ar: 'منظومة إنتاج رقمية وسينمائية متكاملة', en: 'Engineered For Cinematic Dominance' },
        sub: { ar: 'نجمع بين أحدث كاميرات السينما العالمية، والرؤى الإخراجية الاستثنائية، واستراتيجيات التوزيع الرقمي عالي التأثير.', en: 'Fusing Hollywood-grade camera packages with visionary direction and conversion science.' },
        s1_title: { ar: 'الأفلام التجارية والإعلانات السينمائية', en: 'Commercial Films & TVCs' },
        s1_desc: { ar: 'إنتاج إعلانات تلفزيونية ومواد سينمائية متكاملة بكاميرات ARRI Alexa 35 وإضاءات هوليوود وتصحيح ألوان دقيق.', en: 'Masterful commercial films shot on ARRI Alexa 35 and 8K sensor packages with high-end color grading.' },
        s2_title: { ar: 'هندسة الهوية البصرية والعلامة', en: 'Brand Identity Architecture' },
        s2_desc: { ar: 'بناء أنظمة بصرية استثنائية وأدلة إرشادية متكاملة تضمن تميز علامتك وهيمنتها السوقية.', en: 'Comprehensive design guidelines and iconic visual systems built to command distinction.' },
        s3_title: { ar: 'حملات النمو والتسويق الرقمي', en: 'Growth Engines & Performance Ads' },
        s3_desc: { ar: 'إدارة وتوجيه ميزانيات الإعلانات الرقمية على منصات Meta و Google لتحقيق أعلى عائد استثماري.', en: 'Data-driven performance media buying engineered for compounding return on ad spend.' },
        s4_title: { ar: 'استوديوهات ومعدات التصوير الحية', en: 'Studio Production & Technical Fleet' },
        s4_desc: { ar: 'مساحات تصوير عازلة للصوت، أطقم عدسات سينمائية Master Anamorphic، ووحدات بث حي متعدد الكاميرات.', en: 'Dedicated soundstages, specialized anamorphic glass, and certified live multi-cam broadcast trucks.' }
      },
      workflow: {
        eyebrow: { ar: 'منهجية العمل والإنتاج', en: 'OUR PRODUCTION METHODOLOGY' },
        title: { ar: 'كيف نحوّل الرؤية إلى إنتاج استثنائي', en: 'From Conceptual Spark To Cinematic Reality' },
        s1_title: { ar: 'الاستكشاف والمعالجة الفكرية', en: 'Discovery & Concept Treatment' },
        s1_desc: { ar: 'تحليل دقيق للعلامة التجارية وكتابة السيناريو ورسم الـ Storyboard وتحديد الهوية البصرية للفيلم.', en: 'Deep dive into audience psychology, creative treatments, storyboard development, and narrative arc.' },
        s2_title: { ar: 'التخطيط وإدارة الإنتاج', en: 'Pre-Production & Logistics' },
        s2_desc: { ar: 'معاينة مواقع التصوير، اختيار الممثلين، استخراج التصاريح، وتجهيز كاميرات ARRI وإضاءات السينما.', en: 'Scouting locations, talent casting, safety permits, ARRI camera fleet preparation, and production design.' },
        s3_title: { ar: 'التصوير السينمائي الميداني', en: 'Principal Photography' },
        s3_desc: { ar: 'تنفيذ التصوير بإدارة مخرجين ومصوري سينما محترفين مع رصد دقيق لكل زاوية وكادر وإضاءة.', en: 'Executing on set with seasoned directors, precision lighting setups, camera cranes, and sound recording.' },
        s4_title: { ar: 'المونتاج والمكساج وتصحيح الألوان', en: 'Post-Production & Hollywood Finish' },
        s4_desc: { ar: 'مونتاج سينمائي، تصحيح ألوان احترافي DaVinci Resolve، ومكساج صوتي محيطي Dolby Atmos.', en: 'Precision editorial cut, DaVinci Resolve color mastering, VFX motion, and Dolby Atmos sound mastering.' }
      },
      cta: {
        eyebrow: { ar: 'هل أنت مستعد للمشروع القادم؟', en: 'READY FOR YOUR NEXT MASTERPIECE?' },
        title: { ar: 'دعنا نصنع لعلامتك عملاً لا يُنسى', en: 'Let’s Produce Something Legendary Together' },
        sub: { ar: 'تحدث مباشرة مع فريق الإخراج والإنتاج لمناقشة فكرة عملك وتقدير الميزانية وجدول التنفيذ.', en: 'Connect directly with our producers and creative directors to plan your upcoming campaign.' },
        btn: { ar: 'احجز جلسة نقاش الإنتاج', en: 'Schedule Production Discovery' }
      }
    },
    services: {
      hero: {
        tag: { ar: 'حلول إبداعية وإنتاج سينمائي', en: 'CREATIVE SUITE & CINEMA PRODUCTION' },
        title: { ar: 'خدماتنا وحلولنا الإبداعية المتكاملة', en: 'Comprehensive Creative & Film Solutions' },
        desc: {
          ar: 'منظومة إنتاج وتصميم وتسويق رقمي مدروسة بدقة لتحقيق أعلى عائد استثماري لعلامتك.',
          en: 'A full-service production, design, and growth engine engineered for maximum commercial impact.'
        }
      }
    },
    portfolio: {
      hero: {
        tag: { ar: 'معرض الأعمال السينمائي', en: 'CINEMATIC WORK ARCHIVE' },
        title: { ar: 'إنتاجات تتحدث عن نفسها', en: 'Crafted for Global Impact' },
        desc: {
          ar: 'نستعرض هنا أرشيف إنتاجاتنا في الأفلام الإعلانية، الهويات البصرية الأيقونية، والحملات الاستراتيجية للعلامات الرائدة.',
          en: 'A curated showcase of our work in commercial film production, iconic visual identity, and high-performance brand campaigns.'
        }
      }
    },
    blogs: {
      hero: {
        tag: { ar: 'رؤى وتحليلات إعلامية', en: 'INSIGHTS & PERSPECTIVES' },
        title: { ar: 'أفكار ومقالات في التسويق والتصميم والسينما', en: 'Insights & Thoughts on Film & Marketing' },
        desc: {
          ar: 'نشارك خبراتنا وتحليلاتنا لمساعدتك على اتخاذ قرارات تسويقية وإنتاجية مبنية على أرقام وتجارب حقيقية.',
          en: 'Insights, industry analysis, and guides to help you make smarter marketing and tech decisions.'
        }
      }
    },
    footer: {
      desc: {
        ar: 'استوديو إنتاج سينمائي ورقمي متكامل يقود الحملات الكبرى، الأفلام الإعلانية، والهويات البصرية الرائدة للشركات الطموحة في الشرق الأوسط.',
        en: 'Award-winning film and digital production studio operating across the Middle East.'
      },
      address: {
        ar: 'مصر، القاهرة الجديدة — التجمع الخامس، مبنى ميديا جلو',
        en: 'Media Glow Studios, New Cairo, 5th Settlement, Egypt'
      },
      copy: {
        ar: 'جميع الحقوق محفوظة © 2026 ميديا جلو.',
        en: 'All rights reserved © 2026 Media Glow Production.'
      },
      made: {
        ar: 'صُنع بشغف وإتقان في مصر',
        en: 'Crafted with precision & passion in Egypt'
      },
      socials: { linkedin: '', twitter: '', facebook: '', instagram: '', youtube: '', tiktok: '' },
      email: 'hello@mediaglowegypt.com',
      phone: '+20 100 000 0000'
    },
    branding: {
      logo_url: 'assets/media-glow-logo.png',
      phone: '+20 100 000 0000',
      whatsapp: '201000000000',
      email: 'hello@mediaglow.agency',
      primary_color: '#2DD4BF',
      secondary_color: '#389B93',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      tiktok: 'https://tiktok.com',
      seo_title: { ar: 'ميديا جلو | استوديو إنتاج سينمائي وإعلامي', en: 'Media Glow | Full-Service Film & Media Production' },
      seo_desc: { ar: 'استوديو إنتاج سينمائي ورقمي متكامل يقود الحملات الكبرى والأفلام الإعلانية.', en: 'Award-winning film and digital production studio operating across the Middle East.' }
    },
    partners: {
      title: { ar: 'شركاء النجاح والعلامات الرائدة', en: 'Trusted by Visionary Brands' },
      items: [
        { name: 'Qirmiz Luxury Roastery', logo: '/assets/media-glow-icon.png', category: 'F&B Luxury' },
        { name: 'Al Noor International Clinics', logo: '/assets/media-glow-icon.png', category: 'Healthcare' },
        { name: 'Takamol Enterprise Platform', logo: '/assets/media-glow-icon.png', category: 'Technology' },
        { name: 'Aura Cinema & Media', logo: '/assets/media-glow-icon.png', category: 'Media' },
        { name: 'Vortex Digital Solutions', logo: '/assets/media-glow-icon.png', category: 'Digital' },
        { name: 'Horizon Hospitality Group', logo: '/assets/media-glow-icon.png', category: 'Hospitality' }
      ]
    },
    team: {
      title: { ar: 'فريق الإخراج والقيادة الإبداعية', en: 'Creative Leadership Team' },
      items: [
        { name_ar: 'م. أحمد الشريف', name_en: 'Ahmed El-Sherif', role_ar: 'المخرج الإبداعي ومؤسس الاستوديو', role_en: 'Creative Director & Founder', image: '/assets/media-glow-icon.png' },
        { name_ar: 'د. ليلى فهمي', name_en: 'Dr. Layla Fahmy', role_ar: 'مديرة استراتيجيات النمو والتسويق', role_en: 'Head of Growth Strategy', image: '/assets/media-glow-icon.png' },
        { name_ar: 'كريم ممدوح', name_en: 'Karim Mamdouh', role_ar: 'مدير التصوير والإنتاج السينمائي', role_en: 'Director of Photography (DoP)', image: '/assets/media-glow-icon.png' }
      ]
    },
    newsletter: {
      subscribers: [
        { email: 'director@company.com', created_at: '2026-10-28', status: 'Active' },
        { email: 'media@agency.ae', created_at: '2026-10-30', status: 'Active' },
        { email: 'growth@startup.sa', created_at: '2026-11-02', status: 'Active' }
      ]
    }
  };
  isSavingPage: { [key: string]: boolean } = {};

  ngOnInit() {
    // Check auth & role authorization (admin or dashboard_controller roles only)
    const token = localStorage.getItem('mediaglow_client_token');
    const userStr = localStorage.getItem('mediaglow_user');
    let user: any = null;
    try {
      user = userStr ? JSON.parse(userStr) : null;
    } catch (e) {}

    const allowedRoles = ['admin', 'Administrator', 'manager', 'department_manager', 'task_generator', 'dashboard_controller'];
    if (!token || !user || !allowedRoles.includes(user.role)) {
      // Clear token & user info and redirect to login
      localStorage.removeItem('mediaglow_client_token');
      localStorage.removeItem('mediaglow_user');
      this.router.navigate(['/login']);
    } else {
      this.initForms();
      
      // Admin Loaders - Only load initial Overview metrics & charts on startup
      this.loadOverviewData();
    }
  }

  initForms() {
    // Project form
    this.projectForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      category_id: ['', Validators.required],
      description_en: ['', Validators.required],
      description_ar: ['', Validators.required],
      main_image_alt: [''],
      color: ['#000000'],
      emoji: ['🏗️'],
      tags: [''],
      client: [''],
      timeline: [''],
      challenge_en: [''],
      challenge_ar: [''],
      solution_en: [''],
      solution_ar: [''],
      deliverables: [''],
      results_str: [''],
      testimonial_text: [''],
      testimonial_name: [''],
      testimonial_role: [''],
      testimonial_avatar: [''],
    });

    // Service form
    this.serviceForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      subtitle_en: ['', Validators.required],
      subtitle_ar: ['', Validators.required],
      description_en: ['', Validators.required],
      description_ar: ['', Validators.required],
      icon: ['fa-solid fa-gear', Validators.required],
      cta_url: ['/contact'],
      cta_text_en: ['Get Started'],
      cta_text_ar: ['ابدأ الآن'],
      order: [1],
      features_en: [''],
      features_ar: [''],
      stats_str_en: [''],
      stats_str_ar: [''],
    });

    // Blog form
    this.blogForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      description_en: ['', Validators.required],
      description_ar: ['', Validators.required],
      img_alt: [''],
    });

    // Category form
    this.categoryForm = this.fb.group({
      name_en: ['', Validators.required],
      name_ar: ['', Validators.required],
      description_en: [''],
      description_ar: [''],
    });

    // FAQ form
    this.faqForm = this.fb.group({
      question_en: ['', Validators.required],
      question_ar: ['', Validators.required],
      answer_en: ['', Validators.required],
      answer_ar: ['', Validators.required],
      sort_order: [1],
      is_active: [true],
    });

    // Testimonial form
    this.testimonialForm = this.fb.group({
      client_name: ['', Validators.required],
      job_title: ['', Validators.required],
      company_name: [''],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      avatar_color: ['#e8620a'],
      feedback_en: ['', Validators.required],
      feedback_ar: ['', Validators.required],
    });

    // Contact Form
    this.contactForm = this.fb.group({
      id: [''],
      whatsapp_phone: [''],
      whatsapp_desc: [''],
      official_email: [''],
      company_address: [''],
      google_maps_url: [''],
      emergency_support_info: ['']
    });
  }

  // --- Loader functions ---
  loadOverviewData() {
    this.apiService.getProjects().subscribe(res => {
      const projectsArr = Array.isArray(res) ? res : (res?.data || []);
      this.overviewStats.projects = projectsArr.length || 0;
      this.recentProjects = projectsArr.slice(0, 5);

      // Aggregate projects by category
      const projectCounts: { [key: string]: number } = {};
      projectsArr.forEach((p: any) => {
        let catName = p.category?.name_en || p.category?.name?.en;
        if (!catName && p.category?.name) {
          catName = typeof p.category.name === 'object'
            ? (p.category.name.en || p.category.name.ar)
            : p.category.name;
        }
        if (!catName) {
          catName = p.category_id ? `Category #${p.category_id}` : 'General';
        }
        projectCounts[catName] = (projectCounts[catName] || 0) + 1;
      });
      this.projectsChartData = Object.keys(projectCounts).map(key => ({
        name: key,
        count: projectCounts[key]
      }));
    });

    this.apiService.getServices().subscribe(res => {
      const servicesArr = Array.isArray(res) ? res : (res?.data || []);
      this.overviewStats.services = servicesArr.length || 0;
    });

    this.apiService.getInquiries().subscribe(res => {
      const inquiriesArr = Array.isArray(res) ? res : (res?.data || []);
      this.overviewStats.inquiries = inquiriesArr.length || 0;

      // Aggregate inquiries by service type
      const inquiryCounts: { [key: string]: number } = {};
      inquiriesArr.forEach((inq: any) => {
        let svcName = inq.service_needed;
        if (svcName && typeof svcName === 'object') {
          svcName = svcName.en || svcName.ar || 'General';
        }
        if (!svcName) svcName = 'General';
        inquiryCounts[svcName] = (inquiryCounts[svcName] || 0) + 1;
      });
      this.inquiriesChartData = Object.keys(inquiryCounts).map(key => ({
        name: key,
        count: inquiryCounts[key]
      }));
    });

    this.apiService.getTestimonials().subscribe(res => {
      const testimonialsArr = Array.isArray(res) ? res : (res?.data || []);
      this.overviewStats.testimonials = testimonialsArr.length || 0;
    });
  }

  loadProjects() {
    this.apiService.getProjects().subscribe(res => {
      this.projects = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadCategories() {
    this.apiService.getCategories().subscribe(res => {
      this.categories = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadServices() {
    this.apiService.getServices().subscribe(res => {
      this.servicesList = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadBlogs() {
    this.apiService.getBlogs().subscribe(res => {
      this.blogs = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadFaqs() {
    this.apiService.getFaqs().subscribe(res => {
      this.faqs = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadTestimonials() {
    this.apiService.getTestimonials().subscribe(res => {
      this.testimonials = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadInquiries() {
    this.apiService.getInquiries().subscribe(res => {
      this.inquiries = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadContactInfo() {
    this.apiService.getContactInfo().subscribe(res => {
      const info = res?.data || res;
      if (info && typeof info === 'object') {
        this.contactForm.patchValue(info);
      }
    });
  }

  loadAboutData() {
    this.apiService.getAbout().subscribe((res: any) => {
      if (res && res.data) {
        this.aboutData.content = res.data.content || this.aboutData.content;
        this.aboutData.timeline = res.data.timeline || [];
        
        // Ensure nested structure exists
        ['hero', 'story', 'vision', 'mission', 'values', 'team_text'].forEach(key => {
          if (!this.aboutData.content[key]) this.aboutData.content[key] = { en: {}, ar: {} };
          if (!this.aboutData.content[key].en) this.aboutData.content[key].en = {};
          if (!this.aboutData.content[key].ar) this.aboutData.content[key].ar = {};
        });
      }
    });
  }

  loadPageData(page: string) {
    this.apiService.getPageContent(page).subscribe((res: any) => {
      if (res && res.data && Object.keys(res.data).length > 0) {
        this.pagesData[page] = this.deepMerge(this.pagesData[page], res.data);
      }
    });
  }

  private deepMerge(target: any, source: any): any {
    if (!target) return source;
    if (!source) return target;
    const output = { ...target };
    for (const key of Object.keys(source)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        output[key] = this.deepMerge(target[key] || {}, source[key]);
      } else {
        output[key] = source[key];
      }
    }
    return output;
  }

  // --- Project CRUD Operations ---
  onProjectImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.projectImageFile = file;
      const reader = new FileReader();
      reader.onload = e => this.projectImagePreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveProject() {
    if (this.projectForm.invalid) return;
    this.loadingProject = true;
    const formData = new FormData();
    const val = this.projectForm.value;
    
    Object.keys(val).forEach(key => {
      if (key !== 'tags' && key !== 'deliverables' && key !== 'results_str') {
        formData.append(key, val[key] || '');
      }
    });

    if (val.tags && typeof val.tags === 'string') {
      const tagsArray = val.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t);
      formData.append('tags', JSON.stringify(tagsArray));
    } else if (Array.isArray(val.tags)) {
      formData.append('tags', JSON.stringify(val.tags));
    } else {
      formData.append('tags', JSON.stringify([]));
    }

    if (val.deliverables && typeof val.deliverables === 'string') {
      const delArray = val.deliverables.split(',').map((d: string) => d.trim()).filter((d: string) => d);
      formData.append('deliverables', JSON.stringify(delArray));
    } else if (Array.isArray(val.deliverables)) {
      formData.append('deliverables', JSON.stringify(val.deliverables));
    } else {
      formData.append('deliverables', JSON.stringify([]));
    }

    if (val.results_str && typeof val.results_str === 'string') {
      const resultsArray = val.results_str.split(',').map((r: string) => {
        const parts = r.split(':');
        return {
          value: parts[0]?.trim() || '',
          label: parts[1]?.trim() || ''
        };
      }).filter((r: any) => r.value || r.label);
      formData.append('results', JSON.stringify(resultsArray));
    } else {
      formData.append('results', JSON.stringify([]));
    }

    if (this.projectImageFile) {
      formData.append('main_image', this.projectImageFile);
    }

    if (this.isEditingProject && this.currentProjectId) {
      this.apiService.updateProject(this.currentProjectId, formData).subscribe({
        next: () => {
          this.loadingProject = false;
          this.cancelEditProject();
          this.loadProjects();
          this.loadOverviewData();
          alert('Project updated successfully!');
        },
        error: () => this.loadingProject = false
      });
    } else {
      this.apiService.addProject(formData).subscribe({
        next: () => {
          this.loadingProject = false;
          this.cancelEditProject();
          this.loadProjects();
          this.loadOverviewData();
          alert('Project created successfully!');
        },
        error: () => this.loadingProject = false
      });
    }
  }

  editProject(project: any) {
    this.showProjectForm = true;
    this.isEditingProject = true;
    this.currentProjectId = project.id;
    const tagsStr = Array.isArray(project.tags) ? project.tags.join(', ') : '';
    const delStr = Array.isArray(project.deliverables) ? project.deliverables.join(', ') : '';
    const resStr = Array.isArray(project.results) ? project.results.map((r: any) => `${r.value}:${r.label}`).join(', ') : '';

    this.projectForm.patchValue({
      title_en: project.title_en || project.title,
      title_ar: project.title_ar,
      category_id: project.category_id,
      description_en: project.description_en,
      description_ar: project.description_ar,
      main_image_alt: project.main_image_alt,
      color: project.color || '#000000',
      emoji: project.emoji || '🏗️',
      tags: tagsStr,
      client: project.client || '',
      timeline: project.timeline || '',
      challenge_en: project.challenge_en,
      challenge_ar: project.challenge_ar,
      solution_en: project.solution_en,
      solution_ar: project.solution_ar,
      deliverables: delStr,
      results_str: resStr,
      testimonial_text: project.testimonial_text,
      testimonial_name: project.testimonial_name,
      testimonial_role: project.testimonial_role,
      testimonial_avatar: project.testimonial_avatar,
    });

    this.projectImagePreview = project.main_image_url || null;
  }

  cancelEditProject() {
    this.showProjectForm = false;
    this.isEditingProject = false;
    this.currentProjectId = null;
    this.projectImageFile = null;
    this.projectImagePreview = null;
    this.projectForm.reset({ 
      category_id: '',
      color: '#000000',
      emoji: '🏗️'
    });
  }

  deleteProject(id: string) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.apiService.deleteProject(id).subscribe(() => {
        this.loadProjects();
        this.loadOverviewData();
      });
    }
  }

  // --- Category CRUD Operations ---
  onCategoryImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.categoryImageFile = file;
      const reader = new FileReader();
      reader.onload = e => this.categoryImagePreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveCategory() {
    if (this.categoryForm.invalid) return;
    this.loadingCategory = true;
    const formData = new FormData();
    const val = this.categoryForm.value;

    formData.append('name_en', val.name_en);
    formData.append('name_ar', val.name_ar);
    formData.append('description_en', val.description_en || '');
    formData.append('description_ar', val.description_ar || '');

    if (this.categoryImageFile) {
      formData.append('image', this.categoryImageFile);
    }

    if (this.isEditingCategory && this.currentCategoryId) {
      this.apiService.updateCategory(this.currentCategoryId, formData).subscribe({
        next: () => {
          this.loadingCategory = false;
          this.cancelEditCategory();
          this.loadCategories();
          alert('Category updated successfully!');
        },
        error: () => this.loadingCategory = false
      });
    } else {
      this.apiService.addCategory(formData).subscribe({
        next: () => {
          this.loadingCategory = false;
          this.cancelEditCategory();
          this.loadCategories();
          alert('Category created successfully!');
        },
        error: () => this.loadingCategory = false
      });
    }
  }

  editCategory(category: any) {
    this.showCategoryForm = true;
    this.isEditingCategory = true;
    this.currentCategoryId = category.id;
    this.categoryForm.patchValue({
      name_en: category.name_en || (typeof category.name === 'object' ? category.name.en : category.name),
      name_ar: category.name_ar || (typeof category.name === 'object' ? category.name.ar : ''),
      description_en: category.description_en || (typeof category.description === 'object' ? category.description.en : ''),
      description_ar: category.description_ar || (typeof category.description === 'object' ? category.description.ar : ''),
    });
    this.categoryImagePreview = category.image_url || category.image || null;
  }

  cancelEditCategory() {
    this.showCategoryForm = false;
    this.isEditingCategory = false;
    this.currentCategoryId = null;
    this.categoryImageFile = null;
    this.categoryImagePreview = null;
    this.categoryForm.reset();
  }

  deleteCategory(id: string) {
    if (confirm('Are you sure you want to delete this category? All projects under this category will need update.')) {
      this.apiService.deleteCategory(id).subscribe(() => {
        this.loadCategories();
      });
    }
  }

  // --- Service CRUD Operations ---
  saveService() {
    if (this.serviceForm.invalid) return;
    this.loadingService = true;
    const formData = new FormData();
    const val = this.serviceForm.value;
    
    formData.append('icon', val.icon || 'fa-solid fa-gear');
    formData.append('cta_url', val.cta_url || '/contact');
    formData.append('cta_text_en', val.cta_text_en || 'Get Started');
    formData.append('cta_text_ar', val.cta_text_ar || 'ابدأ الآن');
    formData.append('order', String(val.order || 1));
    formData.append('title[en]', val.title_en);
    formData.append('title[ar]', val.title_ar);
    formData.append('subtitle[en]', val.subtitle_en);
    formData.append('subtitle[ar]', val.subtitle_ar);
    formData.append('description[en]', val.description_en);
    formData.append('description[ar]', val.description_ar);

    const featsEn = val.features_en ? val.features_en.split(',').map((f: string) => f.trim()).filter((f: string) => f) : [];
    const featsAr = val.features_ar ? val.features_ar.split(',').map((f: string) => f.trim()).filter((f: string) => f) : [];
    formData.append('features[en]', JSON.stringify(featsEn));
    formData.append('features[ar]', JSON.stringify(featsAr));

    const parseStats = (str: string) => {
      if (!str) return [];
      return str.split(',').map(s => {
        const parts = s.split(':');
        return {
          label: parts[0]?.trim() || '',
          sub: parts[1]?.trim() || '',
          badge: parts[2]?.trim() || ''
        };
      }).filter(s => s.label || s.sub);
    };

    formData.append('stats[en]', JSON.stringify(parseStats(val.stats_str_en)));
    formData.append('stats[ar]', JSON.stringify(parseStats(val.stats_str_ar)));

    if (this.isEditingService && this.currentServiceId) {
      this.apiService.updateService(this.currentServiceId, formData).subscribe({
        next: () => {
          this.loadingService = false;
          this.cancelEditService();
          this.loadServices();
          this.loadOverviewData();
          alert('Service updated successfully!');
        },
        error: () => this.loadingService = false
      });
    } else {
      this.apiService.addService(formData).subscribe({
        next: () => {
          this.loadingService = false;
          this.cancelEditService();
          this.loadServices();
          this.loadOverviewData();
          alert('Service created successfully!');
        },
        error: () => this.loadingService = false
      });
    }
  }

  editService(service: any) {
    this.showServiceForm = true;
    this.isEditingService = true;
    this.currentServiceId = service.id;

    const getFeaturesStr = (features: any, lang: string) => {
      if (!features) return '';
      if (Array.isArray(features)) {
        return features.map((f: any) => typeof f === 'object' ? (f[lang] || '') : f).filter((f: string) => f).join(', ');
      }
      return '';
    };

    const getStatsStr = (stats: any, lang: string) => {
      if (!stats) return '';
      if (Array.isArray(stats)) {
        return stats.map((s: any) => {
          const lbl = typeof s.label === 'object' ? (s.label[lang] || '') : s.label;
          const sub = typeof s.sub === 'object' ? (s.sub[lang] || '') : s.sub;
          const bdg = typeof s.badge === 'object' ? (s.badge[lang] || '') : s.badge;
          return `${lbl}:${sub}${bdg ? ':' + bdg : ''}`;
        }).join(', ');
      }
      return '';
    };

    this.serviceForm.patchValue({
      title_en: service.title_en || (typeof service.title === 'object' ? service.title.en : ''),
      title_ar: service.title_ar || (typeof service.title === 'object' ? service.title.ar : ''),
      subtitle_en: service.subtitle_en || (typeof service.category === 'object' ? service.category.en : ''),
      subtitle_ar: service.subtitle_ar || (typeof service.category === 'object' ? service.category.ar : ''),
      description_en: service.description_en || (typeof service.description === 'object' ? service.description.en : ''),
      description_ar: service.description_ar || (typeof service.description === 'object' ? service.description.ar : ''),
      icon: service.iconClass || service.icon || 'fa-solid fa-gear',
      cta_url: service.cta_url || '/contact',
      cta_text_en: service.ctaText?.en || service.cta_text_en || 'Get Started',
      cta_text_ar: service.ctaText?.ar || service.cta_text_ar || 'ابدأ الآن',
      order: service.order || 1,
      features_en: getFeaturesStr(service.features, 'en'),
      features_ar: getFeaturesStr(service.features, 'ar'),
      stats_str_en: getStatsStr(service.stats, 'en'),
      stats_str_ar: getStatsStr(service.stats, 'ar'),
    });
  }

  cancelEditService() {
    this.showServiceForm = false;
    this.isEditingService = false;
    this.currentServiceId = null;
    this.serviceForm.reset({
      icon: 'fa-solid fa-gear',
      cta_url: '/contact',
      cta_text_en: 'Get Started',
      cta_text_ar: 'ابدأ الآن',
      order: 1
    });
  }

  deleteService(id: string) {
    if (confirm('Are you sure you want to delete this service?')) {
      this.apiService.deleteService(id).subscribe(() => {
        this.loadServices();
        this.loadOverviewData();
      });
    }
  }

  // --- Blog CRUD Operations ---
  onBlogImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.blogImageFile = file;
      const reader = new FileReader();
      reader.onload = e => this.blogImagePreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveBlog() {
    if (this.blogForm.invalid) return;
    this.loadingBlog = true;
    const formData = new FormData();
    const val = this.blogForm.value;

    formData.append('title[en]', val.title_en);
    formData.append('title[ar]', val.title_ar);
    formData.append('description[en]', val.description_en);
    formData.append('description[ar]', val.description_ar);
    formData.append('img_alt', val.img_alt || val.title_en);

    if (this.blogImageFile) {
      formData.append('media', this.blogImageFile);
    }

    if (this.isEditingBlog && this.currentBlogId) {
      this.apiService.updateBlog(this.currentBlogId, formData).subscribe({
        next: () => {
          this.loadingBlog = false;
          this.cancelEditBlog();
          this.loadBlogs();
          alert('Article updated successfully!');
        },
        error: () => this.loadingBlog = false
      });
    } else {
      this.apiService.addBlog(formData).subscribe({
        next: () => {
          this.loadingBlog = false;
          this.cancelEditBlog();
          this.loadBlogs();
          alert('Article published successfully!');
        },
        error: () => this.loadingBlog = false
      });
    }
  }

  editBlog(blog: any) {
    this.showBlogForm = true;
    this.isEditingBlog = true;
    this.currentBlogId = blog.id;
    this.blogForm.patchValue({
      title_en: blog.title_en || (typeof blog.title === 'object' ? blog.title.en : blog.title),
      title_ar: blog.title_ar || (typeof blog.title === 'object' ? blog.title.ar : ''),
      description_en: blog.description_en || (typeof blog.description === 'object' ? blog.description.en : blog.description),
      description_ar: blog.description_ar || (typeof blog.description === 'object' ? blog.description.ar : ''),
      img_alt: blog.img_alt || '',
    });
    this.blogImagePreview = blog.media_url || blog.image || null;
  }

  cancelEditBlog() {
    this.showBlogForm = false;
    this.isEditingBlog = false;
    this.currentBlogId = null;
    this.blogImageFile = null;
    this.blogImagePreview = null;
    this.blogForm.reset();
  }

  deleteBlog(id: string) {
    if (confirm('Are you sure you want to delete this blog article?')) {
      this.apiService.deleteBlog(id).subscribe(() => {
        this.loadBlogs();
      });
    }
  }

  // --- Testimonial CRUD Operations ---
  saveTestimonial() {
    if (this.testimonialForm.invalid) return;
    this.loadingTestimonial = true;
    const val = this.testimonialForm.value;
    const payload = {
      client_name: val.client_name,
      job_title: val.job_title,
      company_name: val.company_name || '',
      rating: Number(val.rating || 5),
      avatar_color: val.avatar_color || '#e8620a',
      feedback: {
        en: val.feedback_en,
        ar: val.feedback_ar
      }
    };

    if (this.isEditingTestimonial && this.currentTestimonialId) {
      this.apiService.updateTestimonial(this.currentTestimonialId, payload).subscribe({
        next: () => {
          this.loadingTestimonial = false;
          this.cancelEditTestimonial();
          this.loadTestimonials();
          this.loadOverviewData();
          alert('Testimonial updated successfully!');
        },
        error: () => this.loadingTestimonial = false
      });
    } else {
      this.apiService.addTestimonial(payload).subscribe({
        next: () => {
          this.loadingTestimonial = false;
          this.cancelEditTestimonial();
          this.loadTestimonials();
          this.loadOverviewData();
          alert('Testimonial added successfully!');
        },
        error: () => this.loadingTestimonial = false
      });
    }
  }

  editTestimonial(testimonial: any) {
    this.showTestimonialForm = true;
    this.isEditingTestimonial = true;
    this.currentTestimonialId = testimonial.id;
    this.testimonialForm.patchValue({
      client_name: testimonial.client_name,
      job_title: testimonial.job_title,
      company_name: testimonial.company_name || '',
      rating: testimonial.rating || 5,
      avatar_color: testimonial.avatar_color || '#e8620a',
      feedback_en: testimonial.feedback_en || (typeof testimonial.feedback === 'object' ? testimonial.feedback.en : testimonial.feedback),
      feedback_ar: testimonial.feedback_ar || (typeof testimonial.feedback === 'object' ? testimonial.feedback.ar : ''),
    });
  }

  cancelEditTestimonial() {
    this.showTestimonialForm = false;
    this.isEditingTestimonial = false;
    this.currentTestimonialId = null;
    this.testimonialForm.reset({
      rating: 5,
      avatar_color: '#e8620a'
    });
  }

  deleteTestimonial(id: string) {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      this.apiService.deleteTestimonial(id).subscribe(() => {
        this.loadTestimonials();
        this.loadOverviewData();
      });
    }
  }

  // --- FAQ CRUD Operations ---
  saveFaq() {
    if (this.faqForm.invalid) return;
    this.loadingFaq = true;
    const val = this.faqForm.value;
    const payload = {
      question_en: val.question_en,
      question_ar: val.question_ar,
      answer_en: val.answer_en,
      answer_ar: val.answer_ar,
      sort_order: val.sort_order || 1,
      is_active: val.is_active ? 1 : 0
    };

    if (this.isEditingFaq && this.currentFaqId) {
      this.apiService.updateFaq(this.currentFaqId, payload).subscribe({
        next: () => {
          this.loadingFaq = false;
          this.cancelEditFaq();
          this.loadFaqs();
          alert('FAQ updated successfully!');
        },
        error: () => this.loadingFaq = false
      });
    } else {
      this.apiService.addFaq(payload).subscribe({
        next: () => {
          this.loadingFaq = false;
          this.cancelEditFaq();
          this.loadFaqs();
          alert('FAQ created successfully!');
        },
        error: () => this.loadingFaq = false
      });
    }
  }

  editFaq(faq: any) {
    this.showFaqForm = true;
    this.isEditingFaq = true;
    this.currentFaqId = faq.id;
    this.faqForm.patchValue({
      question_en: faq.question_en,
      question_ar: faq.question_ar,
      answer_en: faq.answer_en,
      answer_ar: faq.answer_ar,
      sort_order: faq.order || faq.sort_order || 1,
      is_active: faq.is_active !== undefined ? faq.is_active : true,
    });
  }

  cancelEditFaq() {
    this.showFaqForm = false;
    this.isEditingFaq = false;
    this.currentFaqId = null;
    this.faqForm.reset({
      sort_order: 1,
      is_active: true
    });
  }

  deleteFaq(id: string) {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      this.apiService.deleteFaq(id).subscribe(() => {
        this.loadFaqs();
      });
    }
  }

  // --- Contact & Inquiries Operations ---
  saveContactInfo() {
    this.loadingInfo = true;
    this.infoMessage = '';
    this.apiService.updateContactInfo(this.contactForm.value).subscribe({
      next: (res) => {
        this.loadingInfo = false;
        this.infoMessage = 'Saved successfully!';
        setTimeout(() => this.infoMessage = '', 3000);
      },
      error: () => {
        this.loadingInfo = false;
        this.infoMessage = 'Failed to save.';
      }
    });
  }

  deleteInquiry(id: string) {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      this.apiService.deleteInquiry(id).subscribe(() => {
        this.loadInquiries();
        this.loadOverviewData();
      });
    }
  }

  // --- Legacy Page Editor operations ---
  addTimeline() {
    this.aboutData.timeline.push({ year: '', title: { en: '', ar: '' }, description: { en: '', ar: '' } });
  }

  removeTimeline(index: number) {
    this.aboutData.timeline.splice(index, 1);
  }

  saveAboutData() {
    this.isSavingAbout = true;
    const payload = {
      hero: this.aboutData.content.hero,
      story: this.aboutData.content.story,
      vision: this.aboutData.content.vision,
      mission: this.aboutData.content.mission,
      values: this.aboutData.content.values,
      team_text: this.aboutData.content.team_text,
      timeline: this.aboutData.timeline
    };
    
    this.apiService.updateAbout(payload).subscribe({
      next: () => {
        this.isSavingAbout = false;
        alert('About page updated successfully!');
      },
      error: () => {
        this.isSavingAbout = false;
        alert('Error updating about page');
      }
    });
  }

  savePageData(page: string) {
    this.isSavingPage[page] = true;
    this.apiService.updatePageContent(page, this.pagesData[page]).subscribe({
      next: () => {
        this.isSavingPage[page] = false;
        alert(`${page} page updated successfully!`);
      },
      error: () => {
        this.isSavingPage[page] = false;
        alert(`Error updating ${page} page`);
      }
    });
  }

  // --- UI Layout handlers ---
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  loadDataForTab(tab: string) {
    switch (tab) {
      case 'overview':
        this.loadOverviewData();
        break;
      case 'services':
        this.loadServices();
        break;
      case 'projects':
        this.loadProjects();
        this.loadCategories();
        break;
      case 'categories':
        this.loadCategories();
        break;
      case 'blogs':
        this.loadBlogs();
        break;
      case 'testimonials':
        this.loadTestimonials();
        break;
      case 'faqs':
        this.loadFaqs();
        break;
      case 'contact-hub':
        this.loadInquiries();
        this.loadContactInfo();
        break;
      case 'home-page':
        this.loadPageData('home');
        break;
      case 'about-page':
        this.loadAboutData();
        break;
      case 'services-page':
        this.loadPageData('services');
        break;
      case 'portfolio-page':
        this.loadPageData('portfolio');
        break;
      case 'blogs-page':
        this.loadPageData('blogs');
        break;
      case 'footer-section':
        this.loadPageData('footer');
        break;
      case 'branding-settings':
        this.loadPageData('branding');
        break;
      case 'partners':
        this.loadPageData('partners');
        break;
      case 'team':
        this.loadPageData('team');
        break;
      case 'newsletter':
        this.loadPageData('newsletter');
        break;
    }
  }

  // --- Helpers for Brand, Partners, Team, Newsletter ---
  addPartner() {
    if (!this.pagesData['partners'].items) this.pagesData['partners'].items = [];
    this.pagesData['partners'].items.push({
      name: 'New Partner Brand',
      logo: '/assets/media-glow-icon.png',
      category: 'General'
    });
  }

  removePartner(index: number) {
    if (confirm('Are you sure you want to remove this partner brand?')) {
      this.pagesData['partners'].items.splice(index, 1);
    }
  }

  addTeamMember() {
    if (!this.pagesData['team'].items) this.pagesData['team'].items = [];
    this.pagesData['team'].items.push({
      name_ar: 'عضو جديد',
      name_en: 'New Team Member',
      role_ar: 'المنصب الإبداعي',
      role_en: 'Creative Position',
      image: '/assets/media-glow-icon.png'
    });
  }

  removeTeamMember(index: number) {
    if (confirm('Are you sure you want to remove this team member?')) {
      this.pagesData['team'].items.splice(index, 1);
    }
  }

  toggleDashboardLang() {
    this.translationService.toggleLanguage();
  }

  toggleDashboardTheme() {
    this.themeService.toggleTheme();
  }

  setTab(tab: string) {
    this.activeTab = tab;
    this.loadDataForTab(tab);
    if (window.innerWidth <= 992) {
      this.sidebarOpen = false;
    }
  }

  toggleWebsiteMenu() {
    this.websiteMenuOpen = !this.websiteMenuOpen;
  }

  toggleDropdown(dd: string) {
    if (this.activeDropdown === dd) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dd;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.tb-user') && !target.closest('.dd-user') && 
        !target.closest('.tb-btn') && !target.closest('.dd-notif') &&
        !target.closest('.sb-user')) {
      this.activeDropdown = null;
    }
  }

  logout() {
    localStorage.removeItem('mediaglow_client_token');
    this.router.navigate(['/login']);
  }
}
