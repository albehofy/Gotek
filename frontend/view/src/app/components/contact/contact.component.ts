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
}
