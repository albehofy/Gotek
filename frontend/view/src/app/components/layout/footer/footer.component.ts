import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { ApiService } from '../../../services/api.service';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  footerData: any = null;
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  newsletterSuccess = false;
  newsletterLoading = false;

  ngOnInit() {
    if (this.translationService.siteContent()?.footer) {
      this.footerData = this.translationService.siteContent().footer;
    }
    this.apiService.getPageContent('footer').subscribe((res: any) => {
      if (res && res.data) {
        this.footerData = res.data;
      }
    });
  }

  subscribeNewsletter() {
    if (!this.newsletterEmail || !this.newsletterEmail.includes('@')) return;
    this.newsletterLoading = true;
    
    // Call newsletter endpoint or store gracefully
    this.apiService.submitContact({
      name: 'Newsletter Subscriber',
      email: this.newsletterEmail,
      service: 'newsletter',
      details: 'Subscribed to Media Glow VIP Cinema & Marketing newsletter'
    }).subscribe({
      next: () => {
        this.newsletterSuccess = true;
        this.newsletterLoading = false;
        this.newsletterEmail = '';
      },
      error: () => {
        // Still give feedback so user experience is smooth
        this.newsletterSuccess = true;
        this.newsletterLoading = false;
        this.newsletterEmail = '';
      }
    });
  }

  getFooterDesc(): string {
    if (this.footerData?.desc) {
      const lang = this.translationService.currentLang();
      if (typeof this.footerData.desc === 'object') {
        return this.footerData.desc[lang] || this.footerData.desc.ar || this.footerData.desc.en || this.translationService.translate('foot.desc');
      }
      return this.footerData.desc;
    }
    return this.translationService.translate('foot.desc');
  }

  getEmail(): string {
    return this.footerData?.email || 'hello@mediaglow.agency';
  }

  getPhone(): string {
    return this.footerData?.phone || '+20 100 000 0000';
  }

  getSocial(key: string, fallback: string): string {
    return this.footerData?.socials?.[key] || fallback;
  }

  getAddress(): string {
    if (this.footerData?.address) {
      const lang = this.translationService.currentLang();
      if (typeof this.footerData.address === 'object') {
        return this.footerData.address[lang] || this.footerData.address.ar || this.footerData.address.en || this.translationService.translate('foot.l7');
      }
      return this.footerData.address;
    }
    return this.translationService.translate('foot.l7');
  }

  getCopy(): string {
    if (this.footerData?.copy) {
      const lang = this.translationService.currentLang();
      if (typeof this.footerData.copy === 'object') {
        return this.footerData.copy[lang] || this.footerData.copy.ar || this.footerData.copy.en || this.translationService.translate('foot.copy');
      }
      return this.footerData.copy;
    }
    return this.translationService.translate('foot.copy');
  }

  getMade(): string {
    if (this.footerData?.made) {
      const lang = this.translationService.currentLang();
      if (typeof this.footerData.made === 'object') {
        return this.footerData.made[lang] || this.footerData.made.ar || this.footerData.made.en || this.translationService.translate('foot.made');
      }
      return this.footerData.made;
    }
    return this.translationService.translate('foot.made');
  }

  getLogoUrl(): string {
    return this.translationService.siteContent()?.branding?.logo_url || 'assets/media-glow-logo.png';
  }
}
