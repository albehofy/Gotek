import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { PrimePickerSelectComponent } from '../shared/prime-picker-select/prime-picker-select.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-departments-sections',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimePickerSelectComponent,
    DialogModule,
    InputTextModule,
    TextareaModule
  ],
  template: `
    <div class="crm-module-container">
      <!-- Module Header -->
      <div class="module-header">
        <div class="header-title-wrapper">
          <div class="header-icon-box">
            <i class="fa-solid fa-sitemap"></i>
          </div>
          <div>
            <h2>الأقسام والمراكز التشغيلية</h2>
            <p class="subtitle">إدارة الأقسام الديناميكية، التصنيفات الفرعية، وتوزيع الكوادر والمدراء</p>
          </div>
        </div>
        <div class="header-actions">
          <button class="btn-glass-purple" *ngIf="isManagerOrAdmin()" (click)="openAddEmployeeModal()">
            <i class="fa-solid fa-user-plus"></i> إضافة موظف جديد
          </button>
          <button class="btn-primary-gradient" *ngIf="isManagerOrAdmin()" (click)="openAddModal()">
            <i class="fa-solid fa-plus"></i> إضافة قسم جديد
          </button>
        </div>
      </div>

      <!-- Departments Cards Grid -->
      <div class="depts-grid">
        <div class="dept-card" *ngFor="let dept of departments; let i = index">
          <!-- Card Top Accent Bar -->
          <div class="card-accent-bar" [ngClass]="'accent-' + (i % 4)"></div>

          <div class="card-body">
            <!-- Header Row -->
            <div class="dept-header-row">
              <div class="dept-title-box">
                <div class="dept-icon-badge">
                  <i class="fa-solid" [ngClass]="getDepartmentIcon(dept.name)"></i>
                </div>
                <h3>{{ dept.name }}</h3>
              </div>
              <span class="partner-pill" *ngIf="dept.has_partner">
                <i class="fa-solid fa-handshake"></i> {{ dept.partner_percentage }}% شركة / {{ 100 - dept.partner_percentage }}% شريك
              </span>
            </div>

            <!-- Description -->
            <p class="dept-desc">{{ dept.description || 'قسم تشغيلي متكامل يدير العمليات والمشاريع التابعة.' }}</p>

            <!-- Manager Section Widget -->
            <div class="manager-widget" [class.assigned]="dept.manager">
              <div class="mgr-avatar">
                <i class="fa-solid" [ngClass]="dept.manager ? 'fa-user-shield' : 'fa-user-clock'"></i>
              </div>
              <div class="mgr-details">
                <span class="mgr-label">مدير القسم / المسؤول:</span>
                <span class="mgr-name" *ngIf="dept.manager">{{ dept.manager.name }}</span>
                <span class="mgr-empty" *ngIf="!dept.manager" (click)="openEditModal(dept)">غير محدد (انقر لتعيين مدير)</span>
              </div>
              <button class="btn-mgr-edit" *ngIf="isManagerOrAdmin()" (click)="openEditModal(dept)" title="تغيير مدير القسم">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>

            <!-- Employees Box -->
            <div class="section-box employees-box">
              <div class="section-box-header">
                <span class="section-title">
                  <i class="fa-solid fa-users"></i> الموظفون بالقسم ({{ dept.employees?.length || 0 }})
                </span>
                <button class="btn-box-action" *ngIf="isManagerOrAdmin()" (click)="openAddEmployeeModal(dept.id)">
                  <i class="fa-solid fa-plus"></i> موظف
                </button>
              </div>

              <div class="chips-flex">
                <div class="emp-chip" *ngFor="let emp of dept.employees">
                  <span class="emp-initial">{{ emp.name ? emp.name.charAt(0) : 'M' }}</span>
                  <span class="emp-name">{{ emp.name }}</span>
                </div>
                <div class="empty-chips-note" *ngIf="!dept.employees || dept.employees.length === 0">
                  لا يوجد موظفون مضافون بهذا القسم بعد
                </div>
              </div>
            </div>

            <!-- Subcategories Box -->
            <div class="section-box subcategories-box">
              <div class="section-box-header">
                <span class="section-title">
                  <i class="fa-solid fa-layer-group"></i> التصنيفات الفرعية ({{ dept.sub_categories?.length || 0 }})
                </span>
                <button class="btn-box-action" *ngIf="isManagerOrAdmin()" (click)="openSubCategoryModal(dept)">
                  <i class="fa-solid fa-plus"></i> تصنيف
                </button>
              </div>

              <div class="chips-flex">
                <span class="sub-chip" *ngFor="let sub of dept.sub_categories">
                  <i class="fa-solid fa-tag"></i> {{ sub.name_ar || sub.name_en }}
                </span>
                <div class="empty-chips-note" *ngIf="!dept.sub_categories || dept.sub_categories.length === 0">
                  لا توجد تصنيفات فرعية مضافة بعد
                </div>
              </div>
            </div>

            <!-- Card Actions Row -->
            <div class="card-footer-actions" *ngIf="isManagerOrAdmin()">
              <button class="btn-action edit" (click)="openEditModal(dept)">
                <i class="fa-solid fa-pen-to-square"></i> تعديل القسم
              </button>
              <button class="btn-action delete" (click)="confirmDeleteDepartment(dept)" title="حذف القسم">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add / Edit Department -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="editingDeptId ? 'تعديل بيانات القسم' : 'إنشاء قسم جديد'" [style]="{ width: '92vw', maxWidth: '540px' }">
        <form [formGroup]="deptForm" (ngSubmit)="saveDepartment()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>اسم القسم <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="مثال: قسم إنتاج الفيديو والصوت" />
            </div>
            <div class="form-group">
              <label>مسؤول القسم / المدير</label>
              <app-prime-picker-select
                formControlName="manager_id"
                [items]="employees"
                optionLabel="name"
                optionValue="id"
                placeholder="اختر مسؤول القسم..."
                addNewLabel="+ إضافة موظف جديد لتعيينه كمدير"
                (addNew)="openAddEmployeeModal()"
              ></app-prime-picker-select>
              <small style="color:var(--text-2); font-size:0.72rem; margin-top:2px;">اختيار مدير القسم يمنحه صلاحية متابعة جميع صفقات ومهام هذا القسم تلقائياً.</small>
            </div>

            <!-- Partnerships on Sections -->
            <div class="form-group checkbox-group">
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.86rem; color:var(--text);">
                <input type="checkbox" formControlName="has_partner" (change)="togglePartnerFields()" />
                شريك خارجي (شراكة قسم / مشروع مشترك)
              </label>
            </div>
            <div *ngIf="deptForm.value.has_partner" class="partner-fields-box" style="background:rgba(217,119,6,0.06); padding:14px; border-radius:12px; border:1px dashed rgba(217,119,6,0.3); display:flex; flex-direction:column; gap:12px;">
              <div class="form-group">
                <label>اسم الشريك الخارجي</label>
                <input type="text" pInputText formControlName="partner_name" placeholder="مثال: شركة بروتيك للإنتاج" />
              </div>
              <div class="form-group">
                <label>نسبة أرباح الشركة (%)</label>
                <input type="number" pInputText formControlName="partner_percentage" placeholder="50" />
                <small style="color:var(--text-2);">تُقسم أرباح هذا القسم بناءً على هذه النسبة.</small>
              </div>
            </div>
            <div class="form-group">
              <label>الوصف والمهام</label>
              <textarea pTextarea formControlName="description" rows="3" placeholder="وصف مهام وتخصص هذا القسم..."></textarea>
            </div>
          </div>

          <!-- Dialog Footer Actions -->
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showAddModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="deptForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : (editingDeptId ? 'حفظ التعديلات' : 'حفظ القسم') }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Add Employee -->
      <p-dialog [(visible)]="showEmployeeModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="إضافة موظف جديد وتعيين قسمه" [style]="{ width: '92vw', maxWidth: '560px' }">
        <form [formGroup]="empForm" (ngSubmit)="saveEmployee()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>اسم الموظف الكامل <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="مثال: أحمد مصطفى" />
            </div>
            <div class="form-group">
              <label>البريد الإلكتروني <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="example@mediaglow.com" />
            </div>
            <div class="form-group">
              <label>كلمة المرور <span class="required">*</span></label>
              <input type="password" pInputText formControlName="password" placeholder="••••••••" />
            </div>
            <div class="form-group">
              <label>الدور والصلاحيات <span class="required">*</span></label>
              <select formControlName="role" class="custom-select-input">
                <option value="employee">موظف (Employee)</option>
                <option value="department_manager">مدير قسم (Department Manager)</option>
                <option value="admin">مدير نظام (Admin)</option>
              </select>
            </div>
            <div class="form-group">
              <label>القسم المسند إليه الموظف</label>
              <app-prime-picker-select
                formControlName="department_id"
                [items]="departments"
                optionLabel="name"
                optionValue="id"
                placeholder="اختر القسم..."
              ></app-prime-picker-select>
            </div>

            <div class="form-grid-2col">
              <div class="form-group">
                <label>نظام الراتب/الاستحقاق</label>
                <select formControlName="payment_type" class="custom-select-input">
                  <option value="salary_based">راتب ثابت</option>
                  <option value="task_based">بالمهام / القطعة</option>
                  <option value="percentage_based">نسبة مئوية</option>
                  <option value="hybrid">هجين (راتب + عمولة)</option>
                </select>
              </div>
              <div class="form-group">
                <label>الراتب الأساسي ($)</label>
                <input type="number" pInputText formControlName="base_salary" placeholder="0" />
              </div>
            </div>
          </div>

          <!-- Dialog Footer Actions -->
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showEmployeeModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="empForm.invalid || loading">
              {{ loading ? 'جاري الإضافة...' : 'إضافة الموظف' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Add Sub-category -->
      <p-dialog [(visible)]="showSubModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'إضافة تصنيف فرعي إلى: ' + (selectedDept?.name || '')" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="subForm" (ngSubmit)="saveSubCategory()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>اسم التصنيف الفرعي (بالعربي) <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name_ar" placeholder="مثال: فيديو ريلز / Reels" />
            </div>
            <div class="form-group">
              <label>اسم التصنيف الفرعي (بالإنجليزي)</label>
              <input type="text" pInputText formControlName="name_en" placeholder="Reels Video" />
            </div>
          </div>

          <!-- Dialog Footer Actions -->
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showSubModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="subForm.invalid || loading">
              {{ loading ? 'جاري الإضافة...' : 'حفظ وإضافة التصنيف' }}
            </button>
          </div>
        </form>
      </p-dialog>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }
    .crm-module-container { padding: 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }

    /* Header */
    .module-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px; gap: 16px; flex-wrap: wrap; }
    .header-title-wrapper { display: flex; align-items: center; gap: 14px; }
    .header-icon-box { width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3); flex-shrink: 0; }
    .module-header h2 { font-size: 1.45rem; font-weight: 800; color: var(--text); margin: 0; letter-spacing: -0.3px; }
    .subtitle { color: var(--text-2); font-size: 0.86rem; margin-top: 3px; }
    .header-actions { display: flex; gap: 10px; flex-wrap: wrap; }

    .btn-glass-purple { background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25); color: var(--text); padding: 10px 18px; border-radius: 12px; font-weight: 700; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: all 0.25s ease; font-family: inherit; }
    .btn-glass-purple:hover { background: rgba(99, 102, 241, 0.2); border-color: rgba(99, 102, 241, 0.4); transform: translateY(-1px); }

    .btn-primary-gradient { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); border: none; color: #ffffff; padding: 10px 20px; border-radius: 12px; font-weight: 700; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35); transition: all 0.25s ease; font-family: inherit; }
    .btn-primary-gradient:hover { box-shadow: 0 8px 24px rgba(99, 102, 241, 0.5); transform: translateY(-2px); }

    /* Grid */
    .depts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; }

    /* Card */
    .dept-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 18px; position: relative; overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    .dept-card:hover { border-color: var(--border-v); box-shadow: var(--shadow-lg); transform: translateY(-3px); }

    .card-accent-bar { height: 4px; width: 100%; }
    .accent-0 { background: linear-gradient(90deg, #6366f1, #8b5cf6); }
    .accent-1 { background: linear-gradient(90deg, #06b6d4, #3b82f6); }
    .accent-2 { background: linear-gradient(90deg, #ec4899, #f43f5e); }
    .accent-3 { background: linear-gradient(90deg, #10b981, #06b6d4); }

    .card-body { padding: 22px; display: flex; flex-direction: column; gap: 16px; flex: 1; }

    /* Header Row */
    .dept-header-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap; }
    .dept-title-box { display: flex; align-items: center; gap: 10px; }
    .dept-icon-badge { width: 36px; height: 36px; border-radius: 10px; background: rgba(99, 102, 241, 0.1); color: var(--violet-light); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
    .dept-header-row h3 { color: var(--text); font-size: 1.15rem; font-weight: 800; margin: 0; line-height: 1.3; }
    .partner-pill { font-size: 0.7rem; background: rgba(245, 158, 11, 0.12); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); padding: 4px 10px; border-radius: 100px; font-weight: 700; white-space: nowrap; }

    .dept-desc { color: var(--text-2); font-size: 0.85rem; line-height: 1.55; margin: 0; }

    /* Manager Widget */
    .manager-widget { background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); padding: 10px 14px; border-radius: 12px; display: flex; align-items: center; gap: 12px; transition: background 0.2s; }
    .manager-widget.assigned { background: rgba(99, 102, 241, 0.05); border-color: rgba(99, 102, 241, 0.18); }

    .mgr-avatar { width: 34px; height: 34px; border-radius: 10px; background: rgba(99, 102, 241, 0.12); color: var(--violet-light); display: flex; align-items: center; justify-content: center; font-size: 0.95rem; flex-shrink: 0; }
    .mgr-details { display: flex; flex-direction: column; flex: 1; }
    .mgr-label { font-size: 0.7rem; color: var(--text-3); font-weight: 600; }
    .mgr-name { font-size: 0.88rem; font-weight: 800; color: var(--text); }
    .mgr-empty { font-size: 0.8rem; color: var(--text-3); font-style: italic; cursor: pointer; }
    .mgr-empty:hover { color: var(--violet-light); text-decoration: underline; }

    .btn-mgr-edit { background: transparent; border: none; color: var(--text-3); cursor: pointer; padding: 6px; border-radius: 6px; transition: all 0.2s; }
    .btn-mgr-edit:hover { color: var(--violet-light); background: rgba(99, 102, 241, 0.1); }

    /* Section Box */
    .section-box { background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border); border-radius: 12px; padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; }
    .section-box-header { display: flex; justify-content: space-between; align-items: center; }
    .section-title { font-size: 0.78rem; font-weight: 700; color: var(--text); display: flex; align-items: center; gap: 6px; }

    .btn-box-action { background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.2); color: var(--violet-light); padding: 3px 10px; border-radius: 8px; font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: inherit; }
    .btn-box-action:hover { background: rgba(99, 102, 241, 0.2); color: #ffffff; }

    .chips-flex { display: flex; gap: 6px; flex-wrap: wrap; }
    .emp-chip { background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.2); padding: 4px 10px; border-radius: 100px; display: flex; align-items: center; gap: 6px; }
    .emp-initial { width: 18px; height: 18px; border-radius: 50%; background: var(--violet); color: #ffffff; font-size: 0.65rem; font-weight: 800; display: flex; align-items: center; justify-content: center; }
    .emp-name { font-size: 0.76rem; font-weight: 600; color: var(--text); }

    .sub-chip { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 100px; font-size: 0.74rem; color: var(--text-2); font-weight: 600; display: inline-flex; align-items: center; gap: 5px; }
    .empty-chips-note { color: var(--text-3); font-size: 0.76rem; font-style: italic; }

    /* Footer Actions */
    .card-footer-actions { display: flex; gap: 10px; margin-top: 4px; padding-top: 14px; border-top: 1px solid var(--border); }
    .btn-action { padding: 9px 14px; border-radius: 10px; font-size: 0.82rem; font-weight: 700; cursor: pointer; border: 1px solid transparent; display: inline-flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s; font-family: inherit; }
    .btn-action.edit { flex: 1; background: rgba(99, 102, 241, 0.1); color: var(--violet-light); border-color: rgba(99, 102, 241, 0.25); }
    .btn-action.edit:hover { background: var(--violet); color: #ffffff; border-color: var(--violet); }
    .btn-action.delete { background: rgba(244, 63, 94, 0.1); color: #fda4af; border-color: rgba(244, 63, 94, 0.25); padding: 9px 12px; }
    .btn-action.delete:hover { background: var(--rose); color: #ffffff; border-color: var(--rose); }

    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input, .form-group textarea, .custom-select-input { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: #fff; outline: none; font-family: inherit; font-size: 0.88rem; transition: all 0.2s; }
    .custom-select-input option { background: #121224; color: #fff; }
    .required { color: var(--rose-light); }

    .form-grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

    /* Dialog Footer Actions */
    .dialog-footer-actions { display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border); }
    .btn-dialog-cancel { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: var(--text-2); padding: 9px 18px; border-radius: 10px; font-weight: 700; font-size: 0.86rem; cursor: pointer; transition: all 0.2s; font-family: inherit; }
    .btn-dialog-cancel:hover { background: rgba(255, 255, 255, 0.1); color: var(--text); }
    .btn-dialog-submit { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); border: none; color: #ffffff; padding: 9px 22px; border-radius: 10px; font-weight: 700; font-size: 0.86rem; cursor: pointer; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35); transition: all 0.2s; font-family: inherit; }
    .btn-dialog-submit:hover:not(:disabled) { box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5); transform: translateY(-1px); }
    .btn-dialog-submit:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

    /* ═══════════════════════════════════════════════════════════════════
       RESPONSIVE BREAKPOINTS (Mobile, Tablet, Desktop)
       ═══════════════════════════════════════════════════════════════════ */
    @media (max-width: 768px) {
      .crm-module-container { padding: 18px 14px !important; }
      .module-header { flex-direction: column; align-items: stretch; gap: 14px; margin-bottom: 20px; }
      .header-actions { width: 100%; display: flex; flex-direction: column; gap: 8px; }
      .btn-glass-purple, .btn-primary-gradient { width: 100%; justify-content: center; padding: 12px 16px; }
      .depts-grid { grid-template-columns: 1fr; gap: 16px; }
      .card-body { padding: 16px; gap: 14px; }
      .dept-header-row { flex-direction: column; align-items: flex-start; gap: 8px; }
      .partner-pill { align-self: flex-start; }
      .form-grid-2col { grid-template-columns: 1fr !important; }
    }

    @media (max-width: 480px) {
      .header-icon-box { width: 40px; height: 40px; font-size: 1.1rem; }
      .module-header h2 { font-size: 1.2rem; }
      .subtitle { font-size: 0.78rem; }
      .card-footer-actions { flex-direction: column; }
      .btn-action.delete { width: 100%; }
      .dialog-footer-actions { flex-direction: column-reverse; gap: 8px; }
      .btn-dialog-cancel, .btn-dialog-submit { width: 100%; text-align: center; }
    }

    /* ═══════════════════════════════════════════════════════════════════
       LIGHT THEME OVERRIDES (Pristine, High Contrast, Modern)
       ═══════════════════════════════════════════════════════════════════ */
    :host-context(body.light-theme) .crm-module-container { background: #f8fafc !important; }
    :host-context(body.light-theme) .header-icon-box { background: linear-gradient(135deg, #4f46e5, #7c3aed) !important; color: #ffffff !important; }
    :host-context(body.light-theme) .btn-glass-purple { background: #ffffff !important; border-color: #cbd5e1 !important; color: #1e293b !important; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05); }
    :host-context(body.light-theme) .btn-glass-purple:hover { background: #f1f5f9 !important; border-color: #6366f1 !important; color: #4f46e5 !important; }

    :host-context(body.light-theme) .dept-card { background: #ffffff !important; border-color: #e2e8f0 !important; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important; }
    :host-context(body.light-theme) .dept-card:hover { border-color: #a5b4fc !important; box-shadow: 0 12px 32px rgba(99, 102, 241, 0.12) !important; }
    :host-context(body.light-theme) .dept-icon-badge { background: #eef2ff !important; color: #4f46e5 !important; }
    :host-context(body.light-theme) .partner-pill { background: #fffbeb !important; color: #b45309 !important; border-color: #fde68a !important; }

    :host-context(body.light-theme) .manager-widget { background: #f8fafc !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .manager-widget.assigned { background: #eef2ff !important; border-color: #c7d2fe !important; }
    :host-context(body.light-theme) .mgr-avatar { background: #e0e7ff !important; color: #4338ca !important; }
    :host-context(body.light-theme) .mgr-label { color: #64748b !important; }
    :host-context(body.light-theme) .mgr-name { color: #0f172a !important; }
    :host-context(body.light-theme) .mgr-empty { color: #64748b !important; }

    :host-context(body.light-theme) .section-box { background: #f8fafc !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .section-title { color: #1e293b !important; }
    :host-context(body.light-theme) .btn-box-action { background: #ffffff !important; border-color: #c7d2fe !important; color: #4f46e5 !important; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); }
    :host-context(body.light-theme) .btn-box-action:hover { background: #4f46e5 !important; color: #ffffff !important; }

    :host-context(body.light-theme) .emp-chip { background: #ffffff !important; border-color: #cbd5e1 !important; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04); }
    :host-context(body.light-theme) .emp-name { color: #1e293b !important; }
    :host-context(body.light-theme) .sub-chip { background: #ffffff !important; border-color: #cbd5e1 !important; color: #334155 !important; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04); }
    :host-context(body.light-theme) .empty-chips-note { color: #64748b !important; }

    :host-context(body.light-theme) .btn-action.edit { background: #eef2ff !important; color: #4338ca !important; border-color: #c7d2fe !important; }
    :host-context(body.light-theme) .btn-action.edit:hover { background: #4f46e5 !important; color: #ffffff !important; }

    :host-context(body.light-theme) .btn-action.delete { background: #fff1f2 !important; color: #e11d48 !important; border-color: #fecdd3 !important; }
    :host-context(body.light-theme) .btn-action.delete:hover { background: #e11d48 !important; color: #ffffff !important; }

    :host-context(body.light-theme) .dialog-footer-actions { border-top-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .btn-dialog-cancel { background: #f1f5f9 !important; border-color: #cbd5e1 !important; color: #334155 !important; }
    :host-context(body.light-theme) .btn-dialog-cancel:hover { background: #e2e8f0 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .btn-dialog-submit { background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%) !important; color: #ffffff !important; }
  `]
})
export class DepartmentsSectionsComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  departments: any[] = [];
  employees: any[] = [];

  showAddModal = false;
  showSubModal = false;
  showEmployeeModal = false;
  editingDeptId: number | null = null;
  selectedDept: any = null;
  loading = false;

  deptForm!: FormGroup;
  subForm!: FormGroup;
  empForm!: FormGroup;

  currentUser: any = null;

  ngOnInit(): void {
    try {
      const uStr = localStorage.getItem('mediaglow_user');
      if (uStr) this.currentUser = JSON.parse(uStr);
    } catch(e){}
    this.initForms();
    this.loadData();
  }

  isEmployee(): boolean { return this.currentUser?.role === 'employee'; }
  isDepartmentManager(): boolean { return this.currentUser?.role === 'department_manager'; }
  isManagerOrAdmin(): boolean {
    if (!this.currentUser) return true;
    return ['super_admin', 'admin', 'department_manager'].includes(this.currentUser.role);
  }

  getDepartmentIcon(name: string): string {
    if (!name) return 'fa-folder';
    const n = name.toLowerCase();
    if (n.includes('video') || n.includes('photo') || n.includes('تصوير') || n.includes('فيديو')) return 'fa-camera-retro';
    if (n.includes('design') || n.includes('graphic') || n.includes('تصميم')) return 'fa-palette';
    if (n.includes('dev') || n.includes('code') || n.includes('برمجة') || n.includes('تطوير')) return 'fa-code';
    if (n.includes('market') || n.includes('تسويق') || n.includes('سوشيال')) return 'fa-bullhorn';
    if (n.includes('finance') || n.includes('مالية') || n.includes('حسابات')) return 'fa-coins';
    return 'fa-sitemap';
  }

  initForms(): void {
    this.deptForm = this.fb.group({
      name: ['', Validators.required],
      manager_id: [null],
      has_partner: [false],
      partner_name: [''],
      partner_percentage: [50],
      description: ['']
    });

    this.subForm = this.fb.group({
      name_ar: ['', Validators.required],
      name_en: ['']
    });

    this.empForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(6)]],
      role: ['employee', Validators.required],
      department_id: [null],
      payment_type: ['salary_based'],
      base_salary: [0],
      commission_rate: [0]
    });
  }

  loadData(): void {
    this.apiService.getDepartments().subscribe(res => this.departments = res || []);
    this.apiService.getUsers().subscribe(res => this.employees = res.data || []);
  }

  togglePartnerFields(): void {
    if (!this.deptForm.value.has_partner) {
      this.deptForm.patchValue({ partner_name: '', partner_percentage: 50 });
    }
  }

  openAddModal(): void {
    this.editingDeptId = null;
    this.deptForm.reset({ has_partner: false, partner_percentage: 50 });
    this.showAddModal = true;
  }

  openEditModal(dept: any): void {
    this.editingDeptId = dept.id;
    this.deptForm.patchValue({
      name: dept.name,
      manager_id: dept.manager_id || null,
      has_partner: !!dept.has_partner,
      partner_name: dept.partner_name || '',
      partner_percentage: dept.partner_percentage || 50,
      description: dept.description || ''
    });
    this.showAddModal = true;
  }

  confirmDeleteDepartment(dept: any): void {
    if (confirm(`هل أنت تأكد من رغبتك في حذف القسم "${dept.name}"؟`)) {
      this.apiService.deleteDepartment(dept.id).subscribe({
        next: () => {
          this.loadData();
        },
        error: (err) => {
          alert('حدث خطأ أثناء حذف القسم.');
        }
      });
    }
  }

  saveDepartment(): void {
    if (this.deptForm.invalid) return;
    this.loading = true;

    if (this.editingDeptId) {
      this.apiService.updateDepartment(this.editingDeptId, this.deptForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.showAddModal = false;
          this.editingDeptId = null;
          this.loadData();
        },
        error: () => this.loading = false
      });
    } else {
      this.apiService.createDepartment(this.deptForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.showAddModal = false;
          this.loadData();
        },
        error: () => this.loading = false
      });
    }
  }

  openAddEmployeeModal(deptId?: number): void {
    this.empForm.reset({
      role: 'employee',
      department_id: deptId || null,
      payment_type: 'salary_based',
      base_salary: 0,
      commission_rate: 0,
      password: 'password123'
    });
    this.showEmployeeModal = true;
  }

  saveEmployee(): void {
    if (this.empForm.invalid) return;
    this.loading = true;

    this.apiService.createUser(this.empForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showEmployeeModal = false;
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        alert(err.error?.message || 'حدث خطأ أثناء إضافة الموظف. يرجى التأكد من أن البريد الإلكتروني غير مكرر.');
      }
    });
  }

  openSubCategoryModal(dept: any): void {
    this.selectedDept = dept;
    this.subForm.reset();
    this.showSubModal = true;
  }

  saveSubCategory(): void {
    if (this.subForm.invalid || !this.selectedDept) return;
    this.loading = true;

    this.apiService.addSubCategory(this.selectedDept.id, this.subForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showSubModal = false;
        this.loadData();
      },
      error: () => this.loading = false
    });
  }
}
