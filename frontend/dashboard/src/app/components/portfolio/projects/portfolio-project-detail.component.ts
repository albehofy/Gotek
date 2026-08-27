import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-portfolio-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio-project-detail.component.html',
  styleUrls: ['./portfolio-project-detail.component.css']
})
export class PortfolioProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private apiService = inject(ApiService);

  project: any = null;
  loading = true;
  lightboxOpen = false;
  lightboxIndex = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loadProject(params['id']);
      }
    });
  }

  loadProject(id: string): void {
    this.loading = true;
    this.apiService.getProjects().subscribe({
      next: (res: any) => {
        const arr = Array.isArray(res) ? res : (res?.data || []);
        this.project = arr.find((p: any) => String(p.id) === String(id)) || null;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  getTitle(): string {
    if (!this.project) return '';
    return this.project.title?.ar || this.project.title_ar ||
           (typeof this.project.title === 'string' ? this.project.title : '') || '';
  }

  getTitleEn(): string {
    if (!this.project) return '';
    return this.project.title?.en || this.project.title_en || '';
  }

  getDescription(): string {
    if (!this.project) return '';
    return this.project.description?.ar || this.project.description_ar ||
           (typeof this.project.description === 'string' ? this.project.description : '') || '';
  }

  getDescriptionEn(): string {
    if (!this.project) return '';
    return this.project.description?.en || this.project.description_en || '';
  }

  getChallenge(): string {
    if (!this.project?.challenge) return '';
    return this.project.challenge?.ar || this.project.challenge_ar ||
           (typeof this.project.challenge === 'string' ? this.project.challenge : '') || '';
  }

  getChallengeEn(): string {
    if (!this.project?.challenge) return '';
    return this.project.challenge?.en || this.project.challenge_en || '';
  }

  getSolution(): string {
    if (!this.project?.solution) return '';
    return this.project.solution?.ar || this.project.solution_ar ||
           (typeof this.project.solution === 'string' ? this.project.solution : '') || '';
  }

  getSolutionEn(): string {
    if (!this.project?.solution) return '';
    return this.project.solution?.en || this.project.solution_en || '';
  }

  getCategoryName(): string {
    const cat = this.project?.category;
    if (!cat) return '';
    return cat.name?.ar || cat.name_ar || (typeof cat.name === 'string' ? cat.name : '') || '';
  }

  getGallery(): string[] {
    return this.project?.gallery || [];
  }

  getResults(): string[] {
    const r = this.project?.results;
    if (Array.isArray(r)) return r;
    if (typeof r === 'string') return r.split(',').map((s: string) => s.trim()).filter(Boolean);
    return [];
  }

  getTags(): string[] {
    const t = this.project?.tags;
    if (Array.isArray(t)) return t;
    if (typeof t === 'string') return t.split(',').map((s: string) => s.trim()).filter(Boolean);
    return [];
  }

  getTestimonialText(): string {
    const t = this.project?.testimonial;
    if (!t) return '';
    return t.text || (typeof t === 'string' ? t : '') || '';
  }

  getTestimonialName(): string {
    return this.project?.testimonial?.name || '';
  }

  getTestimonialRole(): string {
    return this.project?.testimonial?.role || '';
  }

  openLightbox(index: number): void {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prevImage(): void {
    const gallery = this.getGallery();
    this.lightboxIndex = (this.lightboxIndex - 1 + gallery.length) % gallery.length;
  }

  nextImage(): void {
    const gallery = this.getGallery();
    this.lightboxIndex = (this.lightboxIndex + 1) % gallery.length;
  }

  goBack(): void {
    this.router.navigate(['/portfolio/projects']);
  }
}
