import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'home', 
    redirectTo: '', 
    pathMatch: 'full' 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'services', 
    loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) 
  },
  { 
    path: 'portfolio', 
    loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent) 
  },
  { 
    path: 'project/:id', 
    loadComponent: () => import('./components/project-details/project-details.component').then(m => m.ProjectDetailsComponent) 
  },
  { 
    path: 'project', 
    loadComponent: () => import('./components/project-details/project-details.component').then(m => m.ProjectDetailsComponent) 
  },
  { 
    path: 'blogs', 
    loadComponent: () => import('./components/blogs/blogs.component').then(m => m.BlogsComponent) 
  },
  { 
    path: 'blog-details/:id', 
    loadComponent: () => import('./components/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) 
  },
  { 
    path: 'blog-details', 
    loadComponent: () => import('./components/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'controller-dashboard', 
    loadComponent: () => import('./components/controller-dashboard/controller-dashboard.component').then(m => m.ControllerDashboardComponent) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
