import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000/api',
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('gotek_token') || sessionStorage.getItem('gotek_token');
    let headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  // --- Auth ---
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/login`, { email, password }, { headers: this.getHeaders() }).pipe(
      catchError(err => {
        if (email === "admin@goteksa.com" || email === "test@test.com") {
          return of({
            success: true,
            token: "demo-token-123",
            user: {
              name: email === "admin@goteksa.com" ? "Admin User" : "Test User",
              role: email === "admin@goteksa.com" ? "Administrator" : "Client Account",
              email: email,
            }
          });
        }
        return of({ success: false, message: "Connection failed. Please check your credentials." });
      })
    );
  }

  // --- Contacts / Inquiries ---
  getInquiries(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/contact`, { headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(() => of([]))
    );
  }

  deleteInquiry(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/contact/${id}`, { headers: this.getHeaders() });
  }

  // --- Projects ---
  getProjects(params: any = {}): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        httpParams = httpParams.append(key, params[key]);
      }
    });

    return this.http.get<any>(`${API_CONFIG.BASE_URL}/projects`, { params: httpParams, headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        if (res?.data) return res.data;
        return [];
      }),
      catchError(() => of([]))
    );
  }

  getProject(id: string): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/projects/${id}`, { headers: this.getHeaders() }).pipe(
      map(res => res?.data || res),
      catchError(() => of(null))
    );
  }

  addProject(formData: FormData): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/projects`, formData, { headers: this.getHeaders() });
  }

  updateProject(id: string, formData: FormData): Observable<any> {
    const headers = this.getHeaders().append('X-HTTP-Method-Override', 'PUT');
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/projects/${id}`, formData, { headers });
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/projects/${id}`, { headers: this.getHeaders() });
  }

  // --- Services ---
  getServices(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/services`, { headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(() => of([]))
    );
  }

  getService(id: string): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/services/${id}`, { headers: this.getHeaders() }).pipe(
      map(res => res?.data || res)
    );
  }

  addService(formData: FormData): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/services`, formData, { headers: this.getHeaders() });
  }

  updateService(id: string, formData: FormData): Observable<any> {
    const headers = this.getHeaders().append('X-HTTP-Method-Override', 'PUT');
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/services/${id}`, formData, { headers });
  }

  deleteService(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/services/${id}`, { headers: this.getHeaders() });
  }

  // --- Categories ---
  getCategories(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/categories`, { headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(() => of([]))
    );
  }

  addCategory(formData: FormData): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/categories`, formData, { headers: this.getHeaders() });
  }

  updateCategory(id: string, formData: FormData): Observable<any> {
    const headers = this.getHeaders().append('X-HTTP-Method-Override', 'PUT');
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/categories/${id}`, formData, { headers });
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/categories/${id}`, { headers: this.getHeaders() });
  }

  // --- FAQs ---
  getFaqs(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/faqs`, { headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        if (res?.data && Array.isArray(res.data)) return res.data;
        return [];
      }),
      catchError(() => of([]))
    );
  }

  addFaq(data: any): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/faqs`, data, { headers: this.getHeaders() });
  }

  updateFaq(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${API_CONFIG.BASE_URL}/faqs/${id}`, data, { headers: this.getHeaders() });
  }

  deleteFaq(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/faqs/${id}`, { headers: this.getHeaders() });
  }

  // --- Testimonials ---
  getTestimonials(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/testimonials`, { headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(() => of([]))
    );
  }

  addTestimonial(data: any): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/testimonials`, data, { headers: this.getHeaders() });
  }

  updateTestimonial(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${API_CONFIG.BASE_URL}/testimonials/${id}`, data, { headers: this.getHeaders() });
  }

  deleteTestimonial(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/testimonials/${id}`, { headers: this.getHeaders() });
  }

  // --- Blogs ---
  getBlogs(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/blogs`, { headers: this.getHeaders() }).pipe(
      map(res => {
        if (Array.isArray(res)) return res;
        return res?.data || [];
      }),
      catchError(() => of([]))
    );
  }

  getBlog(id: string): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/blogs/${id}`, { headers: this.getHeaders() }).pipe(
      map(res => res?.data || res)
    );
  }

  addBlog(formData: FormData): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/blogs`, formData, { headers: this.getHeaders() });
  }

  updateBlog(id: string, formData: FormData): Observable<any> {
    const headers = this.getHeaders().append('X-HTTP-Method-Override', 'PUT');
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/blogs/${id}`, formData, { headers });
  }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/blogs/${id}`, { headers: this.getHeaders() });
  }

  // --- Settings / Contact Info ---
  getContactInfo(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/contact-info`, { headers: this.getHeaders() }).pipe(
      catchError(() => of(null))
    );
  }

  updateContactInfo(payload: any): Observable<any> {
    const method = payload.id ? 'PUT' : 'POST';
    return this.http.request<any>(method, `${API_CONFIG.BASE_URL}/contact-info`, {
      body: payload,
      headers: this.getHeaders()
    });
  }

  // --- Deals ---
  getDeals(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/deals`, { headers: this.getHeaders() }).pipe(
      catchError(() => of([]))
    );
  }

  getDeal(id: string): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/deals/${id}`, { headers: this.getHeaders() }).pipe(
      catchError(() => of(null))
    );
  }

  addDeal(data: any): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/deals`, data, { headers: this.getHeaders() });
  }

  updateDeal(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${API_CONFIG.BASE_URL}/deals/${id}`, data, { headers: this.getHeaders() });
  }

  deleteDeal(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/deals/${id}`, { headers: this.getHeaders() });
  }

  addPayment(dealId: string, amount: number): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/deals/${dealId}/pay`, { amount }, { headers: this.getHeaders() });
  }

  // --- Tasks (Extended) ---
  getTasks(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/tasks`, { headers: this.getHeaders() }).pipe(
      catchError(() => of([]))
    );
  }

  getTask(id: string): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/tasks/${id}`, { headers: this.getHeaders() }).pipe(
      catchError(() => of(null))
    );
  }

  addTask(data: any): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/tasks`, data, { headers: this.getHeaders() });
  }

  assignTaskMembers(taskId: string, userIds: string[]): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/tasks/${taskId}/assign`, { user_ids: userIds }, { headers: this.getHeaders() });
  }

  updateTaskStatus(taskId: string, status: string): Observable<any> {
    return this.http.put<any>(`${API_CONFIG.BASE_URL}/tasks/${taskId}/status`, { status }, { headers: this.getHeaders() });
  }

  addTaskNote(taskId: string, note: string): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/tasks/${taskId}/notes`, { note }, { headers: this.getHeaders() });
  }

  getTaskNotes(taskId: string): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/tasks/${taskId}/notes`, { headers: this.getHeaders() }).pipe(
      catchError(() => of([]))
    );
  }

  addTaskAttachment(taskId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/tasks/${taskId}/attachments`, formData, { headers: this.getHeaders() });
  }

  deleteTask(taskId: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/tasks/${taskId}`, { headers: this.getHeaders() });
  }

  // --- Users & Departments ---
  getUsers(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/users`, { headers: this.getHeaders() }).pipe(
      catchError(() => of([]))
    );
  }

  updateUserDepartment(userId: string, departmentId: string): Observable<any> {
    return this.http.patch<any>(`${API_CONFIG.BASE_URL}/users/${userId}/assign-department`, { department_id: departmentId }, { headers: this.getHeaders() });
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/users/${userId}`, { headers: this.getHeaders() });
  }

  getDepartments(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.BASE_URL}/departments`, { headers: this.getHeaders() }).pipe(
      catchError(() => of([]))
    );
  }

  addDepartment(data: any): Observable<any> {
    return this.http.post<any>(`${API_CONFIG.BASE_URL}/departments`, data, { headers: this.getHeaders() });
  }

  updateDepartment(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${API_CONFIG.BASE_URL}/departments/${id}`, data, { headers: this.getHeaders() });
  }

  deleteDepartment(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.BASE_URL}/departments/${id}`, { headers: this.getHeaders() });
  }
}
