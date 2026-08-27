import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  blogs: any[] = [];
  filteredBlogs: any[] = [];
  searchQuery = '';
  loading = true;

  ngOnInit() {
    const fallbackBlogs = [
      { id: 1, title: 'أفضل استراتيجيات التسويق الرقمي وتنمية المبيعات 2026', description: 'دليل شامل لأبرز توجهات التسويق الرقمي وكيفية بناء حملات موجهة تحقق أعلى عائد استثماري.', category: 'تسويق رقمي', created_at: '2026-08-01', read_time: '5 دقائق' },
      { id: 2, title: 'كيف تبني هوية بصرية تدوم وتترك أثراً؟', description: 'كيف تؤثر الألوان والخطوط على قرار الشراء لدى المستهلك وتزيد من ولاء الجمهور لعلامتك.', category: 'هوية بصرية', created_at: '2026-07-28', read_time: '7 دقائق' },
      { id: 3, title: 'مواقع الويب الحديثة: معايير السرعة وتجربة المستخدم', description: 'أهمية بناء المواقع بتقنيات متقدمة تضمن تجربة تصفح فائقة السرعة على كل الأجهزة.', category: 'تطوير مواقع', created_at: '2026-07-15', read_time: '4 دقائق' }
    ];

    this.apiService.getBlogs().subscribe(res => {
      const data = res?.data || res;
      this.blogs = Array.isArray(data) && data.length ? data : fallbackBlogs;
      this.filteredBlogs = this.blogs;
      this.loading = false;
    });
  }

  filterBlogs() {
    if (!this.searchQuery) {
      this.filteredBlogs = this.blogs;
      return;
    }
    const q = this.searchQuery.toLowerCase();
    this.filteredBlogs = this.blogs.filter(b => {
      const title = (b.title?.ar || b.title_ar || (typeof b.title === 'string' ? b.title : '')).toLowerCase();
      const desc = (b.description?.ar || b.description_ar || (typeof b.description === 'string' ? b.description : '')).toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }
}
