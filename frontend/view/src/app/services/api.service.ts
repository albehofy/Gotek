import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { TranslationService } from './translation.service';

const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
const API_BASE_URL = isLocal ? 'http://localhost:8000/api' : 'https://api.mediaglowegypt.com/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private translationService = inject(TranslationService);

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Accept-Language': this.translationService.currentLang(),
      'X-Localization': this.translationService.currentLang(),
      'lang': this.translationService.currentLang()
    });
    
    const token = localStorage.getItem('mediaglow_client_token') || localStorage.getItem('mediaglow_token') || sessionStorage.getItem('mediaglow_token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty/fallback result.
      return of(result as T);
    };
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/login`, { email, password }, { headers: this.getHeaders() });
  }

  getProjects(params: any = {}): Observable<any> {
    const fallbackProjects = [
      { id: 1, title: 'تطوير منصة التجارة الإلكترونية VIP', category: { name: 'تطوير ويب' }, color: '#6366f1' },
      { id: 2, title: 'حملة نمو المبيعات والهوية البصرية', category: { name: 'تسويق وتصميم' }, color: '#06b6d4' },
      { id: 3, title: 'إنتاج المحتوى والفيديوهات الإعلانية', category: { name: 'صناعة محتوى' }, color: '#f59e0b' }
    ];
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      httpParams = httpParams.set(key, params[key]);
    });
    httpParams = httpParams.set('lang', this.translationService.currentLang());
    httpParams = httpParams.set('locale', this.translationService.currentLang());

    return this.http.get(`${API_BASE_URL}/projects`, {
      headers: this.getHeaders(),
      params: httpParams
    }).pipe(
      map((res: any) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        return arr.length ? arr : fallbackProjects;
      }),
      catchError(this.handleError('getProjects', fallbackProjects))
    );
  }

  getProject(id: string): Observable<any> {
    return this.http.get(`${API_BASE_URL}/projects/${id}`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('getProject', null)));
  }

  getTestimonials(limit: number = 6): Observable<any> {
    const fallbackTestimonials = [
      { id: 1, client_name: 'أحمد السعيد', job_title: 'الرئيس التنفيذي — شركة تيك نور', feedback: 'تجربة الاستشارات والتسويق مع ميديا جلو كانت نقطة تحول حقيقية في نمو مبيعاتنا وتوسعنا في السوق.', avatar_color: 'rgba(99, 102, 241, 0.2)' },
      { id: 2, client_name: 'سارة العتيبي', job_title: 'مدير التسويق — متجر أوركيد', feedback: 'الاحترافية في تنفيذ الحملات وتطوير الهوية البصرية فاقت توقعاتنا بكثير، نتائج سريعة ودقيقة.', avatar_color: 'rgba(6, 182, 212, 0.2)' },
      { id: 3, client_name: 'د. خالد الزهراني', job_title: 'مؤسس مجموعة الرعاية المتقدمة', feedback: 'فريق عمل متكامل ومبدع، تم تسليم النظام والمنصة قبل الموعد المحدد بدقة وكفاءة عالية.', avatar_color: 'rgba(245, 158, 11, 0.2)' }
    ];
    let params = new HttpParams().set('limit', limit.toString());
    params = params.set('lang', this.translationService.currentLang());
    params = params.set('locale', this.translationService.currentLang());

    return this.http.get(`${API_BASE_URL}/testimonials`, {
      headers: this.getHeaders(),
      params
    }).pipe(
      map((res: any) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        return arr.length ? arr : fallbackTestimonials;
      }),
      catchError(this.handleError('getTestimonials', fallbackTestimonials))
    );
  }

  // About Page methods
  getAbout(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/about`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('getAbout', {})));
  }

  updateAbout(data: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/about`, data, {
      headers: this.getHeaders()
    });
  }

  // Page Content methods
  getPageContent(page: string): Observable<any> {
    return this.http.get(`${API_BASE_URL}/page-content/${page}`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('getPageContent', {})));
  }

  updatePageContent(page: string, data: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/page-content/${page}`, { content: data }, {
      headers: this.getHeaders()
    });
  }

  getHomeData(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/stats`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('getStats', {})));
  }

  getStats(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/stats`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('getStats', {})));
  }

  getServices(): Observable<any> {
    const fallbackServices = [
      { id: 1, title: 'التسويق الرقمي وإدارة الحملات', description: 'استراتيجيات تسويقية متكاملة لزيادة المبيعات وتحقيق أعلى عائد على الاستثمار في كبرى المنصات.', iconClass: 'fa-solid fa-bullhorn' },
      { id: 2, title: 'تطوير المواقع والأنظمة CRM', description: 'بناء وتصميم وتطوير البرمجيات والمتاجر الإلكترونية ولوحات التحكم فائقة السرعة والأمان.', iconClass: 'fa-solid fa-code' },
      { id: 3, title: 'صناعة المحتوى وتطوير الهوية', description: 'ابتكار الهويات البصرية والشعارات الفريدة وإدارة منصات التواصل الاجتماعي بكل احترافية.', iconClass: 'fa-solid fa-palette' }
    ];
    return this.http.get(`${API_BASE_URL}/services`, {
      headers: this.getHeaders()
    }).pipe(
      map((res: any) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        return arr.length ? arr : fallbackServices;
      }),
      catchError(this.handleError('getServices', fallbackServices))
    );
  }

  getTeam(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/team`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('getTeam', [])));
  }

  submitContact(formData: any): Observable<any> {
    const payload = {
      full_name: formData.name,
      phone: formData.phone,
      email: formData.email,
      company_name: formData.company || "",
      service_needed: formData.service,
      budget_range: formData.budget || "",
      project_details: formData.message,
    };
    return this.http.post(`${API_BASE_URL}/contact`, payload, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('submitContact', { success: false, message: 'Failed to submit' })));
  }

  getBlogs(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/blogs`, {
      headers: this.getHeaders()
    }).pipe(
      map((res: any) => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(this.handleError('getBlogs', []))
    );
  }

  getBlog(id: string): Observable<any> {
    return this.http.get(`${API_BASE_URL}/blogs/${id}`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('getBlog', null)));
  }

  getContactInfo(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/contact-info`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('getContactInfo', null)));
  }

  // --- Admin Dashboard Additions ---
  getInquiries(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/contact`, { headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(() => of([]))
    );
  }

  deleteInquiry(id: string): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/contact/${id}`, { headers: this.getHeaders() });
  }

  addProject(formData: FormData): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/projects`, formData, { headers: this.getHeaders() });
  }

  updateProject(id: string, formData: FormData): Observable<any> {
    const headers = this.getHeaders().append('X-HTTP-Method-Override', 'PUT');
    return this.http.post<any>(`${API_BASE_URL}/projects/${id}`, formData, { headers });
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/projects/${id}`, { headers: this.getHeaders() });
  }

  addService(formData: FormData): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/services`, formData, { headers: this.getHeaders() });
  }

  updateService(id: string, formData: FormData): Observable<any> {
    const headers = this.getHeaders().append('X-HTTP-Method-Override', 'PUT');
    return this.http.post<any>(`${API_BASE_URL}/services/${id}`, formData, { headers });
  }

  deleteService(id: string): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/services/${id}`, { headers: this.getHeaders() });
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/categories`, { headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(() => of([]))
    );
  }

  addCategory(formData: FormData): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/categories`, formData, { headers: this.getHeaders() });
  }

  updateCategory(id: string, formData: FormData): Observable<any> {
    const headers = this.getHeaders().append('X-HTTP-Method-Override', 'PUT');
    return this.http.post<any>(`${API_BASE_URL}/categories/${id}`, formData, { headers });
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/categories/${id}`, { headers: this.getHeaders() });
  }

  getFaqs(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/faqs`, { headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        if (res?.data && Array.isArray(res.data)) return res.data;
        return [];
      }),
      catchError(() => of([]))
    );
  }

  addFaq(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/faqs`, data, { headers: this.getHeaders() });
  }

  updateFaq(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/faqs/${id}`, data, { headers: this.getHeaders() });
  }

  deleteFaq(id: string): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/faqs/${id}`, { headers: this.getHeaders() });
  }

  addTestimonial(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/testimonials`, data, { headers: this.getHeaders() });
  }

  updateTestimonial(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/testimonials/${id}`, data, { headers: this.getHeaders() });
  }

  deleteTestimonial(id: string): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/testimonials/${id}`, { headers: this.getHeaders() });
  }

  addBlog(formData: FormData): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/blogs`, formData, { headers: this.getHeaders() });
  }

  updateBlog(id: string, formData: FormData): Observable<any> {
    const headers = this.getHeaders().append('X-HTTP-Method-Override', 'PUT');
    return this.http.post<any>(`${API_BASE_URL}/blogs/${id}`, formData, { headers });
  }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/blogs/${id}`, { headers: this.getHeaders() });
  }

  updateContactInfo(payload: any): Observable<any> {
    const method = payload.id ? 'PUT' : 'POST';
    return this.http.request<any>(method, `${API_BASE_URL}/contact-info`, {
      body: payload,
      headers: this.getHeaders()
    });
  }
}
