import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { App } from './app';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: App },
  { path: 'client-detail/:id', component: ClientDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
