import { Injectable, signal } from '@angular/core';
import { translations } from './translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<string>('en');

  constructor() {
    const savedLang = localStorage.getItem('gotek_lang') || 'en';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    this.currentLang.set(lang);
    localStorage.setItem('gotek_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'en' ? 'ar' : 'en');
  }

  translate(key: string): string {
    const lang = this.currentLang();
    return translations[lang]?.[key] || key;
  }
}
