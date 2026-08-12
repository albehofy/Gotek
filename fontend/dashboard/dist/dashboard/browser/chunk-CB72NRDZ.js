import {
  PrimePickerSelectComponent,
  Textarea,
  TextareaModule
} from "./chunk-3SIGNAQX.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-3J6XHX2M.js";
import {
  Dialog,
  DialogModule
} from "./chunk-B7S23FZC.js";
import "./chunk-SZOHPGWJ.js";
import "./chunk-MNYDLCPG.js";
import {
  InputText,
  InputTextModule,
  PrimeTemplate
} from "./chunk-7QQ4EFLW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DJW5WREC.js";
import {
  ApiService
} from "./chunk-DCUGWKDF.js";
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
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TC7O2TE3.js";

// src/app/components/deals/deals-management.component.ts
var _c0 = () => ({ width: "680px" });
var _c1 = () => ({ label: "\u0645\u0628\u0644\u063A \u062B\u0627\u0628\u062A (\u062C.\u0645)", value: "fixed" });
var _c2 = () => ({ label: "\u0646\u0633\u0628\u0629 \u0645\u0626\u0648\u064A\u0629 (%)", value: "percentage" });
var _c3 = (a0, a1) => [a0, a1];
var _c4 = () => ({ width: "480px" });
var _c5 = () => ({ label: "\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u064A\u0646\u0629 \u0627\u0644\u0645\u062D\u0644\u064A\u0629)", value: "cash" });
var _c6 = () => ({ label: "\u0646\u0642\u062F\u0627\u064B \u064A\u062F \u0628\u064A\u062F", value: "cash_hand" });
var _c7 = () => ({ label: "\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)", value: "instapay" });
var _c8 = () => ({ label: "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A", value: "bank_transfer" });
var _c9 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function DealsManagementComponent_tr_35_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u0627\u0644\u0646\u0637\u0627\u0642: ", deal_r2.agreed_scope, "");
  }
}
function DealsManagementComponent_tr_35_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
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
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u0627\u0644\u0639\u0645\u0648\u0644\u0629: ", deal_r2.sales_commission_value, " ", deal_r2.sales_commission_type === "percentage" ? "%" : "\u062C.\u0645", " ");
  }
}
function DealsManagementComponent_tr_35_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function DealsManagementComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DealsManagementComponent_tr_35_small_4_Template, 2, 1, "small", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, DealsManagementComponent_tr_35_div_11_Template, 2, 1, "div", 32)(12, DealsManagementComponent_tr_35_small_12_Template, 2, 2, "small", 33)(13, DealsManagementComponent_tr_35_div_13_Template, 2, 0, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 28);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 35);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 36);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 37);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "button", 38);
    \u0275\u0275listener("click", function DealsManagementComponent_tr_35_Template_button_click_27_listener() {
      const deal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPaymentModal(deal_r2));
    });
    \u0275\u0275element(28, "i", 39);
    \u0275\u0275text(29, " \u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deal_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(deal_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", deal_r2.agreed_scope);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((deal_r2.client == null ? null : deal_r2.client.name) || "\u0639\u0645\u064A\u0644 \u0639\u0627\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((deal_r2.department == null ? null : deal_r2.department.name) || "\u0639\u0627\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", deal_r2.sales_person);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", deal_r2.sales_commission_value > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !deal_r2.sales_person);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 11, deal_r2.calculated_total, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 14, deal_r2.calculated_paid, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 17, deal_r2.remaining_balance, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(deal_r2.status);
  }
}
function DealsManagementComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44)(2, "div", 45)(3, "div", 46);
    \u0275\u0275element(4, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 48);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0645\u0633\u062C\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 49);
    \u0275\u0275text(8, '\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 "\u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629" \u0644\u0625\u0636\u0627\u0641\u0629 \u0639\u0642\u062F \u0623\u0648 \u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629.');
    \u0275\u0275elementEnd()()()();
  }
}
function DealsManagementComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function DealsManagementComponent_ng_template_76_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275text(1, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.dealForm.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0648\u0646\u0634\u0631 \u0627\u0644\u0635\u0641\u0642\u0629", " ");
  }
}
function DealsManagementComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 17)(2, "label");
    \u0275\u0275text(3, "\u0645\u0628\u0644\u063A \u0627\u0644\u062F\u0641\u0639\u0629 (\u062C.\u0645) ");
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 53);
    \u0275\u0275elementStart(7, "small", 54);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 17)(11, "label");
    \u0275\u0275text(12, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "label");
    \u0275\u0275text(16, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644 / \u0627\u0644\u062F\u0641\u0639 ");
    \u0275\u0275elementStart(17, "span", 15);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "p-dropdown", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17)(21, "label");
    \u0275\u0275text(22, "\u0631\u0642\u0645 \u0627\u0644\u0625\u064A\u0635\u0627\u0644 / \u0627\u0644\u0645\u0631\u062C\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", ctx_r2.selectedDeal.remaining_balance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644: ", \u0275\u0275pipeBind2(9, 4, ctx_r2.selectedDeal.remaining_balance, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(11);
    \u0275\u0275property("appendTo", "body")("options", \u0275\u0275pureFunction4(11, _c9, \u0275\u0275pureFunction0(7, _c5), \u0275\u0275pureFunction0(8, _c6), \u0275\u0275pureFunction0(9, _c7), \u0275\u0275pureFunction0(10, _c8)));
  }
}
function DealsManagementComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function DealsManagementComponent_ng_template_80_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePaymentModal());
    });
    \u0275\u0275text(1, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.paymentForm.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629..." : "\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629", " ");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsManagementComponent, selectors: [["app-deals-management"]], decls: 81, vars: 30, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-handshake", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "table-card", "glass-panel"], [1, "table-responsive"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["header", "\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u0642\u0629 \u0648\u0639\u0642\u062F \u062C\u062F\u064A\u062F", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [3, "ngSubmit", "formGroup"], [1, "form-grid", 2, "padding", "10px 0"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "pInputText", "", "formControlName", "title", "placeholder", "\u0645\u062B\u0627\u0644: \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u062D\u0645\u0644\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A\u0629"], [1, "form-group"], ["formControlName", "client_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u064A\u0644...", "addNewLabel", "+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u0633\u0631\u064A\u0639", 3, "addNew", "items"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "items"], ["formControlName", "sales_person_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0638\u0641...", 3, "items"], ["formControlName", "sales_commission_type", "optionLabel", "label", "optionValue", "value", 3, "appendTo", "options"], ["type", "number", "pInputText", "", "formControlName", "sales_commission_value", "placeholder", "\u0645\u062B\u0627\u0644: 500 \u0623\u0648 10"], ["type", "number", "pInputText", "", "formControlName", "total_price", "placeholder", "12000"], ["pTextarea", "", "formControlName", "agreed_scope", "rows", "3", "placeholder", "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0642\u062F \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629..."], ["pTemplate", "footer"], [3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo", "header"], ["style", "padding:10px 0; display:flex; flex-direction:column; gap:14px;", 4, "ngIf"], [2, "font-weight", "700", "color", "#fff"], ["style", "color:var(--text-2); font-weight:normal; font-size:0.75rem;", 4, "ngIf"], [2, "color", "var(--text-2)", "font-weight", "500"], [1, "badge", "badge-t"], ["style", "font-weight:600; color:#fff;", 4, "ngIf"], ["style", "color:var(--teal-light);", 4, "ngIf"], ["style", "color:var(--text-3);", 4, "ngIf"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], [1, "badge", "badge-v", 2, "text-transform", "uppercase"], ["title", "\u062A\u0633\u062C\u064A\u0644 \u0642\u0633\u0637 \u0645\u0627\u0644\u064A\u0629", 1, "btn-action", "primary", 3, "click"], [1, "fa-solid", "fa-money-bill-wave"], [2, "color", "var(--text-2)", "font-weight", "normal", "font-size", "0.75rem"], [2, "font-weight", "600", "color", "#fff"], [2, "color", "var(--teal-light)"], [2, "color", "var(--text-3)"], ["colspan", "9"], [1, "empty-state"], [1, "empty-state-icon"], [1, "fa-solid", "fa-handshake-slash"], [1, "empty-state-title"], [1, "empty-state-desc"], ["type", "button", 1, "btn", "btn-glass", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "14px"], ["type", "number", "pInputText", "", "formControlName", "amount", 3, "placeholder"], [2, "color", "var(--text-2)"], ["type", "date", "pInputText", "", "formControlName", "payment_date"], ["formControlName", "payment_method", "optionLabel", "label", "optionValue", "value", 3, "appendTo", "options"], ["type", "text", "pInputText", "", "formControlName", "receipt_ref", "placeholder", "\u0645\u062B\u0627\u0644: TXN-998811"]], template: function DealsManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "\u0645\u062A\u0627\u0628\u0639\u0629 \u062E\u0637 \u0627\u0644\u0635\u0641\u0642\u0627\u062A\u060C \u0646\u0633\u0628 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u062D\u0631\u0643\u0627\u062A \u062F\u0641\u0639 \u0627\u0644\u0623\u0642\u0633\u0627\u0637");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function DealsManagementComponent_Template_button_click_8_listener() {
        return ctx.openAddDealModal();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " \u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "table", 8)(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "\u0627\u0644\u0639\u0645\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "\u0627\u0644\u062D\u0627\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, DealsManagementComponent_tr_35_Template, 30, 20, "tr", 9)(36, DealsManagementComponent_tr_36_Template, 9, 0, "tr", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function DealsManagementComponent_Template_p_dialog_visibleChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showAddModal, $event) || (ctx.showAddModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(38, "form", 12);
      \u0275\u0275listener("ngSubmit", function DealsManagementComponent_Template_form_ngSubmit_38_listener() {
        return ctx.saveDeal();
      });
      \u0275\u0275elementStart(39, "div", 13)(40, "div", 14)(41, "label");
      \u0275\u0275text(42, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 ");
      \u0275\u0275elementStart(43, "span", 15);
      \u0275\u0275text(44, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(45, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 17)(47, "label");
      \u0275\u0275text(48, "\u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "app-prime-picker-select", 18);
      \u0275\u0275listener("addNew", function DealsManagementComponent_Template_app_prime_picker_select_addNew_49_listener() {
        return ctx.triggerQuickAddClient();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 17)(51, "label");
      \u0275\u0275text(52, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "app-prime-picker-select", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 17)(55, "label");
      \u0275\u0275text(56, "\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "app-prime-picker-select", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 17)(59, "label");
      \u0275\u0275text(60, "\u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0648\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "p-dropdown", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 17)(63, "label");
      \u0275\u0275text(64, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 17)(67, "label");
      \u0275\u0275text(68, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629 (\u062C.\u0645) ");
      \u0275\u0275elementStart(69, "span", 15);
      \u0275\u0275text(70, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(71, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 14)(73, "label");
      \u0275\u0275text(74, "\u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0645\u062A\u0641\u0642 \u0639\u0644\u064A\u0647\u0627");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "textarea", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(76, DealsManagementComponent_ng_template_76_Template, 4, 2, "ng-template", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "p-dialog", 26);
      \u0275\u0275twoWayListener("visibleChange", function DealsManagementComponent_Template_p_dialog_visibleChange_77_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showPaymentModal, $event) || (ctx.showPaymentModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(78, "form", 12);
      \u0275\u0275listener("ngSubmit", function DealsManagementComponent_Template_form_ngSubmit_78_listener() {
        return ctx.savePayment();
      });
      \u0275\u0275template(79, DealsManagementComponent_div_79_Template, 24, 16, "div", 27)(80, DealsManagementComponent_ng_template_80_Template, 4, 2, "ng-template", 25);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275property("ngForOf", ctx.deals);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deals.length === 0);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showAddModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.dealForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("items", ctx.clients);
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.departments);
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.employees);
      \u0275\u0275advance(4);
      \u0275\u0275property("appendTo", "body")("options", \u0275\u0275pureFunction2(26, _c3, \u0275\u0275pureFunction0(24, _c1), \u0275\u0275pureFunction0(25, _c2)));
      \u0275\u0275advance(16);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c4));
      \u0275\u0275twoWayProperty("visible", ctx.showPaymentModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body")("header", "\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 / \u0642\u0633\u0637: " + ((ctx.selectedDeal == null ? null : ctx.selectedDeal.title) || ""));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.paymentForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedDeal);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    DecimalPipe,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    PrimePickerSelectComponent,
    DialogModule,
    Dialog,
    PrimeTemplate,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    DropdownModule,
    Dropdown
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.dept-badge[_ngcontent-%COMP%] {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary[_ngcontent-%COMP%] {\n  color: var(--emerald-light);\n  background: var(--emerald-soft);\n  border-color: rgba(5, 150, 105, 0.2);\n}\n.btn-action.primary[_ngcontent-%COMP%]:hover {\n  background: rgba(5, 150, 105, 0.22);\n}\n.crm-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: _ngcontent-%COMP%_modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=deals-management.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsManagementComponent, [{
    type: Component,
    args: [{ selector: "app-deals-management", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      PrimePickerSelectComponent,
      DialogModule,
      InputTextModule,
      TextareaModule,
      DropdownModule
    ], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-handshake" style="color:var(--violet-light);"></i> \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629</h2>
          <p class="subtitle">\u0645\u062A\u0627\u0628\u0639\u0629 \u062E\u0637 \u0627\u0644\u0635\u0641\u0642\u0627\u062A\u060C \u0646\u0633\u0628 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u062D\u0631\u0643\u0627\u062A \u062F\u0641\u0639 \u0627\u0644\u0623\u0642\u0633\u0627\u0637</p>
        </div>
        <button class="btn btn-primary" (click)="openAddDealModal()">
          <i class="fa-solid fa-plus"></i> \u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629
        </button>
      </div>

      <!-- Deals Table -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629</th>
                <th>\u0627\u0644\u0639\u0645\u064A\u0644</th>
                <th>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</th>
                <th>\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0629</th>
                <th>\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629</th>
                <th>\u0627\u0644\u0645\u062F\u0641\u0648\u0639</th>
                <th>\u0627\u0644\u0645\u062A\u0628\u0642\u064A</th>
                <th>\u0627\u0644\u062D\u0627\u0644\u0629</th>
                <th>\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let deal of deals">
                <td style="font-weight:700; color:#fff;">
                  <div>{{ deal.title }}</div>
                  <small style="color:var(--text-2); font-weight:normal; font-size:0.75rem;" *ngIf="deal.agreed_scope">\u0627\u0644\u0646\u0637\u0627\u0642: {{ deal.agreed_scope }}</small>
                </td>
                <td style="color:var(--text-2); font-weight:500;">{{ deal.client?.name || '\u0639\u0645\u064A\u0644 \u0639\u0627\u0645' }}</td>
                <td><span class="badge badge-t">{{ deal.department?.name || '\u0639\u0627\u0645' }}</span></td>
                <td>
                  <div *ngIf="deal.sales_person" style="font-weight:600; color:#fff;">{{ deal.sales_person.name }}</div>
                  <small style="color:var(--teal-light);" *ngIf="deal.sales_commission_value > 0">
                    \u0627\u0644\u0639\u0645\u0648\u0644\u0629: {{ deal.sales_commission_value }} {{ deal.sales_commission_type === 'percentage' ? '%' : '\u062C.\u0645' }}
                  </small>
                  <div *ngIf="!deal.sales_person" style="color:var(--text-3);">-</div>
                </td>
                <td style="font-weight:700; color:#fff;">{{ deal.calculated_total | number:'1.2-2' }} \u062C.\u0645</td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ deal.calculated_paid | number:'1.2-2' }} \u062C.\u0645</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ deal.remaining_balance | number:'1.2-2' }} \u062C.\u0645</td>
                <td><span class="badge badge-v" style="text-transform:uppercase;">{{ deal.status }}</span></td>
                <td>
                  <button class="btn-action primary" (click)="openPaymentModal(deal)" title="\u062A\u0633\u062C\u064A\u0644 \u0642\u0633\u0637 \u0645\u0627\u0644\u064A\u0629">
                    <i class="fa-solid fa-money-bill-wave"></i> \u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629
                  </button>
                </td>
              </tr>
              <tr *ngIf="deals.length === 0">
                <td colspan="9">
                  <div class="empty-state">
                    <div class="empty-state-icon"><i class="fa-solid fa-handshake-slash"></i></div>
                    <div class="empty-state-title">\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0645\u0633\u062C\u0644\u0629</div>
                    <div class="empty-state-desc">\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 "\u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629" \u0644\u0625\u0636\u0627\u0641\u0629 \u0639\u0642\u062F \u0623\u0648 \u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add Deal -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u0642\u0629 \u0648\u0639\u0642\u062F \u062C\u062F\u064A\u062F" [style]="{ width: '680px' }">
        <form [formGroup]="dealForm" (ngSubmit)="saveDeal()">
          <div class="form-grid" style="padding: 10px 0;">
            <div class="form-group full-width">
              <label>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 <span class="required">*</span></label>
              <input type="text" pInputText formControlName="title" placeholder="\u0645\u062B\u0627\u0644: \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u062D\u0645\u0644\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A\u0629" />
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641</label>
              <app-prime-picker-select
                formControlName="client_id"
                [items]="clients"
                optionLabel="name"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u064A\u0644..."
                addNewLabel="+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u0633\u0631\u064A\u0639"
                (addNew)="triggerQuickAddClient()"
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</label>
              <app-prime-picker-select
                formControlName="department_id"
                [items]="departments"
                optionLabel="name"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A</label>
              <app-prime-picker-select
                formControlName="sales_person_id"
                [items]="employees"
                optionLabel="name"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0638\u0641..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0648\u0644\u0629</label>
              <p-dropdown
                formControlName="sales_commission_type"
                [appendTo]="'body'"
                [options]="[
                  { label: '\u0645\u0628\u0644\u063A \u062B\u0627\u0628\u062A (\u062C.\u0645)', value: 'fixed' },
                  { label: '\u0646\u0633\u0628\u0629 \u0645\u0626\u0648\u064A\u0629 (%)', value: 'percentage' }
                ]"
                optionLabel="label"
                optionValue="value"
              ></p-dropdown>
            </div>
            <div class="form-group">
              <label>\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629</label>
              <input type="number" pInputText formControlName="sales_commission_value" placeholder="\u0645\u062B\u0627\u0644: 500 \u0623\u0648 10" />
            </div>
            <div class="form-group">
              <label>\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629 (\u062C.\u0645) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="total_price" placeholder="12000" />
            </div>
            <div class="form-group full-width">
              <label>\u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0645\u062A\u0641\u0642 \u0639\u0644\u064A\u0647\u0627</label>
              <textarea pTextarea formControlName="agreed_scope" rows="3" placeholder="\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0642\u062F \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629..."></textarea>
            </div>
          </div>

          <ng-template pTemplate="footer">
            <button type="button" class="btn btn-glass" (click)="closeAddModal()">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn btn-primary" [disabled]="dealForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0648\u0646\u0634\u0631 \u0627\u0644\u0635\u0641\u0642\u0629' }}
            </button>
          </ng-template>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Payment Modal -->
      <p-dialog [(visible)]="showPaymentModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 / \u0642\u0633\u0637: ' + (selectedDeal?.title || '')" [style]="{ width: '480px' }">
        <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;" *ngIf="selectedDeal">
            <div class="form-group">
              <label>\u0645\u0628\u0644\u063A \u0627\u0644\u062F\u0641\u0639\u0629 (\u062C.\u0645) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" [placeholder]="selectedDeal.remaining_balance" />
              <small style="color:var(--text-2);">\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644: {{ selectedDeal.remaining_balance | number:'1.2-2' }} \u062C.\u0645</small>
            </div>
            <div class="form-group">
              <label>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F</label>
              <input type="date" pInputText formControlName="payment_date" />
            </div>
            <div class="form-group">
              <label>\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644 / \u0627\u0644\u062F\u0641\u0639 <span class="required">*</span></label>
              <p-dropdown
                formControlName="payment_method"
                [appendTo]="'body'"
                [options]="[
                  { label: '\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u064A\u0646\u0629 \u0627\u0644\u0645\u062D\u0644\u064A\u0629)', value: 'cash' },
                  { label: '\u0646\u0642\u062F\u0627\u064B \u064A\u062F \u0628\u064A\u062F', value: 'cash_hand' },
                  { label: '\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)', value: 'instapay' },
                  { label: '\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A', value: 'bank_transfer' }
                ]"
                optionLabel="label"
                optionValue="value"
              ></p-dropdown>
            </div>
            <div class="form-group">
              <label>\u0631\u0642\u0645 \u0627\u0644\u0625\u064A\u0635\u0627\u0644 / \u0627\u0644\u0645\u0631\u062C\u0639</label>
              <input type="text" pInputText formControlName="receipt_ref" placeholder="\u0645\u062B\u0627\u0644: TXN-998811" />
            </div>
          </div>

          <ng-template pTemplate="footer">
            <button type="button" class="btn btn-glass" (click)="closePaymentModal()">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn btn-primary" [disabled]="paymentForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629...' : '\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629' }}
            </button>
          </ng-template>
        </form>
      </p-dialog>
    </div>
  `, styles: ['/* angular:styles/component:css;9254c928e55538e607aa379e95cc3af0169000495ca39101a586f6b0d24b4aca;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/deals/deals-management.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.dept-badge {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.btn-action {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary {\n  color: var(--emerald-light);\n  background: var(--emerald-soft);\n  border-color: rgba(5, 150, 105, 0.2);\n}\n.btn-action.primary:hover {\n  background: rgba(5, 150, 105, 0.22);\n}\n.crm-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 520px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal {\n  max-width: 680px;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h3 {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width {\n  grid-column: span 2;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group select option {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=deals-management.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsManagementComponent, { className: "DealsManagementComponent", filePath: "src/app/components/deals/deals-management.component.ts", lineNumber: 247 });
})();
export {
  DealsManagementComponent
};
//# sourceMappingURL=chunk-CB72NRDZ.js.map
