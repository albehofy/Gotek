import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);

  services: any[] = [];
  serviceForm!: FormGroup;
  isEditing = false;
  currentServiceId: string | null = null;
  loading = false;

  ngOnInit() {
    this.initForm();
    this.loadServices();
  }

  initForm() {
    this.serviceForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      subtitle_en: ['', Validators.required], // maps to category
      subtitle_ar: ['', Validators.required],
      description_en: ['', Validators.required],
      description_ar: ['', Validators.required],
      icon: ['fa-solid fa-gear', Validators.required],
      cta_url: ['/contact'],
      cta_text_en: ['Get Started'],
      cta_text_ar: ['ابدأ الآن'],
      order: [1],
      features_en: [''],
      features_ar: [''],
      stats_str_en: [''],
      stats_str_ar: [''],
    });
  }

  loadServices() {
    this.apiService.getServices().subscribe(res => {
      this.services = res || [];
    });
  }

  saveService() {
    if (this.serviceForm.invalid) return;

    this.loading = true;
    const formData = new FormData();
    const val = this.serviceForm.value;
    
    // Direct fields
    formData.append('icon', val.icon || 'fa-solid fa-gear');
    formData.append('cta_url', val.cta_url || '/contact');
    formData.append('cta_text_en', val.cta_text_en || 'Get Started');
    formData.append('cta_text_ar', val.cta_text_ar || 'ابدأ الآن');
    formData.append('order', String(val.order || 1));

    // Title & Description (Bilingual formats)
    formData.append('title[en]', val.title_en);
    formData.append('title[ar]', val.title_ar);
    formData.append('subtitle[en]', val.subtitle_en);
    formData.append('subtitle[ar]', val.subtitle_ar);
    formData.append('description[en]', val.description_en);
    formData.append('description[ar]', val.description_ar);

    // Features lists
    const featsEn = val.features_en ? val.features_en.split(',').map((f: string) => f.trim()).filter((f: string) => f) : [];
    const featsAr = val.features_ar ? val.features_ar.split(',').map((f: string) => f.trim()).filter((f: string) => f) : [];
    formData.append('features[en]', JSON.stringify(featsEn));
    formData.append('features[ar]', JSON.stringify(featsAr));

    // Stats lists
    const parseStats = (str: string) => {
      if (!str) return [];
      return str.split(',').map(s => {
        const parts = s.split(':');
        return {
          label: parts[0]?.trim() || '',
          sub: parts[1]?.trim() || '',
          badge: parts[2]?.trim() || ''
        };
      }).filter(s => s.label || s.sub);
    };

    formData.append('stats[en]', JSON.stringify(parseStats(val.stats_str_en)));
    formData.append('stats[ar]', JSON.stringify(parseStats(val.stats_str_ar)));

    if (this.isEditing && this.currentServiceId) {
      this.apiService.updateService(this.currentServiceId, formData).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadServices();
        },
        error: () => this.loading = false
      });
    } else {
      this.apiService.addService(formData).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadServices();
        },
        error: () => this.loading = false
      });
    }
  }

  editService(service: any) {
    this.isEditing = true;
    this.currentServiceId = service.id;

    // Helper to extract list from translation
    const getFeaturesStr = (features: any, lang: string) => {
      if (!features) return '';
      if (Array.isArray(features)) {
        return features.map((f: any) => typeof f === 'object' ? (f[lang] || '') : f).filter((f: string) => f).join(', ');
      }
      return '';
    };

    const getStatsStr = (stats: any, lang: string) => {
      if (!stats) return '';
      if (Array.isArray(stats)) {
        return stats.map((s: any) => {
          const lbl = typeof s.label === 'object' ? (s.label[lang] || '') : s.label;
          const sub = typeof s.sub === 'object' ? (s.sub[lang] || '') : s.sub;
          const bdg = typeof s.badge === 'object' ? (s.badge[lang] || '') : s.badge;
          return `${lbl}:${sub}${bdg ? ':' + bdg : ''}`;
        }).join(', ');
      }
      return '';
    };

    this.serviceForm.patchValue({
      title_en: service.title_en || (typeof service.title === 'object' ? service.title.en : ''),
      title_ar: service.title_ar || (typeof service.title === 'object' ? service.title.ar : ''),
      subtitle_en: service.subtitle_en || (typeof service.category === 'object' ? service.category.en : ''),
      subtitle_ar: service.subtitle_ar || (typeof service.category === 'object' ? service.category.ar : ''),
      description_en: service.description_en || (typeof service.description === 'object' ? service.description.en : ''),
      description_ar: service.description_ar || (typeof service.description === 'object' ? service.description.ar : ''),
      icon: service.iconClass || service.icon || 'fa-solid fa-gear',
      cta_url: service.cta_url || '/contact',
      cta_text_en: service.ctaText?.en || service.cta_text_en || 'Get Started',
      cta_text_ar: service.ctaText?.ar || service.cta_text_ar || 'ابدأ الآن',
      order: service.order || 1,
      features_en: getFeaturesStr(service.features, 'en'),
      features_ar: getFeaturesStr(service.features, 'ar'),
      stats_str_en: getStatsStr(service.stats, 'en'),
      stats_str_ar: getStatsStr(service.stats, 'ar'),
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentServiceId = null;
    this.serviceForm.reset({
      icon: 'fa-solid fa-gear',
      cta_url: '/contact',
      cta_text_en: 'Get Started',
      cta_text_ar: 'ابدأ الآن',
      order: 1
    });
  }

  deleteService(id: string) {
    if (confirm('Are you sure you want to delete this service?')) {
      this.apiService.deleteService(id).subscribe(() => {
        this.loadServices();
      });
    }
  }
}
