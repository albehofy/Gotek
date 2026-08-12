import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, TagModule, CardModule, ButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  apiService = inject(ApiService);
  team: any[] = [];
  founders: any[] = [];
  aboutContent: any = null;

  ngOnInit() {
    const fallbackFounders = [
      { id: 1, name: 'م. خالد المنصوري', job_title: 'المؤسس والرئيس التنفيذي', bio: 'خبرة أكثر من 12 عاماً في بناء المنصات الرقمية وقيادة استراتيجيات النمو للشركات الكبرى.' },
      { id: 2, name: 'أ. ريم الشمري', job_title: 'الشريك المؤسس والمدير الإبداعي', bio: 'متخصصة في ابتكار الهويات البصرية والحملات الإعلانية المبتكرة في المنطقة.' }
    ];

    const fallbackTeam = [
      { id: 1, name: 'عمر العتيبي', job_title: 'كبير مهندسي البرمجيات' },
      { id: 2, name: 'نورة الغامدي', job_title: 'مدير تسويق وتنمية مبيعات' },
      { id: 3, name: 'يوسف عبد الله', job_title: 'مصمم واجهات وتجربة المستخدم' },
      { id: 4, name: 'سارة الزهراني', job_title: 'صانعة محتوى ومخرج فني' }
    ];

    this.apiService.getAbout().subscribe((res: any) => {
      if (res && res.data) {
        this.aboutContent = res.data;
      }
    });

    this.apiService.getTeam().subscribe((res: any) => {
      const data = res?.data || res;
      if (data && data.founders && data.founders.length) {
        this.founders = data.founders;
        this.team = data.team || fallbackTeam;
      } else if (Array.isArray(data) && data.length) {
        this.team = data;
        this.founders = fallbackFounders;
      } else {
        this.founders = fallbackFounders;
        this.team = fallbackTeam;
      }
    });
  }
}
