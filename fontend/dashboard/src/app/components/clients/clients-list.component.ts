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
          <h2><i class="fa-solid fa-users" style="color:var(--violet-light);"></i> Clients Directory</h2>
          <p class="subtitle">View agency clients, financial balances, active contracts & accounts</p>
        </div>
        <button class="btn btn-primary" (click)="openAddModal()">
          <i class="fa-solid fa-user-plus"></i> Add New Client
        </button>
      </div>

      <!-- Filters & Search -->
      <div class="filters-bar glass-panel">
        <div class="search-field">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" [(ngModel)]="searchQuery" placeholder="Search by name or email..." />
        </div>
      </div>

      <!-- Clients Data Grid -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Client Name</th>
                <th>Email Address</th>
                <th>Deals Count</th>
                <th>Paid Total</th>
                <th>Outstanding Balance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let client of filteredClients(); let i = index">
                <td>{{ i + 1 }}</td>
                <td>
                  <div class="client-cell">
                    <div class="client-av">{{ client.name ? client.name[0].toUpperCase() : 'C' }}</div>
                    <div>
                      <div class="client-name">{{ client.name }}</div>
                    </div>
                  </div>
                </td>
                <td style="color:var(--text-2);">{{ client.email }}</td>
                <td><span class="badge badge-v">{{ client.deals_count || 0 }} deals</span></td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ (client.total_paid || 0) | number:'1.2-2' }} EGP</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ (client.outstanding_balance || 0) | number:'1.2-2' }} EGP</td>
                <td>
                  <button class="btn-action primary" (click)="openClientDetailsInNewTab(client.id)" title="Open full client record">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Full Profile
                  </button>
                </td>
              </tr>
              <tr *ngIf="filteredClients().length === 0">
                <td colspan="7" style="text-align:center; padding:36px; color:var(--text-2);">No clients match search query.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Modal: Add New Client -->
      <div class="crm-modal-backdrop" *ngIf="showAddModal">
        <div class="crm-modal-card glass-panel">
          <div class="modal-header">
            <h3><i class="fa-solid fa-user-plus" style="color:var(--violet-light);"></i> Add New Client</h3>
            <button class="close-btn" (click)="closeAddModal()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="clientForm" (ngSubmit)="saveClient()">
            <div style="padding:20px 24px; display:flex; flex-direction:column; gap:14px;">
              <div class="form-group">
                <label>Full Name <span class="required">*</span></label>
                <input type="text" formControlName="name" placeholder="e.g. Acme Corporation" />
              </div>

              <div class="form-group">
                <label>Email Address <span class="required">*</span></label>
                <input type="email" formControlName="email" placeholder="client@example.com" />
              </div>

              <div class="form-group">
                <label>Default Password <span class="required">*</span></label>
                <input type="password" formControlName="password" placeholder="••••••••" />
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="closeAddModal()">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="clientForm.invalid || loading">
                {{ loading ? 'Saving...' : 'Save Client' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }
    .crm-module-container { padding: 28px 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }
    .module-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap; }
    .module-header h2 { font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: -0.3px; display: flex; align-items: center; gap: 10px; }
    .subtitle { color: var(--text-2); font-size: 0.85rem; margin-top: 4px; }
    .filters-bar { padding: 14px 18px; margin-bottom: 20px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); display: flex; align-items: center; gap: 12px; }
    .search-field { display: flex; align-items: center; gap: 10px; background: var(--bg-input); padding: 9px 14px; border-radius: var(--r); border: 1px solid var(--border); min-width: 260px; flex: 1; max-width: 400px; transition: border-color 0.2s; }
    .search-field:focus-within { border-color: var(--violet); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .search-field i { color: var(--text-2); font-size: 0.9rem; }
    .search-field input { background: transparent; border: none; outline: none; color: #fff; width: 100%; font-family: inherit; font-size: 0.88rem; }
    .search-field input::placeholder { color: var(--text-3); }
    .table-card { padding: 0; overflow: hidden; border-radius: var(--r-lg); background: var(--bg-card); border: 1px solid var(--border); }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: left; direction: ltr; }
    .crm-table th { text-align: left; padding: 12px 16px; border-bottom: 1px solid var(--border); color: var(--text-2); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; background: rgba(0,0,0,0.15); white-space: nowrap; }
    .crm-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: #fff; vertical-align: middle; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
    .client-cell { display: flex; align-items: center; gap: 10px; }
    .client-av { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg, var(--violet), var(--teal)); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: #fff; flex-shrink: 0; }
    .client-name { font-weight: 700; color: #fff; }
    .btn-action { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); padding: 6px 12px; border-radius: var(--r); font-size: 0.76rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-action:hover { background: rgba(255,255,255,0.08); color: #fff; }
    .btn-action.primary { color: var(--violet-light); background: var(--violet-soft); border-color: rgba(124,58,237,0.2); }
    .btn-action.primary:hover { background: rgba(124,58,237,0.22); }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 20px; }
    .crm-modal-card { width: 100%; max-width: 480px; background: #10101e; border: 1px solid var(--border); border-radius: var(--r-xl); box-shadow: 0 24px 80px rgba(0,0,0,0.7); animation: modalIn 0.22s var(--ease); }
    @keyframes modalIn { from { opacity:0; transform: translateY(16px) scale(0.97); } to { opacity:1; transform:none; } }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid var(--border); }
    .modal-header h3 { font-size: 1.05rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 9px; }
    .close-btn { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); font-size: 0.9rem; cursor: pointer; width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
    .close-btn:hover { background: var(--rose-soft); color: var(--rose-light); border-color: rgba(225,29,72,0.2); }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: #fff; outline: none; font-family: inherit; font-size: 0.88rem; transition: all 0.2s; }
    .form-group input:focus { border-color: var(--violet); background: rgba(124,58,237,0.06); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 16px 24px; border-top: 1px solid var(--border); }
    .required { color: var(--rose-light); }
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
