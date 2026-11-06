import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ApiService } from '../../services/api.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
  apiService = inject(ApiService);
  translationService = inject(TranslationService);
  route = inject(ActivatedRoute);

  project: any = null;
  activeImage: string = '';
  loading = true;
  allProjects: any[] = [];
  nextProject: any = null;

  fallbackProject = {
    id: 6,
    title: {
      ar: 'حملة العطور الفاخرة "جوهر الشرق" — تصوير Phantom عالي السرعة',
      en: '"Essence of Orient" Luxury Perfume Cinema Ad'
    },
    description: {
      ar: 'إعلان تلفزيوني فاخر لزجاجة عطر ماسية، تم استخدام كاميرا Phantom Flex4K بسرعة 2000 إطار في الثانية لالتقاط رذاذ العطر وجزيئات الذهب المعلقة مع إضاءة كريستالية متوهجة.',
      en: 'A high-luxury commercial spot for a bespoke diamond-cut flacon. Captured on Phantom Flex4K at 2000fps to immortalize micro-droplet vapor and suspended gold leaf under crystal prism refractions.'
    },
    main_image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85',
    category: {
      name: { ar: 'أفلام الهوية واستعراض العلامات', en: 'Brand Films & Corporate Profiles' }
    },
    client: 'Royal Oud & Fragrances Paris-Riyadh',
    timeline: '3 أسابيع (3 Weeks)',
    tags: ['High Speed 2000fps', 'Phantom Flex4K', 'Liquid Simulation', 'Luxury Macro', 'Dolby Atmos'],
    challenge: {
      ar: 'التقاط حركة رذاذ السائل بدقة مجهرية متناهية دون تعرض الزجاجة للانعكاسات الضوئية المشوشة في سرعة 2000 إطار بالثانية.',
      en: 'Capturing micro-droplet kinetic trajectory at 2000fps without generating unwanted hot-spot glass reflections.'
    },
    solution: {
      ar: 'بناء منصة استوديو دائرية مانعة للانعكاسات مع فلاتر استقطاب خاصة وإضاءات HMI بقوة 18,000 واط مبردة مائياً لحماية العطر.',
      en: 'Built an anti-reflective cylindrical light tent with linear polarizers and water-cooled 18K HMI continuous lighting banks.'
    },
    results: {
      ar: 'نفدت الكمية الأولى من العطر (50,000 زجاجة) خلال 72 ساعة فقط من بدء الحملة الإعلانية على القنوات التلفزيونية والمنصات الرقمية.',
      en: 'The premier run of 50,000 flacons sold out within 72 hours of campaign airing across luxury broadcast networks.'
    },
    deliverables: [
      { ar: 'إعلان سينمائي 45 ثانية للشاشات الفاخرة و IMAX', en: '45s Master IMAX & Luxury Cinema Spot' },
      { ar: 'سلسلة صور ماكرو فائقة الدقة 100 ميجابكسل للإعلانات الطرقية', en: '100MP Billboard Mega-Resolution Stills' },
      { ar: 'مكساج صوتي محيطي Dolby Atmos 7.1.4 للمؤثرات المائية', en: 'Dolby Atmos 7.1.4 Fluid Soundscape Mix' }
    ],
    testimonial: {
      text: 'كل قطرة ظهرت في الإعلان بدت وكأنها لوحة فنية ساحرة. ميديا جلو نقلت قيمة علامتنا التجارية إلى قمة سوق المنتجات الفاخرة في باريس والرياض.',
      name: 'لوران بونيفوا',
      role: 'المدير الإبداعي — دار رويال عود',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
    }
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.loadProject(id);
    });

    // Load full list for next project lookup
    this.apiService.getProjects().subscribe((res: any) => {
      this.allProjects = Array.isArray(res) ? res : res?.data || [];
      this.resolveNextProject();
    });
  }

  loadProject(id: string | null) {
    this.loading = true;
    if (id) {
      this.apiService.getProject(id).subscribe({
        next: (res: any) => {
          const item = res?.data ? res.data : res;
          if (item && item.id) {
            this.setProjectData(item);
          } else {
            this.loadFallbackFromList(id);
          }
        },
        error: () => this.loadFallbackFromList(id)
      });
    } else {
      this.loadFallbackFromList(null);
    }
  }

  private loadFallbackFromList(requestedId: string | null) {
    if (this.allProjects.length > 0) {
      const match = requestedId ? this.allProjects.find((p: any) => p.id?.toString() === requestedId) : null;
      this.setProjectData(match || this.allProjects[0]);
    } else {
      this.apiService.getProjects().subscribe({
        next: (res: any) => {
          const arr = Array.isArray(res) ? res : res?.data || [];
          this.allProjects = arr;
          if (arr.length > 0) {
            const match = requestedId ? arr.find((p: any) => p.id?.toString() === requestedId) : null;
            this.setProjectData(match || arr[0]);
          } else {
            this.setProjectData(this.fallbackProject);
          }
          this.resolveNextProject();
        },
        error: () => {
          this.setProjectData(this.fallbackProject);
        }
      });
    }
  }

  private setProjectData(item: any) {
    this.project = item;
    this.activeImage = item?.image || item?.main_image || item?.main_image_url || '';
    if (!this.activeImage && item?.gallery?.length) {
      this.activeImage = item.gallery[0];
    }
    this.loading = false;
    this.resolveNextProject();
  }

  private resolveNextProject() {
    if (!this.project || !this.allProjects.length) return;
    const currentIndex = this.allProjects.findIndex((p: any) => p.id === this.project.id);
    if (currentIndex >= 0 && currentIndex < this.allProjects.length - 1) {
      this.nextProject = this.allProjects[currentIndex + 1];
    } else if (this.allProjects.length > 1) {
      this.nextProject = this.allProjects[0];
    }
  }

  setActiveImage(img: string) {
    this.activeImage = img;
  }

  getProjectTitle(): string {
    if (!this.project) return '';
    const lang = this.translationService.currentLang();
    const t = this.project.title;
    if (typeof t === 'object' && t !== null) {
      return t[lang] || t[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof this.project.title_ar === 'string' || typeof this.project.title_en === 'string') {
      return (lang === 'en' ? (this.project.title_en || this.project.title_ar) : (this.project.title_ar || this.project.title_en)) || '';
    }
    return typeof t === 'string' ? t : (lang === 'ar' ? 'مشروع ميديا جلو السينمائي' : 'Media Glow Cinema Project');
  }

  getProjectDesc(): string {
    if (!this.project) return '';
    const lang = this.translationService.currentLang();
    const d = this.project.description || this.project.desc;
    if (typeof d === 'object' && d !== null) {
      return d[lang] || d[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof this.project.description_ar === 'string' || typeof this.project.description_en === 'string') {
      return (lang === 'en' ? (this.project.description_en || this.project.description_ar) : (this.project.description_ar || this.project.description_en)) || '';
    }
    return typeof d === 'string' ? d : '';
  }

  getCategoryName(): string {
    if (!this.project || !this.project.category) return this.translationService.currentLang() === 'ar' ? 'إنتاج سينمائي' : 'Film Production';
    const cat = this.project.category;
    const lang = this.translationService.currentLang();
    if (typeof cat === 'string') return cat;
    if (typeof cat.name === 'object' && cat.name !== null) {
      return cat.name[lang] || cat.name[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (lang === 'en') {
      return cat.name_en || cat.name || cat.name_ar || 'Film Production';
    }
    return cat.name_ar || cat.name || cat.name_en || 'إنتاج سينمائي';
  }

  getClient(): string {
    return this.project?.client || (this.translationService.currentLang() === 'ar' ? 'شريك ميديا جلو' : 'Media Glow Client');
  }

  getTimeline(): string {
    return this.project?.timeline || (this.translationService.currentLang() === 'ar' ? '4 أسابيع' : '4 Weeks');
  }

  getCameraFleet(): string {
    const tags = this.getTags();
    const camera = tags.find(t => t.toLowerCase().includes('arri') || t.toLowerCase().includes('red') || t.toLowerCase().includes('phantom') || t.toLowerCase().includes('cinema'));
    return camera || 'ARRI ALEXA 35 / RED 8K';
  }

  getFormat(): string {
    return '8K RAW • 2.39:1 SCOPE';
  }

  getChallenge(): string {
    if (!this.project || !this.project.challenge) return '';
    const lang = this.translationService.currentLang();
    const c = this.project.challenge;
    if (typeof c === 'object' && c !== null) {
      return c[lang] || c[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof this.project.challenge_ar === 'string' || typeof this.project.challenge_en === 'string') {
      return (lang === 'en' ? (this.project.challenge_en || this.project.challenge_ar) : (this.project.challenge_ar || this.project.challenge_en)) || '';
    }
    return typeof c === 'string' ? c : '';
  }

  getSolution(): string {
    if (!this.project || !this.project.solution) return '';
    const lang = this.translationService.currentLang();
    const s = this.project.solution;
    if (typeof s === 'object' && s !== null) {
      return s[lang] || s[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof this.project.solution_ar === 'string' || typeof this.project.solution_en === 'string') {
      return (lang === 'en' ? (this.project.solution_en || this.project.solution_ar) : (this.project.solution_ar || this.project.solution_en)) || '';
    }
    return typeof s === 'string' ? s : '';
  }

  getResults(): string {
    if (!this.project || !this.project.results) return '';
    const lang = this.translationService.currentLang();
    const r = this.project.results;
    if (typeof r === 'object' && r !== null) {
      return r[lang] || r[lang === 'ar' ? 'en' : 'ar'] || '';
    }
    if (typeof this.project.results_ar === 'string' || typeof this.project.results_en === 'string') {
      return (lang === 'en' ? (this.project.results_en || this.project.results_ar) : (this.project.results_ar || this.project.results_en)) || '';
    }
    return typeof r === 'string' ? r : '';
  }

  getTags(): string[] {
    if (!this.project || !this.project.tags) return [];
    if (Array.isArray(this.project.tags)) return this.project.tags;
    if (typeof this.project.tags === 'string') {
      try {
        const parsed = JSON.parse(this.project.tags);
        return Array.isArray(parsed) ? parsed : [this.project.tags];
      } catch {
        return this.project.tags.split(',').map((t: string) => t.trim());
      }
    }
    return [];
  }

  getDeliverables(): string[] {
    if (!this.project || !this.project.deliverables) return [];
    const lang = this.translationService.currentLang();
    const d = this.project.deliverables;
    if (Array.isArray(d)) {
      const otherLang = lang === 'ar' ? 'en' : 'ar';
      return d.map((item: any) => {
        if (typeof item === 'object' && item !== null) {
          return item[lang] || item[otherLang] || item.ar || item.en || item.name || item.title || '';
        }
        return item;
      }).filter((item: any) => item && String(item).trim().length > 0);
    }
    return [];
  }

  getTestimonial(): any {
    if (!this.project || !this.project.testimonial) return null;
    const t = this.project.testimonial;
    if (typeof t === 'object' && (t.text || t.testimonial_text)) {
      return {
        text: t.text || t.testimonial_text,
        name: t.name || t.testimonial_name,
        role: t.role || t.testimonial_role,
        avatar: t.avatar || t.testimonial_avatar
      };
    }
    if (this.project.testimonial_text) {
      return {
        text: this.project.testimonial_text,
        name: this.project.testimonial_name,
        role: this.project.testimonial_role,
        avatar: this.project.testimonial_avatar
      };
    }
    return null;
  }

  getWhatsAppProjectUrl(): string {
    const title = this.getProjectTitle();
    const isAr = this.translationService.currentLang() === 'ar';
    const text = isAr 
      ? `مرحباً ميديا جلو، أود الاستفسار وحجز إنتاج مشروع مماثل لمشروع: "${title}"`
      : `Hello Media Glow, I would like to inquire about producing a cinema project similar to: "${title}"`;
    return `https://wa.me/201000123456?text=${encodeURIComponent(text)}`;
  }
}
