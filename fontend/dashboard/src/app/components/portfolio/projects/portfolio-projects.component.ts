import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.css']
})
export class PortfolioProjectsComponent implements OnInit {
  private apiService = inject(ApiService);
  private confirmService = inject(ConfirmService);
  private fb = inject(FormBuilder);

  projects: any[] = [];
  categories: any[] = [];
  filteredProjects: any[] = [];
  
  searchQuery = '';
  selectedCategoryFilter = '';
  
  loading = false;
  showDrawer = false;
  isEditing = false;
  currentId: string | null = null;
  savingProject = false;
  
  projectForm: FormGroup;
  projectImageFile: File | null = null;
  projectImagePreview: string | null = null;
  galleryFiles: File[] = [];
  galleryPreviews: string[] = [];
  existingGallery: string[] = [];

  constructor() {
    this.projectForm = this.fb.group({
      title_ar: ['', Validators.required],
      title_en: ['', Validators.required],
      description_ar: [''],
      description_en: [''],
      category_id: ['', Validators.required],
      color: ['#6366f1'],
      emoji: [''],
      client: [''],
      timeline: [''],
      ViewInHome: [false],
      challenge_ar: [''],
      challenge_en: [''],
      solution_ar: [''],
      solution_en: [''],
      results_str: [''],
      deliverables_str: [''],
      tags_str: [''],
      testimonial_text: [''],
      testimonial_name: [''],
      testimonial_role: ['']
    });
  }

  ngOnInit() {
    this.loadCategories();
    this.loadProjects();
  }

  loadCategories() {
    this.apiService.getCategories().subscribe({
      next: (res: any) => {
        this.categories = res.data || res || [];
      },
      error: (err: any) => console.error('Error loading categories', err)
    });
  }

  loadProjects() {
    this.loading = true;
    this.apiService.getProjects().subscribe({
      next: (res: any) => {
        this.projects = res.data || res || [];
        this.filterProjects();
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error loading projects', err);
        this.loading = false;
      }
    });
  }

  filterProjects() {
    this.filteredProjects = this.projects.filter(p => {
      const titleSearch = this.getProjectTitle(p) + ' ' + this.getProjectTitleEn(p) + ' ' + this.getProjectDescription(p);
      const matchesSearch = this.searchQuery ? 
        titleSearch.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      
      const matchesCategory = this.selectedCategoryFilter ? 
        (p.category_id == this.selectedCategoryFilter || p.category?.id == this.selectedCategoryFilter) : true;
        
      return matchesSearch && matchesCategory;
    });
  }

  openAddDrawer() {
    this.isEditing = false;
    this.currentId = null;
    this.projectForm.reset({
      color: '#6366f1',
      ViewInHome: false
    });
    this.resetFiles();
    this.showDrawer = true;
  }

  openEditDrawer(p: any) {
    this.isEditing = true;
    this.currentId = p.id;
    this.resetFiles();
    
    let results_str = '';
    if (p.results && Array.isArray(p.results)) results_str = p.results.join(', ');
    else if (typeof p.results === 'string') results_str = p.results;
    else if (p.results) {
      try { results_str = JSON.parse(p.results).join(', '); } catch (e) {}
    }

    let deliverables_str = '';
    if (p.deliverables && Array.isArray(p.deliverables)) deliverables_str = p.deliverables.join(', ');
    else if (typeof p.deliverables === 'string') deliverables_str = p.deliverables;
    else if (p.deliverables) {
      try { deliverables_str = JSON.parse(p.deliverables).join(', '); } catch (e) {}
    }

    let tags_str = '';
    if (p.tags && Array.isArray(p.tags)) tags_str = p.tags.join(', ');
    else if (typeof p.tags === 'string') tags_str = p.tags;
    else if (p.tags) {
      try { tags_str = JSON.parse(p.tags).join(', '); } catch (e) {}
    }

    this.projectForm.patchValue({
      title_ar: p.title?.ar || p.title_ar || p.title || '',
      title_en: p.title?.en || p.title_en || '',
      description_ar: p.description?.ar || p.description_ar || p.description || '',
      description_en: p.description?.en || p.description_en || '',
      category_id: p.category_id || p.category?.id || '',
      color: p.color || '#6366f1',
      emoji: p.emoji || '',
      client: p.client || '',
      timeline: p.timeline || '',
      ViewInHome: !!p.ViewInHome,
      challenge_ar: p.challenge?.ar || p.challenge_ar || '',
      challenge_en: p.challenge?.en || p.challenge_en || '',
      solution_ar: p.solution?.ar || p.solution_ar || '',
      solution_en: p.solution?.en || p.solution_en || '',
      results_str: results_str,
      deliverables_str: deliverables_str,
      tags_str: tags_str,
      testimonial_text: p.testimonial?.text || p.testimonial_text || '',
      testimonial_name: p.testimonial?.name || p.testimonial_name || '',
      testimonial_role: p.testimonial?.role || p.testimonial_role || ''
    });
    
    if (p.image) {
      this.projectImagePreview = p.image;
    }
    
    this.existingGallery = [];
    if (p.gallery && Array.isArray(p.gallery)) {
      this.existingGallery = [...p.gallery];
    }

    this.showDrawer = true;
  }

