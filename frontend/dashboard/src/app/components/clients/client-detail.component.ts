import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { ConfirmService } from '../../services/confirm.service';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

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
    DropdownModule
  ],
  template: `
    <div class="client-detail-container">
      <!-- Loading Shell -->
      <div class="loading-shell" *ngIf="loading && !client">
        <div class="cosmic-spinner"></div>
        <p>جاري تحميل ملف العميل 360 والأرصدة المالية والصفقات...</p>
      </div>

      <!-- Error Shell -->
      <div class="error-shell" *ngIf="!loading && !client">
        <div class="error-icon-box">
          <i class="fa-solid fa-circle-exclamation"></i>
        </div>
        <h3>لم يتم العثور على بيانات العميل</h3>
        <p>تعذر الوصول إلى هذا العميل أو ربما تم حذفه من النظام.</p>
        <button class="btn-primary-gradient" routerLink="/clients">
          <i class="fa-solid fa-arrow-right"></i> العودة لقائمة العملاء
        </button>
      </div>

      <!-- Main Content -->
      <div *ngIf="client" class="client-portal-content">
        <!-- Top Breadcrumb & Action Bar -->
        <div class="top-nav-bar">
          <div class="nav-breadcrumbs">
            <a routerLink="/clients" class="bc-link">
              <i class="fa-solid fa-users"></i> العملاء
            </a>
            <span class="bc-sep">/</span>
            <span class="bc-cur">ملف العميل #{{ client.client_code || client.id || clientId }}</span>
          </div>

          <div class="top-nav-actions">
            <button class="btn-primary-gradient" *ngIf="!isClient()" (click)="openPaymentModal()">
              <i class="fa-solid fa-money-bill-wave"></i> تسجيل دفعة جديدة
            </button>
            <button class="btn-glass-primary" *ngIf="!isClient()" (click)="openEditModal()" title="تعديل بيانات العميل وكلمة السر">
              <i class="fa-solid fa-user-pen"></i> تعديل الملف
            </button>
            <button
              *ngIf="!isClient()"
              class="btn-glass-warning"
              (click)="toggleHold()"
              [title]="client.is_hold ? 'تفعيل الحساب مجدداً' : 'تعليق الحساب مؤقتاً (Hold)'"
            >
              <i [class]="client.is_hold ? 'fa-solid fa-play' : 'fa-solid fa-pause'"></i>
              {{ client.is_hold ? 'إلغاء التعليق (تفعيل)' : 'تعليق (Hold)' }}
            </button>
            <button class="btn-glass-action" (click)="loadClientData()" title="تحديث البيانات فورياً">
              <i class="fa-solid fa-rotate-right" [class.fa-spin]="loading"></i>
            </button>
            <button class="btn-glass-danger" *ngIf="!isClient()" (click)="confirmDeleteClient()" title="حذف العميل نهائياً">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>

        <!-- 360 Executive Client Profile Banner -->
        <div class="client-hero-card" [class.user-on-hold]="client.is_hold">
          <div class="hero-main-wrapper">
            <div class="hero-left-info">
              <div class="client-avatar-wrapper">
                <div class="client-av-lg">{{ getInitial() }}</div>
                <div class="online-indicator" [class.is-hold]="client.is_hold" [title]="client.is_hold ? 'حساب معلق' : 'حساب نشط'"></div>
              </div>

              <div class="client-titles">
                <div class="name-row">
                  <h2>{{ client.name || client.client_name }}</h2>
                  <span class="verified-badge" title="عميل مسجل ومعتمد">
                    <i class="fa-solid fa-shield-check"></i> عميل VIP
                  </span>
                  <div class="client-id-pill-wrap" (click)="copyCode(client.client_code || client.id || clientId)" title="انقر لنسخ كود العميل">
                    <span class="client-id-pill">#CLIENT-{{ client.client_code || client.id || clientId }}</span>
                    <i class="fa-regular fa-copy"></i>
                  </div>
                  <span *ngIf="client.is_hold" class="hold-pill">
                    <i class="fa-solid fa-circle-pause"></i> معلق مؤقتاً (Hold)
                  </span>
                </div>

                <!-- Contact & Meta Chips -->
                <div class="contact-chips-row">
                  <a *ngIf="client.email || client.client_email" [href]="'mailto:' + (client.email || client.client_email)" class="contact-chip" title="إرسال بريد إلكتروني">
                    <i class="fa-solid fa-envelope"></i>
                    <span>{{ client.email || client.client_email }}</span>
                  </a>

                  <div *ngIf="client.phone" class="phone-chip-group">
                    <a [href]="'tel:' + client.phone" class="contact-chip phone-chip" title="اتصال هاتفي">
                      <i class="fa-solid fa-phone"></i>
                      <span>{{ client.phone }}</span>
                    </a>
                    <a [href]="getWhatsAppUrl(client.phone)" target="_blank" rel="noopener noreferrer" class="contact-chip wa-chip" title="محادثة واتساب مباشرة">
                      <i class="fa-brands fa-whatsapp"></i>
                      <span>واتساب</span>
                    </a>
                  </div>

                  <span class="contact-chip date-chip">
                    <i class="fa-regular fa-calendar-check"></i>
                    <span>منذ: {{ (client.created_at | date:'yyyy/MM/dd') || 'غير محدد' }}</span>
                  </span>
                </div>
              </div>
            </div>

            <!-- Hero Right Quick Metric Badges -->
            <div class="hero-right-metrics">
              <div class="hrm-item">
                <span class="hrm-lbl">إجمالي الصفقات</span>
                <span class="hrm-val text-violet">{{ deals.length }}</span>
              </div>
              <div class="hrm-divider"></div>
              <div class="hrm-item">
                <span class="hrm-lbl">نسبة التحصيل</span>
                <span class="hrm-val" [ngClass]="getCollectionRateClass()">
                  {{ totalBilled > 0 ? (((totalPaid / totalBilled) * 100) | number:'1.0-0') : 0 }}%
                </span>
              </div>
              <div class="hrm-divider"></div>
              <div class="hrm-item">
                <span class="hrm-lbl">المسدد بالفعل</span>
                <span class="hrm-val text-emerald">{{ totalPaid | number:'1.0-0' }} <small>ج.م</small></span>
              </div>
            </div>
          </div>

          <!-- Quick Progress Bar at bottom of Hero -->
          <div class="hero-progress-strip" *ngIf="totalBilled > 0">
            <div class="hps-track">
              <div
                class="hps-fill"
                [style.width.%]="getProgressPercentage()"
                [title]="'المسدد: ' + (getProgressPercentage() | number:'1.0-0') + '%'"
              ></div>
            </div>
          </div>
        </div>

        <!-- Financial & Operations KPI Grid -->
        <div class="metrics-grid">
          <!-- Card 1: Total Billed -->
          <div class="metric-card kpi-total">
            <div class="mc-head">
              <div class="kpi-icon-box indigo">
                <i class="fa-solid fa-file-invoice-dollar"></i>
              </div>
              <span class="kpi-tag indigo">إجمالي التعاقدات</span>
            </div>
            <div class="mc-body">
              <div class="kpi-amount">
                {{ totalBilled | number:'1.2-2' }} <small>ج.م</small>
              </div>
              <div class="kpi-sub">
                <span>{{ deals.length }} صفقات وعقود معتمدة</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Total Paid -->
          <div class="metric-card kpi-paid">
            <div class="mc-head">
              <div class="kpi-icon-box emerald">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <span class="kpi-tag emerald">المحصل والمسدد</span>
            </div>
            <div class="mc-body">
              <div class="kpi-amount text-emerald">
                {{ totalPaid | number:'1.2-2' }} <small>ج.م</small>
              </div>
              <div class="kpi-sub text-emerald">
                <span>{{ payments.length }} دفعات مسددة بنجاح</span>
                <span class="kpi-rate-badge" *ngIf="totalBilled > 0">
                  {{ ((totalPaid / totalBilled) * 100) | number:'1.0-0' }}%
                </span>
              </div>
            </div>
            <div class="mc-mini-bar" *ngIf="totalBilled > 0">
              <div class="mc-mini-fill emerald" [style.width.%]="getProgressPercentage()"></div>
            </div>
          </div>

          <!-- Card 3: Remaining Balance -->
          <div class="metric-card kpi-remaining">
            <div class="mc-head">
              <div class="kpi-icon-box rose">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <span class="kpi-tag rose">الرصيد المتبقي</span>
            </div>
            <div class="mc-body">
              <div class="kpi-amount" [ngClass]="remainingBalance > 0 ? 'text-rose' : 'text-emerald'">
                {{ remainingBalance | number:'1.2-2' }} <small>ج.م</small>
              </div>
              <div class="kpi-sub">
                <span *ngIf="remainingBalance > 0" class="text-rose font-bold">
                  <i class="fa-solid fa-circle-dot"></i> مستحق للتحصيل
                </span>
                <span *ngIf="remainingBalance <= 0" class="text-emerald font-bold">
                  <i class="fa-solid fa-badge-check"></i> خالص بالكامل 100%
                </span>
              </div>
            </div>
          </div>

          <!-- Card 4: Tasks & Deliverables -->
          <div class="metric-card kpi-deals">
            <div class="mc-head">
              <div class="kpi-icon-box cyan">
                <i class="fa-solid fa-chart-pie"></i>
              </div>
              <span class="kpi-tag cyan">المخرجات والمهام</span>
            </div>
            <div class="mc-body">
              <div class="kpi-amount text-cyan">
                {{ tasks.length }} <small>مهمة تنفيذية</small>
              </div>
              <div class="kpi-sub text-cyan">
                <span>{{ getCompletedTasksCount() }} مكتملة</span>
                <span class="kpi-rate-badge cyan" *ngIf="tasks.length > 0">
                  {{ ((getCompletedTasksCount() / tasks.length) * 100) | number:'1.0-0' }}%
                </span>
              </div>
            </div>
            <div class="mc-mini-bar" *ngIf="tasks.length > 0">
              <div class="mc-mini-fill cyan" [style.width.%]="getTaskCompletionPercentage()"></div>
            </div>
          </div>
        </div>

        <!-- Section 1: Categorized Deals & Contracts -->
        <div class="section-card">
          <div class="section-head flex-between">
            <div class="sh-left">
              <div class="sh-icon indigo"><i class="fa-solid fa-file-contract"></i></div>
              <div>
                <h3>صفقات وعقود العميل</h3>
                <p>مقسمة حسب مراحل التنفيذ مع تفصيل مالي دقيق لكل عقد</p>
              </div>
            </div>

            <!-- Segmented Stage Tabs -->
            <div class="deals-stage-tabs">
              <button class="stage-tab-btn" [class.active]="activeDealTab === 'all'" (click)="activeDealTab = 'all'">
                الكل ({{ deals.length }})
              </button>
              <button class="stage-tab-btn stage-required" [class.active]="activeDealTab === 'required'" (click)="activeDealTab = 'required'">
                <i class="fa-solid fa-clock"></i> المطلوبة ({{ requiredDeals.length }})
              </button>
              <button class="stage-tab-btn stage-progress" [class.active]="activeDealTab === 'in_progress'" (click)="activeDealTab = 'in_progress'">
                <i class="fa-solid fa-spinner"></i> قيد التنفيذ ({{ inProgressDeals.length }})
              </button>
              <button class="stage-tab-btn stage-completed" [class.active]="activeDealTab === 'completed'" (click)="activeDealTab = 'completed'">
                <i class="fa-solid fa-circle-check"></i> المكتملة ({{ completedDeals.length }})
              </button>
            </div>
          </div>

          <!-- Deals Table -->
          <div class="table-wrap" *ngIf="displayedDeals.length > 0">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>عنوان الصفقة والعقد</th>
                  <th>القسم</th>
                  <th>تاريخ التعاقد</th>
                  <th>قيمة العقد</th>
                  <th>المدفوع</th>
                  <th>المتبقي</th>
                  <th>نسبة السداد</th>
                  <th>الحالة</th>
                  <th>إجراءات</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let deal of displayedDeals">
                  <td class="td-title">
                    <a [routerLink]="['/deals', deal.id]" class="deal-link-title" title="عرض تفاصيل الصفقة">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      <span>{{ deal.title }}</span>
                    </a>
                  </td>
                  <td>
                    <span class="dept-badge">{{ deal.department?.name || 'عام' }}</span>
                  </td>
                  <td class="td-date">
                    <i class="fa-regular fa-calendar"></i>
                    {{ (deal.created_at | date:'yyyy/MM/dd') || 'غير محدد' }}
                  </td>
                  <td class="td-money bold">
                    {{ (deal.calculated_total || deal.total_price || 0) | number:'1.2-2' }} ج.م
                  </td>
                  <td class="td-money text-emerald bold">
                    {{ (deal.calculated_paid || deal.paid_amount || 0) | number:'1.2-2' }} ج.م
                  </td>
                  <td class="td-money text-rose bold">
                    {{ (deal.remaining_balance || 0) | number:'1.2-2' }} ج.م
                  </td>
                  <td class="td-progress">
                    <div class="row-progress-wrap">
                      <div class="row-progress-bar">
                        <div class="row-progress-fill" [style.width.%]="getDealProgressPercentage(deal)"></div>
                      </div>
                      <span class="row-progress-text">{{ getDealProgressPercentage(deal) | number:'1.0-0' }}%</span>
                    </div>
                  </td>
                  <td>
                    <span class="status-pill" [ngClass]="'status-' + (deal.status || 'pending')">
                      {{ getDealStatusLabel(deal.status) }}
                    </span>
                  </td>
                  <td>
                    <button class="btn-action-view" [routerLink]="['/deals', deal.id]" title="فتح التفاصيل الكاملة">
                      <i class="fa-solid fa-eye"></i> التفاصيل
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="displayedDeals.length === 0" class="empty-state">
            <div class="empty-icon-wrap"><i class="fa-solid fa-file-circle-xmark"></i></div>
            <h4>لا توجد صفقات في هذا التصنيف</h4>
            <p>لم يتم تسجيل أي صفقات تطابق هذا التبويب للعميل حالياً.</p>
          </div>
        </div>

        <!-- Section 2: Payments Ledger -->
        <div class="section-card">
          <div class="section-head flex-between">
            <div class="sh-left">
              <div class="sh-icon emerald"><i class="fa-solid fa-receipt"></i></div>
              <div>
                <h3>سجل التحصيلات والدفعات المالية</h3>
                <p>كشف حساب تاريخي بكافة الدفعات المسجلة وطرق تحصيلها</p>
              </div>
            </div>
            <button class="btn-primary-gradient sm" *ngIf="!isClient()" (click)="openPaymentModal()">
              <i class="fa-solid fa-plus"></i> تسجيل دفعة جديدة
            </button>
          </div>

          <div class="table-wrap" *ngIf="payments.length > 0">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>تاريخ التسديد</th>
                  <th>المبلغ المسدد</th>
                  <th>طريقة التحصيل</th>
                  <th>رقم المرجع / الإيصال</th>
                  <th>الصفقة المرتبطة</th>
                  <th>المستلم / الحالة</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of payments">
                  <td class="td-date bold">
                    <i class="fa-regular fa-calendar-check text-emerald"></i>
                    {{ (p.payment_date | date:'yyyy/MM/dd') || (p.created_at | date:'yyyy/MM/dd') }}
                  </td>
                  <td class="td-money text-emerald bold font-lg">
                    {{ p.amount | number:'1.2-2' }} ج.م
                  </td>
                  <td>
                    <span class="payment-method-badge" [ngClass]="p.payment_method">
                      <i [class]="getPaymentMethodIcon(p.payment_method)"></i>
                      {{ getPaymentMethodLabel(p.payment_method) }}
                    </span>
                  </td>
                  <td>
                    <span class="receipt-code-badge" (click)="copyCode(p.receipt_ref || p.reference_number)" title="انقر للنسخ">
                      <i class="fa-regular fa-hashtag"></i>
                      {{ p.receipt_ref || p.reference_number || 'بدون إيصال' }}
                    </span>
                  </td>
                  <td class="td-title">
                    <span *ngIf="p.deal_id && p.deal_title">
                      <a [routerLink]="['/deals', p.deal_id]" class="deal-link-title sm">
                        <i class="fa-solid fa-file-contract"></i> {{ p.deal_title }}
                      </a>
                    </span>
                    <span *ngIf="!p.deal_id" class="text-muted">دفعة على الحساب العام</span>
                  </td>
                  <td>
                    <span class="status-pill status-completed">
                      <i class="fa-solid fa-check"></i> محصل ومثبت
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="payments.length === 0" class="empty-state">
            <div class="empty-icon-wrap emerald"><i class="fa-solid fa-file-invoice"></i></div>
            <h4>لا توجد دفعات مالية مسجلة بعد</h4>
            <p>لم يتم تسجيل أي دفعات مالية مسددة للعميل حتى الآن.</p>
            <button class="btn-primary-gradient sm" *ngIf="!isClient()" (click)="openPaymentModal()" style="margin-top:14px;">
              <i class="fa-solid fa-plus"></i> تسجيل أول دفعة
            </button>
          </div>
        </div>

        <!-- Section 3: Tasks & Deliverables Breakdown -->
        <div class="section-card">
          <div class="section-head flex-between">
            <div class="sh-left">
              <div class="sh-icon cyan"><i class="fa-solid fa-list-check"></i></div>
              <div>
                <h3>المخرجات والمهام التنفيذية للعميل</h3>
                <p>متابعة سير العمل على المشروعات والمهام التابعة لصفقات العميل</p>
              </div>
            </div>
            <span class="badge-count cyan">{{ tasks.length }} مهمة</span>
          </div>

          <div class="table-wrap" *ngIf="tasks.length > 0">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>عنوان المهمة</th>
                  <th>الحالة الحالية</th>
                  <th>الصفقة التابعة لها</th>
                  <th>تاريخ الاستحقاق</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let t of tasks">
                  <td class="td-title bold">
                    <i class="fa-solid fa-circle-check text-cyan" style="margin-left:8px;"></i>
                    <span>{{ t.title }}</span>
                  </td>
                  <td>
                    <span class="task-status-pill" [ngClass]="getTaskStatusClass(t.status)">
                      <i [class]="getTaskStatusIcon(t.status)"></i> {{ getTaskStatusLabel(t.status) }}
                    </span>
                  </td>
                  <td class="text-muted">
                    <span *ngIf="t.deal">
                      <a [routerLink]="['/deals', t.deal.id]" class="deal-link-title sm">
                        {{ t.deal.title }}
                      </a>
                    </span>
                    <span *ngIf="!t.deal">مهمة مباشرة</span>
                  </td>
                  <td class="td-date">
                    <i class="fa-regular fa-clock"></i>
                    {{ (t.delivery_date || t.due_date | date:'yyyy/MM/dd') || 'غير محدد' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="tasks.length === 0" class="empty-state">
            <div class="empty-icon-wrap cyan"><i class="fa-solid fa-list-check"></i></div>
            <h4>لا توجد مهام تنفيذية</h4>
            <p>لا توجد مهام أو مخرجات مرتبطة بصفقات هذا العميل حالياً.</p>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add Payment -->
      <p-dialog
        [(visible)]="showPaymentModal"
        [modal]="true"
        [dismissableMask]="true"
        [appendTo]="'body'"
        header="تسجيل دفعة مالية جديدة للعميل"
        [style]="{ width: '92vw', maxWidth: '520px' }"
        styleClass="custom-crm-dialog"
      >
        <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
          <div class="dialog-form-body">
            <div class="form-group">
              <label>الصفقة المستهدفة (اختياري)</label>
              <select formControlName="deal_id" class="custom-select-input">
                <option [ngValue]="null">عام / رصيد العميل مباشرة</option>
                <option *ngFor="let d of deals" [ngValue]="d.id">
                  {{ d.title }} (المتبقي: {{ (d.remaining_balance || 0) | number:'1.2-2' }} ج.م)
                </option>
              </select>
            </div>

            <div class="form-group">
              <label>المبلغ المدفوع (ج.م) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" placeholder="0.00" />
            </div>

            <div class="form-group">
              <label>تاريخ التحصيل <span class="required">*</span></label>
              <input type="date" pInputText formControlName="payment_date" />
            </div>

            <div class="form-group">
              <label>طريقة الدفع <span class="required">*</span></label>
              <select formControlName="payment_method" class="custom-select-input">
                <option value="cash">كاش (الخزينة)</option>
                <option value="instapay">إنستا باي (InstaPay)</option>
                <option value="bank_transfer">تحويل بنكي</option>
                <option value="cash_hand">نقداً يد بيد</option>
              </select>
            </div>

            <div class="form-group">
              <label>رقم المرجع / الإيصال</label>
              <input type="text" pInputText formControlName="receipt_ref" placeholder="رقم إشعار التحويل أو الإيصال" />
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showPaymentModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="paymentForm.invalid || submitting">
              <i class="fa-solid fa-check" *ngIf="!submitting"></i>
              <i class="fa-solid fa-spinner fa-spin" *ngIf="submitting"></i>
              {{ submitting ? 'جاري التسجيل...' : 'تسجيل الدفعة' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Edit Client Profile & Password -->
      <p-dialog
        [(visible)]="showEditModal"
        [modal]="true"
        [dismissableMask]="true"
        [appendTo]="'body'"
        header="تعديل بيانات العميل وكلمة المرور"
        [style]="{ width: '92vw', maxWidth: '540px' }"
        styleClass="custom-crm-dialog"
      >
        <form [formGroup]="editClientForm" (ngSubmit)="saveClientProfile()">
          <div class="dialog-form-body">
            <div class="form-group">
              <label>اسم العميل / المؤسسة <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="الاسم بالكامل" />
            </div>

            <div class="form-group">
              <label>البريد الإلكتروني <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="client@example.com" />
            </div>

            <div class="form-group">
              <label>رقم الهاتف</label>
              <input type="text" pInputText formControlName="phone" placeholder="01xxxxxxxxx" />
            </div>

            <div class="form-group">
              <label>كود العميل (Client Code)</label>
              <input type="text" pInputText formControlName="client_code" placeholder="مثال: 18 أو VIP-18" />
            </div>

            <div class="form-group">
              <label>كلمة مرور جديدة (اتركها فارغة إذا كنت لا تريد التغيير)</label>
              <input type="password" pInputText formControlName="password" placeholder="••••••••" />
              <span class="field-hint">اترك الحقل فارغاً للإبقاء على كلمة المرور الحالية دون تعديل.</span>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showEditModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="editClientForm.invalid || submitting">
              <i class="fa-solid fa-check" *ngIf="!submitting"></i>
              <i class="fa-solid fa-spinner fa-spin" *ngIf="submitting"></i>
              {{ submitting ? 'جاري الحفظ...' : 'حفظ التعديلات' }}
            </button>
          </div>
        </form>
      </p-dialog>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Cairo', 'Inter', sans-serif;
      direction: rtl;
      text-align: right;
    }

    .client-detail-container {
      padding: 32px;
      min-height: 100vh;
      background: var(--bg, #070714);
      background-image: radial-gradient(ellipse 100% 60% at 100% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 60%),
                        radial-gradient(ellipse 80% 50% at 0% 100%, rgba(6, 182, 212, 0.06) 0%, transparent 50%);
      background-attachment: fixed;
      color: var(--text, #f8fafc);
    }

    /* Loading & Error States */
    .loading-shell {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      gap: 18px;
      color: var(--text-2, #94a3b8);
    }
    .cosmic-spinner {
      width: 48px;
      height: 48px;
      border: 3px solid rgba(99, 102, 241, 0.2);
      border-top-color: #6366f1;
      border-right-color: #06b6d4;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .error-shell {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 50vh;
      gap: 14px;
      text-align: center;
    }
    .error-icon-box {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: rgba(244, 63, 94, 0.12);
      color: #f43f5e;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
    }

    .client-portal-content {
      display: flex;
      flex-direction: column;
      gap: 26px;
    }

    /* Top Breadcrumbs & Actions */
    .top-nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    .nav-breadcrumbs {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.88rem;
    }
    .bc-link {
      color: var(--text-2, #94a3b8);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;
    }
    .bc-link:hover { color: #818cf8; }
    .bc-sep { color: rgba(255, 255, 255, 0.2); }
    .bc-cur { color: #f8fafc; font-weight: 700; }

    .top-nav-actions {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }

    /* Buttons System */
    .btn-primary-gradient {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      border: none;
      color: #fff;
      padding: 9px 20px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.86rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.25s ease;
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
      font-family: inherit;
      white-space: nowrap;
    }
    .btn-primary-gradient:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(99, 102, 241, 0.55);
    }
    .btn-primary-gradient.sm {
      padding: 7px 15px;
      font-size: 0.82rem;
    }

    .btn-glass-primary {
      background: rgba(99, 102, 241, 0.12);
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: #a5b4fc;
      padding: 9px 16px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.86rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
      font-family: inherit;
    }
    .btn-glass-primary:hover {
      background: rgba(99, 102, 241, 0.25);
      color: #fff;
      border-color: #6366f1;
    }

    .btn-glass-warning {
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.3);
      color: #fbbf24;
      padding: 9px 16px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.86rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
      font-family: inherit;
    }
    .btn-glass-warning:hover {
      background: rgba(245, 158, 11, 0.25);
      color: #fff;
    }

    .btn-glass-action {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-2, #94a3b8);
      width: 38px;
      height: 38px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    .btn-glass-action:hover {
      background: rgba(99, 102, 241, 0.15);
      border-color: rgba(99, 102, 241, 0.3);
      color: #a5b4fc;
    }

    .btn-glass-danger {
      background: rgba(244, 63, 94, 0.1);
      border: 1px solid rgba(244, 63, 94, 0.25);
      color: #fda4af;
      width: 38px;
      height: 38px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    .btn-glass-danger:hover {
      background: rgba(244, 63, 94, 0.25);
      color: #fff;
    }

    /* Executive 360 Client Hero Card */
    .client-hero-card {
      background: linear-gradient(135deg, rgba(16, 18, 44, 0.95) 0%, rgba(9, 10, 26, 0.98) 100%);
      border: 1px solid rgba(99, 102, 241, 0.25);
      border-radius: 16px;
      padding: 28px 32px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(99, 102, 241, 0.1);
      backdrop-filter: blur(16px);
    }
    .client-hero-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #6366f1, #06b6d4, #10b981);
    }
    .client-hero-card.user-on-hold {
      border-color: rgba(245, 158, 11, 0.4);
    }
    .client-hero-card.user-on-hold::before {
      background: linear-gradient(90deg, #f59e0b, #ef4444);
    }

    .hero-main-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }

    .hero-left-info {
      display: flex;
      align-items: center;
      gap: 22px;
      flex: 1;
      min-width: 320px;
    }

    .client-avatar-wrapper {
      position: relative;
      flex-shrink: 0;
    }
    .client-av-lg {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: #fff;
      font-size: 1.8rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 25px rgba(99, 102, 241, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.15);
    }
    .online-indicator {
      position: absolute;
      bottom: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #10b981;
      border: 3px solid #070714;
      box-shadow: 0 0 10px #10b981;
    }
    .online-indicator.is-hold {
      background: #f59e0b;
      box-shadow: 0 0 10px #f59e0b;
    }

    .client-titles {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
      min-width: 0;
    }

    .name-row {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .name-row h2 {
      font-size: 1.55rem;
      font-weight: 800;
      color: #fff;
      margin: 0;
      letter-spacing: -0.02em;
    }

    .verified-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(99, 102, 241, 0.15);
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: #a5b4fc;
      font-size: 0.74rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 8px;
    }

    .client-id-pill-wrap {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(6, 182, 212, 0.12);
      border: 1px solid rgba(6, 182, 212, 0.28);
      padding: 3px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .client-id-pill-wrap:hover {
      background: rgba(6, 182, 212, 0.22);
      border-color: #06b6d4;
    }
    .client-id-pill {
      color: #67e8f9;
      font-family: monospace;
      font-size: 0.78rem;
      font-weight: 800;
    }
    .client-id-pill-wrap i {
      color: #67e8f9;
      font-size: 0.72rem;
    }

    .hold-pill {
      background: rgba(245, 158, 11, 0.18);
      color: #fbbf24;
      border: 1px solid rgba(245, 158, 11, 0.35);
      padding: 3px 10px;
      border-radius: 8px;
      font-size: 0.74rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    /* Contact Chips */
    .contact-chips-row {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 2px;
    }
    .contact-chip {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 5px 12px;
      border-radius: 8px;
      font-size: 0.8rem;
      color: var(--text-2, #94a3b8);
      text-decoration: none;
      transition: all 0.2s;
    }
    .contact-chip:hover {
      background: rgba(99, 102, 241, 0.12);
      border-color: rgba(99, 102, 241, 0.3);
      color: #fff;
    }
    .phone-chip-group {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .wa-chip {
      background: rgba(16, 185, 129, 0.12);
      border-color: rgba(16, 185, 129, 0.3);
      color: #34d399;
    }
    .wa-chip:hover {
      background: #10b981;
      color: #fff;
      border-color: #10b981;
    }

    /* Hero Right Metrics */
    .hero-right-metrics {
      display: flex;
      align-items: center;
      gap: 20px;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.06);
      padding: 14px 24px;
      border-radius: 12px;
    }
    .hrm-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
      text-align: center;
    }
    .hrm-lbl {
      font-size: 0.72rem;
      color: var(--text-3, #64748b);
      font-weight: 600;
    }
    .hrm-val {
      font-size: 1.25rem;
      font-weight: 800;
      color: #fff;
    }
    .hrm-val small { font-size: 0.74rem; font-weight: 600; }
    .hrm-divider {
      width: 1px;
      height: 32px;
      background: rgba(255, 255, 255, 0.08);
    }

    .hero-progress-strip {
      margin-top: 20px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    .hps-track {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      overflow: hidden;
    }
    .hps-fill {
      height: 100%;
      background: linear-gradient(90deg, #10b981, #06b6d4);
      border-radius: 8px;
      transition: width 0.6s ease;
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
    }

    /* Metrics KPI Grid */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
    }
    .metric-card {
      background: linear-gradient(145deg, rgba(16, 18, 44, 0.85) 0%, rgba(9, 10, 26, 0.92) 100%);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 12px;
      padding: 22px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      transition: all 0.25s ease;
    }
    .metric-card:hover {
      border-color: rgba(99, 102, 241, 0.45);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(99, 102, 241, 0.15);
      transform: translateY(-2px);
    }

    .mc-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .kpi-icon-box {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    .kpi-icon-box.indigo { background: rgba(99, 102, 241, 0.14); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); }
    .kpi-icon-box.emerald { background: rgba(16, 185, 129, 0.14); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .kpi-icon-box.rose { background: rgba(244, 63, 94, 0.14); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.3); }
    .kpi-icon-box.cyan { background: rgba(6, 182, 212, 0.14); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3); }

    .kpi-tag {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 9px;
      border-radius: 6px;
    }
    .kpi-tag.indigo { background: rgba(99, 102, 241, 0.1); color: #a5b4fc; }
    .kpi-tag.emerald { background: rgba(16, 185, 129, 0.1); color: #6ee7b7; }
    .kpi-tag.rose { background: rgba(244, 63, 94, 0.1); color: #fda4af; }
    .kpi-tag.cyan { background: rgba(6, 182, 212, 0.1); color: #a5f3fc; }

    .mc-body {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .kpi-amount {
      font-size: 1.55rem;
      font-weight: 800;
      color: #fff;
      line-height: 1.2;
      letter-spacing: -0.01em;
    }
    .kpi-amount small { font-size: 0.8rem; font-weight: 600; color: var(--text-2, #94a3b8); }
    .kpi-sub {
      font-size: 0.76rem;
      color: var(--text-3, #64748b);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .kpi-rate-badge {
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
      font-weight: 800;
      font-size: 0.7rem;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .kpi-rate-badge.cyan {
      background: rgba(6, 182, 212, 0.15);
      color: #67e8f9;
    }

    .mc-mini-bar {
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 4px;
      overflow: hidden;
      margin-top: 4px;
    }
    .mc-mini-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.5s ease;
    }
    .mc-mini-fill.emerald { background: linear-gradient(90deg, #10b981, #34d399); }
    .mc-mini-fill.cyan { background: linear-gradient(90deg, #06b6d4, #67e8f9); }

    /* Section Cards */
    .section-card {
      background: linear-gradient(145deg, rgba(16, 18, 44, 0.85) 0%, rgba(9, 10, 26, 0.92) 100%);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 14px;
      padding: 26px;
      display: flex;
      flex-direction: column;
      gap: 18px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .sh-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .sh-icon {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.15rem;
    }
    .sh-icon.indigo { background: rgba(99, 102, 241, 0.15); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); }
    .sh-icon.emerald { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .sh-icon.cyan { background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3); }

    .section-head h3 {
      font-size: 1.15rem;
      font-weight: 800;
      color: #fff;
      margin: 0;
    }
    .section-head p {
      font-size: 0.78rem;
      color: var(--text-3, #64748b);
      margin: 3px 0 0;
    }

    .badge-count {
      padding: 4px 12px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 800;
    }
    .badge-count.cyan { background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3); }

    /* Deals Stage Tabs */
    .deals-stage-tabs {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .stage-tab-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: var(--text-2, #94a3b8);
      padding: 7px 15px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .stage-tab-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #fff;
    }
    .stage-tab-btn.active {
      background: rgba(99, 102, 241, 0.25);
      border-color: #6366f1;
      color: #fff;
      box-shadow: 0 0 14px rgba(99, 102, 241, 0.3);
    }
    .stage-tab-btn.stage-required.active {
      background: rgba(245, 158, 11, 0.22);
      border-color: #f59e0b;
      color: #fbbf24;
      box-shadow: 0 0 14px rgba(245, 158, 11, 0.25);
    }
    .stage-tab-btn.stage-progress.active {
      background: rgba(6, 182, 212, 0.22);
      border-color: #06b6d4;
      color: #67e8f9;
      box-shadow: 0 0 14px rgba(6, 182, 212, 0.25);
    }
    .stage-tab-btn.stage-completed.active {
      background: rgba(16, 185, 129, 0.22);
      border-color: #10b981;
      color: #34d399;
      box-shadow: 0 0 14px rgba(16, 185, 129, 0.25);
    }

    /* CRM Table System */
    .table-wrap {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .crm-table {
      width: 100%;
      min-width: 900px;
      border-collapse: separate;
      border-spacing: 0;
      text-align: right;
      direction: rtl;
    }
    .crm-table th {
      text-align: right;
      padding: 13px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      color: var(--text-2, #94a3b8);
      font-size: 0.74rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      background: rgba(255, 255, 255, 0.02);
      white-space: nowrap;
    }
    .crm-table td {
      padding: 14px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      font-size: 0.86rem;
      color: var(--text, #f8fafc);
      vertical-align: middle;
      white-space: nowrap;
    }
    .crm-table tr:hover td {
      background: rgba(255, 255, 255, 0.02);
    }

    .td-title { font-weight: 700; color: #fff; }
    .td-date { font-size: 0.8rem; color: var(--text-2, #94a3b8); display: flex; align-items: center; gap: 6px; }
    .td-money { font-family: monospace; font-size: 0.92rem; }
    .bold { font-weight: 800; }
    .font-lg { font-size: 1rem; }

    .deal-link-title {
      color: #fff;
      font-weight: 700;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      transition: color 0.2s;
    }
    .deal-link-title:hover {
      color: #818cf8;
      text-decoration: underline;
    }
    .deal-link-title.sm {
      font-size: 0.82rem;
      color: #a5b4fc;
    }
    .deal-link-title i {
      font-size: 0.76rem;
      color: #818cf8;
    }

    .dept-badge {
      background: rgba(99, 102, 241, 0.12);
      color: #a5b4fc;
      border: 1px solid rgba(99, 102, 241, 0.25);
      padding: 3px 9px;
      border-radius: 6px;
      font-size: 0.74rem;
      font-weight: 700;
    }

    .row-progress-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .row-progress-bar {
      width: 60px;
      height: 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 4px;
      overflow: hidden;
    }
    .row-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #10b981, #06b6d4);
      border-radius: 4px;
    }
    .row-progress-text {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--text-2, #94a3b8);
      min-width: 32px;
    }

    /* Action Buttons in Table */
    .btn-action-view {
      background: rgba(99, 102, 241, 0.12);
      border: 1px solid rgba(99, 102, 241, 0.28);
      color: #a5b4fc;
      padding: 5px 12px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
      font-family: inherit;
    }
    .btn-action-view:hover {
      background: #6366f1;
      color: #fff;
    }

    /* Status Pills */
    .status-pill {
      font-size: 0.74rem;
      font-weight: 800;
      padding: 4px 12px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    .status-pending, .status-lead, .status-discovery, .status-proposal {
      background: rgba(245, 158, 11, 0.15);
      color: #fbbf24;
      border: 1px solid rgba(245, 158, 11, 0.3);
    }
    .status-active, .status-in_progress, .status-contract_sent {
      background: rgba(99, 102, 241, 0.15);
      color: #a5b4fc;
      border: 1px solid rgba(99, 102, 241, 0.3);
    }
    .status-completed, .status-closed_won {
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }
    .status-cancelled, .status-closed_lost {
      background: rgba(244, 63, 94, 0.15);
      color: #fda4af;
      border: 1px solid rgba(244, 63, 94, 0.3);
    }

    .payment-method-badge {
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--text-2, #94a3b8);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 4px 10px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .payment-method-badge.instapay {
      background: rgba(168, 85, 247, 0.12);
      color: #c084fc;
      border-color: rgba(168, 85, 247, 0.3);
    }
    .payment-method-badge.bank_transfer {
      background: rgba(59, 130, 246, 0.12);
      color: #93c5fd;
      border-color: rgba(59, 130, 246, 0.3);
    }
    .payment-method-badge.cash {
      background: rgba(16, 185, 129, 0.12);
      color: #6ee7b7;
      border-color: rgba(16, 185, 129, 0.3);
    }

    .receipt-code-badge {
      font-family: monospace;
      font-size: 0.8rem;
      font-weight: 700;
      color: #67e8f9;
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.25);
      padding: 3px 8px;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .receipt-code-badge:hover {
      background: rgba(6, 182, 212, 0.2);
    }

    .task-status-pill {
      font-size: 0.76rem;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .tstatus-done { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .tstatus-progress { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    .tstatus-review { background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3); }
    .tstatus-pending { background: rgba(99, 102, 241, 0.15); color: #a5b4fc; border: 1px solid rgba(99, 102, 241, 0.3); }
    .tstatus-cancelled { background: rgba(244, 63, 94, 0.15); color: #f87171; border: 1px solid rgba(244, 63, 94, 0.3); }

    /* Empty States */
    .empty-state {
      text-align: center;
      padding: 36px 20px;
      color: var(--text-2, #94a3b8);
      background: rgba(0, 0, 0, 0.15);
      border: 1px dashed rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    .empty-icon-wrap {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: rgba(99, 102, 241, 0.1);
      color: #818cf8;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 4px;
    }
    .empty-icon-wrap.emerald { background: rgba(16, 185, 129, 0.1); color: #34d399; }
    .empty-icon-wrap.cyan { background: rgba(6, 182, 212, 0.1); color: #67e8f9; }
    .empty-state h4 {
      font-size: 0.98rem;
      font-weight: 800;
      color: #fff;
      margin: 0;
    }
    .empty-state p {
      font-size: 0.82rem;
      color: var(--text-3, #64748b);
      margin: 0;
    }

    /* Modal Form Styles */
    .dialog-form-body {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 10px 0;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .form-group label {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-2, #94a3b8);
    }
    .form-group input, .custom-select-input {
      width: 100%;
      padding: 11px 14px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      color: #fff;
      outline: none;
      font-family: inherit;
      font-size: 0.9rem;
      box-sizing: border-box;
      transition: border-color 0.2s;
    }
    .form-group input:focus, .custom-select-input:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
    }
    .custom-select-input option {
      background: #111827;
      color: #fff;
    }
    .required { color: #f43f5e; }
    .field-hint {
      font-size: 0.74rem;
      color: var(--text-3, #64748b);
    }

    .dialog-footer-actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    .btn-dialog-cancel {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-2, #94a3b8);
      padding: 9px 18px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.86rem;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }
    .btn-dialog-cancel:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
    .btn-dialog-submit {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      border: none;
      color: #ffffff;
      padding: 9px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.86rem;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
      transition: all 0.2s;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .btn-dialog-submit:hover:not(:disabled) {
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.55);
      transform: translateY(-1px);
    }
    .btn-dialog-submit:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      box-shadow: none;
    }

    /* Text Colors Utility */
    .text-violet { color: #818cf8; }
    .text-emerald { color: #34d399; }
    .text-rose { color: #f43f5e; }
    .text-cyan { color: #67e8f9; }
    .text-amber { color: #fbbf24; }
    .text-muted { color: var(--text-2, #94a3b8); }

    /* Responsive */
    @media (max-width: 992px) {
      .client-detail-container { padding: 20px 16px; }
      .hero-main-wrapper { flex-direction: column; align-items: flex-start; }
      .hero-right-metrics { width: 100%; justify-content: space-around; box-sizing: border-box; }
    }
    /* ══════════════════════════════════════════════════════════════
       LIGHT THEME — HIGH CONTRAST MASTER OVERRIDES FOR CLIENT 360
       ══════════════════════════════════════════════════════════════ */
    :host-context(body.light-theme) .client-detail-container {
      background: #f8fafc !important;
      background-image: radial-gradient(ellipse 100% 60% at 100% 0%, rgba(99, 102, 241, 0.05) 0%, transparent 60%),
                        radial-gradient(ellipse 80% 50% at 0% 100%, rgba(6, 182, 212, 0.04) 0%, transparent 50%) !important;
      color: #0f172a !important;
    }

    /* Top Breadcrumbs */
    :host-context(body.light-theme) .bc-link { color: #475569 !important; }
    :host-context(body.light-theme) .bc-link:hover { color: #4f46e5 !important; }
    :host-context(body.light-theme) .bc-sep { color: #cbd5e1 !important; }
    :host-context(body.light-theme) .bc-cur { color: #0f172a !important; }

    /* Top Nav Buttons */
    :host-context(body.light-theme) .btn-glass-primary {
      background: #eef2ff !important;
      border-color: #c7d2fe !important;
      color: #4338ca !important;
    }
    :host-context(body.light-theme) .btn-glass-primary:hover {
      background: #4f46e5 !important;
      color: #ffffff !important;
    }
    :host-context(body.light-theme) .btn-glass-warning {
      background: #fffbeb !important;
      border-color: #fde68a !important;
      color: #b45309 !important;
    }
    :host-context(body.light-theme) .btn-glass-warning:hover {
      background: #f59e0b !important;
      color: #ffffff !important;
    }
    :host-context(body.light-theme) .btn-glass-action {
      background: #ffffff !important;
      border-color: #cbd5e1 !important;
      color: #475569 !important;
    }
    :host-context(body.light-theme) .btn-glass-action:hover {
      background: #eef2ff !important;
      border-color: #c7d2fe !important;
      color: #4f46e5 !important;
    }
    :host-context(body.light-theme) .btn-glass-danger {
      background: #fff1f2 !important;
      border-color: #fecdd3 !important;
      color: #e11d48 !important;
    }
    :host-context(body.light-theme) .btn-glass-danger:hover {
      background: #e11d48 !important;
      color: #ffffff !important;
    }

    /* Client Hero Card */
    :host-context(body.light-theme) .client-hero-card {
      background: #ffffff !important;
      border: 1px solid #e2e8f0 !important;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05) !important;
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .name-row h2 {
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .client-id-pill-wrap {
      background: #f1f5f9 !important;
      border: 1px solid #cbd5e1 !important;
      color: #475569 !important;
    }
    :host-context(body.light-theme) .client-id-pill {
      color: #334155 !important;
    }
    :host-context(body.light-theme) .verified-badge {
      background: #eef2ff !important;
      border-color: #c7d2fe !important;
      color: #4338ca !important;
    }
    :host-context(body.light-theme) .contact-chip {
      background: #f8fafc !important;
      border-color: #cbd5e1 !important;
      color: #334155 !important;
    }
    :host-context(body.light-theme) .contact-chip:hover {
      background: #eef2ff !important;
      border-color: #c7d2fe !important;
      color: #4338ca !important;
    }
    :host-context(body.light-theme) .wa-chip {
      background: #ecfdf5 !important;
      border-color: #a7f3d0 !important;
      color: #047857 !important;
    }
    :host-context(body.light-theme) .wa-chip:hover {
      background: #10b981 !important;
      color: #ffffff !important;
    }
    :host-context(body.light-theme) .hero-right-metrics {
      background: #f8fafc !important;
      border: 1px solid #e2e8f0 !important;
    }
    :host-context(body.light-theme) .hrm-divider {
      background: #e2e8f0 !important;
    }
    :host-context(body.light-theme) .hrm-item {
      background: transparent !important;
      border-color: transparent !important;
    }
    :host-context(body.light-theme) .hrm-lbl {
      color: #64748b !important;
    }
    :host-context(body.light-theme) .hrm-val {
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .hrm-val.text-violet {
      color: #4338ca !important;
    }
    :host-context(body.light-theme) .hrm-val.text-emerald {
      color: #047857 !important;
    }
    :host-context(body.light-theme) .hps-track {
      background: #e2e8f0 !important;
    }

    /* KPI Cards */
    :host-context(body.light-theme) .metric-card {
      background: #ffffff !important;
      border: 1px solid #e2e8f0 !important;
      box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04) !important;
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .metric-card:hover {
      border-color: #c7d2fe !important;
      box-shadow: 0 10px 28px rgba(99, 102, 241, 0.08) !important;
    }
    :host-context(body.light-theme) .kpi-amount {
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .kpi-amount.text-emerald {
      color: #047857 !important;
    }
    :host-context(body.light-theme) .kpi-amount.text-rose {
      color: #dc2626 !important;
    }
    :host-context(body.light-theme) .kpi-amount.text-cyan {
      color: #0e7490 !important;
    }
    :host-context(body.light-theme) .kpi-amount small {
      color: #64748b !important;
    }
    :host-context(body.light-theme) .kpi-sub {
      color: #475569 !important;
    }
    :host-context(body.light-theme) .kpi-sub.text-emerald {
      color: #047857 !important;
    }
    :host-context(body.light-theme) .kpi-sub.text-cyan {
      color: #0e7490 !important;
    }
    :host-context(body.light-theme) .kpi-tag.indigo {
      background: #eef2ff !important;
      color: #4338ca !important;
    }
    :host-context(body.light-theme) .kpi-tag.emerald {
      background: #ecfdf5 !important;
      color: #047857 !important;
    }
    :host-context(body.light-theme) .kpi-tag.rose {
      background: #fff1f2 !important;
      color: #be123c !important;
    }
    :host-context(body.light-theme) .kpi-tag.cyan {
      background: #ecfeff !important;
      color: #0e7490 !important;
    }
    :host-context(body.light-theme) .mc-mini-bar {
      background: #e2e8f0 !important;
    }

    /* Section Cards */
    :host-context(body.light-theme) .section-card {
      background: #ffffff !important;
      border: 1px solid #e2e8f0 !important;
      box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04) !important;
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .section-head {
      border-bottom-color: #f1f5f9 !important;
    }
    :host-context(body.light-theme) .section-head h3 {
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .section-head p {
      color: #64748b !important;
    }
    :host-context(body.light-theme) .stage-tab-btn {
      background: #f8fafc !important;
      border-color: #cbd5e1 !important;
      color: #475569 !important;
    }
    :host-context(body.light-theme) .stage-tab-btn:hover {
      background: #f1f5f9 !important;
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .stage-tab-btn.active {
      background: #eef2ff !important;
      border-color: #6366f1 !important;
      color: #4338ca !important;
      box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15) !important;
    }
    :host-context(body.light-theme) .stage-tab-btn.stage-required.active {
      background: #fffbeb !important;
      border-color: #f59e0b !important;
      color: #b45309 !important;
    }
    :host-context(body.light-theme) .stage-tab-btn.stage-progress.active {
      background: #ecfeff !important;
      border-color: #06b6d4 !important;
      color: #0e7490 !important;
    }
    :host-context(body.light-theme) .stage-tab-btn.stage-completed.active {
      background: #ecfdf5 !important;
      border-color: #10b981 !important;
      color: #047857 !important;
    }

    /* CRM Table in Client Details */
    :host-context(body.light-theme) .crm-table th {
      background: #f8fafc !important;
      color: #334155 !important;
      border-bottom: 2px solid #e2e8f0 !important;
    }
    :host-context(body.light-theme) .crm-table td {
      border-bottom: 1px solid #f1f5f9 !important;
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .crm-table tr:hover td {
      background: rgba(99, 102, 241, 0.04) !important;
    }
    :host-context(body.light-theme) .td-title {
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .td-date {
      color: #64748b !important;
    }
    :host-context(body.light-theme) .deal-link-title {
      color: #4338ca !important;
    }
    :host-context(body.light-theme) .deal-link-title:hover {
      color: #312e81 !important;
    }
    :host-context(body.light-theme) .dept-badge {
      background: #eef2ff !important;
      color: #4338ca !important;
      border-color: #c7d2fe !important;
    }
    :host-context(body.light-theme) .row-progress-bar {
      background: #e2e8f0 !important;
    }
    :host-context(body.light-theme) .row-progress-text {
      color: #475569 !important;
    }
    :host-context(body.light-theme) .btn-action-view {
      background: #f1f5f9 !important;
      border-color: #cbd5e1 !important;
      color: #334155 !important;
    }
    :host-context(body.light-theme) .btn-action-view:hover {
      background: #4f46e5 !important;
      color: #ffffff !important;
    }

    /* Status Pills in Light Mode */
    :host-context(body.light-theme) .status-pending,
    :host-context(body.light-theme) .status-lead,
    :host-context(body.light-theme) .status-discovery,
    :host-context(body.light-theme) .status-proposal {
      background: #fffbeb !important;
      color: #b45309 !important;
      border: 1px solid #fde68a !important;
    }
    :host-context(body.light-theme) .status-active,
    :host-context(body.light-theme) .status-in_progress,
    :host-context(body.light-theme) .status-contract_sent {
      background: #eef2ff !important;
      color: #4338ca !important;
      border: 1px solid #c7d2fe !important;
    }
    :host-context(body.light-theme) .status-completed {
      background: #ecfdf5 !important;
      color: #047857 !important;
      border: 1px solid #a7f3d0 !important;
    }
    :host-context(body.light-theme) .status-cancelled {
      background: #fff1f2 !important;
      color: #be123c !important;
      border: 1px solid #fecdd3 !important;
    }
    :host-context(body.light-theme) .tstatus-progress {
      background: #fffbeb !important;
      color: #b45309 !important;
      border: 1px solid #fde68a !important;
    }
    :host-context(body.light-theme) .tstatus-cancelled {
      background: #fff1f2 !important;
      color: #be123c !important;
      border: 1px solid #fecdd3 !important;
    }

    /* Empty States */
    :host-context(body.light-theme) .empty-state h4 {
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .empty-state p {
      color: #64748b !important;
    }

    /* Modals & Dialogs in Light Mode */
    :host-context(body.light-theme) .form-group label {
      color: #334155 !important;
    }
    :host-context(body.light-theme) .form-group input,
    :host-context(body.light-theme) .custom-select-input {
      background: #ffffff !important;
      border: 1px solid #cbd5e1 !important;
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .form-group input:focus,
    :host-context(body.light-theme) .custom-select-input:focus {
      border-color: #4f46e5 !important;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12) !important;
    }
    :host-context(body.light-theme) .custom-select-input option {
      background: #ffffff !important;
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .field-hint {
      color: #64748b !important;
    }
    :host-context(body.light-theme) .dialog-footer-actions {
      border-top-color: #e2e8f0 !important;
    }
    :host-context(body.light-theme) .btn-dialog-cancel {
      background: #f1f5f9 !important;
      border-color: #cbd5e1 !important;
      color: #334155 !important;
    }
    :host-context(body.light-theme) .btn-dialog-cancel:hover {
      background: #e2e8f0 !important;
      color: #0f172a !important;
    }
  `]
})
export class ClientDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private apiService = inject(ApiService);
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);
  private fb = inject(FormBuilder);

  clientId: number | null = null;
  client: any = null;

  deals: any[] = [];
  requiredDeals: any[] = [];
  inProgressDeals: any[] = [];
  completedDeals: any[] = [];
  activeDealTab: 'all' | 'required' | 'in_progress' | 'completed' = 'all';

  tasks: any[] = [];
  payments: any[] = [];

  loading = true;
  submitting = false;

  totalBilled = 0;
  totalPaid = 0;
  remainingBalance = 0;

  showPaymentModal = false;
  paymentForm!: FormGroup;

  showEditModal = false;
  editClientForm!: FormGroup;

  ngOnInit(): void {
    this.initPaymentForm();
    this.initEditClientForm();

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

  initEditClientForm(): void {
    this.editClientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      client_code: [''],
      password: ['']
    });
  }

  get displayedDeals(): any[] {
    if (this.activeDealTab === 'required') return this.requiredDeals;
    if (this.activeDealTab === 'in_progress') return this.inProgressDeals;
    if (this.activeDealTab === 'completed') return this.completedDeals;
    return this.deals;
  }

  isClient(): boolean {
    const userStr = localStorage.getItem('mediaglow_user');
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

  getProgressPercentage(): number {
    if (!this.totalBilled || this.totalBilled <= 0) return 0;
    return Math.min(100, Math.max(0, (this.totalPaid / this.totalBilled) * 100));
  }

  getTaskCompletionPercentage(): number {
    if (!this.tasks.length) return 0;
    return Math.min(100, (this.getCompletedTasksCount() / this.tasks.length) * 100);
  }

  getCompletedTasksCount(): number {
    return this.tasks.filter(t => this.isTaskCompleted(t.status)).length;
  }

  getDealProgressPercentage(deal: any): number {
    const total = Number(deal.calculated_total || deal.total_price || 0);
    const paid = Number(deal.calculated_paid || deal.paid_amount || 0);
    if (!total || total <= 0) return 0;
    return Math.min(100, Math.max(0, (paid / total) * 100));
  }

  getCollectionRateClass(): string {
    const rate = this.getProgressPercentage();
    if (rate >= 90) return 'text-emerald';
    if (rate >= 50) return 'text-cyan';
    if (rate > 0) return 'text-amber';
    return 'text-rose';
  }

  getWhatsAppUrl(phone: string): string {
    if (!phone) return '#';
    let clean = phone.replace(/[^0-9]/g, '');
    if (clean.startsWith('01')) clean = '20' + clean.substring(1);
    return `https://wa.me/${clean}`;
  }

  copyCode(code: any): void {
    if (!code) return;
    navigator.clipboard.writeText(String(code)).then(() => {
      this.toastService.success(`تم نسخ كود العميل (${code}) إلى الحافظة`, 'تم النسخ');
    }).catch(() => {
      this.toastService.info(`كود العميل: ${code}`);
    });
  }

  getDealStatusLabel(status: string): string {
    switch (status) {
      case 'in_progress':
      case 'active':
      case 'contract_sent':
        return 'جارية / قيد التنفيذ';
      case 'completed':
      case 'closed_won':
        return 'مكتملة ومعتمدة';
      case 'cancelled':
      case 'closed_lost':
        return 'ملغاة';
      case 'pending':
      case 'lead':
      case 'discovery':
      case 'proposal':
      default:
        return 'مطلوبة / قيد الانتظار';
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
    if (this.isTaskInReview(status)) return 'بانتظار الاعتماد';
    if (this.isTaskInProgress(status)) return 'قيد التنفيذ';
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

  getPaymentMethodIcon(method: string): string {
    switch (method) {
      case 'instapay': return 'fa-solid fa-bolt-lightning';
      case 'bank_transfer': return 'fa-solid fa-building-columns';
      case 'cash_hand': return 'fa-solid fa-handshake';
      case 'cash':
      default: return 'fa-solid fa-money-bill-wave';
    }
  }

  loadClientData(): void {
    if (!this.clientId) return;
    this.loading = true;

    this.apiService.getClientProfile(this.clientId).subscribe({
      next: (res) => {
        const payload = res?.data || res;
        this.client = payload?.client || payload?.user || (payload?.id ? payload : null);

        const stats = payload?.stats || payload;
        this.totalBilled = Number(stats?.total_billed ?? payload?.total_billed ?? 0);
        this.totalPaid = Number(stats?.total_paid ?? payload?.total_paid ?? 0);
        this.remainingBalance = Number(stats?.remaining_balance ?? payload?.remaining_balance ?? Math.max(0, this.totalBilled - this.totalPaid));

        const dealsData = payload?.deals;
        if (dealsData) {
          if (Array.isArray(dealsData)) {
            this.deals = dealsData;
          } else if (typeof dealsData === 'object') {
            this.deals = Array.isArray(dealsData.all) ? dealsData.all : (Array.isArray(dealsData) ? dealsData : []);
            this.requiredDeals = Array.isArray(dealsData.required) ? dealsData.required : [];
            this.inProgressDeals = Array.isArray(dealsData.in_progress) ? dealsData.in_progress : [];
            this.completedDeals = Array.isArray(dealsData.completed) ? dealsData.completed : [];
          }
        } else {
          this.deals = [];
          this.requiredDeals = [];
          this.inProgressDeals = [];
          this.completedDeals = [];
        }

        if (this.deals.length > 0 && this.requiredDeals.length === 0 && this.inProgressDeals.length === 0 && this.completedDeals.length === 0) {
          this.requiredDeals = this.deals.filter((d: any) => ['pending', 'new', 'draft', 'lead', 'discovery', 'proposal'].includes(d.status));
          this.inProgressDeals = this.deals.filter((d: any) => ['active', 'in_progress', 'won', 'contract_sent'].includes(d.status));
          this.completedDeals = this.deals.filter((d: any) => ['completed', 'approved', 'closed', 'closed_won'].includes(d.status));
        }

        this.payments = Array.isArray(payload?.payments) ? payload.payments : [];

        const rawTasks = Array.isArray(payload?.tasks) ? payload.tasks : [];
        if (rawTasks.length > 0) {
          this.tasks = rawTasks.map((t: any) => ({
            ...t,
            deal: t.deal || this.deals.find((d: any) => d.id === t.deal_id) || null
          }));
          this.loading = false;
        } else {
          this.apiService.getTasks().subscribe({
            next: (allTasks) => {
              let taskList: any[] = [];
              if (Array.isArray(allTasks)) {
                taskList = allTasks;
              } else if (allTasks && allTasks.data && Array.isArray(allTasks.data)) {
                taskList = allTasks.data;
              }
              const dealIds = this.deals.map((d: any) => d.id);
              this.tasks = taskList
                .filter((t: any) => (dealIds.includes(t.deal_id) || t.client_id === this.clientId) && !t.parent_id)
                .map((t: any) => ({
                  ...t,
                  deal: t.deal || this.deals.find((d: any) => d.id === t.deal_id) || null
                }));
              this.loading = false;
            },
            error: () => {
              this.loading = false;
            }
          });
        }
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err?.error?.message || 'تعذر تحميل بيانات العميل');
      }
    });
  }

  toggleHold(): void {
    if (!this.client) return;
    const clientId = this.client.id || this.clientId;
    const clientName = this.client.name || 'العميل';
    const actionName = this.client.is_hold ? 'إلغاء تعليق وتفعيل' : 'تعليق (Hold)';

    this.confirmService.confirm({
      title: `${actionName} حساب العميل: ${clientName}`,
      message: this.client.is_hold
        ? `هل تريد تفعيل حساب العميل "${clientName}" مجدداً؟`
        : `هل أنت متأكد من تعليق حساب العميل "${clientName}" مؤقتاً؟`,
      confirmText: this.client.is_hold ? 'نعم، قم بالتفعيل' : 'نعم، علّق الحساب (Hold)',
      cancelText: 'إلغاء',
      type: this.client.is_hold ? 'info' : 'warning',
      icon: this.client.is_hold ? 'fa-solid fa-play' : 'fa-solid fa-pause',
      accept: () => {
        this.apiService.toggleUserHold(clientId).subscribe({
          next: (res) => {
            this.client.is_hold = res.is_hold;
            this.toastService.success(res.message || 'تم تحديث حالة حساب العميل بنجاح');
          },
          error: (err) => {
            this.toastService.error(err.error?.message || 'فشل تغيير حالة حساب العميل');
          }
        });
      }
    });
  }

  openPaymentModal(): void {
    if (!this.client) return;
    this.paymentForm.reset({
      deal_id: this.deals.length > 0 ? this.deals[0].id : null,
      amount: this.remainingBalance > 0 ? this.remainingBalance : 0,
      payment_date: new Date().toISOString().split('T')[0],
      payment_method: 'cash',
      receipt_ref: ''
    });
    this.showPaymentModal = true;
  }

  savePayment(): void {
    if (this.paymentForm.invalid || !this.client) return;
    this.submitting = true;

    const payload = {
      ...this.paymentForm.value,
      client_id: this.client.id || this.clientId
    };

    this.apiService.storeClientPayment(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.showPaymentModal = false;
        this.toastService.success('تم تسجيل الدفعة بنجاح', 'تمت العملية');
        this.loadClientData();
      },
      error: (err) => {
        this.submitting = false;
        this.toastService.error(err.error?.message || 'فشل تسجيل الدفعة');
      }
    });
  }

  openEditModal(): void {
    if (!this.client) return;
    this.editClientForm.patchValue({
      name: this.client.name || this.client.client_name || '',
      email: this.client.email || this.client.client_email || '',
      phone: this.client.phone || '',
      client_code: this.client.client_code || '',
      password: ''
    });
    this.showEditModal = true;
  }

  saveClientProfile(): void {
    if (this.editClientForm.invalid || !this.client) return;
    this.submitting = true;

    const val = this.editClientForm.value;
    const payload: any = {
      name: val.name,
      email: val.email,
      phone: val.phone,
      client_code: val.client_code,
      role: 'client'
    };
    if (val.password && val.password.trim().length > 0) {
      payload.password = val.password;
    }

    const clientId = this.client.id || this.clientId;
    this.apiService.updateUser(clientId, payload).subscribe({
      next: (res) => {
        this.submitting = false;
        this.showEditModal = false;
        this.toastService.success('تم تحديث بيانات العميل بنجاح', 'حفظ التعديلات');
        this.loadClientData();
      },
      error: (err) => {
        this.submitting = false;
        this.toastService.error(err.error?.message || 'فشل تحديث بيانات العميل');
      }
    });
  }

  confirmDeleteClient(): void {
    if (!this.client) return;
    const clientId = this.client.id || this.clientId;
    const clientName = this.client.name || 'العميل';
    this.confirmService.confirm({
      title: 'تأكيد حذف العميل',
      message: `هل أنت متأكد من رغبتك في حذف العميل "${clientName}" نهائياً من النظام؟`,
      confirmText: 'نعم، حذف العميل',
      cancelText: 'إلغاء وتراجع',
      type: 'danger',
      icon: 'fa-solid fa-user-xmark',
      accept: () => {
        this.apiService.deleteUser(clientId).subscribe({
          next: () => {
            this.toastService.success(`تم حذف العميل "${clientName}" بنجاح`, 'تم الحذف');
            this.router.navigate(['/clients']);
          },
          error: (err) => {
            this.toastService.error(err.error?.message || 'تعذر حذف العميل', 'خطأ بالحذف');
          }
        });
      }
    });
  }
}
