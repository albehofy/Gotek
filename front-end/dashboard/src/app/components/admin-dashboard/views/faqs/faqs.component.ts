import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent implements OnInit {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);

  faqs: any[] = [];
  faqForm!: FormGroup;
  isEditing = false;
  currentFaqId: string | null = null;
  loading = false;

  ngOnInit() {
    this.initForm();
    this.loadFaqs();
  }

  initForm() {
    this.faqForm = this.fb.group({
      question_en: ['', Validators.required],
      question_ar: ['', Validators.required],
      answer_en: ['', Validators.required],
      answer_ar: ['', Validators.required],
      sort_order: [1],
      is_active: [true],
    });
  }

  loadFaqs() {
    this.apiService.getFaqs().subscribe(res => {
      this.faqs = res || [];
    });
  }

  saveFaq() {
    if (this.faqForm.invalid) return;

    this.loading = true;
    const val = this.faqForm.value;
    const payload = {
      question_en: val.question_en,
      question_ar: val.question_ar,
      answer_en: val.answer_en,
      answer_ar: val.answer_ar,
      sort_order: val.sort_order || 1,
      is_active: val.is_active ? 1 : 0
    };

    if (this.isEditing && this.currentFaqId) {
      this.apiService.updateFaq(this.currentFaqId, payload).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadFaqs();
        },
        error: () => this.loading = false
      });
    } else {
      this.apiService.addFaq(payload).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadFaqs();
        },
        error: () => this.loading = false
      });
    }
  }

  editFaq(faq: any) {
    this.isEditing = true;
    this.currentFaqId = faq.id;
    this.faqForm.patchValue({
      question_en: faq.question_en,
      question_ar: faq.question_ar,
      answer_en: faq.answer_en,
      answer_ar: faq.answer_ar,
      sort_order: faq.order || faq.sort_order || 1,
      is_active: faq.is_active !== undefined ? faq.is_active : true,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentFaqId = null;
    this.faqForm.reset({
      sort_order: 1,
      is_active: true
    });
  }

  deleteFaq(id: string) {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      this.apiService.deleteFaq(id).subscribe(() => {
        this.loadFaqs();
      });
    }
  }
}
