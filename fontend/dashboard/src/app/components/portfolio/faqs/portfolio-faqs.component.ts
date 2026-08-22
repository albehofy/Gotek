import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-portfolio-faqs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portfolio-faqs.component.html',
  styleUrls: ['./portfolio-faqs.component.css']
})
export class PortfolioFaqsComponent implements OnInit {
  private apiService = inject(ApiService);
  private confirmService = inject(ConfirmService);
  private fb = inject(FormBuilder);

  faqs: any[] = [];
  isLoading = true;
  isSaving = false;
  showModal = false;
  faqForm!: FormGroup;
  editingId: number | null = null;
  expandedFaqId: number | null = null;
  infoMessage: string | null = null;

  ngOnInit(): void {
    this.initForm();
    this.loadFaqs();
  }

  initForm(): void {
    this.faqForm = this.fb.group({
      question_ar: ['', Validators.required],
      question_en: ['', Validators.required],
      answer_ar: ['', Validators.required],
      answer_en: ['', Validators.required],
      sort_order: [0],
      is_active: [true]
    });
  }

  loadFaqs(): void {
    this.isLoading = true;
    this.apiService.getFaqs().subscribe({
      next: (data: any) => {
        this.faqs = data || [];
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error loading FAQs', err);
        this.isLoading = false;
        this.showMessage('حدث خطأ أثناء تحميل الأسئلة الشائعة');
      }
    });
  }

  toggleExpand(id: number): void {
    this.expandedFaqId = this.expandedFaqId === id ? null : id;
  }

  openModal(faq?: any, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    
    this.showModal = true;
    if (faq) {
      this.editingId = faq.id;
      this.faqForm.patchValue({
        question_ar: faq.question_ar,
        question_en: faq.question_en,
        answer_ar: faq.answer_ar,
        answer_en: faq.answer_en,
        sort_order: faq.sort_order || 0,
        is_active: faq.is_active !== undefined ? faq.is_active : true
      });
    } else {
      this.editingId = null;
      this.faqForm.reset({ sort_order: 0, is_active: true });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.editingId = null;
    this.faqForm.reset();
  }

  saveFaq(): void {
    if (this.faqForm.invalid) {
      this.faqForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const payload = this.faqForm.value;

    if (this.editingId) {
      this.apiService.updateFaq(String(this.editingId), payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage('تم تحديث السؤال بنجاح');
          this.closeModal();
          this.loadFaqs();
        },
        error: (err: any) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage('حدث خطأ أثناء التحديث');
        }
      });
    } else {
      this.apiService.addFaq(payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage('تم الإضافة بنجاح');
          this.closeModal();
          this.loadFaqs();
        },
        error: (err: any) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage('حدث خطأ أثناء الإضافة');
        }
      });
    }
  }

  deleteFaq(id: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    
    this.confirmService.confirm({
      title: 'تأكيد الحذف',
      message: 'هل أنت متأكد من حذف هذا السؤال؟',
      confirmText: 'حذف',
      cancelText: 'إلغاء',
      type: 'danger',
      accept: () => {
        this.apiService.deleteFaq(String(id)).subscribe({
          next: () => {
            this.showMessage('تم الحذف بنجاح');
            this.loadFaqs();
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
}
