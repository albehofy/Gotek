import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, TagModule, ButtonModule, CardModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  services: any[] = [];
  servicesPageData: any = {};

  ngOnInit() {
    const fallbackServices = [
      { id: 1, title: 'التسويق الرقمي وإدارة الحملات', description: 'استراتيجيات تسويقية متكاملة لزيادة المبيعات وتحقيق أعلى عائد على الاستثمار في كبرى المنصات.', iconClass: 'fa-solid fa-bullhorn', features: ['إدارة حسابات الإعلانات', 'تحسين الاستهداف والديموغرافية', 'تقارير أداء يومية وأسبوعية'] },
      { id: 2, title: 'تطوير المواقع والأنظمة CRM', description: 'بناء وتصميم وتطوير البرمجيات والمتاجر الإلكترونية ولوحات التحكم فائقة السرعة والأمان.', iconClass: 'fa-solid fa-code', features: ['تطوير متاجر وتطبيقات خفيفة', 'ربط أنظمة الـ CRM وبوابات الدفع', 'حماية وأمان فائق وتشفير كامل'] },
      { id: 3, title: 'صناعة المحتوى وتطوير الهوية', description: 'ابتكار الهويات البصرية والشعارات الفريدة وإدارة منصات التواصل الاجتماعي بكل احترافية.', iconClass: 'fa-solid fa-palette', features: ['تطوير الشعار والدليل الإرشادي', 'إنتاج فيديوهات ريلز وموشن جرافيك', 'كتابة سيناريو ومحتوى تفاعلي'] }
    ];

    this.apiService.getServices().subscribe((res: any) => {
      const data = res?.data || res;
      this.services = Array.isArray(data) && data.length ? data : fallbackServices;
    });

    this.apiService.getPageContent('services').subscribe((res: any) => {
      if (res && res.data) {
        this.servicesPageData = res.data;
      }
    });
  }
}
