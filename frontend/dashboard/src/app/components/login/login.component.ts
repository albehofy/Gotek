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
  showPassword = false;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [true]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.toastService.warning('يرجى كتابة البريد الإلكتروني وكلمة المرور بشكل صحيح');
      return;
    }

    this.loading = true;
    
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
          localStorage.removeItem('mediaglow_client_token');
          localStorage.removeItem('mediaglow_user');
          this.toastService.error(res?.message || 'بيانات الدخول غير صحيحة، يرجى التأكد من البريد وكلمة المرور');
        }
      },
      error: (err) => {
        this.loading = false;
        localStorage.removeItem('mediaglow_client_token');
        localStorage.removeItem('mediaglow_user');
        this.toastService.error(err.error?.message || err.message || 'بيانات الدخول غير صحيحة، يرجى التأكد من البيانات');
      }
    });
  }
}
