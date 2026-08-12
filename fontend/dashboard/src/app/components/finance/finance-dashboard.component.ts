import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { PrimePickerSelectComponent } from '../shared/prime-picker-select/prime-picker-select.component';

@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimePickerSelectComponent],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-chart-line" style="color:var(--emerald-light);"></i> Finance &amp; Accounting Ledger</h2>
          <p class="subtitle">Ledger entries, expenses, custody float, partner profit splits, payroll &amp; capital assets</p>
        </div>

        <div class="header-actions">
          <button class="btn btn-primary" (click)="openAddLedgerModal()">
            <i class="fa-solid fa-plus"></i> Record Ledger Entry
          </button>
        </div>
      </div>

      <!-- Navigation Sub-Tabs -->
      <div class="finance-tabs-nav glass-panel">
        <button [class.active]="activeTab === 'summary'" (click)="activeTab = 'summary'"><i class="fa-solid fa-chart-line"></i> Financial Summary</button>
        <button [class.active]="activeTab === 'ledger'" (click)="activeTab = 'ledger'"><i class="fa-solid fa-book"></i> General Ledger</button>
        <button [class.active]="activeTab === 'custody'" (click)="activeTab = 'custody'"><i class="fa-solid fa-hand-holding-dollar"></i> Custody Float</button>
        <button [class.active]="activeTab === 'partners'" (click)="activeTab = 'partners'"><i class="fa-solid fa-users-rectangle"></i> Partner Profit Splits</button>
        <button [class.active]="activeTab === 'payroll'" (click)="activeTab = 'payroll'"><i class="fa-solid fa-money-check-dollar"></i> Payroll Due</button>
        <button [class.active]="activeTab === 'assets'" (click)="activeTab = 'assets'"><i class="fa-solid fa-vault"></i> Assets &amp; Capital</button>
      </div>

      <!-- TAB 1: SUMMARY -->
      <div class="tab-content" *ngIf="activeTab === 'summary'">
        <div class="metrics-grid">
          <div class="metric-card glass-panel">
            <span class="label">Total Revenue &amp; Income</span>
            <h3 class="value" style="color:var(--emerald-light);">{{ summary.total_income | number:'1.2-2' }} EGP</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">Total Expenses &amp; Outflow</span>
            <h3 class="value" style="color:var(--rose-light);">{{ summary.total_expenses | number:'1.2-2' }} EGP</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">Net Balance (Liquidity)</span>
            <h3 class="value" style="color:#fff;">{{ summary.net_balance | number:'1.2-2' }} EGP</h3>
          </div>

          <div class="metric-card glass-panel highlight-orange">
            <span class="label">Company Capital &amp; Reserve</span>
            <h3 class="value" style="color:var(--violet-light);">{{ summary.company_capital | number:'1.2-2' }} EGP</h3>
            <small style="color:var(--text-2);">Fixed Assets: {{ summary.total_fixed_assets | number:'1.2-2' }} EGP</small>
          </div>
        </div>

        <!-- Client Outstanding Balances Table -->
        <div class="section-card glass-panel margin-top">
          <h3 style="font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-file-invoice-dollar" style="color:var(--amber-light);"></i> Client Outstanding Balances</h3>
          <div class="table-responsive" style="margin-top:14px;">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Deals Count</th>
                  <th>Total Billed</th>
                  <th>Collected</th>
                  <th>Outstanding Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of clientBalances">
                  <td style="font-weight:700; color:#fff;">{{ item.client_name }}</td>
                  <td>{{ item.deals_count }} deals</td>
                  <td>{{ item.total_billed | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ item.total_paid | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ item.outstanding_balance | number:'1.2-2' }} EGP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 2: LEDGER (المصروفات والإيرادات) -->
      <div class="tab-content" *ngIf="activeTab === 'ledger'">
        <div class="table-card glass-panel">
          <div class="table-responsive">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Payment Method</th>
                  <th>Amount (EGP)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let entry of ledgerEntries">
                  <td style="color:var(--text-2);">{{ entry.date }}</td>
                  <td><span class="badge" [ngClass]="entry.type === 'income' ? 'badge-e' : 'badge-r'">{{ entry.type }}</span></td>
                  <td>{{ entry.category?.name_ar || entry.category?.name_en || 'General' }}</td>
                  <td><span class="method-badge">{{ getPaymentMethodLabel(entry.payment_method) }}</span></td>
                  <td style="font-weight:700;" [ngClass]="entry.type === 'income' ? 'text-success' : 'text-danger'">
                    {{ entry.type === 'income' ? '+' : '-' }}{{ entry.amount | number:'1.2-2' }} EGP
                  </td>
                  <td style="color:var(--text-2);">{{ entry.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 3: CUSTODY (بند العهدة) -->
      <div class="tab-content" *ngIf="activeTab === 'custody'">
        <div class="tab-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:1.05rem; color:#fff; font-weight:700;"><i class="fa-solid fa-hand-holding-dollar" style="color:var(--teal-light);"></i> Employee Custody Float Accounts</h3>
          <button class="btn btn-primary" (click)="openIssueCustodyModal()">
            <i class="fa-solid fa-handshake-angle"></i> Issue New Custody
          </button>
        </div>
        <div class="table-card glass-panel">
          <div class="table-responsive">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Issued Float</th>
                  <th>Returned</th>
                  <th>Actual Outflow</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let custody of custodyAccounts">
                  <td style="font-weight:700; color:#fff;">{{ custody.employee?.name }}</td>
                  <td>{{ custody.issued_amount | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--emerald-light);">{{ custody.returned_amount | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ (custody.issued_amount - custody.returned_amount) | number:'1.2-2' }} EGP</td>
                  <td><span class="badge badge-v">{{ custody.status }}</span></td>
                  <td>
                    <button *ngIf="custody.status === 'open'" class="btn-action primary" (click)="openReturnCustodyModal(custody)">
                      Settle Custody
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 4: PARTNER SPLITS -->
      <div class="tab-content" *ngIf="activeTab === 'partners'">
        <div class="section-card glass-panel">
          <h3 style="font-size:1rem; color:#fff; font-weight:700;"><i class="fa-solid fa-users-rectangle" style="color:var(--amber-light);"></i> Department Partner Profit Distribution Report</h3>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Department / Center</th>
                  <th>External Partner</th>
                  <th>Partner Share</th>
                  <th>Total Income</th>
                  <th>Total Expenses</th>
                  <th>Net Profit</th>
                  <th>Partner Net Share</th>
                  <th>Company Net Share</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let ps of partnerSplits">
                  <td style="font-weight:700; color:#fff;">{{ ps.department_name }}</td>
                  <td style="color:var(--text-2);">{{ ps.partner_name }}</td>
                  <td><span class="badge badge-a">{{ ps.partner_percentage }}%</span></td>
                  <td style="color:var(--emerald-light);">{{ ps.total_income | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--rose-light);">{{ ps.total_expenses | number:'1.2-2' }} EGP</td>
                  <td style="font-weight:700; color:#fff;">{{ ps.net_profit | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--amber-light); font-weight:700;">{{ ps.partner_share | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ ps.company_share | number:'1.2-2' }} EGP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 5: PAYROLL DUE -->
      <div class="tab-content" *ngIf="activeTab === 'payroll'">
        <div class="section-card glass-panel">
          <h3 style="font-size:1rem; color:#fff; font-weight:700;"><i class="fa-solid fa-money-check-dollar" style="color:var(--teal-light);"></i> Employee Payroll Due Summary</h3>
          <p style="font-size:0.78rem; color:var(--text-2); margin-top:4px;">Formula: net_payable = base_salary + task_earnings + commission - advances - deductions + bonuses</p>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Payment Model</th>
                  <th>Base Salary</th>
                  <th>Task Earnings</th>
                  <th>Commissions</th>
                  <th>Advances (-)</th>
                  <th>Deductions (-)</th>
                  <th>Bonuses (+)</th>
                  <th>Net Payable</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of payrollSummary">
                  <td style="font-weight:700; color:#fff;">{{ p.employee_name }}</td>
                  <td><span class="badge badge-v">{{ p.payment_type }}</span></td>
                  <td>{{ p.base_salary | number:'1.2-2' }}</td>
                  <td>{{ p.task_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light);">{{ p.commission_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.advances | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.deductions | number:'1.2-2' }}</td>
                  <td style="color:var(--emerald-light);">+{{ p.bonuses | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light); font-weight:800; font-size:0.95rem;">{{ p.net_payable | number:'1.2-2' }} EGP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Add Ledger Entry Modal -->
      <div class="crm-modal-backdrop" *ngIf="showLedgerModal">
        <div class="crm-modal-card glass-panel wide-modal">
          <div class="modal-header">
            <h3><i class="fa-solid fa-plus" style="color:var(--violet-light);"></i> Record Ledger / Expense Entry</h3>
            <button class="close-btn" (click)="showLedgerModal = false"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="ledgerForm" (ngSubmit)="saveLedgerEntry()">
            <div class="form-grid">
              <div class="form-group">
                <label>Entry Type <span class="required">*</span></label>
                <select formControlName="type">
                  <option value="expense">Expense</option>
                  <option value="income">Income / Revenue</option>
                </select>
              </div>
              <div class="form-group">
                <label>Category <span class="required">*</span></label>
                <app-prime-picker-select
                  formControlName="category_id"
                  [items]="categories"
                  optionLabel="name_ar"
                  optionValue="id"
                  placeholder="Select category..."
                  addNewLabel="+ Add new category"
                  (addNew)="triggerAddCategory()"
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Amount (EGP) <span class="required">*</span></label>
                <input type="number" formControlName="amount" placeholder="500" />
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
                <label>Associated Department</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select department..."
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Entry Date</label>
                <input type="date" formControlName="date" />
              </div>
              <div class="form-group full-width">
                <label>Description &amp; Notes</label>
                <textarea formControlName="description" rows="2" placeholder="Ledger description..."></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="showLedgerModal = false">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="ledgerForm.invalid || loading">Record Entry</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }
    .crm-module-container { padding: 28px 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }
    .module-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; gap: 16px; flex-wrap: wrap; }
    .module-header h2 { font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: -0.3px; display: flex; align-items: center; gap: 10px; }
    .subtitle { color: var(--text-2); font-size: 0.85rem; margin-top: 4px; }
    .finance-tabs-nav { display: flex; gap: 6px; background: var(--bg-card); border: 1px solid var(--border); padding: 6px; border-radius: var(--r-lg); margin-bottom: 24px; overflow-x: auto; }
    .finance-tabs-nav button { background: transparent; border: 1px solid transparent; color: var(--text-2); padding: 9px 16px; border-radius: var(--r); font-weight: 600; cursor: pointer; font-size: 0.84rem; display: flex; align-items: center; gap: 7px; white-space: nowrap; transition: all 0.2s; font-family: inherit; }
    .finance-tabs-nav button:hover { background: rgba(255,255,255,0.04); color: #fff; }
    .finance-tabs-nav button.active { background: linear-gradient(135deg, var(--emerald), var(--teal)); color: #fff; box-shadow: 0 4px 16px var(--emerald-soft); border-color: transparent; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .metric-card { padding: 22px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); position: relative; overflow: hidden; transition: all 0.3s var(--ease); }
    .metric-card:hover { border-color: var(--border-v); transform: translateY(-3px); box-shadow: var(--shadow-sm); }
    .metric-card .label { color: var(--text-2); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px; }
    .metric-card .value { font-size: 1.8rem; font-weight: 900; color: #fff; letter-spacing: -1px; line-height: 1; margin-bottom: 6px; }
    .highlight-orange { border-top: 3px solid var(--violet-light) !important; }
    .section-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 24px; }
    .margin-top { margin-top: 20px; }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: left; direction: ltr; }
    .crm-table th { text-align: left; padding: 12px 16px; border-bottom: 1px solid var(--border); color: var(--text-2); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; background: rgba(0,0,0,0.15); white-space: nowrap; }
    .crm-table td { padding: 13px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: #fff; vertical-align: middle; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
    .method-badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); padding: 3px 8px; border-radius: 100px; font-size: 0.7rem; font-weight: 600; color: var(--text-2); }
    .btn-action { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); padding: 6px 12px; border-radius: var(--r); font-size: 0.76rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-action:hover { background: rgba(255,255,255,0.08); color: #fff; }
    .btn-action.primary { color: var(--violet-light); background: var(--violet-soft); border-color: rgba(124,58,237,0.2); }
    .btn-action.primary:hover { background: rgba(124,58,237,0.22); }
    .text-success { color: var(--emerald-light); font-weight: 700; }
    .text-danger { color: var(--rose-light); font-weight: 700; }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 20px; }
    .crm-modal-card { width: 100%; max-width: 540px; background: #10101e; border: 1px solid var(--border); border-radius: var(--r-xl); box-shadow: 0 24px 80px rgba(0,0,0,0.7); animation: modalIn 0.22s var(--ease); max-height: 90vh; overflow-y: auto; }
    .wide-modal { max-width: 700px; }
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
    .form-group input:focus, .form-group select:focus { border-color: var(--violet); background: rgba(124,58,237,0.06); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .form-group select option { background: #12121e; color: var(--text); }
    .modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 16px 24px; border-top: 1px solid var(--border); }
    .required { color: var(--rose-light); }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 1200; }
    .crm-modal-card { width: 100%; max-width: 520px; padding: 24px; background: #12121e; border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; }
    .wide-modal { max-width: 680px; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .full-width { grid-column: span 2; }
    .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .close-btn { background: transparent; border: none; color: #a0a0ab; font-size: 1.2rem; cursor: pointer; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; }
    .form-group label { display: block; margin-bottom: 6px; font-size: 0.85rem; color: #fff; }
    .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #fff; outline: none; }
  `]
})
export class FinanceDashboardComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  activeTab = 'summary';
  summary: any = {};
  ledgerEntries: any[] = [];
  categories: any[] = [];
  clientBalances: any[] = [];
  custodyAccounts: any[] = [];
  partnerSplits: any[] = [];
  payrollSummary: any[] = [];
  departments: any[] = [];

  showLedgerModal = false;
  loading = false;
  ledgerForm!: FormGroup;

  ngOnInit(): void {
    this.initForms();
    this.loadAllData();
  }

  initForms(): void {
    this.ledgerForm = this.fb.group({
      type: ['expense', Validators.required],
      category_id: [null],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      payment_method: ['cash', Validators.required],
      department_id: [null],
      date: [new Date().toISOString().split('T')[0], Validators.required],
      description: ['']
    });
  }

  loadAllData(): void {
    this.apiService.getFinanceSummary().subscribe(res => this.summary = res.summary || {});
    this.apiService.getLedger().subscribe(res => this.ledgerEntries = res.data?.data || res.data || []);
    this.apiService.getFinanceCategories().subscribe(res => this.categories = res.data || []);
    this.apiService.getClientBalances().subscribe(res => this.clientBalances = res.data || []);
    this.apiService.getCustodyAccounts().subscribe(res => this.custodyAccounts = res.data || []);
    this.apiService.getPartnerProfitSplits().subscribe(res => this.partnerSplits = res.data || []);
    this.apiService.getPayrollSummary().subscribe(res => this.payrollSummary = res.data || []);
    this.apiService.getDepartments().subscribe(res => this.departments = res || []);
  }

  getPaymentMethodLabel(method: string): string {
    switch (method) {
      case 'cash': return 'كاش (خزنة)';
      case 'cash_hand': return 'نقدي (يدوي)';
      case 'instapay': return 'انستا باي';
      case 'bank_transfer': return 'تحويل بنكي';
      default: return method;
    }
  }

  openAddLedgerModal(): void {
    this.ledgerForm.reset({ type: 'expense', payment_method: 'cash', amount: 0, date: new Date().toISOString().split('T')[0] });
    this.showLedgerModal = true;
  }

  triggerAddCategory(): void {
    const catName = prompt('أدخل اسم فئة المصروفات/الإيرادات الجديدة:');
    if (catName) {
      this.apiService.storeFinanceCategory({ name_ar: catName, type: this.ledgerForm.value.type }).subscribe(res => {
        if (res.data) {
          this.categories.push(res.data);
          this.ledgerForm.patchValue({ category_id: res.data.id });
        }
      });
    }
  }

  saveLedgerEntry(): void {
    if (this.ledgerForm.invalid) return;
    this.loading = true;

    this.apiService.storeLedgerEntry(this.ledgerForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showLedgerModal = false;
        this.loadAllData();
      },
      error: () => this.loading = false
    });
  }

  openIssueCustodyModal(): void {
    const empIdStr = prompt('أدخل رقم ID الموظف المستلم للعهدة:');
    const amountStr = prompt('أدخل قيمة مبلغ العهدة (EGP):');
    if (empIdStr && amountStr) {
      this.apiService.issueCustody({ employee_id: +empIdStr, issued_amount: +amountStr }).subscribe(() => {
        this.loadAllData();
      });
    }
  }

  openReturnCustodyModal(custody: any): void {
    const returnedStr = prompt(`أدخل المبلغ المتبقي المرجع من العهدة (العهدة المسلمة: ${custody.issued_amount} EGP):`);
    if (returnedStr !== null) {
      this.apiService.returnCustody(custody.id, { returned_amount: +returnedStr }).subscribe(() => {
        this.loadAllData();
      });
    }
  }
}
