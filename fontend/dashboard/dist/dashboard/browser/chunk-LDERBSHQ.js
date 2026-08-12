import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-6TEPOG2V.js";
import {
  ApiService
} from "./chunk-VFRQX7SG.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CK3LQYPJ.js";

// src/app/components/roles/roles-management.component.ts
function RolesManagementComponent_div_9_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perm_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", perm_r1.name, " ");
  }
}
function RolesManagementComponent_div_9_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "No permissions assigned");
    \u0275\u0275elementEnd();
  }
}
function RolesManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h3");
    \u0275\u0275element(3, "i", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "h4");
    \u0275\u0275text(11, "Granted Permissions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18);
    \u0275\u0275template(13, RolesManagementComponent_div_9_span_13_Template, 2, 1, "span", 19)(14, RolesManagementComponent_div_9_span_14_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", role_r2.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r2.slug);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r2.description);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", role_r2.permissions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !role_r2.permissions || role_r2.permissions.length === 0);
  }
}
function RolesManagementComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "select", 26);
    \u0275\u0275listener("ngModelChange", function RolesManagementComponent_tr_29_Template_select_ngModelChange_11_listener($event) {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onUserRoleChange(u_r4, $event));
    });
    \u0275\u0275elementStart(12, "option", 27);
    \u0275\u0275text(13, "Super Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 28);
    \u0275\u0275text(15, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 29);
    \u0275\u0275text(17, "Department Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 30);
    \u0275\u0275text(19, "Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 31);
    \u0275\u0275text(21, "Client");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((u_r4.department == null ? null : u_r4.department.name) || "General");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", u_r4.role);
  }
}
var RolesManagementComponent = class _RolesManagementComponent {
  apiService = inject(ApiService);
  roles = [];
  permissions = [];
  users = [];
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.apiService.getRoles().subscribe((res) => {
      this.roles = res.roles || [];
      this.permissions = res.permissions || [];
    });
    this.apiService.getUsers().subscribe((res) => {
      this.users = res.data || [];
    });
  }
  onUserRoleChange(user, newRole) {
    this.apiService.assignUserRole(user.id, newRole).subscribe(() => {
      user.role = newRole;
    });
  }
  static \u0275fac = function RolesManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesManagementComponent, selectors: [["app-roles-management"]], decls: 30, vars: 2, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-shield-halved", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "roles-grid", "margin-top"], ["class", "role-card glass-panel", 4, "ngFor", "ngForOf"], [1, "section-card", "glass-panel", "margin-top"], [2, "font-size", "1rem", "font-weight", "700", "color", "#fff", "display", "flex", "align-items", "center", "gap", "8px"], [1, "fa-solid", "fa-users-gear", 2, "color", "var(--violet-light)"], [1, "table-responsive", 2, "margin-top", "14px"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [1, "role-card", "glass-panel"], [1, "card-header"], [1, "fa-solid", "fa-shield-halved", 2, "color", "var(--violet-light)", "font-size", "0.9rem"], [1, "slug-badge"], [1, "desc"], [1, "permissions-list"], [1, "perm-chips"], ["class", "perm-chip", 4, "ngFor", "ngForOf"], ["style", "color:var(--text-3); font-size:0.75rem;", 4, "ngIf"], [1, "perm-chip"], [2, "color", "var(--text-3)", "font-size", "0.75rem"], [2, "font-weight", "700", "color", "#fff"], [2, "color", "var(--text-2)"], [1, "badge", "badge-v"], [1, "role-select", 3, "ngModelChange", "ngModel"], ["value", "super_admin"], ["value", "admin"], ["value", "department_manager"], ["value", "employee"], ["value", "client"]], template: function RolesManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Roles & Permissions (RBAC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Access control matrix, role definition & user role assignment");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275template(9, RolesManagementComponent_div_9_Template, 15, 5, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "h3", 7);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275text(13, " User Role Assignments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "table", 10)(16, "thead")(17, "tr")(18, "th");
      \u0275\u0275text(19, "User Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Current Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Assign Role");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "tbody");
      \u0275\u0275template(29, RolesManagementComponent_tr_29_Template, 22, 5, "tr", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance(20);
      \u0275\u0275property("ngForOf", ctx.users);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.role-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 22px;\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: all 0.25s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.role-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet),\n      var(--violet-light));\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n}\n.role-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.slug-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  font-family: monospace;\n}\n.desc[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.permissions-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.perm-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.perm-chip[_ngcontent-%COMP%] {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  direction: ltr;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.role-select[_ngcontent-%COMP%] {\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  color: #fff;\n  padding: 6px 10px;\n  border-radius: var(--r);\n  font-size: 0.82rem;\n  outline: none;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.role-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.role-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #12121e;\n  color: #fff;\n}\n/*# sourceMappingURL=roles-management.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesManagementComponent, [{
    type: Component,
    args: [{ selector: "app-roles-management", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-shield-halved" style="color:var(--violet-light);"></i> Roles &amp; Permissions (RBAC)</h2>
          <p class="subtitle">Access control matrix, role definition &amp; user role assignment</p>
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
            <h4>Granted Permissions:</h4>
            <div class="perm-chips">
              <span *ngFor="let perm of role.permissions" class="perm-chip">
                {{ perm.name }}
              </span>
              <span *ngIf="!role.permissions || role.permissions.length === 0" style="color:var(--text-3); font-size:0.75rem;">No permissions assigned</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Users Role Assignment Table -->
      <div class="section-card glass-panel margin-top">
        <h3 style="font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-users-gear" style="color:var(--violet-light);"></i> User Role Assignments</h3>
        <div class="table-responsive" style="margin-top:14px;">
          <table class="crm-table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email Address</th>
                <th>Current Role</th>
                <th>Department</th>
                <th>Assign Role</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of users">
                <td style="font-weight:700; color:#fff;">{{ u.name }}</td>
                <td style="color:var(--text-2);">{{ u.email }}</td>
                <td><span class="badge badge-v">{{ u.role }}</span></td>
                <td style="color:var(--text-2);">{{ u.department?.name || 'General' }}</td>
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
    </div>
  `, styles: ['/* angular:styles/component:css;b89b27472c9c5f09bacc237531fcd3f98d61e823ce787a04d9317a15f96c760a;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/roles/roles-management.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.roles-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.role-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 22px;\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: all 0.25s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.role-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet),\n      var(--violet-light));\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n}\n.role-card:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-header h3 {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.slug-badge {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  font-family: monospace;\n}\n.desc {\n  color: var(--text-2);\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.permissions-list h4 {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.perm-chips {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.perm-chip {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n}\n.section-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.margin-top {\n  margin-top: 20px;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  direction: ltr;\n}\n.crm-table th {\n  text-align: left;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.role-select {\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  color: #fff;\n  padding: 6px 10px;\n  border-radius: var(--r);\n  font-size: 0.82rem;\n  outline: none;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.role-select:focus {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.role-select option {\n  background: #12121e;\n  color: #fff;\n}\n/*# sourceMappingURL=roles-management.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesManagementComponent, { className: "RolesManagementComponent", filePath: "src/app/components/roles/roles-management.component.ts", lineNumber: 105 });
})();
export {
  RolesManagementComponent
};
//# sourceMappingURL=chunk-LDERBSHQ.js.map
