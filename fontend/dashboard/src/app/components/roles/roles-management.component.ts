import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PrimePickerSelectComponent } from '../shared/prime-picker-select/prime-picker-select.component';

@Component({
  selector: 'app-roles-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    PrimePickerSelectComponent
  ],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-shield-halved" style="color:var(--violet-light);"></i> الأدوار والصلاحيات (RBAC)</h2>
          <p class="subtitle">مصفوفة التحكم بالوصول، تعريف الأدوار، وإدارة وتوزيع الموظفين والعملاء على الأقسام</p>
        </div>
        <button class="btn btn-primary" (click)="openAddUserModal()">
          <i class="fa-solid fa-user-plus"></i> إضافة مستخدم / موظف جديد
        </button>
      </div>

      <!-- Roles & Permissions Matrix -->
      <div class="roles-grid margin-top">
        <div class="role-card glass-panel" *ngFor="let role of roles">
          <div class="card-header">
            <h3><i class="fa-solid fa-shield-halved" style="color:var(--violet-light); font-size:0.9rem;"></i> {{ role.name }}</h3>
            <span class="slug-badge">{{ role.slug }}</span>
          </div>
          <p class="desc">{{ role.description }}</p>

          <div class="permissions-list">
            <h4>الصلاحيات الممنوحة:</h4>
            <div class="perm-chips">
              <span *ngFor="let perm of role.permissions" class="perm-chip">
                {{ perm.name }}
              </span>
              <span *ngIf="!role.permissions || role.permissions.length === 0" style="color:var(--text-3); font-size:0.75rem;">لا توجد صلاحيات مسندة</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Users Role Assignment Table -->
      <div class="section-card glass-panel margin-top">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <h3 style="font-size:1rem; font-weight:700; color:var(--text); display:flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-users-gear" style="color:var(--violet-light);"></i> تعيين أدوار ونقل مستخدمي الأقسام
          </h3>
          <span style="color:var(--text-2); font-size:0.8rem;">إجمالي المستخدمين: {{ users.length }}</span>
        </div>

        <div class="table-responsive" style="margin-top:14px;">
          <table class="crm-table">
            <thead>
              <tr>
                <th>اسم المستخدم</th>
                <th>البريد الإلكتروني</th>
                <th>الدور الحالي</th>
                <th>القسم المسند</th>
                <th>تغيير الدور</th>
                <th>تغيير القسم</th>
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of users">
                <td style="font-weight:700; color:var(--text);">
                  {{ u.name }}
                  <span *ngIf="u.role === 'department_manager'" class="mgr-badge"><i class="fa-solid fa-crown"></i> مدير قسم</span>
                </td>
                <td style="color:var(--text-2);">{{ u.email }}</td>
                <td><span class="badge badge-v" style="text-transform:uppercase;">{{ u.role }}</span></td>
                <td style="color:var(--text-2);">{{ u.department?.name || 'عام / بدون قسم' }}</td>
                <td>
                  <p-dropdown
                    [ngModel]="u.role"
                    (ngModelChange)="onUserRoleChange(u, $event)"
                    [appendTo]="'body'"
                    [options]="[
                      { label: 'سوبر أدمن (Super Admin)', value: 'super_admin' },
                      { label: 'مدير نظام (Admin)', value: 'admin' },
                      { label: 'مدير قسم (Department Manager)', value: 'department_manager' },
                      { label: 'موظف (Employee)', value: 'employee' },
                      { label: 'عميل (Client)', value: 'client' }
                    ]"
                    optionLabel="label"
                    optionValue="value"
                    [style]="{ width: '200px' }"
                  ></p-dropdown>
                </td>
                <td>
                  <p-dropdown
                    [ngModel]="u.department_id"
                    (ngModelChange)="onUserDeptChange(u, $event)"
                    [appendTo]="'body'"
                    [options]="deptOptions"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="اختر القسم..."
                    [style]="{ width: '180px' }"
                  ></p-dropdown>
                </td>
                <td>
                  <button class="btn-icon-danger" (click)="confirmDeleteUser(u)" title="حذف المستخدم">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
              <tr *ngIf="users.length === 0">
                <td colspan="7">
                  <div class="empty-state">
                    <div class="empty-state-icon"><i class="fa-solid fa-user-slash"></i></div>
                    <div class="empty-state-title">لم يتم العثور على مستخدمين</div>
                    <div class="empty-state-desc">لا يوجد مستخدمون مسجلون متاحون لتعيين الأدوار.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add User / Employee -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="إضافة مستخدم / موظف جديد" [style]="{ width: '92vw', maxWidth: '540px' }">
        <form [formGroup]="userForm" (ngSubmit)="saveUser()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>الاسم كامل <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="مثال: محمد علي" />
            </div>
            <div class="form-group">
              <label>البريد الإلكتروني <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="user@mediaglow.com" />
            </div>
            <div class="form-group">
              <label>كلمة المرور <span class="required">*</span></label>
              <input type="password" pInputText formControlName="password" placeholder="••••••••" />
            </div>
            <div class="form-group">
              <label>الدور <span class="required">*</span></label>
              <select formControlName="role" class="custom-select-input">
                <option value="employee">موظف (Employee)</option>
                <option value="department_manager">مدير قسم (Department Manager)</option>
                <option value="admin">مدير نظام (Admin)</option>
                <option value="client">عميل (Client)</option>
              </select>
            </div>
            <div class="form-group">
              <label>القسم المسند إليه</label>
              <app-prime-picker-select
                formControlName="department_id"
                [items]="departments"
                optionLabel="name"
                optionValue="id"
                placeholder="اختر القسم..."
              ></app-prime-picker-select>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showAddModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="userForm.invalid || loading">
              {{ loading ? 'جاري الإضافة...' : 'حفظ المستخدم' }}
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
    .roles-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 18px; margin-bottom: 24px; }
    .role-card { background: var(--bg-card); border: 1px solid var(--border); padding: 22px; border-radius: var(--r-lg); display: flex; flex-direction: column; gap: 12px; transition: all 0.25s var(--ease); position: relative; overflow: hidden; }
    .role-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--violet), var(--violet-light)); border-radius: var(--r-lg) var(--r-lg) 0 0; }
    .role-card:hover { border-color: var(--border-v); box-shadow: var(--shadow-sm); }
    .card-header { display: flex; justify-content: space-between; align-items: center; }
    .card-header h3 { color: #fff; font-size: 1rem; font-weight: 700; display: flex; align-items: center; gap: 8px; }
    .slug-badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--text-2); padding: 3px 9px; border-radius: 100px; font-size: 0.68rem; font-weight: 600; font-family: monospace; }
    .desc { color: var(--text-2); font-size: 0.84rem; line-height: 1.5; }
    .permissions-list h4 { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .perm-chips { display: flex; gap: 5px; flex-wrap: wrap; }
    .perm-chip { background: var(--violet-soft); color: var(--violet-light); border: 1px solid rgba(124,58,237,0.2); padding: 3px 9px; border-radius: 100px; font-size: 0.68rem; font-weight: 600; }
    .section-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 24px; }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 14px 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 13px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: #fff; vertical-align: middle; }
    .crm-table tr:last-child td { border-bottom: none; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
    .mgr-badge { display: inline-flex; align-items: center; gap: 4px; font-size: 0.68rem; background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); padding: 2px 7px; border-radius: 100px; margin-right: 6px; font-weight: 700; }
    .btn-icon-danger { background: rgba(225, 29, 72, 0.1); color: #fda4af; border: 1px solid rgba(225, 29, 72, 0.25); width: 32px; height: 32px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
    .btn-icon-danger:hover { background: rgba(225, 29, 72, 0.3); color: #fff; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; }
    .form-group input, .custom-select-input { width: 100%; padding: 10px 13px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: #fff; outline: none; font-family: inherit; font-size: 0.88rem; transition: all 0.2s; }
    .custom-select-input option { background: #121224; color: #fff; }
    .required { color: var(--rose-light); }

    .dialog-footer-actions { display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border); }
    .btn-dialog-cancel { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: var(--text-2); padding: 9px 18px; border-radius: 10px; font-weight: 700; font-size: 0.86rem; cursor: pointer; transition: all 0.2s; font-family: inherit; }
    .btn-dialog-cancel:hover { background: rgba(255, 255, 255, 0.1); color: var(--text); }
    .btn-dialog-submit { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); border: none; color: #ffffff; padding: 9px 22px; border-radius: 10px; font-weight: 700; font-size: 0.86rem; cursor: pointer; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35); transition: all 0.2s; font-family: inherit; }
    .btn-dialog-submit:hover:not(:disabled) { box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5); transform: translateY(-1px); }
    .btn-dialog-submit:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }
  `]
})
export class RolesManagementComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  roles: any[] = [];
  permissions: any[] = [];
  users: any[] = [];
  departments: any[] = [];
  deptOptions: any[] = [];

  showAddModal = false;
  loading = false;
  userForm!: FormGroup;

  currentUser: any = null;

  ngOnInit(): void {
    try {
      const uStr = localStorage.getItem('mediaglow_user');
      if (uStr) this.currentUser = JSON.parse(uStr);
    } catch(e){}
    this.initForm();
    this.loadData();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(6)]],
      role: ['employee', Validators.required],
      department_id: [null]
    });
  }

  loadData(): void {
    this.apiService.getRoles().subscribe(res => {
      let rList = res.roles || [];
      if (this.currentUser?.role !== 'super_admin') {
        rList = rList.filter((r: any) => r.slug !== 'super_admin' && r.name !== 'super_admin');
      }
      this.roles = rList;
      this.permissions = res.permissions || [];
    });

    this.apiService.getDepartments().subscribe(depts => {
      this.departments = depts || [];
      this.deptOptions = [
        { label: 'بدون قسم / عام', value: null },
        ...this.departments.map((d: any) => ({ label: d.name, value: d.id }))
      ];
    });

    this.apiService.getUsers().subscribe(res => {
      this.users = res.data || [];
    });
  }

  isSuperAdmin(): boolean {
    return this.currentUser?.role === 'super_admin';
  }

  onUserRoleChange(user: any, newRole: string): void {
    if (newRole === 'super_admin' && !this.isSuperAdmin()) {
      alert('عذراً، ترفيع المستخدم لصلاحية سوبر أدمن متاح فقط لحسابات السوبر أدمن الرئيسية.');
      return;
    }
    this.apiService.assignUserRole(user.id, newRole).subscribe(() => {
      user.role = newRole;
    });
  }

  onUserDeptChange(user: any, newDeptId: number | null): void {
    this.apiService.updateUserDepartment(user.id, newDeptId).subscribe(() => {
      user.department_id = newDeptId;
      const d = this.departments.find(dept => dept.id === newDeptId);
      user.department = d ? { id: d.id, name: d.name } : null;
    });
  }

  openAddUserModal(): void {
    this.userForm.reset({
      role: 'employee',
      password: 'password123',
      department_id: null
    });
    this.showAddModal = true;
  }

  saveUser(): void {
    if (this.userForm.invalid) return;
    this.loading = true;

    this.apiService.createUser(this.userForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showAddModal = false;
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        alert(err.error?.message || 'حدث خطأ أثناء إضافة المستخدم.');
      }
    });
  }

  confirmDeleteUser(user: any): void {
    if (user.id === this.currentUser?.id) {
      alert('لا يمكنك حذف حسابك الشخصي.');
      return;
    }
    if (confirm(`هل أنت تأكد من حذف المستخدم "${user.name}"؟`)) {
      this.apiService.deleteUser(user.id).subscribe({
        next: () => this.loadData(),
        error: () => alert('حدث خطأ أثناء حذف المستخدم.')
      });
    }
  }
}
