import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  route = inject(ActivatedRoute);

  blog: any = null;
  loading = true;
  isLoved = false;

  fallbackBlog = {
    id: 1,
    title: {
      ar: 'مستقبل السينما الرقمية: كيف تعيد مستشعرات ARRI Alexa 35 تعريف جودة الإعلانات؟',
      en: 'The Future of Cinema: How ARRI Alexa 35 Sensors Redefine Commercial Standards'
    },
    description: {
      ar: 'في هذا المقال التقني المتعمق، يحلل مدير التصوير التنفيذي في ميديا جلو الفارق الجوهري الذي تقدمه تقنية REVEAL Color Science ونطاق التعريض البالغ 17 وقفة، وكيف يمنح العلامات التجارية صوراً تحاكي العين البشرية بدون بهتان أو تشويه في ظروف الإضاءة القاسية.',
      en: 'In this technical breakdown, Media Glow Lead Cinematographer analyzes how the revolutionary REVEAL Color Science and 17 stops of exposure dynamic range empower brands with hyper-organic skin tones and uncompromised highlights even in unforgiving desert lighting.'
    },
    image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=1200&q=80',
    category: { name: { ar: 'السينما الرقمية', en: 'Digital Cinema' } },
    created_at: new Date().toISOString()
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadBlog(id);
      } else {
        this.route.queryParamMap.subscribe(q => {
          const qId = q.get('id');
          if (qId) {
            this.loadBlog(qId);
          } else {
            this.loadFallback();
          }
        });
      }
    });
  }

  loadBlog(id: string) {
    this.loading = true;
    this.apiService.getBlog(id).subscribe({
      next: (res: any) => {
        const item = res?.data ? res.data : res;
        if (item && item.id) {
          this.blog = item;
          this.loading = false;
        } else {
          this.loadFallback();
        }
      },
      error: () => this.loadFallback()
    });
  }

  private loadFallback() {
    this.apiService.getBlogs().subscribe({
      next: (res: any) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        if (arr.length > 0) {
          this.blog = arr[0];
        } else {
          this.blog = this.fallbackBlog;
        }
        this.loading = false;
      },
      error: () => {
        this.blog = this.fallbackBlog;
        this.loading = false;
      }
    });
  }

  toggleLove() {
    this.isLoved = !this.isLoved;
  }
}
