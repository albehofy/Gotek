import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  aboutContent: any = null;

  timeline: any[] = [
    { year: '2018', title: 'البداية في القاهرة', desc: 'انطلقت ميديا جلو كفريق تسويق وتصميم رقمي يركز على النتائج الحقيقية.' },
    { year: '2020', title: 'التوسع التقني', desc: 'إطلاق قسم هندسة وتطوير المنصات الرقمية وتطبيقات الويب.' },
    { year: '2023', title: 'التوسع الإقليمي', desc: 'خدمة أكثر من 200 علامة تجارية رائدة في مصر ودول الخليج العربي.' },
    { year: '2026', title: 'الريادة والحلول المتكاملة', desc: 'بناء حلول نمو شاملة من الهوية وحتى المنصات والحملات القائمة على العائد الاستثماري.' }
  ];

  ngOnInit() {
    this.apiService.getAbout().subscribe((res: any) => {
      if (res?.data) {
        this.aboutContent = res.data.content || res.data;
        if (res.data.timeline && res.data.timeline.length) {
          this.timeline = res.data.timeline;
        }
      }
    });
  }
}
