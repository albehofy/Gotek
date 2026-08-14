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
  selector: 'app-finance-dashboard',
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
    <!-- Access Denied for Client Role -->
    <div class="access-denied-shell" *ngIf="isClient()" style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:70vh; text-align:center; gap:16px; direction:rtl; padding:30px;">
      <i class="fa-solid fa-shield-halved" style="font-size:3.5rem; color:var(--rose-light, #f43f5e);"></i>
      <h2 style="color:var(--text, #fff); font-weight:900; font-size:1.4rem; margin:0;">غير مسموح بفتح الإدارة والمالية العامة</h2>
      <p style="color:var(--text-2, #94a3b8); font-size:0.9rem; max-width:450px; margin:0;">هذه الصفحة خاصة بحسابات وإدارة الوكالة فقط ولا تتاح لحسابات العملاء.</p>
      <button class="btn btn-primary" (click)="redirectToDashboard()" style="padding:10px 24px; border-radius:12px; font-weight:700; cursor:pointer; background:linear-gradient(135deg, #6366f1, #4f46e5); color:#fff; border:none;">
        <i class="fa-solid fa-arrow-right"></i> الرجوع للوحة التحكم
      </button>
    </div>

    <div class="crm-module-container" *ngIf="!isClient()">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-chart-line" style="color:var(--emerald-light);"></i> المالية والحسابات العامة</h2>
          <p class="subtitle">سجل العمليات المالية، المصروفات، العهد المالية، توزيع أرباح الشركاء، المرتبات والأصول</p>
        </div>

        <div class="header-actions">
          <button class="btn btn-primary" (click)="openAddLedgerModal()">
            <i class="fa-solid fa-plus"></i> تسجيل معاملة مالية
          </button>
        </div>
      </div>

      <!-- Navigation Sub-Tabs -->
      <div class="finance-tabs-nav glass-panel">
        <button [class.active]="activeTab === 'summary'" (click)="activeTab = 'summary'"><i class="fa-solid fa-chart-line"></i> الملخص المالي</button>
        <button [class.active]="activeTab === 'ledger'" (click)="activeTab = 'ledger'"><i class="fa-solid fa-book"></i> دفتر الحسابات</button>
        <button [class.active]="activeTab === 'custody'" (click)="activeTab = 'custody'"><i class="fa-solid fa-hand-holding-dollar"></i> عهدة الموظفين</button>
        <button [class.active]="activeTab === 'partners'" (click)="activeTab = 'partners'"><i class="fa-solid fa-users-rectangle"></i> أرباح الشركاء</button>
        <button [class.active]="activeTab === 'payroll'" (click)="activeTab = 'payroll'"><i class="fa-solid fa-money-check-dollar"></i> المرتبات المستحقة</button>
        <button [class.active]="activeTab === 'assets'" (click)="activeTab = 'assets'"><i class="fa-solid fa-vault"></i> الأصول ورأس المال</button>
      </div>

      <!-- TAB 1: SUMMARY -->
      <div class="tab-content" *ngIf="activeTab === 'summary'">
        <div class="metrics-grid">
          <div class="metric-card glass-panel">
            <span class="label">إجمالي الإيرادات والدخل</span>
            <h3 class="value" style="color:var(--emerald-light);">{{ summary.total_income | number:'1.2-2' }} ج.م</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">إجمالي المصروفات</span>
            <h3 class="value" style="color:var(--rose-light);">{{ summary.total_expenses | number:'1.2-2' }} ج.م</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">صافي السيولة النقدية</span>
            <h3 class="value" style="color:var(--text);">{{ summary.net_balance | number:'1.2-2' }} ج.م</h3>
          </div>

          <div class="metric-card glass-panel highlight-orange">
            <span class="label">رأس مال الشركة وااحتياطي الأصول</span>
            <h3 class="value" style="color:var(--violet-light);">{{ summary.company_capital | number:'1.2-2' }} ج.م</h3>
            <small style="color:var(--text-2);">الأصول الثابتة: {{ summary.total_fixed_assets | number:'1.2-2' }} ج.م</small>
          </div>
        </div>

        <!-- Client Outstanding Balances Table -->
        <div class="section-card glass-panel margin-top">
          <h3 style="font-size:1rem; font-weight:700; color:var(--text); display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-file-invoice-dollar" style="color:var(--amber-light);"></i> أرصدة العملاء المستحقة</h3>
          <div class="table-responsive" style="margin-top:14px;">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>العميل</th>
                  <th>عدد الصفقات</th>
                  <th>إجمالي الفواتير</th>
                  <th>المحصل (المدفوع)</th>
                  <th>الرصيد المستحق (المتبقي)</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of clientBalances">
                  <td style="font-weight:700; color:var(--text);">{{ item.client_name }}</td>
                  <td>{{ item.deals_count }} صفقات</td>
                  <td>{{ item.total_billed | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ item.total_paid | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ item.outstanding_balance | number:'1.2-2' }} ج.م</td>
                </tr>
                <tr *ngIf="clientBalances.length === 0">
                  <td colspan="5">
                    <div class="empty-state">
                      <div class="empty-state-icon"><i class="fa-solid fa-receipt"></i></div>
                      <div class="empty-state-title">لا توجد أرصدة للعملاء</div>
                      <div class="empty-state-desc">لا توجد أرصدة نشطة مسجلة للعملاء في الدفتر المالي.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination Bar for Client Balances -->
          <div class="table-pagination-bar" *ngIf="clientBalances.length > 0">
            <div class="pagination-info-group">
              <div class="pagination-info">
                عرض {{ (clientBalancesPage - 1) * pageSize + 1 }} إلى {{ clientBalancesPage * pageSize > totalClientBalancesRecords ? totalClientBalancesRecords : clientBalancesPage * pageSize }} من أصل {{ totalClientBalancesRecords }} رصيد
              </div>
              <div class="pagination-per-page">
                <span>عرض</span>
                <select [(ngModel)]="pageSize" (change)="onClientBalancesPerPageChange()" class="pg-select">
                  <option [ngValue]="5">5</option>
                  <option [ngValue]="10">10</option>
                  <option [ngValue]="25">25</option>
                  <option [ngValue]="50">50</option>
                </select>
                <span>صفوف</span>
              </div>
            </div>
            <div class="pagination-controls">
              <button class="pg-btn" [disabled]="clientBalancesPage === 1" (click)="changeClientBalancesPage(clientBalancesPage - 1)">
                <i class="fa-solid fa-chevron-right"></i> السابق
              </button>
              <button
                *ngFor="let p of clientBalancesPageNumbers"
                class="pg-num-btn"
                [class.active]="p === clientBalancesPage"
                (click)="changeClientBalancesPage(p)"
              >
                {{ p }}
              </button>
              <button class="pg-btn" [disabled]="clientBalancesPage * pageSize >= totalClientBalancesRecords" (click)="changeClientBalancesPage(clientBalancesPage + 1)">
                التالي <i class="fa-solid fa-chevron-left"></i>
              </button>
            </div>
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
                  <th>التاريخ</th>
                  <th>نوع الحركة</th>
                  <th>التصنيف</th>
                  <th>طريقة الدفع</th>
                  <th>المبلغ (ج.م)</th>
                  <th>الوصف والبيان</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let entry of ledgerEntries">
                  <td style="color:var(--text-2);">{{ entry.date }}</td>
                  <td><span class="badge" [ngClass]="entry.type === 'income' ? 'badge-e' : 'badge-r'">{{ entry.type === 'income' ? 'إيراد' : 'مصروف' }}</span></td>
                  <td>{{ entry.category?.name_ar || entry.category?.name_en || 'عام' }}</td>
                  <td><span class="method-badge">{{ getPaymentMethodLabel(entry.payment_method) }}</span></td>
                  <td style="font-weight:700;" [ngClass]="entry.type === 'income' ? 'text-success' : 'text-danger'">
                    {{ entry.type === 'income' ? '+' : '-' }}{{ entry.amount | number:'1.2-2' }} ج.م
                  </td>
                  <td style="color:var(--text-2);">{{ entry.description }}</td>
                </tr>
                <tr *ngIf="ledgerEntries.length === 0">
                  <td colspan="6">
                    <div class="empty-state">
                      <div class="empty-state-icon"><i class="fa-solid fa-folder-open"></i></div>
                      <div class="empty-state-title">لا توجد قيود مالية</div>
                      <div class="empty-state-desc">سجل أول حركة مصروفات أو إيرادات في النظام.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination Bar for Ledger -->
          <div class="table-pagination-bar" *ngIf="ledgerEntries.length > 0">
            <div class="pagination-info-group">
              <div class="pagination-info">
                عرض {{ (ledgerPage - 1) * pageSize + 1 }} إلى {{ ledgerPage * pageSize > totalLedgerRecords ? totalLedgerRecords : ledgerPage * pageSize }} من أصل {{ totalLedgerRecords }} قيد
              </div>
              <div class="pagination-per-page">
                <span>عرض</span>
                <select [(ngModel)]="pageSize" (change)="onLedgerPerPageChange()" class="pg-select">
                  <option [ngValue]="5">5</option>
                  <option [ngValue]="10">10</option>
                  <option [ngValue]="25">25</option>
                  <option [ngValue]="50">50</option>
                </select>
                <span>صفوف</span>
              </div>
            </div>
            <div class="pagination-controls">
              <button class="pg-btn" [disabled]="ledgerPage === 1" (click)="changeLedgerPage(ledgerPage - 1)">
                <i class="fa-solid fa-chevron-right"></i> السابق
              </button>
              <button
                *ngFor="let p of ledgerPageNumbers"
                class="pg-num-btn"
                [class.active]="p === ledgerPage"
                (click)="changeLedgerPage(p)"
              >
                {{ p }}
              </button>
              <button class="pg-btn" [disabled]="ledgerPage * pageSize >= totalLedgerRecords" (click)="changeLedgerPage(ledgerPage + 1)">
                التالي <i class="fa-solid fa-chevron-left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 3: CUSTODY (بند العهدة) -->
      <div class="tab-content" *ngIf="activeTab === 'custody'">
        <div class="tab-header" style="display:flex; justify-space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:1.05rem; color:var(--text); font-weight:700;"><i class="fa-solid fa-hand-holding-dollar" style="color:var(--teal-light);"></i> حسابات عهدة الموظفين</h3>
          <button class="btn btn-primary" (click)="openIssueCustodyModal()">
            <i class="fa-solid fa-handshake-angle"></i> صرف عهدة جديدة
          </button>
        </div>
        <div class="table-card glass-panel">
          <div class="table-responsive">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>الموظف</th>
                  <th>العهدة المصروفة</th>
                  <th>المسترد</th>
                  <th>المنصرف الفعلي</th>
                  <th>الحالة</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let custody of custodyAccounts">
                  <td style="font-weight:700; color:var(--text);">{{ custody.employee?.name }}</td>
                  <td>{{ custody.issued_amount | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--emerald-light);">{{ custody.returned_amount | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ (custody.issued_amount - custody.returned_amount) | number:'1.2-2' }} ج.م</td>
                  <td><span class="badge badge-v">{{ custody.status }}</span></td>
                  <td>
                    <button *ngIf="custody.status === 'open'" class="action-icon-btn btn-emerald" (click)="openReturnCustodyModal(custody)" data-tooltip="تسوية وتصفية حساب العهدة" title="تسوية وتصفية حساب العهدة">
                      <i class="fa-solid fa-file-invoice-dollar"></i>
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
          <h3 style="font-size:1rem; color:var(--text); font-weight:700;"><i class="fa-solid fa-users-rectangle" style="color:var(--amber-light);"></i> تقرير توزيع أرباح الشركاء في المراكز والأقسام</h3>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>القسم / المركز</th>
                  <th>الشريك الخارجي</th>
                  <th>نسبة الشريك</th>
                  <th>إجمالي الإيرادات</th>
                  <th>إجمالي المصروفات</th>
                  <th>صافي الربح</th>
                  <th>حصة الشريك الصافية</th>
                  <th>حصة الوكالة الصافية</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let ps of partnerSplits">
                  <td style="font-weight:700; color:var(--text);">{{ ps.department_name }}</td>
                  <td style="color:var(--text-2);">{{ ps.partner_name }}</td>
                  <td><span class="badge badge-a">{{ ps.partner_percentage }}%</span></td>
                  <td style="color:var(--emerald-light);">{{ ps.total_income | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--rose-light);">{{ ps.total_expenses | number:'1.2-2' }} ج.م</td>
                  <td style="font-weight:700; color:var(--text);">{{ ps.net_profit | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--amber-light); font-weight:700;">{{ ps.partner_share | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ ps.company_share | number:'1.2-2' }} ج.م</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 5: PAYROLL DUE -->
      <div class="tab-content" *ngIf="activeTab === 'payroll'">
        <div class="section-card glass-panel">
          <h3 style="font-size:1rem; color:var(--text); font-weight:700;"><i class="fa-solid fa-money-check-dollar" style="color:var(--teal-light);"></i> ملخص المرتبات والمستحقات المالية للموظفين</h3>
          <p style="font-size:0.78rem; color:var(--text-2); margin-top:4px;">المعادلة: المستحق الصافي = الراتب الأساسي + أرباح المهام + العمولات - السلف - الخصومات + المكافآت</p>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>الموظف</th>
                  <th>نظام الدفع</th>
                  <th>الراتب الأساسي</th>
                  <th>أرباح المهام</th>
                  <th>العمولات</th>
                  <th>السلف (-)</th>
                  <th>الخصومات (-)</th>
                  <th>المكافآت (+)</th>
                  <th>الصافي المستحق</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of payrollSummary">
                  <td style="font-weight:700; color:var(--text);">{{ p.employee_name }}</td>
                  <td><span class="badge badge-v">{{ p.payment_type }}</span></td>
                  <td>{{ p.base_salary | number:'1.2-2' }}</td>
                  <td>{{ p.task_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light);">{{ p.commission_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.advances | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.deductions | number:'1.2-2' }}</td>
                  <td style="color:var(--emerald-light);">+{{ p.bonuses | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light); font-weight:800; font-size:0.95rem;">{{ p.net_payable | number:'1.2-2' }} ج.م</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add Ledger Entry -->
      <p-dialog [(visible)]="showLedgerModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="تسجيل قسط / حركة مالية جديدة" [style]="{ width: '92vw', maxWidth: '640px' }">
        <form [formGroup]="ledgerForm" (ngSubmit)="saveLedgerEntry()">
          <div class="form-grid" style="padding: 10px 0;">
            <div class="form-group">
              <label>نوع الحركة <span class="required">*</span></label>
              <p-dropdown
                formControlName="type"
                [appendTo]="'body'"
                [options]="[
                  { label: 'مصروفات', value: 'expense' },
                  { label: 'إيرادات / دخل', value: 'income' }
                ]"
                optionLabel="label"
                optionValue="value"
              ></p-dropdown>
            </div>
            <div class="form-group">
              <label>التصنيف <span class="required">*</span></label>
              <app-prime-picker-select
                formControlName="category_id"
                [items]="categories"
                optionLabel="name_ar"
                optionValue="id"
                placeholder="اختر التصنيف..."
                addNewLabel="+ إضافة تصنيف جديد"
                (addNew)="triggerAddCategory()"
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>المبلغ (ج.م) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" placeholder="500" />
            </div>
            <div class="form-group">
              <label>طريقة الدفع <span class="required">*</span></label>
              <p-dropdown
                formControlName="payment_method"
                [appendTo]="'body'"
                [options]="[
                  { label: 'كاش (الخزنة الرئيسية)', value: 'cash' },
                  { label: 'نقدي يدوي', value: 'cash_hand' },
                  { label: 'إنستا باي (InstaPay)', value: 'instapay' },
                  { label: 'تحويل بنكي', value: 'bank_transfer' }
                ]"
                optionLabel="label"
                optionValue="value"
              ></p-dropdown>
            </div>
            <div class="form-group">
              <label>القسم / المركز المرتبط</label>
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
              <input type="date" pInputText formControlName="date" />
            </div>
            <div class="form-group full-width">
              <label>الوصف والملاحظات</label>
              <textarea pTextarea formControlName="description" rows="2" placeholder="وصف الحركة المالية..."></textarea>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showLedgerModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="ledgerForm.invalid || loading">
              {{ loading ? 'جاري التسجيل...' : 'تسجيل القيد' }}
            </button>
          </div>
        </form>
      </p-dialog>
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
    .metric-card:hover { border-color: var(--border-v); box-shadow: var(--shadow-sm); }
    .metric-card .label { color: var(--text-2); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px; }
    .metric-card .value { font-size: 1.8rem; font-weight: 900; color: #fff; letter-spacing: -1px; line-height: 1; margin-bottom: 6px; }
    .highlight-orange { border-top: 3px solid var(--violet-light) !important; }
    .section-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 24px; }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 14px 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
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
  private router = inject(Router);

  activeTab = 'summary';
  summary: any = {};
  ledgerEntries: any[] = [];
  categories: any[] = [];
  clientBalances: any[] = [];
  custodyAccounts: any[] = [];
  partnerSplits: any[] = [];

  // Pagination
  clientBalancesPage = 1;
  totalClientBalancesRecords = 0;

  ledgerPage = 1;
  totalLedgerRecords = 0;

  pageSize = 5;

  get clientBalancesTotalPages(): number {
    return Math.ceil(this.totalClientBalancesRecords / this.pageSize) || 1;
  }

  get clientBalancesPageNumbers(): number[] {
    return Array.from({ length: this.clientBalancesTotalPages }, (_, i) => i + 1);
  }

  get ledgerTotalPages(): number {
    return Math.ceil(this.totalLedgerRecords / this.pageSize) || 1;
  }

  get ledgerPageNumbers(): number[] {
    return Array.from({ length: this.ledgerTotalPages }, (_, i) => i + 1);
  }

  loadLedger(): void {
    const params = {
      page: this.ledgerPage,
      per_page: this.pageSize
    };
    this.apiService.getLedger(params).subscribe(res => {
      if (res && res.data) {
        if (Array.isArray(res.data)) {
          this.ledgerEntries = res.data;
          this.totalLedgerRecords = res.total || this.ledgerEntries.length;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          this.ledgerEntries = res.data.data;
          this.totalLedgerRecords = res.data.total || this.ledgerEntries.length;
        }
      } else if (Array.isArray(res)) {
        this.ledgerEntries = res;
        this.totalLedgerRecords = res.length;
      }
    });
  }

  loadClientBalances(): void {
    const params = {
      page: this.clientBalancesPage,
      per_page: this.pageSize
    };
    this.apiService.getClientBalances(params).subscribe(res => {
      let raw: any[] = [];
      if (res && res.data) {
        if (Array.isArray(res.data)) {
          raw = res.data;
          this.totalClientBalancesRecords = res.total || raw.length;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          raw = res.data.data;
          this.totalClientBalancesRecords = res.data.total || raw.length;
        } else {
          raw = [res.data];
          this.totalClientBalancesRecords = raw.length;
        }
      } else if (Array.isArray(res)) {
        raw = res;
        this.totalClientBalancesRecords = raw.length;
      }
      this.clientBalances = raw;
    });
  }

  changeClientBalancesPage(p: number): void {
    if (p < 1 || p > this.clientBalancesTotalPages) return;
    this.clientBalancesPage = p;
    this.loadClientBalances();
  }

  onClientBalancesPerPageChange(): void {
    this.clientBalancesPage = 1;
    this.loadClientBalances();
  }

  changeLedgerPage(p: number): void {
    if (p < 1 || p > this.ledgerTotalPages) return;
    this.ledgerPage = p;
    this.loadLedger();
  }

  onLedgerPerPageChange(): void {
    this.ledgerPage = 1;
    this.loadLedger();
  }

  payrollSummary: any[] = [];
  departments: any[] = [];

  showLedgerModal = false;
  loading = false;
  ledgerForm!: FormGroup;

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

  redirectToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    if (this.isClient()) {
      this.redirectToDashboard();
      return;
    }
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
    this.loadLedger();
    this.loadClientBalances();
    this.apiService.getFinanceCategories().subscribe(res => this.categories = res.data || []);
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
