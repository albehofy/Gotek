import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-portfolio-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio-about.component.html',
  styleUrls: ['./portfolio-about.component.css']
})
export class PortfolioAboutComponent implements OnInit {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);

  aboutData: any = {
    content: {
      hero: { en: { label: '', title1: '', desc: '' }, ar: { label: '', title1: '', desc: '' } },
      story: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } },
      vision: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } },
      mission: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } },
      values: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } },
      team_text: { en: { title: '', desc: '' }, ar: { title: '', desc: '' } }
    },
    timeline: []
  };

  newTimelineEntry = { year: '', title_ar: '', title_en: '', desc_ar: '', desc_en: '' };
  
  isLoading = false;
  isSaving = false;
  saveMessage = '';
  expandedSection: string | null = 'hero';

  sections = [
    { id: 'hero', title: 'القسم الأول (Hero)' },
    { id: 'story', title: 'قصتنا (Our Story)' },
    { id: 'vision', title: 'رؤيتنا (Our Vision)' },
    { id: 'mission', title: 'مهمتنا (Our Mission)' },
    { id: 'values', title: 'قيمنا (Our Values)' },
    { id: 'team_text', title: 'فريق العمل (Team Text)' }
  ];

  ngOnInit() {
    this.loadAbout();
  }

  loadAbout() {
    this.isLoading = true;
    this.apiService.getAbout().subscribe({
      next: (res: any) => {
        if (res?.data) {
          const d = res.data;
          this.aboutData.content = d.content || this.aboutData.content;
          this.aboutData.timeline = d.timeline || [];
          
          ['hero','story','vision','mission','values','team_text'].forEach(k => {
            if (!this.aboutData.content[k]) this.aboutData.content[k] = { en: {}, ar: {} };
            if (!this.aboutData.content[k].en) this.aboutData.content[k].en = {};
            if (!this.aboutData.content[k].ar) this.aboutData.content[k].ar = {};
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  toggleSection(sectionId: string) {
    if (this.expandedSection === sectionId) {
      this.expandedSection = null;
    } else {
      this.expandedSection = sectionId;
    }
  }

  addTimelineEntry() {
    if (!this.newTimelineEntry.year || !this.newTimelineEntry.title_ar || !this.newTimelineEntry.desc_ar) return;
    
    this.aboutData.timeline.push({
      ...this.newTimelineEntry,
      title: { ar: this.newTimelineEntry.title_ar, en: this.newTimelineEntry.title_en },
      description: { ar: this.newTimelineEntry.desc_ar, en: this.newTimelineEntry.desc_en },
      order_index: this.aboutData.timeline.length
    });
    
    this.newTimelineEntry = { year: '', title_ar: '', title_en: '', desc_ar: '', desc_en: '' };
  }

  deleteTimelineEntry(index: number) {
    this.confirmService.confirm({
      title: 'حذف المحطة',
      message: 'هل أنت متأكد من حذف هذه المحطة الزمنية؟',
      confirmText: 'حذف',
      cancelText: 'إلغاء',
      type: 'danger',
      accept: () => {
        this.aboutData.timeline.splice(index, 1);
      }
    });
  }

  saveAbout() {
    this.isSaving = true;
    this.apiService.updateAbout(this.aboutData).subscribe({
      next: () => {
        this.isSaving = false;
        this.saveMessage = 'تم حفظ التغييرات بنجاح!';
        setTimeout(() => this.saveMessage = '', 3000);
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
}
