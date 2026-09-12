import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) 
  },
  {
    path: '',
    loadComponent: () => import('./components/layout/main-layout.component').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      { 
        path: 'dashboard', 
        canActivate: [roleGuard(['super_admin', 'admin', 'department_manager', 'employee'])],
        loadComponent: () => import('./components/controller-dashboard/controller-dashboard.component').then(m => m.ControllerDashboardComponent) 
      },
      { 
        path: 'clients', 
        canActivate: [roleGuard(['super_admin', 'admin', 'department_manager'])],
        loadComponent: () => import('./components/clients/clients-list.component').then(m => m.ClientsListComponent) 
      },
      { 
        path: 'clients/:id', 
        canActivate: [roleGuard(['super_admin', 'admin', 'department_manager'])],
        loadComponent: () => import('./components/clients/client-detail.component').then(m => m.ClientDetailComponent) 
      },
      { 
        path: 'deals', 
        canActivate: [roleGuard(['super_admin', 'admin', 'department_manager'])],
        loadComponent: () => import('./components/deals/deals-management.component').then(m => m.DealsManagementComponent) 
      },
      { 
        path: 'deals/:id', 
        canActivate: [roleGuard(['super_admin', 'admin', 'department_manager'])],
        loadComponent: () => import('./components/deals/deal-detail.component').then(m => m.DealDetailComponent) 
      },
      { 
        path: 'tasks', 
        canActivate: [roleGuard(['super_admin', 'admin', 'department_manager', 'employee', 'client'])],
        loadComponent: () => import('./components/tasks/tasks-board.component').then(m => m.TasksBoardComponent) 
      },
      { 
        path: 'departments', 
        canActivate: [roleGuard(['super_admin', 'admin', 'department_manager'])],
        loadComponent: () => import('./components/departments/departments-sections.component').then(m => m.DepartmentsSectionsComponent) 
      },
      { 
        path: 'finance', 
        canActivate: [roleGuard(['super_admin', 'admin'])],
        loadComponent: () => import('./components/finance/finance-dashboard.component').then(m => m.FinanceDashboardComponent) 
      },
      { 
        path: 'client-portal', 
        canActivate: [roleGuard(['super_admin', 'admin', 'client'])],
        loadComponent: () => import('./components/client-portal/client-portal-view.component').then(m => m.ClientPortalViewComponent) 
      },
      { 
        path: 'roles', 
        canActivate: [roleGuard(['super_admin', 'admin'])],
        loadComponent: () => import('./components/roles/roles-management.component').then(m => m.RolesManagementComponent) 
      },
      // ── Portfolio Management ────────────────────────────────────────────────
      {
        path: 'portfolio',
        canActivate: [roleGuard(['super_admin', 'admin'])],
        loadComponent: () => import('./components/portfolio/portfolio-management.component').then(m => m.PortfolioManagementComponent),
        children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          {
            path: 'overview',
            loadComponent: () => import('./components/portfolio/overview/portfolio-overview.component').then(m => m.PortfolioOverviewComponent)
          },
          {
            path: 'projects',
            loadComponent: () => import('./components/portfolio/projects/portfolio-projects.component').then(m => m.PortfolioProjectsComponent)
          },
          {
            path: 'projects/:id',
            loadComponent: () => import('./components/portfolio/projects/portfolio-project-detail.component').then(m => m.PortfolioProjectDetailComponent)
          },
          {
            path: 'categories',
            loadComponent: () => import('./components/portfolio/categories/portfolio-categories.component').then(m => m.PortfolioCategoriesComponent)
          },
          {
            path: 'services',
            loadComponent: () => import('./components/portfolio/services/portfolio-services.component').then(m => m.PortfolioServicesComponent)
          },
          {
            path: 'blogs',
            loadComponent: () => import('./components/portfolio/blogs/portfolio-blogs.component').then(m => m.PortfolioBlogsComponent)
          },
          {
            path: 'testimonials',
            loadComponent: () => import('./components/portfolio/testimonials/portfolio-testimonials.component').then(m => m.PortfolioTestimonialsComponent)
          },
          {
            path: 'faqs',
            loadComponent: () => import('./components/portfolio/faqs/portfolio-faqs.component').then(m => m.PortfolioFaqsComponent)
          },
          {
            path: 'about',
            loadComponent: () => import('./components/portfolio/about/portfolio-about.component').then(m => m.PortfolioAboutComponent)
          },
          {
            path: 'pages',
            loadComponent: () => import('./components/portfolio/pages/portfolio-pages.component').then(m => m.PortfolioPagesComponent)
          },
          {
            path: 'inquiries',
            loadComponent: () => import('./components/portfolio/inquiries/portfolio-inquiries.component').then(m => m.PortfolioInquiriesComponent)
          }
        ]
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'dashboard' 
  }
];
