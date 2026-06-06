import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
  errorMessage = '';

  ngOnInit() {
    const token = localStorage.getItem('gotek_token') || sessionStorage.getItem('gotek_token');
    if (token) {
      this.router.navigate(['/dashboard']);
      return;
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  autofill(role: string) {
    let email = '';
    const password = 'password';
    switch (role) {
      case 'admin': email = 'admin@goteksa.com'; break;
      case 'manager': email = 'manager@goteksa.com'; break;
      case 'generator': email = 'generator@goteksa.com'; break;
      case 'dept_manager': email = 'deptmanager@goteksa.com'; break;
      case 'employee': email = 'employee1@goteksa.com'; break;
      case 'client': email = 'client@goteksa.com'; break;
    }
    this.loginForm.patchValue({ email, password });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.showError = false;
    
    const val = this.loginForm.value;
    
    this.apiService.login(val.email, val.password).subscribe(res => {
      this.loading = false;
      if (res && res.success) {
        localStorage.setItem('gotek_token', res.token);
        localStorage.setItem('gotek_user', JSON.stringify(res.user));
        this.router.navigate(['/dashboard']);
      } else {
        this.showError = true;
        this.errorMessage = res?.message || 'Connection failed. Please check your credentials.';
      }
    });
  }
}
