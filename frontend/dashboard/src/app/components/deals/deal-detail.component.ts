import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { ConfirmService } from '../../services/confirm.service';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-deal-detail',
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
    <div class="crm-module-container">
      <!-- Loading Shell -->
      <div class="loading-shell" *ngIf="loading && !deal">
        <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2.2rem; color: var(--violet-light);"></i>
        <span>جاري تحميل كافة تفاصيل العقد والصفقة...</span>
      </div>

      <div *ngIf="deal">
        <!-- Top Back Bar & Actions -->
        <div class="top-nav-bar">
          <button class="btn-glass-back" (click)="goBack()">
            <i class="fa-solid fa-arrow-right"></i> العودة لجميع الصفقات والعقود
          </button>
          
          <div class="top-nav-actions">
            <button class="btn-primary-gradient" *ngIf="!isClient()" (click)="openPaymentModal()">
              <i class="fa-solid fa-money-bill-wave"></i> + تسجيل دفعة جديدة
            </button>
            <button class="btn-glass-purple" (click)="refreshData()">
              <i class="fa-solid fa-rotate-right"></i> تحديث
            </button>
            <button class="btn-glass-danger" *ngIf="isManagerOrAdmin()" (click)="confirmDeleteDeal()" title="حذف الصفقة والعقد">
              <i class="fa-solid fa-trash-can"></i> حذف الصفقة
            </button>
          </div>
        </div>

        <!-- Deal Main Header Banner -->
        <div class="deal-header-card glass-panel">
          <div class="banner-top-row">
            <div class="title-with-badge">
              <span class="deal-code-badge">#DEAL-{{ deal.id }}</span>
              <h2>{{ deal.title }}</h2>
              <span class="status-pill" [ngClass]="'status-' + (deal.status || 'pending')">
                {{ getStatusLabel(deal.status) }}
              </span>
            </div>
            
            <div class="banner-timestamps">
              <span><i class="fa-regular fa-calendar-plus"></i> تاريخ التعاقد: <strong>{{ (deal.created_at | date:'yyyy/MM/dd - hh:mm a') || 'غير محدد' }}</strong></span>
              <span><i class="fa-regular fa-clock"></i> آخر تحديث: <strong>{{ (deal.updated_at | date:'yyyy/MM/dd - hh:mm a') || 'الآن' }}</strong></span>
            </div>
          </div>

          <!-- Parties & Sales Grid -->
          <div class="parties-grid">
            <div class="party-card">
              <div class="party-icon-badge"><i class="fa-solid fa-user-tie"></i></div>
              <div class="party-meta">
                <span class="party-lbl">العميل وصاحب الصفقة</span>
                <strong class="party-val">
                  <a *ngIf="deal.client_id" [routerLink]="['/clients', deal.client_id]" class="client-link">
                    {{ deal.client?.name || 'عميل عام' }}
                  </a>
                  <span *ngIf="!deal.client_id">{{ deal.client?.name || 'عميل عام' }}</span>
                </strong>
                <small *ngIf="deal.client?.email" style="color:var(--text-2);">{{ deal.client?.email }}</small>
              </div>
            </div>

            <div class="party-card">
              <div class="party-icon-badge"><i class="fa-solid fa-sitemap"></i></div>
              <div class="party-meta">
                <span class="party-lbl">القسم الرئيسي المسؤول</span>
                <strong class="party-val">{{ deal.department?.name || 'عام / غير محدد' }}</strong>
              </div>
            </div>

            <div class="party-card">
              <div class="party-icon-badge"><i class="fa-solid fa-briefcase"></i></div>
              <div class="party-meta">
                <span class="party-lbl">مسؤول المبيعات والعمولة</span>
                <strong class="party-val">{{ deal.sales_person?.name || 'غير محدد' }}</strong>
                <small *ngIf="deal.sales_commission_value > 0" style="color:var(--teal-light); font-weight:700;">
                  عمولة: {{ deal.sales_commission_value }} {{ deal.sales_commission_type === 'percentage' ? '%' : 'ج.م' }}
                </small>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Financial & Tasks KPIs Row -->
        <div class="kpis-grid">
          <div class="kpi-card total-kpi">
            <div class="kpi-icon-box"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">إجمالي قيمة العقد</span>
              <span class="kpi-amount">{{ (deal.calculated_total || deal.total_price) | number:'1.2-2' }} <small>ج.م</small></span>
            </div>
          </div>

          <div class="kpi-card paid-kpi">
            <div class="kpi-icon-box"><i class="fa-solid fa-circle-check"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">إجمالي المسدد والمدفوع</span>
              <span class="kpi-amount">{{ (deal.calculated_paid || deal.paid_amount) | number:'1.2-2' }} <small>ج.م</small></span>
              <span class="kpi-percent" *ngIf="(deal.calculated_total || deal.total_price) > 0">
                ({{ (((deal.calculated_paid || deal.paid_amount) / (deal.calculated_total || deal.total_price)) * 100) | number:'1.0-0' }}% تم تسديده)
              </span>
            </div>
          </div>

          <div class="kpi-card remaining-kpi">
            <div class="kpi-icon-box"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">المبلغ المتبقي للتحصيل</span>
              <span class="kpi-amount highlight-red">{{ deal.remaining_balance | number:'1.2-2' }} <small>ج.م</small></span>
            </div>
          </div>

          <div class="kpi-card tasks-kpi">
            <div class="kpi-icon-box"><i class="fa-solid fa-list-check"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">إنجاز المهام والتسليم</span>
              <span class="kpi-amount">{{ getCompletedTasksCount() }} / {{ deal.tasks?.length || 0 }} <small>مكتملة</small></span>
              <span class="kpi-percent" *ngIf="deal.tasks && deal.tasks.length > 0">
                ({{ ((getCompletedTasksCount() / deal.tasks.length) * 100) | number:'1.0-0' }}% مكتمل)
              </span>
            </div>
          </div>
        </div>

        <!-- Main Content Sections Grid -->
        <div class="sections-column">

          <!-- 1. Scope & Description -->
          <div class="section-card glass-panel">
            <div class="section-card-hd">
              <h3><i class="fa-solid fa-file-signature" style="color:var(--violet-light);"></i> النطاق والمواصفات المتفق عليها بالتفصيل (Agreed Scope)</h3>
            </div>
            <div class="written-body-box">
              <div *ngIf="deal.agreed_scope" class="scope-paragraph">
                <span class="sub-label">النطاق والاشتراطات:</span>
                <p>{{ deal.agreed_scope }}</p>
              </div>
              <div *ngIf="deal.description" class="desc-paragraph">
                <span class="sub-label">الوصف والتفاصيل:</span>
                <p>{{ deal.description }}</p>
              </div>
              <div *ngIf="!deal.agreed_scope && !deal.description" class="empty-note">
                لم يتم إضافة تفاصيل أو مواصفات مكتوبة للنطاق في العقد أثناء إنشاء الصفقة.
              </div>
            </div>
          </div>

          <!-- 2. Financial Payments Ledger -->
          <div class="section-card glass-panel">
            <div class="section-card-hd flex-between">
              <h3><i class="fa-solid fa-receipt" style="color:var(--emerald-light);"></i> سجل الدفعات والتحصيلات المالية (Payments Ledger)</h3>
              <button class="btn-sm-primary" *ngIf="!isClient()" (click)="openPaymentModal()">
                <i class="fa-solid fa-plus"></i> تسجيل دفعة جديدة
              </button>
            </div>

            <div class="table-responsive" *ngIf="deal.payments && deal.payments.length > 0">
              <table class="crm-table">
                <thead>
                  <tr>
                    <th>تاريخ التسديد</th>
                    <th>المبلغ المدفوع</th>
                    <th>طريقة التحصيل / الدفع</th>
                    <th>رقم المرجع / الإيصال</th>
                    <th>تاريخ القيد بالسيستم</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let p of deal.payments">
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
                      {{ p.receipt_ref || p.reference_number || 'بدون رقم مرجع' }}
                    </td>
                    <td style="font-size:0.78rem; color:var(--text-3);">
                      {{ (p.created_at | date:'yyyy/MM/dd - hh:mm a') || '-' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div *ngIf="!deal.payments || deal.payments.length === 0" class="empty-state-card">
              <i class="fa-solid fa-file-circle-xmark" style="font-size:2rem; color:var(--text-3); margin-bottom:8px;"></i>
              <div style="font-weight:700; color:var(--text);">لا توجد أي تحصيلات مسبقة</div>
              <p style="color:var(--text-2); font-size:0.85rem; margin-top:4px;">لم يتم تسجيل أي أقساط أو دفعات مالية لهذه الصفقة حتى الآن.</p>
              <button class="btn-sm-primary" *ngIf="!isClient()" style="margin-top:12px;" (click)="openPaymentModal()">
                + تسجيل أول دفعة مالية
              </button>
            </div>
          </div>

          <!-- 3. Associated Tasks Breakdown -->
          <div class="section-card glass-panel">
            <div class="section-card-hd flex-between">
              <h3><i class="fa-solid fa-tasks" style="color:var(--amber-light);"></i> تفاصيل وحالة المهام المرتبطة بالصفقة (Tasks Breakdown)</h3>
              <span class="tasks-counter-badge">
                {{ getCompletedTasksCount() }} مكتملة من إجمالي {{ deal.tasks?.length || 0 }}
              </span>
            </div>

            <div class="table-responsive" *ngIf="deal.tasks && deal.tasks.length > 0">
              <table class="crm-table">
                <thead>
                  <tr>
                    <th>عنوان المهمة</th>
                    <th>القسم المنفذ</th>
                    <th>فريق العمل المسند</th>
                    <th>سعر العميل</th>
                    <th *ngIf="isManagerOrAdmin()">مستحقات الموظف</th>
                    <th>تاريخ الإنشاء</th>
                    <th>حالة الإنجاز</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let t of deal.tasks">
                    <td style="font-weight:700; color:var(--text);">{{ t.title }}</td>
                    <td><span class="dept-badge">{{ t.department?.name || 'عام' }}</span></td>
                    <td>
                      <div class="users-flex" *ngIf="t.users && t.users.length > 0">
                        <span class="user-chip" *ngFor="let u of t.users">{{ u.name }}</span>
                      </div>
                      <span *ngIf="!t.users || t.users.length === 0" style="color:var(--text-3); font-size:0.75rem;">غير مسند</span>
                    </td>
                    <td style="font-weight:700; color:var(--text);">{{ (t.client_price || 0) | number:'1.2-2' }} ج.م</td>
                    <td *ngIf="isManagerOrAdmin()" style="color:var(--amber-light); font-weight:700;">
                      <span *ngIf="t.employee_price > 0">{{ t.employee_price | number:'1.2-2' }} ج.م</span>
                      <span *ngIf="!t.employee_price || t.employee_price == 0" style="color:var(--text-3); font-size:0.78rem;">—</span>
                    </td>
                    <td style="font-size:0.8rem; color:var(--text-2);">
                      {{ (t.created_at | date:'yyyy/MM/dd') || 'غير محدد' }}
                    </td>
                    <td>
                      <span class="task-status-pill" [ngClass]="getTaskStatusClass(t.status)">
                        <i class="fa-solid" [ngClass]="getTaskStatusIcon(t.status)"></i>
                        {{ getTaskStatusLabel(t.status) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div *ngIf="!deal.tasks || deal.tasks.length === 0" class="empty-state-card">
              <i class="fa-solid fa-list-check" style="font-size:2rem; color:var(--text-3); margin-bottom:8px;"></i>
              <div style="font-weight:700; color:var(--text);">لا توجد مهام مسندة</div>
              <p style="color:var(--text-2); font-size:0.85rem; margin-top:4px;">لم تقم الأقسام بنشر مهام تابعة لترخيص وتنفيذ هذه الصفقة بعد.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- PrimeNG Dialog: Add Payment -->
      <p-dialog [(visible)]="showPaymentModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'تسجيل دفعة / قسط: ' + (deal?.title || '')" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;" *ngIf="deal">
            <div class="form-group">
              <label>مبلغ الدفعة (ج.م) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" [placeholder]="deal.remaining_balance" />
              <small style="color:var(--text-2);">المتبقي في ذمة العميل: {{ deal.remaining_balance | number:'1.2-2' }} ج.م</small>
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
    .crm-module-container { padding: 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }

    .loading-shell { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; gap: 16px; color: var(--text-2); font-size: 0.95rem; }

    /* Top Nav Bar */
    .top-nav-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; gap: 16px; flex-wrap: wrap; }
    .btn-glass-back { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: var(--text); padding: 10px 18px; border-radius: 8px; font-size: 0.88rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: all 0.25s; font-family: inherit; }
    .btn-glass-back:hover { background: rgba(255, 255, 255, 0.1); border-color: var(--violet-light); color: var(--violet-light); transform: translateX(3px); }

    .top-nav-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .btn-primary-gradient { background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none; color: #ffffff; padding: 10px 20px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35); transition: all 0.25s; font-family: inherit; }
    .btn-primary-gradient:hover { box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5); transform: translateY(-2px); }

    .btn-glass-purple { background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25); color: var(--text); padding: 10px 16px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: all 0.25s; font-family: inherit; }
    .btn-glass-purple:hover { background: rgba(99, 102, 241, 0.2); }

    .btn-glass-danger { background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.25); color: #fb7185; padding: 10px 16px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: all 0.25s; font-family: inherit; }
    .btn-glass-danger:hover { background: rgba(244, 63, 94, 0.22); color: #f43f5e; border-color: #f43f5e; }

    /* Header Card Banner */
    .deal-header-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 26px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 20px; box-shadow: var(--shadow-sm); }
    .banner-top-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; border-bottom: 1px solid var(--border); padding-bottom: 18px; }
    .title-with-badge { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .deal-code-badge { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); font-family: monospace; font-size: 0.82rem; font-weight: 800; padding: 5px 12px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.25); }
    .title-with-badge h2 { font-size: 1.5rem; font-weight: 800; color: var(--text); margin: 0; }

    .status-pill { font-size: 0.74rem; font-weight: 800; padding: 4px 12px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .status-pending { background: rgba(245, 158, 11, 0.12); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); }
    .status-active { background: rgba(99, 102, 241, 0.12); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); }
    .status-completed { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .status-cancelled { background: rgba(244, 63, 94, 0.12); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.3); }

    .banner-timestamps { display: flex; gap: 20px; color: var(--text-2); font-size: 0.8rem; flex-wrap: wrap; }
    .banner-timestamps i { color: var(--violet-light); margin-left: 5px; }
    .banner-timestamps strong { color: var(--text); }

    /* Parties Grid */
    .parties-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
    .party-card { background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border); border-radius: 8px; padding: 14px 18px; display: flex; align-items: center; gap: 14px; }
    .party-icon-badge { width: 42px; height: 42px; border-radius: 8px; background: rgba(99, 102, 241, 0.12); color: var(--violet-light); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
    .party-meta { display: flex; flex-direction: column; gap: 2px; }
    .party-lbl { font-size: 0.72rem; color: var(--text-3); font-weight: 700; text-transform: uppercase; }
    .party-val { font-size: 0.95rem; color: var(--text); font-weight: 700; }
    .client-link { color: var(--violet-light); text-decoration: none; transition: underline 0.2s; }
    .client-link:hover { text-decoration: underline; }

    /* KPIs Grid */
    .kpis-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-bottom: 26px; }
    .kpi-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 20px; display: flex; align-items: center; gap: 16px; box-shadow: var(--shadow-sm); transition: transform 0.2s; }
    .kpi-card:hover { transform: translateY(-2px); }

    .kpi-icon-box { width: 48px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0; }
    .total-kpi .kpi-icon-box { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); }
    .paid-kpi .kpi-icon-box { background: rgba(16, 185, 129, 0.12); color: #34d399; }
    .remaining-kpi .kpi-icon-box { background: rgba(244, 63, 94, 0.12); color: #fb7185; }
    .tasks-kpi .kpi-icon-box { background: rgba(245, 158, 11, 0.12); color: #fbbf24; }

    .kpi-content { display: flex; flex-direction: column; gap: 3px; }
    .kpi-title { font-size: 0.78rem; color: var(--text-2); font-weight: 700; }
    .kpi-amount { font-size: 1.3rem; font-weight: 800; color: var(--text); line-height: 1.2; }
    .kpi-amount small { font-size: 0.76rem; font-weight: 600; color: var(--text-2); }
    .highlight-red { color: #f43f5e; }
    .kpi-percent { font-size: 0.74rem; color: #34d399; font-weight: 700; }

    /* Sections Column */
    .sections-column { display: flex; flex-direction: column; gap: 24px; }
    .section-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 24px; display: flex; flex-direction: column; gap: 18px; box-shadow: var(--shadow-sm); }
    .section-card-hd h3 { font-size: 1.08rem; font-weight: 800; color: var(--text); margin: 0; display: flex; align-items: center; gap: 10px; }
    .flex-between { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }

    .written-body-box { background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border); border-radius: 8px; padding: 18px; display: flex; flex-direction: column; gap: 14px; }
    .sub-label { font-size: 0.74rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; display: block; }
    .written-body-box p { font-size: 0.92rem; line-height: 1.65; color: var(--text); margin: 0; }
    .empty-note { color: var(--text-3); font-style: italic; font-size: 0.85rem; }

    .btn-sm-primary { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); border: 1px solid rgba(99, 102, 241, 0.25); padding: 6px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: inherit; display: inline-flex; align-items: center; gap: 6px; }
    .btn-sm-primary:hover { background: var(--violet); color: #ffffff; }

    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 12px 18px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.74rem; font-weight: 800; text-transform: uppercase; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.88rem; color: var(--text); vertical-align: middle; }

    .payment-method-badge { font-size: 0.76rem; font-weight: 700; color: var(--text-2); background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 8px; }

    .dept-badge { background: rgba(99, 102, 241, 0.1); color: var(--violet-light); border: 1px solid rgba(99, 102, 241, 0.2); padding: 3px 9px; border-radius: 6px; font-size: 0.74rem; font-weight: 700; }
    .users-flex { display: flex; gap: 5px; flex-wrap: wrap; }
    .user-chip { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); padding: 3px 8px; border-radius: 8px; font-size: 0.72rem; color: var(--text-2); }
    
    .task-status-pill { font-size: 0.76rem; font-weight: 700; padding: 4px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; }
    .tstatus-completed { background: rgba(16, 185, 129, 0.12); color: #34d399; }
    .tstatus-in_progress { background: rgba(99, 102, 241, 0.12); color: #818cf8; }
    .tstatus-pending { background: rgba(245, 158, 11, 0.12); color: #fbbf24; }

    .tasks-counter-badge { font-size: 0.76rem; font-weight: 700; background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25); padding: 4px 12px; border-radius: 8px; }

    .empty-state-card { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; text-align: center; background: rgba(0, 0, 0, 0.1); border: 1px dashed var(--border); border-radius: 8px; }

    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: #fff; outline: none; font-family: inherit; font-size: 0.88rem; }
    .required { color: var(--rose-light); }

    /* Light Theme Overrides */
    :host-context(body.light-theme) .crm-module-container { background: #f8fafc !important; }
    :host-context(body.light-theme) .btn-glass-back { background: #ffffff !important; border-color: #cbd5e1 !important; color: #1e293b !important; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05); }
    :host-context(body.light-theme) .btn-glass-back:hover { background: #f1f5f9 !important; color: #4f46e5 !important; border-color: #6366f1 !important; }

    :host-context(body.light-theme) .deal-header-card { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .banner-top-row { border-bottom-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .party-card { background: #f8fafc !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .party-icon-badge { background: #e0e7ff !important; color: #4338ca !important; }
    :host-context(body.light-theme) .party-val { color: #0f172a !important; }

    :host-context(body.light-theme) .kpi-card { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .kpi-title { color: #64748b !important; }
    :host-context(body.light-theme) .kpi-amount { color: #0f172a !important; }

    :host-context(body.light-theme) .section-card { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .section-card-hd h3 { color: #0f172a !important; }
    :host-context(body.light-theme) .written-body-box { background: #f8fafc !important; border-color: #e2e8f0 !important; color: #1e293b !important; }

    :host-context(body.light-theme) .crm-table th { background: #f1f5f9 !important; color: #475569 !important; border-bottom-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .crm-table td { border-bottom-color: #f1f5f9 !important; color: #1e293b !important; }
    :host-context(body.light-theme) .payment-method-badge { background: #ffffff !important; border-color: #cbd5e1 !important; color: #334155 !important; }
    :host-context(body.light-theme) .user-chip { background: #ffffff !important; border-color: #cbd5e1 !important; color: #334155 !important; }
    :host-context(body.light-theme) .empty-state-card { background: #f8fafc !important; border-color: #cbd5e1 !important; }
    :host-context(body.light-theme) .form-group label { color: #334155 !important; }
    :host-context(body.light-theme) .form-group input { background: #ffffff !important; border-color: #cbd5e1 !important; color: #0f172a !important; }
  `]
})
export class DealDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private apiService = inject(ApiService);
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);
  private fb = inject(FormBuilder);

  dealId: string | null = null;
  deal: any = null;
  loading = true;
  submitting = false;

  showPaymentModal = false;
  paymentForm!: FormGroup;

  ngOnInit(): void {
    this.initPaymentForm();
    this.route.paramMap.subscribe(params => {
      this.dealId = params.get('id');
      if (this.dealId) {
        this.loadDealDetails(this.dealId);
      }
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

  initPaymentForm(): void {
    this.paymentForm = this.fb.group({
      amount: [0, [Validators.required, Validators.min(0.01)]],
      payment_date: [new Date().toISOString().split('T')[0], Validators.required],
      payment_method: ['cash', Validators.required],
      receipt_ref: ['']
    });
  }

  loadDealDetails(id: string): void {
    this.loading = true;
    this.apiService.getDeal(id).subscribe({
      next: (res) => {
        this.deal = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  refreshData(): void {
    if (this.dealId) this.loadDealDetails(this.dealId);
  }

  goBack(): void {
    this.router.navigate(['/deals']);
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

  getCompletedTasksCount(): number {
    if (!this.deal || !this.deal.tasks) return 0;
    return this.deal.tasks.filter((t: any) => this.isTaskCompleted(t.status)).length;
  }

  openPaymentModal(): void {
    if (!this.deal) return;
    this.paymentForm.reset({
      amount: this.deal.remaining_balance || 0,
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
    if (this.paymentForm.invalid || !this.deal) return;
    this.submitting = true;

    const payload = {
      ...this.paymentForm.value,
      payment_date: this.formatDatePayload(this.paymentForm.value.payment_date),
      deal_id: this.deal.id,
      client_id: this.deal.client_id
    };

    this.apiService.storeClientPayment(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.showPaymentModal = false;
        this.refreshData();
      },
      error: () => this.submitting = false
    });
  }

  isManagerOrAdmin(): boolean {
    const userStr = localStorage.getItem('mediaglow_user') || localStorage.getItem('user');
    if (!userStr) return true;
    try {
      const user = JSON.parse(userStr);
      return ['super_admin', 'admin', 'department_manager', 'Super Admin'].includes(user.role);
    } catch {
      return true;
    }
  }

  confirmDeleteDeal(): void {
    if (!this.deal) return;
    this.confirmService.confirm({
      title: 'تأكيد حذف الصفقة والعقد',
      message: `هل أنت متأكد من رغبتك في حذف الصفقة "${this.deal.title}" والمهام المرتبطة بها نهائياً؟`,
      confirmText: 'نعم، حذف الصفقة',
      cancelText: 'تراجع وإلغاء',
      type: 'danger',
      icon: 'fa-solid fa-trash-can',
      accept: () => {
        this.loading = true;
        this.apiService.deleteDeal(this.deal.id, false).subscribe({
          next: () => {
            this.loading = false;
            this.toastService.success(`تم حذف الصفقة "${this.deal.title}" بنجاح`, 'تم الحذف');
            this.router.navigate(['/deals']);
          },
          error: (err) => {
            this.loading = false;
            this.toastService.error(err.error?.message || 'تعذر حذف الصفقة', 'خطأ بالحذف');
          }
        });
      }
    });
  }
}
