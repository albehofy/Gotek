import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-portfolio-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.css']
})
export class PortfolioOverviewComponent implements OnInit {
  private apiService = inject(ApiService);
  private toastService = inject(ToastService);

  loading = true;
  stats = {
    projects: 0,
    services: 0,
    blogs: 0,
    testimonials: 0,
    categories: 0,
    inquiries: 0
  };

  recentInquiries: any[] = [];
  contactInfo: any = null;

  ngOnInit() {
    this.loadAllOverviewData();
  }

  loadAllOverviewData() {
    this.loading = true;
    let loadedCount = 0;
    const totalRequests = 7;

    const checkComplete = () => {
      loadedCount++;
      if (loadedCount >= totalRequests) {
        this.loading = false;
      }
    };

    // Projects
    this.apiService.getProjects().subscribe({
      next: (res: any) => {
        const list = res?.data ?? res ?? [];
        this.stats.projects = Array.isArray(list) ? list.length : 0;
        checkComplete();
      },
      error: () => checkComplete()
    });

    // Services
    this.apiService.getServices().subscribe({
      next: (res: any) => {
        const list = res?.data ?? res ?? [];
        this.stats.services = Array.isArray(list) ? list.length : 0;
        checkComplete();
      },
      error: () => checkComplete()
    });

    // Blogs
    this.apiService.getBlogs().subscribe({
      next: (res: any) => {
        const list = res?.data ?? res ?? [];
        this.stats.blogs = Array.isArray(list) ? list.length : 0;
        checkComplete();
      },
      error: () => checkComplete()
    });

    // Testimonials
    this.apiService.getTestimonials().subscribe({
      next: (res: any) => {
        const list = res?.data ?? res ?? [];
        this.stats.testimonials = Array.isArray(list) ? list.length : 0;
        checkComplete();
      },
      error: () => checkComplete()
    });

    // Categories
    this.apiService.getCategories().subscribe({
      next: (res: any) => {
        const list = res?.data ?? res ?? [];
        this.stats.categories = Array.isArray(list) ? list.length : 0;
        checkComplete();
      },
      error: () => checkComplete()
    });

    // Inquiries
    this.apiService.getInquiries().subscribe({
      next: (res: any) => {
        const list = res?.data ?? res ?? [];
        this.stats.inquiries = Array.isArray(list) ? list.length : 0;
        this.recentInquiries = Array.isArray(list) ? list.slice(0, 5) : [];
        checkComplete();
      },
      error: () => checkComplete()
    });

    // Contact info
    this.apiService.getContactInfo().subscribe({
      next: (res: any) => {
        this.contactInfo = res?.data ?? res ?? null;
        checkComplete();
      },
      error: () => checkComplete()
    });
  }

  refresh() {
    this.loadAllOverviewData();
    this.toastService.success('تم تحديث بيانات الموقع بنجاح');
  }
}
