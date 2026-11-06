import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, TagModule, ButtonModule, CardModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  services: any[] = [];
  servicesPageData: any = {};

  defaultServices = [
    {
      icon: 'fa-solid fa-bullhorn',
      title: { ar: 'التسويق الرقمي وإدارة الحملات', en: 'Digital Marketing & Campaign Management' },
      desc: {
        ar: 'استراتيجيات تسويقية متكاملة لزيادة المبيعات وتحقيق أعلى عائد على الاستثمار في كبرى المنصات الإعلانية.',
        en: 'Integrated marketing strategies engineered to scale sales and maximize ROI across major advertising platforms.'
      },
      features: {
        ar: ['إدارة حسابات الإعلانات على Meta & Google', 'تحسين الاستهداف والديموغرافية الدقيقة', 'تقارير أداء يومية وتحليل مستمر', 'حملات ريتارجتينج وتسويق مباشر'],
        en: ['Meta & Google Ads account management', 'Precision demographic targeting & optimization', 'Daily performance reporting & continuous analysis', 'Retargeting and direct-response funnels']
      }
    },
    {
      icon: 'fa-solid fa-palette',
      title: { ar: 'تصميم الهوية البصرية', en: 'Brand Identity Design' },
      desc: {
        ar: 'ابتكار هويات بصرية فريدة ومتكاملة تعكس قيم علامتك التجارية وتميزها بشكل استثنائي في السوق.',
        en: 'Creating unique, comprehensive visual identities that reflect brand values and command distinction in the market.'
      },
      features: {
        ar: ['تصميم الشعار والدليل الإرشادي', 'هوية بصرية متكاملة ومتناسقة', 'تصميم مطبوعات وقرطاسية', 'تطوير الألوان والخطوط المميزة'],
        en: ['Logo design & comprehensive brand guidelines', 'Cohesive visual identity systems', 'Print & stationery design', 'Signature typography and color palette systems']
      }
    },
    {
      icon: 'fa-solid fa-share-nodes',
      title: { ar: 'إدارة وسائل التواصل الاجتماعي', en: 'Social Media Management' },
      desc: {
        ar: 'إدارة احترافية ومنهجية لحسابات التواصل الاجتماعي بمحتوى إبداعي يبني جمهوراً حقيقياً ومتفاعلاً.',
        en: 'Strategic social media management with high-converting creative content that builds an engaged, loyal audience.'
      },
      features: {
        ar: ['تصوير وإنتاج محتوى يومي', 'كتابة تعليقات وإدارة المجتمع', 'تحليل الأداء والنمو', 'خطة محتوى شهرية'],
        en: ['Daily creative content creation & shooting', 'Copywriting & community moderation', 'Growth & performance analytics', 'Monthly strategic content calendar']
      }
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: { ar: 'تطوير المواقع والتطبيقات', en: 'Web & App Development' },
      desc: {
        ar: 'بناء مواقع وتطبيقات ويب احترافية سريعة وآمنة تحقق أهدافك التجارية وتوفر تجربة مستخدم استثنائية.',
        en: 'Engineering ultra-fast, secure web platforms and digital experiences that turn visitors into loyal clients.'
      },
      features: {
        ar: ['تطوير مواقع ومتاجر إلكترونية', 'تطبيقات ويب متكاملة', 'ربط بوابات الدفع والـ APIs', 'تحسين سرعة الأداء SEO'],
        en: ['Custom websites & e-commerce stores', 'Integrated web applications & portals', 'Payment gateways & API integrations', 'Performance optimization & technical SEO']
      }
    },
    {
      icon: 'fa-solid fa-film',
      title: { ar: 'إنتاج المحتوى المرئي والسينمائي', en: 'Cinematic & Video Production' },
      desc: {
        ar: 'تصوير ومونتاج فيديوهات احترافية عالية الجودة للإعلانات والريلز والمحتوى التسويقي متعدد المنصات.',
        en: 'High-end cinema filming and editing for commercial TVCs, digital reels, and multi-platform advertising.'
      },
      features: {
        ar: ['إنتاج إعلانات فيديو', 'تصوير وإنتاج ريلز احترافي', 'موشن جرافيك وأنيميشن', 'بث مباشر وتغطيات فعاليات'],
        en: ['TV commercial and brand film production', 'High-conversion short-form reels', '2D/3D motion graphics & animation', 'Multi-camera live broadcast & event coverage']
      }
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: { ar: 'الاستراتيجية والتحليل الرقمي', en: 'Digital Strategy & Analytics' },
      desc: {
        ar: 'خطة تسويقية شاملة ومدروسة قائمة على البيانات لتحقيق أهداف نموك الرقمي وزيادة حصتك السوقية.',
        en: 'Data-driven marketing and strategic roadmap designed to accelerate market share and sustainable growth.'
      },
      features: {
        ar: ['تحليل المنافسين والسوق', 'خطة تسويقية سنوية', 'تحليل بيانات وتقارير مفصلة', 'تحسين معدلات التحويل'],
        en: ['Market & competitive benchmarking', 'Annual strategic marketing blueprint', 'Data intelligence and custom dashboards', 'Conversion rate optimization (CRO)']
      }
    }
  ];

  processSteps = [
    { num: '01', icon: 'fa-solid fa-compass-drafting', title: { ar: 'التحليل والاستكشاف', en: 'Discovery & Research' }, desc: { ar: 'نبدأ بفهم عميق لعلامتك التجارية وأهدافك والجمهور المستهدف بدقة متناهية.', en: 'We start by unpacking your brand, audience demographics, and core objectives.' } },
    { num: '02', icon: 'fa-solid fa-lightbulb', title: { ar: 'التخطيط الاستراتيجي', en: 'Strategic Planning' }, desc: { ar: 'نضع خارطة طريق مخصصة ومعايير إنجاز واضحة لتحقيق نتائج استثنائية.', en: 'We formulate a tailored roadmap to deliver measurable, scalable outcomes.' } },
    { num: '03', icon: 'fa-solid fa-palette', title: { ar: 'التصميم والإنتاج', en: 'Design & Production' }, desc: { ar: 'فريقنا الإبداعي يحيل الأفكار إلى مواد بصرية وسينمائية استثنائية بأعلى جودة.', en: 'Our creative team transforms concepts into striking visual assets.' } },
    { num: '04', icon: 'fa-solid fa-rocket', title: { ar: 'التنفيذ والإطلاق', en: 'Execution & Launch' }, desc: { ar: 'نُطلق الحملات ونراقب مقاييس التفاعل والتحويل بشكل لحظي ودقيق.', en: 'We roll out campaigns and monitor real-time metrics with precision.' } },
    { num: '05', icon: 'fa-solid fa-chart-pie', title: { ar: 'القياس والتحسين', en: 'Measurement & Optimization' }, desc: { ar: 'نحلل النتائج باستمرار ونحسّن الأداء لضمان مضاعفة العائد على الاستثمار.', en: 'Continuous performance optimization to maximize return on investment.' } }
  ];

  getProcessTitle(p: any): string {
    if (!p) return '';
    const lang = this.translationService.currentLang();
    return (p.title && p.title[lang]) || (p.title && p.title['ar']) || '';
  }

  getProcessDesc(p: any): string {
    if (!p) return '';
    const lang = this.translationService.currentLang();
    return (p.desc && p.desc[lang]) || (p.desc && p.desc['ar']) || '';
  }

  getWhatsAppUrl(serviceTitle?: string): string {
    const phone = this.translationService.siteContent()?.contact?.whatsapp 
      || this.translationService.siteContent()?.footer?.phone 
      || '201000000000';
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const svc = serviceTitle ? ` (${serviceTitle})` : '';
    const msg = this.translationService.currentLang() === 'ar' 
      ? encodeURIComponent(`مرحباً ميديا جلو، أود حجز استشارة بخصوص خدمة${svc}`) 
      : encodeURIComponent(`Hello Media Glow, I would like to book a consultation regarding${svc}`);
    return `https://wa.me/${cleanPhone}?text=${msg}`;
  }

  getServiceTitle(s: any): string {
    if (!s) return '';
    const lang = this.translationService.currentLang();
    if (typeof s.title === 'object' && s.title !== null) {
      return s.title[lang] || s.title[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof s.title_ar === 'string' || typeof s.title_en === 'string') {
      return (lang === 'en' ? (s.title_en || s.title_ar) : (s.title_ar || s.title_en)) || '';
    }
    return typeof s.title === 'string' ? s.title : '';
  }

  getServiceDesc(s: any): string {
    if (!s) return '';
    const lang = this.translationService.currentLang();
    const descObj = s.description || s.desc;
    if (typeof descObj === 'object' && descObj !== null) {
      return descObj[lang] || descObj[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof s.description_ar === 'string' || typeof s.description_en === 'string') {
      return (lang === 'en' ? (s.description_en || s.description_ar) : (s.description_ar || s.description_en)) || '';
    }
    if (typeof s.desc_ar === 'string' || typeof s.desc_en === 'string') {
      return (lang === 'en' ? (s.desc_en || s.desc_ar) : (s.desc_ar || s.desc_en)) || '';
    }
    return typeof descObj === 'string' ? descObj : '';
  }

  getServiceFeatures(s: any): string[] {
    if (!s || !s.features) return [];
    const lang = this.translationService.currentLang();
    const otherLang = lang === 'ar' ? 'en' : 'ar';
    let rawFeatures = s.features;

    // Handle if rawFeatures is stringified JSON
    if (typeof rawFeatures === 'string') {
      try {
        rawFeatures = JSON.parse(rawFeatures);
      } catch {
        return rawFeatures.split(',').map((x: string) => x.trim()).filter(Boolean);
      }
    }

    // If rawFeatures is an object like { ar: [...], en: [...] }
    if (rawFeatures && typeof rawFeatures === 'object' && !Array.isArray(rawFeatures)) {
      const localized = rawFeatures[lang] || rawFeatures[otherLang] || [];
      if (Array.isArray(localized)) {
        rawFeatures = localized;
      } else if (typeof localized === 'string') {
        return localized.split(',').map((x: string) => x.trim()).filter(Boolean);
      }
    }

    // If rawFeatures is an array (of bilingual objects or plain strings)
    if (Array.isArray(rawFeatures)) {
      return rawFeatures.map((item: any) => {
        if (!item) return '';
        if (typeof item === 'object') {
          return item[lang] || item[otherLang] || item.ar || item.en || item.name || item.title || '';
        }
        if (typeof item === 'string') {
          if (item.trim().startsWith('{') && item.trim().endsWith('}')) {
            try {
              const parsed = JSON.parse(item);
              return parsed[lang] || parsed[otherLang] || parsed.ar || parsed.en || item;
            } catch {
              return item;
            }
          }
          return item;
        }
        return String(item);
      }).filter((f: string) => typeof f === 'string' && f.trim().length > 0);
    }

    return [];
  }

  getServiceIcon(icon: string, index: number): string {
    if (!icon) {
      const fallbacks = [
        'fa-solid fa-bullhorn',
        'fa-solid fa-palette',
        'fa-solid fa-share-nodes',
        'fa-solid fa-laptop-code',
        'fa-solid fa-film',
        'fa-solid fa-chart-line'
      ];
      return fallbacks[index % fallbacks.length];
    }
    const map: Record<string, string> = {
      'pi pi-megaphone': 'fa-solid fa-bullhorn',
      'pi pi-palette': 'fa-solid fa-palette',
      'pi pi-share-alt': 'fa-solid fa-share-nodes',
      'pi pi-globe': 'fa-solid fa-laptop-code',
      'pi pi-video': 'fa-solid fa-film',
      'pi pi-chart-line': 'fa-solid fa-chart-line',
      'pi pi-search': 'fa-solid fa-magnifying-glass',
      'pi pi-lightbulb': 'fa-solid fa-lightbulb',
      'pi pi-play': 'fa-solid fa-play',
      'pi pi-chart-bar': 'fa-solid fa-chart-simple'
    };
    if (map[icon]) return map[icon];
    if (icon.startsWith('fa-')) return icon;
    if (icon.startsWith('fi-') || icon.startsWith('fi ')) return icon;
    return 'fa-solid ' + icon;
  }

  ngOnInit() {
    this.apiService.getServices().subscribe((res: any) => {
      const data = res?.data || res;
      this.services = Array.isArray(data) && data.length ? data : [];
    });

    this.apiService.getPageContent('services').subscribe((res: any) => {
      if (res && res.data) {
        this.servicesPageData = res.data;
      }
    });
  }

  getHeroTag(): string {
    const lang = this.translationService.currentLang();
    return this.servicesPageData?.hero?.tag?.[lang]
      || this.servicesPageData?.hero?.tag?.ar
      || this.servicesPageData?.hero?.tag?.en
      || (lang === 'ar' ? 'حلول إبداعية وإنتاج سينمائي' : 'CREATIVE SUITE & CINEMA PRODUCTION');
  }

  getHeroTitle(): string {
    const lang = this.translationService.currentLang();
    return this.servicesPageData?.hero?.title?.[lang]
      || this.servicesPageData?.hero?.title?.ar
      || this.servicesPageData?.hero?.title?.en
      || this.translationService.translate('services.title');
  }

  getHeroDesc(): string {
    const lang = this.translationService.currentLang();
    return this.servicesPageData?.hero?.desc?.[lang]
      || this.servicesPageData?.hero?.desc?.ar
      || this.servicesPageData?.hero?.desc?.en
      || this.translationService.translate('services.sub');
  }

  getServiceSlug(s: any, i: number): string {
    if (s && s.id) return s.id.toString();
    if (s && s.slug) return s.slug;
    const slugs = ['film-production', 'brand-identity', 'digital-marketing', 'web-development', 'content-production', 'analytics-strategy'];
    return slugs[i % slugs.length];
  }

  isImageUrl(val: string): boolean {
    if (!val) return false;
    return val.startsWith('http://') || val.startsWith('https://') || val.startsWith('/') || val.startsWith('data:') || /\.(png|jpg|jpeg|svg|webp|gif)$/i.test(val);
  }
}
