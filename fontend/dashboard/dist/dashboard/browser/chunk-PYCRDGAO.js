import {
  Dropdown,
  DropdownModule
} from "./chunk-3J6XHX2M.js";
import "./chunk-SZOHPGWJ.js";
import "./chunk-MNYDLCPG.js";
import "./chunk-7QQ4EFLW.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-DJW5WREC.js";
import {
  ApiService
} from "./chunk-DCUGWKDF.js";
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
  ɵɵpureFunction0,
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TC7O2TE3.js";

// src/app/components/roles/roles-management.component.ts
var _c0 = () => ({ width: "220px" });
var _c1 = () => ({ label: "\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646 (Super Admin)", value: "super_admin" });
var _c2 = () => ({ label: "\u0645\u062F\u064A\u0631 \u0646\u0638\u0627\u0645 (Admin)", value: "admin" });
var _c3 = () => ({ label: "\u0645\u062F\u064A\u0631 \u0642\u0633\u0645 (Manager)", value: "department_manager" });
var _c4 = () => ({ label: "\u0645\u0648\u0638\u0641 (Employee)", value: "employee" });
var _c5 = () => ({ label: "\u0639\u0645\u064A\u0644 (Client)", value: "client" });
var _c6 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function RolesManagementComponent_div_9_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
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
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0645\u0633\u0646\u062F\u0629");
    \u0275\u0275elementEnd();
  }
}
function RolesManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "h3");
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "h4");
    \u0275\u0275text(11, "\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0645\u0645\u0646\u0648\u062D\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19);
    \u0275\u0275template(13, RolesManagementComponent_div_9_span_13_Template, 2, 1, "span", 20)(14, RolesManagementComponent_div_9_span_14_Template, 2, 0, "span", 21);
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
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "p-dropdown", 27);
    \u0275\u0275listener("ngModelChange", function RolesManagementComponent_tr_29_Template_p_dropdown_ngModelChange_11_listener($event) {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onUserRoleChange(u_r4, $event));
    });
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275textInterpolate((u_r4.department == null ? null : u_r4.department.name) || "\u0639\u0627\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275property("ngModel", u_r4.role)("appendTo", "body")("options", \u0275\u0275pureFunction5(15, _c6, \u0275\u0275pureFunction0(10, _c1), \u0275\u0275pureFunction0(11, _c2), \u0275\u0275pureFunction0(12, _c3), \u0275\u0275pureFunction0(13, _c4), \u0275\u0275pureFunction0(14, _c5)));
  }
}
function RolesManagementComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28)(2, "div", 29)(3, "div", 30);
    \u0275\u0275element(4, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33);
    \u0275\u0275text(8, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0645\u0633\u062C\u0644\u0648\u0646 \u0645\u062A\u0627\u062D\u0648\u0646 \u0644\u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0623\u062F\u0648\u0627\u0631.");
    \u0275\u0275elementEnd()()()();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesManagementComponent, selectors: [["app-roles-management"]], decls: 31, vars: 3, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-shield-halved", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "roles-grid", "margin-top"], ["class", "role-card glass-panel", 4, "ngFor", "ngForOf"], [1, "section-card", "glass-panel", "margin-top"], [2, "font-size", "1rem", "font-weight", "700", "color", "#fff", "display", "flex", "align-items", "center", "gap", "8px"], [1, "fa-solid", "fa-users-gear", 2, "color", "var(--violet-light)"], [1, "table-responsive", 2, "margin-top", "14px"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "role-card", "glass-panel"], [1, "card-header"], [1, "fa-solid", "fa-shield-halved", 2, "color", "var(--violet-light)", "font-size", "0.9rem"], [1, "slug-badge"], [1, "desc"], [1, "permissions-list"], [1, "perm-chips"], ["class", "perm-chip", 4, "ngFor", "ngForOf"], ["style", "color:var(--text-3); font-size:0.75rem;", 4, "ngIf"], [1, "perm-chip"], [2, "color", "var(--text-3)", "font-size", "0.75rem"], [2, "font-weight", "700", "color", "#fff"], [2, "color", "var(--text-2)"], [1, "badge", "badge-v", 2, "text-transform", "uppercase"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "ngModel", "appendTo", "options"], ["colspan", "5"], [1, "empty-state"], [1, "empty-state-icon"], [1, "fa-solid", "fa-user-slash"], [1, "empty-state-title"], [1, "empty-state-desc"]], template: function RolesManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A (RBAC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "\u0645\u0635\u0641\u0648\u0641\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u0648\u0635\u0648\u0644\u060C \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u062A\u0639\u064A\u064A\u0646 \u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275template(9, RolesManagementComponent_div_9_Template, 15, 5, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "h3", 7);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275text(13, " \u062A\u0639\u064A\u064A\u0646 \u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "table", 10)(16, "thead")(17, "tr")(18, "th");
      \u0275\u0275text(19, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "\u0627\u0644\u062F\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "\u0627\u0644\u0642\u0633\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062F\u0648\u0631");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "tbody");
      \u0275\u0275template(29, RolesManagementComponent_tr_29_Template, 12, 21, "tr", 11)(30, RolesManagementComponent_tr_30_Template, 9, 0, "tr", 12);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance(20);
      \u0275\u0275property("ngForOf", ctx.users);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.users.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, ReactiveFormsModule, DropdownModule, Dropdown], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.role-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 22px;\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: all 0.25s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.role-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet),\n      var(--violet-light));\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n}\n.role-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.slug-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  font-family: monospace;\n}\n.desc[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.permissions-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.perm-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.perm-chip[_ngcontent-%COMP%] {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.role-select[_ngcontent-%COMP%] {\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  color: #fff;\n  padding: 6px 10px;\n  border-radius: var(--r);\n  font-size: 0.82rem;\n  outline: none;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.role-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.role-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #12121e;\n  color: #fff;\n}\n/*# sourceMappingURL=roles-management.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesManagementComponent, [{
    type: Component,
    args: [{ selector: "app-roles-management", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownModule], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-shield-halved" style="color:var(--violet-light);"></i> \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A (RBAC)</h2>
          <p class="subtitle">\u0645\u0635\u0641\u0648\u0641\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u0648\u0635\u0648\u0644\u060C \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u062A\u0639\u064A\u064A\u0646 \u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621</p>
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
            <h4>\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0645\u0645\u0646\u0648\u062D\u0629:</h4>
            <div class="perm-chips">
              <span *ngFor="let perm of role.permissions" class="perm-chip">
                {{ perm.name }}
              </span>
              <span *ngIf="!role.permissions || role.permissions.length === 0" style="color:var(--text-3); font-size:0.75rem;">\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0645\u0633\u0646\u062F\u0629</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Users Role Assignment Table -->
      <div class="section-card glass-panel margin-top">
        <h3 style="font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-users-gear" style="color:var(--violet-light);"></i> \u062A\u0639\u064A\u064A\u0646 \u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646</h3>
        <div class="table-responsive" style="margin-top:14px;">
          <table class="crm-table">
            <thead>
              <tr>
                <th>\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645</th>
                <th>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</th>
                <th>\u0627\u0644\u062F\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A</th>
                <th>\u0627\u0644\u0642\u0633\u0645</th>
                <th>\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062F\u0648\u0631</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of users">
                <td style="font-weight:700; color:#fff;">{{ u.name }}</td>
                <td style="color:var(--text-2);">{{ u.email }}</td>
                <td><span class="badge badge-v" style="text-transform:uppercase;">{{ u.role }}</span></td>
                <td style="color:var(--text-2);">{{ u.department?.name || '\u0639\u0627\u0645' }}</td>
                <td>
                  <p-dropdown
                    [ngModel]="u.role"
                    (ngModelChange)="onUserRoleChange(u, $event)"
                    [appendTo]="'body'"
                    [options]="[
                      { label: '\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646 (Super Admin)', value: 'super_admin' },
                      { label: '\u0645\u062F\u064A\u0631 \u0646\u0638\u0627\u0645 (Admin)', value: 'admin' },
                      { label: '\u0645\u062F\u064A\u0631 \u0642\u0633\u0645 (Manager)', value: 'department_manager' },
                      { label: '\u0645\u0648\u0638\u0641 (Employee)', value: 'employee' },
                      { label: '\u0639\u0645\u064A\u0644 (Client)', value: 'client' }
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
                    <div class="empty-state-title">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646</div>
                    <div class="empty-state-desc">\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0645\u0633\u062C\u0644\u0648\u0646 \u0645\u062A\u0627\u062D\u0648\u0646 \u0644\u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0623\u062F\u0648\u0627\u0631.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;4d151647ab08b1d0b69c081c34b6acefd9a55decb154c5740bc6357dd24588b0;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/roles/roles-management.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.roles-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.role-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 22px;\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: all 0.25s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.role-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet),\n      var(--violet-light));\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n}\n.role-card:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-header h3 {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.slug-badge {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  font-family: monospace;\n}\n.desc {\n  color: var(--text-2);\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.permissions-list h4 {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.perm-chips {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.perm-chip {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n}\n.section-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.role-select {\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  color: #fff;\n  padding: 6px 10px;\n  border-radius: var(--r);\n  font-size: 0.82rem;\n  outline: none;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.role-select:focus {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.role-select option {\n  background: #12121e;\n  color: #fff;\n}\n/*# sourceMappingURL=roles-management.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesManagementComponent, { className: "RolesManagementComponent", filePath: "src/app/components/roles/roles-management.component.ts", lineNumber: 122 });
})();
export {
  RolesManagementComponent
};
//# sourceMappingURL=chunk-PYCRDGAO.js.map
