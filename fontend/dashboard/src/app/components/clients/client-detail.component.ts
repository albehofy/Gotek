import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    DatePickerModule
  ],
  template: `
    <div class="client-detail-container">
      <!-- Loading State -->
      <div class="loading-shell" *ngIf="loading && !client">
        <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2.2rem; color: var(--violet-light);"></i>
        <p>جاري تحميل بوابة وملف العميل بالكامل...</p>
      </div>

      <!-- Error State -->
      <div class="error-shell" *ngIf="!loading && !client">
        <i class="fa-solid fa-circle-exclamation"></i>
        <h3>لم يتم العثور على بيانات العميل</h3>
        <p>تعذر تحميل البيانات الخاصة بهذا العميل.</p>
        <button class="btn-primary-gradient" routerLink="/clients">
          <i class="fa-solid fa-arrow-right"></i> الرجوع لقائمة العملاء
        </button>
      </div>

      <!-- Main Portal Content -->
      <div *ngIf="client">
        <!-- Top Back Navigation & Quick Action Bar -->
        <div class="top-nav-bar">
          <button class="btn-glass-back" routerLink="/clients">
            <i class="fa-solid fa-arrow-right"></i> العودة لدليل العملاء
          </button>

          <div class="top-nav-actions">
            <button class="btn-primary-gradient" *ngIf="!isClient()" (click)="openPaymentModal()">
              <i class="fa-solid fa-money-bill-wave"></i> + تسجيل دفعة جديدة للعميل
            </button>
            <button class="btn-glass-purple" (click)="loadClientData()">
              <i class="fa-solid fa-rotate-right"></i> تحديث البيانات
            </button>
          </div>
        </div>

        <!-- Hero Client Profile Header Card -->
        <div class="client-hero-card glass-panel margin-top">
          <div class="hero-left-info">
            <div class="client-av-lg">{{ getInitial() }}</div>
            <div class="client-titles">
              <div class="name-row">
                <h2>{{ client.name || client.client_name }}</h2>
                <span class="client-id-pill">#CLIENT-{{ client.id || clientId }}</span>
              </div>
              <div class="meta-row">
                <span class="meta-item"><i class="fa-solid fa-envelope"></i> {{ client.email || client.client_email || 'لا يوجد بريد مسجل' }}</span>
                <span class="meta-item" *ngIf="client.phone"><i class="fa-solid fa-phone"></i> {{ client.phone }}</span>
                <span class="meta-item"><i class="fa-solid fa-calendar-day"></i> عضو منذ: {{ (client.created_at | date:'yyyy/MM/dd') || 'غير محدد' }}</span>
              </div>
            </div>
          </div>
          
          <div class="hero-right-status">
            <span class="client-status-badge">
              <span class="pulse-dot"></span> بوابة عميل نشطة
            </span>
          </div>
        </div>

        <!-- Financial & Work KPIs Grid -->
        <div class="metrics-grid margin-top">
          <div class="metric-card kpi-total">
            <div class="kpi-icon-box"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">إجمالي الفواتير والتعاقدات</span>
              <span class="kpi-amount">{{ totalBilled | number:'1.2-2' }} <small>ج.م</small></span>
              <span class="kpi-sub font-normal">إجمالي عقود صفقات العميل</span>
            </div>
          </div>

          <div class="metric-card kpi-paid">
            <div class="kpi-icon-box"><i class="fa-solid fa-circle-check"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">إجمالي المدفوع والمستلم</span>
              <span class="kpi-amount text-emerald">{{ totalPaid | number:'1.2-2' }} <small>ج.م</small></span>
              <span class="kpi-sub text-emerald" *ngIf="totalBilled > 0">
                ({{ ((totalPaid / totalBilled) * 100) | number:'1.0-0' }}% مسدد)
              </span>
            </div>
          </div>

          <div class="metric-card kpi-remaining">
            <div class="kpi-icon-box"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">الرصيد المتبقي المعلق</span>
              <span class="kpi-amount text-rose">{{ remainingBalance | number:'1.2-2' }} <small>ج.م</small></span>
              <span class="kpi-sub text-rose">مستحق للتحصيل</span>
            </div>
          </div>

          <div class="metric-card kpi-deals">
            <div class="kpi-icon-box"><i class="fa-solid fa-handshake"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">الصفقات والمهام</span>
              <span class="kpi-amount">{{ deals.length }} <small>صفقات</small> / {{ tasks.length }} <small>مهام</small></span>
              <span class="kpi-sub">عقود ومخرجات تنفيذية</span>
            </div>
          </div>
        </div>

        <!-- Section 1: Deals & Contracts -->
        <div class="section-card glass-panel margin-top">
          <div class="section-head flex-between">
            <h3><i class="fa-solid fa-file-contract" style="color:var(--violet-light)"></i> صفقات وعقود العميل (Deals & Contracts)</h3>
            <span class="badge badge-v">{{ deals.length }} صفقات مسندة</span>
          </div>

          <div class="table-wrap" *ngIf="deals.length > 0">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>عنوان الصفقة والعقد</th>
                  <th>القسم الرئيسي</th>
                  <th>تاريخ التعاقد</th>
                  <th>قيمة العقد الإجمالية</th>
                  <th>المدفوع</th>
                  <th>المتبقي</th>
                  <th>الحالة</th>
                  <th>إجراءات</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let deal of deals">
                  <td style="font-weight:700; color:var(--text)">
                    <a [routerLink]="['/deals', deal.id]" class="deal-link-title" title="عرض تفاصيل الصفقة بالكامل">
                      <i class="fa-solid fa-arrow-up-right-from-square" style="margin-left:6px; font-size:0.8rem; color:var(--violet-light);"></i>
                      {{ deal.title }}
                    </a>
                  </td>
                  <td><span class="dept-badge">{{ deal.department?.name || 'عام' }}</span></td>
                  <td style="font-size:0.8rem; color:var(--text-2);">
                    {{ (deal.created_at | date:'yyyy/MM/dd') || 'غير محدد' }}
                  </td>
                  <td style="font-weight:700;">{{ (deal.calculated_total || deal.total_price) | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ (deal.calculated_paid || deal.paid_amount) | number:'1.2-2' }} ج.م</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ (deal.remaining_balance || 0) | number:'1.2-2' }} ج.م</td>
                  <td>
                    <span class="status-pill" [ngClass]="'status-' + (deal.status || 'pending')">
                      {{ getDealStatusLabel(deal.status) }}
                    </span>
                  </td>
                  <td>
                    <button class="btn-action-view" [routerLink]="['/deals', deal.id]" title="فتح التفاصيل الكامله للعقد">
                      <i class="fa-solid fa-eye"></i> التفاصيل
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="deals.length === 0" class="empty-state">
            <i class="fa-solid fa-file-circle-xmark"></i>
            <p>لا توجد صفقات أو عقود مسجلة لهذا العميل حتى الآن.</p>
          </div>
        </div>

        <!-- Section 2: Payments Ledger -->
        <div class="section-card glass-panel margin-top">
          <div class="section-head flex-between">
            <h3><i class="fa-solid fa-receipt" style="color:var(--emerald-light)"></i> سجل التحصيلات وإيصالات الدفع (Payments Ledger)</h3>
            <button class="btn-sm-primary" *ngIf="!isClient()" (click)="openPaymentModal()">
              <i class="fa-solid fa-plus"></i> إضافة دفعة جديدة
            </button>
          </div>

          <div class="table-wrap" *ngIf="payments.length > 0">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>تاريخ التسديد</th>
                  <th>المبلغ المدفوع</th>
                  <th>طريقة التحصيل</th>
                  <th>رقم المرجع / الإيصال</th>
                  <th>الصفقة المرتبطة</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of payments">
                  <td style="font-weight:700; color:var(--text);">
                    <i class="fa-regular fa-calendar-check" style="color:var(--emerald-light); margin-left:6px;"></i>
                    {{ (p.payment_date | date:'yyyy/MM/dd') || (p.created_at | date:'yyyy/MM/dd') }}
                  </td>
                  <td style="font-weight:800; color:var(--emerald-light); font-size:0.95rem;">
                    {{ p.amount | number:'1.2-2' }} ج.م
                  </td>
                  <td>
                    <span class="payment-method-badge">
                      {{ getPaymentMethodLabel(p.payment_method) }}
                    </span>
                  </td>
                  <td style="font-family:monospace; color:var(--text-2);">
                    {{ p.receipt_ref || p.reference_number || 'بدون مرجع' }}
                  </td>
                  <td style="color:var(--text-2); font-weight:600;">
                    {{ p.deal_title || 'صفقة عامة' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="payments.length === 0" class="empty-state">
            <i class="fa-solid fa-file-invoice"></i>
            <p>لم يتم تسجيل أي دفعات مالية مسددة للعميل بعد.</p>
            <button class="btn-sm-primary" *ngIf="!isClient()" style="margin-top:10px;" (click)="openPaymentModal()">
              + تسجيل أول دفعة مالية
            </button>
          </div>
        </div>

        <!-- Section 3: Tasks Breakdown -->
        <div class="section-card glass-panel margin-top">
          <div class="section-head flex-between">
            <h3><i class="fa-solid fa-list-check" style="color:var(--teal-light)"></i> المهام والمخرجات التنفيذية للعميل (Tasks & Deliverables)</h3>
            <span class="badge badge-t">{{ tasks.length }} مهام</span>
          </div>

          <div class="table-wrap" *ngIf="tasks.length > 0">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>عنوان المهمة</th>
                  <th>القسم المنفذ</th>
                  <th>فريق العمل المسند</th>
                  <th>سعر الخدمة</th>
                  <th>الحالة والتنفيذ</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let task of tasks">
                  <td style="font-weight:700; color:var(--text)">{{ task.title }}</td>
                  <td><span class="dept-badge">{{ task.subCategory?.name_ar || task.department?.name || '-' }}</span></td>
                  <td>
                    <div class="users-flex" *ngIf="task.users && task.users.length > 0">
                      <span class="user-chip" *ngFor="let u of task.users">{{ u.name }}</span>
                    </div>
                    <span *ngIf="!task.users || task.users.length === 0" style="color:var(--text-3); font-size:0.75rem;">غير مسند</span>
                  </td>
                  <td style="font-weight:700;">{{ (task.client_price || 0) | number:'1.2-2' }} ج.م</td>
                  <td>
                    <span class="task-status-pill" [ngClass]="getTaskStatusClass(task.status)">
                      <i class="fa-solid" [ngClass]="getTaskStatusIcon(task.status)"></i>
                      {{ getTaskStatusLabel(task.status) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="tasks.length === 0" class="empty-state">
            <i class="fa-solid fa-clipboard-check"></i>
            <p>لا توجد مهام إجرائية مسندة لهذا العميل حالياً.</p>
          </div>
        </div>

      </div>

      <!-- PrimeNG Dialog: Add Payment for Client -->
      <p-dialog [(visible)]="showPaymentModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'تسجيل دفعة مالية للعميل: ' + (client?.name || '')" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;" *ngIf="client">
            <div class="form-group" *ngIf="deals.length > 0">
              <label>اختر الصفقة / العقد المرتبط</label>
              <p-dropdown
                formControlName="deal_id"
                [appendTo]="'body'"
                [options]="dealOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="اختر الصفقة..."
              ></p-dropdown>
            </div>

            <div class="form-group">
              <label>مبلغ الدفعة (ج.م) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" [placeholder]="remainingBalance" />
              <small style="color:var(--text-2);">المتبقي في ذمة العميل: {{ remainingBalance | number:'1.2-2' }} ج.م</small>
            </div>
            
            <div class="form-group">
              <label>تاريخ السداد</label>
              <p-datepicker formControlName="payment_date" dateFormat="yy-mm-dd" [showIcon]="true" [iconDisplay]="'input'" [appendTo]="'body'" placeholder="اختر تاريخ السداد..." styleClass="w-full"></p-datepicker>
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
            <button type="button" class="btn-dialog-cancel" (click)="showPaymentModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="paymentForm.invalid || submitting">
              {{ submitting ? 'جاري المعالجة...' : 'تأكيد وتسجيل الدفعة' }}
            </button>
          </div>
        </form>
      </p-dialog>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }
    .client-detail-container { padding: 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }

    .loading-shell { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; gap: 16px; color: var(--text-2); font-size: 0.95rem; }
    .error-shell { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; gap: 14px; color: var(--text-2); text-align: center; }
    .error-shell i { font-size: 3rem; color: var(--rose-light); }

    .margin-top { margin-top: 24px; }

    /* Top Nav Bar */
    .top-nav-bar { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
    .btn-glass-back { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: var(--text); padding: 10px 18px; border-radius: 12px; font-size: 0.88rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: all 0.25s; font-family: inherit; }
    .btn-glass-back:hover { background: rgba(255, 255, 255, 0.1); color: var(--violet-light); border-color: var(--violet-light); transform: translateX(3px); }

    .top-nav-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .btn-primary-gradient { background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none; color: #ffffff; padding: 10px 20px; border-radius: 12px; font-weight: 700; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35); transition: all 0.25s; font-family: inherit; text-decoration: none; }
    .btn-primary-gradient:hover { box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5); transform: translateY(-2px); }

    .btn-glass-purple { background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25); color: var(--text); padding: 10px 16px; border-radius: 12px; font-weight: 700; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: all 0.25s; font-family: inherit; }
    .btn-glass-purple:hover { background: rgba(99, 102, 241, 0.2); }

    /* Hero Card */
    .client-hero-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; padding: 26px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; box-shadow: var(--shadow-sm); }
    .hero-left-info { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
    .client-av-lg { width: 62px; height: 62px; border-radius: 18px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #ffffff; font-size: 1.6rem; font-weight: 900; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35); flex-shrink: 0; }
    
    .client-titles { display: flex; flex-direction: column; gap: 6px; }
    .name-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .name-row h2 { font-size: 1.45rem; font-weight: 800; color: var(--text); margin: 0; }
    .client-id-pill { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); font-family: monospace; font-size: 0.78rem; font-weight: 800; padding: 3px 10px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.2); }

    .meta-row { display: flex; gap: 18px; color: var(--text-2); font-size: 0.84rem; flex-wrap: wrap; }
    .meta-item i { color: var(--violet-light); margin-left: 5px; }

    .client-status-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; border-radius: 100px; background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.8rem; font-weight: 800; }
    .pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: #34d399; box-shadow: 0 0 10px #34d399; animation: pulse 1.8s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.3); } }

    /* Metrics Grid */
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }
    .metric-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 18px; padding: 20px; display: flex; align-items: center; gap: 16px; box-shadow: var(--shadow-sm); transition: transform 0.2s; }
    .metric-card:hover { transform: translateY(-2px); }

    .kpi-icon-box { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0; }
    .kpi-total .kpi-icon-box { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); }
    .kpi-paid .kpi-icon-box { background: rgba(16, 185, 129, 0.12); color: #34d399; }
    .kpi-remaining .kpi-icon-box { background: rgba(244, 63, 94, 0.12); color: #fb7185; }
    .kpi-deals .kpi-icon-box { background: rgba(245, 158, 11, 0.12); color: #fbbf24; }

    .kpi-content { display: flex; flex-direction: column; gap: 2px; }
    .kpi-title { font-size: 0.78rem; color: var(--text-2); font-weight: 700; }
    .kpi-amount { font-size: 1.3rem; font-weight: 800; color: var(--text); line-height: 1.2; }
    .kpi-amount small { font-size: 0.76rem; font-weight: 600; color: var(--text-2); }
    .text-emerald { color: #34d399; }
    .text-rose { color: #f43f5e; }
    .kpi-sub { font-size: 0.72rem; font-weight: 700; color: var(--text-3); }

    /* Section Card */
    .section-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 16px; box-shadow: var(--shadow-sm); }
    .section-head h3 { font-size: 1.08rem; font-weight: 800; color: var(--text); margin: 0; display: flex; align-items: center; gap: 10px; }
    .flex-between { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }

    .btn-sm-primary { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); border: 1px solid rgba(99, 102, 241, 0.25); padding: 6px 14px; border-radius: 10px; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: inherit; display: inline-flex; align-items: center; gap: 6px; }
    .btn-sm-primary:hover { background: var(--violet); color: #ffffff; }

    .table-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .crm-table { width: 100%; min-width: 900px; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 14px 18px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.74rem; font-weight: 800; text-transform: uppercase; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.88rem; color: var(--text); vertical-align: middle; white-space: nowrap; }

    .deal-link-title { color: var(--text); font-weight: 700; text-decoration: none; transition: color 0.2s; }
    .deal-link-title:hover { color: var(--violet-light); text-decoration: underline; }

    .btn-action-view { background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25); color: var(--violet-light); padding: 5px 12px; border-radius: 8px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-action-view:hover { background: var(--violet); color: #ffffff; }

    .dept-badge { background: rgba(99, 102, 241, 0.1); color: var(--violet-light); border: 1px solid rgba(99, 102, 241, 0.2); padding: 3px 9px; border-radius: 6px; font-size: 0.74rem; font-weight: 700; }
    .payment-method-badge { font-size: 0.76rem; font-weight: 700; color: var(--text-2); background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 8px; }

    .users-flex { display: flex; gap: 5px; flex-wrap: wrap; }
    .user-chip { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); padding: 3px 8px; border-radius: 100px; font-size: 0.72rem; color: var(--text-2); }
    
    .status-pill { font-size: 0.74rem; font-weight: 800; padding: 4px 12px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; white-space: nowrap; }
    .status-pending { background: rgba(245, 158, 11, 0.12); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); }
    .status-active { background: rgba(99, 102, 241, 0.12); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); }
    .status-completed { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .status-cancelled { background: rgba(244, 63, 94, 0.12); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.3); }

    .task-status-pill { font-size: 0.76rem; font-weight: 700; padding: 4px 12px; border-radius: 100px; display: inline-flex; align-items: center; gap: 6px; }
    .tstatus-done { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .tstatus-progress { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    .tstatus-review { background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3); }
    .tstatus-pending { background: rgba(99, 102, 241, 0.15); color: #a5b4fc; border: 1px solid rgba(99, 102, 241, 0.3); }
    .tstatus-cancelled { background: rgba(244, 63, 94, 0.15); color: #f87171; border: 1px solid rgba(244, 63, 94, 0.3); }

    .empty-state { text-align: center; padding: 32px 16px; color: var(--text-2); background: rgba(0, 0, 0, 0.1); border: 1px dashed var(--border); border-radius: 14px; }
    .empty-state i { font-size: 2.2rem; margin-bottom: 8px; opacity: 0.4; display: block; }
    .empty-state p { font-size: 0.86rem; margin: 0; }

    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: #fff; outline: none; font-family: inherit; font-size: 0.88rem; }
    .required { color: var(--rose-light); }

    /* Light Theme Overrides */
    :host-context(body.light-theme) .client-detail-container { background: #f8fafc !important; }
    :host-context(body.light-theme) .btn-glass-back { background: #ffffff !important; border-color: #cbd5e1 !important; color: #1e293b !important; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05); }
    :host-context(body.light-theme) .btn-glass-back:hover { background: #f1f5f9 !important; color: #4f46e5 !important; border-color: #6366f1 !important; }

    :host-context(body.light-theme) .client-hero-card { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .client-av-lg { background: linear-gradient(135deg, #4f46e5, #7c3aed) !important; }
    :host-context(body.light-theme) .name-row h2 { color: #0f172a !important; }
    :host-context(body.light-theme) .meta-row { color: #475569 !important; }

    :host-context(body.light-theme) .metric-card { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .kpi-title { color: #64748b !important; }
    :host-context(body.light-theme) .kpi-amount { color: #0f172a !important; }

    :host-context(body.light-theme) .section-card { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .section-head h3 { color: #0f172a !important; }

    :host-context(body.light-theme) .crm-table th { background: #f8fafc !important; color: #475569 !important; border-bottom-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .crm-table td { border-bottom-color: #f1f5f9 !important; color: #1e293b !important; }
    :host-context(body.light-theme) .deal-link-title { color: #0f172a !important; }
    :host-context(body.light-theme) .deal-link-title:hover { color: #4f46e5 !important; }
    :host-context(body.light-theme) .payment-method-badge { background: #ffffff !important; border-color: #cbd5e1 !important; color: #334155 !important; }
    :host-context(body.light-theme) .user-chip { background: #ffffff !important; border-color: #cbd5e1 !important; color: #334155 !important; }
    :host-context(body.light-theme) .empty-state { background: #f8fafc !important; border-color: #cbd5e1 !important; color: #475569 !important; }
  `]
})
export class ClientDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  clientId: number | null = null;
  client: any = null;
  deals: any[] = [];
  tasks: any[] = [];
  payments: any[] = [];
  dealOptions: any[] = [];

  loading = true;
  submitting = false;

  totalBilled = 0;
  totalPaid = 0;
  remainingBalance = 0;

  showPaymentModal = false;
  paymentForm!: FormGroup;

  ngOnInit(): void {
    this.initPaymentForm();
    this.route.params.subscribe(params => {
      this.clientId = +params['id'];
      if (this.clientId) {
        this.loadClientData();
      }
    });
  }

  initPaymentForm(): void {
    this.paymentForm = this.fb.group({
      deal_id: [null],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      payment_date: [new Date().toISOString().split('T')[0], Validators.required],
      payment_method: ['cash', Validators.required],
      receipt_ref: ['']
    });
  }

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

  getInitial(): string {
    const name = this.client?.name || this.client?.client_name || '';
    return name ? name[0].toUpperCase() : 'C';
  }

  getDealStatusLabel(status: string): string {
    switch (status) {
      case 'active': return 'نشطة / جارية';
      case 'completed': return 'مكتملة';
      case 'cancelled': return 'ملغاة';
      case 'pending':
      default: return 'قيد الانتظار';
    }
  }

  isTaskCompleted(status: string): boolean {
    return ['completed', 'done', 'approved'].includes(status);
  }

  isTaskInProgress(status: string): boolean {
    return ['in_progress', 'content_creator'].includes(status);
  }

  isTaskInReview(status: string): boolean {
    return ['in_review', 'client_review', 'client_feedback'].includes(status);
  }

  getTaskStatusLabel(status: string): string {
    if (this.isTaskCompleted(status)) return 'مكتملة ومعتمدة';
    if (this.isTaskInReview(status)) return 'بانتظار الاعتماد والمراجعة';
    if (this.isTaskInProgress(status)) return 'قيد التنفيذ والعمليات';
    if (status === 'cancelled') return 'ملغاة';
    return 'قيد الانتظار';
  }

  getTaskStatusIcon(status: string): string {
    if (this.isTaskCompleted(status)) return 'fa-circle-check text-emerald';
    if (this.isTaskInReview(status)) return 'fa-eye text-cyan';
    if (this.isTaskInProgress(status)) return 'fa-spinner fa-spin text-amber';
    if (status === 'cancelled') return 'fa-ban text-rose';
    return 'fa-hourglass-start text-violet';
  }

  getTaskStatusClass(status: string): string {
    if (this.isTaskCompleted(status)) return 'tstatus-done';
    if (this.isTaskInReview(status)) return 'tstatus-review';
    if (this.isTaskInProgress(status)) return 'tstatus-progress';
    if (status === 'cancelled') return 'tstatus-cancelled';
    return 'tstatus-pending';
  }

  getPaymentMethodLabel(method: string): string {
    switch (method) {
      case 'instapay': return 'إنستا باي (InstaPay)';
      case 'bank_transfer': return 'تحويل بنكي';
      case 'cash_hand': return 'نقداً يد بيد';
      case 'cash':
      default: return 'كاش (الخزينة)';
    }
  }

  loadClientData(): void {
    if (!this.clientId) return;
    this.loading = true;

    // Load client basic info
    this.apiService.getUsers('client').subscribe({
      next: (r) => {
        const users = r.data || [];
        const found = users.find((x: any) => x.id === this.clientId);
        if (found) {
          this.client = found;
        } else {
          // Fallback
          this.client = {
            id: this.clientId,
            name: 'عميل ميديا جلو #' + this.clientId,
            email: 'client' + this.clientId + '@mediaglow.com'
          };
        }
        this.fetchClientDealsAndTasks();
      },
      error: () => {
        this.client = {
          id: this.clientId,
          name: 'عميل ميديا جلو #' + this.clientId,
          email: 'client' + this.clientId + '@mediaglow.com'
        };
        this.fetchClientDealsAndTasks();
      }
    });
  }

  fetchClientDealsAndTasks(): void {
    // Load deals for this specific client ONLY
    this.apiService.getDeals().subscribe({
      next: (allDeals) => {
        const cId = this.clientId;
        const cEmail = this.client?.email;
        const cName = this.client?.name;

        const clientDeals = (Array.isArray(allDeals) ? allDeals : []).filter((d: any) =>
          d.client_id === cId ||
          d.client?.id === cId ||
          (cEmail && d.client?.email === cEmail) ||
          (cName && d.client?.name === cName)
        );

        this.deals = clientDeals;

        // Build dropdown options for payment modal
        this.dealOptions = [
          { label: 'عام / رصيد العميل مباشرة', value: null },
          ...this.deals.map((d: any) => ({ label: `${d.title} (متبقي: ${d.remaining_balance || 0} ج.م)`, value: d.id }))
        ];

        // Gather payments made for this client's deals ONLY
        const pList: any[] = [];
        this.deals.forEach((d: any) => {
          if (d.payments && Array.isArray(d.payments)) {
            d.payments.forEach((p: any) => pList.push({ ...p, deal_title: d.title }));
          }
        });
        this.payments = pList.sort((a, b) => new Date(b.created_at || b.payment_date).getTime() - new Date(a.created_at || a.payment_date).getTime());

        // Calculate Totals for this client
        this.totalBilled = this.deals.reduce((acc, d) => acc + Number(d.calculated_total || d.total_price || 0), 0);
        this.totalPaid = this.deals.reduce((acc, d) => acc + Number(d.calculated_paid || d.paid_amount || 0), 0);
        this.remainingBalance = Math.max(0, this.totalBilled - this.totalPaid);

        // Fetch Tasks linked ONLY to this client's deals (main tasks only, exclude subtasks with parent_id)
        this.apiService.getTasks().subscribe(allTasks => {
          const dealIds = this.deals.map((d: any) => d.id);
          this.tasks = (Array.isArray(allTasks) ? allTasks : []).filter((t: any) => dealIds.includes(t.deal_id) && !t.parent_id);
          this.loading = false;
        });
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  openPaymentModal(): void {
    if (!this.client) return;
    this.paymentForm.reset({
      deal_id: this.deals.length > 0 ? this.deals[0].id : null,
      amount: this.remainingBalance || 0,
      payment_date: new Date().toISOString().split('T')[0],
      payment_method: 'cash'
    });
    this.showPaymentModal = true;
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

  savePayment(): void {
    if (this.paymentForm.invalid || !this.client) return;
    this.submitting = true;

    const payload = {
      ...this.paymentForm.value,
      payment_date: this.formatDatePayload(this.paymentForm.value.payment_date),
      client_id: this.client.id || this.clientId
    };

    this.apiService.storeClientPayment(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.showPaymentModal = false;
        this.loadClientData();
      },
      error: () => this.submitting = false
    });
  }
}
