import {
  PrimePickerSelectComponent
} from "./chunk-PFLXRYTA.js";
import {
  ConfirmService
} from "./chunk-YURY4BWO.js";
import {
  ToastService
} from "./chunk-ERZASVQQ.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-432LYF6T.js";
import {
  Dialog,
  DialogModule
} from "./chunk-V2EJTHVQ.js";
import "./chunk-KTLTU4XR.js";
import {
  InputText,
  InputTextModule
} from "./chunk-4GHCQTEI.js";
import "./chunk-K6TDURUG.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-KWEQLBRN.js";
import {
  ApiService
} from "./chunk-HE5SAGTC.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZYG2ULWX.js";

// src/app/components/roles/roles-management.component.ts
var _c0 = () => ({ width: "92vw", maxWidth: "540px" });
var _c1 = () => ({ width: "200px" });
var _c2 = () => ({ label: "\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646 (Super Admin)", value: "super_admin" });
var _c3 = () => ({ label: "\u0645\u062F\u064A\u0631 \u0646\u0638\u0627\u0645 (Admin)", value: "admin" });
var _c4 = () => ({ label: "\u0645\u062F\u064A\u0631 \u0642\u0633\u0645 (Department Manager)", value: "department_manager" });
var _c5 = () => ({ label: "\u0645\u0648\u0638\u0641 (Employee)", value: "employee" });
var _c6 = () => ({ label: "\u0639\u0645\u064A\u0644 (Client)", value: "client" });
var _c7 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c8 = () => ({ width: "180px" });
function RolesManagementComponent_div_12_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perm_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", perm_r1.name, " ");
  }
}
function RolesManagementComponent_div_12_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0645\u0633\u0646\u062F\u0629");
    \u0275\u0275elementEnd();
  }
}
function RolesManagementComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h3");
    \u0275\u0275element(3, "i", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 41)(10, "h4");
    \u0275\u0275text(11, "\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0645\u0645\u0646\u0648\u062D\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 42);
    \u0275\u0275template(13, RolesManagementComponent_div_12_span_13_Template, 2, 1, "span", 43)(14, RolesManagementComponent_div_12_span_14_Template, 2, 0, "span", 44);
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
function RolesManagementComponent_tr_43_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275text(2, " \u0645\u062F\u064A\u0631 \u0642\u0633\u0645");
    \u0275\u0275elementEnd();
  }
}
function RolesManagementComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275template(3, RolesManagementComponent_tr_43_span_3_Template, 3, 0, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "p-dropdown", 51);
    \u0275\u0275listener("ngModelChange", function RolesManagementComponent_tr_43_Template_p_dropdown_ngModelChange_12_listener($event) {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onUserRoleChange(u_r4, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "p-dropdown", 52);
    \u0275\u0275listener("ngModelChange", function RolesManagementComponent_tr_43_Template_p_dropdown_ngModelChange_14_listener($event) {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onUserDeptChange(u_r4, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "button", 53);
    \u0275\u0275listener("click", function RolesManagementComponent_tr_43_Template_button_click_16_listener() {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.confirmDeleteUser(u_r4));
    });
    \u0275\u0275element(17, "i", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", u_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r4.role === "department_manager");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.getRoleLabel(u_r4.role));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((u_r4.department == null ? null : u_r4.department.name) || "\u0639\u0627\u0645 / \u0628\u062F\u0648\u0646 \u0642\u0633\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c1));
    \u0275\u0275property("ngModel", u_r4.role)("appendTo", "body")("options", \u0275\u0275pureFunction5(21, _c7, \u0275\u0275pureFunction0(16, _c2), \u0275\u0275pureFunction0(17, _c3), \u0275\u0275pureFunction0(18, _c4), \u0275\u0275pureFunction0(19, _c5), \u0275\u0275pureFunction0(20, _c6)));
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c8));
    \u0275\u0275property("ngModel", u_r4.department_id)("appendTo", "body")("options", ctx_r4.deptOptions);
  }
}
function RolesManagementComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57)(2, "div", 58)(3, "div", 59);
    \u0275\u0275element(4, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 61);
    \u0275\u0275text(6, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 62);
    \u0275\u0275text(8, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0645\u0633\u062C\u0644\u0648\u0646 \u0645\u062A\u0627\u062D\u0648\u0646 \u0644\u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0623\u062F\u0648\u0627\u0631.");
    \u0275\u0275elementEnd()()()();
  }
}
function RolesManagementComponent_div_45_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function RolesManagementComponent_div_45_button_22_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.changePage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r8 === ctx_r4.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r8, " ");
  }
}
function RolesManagementComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "div", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 66)(5, "span");
    \u0275\u0275text(6, "\u0639\u0631\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function RolesManagementComponent_div_45_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.pageSize, $event) || (ctx_r4.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RolesManagementComponent_div_45_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onPerPageChange());
    });
    \u0275\u0275elementStart(8, "option", 68);
    \u0275\u0275text(9, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 68);
    \u0275\u0275text(11, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 68);
    \u0275\u0275text(13, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 68);
    \u0275\u0275text(15, "50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\u0635\u0641\u0648\u0641");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 69)(19, "button", 70);
    \u0275\u0275listener("click", function RolesManagementComponent_div_45_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.changePage(ctx_r4.currentPage - 1));
    });
    \u0275\u0275element(20, "i", 71);
    \u0275\u0275text(21, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, RolesManagementComponent_div_45_button_22_Template, 2, 3, "button", 72);
    \u0275\u0275elementStart(23, "button", 70);
    \u0275\u0275listener("click", function RolesManagementComponent_div_45_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.changePage(ctx_r4.currentPage + 1));
    });
    \u0275\u0275text(24, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    \u0275\u0275element(25, "i", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" \u0639\u0631\u0636 ", (ctx_r4.currentPage - 1) * ctx_r4.pageSize + 1, " \u0625\u0644\u0649 ", ctx_r4.currentPage * ctx_r4.pageSize > ctx_r4.totalRecords ? ctx_r4.totalRecords : ctx_r4.currentPage * ctx_r4.pageSize, " \u0645\u0646 \u0623\u0635\u0644 ", ctx_r4.totalRecords, " \u0645\u0633\u062A\u062E\u062F\u0645 ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r4.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r4.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentPage * ctx_r4.pageSize >= ctx_r4.totalRecords);
  }
}
function RolesManagementComponent_small_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 75);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275text(2, " \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function RolesManagementComponent_small_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 75);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275text(2, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D \u0623\u0648 \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
var RolesManagementComponent = class _RolesManagementComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  toastService = inject(ToastService);
  confirmService = inject(ConfirmService);
  roles = [];
  permissions = [];
  users = [];
  departments = [];
  deptOptions = [];
  getRoleLabel(role) {
    switch (role) {
      case "super_admin":
        return "\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646";
      case "admin":
        return "\u0645\u062F\u064A\u0631 \u0646\u0638\u0627\u0645";
      case "department_manager":
        return "\u0645\u062F\u064A\u0631 \u0642\u0633\u0645";
      case "employee":
        return "\u0645\u0648\u0638\u0641";
      case "client":
        return "\u0639\u0645\u064A\u0644";
      default:
        return role || "\u0645\u0648\u0638\u0641";
    }
  }
  rolesList = [
    { id: "employee", label: "\u0645\u0648\u0638\u0641 (Employee)" },
    { id: "department_manager", label: "\u0645\u062F\u064A\u0631 \u0642\u0633\u0645 (Department Manager)" },
    { id: "admin", label: "\u0645\u062F\u064A\u0631 \u0646\u0638\u0627\u0645 (Admin)" },
    { id: "client", label: "\u0639\u0645\u064A\u0644 (Client)" }
  ];
  showAddModal = false;
  loading = false;
  userForm;
  currentUser = null;
  searchQuery = "";
  currentPage = 1;
  pageSize = 5;
  totalRecords = 0;
  loadUsers() {
    const params = {
      page: this.currentPage,
      per_page: this.pageSize,
      search: this.searchQuery
    };
    this.apiService.getUsers(params).subscribe((res) => {
      let raw = [];
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
  onSearchChange() {
    this.currentPage = 1;
    this.loadUsers();
  }
  onPerPageChange() {
    this.currentPage = 1;
    this.loadUsers();
  }
  changePage(p) {
    if (p < 1 || p > this.totalPages)
      return;
    this.currentPage = p;
    this.loadUsers();
  }
  get totalPages() {
    return Math.ceil(this.totalRecords / this.pageSize) || 1;
  }
  get pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  ngOnInit() {
    try {
      const uStr = localStorage.getItem("mediaglow_user");
      if (uStr)
        this.currentUser = JSON.parse(uStr);
    } catch (e) {
    }
    this.initForm();
    this.loadData();
  }
  initForm() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["12345678", [Validators.required, Validators.minLength(6)]],
      role: ["employee", Validators.required],
      department_id: [null]
    });
  }
  loadData() {
    this.apiService.getRoles().subscribe((res) => {
      let rList = res.roles || [];
      if (this.currentUser?.role !== "super_admin") {
        rList = rList.filter((r) => r.slug !== "super_admin" && r.name !== "super_admin");
      }
      this.roles = rList;
      this.permissions = res.permissions || [];
    });
    this.apiService.getDepartments().subscribe((depts) => {
      this.departments = depts || [];
      this.deptOptions = [
        { label: "\u0628\u062F\u0648\u0646 \u0642\u0633\u0645 / \u0639\u0627\u0645", value: null },
        ...this.departments.map((d) => ({ label: d.name, value: d.id }))
      ];
    });
    this.loadUsers();
  }
  isSuperAdmin() {
    return this.currentUser?.role === "super_admin";
  }
  onUserRoleChange(user, newRole) {
    if (newRole === "super_admin" && !this.isSuperAdmin()) {
      alert("\u0639\u0630\u0631\u0627\u064B\u060C \u062A\u0631\u0641\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0644\u0635\u0644\u0627\u062D\u064A\u0629 \u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646 \u0645\u062A\u0627\u062D \u0641\u0642\u0637 \u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629.");
      return;
    }
    this.apiService.assignUserRole(user.id, newRole).subscribe(() => {
      user.role = newRole;
    });
  }
  onUserDeptChange(user, newDeptId) {
    this.apiService.updateUserDepartment(user.id, newDeptId).subscribe(() => {
      user.department_id = newDeptId;
      const d = this.departments.find((dept) => dept.id === newDeptId);
      user.department = d ? { id: d.id, name: d.name } : null;
    });
  }
  openAddUserModal() {
    this.userForm.reset({
      role: "employee",
      password: "password123",
      department_id: null
    });
    this.showAddModal = true;
  }
  saveUser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.toastService.warning("\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      return;
    }
    this.loading = true;
    this.apiService.createUser(this.userForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success("\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062C\u062F\u064A\u062F \u0628\u0646\u062C\u0627\u062D", "\u062A\u0645\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629");
        this.showAddModal = false;
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
      }
    });
  }
  confirmDeleteUser(user) {
    if (user.id === this.currentUser?.id) {
      this.toastService.error("\u0644\u0627 \u064A\u0645\u0643\u0646\u0643 \u062D\u0630\u0641 \u062D\u0633\u0627\u0628\u0643 \u0627\u0644\u0634\u062E\u0635\u064A \u0627\u0644\u062D\u0627\u0644\u0649");
      return;
    }
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u062D\u0633\u0627\u0628 \u0645\u0633\u062A\u062E\u062F\u0645",
      message: `\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 "${user.name}"\u061F`,
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
      cancelText: "\u0625\u0644\u063A\u0627\u0621 \u0648\u062A\u0631\u0627\u062C\u0639",
      type: "danger",
      icon: "fa-solid fa-user-xmark",
      accept: () => {
        this.apiService.deleteUser(user.id).subscribe({
          next: () => {
            this.toastService.success(`\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 "${user.name}" \u0628\u0646\u062C\u0627\u062D`);
            this.loadData();
          },
          error: (err) => {
            this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
          }
        });
      }
    });
  }
  static \u0275fac = function RolesManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesManagementComponent, selectors: [["app-roles-management"]], decls: 84, vars: 24, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-shield-halved", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-user-plus"], [1, "roles-grid", "margin-top"], ["class", "role-card glass-panel", 4, "ngFor", "ngForOf"], [1, "section-card", "glass-panel", "margin-top"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "10px"], [2, "font-size", "1rem", "font-weight", "700", "color", "var(--text)", "display", "flex", "align-items", "center", "gap", "8px"], [1, "fa-solid", "fa-users-gear", 2, "color", "var(--violet-light)"], [2, "color", "var(--text-2)", "font-size", "0.8rem"], [1, "filters-bar", "glass-panel", 2, "margin-top", "14px", "margin-bottom", "12px"], [1, "search-field"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "placeholder", "\u0627\u0644\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F...", 3, "ngModelChange", "input", "ngModel"], [1, "table-responsive", 2, "margin-top", "10px"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "table-pagination-bar", 4, "ngIf"], ["header", "\u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062A\u062E\u062F\u0645 / \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [3, "ngSubmit", "formGroup"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "14px"], [1, "form-group"], [1, "required"], ["type", "text", "pInputText", "", "formControlName", "name", "placeholder", "\u0645\u062B\u0627\u0644: \u0645\u062D\u0645\u062F \u0639\u0644\u064A"], ["class", "field-error-msg", 4, "ngIf"], ["type", "email", "pInputText", "", "formControlName", "email", "placeholder", "user@mediaglow.com"], ["type", "password", "pInputText", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["formControlName", "role", "optionLabel", "label", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0631 \u0648\u0627\u0644\u0635\u0644\u062D\u064A\u0627\u062A...", 3, "items"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "items"], [1, "dialog-footer-actions"], ["type", "button", 1, "btn-dialog-cancel", 3, "click"], ["type", "submit", 1, "btn-dialog-submit", 3, "disabled"], [1, "role-card", "glass-panel"], [1, "card-header"], [1, "fa-solid", "fa-shield-halved", 2, "color", "var(--violet-light)", "font-size", "0.9rem"], [1, "slug-badge"], [1, "desc"], [1, "permissions-list"], [1, "perm-chips"], ["class", "perm-chip", 4, "ngFor", "ngForOf"], ["style", "color:var(--text-3); font-size:0.75rem;", 4, "ngIf"], [1, "perm-chip"], [2, "color", "var(--text-3)", "font-size", "0.75rem"], [2, "font-weight", "700", "color", "var(--text)"], ["class", "mgr-badge", 4, "ngIf"], [2, "color", "var(--text-2)"], [1, "badge", "badge-v"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "ngModel", "appendTo", "options"], ["optionLabel", "label", "optionValue", "value", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "ngModelChange", "ngModel", "appendTo", "options"], ["title", "\u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", 1, "btn-icon-danger", 3, "click"], [1, "fa-solid", "fa-trash-can"], [1, "mgr-badge"], [1, "fa-solid", "fa-crown"], ["colspan", "7"], [1, "empty-state"], [1, "empty-state-icon"], [1, "fa-solid", "fa-user-slash"], [1, "empty-state-title"], [1, "empty-state-desc"], [1, "table-pagination-bar"], [1, "pagination-info-group"], [1, "pagination-info"], [1, "pagination-per-page"], [1, "pg-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [1, "pagination-controls"], [1, "pg-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-chevron-right"], ["class", "pg-num-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-chevron-left"], [1, "pg-num-btn", 3, "click"], [1, "field-error-msg"], [1, "fa-solid", "fa-circle-exclamation"]], template: function RolesManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A (RBAC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "\u0645\u0635\u0641\u0648\u0641\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u0648\u0635\u0648\u0644\u060C \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0623\u062F\u0648\u0627\u0631\u060C \u0648\u0625\u062F\u0627\u0631\u0629 \u0648\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0633\u0627\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function RolesManagementComponent_Template_button_click_8_listener() {
        return ctx.openAddUserModal();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062A\u062E\u062F\u0645 / \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275template(12, RolesManagementComponent_div_12_Template, 15, 5, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "h3", 10);
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275text(17, " \u062A\u0639\u064A\u064A\u0646 \u0623\u062F\u0648\u0627\u0631 \u0648\u0646\u0642\u0644 \u0645\u0633\u062A\u062E\u062F\u0645\u064A \u0627\u0644\u0623\u0642\u0633\u0627\u0645 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14);
      \u0275\u0275element(22, "i", 15);
      \u0275\u0275elementStart(23, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function RolesManagementComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function RolesManagementComponent_Template_input_input_23_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 17)(25, "table", 18)(26, "thead")(27, "tr")(28, "th");
      \u0275\u0275text(29, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "\u0627\u0644\u062F\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u0646\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062F\u0648\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0642\u0633\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "tbody");
      \u0275\u0275template(43, RolesManagementComponent_tr_43_Template, 18, 28, "tr", 19)(44, RolesManagementComponent_tr_44_Template, 9, 0, "tr", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(45, RolesManagementComponent_div_45_Template, 26, 11, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p-dialog", 22);
      \u0275\u0275twoWayListener("visibleChange", function RolesManagementComponent_Template_p_dialog_visibleChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showAddModal, $event) || (ctx.showAddModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(47, "form", 23);
      \u0275\u0275listener("ngSubmit", function RolesManagementComponent_Template_form_ngSubmit_47_listener() {
        return ctx.saveUser();
      });
      \u0275\u0275elementStart(48, "div", 24)(49, "div", 25)(50, "label");
      \u0275\u0275text(51, "\u0627\u0644\u0627\u0633\u0645 \u0643\u0627\u0645\u0644 ");
      \u0275\u0275elementStart(52, "span", 26);
      \u0275\u0275text(53, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "input", 27);
      \u0275\u0275template(55, RolesManagementComponent_small_55_Template, 3, 0, "small", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 25)(57, "label");
      \u0275\u0275text(58, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
      \u0275\u0275elementStart(59, "span", 26);
      \u0275\u0275text(60, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(61, "input", 29);
      \u0275\u0275template(62, RolesManagementComponent_small_62_Template, 3, 0, "small", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 25)(64, "label");
      \u0275\u0275text(65, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 ");
      \u0275\u0275elementStart(66, "span", 26);
      \u0275\u0275text(67, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(68, "input", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 25)(70, "label");
      \u0275\u0275text(71, "\u0627\u0644\u062F\u0648\u0631 ");
      \u0275\u0275elementStart(72, "span", 26);
      \u0275\u0275text(73, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(74, "app-prime-picker-select", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 25)(76, "label");
      \u0275\u0275text(77, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u0646\u062F \u0625\u0644\u064A\u0647");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "app-prime-picker-select", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 33)(80, "button", 34);
      \u0275\u0275listener("click", function RolesManagementComponent_Template_button_click_80_listener() {
        return ctx.showAddModal = false;
      });
      \u0275\u0275text(81, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "button", 35);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646: ", ctx.users.length, "");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(20);
      \u0275\u0275property("ngForOf", ctx.users);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.users.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.users.length > 0);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showAddModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.userForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx.userForm.get("name")) == null ? null : tmp_12_0.invalid) && (((tmp_12_0 = ctx.userForm.get("name")) == null ? null : tmp_12_0.touched) || ((tmp_12_0 = ctx.userForm.get("name")) == null ? null : tmp_12_0.dirty)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_13_0 = ctx.userForm.get("name")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.userForm.get("name")) == null ? null : tmp_13_0.touched) || ((tmp_13_0 = ctx.userForm.get("name")) == null ? null : tmp_13_0.dirty)));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx.userForm.get("email")) == null ? null : tmp_14_0.invalid) && (((tmp_14_0 = ctx.userForm.get("email")) == null ? null : tmp_14_0.touched) || ((tmp_14_0 = ctx.userForm.get("email")) == null ? null : tmp_14_0.dirty)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_15_0 = ctx.userForm.get("email")) == null ? null : tmp_15_0.invalid) && (((tmp_15_0 = ctx.userForm.get("email")) == null ? null : tmp_15_0.touched) || ((tmp_15_0 = ctx.userForm.get("email")) == null ? null : tmp_15_0.dirty)));
      \u0275\u0275advance(12);
      \u0275\u0275property("items", ctx.rolesList);
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.departments);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.userForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629..." : "\u062D\u0641\u0638 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DropdownModule, Dropdown, DialogModule, Dialog, InputTextModule, InputText, PrimePickerSelectComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.role-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 22px;\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: all 0.25s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.role-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet),\n      var(--violet-light));\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n}\n.role-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  box-shadow: var(--shadow-sm);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.slug-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  font-family: monospace;\n}\n.desc[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.permissions-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.perm-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.perm-chip[_ngcontent-%COMP%] {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.mgr-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.68rem;\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  padding: 2px 7px;\n  border-radius: 100px;\n  margin-right: 6px;\n  font-weight: 700;\n}\n.btn-icon-danger[_ngcontent-%COMP%] {\n  background: rgba(225, 29, 72, 0.1);\n  color: #fda4af;\n  border: 1px solid rgba(225, 29, 72, 0.25);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon-danger[_ngcontent-%COMP%]:hover {\n  background: rgba(225, 29, 72, 0.3);\n  color: #fff;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.custom-select-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.custom-select-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #121224;\n  color: #fff;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.dialog-footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n.btn-dialog-cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-dialog-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text);\n}\n.btn-dialog-submit[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  border: none;\n  color: #ffffff;\n  padding: 9px 22px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-dialog-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n  transform: translateY(-1px);\n}\n.btn-dialog-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n/*# sourceMappingURL=roles-management.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesManagementComponent, [{
    type: Component,
    args: [{ selector: "app-roles-management", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      DropdownModule,
      DialogModule,
      InputTextModule,
      PrimePickerSelectComponent
    ], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-shield-halved" style="color:var(--violet-light);"></i> \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A (RBAC)</h2>
          <p class="subtitle">\u0645\u0635\u0641\u0648\u0641\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u0648\u0635\u0648\u0644\u060C \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0623\u062F\u0648\u0627\u0631\u060C \u0648\u0625\u062F\u0627\u0631\u0629 \u0648\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0633\u0627\u0645</p>
        </div>
        <button class="btn btn-primary" (click)="openAddUserModal()">
          <i class="fa-solid fa-user-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062A\u062E\u062F\u0645 / \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F
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
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <h3 style="font-size:1rem; font-weight:700; color:var(--text); display:flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-users-gear" style="color:var(--violet-light);"></i> \u062A\u0639\u064A\u064A\u0646 \u0623\u062F\u0648\u0627\u0631 \u0648\u0646\u0642\u0644 \u0645\u0633\u062A\u062E\u062F\u0645\u064A \u0627\u0644\u0623\u0642\u0633\u0627\u0645
          </h3>
          <span style="color:var(--text-2); font-size:0.8rem;">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646: {{ users.length }}</span>
        </div>

        <!-- Search bar for users -->
        <div class="filters-bar glass-panel" style="margin-top:14px; margin-bottom:12px;">
          <div class="search-field">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" [(ngModel)]="searchQuery" (input)="onSearchChange()" placeholder="\u0627\u0644\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F..." />
          </div>
        </div>

        <div class="table-responsive" style="margin-top:10px;">
          <table class="crm-table">
            <thead>
              <tr>
                <th>\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645</th>
                <th>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</th>
                <th>\u0627\u0644\u062F\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A</th>
                <th>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u0646\u062F</th>
                <th>\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062F\u0648\u0631</th>
                <th>\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0642\u0633\u0645</th>
                <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of users">
                <td style="font-weight:700; color:var(--text);">
                  {{ u.name }}
                  <span *ngIf="u.role === 'department_manager'" class="mgr-badge"><i class="fa-solid fa-crown"></i> \u0645\u062F\u064A\u0631 \u0642\u0633\u0645</span>
                </td>
                <td style="color:var(--text-2);">{{ u.email }}</td>
                <td><span class="badge badge-v">{{ getRoleLabel(u.role) }}</span></td>
                <td style="color:var(--text-2);">{{ u.department?.name || '\u0639\u0627\u0645 / \u0628\u062F\u0648\u0646 \u0642\u0633\u0645' }}</td>
                <td>
                  <p-dropdown
                    [ngModel]="u.role"
                    (ngModelChange)="onUserRoleChange(u, $event)"
                    [appendTo]="'body'"
                    [options]="[
                      { label: '\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646 (Super Admin)', value: 'super_admin' },
                      { label: '\u0645\u062F\u064A\u0631 \u0646\u0638\u0627\u0645 (Admin)', value: 'admin' },
                      { label: '\u0645\u062F\u064A\u0631 \u0642\u0633\u0645 (Department Manager)', value: 'department_manager' },
                      { label: '\u0645\u0648\u0638\u0641 (Employee)', value: 'employee' },
                      { label: '\u0639\u0645\u064A\u0644 (Client)', value: 'client' }
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
                    placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645..."
                    [style]="{ width: '180px' }"
                  ></p-dropdown>
                </td>
                <td>
                  <button class="btn-icon-danger" (click)="confirmDeleteUser(u)" title="\u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
              <tr *ngIf="users.length === 0">
                <td colspan="7">
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

        <!-- Table Pagination Bar -->
        <div class="table-pagination-bar" *ngIf="users.length > 0">
          <div class="pagination-info-group">
            <div class="pagination-info">
              \u0639\u0631\u0636 {{ (currentPage - 1) * pageSize + 1 }} \u0625\u0644\u0649 {{ currentPage * pageSize > totalRecords ? totalRecords : currentPage * pageSize }} \u0645\u0646 \u0623\u0635\u0644 {{ totalRecords }} \u0645\u0633\u062A\u062E\u062F\u0645
            </div>
            <div class="pagination-per-page">
              <span>\u0639\u0631\u0636</span>
              <select [(ngModel)]="pageSize" (change)="onPerPageChange()" class="pg-select">
                <option [ngValue]="5">5</option>
                <option [ngValue]="10">10</option>
                <option [ngValue]="25">25</option>
                <option [ngValue]="50">50</option>
              </select>
              <span>\u0635\u0641\u0648\u0641</span>
            </div>
          </div>
          <div class="pagination-controls">
            <button class="pg-btn" [disabled]="currentPage === 1" (click)="changePage(currentPage - 1)">
              <i class="fa-solid fa-chevron-right"></i> \u0627\u0644\u0633\u0627\u0628\u0642
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
              \u0627\u0644\u062A\u0627\u0644\u064A <i class="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add User / Employee -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062A\u062E\u062F\u0645 / \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F" [style]="{ width: '92vw', maxWidth: '540px' }">
        <form [formGroup]="userForm" (ngSubmit)="saveUser()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>\u0627\u0644\u0627\u0633\u0645 \u0643\u0627\u0645\u0644 <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="\u0645\u062B\u0627\u0644: \u0645\u062D\u0645\u062F \u0639\u0644\u064A" [class.is-invalid]="userForm.get('name')?.invalid && (userForm.get('name')?.touched || userForm.get('name')?.dirty)" />
              <small class="field-error-msg" *ngIf="userForm.get('name')?.invalid && (userForm.get('name')?.touched || userForm.get('name')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628
              </small>
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="user@mediaglow.com" [class.is-invalid]="userForm.get('email')?.invalid && (userForm.get('email')?.touched || userForm.get('email')?.dirty)" />
              <small class="field-error-msg" *ngIf="userForm.get('email')?.invalid && (userForm.get('email')?.touched || userForm.get('email')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D \u0623\u0648 \u0645\u0637\u0644\u0648\u0628
              </small>
            </div>
            <div class="form-group">
              <label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 <span class="required">*</span></label>
              <input type="password" pInputText formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u062F\u0648\u0631 <span class="required">*</span></label>
              <app-prime-picker-select
                formControlName="role"
                [items]="rolesList"
                optionLabel="label"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0631 \u0648\u0627\u0644\u0635\u0644\u062D\u064A\u0627\u062A..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u0646\u062F \u0625\u0644\u064A\u0647</label>
              <app-prime-picker-select
                formControlName="department_id"
                [items]="departments"
                optionLabel="name"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645..."
              ></app-prime-picker-select>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showAddModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="userForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629...' : '\u062D\u0641\u0638 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645' }}
            </button>
          </div>
        </form>
      </p-dialog>
    </div>
  `, styles: ['/* angular:styles/component:css;8ab4cbcf0205ac8e69dab62efdb4d3a043b9483bee8cb51a08c576519744a45e;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/roles/roles-management.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.roles-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.role-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 22px;\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: all 0.25s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.role-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet),\n      var(--violet-light));\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n}\n.role-card:hover {\n  border-color: var(--border-v);\n  box-shadow: var(--shadow-sm);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-header h3 {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.slug-badge {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  font-family: monospace;\n}\n.desc {\n  color: var(--text-2);\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.permissions-list h4 {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n.perm-chips {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.perm-chip {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 600;\n}\n.section-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.mgr-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.68rem;\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  padding: 2px 7px;\n  border-radius: 100px;\n  margin-right: 6px;\n  font-weight: 700;\n}\n.btn-icon-danger {\n  background: rgba(225, 29, 72, 0.1);\n  color: #fda4af;\n  border: 1px solid rgba(225, 29, 72, 0.25);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon-danger:hover {\n  background: rgba(225, 29, 72, 0.3);\n  color: #fff;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input,\n.custom-select-input {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.custom-select-input option {\n  background: #121224;\n  color: #fff;\n}\n.required {\n  color: var(--rose-light);\n}\n.dialog-footer-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n.btn-dialog-cancel {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-dialog-cancel:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text);\n}\n.btn-dialog-submit {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  border: none;\n  color: #ffffff;\n  padding: 9px 22px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-dialog-submit:hover:not(:disabled) {\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n  transform: translateY(-1px);\n}\n.btn-dialog-submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n/*# sourceMappingURL=roles-management.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesManagementComponent, { className: "RolesManagementComponent", filePath: "src/app/components/roles/roles-management.component.ts", lineNumber: 274 });
})();
export {
  RolesManagementComponent
};
//# sourceMappingURL=chunk-A2E7P4OJ.js.map
