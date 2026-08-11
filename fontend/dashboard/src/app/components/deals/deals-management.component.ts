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
          <h2><i class="fa-solid fa-handshake text-orange"></i> إدارة الصفقات والعقود (Deals Flow & Sales)</h2>
          <p class="subtitle">إنشاء الصفقات، تحديد قسم المنشأ، العمولة البيعية، ومتابعة التحصيلات الأقساط</p>
        </div>
        <button class="btn btn-primary" (click)="openAddDealModal()">
          <i class="fa-solid fa-plus"></i> إنشاء صفقة جديدة
        </button>
      </div>

      <!-- Deals Table -->
      <div class="table-card glass-panel">
        <table class="crm-table">
          <thead>
            <tr>
              <th>عنوان الصفقة</th>
              <th>العميل</th>
              <th>القسم الأولي</th>
              <th>مندوب المبيعات والعمولة</th>
              <th>إجمالي الصفقة</th>
              <th>المحصل</th>
              <th>المتبقي</th>
              <th>الحالة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let deal of deals">
              <td class="font-bold text-white">
                <div>{{ deal.title }}</div>
                <small class="text-muted" *ngIf="deal.agreed_scope">نطاق العمل: {{ deal.agreed_scope }}</small>
              </td>
              <td>{{ deal.client?.name || 'عميل عام' }}</td>
              <td><span class="dept-badge">{{ deal.department?.name || 'General' }}</span></td>
              <td>
                <div *ngIf="deal.sales_person">{{ deal.sales_person.name }}</div>
                <small class="text-orange" *ngIf="deal.sales_commission_value > 0">
                  عمولة: {{ deal.sales_commission_value }} {{ deal.sales_commission_type === 'percentage' ? '%' : 'EGP' }}
                </small>
                <div *ngIf="!deal.sales_person" class="text-muted">-</div>
              </td>
              <td class="font-bold">{{ deal.calculated_total | number:'1.2-2' }} EGP</td>
              <td class="text-success">{{ deal.calculated_paid | number:'1.2-2' }} EGP</td>
              <td class="text-danger">{{ deal.remaining_balance | number:'1.2-2' }} EGP</td>
              <td><span class="badge" [ngClass]="deal.status">{{ deal.status }}</span></td>
              <td>
                <button class="btn-action primary" (click)="openPaymentModal(deal)" title="تسجيل دفعة جزئية / قسط">
                  <i class="fa-solid fa-money-bill-wave"></i> تسجيل دفعة
                </button>
              </td>
            </tr>
            <tr *ngIf="deals.length === 0">
              <td colspan="9" class="text-center py-4 text-muted">لا توجد صفقات حالية</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Add Deal Modal -->
      <div class="crm-modal-backdrop" *ngIf="showAddModal">
        <div class="crm-modal-card glass-panel wide-modal">
          <div class="modal-header">
            <h3><i class="fa-solid fa-handshake text-orange"></i> إنشاء صفقة وعقد جديد</h3>
            <button class="close-btn" (click)="closeAddModal()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="dealForm" (ngSubmit)="saveDeal()">
            <div class="form-grid">
              <div class="form-group full-width">
                <label>عنوان الصفقة <span class="required">*</span></label>
                <input type="text" formControlName="title" placeholder="مثال: حملة هوية بصرية وتصوير 20 ريلز" />
              </div>

              <!-- Client Picker with Inline Add -->
              <div class="form-group">
                <label>العميل المستهدف</label>
                <app-prime-picker-select
                  formControlName="client_id"
                  [items]="clients"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="اختر العميل..."
                  addNewLabel="+ إضافة عميل جديد inline"
                  (addNew)="triggerQuickAddClient()"
                ></app-prime-picker-select>
              </div>

              <!-- Primary Department Picker -->
              <div class="form-group">
                <label>القسم الرئيسي المسؤول</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="اختر القسم..."
                ></app-prime-picker-select>
              </div>

              <!-- Salesperson Picker -->
              <div class="form-group">
                <label>مسؤول المبيعات (Sales Attribution)</label>
                <app-prime-picker-select
                  formControlName="sales_person_id"
                  [items]="employees"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="اختر مسؤول المبيعات..."
                ></app-prime-picker-select>
              </div>

              <div class="form-group">
                <label>نوع العمولة البيعية</label>
                <select formControlName="sales_commission_type">
                  <option value="fixed">مبلغ ثابت (Fixed Amount)</option>
                  <option value="percentage">نسبة مئوية (%)</option>
                </select>
              </div>

              <div class="form-group">
                <label>قيمة العمولة</label>
                <input type="number" formControlName="sales_commission_value" placeholder="مثال: 500 أو 10" />
              </div>

              <div class="form-group">
                <label>القيمة الكلية المبدئية للصفقة (EGP) <span class="required">*</span></label>
                <input type="number" formControlName="total_price" placeholder="1200" />
              </div>

              <div class="form-group full-width">
                <label>نطاق العمل المتفق عليه (Agreed Scope)</label>
                <textarea formControlName="agreed_scope" rows="3" placeholder="مثال: 20 فيديو ريلز + 10 تصاميم سوشيال ميديا + إدارة الحملة"></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="closeAddModal()">إلغاء</button>
              <button type="submit" class="btn btn-primary" [disabled]="dealForm.invalid || loading">
                {{ loading ? 'جاري الحفظ...' : 'حفظ ونشر الصفقة' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Payment Modal -->
      <div class="crm-modal-backdrop" *ngIf="showPaymentModal && selectedDeal">
        <div class="crm-modal-card glass-panel">
          <div class="modal-header">
            <h3><i class="fa-solid fa-money-bill-wave text-orange"></i> تسجيل دفعة قسط: {{ selectedDeal.title }}</h3>
            <button class="close-btn" (click)="closePaymentModal()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
            <div class="form-group">
              <label>المبلغ المدفوع (EGP) <span class="required">*</span></label>
              <input type="number" formControlName="amount" [placeholder]="selectedDeal.remaining_balance" />
              <small class="text-muted">المتبقي المستحق: {{ selectedDeal.remaining_balance | number:'1.2-2' }} EGP</small>
            </div>

            <div class="form-group">
              <label>تاريخ السداد</label>
              <input type="date" formControlName="payment_date" />
            </div>

            <!-- 4 Payment Methods -->
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
              <label>رقم المرجع / الإيصال</label>
              <input type="text" formControlName="receipt_ref" placeholder="مثال: TXN-998811" />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="closePaymentModal()">إلغاء</button>
              <button type="submit" class="btn btn-primary" [disabled]="paymentForm.invalid || loading">
                {{ loading ? 'جاري التسجيل...' : 'تأكيد السداد' }}
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
    .table-card { padding: 0; overflow: hidden; border-radius: 16px; }
    .crm-table { width: 100%; border-collapse: collapse; text-align: right; }
    .crm-table th, .crm-table td { padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.9rem; }
    .crm-table th { background: rgba(255,255,255,0.03); color: #fff; font-weight: 700; }
    .dept-badge { background: rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; }
    .btn-action { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: #fff; padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
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
    .form-group label { display: block; margin-bottom: 6px; font-size: 0.85rem; color: #fff; }
    .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #fff; outline: none; }
    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; }
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
