import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, FormsModule, TagModule, ButtonModule, CardModule],
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
    const fallbackBlogs = [
      { id: 1, title: 'أفضل استراتيجيات التسويق الرقمي وتنمية المبيعات 2026', description: 'دليل شامل لأبرز توجهات التسويق الرقمي وكيفية بناء حملات موجهة تحقق أعلى عائد استثماري.', category: 'تسويق رقمي', created_at: '2026-08-01', read_time: '5 دقائق' },
      { id: 2, title: 'كيف تختار نظام الـ CRM الأنسب لمؤسستك؟', description: 'تحليل ودراسة مقارنة للأنظمة البرمجية الحديثة وكيفية أتمتة الصفقات وإدارة علاقات العملاء.', category: 'أنظمة CRM', created_at: '2026-07-28', read_time: '7 دقائق' },
      { id: 3, title: 'أهمية الهوية البصرية في بناء ثقة علامتك التجارية', description: 'كيف تؤثر الألوان والتصميمات المبتكرة على قرار الشراء لدى المستهلك وتزيد من الولاء.', category: 'هوية بصرية', created_at: '2026-07-15', read_time: '4 دقائق' }
    ];

    this.apiService.getBlogs().subscribe(res => {
      const data = res?.data || res;
      this.blogs = Array.isArray(data) && data.length ? data : fallbackBlogs;
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
