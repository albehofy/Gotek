import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
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
    this.apiService.getProjects().subscribe(res => {
      this.projects = res.data ? res.data : (res || []);
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
