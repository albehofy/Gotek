import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, ReactiveFormsModule],
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
            icon: 'fi fi-rr-comment-alt',
            label: 'contact_label_wa',
            value: info.whatsapp_phone || '+966500000000',
            sub: info.whatsapp_description || 'Available 24/7',
            link: { url: `https://wa.me/${info.whatsapp_phone?.replace('+', '')}`, text: 'Open WhatsApp →', target: '_blank' }
          },
          {
            icon: 'fi fi-rr-envelope',
            label: 'contact_label_email',
            value: info.official_email || 'contact@mediaglow.com',
            sub: 'We reply within 24 hours',
            link: { url: `mailto:${info.official_email}`, text: 'Send Email →', target: '_self' }
          },
          {
            icon: 'fi fi-rr-marker',
            label: 'Company Address',
            value: info.company_address || 'Riyadh, Saudi Arabia',
            sub: 'View on Google Maps',
            link: { url: info.google_map_location || 'https://maps.google.com', text: 'View Map →', target: '_blank' }
          },
          {
            icon: 'fi fi-rr-phone-call',
            label: 'Emergency Support',
            value: info.emergency_support || 'support@mediaglow.com',
            sub: 'For urgent matters'
          }
        ];
      } else {
        // Fallback placeholder data if backend fails
        this.contactInfo = [
          {
            icon: 'fi fi-rr-comment-alt',
            label: 'contact_label_wa',
            value: '+966500000000',
            sub: 'Available 24/7',
            link: { url: 'https://wa.me/966500000000', text: 'Open WhatsApp →', target: '_blank' }
          },
          {
            icon: 'fi fi-rr-envelope',
            label: 'contact_label_email',
            value: 'contact@mediaglow.com',
            sub: 'We reply within 24 hours',
            link: { url: 'mailto:contact@mediaglow.com', text: 'Send Email →', target: '_self' }
          },
          {
            icon: 'fi fi-rr-marker',
            label: 'Company Address',
            value: 'Riyadh, Saudi Arabia',
            sub: 'View on Google Maps',
            link: { url: 'https://maps.google.com', text: 'View Map →', target: '_blank' }
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
