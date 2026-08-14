import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) 
  },
  {
    path: '',
    loadComponent: () => import('./components/layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./components/controller-dashboard/controller-dashboard.component').then(m => m.ControllerDashboardComponent) 
      },
      { 
        path: 'clients', 
        loadComponent: () => import('./components/clients/clients-list.component').then(m => m.ClientsListComponent) 
      },
      { 
        path: 'clients/:id', 
        loadComponent: () => import('./components/clients/client-detail.component').then(m => m.ClientDetailComponent) 
      },
      { 
        path: 'deals', 
        loadComponent: () => import('./components/deals/deals-management.component').then(m => m.DealsManagementComponent) 
      },
      { 
        path: 'deals/:id', 
        loadComponent: () => import('./components/deals/deal-detail.component').then(m => m.DealDetailComponent) 
      },
      { 
        path: 'tasks', 
        loadComponent: () => import('./components/tasks/tasks-board.component').then(m => m.TasksBoardComponent) 
      },
      { 
        path: 'departments', 
        loadComponent: () => import('./components/departments/departments-sections.component').then(m => m.DepartmentsSectionsComponent) 
      },
      { 
        path: 'finance', 
        loadComponent: () => import('./components/finance/finance-dashboard.component').then(m => m.FinanceDashboardComponent) 
      },
      { 
        path: 'client-portal', 
        loadComponent: () => import('./components/client-portal/client-portal-view.component').then(m => m.ClientPortalViewComponent) 
      },
      { 
        path: 'roles', 
        loadComponent: () => import('./components/roles/roles-management.component').then(m => m.RolesManagementComponent) 
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'dashboard' 
  }
];
