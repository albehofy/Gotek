import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  apiService = inject(ApiService);

  stats = {
    projects: 0,
    services: 0,
    testimonials: 0,
    inquiries: 0
  };
  
  recentProjects: any[] = [];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getProjects().subscribe(res => {
      this.stats.projects = res?.length || 0;
      this.recentProjects = (res || []).slice(0, 5);
    });

    this.apiService.getServices().subscribe(res => {
      this.stats.services = res?.length || 0;
    });

    this.apiService.getInquiries().subscribe(res => {
      this.stats.inquiries = res?.length || 0;
    });

    // Testimonials API not strictly defined in backend spec for admin list but assuming standard endpoints
  }
}
