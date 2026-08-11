import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  apiService = inject(ApiService);
  blogs: any[] = [];
  filteredBlogs: any[] = [];
  searchQuery = '';
  loading = true;
  blogsPageData: any = {};

  ngOnInit() {
    this.apiService.getBlogs().subscribe(res => {
      this.blogs = res.data ? res.data : (res || []);
      this.filteredBlogs = this.blogs;
      this.loading = false;
    });

    this.apiService.getPageContent('blogs').subscribe((res: any) => {
      if (res && res.data) {
        this.blogsPageData = res.data;
      }
    });
  }

  filterBlogs() {
    if (!this.searchQuery) {
      this.filteredBlogs = this.blogs;
      return;
    }
    const q = this.searchQuery.toLowerCase();
    this.filteredBlogs = this.blogs.filter(b => {
      const titleEn = b.title?.en?.toLowerCase() || '';
      const titleAr = b.title?.ar?.toLowerCase() || '';
      const descEn = b.description?.en?.toLowerCase() || '';
      const descAr = b.description?.ar?.toLowerCase() || '';
      const cat = typeof b.category === 'object' ? (b.category?.en || b.category?.ar || '') : (b.category || '');
      return titleEn.includes(q) || titleAr.includes(q) || descEn.includes(q) || descAr.includes(q) || cat.toLowerCase().includes(q);
    });
  }
}
