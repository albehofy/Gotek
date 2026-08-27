import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslatePipe],
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

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
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
          this.router.navigate(['/controller-dashboard']);
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
