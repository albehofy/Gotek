import { Component, OnInit, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
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
  loadingService = inject(LoadingService);

  sidebarOpen = false;
  sidebarCollapsed = false;
  websiteMenuOpen = true;
  activeDropdown: string | null = null;
  isLightMode = false;
  currentTab = 'overview';
  currentPath = '';

  overviewStats = {
    inquiries: 0
  };

  currentUser: any = null;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.activeDropdown) {
      const isInsideUserBtn = !!target.closest('.tb-user');
      const isInsideUserPanel = !!target.closest('.dd-user');
      const isActionRow = !!target.closest('.ud-row');

      if (!isInsideUserBtn && !isInsideUserPanel) {
        this.activeDropdown = null;
      } else if (isActionRow) {
        this.activeDropdown = null;
      }
    }
  }

  ngOnInit() {
    try {
      const uStr = localStorage.getItem('mediaglow_user');
      if (uStr) this.currentUser = JSON.parse(uStr);
    } catch(e){}

    if (!this.currentUser) {
      this.currentUser = { name: 'مدير النظام', role: 'super_admin', email: 'admin@mediaglow.com' };
    }

    const savedTheme = localStorage.getItem('mediaglow_theme');
    this.isLightMode = savedTheme === 'light';
    if (this.isLightMode) {
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
    }

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
    if (window.innerWidth <= 992) {
      this.sidebarOpen = !this.sidebarOpen;
    } else {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    }
  }

  toggleWebsiteMenu() {
    this.websiteMenuOpen = !this.websiteMenuOpen;
  }

  toggleDropdown(name: string, event?: Event) {
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('mediaglow_theme', 'light');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('mediaglow_theme', 'dark');
    }
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

  isSuperAdmin(): boolean { return this.currentUser?.role === 'super_admin'; }
  isAdmin(): boolean { return ['super_admin', 'admin'].includes(this.currentUser?.role); }
  isDepartmentManager(): boolean { return this.currentUser?.role === 'department_manager'; }
  isEmployee(): boolean { return this.currentUser?.role === 'employee'; }
  isClient(): boolean { return this.currentUser?.role === 'client'; }

  getRoleBadgeLabel(): string {
    const role = this.currentUser?.role;
    if (role === 'super_admin') return 'سوبر أدمن';
    if (role === 'admin') return 'أدمن';
    if (role === 'department_manager') return 'مدير قسم';
    if (role === 'employee') return 'موظف / صانع محتوى';
    if (role === 'client') return 'عميل VIP';
    return 'مستخدم';
  }

  isDashboardTabActive(tabName: string): boolean {
    return (this.currentPath === 'dashboard' || this.currentPath === '') && this.currentTab === tabName;
  }

  getArabicPathLabel(path: string): string {
    if (!path || path === 'dashboard') return 'لوحة التحكم';
    if (path.startsWith('clients')) return 'العملاء';
    if (path.startsWith('deals')) return 'الصفقات والعقود';
    if (path.startsWith('tasks')) return 'لوحة المهام';
    if (path.startsWith('departments')) return 'الأقسام والمراكز';
    if (path.startsWith('finance')) return 'المالية والخزينة';
    if (path.startsWith('client-portal')) return 'بوابة العملاء';
    if (path.startsWith('roles')) return 'الأدوار والصلاحيات';
    if (path.startsWith('portfolio')) return 'معرض الأعمال والموقع';
    return path;
  }
}
