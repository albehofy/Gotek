import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/controller-dashboard/controller-dashboard.component').then(m => m.ControllerDashboardComponent) 
  },
  { 
    path: 'controller-dashboard', 
    loadComponent: () => import('./components/controller-dashboard/controller-dashboard.component').then(m => m.ControllerDashboardComponent) 
  },
  { 
    path: '**', 
    redirectTo: 'dashboard' 
  }
];
