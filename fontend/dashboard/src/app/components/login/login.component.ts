import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  apiService = inject(ApiService);
  toastService = inject(ToastService);

  loginForm!: FormGroup;
  loading = false;
  showError = false;
  showPassword = false;

  demoAccounts = [
    { role: 'super_admin', label: 'مدير النظام (أدمن)', email: 'admin@mediaglow.com', pass: 'password', icon: 'fa-user-shield', color: '#818cf8', badge: 'Super Admin' },
    { role: 'employee', label: 'صانع محتوى', email: 'creator@mediaglow.com', pass: 'password', icon: 'fa-pen-nib', color: '#34d399', badge: 'Creator' },
    { role: 'client', label: 'عميل VIP', email: 'client@mediaglow.com', pass: 'password', icon: 'fa-building', color: '#38bdf8', badge: 'Client' }
  ];


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['admin@mediaglow.com', Validators.required],
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
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.toastService.warning('يرجى كتابة البريد الإلكتروني وكلمة المرور بشكل صحيح');
      return;
    }

    this.loading = true;
    this.showError = false;
    
    const val = this.loginForm.value;
    
    this.apiService.login(val.email, val.password).subscribe({
      next: (res) => {
        this.loading = false;
        if (res && res.success) {
          this.toastService.success(`مرحباً بك مجدداً ${res.user?.name || ''}!`, 'تم تسجيل الدخول بنجاح');
          localStorage.setItem('mediaglow_client_token', res.token || 'demo_token_123');
          const user = res.user;
          if (user) {
            localStorage.setItem('mediaglow_user', JSON.stringify(user));
          }
          if (user && user.role === 'client') {
            this.router.navigate(['/client-portal']);
          } else if (user && user.role === 'employee') {
            this.router.navigate(['/tasks']);
          } else {
            this.router.navigate(['/dashboard']);
          }
        } else {
          this.showError = true;
          this.toastService.error('بيانات الدخول غير صحيحة، يرجى التأكد من البريد وكلمة المرور');
        }
      },
      error: (err) => {
        this.loading = false;
        this.showError = true;
        this.toastService.error(err.error?.message || 'بيانات الدخول غير صحيحة، يرجى التأكد من البيانات');
      }
    });
  }
}
