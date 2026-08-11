import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-users text-orange"></i> إدارة العملاء (Clients Management)</h2>
          <p class="subtitle">عرض قائمة العملاء، الحسابات، وإضافة عميل جديد مباشرةً</p>
        </div>
        <button class="btn btn-primary" (click)="openAddModal()">
          <i class="fa-solid fa-user-plus"></i> إضافة عميل جديد
        </button>
      </div>

      <!-- Filters & Search -->
      <div class="filters-bar glass-panel">
        <div class="search-field">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" [(ngModel)]="searchQuery" placeholder="بحث بالاسم أو البريد الإلكتروني..." />
        </div>
      </div>

      <!-- Clients Data Grid -->
      <div class="table-card glass-panel">
        <table class="crm-table">
          <thead>
            <tr>
              <th>#</th>
              <th>اسم العميل</th>
              <th>البريد الإلكتروني</th>
              <th>إجمالي العقود</th>
              <th>المدفوع (EGP)</th>
              <th>المتبقي (EGP)</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let client of filteredClients(); let i = index">
              <td>{{ i + 1 }}</td>
              <td class="font-bold text-white">{{ client.name }}</td>
              <td>{{ client.email }}</td>
              <td><span class="badge badge-info">{{ client.deals_count || 0 }} صفقة</span></td>
              <td class="text-success font-bold">{{ (client.total_paid || 0) | number:'1.2-2' }} EGP</td>
              <td class="text-danger font-bold">{{ (client.outstanding_balance || 0) | number:'1.2-2' }} EGP</td>
              <td>
                <button class="btn-action primary" (click)="openClientDetailsInNewTab(client.id)" title="فتح سجل العميل الكامل في صفحة/تبويب جديد">
                  <i class="fa-solid fa-external-link"></i> السجل الكامل
                </button>
              </td>
            </tr>
            <tr *ngIf="filteredClients().length === 0">
              <td colspan="7" class="text-center py-4 text-muted">لا يوجد عملاء مطبقين للبحث</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal: Add New Client -->
      <div class="crm-modal-backdrop" *ngIf="showAddModal">
        <div class="crm-modal-card glass-panel">
          <div class="modal-header">
            <h3><i class="fa-solid fa-user-plus text-orange"></i> إضافة عميل جديد</h3>
            <button class="close-btn" (click)="closeAddModal()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="clientForm" (ngSubmit)="saveClient()">
            <div class="form-group">
              <label>الاسم الكامل <span class="required">*</span></label>
              <input type="text" formControlName="name" placeholder="مثال: شركة النور للحلول" />
            </div>

            <div class="form-group">
              <label>البريد الإلكتروني <span class="required">*</span></label>
              <input type="email" formControlName="email" placeholder="client@example.com" />
            </div>

            <div class="form-group">
              <label>كلمة المرور الافتراضية <span class="required">*</span></label>
              <input type="password" formControlName="password" placeholder="••••••••" />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="closeAddModal()">إلغاء</button>
              <button type="submit" class="btn btn-primary" [disabled]="clientForm.invalid || loading">
                {{ loading ? 'جاري الحفظ...' : 'حفظ العميل' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .crm-module-container { padding: 24px; }
    .module-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .subtitle { color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px; }
    .filters-bar { padding: 14px 20px; margin-bottom: 20px; display: flex; align-items: center; }
    .search-field { display: flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.3); padding: 8px 16px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); width: 320px; }
    .search-field input { background: transparent; border: none; outline: none; color: #fff; width: 100%; }
    .table-card { padding: 0; overflow: hidden; border-radius: 16px; }
    .crm-table { width: 100%; border-collapse: collapse; text-align: right; }
    .crm-table th, .crm-table td { padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.92rem; }
    .crm-table th { background: rgba(255,255,255,0.03); color: #fff; font-weight: 700; }
    .btn-action { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: #fff; padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
    .btn-action.primary:hover { background: var(--orange); border-color: var(--orange); }
    .text-orange { color: var(--orange); }
    .text-success { color: #10b981; }
    .text-danger { color: #ef4444; }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 1200; }
    .crm-modal-card { width: 100%; max-width: 480px; padding: 24px; background: #12121e; border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; }
    .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .close-btn { background: transparent; border: none; color: #a0a0ab; font-size: 1.2rem; cursor: pointer; }
    .form-group { margin-bottom: 16px; }
    .form-group label { display: block; margin-bottom: 6px; font-size: 0.88rem; color: #fff; }
    .form-group input { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #fff; outline: none; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; }
  `]
})
export class ClientsListComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  clients: any[] = [];
  searchQuery = '';
  showAddModal = false;
  loading = false;
  clientForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.loadClients();
  }

  initForm(): void {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['password123', Validators.required]
    });
  }

  loadClients(): void {
    this.apiService.getClientBalances().subscribe(res => {
      this.clients = res.data || [];
    });
  }

  filteredClients() {
    if (!this.searchQuery.trim()) return this.clients;
    const q = this.searchQuery.toLowerCase();
    return this.clients.filter(c => c.client_name?.toLowerCase().includes(q) || c.client_email?.toLowerCase().includes(q));
  }

  openAddModal(): void {
    this.clientForm.reset({ password: 'password123' });
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  saveClient(): void {
    if (this.clientForm.invalid) return;
    this.loading = true;

    const payload = {
      ...this.clientForm.value,
      role: 'client'
    };

    this.apiService.createUser(payload).subscribe({
      next: () => {
        this.loading = false;
        this.closeAddModal();
        this.loadClients();
      },
      error: () => this.loading = false
    });
  }

  openClientDetailsInNewTab(clientId: number): void {
    const url = window.location.origin + '/clients/' + clientId;
    window.open(url, '_blank');
  }
}
