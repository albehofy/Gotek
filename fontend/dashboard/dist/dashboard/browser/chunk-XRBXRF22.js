import {
  ToastService
} from "./chunk-ERZASVQQ.js";
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
  Router,
  RouterModule
} from "./chunk-JBOK22UG.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/components/clients/clients-list.component.ts
var _c0 = () => ({ width: "92vw", maxWidth: "480px" });
function ClientsListComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 32)(5, "button", 33);
    \u0275\u0275listener("click", function ClientsListComponent_tr_35_Template_button_click_5_listener() {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToClientDetails(client_r2));
    });
    \u0275\u0275element(6, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "a", 36);
    \u0275\u0275listener("click", function ClientsListComponent_tr_35_Template_a_click_10_listener() {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToClientDetails(client_r2));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 39);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 40);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 41);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const client_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.pageSize + i_r4 + 1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.getInitial(client_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", client_r2.client_name || client_r2.name || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r2.client_email || client_r2.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r2.phone || client_r2.client_phone || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", client_r2.deals_count || 0, " \u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 8, client_r2.total_paid || 0, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(24, 11, client_r2.outstanding_balance || 0, "1.2-2"), " \u062C.\u0645");
  }
}
function ClientsListComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "div", 43)(3, "div", 44);
    \u0275\u0275element(4, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 46);
    \u0275\u0275text(6, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0639\u0645\u0644\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 47);
    \u0275\u0275text(8, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0639\u0645\u0644\u0627\u0621 \u064A\u0637\u0627\u0628\u0642\u0648\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0628\u062D\u062B.");
    \u0275\u0275elementEnd()()()();
  }
}
function ClientsListComponent_div_37_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function ClientsListComponent_div_37_button_22_Template_button_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changePage(p_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r7 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r7, " ");
  }
}
function ClientsListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51)(5, "span");
    \u0275\u0275text(6, "\u0639\u0631\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsListComponent_div_37_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pageSize, $event) || (ctx_r2.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ClientsListComponent_div_37_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPerPageChange());
    });
    \u0275\u0275elementStart(8, "option", 53);
    \u0275\u0275text(9, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 53);
    \u0275\u0275text(11, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 53);
    \u0275\u0275text(13, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 53);
    \u0275\u0275text(15, "50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\u0635\u0641\u0648\u0641");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 54)(19, "button", 55);
    \u0275\u0275listener("click", function ClientsListComponent_div_37_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(ctx_r2.currentPage - 1));
    });
    \u0275\u0275element(20, "i", 56);
    \u0275\u0275text(21, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ClientsListComponent_div_37_button_22_Template, 2, 3, "button", 57);
    \u0275\u0275elementStart(23, "button", 55);
    \u0275\u0275listener("click", function ClientsListComponent_div_37_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(ctx_r2.currentPage + 1));
    });
    \u0275\u0275text(24, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    \u0275\u0275element(25, "i", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" \u0639\u0631\u0636 ", (ctx_r2.currentPage - 1) * ctx_r2.pageSize + 1, " \u0625\u0644\u0649 ", ctx_r2.currentPage * ctx_r2.pageSize > ctx_r2.totalRecords ? ctx_r2.totalRecords : ctx_r2.currentPage * ctx_r2.pageSize, " \u0645\u0646 \u0623\u0635\u0644 ", ctx_r2.totalRecords, " \u0639\u0645\u064A\u0644 ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage * ctx_r2.pageSize >= ctx_r2.totalRecords);
  }
}
function ClientsListComponent_small_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2, " \u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function ClientsListComponent_small_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D \u0623\u0648 \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function ClientsListComponent_small_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2, " \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629 ");
    \u0275\u0275elementEnd();
  }
}
var ClientsListComponent = class _ClientsListComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  router = inject(Router);
  toastService = inject(ToastService);
  clients = [];
  searchQuery = "";
  showAddModal = false;
  loading = false;
  clientForm;
  ngOnInit() {
    const userStr = localStorage.getItem("mediaglow_user");
    if (userStr) {
      try {
        const u = JSON.parse(userStr);
        if (u.role === "client") {
          this.router.navigate(["/client-portal"]);
          return;
        }
      } catch (e) {
      }
    }
    this.initForm();
    this.loadClients();
  }
  initForm() {
    this.clientForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      password: ["password123", Validators.required]
    });
  }
  currentPage = 1;
  pageSize = 5;
  totalRecords = 0;
  loadClients() {
    const params = {
      page: this.currentPage,
      per_page: this.pageSize,
      search: this.searchQuery ? this.searchQuery.trim() : ""
    };
    this.apiService.getClientBalances(params).subscribe((res) => {
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
      let processed = raw.map((c) => __spreadProps(__spreadValues({}, c), {
        name: c.client_name || c.name || "",
        email: c.client_email || c.email || "",
        phone: c.phone || c.client_phone || ""
      }));
      if (this.searchQuery && this.searchQuery.trim()) {
        const q = this.searchQuery.trim().toLowerCase();
        processed = processed.filter((c) => c.name && c.name.toLowerCase().includes(q) || c.email && c.email.toLowerCase().includes(q) || c.phone && c.phone.toLowerCase().includes(q));
        this.totalRecords = processed.length;
      }
      this.clients = processed;
    });
  }
  onSearchChange() {
    this.currentPage = 1;
    this.loadClients();
  }
  onPerPageChange() {
    this.currentPage = 1;
    this.loadClients();
  }
  changePage(p) {
    if (p < 1 || p > this.totalPages)
      return;
    this.currentPage = p;
    this.loadClients();
  }
  get totalPages() {
    return Math.ceil(this.totalRecords / this.pageSize) || 1;
  }
  get pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  showPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  openAddModal() {
    this.showPassword = false;
    this.clientForm.reset({ password: "password123" });
    this.showAddModal = true;
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  saveClient() {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      this.toastService.warning("\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0648\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      return;
    }
    this.loading = true;
    const payload = __spreadProps(__spreadValues({}, this.clientForm.value), {
      role: "client"
    });
    this.apiService.createUser(payload).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success("\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F \u0628\u0646\u062C\u0627\u062D", "\u062A\u0645\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629");
        this.closeAddModal();
        this.loadClients();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u064A\u0644");
      }
    });
  }
  goToClientDetails(client) {
    const id = client.id || client.client_id;
    if (id) {
      this.router.navigate(["/clients", id]);
    }
  }
  getInitial(client) {
    const name = client.name || client.client_name || "";
    return name ? name[0].toUpperCase() : "C";
  }
  static \u0275fac = function ClientsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsListComponent, selectors: [["app-clients-list"]], decls: 74, vars: 26, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-users", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-user-plus"], [1, "filters-bar", "glass-panel"], [1, "search-field"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "placeholder", "\u0627\u0644\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A...", 3, "ngModelChange", "input", "ngModel"], [1, "table-card", "glass-panel"], [1, "table-responsive"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "table-pagination-bar", 4, "ngIf"], ["header", "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [3, "ngSubmit", "formGroup"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "16px"], [1, "form-group"], [1, "required"], ["type", "text", "pInputText", "", "formControlName", "name", "placeholder", "\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0648\u0631 \u0644\u0644\u062A\u062C\u0627\u0631\u0629"], ["class", "field-error-msg", 4, "ngIf"], ["type", "email", "pInputText", "", "formControlName", "email", "placeholder", "client@example.com"], ["type", "text", "pInputText", "", "formControlName", "phone", "placeholder", "\u0645\u062B\u0627\u0644: 01012345678"], [1, "password-wrapper"], ["pInputText", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type"], ["type", "button", 1, "btn-toggle-pw", 3, "click", "title"], [1, "fa-solid", 3, "ngClass"], [1, "dialog-footer-actions"], ["type", "button", 1, "btn-dialog-cancel", 3, "click"], ["type", "submit", 1, "btn-dialog-submit", 3, "disabled"], [1, "client-cell"], ["title", "\u0641\u062A\u062D \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644", 1, "open-client-btn", 3, "click"], [1, "fa-solid", "fa-arrow-up-right-from-square"], [1, "client-av"], ["title", "\u0641\u062A\u062D \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644", 1, "client-name-link", 3, "click"], [2, "color", "var(--text-2)"], [2, "color", "var(--text-2)", "font-weight", "600", "direction", "ltr", "text-align", "right"], [1, "badge", "badge-v"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], ["colspan", "7"], [1, "empty-state"], [1, "empty-state-icon"], [1, "fa-solid", "fa-users-slash"], [1, "empty-state-title"], [1, "empty-state-desc"], [1, "table-pagination-bar"], [1, "pagination-info-group"], [1, "pagination-info"], [1, "pagination-per-page"], [1, "pg-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [1, "pagination-controls"], [1, "pg-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-chevron-right"], ["class", "pg-num-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-chevron-left"], [1, "pg-num-btn", 3, "click"], [1, "field-error-msg"], [1, "fa-solid", "fa-circle-exclamation"]], template: function ClientsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " \u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "\u0639\u0631\u0636 \u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0648\u0643\u0627\u0644\u0629\u060C \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0646\u0634\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ClientsListComponent_Template_button_click_8_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " \u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ClientsListComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function ClientsListComponent_Template_input_input_14_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "table", 12)(18, "thead")(19, "tr")(20, "th");
      \u0275\u0275text(21, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0642\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A (\u0627\u0644\u0645\u0633\u062A\u062D\u0642)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, ClientsListComponent_tr_35_Template, 25, 14, "tr", 13)(36, ClientsListComponent_tr_36_Template, 9, 0, "tr", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(37, ClientsListComponent_div_37_Template, 26, 11, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p-dialog", 16);
      \u0275\u0275twoWayListener("visibleChange", function ClientsListComponent_Template_p_dialog_visibleChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showAddModal, $event) || (ctx.showAddModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(39, "form", 17);
      \u0275\u0275listener("ngSubmit", function ClientsListComponent_Template_form_ngSubmit_39_listener() {
        return ctx.saveClient();
      });
      \u0275\u0275elementStart(40, "div", 18)(41, "div", 19)(42, "label");
      \u0275\u0275text(43, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 ");
      \u0275\u0275elementStart(44, "span", 20);
      \u0275\u0275text(45, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(46, "input", 21);
      \u0275\u0275template(47, ClientsListComponent_small_47_Template, 3, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 19)(49, "label");
      \u0275\u0275text(50, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
      \u0275\u0275elementStart(51, "span", 20);
      \u0275\u0275text(52, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(53, "input", 23);
      \u0275\u0275template(54, ClientsListComponent_small_54_Template, 3, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 19)(56, "label");
      \u0275\u0275text(57, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 / \u0627\u0644\u0647\u0627\u062A\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 19)(60, "label");
      \u0275\u0275text(61, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 ");
      \u0275\u0275elementStart(62, "span", 20);
      \u0275\u0275text(63, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 25);
      \u0275\u0275element(65, "input", 26);
      \u0275\u0275elementStart(66, "button", 27);
      \u0275\u0275listener("click", function ClientsListComponent_Template_button_click_66_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275element(67, "i", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(68, ClientsListComponent_small_68_Template, 3, 0, "small", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 29)(70, "button", 30);
      \u0275\u0275listener("click", function ClientsListComponent_Template_button_click_70_listener() {
        return ctx.closeAddModal();
      });
      \u0275\u0275text(71, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 31);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_18_0;
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.clients);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.clients.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.clients.length > 0);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showAddModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.clientForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx.clientForm.get("name")) == null ? null : tmp_10_0.invalid) && (((tmp_10_0 = ctx.clientForm.get("name")) == null ? null : tmp_10_0.touched) || ((tmp_10_0 = ctx.clientForm.get("name")) == null ? null : tmp_10_0.dirty)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_11_0 = ctx.clientForm.get("name")) == null ? null : tmp_11_0.invalid) && (((tmp_11_0 = ctx.clientForm.get("name")) == null ? null : tmp_11_0.touched) || ((tmp_11_0 = ctx.clientForm.get("name")) == null ? null : tmp_11_0.dirty)));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx.clientForm.get("email")) == null ? null : tmp_12_0.invalid) && (((tmp_12_0 = ctx.clientForm.get("email")) == null ? null : tmp_12_0.touched) || ((tmp_12_0 = ctx.clientForm.get("email")) == null ? null : tmp_12_0.dirty)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_13_0 = ctx.clientForm.get("email")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.clientForm.get("email")) == null ? null : tmp_13_0.touched) || ((tmp_13_0 = ctx.clientForm.get("email")) == null ? null : tmp_13_0.dirty)));
      \u0275\u0275advance(11);
      \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx.clientForm.get("password")) == null ? null : tmp_14_0.invalid) && (((tmp_14_0 = ctx.clientForm.get("password")) == null ? null : tmp_14_0.touched) || ((tmp_14_0 = ctx.clientForm.get("password")) == null ? null : tmp_14_0.dirty)));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.showPassword ? "\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.showPassword ? "fa-eye-slash" : "fa-eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_18_0 = ctx.clientForm.get("password")) == null ? null : tmp_18_0.invalid) && (((tmp_18_0 = ctx.clientForm.get("password")) == null ? null : tmp_18_0.touched) || ((tmp_18_0 = ctx.clientForm.get("password")) == null ? null : tmp_18_0.dirty)));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.clientForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0627\u0644\u0639\u0645\u064A\u0644", " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, RouterModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DialogModule, Dialog, InputTextModule, InputText], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text);\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-input);\n  padding: 9px 14px;\n  border-radius: var(--r);\n  border: 1px solid var(--border);\n  min-width: 260px;\n  flex: 1;\n  max-width: 400px;\n  transition: border-color 0.2s;\n}\n.search-field[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.search-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.9rem;\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: var(--text);\n  width: 100%;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-3);\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  border-radius: var(--r-lg);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: var(--text);\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.client-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.open-client-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--violet-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.72rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.open-client-btn[_ngcontent-%COMP%]:hover {\n  background: var(--violet);\n  color: #ffffff;\n  transform: scale(1.08);\n}\n.client-av[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.client-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text);\n}\n.client-name-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text);\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.client-name-link[_ngcontent-%COMP%]:hover {\n  color: var(--violet-light);\n  text-decoration: underline;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--text);\n}\n.btn-action.primary[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.crm-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: _ngcontent-%COMP%_modalIn 0.22s var(--ease);\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: var(--text);\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: var(--text);\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.password-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 38px !important;\n}\n.btn-toggle-pw[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  background: transparent;\n  border: none;\n  color: var(--text-2);\n  cursor: pointer;\n  padding: 6px;\n  font-size: 0.92rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n  z-index: 2;\n}\n.btn-toggle-pw[_ngcontent-%COMP%]:hover {\n  color: var(--violet-light);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=clients-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientsListComponent, [{
    type: Component,
    args: [{ selector: "app-clients-list", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, DialogModule, InputTextModule], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-users" style="color:var(--violet-light);"></i> \u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621</h2>
          <p class="subtitle">\u0639\u0631\u0636 \u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0648\u0643\u0627\u0644\u0629\u060C \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0646\u0634\u0637\u0629</p>
        </div>
        <button class="btn btn-primary" (click)="openAddModal()">
          <i class="fa-solid fa-user-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F
        </button>
      </div>

      <!-- Search -->
      <div class="filters-bar glass-panel">
        <div class="search-field">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" [(ngModel)]="searchQuery" (input)="onSearchChange()" placeholder="\u0627\u0644\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A..." />
        </div>
      </div>

      <!-- Clients Data Grid -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>#</th>
                <th>\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644</th>
                <th>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</th>
                <th>\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644</th>
                <th>\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0642\u0627\u062A</th>
                <th>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A</th>
                <th>\u0627\u0644\u0645\u062A\u0628\u0642\u064A (\u0627\u0644\u0645\u0633\u062A\u062D\u0642)</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let client of clients; let i = index">
                <td>{{ (currentPage - 1) * pageSize + i + 1 }}</td>
                <td>
                  <div class="client-cell">
                    <button class="open-client-btn" (click)="goToClientDetails(client)" title="\u0641\u062A\u062D \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                    <div class="client-av">{{ getInitial(client) }}</div>
                    <div>
                      <a class="client-name-link" (click)="goToClientDetails(client)" title="\u0641\u062A\u062D \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644">
                        {{ client.client_name || client.name || '\u2014' }}
                      </a>
                    </div>
                  </div>
                </td>
                <td style="color:var(--text-2);">{{ client.client_email || client.email || '\u2014' }}</td>
                <td style="color:var(--text-2); font-weight:600; direction:ltr; text-align:right;">{{ client.phone || client.client_phone || '\u2014' }}</td>
                <td><span class="badge badge-v">{{ client.deals_count || 0 }} \u0635\u0641\u0642\u0627\u062A</span></td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ (client.total_paid || 0) | number:'1.2-2' }} \u062C.\u0645</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ (client.outstanding_balance || 0) | number:'1.2-2' }} \u062C.\u0645</td>
              </tr>
              <tr *ngIf="clients.length === 0">
                <td colspan="7">
                  <div class="empty-state">
                    <div class="empty-state-icon"><i class="fa-solid fa-users-slash"></i></div>
                    <div class="empty-state-title">\u0644\u0627 \u064A\u0648\u062C\u062F \u0639\u0645\u0644\u0627\u0621</div>
                    <div class="empty-state-desc">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0639\u0645\u0644\u0627\u0621 \u064A\u0637\u0627\u0628\u0642\u0648\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0628\u062D\u062B.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Table Pagination Bar -->
        <div class="table-pagination-bar" *ngIf="clients.length > 0">
          <div class="pagination-info-group">
            <div class="pagination-info">
              \u0639\u0631\u0636 {{ (currentPage - 1) * pageSize + 1 }} \u0625\u0644\u0649 {{ currentPage * pageSize > totalRecords ? totalRecords : currentPage * pageSize }} \u0645\u0646 \u0623\u0635\u0644 {{ totalRecords }} \u0639\u0645\u064A\u0644
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

      <!-- PrimeNG Dialog: Add New Client -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="clientForm" (ngSubmit)="saveClient()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:16px;">
            <div class="form-group">
              <label>\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0648\u0631 \u0644\u0644\u062A\u062C\u0627\u0631\u0629" [class.is-invalid]="clientForm.get('name')?.invalid && (clientForm.get('name')?.touched || clientForm.get('name')?.dirty)" />
              <small class="field-error-msg" *ngIf="clientForm.get('name')?.invalid && (clientForm.get('name')?.touched || clientForm.get('name')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> \u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628
              </small>
            </div>

            <div class="form-group">
              <label>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="client@example.com" [class.is-invalid]="clientForm.get('email')?.invalid && (clientForm.get('email')?.touched || clientForm.get('email')?.dirty)" />
              <small class="field-error-msg" *ngIf="clientForm.get('email')?.invalid && (clientForm.get('email')?.touched || clientForm.get('email')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D \u0623\u0648 \u0645\u0637\u0644\u0648\u0628
              </small>
            </div>

            <div class="form-group">
              <label>\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 / \u0627\u0644\u0647\u0627\u062A\u0641</label>
              <input type="text" pInputText formControlName="phone" placeholder="\u0645\u062B\u0627\u0644: 01012345678" />
            </div>

            <div class="form-group">
              <label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 <span class="required">*</span></label>
              <div class="password-wrapper">
                <input [type]="showPassword ? 'text' : 'password'" pInputText formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" [class.is-invalid]="clientForm.get('password')?.invalid && (clientForm.get('password')?.touched || clientForm.get('password')?.dirty)" />
                <button type="button" class="btn-toggle-pw" (click)="togglePassword()" [title]="showPassword ? '\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631' : '\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631'">
                  <i class="fa-solid" [ngClass]="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                </button>
              </div>
              <small class="field-error-msg" *ngIf="clientForm.get('password')?.invalid && (clientForm.get('password')?.touched || clientForm.get('password')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629
              </small>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="closeAddModal()">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="clientForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0627\u0644\u0639\u0645\u064A\u0644' }}
            </button>
          </div>
        </form>
      </p-dialog>
    </div>
  `, styles: ['/* angular:styles/component:css;46ba7e01a216a399f6565326d20a91d4efc119335939bd17ea2a0606b6c68738;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/clients/clients-list.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text);\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.filters-bar {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-field {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-input);\n  padding: 9px 14px;\n  border-radius: var(--r);\n  border: 1px solid var(--border);\n  min-width: 260px;\n  flex: 1;\n  max-width: 400px;\n  transition: border-color 0.2s;\n}\n.search-field:focus-within {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.search-field i {\n  color: var(--text-2);\n  font-size: 0.9rem;\n}\n.search-field input {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: var(--text);\n  width: 100%;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.search-field input::placeholder {\n  color: var(--text-3);\n}\n.table-card {\n  padding: 0;\n  overflow: hidden;\n  border-radius: var(--r-lg);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: var(--text);\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.client-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.open-client-btn {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--violet-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.72rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.open-client-btn:hover {\n  background: var(--violet);\n  color: #ffffff;\n  transform: scale(1.08);\n}\n.client-av {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.client-name {\n  font-weight: 700;\n  color: var(--text);\n}\n.client-name-link {\n  font-weight: 700;\n  color: var(--text);\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.client-name-link:hover {\n  color: var(--violet-light);\n  text-decoration: underline;\n}\n.btn-action {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--text);\n}\n.btn-action.primary {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.crm-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 480px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: modalIn 0.22s var(--ease);\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h3 {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: var(--text);\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: var(--text);\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group input:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.password-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.password-wrapper input {\n  width: 100%;\n  padding-left: 38px !important;\n}\n.btn-toggle-pw {\n  position: absolute;\n  left: 10px;\n  background: transparent;\n  border: none;\n  color: var(--text-2);\n  cursor: pointer;\n  padding: 6px;\n  font-size: 0.92rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n  z-index: 2;\n}\n.btn-toggle-pw:hover {\n  color: var(--violet-light);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=clients-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsListComponent, { className: "ClientsListComponent", filePath: "src/app/components/clients/clients-list.component.ts", lineNumber: 217 });
})();
export {
  ClientsListComponent
};
//# sourceMappingURL=chunk-XRBXRF22.js.map
