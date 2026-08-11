import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
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

    // Load ALL services for the services grid
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
}

