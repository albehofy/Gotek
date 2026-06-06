import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);

  testimonials: any[] = [];
  testimonialForm!: FormGroup;
  isEditing = false;
  currentTestimonialId: string | null = null;
  loading = false;

  ngOnInit() {
    this.initForm();
    this.loadTestimonials();
  }

  initForm() {
    this.testimonialForm = this.fb.group({
      client_name: ['', Validators.required],
      job_title: ['', Validators.required],
      company_name: [''],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      avatar_color: ['#e8620a'],
      feedback_en: ['', Validators.required],
      feedback_ar: ['', Validators.required],
    });
  }

  loadTestimonials() {
    this.apiService.getTestimonials().subscribe(res => {
      this.testimonials = res || [];
    });
  }

  saveTestimonial() {
    if (this.testimonialForm.invalid) return;

    this.loading = true;
    const val = this.testimonialForm.value;
    const payload = {
      client_name: val.client_name,
      job_title: val.job_title,
      company_name: val.company_name || '',
      rating: Number(val.rating || 5),
      avatar_color: val.avatar_color || '#e8620a',
      feedback: {
        en: val.feedback_en,
        ar: val.feedback_ar
      }
    };

    if (this.isEditing && this.currentTestimonialId) {
      this.apiService.updateTestimonial(this.currentTestimonialId, payload).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadTestimonials();
        },
        error: () => this.loading = false
      });
    } else {
      this.apiService.addTestimonial(payload).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadTestimonials();
        },
        error: () => this.loading = false
      });
    }
  }

  editTestimonial(testimonial: any) {
    this.isEditing = true;
    this.currentTestimonialId = testimonial.id;
    this.testimonialForm.patchValue({
      client_name: testimonial.client_name,
      job_title: testimonial.job_title,
      company_name: testimonial.company_name || '',
      rating: testimonial.rating || 5,
      avatar_color: testimonial.avatar_color || '#e8620a',
      feedback_en: testimonial.feedback_en || '',
      feedback_ar: testimonial.feedback_ar || '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentTestimonialId = null;
    this.testimonialForm.reset({
      rating: 5,
      avatar_color: '#e8620a'
    });
  }

  deleteTestimonial(id: string) {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      this.apiService.deleteTestimonial(id).subscribe(() => {
        this.loadTestimonials();
      });
    }
  }
}
