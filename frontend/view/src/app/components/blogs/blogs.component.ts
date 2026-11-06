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
  blogsPageData: any = {};

  ngOnInit() {
    this.apiService.getPageContent('blogs').subscribe((res: any) => {
      if (res && res.data) {
        this.blogsPageData = res.data;
      }
    });

    const fallbackBlogs = [
      {
        id: 1,
        title: { ar: 'أفضل استراتيجيات التسويق الرقمي وتنمية المبيعات 2026', en: 'Top Digital Marketing & Growth Strategies for 2026' },
        description: {
          ar: 'دليل شامل لأبرز توجهات التسويق الرقمي وكيفية بناء حملات موجهة تحقق أعلى عائد استثماري.',
          en: 'A comprehensive playbook on modern performance marketing, scaling customer acquisition, and maximizing ROI.'
        },
        category: { ar: 'تسويق رقمي', en: 'Digital Marketing' },
        created_at: '2026-08-01',
        read_time: '5 دقائق'
      },
      {
        id: 2,
        title: { ar: 'كيف تبني هوية بصرية تدوم وتترك أثراً؟', en: 'Building an Iconic Visual Identity that Resonates' },
        description: {
          ar: 'كيف تؤثر الألوان والخطوط على قرار الشراء لدى المستهلك وتزيد من ولاء الجمهور لعلامتك.',
          en: 'How typography, color psychology, and cinematic art direction forge emotional bonds with your audience.'
        },
        category: { ar: 'هوية بصرية', en: 'Brand Identity' },
        created_at: '2026-07-28',
        read_time: '7 دقائق'
      },
      {
        id: 3,
        title: { ar: 'مواقع الويب الحديثة: معايير السرعة وتجربة المستخدم', en: 'Modern Web Engineering: Performance & User Experience' },
        description: {
          ar: 'أهمية بناء المواقع بتقنيات متقدمة تضمن تجربة تصفح فائقة السرعة على كل الأجهزة.',
          en: 'Why sub-second page loads and seamless micro-interactions are non-negotiable for enterprise conversion.'
        },
        category: { ar: 'تطوير مواقع', en: 'Web Development' },
        created_at: '2026-07-15',
        read_time: '4 دقائق'
      }
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
      const title = this.getBlogTitle(b).toLowerCase();
      const desc = this.getBlogDesc(b).toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }

  getBlogTitle(b: any): string {
    if (!b) return '';
    const lang = this.translationService.currentLang();
    if (typeof b.title === 'object' && b.title !== null) {
      return b.title[lang] || b.title[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof b.title_ar === 'string' || typeof b.title_en === 'string') {
      return (lang === 'en' ? (b.title_en || b.title_ar) : (b.title_ar || b.title_en)) || '';
    }
    return typeof b.title === 'string' ? b.title : '';
  }

  getBlogDesc(b: any): string {
    if (!b) return '';
    const lang = this.translationService.currentLang();
    const desc = b.description || b.desc;
    if (typeof desc === 'object' && desc !== null) {
      return desc[lang] || desc[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof b.description_ar === 'string' || typeof b.description_en === 'string') {
      return (lang === 'en' ? (b.description_en || b.description_ar) : (b.description_ar || b.description_en)) || '';
    }
    return typeof desc === 'string' ? desc : '';
  }

  getBlogCategory(b: any): string {
    if (!b) return this.translationService.currentLang() === 'ar' ? 'مقال' : 'Article';
    const lang = this.translationService.currentLang();
    if (typeof b.category === 'object' && b.category !== null) {
      return b.category[lang] || b.category[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    return typeof b.category === 'string' ? b.category : (lang === 'ar' ? 'مقال' : 'Article');
  }

  getHeroTag(): string {
    const lang = this.translationService.currentLang();
    return this.blogsPageData?.hero?.tag?.[lang]
      || this.blogsPageData?.hero?.tag?.ar
      || this.blogsPageData?.hero?.tag?.en
      || this.translationService.translate('nav.blogs');
  }

  getHeroTitle(): string {
    const lang = this.translationService.currentLang();
    return this.blogsPageData?.hero?.title?.[lang]
      || this.blogsPageData?.hero?.title?.ar
      || this.blogsPageData?.hero?.title?.en
      || (lang === 'ar' ? 'أفكار ومقالات في التسويق والتصميم' : 'Insights & Thoughts');
  }

  getHeroDesc(): string {
    const lang = this.translationService.currentLang();
    return this.blogsPageData?.hero?.desc?.[lang]
      || this.blogsPageData?.hero?.desc?.ar
      || this.blogsPageData?.hero?.desc?.en
      || (lang === 'ar'
         ? 'نشارك خبراتنا وتحليلاتنا لمساعدتك على اتخاذ قرارات تسويقية وتقنية مبنية على أرقام وتجارب حقيقية.'
         : 'Insights, industry analysis, and guides to help you make smarter marketing and tech decisions.');
  }
}
