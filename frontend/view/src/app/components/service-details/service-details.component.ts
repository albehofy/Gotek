import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  route = inject(ActivatedRoute);

  slug = '';
  service: any = null;
  loading = true;

  defaultServicesCatalog: Record<string, any> = {
    '1': {
      icon: 'fa-solid fa-film',
      tag: { ar: 'الإنتاج الإعلاني والسينمائي', en: 'Cinema & Commercial Film' },
      title: { ar: 'الإنتاج الإعلاني والسينمائي المتكامل', en: 'High-End Commercial & Cinema Production' },
      lead: {
        ar: 'نقدم حلول إنتاج سينمائي متكاملة تشمل كتابة السيناريو، الإخراج الإبداعي، وأسطول كاميرات سينمائية متطورة (ARRI Alexa 35 و RED V-Raptor 8K).',
        en: 'Full-spectrum cinema production covering screenwriting, creative direction, location scouting, and top-tier camera packages (ARRI & RED 8K).'
      },
      deliverables: {
        ar: ['أسطول كاميرات ARRI & RED بدقة 8K', 'عدسات أنامورفيك سينمائية فاخرة (Cooke & Zeiss)', 'طاقم إخراج وإضاءة من نخبة صناع السينما', 'تصاريح وتأمين مواقع التصوير في مصر والخليج'],
        en: ['ARRI Alexa 35 & RED 8K Cinema Packages', 'Master Anamorphic Lenses (Cooke & Zeiss)', 'Elite Directors, DPs & Master Gaffers', 'Regional Location Permits & Set Logistics']
      },
      stats: [
        { label: { ar: 'مشروع منجز', en: 'Productions' }, value: '140+' },
        { label: { ar: 'دقة سينمائية', en: 'Max Master' }, value: '8K RAW' },
        { label: { ar: 'جوائز إقليمية', en: 'Industry Awards' }, value: '18' }
      ],
      process: [
        { title: { ar: 'المعالجة والسيناريو', en: 'Concept & Scripting' }, desc: { ar: 'كتابة النص الدرامي وبناء الـ Storyboard وتحديد الرؤية الفنية.', en: 'Crafting the narrative arc, storyboard, and director treatment.' } },
        { title: { ar: 'المعاينة وتجهيز الطاقم', en: 'Location & Casting' }, desc: { ar: 'اختيار مواقع التصوير، طاقم الممثلين، وتجهيز خطة الإضاءة.', en: 'Location scouting, casting talent, and cinema lighting diagrams.' } },
        { title: { ar: 'أيام التصوير السينمائي', en: 'Principal Photography' }, desc: { ar: 'إدارة موقع التصوير بأعلى معايير الإخراج والتصوير الاحترافي.', en: 'Set execution led by visionary directors and camera crews.' } },
        { title: { ar: 'المونتاج والتسليم النهائي', en: 'Post-Production Delivery' }, desc: { ar: 'المونتاج النهائي، المؤثرات الصوتية، والتلوين وتصدير النسخ.', en: 'Final cut, sound mastering, color grade, and multi-format export.' } }
      ]
    },
    'film-production': {
      icon: 'fa-solid fa-film',
      tag: { ar: 'الإنتاج الإعلاني والسينمائي', en: 'Cinema & Commercial Film' },
      title: { ar: 'الإنتاج الإعلاني والسينمائي المتكامل', en: 'High-End Commercial & Cinema Production' },
      lead: {
        ar: 'نقدم حلول إنتاج سينمائي متكاملة تشمل كتابة السيناريو، الإخراج الإبداعي، وأسطول كاميرات سينمائية متطورة (ARRI Alexa 35 و RED V-Raptor 8K).',
        en: 'Full-spectrum cinema production covering screenwriting, creative direction, location scouting, and top-tier camera packages (ARRI & RED 8K).'
      },
      deliverables: {
        ar: ['أسطول كاميرات ARRI & RED بدقة 8K', 'عدسات أنامورفيك سينمائية فاخرة (Cooke & Zeiss)', 'طاقم إخراج وإضاءة من نخبة صناع السينما', 'تصاريح وتأمين مواقع التصوير في مصر والخليج'],
        en: ['ARRI Alexa 35 & RED 8K Cinema Packages', 'Master Anamorphic Lenses (Cooke & Zeiss)', 'Elite Directors, DPs & Master Gaffers', 'Regional Location Permits & Set Logistics']
      },
      process: [
        { title: { ar: 'المعالجة والسيناريو', en: 'Concept & Scripting' }, desc: { ar: 'كتابة النص الدرامي وبناء الـ Storyboard وتحديد الرؤية الفنية.', en: 'Crafting the narrative arc, storyboard, and director treatment.' } },
        { title: { ar: 'المعاينة وتجهيز الطاقم', en: 'Location & Casting' }, desc: { ar: 'اختيار مواقع التصوير، طاقم الممثلين، وتجهيز خطة الإضاءة.', en: 'Location scouting, casting talent, and cinema lighting diagrams.' } },
        { title: { ar: 'أيام التصوير السينمائي', en: 'Principal Photography' }, desc: { ar: 'إدارة موقع التصوير بأعلى معايير الإخراج والتصوير الاحترافي.', en: 'Set execution led by visionary directors and camera crews.' } },
        { title: { ar: 'المونتاج والتسليم النهائي', en: 'Post-Production Delivery' }, desc: { ar: 'المونتاج النهائي، المؤثرات الصوتية، والتلوين وتصدير النسخ.', en: 'Final cut, sound mastering, color grade, and multi-format export.' } }
      ]
    },
    '2': {
      icon: 'fa-solid fa-wand-magic-sparkles',
      tag: { ar: 'ما بعد الإنتاج والتلوين', en: 'Post-Production & VFX' },
      title: { ar: 'المونتاج، المؤثرات البصرية وتصحيح الألوان', en: 'Post-Production, VFX & Color Grading' },
      lead: {
        ar: 'مختبر ما بعد الإنتاج مجهز بأحدث وحدات DaVinci Resolve Studio وشاشات Sony BVM المعتمدة لهوليوود ومعايرة ألوان HDR مذهلة.',
        en: 'Equipped with DaVinci Resolve Studio, Sony BVM mastering monitors, narrative offline editing, 3D CGI, and calibrated HDR grading.'
      },
      deliverables: {
        ar: ['تصحيح ألوان سينمائي DaVinci Resolve Master HDR', 'مؤثرات بصرية CGI ثلاثية الأبعاد ومحاكاة واقعية', 'مونتاج سردي وإيقاعي بأعلى معايير الإبهار', 'تسليم صيغ بث متعددة (TV, Cinema DCP, Social)'],
        en: ['DaVinci Resolve Certified Color Grading (HDR)', '3D CGI, Photoreal Simulation & Compositing', 'Narrative Editorial & High-Paced Assembly', 'Multi-Format Deliverables (DCP, Web, Broadcast)']
      },
      process: [
        { title: { ar: 'تجميع المواد والقص الأولي', en: 'Assembly & Rough Cut' }, desc: { ar: 'فرز أفضل اللقطات وبناء الهيكل السردي المتسلسل.', en: 'Selecting best takes and structuring narrative flow.' } },
        { title: { ar: 'المؤثرات وتصحيح الألوان', en: 'VFX & Color Mastery' }, desc: { ar: 'معايرة الألوان طبقة بطبقة وإضافة الجرافيك ثلاثي الأبعاد.', en: 'Frame-by-frame color balancing and photoreal CGI compositing.' } },
        { title: { ar: 'الماستر النهائي', en: 'Master Export' }, desc: { ar: 'تصدير النسخ بجميع مقاسات الشاشات والبث التلفزيوني.', en: 'Final export in cinema DCP, 4K broadcast, and social ratios.' } }
      ]
    },
    'brand-identity': {
      icon: 'fa-solid fa-palette',
      tag: { ar: 'هوية بصرية وإخراج فني', en: 'Brand Identity & Art Direction' },
      title: { ar: 'تصميم الهوية البصرية المتكاملة', en: 'Complete Brand Identity Design' },
      lead: {
        ar: 'بناء هويات بصرية أيقونية تدوم وتمنح علامتك تميزاً استثنائياً في الأسواق التنافسية.',
        en: 'Crafting timeless visual identity systems that command authority and emotional loyalty.'
      },
      deliverables: {
        ar: ['شعار احترافي ودليل الهوية Brand Guidelines', 'منظومة الألوان والخطوط التيبوغرافية', 'تصميم القرطاسية والمطبوعات الفاخرة', 'قوالب التواصل الاجتماعي الموحدة'],
        en: ['Signature Logo & Comprehensive Brand Guidelines', 'Custom Typography & Color Palette System', 'Editorial Stationery & Luxury Print Design', 'Unified Social Media Templates']
      },
      process: [
        { title: { ar: 'البحث والتموضع', en: 'Brand Discovery' }, desc: { ar: 'دراسة السوق والمنافسين وتحديد شخصية العلامة وقيمها.', en: 'Analyzing category landscape and defining the brand essence.' } },
        { title: { ar: 'المسودات والمفاهيم', en: 'Concept Ideation' }, desc: { ar: 'ابتكار مفاهيم بصرية متعددة وعرض النماذج الأولية.', en: 'Drafting distinct visual directions and moodboards.' } },
        { title: { ar: 'التطوير والتطبيق', en: 'System Development' }, desc: { ar: 'تطبيق الهوية على كل المطبوعات والوسائط والواجهات.', en: 'Applying the chosen identity across all digital & physical touchpoints.' } }
      ]
    },
    'digital-marketing': {
      icon: 'fa-solid fa-chart-line',
      tag: { ar: 'تسويق رقمي وحملات نمو', en: 'Performance Marketing' },
      title: { ar: 'التسويق الرقمي وإدارة الحملات الإعلانية', en: 'Digital Marketing & Growth Campaigns' },
      lead: {
        ar: 'استراتيجيات تسويق مدفوعة بالبيانات لتحقيق أعلى عائد على الإنفاق الإعلاني وزيادة الحصة السوقية.',
        en: 'High-conversion advertising campaigns engineered for maximum return on ad spend (ROAS).'
      },
      deliverables: {
        ar: ['إدارة حملات Meta و Google و TikTok', 'بناء مسارات التحويل Funnels', 'تقارير أداء لحظية وتحليلات ROI', 'إعلانات إعادة الاستهداف المتقدمة'],
        en: ['Meta, Google, and TikTok Ads Management', 'High-Converting Sales Funnels', 'Real-Time Performance Dashboards', 'Advanced Retargeting Sequences']
      },
      process: [
        { title: { ar: 'تدقيق الأداء والاستراتيجية', en: 'Audit & Strategy' }, desc: { ar: 'تحليل الأداء السابق وتحديد مؤشرات النجاح المستهدفة.', en: 'Deep audit of previous campaigns and KPI alignment.' } },
        { title: { ar: 'إطلاق الحملات والاختبار', en: 'Launch & A/B Testing' }, desc: { ar: 'اختبار الإبداع والاستهداف للوصول للتركيبة الرابحة.', en: 'Rapid testing of creative variations and target audiences.' } },
        { title: { ar: 'التوسع والمضاعفة', en: 'Scaling & Growth' }, desc: { ar: 'مضاعفة الميزانية على الحملات المربحة لزيادة المبيعات.', en: 'Aggressively scaling high-performing ads to drive peak revenue.' } }
      ]
    }
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '1';
      this.loadServiceData();
    });
  }

  loadServiceData() {
    this.loading = true;
    
    // 1. Try fetching directly by id or slug from API
    this.apiService.getService(this.slug).subscribe({
      next: (res: any) => {
        const item = res?.data ? res.data : res;
        if (item && (item.title || item.title_ar || item.title_en)) {
          this.mapService(item);
          this.loading = false;
        } else {
          this.findInAllServices();
        }
      },
      error: () => this.findInAllServices()
    });
  }

  private findInAllServices() {
    this.apiService.getServices().subscribe({
      next: (res: any) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        const match = arr.find((s: any) => 
          s.slug === this.slug || 
          s.id?.toString() === this.slug ||
          (s.title_en && s.title_en.toLowerCase().includes(this.slug.toLowerCase()))
        );

        if (match) {
          this.mapService(match);
        } else if (arr.length > 0) {
          // If not found by slug, take first service from API
          this.mapService(arr[0]);
        } else if (this.defaultServicesCatalog[this.slug]) {
          this.service = this.defaultServicesCatalog[this.slug];
        } else {
          this.service = this.defaultServicesCatalog['1'];
        }
        this.loading = false;
      },
      error: () => {
        this.service = this.defaultServicesCatalog[this.slug] || this.defaultServicesCatalog['1'];
        this.loading = false;
      }
    });
  }

  private mapService(raw: any) {
    const titleAr = raw.title_ar || (typeof raw.title === 'object' ? raw.title?.ar : raw.title);
    const titleEn = raw.title_en || (typeof raw.title === 'object' ? raw.title?.en : raw.title);
    const descAr = raw.description_ar || (typeof raw.description === 'object' ? raw.description?.ar : raw.description);
    const descEn = raw.description_en || (typeof raw.description === 'object' ? raw.description?.en : raw.description);
    const subAr = raw.subtitle_ar || (typeof raw.category === 'object' ? raw.category?.ar : raw.category) || 'خدمة استوديو سينمائي';
    const subEn = raw.subtitle_en || (typeof raw.category === 'object' ? raw.category?.en : raw.category) || 'Cinema Studio Service';

    // Parse features / deliverables
    let delivAr: string[] = [];
    let delivEn: string[] = [];
    if (Array.isArray(raw.features)) {
      raw.features.forEach((f: any) => {
        if (typeof f === 'object' && f !== null) {
          if (f.ar) delivAr.push(f.ar);
          if (f.en) delivEn.push(f.en);
        } else if (typeof f === 'string') {
          delivAr.push(f);
          delivEn.push(f);
        }
      });
    }

    if (delivAr.length === 0) {
      delivAr = ['أسطول كاميرات ومعدات سينمائية معتمدة', 'طاقم إخراج وتصوير محترف', 'تصحيح ألوان وإخراج فني عالي الدقة', 'تسليم بجميع صيغ البث والتواصل'];
      delivEn = ['Certified cinema camera packages & lighting', 'Elite directorial and camera team', 'Master color grading and precision finishing', 'Turnkey multi-format broadcast delivery'];
    }

    this.service = {
      icon: raw.iconClass || raw.icon || 'fa-solid fa-film',
      tag: { ar: subAr, en: subEn },
      title: { ar: titleAr, en: titleEn },
      lead: { ar: descAr, en: descEn },
      deliverables: { ar: delivAr, en: delivEn },
      stats: Array.isArray(raw.stats) && raw.stats.length ? raw.stats : [
        { label: { ar: 'مشروع منجز', en: 'Productions' }, value: '140+' },
        { label: { ar: 'دقة سينمائية', en: 'Max Master' }, value: '8K RAW' },
        { label: { ar: 'جوائز إقليمية', en: 'Industry Awards' }, value: '18' }
      ],
      process: [
        { title: { ar: 'المعالجة والرؤية الفنية', en: 'Concept & Treatment' }, desc: { ar: 'دراسة المتطلبات ورسم لوحات القصة وتحديد المعالجة البصرية.', en: 'Deconstructing brand goals into cinematic treatments and storyboards.' } },
        { title: { ar: 'التحضير ومعاينة المواقع', en: 'Pre-Production & Tech Scout' }, desc: { ar: 'حجز المعدات والطواقم وتأمين مواقع التصوير ورسم خطط الإضاءة.', en: 'Locking camera fleet, master gaffers, and site filming permits.' } },
        { title: { ar: 'التنفيذ وأيام التصوير', en: 'Principal Production' }, desc: { ar: 'إدارة أيام التصوير بأعلى دقة إخراجية وحرفية تقنية.', en: 'On-set production powered by visionary directors and precision crew.' } },
        { title: { ar: 'المونتاج والتلوين والتسليم', en: 'Post & Master Delivery' }, desc: { ar: 'المونتاج، المؤثرات، معايرة DaVinci HDR، وهندسة الصوت.', en: 'Master editorial, DaVinci HDR grading, Dolby sound, and release.' } }
      ]
    };
  }

  getText(obj: any): string {
    if (!obj) return '';
    const lang = this.translationService.currentLang();
    if (typeof obj === 'object') {
      return obj[lang] || obj.ar || obj.en || '';
    }
    return obj;
  }

  getDeliverables(): string[] {
    if (!this.service || !this.service.deliverables) return [];
    const lang = this.translationService.currentLang();
    const otherLang = lang === 'ar' ? 'en' : 'ar';
    let list: any[] = [];
    if (Array.isArray(this.service.deliverables)) {
      list = this.service.deliverables;
    } else if (typeof this.service.deliverables === 'object') {
      list = this.service.deliverables[lang] || this.service.deliverables[otherLang] || [];
    }
    if (!Array.isArray(list)) return [];
    return list.map((item: any) => {
      if (typeof item === 'object' && item !== null) {
        return item[lang] || item[otherLang] || item.ar || item.en || item.name || '';
      }
      return String(item || '');
    }).filter((item: string) => item && item.trim().length > 0);
  }

  getStats(): any[] {
    if (!this.service || !this.service.stats) return [];
    return this.service.stats;
  }

  getWhatsAppServiceUrl(): string {
    const title = this.getText(this.service?.title);
    const isAr = this.translationService.currentLang() === 'ar';
    const text = isAr 
      ? `مرحباً ميديا جلو، أود حجز استشارة إنتاجية بخصوص خدمة: "${title}"`
      : `Hello Media Glow, I would like to book a cinema production consultation for: "${title}"`;
    return `https://wa.me/201000123456?text=${encodeURIComponent(text)}`;
  }
}
