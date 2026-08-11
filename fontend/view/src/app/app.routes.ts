import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ControllerDashboardComponent } from './components/controller-dashboard/controller-dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'project', component: ProjectDetailsComponent }, // for query params
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
  { path: 'blog-details', component: BlogDetailsComponent }, // for query params
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'controller-dashboard', component: ControllerDashboardComponent },
  { path: '**', redirectTo: '' }
];
