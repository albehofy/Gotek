import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  aboutContent: any = null;

  timeline: any[] = [
    {
      year: '2018',
      title: { ar: 'البداية في القاهرة', en: 'Foundation in Cairo' },
      desc: {
        ar: 'انطلقت ميديا جلو كفريق إنتاج وتسويق رقمي يركز على النتائج الحقيقية والتميز البصري.',
        en: 'Media Glow was founded as a passionate creative production and marketing team.'
      }
    },
    {
      year: '2020',
      title: { ar: 'التوسع التقني والإنتاجي', en: 'Production & Tech Scale' },
      desc: {
        ar: 'إطلاق قسم الإنتاج السينمائي وهندسة وتطوير المنصات الرقمية المتكاملة.',
        en: 'Expanded into cinema-grade production sets, commercial films, and bespoke digital platforms.'
      }
    },
    {
      year: '2023',
      title: { ar: 'التوسع الإقليمي', en: 'Regional Expansion' },
      desc: {
        ar: 'خدمة أكثر من 200 علامة تجارية رائدة في مصر والمملكة العربية السعودية والإمارات.',
        en: 'Delivered landmark campaigns for 200+ visionary brands across Egypt, KSA, and UAE.'
      }
    },
    {
      year: '2026',
      title: { ar: 'الريادة والحلول المتكاملة', en: 'Industry Leadership' },
      desc: {
        ar: 'بناء استوديو إعلامي وسينمائي متكامل يقود الحملات الكبرى والأفلام الإعلانية بمعايير عالمية.',
        en: 'A flagship full-service production powerhouse shaping cinematic culture and digital dominance.'
      }
    }
  ];

  getTimelineTitle(t: any): string {
    if (!t) return '';
    const lang = this.translationService.currentLang();
    if (t.title && typeof t.title === 'object') {
      return t.title[lang] || t.title[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (t.title_ar || t.title_en) {
      return (lang === 'en' ? (t.title_en || t.title_ar) : (t.title_ar || t.title_en)) || '';
    }
    return typeof t.title === 'string' ? t.title : '';
  }

  getTimelineDesc(t: any): string {
    if (!t) return '';
    const lang = this.translationService.currentLang();
    const d = t.description || t.desc;
    if (d && typeof d === 'object') {
      return d[lang] || d[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (t.description_ar || t.description_en) {
      return (lang === 'en' ? (t.description_en || t.description_ar) : (t.description_ar || t.description_en)) || '';
    }
    return typeof d === 'string' ? d : '';
  }

  ngOnInit() {
    this.apiService.getAbout().subscribe((res: any) => {
      if (res?.data) {
        this.aboutContent = res.data.content || res.data;
        if (res.data.timeline && res.data.timeline.length) {
          this.timeline = res.data.timeline;
        }
      }
    });
  }

  getAboutData(): any {
    return this.translationService.siteContent()?.about || this.aboutContent || {};
  }

  getHeroEyebrow(): string {
    const d = this.getAboutData();
    const lang = this.translationService.currentLang();
    return d?.hero?.eyebrow?.[lang] || d?.hero?.eyebrow?.ar || d?.hero?.eyebrow?.en || this.translationService.translate('nav.about');
  }

  getHeroTitle1(): string {
    const d = this.getAboutData();
    const lang = this.translationService.currentLang();
    return d?.hero?.title1?.[lang] || d?.hero?.title1?.ar || d?.hero?.title1?.en || (lang === 'ar' ? 'نبني علامات تجارية' : 'We Build Brands');
  }

  getHeroTitle2(): string {
    const d = this.getAboutData();
    const lang = this.translationService.currentLang();
    return d?.hero?.title2?.[lang] || d?.hero?.title2?.ar || d?.hero?.title2?.en || (lang === 'ar' ? 'تترك أثراً حقيقياً' : 'That Make An Impact');
  }

  getHeroSub(): string {
    const d = this.getAboutData();
    const lang = this.translationService.currentLang();
    return d?.hero?.sub?.[lang] || d?.hero?.sub?.ar || d?.hero?.sub?.en || (lang === 'ar'
       ? 'ميديا جلو استوديو إنتاج وتسويق رقمي، بنجمع بين الفكر الاستراتيجي، الهوية البصرية الجذابة، والهندسة المتقنة.'
       : 'Media Glow is a premier production and branding agency.');
  }

  getPrinciples(): any[] {
    const d = this.getAboutData();
    if (d?.principles && Array.isArray(d.principles) && d.principles.length > 0) {
      return d.principles;
    }
    return [
      { num: '01', title: { ar: 'الوضوح التام', en: 'Total Clarity' }, desc: { ar: 'لا تعقيد ولا مصطلحات مبهمة — بنشاركك كل خطوة وخطة عمل بوضوح وشفافية.', en: 'No jargon or guesswork — we share every milestone.' } },
      { num: '02', title: { ar: 'التركيز على العائد', en: 'ROI Driven' }, desc: { ar: 'هدفنا مش مجرد أرقام وإعجابات، هدفنا زيادة مبيعاتك ونمو علامتك في السوق.', en: 'Our goal is tangible customer growth and bottom-line revenue.' } },
      { num: '03', title: { ar: 'حرفية التفاصيل', en: 'Craft in Detail' }, desc: { ar: 'من الخطوط والألوان حتى سرعة تحميل الكود، كل تفصيلة معمولة بعناية.', en: 'From typography and palette to speed and architecture.' } }
    ];
  }

  getPrincipleTitle(p: any): string {
    const lang = this.translationService.currentLang();
    if (p.title && typeof p.title === 'object') {
      return p.title[lang] || p.title.ar || p.title.en || '';
    }
    return p.title || '';
  }

  getPrincipleDesc(p: any): string {
    const lang = this.translationService.currentLang();
    if (p.desc && typeof p.desc === 'object') {
      return p.desc[lang] || p.desc.ar || p.desc.en || '';
    }
    return p.desc || '';
  }

  getPrincipleIcon(p: any, index: number): string {
    if (p?.icon) return p.icon;
    const icons = [
      'fa-solid fa-eye',
      'fa-solid fa-gem',
      'fa-solid fa-wand-magic-sparkles',
      'fa-solid fa-rocket'
    ];
    return icons[index % icons.length];
  }

  getTimelineIcon(t: any, index: number): string {
    if (t?.icon) return t.icon;
    const icons = [
      'fa-solid fa-rocket',
      'fa-solid fa-laptop-code',
      'fa-solid fa-earth-americas',
      'fa-solid fa-crown'
    ];
    return icons[index % icons.length];
  }

  // --- Team Leadership Section ---
  getTeamMembers(): any[] {
    const fromSite = this.translationService.siteContent()?.team?.items;
    if (Array.isArray(fromSite) && fromSite.length > 0) {
      return fromSite;
    }
    return [
      {
        name_ar: 'م. أحمد الشريف',
        name_en: 'Ahmed El-Sherif',
        role_ar: 'المخرج الإبداعي ومؤسس الاستوديو',
        role_en: 'Creative Director & Founder',
        image: '/assets/media-glow-icon.png'
      },
      {
        name_ar: 'د. ليلى فهمي',
        name_en: 'Dr. Layla Fahmy',
        role_ar: 'مديرة استراتيجيات النمو والتسويق',
        role_en: 'Head of Growth Strategy',
        image: '/assets/media-glow-icon.png'
      },
      {
        name_ar: 'كريم ممدوح',
        name_en: 'Karim Mamdouh',
        role_ar: 'مدير التصوير والإنتاج السينمائي',
        role_en: 'Director of Photography (DoP)',
        image: '/assets/media-glow-icon.png'
      }
    ];
  }

  getTeamMemberName(m: any): string {
    if (!m) return '';
    const lang = this.translationService.currentLang();
    if (m.name && typeof m.name === 'object') {
      return m.name[lang] || m.name.ar || m.name.en || '';
    }
    if (lang === 'en') {
      return m.name_en || m.name_ar || m.name || '';
    }
    return m.name_ar || m.name_en || m.name || '';
  }

  getTeamMemberRole(m: any): string {
    if (!m) return '';
    const lang = this.translationService.currentLang();
    if (m.role && typeof m.role === 'object') {
      return m.role[lang] || m.role.ar || m.role.en || '';
    }
    if (lang === 'en') {
      return m.role_en || m.role_ar || m.role || '';
    }
    return m.role_ar || m.role_en || m.role || '';
  }
}
