import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<Theme>('dark');

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem('mediaglow_theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      this.setTheme(saved);
      return;
    }

    // Default to dark mode for cinematic luxury look
    this.setTheme('dark');
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mediaglow_theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
      if (document.body) {
        document.body.setAttribute('data-theme', theme);
        document.body.classList.toggle('theme-light', theme === 'light');
        document.body.classList.toggle('theme-dark', theme === 'dark');
      }
    }
  }

  toggleTheme(): void {
    const next = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  isDark(): boolean {
    return this.currentTheme() === 'dark';
  }
}
