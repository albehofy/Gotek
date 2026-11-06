import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationService } from '../../../services/translation.service';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  translationService = inject(TranslationService);
  themeService = inject(ThemeService);
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleLang() {
    this.translationService.toggleLanguage();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  getStudioBadge(): string {
    return this.translationService.siteContent()?.navigation?.studio_badge || 'STUDIO';
  }

  getLogoUrl(): string {
    return this.translationService.siteContent()?.branding?.logo_url || 'assets/media-glow-logo.png';
  }
}
