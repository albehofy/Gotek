import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);

  // Data from API
  projects: any[] = [];
  testimonials: any[] = [];
  services: any[] = [];
  activeTestimonialIndex = 0;

  ngOnInit() {
    this.loadApiData();
  }

  loadApiData() {
    this.apiService.getProjects({ limit: 3 }).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.projects = Array.isArray(data) ? data : [];
    });

    this.apiService.getTestimonials(5).subscribe((res: any) => {
      const data = res?.data ?? res ?? [];
      this.testimonials = Array.isArray(data) ? data : [];
    });
  }

  setTestimonialIndex(index: number) {
    this.activeTestimonialIndex = index;
  }

  getProjectTitle(p: any): string {
    const lang = this.translationService.currentLang();
    if (p.title && typeof p.title === 'object') {
      return p.title[lang] || p.title.ar || p.title.en || '';
    }
    return p.title_ar || p.title || '';
  }

  getProjectDesc(p: any): string {
    const lang = this.translationService.currentLang();
    if (p.description && typeof p.description === 'object') {
      return p.description[lang] || p.description.ar || p.description.en || '';
    }
    return p.description_ar || p.description || '';
  }

  getCategoryName(p: any): string {
    const lang = this.translationService.currentLang();
    const cat = p.category;
    if (!cat) return '';
    if (cat.name && typeof cat.name === 'object') {
      return cat.name[lang] || cat.name.ar || cat.name.en || '';
    }
    return cat.name_ar || cat.name || '';
  }
}
