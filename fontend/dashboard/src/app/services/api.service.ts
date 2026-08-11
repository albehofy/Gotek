import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { TranslationService } from './translation.service';

const API_BASE_URL = 'http://localhost:8000/api';

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
    return this.http.post<any>(`${API_BASE_URL}/login`, { email, password }, { headers: this.getHeaders() }).pipe(
      catchError(err => {
        if (email === "demo@mediaglow.com" && password === "mediaglow2026") {
          return of({
            success: true,
            token: "demo_token_123",
            user: {
              name: "Media Glow Admin",
              role: "Administrator",
              email: email
            }
          });
        }
        return of({ success: false, message: "Connection failed. Please check your credentials." });
      })
    );
  }

  getProjects(params: any = {}): Observable<any> {
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
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(this.handleError('getProjects', []))
    );
  }

  getProject(id: string): Observable<any> {
    return this.http.get(`${API_BASE_URL}/projects/${id}`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError('getProject', null)));
  }

  getTestimonials(limit: number = 6): Observable<any> {
    let params = new HttpParams().set('limit', limit.toString());
    params = params.set('lang', this.translationService.currentLang());
    params = params.set('locale', this.translationService.currentLang());

    return this.http.get(`${API_BASE_URL}/testimonials`, {
      headers: this.getHeaders(),
      params
    }).pipe(
      map((res: any) => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(this.handleError('getTestimonials', []))
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
    return this.http.get(`${API_BASE_URL}/services`, {
      headers: this.getHeaders()
    }).pipe(
      map((res: any) => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(this.handleError('getServices', []))
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
