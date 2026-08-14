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
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'dashboard' 
  }
];
