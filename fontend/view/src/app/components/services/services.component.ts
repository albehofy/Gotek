import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  services: any[] = [];
  servicesPageData: any = {};

  ngOnInit() {
    this.apiService.getServices().subscribe((res: any) => {
      this.services = res.data ? res.data : res;
    });

    this.apiService.getPageContent('services').subscribe((res: any) => {
      if (res && res.data) {
        this.servicesPageData = res.data;
      }
    });
  }
}
