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

  // Data from API
  projects: any[] = [];
  testimonials: any[] = [];
  services: any[] = [];
  homePageData: any = null;
  activeTestimonialIndex = 0;
  isShowreelOpen = false;

  ngOnInit() {
    this.loadApiData();
    this.loadPageContent();
  }

  loadApiData() {
    this.apiService.getProjects({ limit: 3 }).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.projects = Array.isArray(data) ? data : [];
    });

    this.apiService.getTestimonials(5).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.testimonials = Array.isArray(data) ? data : [];
    });
  }

  loadPageContent() {
    this.apiService.getPageContent('home').subscribe({
      next: (res: any) => {
        if (res && res.data) {
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
      || this.translationService.translate('hero.award');
  }

  getHeroLine1(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.hero?.title1?.[lang]
      || this.homePageData?.hero?.title1?.ar
      || this.homePageData?.hero?.title1?.en
      || this.translationService.translate('hero.line1');
  }

  getHeroLine2(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.hero?.title2?.[lang]
      || this.homePageData?.hero?.title2?.ar
      || this.homePageData?.hero?.title2?.en
      || this.translationService.translate('hero.line2');
  }

  getHeroSub(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.hero?.subtitle?.[lang]
      || this.homePageData?.hero?.subtitle?.ar
      || this.homePageData?.hero?.subtitle?.en
      || this.translationService.translate('hero.sub');
  }

  getShowreelUrl(): string {
    return this.homePageData?.hero?.showreel_url || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
  }

  getShowreelPoster(): string {
    return this.homePageData?.hero?.showreel_poster || '/assets/hero-visual-premium.png';
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

  openShowreel() {
    this.isShowreelOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeShowreel() {
    this.isShowreelOpen = false;
    document.body.style.overflow = '';
  }

  setTestimonialIndex(index: number) {
    this.activeTestimonialIndex = index;
  }

  getProjectTitle(p: any): string {
    const lang = this.translationService.currentLang();
    if (p.title && typeof p.title === 'object') {
      return p.title[lang] || p.title.ar || p.title.en || '';
    }
    return p.title_ar || p.title || '';
  }

  getProjectDesc(p: any): string {
    const lang = this.translationService.currentLang();
    if (p.description && typeof p.description === 'object') {
      return p.description[lang] || p.description.ar || p.description.en || '';
    }
    return p.description_ar || p.description || '';
  }

  getCategoryName(p: any): string {
    const lang = this.translationService.currentLang();
    const cat = p.category;
    if (!cat) return '';
    if (cat.name && typeof cat.name === 'object') {
      return cat.name[lang] || cat.name.ar || cat.name.en || '';
    }
    return cat.name_ar || cat.name || '';
  }

  // 4 Core Pillars dynamic support
  getPillars(): any[] {
    if (this.homePageData?.pillars && Array.isArray(this.homePageData.pillars) && this.homePageData.pillars.length > 0) {
      return this.homePageData.pillars;
    }
    return [
      {
        index: '01',
        icon_type: 'icon',
        icon: 'fa-solid fa-film',
        title: { ar: this.translationService.translate('services.s1.t'), en: 'Cinematic Production' },
        desc: { ar: this.translationService.translate('services.s1.d'), en: '4K/8K Cinematography & TVCs' },
        btn_text: { ar: 'استكشف الخدمة', en: 'Explore Service' },
        url: '/services'
      },
      {
        index: '02',
        icon_type: 'icon',
        icon: 'fa-solid fa-palette',
        title: { ar: this.translationService.translate('services.s2.t'), en: 'Brand Identity' },
        desc: { ar: this.translationService.translate('services.s2.d'), en: 'Iconic branding and art direction' },
        btn_text: { ar: 'استكشف الخدمة', en: 'Explore Service' },
        url: '/services'
      },
      {
        index: '03',
        icon_type: 'icon',
        icon: 'fa-solid fa-chart-line',
        title: { ar: this.translationService.translate('services.s3.t'), en: 'Digital Campaigns' },
        desc: { ar: this.translationService.translate('services.s3.d'), en: 'High ROI digital growth' },
        btn_text: { ar: 'استكشف الخدمة', en: 'Explore Service' },
        url: '/services'
      },
      {
        index: '04',
        icon_type: 'icon',
        icon: 'fa-solid fa-video',
        title: { ar: this.translationService.translate('services.s4.t'), en: 'Live Events Coverage' },
        desc: { ar: this.translationService.translate('services.s4.d'), en: 'Cinema gear and broadcasting' },
        btn_text: { ar: 'استكشف الخدمة', en: 'Explore Service' },
        url: '/services'
      }
    ];
  }

  isPillarImage(p: any): boolean {
    if (!p) return false;
    if (p.icon_type === 'image') return true;
    const val = p.icon || '';
    return val.startsWith('http://') || val.startsWith('https://') || val.startsWith('/') || val.startsWith('data:') || /\.(png|jpg|jpeg|svg|webp|gif)$/i.test(val);
  }

  getPillarTitle(p: any): string {
    const lang = this.translationService.currentLang();
    if (p.title && typeof p.title === 'object') {
      return p.title[lang] || p.title.ar || p.title.en || '';
    }
    return p.title || '';
  }

  getPillarDesc(p: any): string {
    const lang = this.translationService.currentLang();
    if (p.desc && typeof p.desc === 'object') {
      return p.desc[lang] || p.desc.ar || p.desc.en || '';
    }
    return p.desc || '';
  }

  getPillarBtn(p: any): string {
    const lang = this.translationService.currentLang();
    if (p.btn_text && typeof p.btn_text === 'object') {
      return p.btn_text[lang] || p.btn_text.ar || p.btn_text.en || '';
    }
    return p.btn_text || (lang === 'ar' ? 'استكشف الخدمة' : 'Explore Service');
  }

  // Partners & Brand Trust
  getPartnersCaption(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.partners?.caption?.[lang]
      || this.homePageData?.partners?.caption?.ar
      || this.homePageData?.partners?.caption?.en
      || this.translationService.translate('strip.cap');
  }

  getPartnersList(): any[] {
    if (this.homePageData?.partners?.brands && Array.isArray(this.homePageData.partners.brands) && this.homePageData.partners.brands.length > 0) {
      return this.homePageData.partners.brands;
    }
    return [
      { name: 'QIRMIZ', logo: '' },
      { name: 'AL NOOR', logo: '' },
      { name: 'TAKAMOL', logo: '' },
      { name: 'NILEWAVE', logo: '' },
      { name: 'ORBITA', logo: '' },
      { name: 'LUMINA', logo: '' }
    ];
  }

  // Process Steps
  getProcessEyebrow(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.process?.eyebrow?.[lang]
      || this.homePageData?.process?.eyebrow?.ar
      || this.homePageData?.process?.eyebrow?.en
      || this.translationService.translate('process.eyebrow');
  }

  getProcessTitle(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.process?.title?.[lang]
      || this.homePageData?.process?.title?.ar
      || this.homePageData?.process?.title?.en
      || this.translationService.translate('process.title');
  }

  getProcessSteps(): any[] {
    if (this.homePageData?.process?.steps && Array.isArray(this.homePageData.process.steps) && this.homePageData.process.steps.length > 0) {
      return this.homePageData.process.steps;
    }
    return [
      { num: '01', title: { ar: this.translationService.translate('process.s1.t'), en: 'Discovery & Script' }, desc: { ar: this.translationService.translate('process.s1.d'), en: 'Message & Storyboard' } },
      { num: '02', title: { ar: this.translationService.translate('process.s2.t'), en: 'Pre-Production' }, desc: { ar: this.translationService.translate('process.s2.d'), en: 'Locations & Gear' } },
      { num: '03', title: { ar: this.translationService.translate('process.s3.t'), en: 'Production' }, desc: { ar: this.translationService.translate('process.s3.d'), en: 'Cinema Cameras & Crew' } },
      { num: '04', title: { ar: this.translationService.translate('process.s4.t'), en: 'Post-Production' }, desc: { ar: this.translationService.translate('process.s4.d'), en: 'Color Grading & VFX' } }
    ];
  }

  getStepTitle(st: any): string {
    const lang = this.translationService.currentLang();
    if (st.title && typeof st.title === 'object') {
      return st.title[lang] || st.title.ar || st.title.en || '';
    }
    return st.title || '';
  }

  getStepDesc(st: any): string {
    const lang = this.translationService.currentLang();
    if (st.desc && typeof st.desc === 'object') {
      return st.desc[lang] || st.desc.ar || st.desc.en || '';
    }
    return st.desc || '';
  }

  // Testimonial Quote
  getTestiQuote(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.testi?.quote?.[lang]
      || this.homePageData?.testi?.quote?.ar
      || this.homePageData?.testi?.quote?.en
      || this.translationService.translate('testi.t1');
  }

  getTestiAuthor(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.testi?.name?.[lang]
      || this.homePageData?.testi?.name?.ar
      || this.homePageData?.testi?.name?.en
      || this.translationService.translate('testi.n1');
  }

  getTestiRole(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.testi?.role?.[lang]
      || this.homePageData?.testi?.role?.ar
      || this.homePageData?.testi?.role?.en
      || this.translationService.translate('testi.r1');
  }

  // CTA
  getCtaEyebrow(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.cta?.eyebrow?.[lang]
      || this.homePageData?.cta?.eyebrow?.ar
      || this.homePageData?.cta?.eyebrow?.en
      || this.translationService.translate('cta.eyebrow');
  }

  getCtaTitle(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.cta?.title?.[lang]
      || this.homePageData?.cta?.title?.ar
      || this.homePageData?.cta?.title?.en
      || this.translationService.translate('cta.title');
  }

  getCtaSub(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.cta?.sub?.[lang]
      || this.homePageData?.cta?.sub?.ar
      || this.homePageData?.cta?.sub?.en
      || this.translationService.translate('cta.sub');
  }

  getCtaBtn(): string {
    const lang = this.translationService.currentLang();
    return this.homePageData?.cta?.btn?.[lang]
      || this.homePageData?.cta?.btn?.ar
      || this.homePageData?.cta?.btn?.en
      || this.translationService.translate('cta.btn');
  }
}
