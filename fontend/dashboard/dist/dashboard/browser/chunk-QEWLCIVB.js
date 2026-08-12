import {
  PrimePickerSelectComponent
} from "./chunk-XDDYZAH2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-6TEPOG2V.js";
import {
  ApiService
} from "./chunk-VFRQX7SG.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CK3LQYPJ.js";

// src/app/components/deals/deals-management.component.ts
function DealsManagementComponent_tr_35_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Scope: ", deal_r2.agreed_scope, "");
  }
}
function DealsManagementComponent_tr_35_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(deal_r2.sales_person.name);
  }
}
function DealsManagementComponent_tr_35_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Commission: ", deal_r2.sales_commission_value, " ", deal_r2.sales_commission_type === "percentage" ? "%" : "EGP", " ");
  }
}
function DealsManagementComponent_tr_35_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function DealsManagementComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 12)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DealsManagementComponent_tr_35_small_4_Template, 2, 1, "small", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, DealsManagementComponent_tr_35_div_11_Template, 2, 1, "div", 16)(12, DealsManagementComponent_tr_35_small_12_Template, 2, 2, "small", 17)(13, DealsManagementComponent_tr_35_div_13_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 19);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 20);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 21);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "button", 22);
    \u0275\u0275listener("click", function DealsManagementComponent_tr_35_Template_button_click_27_listener() {
      const deal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPaymentModal(deal_r2));
    });
    \u0275\u0275element(28, "i", 23);
    \u0275\u0275text(29, " Record Payment ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deal_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(deal_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", deal_r2.agreed_scope);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((deal_r2.client == null ? null : deal_r2.client.name) || "General Client");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((deal_r2.department == null ? null : deal_r2.department.name) || "General");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", deal_r2.sales_person);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", deal_r2.sales_commission_value > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !deal_r2.sales_person);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 11, deal_r2.calculated_total, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 14, deal_r2.calculated_paid, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 17, deal_r2.remaining_balance, "1.2-2"), " EGP");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(deal_r2.status);
  }
}
function DealsManagementComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2, "No active deals found.");
    \u0275\u0275elementEnd()();
  }
}
function DealsManagementComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "h3");
    \u0275\u0275element(4, "i", 2);
    \u0275\u0275text(5, " Create New Deal & Contract");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function DealsManagementComponent_div_37_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275element(7, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 34);
    \u0275\u0275listener("ngSubmit", function DealsManagementComponent_div_37_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDeal());
    });
    \u0275\u0275elementStart(9, "div", 35)(10, "div", 36)(11, "label");
    \u0275\u0275text(12, "Deal Title ");
    \u0275\u0275elementStart(13, "span", 37);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 39)(17, "label");
    \u0275\u0275text(18, "Target Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "app-prime-picker-select", 40);
    \u0275\u0275listener("addNew", function DealsManagementComponent_div_37_Template_app_prime_picker_select_addNew_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerQuickAddClient());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 39)(21, "label");
    \u0275\u0275text(22, "Primary Department");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "app-prime-picker-select", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 39)(25, "label");
    \u0275\u0275text(26, "Sales Representative");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "app-prime-picker-select", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 39)(29, "label");
    \u0275\u0275text(30, "Commission Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 43)(32, "option", 44);
    \u0275\u0275text(33, "Fixed Amount (EGP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 45);
    \u0275\u0275text(35, "Percentage (%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 39)(37, "label");
    \u0275\u0275text(38, "Commission Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 39)(41, "label");
    \u0275\u0275text(42, "Total Contract Value (EGP) ");
    \u0275\u0275elementStart(43, "span", 37);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 36)(47, "label");
    \u0275\u0275text(48, "Agreed Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "textarea", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 49)(51, "button", 50);
    \u0275\u0275listener("click", function DealsManagementComponent_div_37_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275text(52, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 51);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r2.dealForm);
    \u0275\u0275advance(11);
    \u0275\u0275property("items", ctx_r2.clients);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r2.departments);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r2.employees);
    \u0275\u0275advance(26);
    \u0275\u0275property("disabled", ctx_r2.dealForm.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "Saving..." : "Save & Publish Deal", " ");
  }
}
function DealsManagementComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 52)(2, "div", 31)(3, "h3");
    \u0275\u0275element(4, "i", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function DealsManagementComponent_div_38_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePaymentModal());
    });
    \u0275\u0275element(7, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 34);
    \u0275\u0275listener("ngSubmit", function DealsManagementComponent_div_38_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.savePayment());
    });
    \u0275\u0275elementStart(9, "div", 54)(10, "div", 39)(11, "label");
    \u0275\u0275text(12, "Payment Amount (EGP) ");
    \u0275\u0275elementStart(13, "span", 37);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 55);
    \u0275\u0275elementStart(16, "small", 14);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 39)(20, "label");
    \u0275\u0275text(21, "Payment Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 39)(24, "label");
    \u0275\u0275text(25, "Payment Method ");
    \u0275\u0275elementStart(26, "span", 37);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 57)(29, "option", 58);
    \u0275\u0275text(30, "Cash (Local Safe)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 59);
    \u0275\u0275text(32, "Direct Cash-in-hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 60);
    \u0275\u0275text(34, "InstaPay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 61);
    \u0275\u0275text(36, "Bank Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 39)(38, "label");
    \u0275\u0275text(39, "Receipt / Reference Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 49)(42, "button", 50);
    \u0275\u0275listener("click", function DealsManagementComponent_div_38_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePaymentModal());
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 51);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Record Payment: ", ctx_r2.selectedDeal.title, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.paymentForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("placeholder", ctx_r2.selectedDeal.remaining_balance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Outstanding Balance: ", \u0275\u0275pipeBind2(18, 6, ctx_r2.selectedDeal.remaining_balance, "1.2-2"), " EGP");
    \u0275\u0275advance(27);
    \u0275\u0275property("disabled", ctx_r2.paymentForm.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "Processing..." : "Confirm Payment", " ");
  }
}
var DealsManagementComponent = class _DealsManagementComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  deals = [];
  clients = [];
  departments = [];
  employees = [];
  showAddModal = false;
  showPaymentModal = false;
  selectedDeal = null;
  loading = false;
  dealForm;
  paymentForm;
  ngOnInit() {
    this.initForms();
    this.loadData();
  }
  initForms() {
    this.dealForm = this.fb.group({
      title: ["", Validators.required],
      client_id: [null],
      department_id: [null],
      sales_person_id: [null],
      sales_commission_type: ["fixed"],
      sales_commission_value: [0],
      total_price: [0, [Validators.required, Validators.min(0)]],
      agreed_scope: [""]
    });
    this.paymentForm = this.fb.group({
      amount: [0, [Validators.required, Validators.min(0.01)]],
      payment_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      payment_method: ["cash", Validators.required],
      receipt_ref: [""]
    });
  }
  loadData() {
    this.apiService.getDeals().subscribe((res) => this.deals = res || []);
    this.apiService.getUsers("client").subscribe((res) => this.clients = res.data || []);
    this.apiService.getDepartments().subscribe((res) => this.departments = res || []);
    this.apiService.getUsers().subscribe((res) => this.employees = res.data || []);
  }
  openAddDealModal() {
    this.dealForm.reset({ sales_commission_type: "fixed", sales_commission_value: 0, total_price: 0 });
    this.showAddModal = true;
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  triggerQuickAddClient() {
    const clientName = prompt("\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F:");
    if (clientName) {
      const email = clientName.toLowerCase().replace(/\s+/g, "") + "@client.com";
      this.apiService.createUser({ name: clientName, email, password: "password123", role: "client" }).subscribe((res) => {
        if (res.data) {
          this.clients.push(res.data);
          this.dealForm.patchValue({ client_id: res.data.id });
        }
      });
    }
  }
  saveDeal() {
    if (this.dealForm.invalid)
      return;
    this.loading = true;
    this.apiService.createDeal(this.dealForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.closeAddModal();
        this.loadData();
      },
      error: () => this.loading = false
    });
  }
  openPaymentModal(deal) {
    this.selectedDeal = deal;
    this.paymentForm.reset({
      amount: deal.remaining_balance,
      payment_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      payment_method: "cash"
    });
    this.showPaymentModal = true;
  }
  closePaymentModal() {
    this.showPaymentModal = false;
    this.selectedDeal = null;
  }
  savePayment() {
    if (this.paymentForm.invalid || !this.selectedDeal)
      return;
    this.loading = true;
    const payload = __spreadProps(__spreadValues({}, this.paymentForm.value), {
      deal_id: this.selectedDeal.id,
      client_id: this.selectedDeal.client_id
    });
    this.apiService.storeClientPayment(payload).subscribe({
      next: () => {
        this.loading = false;
        this.closePaymentModal();
        this.loadData();
      },
      error: () => this.loading = false
    });
  }
  static \u0275fac = function DealsManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DealsManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsManagementComponent, selectors: [["app-deals-management"]], decls: 39, vars: 4, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-handshake", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "table-card", "glass-panel"], [1, "table-responsive"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "crm-modal-backdrop", 4, "ngIf"], [2, "font-weight", "700", "color", "#fff"], ["style", "color:var(--text-2); font-weight:normal;", 4, "ngIf"], [2, "color", "var(--text-2)"], [1, "dept-badge"], ["style", "font-weight:600; color:#fff;", 4, "ngIf"], ["style", "color:var(--teal-light);", 4, "ngIf"], ["style", "color:var(--text-3);", 4, "ngIf"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], [1, "badge", "badge-v"], ["title", "Record payment installment", 1, "btn-action", "primary", 3, "click"], [1, "fa-solid", "fa-money-bill-wave"], [2, "color", "var(--text-2)", "font-weight", "normal"], [2, "font-weight", "600", "color", "#fff"], [2, "color", "var(--teal-light)"], [2, "color", "var(--text-3)"], ["colspan", "9", 2, "text-align", "center", "padding", "36px", "color", "var(--text-2)"], [1, "crm-modal-backdrop"], [1, "crm-modal-card", "glass-panel", "wide-modal"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "formControlName", "title", "placeholder", "e.g. Brand Identity & Video Campaign"], [1, "form-group"], ["formControlName", "client_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select client...", "addNewLabel", "+ Quick add client", 3, "addNew", "items"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select department...", 3, "items"], ["formControlName", "sales_person_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select sales rep...", 3, "items"], ["formControlName", "sales_commission_type"], ["value", "fixed"], ["value", "percentage"], ["type", "number", "formControlName", "sales_commission_value", "placeholder", "e.g. 500 or 10"], ["type", "number", "formControlName", "total_price", "placeholder", "12000"], ["formControlName", "agreed_scope", "rows", "3", "placeholder", "Scope of work details..."], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-glass", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "crm-modal-card", "glass-panel"], [1, "fa-solid", "fa-money-bill-wave", 2, "color", "var(--emerald-light)"], [2, "padding", "20px 24px", "display", "flex", "flex-direction", "column", "gap", "14px"], ["type", "number", "formControlName", "amount", 3, "placeholder"], ["type", "date", "formControlName", "payment_date"], ["formControlName", "payment_method"], ["value", "cash"], ["value", "cash_hand"], ["value", "instapay"], ["value", "bank_transfer"], ["type", "text", "formControlName", "receipt_ref", "placeholder", "e.g. TXN-998811"]], template: function DealsManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Deals & Sales Contracts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Contract pipeline, sales commission attribution & installment tracking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function DealsManagementComponent_Template_button_click_8_listener() {
        return ctx.openAddDealModal();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " New Deal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "table", 8)(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "Deal Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Sales Rep & Commission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Total Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, DealsManagementComponent_tr_35_Template, 30, 20, "tr", 9)(36, DealsManagementComponent_tr_36_Template, 3, 0, "tr", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(37, DealsManagementComponent_div_37_Template, 55, 6, "div", 11)(38, DealsManagementComponent_div_38_Template, 46, 9, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275property("ngForOf", ctx.deals);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deals.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPaymentModal && ctx.selectedDeal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, PrimePickerSelectComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  border-radius: var(--r-lg);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  direction: ltr;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.dept-badge[_ngcontent-%COMP%] {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary[_ngcontent-%COMP%] {\n  color: var(--emerald-light);\n  background: var(--emerald-soft);\n  border-color: rgba(5, 150, 105, 0.2);\n}\n.btn-action.primary[_ngcontent-%COMP%]:hover {\n  background: rgba(5, 150, 105, 0.22);\n}\n.crm-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: _ngcontent-%COMP%_modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=deals-management.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsManagementComponent, [{
    type: Component,
    args: [{ selector: "app-deals-management", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimePickerSelectComponent], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-handshake" style="color:var(--violet-light);"></i> Deals &amp; Sales Contracts</h2>
          <p class="subtitle">Contract pipeline, sales commission attribution & installment tracking</p>
        </div>
        <button class="btn btn-primary" (click)="openAddDealModal()">
          <i class="fa-solid fa-plus"></i> New Deal
        </button>
      </div>

      <!-- Deals Table -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>Deal Title</th>
                <th>Client</th>
                <th>Department</th>
                <th>Sales Rep &amp; Commission</th>
                <th>Total Value</th>
                <th>Paid</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let deal of deals">
                <td style="font-weight:700; color:#fff;">
                  <div>{{ deal.title }}</div>
                  <small style="color:var(--text-2); font-weight:normal;" *ngIf="deal.agreed_scope">Scope: {{ deal.agreed_scope }}</small>
                </td>
                <td style="color:var(--text-2);">{{ deal.client?.name || 'General Client' }}</td>
                <td><span class="dept-badge">{{ deal.department?.name || 'General' }}</span></td>
                <td>
                  <div *ngIf="deal.sales_person" style="font-weight:600; color:#fff;">{{ deal.sales_person.name }}</div>
                  <small style="color:var(--teal-light);" *ngIf="deal.sales_commission_value > 0">
                    Commission: {{ deal.sales_commission_value }} {{ deal.sales_commission_type === 'percentage' ? '%' : 'EGP' }}
                  </small>
                  <div *ngIf="!deal.sales_person" style="color:var(--text-3);">-</div>
                </td>
                <td style="font-weight:700; color:#fff;">{{ deal.calculated_total | number:'1.2-2' }} EGP</td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ deal.calculated_paid | number:'1.2-2' }} EGP</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ deal.remaining_balance | number:'1.2-2' }} EGP</td>
                <td><span class="badge badge-v">{{ deal.status }}</span></td>
                <td>
                  <button class="btn-action primary" (click)="openPaymentModal(deal)" title="Record payment installment">
                    <i class="fa-solid fa-money-bill-wave"></i> Record Payment
                  </button>
                </td>
              </tr>
              <tr *ngIf="deals.length === 0">
                <td colspan="9" style="text-align:center; padding:36px; color:var(--text-2);">No active deals found.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Add Deal Modal -->
      <div class="crm-modal-backdrop" *ngIf="showAddModal">
        <div class="crm-modal-card glass-panel wide-modal">
          <div class="modal-header">
            <h3><i class="fa-solid fa-handshake" style="color:var(--violet-light);"></i> Create New Deal &amp; Contract</h3>
            <button class="close-btn" (click)="closeAddModal()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="dealForm" (ngSubmit)="saveDeal()">
            <div class="form-grid">
              <div class="form-group full-width">
                <label>Deal Title <span class="required">*</span></label>
                <input type="text" formControlName="title" placeholder="e.g. Brand Identity & Video Campaign" />
              </div>
              <div class="form-group">
                <label>Target Client</label>
                <app-prime-picker-select
                  formControlName="client_id"
                  [items]="clients"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select client..."
                  addNewLabel="+ Quick add client"
                  (addNew)="triggerQuickAddClient()"
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Primary Department</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select department..."
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Sales Representative</label>
                <app-prime-picker-select
                  formControlName="sales_person_id"
                  [items]="employees"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select sales rep..."
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Commission Type</label>
                <select formControlName="sales_commission_type">
                  <option value="fixed">Fixed Amount (EGP)</option>
                  <option value="percentage">Percentage (%)</option>
                </select>
              </div>
              <div class="form-group">
                <label>Commission Value</label>
                <input type="number" formControlName="sales_commission_value" placeholder="e.g. 500 or 10" />
              </div>
              <div class="form-group">
                <label>Total Contract Value (EGP) <span class="required">*</span></label>
                <input type="number" formControlName="total_price" placeholder="12000" />
              </div>
              <div class="form-group full-width">
                <label>Agreed Scope</label>
                <textarea formControlName="agreed_scope" rows="3" placeholder="Scope of work details..."></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="closeAddModal()">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="dealForm.invalid || loading">
                {{ loading ? 'Saving...' : 'Save & Publish Deal' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Payment Modal -->
      <div class="crm-modal-backdrop" *ngIf="showPaymentModal && selectedDeal">
        <div class="crm-modal-card glass-panel">
          <div class="modal-header">
            <h3><i class="fa-solid fa-money-bill-wave" style="color:var(--emerald-light);"></i> Record Payment: {{ selectedDeal.title }}</h3>
            <button class="close-btn" (click)="closePaymentModal()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
            <div style="padding:20px 24px; display:flex; flex-direction:column; gap:14px;">
              <div class="form-group">
                <label>Payment Amount (EGP) <span class="required">*</span></label>
                <input type="number" formControlName="amount" [placeholder]="selectedDeal.remaining_balance" />
                <small style="color:var(--text-2);">Outstanding Balance: {{ selectedDeal.remaining_balance | number:'1.2-2' }} EGP</small>
              </div>
              <div class="form-group">
                <label>Payment Date</label>
                <input type="date" formControlName="payment_date" />
              </div>
              <div class="form-group">
                <label>Payment Method <span class="required">*</span></label>
                <select formControlName="payment_method">
                  <option value="cash">Cash (Local Safe)</option>
                  <option value="cash_hand">Direct Cash-in-hand</option>
                  <option value="instapay">InstaPay</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>
              <div class="form-group">
                <label>Receipt / Reference Number</label>
                <input type="text" formControlName="receipt_ref" placeholder="e.g. TXN-998811" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="closePaymentModal()">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="paymentForm.invalid || loading">
                {{ loading ? 'Processing...' : 'Confirm Payment' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;09cd592f55166f7e86203d965fa828cb87f3312d2a05493309b6fe7562980bb4;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/deals/deals-management.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.table-card {\n  padding: 0;\n  overflow: hidden;\n  border-radius: var(--r-lg);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  direction: ltr;\n}\n.crm-table th {\n  text-align: left;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.dept-badge {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.btn-action {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary {\n  color: var(--emerald-light);\n  background: var(--emerald-soft);\n  border-color: rgba(5, 150, 105, 0.2);\n}\n.btn-action.primary:hover {\n  background: rgba(5, 150, 105, 0.22);\n}\n.crm-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 520px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal {\n  max-width: 680px;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h3 {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width {\n  grid-column: span 2;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group select option {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=deals-management.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsManagementComponent, { className: "DealsManagementComponent", filePath: "src/app/components/deals/deals-management.component.ts", lineNumber: 227 });
})();
export {
  DealsManagementComponent
};
//# sourceMappingURL=chunk-QEWLCIVB.js.map
