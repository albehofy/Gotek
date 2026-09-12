import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { ConfirmService } from '../../services/confirm.service';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, DialogModule, InputTextModule],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-users" style="color:var(--violet-light);"></i> دليل العملاء</h2>
          <p class="subtitle">عرض عملاء الوكالة، كود العميل (يبدأ من 1001)، أرصدة الحسابات المالية، والتحكم بالحسابات (Hold)</p>
        </div>
        <button class="btn btn-primary" (click)="openAddModal()">
          <i class="fa-solid fa-user-plus"></i> إضافة عميل جديد
        </button>
      </div>

      <!-- Search -->
      <div class="filters-bar glass-panel">
        <div class="search-field">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            [(ngModel)]="searchQuery"
            (input)="onSearchChange()"
            placeholder="البحث بالاسم، كود العميل (مثال: 1001)، الهاتف، أو البريد..."
          />
        </div>
      </div>

      <!-- Clients Data Grid -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>كود العميل</th>
                <th>اسم العميل</th>
                <th>البريد الإلكتروني</th>
                <th>رقم الموبايل</th>
                <th>عدد الصفقات</th>
                <th>إجمالي المدفوعات</th>
                <th>المتبقي (المستحق)</th>
                <th>الحالة (Hold)</th>
                <th style="text-align:center;">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let client of clients; let i = index" [class.user-on-hold]="client.is_hold">
                <td>
                  <span class="client-code-badge">#CLIENT-{{ client.client_code || client.id }}</span>
                </td>
                <td>
                  <div class="client-cell">
                    <button class="open-client-btn" (click)="goToClientDetails(client)" title="فتح ملف العميل 360">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                    <div class="client-av">{{ getInitial(client) }}</div>
                    <div>
                      <a class="client-name-link" (click)="goToClientDetails(client)" title="فتح ملف العميل 360">
                        {{ client.client_name || client.name || '—' }}
                      </a>
                    </div>
                  </div>
                </td>
                <td style="color:var(--text-2); font-family:monospace; font-size:0.84rem;">{{ client.client_email || client.email || '—' }}</td>
                <td style="color:var(--text-2); font-weight:600; direction:ltr; text-align:right;">{{ client.phone || client.client_phone || '—' }}</td>
                <td><span class="badge badge-v">{{ client.deals_count || 0 }} صفقات</span></td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ (client.total_paid || 0) | number:'1.2-2' }} ج.م</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ (client.outstanding_balance || 0) | number:'1.2-2' }} ج.م</td>
                <td>
                  <span *ngIf="client.is_hold" class="status-badge status-hold">
                    <i class="fa-solid fa-circle-pause"></i> معلق مؤقتاً
                  </span>
                  <span *ngIf="!client.is_hold" class="status-badge status-active">
                    <i class="fa-solid fa-circle-check"></i> نشط
                  </span>
                </td>
                <td>
                  <div class="actions-group">
                    <button class="action-icon-btn btn-violet" (click)="goToClientDetails(client)" title="فتح ملف العميل">
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    <!-- Hold / Unhold Toggle -->
                    <button
                      class="action-icon-btn"
                      [class.btn-amber]="!client.is_hold"
                      [class.btn-emerald]="client.is_hold"
                      (click)="toggleHold(client)"
                      [title]="client.is_hold ? 'إلغاء تعليق العميل وتفعيله' : 'تعليق حساب العميل مؤقتاً (Hold)'"
                    >
                      <i [class]="client.is_hold ? 'fa-solid fa-play' : 'fa-solid fa-pause'"></i>
                    </button>
                    <!-- Edit Client -->
                    <button class="action-icon-btn btn-blue" (click)="openEditModal(client)" title="تعديل بيانات العميل أو كلمة المرور">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <!-- Delete Client -->
                    <button class="action-icon-btn btn-rose" (click)="confirmDeleteClient(client)" title="حذف العميل نهائياً">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="tableLoading">
                <td colspan="9" style="text-align:center; padding: 40px 16px;">
                  <i class="fa-solid fa-circle-notch fa-spin" style="color:var(--violet-light); font-size:1.8rem;"></i>
                  <div style="margin-top:10px; color:var(--text-2); font-weight:600; font-size:0.9rem;">جاري تحميل بيانات العملاء...</div>
                </td>
              </tr>
              <tr *ngIf="!tableLoading && clients.length === 0">
                <td colspan="9">
                  <div class="empty-state">
                    <div class="empty-state-icon"><i class="fa-solid fa-users-slash"></i></div>
                    <div class="empty-state-title">لا يوجد عملاء</div>
                    <div class="empty-state-desc">لم يتم العثور على عملاء يطابقون كلمة البحث.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Table Pagination Bar -->
        <div class="table-pagination-bar" *ngIf="!tableLoading && allClients.length > 0">
          <div class="pagination-info-group">
            <div class="pagination-info">
              عرض {{ (currentPage - 1) * pageSize + 1 }} إلى {{ currentPage * pageSize > totalRecords ? totalRecords : currentPage * pageSize }} من أصل {{ totalRecords }} عميل
            </div>
            <div class="pagination-per-page">
              <span>عرض</span>
              <select [(ngModel)]="pageSize" (change)="onPerPageChange()" class="pg-select">
                <option [ngValue]="5">5</option>
                <option [ngValue]="10">10</option>
                <option [ngValue]="25">25</option>
                <option [ngValue]="50">50</option>
              </select>
              <span>صفوف</span>
            </div>
          </div>
          <div class="pagination-controls">
            <button class="pg-btn" [disabled]="currentPage === 1" (click)="changePage(currentPage - 1)">
              <i class="fa-solid fa-chevron-right"></i> السابق
            </button>
            <button
              *ngFor="let p of pageNumbers"
              class="pg-num-btn"
              [class.active]="p === currentPage"
              (click)="changePage(p)"
            >
              {{ p }}
            </button>
            <button class="pg-btn" [disabled]="currentPage * pageSize >= totalRecords" (click)="changePage(currentPage + 1)">
              التالي <i class="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add / Edit Client -->
      <p-dialog [(visible)]="showModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="isEditMode ? 'تعديل بيانات العميل وكلمة المرور' : 'إضافة عميل جديد'" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="clientForm" (ngSubmit)="saveClient()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:16px;">
            <div class="form-group">
              <label>الاسم الكامل <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="مثال: شركة النور للتجارة" />
            </div>

            <div class="form-group">
              <label>البريد الإلكتروني <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="client@example.com" />
            </div>

            <div class="form-group">
              <label>رقم الموبايل / الهاتف</label>
              <input type="text" pInputText formControlName="phone" placeholder="مثال: 01012345678" />
            </div>

            <div class="form-group">
              <label>
                كلمة المرور
                <span *ngIf="!isEditMode" class="required">*</span>
                <span *ngIf="isEditMode" style="color:var(--text-3); font-weight:normal; font-size:0.75rem;">(اتركه فارغاً للإبقاء على الحالية)</span>
              </label>
              <div class="password-wrapper">
                <input [type]="showPassword ? 'text' : 'password'" pInputText formControlName="password" placeholder="••••••••" />
                <button type="button" class="btn-toggle-pw" (click)="togglePassword()" [title]="showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'">
                  <i class="fa-solid" [ngClass]="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                </button>
              </div>
            </div>

            <div class="form-group" *ngIf="isEditMode" style="background:rgba(255,255,255,0.03); padding:10px 14px; border-radius:8px; border:1px solid var(--border);">
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="checkbox" formControlName="is_hold" style="accent-color:var(--violet);" />
                <span class="hold-checkbox-label">تعليق حساب العميل مؤقتاً (Hold)</span>
              </label>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="clientForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : (isEditMode ? 'تحديث العميل' : 'حفظ العميل') }}
            </button>
          </div>
        </form>
      </p-dialog>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }
    .crm-module-container { padding: 28px 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }
    .module-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap; }
    .module-header h2 { font-size: 1.4rem; font-weight: 800; color: var(--text); letter-spacing: -0.3px; display: flex; align-items: center; gap: 10px; }
    .subtitle { color: var(--text-2); font-size: 0.85rem; margin-top: 4px; }
    .filters-bar { padding: 14px 18px; margin-bottom: 20px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); display: flex; align-items: center; gap: 12px; }
    .search-field { display: flex; align-items: center; gap: 10px; background: var(--bg-input); padding: 9px 14px; border-radius: var(--r); border: 1px solid var(--border); min-width: 280px; flex: 1; max-width: 450px; transition: border-color 0.2s; }
    .search-field:focus-within { border-color: var(--violet); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .search-field i { color: var(--text-2); font-size: 0.9rem; }
    .search-field input { background: transparent; border: none; outline: none; color: var(--text); width: 100%; font-family: inherit; font-size: 0.88rem; }
    .search-field input::placeholder { color: var(--text-3); }

    .table-card { padding: 0; overflow: hidden; border-radius: var(--r-lg); background: var(--bg-card); border: 1px solid var(--border); }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 14px 16px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: var(--text); vertical-align: middle; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
    .user-on-hold td { opacity: 0.65; background: rgba(245, 158, 11, 0.02); }

    .client-code-badge { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.25); padding: 3px 8px; border-radius: 6px; font-weight: 800; font-family: monospace; font-size: 0.78rem; }
    .client-cell { display: flex; align-items: center; gap: 10px; }
    .open-client-btn { width: 28px; height: 28px; border-radius: 8px; background: rgba(99, 102, 241, 0.12); border: 1px solid rgba(99, 102, 241, 0.25); color: var(--violet-light); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; cursor: pointer; transition: all 0.2s; flex-shrink: 0; }
    .open-client-btn:hover { background: var(--violet); color: #ffffff; transform: scale(1.08); }
    .client-av { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg, var(--violet), var(--teal)); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: #fff; flex-shrink: 0; }
    .client-name-link { font-weight: 700; color: var(--text); cursor: pointer; text-decoration: none; transition: color 0.2s; }
    .client-name-link:hover { color: var(--violet-light); text-decoration: underline; }

    .status-badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; }
    .status-active { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.25); }
    .status-hold { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.35); }

    .actions-group { display: flex; align-items: center; gap: 6px; justify-content: center; }
    .action-icon-btn { width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-input); color: var(--text-2); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 0.85rem; }
    .action-icon-btn:hover { color: var(--text); background: rgba(255,255,255,0.06); }
    .action-icon-btn.btn-violet:hover { background: var(--violet); color: #fff; border-color: var(--violet); }
    .action-icon-btn.btn-blue:hover { background: #3b82f6; color: #fff; border-color: #3b82f6; }
    .action-icon-btn.btn-amber { background: rgba(245, 158, 11, 0.12); color: #fbbf24; border-color: rgba(245, 158, 11, 0.25); }
    .action-icon-btn.btn-amber:hover { background: #f59e0b; color: #fff; }
    .action-icon-btn.btn-emerald { background: rgba(16, 185, 129, 0.12); color: #34d399; border-color: rgba(16, 185, 129, 0.25); }
    .action-icon-btn.btn-emerald:hover { background: #10b981; color: #fff; }
    .action-icon-btn.btn-rose:hover { background: var(--rose); color: #fff; border-color: var(--rose); }

    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: var(--text); outline: none; font-family: inherit; font-size: 0.88rem; transition: all 0.2s; box-sizing: border-box; }
    .password-wrapper { position: relative; display: flex; align-items: center; width: 100%; }
    .password-wrapper input { width: 100%; padding-left: 38px !important; }
    .btn-toggle-pw { position: absolute; left: 10px; background: transparent; border: none; color: var(--text-2); cursor: pointer; padding: 6px; font-size: 0.92rem; display: flex; align-items: center; justify-content: center; transition: color 0.2s; z-index: 2; }
    .btn-toggle-pw:hover { color: var(--violet-light); }
    .required { color: var(--rose-light); }
    .hold-checkbox-label { color: #fff; font-weight: 700; }

    .dialog-footer-actions { display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border); }
    .btn-dialog-cancel { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: var(--text-2); padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.86rem; cursor: pointer; transition: all 0.2s; font-family: inherit; }
    .btn-dialog-cancel:hover { background: rgba(255, 255, 255, 0.1); color: var(--text); }
    .btn-dialog-submit { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); border: none; color: #ffffff; padding: 9px 22px; border-radius: 8px; font-weight: 700; font-size: 0.86rem; cursor: pointer; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35); transition: all 0.2s; font-family: inherit; }
    .btn-dialog-submit:hover:not(:disabled) { box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5); transform: translateY(-1px); }
    .btn-dialog-submit:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

    /* ══ LIGHT THEME OVERRIDES FOR CLIENTS LIST ══ */
    :host-context(body.light-theme) .crm-module-container { background: #f8fafc !important; }
    :host-context(body.light-theme) .module-header h2 { color: #0f172a !important; }
    :host-context(body.light-theme) .subtitle { color: #475569 !important; }
    :host-context(body.light-theme) .filters-bar { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .search-field { background: #f8fafc !important; border-color: #cbd5e1 !important; }
    :host-context(body.light-theme) .search-field input { color: #0f172a !important; }
    :host-context(body.light-theme) .table-card { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .crm-table th { background: #f8fafc !important; color: #334155 !important; border-bottom: 2px solid #e2e8f0 !important; }
    :host-context(body.light-theme) .crm-table td { border-bottom: 1px solid #f1f5f9 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .crm-table tr:hover td { background: rgba(99, 102, 241, 0.04) !important; }
    :host-context(body.light-theme) .client-name-link { color: #0f172a !important; }
    :host-context(body.light-theme) .client-name-link:hover { color: #4f46e5 !important; }
    :host-context(body.light-theme) .action-icon-btn { background: #f8fafc !important; border-color: #cbd5e1 !important; color: #334155 !important; }
    :host-context(body.light-theme) .action-icon-btn:hover { background: #f1f5f9 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .form-group label { color: #334155 !important; }
    :host-context(body.light-theme) .form-group input { background: #ffffff !important; border-color: #cbd5e1 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .btn-toggle-pw { color: #64748b !important; }
    :host-context(body.light-theme) .hold-checkbox-label { color: #0f172a !important; }
    :host-context(body.light-theme) .dialog-footer-actions { border-top-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .btn-dialog-cancel { background: #f1f5f9 !important; border-color: #cbd5e1 !important; color: #334155 !important; }
    :host-context(body.light-theme) .btn-dialog-cancel:hover { background: #e2e8f0 !important; color: #0f172a !important; }
  `]
})
export class ClientsListComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);

  clients: any[] = [];
  allClients: any[] = [];
  tableLoading = false;
  searchQuery = '';
  showModal = false;
  isEditMode = false;
  editingClientId: number | null = null;
  loading = false;
  clientForm!: FormGroup;

  showPassword = false;
  currentPage = 1;
  pageSize = 10;
  totalRecords = 0;

  ngOnInit(): void {
    const userStr = localStorage.getItem('mediaglow_user');
    if (userStr) {
      try {
        const u = JSON.parse(userStr);
        if (u.role === 'client') {
          this.router.navigate(['/client-portal']);
          return;
        }
      } catch(e){}
    }
    this.initForm();
    this.loadClients();
  }

  initForm(): void {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: [''],
      is_hold: [false]
    });
  }

  private extractItems(res: any): any[] {
    if (!res) return [];
    if (Array.isArray(res)) return res;
    if (Array.isArray(res.data)) return res.data;
    if (res.data && Array.isArray(res.data.data)) return res.data.data;
    if (res.data && Array.isArray(res.data.clients)) return res.data.clients;
    if (res.data && Array.isArray(res.data.users)) return res.data.users;
    if (Array.isArray(res.clients)) return res.clients;
    if (Array.isArray(res.users)) return res.users;
    if (res.data && typeof res.data === 'object') {
      const vals = Object.values(res.data);
      if (vals.length > 0 && typeof vals[0] === 'object' && !Array.isArray(vals[0])) {
        return vals;
      }
    }
    return [];
  }

  loadClients(): void {
    this.tableLoading = true;
    const params: any = {
      search: this.searchQuery ? this.searchQuery.trim() : ''
    };

    forkJoin({
      balancesRes: this.apiService.getClientBalances(params).pipe(catchError(() => of({ data: [] }))),
      usersRes: this.apiService.getUsers({ type: 'client', search: params.search }).pipe(catchError(() => of({ data: [] })))
    }).subscribe({
      next: ({ balancesRes, usersRes }) => {
        this.tableLoading = false;
        const balancesList = this.extractItems(balancesRes);
        const usersList = this.extractItems(usersRes);

        const clientsMap = new Map<number, any>();

        // 1. Ingest users list (contains all registered/created clients)
        usersList.forEach((u: any) => {
          if (!u || !u.id) return;
          clientsMap.set(u.id, {
            id: u.id,
            client_id: u.id,
            name: u.name || '',
            client_name: u.name || '',
            email: u.email || '',
            client_email: u.email || '',
            phone: u.phone || '',
            client_phone: u.phone || '',
            client_code: u.client_code || null,
            is_hold: !!u.is_hold,
            deals_count: 0,
            total_billed: 0,
            total_paid: 0,
            outstanding_balance: 0,
            ...u
          });
        });

        // 2. Merge / overlay financial balances report
        balancesList.forEach((b: any) => {
          if (!b) return;
          const id = b.id || b.client_id;
          if (!id) return;
          const existing = clientsMap.get(id) || {};
          clientsMap.set(id, {
            ...existing,
            ...b,
            id: id,
            client_id: id,
            name: b.client_name || b.name || existing.name || '',
            client_name: b.client_name || b.name || existing.client_name || '',
            email: b.client_email || b.email || existing.email || '',
            client_email: b.client_email || b.email || existing.client_email || '',
            phone: b.phone || b.client_phone || existing.phone || '',
            client_phone: b.phone || b.client_phone || existing.client_phone || '',
            client_code: b.client_code || existing.client_code || null,
            is_hold: b.is_hold !== undefined ? !!b.is_hold : (existing.is_hold !== undefined ? !!existing.is_hold : false),
            deals_count: b.deals_count !== undefined ? Number(b.deals_count) : (existing.deals_count || 0),
            total_billed: b.total_billed !== undefined ? Number(b.total_billed) : (existing.total_billed || 0),
            total_paid: b.total_paid !== undefined ? Number(b.total_paid) : (existing.total_paid || 0),
            outstanding_balance: b.outstanding_balance !== undefined ? Number(b.outstanding_balance) : (existing.outstanding_balance || 0),
          });
        });

        let all = Array.from(clientsMap.values());

        // In case neither map gave anything but balancesList or usersList had raw objects without ID
        if (all.length === 0) {
          const fallbackList = balancesList.length > 0 ? balancesList : usersList;
          all = fallbackList.map((c: any, idx: number) => ({
            id: c.id || c.client_id || (idx + 1),
            name: c.client_name || c.name || '',
            email: c.client_email || c.email || '',
            phone: c.phone || c.client_phone || '',
            client_code: c.client_code || null,
            is_hold: !!c.is_hold,
            deals_count: Number(c.deals_count || 0),
            total_billed: Number(c.total_billed || 0),
            total_paid: Number(c.total_paid || 0),
            outstanding_balance: Number(c.outstanding_balance || 0)
          }));
        }

        // Apply client-side search query if query entered
        if (this.searchQuery && this.searchQuery.trim()) {
          const q = this.searchQuery.trim().toLowerCase();
          all = all.filter((c: any) =>
            (c.name && c.name.toLowerCase().includes(q)) ||
            (c.email && c.email.toLowerCase().includes(q)) ||
            (c.phone && c.phone.toLowerCase().includes(q)) ||
            (c.client_code && String(c.client_code).includes(q))
          );
        }

        // Sort: latest / highest id first
        all.sort((a, b) => (b.id || 0) - (a.id || 0));

        this.allClients = all;
        this.totalRecords = all.length;
        this.updatePaginatedClients();
      },
      error: () => {
        this.tableLoading = false;
        this.allClients = [];
        this.clients = [];
        this.totalRecords = 0;
      }
    });
  }

  updatePaginatedClients(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.clients = this.allClients.slice(start, end);
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.loadClients();
  }

  onPerPageChange(): void {
    this.currentPage = 1;
    this.updatePaginatedClients();
  }

  changePage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    this.updatePaginatedClients();
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize) || 1;
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.editingClientId = null;
    this.showPassword = false;
    this.clientForm.reset({
      name: '',
      email: '',
      phone: '',
      password: 'password123',
      is_hold: false
    });
    this.clientForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    this.clientForm.get('password')?.updateValueAndValidity();
    this.showModal = true;
  }

  openEditModal(client: any): void {
    this.isEditMode = true;
    this.editingClientId = client.id || client.client_id;
    this.showPassword = false;
    this.clientForm.patchValue({
      name: client.name || client.client_name,
      email: client.email || client.client_email,
      phone: client.phone || client.client_phone || '',
      password: '',
      is_hold: !!client.is_hold
    });
    this.clientForm.get('password')?.clearValidators();
    this.clientForm.get('password')?.updateValueAndValidity();
    this.showModal = true;
  }

  saveClient(): void {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      this.toastService.warning('يرجى التأكد من ملء الحقول المطلوبة');
      return;
    }
    this.loading = true;
    const formVal = this.clientForm.value;

    const payload: any = {
      name: formVal.name,
      email: formVal.email,
      phone: formVal.phone,
      role: 'client',
      is_hold: formVal.is_hold
    };

    if (formVal.password) {
      payload.password = formVal.password;
    }

    if (this.isEditMode && this.editingClientId) {
      this.apiService.updateUser(this.editingClientId, payload).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.success('تم تحديث بيانات العميل بنجاح');
          this.showModal = false;
          this.loadClients();
        },
        error: (err) => {
          this.loading = false;
          this.toastService.error(err.error?.message || 'تعذر تحديث العميل');
        }
      });
    } else {
      this.apiService.createUser(payload).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.success('تم إضافة العميل الجديد بنجاح');
          this.showModal = false;
          this.loadClients();
        },
        error: (err) => {
          this.loading = false;
          this.toastService.error(err.error?.message || 'تعذر إضافة العميل');
        }
      });
    }
  }

  toggleHold(client: any): void {
    const clientId = client.id || client.client_id;
    const clientName = client.name || client.client_name || 'العميل';
    const actionName = client.is_hold ? 'إلغاء تعليق وتفعيل' : 'تعليق (Hold)';

    this.confirmService.confirm({
      title: `${actionName} حساب العميل: ${clientName}`,
      message: client.is_hold
        ? `هل تريد إعادة تفعيل حساب العميل "${clientName}"؟`
        : `هل أنت متأكد من تعليق حساب العميل "${clientName}" مؤقتاً؟ لن يتمكن من تسجيل الدخول وسيتم استثناؤه من قوائم التعيين.`,
      confirmText: client.is_hold ? 'نعم، قم بالتفعيل' : 'نعم، علّق الحساب (Hold)',
      cancelText: 'إلغاء',
      type: client.is_hold ? 'info' : 'warning',
      icon: client.is_hold ? 'fa-solid fa-play' : 'fa-solid fa-pause',
      accept: () => {
        this.apiService.toggleUserHold(clientId).subscribe({
          next: (res) => {
            client.is_hold = res.is_hold;
            const target = this.allClients.find(c => (c.id || c.client_id) === clientId);
            if (target) target.is_hold = res.is_hold;
            this.toastService.success(res.message || 'تم تحديث حالة حساب العميل بنجاح');
          },
          error: (err) => {
            this.toastService.error(err.error?.message || 'فشل تغيير حالة حساب العميل');
          }
        });
      }
    });
  }

  goToClientDetails(client: any): void {
    const id = client.id || client.client_id;
    if (id) {
      this.router.navigate(['/clients', id]);
    }
  }

  getInitial(client: any): string {
    const name = client.name || client.client_name || '';
    return name ? name[0].toUpperCase() : 'C';
  }

  confirmDeleteClient(client: any): void {
    const clientId = client.id || client.client_id;
    const clientName = client.name || client.client_name || 'العميل';
    this.confirmService.confirm({
      title: 'تأكيد حذف العميل',
      message: `هل أنت متأكد من رغبتك في حذف العميل "${clientName}" نهائياً من النظام؟`,
      confirmText: 'نعم، حذف العميل',
      cancelText: 'إلغاء وتراجع',
      type: 'danger',
      icon: 'fa-solid fa-user-xmark',
      accept: () => {
        this.loading = true;
        this.apiService.deleteUser(clientId).subscribe({
          next: () => {
            this.loading = false;
            this.toastService.success(`تم حذف العميل "${clientName}" بنجاح`, 'تم الحذف');
            this.loadClients();
          },
          error: (err) => {
            this.loading = false;
            this.toastService.error(err.error?.message || 'تعذر حذف العميل', 'خطأ بالحذف');
          }
        });
      }
    });
  }
}
