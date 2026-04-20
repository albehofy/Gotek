import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = signal('demo@gotek.sa');
  password = signal('');
  rememberMe = signal(false);
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(private router: Router) {}

  onLogin() {
    if (!this.email() || !this.password()) {
      this.errorMessage.set('Please fill in all fields');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    // Simulate API call
    setTimeout(() => {
      const user = {
        email: this.email(),
        name: 'Demo Client',
        role: 'Client Account',
        avatar: 'DC'
      };

      localStorage.setItem('gotek_user', JSON.stringify(user));
      sessionStorage.setItem('gotek_user', JSON.stringify(user));

      this.isLoading.set(false);
      this.router.navigate(['/dashboard']);
    }, 1500);
  }

  onForgotPassword() {
    this.errorMessage.set('Reset link sent to your email');
    setTimeout(() => this.errorMessage.set(''), 3000);
  }
}
