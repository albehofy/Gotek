import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);

  projects: any[] = [];
  categories: any[] = [];
  
  projectForm!: FormGroup;
  isEditing = false;
  currentProjectId: string | null = null;
  loading = false;
  
  mainImageFile: File | null = null;
  mainImagePreview: string | null = null;

  ngOnInit() {
    this.initForm();
    this.loadProjects();
    this.loadCategories();
  }

  initForm() {
    this.projectForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      category_id: ['', Validators.required],
      description_en: ['', Validators.required],
      description_ar: ['', Validators.required],
      main_image_alt: [''],
      color: ['#000000'],
      emoji: ['🏗️'],
      tags: [''],
      client: [''],
      timeline: [''],
      challenge_en: [''],
      challenge_ar: [''],
      solution_en: [''],
      solution_ar: [''],
      deliverables: [''],
      results_str: [''],
      testimonial_text: [''],
      testimonial_name: [''],
      testimonial_role: [''],
      testimonial_avatar: [''],
    });
  }

  loadProjects() {
    this.apiService.getProjects().subscribe(res => {
      this.projects = res || [];
    });
  }

  loadCategories() {
    this.apiService.getCategories().subscribe(res => {
      this.categories = res || [];
    });
  }

  onMainImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.mainImageFile = file;
      const reader = new FileReader();
      reader.onload = e => this.mainImagePreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveProject() {
    if (this.projectForm.invalid) return;

    this.loading = true;
    const formData = new FormData();
    const val = this.projectForm.value;
    
    // Append standard fields
    Object.keys(val).forEach(key => {
      if (key !== 'tags' && key !== 'deliverables' && key !== 'results_str') {
        formData.append(key, val[key] || '');
      }
    });

    // Parse and append tags (array)
    if (val.tags) {
      const tagsArray = val.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t);
      formData.append('tags', JSON.stringify(tagsArray));
    } else {
      formData.append('tags', JSON.stringify([]));
    }

    // Parse and append deliverables (array)
    if (val.deliverables) {
      const delArray = val.deliverables.split(',').map((d: string) => d.trim()).filter((d: string) => d);
      formData.append('deliverables', JSON.stringify(delArray));
    } else {
      formData.append('deliverables', JSON.stringify([]));
    }

    // Parse and append results
    if (val.results_str) {
      const resultsArray = val.results_str.split(',').map((r: string) => {
        const parts = r.split(':');
        return {
          value: parts[0]?.trim() || '',
          label: parts[1]?.trim() || ''
        };
      }).filter((r: any) => r.value || r.label);
      formData.append('results', JSON.stringify(resultsArray));
    } else {
      formData.append('results', JSON.stringify([]));
    }

    if (this.mainImageFile) {
      formData.append('main_image', this.mainImageFile);
    }

    if (this.isEditing && this.currentProjectId) {
      this.apiService.updateProject(this.currentProjectId, formData).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadProjects();
        },
        error: () => this.loading = false
      });
    } else {
      this.apiService.addProject(formData).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadProjects();
        },
        error: () => this.loading = false
      });
    }
  }

  editProject(project: any) {
    this.isEditing = true;
    this.currentProjectId = project.id;

    // Format tags array back to comma-separated string
    const tagsStr = Array.isArray(project.tags) ? project.tags.join(', ') : '';
    // Format deliverables array back to comma-separated string
    const delStr = Array.isArray(project.deliverables) ? project.deliverables.join(', ') : '';
    // Format results back to comma-separated string
    const resStr = Array.isArray(project.results) ? project.results.map((r: any) => `${r.value}:${r.label}`).join(', ') : '';

    this.projectForm.patchValue({
      title_en: project.title_en || project.title,
      title_ar: project.title_ar,
      category_id: project.category_id,
      description_en: project.description_en,
      description_ar: project.description_ar,
      main_image_alt: project.main_image_alt,
      color: project.color || '#000000',
      emoji: project.emoji || '🏗️',
      tags: tagsStr,
      client: project.client || '',
      timeline: project.timeline || '',
      challenge_en: project.challenge_en,
      challenge_ar: project.challenge_ar,
      solution_en: project.solution_en,
      solution_ar: project.solution_ar,
      deliverables: delStr,
      results_str: resStr,
      testimonial_text: project.testimonial_text,
      testimonial_name: project.testimonial_name,
      testimonial_role: project.testimonial_role,
      testimonial_avatar: project.testimonial_avatar,
    });

    this.mainImagePreview = project.main_image_url || null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentProjectId = null;
    this.mainImageFile = null;
    this.mainImagePreview = null;
    this.projectForm.reset({ 
      category_id: '',
      color: '#000000',
      emoji: '🏗️'
    });
  }

  deleteProject(id: string) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.apiService.deleteProject(id).subscribe(() => {
        this.loadProjects();
      });
    }
  }
}
