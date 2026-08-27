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
import { ConfirmService } from '../../services/confirm.service';

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
    DropdownModule,
    DatePickerModule
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

      <!-- Search & Filters Bar -->
      <div class="filters-bar glass-panel">
        <div class="search-field">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" [(ngModel)]="searchQuery" (input)="onFilterChange()" placeholder="البحث بعنوان الصفقة أو نطاق العمل..." />
        </div>
        <div class="filter-dropdown" style="min-width: 200px;">
          <app-prime-picker-select
            [(ngModel)]="selectedStatus"
            (onChange)="onFilterChange()"
            [items]="statusList"
            optionLabel="label"
            optionValue="id"
            placeholder="جميع الحالات"
          ></app-prime-picker-select>
        </div>
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
                </td>
                <td style="color:var(--text-2); font-weight:500;">{{ getClientName(deal) }}</td>
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
                    <button class="action-icon-btn btn-rose" *ngIf="isManagerOrAdmin()" (click)="confirmDeleteDeal(deal)" title="حذف الصفقة والعقد">
                      <i class="fa-solid fa-trash-can"></i>
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

        <!-- Table Pagination Bar -->
        <div class="table-pagination-bar" *ngIf="deals.length > 0">
          <div class="pagination-info-group">
            <div class="pagination-info">
              عرض {{ (currentPage - 1) * pageSize + 1 }} إلى {{ currentPage * pageSize > totalRecords ? totalRecords : currentPage * pageSize }} من أصل {{ totalRecords }} صفقة
            </div>
            <div class="pagination-per-page">
              <span>عرض</span>
              <select [(ngModel)]="pageSize" (change)="onPerPageChange()" class="pg-select">
                <option [ngValue]="5">5</option>
                <option [ngValue]="10">10</option>
                <option [ngValue]="25">25</option>
                <option [ngValue]="50">50</option>
              </select>
              <span>صفوف</span>
            </div>
          </div>
          <div class="pagination-controls">
            <button class="pg-btn" [disabled]="currentPage === 1" (click)="changePage(currentPage - 1)">
              <i class="fa-solid fa-chevron-right"></i> السابق
            </button>
            <button
              *ngFor="let p of pageNumbers"
              class="pg-num-btn"
              [class.active]="p === currentPage"
              (click)="changePage(p)"
            >
              {{ p }}
            </button>
            <button class="pg-btn" [disabled]="currentPage * pageSize >= totalRecords" (click)="changePage(currentPage + 1)">
              التالي <i class="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add Deal -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="إنشاء صفقة وعقد جديد" [style]="{ width: '92vw', maxWidth: '680px' }">
        <form [formGroup]="dealForm" (ngSubmit)="saveDeal()">
          <div class="form-grid" style="padding: 20px 0 10px;">
            <div class="form-group full-width">
              <label>عنوان الصفقة <span class="required">*</span></label>
              <input type="text" pInputText formControlName="title" placeholder="مثال: الهوية البصرية والحملة الإعلانية" [class.is-invalid]="dealForm.get('title')?.invalid && (dealForm.get('title')?.touched || dealForm.get('title')?.dirty)" />
              <small class="field-error-msg" *ngIf="dealForm.get('title')?.invalid && (dealForm.get('title')?.touched || dealForm.get('title')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> عنوان الصفقة والعقد مطلوب
              </small>
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
              <label>مسؤول المبيعات (اختياري)</label>
              <app-prime-picker-select
                formControlName="sales_person_id"
                [items]="employeesWithNoneOption"
                optionLabel="name"
                optionValue="id"
                placeholder="بدون مسؤول مبيعات (اختياري)..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>نوع العمولة (اختياري)</label>
              <app-prime-picker-select
                formControlName="sales_commission_type"
                [items]="[
                  { label: 'بدون عمولة (لا يوجد)', id: 'none' },
                  { label: 'مبلغ ثابت (ج.م)', id: 'fixed' },
                  { label: 'نسبة مئوية (%)', id: 'percentage' }
                ]"
                optionLabel="label"
                optionValue="id"
                placeholder="اختر نوع العمولة..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group" *ngIf="dealForm.value.sales_commission_type && dealForm.value.sales_commission_type !== 'none'">
              <label>قيمة العمولة</label>
              <input type="number" pInputText formControlName="sales_commission_value" placeholder="مثال: 500 أو 10" />
            </div>
            <div class="form-group">
              <label>قيمة العقد الإجمالية (ج.م) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="total_price" placeholder="12000" [class.is-invalid]="dealForm.get('total_price')?.invalid && (dealForm.get('total_price')?.touched || dealForm.get('total_price')?.dirty)" />
              <small class="field-error-msg" *ngIf="dealForm.get('total_price')?.invalid && (dealForm.get('total_price')?.touched || dealForm.get('total_price')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> قيمة العقد الإجمالية مطلوبة وتساوي 0 أو أكثر
              </small>
            </div>
            <div class="form-group full-width">
              <label>النطاق والمواصفات المتفق عليها</label>
              <textarea pTextarea formControlName="agreed_scope" rows="3" placeholder="تفاصيل العقد والمخرجات المطلوبة..."></textarea>
            </div>

            <!-- Tasks Builder Section inside Deal Modal -->
            <div class="full-width tasks-builder-section">
              <div class="tasks-builder-head">
                <label style="font-weight:800; color:var(--violet-light); font-size:0.88rem; margin:0;">
                  <i class="fa-solid fa-list-check" style="margin-left:6px;"></i> المهام والمخرجات التنفيذية للصفقة (تُسند تلقائياً لمدير القسم)
                </label>
                <button type="button" class="btn-add-task-row" (click)="addTaskRow()">
                  <i class="fa-solid fa-plus"></i> إضافة مهمة تنفيذية
                </button>
              </div>

              <div class="tasks-list-rows" *ngIf="dealTasks.length > 0">
                <div class="task-input-card" *ngFor="let t of dealTasks; let idx = index">
                  <div class="task-card-inner">
                    <!-- Top Row: Task Title -->
                    <div class="form-group task-title-group">
                      <label>عنوان المهمة <span class="required">*</span></label>
                      <input type="text" pInputText [(ngModel)]="t.title" [ngModelOptions]="{standalone: true}" placeholder="عنوان المهمة التنفيذية..." />
                    </div>

                    <!-- Bottom Row: Executing Department + Client Price + Employee Price + Delete Button -->
                    <div class="task-details-row">
                      <div class="form-group flex-dept">
                        <label>القسم المنفذ</label>
                        <app-prime-picker-select
                          [(ngModel)]="t.department_id"
                          [ngModelOptions]="{standalone: true}"
                          [items]="departments"
                          optionLabel="name"
                          optionValue="id"
                          placeholder="نفس قسم الصفقة (تلقائي)"
                        ></app-prime-picker-select>
                      </div>
                      <div class="form-group flex-price">
                        <label>السعر للعميل (ج.م)</label>
                        <input type="number" pInputText [(ngModel)]="t.client_price" [ngModelOptions]="{standalone: true}" placeholder="0" />
                      </div>
                      <div class="form-group flex-price">
                        <label>مستحقات الموظف (اختياري)</label>
                        <input type="number" pInputText [(ngModel)]="t.employee_price" [ngModelOptions]="{standalone: true}" placeholder="0 (اختياري)" />
                      </div>
                      <div class="form-group flex-del">
                        <label>&nbsp;</label>
                        <button type="button" class="btn-remove-task-row" (click)="removeTaskRow(idx)" title="حذف المهمة">
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div *ngIf="dealTasks.length === 0" class="tasks-empty-hint">
                <i class="fa-solid fa-info-circle"></i> يمكنك إضافة المهام التنفيذية المطلوبة هنا لتوزيعها تلقائياً على مديري الأقسام عند الحفظ.
              </div>
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
            <button type="button" class="btn-dialog-cancel" (click)="closePaymentModal()">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="paymentForm.invalid || loading">
              {{ loading ? 'جاري المعالجة...' : 'تأكيد وتسجيل الدفعة' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Quick Add Client Modal -->
      <p-dialog [(visible)]="showAddClientModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="إضافة عميل جديد" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="quickClientForm" (ngSubmit)="saveQuickClient()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>الاسم الكامل / الشركة <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="مثال: شركة الأمل للتجارة" />
            </div>
            <div class="form-group">
              <label>البريد الإلكتروني <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="client@example.com" />
            </div>
            <div class="form-group">
              <label>رقم الموبايل / الهاتف</label>
              <input type="text" pInputText formControlName="phone" placeholder="010xxxxxxx" />
            </div>
            <div class="form-group">
              <label>كلمة المرور الافتراضية <span class="required">*</span></label>
              <div class="password-wrapper">
                <input [type]="showQuickClientPw ? 'text' : 'password'" pInputText formControlName="password" placeholder="••••••••" />
                <button type="button" class="btn-toggle-pw" (click)="showQuickClientPw = !showQuickClientPw" [title]="showQuickClientPw ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'">
                  <i class="fa-solid" [ngClass]="showQuickClientPw ? 'fa-eye-slash' : 'fa-eye'"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showAddClientModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="quickClientForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : 'حفظ وتحديد العميل' }}
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
    .btn-rose { background: rgba(244, 63, 94, 0.12); color: #fb7185; border-color: rgba(244, 63, 94, 0.25); }
    .btn-rose:hover { background: #f43f5e; color: #ffffff; }
    :host-context(body.light-theme) .btn-rose { background: #fff1f2 !important; border-color: #fecdd3 !important; color: #e11d48 !important; }
    :host-context(body.light-theme) .btn-rose:hover { background: #e11d48 !important; color: #ffffff !important; }

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

    /* Task Builder inside Deal Modal */
    .tasks-builder-section { margin-top: 14px; padding-top: 14px; border-top: 1px dashed var(--border); display: flex; flex-direction: column; gap: 12px; }
    .tasks-builder-head { display: flex; justify-content: space-between; align-items: center; }
    .btn-add-task-row { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); border: 1px solid rgba(99, 102, 241, 0.25); padding: 6px 14px; border-radius: 10px; font-size: 0.82rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-add-task-row:hover { background: var(--violet); color: #fff; }
    .tasks-list-rows { display: flex; flex-direction: column; gap: 12px; }
    .task-input-card { background: rgba(99, 102, 241, 0.04); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 14px; padding: 14px 16px; transition: all 0.2s ease; }
    .task-input-card:hover { background: rgba(99, 102, 241, 0.07); border-color: rgba(99, 102, 241, 0.35); }
    :host-context(body.light-theme) .task-input-card { background: #f8fafc !important; border-color: #cbd5e1 !important; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03) !important; }
    .task-card-inner { display: flex; flex-direction: column; gap: 12px; }
    .task-details-row { display: flex; gap: 12px; align-items: flex-end; }
    .flex-dept { flex: 2; min-width: 0; }
    .flex-price { flex: 1; min-width: 110px; }
    .flex-del { flex-shrink: 0; }
    .btn-remove-task-row { width: 44px; height: 44px; border-radius: 12px; background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.25); color: #fda4af; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; font-size: 0.9rem; }
    .btn-remove-task-row:hover { background: #f43f5e; color: #ffffff; border-color: #f43f5e; }
    :host-context(body.light-theme) .btn-remove-task-row { background: #fff1f2 !important; border-color: #fecdd3 !important; color: #e11d48 !important; }
    :host-context(body.light-theme) .btn-remove-task-row:hover { background: #e11d48 !important; color: #ffffff !important; }
    .tasks-empty-hint { font-size: 0.82rem; color: var(--text-2); background: rgba(99, 102, 241, 0.05); border: 1px dashed rgba(99, 102, 241, 0.2); padding: 12px 16px; border-radius: 12px; display: flex; align-items: center; gap: 8px; }

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
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);

  deals: any[] = [];
  clients: any[] = [];
  departments: any[] = [];
  employees: any[] = [];

  statusList = [
    { id: '', label: 'جميع الحالات' },
    { id: 'pending', label: 'معلقة / تحت المراجعة' },
    { id: 'active', label: 'نشطة / جارية' },
    { id: 'won', label: 'مكتملة / ناجحة' },
    { id: 'closed', label: 'مغلقة' },
    { id: 'cancelled', label: 'ملغاة' }
  ];

  showAddModal = false;
  showPaymentModal = false;
  showAddClientModal = false;
  showQuickClientPw = false;
  selectedDeal: any = null;
  loading = false;

  dealForm!: FormGroup;
  paymentForm!: FormGroup;
  quickClientForm!: FormGroup;

  currentUser: any = null;

  searchQuery = '';
  selectedStatus = '';
  currentPage = 1;
  pageSize = 5;
  totalRecords = 0;

  getClientName(item: any): string {
    if (!item) return 'عميل عام';
    if (typeof item === 'string' && item.trim()) return item === '[object Object]' ? 'عميل عام' : item;
    if (typeof item.client_name === 'string' && item.client_name.trim() && item.client_name !== '[object Object]') return item.client_name;
    if (item.client_name && typeof item.client_name === 'object') {
      const n = item.client_name.name || item.client_name.client_name;
      if (n && typeof n === 'string' && n !== '[object Object]') return n;
    }
    if (typeof item.client === 'string' && item.client.trim() && item.client !== '[object Object]') return item.client;
    if (item.client && typeof item.client === 'object') {
      const n = item.client.name || item.client.client_name || item.client.company || item.client.full_name;
      if (n && typeof n === 'string' && n !== '[object Object]') return n;
    }
    if (typeof item.name === 'string' && item.name.trim() && item.name !== '[object Object]') return item.name;
    return 'عميل عام';
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

  isManagerOrAdmin(): boolean {
    if (!this.currentUser) return true;
    return ['super_admin', 'admin', 'department_manager'].includes(this.currentUser.role);
  }

  confirmDeleteDeal(deal: any): void {
    this.confirmService.confirm({
      title: 'تأكيد حذف الصفقة والعقد',
      message: `هل أنت تأكد من رغبتك في حذف الصفقة "${deal.title}" والعقد والبيانات المرتبطة بها نهائياً؟`,
      confirmText: 'نعم، حذف الصفقة',
      cancelText: 'تراجع وإلغاء',
      type: 'danger',
      icon: 'fa-solid fa-trash-can',
      accept: () => {
        this.loading = true;
        this.apiService.deleteDeal(deal.id, false).subscribe({
          next: () => {
            this.loading = false;
            this.toastService.success(`تم حذف الصفقة "${deal.title}" بنجاح`, 'تم الحذف');
            this.loadData();
          },
          error: (err) => {
            this.loading = false;
            this.toastService.error(err.error?.message || 'تعذر حذف الصفقة', 'خطأ بالحذف');
          }
        });
      }
    });
  }

  saveQuickClient(): void {
    if (this.quickClientForm.invalid) {
      this.quickClientForm.markAllAsTouched();
      this.toastService.warning('يرجى إدخال بيانات العميل بشكل صحيح');
      return;
    }
    this.loading = true;

    const payload = {
      ...this.quickClientForm.value,
      role: 'client'
    };

    this.apiService.createUser(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.toastService.success('تم إضافة العميل الجديد بنجاح');
        this.showAddClientModal = false;
        if (res && res.data) {
          this.clients.push(res.data);
          this.dealForm.patchValue({ client_id: res.data.id });
        }
        this.loadDropdownOptions();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || 'تعذر إضافة العميل');
      }
    });
  }

  saveDeal(): void {
    if (this.dealForm.invalid) {
      this.dealForm.markAllAsTouched();
      this.toastService.warning('يرجى ملء جميع الحقول المطلوبة بشكل صحيح قبل الحفظ', 'بيانات غير مكتملة');
      return;
    }
    this.loading = true;

    const validTasks = (this.dealTasks || []).filter(t => t.title && t.title.trim());
    const payload = {
      ...this.dealForm.value,
      tasks: validTasks
    };

    this.apiService.createDeal(payload).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success('تم إنشاء الصفقة والعقد بنجاح', 'تمت العملية');
        this.closeAddModal();
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || 'تعذر حفظ الصفقة والعقد');
      }
    });
  }

  savePayment(): void {
    if (this.paymentForm.invalid || !this.selectedDeal) {
      this.paymentForm.markAllAsTouched();
      this.toastService.warning('يرجى إدخال المبلغ وتاريخ الدفعة بشكل صحيح');
      return;
    }
    this.loading = true;

    const payload = {
      ...this.paymentForm.value,
      payment_date: this.formatDatePayload(this.paymentForm.value.payment_date),
      deal_id: this.selectedDeal.id,
      client_id: this.selectedDeal.client_id
    };

    this.apiService.storeClientPayment(payload).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success('تم تسجيل الدفعة المالية بنجاح', 'تمت الدفعة');
        this.closePaymentModal();
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || 'تعذر تسجيل الدفعة المالية');
      }
    });
  }

  ngOnInit(): void {
    try {
      const uStr = localStorage.getItem('mediaglow_user');
      if (uStr) this.currentUser = JSON.parse(uStr);
    } catch(e){}
    this.initForms();
    this.loadDropdownOptions();
    this.loadData();
  }

  loadDropdownOptions(): void {
    this.apiService.getUsers('client').subscribe(res => {
      this.clients = Array.isArray(res) ? res : (res?.data || []);
    });
    this.apiService.getDepartments().subscribe(res => {
      this.departments = Array.isArray(res) ? res : (res?.data || []);
    });
    this.apiService.getUsers().subscribe(res => {
      const arr = Array.isArray(res) ? res : (res?.data || []);
      this.employees = arr.filter((u: any) => u.role !== 'client' && u.role !== 'Client');
    });
  }

  get employeesWithNoneOption(): any[] {
    return [
      { id: null, name: 'بدون مسؤول مبيعات (لا يوجد)' },
      ...this.employees
    ];
  }

  initForms(): void {
    this.dealForm = this.fb.group({
      title: ['', Validators.required],
      client_id: [null],
      department_id: [null],
      sales_person_id: [null],
      sales_commission_type: ['none'],
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

    this.quickClientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['password123', Validators.required]
    });
  }

  loadData(): void {
    const params = {
      page: this.currentPage,
      per_page: this.pageSize,
      search: this.searchQuery,
      status: this.selectedStatus
    };

    this.apiService.getDeals(params).subscribe(res => {
      let raw: any[] = [];
      if (res && res.data) {
        if (Array.isArray(res.data)) {
          raw = res.data;
          this.totalRecords = res.total || raw.length;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          raw = res.data.data;
          this.totalRecords = res.data.total || raw.length;
        } else {
          raw = [res.data];
          this.totalRecords = raw.length;
        }
      } else if (Array.isArray(res)) {
        raw = res;
        this.totalRecords = raw.length;
      }

      if (this.currentUser?.role === 'client') {
        const u = this.currentUser;
        raw = raw.filter((d: any) =>
          d.client_id === u.id ||
          d.client?.id === u.id ||
          d.client?.email === u.email ||
          d.client_name === u.name ||
          d.client === u.name
        );
      }
      this.deals = raw;
    });
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.loadData();
  }

  onPerPageChange(): void {
    this.currentPage = 1;
    this.loadData();
  }

  changePage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    this.loadData();
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize) || 1;
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
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

  dealTasks: any[] = [];

  addTaskRow(): void {
    this.dealTasks.push({
      title: '',
      department_id: this.dealForm?.value?.department_id || null,
      client_price: 0,
      employee_price: 0
    });
  }

  removeTaskRow(idx: number): void {
    this.dealTasks.splice(idx, 1);
  }

  openAddDealModal(): void {
    this.dealForm.reset({ sales_commission_type: 'none', sales_commission_value: 0, total_price: 0 });
    this.dealTasks = [];
    this.showAddModal = true;
  }

  openAddModal(): void {
    this.openAddDealModal();
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  triggerQuickAddClient(): void {
    this.quickClientForm.reset({ password: 'password123' });
    this.showQuickClientPw = false;
    this.showAddClientModal = true;
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
}
