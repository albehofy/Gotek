import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
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
                <td style="font-weight:700; color:var(--text);">
                  <span *ngIf="isEmployeeRole()">—</span>
                  <span *ngIf="!isEmployeeRole()">{{ (deal.calculated_total || deal.total_price) | number:'1.2-2' }} ج.م</span>
                </td>
                <td style="color:var(--emerald-light); font-weight:700;">
                  <span *ngIf="isEmployeeRole()">—</span>
                  <span *ngIf="!isEmployeeRole()">{{ (deal.calculated_paid || deal.paid_amount) | number:'1.2-2' }} ج.م</span>
                </td>
                <td style="color:var(--rose-light); font-weight:700;">
                  <span *ngIf="isEmployeeRole()">—</span>
                  <span *ngIf="!isEmployeeRole()">{{ deal.remaining_balance | number:'1.2-2' }} ج.م</span>
                </td>
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
                    <button class="action-icon-btn btn-sky" *ngIf="canEditDeal()" (click)="openEditDealModal(deal)" title="تعديل بيانات ومخرجات الصفقة والأسعار">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="action-icon-btn btn-amber" *ngIf="isManagerOrAdmin()" (click)="openDealHistoryModal(deal)" title="سجل تعديلات وتاريخ الصفقة">
                      <i class="fa-solid fa-clock-rotate-left"></i>
                    </button>
                    <button class="action-icon-btn btn-emerald" *ngIf="canAddPayment()" (click)="openPaymentModal(deal)" title="تسجيل دفعة مالية جديدة">
                      <i class="fa-solid fa-money-bill-wave"></i>
                    </button>
                    <button class="action-icon-btn btn-rose" *ngIf="canDeleteDeal()" (click)="confirmDeleteDeal(deal)" title="حذف الصفقة والعقد (للسوبر أدمن فقط)">
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

      <!-- PrimeNG Dialog: Add / Edit Deal -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" (onHide)="closeAddModal()" [header]="isEditMode ? 'تعديل بيانات ومخرجات الصفقة' : 'إنشاء صفقة وعقد جديد'" [style]="{ width: '92vw', maxWidth: '750px' }">
        <form [formGroup]="dealForm" (ngSubmit)="saveDeal()">
          <div class="form-grid" style="padding: 20px 0 10px;">
            <div class="form-group full-width">
              <label>عنوان الصفقة <span class="required">*</span></label>
              <input type="text" pInputText formControlName="title" placeholder="مثال: الهوية البصرية والحملة الإعلانية" [class.is-invalid]="dealForm.get('title')?.invalid && (dealForm.get('title')?.touched || dealForm.get('title')?.dirty)" />
              <small class="field-error-msg" *ngIf="dealForm.get('title')?.invalid && (dealForm.get('title')?.touched || dealForm.get('title')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> عنوان الصفقة والعقد مطلوب
              </small>
            </div>
            <div class="form-group" *ngIf="isEditMode">
              <label>حالة الصفقة والعقد</label>
              <app-prime-picker-select
                formControlName="status"
                [items]="dealStatusOptions"
                optionLabel="label"
                optionValue="id"
                placeholder="حالة الصفقة..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group" [class.full-width]="!isEditMode">
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

            <!-- Financial Pricing & Discounts (Item 17) -->
            <div class="form-group">
              <label>قيمة العقد الأصلية (ج.م) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="total_price" placeholder="12000" [class.is-invalid]="dealForm.get('total_price')?.invalid && (dealForm.get('total_price')?.touched || dealForm.get('total_price')?.dirty)" />
              <small class="field-error-msg" *ngIf="dealForm.get('total_price')?.invalid && (dealForm.get('total_price')?.touched || dealForm.get('total_price')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> قيمة العقد الإجمالية مطلوبة وتساوي 0 أو أكثر
              </small>
            </div>
            <div class="form-group">
              <label>نوع الخصم المالي (اختياري)</label>
              <app-prime-picker-select
                formControlName="discount_type"
                [items]="[
                  { label: 'بدون خصم', id: 'none' },
                  { label: 'نسبة مئوية (%)', id: 'percentage' },
                  { label: 'مبلغ ثابت (ج.م)', id: 'fixed' }
                ]"
                optionLabel="label"
                optionValue="id"
                placeholder="اختر نوع الخصم..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group" *ngIf="dealForm.value.discount_type && dealForm.value.discount_type !== 'none'">
              <label>قيمة الخصم {{ dealForm.value.discount_type === 'percentage' ? '(%)' : '(ج.م)' }}</label>
              <input type="number" pInputText formControlName="discount_value" placeholder="مثال: 10 أو 500" />
            </div>

            <!-- Down payment / Deposit (العربون أو الدفعة المقدمة عند إنشاء الصفقة) -->
            <div class="form-group" *ngIf="!isEditMode">
              <label>الدفعة المقدمة / العربون (ج.م) <small style="color:var(--text-3); font-weight:normal;">(اختياري)</small></label>
              <input type="number" pInputText formControlName="paid_amount" placeholder="0.00" min="0" />
            </div>
            <div class="form-group" *ngIf="!isEditMode && (dealForm.value.paid_amount > 0)">
              <label>طريقة سداد العربون</label>
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

            <!-- Live Net Price & Balance Calculation Banner -->
            <div class="full-width discount-summary-card" *ngIf="(dealForm.value.total_price > 0) || (dealForm.value.discount_type && dealForm.value.discount_type !== 'none') || (dealForm.value.paid_amount > 0)">
              <div class="disc-row">
                <span>الإجمالي الأصلي قبل الخصم:</span>
                <strong>{{ (dealForm.value.total_price || 0) | number:'1.2-2' }} ج.م</strong>
              </div>
              <div class="disc-row" style="color:var(--rose-light);" *ngIf="dealForm.value.discount_type && dealForm.value.discount_type !== 'none'">
                <span>قيمة الخصم المالي المستقطع:</span>
                <strong>- {{ getCalculatedDiscountAmount() | number:'1.2-2' }} ج.م</strong>
              </div>
              <div class="disc-row" style="color:var(--emerald-light); font-weight:bold;">
                <span>صافي قيمة العقد بعد الخصم:</span>
                <strong>{{ getCalculatedNetTotal() | number:'1.2-2' }} ج.م</strong>
              </div>
              <div class="disc-row" style="color:var(--teal-light);" *ngIf="dealForm.value.paid_amount > 0">
                <span>المدفوع مقدماً (العربون):</span>
                <strong>- {{ (dealForm.value.paid_amount || 0) | number:'1.2-2' }} ج.م</strong>
              </div>
              <div class="disc-row" style="color:var(--amber-light); font-weight:bold; border-top:1px solid rgba(255,255,255,0.08); padding-top:6px; margin-top:4px;" *ngIf="dealForm.value.paid_amount > 0">
                <span>المتبقي في ذمة العميل:</span>
                <strong style="font-size:1.05rem;">{{ getCalculatedRemainingBalance() | number:'1.2-2' }} ج.م</strong>
              </div>
            </div>

            <div class="form-group full-width">
              <label>النطاق والمواصفات المتفق عليها</label>
              <textarea pTextarea formControlName="agreed_scope" rows="3" placeholder="تفاصيل العقد والمخرجات المطلوبة..."></textarea>
            </div>

            <!-- Dynamic Department Specific Dates -->
            <div class="full-width" style="background:rgba(255,255,255,0.03); border:1px solid var(--border); border-radius: 8px; padding:14px;">
              <div style="font-weight:700; color:var(--violet-light); font-size:0.85rem; margin-bottom:10px; display:flex; align-items:center; gap:6px;">
                <i class="fa-solid fa-calendar-days"></i> مواعيد وتواريخ تنفيذ الصفقة حسب القسم
              </div>

              <!-- Photography & Editing -->
              <div *ngIf="isPhotoEditingDept()" style="display:flex; flex-direction:column; gap:10px;">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                  <input type="checkbox" id="dealDatesNotSpecified" formControlName="dates_not_specified" style="accent-color:var(--violet); width:16px; height:16px;" />
                  <label for="dealDatesNotSpecified" style="color:#fff; font-size:0.84rem; cursor:pointer; font-weight:600;">لم يتم تحديد المواعيد بعد</label>
                </div>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;" *ngIf="!dealForm.get('dates_not_specified')?.value">
                  <div class="form-group">
                    <label>تاريخ التصوير (Shooting Date)</label>
                    <input type="date" pInputText formControlName="shooting_date" />
                  </div>
                  <div class="form-group">
                    <label>تاريخ التسليم (Delivery Date)</label>
                    <input type="date" pInputText formControlName="delivery_date" />
                  </div>
                </div>
              </div>

              <!-- Social Media Management -->
              <div *ngIf="isSocialMediaDept()" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                <div class="form-group">
                  <label>تاريخ بداية الحملة / العقد</label>
                  <input type="date" pInputText formControlName="start_date" />
                </div>
                <div class="form-group">
                  <label>تاريخ نهاية الحملة / العقد</label>
                  <input type="date" pInputText formControlName="end_date" />
                </div>
              </div>

              <!-- General / Other departments -->
              <div *ngIf="!isPhotoEditingDept() && !isSocialMediaDept()" class="form-group">
                <label>تاريخ الاستحقاق والتسليم (Due Date)</label>
                <input type="date" pInputText formControlName="due_date" />
              </div>
            </div>

            <!-- Deal Attachments, Plan & Brief Section -->
            <div class="full-width" style="background:rgba(255,255,255,0.03); border:1px solid var(--border); border-radius: 8px; padding:16px; display:flex; flex-direction:column; gap:12px;">
              <div style="font-weight:800; color:var(--violet-light); font-size:0.88rem; display:flex; align-items:center; gap:8px;">
                <i class="fa-solid fa-folder-open"></i> وثائق وملفات التعاقد وخطة الشهر والبريف (Deal Attachments & Plan)
              </div>
              <p style="font-size:0.78rem; color:var(--text-2); margin:0;">
                يمكنك رفع ملف بريف العمل الشهري، وخطة الشهر المعتمدة (PDF) ليطلع عليها العميل وفريق العمل، ومستندات التعاقد الأخرى (Word, Excel, PDF).
              </p>

              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:12px;">
                <!-- 1. Monthly Brief File -->
                <div class="form-group">
                  <label><i class="fa-solid fa-file-word" style="color:#60a5fa; margin-left:4px;"></i> بريف العمل ومواصفات الشهر (Word / PDF / Doc)</label>
                  <input type="file" (change)="onBriefFileSelected($event)" accept=".pdf,.doc,.docx,.xls,.xlsx" style="padding:7px; font-size:0.82rem; color:var(--text-2); background:var(--bg-input); border:1px solid var(--border); border-radius:var(--r);" />
                  <small *ngIf="briefFile" style="color:var(--emerald-light); font-size:0.75rem;"><i class="fa-solid fa-circle-check"></i> تم اختيار البريف: {{ briefFile.name }}</small>
                </div>

                <!-- 2. Finalized Monthly Plan PDF -->
                <div class="form-group">
                  <label><i class="fa-solid fa-file-pdf" style="color:#f87171; margin-left:4px;"></i> خطة الشهر المعتمدة (Monthly Plan PDF)</label>
                  <input type="file" (change)="onPlanFileSelected($event)" accept=".pdf" style="padding:7px; font-size:0.82rem; color:var(--text-2); background:var(--bg-input); border:1px solid var(--border); border-radius:var(--r);" />
                  <small *ngIf="planFile" style="color:var(--emerald-light); font-size:0.75rem;"><i class="fa-solid fa-circle-check"></i> تم اختيار خطة الشهر: {{ planFile.name }}</small>
                </div>

                <!-- 3. Additional Documents & Contract -->
                <div class="form-group">
                  <label><i class="fa-solid fa-file-contract" style="color:#34d399; margin-left:4px;"></i> ملفات ومستندات إضافية (متعدد - Excel / PDF / Word)</label>
                  <input type="file" multiple (change)="onExtraFilesSelected($event)" style="padding:7px; font-size:0.82rem; color:var(--text-2); background:var(--bg-input); border:1px solid var(--border); border-radius:var(--r);" />
                  <small *ngIf="extraFiles && extraFiles.length > 0" style="color:var(--emerald-light); font-size:0.75rem;"><i class="fa-solid fa-circle-check"></i> تم اختيار {{ extraFiles.length }} ملف إضافي</small>
                </div>

                <!-- 4. Reference Link -->
                <div class="form-group">
                  <label><i class="fa-solid fa-link" style="color:var(--violet-light); margin-left:4px;"></i> رابط المرجع الخارجي (Reference Link)</label>
                  <input type="url" pInputText formControlName="reference_link" placeholder="https://drive.google.com/..." />
                </div>
              </div>

              <!-- Existing Deal Attachments (In Edit Mode) -->
              <div *ngIf="isEditMode && existingAttachments && existingAttachments.length > 0" style="margin-top:6px; padding-top:10px; border-top:1px dashed var(--border);">
                <div style="font-size:0.78rem; font-weight:700; color:var(--text-2); margin-bottom:6px;">
                  <i class="fa-solid fa-paperclip"></i> الملفات المرفقة حالياً بالصفقة ({{ existingAttachments.length }} ملف):
                </div>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                  <a *ngFor="let att of existingAttachments" [href]="getFileUrl(att)" target="_blank" style="font-size:0.75rem; background:rgba(255,255,255,0.05); border:1px solid var(--border); padding:4px 10px; border-radius:6px; color:var(--text); text-decoration:none; display:inline-flex; align-items:center; gap:5px;">
                    <i class="fa-solid" [ngClass]="att.category === 'plan' ? 'fa-file-pdf text-rose' : (att.category === 'brief' ? 'fa-file-word text-blue' : 'fa-file')"></i>
                    <span>{{ att.file_name || att.name || 'ملف' }}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.65rem; color:var(--violet-light);"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Tasks Builder Section inside Deal Modal (Items 1, 15, 19) -->
            <div class="full-width tasks-builder-section">
              <div class="tasks-builder-head">
                <label style="font-weight:800; color:var(--violet-light); font-size:0.88rem; margin:0;">
                  <i class="fa-solid fa-list-check" style="margin-left:6px;"></i> المهام والمخرجات التنفيذية للصفقة <span style="font-size:0.75rem; color:var(--text-3); font-weight:normal;">(يمكن إضافتها أو تعديلها أو إزالتها هنا)</span>
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

                    <!-- Task Description (Items 15 & 19) -->
                    <div class="form-group">
                      <label>وصف وتفاصيل المهمة</label>
                      <textarea pTextarea [(ngModel)]="t.description" [ngModelOptions]="{standalone: true}" rows="2" placeholder="اكتب وصف وتفاصيل المهمة التنفيذية..."></textarea>
                    </div>

                    <!-- Executing Department + Client Price + Employee Price + Delete Button -->
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
                        <input type="number" pInputText [(ngModel)]="t.client_price" [ngModelOptions]="{standalone: true}" (ngModelChange)="onTaskPriceChange()" placeholder="0" />
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

                    <!-- Dual File Upload per task (Item 15) -->
                    <div class="task-upload-actions">
                      <input type="file" #imgInput accept="image/*" (change)="onTaskFileSelected($event, idx, 'image')" style="display:none" />
                      <button type="button" class="btn-task-upload btn-upload-img" (click)="imgInput.click()">
                        <i class="fa-regular fa-image"></i> رفع صورة
                      </button>

                      <input type="file" #docInput accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" (change)="onTaskFileSelected($event, idx, 'doc')" style="display:none" />
                      <button type="button" class="btn-task-upload btn-upload-doc" (click)="docInput.click()">
                        <i class="fa-regular fa-file-lines"></i> رفع مستند Word أو PDF
                      </button>

                      <span *ngIf="t.fileName" class="task-file-badge">
                        <i [ngClass]="t.fileType === 'image' ? 'fa-regular fa-image' : 'fa-regular fa-file-pdf'"></i>
                        {{ t.fileName }}
                        <i class="fa-solid fa-xmark remove-file-icon" (click)="removeTaskFile(idx)" title="إلغاء الملف"></i>
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              <div *ngIf="dealTasks.length === 0" class="tasks-empty-hint">
                <i class="fa-solid fa-circle-info"></i> إضافة المهام هنا <strong>اختياري</strong>؛ يمكنك حفظ الصفقة بدون مهام أو إضافة المهام وتعديلها في أي وقت.
              </div>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="closeAddModal()">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="dealForm.invalid || loading">
              {{ loading ? 'جاري المعالجة...' : (isEditMode ? 'حفظ تعديلات الصفقة' : 'حفظ ونشر الصفقة') }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Payment Modal -->
      <p-dialog [(visible)]="showPaymentModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" (onHide)="closePaymentModal()" [header]="'تسجيل دفعة / قسط: ' + (selectedDeal?.title || '')" [style]="{ width: '92vw', maxWidth: '480px' }">
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
      <p-dialog [(visible)]="showAddClientModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" (onHide)="closeQuickClientModal()" header="إضافة عميل جديد" [style]="{ width: '92vw', maxWidth: '480px' }">
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
            <button type="button" class="btn-dialog-cancel" (click)="closeQuickClientModal()">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="quickClientForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : 'حفظ وتحديد العميل' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Deal History & Audit Log -->
      <p-dialog [(visible)]="showHistoryModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'سجل تعديلات وتاريخ الصفقة: ' + (selectedDeal?.title || '')" [style]="{ width: '92vw', maxWidth: '680px' }">
        <div style="padding: 10px 0;">
          <div *ngIf="loadingHistory" style="text-align:center; padding:30px;">
            <i class="fa-solid fa-circle-notch fa-spin" style="font-size:2rem; color:var(--violet-light);"></i>
            <div style="margin-top:10px; color:var(--text-2);">جاري تحميل سجل التعديلات...</div>
          </div>

          <div class="history-timeline-box" *ngIf="!loadingHistory && dealHistory && dealHistory.length > 0">
            <div class="history-timeline-item" *ngFor="let item of dealHistory">
              <div class="history-item-marker" [style.background-color]="item.color || '#6366f1'">
                <i class="fa-solid" [ngClass]="item.icon || 'fa-clock-rotate-left'"></i>
              </div>
              <div class="history-item-content">
                <div class="history-item-header">
                  <div class="history-user-info">
                    <span class="history-user-avatar"><i class="fa-solid fa-user"></i></span>
                    <strong class="history-user-name">{{ item.user?.name || 'مستخدم' }}</strong>
                    <span class="role-badge" [ngClass]="item.user?.role === 'super_admin' ? 'role-super-admin' : 'role-admin'">
                      {{ item.user?.role_label || item.user?.role || 'مستخدم' }}
                    </span>
                  </div>
                  <span class="history-item-date">
                    <i class="fa-regular fa-clock"></i>
                    {{ (item.created_at | date:'yyyy/MM/dd - hh:mm a') || '-' }}
                  </span>
                </div>
                <div class="history-item-body">
                  <div class="history-item-title">{{ item.title }}</div>
                  <p class="history-item-desc">{{ item.description }}</p>
                  <div class="history-diff-pills" *ngIf="item.old !== null && item.old !== undefined && item.new !== null && item.new !== undefined">
                    <span class="diff-pill diff-old">السابق: {{ item.old }}</span>
                    <i class="fa-solid fa-arrow-left diff-arrow"></i>
                    <span class="diff-pill diff-new">الجديد: {{ item.new }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div *ngIf="!loadingHistory && (!dealHistory || dealHistory.length === 0)" class="empty-state-card" style="padding:28px;">
            <i class="fa-solid fa-clock-rotate-left" style="font-size:2rem; color:var(--text-3); margin-bottom:8px;"></i>
            <div style="font-weight:700; color:var(--text);">لا توجد أي تعديلات مسجلة بعد</div>
            <p style="color:var(--text-2); font-size:0.85rem; margin-top:4px;">كافة التعديلات القادمة على البيانات والأسعار سيتم توثيقها تلقائياً بالاسم والتاريخ والبيانات السابقة.</p>
          </div>
        </div>
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

    .table-card { border-radius: 8px; overflow: hidden; background: var(--bg-card); border: 1px solid var(--border); box-shadow: var(--shadow-sm); }
    .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }

    .crm-table { width: 100%; min-width: 1050px; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 16px 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.88rem; color: var(--text); vertical-align: middle; white-space: nowrap; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
    
    .actions-group { display: flex; align-items: center; gap: 6px; }
    .action-icon-btn { width: 34px; height: 34px; border-radius: 8px; border: 1px solid transparent; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 0.88rem; }
    .btn-violet { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); border-color: rgba(99, 102, 241, 0.25); }
    .btn-violet:hover { background: var(--violet); color: #ffffff; }
    .btn-emerald { background: rgba(16, 185, 129, 0.12); color: #34d399; border-color: rgba(16, 185, 129, 0.25); }
    .btn-emerald:hover { background: #10b981; color: #ffffff; }
    .btn-rose { background: rgba(244, 63, 94, 0.12); color: #fb7185; border-color: rgba(244, 63, 94, 0.25); }
    .btn-rose:hover { background: #f43f5e; color: #ffffff; }
    :host-context(body.light-theme) .btn-rose { background: #fff1f2 !important; border-color: #fecdd3 !important; color: #e11d48 !important; }
    :host-context(body.light-theme) .btn-rose:hover { background: #e11d48 !important; color: #ffffff !important; }
    .btn-sky { background: rgba(14, 165, 233, 0.12); color: #38bdf8; border-color: rgba(14, 165, 233, 0.25); }
    .btn-sky:hover { background: #0284c7; color: #ffffff; }
    :host-context(body.light-theme) .btn-sky { background: #e0f2fe !important; border-color: #bae6fd !important; color: #0284c7 !important; }
    :host-context(body.light-theme) .btn-sky:hover { background: #0284c7 !important; color: #ffffff !important; }
    .btn-amber { background: rgba(245, 158, 11, 0.12); color: #fbbf24; border-color: rgba(245, 158, 11, 0.25); }
    .btn-amber:hover { background: #f59e0b; color: #ffffff; }
    :host-context(body.light-theme) .btn-amber { background: #fffbeb !important; border-color: #fde68a !important; color: #d97706 !important; }
    :host-context(body.light-theme) .btn-amber:hover { background: #d97706 !important; color: #ffffff !important; }

    /* History Timeline */
    .history-timeline-box { display: flex; flex-direction: column; gap: 14px; position: relative; padding-right: 18px; max-height: 480px; overflow-y: auto; }
    .history-timeline-box::before { content: ''; position: absolute; top: 12px; bottom: 12px; right: 17px; width: 2px; background: rgba(99, 102, 241, 0.18); }
    .history-timeline-item { display: flex; gap: 14px; position: relative; align-items: flex-start; }
    .history-item-marker { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.88rem; z-index: 2; flex-shrink: 0; box-shadow: 0 0 10px rgba(0,0,0,0.25); }
    .history-item-content { flex: 1; background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border); border-radius: 8px; padding: 12px 16px; display: flex; flex-direction: column; gap: 6px; }
    .history-item-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px; }
    .history-user-info { display: flex; align-items: center; gap: 8px; }
    .history-user-avatar { width: 24px; height: 24px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--text-2); }
    .history-user-name { font-size: 0.85rem; color: var(--text); font-weight: 700; }
    .role-badge { font-size: 0.65rem; font-weight: 800; padding: 2px 7px; border-radius: 6px; }
    .role-super-admin { background: rgba(244, 63, 94, 0.15); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.3); }
    .role-admin { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }
    .history-item-date { font-size: 0.74rem; color: var(--text-3); display: flex; align-items: center; gap: 4px; }
    .history-item-title { font-size: 0.9rem; font-weight: 800; color: var(--text); }
    .history-item-desc { font-size: 0.84rem; color: var(--text-2); margin: 0; line-height: 1.45; }
    .history-diff-pills { display: flex; align-items: center; gap: 6px; margin-top: 4px; flex-wrap: wrap; }
    .diff-pill { font-size: 0.74rem; font-weight: 700; padding: 2px 8px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px; }
    .diff-old { background: rgba(244, 63, 94, 0.1); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.2); }
    .diff-new { background: rgba(16, 185, 129, 0.1); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.2); }
    .diff-arrow { font-size: 0.7rem; color: var(--text-3); }

    :host-context(body.light-theme) .history-item-content { background: #f8fafc !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .history-user-name { color: #0f172a !important; }
    :host-context(body.light-theme) .history-item-title { color: #0f172a !important; }
    :host-context(body.light-theme) .history-item-desc { color: #334155 !important; }

    .discount-summary-card { background: rgba(99, 102, 241, 0.08); border: 1px dashed rgba(99, 102, 241, 0.3); border-radius: 8px; padding: 12px 16px; display: flex; flex-direction: column; gap: 8px; }
    .disc-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; }

    .task-upload-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 4px; }
    .btn-task-upload { background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border); border-radius: 6px; color: var(--text-2); padding: 6px 12px; font-size: 0.78rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-upload-img:hover { border-color: #38bdf8; color: #38bdf8; background: rgba(14, 165, 233, 0.12); }
    .btn-upload-doc:hover { border-color: #f59e0b; color: #f59e0b; background: rgba(245, 158, 11, 0.12); }
    .task-file-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 6px; background: rgba(16, 185, 129, 0.12); color: #34d399; font-size: 0.78rem; border: 1px solid rgba(16, 185, 129, 0.25); font-weight: 600; }
    .remove-file-icon { cursor: pointer; color: #fb7185; margin-right: 4px; transition: color 0.2s; }
    .remove-file-icon:hover { color: #f43f5e; }

    /* Status Pills */
    .status-pill { font-size: 0.74rem; font-weight: 800; padding: 4px 12px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; white-space: nowrap; }
    .status-pending { background: rgba(245, 158, 11, 0.12); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); }
    .status-active { background: rgba(99, 102, 241, 0.12); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); }
    .status-completed { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .status-cancelled { background: rgba(244, 63, 94, 0.12); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.3); }

    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input, .form-group textarea { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: var(--text); outline: none; font-family: inherit; font-size: 0.88rem; }
    .required { color: var(--rose-light); }

    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .full-width { grid-column: span 2; }

    /* Task Builder inside Deal Modal */
    .tasks-builder-section { margin-top: 14px; padding-top: 14px; border-top: 1px dashed var(--border); display: flex; flex-direction: column; gap: 12px; }
    .tasks-builder-head { display: flex; justify-content: space-between; align-items: center; }
    .btn-add-task-row { background: rgba(99, 102, 241, 0.12); color: var(--violet-light); border: 1px solid rgba(99, 102, 241, 0.25); padding: 6px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-add-task-row:hover { background: var(--violet); color: #fff; }
    .tasks-list-rows { display: flex; flex-direction: column; gap: 12px; }
    .task-input-card { background: rgba(99, 102, 241, 0.04); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 8px; padding: 14px 16px; transition: all 0.2s ease; }
    .task-input-card:hover { background: rgba(99, 102, 241, 0.07); border-color: rgba(99, 102, 241, 0.35); }
    :host-context(body.light-theme) .task-input-card { background: #f8fafc !important; border-color: #cbd5e1 !important; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03) !important; }
    .task-card-inner { display: flex; flex-direction: column; gap: 12px; }
    .task-details-row { display: flex; gap: 12px; align-items: flex-end; }
    .flex-dept { flex: 2; min-width: 0; }
    .flex-price { flex: 1; min-width: 110px; }
    .flex-del { flex-shrink: 0; }
    .btn-remove-task-row { width: 44px; height: 44px; border-radius: 8px; background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.25); color: #fda4af; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; font-size: 0.9rem; }
    .btn-remove-task-row:hover { background: #f43f5e; color: #ffffff; border-color: #f43f5e; }
    :host-context(body.light-theme) .btn-remove-task-row { background: #fff1f2 !important; border-color: #fecdd3 !important; color: #e11d48 !important; }
    :host-context(body.light-theme) .btn-remove-task-row:hover { background: #e11d48 !important; color: #ffffff !important; }
    .tasks-empty-hint { font-size: 0.82rem; color: var(--text-2); background: rgba(99, 102, 241, 0.05); border: 1px dashed rgba(99, 102, 241, 0.2); padding: 12px 16px; border-radius: 8px; display: flex; align-items: center; gap: 8px; }

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
    :host-context(body.light-theme) .form-group input,
    :host-context(body.light-theme) .form-group textarea { background: #ffffff !important; border-color: #cbd5e1 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .tasks-empty-hint { color: #475569 !important; background: #f8fafc !important; }
    :host-context(body.light-theme) .btn-add-task-row { background: rgba(99, 102, 241, 0.08) !important; color: #4338ca !important; }
  `]
})
export class DealsManagementComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);

  deals: any[] = [];
  clients: any[] = [];
  departments: any[] = [];
  employees: any[] = [];
  dealAttachmentFile: File | null = null;
  briefFile: File | null = null;
  planFile: File | null = null;
  extraFiles: File[] = [];
  existingAttachments: any[] = [];

  isEmployeeRole(): boolean {
    return this.currentUser?.role === 'employee';
  }

  isPhotoEditingDept(): boolean {
    const deptId = this.dealForm?.get('department_id')?.value;
    const dept = this.departments.find(d => d.id === deptId);
    if (!dept) return false;
    const n = (dept.name || '').toLowerCase();
    return n.includes('تصوير') || n.includes('مونتاج') || n.includes('photo') || n.includes('edit');
  }

  isSocialMediaDept(): boolean {
    const deptId = this.dealForm?.get('department_id')?.value;
    const dept = this.departments.find(d => d.id === deptId);
    if (!dept) return false;
    const n = (dept.name || '').toLowerCase();
    return n.includes('سوشيال') || n.includes('social');
  }

  onDealFileSelected(event: any): void {
    const file = event.target?.files?.[0];
    if (file) {
      this.dealAttachmentFile = file;
    }
  }

  onBriefFileSelected(event: any): void {
    const file = event.target?.files?.[0];
    if (file) this.briefFile = file;
  }

  onPlanFileSelected(event: any): void {
    const file = event.target?.files?.[0];
    if (file) this.planFile = file;
  }

  onExtraFilesSelected(event: any): void {
    const files = event.target?.files;
    if (files && files.length > 0) {
      this.extraFiles = Array.from(files);
    }
  }

  getFileUrl(att: any): string {
    if (!att) return '';
    const raw = typeof att === 'string' ? att : (att.file_url || att.url || att.file_path || att.path || '');
    return this.apiService.getStorageUrl(raw);
  }

  statusList = [
    { id: '', label: 'جميع الحالات' },
    { id: 'pending', label: 'معلقة / تحت المراجعة' },
    { id: 'active', label: 'نشطة / جارية' },
    { id: 'won', label: 'مكتملة / ناجحة' },
    { id: 'closed', label: 'مغلقة' },
    { id: 'cancelled', label: 'ملغاة' }
  ];

  showAddModal = false;
  isEditMode = false;
  editingDealId: number | null = null;
  dealStatusOptions = [
    { id: 'pending', label: 'معلقة / قيد الانتظار' },
    { id: 'active', label: 'نشطة / جارية' },
    { id: 'won', label: 'مكتملة / ناجحة' },
    { id: 'closed', label: 'مغلقة' },
    { id: 'cancelled', label: 'ملغاة' }
  ];
  showPaymentModal = false;
  showAddClientModal = false;
  showQuickClientPw = false;
  showHistoryModal = false;
  dealHistory: any[] = [];
  loadingHistory = false;
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

  isSuperAdmin(): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.role === 'super_admin' || this.currentUser.role === 'Super Admin';
  }

  canEditDeal(): boolean {
    if (!this.currentUser) return false;
    return ['super_admin', 'Super Admin', 'admin', 'Admin', 'manager', 'Manager'].includes(this.currentUser.role);
  }

  canDeleteDeal(): boolean {
    // Strictly Super Admin only! System Manager (المدير) cannot delete deals
    return this.isSuperAdmin();
  }

  isManagerOrAdmin(): boolean {
    if (!this.currentUser) return false;
    return ['super_admin', 'Super Admin', 'admin', 'Admin', 'manager', 'Manager'].includes(this.currentUser.role);
  }

  canAddPayment(): boolean {
    if (!this.currentUser) return false;
    return ['super_admin', 'Super Admin', 'admin', 'Admin'].includes(this.currentUser.role);
  }

  openDealHistoryModal(deal: any): void {
    this.selectedDeal = deal;
    this.showHistoryModal = true;
    this.loadingHistory = true;
    this.dealHistory = [];

    this.apiService.getDealHistory(deal.id).subscribe({
      next: (res: any) => {
        this.loadingHistory = false;
        if (res && res.data && Array.isArray(res.data)) {
          this.dealHistory = res.data;
        } else if (Array.isArray(res)) {
          this.dealHistory = res;
        } else {
          this.dealHistory = [];
        }
      },
      error: () => {
        this.loadingHistory = false;
        this.dealHistory = [];
      }
    });
  }

  confirmDeleteDeal(deal: any): void {
    if (!this.canDeleteDeal()) {
      this.toastService.error('حذف الصفقات مقتصر حصرياً على السوبر أدمن (Super Admin) ولا يحق لمدير النظام حذف الصفقات.', 'صلاحية غير كافية');
      return;
    }
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
    const formVal = this.dealForm.value;

    const hasTaskFiles = validTasks.some(t => t.file);
    const hasDealFiles = Boolean(this.dealAttachmentFile || this.briefFile || this.planFile || (this.extraFiles && this.extraFiles.length > 0));
    const useFormData = Boolean(hasDealFiles || hasTaskFiles || this.isEditMode);

    const sanitizedTasks = validTasks.map(t => ({
      id: t.id || null,
      title: t.title,
      description: t.description || t.scope || '',
      scope: t.description || t.scope || '',
      department_id: t.department_id || null,
      client_price: t.client_price || 0,
      employee_price: t.employee_price || 0,
      due_date: t.due_date || null
    }));

    let requestObs;
    if (useFormData) {
      const formData = new FormData();
      Object.keys(formVal).forEach(k => {
        if (formVal[k] !== null && formVal[k] !== undefined) {
          if (k === 'dates_not_specified') {
            formData.append(k, formVal[k] ? '1' : '0');
          } else {
            formData.append(k, formVal[k]);
          }
        }
      });
      if (this.briefFile) {
        formData.append('brief_file', this.briefFile);
      }
      if (this.planFile) {
        formData.append('plan_file', this.planFile);
      }
      if (this.extraFiles && this.extraFiles.length > 0) {
        this.extraFiles.forEach(f => formData.append('documents[]', f));
      }
      if (this.dealAttachmentFile) {
        formData.append('attachment', this.dealAttachmentFile);
      }
      formData.append('tasks', JSON.stringify(sanitizedTasks));
      validTasks.forEach((t, idx) => {
        if (t.file) {
          formData.append(`task_file_${idx}`, t.file);
        }
      });

      if (this.isEditMode && this.editingDealId) {
        requestObs = this.apiService.updateDeal(this.editingDealId, formData);
      } else {
        requestObs = this.apiService.createDeal(formData);
      }
    } else {
      const payload = {
        ...formVal,
        tasks: sanitizedTasks
      };
      if (this.isEditMode && this.editingDealId) {
        requestObs = this.apiService.updateDeal(this.editingDealId, payload);
      } else {
        requestObs = this.apiService.createDeal(payload);
      }
    }

    requestObs.subscribe({
      next: () => {
        this.loading = false;
        const msg = this.isEditMode ? 'تم تعديل بيانات ومخرجات الصفقة بنجاح' : 'تم إنشاء الصفقة والعقد بنجاح';
        this.toastService.success(msg, 'تمت العملية');
        this.closeAddModal();
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || 'تعذر حفظ بيانات الصفقة');
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
    this.route.queryParams.subscribe(params => {
      if (params['edit']) {
        this.openEditDealModal({ id: params['edit'] });
      }
    });
  }

  loadDropdownOptions(): void {
    this.apiService.getUsers('client').subscribe(res => {
      const arr = Array.isArray(res) ? res : (res?.data || []);
      this.clients = arr.filter((c: any) => !c.is_hold);
    });
    this.apiService.getDepartments().subscribe(res => {
      this.departments = Array.isArray(res) ? res : (res?.data || []);
    });
    this.apiService.getUsers().subscribe(res => {
      const arr = Array.isArray(res) ? res : (res?.data || []);
      this.employees = arr.filter((u: any) => u.role !== 'client' && u.role !== 'Client' && !u.is_hold);
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
      status: ['pending'],
      client_id: [null],
      department_id: [null],
      sales_person_id: [null],
      sales_commission_type: ['none'],
      sales_commission_value: [0],
      total_price: [0, [Validators.required, Validators.min(0)]],
      paid_amount: [0, [Validators.min(0)]],
      payment_method: ['cash'],
      discount_type: ['none'],
      discount_value: [0],
      agreed_scope: [''],
      shooting_date: [''],
      delivery_date: [''],
      dates_not_specified: [false],
      start_date: [''],
      end_date: [''],
      due_date: [''],
      reference_link: ['']
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

  getCalculatedDiscountAmount(): number {
    const total = Number(this.dealForm.get('total_price')?.value) || 0;
    const type = this.dealForm.get('discount_type')?.value;
    const val = Number(this.dealForm.get('discount_value')?.value) || 0;
    if (type === 'percentage') {
      return (total * val) / 100;
    } else if (type === 'fixed') {
      return Math.min(val, total);
    }
    return 0;
  }

  getCalculatedNetTotal(): number {
    const total = Number(this.dealForm.get('total_price')?.value) || 0;
    const discount = this.getCalculatedDiscountAmount();
    return Math.max(0, total - discount);
  }

  getCalculatedRemainingBalance(): number {
    const net = this.getCalculatedNetTotal();
    const paid = Number(this.dealForm.get('paid_amount')?.value) || 0;
    return Math.max(0, net - paid);
  }

  onTaskFileSelected(event: any, index: number, type: 'image' | 'doc'): void {
    const file = event.target?.files?.[0];
    if (file && this.dealTasks[index]) {
      this.dealTasks[index].file = file;
      this.dealTasks[index].fileName = file.name;
      this.dealTasks[index].fileType = type;
    }
  }

  removeTaskFile(index: number): void {
    if (this.dealTasks[index]) {
      this.dealTasks[index].file = null;
      this.dealTasks[index].fileName = null;
      this.dealTasks[index].fileType = null;
    }
  }

  openEditDealModal(deal: any): void {
    this.isEditMode = true;
    this.editingDealId = deal.id;
    this.loading = true;
    this.apiService.getDeal(deal.id).subscribe({
      next: (fullDeal: any) => {
        this.loading = false;
        const d = fullDeal?.data || fullDeal || deal;
        this.dealForm.patchValue({
          title: d.title || '',
          status: d.status || 'pending',
          client_id: d.client_id || null,
          department_id: d.department_id || null,
          sales_person_id: d.sales_person_id || null,
          sales_commission_type: d.sales_commission_type || 'none',
          sales_commission_value: d.sales_commission_value || 0,
          total_price: d.gross_total || d.total_price || 0,
          paid_amount: d.calculated_paid || d.paid_amount || 0,
          payment_method: 'cash',
          discount_type: d.discount_type || 'none',
          discount_value: d.discount_value || 0,
          agreed_scope: d.agreed_scope || d.description || '',
          shooting_date: d.shooting_date || '',
          delivery_date: d.delivery_date || '',
          dates_not_specified: Boolean(d.dates_not_specified),
          start_date: d.start_date || '',
          end_date: d.end_date || '',
          due_date: d.due_date || '',
          reference_link: d.reference_link || d.deal_link || ''
        });

        this.dealTasks = (d.tasks || []).map((t: any) => ({
          id: t.id,
          title: t.title || '',
          description: t.description || t.scope || '',
          scope: t.scope || t.description || '',
          department_id: t.department_id || null,
          client_price: t.client_price || 0,
          employee_price: t.employee_price || 0,
          due_date: t.due_date || '',
          file: null,
          fileName: (t.attachments && t.attachments.length > 0) ? t.attachments[0].file_name : null,
          fileType: (t.attachments && t.attachments.length > 0 && String(t.attachments[0].file_type).includes('image')) ? 'image' : 'doc'
        }));

        this.dealAttachmentFile = null;
        this.briefFile = null;
        this.planFile = null;
        this.extraFiles = [];
        this.existingAttachments = d.attachments || [];
        this.showAddModal = true;
      },
      error: () => {
        this.loading = false;
        this.toastService.error('تعذر جلب تفاصيل الصفقة للتعديل');
      }
    });
  }

  addTaskRow(): void {
    this.dealTasks.push({
      id: null,
      title: '',
      description: '',
      department_id: this.dealForm?.value?.department_id || null,
      client_price: 0,
      employee_price: 0,
      file: null,
      fileName: null,
      fileType: null
    });
  }

  onTaskPriceChange(): void {
    const sum = this.dealTasks.reduce((acc, t) => acc + (Number(t.client_price) || 0), 0);
    if (sum > 0) {
      this.dealForm.patchValue({ total_price: sum });
    }
  }

  removeTaskRow(idx: number): void {
    this.dealTasks.splice(idx, 1);
    this.onTaskPriceChange();
  }

  openAddDealModal(): void {
    this.isEditMode = false;
    this.editingDealId = null;
    this.dealForm.reset({
      title: '',
      status: 'pending',
      client_id: null,
      department_id: null,
      sales_person_id: null,
      sales_commission_type: 'none',
      sales_commission_value: 0,
      total_price: 0,
      paid_amount: 0,
      payment_method: 'cash',
      discount_type: 'none',
      discount_value: 0,
      dates_not_specified: false
    });
    this.dealTasks = [];
    this.dealAttachmentFile = null;
    this.briefFile = null;
    this.planFile = null;
    this.extraFiles = [];
    this.existingAttachments = [];
    this.showAddModal = true;
  }

  openAddModal(): void {
    this.openAddDealModal();
  }

  closeAddModal(): void {
    this.showAddModal = false;
    this.isEditMode = false;
    this.editingDealId = null;
    this.dealForm.reset({
      title: '',
      status: 'pending',
      client_id: null,
      department_id: null,
      sales_person_id: null,
      sales_commission_type: 'none',
      sales_commission_value: 0,
      total_price: 0,
      paid_amount: 0,
      payment_method: 'cash',
      discount_type: 'none',
      discount_value: 0,
      dates_not_specified: false,
      start_date: '',
      end_date: '',
      due_date: '',
      shooting_date: '',
      delivery_date: '',
      description: '',
      agreed_scope: '',
      reference_link: ''
    });
    this.dealTasks = [];
    this.dealAttachmentFile = null;
    this.briefFile = null;
    this.planFile = null;
    this.extraFiles = [];
    this.existingAttachments = [];
  }

  triggerQuickAddClient(): void {
    this.quickClientForm.reset({ password: 'password123', client_category: 'normal' });
    this.showQuickClientPw = false;
    this.showAddClientModal = true;
  }

  closeQuickClientModal(): void {
    this.showAddClientModal = false;
    this.quickClientForm.reset({
      name: '',
      email: '',
      phone: '',
      password: 'password123',
      client_category: 'normal'
    });
    this.showQuickClientPw = false;
  }

  openPaymentModal(deal: any): void {
    this.selectedDeal = deal;
    this.paymentForm.reset({
      amount: deal.remaining_balance,
      payment_date: new Date().toISOString().split('T')[0],
      payment_method: 'cash',
      receipt_ref: '',
      notes: ''
    });
    this.showPaymentModal = true;
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    this.selectedDeal = null;
    this.paymentForm.reset({
      amount: 0,
      payment_date: new Date().toISOString().split('T')[0],
      payment_method: 'cash',
      receipt_ref: '',
      notes: ''
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
}
