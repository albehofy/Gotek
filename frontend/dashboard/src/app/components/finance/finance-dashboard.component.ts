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
import { DatePickerModule } from 'primeng/datepicker';
import { ToastService } from '../../services/toast.service';

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
    DropdownModule,
    DatePickerModule
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
      <!-- Print Only Official Header -->
      <div class="print-only-header">
        <div style="text-align:right;">
          <h2 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin:0;">شركة ميديا جلو للإعلانات والحلول الرقمية</h2>
          <p style="font-size:0.9rem; color:#475569; margin:4px 0 0 0;">التقرير المالي والحسابات الشاملة - {{ getActiveTabTitle() }}</p>
        </div>
        <div style="text-align:left; font-size:0.82rem; color:#475569;">
          <div>تاريخ الطباعة: {{ currentDate | date:'yyyy-MM-dd HH:mm' }}</div>
          <div>طُبع بواسطة: {{ currentUser?.name || 'مدير النظام' }}</div>
          <div *ngIf="filterFromDate || filterToDate">الفترة: {{ filterFromDate ? formatDatePayload(filterFromDate) : 'البداية' }} إلى {{ filterToDate ? formatDatePayload(filterToDate) : 'اليوم' }}</div>
        </div>
      </div>

      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-chart-line" style="color:var(--emerald-light);"></i> المالية والحسابات العامة</h2>
          <p class="subtitle">سجل العمليات المالية، المصروفات، العهد المالية، توزيع أرباح الشركاء، المرتبات والأصول</p>
        </div>

        <div class="header-actions no-print" style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <div class="quick-header-date-presets" style="display:flex; gap:6px; align-items:center;">
            <button type="button" class="hdr-date-chip" [class.active]="datePreset === 'today'" (click)="setDatePreset('today')">هذا اليوم</button>
            <button type="button" class="hdr-date-chip" [class.active]="datePreset === 'week'" (click)="setDatePreset('week')">هذا الأسبوع</button>
            <button type="button" class="hdr-date-chip" [class.active]="datePreset === 'month'" (click)="setDatePreset('month')">هذا الشهر</button>
            <button type="button" class="hdr-date-chip" [class.active]="datePreset === 'year'" (click)="setDatePreset('year')">هذه السنة</button>
          </div>

          <button type="button" class="btn btn-action primary" (click)="showFilterSidebar = true">
            <i class="fa-solid fa-sliders"></i> الفلترة والبحث المتقدم
            <span *ngIf="hasActiveFilters()" style="background:#f43f5e; color:#fff; font-size:0.7rem; padding:2px 6px; border-radius:100px; margin-right:4px; font-weight:800;">
              {{ activeFilterCount }}
            </span>
          </button>
          <button type="button" class="btn btn-action primary" (click)="exportToExcel()" title="تصدير بيانات الجدول المعروض حالياً إلى ملف Excel">
            <i class="fa-solid fa-file-excel" style="color:#10b981;"></i> تصدير إكسل Excel
          </button>
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
          <!-- Card 1: Revenue -->
          <div class="kpi-card kpi-emerald">
            <div class="kpi-card-head">
              <span class="kpi-label">إجمالي الإيرادات والدخل</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-arrow-trend-up"></i></div>
            </div>
            <div class="kpi-value text-emerald">{{ summary.total_income | number:'1.2-2' }} <small>ج.م</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-circle-check"></i> المحصل وإجمالي مبيعات الصفقات والخدمات</span>
            </div>
          </div>

          <!-- Card 2: Expenses -->
          <div class="kpi-card kpi-rose">
            <div class="kpi-card-head">
              <span class="kpi-label">إجمالي المصروفات</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-arrow-trend-down"></i></div>
            </div>
            <div class="kpi-value text-rose">{{ summary.total_expenses | number:'1.2-2' }} <small>ج.م</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-receipt"></i> مصروفات التشغيل والعهد والخدمات العامة</span>
            </div>
          </div>

          <!-- Card 3: Net Cashflow -->
          <div class="kpi-card kpi-teal">
            <div class="kpi-card-head">
              <span class="kpi-label">صافي السيولة النقدية</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-scale-balanced"></i></div>
            </div>
            <div class="kpi-value text-teal">{{ summary.net_balance | number:'1.2-2' }} <small>ج.م</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-wallet"></i> الرصيد الصافي (الإيرادات - المصروفات)</span>
            </div>
          </div>

          <!-- Card 4: Capital & Assets -->
          <div class="kpi-card kpi-violet">
            <div class="kpi-card-head">
              <span class="kpi-label">رأس المال واحتياطي الأصول</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-vault"></i></div>
            </div>
            <div class="kpi-value text-violet">{{ summary.company_capital | number:'1.2-2' }} <small>ج.م</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-boxes-packing"></i> الأصول الثابتة: <strong>{{ summary.total_fixed_assets | number:'1.2-2' }} ج.م</strong></span>
            </div>
          </div>

          <!-- Card 5: Outstanding Receivables (Owed to Company) -->
          <div class="kpi-card kpi-amber">
            <div class="kpi-card-head">
              <span class="kpi-label">المبالغ المستحقة للشركة بالخارج</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            </div>
            <div class="kpi-value text-amber">{{ summary.total_receivables | number:'1.2-2' }} <small>ج.م</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-clock-rotate-left"></i> آجل دفعات الصفقات والعقود المتبقية عند العملاء</span>
            </div>
          </div>

          <!-- Card 6: Obligations (Owed by Company) -->
          <div class="kpi-card kpi-coral">
            <div class="kpi-card-head">
              <span class="kpi-label">المستحقات والالتزامات على الشركة</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            </div>
            <div class="kpi-value text-coral">{{ summary.monthly_obligations | number:'1.2-2' }} <small>ج.م</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-user-group"></i> مرتبات + مهام ({{ summary.total_task_earnings | number:'1.2-2' }} ج.م) + عمولات ({{ summary.total_commissions | number:'1.2-2' }} ج.م)</span>
            </div>
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
        <div class="tab-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:20px;">
          <div>
            <h3 style="font-size:1.05rem; color:var(--text); font-weight:800; margin:0; display:flex; align-items:center; gap:8px;">
              <i class="fa-solid fa-hand-holding-dollar" style="color:var(--teal-light);"></i> حسابات عهدة الموظفين
            </h3>
            <p style="font-size:0.8rem; color:var(--text-2); margin-top:4px; margin-bottom:0;">
              متابعة وتسوية العهد المالية المباشرة والمسلمة لمدراء الأقسام والموظفين
            </p>
          </div>
          <button type="button" class="btn btn-action primary" (click)="openIssueCustodyModal()" style="padding:9px 18px; font-weight:700;">
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
                  <td><span class="badge" [ngClass]="getCustodyStatusClass(custody.status)">{{ getCustodyStatusLabel(custody.status) }}</span></td>
                  <td>
                    <button *ngIf="custody.status === 'open'" class="action-icon-btn btn-emerald" (click)="openReturnCustodyModal(custody)" data-tooltip="تسوية وتصفية حساب العهدة" title="تسوية وتصفية حساب العهدة">
                      <i class="fa-solid fa-file-invoice-dollar"></i>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="custodyAccounts.length === 0">
                  <td colspan="6">
                    <div class="empty-state" style="padding:28px 16px; text-align:center;">
                      <div class="empty-state-icon" style="font-size:1.6rem; color:var(--violet-light); margin-bottom:8px;"><i class="fa-solid fa-hand-holding-dollar"></i></div>
                      <div class="empty-state-title" style="font-size:0.92rem; font-weight:700; color:var(--text);">لا توجد عهد مالية مصروفة</div>
                      <div class="empty-state-desc" style="font-size:0.8rem; color:var(--text-2); margin-top:4px;">لم يتم تسجيل أية عهد مالية مصروفة لمدراء الأقسام أو الموظفين حالياً. انقر على "صرف عهدة جديدة" للبدء.</div>
                    </div>
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
                <tr *ngIf="partnerSplits.length === 0">
                  <td colspan="8">
                    <div class="empty-state" style="padding:28px 16px; text-align:center;">
                      <div class="empty-state-icon" style="font-size:1.6rem; color:var(--amber-light); margin-bottom:8px;"><i class="fa-solid fa-users-slash"></i></div>
                      <div class="empty-state-title" style="font-size:0.92rem; font-weight:700; color:var(--text);">لا توجد بيانات أرباح شركاء</div>
                      <div class="empty-state-desc" style="font-size:0.8rem; color:var(--text-2); margin-top:4px;">لا توجد صفقات أو شركاء خارجيين مرتبطين بأقسام مسجلة في التقرير الحالي.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 5: PAYROLL DUE & EMPLOYEE STATEMENT -->
      <div class="tab-content" *ngIf="activeTab === 'payroll'">
        <div class="section-card glass-panel">
          <h3 style="font-size:1rem; color:var(--text); font-weight:700;"><i class="fa-solid fa-money-check-dollar" style="color:var(--teal-light);"></i> ملخص المرتبات والمستحقات المالية للموظفين</h3>
          <p style="font-size:0.78rem; color:var(--text-2); margin-top:4px;">المعادلة: المستحق الصافي = الراتب الأساسي + أرباح المهام + العمولات - السلف - الخصومات + المكافآت</p>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>الموظف</th>
                  <th>القسم</th>
                  <th>نظام الدفع</th>
                  <th>الراتب الأساسي</th>
                  <th>أرباح المهام</th>
                  <th>العمولات</th>
                  <th>السلف (-)</th>
                  <th>الخصومات (-)</th>
                  <th>المكافآت (+)</th>
                  <th>الصافي المستحق</th>
                  <th class="no-print">إجراءات والكشف</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of payrollSummary">
                  <td style="font-weight:700; color:var(--text);">{{ p.employee_name }}</td>
                  <td style="color:var(--text-2);">{{ p.department_name }}</td>
                  <td><span class="badge badge-v">{{ getPaymentTypeLabel(p.payment_type) }}</span></td>
                  <td>{{ p.base_salary | number:'1.2-2' }}</td>
                  <td>{{ p.task_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light);">{{ p.commission_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.advances | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.deductions | number:'1.2-2' }}</td>
                  <td style="color:var(--emerald-light);">+{{ p.bonuses | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light); font-weight:800; font-size:0.95rem;">{{ p.net_payable | number:'1.2-2' }} ج.م</td>
                  <td class="no-print">
                    <button type="button" class="btn-action primary" (click)="selectEmployeeForStatement(p)" title="عرض كشف حساب وأعمال الموظف">
                      <i class="fa-solid fa-file-invoice-dollar"></i> كشف العمل والحساب
                    </button>
                  </td>
                </tr>
                <tr *ngIf="payrollSummary.length === 0">
                  <td colspan="11">
                    <div class="empty-state" style="padding:28px 16px; text-align:center;">
                      <div class="empty-state-icon" style="font-size:1.6rem; color:var(--teal-light); margin-bottom:8px;"><i class="fa-solid fa-money-check-dollar"></i></div>
                      <div class="empty-state-title" style="font-size:0.92rem; font-weight:700; color:var(--text);">لا توجد بيانات مرتبات أو استحقاقات</div>
                      <div class="empty-state-desc" style="font-size:0.8rem; color:var(--text-2); margin-top:4px;">لا توجد سجلات مرتبات أو استحقاقات منفذة في النطاق الزمني والفلتر المختار.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


      </div>

      <!-- TAB 6: FIXED ASSETS & CAPITAL -->
      <div class="tab-content" *ngIf="activeTab === 'assets'">
        <div class="section-card glass-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
            <div>
              <h3 style="font-size:1rem; color:var(--text); font-weight:700; margin:0;">
                <i class="fa-solid fa-vault" style="color:var(--violet-light); margin-left:6px;"></i> سجل الأصول الثابتة ورأس المال
              </h3>
              <p style="font-size:0.78rem; color:var(--text-2); margin-top:4px; margin-bottom:0;">
                سجل الأجهزة والمعدات والأصول المملوكة للشركة وتقييمها المالي.
              </p>
            </div>
            <button type="button" class="btn-action primary" (click)="openAddAssetModal()">
              <i class="fa-solid fa-plus"></i> إضافة أصل ثابت جديد
            </button>
          </div>

          <div class="table-responsive">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>اسم الأصل الثابت</th>
                  <th>القسم المستفيد</th>
                  <th>قيمة الأصل (ج.م)</th>
                  <th>تاريخ الشراء / الاستحواذ</th>
                  <th>التفاصيل والملاحظات</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let a of fixedAssets">
                  <td style="font-weight:700; color:var(--text);">{{ a.name }}</td>
                  <td style="color:var(--text-2);">{{ a.department?.name || 'عام / الشركة' }}</td>
                  <td style="color:var(--emerald-light); font-weight:800; font-size:0.95rem;">{{ a.value | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--text-2);">{{ a.purchase_date || 'غير محدد' }}</td>
                  <td style="color:var(--text-2); font-size:0.82rem;">{{ a.notes || '-' }}</td>
                </tr>
                <tr *ngIf="fixedAssets.length === 0">
                  <td colspan="5" style="text-align:center; padding:24px; color:var(--text-2);">
                    لا توجد أصول ثابتة مسجلة حالياً. انقر على "إضافة أصل ثابت جديد" لإضافة أصل.
                  </td>
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
              <app-prime-picker-select
                formControlName="type"
                [items]="ledgerTypes"
                optionLabel="label"
                optionValue="id"
                placeholder="اختر نوع الحركة..."
              ></app-prime-picker-select>
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
              <app-prime-picker-select
                formControlName="payment_method"
                [items]="paymentMethodsList"
                optionLabel="label"
                optionValue="id"
                placeholder="اختر طريقة الدفع..."
              ></app-prime-picker-select>
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
              <p-datepicker formControlName="date" dateFormat="yy-mm-dd" [showIcon]="true" [iconDisplay]="'input'" [appendTo]="'body'" placeholder="اختر تاريخ القيد..." styleClass="w-full"></p-datepicker>
            </div>
            <div class="form-group full-width">
              <label>الوصف والملاحظات</label>
              <textarea pTextarea formControlName="description" rows="2" placeholder="وصف الحركة المالية..."></textarea>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showLedgerModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="ledgerForm.invalid || loading">
              {{ loading ? 'جاري المعالجة...' : 'تأكيد وحفظ القيد' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Quick Add Category Modal -->
      <p-dialog [(visible)]="showCatModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="إضافة فئة مالية جديدة" [style]="{ width: '90vw', maxWidth: '420px' }">
        <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
          <div class="form-group">
            <label>اسم الفئة المالـية <span class="required">*</span></label>
            <input type="text" pInputText [(ngModel)]="catNameInput" placeholder="مثال: إعلانات ممولة أو أدوات مكتبية..." />
          </div>
        </div>
        <div class="dialog-footer-actions">
          <button type="button" class="btn-dialog-cancel" (click)="showCatModal = false">إلغاء</button>
          <button type="button" class="btn-dialog-submit" [disabled]="!catNameInput || !catNameInput.trim()" (click)="saveCategory()">حفظ الفئة</button>
        </div>
      </p-dialog>

      <!-- PrimeNG Dialog: Issue Custody Modal -->
      <p-dialog [(visible)]="showCustodyModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="صرف عهدة مالية لموظف" [style]="{ width: '90vw', maxWidth: '460px' }">
        <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
          <div class="form-group">
            <label>القسم المستهدف <span class="required">*</span></label>
            <app-prime-picker-select
              [(ngModel)]="custodyDeptId"
              (ngModelChange)="onCustodyDeptChange()"
              [items]="departments"
              optionLabel="name"
              optionValue="id"
              placeholder="اختر القسم أولاً..."
            ></app-prime-picker-select>
          </div>
          <div class="form-group" *ngIf="custodyDeptId">
            <label>الموظف / مدير القسم المستلم <span class="required">*</span></label>
            <app-prime-picker-select
              [(ngModel)]="custodyEmpId"
              [items]="filteredCustodyEmployees"
              optionLabel="displayName"
              optionValue="id"
              placeholder="اختر الموظف أو المشرف..."
            ></app-prime-picker-select>
          </div>
          <div class="form-group" *ngIf="custodyEmpId">
            <label>مبلغ العهدة المسلمة (ج.م) <span class="required">*</span></label>
            <input type="number" pInputText [(ngModel)]="custodyAmount" placeholder="0" />
          </div>
          <div class="form-group" *ngIf="custodyEmpId">
            <label>ملاحظات وبيان العهدة (اختياري)</label>
            <input type="text" pInputText [(ngModel)]="custodyNotes" placeholder="أدخل أية تفاصيل أو ملاحظات للعهدة..." />
          </div>
        </div>
        <div class="dialog-footer-actions">
          <button type="button" class="btn-dialog-cancel" (click)="showCustodyModal = false">إلغاء</button>
          <button type="button" class="btn-dialog-submit" [disabled]="!custodyEmpId || custodyAmount <= 0" (click)="saveIssueCustody()">صرف العهدة</button>
        </div>
      </p-dialog>

      <!-- PrimeNG Dialog: Return Custody Modal -->
      <p-dialog [(visible)]="showReturnCustodyModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="تسوية وتصفية عهدة مالية" [style]="{ width: '92vw', maxWidth: '500px' }">
        <div style="padding:10px 0; display:flex; flex-direction:column; gap:16px;" *ngIf="selectedCustody">
          
          <div style="background:rgba(99, 102, 241, 0.08); border:1px solid var(--border); border-radius:12px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <span style="font-size:0.88rem; color:var(--text-2);">الموظف: <strong style="color:var(--text);">{{ selectedCustody.employee?.name }}</strong></span>
            <span style="font-size:0.88rem; color:var(--text-2);">مبلغ العهدة الأصلي: <strong style="color:var(--violet-light);">{{ selectedCustody.issued_amount | number:'1.2-2' }} ج.م</strong></span>
          </div>

          <div class="form-group">
            <label>المبلغ المتبقي / المرجع للخزينة (ج.م) <span class="required">*</span></label>
            <input type="number" pInputText [(ngModel)]="returnedAmount" placeholder="0" />
            <small style="color:var(--rose-light); font-weight:600; margin-top:4px; display:block;" *ngIf="selectedCustody.issued_amount - returnedAmount > 0">
              <i class="fa-solid fa-calculator"></i> سيتم تسجيل مبلغ {{ (selectedCustody.issued_amount - returnedAmount) | number:'1.2-2' }} ج.م كمصروفات عهدة فعلية
            </small>
          </div>

          <div class="form-group">
            <label>تصنيف المصروفات الفعلي</label>
            <p-dropdown
              [(ngModel)]="returnCategoryId"
              [options]="categories"
              optionLabel="name_ar"
              optionValue="id"
              placeholder="اختر تصنيف المصروفات (اختياري)..."
              [appendTo]="'body'"
              [style]="{ width: '100%' }"
            ></p-dropdown>
          </div>

          <div class="form-group">
            <label>ملاحظات وبيان المصروفات (في أي البنود تم صرف العهدة) <span class="required">*</span></label>
            <textarea
              pTextarea
              rows="3"
              [(ngModel)]="returnNotes"
              placeholder="مثال: تم شراء أدوات مكتبية ومستلزمات تصوير وتأمين انتقالات..."
              style="width:100%; border-radius:10px; background:var(--bg-input); color:var(--text); border:1px solid var(--border); padding:10px; font-family:inherit; font-size:0.88rem;"
            ></textarea>
          </div>

        </div>
        <div class="dialog-footer-actions">
          <button type="button" class="btn-dialog-cancel" (click)="showReturnCustodyModal = false">إلغاء</button>
          <button type="button" class="btn-dialog-submit" (click)="saveReturnCustody()">تأكيد وإتمام التسوية</button>
        </div>
      </p-dialog>

      <!-- PrimeNG Dialog: Employee Statement & Performance Modal -->
      <p-dialog
        [(visible)]="showStatementModal"
        [modal]="true"
        [dismissableMask]="true"
        [appendTo]="'body'"
        [header]="'كشف حساب وتقرير أداء الموظف: ' + (selectedEmployeeStatement?.employee_name || '')"
        [style]="{ width: '92vw', maxWidth: '960px' }"
      >
        <div *ngIf="selectedEmployeeStatement" style="padding: 8px 0;">
          <!-- Employee Meta Subtitle -->
          <div style="background:rgba(99, 102, 241, 0.06); border:1px solid var(--border); border-radius:12px; padding:12px 16px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <h4 style="font-size:0.95rem; font-weight:800; color:var(--text); margin:0;">
                {{ selectedEmployeeStatement.employee_name }}
              </h4>
              <span style="font-size:0.8rem; color:var(--text-2);">
                القسم: <strong>{{ selectedEmployeeStatement.department_name }}</strong> | نظام الدفع: <span class="badge badge-v">{{ getPaymentTypeLabel(selectedEmployeeStatement.payment_type) }}</span>
              </span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-2);" *ngIf="filterFromDate || filterToDate">
              الفترة: من {{ filterFromDate ? formatDatePayload(filterFromDate) : 'بداية السجل' }} إلى {{ filterToDate ? formatDatePayload(filterToDate) : 'اليوم' }}
            </div>
          </div>

          <!-- KPI Cards for Employee Statement -->
          <div class="metrics-grid" style="grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); margin-bottom:24px;">
            <div class="kpi-card kpi-violet" style="min-height:120px; padding:16px;">
              <span class="kpi-label">الراتب الأساسي</span>
              <div class="kpi-value text-violet">{{ selectedEmployeeStatement.base_salary | number:'1.2-2' }} <small>ج.م</small></div>
            </div>

            <div class="kpi-card kpi-teal" style="min-height:120px; padding:16px;">
              <span class="kpi-label">أرباح المهام والإنتاج</span>
              <div class="kpi-value text-teal">+{{ selectedEmployeeStatement.task_earnings | number:'1.2-2' }} <small>ج.م</small></div>
              <small style="color:var(--text-2);">({{ selectedEmployeeStatement.tasks_count }} مهمة مكتملة)</small>
            </div>

            <div class="kpi-card kpi-emerald" style="min-height:120px; padding:16px;">
              <span class="kpi-label">العمولات والمبيعات</span>
              <div class="kpi-value text-emerald">+{{ selectedEmployeeStatement.commission_earnings | number:'1.2-2' }} <small>ج.م</small></div>
            </div>

            <div class="kpi-card kpi-rose" style="min-height:120px; padding:16px;">
              <span class="kpi-label">السلف والخصومات</span>
              <div class="kpi-value text-rose">-{{ (selectedEmployeeStatement.advances + selectedEmployeeStatement.deductions) | number:'1.2-2' }} <small>ج.م</small></div>
            </div>

            <div class="kpi-card kpi-amber" style="min-height:120px; padding:16px;">
              <span class="kpi-label">الصافي المستحق للموظف</span>
              <div class="kpi-value text-amber" style="font-size:1.6rem; font-weight:900;">{{ selectedEmployeeStatement.net_payable | number:'1.2-2' }} <small>ج.م</small></div>
            </div>
          </div>

          <!-- Work Log Table -->
          <h4 style="font-size:0.95rem; font-weight:800; color:var(--text); margin-bottom:14px; display:flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-list-check" style="color:var(--violet-light);"></i> سجل المهام والأعمال المنجزة خلال الفترة ({{ selectedEmployeeStatement.tasks_count }} مهمة)
          </h4>

          <div class="table-responsive" style="max-height: 340px; overflow-y: auto;">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>اسم المهمة / العمل</th>
                  <th>العقد / الصفقة التابعة</th>
                  <th>تاريخ الإنجاز</th>
                  <th>حالة المهمة</th>
                  <th>المقابل المالي للمهمة (ج.م)</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let t of selectedEmployeeStatement.tasks_list">
                  <td style="font-weight:700; color:var(--text);">{{ t.title }}</td>
                  <td style="color:var(--text-2);">{{ t.deal_title || 'عام' }}</td>
                  <td style="color:var(--text-2); font-size:0.82rem;">{{ t.date || 'تم حديثاً' }}</td>
                  <td><span class="badge badge-v" style="background:rgba(16,185,129,0.15); color:var(--emerald-light);">مكتمل ومستلم</span></td>
                  <td style="color:var(--teal-light); font-weight:700;">{{ t.price | number:'1.2-2' }} ج.م</td>
                </tr>
                <tr *ngIf="!selectedEmployeeStatement.tasks_list || selectedEmployeeStatement.tasks_list.length === 0">
                  <td colspan="5">
                    <div class="empty-state" style="padding:24px 16px; text-align:center;">
                      <div class="empty-state-icon" style="font-size:1.5rem; color:var(--violet-light); margin-bottom:6px;"><i class="fa-solid fa-clipboard-check"></i></div>
                      <div class="empty-state-title" style="font-size:0.9rem; font-weight:700; color:var(--text);">لا توجد مهام منجزة لهذا الموظف</div>
                      <div class="empty-state-desc" style="font-size:0.78rem; color:var(--text-2); margin-top:4px;">لم يقُم الموظف بإكمال مهام لها مقابل مالي في النطاق الزمني المحدد.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dialog-footer-actions" style="margin-top:20px;">
          <button type="button" class="btn-dialog-cancel" (click)="showStatementModal = false" style="display:flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-arrow-right"></i> الرجوع للصفحة الخاصة بالمرتبات
          </button>
        </div>
      </p-dialog>
      <p-dialog [(visible)]="showAssetModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="إضافة أصل ثابت جديد" [style]="{ width: '92vw', maxWidth: '520px' }">
        <form [formGroup]="assetForm" (ngSubmit)="saveAsset()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>اسم الأصل الثابت <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="مثال: أجهزة كمبيوتر قسم المونتاج أو سيارة نقل..." />
            </div>
            <div class="form-group">
              <label>قيمة الأصل (ج.م) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="value" placeholder="0" />
            </div>
            <div class="form-group">
              <label>القسم المستفيد</label>
              <app-prime-picker-select
                formControlName="department_id"
                [items]="departments"
                optionLabel="name"
                optionValue="id"
                placeholder="اختر القسم (اختياري)..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>تاريخ الشراء / الاستحواذ</label>
              <p-datepicker formControlName="purchase_date" [appendTo]="'body'" dateFormat="yy-mm-dd" [showIcon]="true" [iconDisplay]="'input'" placeholder="اختر تاريخ الشراء..." styleClass="w-full" [style]="{ width: '100%', display: 'block' }"></p-datepicker>
            </div>
            <div class="form-group">
              <label>ملاحظات وتفاصيل الأصل</label>
              <textarea pTextarea formControlName="notes" rows="3" placeholder="أدخل أية تفاصيل أو مواصفات إضافية للأصل..."></textarea>
            </div>
          </div>
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showAssetModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="assetForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : 'حفظ وتسجيل الأصل' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- Side Drawer Filter Panel Overlay -->
      <div class="filter-drawer-overlay" *ngIf="showFilterSidebar" (click)="showFilterSidebar = false"></div>
      <div class="filter-drawer-panel" [class.open]="showFilterSidebar">
        <div class="filter-drawer-header">
          <h3><i class="fa-solid fa-sliders" style="color:var(--violet-light);"></i> الفلترة والبحث المتقدم</h3>
          <button type="button" class="btn-close-drawer" (click)="showFilterSidebar = false">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div class="filter-drawer-body">
          <!-- Filter 1: Quick Search -->
          <div class="filter-field-group">
            <label><i class="fa-solid fa-magnifying-glass"></i> البحث بالكلمة المفتاحية</label>
            <input
              type="text"
              pInputText
              [(ngModel)]="filterSearch"
              (input)="applyFilters()"
              placeholder="ابحث بالاسم، الوصف، البيان، أو المعاملة..."
              class="w-full"
            />
          </div>

          <!-- Filter 2: Payment Method -->
          <div class="filter-field-group">
            <label><i class="fa-solid fa-wallet"></i> طريقة الدفع / المحفظة</label>
            <app-prime-picker-select
              [(ngModel)]="filterPaymentMethod"
              (ngModelChange)="applyFilters()"
              [items]="[
                { label: 'كافة طرق الدفع والمحافظ', value: '' },
                { label: 'كاش (الخزنة الرئيسية)', value: 'cash' },
                { label: 'نقدي يدوي', value: 'cash_hand' },
                { label: 'إنستا باي (InstaPay)', value: 'instapay' },
                { label: 'تحويل بنكي', value: 'bank_transfer' }
              ]"
              optionLabel="label"
              optionValue="value"
              placeholder="اختر طريقة الدفع..."
            ></app-prime-picker-select>
          </div>

          <!-- Filter 3: Department -->
          <div class="filter-field-group">
            <label><i class="fa-solid fa-building-user"></i> القسم المستهدف</label>
            <app-prime-picker-select
              [(ngModel)]="filterDepartmentId"
              (ngModelChange)="applyFilters()"
              [items]="departmentsWithAllOption"
              optionLabel="name"
              optionValue="id"
              placeholder="اختر القسم..."
            ></app-prime-picker-select>
          </div>

          <!-- Filter 4: Category -->
          <div class="filter-field-group">
            <label><i class="fa-solid fa-tags"></i> التصنيف المالي</label>
            <app-prime-picker-select
              [(ngModel)]="filterCategoryId"
              (ngModelChange)="applyFilters()"
              [items]="categoriesWithAllOption"
              optionLabel="name"
              optionValue="id"
              placeholder="اختر التصنيف..."
            ></app-prime-picker-select>
          </div>

          <!-- Fast Date Presets inside Filter Drawer -->
          <div class="filter-field-group full-width">
            <label><i class="fa-solid fa-clock-rotate-left"></i> اختصار الفلترة بالتاريخ</label>
            <div class="date-preset-chips" style="display:flex; flex-wrap:wrap; gap:8px; width:100%; margin-bottom:8px;">
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'today'" 
                (click)="setDatePreset('today')"
              >
                <i class="fa-regular fa-sun"></i> هذا اليوم
              </button>
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'week'" 
                (click)="setDatePreset('week')"
              >
                <i class="fa-solid fa-calendar-week"></i> هذا الأسبوع
              </button>
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'month'" 
                (click)="setDatePreset('month')"
              >
                <i class="fa-solid fa-calendar-days"></i> هذا الشهر
              </button>
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'year'" 
                (click)="setDatePreset('year')"
              >
                <i class="fa-solid fa-calendar"></i> هذه السنة
              </button>
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'custom'" 
                (click)="setDatePreset('custom')"
              >
                <i class="fa-solid fa-pen-to-square"></i> تاريخ مخصص
              </button>
            </div>
          </div>

          <!-- Filter 5 & 6: Date Range From & To (Side by Side Grid) -->
          <div class="date-range-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; width:100%;">
            <div class="filter-field-group">
              <label><i class="fa-regular fa-calendar-days"></i> من تاريخ</label>
              <p-datepicker
                [(ngModel)]="filterFromDate"
                (ngModelChange)="datePreset = 'custom'; applyFilters()"
                [appendTo]="'body'"
                dateFormat="yy-mm-dd"
                [showIcon]="true"
                [iconDisplay]="'input'"
                placeholder="اختر من تاريخ..."
                styleClass="w-full"
              ></p-datepicker>
            </div>

            <div class="filter-field-group">
              <label><i class="fa-regular fa-calendar-days"></i> إلى تاريخ</label>
              <p-datepicker
                [(ngModel)]="filterToDate"
                (ngModelChange)="datePreset = 'custom'; applyFilters()"
                [appendTo]="'body'"
                dateFormat="yy-mm-dd"
                [showIcon]="true"
                [iconDisplay]="'input'"
                placeholder="اختر إلى تاريخ..."
                styleClass="w-full"
              ></p-datepicker>
            </div>
          </div>
        </div>

        <div class="filter-drawer-footer">
          <button type="button" class="btn-reset-filters" (click)="resetFilters()">
            <i class="fa-solid fa-rotate-left"></i> إعادة ضبط الفلاتر
          </button>
          <button type="button" class="btn-apply-filters" (click)="showFilterSidebar = false">
            <i class="fa-solid fa-check"></i> تم لتطبيق الفلترة
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }
    .crm-module-container { padding: 28px 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }
    .module-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; gap: 16px; flex-wrap: wrap; }
    .module-header h2 { font-size: 1.4rem; font-weight: 800; color: var(--text); letter-spacing: -0.3px; display: flex; align-items: center; gap: 10px; }
    .subtitle { color: var(--text-2); font-size: 0.85rem; margin-top: 4px; }

    /* Unified Header Action Buttons Styling */
    .header-actions .btn,
    .header-actions .btn-action,
    .header-actions .btn-primary {
      height: 42px !important;
      padding: 0 18px !important;
      border-radius: 12px !important;
      font-size: 0.86rem !important;
      font-weight: 700 !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      cursor: pointer !important;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
      box-sizing: border-box !important;
      white-space: nowrap !important;
    }

    .header-actions .btn-primary {
      background: linear-gradient(135deg, #6366f1, #4f46e5) !important;
      color: #ffffff !important;
      border: 1px solid rgba(99, 102, 241, 0.4) !important;
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35) !important;
    }
    .header-actions .btn-primary:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5) !important;
    }

    .header-actions .btn-action {
      background: var(--bg-card, rgba(255, 255, 255, 0.04)) !important;
      color: var(--text, #f3f4f6) !important;
      border: 1px solid var(--border, rgba(99, 102, 241, 0.22)) !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
    }
    .header-actions .btn-action:hover {
      background: rgba(99, 102, 241, 0.12) !important;
      color: var(--violet-light, #a5b4fc) !important;
      border-color: rgba(99, 102, 241, 0.4) !important;
      transform: translateY(-2px) !important;
    }

    body.light-theme .header-actions .btn-action {
      background: #ffffff !important;
      color: #0f172a !important;
      border-color: #cbd5e1 !important;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06) !important;
    }
    body.light-theme .header-actions .btn-action:hover {
      background: #f8fafc !important;
      color: #4f46e5 !important;
      border-color: #94a3b8 !important;
    }
    .finance-tabs-nav { display: flex; gap: 6px; background: var(--bg-card); border: 1px solid var(--border); padding: 6px; border-radius: var(--r-lg); margin-bottom: 24px; overflow-x: auto; }
    .finance-tabs-nav button { background: transparent; border: 1px solid transparent; color: var(--text-2); padding: 9px 16px; border-radius: var(--r); font-weight: 600; cursor: pointer; font-size: 0.84rem; display: flex; align-items: center; gap: 7px; white-space: nowrap; transition: all 0.2s; font-family: inherit; }
    .finance-tabs-nav button:hover { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); }
    .finance-tabs-nav button.active { background: linear-gradient(135deg, var(--emerald), var(--teal)); color: #ffffff !important; box-shadow: 0 4px 16px var(--emerald-soft); border-color: transparent; }
    /* Ultra Modern Balanced KPI Cards Grid (3 Columns x 2 Rows) */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 28px;
    }
    @media (max-width: 1024px) {
      .metrics-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .metrics-grid { grid-template-columns: 1fr; }
    }

    .kpi-card {
      background: var(--bg-card, #111228);
      border: 1px solid var(--border, rgba(99, 102, 241, 0.18));
      border-radius: 16px;
      padding: 22px 24px;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 146px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .kpi-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      border-radius: 16px 16px 0 0;
    }
    .kpi-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5);
      border-color: rgba(99, 102, 241, 0.4);
    }

    .kpi-card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }
    .kpi-label {
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--text-2, #94a3b8);
      text-transform: uppercase;
      letter-spacing: 0.3px;
      line-height: 1.3;
    }
    .kpi-icon-badge {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    .kpi-value {
      font-size: 1.9rem;
      font-weight: 900;
      letter-spacing: -0.5px;
      line-height: 1.1;
      margin-bottom: 10px;
      display: flex;
      align-items: baseline;
      gap: 6px;
    }
    .kpi-value small {
      font-size: 0.95rem;
      font-weight: 700;
      opacity: 0.85;
    }

    .kpi-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 8px;
      margin-top: 4px;
    }
    .kpi-subtext {
      font-size: 0.76rem;
      color: var(--text-2, #94a3b8);
      display: flex;
      align-items: center;
      gap: 6px;
      line-height: 1.3;
    }

    /* KPI Card Colors & Themes */
    .kpi-emerald::before { background: linear-gradient(90deg, #10b981, #059669); }
    .kpi-emerald .kpi-icon-badge { background: rgba(16, 185, 129, 0.15); color: #34d399; }
    .text-emerald { color: #10b981 !important; }

    .kpi-rose::before { background: linear-gradient(90deg, #f43f5e, #e11d48); }
    .kpi-rose .kpi-icon-badge { background: rgba(244, 63, 94, 0.15); color: #fb7185; }
    .text-rose { color: #f43f5e !important; }

    .kpi-teal::before { background: linear-gradient(90deg, #14b8a6, #0d9488); }
    .kpi-teal .kpi-icon-badge { background: rgba(20, 184, 166, 0.15); color: #2dd4bf; }
    .text-teal { color: #14b8a6 !important; }

    .kpi-violet::before { background: linear-gradient(90deg, #8b5cf6, #6366f1); }
    .kpi-violet .kpi-icon-badge { background: rgba(139, 92, 246, 0.15); color: #a78bfa; }
    .text-violet { color: #a78bfa !important; }

    .kpi-amber::before { background: linear-gradient(90deg, #f59e0b, #d97706); }
    .kpi-amber .kpi-icon-badge { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }
    .text-amber { color: #f59e0b !important; }

    .kpi-coral::before { background: linear-gradient(90deg, #ec4899, #be185d); }
    .kpi-coral .kpi-icon-badge { background: rgba(236, 72, 153, 0.15); color: #f472b6; }
    .text-coral { color: #ec4899 !important; }

    body.light-theme .kpi-card {
      background: #ffffff !important;
      border-color: #cbd5e1 !important;
      box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06) !important;
    }
    body.light-theme .kpi-card:hover {
      box-shadow: 0 16px 35px rgba(15, 23, 42, 0.12) !important;
      border-color: #94a3b8 !important;
    }
    body.light-theme .kpi-label { color: #64748b !important; }
    body.light-theme .kpi-footer { border-top-color: #f1f5f9 !important; }
    body.light-theme .kpi-subtext { color: #64748b !important; }
    .section-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 24px; }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 14px 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 13px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: var(--text); vertical-align: middle; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(99, 102, 241, 0.04); }
    .method-badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); padding: 3px 8px; border-radius: 100px; font-size: 0.7rem; font-weight: 600; color: var(--text-2); }
    .btn-action { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); padding: 6px 12px; border-radius: var(--r); font-size: 0.76rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-action:hover { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); border-color: rgba(99, 102, 241, 0.25); }
    .btn-action.primary { color: var(--violet-light); background: var(--violet-soft); border-color: rgba(124,58,237,0.2); }
    .btn-action.primary:hover { background: rgba(124,58,237,0.22); color: var(--violet-light); }
    .text-success { color: var(--emerald-light); font-weight: 700; }
    .text-danger { color: var(--rose-light); font-weight: 700; }
    .required { color: var(--rose-light); }

    /* Side Drawer Filter Modal Styles - CRM System Standard */
    .filter-drawer-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(10, 11, 26, 0.75);
      backdrop-filter: blur(6px);
      z-index: 2990;
    }
    .filter-drawer-panel {
      position: fixed;
      top: 0;
      right: 0;
      width: 420px;
      max-width: 90vw;
      height: 100vh;
      background: var(--bg-card, #111228);
      border-left: 1px solid var(--border-v, rgba(99, 102, 241, 0.3));
      box-shadow: -15px 0 50px rgba(0, 0, 0, 0.85);
      z-index: 3000;
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .filter-drawer-panel.open {
      transform: translateX(0);
    }
    .filter-drawer-header {
      padding: 22px 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(99, 102, 241, 0.06);
    }
    .filter-drawer-header h3 {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--text, #f3f4f6) !important;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .btn-close-drawer {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: var(--text-2, #94a3b8);
      width: 34px;
      height: 34px;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: all 0.2s;
    }
    .btn-close-drawer:hover {
      background: rgba(244, 63, 94, 0.2);
      color: #fb7185;
      border-color: rgba(244, 63, 94, 0.4);
    }
    .filter-drawer-body {
      padding: 24px;
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .filter-field-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
    .filter-field-group label {
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--violet-light, #a5b4fc) !important;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .filter-drawer-body input[pInputText] {
      width: 100% !important;
      background: var(--bg-input, rgba(255, 255, 255, 0.04)) !important;
      border: 1px solid var(--border, rgba(99, 102, 241, 0.25)) !important;
      border-radius: 12px !important;
      color: var(--text, #f3f4f6) !important;
      font-family: 'Cairo', 'Inter', sans-serif !important;
      font-size: 0.88rem !important;
      height: 44px !important;
      padding: 0 14px !important;
      box-sizing: border-box !important;
    }
    .filter-drawer-body input[pInputText]:focus {
      border-color: var(--violet-light, #a5b4fc) !important;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2) !important;
    }
    .filter-drawer-body p-datepicker,
    .filter-drawer-body p-calendar {
      width: 100% !important;
      display: block !important;
    }
    .filter-drawer-footer {
      padding: 18px 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      gap: 12px;
      background: rgba(17, 18, 40, 0.95);
    }
    .preset-chip {
      padding: 7px 13px;
      border-radius: 10px;
      font-size: 0.8rem;
      font-weight: 700;
      border: 1px solid rgba(99, 102, 241, 0.25);
      background: rgba(99, 102, 241, 0.08);
      color: var(--text-2, #94a3b8);
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .preset-chip:hover {
      background: rgba(99, 102, 241, 0.18);
      border-color: var(--violet, #6366f1);
      color: var(--text, #ffffff);
    }
    .preset-chip.active {
      background: var(--violet, #6366f1) !important;
      color: #ffffff !important;
      border-color: var(--violet, #6366f1) !important;
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
    }
    .hdr-date-chip {
      padding: 6px 14px;
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 700;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.04);
      color: var(--text-2, #94a3b8);
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
    }
    .hdr-date-chip:hover {
      background: rgba(99, 102, 241, 0.15);
      border-color: var(--violet, #6366f1);
      color: var(--text, #ffffff);
    }
    .hdr-date-chip.active {
      background: var(--violet, #6366f1) !important;
      color: #ffffff !important;
      border-color: var(--violet, #6366f1) !important;
      box-shadow: 0 2px 10px rgba(99, 102, 241, 0.35);
    }
    body.light-theme .hdr-date-chip,
    body.light-theme .preset-chip {
      background: #f1f5f9 !important;
      border-color: #cbd5e1 !important;
      color: #334155 !important;
    }
    body.light-theme .hdr-date-chip:hover,
    body.light-theme .preset-chip:hover {
      background: rgba(99, 102, 241, 0.1) !important;
      border-color: #6366f1 !important;
      color: #4f46e5 !important;
    }
    body.light-theme .hdr-date-chip.active,
    body.light-theme .preset-chip.active {
      background: #6366f1 !important;
      color: #ffffff !important;
      border-color: #6366f1 !important;
    }
    .btn-reset-filters {
      flex: 1;
      padding: 12px 16px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: var(--text-2, #94a3b8);
      font-weight: 700;
      font-size: 0.86rem;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s;
    }
    .btn-reset-filters:hover {
      background: rgba(244, 63, 94, 0.15);
      color: #fb7185;
      border-color: rgba(244, 63, 94, 0.3);
    }
    .btn-apply-filters {
      flex: 1.4;
      padding: 12px 16px;
      border-radius: 12px;
      background: linear-gradient(135deg, #6366f1, #4f46e5);
      border: none;
      color: #ffffff;
      font-weight: 800;
      font-size: 0.86rem;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
      transition: all 0.2s;
    }
    .btn-apply-filters:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 22px rgba(99, 102, 241, 0.55);
    }
    body.light-theme .filter-drawer-panel {
      background: #ffffff !important;
      border-left-color: #cbd5e1 !important;
      box-shadow: -15px 0 45px rgba(15, 23, 42, 0.15) !important;
    }
    body.light-theme .filter-drawer-header {
      background: #f8fafc !important;
      border-bottom-color: #e2e8f0 !important;
    }
    body.light-theme .filter-drawer-header h3 {
      color: #0f172a !important;
    }
    body.light-theme .filter-field-group label {
      color: #4f46e5 !important;
    }
    body.light-theme .filter-drawer-body input[pInputText] {
      background: #ffffff !important;
      border-color: #cbd5e1 !important;
      color: #0f172a !important;
    }
    body.light-theme .filter-drawer-footer {
      background: #ffffff !important;
      border-top-color: #e2e8f0 !important;
    }
    body.light-theme .btn-reset-filters {
      background: #f1f5f9 !important;
      border-color: #cbd5e1 !important;
      color: #475569 !important;
    }

    .print-only-header { display: none; }

    @media print {
      body { background: #ffffff !important; color: #000000 !important; }
      .no-print, .finance-tabs-nav, .finance-filter-card, .header-actions, .btn, .btn-action, .dialog-footer-actions, .access-denied-shell, p-dialog { display: none !important; }
      .crm-module-container { padding: 0 !important; background: #ffffff !important; }
      .print-only-header { display: flex !important; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 20px; }
      .section-card { box-shadow: none !important; border: 1px solid #cbd5e1 !important; background: #ffffff !important; color: #000000 !important; padding: 12px !important; }
      .crm-table th { background: #f1f5f9 !important; color: #0f172a !important; border-bottom: 2px solid #0f172a !important; font-weight: 800 !important; }
      .crm-table td { color: #0f172a !important; border-bottom: 1px solid #cbd5e1 !important; font-size: 0.85rem !important; }
      .metric-card { background: #ffffff !important; border: 1px solid #cbd5e1 !important; box-shadow: none !important; }
      .metric-card .value { color: #0f172a !important; }
      .metric-card .label { color: #475569 !important; }
    }

    /* Light Theme Overrides */
    :host-context(body.light-theme) .finance-filter-card { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .filter-title { color: #0f172a !important; }
    :host-context(body.light-theme) .filter-item label { color: #64748b !important; }
    :host-context(body.light-theme) .search-input-box input { background: #f8fafc !important; border-color: #cbd5e1 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .crm-module-container { background: #f8fafc !important; }
    :host-context(body.light-theme) .module-header h2 { color: #0f172a !important; }
    :host-context(body.light-theme) .finance-tabs-nav { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .finance-tabs-nav button { color: #475569 !important; }
    :host-context(body.light-theme) .finance-tabs-nav button:hover { background: #eef2ff !important; color: #4f46e5 !important; }
    :host-context(body.light-theme) .finance-tabs-nav button.active { background: linear-gradient(135deg, #10b981, #059669) !important; color: #ffffff !important; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3) !important; }
    :host-context(body.light-theme) .metric-card { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .metric-card .value { color: #0f172a !important; }
    :host-context(body.light-theme) .metric-card .label { color: #64748b !important; }
    :host-context(body.light-theme) .section-card { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .crm-table th { background: #f8fafc !important; color: #475569 !important; border-bottom-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .crm-table td { border-bottom-color: #f1f5f9 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .crm-table tr:hover td { background: #f8fafc !important; }
    :host-context(body.light-theme) .method-badge { background: #ffffff !important; border-color: #cbd5e1 !important; color: #334155 !important; }
    :host-context(body.light-theme) .btn-action { background: #ffffff !important; border-color: #cbd5e1 !important; color: #334155 !important; }
    :host-context(body.light-theme) .btn-action:hover { background: #eef2ff !important; color: #4f46e5 !important; border-color: #c7d2fe !important; }
  `]
})
export class FinanceDashboardComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private toastService = inject(ToastService);

  activeTab = 'summary';
  summary: any = {};
  ledgerEntries: any[] = [];
  categories: any[] = [];
  clientBalances: any[] = [];
  custodyAccounts: any[] = [];
  partnerSplits: any[] = [];
  employees: any[] = [];
  fixedAssets: any[] = [];

  ledgerTypes = [
    { id: 'expense', label: 'مصروفات' },
    { id: 'income', label: 'إيرادات / دخل' }
  ];

  paymentMethodsList = [
    { id: 'cash', label: 'كاش (الخزنة الرئيسية)' },
    { id: 'cash_hand', label: 'نقدي يدوي' },
    { id: 'instapay', label: 'إنستا باي (InstaPay)' },
    { id: 'bank_transfer', label: 'تحويل بنكي' }
  ];

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

  get departmentsWithAllOption(): any[] {
    return [{ id: null, name: 'كافة الأقسام والمستويات' }, ...(this.departments || [])];
  }

  get categoriesWithAllOption(): any[] {
    return [{ id: null, name: 'كافة التصنيفات الماليّة' }, ...(this.categories || [])];
  }

  filterSearch = '';
  filterType = '';
  filterCategoryId = null;
  filterDepartmentId = null;
  filterEmployeeId = null;
  filterPaymentMethod = '';
  filterFromDate: any = null;
  filterToDate: any = null;
  selectedEmployeeStatement: any = null;
  datePreset: string = 'custom';

  showFilterSidebar = false;

  setDatePreset(preset: string): void {
    this.datePreset = preset;
    const now = new Date();

    if (preset === 'today') {
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      this.filterFromDate = today;
      this.filterToDate = today;
    } else if (preset === 'week') {
      const dayOfWeek = now.getDay();
      const diffToSat = (dayOfWeek === 6) ? 0 : (dayOfWeek + 1);
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - diffToSat);
      this.filterFromDate = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate());
      this.filterToDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (preset === 'month') {
      this.filterFromDate = new Date(now.getFullYear(), now.getMonth(), 1);
      this.filterToDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (preset === 'year') {
      this.filterFromDate = new Date(now.getFullYear(), 0, 1);
      this.filterToDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (preset === 'custom') {
      // Keep current custom selection
    }

    this.onFilterChange();
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.filterSearch && this.filterSearch.trim()) count++;
    if (this.filterType) count++;
    if (this.filterCategoryId) count++;
    if (this.filterDepartmentId) count++;
    if (this.filterEmployeeId) count++;
    if (this.filterPaymentMethod) count++;
    if (this.filterFromDate) count++;
    if (this.filterToDate) count++;
    return count;
  }

  hasActiveFilters(): boolean {
    return this.activeFilterCount > 0;
  }

  applyFilters(): void {
    this.showFilterSidebar = false;
    this.onFilterChange();
  }

  onFilterChange(): void {
    this.ledgerPage = 1;
    this.loadLedger();
    this.loadPayrollSummary();
  }

  resetFilters(): void {
    this.filterSearch = '';
    this.filterType = '';
    this.filterCategoryId = null;
    this.filterDepartmentId = null;
    this.filterEmployeeId = null;
    this.filterPaymentMethod = '';
    this.filterFromDate = null;
    this.filterToDate = null;
    this.datePreset = 'custom';
    this.selectedEmployeeStatement = null;
    this.ledgerPage = 1;
    this.loadLedger();
    this.loadPayrollSummary();
  }

  showStatementModal = false;

  selectEmployeeForStatement(emp: any): void {
    this.selectedEmployeeStatement = emp;
    this.showStatementModal = true;
  }

  loadPayrollSummary(): void {
    const params: any = {};
    if (this.filterEmployeeId) params.employee_id = this.filterEmployeeId;
    if (this.filterFromDate) params.from_date = this.formatDatePayload(this.filterFromDate);
    if (this.filterToDate) params.to_date = this.formatDatePayload(this.filterToDate);

    this.apiService.getPayrollSummary(params).subscribe(res => {
      this.payrollSummary = res.data || [];
      if (this.filterEmployeeId && this.payrollSummary.length > 0) {
        this.selectedEmployeeStatement = this.payrollSummary[0];
      }
    });
  }

  loadLedger(): void {
    const params: any = {
      page: this.ledgerPage,
      per_page: this.pageSize
    };
    if (this.filterSearch && this.filterSearch.trim()) params.search = this.filterSearch.trim();
    if (this.filterType) params.type = this.filterType;
    if (this.filterCategoryId) params.category_id = this.filterCategoryId;
    if (this.filterDepartmentId) params.department_id = this.filterDepartmentId;
    if (this.filterPaymentMethod) params.payment_method = this.filterPaymentMethod;
    if (this.filterFromDate) params.from_date = this.formatDatePayload(this.filterFromDate);
    if (this.filterToDate) params.to_date = this.formatDatePayload(this.filterToDate);

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
  assetForm!: FormGroup;

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

    this.assetForm = this.fb.group({
      name: ['', Validators.required],
      value: [0, [Validators.required, Validators.min(0)]],
      department_id: [null],
      purchase_date: [new Date().toISOString().split('T')[0]],
      notes: ['']
    });
  }

  loadAllData(): void {
    this.apiService.getFinanceSummary().subscribe(res => this.summary = res.summary || {});
    this.loadLedger();
    this.loadClientBalances();
    this.apiService.getFinanceCategories().subscribe(res => this.categories = res.data || []);
    this.apiService.getCustodyAccounts().subscribe(res => this.custodyAccounts = res.data || []);
    this.apiService.getPartnerProfitSplits().subscribe(res => this.partnerSplits = res.data || []);
    this.loadPayrollSummary();
    this.apiService.getDepartments().subscribe(res => this.departments = res || []);
    this.apiService.getFixedAssets().subscribe(res => this.fixedAssets = res.data || []);
    this.apiService.getUsers().subscribe(res => {
      const arr = res.data || [];
      this.employees = arr.filter((u: any) => u.role !== 'client' && u.role !== 'Client');
    });
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

  getPaymentTypeLabel(type: string): string {
    if (!type) return 'راتب ثابت';
    const t = type.toString().toLowerCase();
    if (t.includes('salary')) return 'راتب شهري ثابت';
    if (t.includes('task')) return 'حسب المهمة / الإنتاج';
    if (t.includes('hybrid')) return 'مختلط (راتب + عمولة/مهام)';
    if (t.includes('percentage')) return 'نسبة مئوية من المبيعات';
    if (t.includes('commission')) return 'عمولة فقط';
    if (t.includes('hourly')) return 'بالساعة';
    return type;
  }

  openAddLedgerModal(): void {
    this.ledgerForm.reset({ type: 'expense', payment_method: 'cash', amount: 0, date: new Date().toISOString().split('T')[0] });
    this.showLedgerModal = true;
  }

  showCatModal = false;
  catNameInput = '';
  showCustodyModal = false;
  custodyDeptId: any = null;
  custodyEmpId: any = null;
  filteredCustodyEmployees: any[] = [];
  custodyAmount: number = 0;
  showReturnCustodyModal = false;
  selectedCustody: any = null;
  returnedAmount: number = 0;
  returnNotes: string = '';
  returnCategoryId: any = null;

  onCustodyDeptChange(): void {
    this.custodyEmpId = null;
    if (!this.custodyDeptId) {
      this.filteredCustodyEmployees = [];
      return;
    }
    const dept = this.departments.find(d => d.id === this.custodyDeptId);
    const managerId = dept?.manager_id;

    const deptEmps = (this.employees || []).filter(e => e.department_id === this.custodyDeptId || e.id === managerId);

    this.filteredCustodyEmployees = deptEmps.map(e => {
      const isManager = e.id === managerId || e.role === 'department_manager' || e.role === 'Department Manager';
      return {
        ...e,
        displayName: isManager ? `👑 ${e.name} (مدير القسم)` : e.name
      };
    });
  }

  triggerAddCategory(): void {
    this.catNameInput = '';
    this.showCatModal = true;
  }

  saveCategory(): void {
    if (!this.catNameInput || !this.catNameInput.trim()) return;
    this.apiService.storeFinanceCategory({ name_ar: this.catNameInput.trim(), type: this.ledgerForm.value.type }).subscribe(res => {
      this.showCatModal = false;
      if (res.data) {
        this.categories.push(res.data);
        this.ledgerForm.patchValue({ category_id: res.data.id });
      }
    });
  }

  formatDatePayload(val: any): string {
    if (!val) return new Date().toISOString().split('T')[0];
    if (val instanceof Date) {
      const y = val.getFullYear();
      const m = String(val.getMonth() + 1).padStart(2, '0');
      const d = String(val.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }
    if (typeof val === 'string') return val.split('T')[0];
    return String(val);
  }

  saveLedgerEntry(): void {
    if (this.ledgerForm.invalid) {
      this.ledgerForm.markAllAsTouched();
      this.toastService.warning('يرجى ملء جميع الحقول المطلوبة بشكل صحيح قبل الحفظ');
      return;
    }
    this.loading = true;

    const payload = {
      ...this.ledgerForm.value,
      date: this.formatDatePayload(this.ledgerForm.value.date)
    };

    this.apiService.storeLedgerEntry(payload).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success('تم تسجيل المعاملة المالية بنجاح', 'تمت العملية');
        this.showLedgerModal = false;
        this.loadAllData();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || 'تعذر تسجيل المعاملة المالية');
      }
    });
  }

  openIssueCustodyModal(): void {
    this.custodyDeptId = null;
    this.custodyEmpId = null;
    this.custodyAmount = 0;
    this.filteredCustodyEmployees = [];
    this.showCustodyModal = true;
  }

  custodyNotes = '';

  saveIssueCustody(): void {
    if (!this.custodyEmpId || this.custodyAmount <= 0) return;
    const payload: any = {
      employee_id: +this.custodyEmpId,
      issued_amount: +this.custodyAmount
    };
    if (this.custodyNotes && this.custodyNotes.trim()) {
      payload.notes = this.custodyNotes.trim();
    }
    this.apiService.issueCustody(payload).subscribe(() => {
      this.showCustodyModal = false;
      this.custodyNotes = '';
      this.loadAllData();
    });
  }

  getCustodyStatusLabel(status: string): string {
    if (!status) return 'نشطة';
    const st = status.toLowerCase();
    if (st === 'open' || st === 'issued' || st === 'active') return 'عهدَة نشطة';
    if (st === 'settled' || st === 'closed' || st === 'returned') return 'تمت التسوية';
    return status;
  }

  getCustodyStatusClass(status: string): string {
    if (!status) return 'badge-a';
    const st = status.toLowerCase();
    if (st === 'open' || st === 'issued' || st === 'active') return 'badge-a';
    if (st === 'settled' || st === 'closed' || st === 'returned') return 'badge-e';
    return 'badge-v';
  }

  openReturnCustodyModal(custody: any): void {
    this.selectedCustody = custody;
    this.returnedAmount = custody.issued_amount || 0;
    this.returnNotes = '';
    this.returnCategoryId = null;
    this.showReturnCustodyModal = true;
  }

  saveReturnCustody(): void {
    if (!this.selectedCustody) return;
    const payload: any = {
      returned_amount: +this.returnedAmount
    };
    if (this.returnNotes && this.returnNotes.trim()) {
      payload.notes = this.returnNotes.trim();
    }
    if (this.returnCategoryId) {
      payload.spent_category_id = this.returnCategoryId;
    }

    this.apiService.returnCustody(this.selectedCustody.id, payload).subscribe({
      next: () => {
        this.showReturnCustodyModal = false;
        this.toastService.success('تم إتمام تسوية وتصفية حساب العهدة بنجاح', 'تمت العملية');
        this.loadAllData();
      },
      error: (err) => {
        this.toastService.error(err.error?.message || 'تعذر إتمام تسوية العهدة');
      }
    });
  }

  showAssetModal = false;

  openAddAssetModal(): void {
    this.assetForm.reset({ value: 0, purchase_date: new Date().toISOString().split('T')[0] });
    this.showAssetModal = true;
  }

  saveAsset(): void {
    if (this.assetForm.invalid) return;
    this.loading = true;

    const payload = {
      ...this.assetForm.value,
      purchase_date: this.formatDatePayload(this.assetForm.value.purchase_date)
    };

    this.apiService.storeFixedAsset(payload).subscribe({
      next: () => {
        this.loading = false;
        this.showAssetModal = false;
        this.loadAllData();
      },
      error: () => this.loading = false
    });
  }

  currentDate = new Date();
  currentUser: any = null;

  exportToExcel(): void {
    let filename = 'التقرير_المالي.csv';
    let csvContent = '\uFEFF';

    if (this.activeTab === 'summary' || this.activeTab === 'ledger') {
      filename = `دفتر_الحسابات_المالية_${new Date().toISOString().slice(0,10)}.csv`;
      const headers = ['التاريخ', 'نوع الحركة', 'التصنيف', 'طريقة الدفع', 'المبلغ (ج.م)', 'الوصف والبيان'];
      csvContent += headers.join(',') + '\n';

      this.ledgerEntries.forEach(entry => {
        const type = entry.type === 'income' ? 'إيراد' : 'مصروف';
        const category = entry.category?.name_ar || entry.category?.name_en || 'عام';
        const method = this.getPaymentMethodLabel(entry.payment_method);
        const amount = (entry.type === 'income' ? '+' : '-') + entry.amount;
        const desc = `"${(entry.description || '').replace(/"/g, '""')}"`;
        csvContent += `"${entry.date}","${type}","${category}","${method}","${amount}",${desc}\n`;
      });
    } else if (this.activeTab === 'custody') {
      filename = `عهد_الموظفين_${new Date().toISOString().slice(0,10)}.csv`;
      const headers = ['الموظف', 'العهدة المصروفة', 'المسترد', 'المنصرف الفعلي', 'الحالة'];
      csvContent += headers.join(',') + '\n';

      this.custodyAccounts.forEach(c => {
        const emp = `"${(c.employee?.name || '').replace(/"/g, '""')}"`;
        const net = c.issued_amount - c.returned_amount;
        csvContent += `${emp},"${c.issued_amount}","${c.returned_amount}","${net}","${c.status}"\n`;
      });
    } else if (this.activeTab === 'partners') {
      filename = `توزيع_أرباح_الشركاء_${new Date().toISOString().slice(0,10)}.csv`;
      const headers = ['القسم / المركز', 'الشريك الخارجي', 'نسبة الشريك', 'إجمالي الإيرادات', 'إجمالي المصروفات', 'صافي الربح', 'حصة الشريك الصافية', 'حصة الوكالة الصافية'];
      csvContent += headers.join(',') + '\n';

      this.partnerSplits.forEach(ps => {
        const dept = `"${(ps.department_name || '').replace(/"/g, '""')}"`;
        const partner = `"${(ps.partner_name || '').replace(/"/g, '""')}"`;
        csvContent += `${dept},${partner},"${ps.partner_percentage}%","${ps.total_income}","${ps.total_expenses}","${ps.net_profit}","${ps.partner_share}","${ps.company_share}"\n`;
      });
    } else if (this.activeTab === 'payroll') {
      filename = `مرتبات_ومستحقات_الموظفين_${new Date().toISOString().slice(0,10)}.csv`;
      const headers = ['الموظف', 'القسم', 'نظام التعويض', 'الراتب الأساسي', 'أجر المهام والإنتاج', 'العمولات', 'المكافآت', 'الخصومات والعربات', 'الصافي المستحق', 'الحالة'];
      csvContent += headers.join(',') + '\n';

      this.payrollSummary.forEach(p => {
        const emp = `"${(p.employee?.name || '').replace(/"/g, '""')}"`;
        const dept = `"${(p.employee?.department?.name || '').replace(/"/g, '""')}"`;
        const model = `"${this.getPaymentTypeLabel(p.employee?.compensation_model)}"`;
        csvContent += `${emp},${dept},${model},"${p.base_salary}","${p.tasks_earnings}","${p.commissions}","${p.bonuses}","${p.advances_deductions}","${p.net_salary_due}","${p.status}"\n`;
      });
    } else if (this.activeTab === 'assets') {
      filename = `الأصول_الثابتة_${new Date().toISOString().slice(0,10)}.csv`;
      const headers = ['اسم الأصل الثابت', 'قيمة الأصل (ج.م)', 'القسم المستفيد', 'تاريخ الشراء', 'الملاحظات'];
      csvContent += headers.join(',') + '\n';

      this.fixedAssets.forEach(a => {
        const name = `"${(a.name || '').replace(/"/g, '""')}"`;
        const dept = `"${(a.department?.name || 'عام').replace(/"/g, '""')}"`;
        const notes = `"${(a.notes || '').replace(/"/g, '""')}"`;
        csvContent += `${name},"${a.value}",${dept},"${a.purchase_date || ''}",${notes}\n`;
      });
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  getActiveTabTitle(): string {
    switch (this.activeTab) {
      case 'summary': return 'الملخص المالي العام';
      case 'ledger': return 'دفتر الحسابات وحركات القيود';
      case 'custody': return 'حسابات عهد الموظفين';
      case 'partners': return 'تقرير أرباح الشركاء والمركز';
      case 'payroll': return 'ملخص المرتبات والمستحقات';
      case 'assets': return 'سجل الأصول الثابتة ورأس المال';
      default: return 'التقرير المالي';
    }
  }
}
