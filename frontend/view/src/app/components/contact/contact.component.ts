import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);

  contactForm!: FormGroup;
  submitting = false;
  formSubmitted = false;

  services = [
    { key: 'branding', ar: 'الهوية البصرية والعلامة التجارية', en: 'Brand Identity & Strategy' },
    { key: 'marketing', ar: 'التسويق الرقمي وإدارة الإعلانات', en: 'Digital Marketing & Ads' },
    { key: 'web', ar: 'تطوير المواقع والتطبيقات', en: 'Web & App Development' },
    { key: 'video', ar: 'إنتاج الفيديو والمحتوى المرئي', en: 'Video & Content Production' },
    { key: 'consulting', ar: 'استشارة تسويقية شاملة', en: 'General Marketing Consultation' }
  ];

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      service: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.apiService.submitContact(this.contactForm.value).subscribe({
      next: () => {
        this.submitting = false;
        this.formSubmitted = true;
      },
      error: () => {
        this.submitting = false;
        this.formSubmitted = true; // Fallback success UI
      }
    });
  }

  getContactData(): any {
    return this.translationService.siteContent()?.contact || {};
  }

  getHeroEyebrow(): string {
    const d = this.getContactData();
    const lang = this.translationService.currentLang();
    return d?.hero?.eyebrow?.[lang] || d?.hero?.eyebrow?.ar || d?.hero?.eyebrow?.en || this.translationService.translate('nav.contact');
  }

  getHeroTitle(): string {
    const d = this.getContactData();
    const lang = this.translationService.currentLang();
    return d?.hero?.title?.[lang] || d?.hero?.title?.ar || d?.hero?.title?.en || this.translationService.translate('cta.title');
  }

  getHeroDesc(): string {
    const d = this.getContactData();
    const lang = this.translationService.currentLang();
    return d?.hero?.desc?.[lang] || d?.hero?.desc?.ar || d?.hero?.desc?.en || this.translationService.translate('cta.sub');
  }

  getEmail(): string {
    return this.getContactData()?.email || 'hello@mediaglowegypt.com';
  }

  getPhone(): string {
    return this.getContactData()?.phone || '+20 100 000 0000';
  }

  getLocation(): string {
    const d = this.getContactData();
    const lang = this.translationService.currentLang();
    return d?.location?.[lang] || d?.location?.ar || d?.location?.en || this.translationService.translate('foot.l7');
  }

  getWorkingHours(): string {
    const d = this.getContactData();
    const lang = this.translationService.currentLang();
    return d?.hours?.[lang] || d?.hours?.ar || d?.hours?.en || (lang === 'ar' ? 'الأحد – الخميس: 9:00 ص – 6:00 م' : 'Sunday – Thursday: 9:00 AM – 6:00 PM');
  }
}
