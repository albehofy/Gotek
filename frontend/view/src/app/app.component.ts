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
}
