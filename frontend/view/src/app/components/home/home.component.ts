import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);

  projects: any[] = [];
  testimonials: any[] = [];
  faqs: any[] = [];
  services: any[] = [];
  homePageData: any = null;
  activeTestimonialIndex = 0;
  isShowreelOpen = false;
  activeFaqIndex: number | null = 0;

  defaultFaqs = [
    {
      num: '01',
      tag: { ar: 'مجالات الاستوديو', en: 'STUDIO CAPABILITIES' },
      icon: 'fa-solid fa-clapperboard',
      q: { ar: 'ما هي مجالات الإنتاج الرئيسية في استوديو ميديا جلو؟', en: 'What are Media Glow\'s primary production capabilities?' },
      a: {
        ar: 'نحن استوديو إنتاج سينمائي ورقمي متكامل يقدم إعلانات تلفزيونية TVCs، أفلام تجارية، تصوير ريلز ومحتوى مرئي، بناء الهويات البصرية الفاخرة، وحملات النمو الرقمية.',
        en: 'A premier full-service production house specializing in broadcast TVCs, commercial cinema, brand identity architecture, and ROI-driven marketing campaigns.'
      }
    },
    {
      num: '02',
      tag: { ar: 'العتاد والكاميرات', en: 'TECH & CAMERA FLEET' },
      icon: 'fa-solid fa-camera',
      q: { ar: 'ما هي المعدات وأنظمة الكاميرات التي تستخدمونها؟', en: 'What cinema camera systems and equipment do you use?' },
      a: {
        ar: 'نعتمد كاميرات ARRI Alexa 35 و RED V-Raptor 8K مع عدسات Anamorphic وعدسات سينمائية فاخرة، وإضاءات متكاملة وتصوير جوي معتمد بدقة فائقة.',
        en: 'We deploy industry-gold-standard ARRI Alexa 35 and RED V-Raptor 8K cinema packages, Master Anamorphic prime lenses, and certified 4K/8K drone systems.'
      }
    },
    {
      num: '03',
      tag: { ar: 'الجدول الزمني', en: 'TURNAROUND & TIMELINE' },
      icon: 'fa-solid fa-clock-rotate-left',
      q: { ar: 'كم يستغرق إنتاج فيلم إعلاني أو حملة متكاملة؟', en: 'What is the turnaround time for a commercial production?' },
      a: {
        ar: 'تتراوح المدة عادة بين 10 إلى 21 يوماً تشمل المعالجة الدرامية، المعاينة، التصوير السينمائي، والمونتاج وتصحيح الألوان (Color Grading).',
        en: 'Production typically spans 10 to 21 business days across discovery, pre-production, principal photography, and Hollywood-grade color grading.'
      }
    },
    {
      num: '04',
      tag: { ar: 'التعاقد والإنتاج', en: 'CONTRACTING & ONBOARDING' },
      icon: 'fa-solid fa-handshake',
      q: { ar: 'كيف يمكننا بدء مشروع والتعاقد مع الاستوديو؟', en: 'How do we initiate a project or request a consultation?' },
      a: {
        ar: 'يمكنك النقر على زر "ابدأ مشروعك" أو مراسلتنا مباشرة على واتساب لتحديد جلسة نقاش إبداعي ومراجعة أهداف علامتك التجارية.',
        en: 'Click "Start a Project" or connect directly via WhatsApp to schedule an executive discovery session and receive a custom production proposal.'
      }
    },
    {
      num: '05',
      tag: { ar: 'حقوق الملكية والملفات', en: 'IP & RAW DELIVERABLES' },
      icon: 'fa-solid fa-file-shield',
      q: { ar: 'هل نحصل على كافة ملفات العمل الخام وحقوق الملكية الكاملة؟', en: 'Do we receive full copyright ownership and raw project files?' },
      a: {
        ar: 'نعم بالتأكيد، كافة الحقوق التجارية والملكية الفكرية تنتقل لعلامتك التجارية بالكامل فور التسليم، مع إمكانية تسليم ملفات RAW وتصديرات متعددة المنصات.',
        en: 'Absolutely. Full commercial rights and IP transfer to your organization upon final delivery, including raw camera master archives and multi-platform aspect ratios.'
      }
    }
  ];

  ngOnInit() {
    this.loadApiData();
    this.loadPageContent();
  }

  loadApiData() {
    this.apiService.getProjects({ limit: 3 }).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.projects = Array.isArray(data) && data.length ? data : [
        {
          id: 1,
          title: { ar: 'فيلم إطلاق قِرمز التراثي', en: 'Qirmiz Heritage Commercial' },
          category: { name_ar: 'إنتاج سينمائي', name_en: 'Cinema Production' },
          description: { ar: 'حملة إطلاق سينمائية كبرى مع تصوير جوي وإضاءة احترافية وتأليف موسيقي حصري.', en: 'Cinematic brand launch campaign with drone cinematography and custom sound score.' },
          image: '/assets/media-glow-card.jpg'
        },
        {
          id: 2,
          title: { ar: 'حملة عيادات النور الدولية', en: 'Al Noor Healthcare Campaign' },
          category: { name_ar: 'حملة إعلامية', name_en: 'Integrated Campaign' },
          description: { ar: 'حملة مرئية تلفزيونية رفعت الحجوزات ونسبة الوعي بالعلامة 3 أضعاف في الربع الأول.', en: 'Cross-platform commercial film campaign that tripled consultations and regional authority.' },
          image: '/assets/media-glow-card.jpg'
        },
        {
          id: 3,
          title: { ar: 'منصة تكامل للأعمال VIP', en: 'Takamol Enterprise Platform' },
          category: { name_ar: 'منصة رقمية', name_en: 'Digital Platform' },
          description: { ar: 'بناء منصة رقمية تفاعلية ثنائية اللغة فائقة السرعة مع هوية سينمائية متطورة.', en: 'Bilingual digital ecosystem built from the ground up with cinema-grade visuals and lightning speed.' },
          image: '/assets/media-glow-card.jpg'
        }
      ];
    });

    this.apiService.getTestimonials(6).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.testimonials = Array.isArray(data) && data.length ? data : [
        {
          client_name: { ar: 'أحمد السعيد', en: 'Ahmed El-Saeed' },
          job_title: { ar: 'الرئيس التنفيذي — تيك نور', en: 'CEO — TechNoor' },
          feedback: {
            ar: 'تجربة الاستشارات والإنتاج السينمائي مع ميديا جلو كانت نقطة تحول حقيقية في هوية ومبيعات شركتنا.',
            en: 'Our commercial film and campaign with Media Glow marked a defining inflection point for brand perception and enterprise growth.'
          }
        }
      ];
    });

    this.apiService.getFaqs().subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.faqs = Array.isArray(data) && data.length ? data : [];
    });
  }

  loadPageContent() {
    this.apiService.getPageContent('home').subscribe({
      next: (res: any) => {
        if (res && res.data && Object.keys(res.data).length > 0) {
          this.homePageData = res.data;
        }
      },
      error: () => {}
    });
  }

  getAwardBadge(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.hero?.award_badge?.[lang]
      || this.homePageData?.hero?.award_badge?.ar
      || this.homePageData?.hero?.award_badge?.en
      || (lang === 'ar' ? '★ استوديو إنتاج سينمائي ورقمي رائد — القاهرة · الرياض · دبي' : '★ PREMIER FILM & MEDIA PRODUCTION STUDIO — CAIRO · RIYADH · DUBAI');
  }

  getHeroLine1(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.hero?.title1?.[lang]
      || this.homePageData?.hero?.title1?.ar
      || this.homePageData?.hero?.title1?.en
      || (lang === 'ar' ? 'نصنع أفلاماً وتجارب بصرية' : 'We Produce Cinematic Films');
  }

  getHeroLine2(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.hero?.title2?.[lang]
      || this.homePageData?.hero?.title2?.ar
      || this.homePageData?.hero?.title2?.en
      || (lang === 'ar' ? 'تُخلّد مكانة علامتك التجارية' : '& Iconic Brand Experiences');
  }

  getHeroSub(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.hero?.subtitle?.[lang]
      || this.homePageData?.hero?.subtitle?.ar
      || this.homePageData?.hero?.subtitle?.en
      || (lang === 'ar'
        ? 'استوديو إنتاج سينمائي ورقمي متكامل يقود الحملات الكبرى، الأفلام الإعلانية، والهويات البصرية الرائدة للشركات الطموحة في الشرق الأوسط.'
        : 'Full-service production house delivering commercial films, iconic visual systems, and high-impact digital campaigns for market leaders across the region.');
  }

  getHeroBtn1(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.hero?.btn1?.[lang]
      || this.homePageData?.hero?.btn1?.ar
      || this.homePageData?.hero?.btn1?.en
      || this.translationService.translate('hero.btn1');
  }

  getHeroReelBtn(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.hero?.reel_btn?.[lang]
      || this.homePageData?.hero?.reel_btn?.ar
      || this.homePageData?.hero?.reel_btn?.en
      || this.translationService.translate('hero.reelBtn');
  }

  getShowreelPoster(): string {
    return this.homePageData?.hero?.showreel_poster || '/assets/media-glow-card.jpg';
  }

  getShowreelUrl(): string {
    return this.homePageData?.hero?.showreel_url || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
  }

  openShowreel() {
    this.isShowreelOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeShowreel() {
    this.isShowreelOpen = false;
    document.body.style.overflow = '';
  }

  toggleFaq(index: number) {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

  getFaqQuestion(faq: any): string {
    if (!faq) return '';
    const lang = this.translationService.currentLang();
    if (faq.q && typeof faq.q === 'object') return faq.q[lang] || faq.q['ar'] || '';
    if (lang === 'en') return faq.question_en || faq.question_ar || faq.question || '';
    return faq.question_ar || faq.question_en || faq.question || '';
  }

  getFaqAnswer(faq: any): string {
    if (!faq) return '';
    const lang = this.translationService.currentLang();
    if (faq.a && typeof faq.a === 'object') return faq.a[lang] || faq.a['ar'] || '';
    if (lang === 'en') return faq.answer_en || faq.answer_ar || faq.answer || '';
    return faq.answer_ar || faq.answer_en || faq.answer || '';
  }

  getFaqTag(faq: any, index: number): string {
    if (!faq) return '';
    const lang = this.translationService.currentLang();
    if (faq.tag && typeof faq.tag === 'object') return faq.tag[lang] || faq.tag['ar'] || '';
    const fallbackTags = [
      lang === 'ar' ? 'مجالات الاستوديو' : 'STUDIO CAPABILITIES',
      lang === 'ar' ? 'العتاد والكاميرات' : 'TECH & CAMERA FLEET',
      lang === 'ar' ? 'الجدول الزمني' : 'TURNAROUND & TIMELINE',
      lang === 'ar' ? 'التعاقد والإنتاج' : 'CONTRACTING & ONBOARDING',
      lang === 'ar' ? 'حقوق الملكية والملفات' : 'IP & RAW DELIVERABLES'
    ];
    return fallbackTags[index % fallbackTags.length];
  }

  getFaqNumber(faq: any, index: number): string {
    if (faq && faq.num) return faq.num;
    return `0${index + 1}`;
  }

  getFaqIcon(faq: any, index: number): string {
    if (faq && faq.icon) return faq.icon;
    const icons = ['fa-solid fa-clapperboard', 'fa-solid fa-camera', 'fa-solid fa-clock-rotate-left', 'fa-solid fa-handshake', 'fa-solid fa-file-shield'];
    return icons[index % icons.length];
  }

  getWhatsAppUrl(): string {
    const phone = this.translationService.siteContent()?.branding?.whatsapp 
      || this.translationService.siteContent()?.contact?.whatsapp 
      || this.translationService.siteContent()?.footer?.phone 
      || '201000000000';
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const msg = this.translationService.currentLang() === 'ar' 
      ? encodeURIComponent('مرحباً ميديا جلو، أود الاستفسار عن تفاصيل الإنتاج والأسعار') 
      : encodeURIComponent('Hello Media Glow, I would like to inquire about production details and pricing');
    return `https://wa.me/${cleanPhone}?text=${msg}`;
  }

  getPartnersCaption(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.partners?.title?.[lang]
      || this.homePageData?.partners?.title?.ar
      || this.homePageData?.partners?.title?.en
      || (lang === 'ar' ? 'شركاء الإنتاج والعلامات التجارية التي وضعت ثقتها فينا' : 'Trusted by Visionary Brands & Industry Pioneers');
  }

  getPartnersList(): any[] {
    const fromHome = this.homePageData?.partners?.items;
    if (Array.isArray(fromHome) && fromHome.length > 0) return fromHome;
    const fromSite = this.translationService.siteContent()?.partners?.items;
    if (Array.isArray(fromSite) && fromSite.length > 0) return fromSite;
    return [
      { name: 'QIRMIZ ROASTERY', logo: '/assets/media-glow-icon.png' },
      { name: 'AL NOOR CLINICS', logo: '/assets/media-glow-icon.png' },
      { name: 'TAKAMOL PLATFORM', logo: '/assets/media-glow-icon.png' },
      { name: 'AURA CINEMA', logo: '/assets/media-glow-icon.png' },
      { name: 'VORTEX DIGITAL', logo: '/assets/media-glow-icon.png' },
      { name: 'HORIZON GROUP', logo: '/assets/media-glow-icon.png' }
    ];
  }

  getStatNum(index: number, fallback: string): string {
    return this.homePageData?.stats?.[`stat${index}_num`] || fallback;
  }

  getStatLabel(index: number, defaultKey: string): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.stats?.[`stat${index}_label`]?.[lang]
      || this.homePageData?.stats?.[`stat${index}_label`]?.ar
      || this.homePageData?.stats?.[`stat${index}_label`]?.en
      || this.translationService.translate(defaultKey);
  }

  // Bento Services Section
  getBentoEyebrow(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.services_bento?.eyebrow?.[lang]
      || this.homePageData?.services_bento?.eyebrow?.ar
      || this.homePageData?.services_bento?.eyebrow?.en
      || this.translationService.translate('services.eyebrow');
  }

  getBentoTitle(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.services_bento?.title?.[lang]
      || this.homePageData?.services_bento?.title?.ar
      || this.homePageData?.services_bento?.title?.en
      || this.translationService.translate('services.title');
  }

  getBentoSub(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.services_bento?.sub?.[lang]
      || this.homePageData?.services_bento?.sub?.ar
      || this.homePageData?.services_bento?.sub?.en
      || this.translationService.translate('services.sub');
  }

  getBentoPillarTitle(pillarNum: number, defaultKey: string): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.services_bento?.[`s${pillarNum}_title`]?.[lang]
      || this.homePageData?.services_bento?.[`s${pillarNum}_title`]?.ar
      || this.homePageData?.services_bento?.[`s${pillarNum}_title`]?.en
      || this.translationService.translate(defaultKey);
  }

  getBentoPillarDesc(pillarNum: number, defaultKey: string): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.services_bento?.[`s${pillarNum}_desc`]?.[lang]
      || this.homePageData?.services_bento?.[`s${pillarNum}_desc`]?.ar
      || this.homePageData?.services_bento?.[`s${pillarNum}_desc`]?.en
      || this.translationService.translate(defaultKey);
  }

  // Workflow Methodology Section
  getWorkflowEyebrow(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.workflow?.eyebrow?.[lang]
      || this.homePageData?.workflow?.eyebrow?.ar
      || this.homePageData?.workflow?.eyebrow?.en
      || this.translationService.translate('process.eyebrow');
  }

  getWorkflowTitle(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.workflow?.title?.[lang]
      || this.homePageData?.workflow?.title?.ar
      || this.homePageData?.workflow?.title?.en
      || this.translationService.translate('process.title');
  }

  getWorkflowStepTitle(stepNum: number, defaultKey: string): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.workflow?.[`s${stepNum}_title`]?.[lang]
      || this.homePageData?.workflow?.[`s${stepNum}_title`]?.ar
      || this.homePageData?.workflow?.[`s${stepNum}_title`]?.en
      || this.translationService.translate(defaultKey);
  }

  getWorkflowStepDesc(stepNum: number, defaultKey: string): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.workflow?.[`s${stepNum}_desc`]?.[lang]
      || this.homePageData?.workflow?.[`s${stepNum}_desc`]?.ar
      || this.homePageData?.workflow?.[`s${stepNum}_desc`]?.en
      || this.translationService.translate(defaultKey);
  }

  // Testimonials
  getActiveTestimonial(): any {
    if (this.testimonials.length > 0) {
      return this.testimonials[this.activeTestimonialIndex % this.testimonials.length];
    }
    return null;
  }

  getTestimonialFeedback(t: any): string {
    if (!t) return this.translationService.translate('testi.t1');
    const lang = this.translationService.currentLang();
    if (t.feedback && typeof t.feedback === 'object') return t.feedback[lang] || t.feedback['ar'] || '';
    if (lang === 'en') return t.feedback_en || t.feedback_ar || t.feedback || '';
    return t.feedback_ar || t.feedback_en || t.feedback || '';
  }

  getTestimonialName(t: any): string {
    if (!t) return this.translationService.translate('testi.n1');
    const lang = this.translationService.currentLang();
    if (t.client_name && typeof t.client_name === 'object') return t.client_name[lang] || t.client_name['ar'] || '';
    if (lang === 'en') return t.client_name_en || t.client_name_ar || t.client_name || '';
    return t.client_name_ar || t.client_name_en || t.client_name || '';
  }

  getTestimonialRole(t: any): string {
    if (!t) return this.translationService.translate('testi.r1');
    const lang = this.translationService.currentLang();
    if (t.job_title && typeof t.job_title === 'object') return t.job_title[lang] || t.job_title['ar'] || '';
    if (lang === 'en') return t.job_title_en || t.job_title_ar || t.job_title || '';
    return t.job_title_ar || t.job_title_en || t.job_title || '';
  }

  getTestimonialInitials(t: any): string {
    const name = this.getTestimonialName(t);
    if (!name) return 'MG';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  }

  getProjectTitle(p: any): string {
    if (!p) return '';
    const lang = this.translationService.currentLang();
    if (p.title && typeof p.title === 'object') {
      return p.title[lang] || p.title[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (lang === 'en') {
      return p.title_en || p.title_ar || (typeof p.title === 'string' ? p.title : '') || '';
    }
    return p.title_ar || p.title_en || (typeof p.title === 'string' ? p.title : '') || '';
  }

  getProjectDesc(p: any): string {
    if (!p) return '';
    const lang = this.translationService.currentLang();
    const desc = p.description || p.desc;
    if (desc && typeof desc === 'object') {
      return desc[lang] || desc[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (lang === 'en') {
      return p.description_en || p.description_ar || (typeof desc === 'string' ? desc : '') || '';
    }
    return p.description_ar || p.description_en || (typeof desc === 'string' ? desc : '') || '';
  }

  getCategoryName(p: any): string {
    if (!p) return '';
    const lang = this.translationService.currentLang();
    const cat = p.category;
    if (!cat) return '';
    if (typeof cat === 'string') return cat;
    if (cat.name && typeof cat.name === 'object') {
      return cat.name[lang] || cat.name[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (lang === 'en') {
      return cat.name_en || cat.name || cat.name_ar || 'Cinema Production';
    }
    return cat.name_ar || cat.name || cat.name_en || 'إنتاج سينمائي';
  }

  // Finale CTA
  getCtaEyebrow(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.cta?.eyebrow?.[lang]
      || this.homePageData?.cta?.eyebrow?.ar
      || this.homePageData?.cta?.eyebrow?.en
      || (lang === 'ar' ? 'هل أنت مستعد للمشروع القادم؟' : 'Ready for your next masterpiece?');
  }

  getCtaTitle(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.cta?.title?.[lang]
      || this.homePageData?.cta?.title?.ar
      || this.homePageData?.cta?.title?.en
      || (lang === 'ar' ? 'دعنا نصنع لعلامتك عملاً لا يُنسى' : 'Let’s produce something extraordinary together');
  }

  getCtaSub(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.cta?.sub?.[lang]
      || this.homePageData?.cta?.sub?.ar
      || this.homePageData?.cta?.sub?.en
      || (lang === 'ar'
        ? 'تحدث مباشرة مع فريق الإخراج والإنتاج لمناقشة فكرة عملك وتقدير الميزانية وجدول التنفيذ.'
        : 'Connect directly with our producers and creative directors to plan your upcoming campaign.');
  }

  getCtaBtn(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.cta?.btn?.[lang]
      || this.homePageData?.cta?.btn?.ar
      || this.homePageData?.cta?.btn?.en
      || (lang === 'ar' ? 'احجز جلسة نقاش الإنتاج' : 'Schedule Production Discovery');
  }
}
