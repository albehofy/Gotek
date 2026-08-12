import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { PrimePickerSelectComponent } from '../shared/prime-picker-select/prime-picker-select.component';

@Component({
  selector: 'app-deals-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimePickerSelectComponent],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-handshake" style="color:var(--violet-light);"></i> Deals &amp; Sales Contracts</h2>
          <p class="subtitle">Contract pipeline, sales commission attribution & installment tracking</p>
        </div>
        <button class="btn btn-primary" (click)="openAddDealModal()">
          <i class="fa-solid fa-plus"></i> New Deal
        </button>
      </div>

      <!-- Deals Table -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>Deal Title</th>
                <th>Client</th>
                <th>Department</th>
                <th>Sales Rep &amp; Commission</th>
                <th>Total Value</th>
                <th>Paid</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let deal of deals">
                <td style="font-weight:700; color:#fff;">
                  <div>{{ deal.title }}</div>
                  <small style="color:var(--text-2); font-weight:normal;" *ngIf="deal.agreed_scope">Scope: {{ deal.agreed_scope }}</small>
                </td>
                <td style="color:var(--text-2);">{{ deal.client?.name || 'General Client' }}</td>
                <td><span class="dept-badge">{{ deal.department?.name || 'General' }}</span></td>
                <td>
                  <div *ngIf="deal.sales_person" style="font-weight:600; color:#fff;">{{ deal.sales_person.name }}</div>
                  <small style="color:var(--teal-light);" *ngIf="deal.sales_commission_value > 0">
                    Commission: {{ deal.sales_commission_value }} {{ deal.sales_commission_type === 'percentage' ? '%' : 'EGP' }}
                  </small>
                  <div *ngIf="!deal.sales_person" style="color:var(--text-3);">-</div>
                </td>
                <td style="font-weight:700; color:#fff;">{{ deal.calculated_total | number:'1.2-2' }} EGP</td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ deal.calculated_paid | number:'1.2-2' }} EGP</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ deal.remaining_balance | number:'1.2-2' }} EGP</td>
                <td><span class="badge badge-v">{{ deal.status }}</span></td>
                <td>
                  <button class="btn-action primary" (click)="openPaymentModal(deal)" title="Record payment installment">
                    <i class="fa-solid fa-money-bill-wave"></i> Record Payment
                  </button>
                </td>
              </tr>
              <tr *ngIf="deals.length === 0">
                <td colspan="9" style="text-align:center; padding:36px; color:var(--text-2);">No active deals found.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Add Deal Modal -->
      <div class="crm-modal-backdrop" *ngIf="showAddModal">
        <div class="crm-modal-card glass-panel wide-modal">
          <div class="modal-header">
            <h3><i class="fa-solid fa-handshake" style="color:var(--violet-light);"></i> Create New Deal &amp; Contract</h3>
            <button class="close-btn" (click)="closeAddModal()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="dealForm" (ngSubmit)="saveDeal()">
            <div class="form-grid">
              <div class="form-group full-width">
                <label>Deal Title <span class="required">*</span></label>
                <input type="text" formControlName="title" placeholder="e.g. Brand Identity & Video Campaign" />
              </div>
              <div class="form-group">
                <label>Target Client</label>
                <app-prime-picker-select
                  formControlName="client_id"
                  [items]="clients"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select client..."
                  addNewLabel="+ Quick add client"
                  (addNew)="triggerQuickAddClient()"
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Primary Department</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select department..."
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Sales Representative</label>
                <app-prime-picker-select
                  formControlName="sales_person_id"
                  [items]="employees"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select sales rep..."
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Commission Type</label>
                <select formControlName="sales_commission_type">
                  <option value="fixed">Fixed Amount (EGP)</option>
                  <option value="percentage">Percentage (%)</option>
                </select>
              </div>
              <div class="form-group">
                <label>Commission Value</label>
                <input type="number" formControlName="sales_commission_value" placeholder="e.g. 500 or 10" />
              </div>
              <div class="form-group">
                <label>Total Contract Value (EGP) <span class="required">*</span></label>
                <input type="number" formControlName="total_price" placeholder="12000" />
              </div>
              <div class="form-group full-width">
                <label>Agreed Scope</label>
                <textarea formControlName="agreed_scope" rows="3" placeholder="Scope of work details..."></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="closeAddModal()">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="dealForm.invalid || loading">
                {{ loading ? 'Saving...' : 'Save & Publish Deal' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Payment Modal -->
      <div class="crm-modal-backdrop" *ngIf="showPaymentModal && selectedDeal">
        <div class="crm-modal-card glass-panel">
          <div class="modal-header">
            <h3><i class="fa-solid fa-money-bill-wave" style="color:var(--emerald-light);"></i> Record Payment: {{ selectedDeal.title }}</h3>
            <button class="close-btn" (click)="closePaymentModal()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
            <div style="padding:20px 24px; display:flex; flex-direction:column; gap:14px;">
              <div class="form-group">
                <label>Payment Amount (EGP) <span class="required">*</span></label>
                <input type="number" formControlName="amount" [placeholder]="selectedDeal.remaining_balance" />
                <small style="color:var(--text-2);">Outstanding Balance: {{ selectedDeal.remaining_balance | number:'1.2-2' }} EGP</small>
              </div>
              <div class="form-group">
                <label>Payment Date</label>
                <input type="date" formControlName="payment_date" />
              </div>
              <div class="form-group">
                <label>Payment Method <span class="required">*</span></label>
                <select formControlName="payment_method">
                  <option value="cash">Cash (Local Safe)</option>
                  <option value="cash_hand">Direct Cash-in-hand</option>
                  <option value="instapay">InstaPay</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>
              <div class="form-group">
                <label>Receipt / Reference Number</label>
                <input type="text" formControlName="receipt_ref" placeholder="e.g. TXN-998811" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="closePaymentModal()">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="paymentForm.invalid || loading">
                {{ loading ? 'Processing...' : 'Confirm Payment' }}
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
    .table-card { padding: 0; overflow: hidden; border-radius: var(--r-lg); background: var(--bg-card); border: 1px solid var(--border); }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: left; direction: ltr; }
    .crm-table th { text-align: left; padding: 12px 16px; border-bottom: 1px solid var(--border); color: var(--text-2); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; background: rgba(0,0,0,0.15); white-space: nowrap; }
    .crm-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: #fff; vertical-align: middle; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
    .dept-badge { background: var(--violet-soft); color: var(--violet-light); border: 1px solid rgba(124,58,237,0.2); padding: 3px 9px; border-radius: 100px; font-size: 0.68rem; font-weight: 700; }
    .btn-action { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); padding: 6px 12px; border-radius: var(--r); font-size: 0.76rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-action:hover { background: rgba(255,255,255,0.08); color: #fff; }
    .btn-action.primary { color: var(--emerald-light); background: var(--emerald-soft); border-color: rgba(5,150,105,0.2); }
    .btn-action.primary:hover { background: rgba(5,150,105,0.22); }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 20px; }
    .crm-modal-card { width: 100%; max-width: 520px; background: #10101e; border: 1px solid var(--border); border-radius: var(--r-xl); box-shadow: 0 24px 80px rgba(0,0,0,0.7); animation: modalIn 0.22s var(--ease); max-height: 90vh; overflow-y: auto; }
    .wide-modal { max-width: 680px; }
    @keyframes modalIn { from { opacity:0; transform: translateY(16px) scale(0.97); } to { opacity:1; transform:none; } }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid var(--border); }
    .modal-header h3 { font-size: 1.05rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 9px; }
    .close-btn { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); font-size: 0.9rem; cursor: pointer; width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
    .close-btn:hover { background: var(--rose-soft); color: var(--rose-light); border-color: rgba(225,29,72,0.2); }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; padding: 20px 24px; }
    .full-width { grid-column: span 2; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: #fff; outline: none; font-family: inherit; font-size: 0.88rem; transition: all 0.2s; }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--violet); background: rgba(124,58,237,0.06); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .form-group select option { background: #12121e; color: var(--text); }
    .modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 16px 24px; border-top: 1px solid var(--border); }
    .required { color: var(--rose-light); }
  `]
})
export class DealsManagementComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  deals: any[] = [];
  clients: any[] = [];
  departments: any[] = [];
  employees: any[] = [];

  showAddModal = false;
  showPaymentModal = false;
  selectedDeal: any = null;
  loading = false;

  dealForm!: FormGroup;
  paymentForm!: FormGroup;

  ngOnInit(): void {
    this.initForms();
    this.loadData();
  }

  initForms(): void {
    this.dealForm = this.fb.group({
      title: ['', Validators.required],
      client_id: [null],
      department_id: [null],
      sales_person_id: [null],
      sales_commission_type: ['fixed'],
      sales_commission_value: [0],
      total_price: [0, [Validators.required, Validators.min(0)]],
      agreed_scope: ['']
    });

    this.paymentForm = this.fb.group({
      amount: [0, [Validators.required, Validators.min(0.01)]],
      payment_date: [new Date().toISOString().split('T')[0], Validators.required],
      payment_method: ['cash', Validators.required],
      receipt_ref: ['']
    });
  }

  loadData(): void {
    this.apiService.getDeals().subscribe(res => this.deals = res || []);
    this.apiService.getUsers('client').subscribe(res => this.clients = res.data || []);
    this.apiService.getDepartments().subscribe(res => this.departments = res || []);
    this.apiService.getUsers().subscribe(res => this.employees = res.data || []);
  }

  openAddDealModal(): void {
    this.dealForm.reset({ sales_commission_type: 'fixed', sales_commission_value: 0, total_price: 0 });
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  triggerQuickAddClient(): void {
    const clientName = prompt('أدخل اسم العميل الجديد:');
    if (clientName) {
      const email = clientName.toLowerCase().replace(/\s+/g, '') + '@client.com';
      this.apiService.createUser({ name: clientName, email, password: 'password123', role: 'client' }).subscribe(res => {
        if (res.data) {
          this.clients.push(res.data);
          this.dealForm.patchValue({ client_id: res.data.id });
        }
      });
    }
  }

  saveDeal(): void {
    if (this.dealForm.invalid) return;
    this.loading = true;

    this.apiService.createDeal(this.dealForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.closeAddModal();
        this.loadData();
      },
      error: () => this.loading = false
    });
  }

  openPaymentModal(deal: any): void {
    this.selectedDeal = deal;
    this.paymentForm.reset({
      amount: deal.remaining_balance,
      payment_date: new Date().toISOString().split('T')[0],
      payment_method: 'cash'
    });
    this.showPaymentModal = true;
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    this.selectedDeal = null;
  }

  savePayment(): void {
    if (this.paymentForm.invalid || !this.selectedDeal) return;
    this.loading = true;

    const payload = {
      ...this.paymentForm.value,
      deal_id: this.selectedDeal.id,
      client_id: this.selectedDeal.client_id
    };

    this.apiService.storeClientPayment(payload).subscribe({
      next: () => {
        this.loading = false;
        this.closePaymentModal();
        this.loadData();
      },
      error: () => this.loading = false
    });
  }
}
