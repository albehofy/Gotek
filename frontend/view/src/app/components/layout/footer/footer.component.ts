import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { ApiService } from '../../../services/api.service';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  footerData: any = null;
  currentYear = new Date().getFullYear();

  ngOnInit() {
    this.apiService.getPageContent('footer').subscribe((res: any) => {
      if (res && res.data) {
        this.footerData = res.data;
      }
    });
  }
}
