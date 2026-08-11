import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { PrimePickerSelectComponent } from '../shared/prime-picker-select/prime-picker-select.component';

@Component({
  selector: 'app-departments-sections',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimePickerSelectComponent],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-sitemap text-orange"></i> إدارة الأقسام والمراكز (Departments & Partner Splits)</h2>
          <p class="subtitle">إنشاء الأقسام ديناميكياً، إضافة الفئات الفرعية، وتحديد نسب شراكة الأقسام الخارجية</p>
        </div>
        <button class="btn btn-primary" (click)="openAddModal()">
          <i class="fa-solid fa-plus"></i> إضافة قسم / مركز جديد
        </button>
      </div>

      <!-- Departments Cards Grid -->
      <div class="depts-grid">
        <div class="dept-card glass-panel" *ngFor="let dept of departments">
          <div class="card-header">
            <h3>{{ dept.name }}</h3>
            <span class="partner-badge" *ngIf="dept.has_partner">
              <i class="fa-solid fa-handshake"></i> شراكة: {{ dept.partner_percentage }}% شركة / {{ 100 - dept.partner_percentage }}% شريك
            </span>
          </div>
          <p class="desc">{{ dept.description }}</p>

          <div class="manager-row" *ngIf="dept.manager">
            <small>مدير القسم:</small>
            <span class="font-bold text-white"><i class="fa-solid fa-user-shield text-orange"></i> {{ dept.manager.name }}</span>
          </div>

          <!-- Subcategories list -->
          <div class="subcategories-section">
            <div class="sub-header">
              <span>الفئات الفرعية (Sub-categories):</span>
              <button class="btn-sm-add" (click)="openSubCategoryModal(dept)">+ إضافة فرع</button>
            </div>
            <div class="sub-chips">
              <span *ngFor="let sub of dept.sub_categories" class="sub-chip">
                {{ sub.name_ar || sub.name_en }}
              </span>
              <span *ngIf="!dept.sub_categories || dept.sub_categories.length === 0" class="text-muted text-xs">لا توجد فئات فرعية</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Add Department Modal -->
      <div class="crm-modal-backdrop" *ngIf="showAddModal">
        <div class="crm-modal-card glass-panel">
          <div class="modal-header">
            <h3><i class="fa-solid fa-sitemap text-orange"></i> إنشاء قسم جديد</h3>
            <button class="close-btn" (click)="showAddModal = false"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="deptForm" (ngSubmit)="saveDepartment()">
            <div class="form-group">
              <label>اسم القسم / المركز <span class="required">*</span></label>
              <input type="text" formControlName="name" placeholder="مثال: قسم التصوير والإنتاج (Photography)" />
            </div>

            <div class="form-group">
              <label>مدير القسم (Responsible Manager)</label>
              <app-prime-picker-select
                formControlName="manager_id"
                [items]="employees"
                optionLabel="name"
                optionValue="id"
                placeholder="اختر مدير القسم..."
              ></app-prime-picker-select>
            </div>

            <!-- Partnerships on Sections -->
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" formControlName="has_partner" (change)="togglePartnerFields()" />
                هذا القسم يدار بشراكة خارجية (Joint Venture / Section Partnership)
              </label>
            </div>

            <div *ngIf="deptForm.value.has_partner" class="partner-fields-box">
              <div class="form-group">
                <label>اسم الشريك الخارجي</label>
                <input type="text" formControlName="partner_name" placeholder="مثال: شركة إنتاج بروتيك" />
              </div>

              <div class="form-group">
                <label>نسبة أرباح الشركة (%)</label>
                <input type="number" formControlName="partner_percentage" placeholder="50" />
                <small class="text-muted">يتم فصل أرباح ومصروفات هذا القسم في دفاتر مستقلة، وتوزع الأرباح بهذه النسبة.</small>
              </div>
            </div>

            <div class="form-group">
              <label>وصف القسم</label>
              <textarea formControlName="description" rows="2" placeholder="وصف أعمال القسم..."></textarea>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="showAddModal = false">إلغاء</button>
              <button type="submit" class="btn btn-primary" [disabled]="deptForm.invalid || loading">
                {{ loading ? 'جاري الحفظ...' : 'حفظ القسم' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Add Sub-category Modal -->
      <div class="crm-modal-backdrop" *ngIf="showSubModal && selectedDept">
        <div class="crm-modal-card glass-panel">
          <div class="modal-header">
            <h3>إضافة فئة فرعية لـ: {{ selectedDept.name }}</h3>
            <button class="close-btn" (click)="showSubModal = false"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="subForm" (ngSubmit)="saveSubCategory()">
            <div class="form-group">
              <label>اسم الفئة الفرعية (بالعربية) <span class="required">*</span></label>
              <input type="text" formControlName="name_ar" placeholder="مثال: فيديو ريلز / Reels" />
            </div>

            <div class="form-group">
              <label>الاسم بالإنجليزية</label>
              <input type="text" formControlName="name_en" placeholder="Reels Video" />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="showSubModal = false">إلغاء</button>
              <button type="submit" class="btn btn-primary" [disabled]="subForm.invalid || loading">إضافة الفئة</button>
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
    .depts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }
    .dept-card { padding: 24px; border-radius: 16px; display: flex; flex-direction: column; justify-content: space-between; }
    .card-header h3 { color: #fff; font-size: 1.15rem; margin-bottom: 6px; }
    .partner-badge { font-size: 0.76rem; background: rgba(245, 158, 11, 0.15); color: #f59e0b; padding: 4px 10px; border-radius: 12px; display: inline-block; }
    .desc { color: var(--text-secondary); font-size: 0.88rem; margin: 12px 0; }
    .manager-row { background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 8px; font-size: 0.82rem; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; }
    .subcategories-section { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 12px; }
    .sub-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; color: #fff; margin-bottom: 8px; }
    .btn-sm-add { background: rgba(232,98,10,0.15); border: 1px solid var(--orange); color: var(--orange-light); padding: 2px 8px; border-radius: 8px; font-size: 0.75rem; cursor: pointer; }
    .sub-chips { display: flex; gap: 6px; flex-wrap: wrap; }
    .sub-chip { background: rgba(255,255,255,0.06); padding: 4px 10px; border-radius: 12px; font-size: 0.78rem; color: #fff; }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 1200; }
    .crm-modal-card { width: 100%; max-width: 500px; padding: 24px; background: #12121e; border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; }
    .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .close-btn { background: transparent; border: none; color: #a0a0ab; font-size: 1.2rem; cursor: pointer; }
    .checkbox-group label { display: flex; align-items: center; gap: 8px; cursor: pointer; }
    .partner-fields-box { background: rgba(0,0,0,0.3); padding: 12px; border-radius: 12px; margin-bottom: 16px; border: 1px dashed rgba(245, 158, 11, 0.4); }
    .text-orange { color: var(--orange); }
    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; }
    .form-group label { display: block; margin-bottom: 6px; font-size: 0.85rem; color: #fff; }
    .form-group input, .form-group textarea { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #fff; outline: none; }
  `]
})
export class DepartmentsSectionsComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  departments: any[] = [];
  employees: any[] = [];

  showAddModal = false;
  showSubModal = false;
  selectedDept: any = null;
  loading = false;

  deptForm!: FormGroup;
  subForm!: FormGroup;

  ngOnInit(): void {
    this.initForms();
    this.loadData();
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
    this.deptForm.reset({ has_partner: false, partner_percentage: 50 });
    this.showAddModal = true;
  }

  saveDepartment(): void {
    if (this.deptForm.invalid) return;
    this.loading = true;

    this.apiService.createDepartment(this.deptForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showAddModal = false;
        this.loadData();
      },
      error: () => this.loading = false
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
