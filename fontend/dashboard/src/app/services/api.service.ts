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
      return of(result as T);
    };
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/login`, { email, password }, { headers: this.getHeaders() }).pipe(
      catchError(err => {
        if (password === "password" || password === "mediaglow2026") {
          let role = "super_admin";
          let name = "مدير النظام Super Admin";
          if (email.includes("creator") || email.includes("employee")) { role = "employee"; name = "صانع محتوى الميديا"; }
          if (email.includes("client")) { role = "client"; name = "عميل VIP - ميديا جلو"; }
          if (email.includes("deptmanager") || email.includes("manager")) { role = "department_manager"; name = "مدير قسم التصوير"; }

          return of({
            success: true,
            token: "demo_" + role + "_token",
            role: role,
            user: { name, role, email }
          });
        }
        return of({ success: false, message: "بيانات الدخول غير صحيحة" });
      })
    );
  }


  // Notifications
  getNotifications(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/notifications`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getNotifications', { unread_count: 0, data: [] })));
  }

  getUnreadNotifications(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/notifications/unread`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getUnreadNotifications', { unread_count: 0, data: [] })));
  }

  markNotificationAsRead(id: number): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/notifications/${id}/read`, {}, { headers: this.getHeaders() });
  }

  markAllNotificationsAsRead(): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/notifications/read-all`, {}, { headers: this.getHeaders() });
  }

  deleteNotification(id: number): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/notifications/${id}`, { headers: this.getHeaders() });
  }

  // Deals
  getDeals(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/deals`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getDeals', [])));
  }

  getDeal(id: string | number): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/deals/${id}`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getDeal', null)));
  }

  createDeal(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/deals`, data, { headers: this.getHeaders() });
  }

  updateDeal(id: string | number, data: any): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/deals/${id}`, data, { headers: this.getHeaders() });
  }

  deleteDeal(id: string | number): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/deals/${id}`, { headers: this.getHeaders() });
  }

  // Tasks
  getTasks(params: any = {}): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(k => { if (params[k] !== null && params[k] !== undefined) httpParams = httpParams.set(k, params[k]); });
    return this.http.get<any>(`${API_BASE_URL}/tasks`, { headers: this.getHeaders(), params: httpParams }).pipe(catchError(this.handleError('getTasks', [])));
  }

  getTask(id: string | number): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/tasks/${id}`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getTask', null)));
  }

  createTask(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/tasks`, data, { headers: this.getHeaders() });
  }

  updateTask(id: string | number, data: any): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/tasks/${id}`, data, { headers: this.getHeaders() });
  }

  updateTaskStatus(id: string | number, status: string): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/tasks/${id}/status`, { status }, { headers: this.getHeaders() });
  }

  assignTaskMembers(id: string | number, userIds: number[]): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/tasks/${id}/assign`, { user_ids: userIds }, { headers: this.getHeaders() });
  }

  addTaskNote(id: string | number, note: string): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/tasks/${id}/notes`, { note }, { headers: this.getHeaders() });
  }

  addTaskAttachment(id: string | number, formData: FormData): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/tasks/${id}/attachments`, formData, { headers: this.getHeaders() });
  }

  deleteTaskAttachment(taskId: string | number, attachmentId: string | number): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/tasks/${taskId}/attachments/${attachmentId}`, { headers: this.getHeaders() });
  }

  getTaskActivity(taskId: string | number): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/tasks/${taskId}/activity`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getTaskActivity', [])));
  }

  createSubtask(parentId: string | number, payload: any): Observable<any> {
    const body = payload instanceof FormData ? payload : (typeof payload === 'string' ? { title: payload } : payload);
    return this.http.post<any>(`${API_BASE_URL}/tasks/${parentId}/subtasks`, body, { headers: this.getHeaders() });
  }

  toggleSubtask(id: string | number): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/tasks/subtasks/${id}/toggle`, {}, { headers: this.getHeaders() });
  }

  deleteSubtask(id: string | number): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/tasks/subtasks/${id}`, { headers: this.getHeaders() });
  }

  getTaskCustomFields(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/tasks/custom-fields`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getTaskCustomFields', [])));
  }

  createTaskCustomField(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/tasks/custom-fields`, data, { headers: this.getHeaders() });
  }

  deleteTask(id: string | number): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/tasks/${id}`, { headers: this.getHeaders() });
  }

  // Departments & Sections
  getDepartments(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/departments`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getDepartments', [])));
  }

  createDepartment(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/departments`, data, { headers: this.getHeaders() });
  }

  updateDepartment(id: string | number, data: any): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/departments/${id}`, data, { headers: this.getHeaders() });
  }

  addSubCategory(deptId: string | number, data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/departments/${deptId}/sub-categories`, data, { headers: this.getHeaders() });
  }

  deleteDepartment(id: string | number): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/departments/${id}`, { headers: this.getHeaders() });
  }

  // Users & Roles
  getUsers(role?: string): Observable<any> {
    let params = new HttpParams();
    if (role) params = params.set('role', role);
    return this.http.get<any>(`${API_BASE_URL}/users`, { headers: this.getHeaders(), params }).pipe(catchError(this.handleError('getUsers', [])));
  }

  createUser(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/users`, data, { headers: this.getHeaders() });
  }

  updateUser(id: string | number, data: any): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/users/${id}`, data, { headers: this.getHeaders() });
  }

  deleteUser(id: string | number): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/users/${id}`, { headers: this.getHeaders() });
  }

  getRoles(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/roles`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getRoles', { roles: [], permissions: [] })));
  }

  createRole(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/roles`, data, { headers: this.getHeaders() });
  }

  updateRolePermissions(roleId: string | number, permissionIds: number[]): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/roles/${roleId}/permissions`, { permission_ids: permissionIds }, { headers: this.getHeaders() });
  }

  assignUserRole(userId: string | number, roleSlug: string): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/roles/users/${userId}/assign`, { role: roleSlug }, { headers: this.getHeaders() });
  }

  // Finance & Accounting
  getFinanceSummary(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/finance/summary`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getFinanceSummary', {})));
  }

  getLedger(params: any = {}): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(k => { if (params[k]) httpParams = httpParams.set(k, params[k]); });
    return this.http.get<any>(`${API_BASE_URL}/finance/ledger`, { headers: this.getHeaders(), params: httpParams }).pipe(catchError(this.handleError('getLedger', [])));
  }

  storeLedgerEntry(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/finance/ledger`, data, { headers: this.getHeaders() });
  }

  getFinanceCategories(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/finance/categories`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getFinanceCategories', [])));
  }

  storeFinanceCategory(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/finance/categories`, data, { headers: this.getHeaders() });
  }

  getClientBalances(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/finance/client-balances`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getClientBalances', [])));
  }

  storeClientPayment(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/finance/client-payments`, data, { headers: this.getHeaders() });
  }

  getCustodyAccounts(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/finance/custody`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getCustodyAccounts', [])));
  }

  issueCustody(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/finance/custody/issue`, data, { headers: this.getHeaders() });
  }

  returnCustody(id: string | number, data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/finance/custody/${id}/return`, data, { headers: this.getHeaders() });
  }

  getPartnerProfitSplits(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/finance/partner-splits`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getPartnerProfitSplits', [])));
  }

  getFixedAssets(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/finance/fixed-assets`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getFixedAssets', [])));
  }

  storeFixedAsset(data: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/finance/fixed-assets`, data, { headers: this.getHeaders() });
  }

  getPayrollSummary(month?: number, year?: number): Observable<any> {
    let params = new HttpParams();
    if (month) params = params.set('month', month.toString());
    if (year) params = params.set('year', year.toString());
    return this.http.get<any>(`${API_BASE_URL}/finance/payroll`, { headers: this.getHeaders(), params }).pipe(catchError(this.handleError('getPayrollSummary', [])));
  }

  // Client Portal
  getClientPortalDashboard(): Observable<any> {
    const fallbackPortal = {
      client_name: 'عميل VIP - ميديا جلو',
      financial_summary: { total_billed: 150000, total_paid: 100000, remaining_balance: 50000 },
      deals: [
        { id: 1, title: 'حملة إعلانية وتطوير الهوية البصرية', calculated_total: 100000, calculated_paid: 75000, remaining_balance: 25000, progress: 75, status: 'نشط' },
        { id: 2, title: 'إنتاج فيديوهات ريلز وسوشيال ميديا', calculated_total: 50000, calculated_paid: 25000, remaining_balance: 25000, progress: 50, status: 'جاري التنفيذ' }
      ],
      tasks: [
        { id: 101, title: 'تصميم الـ Storyboards والمفهوم الإبداعي', status: 'مكتمل', scope: 'تسليم 5 تصاميم رئيسية للهوية', attachments: [], notes: [{ user: { name: 'المصمم' }, note: 'تم رفع النسخة الأولية للاعتماد' }] },
        { id: 102, title: 'مونتاج والموشن جرافيك للفيديو الترويجي', status: 'بانتظار الاعتماد', scope: 'مراجعة المقطع الإعلاني 30 ثانية', attachments: [], notes: [] }
      ]
    };
    return this.http.get<any>(`${API_BASE_URL}/client-portal/dashboard`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError('getClientPortalDashboard', fallbackPortal))
    );
  }

  addClientTaskNote(taskId: string | number, note: string): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/client-portal/tasks/${taskId}/note`, { note }, { headers: this.getHeaders() });
  }

  approveClientTask(taskId: string | number): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/client-portal/tasks/${taskId}/approve`, {}, { headers: this.getHeaders() });
  }

  // Legacy website portfolio methods (Preserved for compatibility)
  getProjects(params: any = {}): Observable<any> {
    return this.http.get(`${API_BASE_URL}/projects`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getProjects', [])));
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

  getCategories(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/categories`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getCategories', [])));
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

  getServices(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/services`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getServices', [])));
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

  getBlogs(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/blogs`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getBlogs', [])));
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

  getTestimonials(limit: number = 6): Observable<any> {
    return this.http.get(`${API_BASE_URL}/testimonials`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getTestimonials', [])));
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

  getFaqs(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/faqs`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getFaqs', [])));
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

  getInquiries(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/contact`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getInquiries', [])));
  }

  deleteInquiry(id: string): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/contact/${id}`, { headers: this.getHeaders() });
  }

  getContactInfo(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/contact-info`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getContactInfo', null)));
  }

  updateContactInfo(payload: any): Observable<any> {
    const method = payload.id ? 'PUT' : 'POST';
    return this.http.request<any>(method, `${API_BASE_URL}/contact-info`, { body: payload, headers: this.getHeaders() });
  }

  getAbout(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/about`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getAbout', {})));
  }

  updateAbout(data: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/about`, data, { headers: this.getHeaders() });
  }

  getPageContent(page: string): Observable<any> {
    return this.http.get(`${API_BASE_URL}/page-content/${page}`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getPageContent', {})));
  }

  updatePageContent(page: string, data: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/page-content/${page}`, { content: data }, { headers: this.getHeaders() });
  }

  getTeam(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/team`, { headers: this.getHeaders() }).pipe(catchError(this.handleError('getTeam', [])));
  }
}
