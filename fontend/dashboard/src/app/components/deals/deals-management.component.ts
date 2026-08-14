import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { PrimePickerSelectComponent } from '../shared/prime-picker-select/prime-picker-select.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-deals-management',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PrimePickerSelectComponent,
    DialogModule,
    InputTextModule,
    TextareaModule,
    DropdownModule
  ],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-handshake" style="color:var(--violet-light);"></i> الصفقات والعقود المالية</h2>
          <p class="subtitle">متابعة خط الصفقات، التواريخ، الدفعات المسددة والمتبقية، وتفاصيل المهام المكتملة والجارية</p>
        </div>
        <button class="btn btn-primary" (click)="openAddDealModal()">
          <i class="fa-solid fa-plus"></i> صفقة جديدة
        </button>
      </div>

      <!-- Deals Table -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>عنوان الصفقة والعقد</th>
                <th>العميل</th>
                <th>القسم الرئيسي</th>
                <th>مسؤول المبيعات والعمولة</th>
                <th>قيمة العقد الإجمالية</th>
                <th>المدفوع</th>
                <th>المتبقي</th>
                <th>الحالة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let deal of deals">
                <td style="font-weight:700; color:var(--text);">
                  <div class="deal-title-clickable" (click)="openDealDetails(deal)" title="انقر لفتح صفحة التفاصيل الشاملة للصفقة">
                    <i class="fa-solid fa-file-contract" style="color:var(--violet-light); margin-left:6px;"></i>
                    {{ deal.title }}
                  </div>
                  <small style="color:var(--text-2); font-weight:normal; font-size:0.75rem;" *ngIf="deal.agreed_scope">النطاق: {{ deal.agreed_scope | slice:0:55 }}{{ (deal.agreed_scope?.length || 0) > 55 ? '...' : '' }}</small>
                </td>
                <td style="color:var(--text-2); font-weight:500;">{{ deal.client?.name || 'عميل عام' }}</td>
                <td><span class="badge badge-t">{{ deal.department?.name || 'عام' }}</span></td>
                <td>
                  <div *ngIf="deal.sales_person" style="font-weight:600; color:var(--text);">{{ deal.sales_person.name }}</div>
                  <small style="color:var(--teal-light); font-weight:600;" *ngIf="deal.sales_commission_value > 0">
                    العمولة: {{ deal.sales_commission_value }} {{ deal.sales_commission_type === 'percentage' ? '%' : 'ج.م' }}
                  </small>
                  <div *ngIf="!deal.sales_person" style="color:var(--text-3);">-</div>
                </td>
                <td style="font-weight:700; color:var(--text);">{{ (deal.calculated_total || deal.total_price) | number:'1.2-2' }} ج.م</td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ (deal.calculated_paid || deal.paid_amount) | number:'1.2-2' }} ج.م</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ deal.remaining_balance | number:'1.2-2' }} ج.م</td>
                <td>
                  <span class="status-pill" [ngClass]="'status-' + (deal.status || 'pending')">
                    {{ getStatusLabel(deal.status) }}
                  </span>
                </td>
                <td>
                  <div class="actions-group">
                    <button class="action-icon-btn btn-violet" (click)="openDealDetails(deal)" title="فتح صفحة التفاصيل الشاملة">
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    <button class="action-icon-btn btn-emerald" *ngIf="!isClient()" (click)="openPaymentModal(deal)" title="تسجيل دفعة مالية جديدة">
                      <i class="fa-solid fa-money-bill-wave"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="deals.length === 0">
                <td colspan="9">
                  <div class="empty-state">
                    <div class="empty-state-icon"><i class="fa-solid fa-handshake-slash"></i></div>
                    <div class="empty-state-title">لا توجد صفقات مسجلة</div>
                    <div class="empty-state-desc">انقر على "صفقة جديدة" لإضافة عقد أو صفقة جديدة.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add Deal -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="إنشاء صفقة وعقد جديد" [style]="{ width: '92vw', maxWidth: '680px' }">
        <form [formGroup]="dealForm" (ngSubmit)="saveDeal()">
          <div class="form-grid" style="padding: 10px 0;">
            <div class="form-group full-width">
              <label>عنوان الصفقة <span class="required">*</span></label>
              <input type="text" pInputText formControlName="title" placeholder="مثال: الهوية البصرية والحملة الإعلانية" />
            </div>
            <div class="form-group">
              <label>العميل المستهدف</label>
              <app-prime-picker-select
                formControlName="client_id"
                [items]="clients"
                optionLabel="name"
                optionValue="id"
                placeholder="اختر العميل..."
                addNewLabel="+ إضافة عميل سريع"
                (addNew)="triggerQuickAddClient()"
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>القسم الرئيسي</label>
              <app-prime-picker-select
                formControlName="department_id"
                [items]="departments"
                optionLabel="name"
                optionValue="id"
                placeholder="اختر القسم..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>مسؤول المبيعات</label>
              <app-prime-picker-select
                formControlName="sales_person_id"
                [items]="employees"
                optionLabel="name"
                optionValue="id"
                placeholder="اختر الموظف..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>نوع العمولة</label>
              <p-dropdown
                formControlName="sales_commission_type"
                [appendTo]="'body'"
                [options]="[
                  { label: 'مبلغ ثابت (ج.م)', value: 'fixed' },
                  { label: 'نسبة مئوية (%)', value: 'percentage' }
                ]"
                optionLabel="label"
                optionValue="value"
              ></p-dropdown>
            </div>
            <div class="form-group">
              <label>قيمة العمولة</label>
              <input type="number" pInputText formControlName="sales_commission_value" placeholder="مثال: 500 أو 10" />
            </div>
            <div class="form-group">
              <label>قيمة العقد الإجمالية (ج.م) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="total_price" placeholder="12000" />
            </div>
            <div class="form-group full-width">
              <label>النطاق والمواصفات المتفق عليها</label>
              <textarea pTextarea formControlName="agreed_scope" rows="3" placeholder="تفاصيل العقد والمخرجات المطلوبة..."></textarea>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="closeAddModal()">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="dealForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : 'حفظ ونشر الصفقة' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Payment Modal -->
      <p-dialog [(visible)]="showPaymentModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'تسجيل دفعة / قسط: ' + (selectedDeal?.title || '')" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;" *ngIf="selectedDeal">
            <div class="form-group">
              <label>مبلغ الدفعة (ج.م) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" [placeholder]="selectedDeal.remaining_balance" />
              <small style="color:var(--text-2);">المتبقي في ذمة العميل: {{ selectedDeal.remaining_balance | number:'1.2-2' }} ج.م</small>
            </div>
            <div class="form-group">
              <label>تاريخ السداد</label>
              <input type="date" pInputText formControlName="payment_date" />
            </div>
            <div class="form-group">
              <label>طريقة التحصيل / الدفع <span class="required">*</span></label>
              <p-dropdown
                formControlName="payment_method"
                [appendTo]="'body'"
                [options]="[
                  { label: 'كاش (الخزينة المحلية)', value: 'cash' },
                  { label: 'نقداً يد بيد', value: 'cash_hand' },
                  { label: 'إنستا باي (InstaPay)', value: 'instapay' },
                  { label: 'تحويل بنكي', value: 'bank_transfer' }
                ]"
                optionLabel="label"
                optionValue="value"
              ></p-dropdown>
            </div>
            <div class="form-group">
              <label>رقم الإيصال / المرجع</label>
              <input type="text" pInputText formControlName="receipt_ref" placeholder="مثال: TXN-998811" />
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="closePaymentModal()">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="paymentForm.invalid || loading">
              {{ loading ? 'جاري المعالجة...' : 'تأكيد وتسجيل الدفعة' }}
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
    
    .deal-title-clickable { cursor: pointer; color: var(--text); transition: color 0.2s; font-size: 0.95rem; font-weight: 700; white-space: nowrap; display: inline-flex; align-items: center; }
    .deal-title-clickable:hover { color: var(--violet-light); text-decoration: underline; }

    .table-card { border-radius: 18px; overflow: hidden; background: var(--bg-card); border: 1px solid var(--border); box-shadow: var(--shadow-sm); }
    .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }

    .crm-table { width: 100%; min-width: 1050px; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 16px 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.88rem; color: var(--text); vertical-align: middle; white-space: nowrap; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
    
    .actions-group { display: flex; align-items: center; gap: 6px; }
    .action-icon-btn { width: 34px; height: 34px; border-radius: 10px; border: 1px solid transparent; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 0.88rem; }
    .btn-violet { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); border-color: rgba(99, 102, 241, 0.25); }
    .btn-violet:hover { background: var(--violet); color: #ffffff; }
    .btn-emerald { background: rgba(16, 185, 129, 0.12); color: #34d399; border-color: rgba(16, 185, 129, 0.25); }
    .btn-emerald:hover { background: #10b981; color: #ffffff; }

    /* Status Pills */
    .status-pill { font-size: 0.74rem; font-weight: 800; padding: 4px 12px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; white-space: nowrap; }
    .status-pending { background: rgba(245, 158, 11, 0.12); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); }
    .status-active { background: rgba(99, 102, 241, 0.12); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); }
    .status-completed { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .status-cancelled { background: rgba(244, 63, 94, 0.12); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.3); }

    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input, .form-group textarea { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: #fff; outline: none; font-family: inherit; font-size: 0.88rem; }
    .required { color: var(--rose-light); }

    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .full-width { grid-column: span 2; }

    /* Light Theme Overrides */
    :host-context(body.light-theme) .crm-module-container { background: #f8fafc !important; }
    :host-context(body.light-theme) .table-card { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .crm-table th { background: #f8fafc !important; color: #475569 !important; border-bottom-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .crm-table td { border-bottom-color: #f1f5f9 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .crm-table tr:hover td { background: #f8fafc !important; }
    :host-context(body.light-theme) .deal-title-clickable { color: #0f172a !important; }
    :host-context(body.light-theme) .deal-title-clickable:hover { color: #4f46e5 !important; }
    :host-context(body.light-theme) .status-pending { background: #fffbeb !important; color: #b45309 !important; border-color: #fde68a !important; }
    :host-context(body.light-theme) .status-active { background: #eef2ff !important; color: #4338ca !important; border-color: #c7d2fe !important; }
    :host-context(body.light-theme) .status-completed { background: #ecfdf5 !important; color: #047857 !important; border-color: #a7f3d0 !important; }
    :host-context(body.light-theme) .status-cancelled { background: #fff1f2 !important; color: #be123c !important; border-color: #fecdd3 !important; }
  `]
})
export class DealsManagementComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

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

  currentUser: any = null;

  isClient(): boolean {
    const userStr = localStorage.getItem('user');
    if (!userStr) return false;
    try {
      const user = JSON.parse(userStr);
      return user.role === 'client';
    } catch {
      return false;
    }
  }

  ngOnInit(): void {
    try {
      const uStr = localStorage.getItem('mediaglow_user');
      if (uStr) this.currentUser = JSON.parse(uStr);
    } catch(e){}
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
    this.apiService.getDeals().subscribe(res => {
      let list = res || [];
      if (this.currentUser?.role === 'client') {
        const u = this.currentUser;
        list = list.filter((d: any) =>
          d.client_id === u.id ||
          d.client?.id === u.id ||
          d.client?.email === u.email ||
          d.client_name === u.name ||
          d.client === u.name ||
          (typeof d.client === 'string' && d.client.toLowerCase().includes('client'))
        );
      }
      this.deals = list;
    });
    this.apiService.getUsers('client').subscribe(res => this.clients = res.data || []);
    this.apiService.getDepartments().subscribe(res => this.departments = res || []);
    this.apiService.getUsers().subscribe(res => this.employees = res.data || []);
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'active': return 'نشطة / جارية';
      case 'completed': return 'مكتملة';
      case 'cancelled': return 'ملغاة';
      case 'pending':
      default: return 'قيد الانتظار';
    }
  }

  openDealDetails(deal: any): void {
    this.router.navigate(['/deals', deal.id]);
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
