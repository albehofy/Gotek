import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, TagModule, ButtonModule, CardModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  apiService = inject(ApiService);
  projects: any[] = [];
  filteredProjects: any[] = [];
  categories: any[] = [];
  activeCategory: any = 'all';
  loading = true;
  stats: any = {};
  portfolioData: any = {};

  ngOnInit() {
    const fallbackProjects = [
      { id: 1, title: 'تطوير منصة التجارة الإلكترونية VIP', description: 'تصميم وبناء متجر إلكتروني متكامل عالي السرعة مع ربط جميع بوابات الدفع الإلكتروني.', category: { id: 101, name: 'تطوير ويب' }, category_id: 101, color: '#6366f1' },
      { id: 2, title: 'حملة نمو المبيعات والهوية البصرية', description: 'ابتكار هوية بصرية فاخرة وحملة تسويقية ممتازة حققت زيادة بالمبيعات بنسبة 350%.', category: { id: 102, name: 'تسويق وتصميم' }, category_id: 102, color: '#06b6d4' },
      { id: 3, title: 'إنتاج المحتوى والفيديوهات الإعلانية', description: 'سلسلة فيديوهات ترويجية تفاعلية لمنصات السوشيال ميديا وحملات الريلز.', category: { id: 103, name: 'صناعة محتوى' }, category_id: 103, color: '#f59e0b' }
    ];

    this.apiService.getProjects().subscribe(res => {
      const data = res?.data || res;
      this.projects = Array.isArray(data) && data.length ? data : fallbackProjects;
      this.filteredProjects = this.projects;
      
      const catsMap = new Map<number, any>();
      this.projects.forEach(p => {
        if (p.category && p.category.id) {
          catsMap.set(p.category.id, p.category);
        }
      });
      this.categories = Array.from(catsMap.values());
      this.loading = false;
    });

    this.apiService.getStats().subscribe(res => {
      this.stats = res;
    });

    this.apiService.getPageContent('portfolio').subscribe((res: any) => {
      if (res && res.data) {
        this.portfolioData = res.data;
      }
    });
  }

  setCategory(catId: any) {
    this.activeCategory = catId;
    if (catId === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.category_id === catId);
    }
  }
}
