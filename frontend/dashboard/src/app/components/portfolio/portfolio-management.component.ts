import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio-management.component.html',
  styleUrls: ['./portfolio-management.component.css']
})
export class PortfolioManagementComponent {
  tabs = [
    { route: '/portfolio/overview', icon: 'fa-solid fa-chart-pie', labelAr: 'نظرة عامة', labelEn: 'Overview' },
    { route: '/portfolio/projects', icon: 'fa-solid fa-diagram-project', labelAr: 'مشاريع', labelEn: 'Projects' },
    { route: '/portfolio/categories', icon: 'fa-solid fa-tags', labelAr: 'تصنيفات', labelEn: 'Categories' },
    { route: '/portfolio/services', icon: 'fa-solid fa-toolbox', labelAr: 'خدمات', labelEn: 'Services' },
    { route: '/portfolio/blogs', icon: 'fa-solid fa-newspaper', labelAr: 'مقالات', labelEn: 'Blogs' },
    { route: '/portfolio/testimonials', icon: 'fa-solid fa-quote-left', labelAr: 'آراء العملاء', labelEn: 'Testimonials' },
    { route: '/portfolio/faqs', icon: 'fa-solid fa-circle-question', labelAr: 'أسئلة شائعة', labelEn: 'FAQs' },
    { route: '/portfolio/about', icon: 'fa-solid fa-building-user', labelAr: 'عن الوكالة', labelEn: 'About' },
    { route: '/portfolio/pages', icon: 'fa-solid fa-pen-to-square', labelAr: 'محرر الصفحات والفوتر', labelEn: 'Pages & Footer' },
    { route: '/portfolio/inquiries', icon: 'fa-solid fa-inbox', labelAr: 'الرسائل والاتصال', labelEn: 'Inquiries' }
  ];
}
