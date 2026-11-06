import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Impure pipe to react to signal changes immediately
})
export class TranslatePipe implements PipeTransform {
  translationService = inject(TranslationService);

  transform(value: any): any {
    if (!value) return '';

    // Already a proper object with language keys
    if (typeof value === 'object') {
      const lang = this.translationService.currentLang();
      return value[lang] || value[lang === 'ar' ? 'en' : 'ar'] || Object.values(value)[0] || '';
    }

    // Could be a JSON string from the API (e.g. '{"en":"Hello","ar":"مرحبا"}')
    if (typeof value === 'string' && value.trim().startsWith('{')) {
      try {
        const parsed = JSON.parse(value);
        if (parsed && typeof parsed === 'object') {
          const lang = this.translationService.currentLang();
          return parsed[lang] || parsed[lang === 'ar' ? 'en' : 'ar'] || Object.values(parsed)[0] || value;
        }
      } catch (e) {
        // Not valid JSON, fall through to normal translation
      }
    }

    return this.translationService.translate(value);
  }
}
