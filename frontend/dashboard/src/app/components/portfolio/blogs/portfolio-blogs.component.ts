import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-portfolio-blogs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio-blogs.component.html',
  styleUrls: ['./portfolio-blogs.component.css']
})
export class PortfolioBlogsComponent implements OnInit {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);

  blogs: any[] = [];
  filteredBlogs: any[] = [];
  isLoading = false;
  
  isDrawerOpen = false;
  isEditMode = false;
  editingId: number | null = null;
  searchQuery = '';

  selectedFile: File | null = null;
  previewImage: string | null = null;

  formData = {
    title_ar: '',
    title_en: '',
    description_ar: '',
    description_en: '',
    img_alt: ''
  };

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.isLoading = true;
    this.apiService.getBlogs().subscribe({
      next: (res: any) => {
        this.blogs = res.data || res || [];
        this.filteredBlogs = [...this.blogs];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  filterBlogs() {
    if (!this.searchQuery) {
      this.filteredBlogs = [...this.blogs];
    } else {
      const q = this.searchQuery.toLowerCase();
      this.filteredBlogs = this.blogs.filter(b => 
        this.getBlogTitle(b).toLowerCase().includes(q) || 
        this.getBlogTitleEn(b).toLowerCase().includes(q)
      );
    }
  }

  openDrawer(blog?: any) {
    this.selectedFile = null;
    if (blog) {
      this.isEditMode = true;
      this.editingId = blog.id;
      this.formData = {
        title_ar: blog.title?.ar || blog.title_ar || '',
        title_en: blog.title?.en || blog.title_en || '',
        description_ar: blog.description?.ar || blog.description_ar || '',
        description_en: blog.description?.en || blog.description_en || '',
        img_alt: blog.img_alt || ''
      };
      this.previewImage = blog.media_path || null;
    } else {
      this.isEditMode = false;
      this.editingId = null;
      this.formData = {
        title_ar: '',
        title_en: '',
        description_ar: '',
        description_en: '',
        img_alt: ''
      };
      this.previewImage = null;
    }
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = e => this.previewImage = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveBlog() {
    const fd = new FormData();
    fd.append('title_ar', this.formData.title_ar);
    fd.append('title_en', this.formData.title_en);
    fd.append('description_ar', this.formData.description_ar);
    fd.append('description_en', this.formData.description_en);
    fd.append('img_alt', this.formData.img_alt);
    
    if (this.selectedFile) {
      fd.append('media', this.selectedFile);
    }

    if (this.isEditMode && this.editingId) {
      this.apiService.updateBlog(String(this.editingId), fd as any).subscribe({
        next: () => {
          this.closeDrawer();
          this.loadBlogs();
        }
      });
    } else {
      this.apiService.addBlog(fd as any).subscribe({
        next: () => {
          this.closeDrawer();
          this.loadBlogs();
        }
      });
    }
  }

  deleteBlog(blog: any) {
    this.confirmService.confirm({
      title: 'حذف المقالة',
      message: 'هل أنت متأكد من حذف هذه المقالة؟',
      confirmText: 'حذف',
      cancelText: 'إلغاء',
      type: 'danger',
      accept: () => {
        this.apiService.deleteBlog(String(blog.id)).subscribe(() => this.loadBlogs());
      }
    });
  }

  getBlogTitle(b: any) { return b.title?.ar || b.title_ar || ''; }
  getBlogTitleEn(b: any) { return b.title?.en || b.title_en || ''; }
  getBlogDesc(b: any) { return b.description?.ar || b.description_ar || ''; }
  formatDate(d: string) { return d ? new Date(d).toLocaleDateString('en-US') : ''; }
}
