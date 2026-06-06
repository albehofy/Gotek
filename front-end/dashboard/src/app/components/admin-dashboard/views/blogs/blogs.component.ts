import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);

  blogs: any[] = [];
  blogForm!: FormGroup;
  isEditing = false;
  currentBlogId: string | null = null;
  loading = false;

  mediaFile: File | null = null;
  mediaPreview: string | null = null;

  ngOnInit() {
    this.initForm();
    this.loadBlogs();
  }

  initForm() {
    this.blogForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      description_en: ['', Validators.required],
      description_ar: ['', Validators.required],
      img_alt: [''],
    });
  }

  loadBlogs() {
    this.apiService.getBlogs().subscribe(res => {
      this.blogs = res || [];
    });
  }

  onMediaSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.mediaFile = file;
      const reader = new FileReader();
      reader.onload = e => this.mediaPreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveBlog() {
    if (this.blogForm.invalid) return;

    this.loading = true;
    const formData = new FormData();
    const val = this.blogForm.value;

    formData.append('title[en]', val.title_en);
    formData.append('title[ar]', val.title_ar);
    formData.append('description[en]', val.description_en);
    formData.append('description[ar]', val.description_ar);
    formData.append('img_alt', val.img_alt || val.title_en);

    if (this.mediaFile) {
      formData.append('media', this.mediaFile);
    }

    if (this.isEditing && this.currentBlogId) {
      this.apiService.updateBlog(this.currentBlogId, formData).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadBlogs();
        },
        error: () => this.loading = false
      });
    } else {
      this.apiService.addBlog(formData).subscribe({
        next: () => {
          this.loading = false;
          this.cancelEdit();
          this.loadBlogs();
        },
        error: () => this.loading = false
      });
    }
  }

  editBlog(blog: any) {
    this.isEditing = true;
    this.currentBlogId = blog.id;
    this.blogForm.patchValue({
      title_en: blog.title_en || (typeof blog.title === 'object' ? blog.title.en : blog.title),
      title_ar: blog.title_ar || (typeof blog.title === 'object' ? blog.title.ar : ''),
      description_en: blog.description_en || (typeof blog.description === 'object' ? blog.description.en : blog.description),
      description_ar: blog.description_ar || (typeof blog.description === 'object' ? blog.description.ar : ''),
      img_alt: blog.img_alt || '',
    });
    this.mediaPreview = blog.media_url || blog.image || null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentBlogId = null;
    this.mediaFile = null;
    this.mediaPreview = null;
    this.blogForm.reset();
  }

  deleteBlog(id: string) {
    if (confirm('Are you sure you want to delete this blog article?')) {
      this.apiService.deleteBlog(id).subscribe(() => {
        this.loadBlogs();
      });
    }
  }
}
