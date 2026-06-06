import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);

  categories: any[] = [];
  categoryForm!: FormGroup;
  isEditing = false;
  currentCategoryId: string | null = null;
  loading = false;

  imageFile: File | null = null;
  imagePreview: string | null = null;

  ngOnInit() {
    this.initForm();
    this.loadCategories();
  }

  initForm() {
    this.categoryForm = this.fb.group({
      name_en: ['', Validators.required],
      name_ar: ['', Validators.required],
      description_en: [''],
      description_ar: [''],
    });
  }

  loadCategories() {
    this.apiService.getCategories().subscribe(res => {
      this.categories = res || [];
    });
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      const reader = new FileReader();
      reader.onload = e => this.imagePreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveCategory() {
    if (this.categoryForm.invalid) return;

    this.loading = true;
    const formData = new FormData();
    const val = this.categoryForm.value;

    formData.append('name_en', val.name_en);
    formData.append('name_ar', val.name_ar);
    formData.append('description_en', val.description_en || '');
    formData.append('description_ar', val.description_ar || '');

    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

    if (this.isEditing && this.currentCategoryId) {
      this.apiService.updateCategory(this.currentCategoryId, formData).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadCategories();
        },
        error: () => this.loading = false
      });
    } else {
      this.apiService.addCategory(formData).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadCategories();
        },
        error: () => this.loading = false
      });
    }
  }

  editCategory(category: any) {
    this.isEditing = true;
    this.currentCategoryId = category.id;
    this.categoryForm.patchValue({
      name_en: category.name_en || (typeof category.name === 'object' ? category.name.en : category.name),
      name_ar: category.name_ar || (typeof category.name === 'object' ? category.name.ar : ''),
      description_en: category.description_en || (typeof category.description === 'object' ? category.description.en : ''),
      description_ar: category.description_ar || (typeof category.description === 'object' ? category.description.ar : ''),
    });
    this.imagePreview = category.image_url || category.image || null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentCategoryId = null;
    this.imageFile = null;
    this.imagePreview = null;
    this.categoryForm.reset();
  }

  deleteCategory(id: string) {
    if (confirm('Are you sure you want to delete this category? (All projects under this category will have their category references updated or deleted!)')) {
      this.apiService.deleteCategory(id).subscribe(() => {
        this.loadCategories();
      });
    }
  }
}
