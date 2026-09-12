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
    { year: '2018', title: 'البداية في القاهرة', desc: 'انطلقت ميديا جلو كفريق تسويق وتصميم رقمي يركز على النتائج الحقيقية.' },
    { year: '2020', title: 'التوسع التقني', desc: 'إطلاق قسم هندسة وتطوير المنصات الرقمية وتطبيقات الويب.' },
    { year: '2023', title: 'التوسع الإقليمي', desc: 'خدمة أكثر من 200 علامة تجارية رائدة في مصر ودول الخليج العربي.' },
    { year: '2026', title: 'الريادة والحلول المتكاملة', desc: 'بناء حلول نمو شاملة من الهوية وحتى المنصات والحملات القائمة على العائد الاستثماري.' }
  ];

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
}
