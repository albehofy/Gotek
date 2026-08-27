import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-portfolio-testimonials',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portfolio-testimonials.component.html',
  styleUrls: ['./portfolio-testimonials.component.css']
})
export class PortfolioTestimonialsComponent implements OnInit {
  private apiService = inject(ApiService);
  private confirmService = inject(ConfirmService);
  private fb = inject(FormBuilder);

  testimonials: any[] = [];
  isLoading = true;
  isSaving = false;
  showModal = false;
  testimonialForm!: FormGroup;
  editingId: number | null = null;
  infoMessage: string | null = null;

  ngOnInit(): void {
    this.initForm();
    this.loadTestimonials();
  }

  initForm(): void {
    this.testimonialForm = this.fb.group({
      client_name: ['', Validators.required],
      job_title: ['', Validators.required],
      company_name: [''],
      feedback_ar: ['', Validators.required],
      feedback_en: ['', Validators.required],
      rating: [5],
      avatar_color: ['#8a2be2'] // default violet
    });
  }

  loadTestimonials(): void {
    this.isLoading = true;
    this.apiService.getTestimonials().subscribe({
      next: (data: any) => {
        this.testimonials = data || [];
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error loading testimonials', err);
        this.isLoading = false;
        this.showMessage('حدث خطأ أثناء تحميل آراء العملاء');
      }
    });
  }

  openModal(testimonial?: any): void {
    this.showModal = true;
    if (testimonial) {
      this.editingId = testimonial.id;
      this.testimonialForm.patchValue({
        client_name: testimonial.client_name,
        job_title: testimonial.job_title,
        company_name: testimonial.company_name,
        feedback_ar: this.getFeedbackAr(testimonial),
        feedback_en: this.getFeedbackEn(testimonial),
        rating: testimonial.rating || 5,
        avatar_color: testimonial.avatar_color || '#8a2be2'
      });
    } else {
      this.editingId = null;
      this.testimonialForm.reset({ rating: 5, avatar_color: '#8a2be2' });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.editingId = null;
    this.testimonialForm.reset();
  }

  setRating(rating: number): void {
    this.testimonialForm.patchValue({ rating });
  }

  saveTestimonial(): void {
    if (this.testimonialForm.invalid) {
      this.testimonialForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const values = this.testimonialForm.value;
    const payload = {
      client_name: values.client_name,
      job_title: values.job_title,
      company_name: values.company_name,
      feedback: {
        ar: values.feedback_ar,
        en: values.feedback_en
      },
      rating: values.rating,
      avatar_color: values.avatar_color
    };

    if (this.editingId) {
      this.apiService.updateTestimonial(String(this.editingId), payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage('تم تحديث الرأي بنجاح');
          this.closeModal();
          this.loadTestimonials();
        },
        error: (err: any) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage('حدث خطأ أثناء التحديث');
        }
      });
    } else {
      this.apiService.addTestimonial(payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage('تم الإضافة بنجاح');
          this.closeModal();
          this.loadTestimonials();
        },
        error: (err: any) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage('حدث خطأ أثناء الإضافة');
        }
      });
    }
  }

  deleteTestimonial(id: number): void {
    this.confirmService.confirm({
      title: 'تأكيد الحذف',
      message: 'هل أنت متأكد من حذف رأي العميل هذا؟',
      confirmText: 'حذف',
      cancelText: 'إلغاء',
      type: 'danger',
      accept: () => {
        this.apiService.deleteTestimonial(String(id)).subscribe({
          next: () => {
            this.showMessage('تم الحذف بنجاح');
            this.loadTestimonials();
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

  getFeedbackAr(t: any): string {
    return t.feedback?.ar || (typeof t.feedback === 'string' ? t.feedback : '') || '';
  }

  getFeedbackEn(t: any): string {
    return t.feedback?.en || '';
  }

  getStarArray(rating: number): boolean[] {
    const num = Math.min(Math.max(rating || 0, 0), 5);
    return Array(5).fill(false).map((_, i) => i < num);
  }
}
