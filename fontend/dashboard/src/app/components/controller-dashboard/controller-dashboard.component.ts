import { Component, OnInit, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-controller-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './controller-dashboard.component.html',
  styleUrl: './controller-dashboard.component.css'
})
export class ControllerDashboardComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  apiService = inject(ApiService);
  fb = inject(FormBuilder);

  sidebarOpen = false;
  activeTab = 'overview';
  activeDropdown: string | null = null;
  websiteMenuOpen = true;
  isLightMode = false;
  currentUser: any = null;

  isEmployee(): boolean { return this.currentUser?.role === 'employee'; }
  isClient(): boolean { return this.currentUser?.role === 'client'; }
  isDepartmentManager(): boolean { return this.currentUser?.role === 'department_manager'; }
  isSuperAdmin(): boolean { return this.currentUser?.role === 'super_admin'; }
  isAdmin(): boolean {
    if (!this.currentUser) return true;
    return ['super_admin', 'admin'].includes(this.currentUser.role);
  }
  isAdminOrManager(): boolean {
    if (!this.currentUser) return true;
    return ['super_admin', 'admin', 'department_manager'].includes(this.currentUser.role);
  }

  getClientName(item: any): string {
    if (!item) return 'عميل محدد';

    if (typeof item === 'string' && item.trim()) {
      return item === '[object Object]' ? 'عميل محدد' : item;
    }

    if (typeof item.client_name === 'string' && item.client_name.trim() && item.client_name !== '[object Object]') {
      return item.client_name;
    }
    if (item.client_name && typeof item.client_name === 'object') {
      const n = item.client_name.name || item.client_name.client_name || item.client_name.title;
      if (n && typeof n === 'string' && n !== '[object Object]') return n;
    }

    if (typeof item.client === 'string' && item.client.trim() && item.client !== '[object Object]') {
      return item.client;
    }
    if (item.client && typeof item.client === 'object') {
      const n = item.client.name || item.client.client_name || item.client.title || item.client.company || item.client.full_name;
      if (n && typeof n === 'string' && n !== '[object Object]') return n;
    }

    if (typeof item.name === 'string' && item.name.trim() && item.name !== '[object Object]') {
      return item.name;
    }

    if (typeof item.company_name === 'string' && item.company_name.trim() && item.company_name !== '[object Object]') {
      return item.company_name;
    }

    return 'عميل محدد';
  }

  getAssigneeName(t: any): string {
    if (!t) return 'فريق الوكالة';

    if (typeof t === 'string' && t.trim() && t !== '[object Object]') return t;

    if (typeof t.assignee_name === 'string' && t.assignee_name.trim() && t.assignee_name !== '[object Object]') {
      return t.assignee_name;
    }
    if (typeof t.assigned_to_name === 'string' && t.assigned_to_name.trim() && t.assigned_to_name !== '[object Object]') {
      return t.assigned_to_name;
    }

    if (typeof t.assignee === 'string' && t.assignee.trim() && t.assignee !== '[object Object]') {
      return t.assignee;
    }
    if (t.assignee && typeof t.assignee === 'object') {
      const n = t.assignee.name || t.assignee.full_name;
      if (n && typeof n === 'string' && n !== '[object Object]') return n;
    }

    if (typeof t.assigned_to === 'string' && t.assigned_to.trim() && t.assigned_to !== '[object Object]') {
      return t.assigned_to;
    }
    if (t.assigned_to && typeof t.assigned_to === 'object') {
      const n = t.assigned_to.name || t.assigned_to.full_name;
      if (n && typeof n === 'string' && n !== '[object Object]') return n;
    }

    if (t.users && Array.isArray(t.users) && t.users.length > 0) {
      const u = t.users[0];
      if (typeof u === 'string' && u.trim() && u !== '[object Object]') return u;
      if (u && typeof u === 'object') {
        const n = u.name || u.full_name || u.email;
        if (n && typeof n === 'string' && n !== '[object Object]') return n;
      }
    }

    return 'فريق الوكالة';
  }



  // FormGroups
  projectForm!: FormGroup;
  serviceForm!: FormGroup;
  blogForm!: FormGroup;
  categoryForm!: FormGroup;
  faqForm!: FormGroup;
  testimonialForm!: FormGroup;
  contactForm!: FormGroup;

  // Data lists
  projects: any[] = [];
  categories: any[] = [];
  servicesList: any[] = [];
  blogs: any[] = [];
  faqs: any[] = [];
  testimonials: any[] = [];
  inquiries: any[] = [];

  // Form visibility states
  showProjectForm = false;
  showServiceForm = false;
  showBlogForm = false;
  showCategoryForm = false;
  showFaqForm = false;
  showTestimonialForm = false;

  // Edit states
  isEditingProject = false;
  currentProjectId: string | null = null;
  isEditingService = false;
  currentServiceId: string | null = null;
  isEditingBlog = false;
  currentBlogId: string | null = null;
  isEditingCategory = false;
  currentCategoryId: string | null = null;
  isEditingFaq = false;
  currentFaqId: string | null = null;
  isEditingTestimonial = false;
  currentTestimonialId: string | null = null;

  // Loading states
  loadingProject = false;
  loadingService = false;
  loadingBlog = false;
  loadingCategory = false;
  loadingFaq = false;
  loadingTestimonial = false;
  loadingInfo = false;
  infoMessage = '';

  // File variables
  projectImageFile: File | null = null;
  projectImagePreview: string | null = null;
  categoryImageFile: File | null = null;
  categoryImagePreview: string | null = null;
  blogImageFile: File | null = null;
  blogImagePreview: string | null = null;

  // Overview stats
  overviewStats = {
    projects: 0,
    services: 0,
    testimonials: 0,
    inquiries: 0
  };
  crmStats = {
    clients: 0,
    deals: 0,
    tasks: 0,
    departments: 0,
    totalRevenue: 0,
    totalPaid: 0,
    totalRemaining: 0,
    totalMargin: 0,
    pendingTasksCount: 0,
    inProgressTasksCount: 0,
    doneTasksCount: 0,
    newDealsCount: 0,
    wonDealsCount: 0,
    inProgressDealsCount: 0
  };
  recentProjects: any[] = [];
  recentTasks: any[] = [];
  recentDeals: any[] = [];
  projectsChartData: any[] = [];
  inquiriesChartData: any[] = [];

  // Legacy Section Data
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
  isSavingAbout = false;

  pagesData: { [key: string]: any } = {
    home: {
      hero: {
        tag: { en: '', ar: '' },
        title1: { en: '', ar: '' },
        subtitle: { en: '', ar: '' }
      },
      services: { title: { en: '', ar: '' }, subtitle: { en: '', ar: '' } },
      portfolio: { title: { en: '', ar: '' }, subtitle: { en: '', ar: '' } },
      testimonials: { title: { en: '', ar: '' }, subtitle: { en: '', ar: '' } },
      cta: { title: { en: '', ar: '' }, desc: { en: '', ar: '' } }
    },
    services: {
      hero: {
        tag: { en: '', ar: '' },
        title: { en: '', ar: '' },
        desc: { en: '', ar: '' }
      }
    },
    portfolio: {
      hero: {
        tag: { en: '', ar: '' },
        title: { en: '', ar: '' },
        desc: { en: '', ar: '' }
      }
    },
    blogs: {
      hero: {
        tag: { en: '', ar: '' },
        title: { en: '', ar: '' },
        desc: { en: '', ar: '' }
      }
    },
    footer: {
      desc: { en: '', ar: '' },
      copy: { en: '', ar: '' },
      socials: { linkedin: '', twitter: '', facebook: '', instagram: '' },
      email: '',
      phone: ''
    }
  };
  isSavingPage: { [key: string]: boolean } = {};

  ngOnInit() {
    this.initForms();

    this.route.queryParams.subscribe(params => {
      const targetTab = params['tab'] || 'overview';
      this.activeTab = targetTab;
      this.loadDataForTab(targetTab);
    });

    let token = localStorage.getItem('mediaglow_client_token');
    let userStr = localStorage.getItem('mediaglow_user');
    let user: any = null;

    if (!token) {
      token = 'demo_super_admin_token';
      user = { name: 'Media Glow Super Admin', role: 'super_admin', email: 'admin@mediaglow.com' };
      localStorage.setItem('mediaglow_client_token', token);
      localStorage.setItem('mediaglow_user', JSON.stringify(user));
    } else {
      try {
        user = userStr ? JSON.parse(userStr) : null;
      } catch (e) {}
    }
    this.currentUser = user;

    this.loadOverviewData();
  }


  initForms() {
    // Project form
    this.projectForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      category_id: ['', Validators.required],
      description_en: ['', Validators.required],
      description_ar: ['', Validators.required],
      main_image_alt: [''],
      color: ['#000000'],
      emoji: ['🏗️'],
      tags: [''],
      client: [''],
      timeline: [''],
      challenge_en: [''],
      challenge_ar: [''],
      solution_en: [''],
      solution_ar: [''],
      deliverables: [''],
      results_str: [''],
      testimonial_text: [''],
      testimonial_name: [''],
      testimonial_role: [''],
      testimonial_avatar: [''],
    });

    // Service form
    this.serviceForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      subtitle_en: ['', Validators.required],
      subtitle_ar: ['', Validators.required],
      description_en: ['', Validators.required],
      description_ar: ['', Validators.required],
      icon: ['fa-solid fa-gear', Validators.required],
      cta_url: ['/contact'],
      cta_text_en: ['Get Started'],
      cta_text_ar: ['ابدأ الآن'],
      order: [1],
      features_en: [''],
      features_ar: [''],
      stats_str_en: [''],
      stats_str_ar: [''],
    });

    // Blog form
    this.blogForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      description_en: ['', Validators.required],
      description_ar: ['', Validators.required],
      img_alt: [''],
    });

    // Category form
    this.categoryForm = this.fb.group({
      name_en: ['', Validators.required],
      name_ar: ['', Validators.required],
      description_en: [''],
      description_ar: [''],
    });

    // FAQ form
    this.faqForm = this.fb.group({
      question_en: ['', Validators.required],
      question_ar: ['', Validators.required],
      answer_en: ['', Validators.required],
      answer_ar: ['', Validators.required],
      sort_order: [1],
      is_active: [true],
    });

    // Testimonial form
    this.testimonialForm = this.fb.group({
      client_name: ['', Validators.required],
      job_title: ['', Validators.required],
      company_name: [''],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      avatar_color: ['#e8620a'],
      feedback_en: ['', Validators.required],
      feedback_ar: ['', Validators.required],
    });

    // Contact Form
    this.contactForm = this.fb.group({
      id: [''],
      whatsapp_phone: [''],
      whatsapp_desc: [''],
      official_email: [''],
      company_address: [''],
      google_maps_url: [''],
      emergency_support_info: ['']
    });
  }

  // --- Loader functions ---
  loadOverviewData() {
    this.apiService.getProjects().subscribe(res => {
      const projectsArr = Array.isArray(res) ? res : (res?.data || []);
      this.overviewStats.projects = projectsArr.length || 0;
      this.recentProjects = projectsArr.slice(0, 5);

      // Aggregate projects by category
      const projectCounts: { [key: string]: number } = {};
      projectsArr.forEach((p: any) => {
        let catName = p.category?.name_en || p.category?.name?.en;
        if (!catName && p.category?.name) {
          catName = typeof p.category.name === 'object'
            ? (p.category.name.en || p.category.name.ar)
            : p.category.name;
        }
        if (!catName) {
          catName = p.category_id ? `Category #${p.category_id}` : 'General';
        }
        projectCounts[catName] = (projectCounts[catName] || 0) + 1;
      });
      this.projectsChartData = Object.keys(projectCounts).map(key => ({
        name: key,
        count: projectCounts[key]
      }));
    });

    this.apiService.getServices().subscribe(res => {
      const servicesArr = Array.isArray(res) ? res : (res?.data || []);
      this.overviewStats.services = servicesArr.length || 0;
    });

    this.apiService.getInquiries().subscribe(res => {
      const inquiriesArr = Array.isArray(res) ? res : (res?.data || []);
      this.overviewStats.inquiries = inquiriesArr.length || 0;

      // Aggregate inquiries by service type
      const inquiryCounts: { [key: string]: number } = {};
      inquiriesArr.forEach((inq: any) => {
        let svcName = inq.service_needed;
        if (svcName && typeof svcName === 'object') {
          svcName = svcName.en || svcName.ar || 'General';
        }
        if (!svcName) svcName = 'General';
        inquiryCounts[svcName] = (inquiryCounts[svcName] || 0) + 1;
      });
      this.inquiriesChartData = Object.keys(inquiryCounts).map(key => ({
        name: key,
        count: inquiryCounts[key]
      }));
    });

    this.apiService.getTestimonials().subscribe(res => {
      const testimonialsArr = Array.isArray(res) ? res : (res?.data || []);
      this.overviewStats.testimonials = testimonialsArr.length || 0;
    });

    // CRM Overview Data Fetching
    this.apiService.getUsers().subscribe((res: any) => {
      const arr = Array.isArray(res) ? res : (res?.data || []);
      const clientUsers = arr.filter((u: any) => u.role === 'client');
      this.crmStats.clients = clientUsers.length > 0 ? clientUsers.length : arr.length;
    });

    this.apiService.getDeals().subscribe(res => {
      const arr = Array.isArray(res) ? res : (res?.data || []);
      this.crmStats.deals = arr.length || 0;
      this.recentDeals = arr.slice(0, 6);
      let totalVal = 0;
      let totalPaid = 0;
      let newCount = 0;
      let wonCount = 0;
      let progressCount = 0;

      arr.forEach((d: any) => {
        const val = Number(d.calculated_total || d.value || d.amount || 0);
        const paid = Number(d.calculated_paid || d.paid || 0);
        totalVal += val;
        totalPaid += paid;

        const st = d.stage || d.status || '';
        if (st === 'new') newCount++;
        else if (st === 'won' || st === 'closed' || st === 'completed') wonCount++;
        else progressCount++;
      });

      this.crmStats.totalRevenue = totalVal;
      this.crmStats.totalPaid = totalPaid;
      this.crmStats.totalRemaining = Math.max(0, totalVal - totalPaid);
      this.crmStats.newDealsCount = newCount;
      this.crmStats.wonDealsCount = wonCount;
      this.crmStats.inProgressDealsCount = progressCount;
    });

    this.apiService.getTasks().subscribe(res => {
      const arr = Array.isArray(res) ? res : (res?.data || []);
      const mainTasks = arr.filter((t: any) => !t.parent_id && !t.parent);
      this.crmStats.tasks = mainTasks.length > 0 ? mainTasks.length : (arr.length || 0);
      this.recentTasks = (mainTasks.length > 0 ? mainTasks : arr).slice(0, 6);

      let marginSum = 0;
      let pendingCount = 0;
      let inProgressCount = 0;
      let doneCount = 0;

      arr.forEach((t: any) => {
        const cp = Number(t.client_price || 0);
        const ep = Number(t.employee_price || 0);
        const margin = Number(t.company_margin || (cp > 0 ? cp - ep : 0));
        marginSum += margin;

        const st = t.status || '';
        if (st === 'client_review' || st === 'in_review') {
          pendingCount++;
        } else if (st === 'done' || st === 'approved') {
          doneCount++;
        } else {
          inProgressCount++;
        }
      });

      this.crmStats.totalMargin = marginSum;
      this.crmStats.pendingTasksCount = pendingCount;
      this.crmStats.inProgressTasksCount = inProgressCount;
      this.crmStats.doneTasksCount = doneCount;
    });

    this.apiService.getDepartments().subscribe(res => {
      const arr = Array.isArray(res) ? res : (res?.data || []);
      this.crmStats.departments = arr.length || 0;
    });
  }

  getCollectionPercentage(): number {
    const rev = this.crmStats.totalRevenue;
    if (!rev || rev === 0) return 0;
    return Math.min(100, Math.round((this.crmStats.totalPaid / rev) * 100));
  }

  getOverallTasksCompletionRate(): number {
    const total = this.crmStats.tasks;
    if (!total || total === 0) return 0;
    return Math.min(100, Math.round((this.crmStats.doneTasksCount / total) * 100));
  }

  loadProjects() {
    this.apiService.getProjects().subscribe(res => {
      this.projects = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadCategories() {
    this.apiService.getCategories().subscribe(res => {
      this.categories = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadServices() {
    this.apiService.getServices().subscribe(res => {
      this.servicesList = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadBlogs() {
    this.apiService.getBlogs().subscribe(res => {
      this.blogs = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadFaqs() {
    this.apiService.getFaqs().subscribe(res => {
      this.faqs = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadTestimonials() {
    this.apiService.getTestimonials().subscribe(res => {
      this.testimonials = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadInquiries() {
    this.apiService.getInquiries().subscribe(res => {
      this.inquiries = Array.isArray(res) ? res : (res?.data || []);
    });
  }

  loadContactInfo() {
    this.apiService.getContactInfo().subscribe(res => {
      const info = res?.data || res;
      if (info && typeof info === 'object') {
        this.contactForm.patchValue(info);
      }
    });
  }

  loadAboutData() {
    this.apiService.getAbout().subscribe((res: any) => {
      if (res && res.data) {
        this.aboutData.content = res.data.content || this.aboutData.content;
        this.aboutData.timeline = res.data.timeline || [];
        
        // Ensure nested structure exists
        ['hero', 'story', 'vision', 'mission', 'values', 'team_text'].forEach(key => {
          if (!this.aboutData.content[key]) this.aboutData.content[key] = { en: {}, ar: {} };
          if (!this.aboutData.content[key].en) this.aboutData.content[key].en = {};
          if (!this.aboutData.content[key].ar) this.aboutData.content[key].ar = {};
        });
      }
    });
  }

  loadPageData(page: string) {
    this.apiService.getPageContent(page).subscribe((res: any) => {
      if (res && res.data) {
        this.pagesData[page] = { ...this.pagesData[page], ...res.data };
      }
    });
  }

  // --- Project CRUD Operations ---
  onProjectImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.projectImageFile = file;
      const reader = new FileReader();
      reader.onload = e => this.projectImagePreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveProject() {
    if (this.projectForm.invalid) return;
    this.loadingProject = true;
    const formData = new FormData();
    const val = this.projectForm.value;
    
    Object.keys(val).forEach(key => {
      if (key !== 'tags' && key !== 'deliverables' && key !== 'results_str') {
        formData.append(key, val[key] || '');
      }
    });

    if (val.tags && typeof val.tags === 'string') {
      const tagsArray = val.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t);
      formData.append('tags', JSON.stringify(tagsArray));
    } else if (Array.isArray(val.tags)) {
      formData.append('tags', JSON.stringify(val.tags));
    } else {
      formData.append('tags', JSON.stringify([]));
    }

    if (val.deliverables && typeof val.deliverables === 'string') {
      const delArray = val.deliverables.split(',').map((d: string) => d.trim()).filter((d: string) => d);
      formData.append('deliverables', JSON.stringify(delArray));
    } else if (Array.isArray(val.deliverables)) {
      formData.append('deliverables', JSON.stringify(val.deliverables));
    } else {
      formData.append('deliverables', JSON.stringify([]));
    }

    if (val.results_str && typeof val.results_str === 'string') {
      const resultsArray = val.results_str.split(',').map((r: string) => {
        const parts = r.split(':');
        return {
          value: parts[0]?.trim() || '',
          label: parts[1]?.trim() || ''
        };
      }).filter((r: any) => r.value || r.label);
      formData.append('results', JSON.stringify(resultsArray));
    } else {
      formData.append('results', JSON.stringify([]));
    }

    if (this.projectImageFile) {
      formData.append('main_image', this.projectImageFile);
    }

    if (this.isEditingProject && this.currentProjectId) {
      this.apiService.updateProject(this.currentProjectId, formData).subscribe({
        next: () => {
          this.loadingProject = false;
          this.cancelEditProject();
          this.loadProjects();
          this.loadOverviewData();
          alert('Project updated successfully!');
        },
        error: () => this.loadingProject = false
      });
    } else {
      this.apiService.addProject(formData).subscribe({
        next: () => {
          this.loadingProject = false;
          this.cancelEditProject();
          this.loadProjects();
          this.loadOverviewData();
          alert('Project created successfully!');
        },
        error: () => this.loadingProject = false
      });
    }
  }

  editProject(project: any) {
    this.showProjectForm = true;
    this.isEditingProject = true;
    this.currentProjectId = project.id;
    const tagsStr = Array.isArray(project.tags) ? project.tags.join(', ') : '';
    const delStr = Array.isArray(project.deliverables) ? project.deliverables.join(', ') : '';
    const resStr = Array.isArray(project.results) ? project.results.map((r: any) => `${r.value}:${r.label}`).join(', ') : '';

    this.projectForm.patchValue({
      title_en: project.title_en || project.title,
      title_ar: project.title_ar,
      category_id: project.category_id,
      description_en: project.description_en,
      description_ar: project.description_ar,
      main_image_alt: project.main_image_alt,
      color: project.color || '#000000',
      emoji: project.emoji || '🏗️',
      tags: tagsStr,
      client: project.client || '',
      timeline: project.timeline || '',
      challenge_en: project.challenge_en,
      challenge_ar: project.challenge_ar,
      solution_en: project.solution_en,
      solution_ar: project.solution_ar,
      deliverables: delStr,
      results_str: resStr,
      testimonial_text: project.testimonial_text,
      testimonial_name: project.testimonial_name,
      testimonial_role: project.testimonial_role,
      testimonial_avatar: project.testimonial_avatar,
    });

    this.projectImagePreview = project.main_image_url || null;
  }

  cancelEditProject() {
    this.showProjectForm = false;
    this.isEditingProject = false;
    this.currentProjectId = null;
    this.projectImageFile = null;
    this.projectImagePreview = null;
    this.projectForm.reset({ 
      category_id: '',
      color: '#000000',
      emoji: '🏗️'
    });
  }

  deleteProject(id: string) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.apiService.deleteProject(id).subscribe(() => {
        this.loadProjects();
        this.loadOverviewData();
      });
    }
  }

  // --- Category CRUD Operations ---
  onCategoryImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.categoryImageFile = file;
      const reader = new FileReader();
      reader.onload = e => this.categoryImagePreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveCategory() {
    if (this.categoryForm.invalid) return;
    this.loadingCategory = true;
    const formData = new FormData();
    const val = this.categoryForm.value;

    formData.append('name_en', val.name_en);
    formData.append('name_ar', val.name_ar);
    formData.append('description_en', val.description_en || '');
    formData.append('description_ar', val.description_ar || '');

    if (this.categoryImageFile) {
      formData.append('image', this.categoryImageFile);
    }

    if (this.isEditingCategory && this.currentCategoryId) {
      this.apiService.updateCategory(this.currentCategoryId, formData).subscribe({
        next: () => {
          this.loadingCategory = false;
          this.cancelEditCategory();
          this.loadCategories();
          alert('Category updated successfully!');
        },
        error: () => this.loadingCategory = false
      });
    } else {
      this.apiService.addCategory(formData).subscribe({
        next: () => {
          this.loadingCategory = false;
          this.cancelEditCategory();
          this.loadCategories();
          alert('Category created successfully!');
        },
        error: () => this.loadingCategory = false
      });
    }
  }

  editCategory(category: any) {
    this.showCategoryForm = true;
    this.isEditingCategory = true;
    this.currentCategoryId = category.id;
    this.categoryForm.patchValue({
      name_en: category.name_en || (typeof category.name === 'object' ? category.name.en : category.name),
      name_ar: category.name_ar || (typeof category.name === 'object' ? category.name.ar : ''),
      description_en: category.description_en || (typeof category.description === 'object' ? category.description.en : ''),
      description_ar: category.description_ar || (typeof category.description === 'object' ? category.description.ar : ''),
    });
    this.categoryImagePreview = category.image_url || category.image || null;
  }

  cancelEditCategory() {
    this.showCategoryForm = false;
    this.isEditingCategory = false;
    this.currentCategoryId = null;
    this.categoryImageFile = null;
    this.categoryImagePreview = null;
    this.categoryForm.reset();
  }

  deleteCategory(id: string) {
    if (confirm('Are you sure you want to delete this category? All projects under this category will need update.')) {
      this.apiService.deleteCategory(id).subscribe(() => {
        this.loadCategories();
      });
    }
  }

  // --- Service CRUD Operations ---
  saveService() {
    if (this.serviceForm.invalid) return;
    this.loadingService = true;
    const formData = new FormData();
    const val = this.serviceForm.value;
    
    formData.append('icon', val.icon || 'fa-solid fa-gear');
    formData.append('cta_url', val.cta_url || '/contact');
    formData.append('cta_text_en', val.cta_text_en || 'Get Started');
    formData.append('cta_text_ar', val.cta_text_ar || 'ابدأ الآن');
    formData.append('order', String(val.order || 1));
    formData.append('title[en]', val.title_en);
    formData.append('title[ar]', val.title_ar);
    formData.append('subtitle[en]', val.subtitle_en);
    formData.append('subtitle[ar]', val.subtitle_ar);
    formData.append('description[en]', val.description_en);
    formData.append('description[ar]', val.description_ar);

    const featsEn = val.features_en ? val.features_en.split(',').map((f: string) => f.trim()).filter((f: string) => f) : [];
    const featsAr = val.features_ar ? val.features_ar.split(',').map((f: string) => f.trim()).filter((f: string) => f) : [];
    formData.append('features[en]', JSON.stringify(featsEn));
    formData.append('features[ar]', JSON.stringify(featsAr));

    const parseStats = (str: string) => {
      if (!str) return [];
      return str.split(',').map(s => {
        const parts = s.split(':');
        return {
          label: parts[0]?.trim() || '',
          sub: parts[1]?.trim() || '',
          badge: parts[2]?.trim() || ''
        };
      }).filter(s => s.label || s.sub);
    };

    formData.append('stats[en]', JSON.stringify(parseStats(val.stats_str_en)));
    formData.append('stats[ar]', JSON.stringify(parseStats(val.stats_str_ar)));

    if (this.isEditingService && this.currentServiceId) {
      this.apiService.updateService(this.currentServiceId, formData).subscribe({
        next: () => {
          this.loadingService = false;
          this.cancelEditService();
          this.loadServices();
          this.loadOverviewData();
          alert('Service updated successfully!');
        },
        error: () => this.loadingService = false
      });
    } else {
      this.apiService.addService(formData).subscribe({
        next: () => {
          this.loadingService = false;
          this.cancelEditService();
          this.loadServices();
          this.loadOverviewData();
          alert('Service created successfully!');
        },
        error: () => this.loadingService = false
      });
    }
  }

  editService(service: any) {
    this.showServiceForm = true;
    this.isEditingService = true;
    this.currentServiceId = service.id;

    const getFeaturesStr = (features: any, lang: string) => {
      if (!features) return '';
      if (Array.isArray(features)) {
        return features.map((f: any) => typeof f === 'object' ? (f[lang] || '') : f).filter((f: string) => f).join(', ');
      }
      return '';
    };

    const getStatsStr = (stats: any, lang: string) => {
      if (!stats) return '';
      if (Array.isArray(stats)) {
        return stats.map((s: any) => {
          const lbl = typeof s.label === 'object' ? (s.label[lang] || '') : s.label;
          const sub = typeof s.sub === 'object' ? (s.sub[lang] || '') : s.sub;
          const bdg = typeof s.badge === 'object' ? (s.badge[lang] || '') : s.badge;
          return `${lbl}:${sub}${bdg ? ':' + bdg : ''}`;
        }).join(', ');
      }
      return '';
    };

    this.serviceForm.patchValue({
      title_en: service.title_en || (typeof service.title === 'object' ? service.title.en : ''),
      title_ar: service.title_ar || (typeof service.title === 'object' ? service.title.ar : ''),
      subtitle_en: service.subtitle_en || (typeof service.category === 'object' ? service.category.en : ''),
      subtitle_ar: service.subtitle_ar || (typeof service.category === 'object' ? service.category.ar : ''),
      description_en: service.description_en || (typeof service.description === 'object' ? service.description.en : ''),
      description_ar: service.description_ar || (typeof service.description === 'object' ? service.description.ar : ''),
      icon: service.iconClass || service.icon || 'fa-solid fa-gear',
      cta_url: service.cta_url || '/contact',
      cta_text_en: service.ctaText?.en || service.cta_text_en || 'Get Started',
      cta_text_ar: service.ctaText?.ar || service.cta_text_ar || 'ابدأ الآن',
      order: service.order || 1,
      features_en: getFeaturesStr(service.features, 'en'),
      features_ar: getFeaturesStr(service.features, 'ar'),
      stats_str_en: getStatsStr(service.stats, 'en'),
      stats_str_ar: getStatsStr(service.stats, 'ar'),
    });
  }

  cancelEditService() {
    this.showServiceForm = false;
    this.isEditingService = false;
    this.currentServiceId = null;
    this.serviceForm.reset({
      icon: 'fa-solid fa-gear',
      cta_url: '/contact',
      cta_text_en: 'Get Started',
      cta_text_ar: 'ابدأ الآن',
      order: 1
    });
  }

  deleteService(id: string) {
    if (confirm('Are you sure you want to delete this service?')) {
      this.apiService.deleteService(id).subscribe(() => {
        this.loadServices();
        this.loadOverviewData();
      });
    }
  }

  // --- Blog CRUD Operations ---
  onBlogImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.blogImageFile = file;
      const reader = new FileReader();
      reader.onload = e => this.blogImagePreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveBlog() {
    if (this.blogForm.invalid) return;
    this.loadingBlog = true;
    const formData = new FormData();
    const val = this.blogForm.value;

    formData.append('title[en]', val.title_en);
    formData.append('title[ar]', val.title_ar);
    formData.append('description[en]', val.description_en);
    formData.append('description[ar]', val.description_ar);
    formData.append('img_alt', val.img_alt || val.title_en);

    if (this.blogImageFile) {
      formData.append('media', this.blogImageFile);
    }

    if (this.isEditingBlog && this.currentBlogId) {
      this.apiService.updateBlog(this.currentBlogId, formData).subscribe({
        next: () => {
          this.loadingBlog = false;
          this.cancelEditBlog();
          this.loadBlogs();
          alert('Article updated successfully!');
        },
        error: () => this.loadingBlog = false
      });
    } else {
      this.apiService.addBlog(formData).subscribe({
        next: () => {
          this.loadingBlog = false;
          this.cancelEditBlog();
          this.loadBlogs();
          alert('Article published successfully!');
        },
        error: () => this.loadingBlog = false
      });
    }
  }

  editBlog(blog: any) {
    this.showBlogForm = true;
    this.isEditingBlog = true;
    this.currentBlogId = blog.id;
    this.blogForm.patchValue({
      title_en: blog.title_en || (typeof blog.title === 'object' ? blog.title.en : blog.title),
      title_ar: blog.title_ar || (typeof blog.title === 'object' ? blog.title.ar : ''),
      description_en: blog.description_en || (typeof blog.description === 'object' ? blog.description.en : blog.description),
      description_ar: blog.description_ar || (typeof blog.description === 'object' ? blog.description.ar : ''),
      img_alt: blog.img_alt || '',
    });
    this.blogImagePreview = blog.media_url || blog.image || null;
  }

  cancelEditBlog() {
    this.showBlogForm = false;
    this.isEditingBlog = false;
    this.currentBlogId = null;
    this.blogImageFile = null;
    this.blogImagePreview = null;
    this.blogForm.reset();
  }

  deleteBlog(id: string) {
    if (confirm('Are you sure you want to delete this blog article?')) {
      this.apiService.deleteBlog(id).subscribe(() => {
        this.loadBlogs();
      });
    }
  }

  // --- Testimonial CRUD Operations ---
  saveTestimonial() {
    if (this.testimonialForm.invalid) return;
    this.loadingTestimonial = true;
    const val = this.testimonialForm.value;
    const payload = {
      client_name: val.client_name,
      job_title: val.job_title,
      company_name: val.company_name || '',
      rating: Number(val.rating || 5),
      avatar_color: val.avatar_color || '#e8620a',
      feedback: {
        en: val.feedback_en,
        ar: val.feedback_ar
      }
    };

    if (this.isEditingTestimonial && this.currentTestimonialId) {
      this.apiService.updateTestimonial(this.currentTestimonialId, payload).subscribe({
        next: () => {
          this.loadingTestimonial = false;
          this.cancelEditTestimonial();
          this.loadTestimonials();
          this.loadOverviewData();
          alert('Testimonial updated successfully!');
        },
        error: () => this.loadingTestimonial = false
      });
    } else {
      this.apiService.addTestimonial(payload).subscribe({
        next: () => {
          this.loadingTestimonial = false;
          this.cancelEditTestimonial();
          this.loadTestimonials();
          this.loadOverviewData();
          alert('Testimonial added successfully!');
        },
        error: () => this.loadingTestimonial = false
      });
    }
  }

  editTestimonial(testimonial: any) {
    this.showTestimonialForm = true;
    this.isEditingTestimonial = true;
    this.currentTestimonialId = testimonial.id;
    this.testimonialForm.patchValue({
      client_name: testimonial.client_name,
      job_title: testimonial.job_title,
      company_name: testimonial.company_name || '',
      rating: testimonial.rating || 5,
      avatar_color: testimonial.avatar_color || '#e8620a',
      feedback_en: testimonial.feedback_en || (typeof testimonial.feedback === 'object' ? testimonial.feedback.en : testimonial.feedback),
      feedback_ar: testimonial.feedback_ar || (typeof testimonial.feedback === 'object' ? testimonial.feedback.ar : ''),
    });
  }

  cancelEditTestimonial() {
    this.showTestimonialForm = false;
    this.isEditingTestimonial = false;
    this.currentTestimonialId = null;
    this.testimonialForm.reset({
      rating: 5,
      avatar_color: '#e8620a'
    });
  }

  deleteTestimonial(id: string) {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      this.apiService.deleteTestimonial(id).subscribe(() => {
        this.loadTestimonials();
        this.loadOverviewData();
      });
    }
  }

  // --- FAQ CRUD Operations ---
  saveFaq() {
    if (this.faqForm.invalid) return;
    this.loadingFaq = true;
    const val = this.faqForm.value;
    const payload = {
      question_en: val.question_en,
      question_ar: val.question_ar,
      answer_en: val.answer_en,
      answer_ar: val.answer_ar,
      sort_order: val.sort_order || 1,
      is_active: val.is_active ? 1 : 0
    };

    if (this.isEditingFaq && this.currentFaqId) {
      this.apiService.updateFaq(this.currentFaqId, payload).subscribe({
        next: () => {
          this.loadingFaq = false;
          this.cancelEditFaq();
          this.loadFaqs();
          alert('FAQ updated successfully!');
        },
        error: () => this.loadingFaq = false
      });
    } else {
      this.apiService.addFaq(payload).subscribe({
        next: () => {
          this.loadingFaq = false;
          this.cancelEditFaq();
          this.loadFaqs();
          alert('FAQ created successfully!');
        },
        error: () => this.loadingFaq = false
      });
    }
  }

  editFaq(faq: any) {
    this.showFaqForm = true;
    this.isEditingFaq = true;
    this.currentFaqId = faq.id;
    this.faqForm.patchValue({
      question_en: faq.question_en,
      question_ar: faq.question_ar,
      answer_en: faq.answer_en,
      answer_ar: faq.answer_ar,
      sort_order: faq.order || faq.sort_order || 1,
      is_active: faq.is_active !== undefined ? faq.is_active : true,
    });
  }

  cancelEditFaq() {
    this.showFaqForm = false;
    this.isEditingFaq = false;
    this.currentFaqId = null;
    this.faqForm.reset({
      sort_order: 1,
      is_active: true
    });
  }

  deleteFaq(id: string) {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      this.apiService.deleteFaq(id).subscribe(() => {
        this.loadFaqs();
      });
    }
  }

  // --- Contact & Inquiries Operations ---
  saveContactInfo() {
    this.loadingInfo = true;
    this.infoMessage = '';
    this.apiService.updateContactInfo(this.contactForm.value).subscribe({
      next: (res) => {
        this.loadingInfo = false;
        this.infoMessage = 'Saved successfully!';
        setTimeout(() => this.infoMessage = '', 3000);
      },
      error: () => {
        this.loadingInfo = false;
        this.infoMessage = 'Failed to save.';
      }
    });
  }

  deleteInquiry(id: string) {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      this.apiService.deleteInquiry(id).subscribe(() => {
        this.loadInquiries();
        this.loadOverviewData();
      });
    }
  }

  // --- Legacy Page Editor operations ---
  addTimeline() {
    this.aboutData.timeline.push({ year: '', title: { en: '', ar: '' }, description: { en: '', ar: '' } });
  }

  removeTimeline(index: number) {
    this.aboutData.timeline.splice(index, 1);
  }

  saveAboutData() {
    this.isSavingAbout = true;
    const payload = {
      hero: this.aboutData.content.hero,
      story: this.aboutData.content.story,
      vision: this.aboutData.content.vision,
      mission: this.aboutData.content.mission,
      values: this.aboutData.content.values,
      team_text: this.aboutData.content.team_text,
      timeline: this.aboutData.timeline
    };
    
    this.apiService.updateAbout(payload).subscribe({
      next: () => {
        this.isSavingAbout = false;
        alert('About page updated successfully!');
      },
      error: () => {
        this.isSavingAbout = false;
        alert('Error updating about page');
      }
    });
  }

  savePageData(page: string) {
    this.isSavingPage[page] = true;
    this.apiService.updatePageContent(page, this.pagesData[page]).subscribe({
      next: () => {
        this.isSavingPage[page] = false;
        alert(`${page} page updated successfully!`);
      },
      error: () => {
        this.isSavingPage[page] = false;
        alert(`Error updating ${page} page`);
      }
    });
  }

  // --- UI Layout handlers ---
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  loadDataForTab(tab: string) {
    switch (tab) {
      case 'overview':
        this.loadOverviewData();
        break;
      case 'services':
        this.loadServices();
        break;
      case 'projects':
        this.loadProjects();
        this.loadCategories();
        break;
      case 'categories':
        this.loadCategories();
        break;
      case 'blogs':
        this.loadBlogs();
        break;
      case 'testimonials':
        this.loadTestimonials();
        break;
      case 'faqs':
        this.loadFaqs();
        break;
      case 'contact-hub':
        this.loadInquiries();
        this.loadContactInfo();
        break;
      case 'home-page':
        this.loadPageData('home');
        break;
      case 'about-page':
        this.loadAboutData();
        break;
      case 'services-page':
        this.loadPageData('services');
        break;
      case 'portfolio-page':
        this.loadPageData('portfolio');
        break;
      case 'blogs-page':
        this.loadPageData('blogs');
        break;
      case 'footer-section':
        this.loadPageData('footer');
        break;
    }
  }

  setTab(tab: string) {
    this.activeTab = tab;
    this.loadDataForTab(tab);
    if (window.innerWidth <= 992) {
      this.sidebarOpen = false;
    }
  }

  toggleWebsiteMenu() {
    this.websiteMenuOpen = !this.websiteMenuOpen;
  }

  toggleDropdown(dd: string) {
    if (this.activeDropdown === dd) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dd;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.tb-user') && !target.closest('.dd-user') && 
        !target.closest('.tb-btn') && !target.closest('.dd-notif') &&
        !target.closest('.sb-user')) {
      this.activeDropdown = null;
    }
  }

  logout() {
    localStorage.removeItem('mediaglow_client_token');
    this.router.navigate(['/login']);
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }
}

