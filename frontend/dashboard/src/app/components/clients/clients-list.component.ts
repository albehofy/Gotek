import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { ConfirmService } from '../../services/confirm.service';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, DialogModule, InputTextModule],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-users" style="color:var(--violet-light);"></i> دليل العملاء</h2>
          <p class="subtitle">عرض عملاء الوكالة، أرصدة الحسابات المالية، والعقود النشطة</p>
        </div>
        <button class="btn btn-primary" (click)="openAddModal()">
          <i class="fa-solid fa-user-plus"></i> إضافة عميل جديد
        </button>
      </div>

      <!-- Search -->
      <div class="filters-bar glass-panel">
        <div class="search-field">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" [(ngModel)]="searchQuery" (input)="onSearchChange()" placeholder="البحث بالاسم أو البريد الإلكتروني..." />
        </div>
      </div>

      <!-- Clients Data Grid -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>#</th>
                <th>اسم العميل</th>
                <th>البريد الإلكتروني</th>
                <th>رقم الموبايل</th>
                <th>عدد الصفقات</th>
                <th>إجمالي المدفوعات</th>
                <th>المتبقي (المستحق)</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let client of clients; let i = index">
                <td>{{ (currentPage - 1) * pageSize + i + 1 }}</td>
                <td>
                  <div class="client-cell">
                    <button class="open-client-btn" (click)="goToClientDetails(client)" title="فتح ملف العميل">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                    <div class="client-av">{{ getInitial(client) }}</div>
                    <div>
                      <a class="client-name-link" (click)="goToClientDetails(client)" title="فتح ملف العميل">
                        {{ client.client_name || client.name || '—' }}
                      </a>
                    </div>
                  </div>
                </td>
                <td style="color:var(--text-2);">{{ client.client_email || client.email || '—' }}</td>
                <td style="color:var(--text-2); font-weight:600; direction:ltr; text-align:right;">{{ client.phone || client.client_phone || '—' }}</td>
                <td><span class="badge badge-v">{{ client.deals_count || 0 }} صفقات</span></td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ (client.total_paid || 0) | number:'1.2-2' }} ج.م</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ (client.outstanding_balance || 0) | number:'1.2-2' }} ج.م</td>
                <td>
                  <div class="actions-group">
                    <button class="action-icon-btn btn-violet" (click)="goToClientDetails(client)" title="فتح ملف العميل">
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    <button class="action-icon-btn btn-rose" (click)="confirmDeleteClient(client)" title="حذف العميل نهائياً">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="clients.length === 0">
                <td colspan="8">
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
        <div class="table-pagination-bar" *ngIf="clients.length > 0">
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

      <!-- PrimeNG Dialog: Add New Client -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="إضافة عميل جديد" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="clientForm" (ngSubmit)="saveClient()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:16px;">
            <div class="form-group">
              <label>الاسم الكامل <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="مثال: شركة النور للتجارة" [class.is-invalid]="clientForm.get('name')?.invalid && (clientForm.get('name')?.touched || clientForm.get('name')?.dirty)" />
              <small class="field-error-msg" *ngIf="clientForm.get('name')?.invalid && (clientForm.get('name')?.touched || clientForm.get('name')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> اسم العميل الكامل مطلوب
              </small>
            </div>

            <div class="form-group">
              <label>البريد الإلكتروني <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="client@example.com" [class.is-invalid]="clientForm.get('email')?.invalid && (clientForm.get('email')?.touched || clientForm.get('email')?.dirty)" />
              <small class="field-error-msg" *ngIf="clientForm.get('email')?.invalid && (clientForm.get('email')?.touched || clientForm.get('email')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> البريد الإلكتروني غير صحيح أو مطلوب
              </small>
            </div>

            <div class="form-group">
              <label>رقم الموبايل / الهاتف</label>
              <input type="text" pInputText formControlName="phone" placeholder="مثال: 01012345678" />
            </div>

            <div class="form-group">
              <label>كلمة المرور الافتراضية <span class="required">*</span></label>
              <div class="password-wrapper">
                <input [type]="showPassword ? 'text' : 'password'" pInputText formControlName="password" placeholder="••••••••" [class.is-invalid]="clientForm.get('password')?.invalid && (clientForm.get('password')?.touched || clientForm.get('password')?.dirty)" />
                <button type="button" class="btn-toggle-pw" (click)="togglePassword()" [title]="showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'">
                  <i class="fa-solid" [ngClass]="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                </button>
              </div>
              <small class="field-error-msg" *ngIf="clientForm.get('password')?.invalid && (clientForm.get('password')?.touched || clientForm.get('password')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> كلمة المرور مطلوبة
              </small>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="closeAddModal()">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="clientForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : 'حفظ العميل' }}
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
    .search-field { display: flex; align-items: center; gap: 10px; background: var(--bg-input); padding: 9px 14px; border-radius: var(--r); border: 1px solid var(--border); min-width: 260px; flex: 1; max-width: 400px; transition: border-color 0.2s; }
    .search-field:focus-within { border-color: var(--violet); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .search-field i { color: var(--text-2); font-size: 0.9rem; }
    .search-field input { background: transparent; border: none; outline: none; color: var(--text); width: 100%; font-family: inherit; font-size: 0.88rem; }
    .search-field input::placeholder { color: var(--text-3); }
    .table-card { padding: 0; overflow: hidden; border-radius: var(--r-lg); background: var(--bg-card); border: 1px solid var(--border); }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 14px 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: var(--text); vertical-align: middle; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
    .client-cell { display: flex; align-items: center; gap: 10px; }
    .open-client-btn { width: 28px; height: 28px; border-radius: 8px; background: rgba(99, 102, 241, 0.12); border: 1px solid rgba(99, 102, 241, 0.25); color: var(--violet-light); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; cursor: pointer; transition: all 0.2s; flex-shrink: 0; }
    .open-client-btn:hover { background: var(--violet); color: #ffffff; transform: scale(1.08); }
    .client-av { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg, var(--violet), var(--teal)); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: #fff; flex-shrink: 0; }
    .client-name { font-weight: 700; color: var(--text); }
    .client-name-link { font-weight: 700; color: var(--text); cursor: pointer; text-decoration: none; transition: color 0.2s; }
    .client-name-link:hover { color: var(--violet-light); text-decoration: underline; }
    .btn-action { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); padding: 6px 12px; border-radius: var(--r); font-size: 0.76rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-action:hover { background: rgba(255,255,255,0.08); color: var(--text); }
    .btn-action.primary { color: var(--violet-light); background: var(--violet-soft); border-color: rgba(124,58,237,0.2); }
    .btn-action.primary:hover { background: rgba(124,58,237,0.22); }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 20px; }
    .crm-modal-card { width: 100%; max-width: 480px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-xl); box-shadow: 0 24px 80px rgba(0,0,0,0.7); animation: modalIn 0.22s var(--ease); }
    @keyframes modalIn { from { opacity:0; transform: translateY(16px) scale(0.97); } to { opacity:1; transform:none; } }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid var(--border); }
    .modal-header h3 { font-size: 1.05rem; font-weight: 800; color: var(--text); display: flex; align-items: center; gap: 9px; }
    .close-btn { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); font-size: 0.9rem; cursor: pointer; width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
    .close-btn:hover { background: var(--rose-soft); color: var(--rose-light); border-color: rgba(225,29,72,0.2); }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: var(--text); outline: none; font-family: inherit; font-size: 0.88rem; transition: all 0.2s; }
    .form-group input:focus { border-color: var(--violet); background: rgba(124,58,237,0.06); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .password-wrapper { position: relative; display: flex; align-items: center; width: 100%; }
    .password-wrapper input { width: 100%; padding-left: 38px !important; }
    .btn-toggle-pw { position: absolute; left: 10px; background: transparent; border: none; color: var(--text-2); cursor: pointer; padding: 6px; font-size: 0.92rem; display: flex; align-items: center; justify-content: center; transition: color 0.2s; z-index: 2; }
    .btn-toggle-pw:hover { color: var(--violet-light); }
    .actions-group { display: flex; align-items: center; gap: 6px; }
    .action-icon-btn { width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-input); color: var(--text-2); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 0.85rem; }
    .action-icon-btn:hover { color: var(--text); background: rgba(255,255,255,0.06); }
    .action-icon-btn.btn-violet:hover { background: var(--violet); color: #fff; border-color: var(--violet); }
    .action-icon-btn.btn-rose:hover { background: var(--rose); color: #fff; border-color: var(--rose); }
    .modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 16px 24px; border-top: 1px solid var(--border); }
    .required { color: var(--rose-light); }
  `]
})
export class ClientsListComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);

  clients: any[] = [];
  searchQuery = '';
  showAddModal = false;
  loading = false;
  clientForm!: FormGroup;

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
      password: ['password123', Validators.required]
    });
  }

  currentPage = 1;
  pageSize = 5;
  totalRecords = 0;

  loadClients(): void {
    const params = {
      page: this.currentPage,
      per_page: this.pageSize,
      search: this.searchQuery ? this.searchQuery.trim() : ''
    };

    this.apiService.getClientBalances(params).subscribe(res => {
      let raw: any[] = [];
      if (res && res.data) {
        if (Array.isArray(res.data)) {
          raw = res.data;
          this.totalRecords = res.total || raw.length;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          raw = res.data.data;
          this.totalRecords = res.data.total || raw.length;
        } else {
          raw = [res.data];
          this.totalRecords = raw.length;
        }
      } else if (Array.isArray(res)) {
        raw = res;
        this.totalRecords = raw.length;
      }

      let processed = raw.map((c: any) => ({
        ...c,
        name: c.client_name || c.name || '',
        email: c.client_email || c.email || '',
        phone: c.phone || c.client_phone || ''
      }));

      if (this.searchQuery && this.searchQuery.trim()) {
        const q = this.searchQuery.trim().toLowerCase();
        processed = processed.filter((c: any) =>
          (c.name && c.name.toLowerCase().includes(q)) ||
          (c.email && c.email.toLowerCase().includes(q)) ||
          (c.phone && c.phone.toLowerCase().includes(q))
        );
        this.totalRecords = processed.length;
      }

      this.clients = processed;
    });
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.loadClients();
  }

  onPerPageChange(): void {
    this.currentPage = 1;
    this.loadClients();
  }

  changePage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    this.loadClients();
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize) || 1;
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  openAddModal(): void {
    this.showPassword = false;
    this.clientForm.reset({ password: 'password123' });
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  saveClient(): void {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      this.toastService.warning('يرجى إدخال اسم العميل والبريد الإلكتروني بشكل صحيح');
      return;
    }
    this.loading = true;

    const payload = {
      ...this.clientForm.value,
      role: 'client'
    };

    this.apiService.createUser(payload).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success('تم إضافة العميل الجديد بنجاح', 'تمت العملية');
        this.closeAddModal();
        this.loadClients();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || 'تعذر إضافة العميل');
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
