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

  timeline = [
    { year: '2016', title: 'تأسيس الشركة', desc: 'بدأت ميديا جلو كفريق صغير من ثلاثة أشخاص شغوفين بالتسويق الرقمي في القاهرة' },
    { year: '2018', title: 'التوسع والنمو', desc: 'تضاعف حجم الفريق وبلغنا 50 عميلاً نشطاً في مختلف القطاعات' },
    { year: '2020', title: 'إطلاق قسم التطوير', desc: 'أضفنا قسم تطوير المواقع والتطبيقات وشاركنا في 100+ مشروع ناجح' },
    { year: '2022', title: 'التميز الإقليمي', desc: 'حصلنا على جوائز أفضل وكالة رقمية ووسّعنا نشاطنا لدول الخليج' },
    { year: '2024', title: 'الريادة والابتكار', desc: 'أكثر من 500 عميل سعيد ومشروع في مصر والشرق الأوسط وإطلاق CRM احترافي' }
  ];

  counters = [
    { icon: 'pi pi-users', num: '500', suffix: '+', label: 'عميل راضٍ' },
    { icon: 'pi pi-briefcase', num: '1200', suffix: '+', label: 'مشروع منجز' },
    { icon: 'pi pi-star', num: '9', suffix: '+', label: 'سنوات خبرة' },
    { icon: 'pi pi-map-marker', num: '5', suffix: '+', label: 'أسواق إقليمية' }
  ];

  whyPoints = [
    { title: 'فريق متخصص ومتفاني', desc: 'أكثر من 25 متخصصاً في التسويق والتصميم والتطوير والمحتوى' },
    { title: 'نتائج قابلة للقياس', desc: 'كل قرار مبني على البيانات والتحليل لضمان أعلى عائد على الاستثمار' },
    { title: 'استجابة فائقة السرعة', desc: 'فريق دعم متاح على مدار الساعة للرد على استفساراتك' },
    { title: 'ضمان رضا العميل', desc: 'لا نتوقف عن العمل حتى تكون 100% راضٍ عن المخرجات' },
    { title: 'تقارير شفافة ودورية', desc: 'تقارير أداء أسبوعية وشهرية تفصيلية وشفافة تماماً' },
    { title: 'ابتكار مستمر', desc: 'نواكب أحدث التطورات الرقمية ونطبقها على مشاريع عملائنا أولاً' }
  ];

  ngOnInit() {
    const fallbackFounders = [
      { id: 1, name: 'محمد أشرف', job_title: 'المؤسس والرئيس التنفيذي', bio: 'خبرة أكثر من 10 سنوات في بناء المنصات الرقمية وقيادة استراتيجيات النمو للشركات في مصر والخليج.' },
      { id: 2, name: 'أحمد رمضان', job_title: 'الشريك المؤسس والمدير الإبداعي', bio: 'متخصص في ابتكار الهويات البصرية وإدارة الحملات الإعلانية عالية التأثير.' }
    ];

    const fallbackTeam = [
      { id: 1, name: 'مريم محمود', job_title: 'مدير تسويق رقمي' },
      { id: 2, name: 'عمر حسن', job_title: 'كبير مطوري الويب' },
      { id: 3, name: 'نورا خالد', job_title: 'مصممة UX/UI' },
      { id: 4, name: 'كريم يوسف', job_title: 'منتج محتوى فيديو' }
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
