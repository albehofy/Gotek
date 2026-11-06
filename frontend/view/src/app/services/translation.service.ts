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
    let savedLang = 'ar';
    if (typeof localStorage !== 'undefined') {
      savedLang = localStorage.getItem('mediaglow_lang') || 'ar';
    }
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    this.currentLang.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('mediaglow_lang', lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.classList.toggle('lang-en', lang === 'en');
      document.documentElement.classList.toggle('lang-ar', lang === 'ar');
      if (document.body) {
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.classList.toggle('lang-en', lang === 'en');
        document.body.classList.toggle('lang-ar', lang === 'ar');
      }
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

      // Map Services Bento overrides
      if (content.home?.services_bento) {
        const b = content.home.services_bento;
        if (b.eyebrow) {
          if (b.eyebrow.ar) this.setDynamicOverride('ar', 'services.eyebrow', b.eyebrow.ar);
          if (b.eyebrow.en) this.setDynamicOverride('en', 'services.eyebrow', b.eyebrow.en);
        }
        if (b.title) {
          if (b.title.ar) this.setDynamicOverride('ar', 'services.title', b.title.ar);
          if (b.title.en) this.setDynamicOverride('en', 'services.title', b.title.en);
        }
        if (b.sub) {
          if (b.sub.ar) this.setDynamicOverride('ar', 'services.sub', b.sub.ar);
          if (b.sub.en) this.setDynamicOverride('en', 'services.sub', b.sub.en);
        }
        [1, 2, 3, 4].forEach(i => {
          if (b[`s${i}_title`]) {
            if (b[`s${i}_title`].ar) this.setDynamicOverride('ar', `services.s${i}.t`, b[`s${i}_title`].ar);
            if (b[`s${i}_title`].en) this.setDynamicOverride('en', `services.s${i}.t`, b[`s${i}_title`].en);
          }
          if (b[`s${i}_desc`]) {
            if (b[`s${i}_desc`].ar) this.setDynamicOverride('ar', `services.s${i}.d`, b[`s${i}_desc`].ar);
            if (b[`s${i}_desc`].en) this.setDynamicOverride('en', `services.s${i}.d`, b[`s${i}_desc`].en);
          }
        });
      }

      // Map Workflow overrides
      if (content.home?.workflow) {
        const w = content.home.workflow;
        if (w.eyebrow) {
          if (w.eyebrow.ar) this.setDynamicOverride('ar', 'process.eyebrow', w.eyebrow.ar);
          if (w.eyebrow.en) this.setDynamicOverride('en', 'process.eyebrow', w.eyebrow.en);
        }
        if (w.title) {
          if (w.title.ar) this.setDynamicOverride('ar', 'process.title', w.title.ar);
          if (w.title.en) this.setDynamicOverride('en', 'process.title', w.title.en);
        }
        [1, 2, 3, 4].forEach(i => {
          if (w[`s${i}_title`]) {
            if (w[`s${i}_title`].ar) this.setDynamicOverride('ar', `process.s${i}.t`, w[`s${i}_title`].ar);
            if (w[`s${i}_title`].en) this.setDynamicOverride('en', `process.s${i}.t`, w[`s${i}_title`].en);
          }
          if (w[`s${i}_desc`]) {
            if (w[`s${i}_desc`].ar) this.setDynamicOverride('ar', `process.s${i}.d`, w[`s${i}_desc`].ar);
            if (w[`s${i}_desc`].en) this.setDynamicOverride('en', `process.s${i}.d`, w[`s${i}_desc`].en);
          }
        });
      }

      // Map Services Page overrides
      if (content.services?.hero) {
        const s = content.services.hero;
        if (s.title) {
          if (s.title.ar) this.setDynamicOverride('ar', 'services.title', s.title.ar);
          if (s.title.en) this.setDynamicOverride('en', 'services.title', s.title.en);
        }
        if (s.desc) {
          if (s.desc.ar) this.setDynamicOverride('ar', 'services.sub', s.desc.ar);
          if (s.desc.en) this.setDynamicOverride('en', 'services.sub', s.desc.en);
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
