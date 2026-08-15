import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, ReactiveFormsModule, TagModule, ButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);

  contactForm!: FormGroup;
  submitting = false;
  formSubmitted = false;

  services = [
    'Paid Advertising Management',
    'Branding & Visual Identity',
    'Social Media Management',
    'Video Production & Content',
    'Website Design & Development',
    'POS Systems Development',
    'Multiple Services (Full Package)',
    "I'm not sure — need consultation"
  ];

  contactInfo: any[] = [];

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      service: ['', Validators.required],
      budget: [''],
      details: ['', Validators.required]
    });

    this.route.queryParamMap.subscribe(params => {
      const serviceId = params.get('service');
      if (serviceId) {
        const match = this.services.find(s => s.toLowerCase().includes(serviceId.toLowerCase()));
        if (match) {
          this.contactForm.patchValue({ service: match });
        }
      }
    });

    this.loadContactInfo();
  }

  loadContactInfo() {
    this.apiService.getContactInfo().subscribe((res: any) => {
      if (res && res.data) {
        const info = res.data;
        this.contactInfo = [
          {
            icon: 'fa-solid fa-comments',
            label: 'contact_label_wa',
            value: info.whatsapp_phone || '+201000001234',
            sub: info.whatsapp_description || 'متاح 24/7 للرد الفوري بالمملكة ومصر',
            link: { url: `https://wa.me/${info.whatsapp_phone?.replace('+', '') || '201000001234'}`, text: 'فتح محادثة واتساب ←', target: '_blank' }
          },
          {
            icon: 'fa-solid fa-envelope',
            label: 'contact_label_email',
            value: info.official_email || 'info@mediaglow-eg.com',
            sub: 'نرد خلال 24 ساعة عمل',
            link: { url: `mailto:${info.official_email || 'info@mediaglow-eg.com'}`, text: 'إرسال بريد إلكتروني ←', target: '_self' }
          },
          {
            icon: 'fa-solid fa-location-dot',
            label: 'المقر الرئيسي — مصر',
            value: info.company_address || 'جمهورية مصر العربية — القاهرة، التجمع الخامس',
            sub: 'عرض المقر على خرائط جوجل',
            link: { url: info.google_map_location || 'https://maps.google.com', text: 'فتح الخريطة ←', target: '_blank' }
          },
          {
            icon: 'fa-solid fa-phone-volume',
            label: 'الدعم والتواصل المباشر',
            value: info.emergency_support || '+20 2 2345 6789',
            sub: 'خدمة العملاء والاستشارات الإعلانية'
          }
        ];
      } else {
        // Egyptian Fallback Data
        this.contactInfo = [
          {
            icon: 'fa-solid fa-comments',
            label: 'contact_label_wa',
            value: '+20 100 000 1234',
            sub: 'متاح 24/7 للرد الفوري بمصر والشرق الأوسط',
            link: { url: 'https://wa.me/201000001234', text: 'فتح محادثة واتساب ←', target: '_blank' }
          },
          {
            icon: 'fa-solid fa-envelope',
            label: 'contact_label_email',
            value: 'info@mediaglow-eg.com',
            sub: 'نرد خلال 24 ساعة عمل',
            link: { url: 'mailto:info@mediaglow-eg.com', text: 'إرسال بريد إلكتروني ←', target: '_self' }
          },
          {
            icon: 'fa-solid fa-location-dot',
            label: 'المقر الرئيسي — مصر',
            value: 'جمهورية مصر العربية — القاهرة، التجمع الخامس',
            sub: 'عرض المقر على خرائط جوجل',
            link: { url: 'https://maps.google.com', text: 'فتح الخريطة ←', target: '_blank' }
          }
        ];
      }
    });
  }

  setBudget(val: string) {
    this.contactForm.patchValue({ budget: val });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.submitting = true;
    const rawVal = this.contactForm.value;
    
    // Construct request payload
    const payload = {
      name: rawVal.name,
      phone: rawVal.phone,
      email: rawVal.email,
      company: rawVal.company,
      service: rawVal.service,
      budget: rawVal.budget,
      message: rawVal.details
    };

    this.apiService.submitContact(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.formSubmitted = true;
      },
      error: () => {
        this.submitting = false;
        alert('Failed to submit message. Please try again.');
      }
    });
  }

  resetForm() {
    this.formSubmitted = false;
    this.contactForm.reset({ service: '' });
  }
}
