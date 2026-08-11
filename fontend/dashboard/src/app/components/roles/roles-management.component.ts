import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-roles-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-user-shield text-orange"></i> إدارة الأدوار والصلاحيات (Roles & Permissions RBAC)</h2>
          <p class="subtitle">تحديد صلاحيات الوصول بكل شاشة وإجراء وحفظ المصفوفة في قاعدة البيانات</p>
        </div>
      </div>

      <!-- Roles & Permissions Matrix -->
      <div class="roles-grid margin-top">
        <div class="role-card glass-panel" *ngFor="let role of roles">
          <div class="card-header">
            <h3><i class="fa-solid fa-shield-halved text-orange"></i> {{ role.name }}</h3>
            <span class="slug-badge">{{ role.slug }}</span>
          </div>
          <p class="desc">{{ role.description }}</p>

          <div class="permissions-list">
            <h4>الصلاحيات الممنوحة:</h4>
            <div class="perm-chips">
              <span *ngFor="let perm of role.permissions" class="perm-chip">
                {{ perm.name }}
              </span>
              <span *ngIf="!role.permissions || role.permissions.length === 0" class="text-muted text-xs">لا توجد صلاحيات محددة</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Users Role Assignment Table -->
      <div class="section-card glass-panel margin-top">
        <h3><i class="fa-solid fa-users-gear text-orange"></i> تعيين دور المستخدمين (Users Role Assignment)</h3>
        <table class="crm-table margin-top">
          <thead>
            <tr>
              <th>المستخدم</th>
              <th>البريد الإلكتروني</th>
              <th>الدور الحالي</th>
              <th>القسم</th>
              <th>تغيير الدور</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let u of users">
              <td class="font-bold text-white">{{ u.name }}</td>
              <td>{{ u.email }}</td>
              <td><span class="badge" [ngClass]="u.role">{{ u.role }}</span></td>
              <td>{{ u.department?.name || 'عام' }}</td>
              <td>
                <select [ngModel]="u.role" (ngModelChange)="onUserRoleChange(u, $event)" class="role-select">
                  <option value="super_admin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="department_manager">Department Manager</option>
                  <option value="employee">Employee</option>
                  <option value="client">Client</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .crm-module-container { padding: 24px; }
    .module-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .subtitle { color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px; }
    .roles-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
    .role-card { padding: 24px; border-radius: 16px; display: flex; flex-direction: column; justify-content: space-between; }
    .card-header { display: flex; justify-content: space-between; align-items: center; }
    .card-header h3 { color: #fff; font-size: 1.1rem; }
    .slug-badge { background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 10px; font-size: 0.78rem; }
    .desc { color: var(--text-secondary); font-size: 0.85rem; margin: 10px 0; }
    .permissions-list h4 { font-size: 0.82rem; color: #fff; margin-bottom: 8px; }
    .perm-chips { display: flex; gap: 6px; flex-wrap: wrap; }
    .perm-chip { background: rgba(232,98,10,0.15); color: var(--orange-light); padding: 4px 10px; border-radius: 12px; font-size: 0.78rem; }
    .section-card { padding: 24px; border-radius: 16px; }
    .margin-top { margin-top: 24px; }
    .crm-table { width: 100%; border-collapse: collapse; text-align: right; }
    .crm-table th, .crm-table td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.88rem; }
    .crm-table th { background: rgba(255,255,255,0.03); color: #fff; }
    .role-select { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #fff; padding: 4px 10px; border-radius: 10px; font-size: 0.82rem; outline: none; }
    .text-orange { color: var(--orange); }
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
