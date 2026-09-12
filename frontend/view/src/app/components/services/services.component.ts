import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, TagModule, ButtonModule, CardModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  services: any[] = [];
  servicesPageData: any = {};

  defaultServices = [
    {
      icon: 'pi pi-megaphone',
      title: 'التسويق الرقمي وإدارة الحملات',
      desc: 'استراتيجيات تسويقية متكاملة لزيادة المبيعات وتحقيق أعلى عائد على الاستثمار في كبرى المنصات الإعلانية.',
      features: ['إدارة حسابات الإعلانات على Meta & Google', 'تحسين الاستهداف والديموغرافية الدقيقة', 'تقارير أداء يومية وتحليل مستمر', 'حملات ريتارجتينج وتسويق مباشر']
    },
    {
      icon: 'pi pi-palette',
      title: 'تصميم الهوية البصرية',
      desc: 'ابتكار هويات بصرية فريدة ومتكاملة تعكس قيم علامتك التجارية وتميزها بشكل استثنائي في السوق.',
      features: ['تصميم الشعار والدليل الإرشادي', 'هوية بصرية متكاملة ومتناسقة', 'تصميم مطبوعات وقرطاسية', 'تطوير الألوان والخطوط المميزة']
    },
    {
      icon: 'pi pi-share-alt',
      title: 'إدارة وسائل التواصل الاجتماعي',
      desc: 'إدارة احترافية ومنهجية لحسابات التواصل الاجتماعي بمحتوى إبداعي يبني جمهوراً حقيقياً ومتفاعلاً.',
      features: ['تصوير وإنتاج محتوى يومي', 'كتابة تعليقات وإدارة المجتمع', 'تحليل الأداء والنمو', 'خطة محتوى شهرية']
    },
    {
      icon: 'pi pi-globe',
      title: 'تطوير المواقع والتطبيقات',
      desc: 'بناء مواقع وتطبيقات ويب احترافية سريعة وآمنة تحقق أهدافك التجارية وتوفر تجربة مستخدم استثنائية.',
      features: ['تطوير مواقع ومتاجر إلكترونية', 'تطبيقات ويب متكاملة', 'ربط بوابات الدفع والـ APIs', 'تحسين سرعة الأداء SEO']
    },
    {
      icon: 'pi pi-video',
      title: 'إنتاج المحتوى المرئي',
      desc: 'تصوير ومونتاج فيديوهات احترافية عالية الجودة للإعلانات والريلز والمحتوى التسويقي متعدد المنصات.',
      features: ['إنتاج إعلانات فيديو', 'تصوير وإنتاج ريلز احترافي', 'موشن جرافيك وأنيميشن', 'بث مباشر وتغطيات فعاليات']
    },
    {
      icon: 'pi pi-chart-line',
      title: 'الاستراتيجية والتحليل الرقمي',
      desc: 'خطة تسويقية شاملة ومدروسة قائمة على البيانات لتحقيق أهداف نموك الرقمي وزيادة حصتك السوقية.',
      features: ['تحليل المنافسين والسوق', 'خطة تسويقية سنوية', 'تحليل بيانات وتقارير مفصلة', 'تحسين معدلات التحويل']
    }
  ];

  processSteps = [
    { icon: 'pi pi-search', title: 'التحليل والاستكشاف', desc: 'نبدأ بفهم عميق لعلامتك التجارية وأهدافك والجمهور المستهدف' },
    { icon: 'pi pi-lightbulb', title: 'التخطيط الاستراتيجي', desc: 'نضع خارطة طريق مخصصة لتحقيق النتائج المطلوبة' },
    { icon: 'pi pi-palette', title: 'التصميم والإنتاج', desc: 'فريقنا الإبداعي يحيل الأفكار إلى مواد مرئية استثنائية' },
    { icon: 'pi pi-play', title: 'التنفيذ والإطلاق', desc: 'نُطلق الحملات ونراقب الأداء بشكل لحظي ودقيق' },
    { icon: 'pi pi-chart-bar', title: 'القياس والتحسين', desc: 'نحلل النتائج باستمرار ونحسّن الأداء لضمان أعلى عائد' }
  ];

  ngOnInit() {
    this.apiService.getServices().subscribe((res: any) => {
      const data = res?.data || res;
      this.services = Array.isArray(data) && data.length ? data : [];
    });

    this.apiService.getPageContent('services').subscribe((res: any) => {
      if (res && res.data) {
        this.servicesPageData = res.data;
      }
    });
  }

  isImageUrl(val: string): boolean {
    if (!val) return false;
    return val.startsWith('http://') || val.startsWith('https://') || val.startsWith('/') || val.startsWith('data:') || /\.(png|jpg|jpeg|svg|webp|gif)$/i.test(val);
  }
}
