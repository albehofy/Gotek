import { Component, signal, effect, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './layout/header.component';
import { SettingsComponent } from './layout/settings.component';
import { TasksComponent } from './tasks/tasks.component';
import { ClientsComponent } from './clients/clients.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    SettingsComponent,
    TasksComponent,
    ClientsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('gotek');
  sidebarOpen = signal(false);
  sidebarCollapsed = signal(false);
  currentPage = signal('Tasks');
  currentView = signal('tasks');
  isAuthenticated = signal(false);
  showDashboard = signal(false);

  constructor(private router: Router) {
    // Check if user is authenticated
    effect(() => {
      const user = localStorage.getItem('gotek_user') || sessionStorage.getItem('gotek_user');
      this.isAuthenticated.set(!!user);
      this.showDashboard.set(!!user);
    });
  }

  ngOnInit() {
    const user = localStorage.getItem('gotek_user') || sessionStorage.getItem('gotek_user');
    if (!user) {
      this.router.navigate(['/login']);
      this.showDashboard.set(false);
    } else {
      this.showDashboard.set(true);
    }
  }

  onSidebarToggle() {
    this.sidebarOpen.update(open => !open);
  }

  onSidebarCollapse() {
    this.sidebarCollapsed.update(collapsed => !collapsed);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.sidebarOpen()) {
      this.sidebarOpen.set(false);
    }
  }

  onNavigate(page: string) {
    const pageNames: { [key: string]: string } = {
      tasks: 'Tasks',
      clients: 'Clients',
      settings: 'Settings'
    };
    this.currentView.set(page);
    this.currentPage.set(pageNames[page] || 'Tasks');
    this.sidebarOpen.set(false);
  }

  onNotificationToggle() {
    console.log('Notifications toggled');
  }

  onUserToggle() {
    console.log('User menu toggled');
  }

  onLogout() {
    localStorage.removeItem('gotek_user');
    sessionStorage.removeItem('gotek_user');
    this.isAuthenticated.set(false);
    this.showDashboard.set(false);
    this.router.navigate(['/login']);
  }

  isViewActive(viewName: string): boolean {
    return this.currentView() === viewName;
  }
}

