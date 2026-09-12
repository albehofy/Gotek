import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ConfirmService } from '../../../services/confirm.service';

const ICON_OPTIONS = [
  { icon: 'fa-solid fa-palette', label: 'Design / Branding' },
  { icon: 'fa-solid fa-code', label: 'Development' },
  { icon: 'fa-solid fa-bullhorn', label: 'Marketing' },
  { icon: 'fa-solid fa-camera', label: 'Photography' },
  { icon: 'fa-solid fa-video', label: 'Video Production' },
  { icon: 'fa-solid fa-wand-magic-sparkles', label: 'Creative' },
  { icon: 'fa-solid fa-chart-line', label: 'Analytics' },
  { icon: 'fa-solid fa-mobile-screen', label: 'Mobile App' },
  { icon: 'fa-solid fa-globe', label: 'Web' },
  { icon: 'fa-solid fa-megaphone', label: 'Advertising' },
  { icon: 'fa-solid fa-pen-nib', label: 'Copywriting' },
  { icon: 'fa-solid fa-photo-film', label: 'Media' },
  { icon: 'fa-solid fa-share-nodes', label: 'Social Media' },
  { icon: 'fa-solid fa-envelope', label: 'Email Marketing' },
  { icon: 'fa-solid fa-magnifying-glass', label: 'SEO' },
  { icon: 'fa-solid fa-robot', label: 'Automation' },
  { icon: 'fa-solid fa-print', label: 'Printing' },
  { icon: 'fa-solid fa-star', label: 'Premium' },
  { icon: 'fa-solid fa-handshake', label: 'Consulting' },
  { icon: 'fa-solid fa-gears', label: 'Technical' },
];

@Component({
  selector: 'app-portfolio-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio-services.component.html',
  styleUrls: ['./portfolio-services.component.css']
})
export class PortfolioServicesComponent implements OnInit {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);

  services: any[] = [];
  isLoading = false;
  
  isDrawerOpen = false;
  isEditMode = false;
  editingId: number | null = null;
  
  icons = ICON_OPTIONS;
  iconType: 'icon' | 'image' = 'icon';

  formData = {
    icon: '',
    title_ar: '',
    title_en: '',
    subtitle_ar: '',
    subtitle_en: '',
    description_ar: '',
    description_en: '',
    features_ar: '',
    features_en: '',
    cta_text_ar: '',
    cta_text_en: '',
    cta_url: '',
    order: 0
  };

  isImageUrl(val: string): boolean {
    if (!val) return false;
    return val.startsWith('http://') || val.startsWith('https://') || val.startsWith('/') || val.startsWith('data:') || /\.(png|jpg|jpeg|svg|webp|gif)$/i.test(val);
  }

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.isLoading = true;
    this.apiService.getServices().subscribe({
      next: (res: any) => {
        this.services = res.data || res || [];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  openDrawer(service?: any) {
    if (service) {
      this.isEditMode = true;
      this.editingId = service.id;
      const initialIcon = service.icon || '';
      this.iconType = this.isImageUrl(initialIcon) ? 'image' : 'icon';
      this.formData = {
        icon: initialIcon,
        title_ar: service.title?.ar || service.title_ar || '',
        title_en: service.title?.en || service.title_en || '',
        subtitle_ar: service.subtitle?.ar || service.subtitle_ar || '',
        subtitle_en: service.subtitle?.en || service.subtitle_en || '',
        description_ar: service.description?.ar || service.description_ar || '',
        description_en: service.description?.en || service.description_en || '',
        features_ar: Array.isArray(service.features?.ar || service.features_ar) ? (service.features?.ar || service.features_ar).join('\n') : '',
        features_en: Array.isArray(service.features?.en || service.features_en) ? (service.features?.en || service.features_en).join('\n') : '',
        cta_text_ar: service.cta_text_ar || '',
        cta_text_en: service.cta_text_en || '',
        cta_url: service.cta_url || '',
        order: service.order || 0
      };
    } else {
      this.isEditMode = false;
      this.editingId = null;
      this.iconType = 'icon';
      this.formData = {
        icon: 'fa-solid fa-star',
        title_ar: '',
        title_en: '',
        subtitle_ar: '',
        subtitle_en: '',
        description_ar: '',
        description_en: '',
        features_ar: '',
        features_en: '',
        cta_text_ar: '',
        cta_text_en: '',
        cta_url: '',
        order: this.services.length + 1
      };
    }
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }

  selectIcon(iconStr: string) {
    this.formData.icon = iconStr;
  }

  saveService() {
    const fd = new FormData();
    fd.append('icon', this.formData.icon);
    fd.append('title_ar', this.formData.title_ar);
    fd.append('title_en', this.formData.title_en);
    fd.append('subtitle_ar', this.formData.subtitle_ar);
    fd.append('subtitle_en', this.formData.subtitle_en);
    fd.append('description_ar', this.formData.description_ar);
    fd.append('description_en', this.formData.description_en);
    fd.append('cta_text_ar', this.formData.cta_text_ar);
    fd.append('cta_text_en', this.formData.cta_text_en);
    fd.append('cta_url', this.formData.cta_url);
    fd.append('order', this.formData.order.toString());

    const featAr = this.formData.features_ar ? this.formData.features_ar.split('\n').map(f => f.trim()).filter(f => f) : [];
    const featEn = this.formData.features_en ? this.formData.features_en.split('\n').map(f => f.trim()).filter(f => f) : [];
    
    fd.append('features_ar', JSON.stringify(featAr));
    fd.append('features_en', JSON.stringify(featEn));

    if (this.isEditMode && this.editingId) {
      this.apiService.updateService(String(this.editingId), fd as any).subscribe({
        next: () => {
          this.closeDrawer();
          this.loadServices();
        }
      });
    } else {
      this.apiService.addService(fd as any).subscribe({
        next: () => {
          this.closeDrawer();
          this.loadServices();
        }
      });
    }
  }

  deleteService(service: any) {
    this.confirmService.confirm({
      title: 'حذف الخدمة',
      message: `هل أنت متأكد من حذف خدمة "${this.getServiceTitle(service)}"؟`,
      confirmText: 'حذف',
      cancelText: 'إلغاء',
      type: 'danger',
      accept: () => {
        this.apiService.deleteService(String(service.id)).subscribe(() => this.loadServices());
      }
    });
  }

  getServiceTitle(s: any) { return s.title?.ar || s.title_ar || ''; }
  getServiceTitleEn(s: any) { return s.title?.en || s.title_en || ''; }
  getServiceDesc(s: any) { return s.description?.ar || s.description_ar || ''; }
}
