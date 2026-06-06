import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', loadComponent: () => import('./components/admin-dashboard/views/overview/overview.component').then(c => c.OverviewComponent) },
      { path: 'contact-hub', loadComponent: () => import('./components/admin-dashboard/views/contact-hub/contact-hub.component').then(c => c.ContactHubComponent) },
      { path: 'deals', loadComponent: () => import('./components/admin-dashboard/views/deals/deals.component').then(c => c.DealsComponent) },
      { path: 'task-board', loadComponent: () => import('./components/admin-dashboard/views/task-board/task-board.component').then(c => c.TaskBoardComponent) },
      { path: 'team-mgmt', loadComponent: () => import('./components/admin-dashboard/views/team-mgmt/team-mgmt.component').then(c => c.TeamMgmtComponent) },
      { path: 'projects', loadComponent: () => import('./components/admin-dashboard/views/projects/projects.component').then(c => c.ProjectsComponent) },
      { path: 'categories', loadComponent: () => import('./components/admin-dashboard/views/categories/categories.component').then(c => c.CategoriesComponent) },
      { path: 'services', loadComponent: () => import('./components/admin-dashboard/views/services/services.component').then(c => c.ServicesComponent) },
      { path: 'faqs', loadComponent: () => import('./components/admin-dashboard/views/faqs/faqs.component').then(c => c.FaqsComponent) },
      { path: 'testimonials', loadComponent: () => import('./components/admin-dashboard/views/testimonials/testimonials.component').then(c => c.TestimonialsComponent) },
      { path: 'blogs', loadComponent: () => import('./components/admin-dashboard/views/blogs/blogs.component').then(c => c.BlogsComponent) },
      { path: 'settings', loadComponent: () => import('./components/admin-dashboard/views/settings/settings.component').then(c => c.SettingsComponent) },
    ]
  },
  { path: '**', redirectTo: 'login' }
];
