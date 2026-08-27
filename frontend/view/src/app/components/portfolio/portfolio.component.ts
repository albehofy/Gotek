import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  
  projects: any[] = [];
  filteredProjects: any[] = [];
  categories: any[] = [];
  selectedCategory: any = 'all';
  loading = true;

  ngOnInit() {
    const fallbackProjects = [
      { id: 1, title: { ar: 'مقهى قِرمز', en: 'Qirmiz Café' }, description: { ar: 'إعادة بناء الهوية الكاملة لسلسلة مقاهي راقية.', en: 'Full brand rebuild for an upscale café chain.' }, category: { id: 101, name_ar: 'هوية بصرية', name_en: 'Brand Identity' } },
      { id: 2, title: { ar: 'عيادات النور', en: 'Al Noor Clinics' }, description: { ar: 'حملة تسويقية رقمية رفعت الحجوزات 3 أضعاف.', en: 'Digital marketing campaign that tripled bookings.' }, category: { id: 102, name_ar: 'تسويق رقمي', name_en: 'Digital Marketing' } },
      { id: 3, title: { ar: 'منصة تكامل', en: 'Takamol Platform' }, description: { ar: 'منصة B2B ثنائية اللغة مبنية بتقنيات حديثة من الصفر.', en: 'Bilingual B2B platform built from scratch with modern stack.' }, category: { id: 103, name_ar: 'تطوير مواقع', name_en: 'Web Development' } }
    ];

    this.apiService.getProjects().subscribe(res => {
      const data = res?.data || res;
      this.projects = Array.isArray(data) && data.length ? data : fallbackProjects;
      this.filteredProjects = this.projects;
      
      const catsMap = new Map<any, any>();
      this.projects.forEach(p => {
        if (p.category && (p.category.id || p.category.name || p.category.name_ar)) {
          const key = p.category.id || p.category.name || p.category.name_ar;
          catsMap.set(key, p.category);
        }
      });
      this.categories = Array.from(catsMap.values());
      this.loading = false;
    });
  }

  filterCategory(catId: any) {
    this.selectedCategory = catId;
    if (catId === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => 
        p.category_id === catId || 
        p.category?.id === catId || 
        p.category?.slug === catId || 
        p.category?.name === catId ||
        p.category?.name_ar === catId
      );
    }
  }
}
