import { Injectable, signal } from '@angular/core';
import { translations } from './translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<string>('ar');

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

  translate(key: string): string {
    const lang = this.currentLang();
    return translations[lang]?.[key] || translations['ar']?.[key] || key;
  }
}
