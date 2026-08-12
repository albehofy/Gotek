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
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-sitemap" style="color:var(--violet-light);"></i> الأقسام والمراكز التشغيلية</h2>
          <p class="subtitle">إدارة الأقسام الديناميكية، التصنيفات الفرعية، ونسب الشراكة الخارجية</p>
        </div>
        <button class="btn btn-primary" (click)="openAddModal()">
          <i class="fa-solid fa-plus"></i> إضافة قسم جديد
        </button>
      </div>

      <!-- Departments Cards Grid -->
      <div class="depts-grid">
        <div class="dept-card glass-panel" *ngFor="let dept of departments">
          <div class="card-header">
            <h3>{{ dept.name }}</h3>
            <span class="partner-badge" *ngIf="dept.has_partner">
              <i class="fa-solid fa-handshake"></i> شراكة: {{ dept.partner_percentage }}% الشركة / {{ 100 - dept.partner_percentage }}% الشريك
            </span>
          </div>
          <p class="desc">{{ dept.description }}</p>

          <div class="manager-row" *ngIf="dept.manager">
            <small>مسؤول القسم:</small>
            <span style="font-weight:700; color:#fff;"><i class="fa-solid fa-user-shield" style="color:var(--violet-light); margin-right:4px;"></i> {{ dept.manager.name }}</span>
          </div>

          <!-- Subcategories list -->
          <div class="subcategories-section">
            <div class="sub-header">
              <span>التصنيفات الفرعية:</span>
              <button class="btn-sm-add" (click)="openSubCategoryModal(dept)">+ إضافة تصنيف فرعي</button>
            </div>
            <div class="sub-chips">
              <span *ngFor="let sub of dept.sub_categories" class="sub-chip">
                {{ sub.name_ar || sub.name_en }}
              </span>
              <span *ngIf="!dept.sub_categories || dept.sub_categories.length === 0" style="color:var(--text-3); font-size:0.75rem;">لا توجد تصنيفات فرعية بعد</span>
            </div>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add Department -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="إنشاء قسم جديد" [style]="{ width: '520px' }">
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
              ></app-prime-picker-select>
            </div>
            <!-- Partnerships on Sections -->
            <div class="form-group checkbox-group">
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.86rem; color:#fff;">
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
              <textarea pTextarea formControlName="description" rows="2" placeholder="وصف مهام وتخصص هذا القسم..."></textarea>
            </div>
          </div>

          <ng-template pTemplate="footer">
            <button type="button" class="btn btn-glass" (click)="showAddModal = false">إلغاء</button>
            <button type="submit" class="btn btn-primary" [disabled]="deptForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : 'حفظ القسم' }}
            </button>
          </ng-template>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Add Sub-category -->
      <p-dialog [(visible)]="showSubModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'إضافة تصنيف فرعي إلى: ' + (selectedDept?.name || '')" [style]="{ width: '480px' }">
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

          <ng-template pTemplate="footer">
            <button type="button" class="btn btn-glass" (click)="showSubModal = false">إلغاء</button>
            <button type="submit" class="btn btn-primary" [disabled]="subForm.invalid || loading">إضافة التصنيف</button>
          </ng-template>
        </form>
      </p-dialog>
    </div>
  `,
  styles: [`
    :host { display: block; font-family: 'Inter','Cairo',sans-serif; }
    .crm-module-container { padding: 28px 32px; min-height: 100vh; background: var(--bg); background-image: var(--bg-gradient); background-attachment: fixed; }
    .module-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap; }
    .module-header h2 { font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: -0.3px; display: flex; align-items: center; gap: 10px; }
    .subtitle { color: var(--text-2); font-size: 0.85rem; margin-top: 4px; }
    .depts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; }
    .dept-card { background: var(--bg-card); border: 1px solid var(--border); padding: 22px; border-radius: var(--r-lg); display: flex; flex-direction: column; gap: 14px; transition: all 0.25s var(--ease); position: relative; overflow: hidden; }
    .dept-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--violet), var(--teal)); border-radius: var(--r-lg) var(--r-lg) 0 0; }
    .dept-card:hover { border-color: var(--border-v); transform: translateY(-3px); box-shadow: var(--shadow-sm); }
    .card-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
    .card-header h3 { color: #fff; font-size: 1.05rem; font-weight: 700; }
    .partner-badge { font-size: 0.68rem; background: var(--amber-soft); color: var(--amber-light); border: 1px solid rgba(217,119,6,0.2); padding: 3px 9px; border-radius: 100px; font-weight: 700; }
    .desc { color: var(--text-2); font-size: 0.84rem; line-height: 1.5; }
    .manager-row { background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 8px; font-size: 0.8rem; border: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; color: var(--text-2); }
    .subcategories-section { border-top: 1px solid var(--border); padding-top: 12px; }
    .sub-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
    .btn-sm-add { background: var(--violet-soft); border: 1px solid rgba(124,58,237,0.25); color: var(--violet-light); padding: 3px 9px; border-radius: 8px; font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: inherit; }
    .btn-sm-add:hover { background: rgba(124,58,237,0.22); }
    .sub-chips { display: flex; gap: 6px; flex-wrap: wrap; }
    .sub-chip { background: rgba(255,255,255,0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 100px; font-size: 0.72rem; color: var(--text-2); font-weight: 600; }
    .crm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 20px; }
    .crm-modal-card { width: 100%; max-width: 500px; background: #10101e; border: 1px solid var(--border); border-radius: var(--r-xl); box-shadow: 0 24px 80px rgba(0,0,0,0.7); animation: modalIn 0.22s var(--ease); max-height: 90vh; overflow-y: auto; }
    @keyframes modalIn { from { opacity:0; transform: translateY(16px) scale(0.97); } to { opacity:1; transform:none; } }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid var(--border); }
    .modal-header h3 { font-size: 1.05rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 9px; }
    .close-btn { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-2); font-size: 0.9rem; cursor: pointer; width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
    .close-btn:hover { background: var(--rose-soft); color: var(--rose-light); border-color: rgba(225,29,72,0.2); }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input, .form-group textarea { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: #fff; outline: none; font-family: inherit; font-size: 0.88rem; transition: all 0.2s; }
    .form-group input:focus, .form-group textarea:focus { border-color: var(--violet); background: rgba(124,58,237,0.06); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 16px 24px; border-top: 1px solid var(--border); }
    .required { color: var(--rose-light); }
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
