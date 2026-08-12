import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  apiService = inject(ApiService);

  loginForm!: FormGroup;
  loading = false;
  showError = false;
  showPassword = false;

  demoAccounts = [
    { role: 'super_admin', label: 'سوبر أدمن', email: 'admin@mediaglow.com', pass: 'password', icon: 'fa-user-shield', color: '#e8620a' },
    { role: 'employee', label: 'صانع محتوى', email: 'creator@mediaglow.com', pass: 'password', icon: 'fa-pen-nib', color: '#10b981' },
    { role: 'client', label: 'عميل VIP', email: 'client@mediaglow.com', pass: 'password', icon: 'fa-building', color: '#3b82f6' }
  ];


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['admin@mediaglow.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required],
      rememberMe: [true]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  quickFill(acc: any) {
    this.loginForm.patchValue({
      email: acc.email,
      password: acc.pass
    });
    this.onSubmit();
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.showError = false;
    
    const val = this.loginForm.value;
    
    this.apiService.login(val.email, val.password).subscribe({
      next: (res) => {
        this.loading = false;
        if (res && res.success) {
          localStorage.setItem('mediaglow_client_token', res.token || 'demo_token_123');
          if (res.user) {
            localStorage.setItem('mediaglow_user', JSON.stringify(res.user));
          }
          this.router.navigate(['/dashboard']);
        } else {
          this.showError = true;
        }
      },
      error: () => {
        this.loading = false;
        this.showError = true;
      }
    });
  }
}
