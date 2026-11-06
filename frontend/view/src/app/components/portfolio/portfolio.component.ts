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
  portfolioPageData: any = {};

  ngOnInit() {
    this.apiService.getPageContent('portfolio').subscribe((res: any) => {
      if (res && res.data) {
        this.portfolioPageData = res.data;
      }
    });

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
        p.category?.name_ar === catId ||
        p.category?.name_en === catId
      );
    }
  }

  getProjectTitle(p: any): string {
    if (!p) return '';
    const lang = this.translationService.currentLang();
    if (typeof p.title === 'object' && p.title !== null) {
      return p.title[lang] || p.title[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof p.title_ar === 'string' || typeof p.title_en === 'string') {
      return (lang === 'en' ? (p.title_en || p.title_ar) : (p.title_ar || p.title_en)) || '';
    }
    return typeof p.title === 'string' ? p.title : '';
  }

  getProjectDesc(p: any): string {
    if (!p) return '';
    const lang = this.translationService.currentLang();
    const desc = p.description || p.desc;
    if (typeof desc === 'object' && desc !== null) {
      return desc[lang] || desc[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof p.description_ar === 'string' || typeof p.description_en === 'string') {
      return (lang === 'en' ? (p.description_en || p.description_ar) : (p.description_ar || p.description_en)) || '';
    }
    return typeof desc === 'string' ? desc : '';
  }

  getCategoryName(cat: any): string {
    if (!cat) return '';
    const lang = this.translationService.currentLang();
    if (typeof cat === 'string') return cat;
    if (typeof cat.name === 'object' && cat.name !== null) {
      return cat.name[lang] || cat.name[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (lang === 'en') {
      return cat.name_en || cat.name || cat.name_ar || '';
    }
    return cat.name_ar || cat.name || cat.name_en || '';
  }

  getHeroTag(): string {
    const lang = this.translationService.currentLang();
    return this.portfolioPageData?.hero?.tag?.[lang]
      || this.portfolioPageData?.hero?.tag?.ar
      || this.portfolioPageData?.hero?.tag?.en
      || (lang === 'ar' ? 'معرض الأعمال السينمائي' : 'CINEMATIC WORK ARCHIVE');
  }

  getHeroTitle(): string {
    const lang = this.translationService.currentLang();
    return this.portfolioPageData?.hero?.title?.[lang]
      || this.portfolioPageData?.hero?.title?.ar
      || this.portfolioPageData?.hero?.title?.en
      || (lang === 'ar' ? 'إنتاجات تتحدث عن نفسها' : 'Crafted for Global Impact');
  }

  getHeroDesc(): string {
    const lang = this.translationService.currentLang();
    return this.portfolioPageData?.hero?.desc?.[lang]
      || this.portfolioPageData?.hero?.desc?.ar
      || this.portfolioPageData?.hero?.desc?.en
      || (lang === 'ar' 
         ? 'نستعرض هنا أرشيف إنتاجاتنا في الأفلام الإعلانية، الهويات البصرية الأيقونية، والحملات الاستراتيجية للعلامات الرائدة.'
         : 'A curated showcase of our work in commercial film production, iconic visual identity, and high-performance brand campaigns.');
  }
}
