import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-roles-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownModule],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-shield-halved" style="color:var(--violet-light);"></i> الأدوار والصلاحيات (RBAC)</h2>
          <p class="subtitle">مصفوفة التحكم بالوصول، تعريف الأدوار وتعيين أدوار الموظفين والعملاء</p>
        </div>
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
        <h3 style="font-size:1rem; font-weight:700; color:var(--text); display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-users-gear" style="color:var(--violet-light);"></i> تعيين أدوار المستخدمين</h3>
        <div class="table-responsive" style="margin-top:14px;">
          <table class="crm-table">
            <thead>
              <tr>
                <th>اسم المستخدم</th>
                <th>البريد الإلكتروني</th>
                <th>الدور الحالي</th>
                <th>القسم</th>
                <th>تعديل الدور</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of users">
                <td style="font-weight:700; color:var(--text);">{{ u.name }}</td>
                <td style="color:var(--text-2);">{{ u.email }}</td>
                <td><span class="badge badge-v" style="text-transform:uppercase;">{{ u.role }}</span></td>
                <td style="color:var(--text-2);">{{ u.department?.name || 'عام' }}</td>
                <td>
                  <p-dropdown
                    [ngModel]="u.role"
                    (ngModelChange)="onUserRoleChange(u, $event)"
                    [appendTo]="'body'"
                    [options]="[
                      { label: 'سوبر أدمن (Super Admin)', value: 'super_admin' },
                      { label: 'مدير نظام (Admin)', value: 'admin' },
                      { label: 'مدير قسم (Manager)', value: 'department_manager' },
                      { label: 'موظف (Employee)', value: 'employee' },
                      { label: 'عميل (Client)', value: 'client' }
                    ]"
                    optionLabel="label"
                    optionValue="value"
                    [style]="{ width: '220px' }"
                  ></p-dropdown>
                </td>
              </tr>
              <tr *ngIf="users.length === 0">
                <td colspan="5">
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
    .role-select { background: var(--bg-input); border: 1px solid var(--border); color: #fff; padding: 6px 10px; border-radius: var(--r); font-size: 0.82rem; outline: none; transition: all 0.2s; font-family: inherit; }
    .role-select:focus { border-color: var(--violet); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
    .role-select option { background: #12121e; color: #fff; }
  `]
})
export class RolesManagementComponent implements OnInit {
  private apiService = inject(ApiService);

  roles: any[] = [];
  permissions: any[] = [];
  users: any[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getRoles().subscribe(res => {
      this.roles = res.roles || [];
      this.permissions = res.permissions || [];
    });

    this.apiService.getUsers().subscribe(res => {
      this.users = res.data || [];
    });
  }

  onUserRoleChange(user: any, newRole: string): void {
    this.apiService.assignUserRole(user.id, newRole).subscribe(() => {
      user.role = newRole;
    });
  }
}
