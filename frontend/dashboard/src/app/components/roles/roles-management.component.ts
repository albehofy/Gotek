import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { ConfirmService } from '../../services/confirm.service';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-roles-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    DialogModule,
    InputTextModule
  ],
  template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-shield-halved" style="color:var(--violet-light);"></i> إدارة المستخدمين والأدوار والصلاحيات</h2>
          <p class="subtitle">فصل كامل للموظفين والعملاء، إدارة الإيقاف المؤقت (Hold)، التحكم بكلمات المرور، وتخصيص مستويات الصلاحيات المتعددة</p>
        </div>
        <div class="header-actions">
          <button *ngIf="activeTab === 'roles'" class="btn btn-secondary" (click)="openAddRoleModal()">
            <i class="fa-solid fa-plus"></i> إضافة دور جديد
          </button>
          <button class="btn btn-primary" (click)="openAddUserModal()">
            <i class="fa-solid fa-user-plus"></i> إضافة {{ activeTab === 'clients' ? 'عميل جديد' : 'مستخدم / موظف جديد' }}
          </button>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="tabs-nav-bar">
        <button class="tab-btn" [class.active]="activeTab === 'staff'" (click)="setTab('staff')">
          <i class="fa-solid fa-users-gear"></i> فريق العمل والموظفون
          <span class="tab-badge" *ngIf="activeTab === 'staff'">{{ totalRecords }}</span>
        </button>
        <button class="tab-btn" [class.active]="activeTab === 'clients'" (click)="setTab('clients')">
          <i class="fa-solid fa-user-tie"></i> العملاء
          <span class="tab-badge" *ngIf="activeTab === 'clients'">{{ totalRecords }}</span>
        </button>
        <button class="tab-btn" [class.active]="activeTab === 'roles'" (click)="setTab('roles')">
          <i class="fa-solid fa-shield-cat"></i> الأدوار ومصفوفة الصلاحيات ({{ roles.length }})
        </button>
      </div>

      <!-- TAB 1 & 2: STAFF & CLIENTS USERS TABLE -->
      <div class="section-card glass-panel margin-top" *ngIf="activeTab === 'staff' || activeTab === 'clients'">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div>
            <h3 style="font-size:1.05rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;">
              <i [class]="activeTab === 'clients' ? 'fa-solid fa-address-book' : 'fa-solid fa-id-badge'" style="color:var(--violet-light);"></i>
              {{ activeTab === 'clients' ? 'قائمة حسابات العملاء المسجلين' : 'قائمة موظفي الشركة وفريق العمل' }}
            </h3>
            <p style="color:var(--text-3); font-size:0.8rem; margin-top:2px;">
              {{ activeTab === 'clients' ? 'إدارة بيانات العملاء، أكوادهم، إعادة تعيين كلمات المرور، ووضع الحساب على Hold' : 'إدارة موظفي الأقسام، الصلاحيات المتعددة، تعديل الحسابات، والتعليق المؤقت' }}
            </p>
          </div>
          <span class="counter-badge">إجمالي السجلات: {{ totalRecords }}</span>
        </div>

        <!-- Search & Filter Bar -->
        <div class="filters-bar glass-panel" style="margin-top:16px; margin-bottom:14px;">
          <div class="search-field">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              [(ngModel)]="searchQuery"
              (input)="onSearchChange()"
              [placeholder]="activeTab === 'clients' ? 'البحث بالاسم، كود العميل (مثال 1001)، أو البريد...' : 'البحث بالاسم أو البريد الإلكتروني للموظف...'"
            />
          </div>
        </div>

        <div class="table-responsive" style="margin-top:10px;">
          <table class="crm-table">
            <thead>
              <tr>
                <th *ngIf="activeTab === 'clients'">كود العميل</th>
                <th>الاسم الكامل</th>
                <th>البريد الإلكتروني</th>
                <th>الصلاحيات / الأدوار</th>
                <th *ngIf="activeTab === 'staff'">القسم التابع له</th>
                <th>الحالة (Hold)</th>
                <th style="text-align:center;">إجراءات سريعة</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of users" [class.user-on-hold]="u.is_hold">
                <td *ngIf="activeTab === 'clients'">
                  <span class="client-code-badge">#CLIENT-{{ u.client_code || u.id }}</span>
                </td>
                <td style="font-weight:700; color:#fff;">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <div class="user-avatar-mini">{{ u.name.charAt(0) }}</div>
                    <div>
                      <div>{{ u.name }}</div>
                      <small *ngIf="u.phone" style="color:var(--text-3); font-size:0.75rem;">{{ u.phone }}</small>
                    </div>
                  </div>
                </td>
                <td style="color:var(--text-2); font-family:monospace; font-size:0.84rem;">{{ u.email }}</td>
                <td>
                  <div class="user-roles-list">
                    <!-- Primary role badge -->
                    <span class="badge badge-role">{{ getRoleLabel(u.role) }}</span>
                    <!-- Additional roles if assigned via pivot -->
                    <ng-container *ngIf="u.roles && u.roles.length > 0">
                      <span *ngFor="let r of u.roles" class="badge badge-subrole" [title]="r.name">
                        {{ r.name }}
                      </span>
                    </ng-container>
                  </div>
                </td>
                <td *ngIf="activeTab === 'staff'" style="color:var(--text-2);">
                  <span *ngIf="u.department" class="dept-badge"><i class="fa-solid fa-layer-group"></i> {{ u.department.name }}</span>
                  <span *ngIf="!u.department" style="color:var(--text-3); font-size:0.8rem;">إدارة عامة</span>
                </td>
                <td>
                  <span *ngIf="u.is_hold" class="status-badge status-hold">
                    <i class="fa-solid fa-circle-pause"></i> معلّق مؤقتاً (Hold)
                  </span>
                  <span *ngIf="!u.is_hold" class="status-badge status-active">
                    <i class="fa-solid fa-circle-check"></i> نشط
                  </span>
                </td>
                <td>
                  <div class="action-buttons-group">
                    <!-- Hold / Unhold Toggle Button -->
                    <button
                      class="btn-icon-action"
                      [class.btn-hold-active]="u.is_hold"
                      [class.btn-hold-inactive]="!u.is_hold"
                      (click)="toggleHold(u)"
                      [title]="u.is_hold ? 'إلغاء التعليق وتفعيل الحساب' : 'تعليق الحساب مؤقتاً (Hold)'"
                    >
                      <i [class]="u.is_hold ? 'fa-solid fa-play' : 'fa-solid fa-pause'"></i>
                    </button>

                    <!-- Edit User Button -->
                    <button class="btn-icon-action btn-edit" (click)="openEditUserModal(u)" title="تعديل بيانات الحساب والصلاحيات وكلمة السر">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    <!-- Delete User Button -->
                    <button class="btn-icon-action btn-delete" (click)="confirmDeleteUser(u)" title="حذف المستخدم نهائياً">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="users.length === 0">
                <td [attr.colspan]="activeTab === 'clients' ? 6 : 6">
                  <div class="empty-state">
                    <div class="empty-state-icon"><i class="fa-solid fa-user-slash"></i></div>
                    <div class="empty-state-title">لا توجد سجلات مطابقة للبحث</div>
                    <div class="empty-state-desc">لم يتم العثور على أي مستخدمين مسجلين في هذا القسم.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Table Pagination Bar -->
        <div class="table-pagination-bar" *ngIf="totalRecords > 0">
          <div class="pagination-info-group">
            <div class="pagination-info">
              عرض {{ (currentPage - 1) * pageSize + 1 }} إلى {{ currentPage * pageSize > totalRecords ? totalRecords : currentPage * pageSize }} من أصل {{ totalRecords }}
            </div>
            <div class="pagination-per-page">
              <span>عرض</span>
              <select [(ngModel)]="pageSize" (change)="onPerPageChange()" class="pg-select">
                <option [ngValue]="5">5</option>
                <option [ngValue]="10">10</option>
                <option [ngValue]="20">20</option>
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

      <!-- TAB 3: ROLES & PERMISSIONS MATRIX -->
      <div *ngIf="activeTab === 'roles'" class="roles-section">
        <div class="roles-grid margin-top">
          <div class="role-card glass-panel" *ngFor="let role of roles">
            <div class="card-header">
              <h3><i class="fa-solid fa-shield-halved" style="color:var(--violet-light); font-size:0.95rem;"></i> {{ role.name }}</h3>
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="slug-badge">{{ role.slug }}</span>
                <button *ngIf="isSuperAdmin()" class="btn-role-mini" (click)="openEditRoleModal(role)" title="تعديل الدور والصلاحيات">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button *ngIf="isSuperAdmin() && !isSystemRole(role.slug)" class="btn-role-mini danger" (click)="confirmDeleteRole(role)" title="حذف الدور">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            <p class="desc">{{ role.description || 'لا يوجد وصف متاح لهذا الدور' }}</p>

            <div class="permissions-list">
              <h4>الصلاحيات الممنوحة ({{ role.permissions ? role.permissions.length : 0 }}):</h4>
              <div class="perm-chips">
                <span *ngFor="let perm of role.permissions" class="perm-chip">
                  {{ perm.name }}
                </span>
                <span *ngIf="!role.permissions || role.permissions.length === 0" style="color:var(--text-3); font-size:0.75rem;">لا توجد صلاحيات مسندة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add / Edit User Modal -->
      <p-dialog [(visible)]="showUserModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="isEditMode ? 'تعديل بيانات الحساب والصلاحيات' : (activeTab === 'clients' ? 'إضافة عميل جديد' : 'إضافة موظف / مستخدم جديد')" [style]="{ width: '92vw', maxWidth: '620px' }">
        <form [formGroup]="userForm" (ngSubmit)="saveUser()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-row-2">
              <div class="form-group">
                <label>الاسم بالكامل <span class="required">*</span></label>
                <input type="text" pInputText formControlName="name" placeholder="مثال: أحمد مصطفى" />
              </div>
              <div class="form-group">
                <label>البريد الإلكتروني <span class="required">*</span></label>
                <input type="email" pInputText formControlName="email" placeholder="user@mediaglow.com" />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label>رقم الهاتف</label>
                <input type="text" pInputText formControlName="phone" placeholder="010XXXXXXXX" />
              </div>
              <div class="form-group">
                <label>
                  كلمة المرور
                  <span *ngIf="!isEditMode" class="required">*</span>
                  <span *ngIf="isEditMode" style="color:var(--text-3); font-weight:normal; font-size:0.75rem;">(اتركه فارغاً للإبقاء على الحالية)</span>
                </label>
                <input type="password" pInputText formControlName="password" placeholder="••••••••" />
              </div>
            </div>

            <div class="form-group" *ngIf="activeTab === 'staff'">
              <label>القسم التابع له</label>
              <select formControlName="department_id" class="custom-select-input">
                <option [ngValue]="null">بدون قسم / إدارة عامة</option>
                <option *ngFor="let d of departments" [ngValue]="d.id">{{ d.name }}</option>
              </select>
            </div>

            <!-- Multi-Role Selection Checkboxes -->
            <div class="form-group">
              <label style="display:flex; justify-content:space-between; align-items:center;">
                <span>مستويات الصلاحيات والأدوار الممنوحة <span class="required">*</span></span>
                <small style="color:var(--violet-light); font-weight:normal;">(يمكنك اختيار أكثر من مستوى للمستخدم)</small>
              </label>

              <div class="roles-checklist-container">
                <div *ngFor="let r of roles" class="role-checkbox-card" [class.selected]="isRoleSelected(r.id)">
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      [checked]="isRoleSelected(r.id)"
                      (change)="toggleRoleSelection(r.id)"
                    />
                    <div class="checkbox-text">
                      <div class="role-title">
                        <span>{{ r.name }}</span>
                        <span class="slug-tag">{{ r.slug }}</span>
                      </div>
                      <div class="role-sub" *ngIf="r.description">{{ r.description }}</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <!-- Hold switch in edit mode -->
            <div class="form-group" *ngIf="isEditMode" style="background:rgba(255,255,255,0.03); padding:12px 14px; border-radius:8px; border:1px solid var(--border);">
              <label class="checkbox-label" style="cursor:pointer;">
                <input type="checkbox" formControlName="is_hold" />
                <div class="checkbox-text">
                  <div style="font-weight:700; color:#fff; display:flex; align-items:center; gap:6px;">
                    <i class="fa-solid fa-pause" style="color:#f59e0b;"></i> تعليق الحساب مؤقتاً (Hold)
                  </div>
                  <div style="color:var(--text-3); font-size:0.75rem;">
                    عند التفعيل، لن يتمكن المستخدم من الدخول للنظام وسيتم استثناؤه كلياً من قوائم تعيين المهام والصفقات.
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showUserModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="userForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : (isEditMode ? 'تحديث البيانات' : 'حفظ المستخدم') }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Add / Edit Role Modal -->
      <p-dialog [(visible)]="showRoleModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="isEditRoleMode ? 'تعديل الدور والصلاحيات' : 'إضافة دور وصلاحيات جديدة'" [style]="{ width: '92vw', maxWidth: '580px' }">
        <form [formGroup]="roleForm" (ngSubmit)="saveRole()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>اسم الدور باللغة العربية <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="مثال: مدير مشتريات" />
            </div>

            <div class="form-group" *ngIf="!isEditRoleMode">
              <label>الرمز المعرف (Slug) <span class="required">*</span></label>
              <input type="text" pInputText formControlName="slug" placeholder="مثال: procurement_manager" />
            </div>

            <div class="form-group">
              <label>الوصف</label>
              <input type="text" pInputText formControlName="description" placeholder="وصف مختصر لمسؤوليات هذا الدور" />
            </div>

            <!-- Enhanced Modular Permissions Matrix -->
            <div class="form-group" style="margin-top:4px;">
              <div class="perm-section-header">
                <div>
                  <label style="margin:0; font-size:0.86rem; font-weight:800; color:#fff; display:flex; align-items:center; gap:8px;">
                    <i class="fa-solid fa-list-check" style="color:var(--violet-light);"></i>
                    مصفوفة صلاحيات النظام التفصيلية
                    <span class="perm-counter-badge">{{ selectedPermissionIds.length }} مختارة من أصل {{ permissions.length }}</span>
                  </label>
                  <p style="color:var(--text-3); font-size:0.75rem; margin:2px 0 0 0;">
                    حدد الصلاحيات والأذونات الممنوحة لهذا الدور بدقة عبر الأقسام والموديولات المختلفة:
                  </p>
                </div>
                <div class="perm-global-actions">
                  <button type="button" class="btn-perm-action" (click)="selectAllPermissions()">
                    <i class="fa-solid fa-check-double"></i> تحديد الكل
                  </button>
                  <button type="button" class="btn-perm-action secondary" (click)="deselectAllPermissions()">
                    <i class="fa-solid fa-xmark"></i> إلغاء الكل
                  </button>
                </div>
              </div>

              <!-- Filter Permissions Input -->
              <div class="perm-search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  [(ngModel)]="permSearchQuery"
                  [ngModelOptions]="{standalone: true}"
                  placeholder="ابحث في الصلاحيات بالاسم أو الوصف أو القسم..."
                />
              </div>

              <div class="permissions-modules-container">
                <div *ngFor="let grp of filteredPermissionGroups" class="perm-module-block">
                  <div class="perm-module-header">
                    <div class="module-title">
                      <i [class]="grp.icon"></i>
                      <span>{{ grp.label }}</span>
                      <span class="module-count">{{ getSelectedCountInGroup(grp) }} / {{ grp.permissions.length }}</span>
                    </div>
                    <button type="button" class="btn-toggle-group" (click)="toggleGroupPermissions(grp)">
                      <i [class]="isGroupAllSelected(grp) ? 'fa-solid fa-square-minus' : 'fa-solid fa-square-check'"></i>
                      {{ isGroupAllSelected(grp) ? 'إلغاء تحديد القسم' : 'تحديد كل القسم' }}
                    </button>
                  </div>
                  <div class="permissions-grid">
                    <div
                      *ngFor="let p of grp.permissions"
                      class="perm-checkbox-item"
                      [class.checked]="isPermSelected(p.id)"
                      (click)="togglePermSelection(p.id)"
                    >
                      <input
                        type="checkbox"
                        [checked]="isPermSelected(p.id)"
                        (click)="$event.stopPropagation()"
                        (change)="togglePermSelection(p.id)"
                      />
                      <div class="perm-details">
                        <div class="perm-name-row">
                          <span class="perm-name">{{ p.name }}</span>
                          <span class="perm-slug">{{ p.slug }}</span>
                        </div>
                        <span class="perm-desc" *ngIf="p.description">{{ p.description }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div *ngIf="filteredPermissionGroups.length === 0" class="empty-perms-alert">
                  <i class="fa-solid fa-filter-circle-xmark"></i>
                  <span>لا توجد صلاحيات مطابقة لكلمة البحث الحالية.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showRoleModal = false">إلغاء</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="roleForm.invalid || loading">
              {{ loading ? 'جاري الحفظ...' : (isEditRoleMode ? 'تحديث الدور والصلاحيات' : 'إنشاء الدور') }}
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
    .module-header h2 { font-size: 1.35rem; font-weight: 800; color: #fff; letter-spacing: -0.3px; display: flex; align-items: center; gap: 10px; }
    .subtitle { color: var(--text-2); font-size: 0.85rem; margin-top: 4px; }
    .header-actions { display: flex; gap: 10px; align-items: center; }

    /* Tabs Bar */
    .tabs-nav-bar { display: flex; gap: 8px; border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-bottom: 20px; }
    .tab-btn { background: rgba(255,255,255,0.03); border: 1px solid var(--border); color: var(--text-2); padding: 10px 18px; border-radius: 8px; font-size: 0.88rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s; font-family: inherit; }
    .tab-btn:hover { background: rgba(255,255,255,0.07); color: #fff; }
    .tab-btn.active { background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(124,58,237,0.25)); border-color: var(--violet); color: #fff; box-shadow: 0 4px 12px rgba(99,102,241,0.2); }
    .tab-badge { background: var(--violet); color: #fff; font-size: 0.72rem; padding: 1px 7px; border-radius: 8px; font-weight: 800; }

    /* Cards & Grid */
    .counter-badge { background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); color: var(--violet-light); padding: 4px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; }
    .roles-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 18px; margin-bottom: 24px; }
    .role-card { background: var(--bg-card); border: 1px solid var(--border); padding: 22px; border-radius: var(--r-lg); display: flex; flex-direction: column; gap: 12px; transition: all 0.25s var(--ease); position: relative; overflow: hidden; }
    .role-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--violet), var(--violet-light)); border-radius: var(--r-lg) var(--r-lg) 0 0; }
    .role-card:hover { border-color: var(--border-v); box-shadow: var(--shadow-sm); }
    .card-header { display: flex; justify-content: space-between; align-items: center; }
    .card-header h3 { color: #fff; font-size: 1rem; font-weight: 700; display: flex; align-items: center; gap: 8px; }
    .slug-badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--text-2); padding: 2px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 600; font-family: monospace; }
    .desc { color: var(--text-2); font-size: 0.84rem; line-height: 1.5; }
    .permissions-list h4 { font-size: 0.68rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .perm-chips { display: flex; gap: 5px; flex-wrap: wrap; }
    .perm-chip { background: var(--violet-soft); color: var(--violet-light); border: 1px solid rgba(124,58,237,0.2); padding: 3px 9px; border-radius: 8px; font-size: 0.68rem; font-weight: 600; }

    /* Tables */
    .section-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 24px; }
    .crm-table { width: 100%; border-collapse: separate; border-spacing: 0; text-align: right; direction: rtl; }
    .crm-table th { text-align: right; padding: 14px 16px; border-bottom: 1px solid rgba(99, 102, 241, 0.18); color: var(--violet-light); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(99, 102, 241, 0.05); white-space: nowrap; }
    .crm-table td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.86rem; color: var(--text); vertical-align: middle; }
    .crm-table tr:hover td { background: rgba(255,255,255,0.015); }
    .user-on-hold td { opacity: 0.65; background: rgba(245, 158, 11, 0.02); }

    .client-code-badge { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.25); padding: 3px 8px; border-radius: 6px; font-weight: 800; font-family: monospace; font-size: 0.78rem; }
    .user-avatar-mini { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, var(--violet), #8b5cf6); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.82rem; }
    .dept-badge { background: rgba(255,255,255,0.05); border: 1px solid var(--border); padding: 3px 8px; border-radius: 6px; font-size: 0.76rem; }

    .user-roles-list { display: flex; gap: 4px; flex-wrap: wrap; align-items: center; }
    .badge-role { background: rgba(99,102,241,0.18); color: var(--violet-light); border: 1px solid rgba(99,102,241,0.3); padding: 2px 8px; border-radius: 8px; font-size: 0.72rem; font-weight: 700; }
    .badge-subrole { background: rgba(255,255,255,0.08); color: #e2e8f0; border: 1px solid var(--border); padding: 2px 7px; border-radius: 8px; font-size: 0.68rem; }

    .status-badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; }
    .status-active { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.25); }
    .status-hold { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.35); }

    .action-buttons-group { display: flex; gap: 6px; justify-content: center; align-items: center; }
    .btn-icon-action { width: 32px; height: 32px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; border: none; font-size: 0.84rem; }
    .btn-hold-inactive { background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    .btn-hold-inactive:hover { background: rgba(245, 158, 11, 0.25); color: #fff; }
    .btn-hold-active { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .btn-hold-active:hover { background: rgba(16, 185, 129, 0.3); color: #fff; }
    .btn-edit { background: rgba(99, 102, 241, 0.12); color: #a5b4fc; border: 1px solid rgba(99, 102, 241, 0.25); }
    .btn-edit:hover { background: rgba(99, 102, 241, 0.25); color: #fff; }
    .btn-delete { background: rgba(225, 29, 72, 0.1); color: #fda4af; border: 1px solid rgba(225, 29, 72, 0.25); }
    .btn-delete:hover { background: rgba(225, 29, 72, 0.3); color: #fff; }

    .btn-role-mini { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--text-2); width: 26px; height: 26px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; transition: 0.2s; }
    .btn-role-mini:hover { background: var(--violet); color: #fff; }
    .btn-role-mini.danger:hover { background: #e11d48; color: #fff; }

    /* Forms */
    .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    @media (max-width: 600px) { .form-row-2 { grid-template-columns: 1fr; } }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.72rem; font-weight: 700; color: var(--text-2); text-transform: uppercase; letter-spacing: 0.5px; }
    .form-group input, .custom-select-input { width: 100%; padding: 10px 12px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--r); color: var(--text); outline: none; font-family: inherit; font-size: 0.88rem; transition: all 0.2s; box-sizing: border-box; }
    .custom-select-input option { background: #121224; color: var(--text); }
    .required { color: var(--rose-light); }

    /* Role Checkboxes Matrix */
    .roles-checklist-container { display: flex; flex-direction: column; gap: 8px; max-height: 180px; overflow-y: auto; padding: 8px; background: rgba(0,0,0,0.2); border: 1px solid var(--border); border-radius: 8px; }
    .role-checkbox-card { background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 6px; padding: 8px 12px; transition: all 0.2s; }
    .role-checkbox-card.selected { background: rgba(99,102,241,0.12); border-color: var(--violet); }
    .checkbox-label { display: flex; align-items: flex-start; gap: 10px; cursor: pointer; user-select: none; }
    .checkbox-label input[type="checkbox"] { width: 16px; height: 16px; margin-top: 3px; accent-color: var(--violet); cursor: pointer; }
    .checkbox-text { flex: 1; }
    .role-title { display: flex; align-items: center; justify-content: space-between; font-weight: 700; font-size: 0.84rem; color: var(--text); }
    .slug-tag { font-family: monospace; font-size: 0.68rem; color: var(--text-3); background: rgba(255,255,255,0.05); padding: 1px 6px; border-radius: 4px; }
    .role-sub { color: var(--text-3); font-size: 0.72rem; margin-top: 2px; }

    /* Enhanced Permissions Matrix Styling */
    .perm-section-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 8px; }
    .perm-counter-badge { background: rgba(99, 102, 241, 0.18); color: #a5b4fc; border: 1px solid rgba(99, 102, 241, 0.3); font-size: 0.72rem; padding: 2px 8px; border-radius: 8px; font-weight: 700; }
    .perm-global-actions { display: flex; gap: 8px; }
    .btn-perm-action { background: rgba(99, 102, 241, 0.12); color: #c7d2fe; border: 1px solid rgba(99, 102, 241, 0.25); border-radius: 6px; padding: 4px 10px; font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 5px; }
    .btn-perm-action:hover { background: rgba(99, 102, 241, 0.28); color: #fff; }
    .btn-perm-action.secondary { background: rgba(255, 255, 255, 0.05); color: var(--text-2); border-color: var(--border); }
    .btn-perm-action.secondary:hover { background: rgba(255, 255, 255, 0.12); color: #fff; }

    .perm-search-box { position: relative; margin-bottom: 10px; }
    .perm-search-box i { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--text-3); font-size: 0.8rem; pointer-events: none; }
    .perm-search-box input { width: 100%; padding: 8px 34px 8px 12px; background: rgba(0, 0, 0, 0.25); border: 1px solid var(--border); border-radius: 8px; color: var(--text); font-size: 0.82rem; outline: none; transition: 0.2s; box-sizing: border-box; }
    .perm-search-box input:focus { border-color: var(--violet); background: rgba(0,0,0,0.4); }

    .permissions-modules-container { display: flex; flex-direction: column; gap: 12px; max-height: 380px; overflow-y: auto; padding: 10px; background: rgba(0,0,0,0.22); border: 1px solid var(--border); border-radius: 8px; }
    .perm-module-block { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; overflow: hidden; }
    .perm-module-header { display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.05); }
    .module-title { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 800; color: var(--text); }
    .module-title i { color: var(--violet-light); font-size: 0.85rem; }
    .module-count { font-size: 0.72rem; color: var(--text-3); font-weight: normal; }
    .btn-toggle-group { background: transparent; border: none; color: var(--violet-light); font-size: 0.72rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; transition: 0.2s; }
    .btn-toggle-group:hover { color: #fff; text-decoration: underline; }

    .permissions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 10px; }
    @media (max-width: 650px) { .permissions-grid { grid-template-columns: 1fr; } }
    .perm-checkbox-item { background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 6px; padding: 8px 10px; display: flex; align-items: flex-start; gap: 8px; cursor: pointer; transition: all 0.2s; user-select: none; }
    .perm-checkbox-item:hover { background: rgba(255,255,255,0.04); border-color: rgba(99,102,241,0.3); }
    .perm-checkbox-item.checked { background: rgba(99,102,241,0.12); border-color: var(--violet); }
    .perm-checkbox-item input[type="checkbox"] { width: 15px; height: 15px; margin-top: 2px; accent-color: var(--violet); cursor: pointer; flex-shrink: 0; }
    .perm-details { flex: 1; display: flex; flex-direction: column; gap: 2px; }
    .perm-name-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
    .perm-name { font-size: 0.8rem; font-weight: 700; color: var(--text); line-height: 1.3; }
    .perm-slug { font-family: monospace; font-size: 0.64rem; color: var(--text-3); background: rgba(0,0,0,0.3); padding: 1px 5px; border-radius: 4px; }
    .perm-desc { font-size: 0.7rem; color: var(--text-3); line-height: 1.25; }

    .empty-perms-alert { padding: 24px; text-align: center; color: var(--text-3); font-size: 0.82rem; display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .empty-perms-alert i { font-size: 1.5rem; color: var(--text-3); }

    .dialog-footer-actions { display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border); }
    .btn-dialog-cancel { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: var(--text-2); padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.86rem; cursor: pointer; transition: all 0.2s; font-family: inherit; }
    .btn-dialog-cancel:hover { background: rgba(255, 255, 255, 0.1); color: var(--text); }
    .btn-dialog-submit { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); border: none; color: #ffffff; padding: 9px 22px; border-radius: 8px; font-weight: 700; font-size: 0.86rem; cursor: pointer; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35); transition: all 0.2s; font-family: inherit; }
    .btn-dialog-submit:hover:not(:disabled) { box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5); transform: translateY(-1px); }
    .btn-dialog-submit:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

    /* Light Theme Specific Overrides */
    :host-context(body.light-theme) .crm-table th { background: #f8fafc !important; color: #475569 !important; border-bottom-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .crm-table td { color: #0f172a !important; border-bottom-color: #f1f5f9 !important; }
    :host-context(body.light-theme) .crm-table tr:hover td { background: #f8fafc !important; }
    :host-context(body.light-theme) .role-checkbox-card { background: #ffffff !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .roles-checklist-container { background: #f8fafc !important; border-color: #cbd5e1 !important; }
    :host-context(body.light-theme) .permissions-modules-container { background: #f8fafc !important; border-color: #cbd5e1 !important; }
    :host-context(body.light-theme) .perm-module-block { background: #ffffff !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .perm-module-header { background: #f1f5f9 !important; border-bottom-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .perm-checkbox-item { background: #ffffff !important; border-color: #e2e8f0 !important; }
    :host-context(body.light-theme) .perm-checkbox-item.checked { background: rgba(99, 102, 241, 0.08) !important; border-color: #6366f1 !important; }
    :host-context(body.light-theme) .perm-search-box input { background: #ffffff !important; border-color: #cbd5e1 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .form-group input, :host-context(body.light-theme) .custom-select-input { background: #ffffff !important; border-color: #cbd5e1 !important; color: #0f172a !important; }
    :host-context(body.light-theme) .role-title, :host-context(body.light-theme) .module-title, :host-context(body.light-theme) .perm-name { color: #0f172a !important; }
    :host-context(body.light-theme) .btn-dialog-cancel { background: #f1f5f9 !important; border-color: #cbd5e1 !important; color: #334155 !important; }
  `]
})
export class RolesManagementComponent implements OnInit {
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);

  activeTab: 'staff' | 'clients' | 'roles' = 'staff';

  roles: any[] = [];
  permissions: any[] = [];
  users: any[] = [];
  departments: any[] = [];
  currentUser: any = null;

  showUserModal = false;
  isEditMode = false;
  editingUserId: number | null = null;
  selectedRoleIds: number[] = [];

  showRoleModal = false;
  isEditRoleMode = false;
  editingRoleId: number | null = null;
  selectedPermissionIds: number[] = [];
  permissionGroups: { key: string; label: string; icon: string; permissions: any[] }[] = [];
  permSearchQuery = '';

  get filteredPermissionGroups(): { key: string; label: string; icon: string; permissions: any[] }[] {
    if (!this.permSearchQuery || !this.permSearchQuery.trim()) {
      return this.permissionGroups;
    }
    const q = this.permSearchQuery.trim().toLowerCase();
    return this.permissionGroups
      .map(grp => {
        const matchingPerms = grp.permissions.filter((p: any) =>
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.slug && p.slug.toLowerCase().includes(q)) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          grp.label.toLowerCase().includes(q)
        );
        return { ...grp, permissions: matchingPerms };
      })
      .filter(grp => grp.permissions.length > 0);
  }

  loading = false;
  userForm!: FormGroup;
  roleForm!: FormGroup;

  searchQuery = '';
  currentPage = 1;
  pageSize = 10;
  totalRecords = 0;

  ngOnInit(): void {
    try {
      const uStr = localStorage.getItem('mediaglow_user');
      if (uStr) this.currentUser = JSON.parse(uStr);
    } catch(e){}
    this.initForms();
    this.loadInitialData();
  }

  initForms(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      phone: [''],
      department_id: [null],
      is_hold: [false]
    });

    this.roleForm = this.fb.group({
      name: ['', Validators.required],
      slug: [''],
      description: ['']
    });
  }

  setTab(tab: 'staff' | 'clients' | 'roles'): void {
    this.activeTab = tab;
    this.currentPage = 1;
    this.searchQuery = '';
    if (tab === 'roles') {
      this.loadRolesData();
    } else {
      this.loadUsers();
    }
  }

  loadInitialData(): void {
    this.loadRolesData();
    this.apiService.getDepartments().subscribe(depts => {
      this.departments = depts || [];
    });
    this.loadUsers();
  }

  loadRolesData(): void {
    this.apiService.getRoles().subscribe(res => {
      let rList = res.roles || [];
      if (!this.isSuperAdmin()) {
        rList = rList.filter((r: any) => r.slug !== 'super_admin' && r.name !== 'super_admin');
      }
      this.roles = rList;
      this.permissions = res.permissions || [];
      this.groupPermissions();
    });
  }

  loadUsers(): void {
    const params: any = {
      page: this.currentPage,
      per_page: this.pageSize,
      search: this.searchQuery
    };

    if (this.activeTab === 'staff') {
      params.type = 'staff';
    } else if (this.activeTab === 'clients') {
      params.type = 'client';
    }

    this.apiService.getUsers(params).subscribe(res => {
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
      this.users = raw;
    });
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.loadUsers();
  }

  onPerPageChange(): void {
    this.currentPage = 1;
    this.loadUsers();
  }

  changePage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    this.loadUsers();
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize) || 1;
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  isSuperAdmin(): boolean {
    return this.currentUser?.role === 'super_admin';
  }

  isSystemRole(slug: string): boolean {
    return ['super_admin', 'admin', 'department_manager', 'employee', 'client', 'account_manager'].includes(slug);
  }

  getRoleLabel(role: string): string {
    switch (role) {
      case 'super_admin': return 'سوبر أدمن';
      case 'admin': return 'مدير نظام';
      case 'department_manager': return 'مدير قسم';
      case 'employee': return 'موظف';
      case 'client': return 'عميل';
      case 'account_manager': return 'مدير حسابات';
      default: return role || 'موظف';
    }
  }

  // --- HOLD / UNHOLD TOGGLE ---
  toggleHold(user: any): void {
    const actionName = user.is_hold ? 'إلغاء التعليق وتفعيل' : 'تعليق (Hold)';
    this.confirmService.confirm({
      title: `${actionName} حساب: ${user.name}`,
      message: user.is_hold
        ? `هل تريد إعادة تفعيل حساب "${user.name}" وإتاحته مجدداً للعمل وتعيين المهام؟`
        : `هل أنت متأكد من تعليق حساب "${user.name}" مؤقتاً؟ لن يتمكن من تسجيل الدخول وسيتم استثناؤه من قوائم التعيين.`,
      confirmText: user.is_hold ? 'نعم، قم بالتفعيل' : 'نعم، علّق الحساب (Hold)',
      cancelText: 'إلغاء',
      type: user.is_hold ? 'info' : 'warning',
      icon: user.is_hold ? 'fa-solid fa-play' : 'fa-solid fa-pause',
      accept: () => {
        this.apiService.toggleUserHold(user.id).subscribe({
          next: (res) => {
            user.is_hold = res.is_hold;
            this.toastService.success(res.message || 'تم تحديث حالة الحساب بنجاح');
          },
          error: (err) => {
            this.toastService.error(err.error?.message || 'فشل تغيير حالة الحساب');
          }
        });
      }
    });
  }

  // --- USER MODAL ACTIONS ---
  openAddUserModal(): void {
    this.isEditMode = false;
    this.editingUserId = null;
    this.selectedRoleIds = [];

    // Pre-select role matching tab
    if (this.activeTab === 'clients') {
      const clientRole = this.roles.find(r => r.slug === 'client');
      if (clientRole) this.selectedRoleIds.push(clientRole.id);
    } else {
      const empRole = this.roles.find(r => r.slug === 'employee');
      if (empRole) this.selectedRoleIds.push(empRole.id);
    }

    this.userForm.reset({
      name: '',
      email: '',
      password: 'password123',
      phone: '',
      department_id: null,
      is_hold: false
    });
    this.userForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    this.userForm.get('password')?.updateValueAndValidity();
    this.showUserModal = true;
  }

  openEditUserModal(user: any): void {
    this.isEditMode = true;
    this.editingUserId = user.id;

    // Collect role IDs from pivot relationship or primary role
    this.selectedRoleIds = [];
    if (user.roles && user.roles.length > 0) {
      this.selectedRoleIds = user.roles.map((r: any) => r.id);
    } else if (user.role) {
      const found = this.roles.find(r => r.slug === user.role);
      if (found) this.selectedRoleIds.push(found.id);
    }

    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      password: '',
      phone: user.phone || '',
      department_id: user.department_id || null,
      is_hold: !!user.is_hold
    });

    // Password is optional in edit mode
    this.userForm.get('password')?.clearValidators();
    this.userForm.get('password')?.updateValueAndValidity();
    this.showUserModal = true;
  }

  isRoleSelected(roleId: number): boolean {
    return this.selectedRoleIds.includes(roleId);
  }

  toggleRoleSelection(roleId: number): void {
    const idx = this.selectedRoleIds.indexOf(roleId);
    if (idx > -1) {
      this.selectedRoleIds.splice(idx, 1);
    } else {
      this.selectedRoleIds.push(roleId);
    }
  }

  saveUser(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.toastService.warning('يرجى التأكد من ملء الحقول المطلوبة');
      return;
    }

    if (this.selectedRoleIds.length === 0) {
      this.toastService.warning('يرجى تحديد مستوى صلاحية واحد على الأقل للمستخدم');
      return;
    }

    this.loading = true;
    const formVal = this.userForm.value;

    const payload: any = {
      name: formVal.name,
      email: formVal.email,
      phone: formVal.phone,
      department_id: formVal.department_id,
      is_hold: formVal.is_hold,
      role_ids: this.selectedRoleIds
    };

    if (formVal.password) {
      payload.password = formVal.password;
    }

    // Set primary role based on first selected role
    const primaryRoleObj = this.roles.find(r => r.id === this.selectedRoleIds[0]);
    if (primaryRoleObj) {
      payload.role = primaryRoleObj.slug;
    }

    if (this.isEditMode && this.editingUserId) {
      this.apiService.updateUser(this.editingUserId, payload).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.success('تم تحديث بيانات المستخدم وصلاحياته بنجاح');
          this.showUserModal = false;
          this.loadUsers();
        },
        error: (err) => {
          this.loading = false;
          this.toastService.error(err.error?.message || 'فشل تحديث بيانات المستخدم');
        }
      });
    } else {
      this.apiService.createUser(payload).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.success('تم إضافة المستخدم الجديد بنجاح');
          this.showUserModal = false;
          this.loadUsers();
        },
        error: (err) => {
          this.loading = false;
          this.toastService.error(err.error?.message || 'فشل إضافة المستخدم');
        }
      });
    }
  }

  confirmDeleteUser(user: any): void {
    if (user.id === this.currentUser?.id) {
      this.toastService.error('لا يمكنك حذف حسابك الشخصي الحالي');
      return;
    }
    this.confirmService.confirm({
      title: 'حذف حساب مستخدم نهائياً',
      message: `هل أنت متأكد من رغبتك في حذف حساب "${user.name}" نهائياً من النظام؟`,
      confirmText: 'نعم، حذف نهائي',
      cancelText: 'إلغاء وتراجع',
      type: 'danger',
      icon: 'fa-solid fa-user-xmark',
      accept: () => {
        this.apiService.deleteUser(user.id).subscribe({
          next: () => {
            this.toastService.success(`تم حذف المستخدم "${user.name}" بنجاح`);
            this.loadUsers();
          },
          error: (err) => {
            this.toastService.error(err.error?.message || 'تعذر حذف المستخدم');
          }
        });
      }
    });
  }

  // --- ROLE CRUD ACTIONS ---
  openAddRoleModal(): void {
    this.isEditRoleMode = false;
    this.editingRoleId = null;
    this.selectedPermissionIds = [];
    this.permSearchQuery = '';
    this.roleForm.reset({
      name: '',
      slug: '',
      description: ''
    });
    this.roleForm.get('slug')?.setValidators([Validators.required]);
    this.roleForm.get('slug')?.updateValueAndValidity();
    this.showRoleModal = true;
  }

  openEditRoleModal(role: any): void {
    this.isEditRoleMode = true;
    this.editingRoleId = role.id;
    this.selectedPermissionIds = (role.permissions || []).map((p: any) => p.id);
    this.permSearchQuery = '';
    this.roleForm.patchValue({
      name: role.name,
      slug: role.slug,
      description: role.description || ''
    });
    this.roleForm.get('slug')?.clearValidators();
    this.roleForm.get('slug')?.updateValueAndValidity();
    this.showRoleModal = true;
  }

  groupPermissions(): void {
    const moduleMap: Record<string, { label: string; icon: string }> = {
      deals: { label: 'الصفقات والعقود', icon: 'fa-solid fa-handshake' },
      tasks: { label: 'إدارة المهام والمتابعة', icon: 'fa-solid fa-list-check' },
      clients: { label: 'إدارة العملاء', icon: 'fa-solid fa-user-tie' },
      staff: { label: 'فريق العمل والموظفون', icon: 'fa-solid fa-users-gear' },
      roles: { label: 'الأدوار ومصفوفة الصلاحيات', icon: 'fa-solid fa-shield-halved' },
      departments: { label: 'الأقسام والتخصصات', icon: 'fa-solid fa-layer-group' },
      finance: { label: 'المالية والحسابات العامة', icon: 'fa-solid fa-file-invoice-dollar' },
      internal_projects: { label: 'المشاريع الداخلية', icon: 'fa-solid fa-folder-tree' },
      cms: { label: 'إدارة المحتوى وسابقة الأعمال', icon: 'fa-solid fa-globe' },
      system: { label: 'النظام والإشعارات', icon: 'fa-solid fa-sliders' },
      general: { label: 'صلاحيات عامة', icon: 'fa-solid fa-gear' },
    };

    const groups: Record<string, any[]> = {};
    for (const p of this.permissions) {
      const mod = p.module || 'general';
      if (!groups[mod]) {
        groups[mod] = [];
      }
      groups[mod].push(p);
    }

    this.permissionGroups = Object.keys(groups).map(key => ({
      key,
      label: moduleMap[key]?.label || key,
      icon: moduleMap[key]?.icon || 'fa-solid fa-circle-check',
      permissions: groups[key]
    }));
  }

  selectAllPermissions(): void {
    this.selectedPermissionIds = this.permissions.map(p => p.id);
  }

  deselectAllPermissions(): void {
    this.selectedPermissionIds = [];
  }

  getSelectedCountInGroup(grp: any): number {
    return grp.permissions.filter((p: any) => this.selectedPermissionIds.includes(p.id)).length;
  }

  isGroupAllSelected(grp: any): boolean {
    return grp.permissions.length > 0 && grp.permissions.every((p: any) => this.selectedPermissionIds.includes(p.id));
  }

  toggleGroupPermissions(grp: any): void {
    const allSelected = this.isGroupAllSelected(grp);
    const grpIds = grp.permissions.map((p: any) => p.id);
    if (allSelected) {
      this.selectedPermissionIds = this.selectedPermissionIds.filter(id => !grpIds.includes(id));
    } else {
      for (const id of grpIds) {
        if (!this.selectedPermissionIds.includes(id)) {
          this.selectedPermissionIds.push(id);
        }
      }
    }
  }

  isPermSelected(permId: number): boolean {
    return this.selectedPermissionIds.includes(permId);
  }

  togglePermSelection(permId: number): void {
    const idx = this.selectedPermissionIds.indexOf(permId);
    if (idx > -1) {
      this.selectedPermissionIds.splice(idx, 1);
    } else {
      this.selectedPermissionIds.push(permId);
    }
  }

  saveRole(): void {
    if (this.roleForm.invalid) {
      this.roleForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    const formVal = this.roleForm.value;

    if (this.isEditRoleMode && this.editingRoleId) {
      this.apiService.updateRole(this.editingRoleId, {
        name: formVal.name,
        description: formVal.description,
        permissions: this.selectedPermissionIds
      }).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.success('تم تحديث الدور والصلاحيات بنجاح');
          this.showRoleModal = false;
          this.loadRolesData();
        },
        error: (err) => {
          this.loading = false;
          this.toastService.error(err.error?.message || 'فشل تحديث الدور');
        }
      });
    } else {
      this.apiService.createRole({
        name: formVal.name,
        slug: formVal.slug,
        description: formVal.description,
        permissions: this.selectedPermissionIds
      }).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.success('تم إنشاء الدور الجديد بنجاح');
          this.showRoleModal = false;
          this.loadRolesData();
        },
        error: (err) => {
          this.loading = false;
          this.toastService.error(err.error?.message || 'فشل إنشاء الدور');
        }
      });
    }
  }

  confirmDeleteRole(role: any): void {
    this.confirmService.confirm({
      title: `حذف الدور: ${role.name}`,
      message: `هل أنت متأكد من رغبتك في حذف هذا الدور نهائياً؟`,
      confirmText: 'نعم، حذف الدور',
      cancelText: 'إلغاء',
      type: 'danger',
      icon: 'fa-solid fa-trash',
      accept: () => {
        this.apiService.deleteRole(role.id).subscribe({
          next: () => {
            this.toastService.success('تم حذف الدور بنجاح');
            this.loadRolesData();
          },
          error: (err) => {
            this.toastService.error(err.error?.message || 'تعذر حذف الدور');
          }
        });
      }
    });
  }
}
