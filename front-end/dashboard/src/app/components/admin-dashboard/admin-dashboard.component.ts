import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  router = inject(Router);
  
  adminName = 'Admin';
  currentUser: any = null;
  sidebarOpen = false;
  websiteMenuOpen = false;

  toggleWebsiteMenu() {
    this.websiteMenuOpen = !this.websiteMenuOpen;
  }

  ngOnInit() {
    const userStr = localStorage.getItem('gotek_user') || sessionStorage.getItem('gotek_user');
    if (userStr) {
      try {
        this.currentUser = JSON.parse(userStr);
        this.adminName = this.currentUser.name || 'Admin';
      } catch (e) {}
    } else {
      this.router.navigate(['/login']);
    }

    const currentUrl = this.router.url;
    if (
      currentUrl.includes('/projects') ||
      currentUrl.includes('/categories') ||
      currentUrl.includes('/services') ||
      currentUrl.includes('/testimonials') ||
      currentUrl.includes('/faqs') ||
      currentUrl.includes('/blogs')
    ) {
      this.websiteMenuOpen = true;
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    localStorage.removeItem('gotek_token');
    localStorage.removeItem('gotek_user');
    this.router.navigate(['/login']);
  }
}
