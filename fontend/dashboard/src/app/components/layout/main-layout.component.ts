import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NotificationCenterComponent } from '../shared/notification-center/notification-center.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NotificationCenterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  apiService = inject(ApiService);

  sidebarOpen = false;
  websiteMenuOpen = true;
  activeDropdown: string | null = null;
  isLightMode = false;
  currentTab = 'overview';
  currentPath = '';

  overviewStats = {
    inquiries: 0
  };

  ngOnInit() {
    this.updateActiveTabAndPath();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateActiveTabAndPath();
    });

    this.loadStats();
  }

  updateActiveTabAndPath() {
    const urlTree = this.router.parseUrl(this.router.url);
    this.currentPath = urlTree.root.children['primary'] ? urlTree.root.children['primary'].segments.map(s => s.path).join('/') : '';
    this.currentTab = urlTree.queryParams['tab'] || 'overview';
  }

  loadStats() {
    this.apiService.getInquiries().subscribe({
      next: (res: any) => {
        const list = Array.isArray(res) ? res : (res?.data || []);
        this.overviewStats.inquiries = list.filter((i: any) => i.status !== 'resolved' && i.status !== 'closed').length;
      },
      error: () => {}
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleWebsiteMenu() {
    this.websiteMenuOpen = !this.websiteMenuOpen;
  }

  toggleDropdown(name: string) {
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    document.body.classList.toggle('light-theme', this.isLightMode);
  }

  logout() {
    localStorage.removeItem('mediaglow_client_token');
    localStorage.removeItem('mediaglow_user');
    this.router.navigate(['/login']);
  }

  navigateToTab(tab: string) {
    this.sidebarOpen = false;
    this.router.navigate(['/dashboard'], { queryParams: { tab } });
  }

  isDashboardTabActive(tabName: string): boolean {
    return (this.currentPath === 'dashboard' || this.currentPath === '') && this.currentTab === tabName;
  }
}
