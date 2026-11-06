import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ApiService } from './services/api.service';
import { TranslationService } from './services/translation.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'view';
  router = inject(Router);
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  showHeaderFooter = true;

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      this.showHeaderFooter = !(url.includes('/login') || url.includes('/controller-dashboard'));
    });
  }

  ngOnInit() {
    this.translationService.setLanguage(this.translationService.currentLang());
    this.loadGlobalSiteContent();
  }

  loadGlobalSiteContent() {
    this.apiService.getSiteContent().subscribe({
      next: (res: any) => {
        if (res && res.data) {
          this.translationService.setSiteContent(res.data);
        }
      },
      error: () => {}
    });
  }

  getWhatsAppUrl(): string {
    const phone = this.translationService.siteContent()?.contact?.whatsapp 
      || this.translationService.siteContent()?.footer?.phone 
      || '201000000000';
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const msg = this.translationService.currentLang() === 'ar' 
      ? encodeURIComponent('مرحباً ميديا جلو، أود الاستفسار عن خدمات الإنتاج والتسويق') 
      : encodeURIComponent('Hello Media Glow, I would like to inquire about your production & marketing services');
    return `https://wa.me/${cleanPhone}?text=${msg}`;
  }
}
