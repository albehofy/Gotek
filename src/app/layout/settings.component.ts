import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  user = {
    fullName: signal('Demo Client'),
    email: signal('demo@gotek.sa'),
    company: signal('TechMart Retail Co.'),
    phone: signal('+966 5X XXX XXXX'),
    role: signal('Client Account')
  };

  settings = {
    emailNotifications: signal(true),
    pushNotifications: signal(true),
    weeklyReports: signal(true),
    darkMode: signal(false)
  };

  saveMessage = signal('');
  twoFAEnabled = signal(false);

  onSaveProfile() {
    // Simulate save
    this.saveMessage.set('✓ Profile saved successfully!');
    setTimeout(() => this.saveMessage.set(''), 2500);
  }

  onSaveSettings() {
    // Simulate save
    this.saveMessage.set('✓ Settings updated!');
    setTimeout(() => this.saveMessage.set(''), 2500);
  }

  onChangePassword() {
    this.saveMessage.set('Password change sent to email');
    setTimeout(() => this.saveMessage.set(''), 2500);
  }

  onToggle2FA() {
    this.twoFAEnabled.update(val => !val);
    this.saveMessage.set(
      this.twoFAEnabled() ? '✓ 2FA enabled' : '✓ 2FA disabled'
    );
    setTimeout(() => this.saveMessage.set(''), 2500);
  }

  onLogout() {
    localStorage.removeItem('gotek_user');
    sessionStorage.removeItem('gotek_user');
    window.location.href = '/login';
  }
}
