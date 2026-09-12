import { Injectable, signal } from '@angular/core';
import { translations } from './translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<string>('ar');
  private dynamicOverrides: Record<string, Record<string, string>> = { ar: {}, en: {} };
  siteContent = signal<any>({});

  constructor() {
    const savedLang = localStorage.getItem('mediaglow_lang') || 'ar';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    this.currentLang.set(lang);
    localStorage.setItem('mediaglow_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (typeof document !== 'undefined' && document.body) {
      document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.body.classList.toggle('lang-en', lang === 'en');
    }
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'en' ? 'ar' : 'en');
  }

  setDynamicOverride(lang: string, key: string, val: string) {
    if (!this.dynamicOverrides[lang]) this.dynamicOverrides[lang] = {};
    this.dynamicOverrides[lang][key] = val;
  }

  setSiteContent(content: any) {
    this.siteContent.set(content);
    if (content && typeof content === 'object') {
      // Map navigation overrides
      if (content.navigation) {
        const nav = content.navigation;
        if (nav.brand_name) {
          if (nav.brand_name.ar) this.setDynamicOverride('ar', 'brand', nav.brand_name.ar);
          if (nav.brand_name.en) this.setDynamicOverride('en', 'brand', nav.brand_name.en);
        }
        if (nav.cta_btn) {
          if (nav.cta_btn.ar) this.setDynamicOverride('ar', 'nav.cta', nav.cta_btn.ar);
          if (nav.cta_btn.en) this.setDynamicOverride('en', 'nav.cta', nav.cta_btn.en);
        }
        if (nav.links) {
          ['home', 'services', 'work', 'process', 'about', 'blogs', 'contact'].forEach(k => {
            if (nav.links[k]) {
              if (nav.links[k].ar) this.setDynamicOverride('ar', `nav.${k}`, nav.links[k].ar);
              if (nav.links[k].en) this.setDynamicOverride('en', `nav.${k}`, nav.links[k].en);
            }
          });
        }
      }

      // Map hero overrides
      if (content.home?.hero) {
        const h = content.home.hero;
        if (h.award_badge) {
          if (h.award_badge.ar) this.setDynamicOverride('ar', 'hero.award', h.award_badge.ar);
          if (h.award_badge.en) this.setDynamicOverride('en', 'hero.award', h.award_badge.en);
        }
        if (h.title1) {
          if (h.title1.ar) this.setDynamicOverride('ar', 'hero.line1', h.title1.ar);
          if (h.title1.en) this.setDynamicOverride('en', 'hero.line1', h.title1.en);
        }
        if (h.title2) {
          if (h.title2.ar) this.setDynamicOverride('ar', 'hero.line2', h.title2.ar);
          if (h.title2.en) this.setDynamicOverride('en', 'hero.line2', h.title2.en);
        }
        if (h.subtitle) {
          if (h.subtitle.ar) this.setDynamicOverride('ar', 'hero.sub', h.subtitle.ar);
          if (h.subtitle.en) this.setDynamicOverride('en', 'hero.sub', h.subtitle.en);
        }
        if (h.btn1) {
          if (h.btn1.ar) this.setDynamicOverride('ar', 'hero.btn1', h.btn1.ar);
          if (h.btn1.en) this.setDynamicOverride('en', 'hero.btn1', h.btn1.en);
        }
        if (h.reel_btn) {
          if (h.reel_btn.ar) this.setDynamicOverride('ar', 'hero.reelBtn', h.reel_btn.ar);
          if (h.reel_btn.en) this.setDynamicOverride('en', 'hero.reelBtn', h.reel_btn.en);
        }
      }

      // Map stats overrides
      if (content.home?.stats) {
        const s = content.home.stats;
        ['1', '2', '3', '4'].forEach(i => {
          if (s[`stat${i}_num`]) {
            this.setDynamicOverride('ar', `stats.p${i}.num`, s[`stat${i}_num`]);
            this.setDynamicOverride('en', `stats.p${i}.num`, s[`stat${i}_num`]);
          }
          if (s[`stat${i}_label`]) {
            if (s[`stat${i}_label`].ar) this.setDynamicOverride('ar', `stats.p${i}.lbl`, s[`stat${i}_label`].ar);
            if (s[`stat${i}_label`].en) this.setDynamicOverride('en', `stats.p${i}.lbl`, s[`stat${i}_label`].en);
          }
        });
      }

      // Map CTA overrides
      if (content.home?.cta) {
        const c = content.home.cta;
        if (c.eyebrow) {
          if (c.eyebrow.ar) this.setDynamicOverride('ar', 'cta.eyebrow', c.eyebrow.ar);
          if (c.eyebrow.en) this.setDynamicOverride('en', 'cta.eyebrow', c.eyebrow.en);
        }
        if (c.title) {
          if (c.title.ar) this.setDynamicOverride('ar', 'cta.title', c.title.ar);
          if (c.title.en) this.setDynamicOverride('en', 'cta.title', c.title.en);
        }
        if (c.sub) {
          if (c.sub.ar) this.setDynamicOverride('ar', 'cta.sub', c.sub.ar);
          if (c.sub.en) this.setDynamicOverride('en', 'cta.sub', c.sub.en);
        }
        if (c.btn) {
          if (c.btn.ar) this.setDynamicOverride('ar', 'cta.btn', c.btn.ar);
          if (c.btn.en) this.setDynamicOverride('en', 'cta.btn', c.btn.en);
        }
      }

      // Map Footer overrides
      if (content.footer) {
        const f = content.footer;
        if (f.desc) {
          if (f.desc.ar) this.setDynamicOverride('ar', 'foot.desc', f.desc.ar);
          if (f.desc.en) this.setDynamicOverride('en', 'foot.desc', f.desc.en);
        }
        if (f.address) {
          if (f.address.ar) this.setDynamicOverride('ar', 'foot.l7', f.address.ar);
          if (f.address.en) this.setDynamicOverride('en', 'foot.l7', f.address.en);
        }
        if (f.copy) {
          if (f.copy.ar) this.setDynamicOverride('ar', 'foot.copy', f.copy.ar);
          if (f.copy.en) this.setDynamicOverride('en', 'foot.copy', f.copy.en);
        }
        if (f.made) {
          if (f.made.ar) this.setDynamicOverride('ar', 'foot.made', f.made.ar);
          if (f.made.en) this.setDynamicOverride('en', 'foot.made', f.made.en);
        }
      }
    }
  }

  translate(key: string): string {
    const lang = this.currentLang();
    return this.dynamicOverrides[lang]?.[key]
      || this.dynamicOverrides['ar']?.[key]
      || translations[lang]?.[key]
      || translations['ar']?.[key]
      || key;
  }
}
