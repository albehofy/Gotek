import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  apiService = inject(ApiService);

  // Data from API
  projects: any[] = [];
  testimonials: any[] = [];
  blogs: any[] = [];
  services: any[] = [];
  stats: any = null;
  faqs: any[] = [];
  homeContent: any = {};

  // Interactive Tabs & Calculators
  activeTab = 0;
  activeFaqIndex: number | null = 0;

  // Investment Calculator
  calcService = 'ads';
  calcBudget = 'growth';
  calcDuration = '1_month';
  calculatedPrice = '25,000 – 45,000 ج.م';

  // Client Logos (Cairo & Regional Brands)
  clients = [
    { name: 'Vodafone Egypt', category: 'الاتصالات والتكنولوجيا' },
    { name: 'Mountain View', category: 'التطوير العقاري' },
    { name: 'Juhayna', category: 'الصناعات الغذائية' },
    { name: 'Palm Hills', category: 'المجمعات السكنية' },
    { name: 'B.TECH', category: 'التجارة الإلكترونية' },
    { name: 'Swvl', category: 'الحلول النقل الذكي' },
  ];

  ngOnInit() {
    this.loadApiData();
  }

  loadApiData() {
    // 1. Fetch Projects from API
    this.apiService.getProjects({ limit: 6 }).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.projects = Array.isArray(data) ? data : [];
    });

    // 2. Fetch Testimonials from API
    this.apiService.getTestimonials(6).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.testimonials = Array.isArray(data) ? data : [];
    });

    // 3. Fetch Blogs from API
    this.apiService.getBlogs().subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.blogs = Array.isArray(data) ? data.slice(0, 3) : [];
    });

    // 4. Fetch Services from API
    this.apiService.getServices().subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.services = Array.isArray(data) ? data : [];
    });

    // 5. Fetch Stats from API
    this.apiService.getStats().subscribe((res: any) => {
      this.stats = res?.data ?? res ?? null;
    });

    // 6. Fetch FAQs from API
    this.apiService.getFaqs().subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.faqs = Array.isArray(data) && data.length ? data : [
        { question: 'ما الميزة التنافسية لوكالة ميديا جلو؟', answer: 'نحن نربط كل حل تسويقي أو تكنولوجي بأرقام مبيعات وعائد استثماري (ROI) ملموس وقابل للقياس يومياً.' },
        { question: 'كم مدة تنفيذ مشروع الهوية أو تطبيق الويب؟', a: 'تستغرق الهوية البصرية من 7 إلى 14 يوم عمل، بينما يستغرق تطوير الموقع الإلكتروني من 14 إلى 28 يوم عمل.' },
        { question: 'كيف يتم المتابعة وإرسال التقارير للحملات؟', a: 'نعمل بنظام تقارير دقيق يرتبط بـ Dashboard موحدة توضح تكلفة الاستحواذ والعائد المالي على كل حملة.' }
      ];
    });

    // 7. Fetch Page Content from API
    this.apiService.getPageContent('home').subscribe((res: any) => {
      this.homeContent = res?.data ?? res ?? {};
    });
  }

  // Interactivity Methods
  setTab(index: number) {
    this.activeTab = index;
  }

  toggleFaq(index: number) {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

  recalculate() {
    let base = 15000;
    if (this.calcService === 'branding') base = 18000;
    if (this.calcService === 'dev') base = 25000;
    if (this.calcService === 'video') base = 20000;

    if (this.calcBudget === 'starter') base *= 0.8;
    if (this.calcBudget === 'growth') base *= 1.5;
    if (this.calcBudget === 'enterprise') base *= 2.8;

    if (this.calcDuration === '3_months') base *= 2.4;

    const min = Math.round(base / 1000) * 1000;
    const max = Math.round((base * 1.5) / 1000) * 1000;
    this.calculatedPrice = `${min.toLocaleString('ar-EG')} – ${max.toLocaleString('ar-EG')} ج.م`;
  }
}
