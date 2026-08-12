import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, TagModule, ButtonModule, BadgeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  apiService = inject(ApiService);

  projects: any[] = [];
  testimonials: any[] = [];
  blogs: any[] = [];
  services: any[] = [];
  stats: any = null;
  homeData: any = {};
  activeTestimonial = 0;

  ngOnInit() {
    this.apiService.getProjects({ limit: 5 }).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.projects = Array.isArray(data) ? data.slice(0, 5) : [];
    });

    this.apiService.getTestimonials(6).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.testimonials = Array.isArray(data) ? data : [];
    });

    this.apiService.getBlogs().subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.blogs = Array.isArray(data) ? data.slice(0, 3) : [];
    });

    this.apiService.getServices().subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.services = Array.isArray(data) ? data : [];
    });

    this.apiService.getStats().subscribe((res: any) => {
      this.stats = res?.data ?? res ?? null;
    });

    this.apiService.getPageContent('home').subscribe((res: any) => {
      this.homeData = res?.data ?? res ?? {};
    });
  }

  setActiveTestimonial(i: number) {
    this.activeTestimonial = i;
  }

  prevTestimonial() {
    this.activeTestimonial = this.activeTestimonial > 0
      ? this.activeTestimonial - 1
      : this.testimonials.length - 1;
  }

  nextTestimonial() {
    this.activeTestimonial = this.activeTestimonial < this.testimonials.length - 1
      ? this.activeTestimonial + 1
      : 0;
  }

  // Get 3 testimonials starting from activeTestimonial
  get visibleTestimonials() {
    if (!this.testimonials.length) return [];
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(this.testimonials[(this.activeTestimonial + i) % this.testimonials.length]);
    }
    return result;
  }
}