  closeDrawer() {
    this.showDrawer = false;
    this.resetFiles();
  }

  resetFiles() {
    this.projectImageFile = null;
    this.projectImagePreview = null;
    this.galleryFiles = [];
    this.galleryPreviews = [];
    this.existingGallery = [];
  }

  onMainImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.projectImageFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => this.projectImagePreview = e.target.result;
      reader.readAsDataURL(file);
    }
  }

  onGalleryChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.galleryFiles.push(file);
        const reader = new FileReader();
        reader.onload = (e: any) => this.galleryPreviews.push(e.target.result);
        reader.readAsDataURL(file);
      }
    }
  }

  removeGalleryItem(index: number, isExisting: boolean = false) {
    if (isExisting) {
      this.existingGallery.splice(index, 1);
    } else {
      this.galleryFiles.splice(index, 1);
      this.galleryPreviews.splice(index, 1);
    }
  }

  saveProject() {
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }
    
    this.savingProject = true;
    const v = this.projectForm.value;
    const formData = new FormData();
    
    formData.append('title_ar', v.title_ar);
    formData.append('title_en', v.title_en);
    formData.append('description_ar', v.description_ar);
    formData.append('description_en', v.description_en);
    formData.append('category_id', v.category_id);
    formData.append('color', v.color);
    formData.append('emoji', v.emoji);
    formData.append('client', v.client);
    formData.append('timeline', v.timeline);
    formData.append('ViewInHome', v.ViewInHome ? '1' : '0');
    formData.append('challenge_ar', v.challenge_ar);
    formData.append('challenge_en', v.challenge_en);
    formData.append('solution_ar', v.solution_ar);
    formData.append('solution_en', v.solution_en);
    
    const results = v.results_str ? v.results_str.split(',').map((s: string) => s.trim()).filter((s: string) => s) : [];
    formData.append('results', JSON.stringify(results));
    
    const deliverables = v.deliverables_str ? v.deliverables_str.split(',').map((s: string) => s.trim()).filter((s: string) => s) : [];
    formData.append('deliverables', JSON.stringify(deliverables));
    
    const tags = v.tags_str ? v.tags_str.split(',').map((s: string) => s.trim()).filter((s: string) => s) : [];
    formData.append('tags', JSON.stringify(tags));
    
    formData.append('testimonial_text', v.testimonial_text);
    formData.append('testimonial_name', v.testimonial_name);
    formData.append('testimonial_role', v.testimonial_role);
    
    if (this.projectImageFile) {
      formData.append('main_image', this.projectImageFile);
    }
    
    if (this.galleryFiles.length > 0) {
      this.galleryFiles.forEach(file => {
        formData.append('gallery[]', file);
      });
    }
    
    if (this.isEditing) {
      formData.append('existing_gallery', JSON.stringify(this.existingGallery));
    }

    if (this.isEditing && this.currentId) {
      this.apiService.updateProject(this.currentId, formData).subscribe({
        next: () => {
          this.savingProject = false;
          this.closeDrawer();
          this.loadProjects();
        },
        error: (err: any) => {
          console.error(err);
          this.savingProject = false;
        }
      });
    } else {
      this.apiService.addProject(formData).subscribe({
        next: () => {
          this.savingProject = false;
          this.closeDrawer();
          this.loadProjects();
        },
        error: (err: any) => {
          console.error(err);
          this.savingProject = false;
        }
      });
    }
  }

  deleteProject(id: string) {
    this.confirmService.confirm({
      title: 'حذف المشروع',
      message: 'هل أنت متأكد من حذف هذا المشروع؟ سيتم حذف جميع الصور المرتبطة به.',
      confirmText: 'حذف',
      cancelText: 'إلغاء',
      type: 'danger',
      accept: () => {
        this.apiService.deleteProject(id).subscribe({
          next: () => this.loadProjects(),
          error: (err: any) => console.error(err)
        });
      }
    });
  }

  getProjectTitle(p: any): string {
    return p.title?.ar || p.title_ar || p.title || '';
  }

  getProjectTitleEn(p: any): string {
    return p.title?.en || p.title_en || '';
  }

  getProjectDescription(p: any): string {
    return p.description?.ar || p.description_ar || p.description || '';
  }

  getCategoryName(p: any): string {
    return p.category?.name_ar || p.category?.name?.ar || p.category?.name || '';
  }
}
