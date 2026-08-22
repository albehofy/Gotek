import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-portfolio-categories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portfolio-categories.component.html',
  styleUrls: ['./portfolio-categories.component.css']
})
export class PortfolioCategoriesComponent implements OnInit {
  private apiService = inject(ApiService);
  private confirmService = inject(ConfirmService);
  private fb = inject(FormBuilder);

  categories: any[] = [];
  isLoading = true;
  isSaving = false;
  showModal = false;
  categoryForm!: FormGroup;
  editingId: number | null = null;
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  infoMessage: string | null = null;

  ngOnInit(): void {
    this.initForm();
    this.loadCategories();
  }

  initForm(): void {
    this.categoryForm = this.fb.group({
      name_ar: ['', Validators.required],
      name_en: ['', Validators.required],
      description_ar: [''],
      description_en: ['']
    });
  }

  loadCategories(): void {
    this.isLoading = true;
    this.apiService.getCategories().subscribe({
      next: (data: any) => {
        this.categories = data || [];
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error loading categories', err);
        this.isLoading = false;
        this.showMessage('حدث خطأ أثناء تحميل التصنيفات');
      }
    });
  }

  openModal(category?: any): void {
    this.showModal = true;
    this.selectedFile = null;
    this.imagePreview = null;
    
    if (category) {
      this.editingId = category.id;
      this.categoryForm.patchValue({
        name_ar: this.getCategoryNameAr(category),
        name_en: this.getCategoryNameEn(category),
        description_ar: this.getCategoryDescAr(category),
        description_en: this.getCategoryDescEn(category)
      });
      this.imagePreview = category.image || null;
    } else {
      this.editingId = null;
      this.categoryForm.reset();
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.editingId = null;
    this.categoryForm.reset();
    this.selectedFile = null;
    this.imagePreview = null;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  saveCategory(): void {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = new FormData();
    const values = this.categoryForm.value;
    
    formData.append('name_ar', values.name_ar);
    formData.append('name_en', values.name_en);
    if (values.description_ar) formData.append('description_ar', values.description_ar);
    if (values.description_en) formData.append('description_en', values.description_en);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    if (this.editingId) {
      this.apiService.updateCategory(String(this.editingId), formData).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage('تم تحديث التصنيف بنجاح');
          this.closeModal();
          this.loadCategories();
        },
        error: (err: any) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage('حدث خطأ أثناء التحديث');
        }
      });
    } else {
      this.apiService.addCategory(formData).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage('تم إضافة التصنيف بنجاح');
          this.closeModal();
          this.loadCategories();
        },
        error: (err: any) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage('حدث خطأ أثناء الإضافة');
        }
      });
    }
  }

  deleteCategory(id: number): void {
    this.confirmService.confirm({
      title: 'تأكيد الحذف',
      message: 'هل أنت متأكد من حذف هذا التصنيف؟',
      confirmText: 'حذف',
      cancelText: 'إلغاء',
      type: 'danger',
      accept: () => {
        this.apiService.deleteCategory(String(id)).subscribe({
          next: () => {
            this.showMessage('تم الحذف بنجاح');
            this.loadCategories();
          },
          error: (err: any) => {
            console.error(err);
            this.showMessage('حدث خطأ أثناء الحذف');
          }
        });
      }
    });
  }

  showMessage(msg: string): void {
    this.infoMessage = msg;
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }

  getCategoryNameAr(cat: any): string {
    return cat.name?.ar || cat.name_ar || (typeof cat.name === 'string' ? cat.name : '') || '';
  }

  getCategoryNameEn(cat: any): string {
    return cat.name?.en || cat.name_en || '';
  }

  getCategoryDescAr(cat: any): string {
    return cat.description?.ar || cat.description_ar || (typeof cat.description === 'string' ? cat.description : '') || '';
  }

  getCategoryDescEn(cat: any): string {
    return cat.description?.en || cat.description_en || '';
  }
}
