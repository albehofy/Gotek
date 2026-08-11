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
          <h2><i class="fa-solid fa-calculator text-orange"></i> الإدارة المالية والحسابات (Finance & Accounting Ledger)</h2>
          <p class="subtitle">الحسابات، المصروفات العمومية، بند العهدة، المستحقات، الشركاء، ورأس مال الشركة</p>
        </div>

        <div class="header-actions">
          <button class="btn btn-primary" (click)="openAddLedgerModal()">
            <i class="fa-solid fa-plus"></i> تسجيل قيد مال / مصروف
          </button>
        </div>
      </div>

      <!-- Navigation Sub-Tabs -->
      <div class="finance-tabs-nav glass-panel">
        <button [class.active]="activeTab === 'summary'" (click)="activeTab = 'summary'"><i class="fa-solid fa-chart-line"></i> الملخص المالي</button>
        <button [class.active]="activeTab === 'ledger'" (click)="activeTab = 'ledger'"><i class="fa-solid fa-book"></i> دفتر الأستاذ (Ledger)</button>
        <button [class.active]="activeTab === 'custody'" (click)="activeTab = 'custody'"><i class="fa-solid fa-hand-holding-dollar"></i> بند العهدة (Custody)</button>
        <button [class.active]="activeTab === 'partners'" (click)="activeTab = 'partners'"><i class="fa-solid fa-users-rectangle"></i> أرباح الشركاء</button>
        <button [class.active]="activeTab === 'payroll'" (click)="activeTab = 'payroll'"><i class="fa-solid fa-money-check-dollar"></i> المرتبات المستحقة</button>
        <button [class.active]="activeTab === 'assets'" (click)="activeTab = 'assets'"><i class="fa-solid fa-vault"></i> الأصول ورأس المال</button>
      </div>

      <!-- TAB 1: SUMMARY -->
      <div class="tab-content" *ngIf="activeTab === 'summary'">
        <div class="metrics-grid">
          <div class="metric-card glass-panel">
            <span class="label">إجمالي التحصيلات والدخل</span>
            <h3 class="value text-success">{{ summary.total_income | number:'1.2-2' }} EGP</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">إجمالي المصروفات والنفقات</span>
            <h3 class="value text-danger">{{ summary.total_expenses | number:'1.2-2' }} EGP</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">صافي الرصيد المتبقي (السيولة)</span>
            <h3 class="value text-white">{{ summary.net_balance | number:'1.2-2' }} EGP</h3>
          </div>

          <div class="metric-card glass-panel highlight-orange">
            <span class="label">رأس المال الخاص بالشركة (Capital)</span>
            <h3 class="value text-orange">{{ summary.company_capital | number:'1.2-2' }} EGP</h3>
            <small class="text-muted">يشمل الأصول الثابتة ({{ summary.total_fixed_assets | number:'1.2-2' }} EGP)</small>
          </div>
        </div>

        <!-- Client Outstanding Balances Table -->
        <div class="section-card glass-panel margin-top">
          <h3><i class="fa-solid fa-file-invoice-dollar text-orange"></i> المبالغ المتبقية المستحقة على العملاء (Client Balances)</h3>
          <table class="crm-table">
            <thead>
              <tr>
                <th>العميل</th>
                <th>عدد الصفقات</th>
                <th>إجمالي القيمة</th>
                <th>المحصل</th>
                <th>المتبقي المستحق</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of clientBalances">
                <td class="font-bold text-white">{{ item.client_name }}</td>
                <td>{{ item.deals_count }} صفقات</td>
                <td>{{ item.total_billed | number:'1.2-2' }} EGP</td>
                <td class="text-success">{{ item.total_paid | number:'1.2-2' }} EGP</td>
                <td class="text-danger font-bold">{{ item.outstanding_balance | number:'1.2-2' }} EGP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 2: LEDGER (المصروفات والإيرادات) -->
      <div class="tab-content" *ngIf="activeTab === 'ledger'">
        <div class="table-card glass-panel">
          <table class="crm-table">
            <thead>
              <tr>
                <th>التاريخ</th>
                <th>النوع</th>
                <th>الفئة (Category)</th>
                <th>طريقة الدفع (Payment Method)</th>
                <th>المبلغ (EGP)</th>
                <th>الوصف</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let entry of ledgerEntries">
                <td>{{ entry.date }}</td>
                <td><span class="badge" [ngClass]="entry.type">{{ entry.type }}</span></td>
                <td>{{ entry.category?.name_ar || 'عام' }}</td>
                <td><span class="method-badge">{{ getPaymentMethodLabel(entry.payment_method) }}</span></td>
                <td class="font-bold" [ngClass]="entry.type === 'income' ? 'text-success' : 'text-danger'">
                  {{ entry.type === 'income' ? '+' : '-' }}{{ entry.amount | number:'1.2-2' }} EGP
                </td>
                <td>{{ entry.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 3: CUSTODY (بند العهدة) -->
      <div class="tab-content" *ngIf="activeTab === 'custody'">
        <div class="tab-header">
          <h3><i class="fa-solid fa-hand-holding-dollar text-orange"></i> إحكام سلف وعهد الموظفين (Custody Float Account)</h3>
          <button class="btn btn-primary" (click)="openIssueCustodyModal()">
            <i class="fa-solid fa-handshake-angle"></i> تسليم عهدة جديدة
          </button>
        </div>

        <div class="table-card glass-panel margin-top">
          <table class="crm-table">
            <thead>
              <tr>
                <th>الموظف المستلم</th>
                <th>العهدة المسلمة</th>
                <th>المرجع منها</th>
                <th>المصروف الفعلي (Derivation: Issued - Returned)</th>
                <th>الحالة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let custody of custodyAccounts">
                <td class="font-bold text-white">{{ custody.employee?.name }}</td>
                <td>{{ custody.issued_amount | number:'1.2-2' }} EGP</td>
                <td class="text-success">{{ custody.returned_amount | number:'1.2-2' }} EGP</td>
                <td class="text-danger font-bold">{{ (custody.issued_amount - custody.returned_amount) | number:'1.2-2' }} EGP</td>
                <td><span class="badge" [ngClass]="custody.status">{{ custody.status }}</span></td>
                <td>
                  <button *ngIf="custody.status === 'open'" class="btn-action primary" (click)="openReturnCustodyModal(custody)">
                    تسوية وإعادة عهدة
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 4: PARTNER SPLITS -->
      <div class="tab-content" *ngIf="activeTab === 'partners'">
        <div class="section-card glass-panel">
          <h3><i class="fa-solid fa-users-rectangle text-orange"></i> تقرير توزيع أرباح الأقسام بالشراكة</h3>
          <table class="crm-table margin-top">
            <thead>
              <tr>
                <th>القسم / المركز</th>
                <th>اسم الشريك الخارجي</th>
                <th>نسبة الشريك</th>
                <th>إجمالي الدخل</th>
                <th>إجمالي المصروفات</th>
                <th>صافي أرباح القسم</th>
                <th>حصة الشريك المستحقة</th>
                <th>حصة الشركة</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let ps of partnerSplits">
                <td class="font-bold text-white">{{ ps.department_name }}</td>
                <td>{{ ps.partner_name }}</td>
                <td>{{ ps.partner_percentage }}%</td>
                <td class="text-success">{{ ps.total_income | number:'1.2-2' }} EGP</td>
                <td class="text-danger">{{ ps.total_expenses | number:'1.2-2' }} EGP</td>
                <td class="font-bold">{{ ps.net_profit | number:'1.2-2' }} EGP</td>
                <td class="text-orange font-bold">{{ ps.partner_share | number:'1.2-2' }} EGP</td>
                <td class="text-success font-bold">{{ ps.company_share | number:'1.2-2' }} EGP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 5: PAYROLL DUE -->
      <div class="tab-content" *ngIf="activeTab === 'payroll'">
        <div class="section-card glass-panel">
          <h3><i class="fa-solid fa-money-check-dollar text-orange"></i> جدول المرتبات والمستحقات (Payroll Due - Hybrid Calculation)</h3>
          <p class="text-xs text-muted margin-bottom">الصيغة المعتمدة: net_payable = base_salary + task_earnings + commission_earnings - advances - deductions + bonuses</p>

          <table class="crm-table margin-top">
            <thead>
              <tr>
                <th>الموظف</th>
                <th>نوع نظام الدفع</th>
                <th>الراتب الأساسي</th>
                <th>مستحق المهام</th>
                <th>عمولة المبيعات</th>
                <th>السلف (خصم)</th>
                <th>الخصومات</th>
                <th>المكافآت والحوافز</th>
                <th>الصافي المستحق (Net Payable)</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of payrollSummary">
                <td class="font-bold text-white">{{ p.employee_name }}</td>
                <td><span class="type-pill">{{ p.payment_type }}</span></td>
                <td>{{ p.base_salary | number:'1.2-2' }}</td>
                <td>{{ p.task_earnings | number:'1.2-2' }}</td>
                <td>{{ p.commission_earnings | number:'1.2-2' }}</td>
                <td class="text-danger">-{{ p.advances | number:'1.2-2' }}</td>
                <td class="text-danger">-{{ p.deductions | number:'1.2-2' }}</td>
                <td class="text-success">+{{ p.bonuses | number:'1.2-2' }}</td>
                <td class="text-orange font-bold text-lg">{{ p.net_payable | number:'1.2-2' }} EGP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Add Ledger Entry Modal -->
      <div class="crm-modal-backdrop" *ngIf="showLedgerModal">
        <div class="crm-modal-card glass-panel wide-modal">
          <div class="modal-header">
            <h3><i class="fa-solid fa-plus text-orange"></i> تسجيل قيد / مصروف مالي</h3>
            <button class="close-btn" (click)="showLedgerModal = false"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="ledgerForm" (ngSubmit)="saveLedgerEntry()">
            <div class="form-grid">
              <div class="form-group">
                <label>نوع القيد <span class="required">*</span></label>
                <select formControlName="type">
                  <option value="expense">مصروف (Expense)</option>
                  <option value="income">إيراد / تحصيل (Income)</option>
                </select>
              </div>

              <div class="form-group">
                <label>فئة المصروف / الإيراد <span class="required">*</span></label>
                <app-prime-picker-select
                  formControlName="category_id"
                  [items]="categories"
                  optionLabel="name_ar"
                  optionValue="id"
                  placeholder="اختر الفئة..."
                  addNewLabel="+ إضافة فئة جديدة"
                  (addNew)="triggerAddCategory()"
                ></app-prime-picker-select>
              </div>

              <div class="form-group">
                <label>المبلغ (EGP) <span class="required">*</span></label>
                <input type="number" formControlName="amount" placeholder="500" />
              </div>

              <!-- 4 Payment Methods Selector -->
              <div class="form-group">
                <label>طريقة الدفع (Payment Method) <span class="required">*</span></label>
                <select formControlName="payment_method">
                  <option value="cash">كاش / الخزنة المحلية (Cash - Local Safe)</option>
                  <option value="cash_hand">نقدي / تسليم يدوي (Direct Cash-in-hand)</option>
                  <option value="instapay">انستا باي (Instapay)</option>
                  <option value="bank_transfer">تحويل بنكي / حساب بنك (Bank Transfer)</option>
                </select>
              </div>

              <div class="form-group">
                <label>القسم المنسوب له</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="اختر القسم..."
                ></app-prime-picker-select>
              </div>

              <div class="form-group">
                <label>تاريخ القيد</label>
                <input type="date" formControlName="date" />
              </div>

              <div class="form-group full-width">
                <label>الوصف والبيان</label>
                <textarea formControlName="description" rows="2" placeholder="بيان القيد المالي..."></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="showLedgerModal = false">إلغاء</button>
              <button type="submit" class="btn btn-primary" [disabled]="ledgerForm.invalid || loading">تسجيل القيد</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .crm-module-container { padding: 24px; }
    .module-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .subtitle { color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px; }
    .finance-tabs-nav { display: flex; gap: 8px; padding: 8px; border-radius: 16px; margin-bottom: 24px; overflow-x: auto; }
    .finance-tabs-nav button { background: transparent; border: none; color: var(--text-secondary); padding: 10px 18px; border-radius: 12px; font-weight: 600; cursor: pointer; font-size: 0.88rem; display: flex; align-items: center; gap: 8px; white-space: nowrap; transition: all 0.25s; }
    .finance-tabs-nav button.active { background: var(--orange); color: #fff; box-shadow: var(--shadow-orange); }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
    .metric-card { padding: 20px; text-align: right; }
    .metric-card .label { color: var(--text-secondary); font-size: 0.85rem; display: block; margin-bottom: 8px; }
    .metric-card .value { font-size: 1.6rem; font-weight: 800; }
    .highlight-orange { border-color: var(--orange); }
    .section-card { padding: 24px; border-radius: 16px; }
    .margin-top { margin-top: 24px; }
    .margin-bottom { margin-bottom: 12px; }
    .crm-table { width: 100%; border-collapse: collapse; text-align: right; }
    .crm-table th, .crm-table td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.88rem; }
    .crm-table th { background: rgba(255,255,255,0.03); color: #fff; }
    .method-badge { background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 10px; font-size: 0.78rem; }
    .type-pill { background: rgba(232,98,10,0.15); color: var(--orange-light); padding: 2px 8px; border-radius: 10px; font-size: 0.78rem; }
    .btn-action { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: #fff; padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; cursor: pointer; }
    .btn-action.primary:hover { background: var(--orange); border-color: var(--orange); }
    .text-orange { color: var(--orange); }
    .text-success { color: #10b981; }
    .text-danger { color: #ef4444; }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 1200; }
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
