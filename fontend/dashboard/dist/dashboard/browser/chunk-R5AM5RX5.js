import {
  Textarea,
  TextareaModule
} from "./chunk-DWYKOETT.js";
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
  DatePicker,
  DatePickerModule
} from "./chunk-7ZP7QGS4.js";
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
  NumberValueAccessor,
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
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZYG2ULWX.js";

// src/app/components/deals/deals-management.component.ts
var _c0 = () => ({ width: "92vw", maxWidth: "680px" });
var _c1 = () => ({ label: "\u0628\u062F\u0648\u0646 \u0639\u0645\u0648\u0644\u0629 (\u0644\u0627 \u064A\u0648\u062C\u062F)", id: "none" });
var _c2 = () => ({ label: "\u0645\u0628\u0644\u063A \u062B\u0627\u0628\u062A (\u062C.\u0645)", id: "fixed" });
var _c3 = () => ({ label: "\u0646\u0633\u0628\u0629 \u0645\u0626\u0648\u064A\u0629 (%)", id: "percentage" });
var _c4 = (a0, a1, a2) => [a0, a1, a2];
var _c5 = () => ({ width: "92vw", maxWidth: "480px" });
var _c6 = () => ({ standalone: true });
var _c7 = () => ({ label: "\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u064A\u0646\u0629 \u0627\u0644\u0645\u062D\u0644\u064A\u0629)", value: "cash" });
var _c8 = () => ({ label: "\u0646\u0642\u062F\u0627\u064B \u064A\u062F \u0628\u064A\u062F", value: "cash_hand" });
var _c9 = () => ({ label: "\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)", value: "instapay" });
var _c10 = () => ({ label: "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A", value: "bank_transfer" });
var _c11 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function DealsManagementComponent_tr_41_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(deal_r2.sales_person.name);
  }
}
function DealsManagementComponent_tr_41_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u0627\u0644\u0639\u0645\u0648\u0644\u0629: ", deal_r2.sales_commission_value, " ", deal_r2.sales_commission_type === "percentage" ? "%" : "\u062C.\u0645", " ");
  }
}
function DealsManagementComponent_tr_41_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function DealsManagementComponent_tr_41_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function DealsManagementComponent_tr_41_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const deal_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPaymentModal(deal_r2));
    });
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementEnd();
  }
}
function DealsManagementComponent_tr_41_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function DealsManagementComponent_tr_41_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const deal_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDeleteDeal(deal_r2));
    });
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementEnd();
  }
}
function DealsManagementComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 54)(2, "div", 55);
    \u0275\u0275listener("click", function DealsManagementComponent_tr_41_Template_div_click_2_listener() {
      const deal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDealDetails(deal_r2));
    });
    \u0275\u0275element(3, "i", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 58);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, DealsManagementComponent_tr_41_div_11_Template, 2, 1, "div", 59)(12, DealsManagementComponent_tr_41_small_12_Template, 2, 2, "small", 60)(13, DealsManagementComponent_tr_41_div_13_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 54);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 62);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 63);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 64);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "div", 65)(28, "button", 66);
    \u0275\u0275listener("click", function DealsManagementComponent_tr_41_Template_button_click_28_listener() {
      const deal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDealDetails(deal_r2));
    });
    \u0275\u0275element(29, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, DealsManagementComponent_tr_41_button_30_Template, 2, 0, "button", 68)(31, DealsManagementComponent_tr_41_button_31_Template, 2, 0, "button", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deal_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", deal_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getClientName(deal_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((deal_r2.department == null ? null : deal_r2.department.name) || "\u0639\u0627\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", deal_r2.sales_person);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", deal_r2.sales_commission_value > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !deal_r2.sales_person);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 13, deal_r2.calculated_total || deal_r2.total_price, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 16, deal_r2.calculated_paid || deal_r2.paid_amount, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 19, deal_r2.remaining_balance, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "status-" + (deal_r2.status || "pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(deal_r2.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r2.isClient());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isManagerOrAdmin());
  }
}
function DealsManagementComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77)(2, "div", 78)(3, "div", 79);
    \u0275\u0275element(4, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 81);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0645\u0633\u062C\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 82);
    \u0275\u0275text(8, '\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 "\u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629" \u0644\u0625\u0636\u0627\u0641\u0629 \u0639\u0642\u062F \u0623\u0648 \u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629.');
    \u0275\u0275elementEnd()()()();
  }
}
function DealsManagementComponent_div_43_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function DealsManagementComponent_div_43_button_22_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changePage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r8 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r8, " ");
  }
}
function DealsManagementComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "div", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 86)(5, "span");
    \u0275\u0275text(6, "\u0639\u0631\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 87);
    \u0275\u0275twoWayListener("ngModelChange", function DealsManagementComponent_div_43_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pageSize, $event) || (ctx_r2.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DealsManagementComponent_div_43_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPerPageChange());
    });
    \u0275\u0275elementStart(8, "option", 88);
    \u0275\u0275text(9, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 88);
    \u0275\u0275text(11, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 88);
    \u0275\u0275text(13, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 88);
    \u0275\u0275text(15, "50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\u0635\u0641\u0648\u0641");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 89)(19, "button", 90);
    \u0275\u0275listener("click", function DealsManagementComponent_div_43_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(ctx_r2.currentPage - 1));
    });
    \u0275\u0275element(20, "i", 91);
    \u0275\u0275text(21, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, DealsManagementComponent_div_43_button_22_Template, 2, 3, "button", 92);
    \u0275\u0275elementStart(23, "button", 90);
    \u0275\u0275listener("click", function DealsManagementComponent_div_43_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(ctx_r2.currentPage + 1));
    });
    \u0275\u0275text(24, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    \u0275\u0275element(25, "i", 93);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" \u0639\u0631\u0636 ", (ctx_r2.currentPage - 1) * ctx_r2.pageSize + 1, " \u0625\u0644\u0649 ", ctx_r2.currentPage * ctx_r2.pageSize > ctx_r2.totalRecords ? ctx_r2.totalRecords : ctx_r2.currentPage * ctx_r2.pageSize, " \u0645\u0646 \u0623\u0635\u0644 ", ctx_r2.totalRecords, " \u0635\u0641\u0642\u0629 ");
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
function DealsManagementComponent_small_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 95);
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2, " \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function DealsManagementComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label");
    \u0275\u0275text(2, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 97);
    \u0275\u0275elementEnd();
  }
}
function DealsManagementComponent_small_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 95);
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2, " \u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u062A\u0633\u0627\u0648\u064A 0 \u0623\u0648 \u0623\u0643\u062B\u0631 ");
    \u0275\u0275elementEnd();
  }
}
function DealsManagementComponent_div_90_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "div", 102)(3, "label");
    \u0275\u0275text(4, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 ");
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function DealsManagementComponent_div_90_div_1_Template_input_ngModelChange_7_listener($event) {
      const t_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(t_r10.title, $event) || (t_r10.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 104)(9, "div", 105)(10, "label");
    \u0275\u0275text(11, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0646\u0641\u0630");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "app-prime-picker-select", 106);
    \u0275\u0275twoWayListener("ngModelChange", function DealsManagementComponent_div_90_div_1_Template_app_prime_picker_select_ngModelChange_12_listener($event) {
      const t_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(t_r10.department_id, $event) || (t_r10.department_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 107)(14, "label");
    \u0275\u0275text(15, "\u0627\u0644\u0633\u0639\u0631 \u0644\u0644\u0639\u0645\u064A\u0644 (\u062C.\u0645)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function DealsManagementComponent_div_90_div_1_Template_input_ngModelChange_16_listener($event) {
      const t_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(t_r10.client_price, $event) || (t_r10.client_price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 109)(18, "label");
    \u0275\u0275text(19, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 110);
    \u0275\u0275listener("click", function DealsManagementComponent_div_90_div_1_Template_button_click_20_listener() {
      const idx_r11 = \u0275\u0275restoreView(_r9).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeTaskRow(idx_r11));
    });
    \u0275\u0275element(21, "i", 76);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", t_r10.title);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c6));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", t_r10.department_id);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c6))("items", ctx_r2.departments);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", t_r10.client_price);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c6));
  }
}
function DealsManagementComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, DealsManagementComponent_div_90_div_1_Template, 22, 10, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.dealTasks);
  }
}
function DealsManagementComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275text(2, " \u064A\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0647\u0646\u0627 \u0644\u062A\u0648\u0632\u064A\u0639\u0647\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0639\u0644\u0649 \u0645\u062F\u064A\u0631\u064A \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0639\u0646\u062F \u0627\u0644\u062D\u0641\u0638. ");
    \u0275\u0275elementEnd();
  }
}
function DealsManagementComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 25)(2, "label");
    \u0275\u0275text(3, "\u0645\u0628\u0644\u063A \u0627\u0644\u062F\u0641\u0639\u0629 (\u062C.\u0645) ");
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 113);
    \u0275\u0275elementStart(7, "small", 114);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25)(11, "label");
    \u0275\u0275text(12, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "p-datepicker", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 25)(15, "label");
    \u0275\u0275text(16, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644 / \u0627\u0644\u062F\u0641\u0639 ");
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "p-dropdown", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25)(21, "label");
    \u0275\u0275text(22, "\u0631\u0642\u0645 \u0627\u0644\u0625\u064A\u0635\u0627\u0644 / \u0627\u0644\u0645\u0631\u062C\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", ctx_r2.selectedDeal.remaining_balance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644: ", \u0275\u0275pipeBind2(9, 7, ctx_r2.selectedDeal.remaining_balance, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(5);
    \u0275\u0275property("showIcon", true)("iconDisplay", "input")("appendTo", "body");
    \u0275\u0275advance(6);
    \u0275\u0275property("appendTo", "body")("options", \u0275\u0275pureFunction4(14, _c11, \u0275\u0275pureFunction0(10, _c7), \u0275\u0275pureFunction0(11, _c8), \u0275\u0275pureFunction0(12, _c9), \u0275\u0275pureFunction0(13, _c10)));
  }
}
var DealsManagementComponent = class _DealsManagementComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  router = inject(Router);
  toastService = inject(ToastService);
  confirmService = inject(ConfirmService);
  deals = [];
  clients = [];
  departments = [];
  employees = [];
  statusList = [
    { id: "", label: "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0627\u0644\u0627\u062A" },
    { id: "pending", label: "\u0645\u0639\u0644\u0642\u0629 / \u062A\u062D\u062A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629" },
    { id: "active", label: "\u0646\u0634\u0637\u0629 / \u062C\u0627\u0631\u064A\u0629" },
    { id: "won", label: "\u0645\u0643\u062A\u0645\u0644\u0629 / \u0646\u0627\u062C\u062D\u0629" },
    { id: "closed", label: "\u0645\u063A\u0644\u0642\u0629" },
    { id: "cancelled", label: "\u0645\u0644\u063A\u0627\u0629" }
  ];
  showAddModal = false;
  showPaymentModal = false;
  showAddClientModal = false;
  showQuickClientPw = false;
  selectedDeal = null;
  loading = false;
  dealForm;
  paymentForm;
  quickClientForm;
  currentUser = null;
  searchQuery = "";
  selectedStatus = "";
  currentPage = 1;
  pageSize = 5;
  totalRecords = 0;
  getClientName(item) {
    if (!item)
      return "\u0639\u0645\u064A\u0644 \u0639\u0627\u0645";
    if (typeof item === "string" && item.trim())
      return item === "[object Object]" ? "\u0639\u0645\u064A\u0644 \u0639\u0627\u0645" : item;
    if (typeof item.client_name === "string" && item.client_name.trim() && item.client_name !== "[object Object]")
      return item.client_name;
    if (item.client_name && typeof item.client_name === "object") {
      const n = item.client_name.name || item.client_name.client_name;
      if (n && typeof n === "string" && n !== "[object Object]")
        return n;
    }
    if (typeof item.client === "string" && item.client.trim() && item.client !== "[object Object]")
      return item.client;
    if (item.client && typeof item.client === "object") {
      const n = item.client.name || item.client.client_name || item.client.company || item.client.full_name;
      if (n && typeof n === "string" && n !== "[object Object]")
        return n;
    }
    if (typeof item.name === "string" && item.name.trim() && item.name !== "[object Object]")
      return item.name;
    return "\u0639\u0645\u064A\u0644 \u0639\u0627\u0645";
  }
  isClient() {
    const userStr = localStorage.getItem("user");
    if (!userStr)
      return false;
    try {
      const user = JSON.parse(userStr);
      return user.role === "client";
    } catch {
      return false;
    }
  }
  isManagerOrAdmin() {
    if (!this.currentUser)
      return true;
    return ["super_admin", "admin", "department_manager"].includes(this.currentUser.role);
  }
  confirmDeleteDeal(deal) {
    this.confirmService.confirm({
      title: "\u062A\u0623\u0643\u064A\u062F \u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F",
      message: `\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u0642\u0629 "${deal.title}" \u0648\u0627\u0644\u0639\u0642\u062F \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0627 \u0646\u0647\u0627\u0626\u064A\u0627\u064B\u061F`,
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u0642\u0629",
      cancelText: "\u062A\u0631\u0627\u062C\u0639 \u0648\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      icon: "fa-solid fa-trash-can",
      accept: () => {
        this.loading = true;
        this.apiService.deleteDeal(deal.id, false).subscribe({
          next: () => {
            this.loading = false;
            this.toastService.success(`\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u0642\u0629 "${deal.title}" \u0628\u0646\u062C\u0627\u062D`, "\u062A\u0645 \u0627\u0644\u062D\u0630\u0641");
            this.loadData();
          },
          error: (err) => {
            this.loading = false;
            this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u0642\u0629", "\u062E\u0637\u0623 \u0628\u0627\u0644\u062D\u0630\u0641");
          }
        });
      }
    });
  }
  saveQuickClient() {
    if (this.quickClientForm.invalid) {
      this.quickClientForm.markAllAsTouched();
      this.toastService.warning("\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      return;
    }
    this.loading = true;
    const payload = __spreadProps(__spreadValues({}, this.quickClientForm.value), {
      role: "client"
    });
    this.apiService.createUser(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.toastService.success("\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F \u0628\u0646\u062C\u0627\u062D");
        this.showAddClientModal = false;
        if (res && res.data) {
          this.clients.push(res.data);
          this.dealForm.patchValue({ client_id: res.data.id });
        }
        this.loadDropdownOptions();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u064A\u0644");
      }
    });
  }
  saveDeal() {
    if (this.dealForm.invalid) {
      this.dealForm.markAllAsTouched();
      this.toastService.warning("\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D \u0642\u0628\u0644 \u0627\u0644\u062D\u0641\u0638", "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644\u0629");
      return;
    }
    this.loading = true;
    const validTasks = (this.dealTasks || []).filter((t) => t.title && t.title.trim());
    const payload = __spreadProps(__spreadValues({}, this.dealForm.value), {
      tasks: validTasks
    });
    this.apiService.createDeal(payload).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success("\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F \u0628\u0646\u062C\u0627\u062D", "\u062A\u0645\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629");
        this.closeAddModal();
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u062D\u0641\u0638 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F");
      }
    });
  }
  savePayment() {
    if (this.paymentForm.invalid || !this.selectedDeal) {
      this.paymentForm.markAllAsTouched();
      this.toastService.warning("\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0645\u0628\u0644\u063A \u0648\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062F\u0641\u0639\u0629 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      return;
    }
    this.loading = true;
    const payload = __spreadProps(__spreadValues({}, this.paymentForm.value), {
      payment_date: this.formatDatePayload(this.paymentForm.value.payment_date),
      deal_id: this.selectedDeal.id,
      client_id: this.selectedDeal.client_id
    });
    this.apiService.storeClientPayment(payload).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success("\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0628\u0646\u062C\u0627\u062D", "\u062A\u0645\u062A \u0627\u0644\u062F\u0641\u0639\u0629");
        this.closePaymentModal();
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
      }
    });
  }
  ngOnInit() {
    try {
      const uStr = localStorage.getItem("mediaglow_user");
      if (uStr)
        this.currentUser = JSON.parse(uStr);
    } catch (e) {
    }
    this.initForms();
    this.loadDropdownOptions();
    this.loadData();
  }
  loadDropdownOptions() {
    this.apiService.getUsers("client").subscribe((res) => {
      this.clients = Array.isArray(res) ? res : res?.data || [];
    });
    this.apiService.getDepartments().subscribe((res) => {
      this.departments = Array.isArray(res) ? res : res?.data || [];
    });
    this.apiService.getUsers().subscribe((res) => {
      const arr = Array.isArray(res) ? res : res?.data || [];
      this.employees = arr.filter((u) => u.role !== "client" && u.role !== "Client");
    });
  }
  get employeesWithNoneOption() {
    return [
      { id: null, name: "\u0628\u062F\u0648\u0646 \u0645\u0633\u0624\u0648\u0644 \u0645\u0628\u064A\u0639\u0627\u062A (\u0644\u0627 \u064A\u0648\u062C\u062F)" },
      ...this.employees
    ];
  }
  initForms() {
    this.dealForm = this.fb.group({
      title: ["", Validators.required],
      client_id: [null],
      department_id: [null],
      sales_person_id: [null],
      sales_commission_type: ["none"],
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
    this.quickClientForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      password: ["password123", Validators.required]
    });
  }
  loadData() {
    const params = {
      page: this.currentPage,
      per_page: this.pageSize,
      search: this.searchQuery,
      status: this.selectedStatus
    };
    this.apiService.getDeals(params).subscribe((res) => {
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
      if (this.currentUser?.role === "client") {
        const u = this.currentUser;
        raw = raw.filter((d) => d.client_id === u.id || d.client?.id === u.id || d.client?.email === u.email || d.client_name === u.name || d.client === u.name);
      }
      this.deals = raw;
    });
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadData();
  }
  onPerPageChange() {
    this.currentPage = 1;
    this.loadData();
  }
  changePage(p) {
    if (p < 1 || p > this.totalPages)
      return;
    this.currentPage = p;
    this.loadData();
  }
  get totalPages() {
    return Math.ceil(this.totalRecords / this.pageSize) || 1;
  }
  get pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  getStatusLabel(status) {
    switch (status) {
      case "active":
        return "\u0646\u0634\u0637\u0629 / \u062C\u0627\u0631\u064A\u0629";
      case "completed":
        return "\u0645\u0643\u062A\u0645\u0644\u0629";
      case "cancelled":
        return "\u0645\u0644\u063A\u0627\u0629";
      case "pending":
      default:
        return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";
    }
  }
  openDealDetails(deal) {
    this.router.navigate(["/deals", deal.id]);
  }
  dealTasks = [];
  addTaskRow() {
    this.dealTasks.push({
      title: "",
      department_id: this.dealForm?.value?.department_id || null,
      client_price: 0
    });
  }
  removeTaskRow(idx) {
    this.dealTasks.splice(idx, 1);
  }
  openAddDealModal() {
    this.dealForm.reset({ sales_commission_type: "fixed", sales_commission_value: 0, total_price: 0 });
    this.dealTasks = [];
    this.showAddModal = true;
  }
  openAddModal() {
    this.openAddDealModal();
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  triggerQuickAddClient() {
    this.quickClientForm.reset({ password: "password123" });
    this.showQuickClientPw = false;
    this.showAddClientModal = true;
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
  formatDatePayload(val) {
    if (!val)
      return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    if (val instanceof Date) {
      const y = val.getFullYear();
      const m = String(val.getMonth() + 1).padStart(2, "0");
      const d = String(val.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    }
    if (typeof val === "string")
      return val.split("T")[0];
    return String(val);
  }
  static \u0275fac = function DealsManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DealsManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsManagementComponent, selectors: [["app-deals-management"]], decls: 138, vars: 61, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-handshake", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "filters-bar", "glass-panel"], [1, "search-field"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "placeholder", "\u0627\u0644\u0628\u062D\u062B \u0628\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 \u0623\u0648 \u0646\u0637\u0627\u0642 \u0627\u0644\u0639\u0645\u0644...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-dropdown", 2, "min-width", "200px"], ["optionLabel", "label", "optionValue", "id", "placeholder", "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0627\u0644\u0627\u062A", 3, "ngModelChange", "onChange", "ngModel", "items"], [1, "table-card", "glass-panel"], [1, "table-responsive"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "table-pagination-bar", 4, "ngIf"], ["header", "\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u0642\u0629 \u0648\u0639\u0642\u062F \u062C\u062F\u064A\u062F", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [3, "ngSubmit", "formGroup"], [1, "form-grid", 2, "padding", "20px 0 10px"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "pInputText", "", "formControlName", "title", "placeholder", "\u0645\u062B\u0627\u0644: \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u062D\u0645\u0644\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A\u0629"], ["class", "field-error-msg", 4, "ngIf"], [1, "form-group"], ["formControlName", "client_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u064A\u0644...", "addNewLabel", "+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u0633\u0631\u064A\u0639", 3, "addNew", "items"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "items"], ["formControlName", "sales_person_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0628\u062F\u0648\u0646 \u0645\u0633\u0624\u0648\u0644 \u0645\u0628\u064A\u0639\u0627\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)...", 3, "items"], ["formControlName", "sales_commission_type", "optionLabel", "label", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0648\u0644\u0629...", 3, "items"], ["class", "form-group", 4, "ngIf"], ["type", "number", "pInputText", "", "formControlName", "total_price", "placeholder", "12000"], ["pTextarea", "", "formControlName", "agreed_scope", "rows", "3", "placeholder", "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0642\u062F \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629..."], [1, "full-width", "tasks-builder-section"], [1, "tasks-builder-head"], [2, "font-weight", "800", "color", "var(--violet-light)", "font-size", "0.88rem", "margin", "0"], [1, "fa-solid", "fa-list-check", 2, "margin-left", "6px"], ["type", "button", 1, "btn-add-task-row", 3, "click"], ["class", "tasks-list-rows", 4, "ngIf"], ["class", "tasks-empty-hint", 4, "ngIf"], [1, "dialog-footer-actions"], ["type", "button", 1, "btn-dialog-cancel", 3, "click"], ["type", "submit", 1, "btn-dialog-submit", 3, "disabled"], [3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo", "header"], ["style", "padding:10px 0; display:flex; flex-direction:column; gap:14px;", 4, "ngIf"], ["header", "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "14px"], ["type", "text", "pInputText", "", "formControlName", "name", "placeholder", "\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0627\u0644\u0623\u0645\u0644 \u0644\u0644\u062A\u062C\u0627\u0631\u0629"], ["type", "email", "pInputText", "", "formControlName", "email", "placeholder", "client@example.com"], ["type", "text", "pInputText", "", "formControlName", "phone", "placeholder", "010xxxxxxx"], [1, "password-wrapper"], ["pInputText", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type"], ["type", "button", 1, "btn-toggle-pw", 3, "click", "title"], [1, "fa-solid", 3, "ngClass"], [2, "font-weight", "700", "color", "var(--text)"], ["title", "\u0627\u0646\u0642\u0631 \u0644\u0641\u062A\u062D \u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0634\u0627\u0645\u0644\u0629 \u0644\u0644\u0635\u0641\u0642\u0629", 1, "deal-title-clickable", 3, "click"], [1, "fa-solid", "fa-file-contract", 2, "color", "var(--violet-light)", "margin-left", "6px"], [2, "color", "var(--text-2)", "font-weight", "500"], [1, "badge", "badge-t"], ["style", "font-weight:600; color:var(--text);", 4, "ngIf"], ["style", "color:var(--teal-light); font-weight:600;", 4, "ngIf"], ["style", "color:var(--text-3);", 4, "ngIf"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], [1, "status-pill", 3, "ngClass"], [1, "actions-group"], ["title", "\u0641\u062A\u062D \u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0634\u0627\u0645\u0644\u0629", 1, "action-icon-btn", "btn-violet", 3, "click"], [1, "fa-solid", "fa-eye"], ["class", "action-icon-btn btn-emerald", "title", "\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u0645\u0627\u0644\u064A\u0629 \u062C\u062F\u064A\u062F\u0629", 3, "click", 4, "ngIf"], ["class", "action-icon-btn btn-rose", "title", "\u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F", 3, "click", 4, "ngIf"], [2, "font-weight", "600", "color", "var(--text)"], [2, "color", "var(--teal-light)", "font-weight", "600"], [2, "color", "var(--text-3)"], ["title", "\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u0645\u0627\u0644\u064A\u0629 \u062C\u062F\u064A\u062F\u0629", 1, "action-icon-btn", "btn-emerald", 3, "click"], [1, "fa-solid", "fa-money-bill-wave"], ["title", "\u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F", 1, "action-icon-btn", "btn-rose", 3, "click"], [1, "fa-solid", "fa-trash-can"], ["colspan", "9"], [1, "empty-state"], [1, "empty-state-icon"], [1, "fa-solid", "fa-handshake-slash"], [1, "empty-state-title"], [1, "empty-state-desc"], [1, "table-pagination-bar"], [1, "pagination-info-group"], [1, "pagination-info"], [1, "pagination-per-page"], [1, "pg-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [1, "pagination-controls"], [1, "pg-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-chevron-right"], ["class", "pg-num-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-chevron-left"], [1, "pg-num-btn", 3, "click"], [1, "field-error-msg"], [1, "fa-solid", "fa-circle-exclamation"], ["type", "number", "pInputText", "", "formControlName", "sales_commission_value", "placeholder", "\u0645\u062B\u0627\u0644: 500 \u0623\u0648 10"], [1, "tasks-list-rows"], ["class", "task-input-card", 4, "ngFor", "ngForOf"], [1, "task-input-card"], [1, "task-card-inner"], [1, "form-group", "task-title-group"], ["type", "text", "pInputText", "", "placeholder", "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629...", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "task-details-row"], [1, "form-group", "flex-dept"], ["optionLabel", "name", "optionValue", "id", "placeholder", "\u0646\u0641\u0633 \u0642\u0633\u0645 \u0627\u0644\u0635\u0641\u0642\u0629 (\u062A\u0644\u0642\u0627\u0626\u064A)", 3, "ngModelChange", "ngModel", "ngModelOptions", "items"], [1, "form-group", "flex-price"], ["type", "number", "pInputText", "", "placeholder", "0", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "form-group", "flex-del"], ["type", "button", "title", "\u062D\u0630\u0641 \u0627\u0644\u0645\u0647\u0645\u0629", 1, "btn-remove-task-row", 3, "click"], [1, "tasks-empty-hint"], [1, "fa-solid", "fa-info-circle"], ["type", "number", "pInputText", "", "formControlName", "amount", 3, "placeholder"], [2, "color", "var(--text-2)"], ["formControlName", "payment_date", "dateFormat", "yy-mm-dd", "placeholder", "\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F...", "styleClass", "w-full", 3, "showIcon", "iconDisplay", "appendTo"], ["formControlName", "payment_method", "optionLabel", "label", "optionValue", "value", 3, "appendTo", "options"], ["type", "text", "pInputText", "", "formControlName", "receipt_ref", "placeholder", "\u0645\u062B\u0627\u0644: TXN-998811"]], template: function DealsManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "\u0645\u062A\u0627\u0628\u0639\u0629 \u062E\u0637 \u0627\u0644\u0635\u0641\u0642\u0627\u062A\u060C \u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E\u060C \u0627\u0644\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062F\u062F\u0629 \u0648\u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629\u060C \u0648\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629 \u0648\u0627\u0644\u062C\u0627\u0631\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function DealsManagementComponent_Template_button_click_8_listener() {
        return ctx.openAddDealModal();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " \u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function DealsManagementComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function DealsManagementComponent_Template_input_input_14_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "app-prime-picker-select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function DealsManagementComponent_Template_app_prime_picker_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function DealsManagementComponent_Template_app_prime_picker_select_onChange_16_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "table", 14)(20, "thead")(21, "tr")(22, "th");
      \u0275\u0275text(23, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "\u0627\u0644\u0639\u0645\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "\u0627\u0644\u062D\u0627\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "tbody");
      \u0275\u0275template(41, DealsManagementComponent_tr_41_Template, 32, 22, "tr", 15)(42, DealsManagementComponent_tr_42_Template, 9, 0, "tr", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(43, DealsManagementComponent_div_43_Template, 26, 11, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p-dialog", 18);
      \u0275\u0275twoWayListener("visibleChange", function DealsManagementComponent_Template_p_dialog_visibleChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showAddModal, $event) || (ctx.showAddModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(45, "form", 19);
      \u0275\u0275listener("ngSubmit", function DealsManagementComponent_Template_form_ngSubmit_45_listener() {
        return ctx.saveDeal();
      });
      \u0275\u0275elementStart(46, "div", 20)(47, "div", 21)(48, "label");
      \u0275\u0275text(49, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 ");
      \u0275\u0275elementStart(50, "span", 22);
      \u0275\u0275text(51, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "input", 23);
      \u0275\u0275template(53, DealsManagementComponent_small_53_Template, 3, 0, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 25)(55, "label");
      \u0275\u0275text(56, "\u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "app-prime-picker-select", 26);
      \u0275\u0275listener("addNew", function DealsManagementComponent_Template_app_prime_picker_select_addNew_57_listener() {
        return ctx.triggerQuickAddClient();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 25)(59, "label");
      \u0275\u0275text(60, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "app-prime-picker-select", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 25)(63, "label");
      \u0275\u0275text(64, "\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "app-prime-picker-select", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 25)(67, "label");
      \u0275\u0275text(68, "\u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0648\u0644\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "app-prime-picker-select", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, DealsManagementComponent_div_70_Template, 4, 0, "div", 30);
      \u0275\u0275elementStart(71, "div", 25)(72, "label");
      \u0275\u0275text(73, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629 (\u062C.\u0645) ");
      \u0275\u0275elementStart(74, "span", 22);
      \u0275\u0275text(75, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(76, "input", 31);
      \u0275\u0275template(77, DealsManagementComponent_small_77_Template, 3, 0, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 21)(79, "label");
      \u0275\u0275text(80, "\u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0645\u062A\u0641\u0642 \u0639\u0644\u064A\u0647\u0627");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "textarea", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 33)(83, "div", 34)(84, "label", 35);
      \u0275\u0275element(85, "i", 36);
      \u0275\u0275text(86, " \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0644\u0644\u0635\u0641\u0642\u0629 (\u062A\u064F\u0633\u0646\u062F \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0644\u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "button", 37);
      \u0275\u0275listener("click", function DealsManagementComponent_Template_button_click_87_listener() {
        return ctx.addTaskRow();
      });
      \u0275\u0275element(88, "i", 5);
      \u0275\u0275text(89, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(90, DealsManagementComponent_div_90_Template, 2, 1, "div", 38)(91, DealsManagementComponent_div_91_Template, 3, 0, "div", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 40)(93, "button", 41);
      \u0275\u0275listener("click", function DealsManagementComponent_Template_button_click_93_listener() {
        return ctx.closeAddModal();
      });
      \u0275\u0275text(94, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "button", 42);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "p-dialog", 43);
      \u0275\u0275twoWayListener("visibleChange", function DealsManagementComponent_Template_p_dialog_visibleChange_97_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showPaymentModal, $event) || (ctx.showPaymentModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(98, "form", 19);
      \u0275\u0275listener("ngSubmit", function DealsManagementComponent_Template_form_ngSubmit_98_listener() {
        return ctx.savePayment();
      });
      \u0275\u0275template(99, DealsManagementComponent_div_99_Template, 24, 19, "div", 44);
      \u0275\u0275elementStart(100, "div", 40)(101, "button", 41);
      \u0275\u0275listener("click", function DealsManagementComponent_Template_button_click_101_listener() {
        return ctx.closePaymentModal();
      });
      \u0275\u0275text(102, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "button", 42);
      \u0275\u0275text(104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(105, "p-dialog", 45);
      \u0275\u0275twoWayListener("visibleChange", function DealsManagementComponent_Template_p_dialog_visibleChange_105_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showAddClientModal, $event) || (ctx.showAddClientModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(106, "form", 19);
      \u0275\u0275listener("ngSubmit", function DealsManagementComponent_Template_form_ngSubmit_106_listener() {
        return ctx.saveQuickClient();
      });
      \u0275\u0275elementStart(107, "div", 46)(108, "div", 25)(109, "label");
      \u0275\u0275text(110, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 / \u0627\u0644\u0634\u0631\u0643\u0629 ");
      \u0275\u0275elementStart(111, "span", 22);
      \u0275\u0275text(112, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(113, "input", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 25)(115, "label");
      \u0275\u0275text(116, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
      \u0275\u0275elementStart(117, "span", 22);
      \u0275\u0275text(118, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(119, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 25)(121, "label");
      \u0275\u0275text(122, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 / \u0627\u0644\u0647\u0627\u062A\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275element(123, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 25)(125, "label");
      \u0275\u0275text(126, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 ");
      \u0275\u0275elementStart(127, "span", 22);
      \u0275\u0275text(128, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 50);
      \u0275\u0275element(130, "input", 51);
      \u0275\u0275elementStart(131, "button", 52);
      \u0275\u0275listener("click", function DealsManagementComponent_Template_button_click_131_listener() {
        return ctx.showQuickClientPw = !ctx.showQuickClientPw;
      });
      \u0275\u0275element(132, "i", 53);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(133, "div", 40)(134, "button", 41);
      \u0275\u0275listener("click", function DealsManagementComponent_Template_button_click_134_listener() {
        return ctx.showAddClientModal = false;
      });
      \u0275\u0275text(135, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "button", 42);
      \u0275\u0275text(137);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_12_0;
      let tmp_13_0;
      let tmp_19_0;
      let tmp_20_0;
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275property("items", ctx.statusList);
      \u0275\u0275advance(25);
      \u0275\u0275property("ngForOf", ctx.deals);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deals.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deals.length > 0);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(51, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showAddModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.dealForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx.dealForm.get("title")) == null ? null : tmp_12_0.invalid) && (((tmp_12_0 = ctx.dealForm.get("title")) == null ? null : tmp_12_0.touched) || ((tmp_12_0 = ctx.dealForm.get("title")) == null ? null : tmp_12_0.dirty)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_13_0 = ctx.dealForm.get("title")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.dealForm.get("title")) == null ? null : tmp_13_0.touched) || ((tmp_13_0 = ctx.dealForm.get("title")) == null ? null : tmp_13_0.dirty)));
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.clients);
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.departments);
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.employeesWithNoneOption);
      \u0275\u0275advance(4);
      \u0275\u0275property("items", \u0275\u0275pureFunction3(55, _c4, \u0275\u0275pureFunction0(52, _c1), \u0275\u0275pureFunction0(53, _c2), \u0275\u0275pureFunction0(54, _c3)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dealForm.value.sales_commission_type && ctx.dealForm.value.sales_commission_type !== "none");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-invalid", ((tmp_19_0 = ctx.dealForm.get("total_price")) == null ? null : tmp_19_0.invalid) && (((tmp_19_0 = ctx.dealForm.get("total_price")) == null ? null : tmp_19_0.touched) || ((tmp_19_0 = ctx.dealForm.get("total_price")) == null ? null : tmp_19_0.dirty)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_20_0 = ctx.dealForm.get("total_price")) == null ? null : tmp_20_0.invalid) && (((tmp_20_0 = ctx.dealForm.get("total_price")) == null ? null : tmp_20_0.touched) || ((tmp_20_0 = ctx.dealForm.get("total_price")) == null ? null : tmp_20_0.dirty)));
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.dealTasks.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dealTasks.length === 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.dealForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0648\u0646\u0634\u0631 \u0627\u0644\u0635\u0641\u0642\u0629", " ");
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(59, _c5));
      \u0275\u0275twoWayProperty("visible", ctx.showPaymentModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body")("header", "\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 / \u0642\u0633\u0637: " + ((ctx.selectedDeal == null ? null : ctx.selectedDeal.title) || ""));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.paymentForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedDeal);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.paymentForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629..." : "\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629", " ");
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(60, _c5));
      \u0275\u0275twoWayProperty("visible", ctx.showAddClientModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.quickClientForm);
      \u0275\u0275advance(24);
      \u0275\u0275property("type", ctx.showQuickClientPw ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.showQuickClientPw ? "\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.showQuickClientPw ? "fa-eye-slash" : "fa-eye");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.quickClientForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0648\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0639\u0645\u064A\u0644", " ");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    DecimalPipe,
    RouterModule,
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    PrimePickerSelectComponent,
    DialogModule,
    Dialog,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    DropdownModule,
    Dropdown,
    DatePickerModule,
    DatePicker
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text);\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.deal-title-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--text);\n  transition: color 0.2s;\n  font-size: 0.95rem;\n  font-weight: 700;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n}\n.deal-title-clickable[_ngcontent-%COMP%]:hover {\n  color: var(--violet-light);\n  text-decoration: underline;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  overflow: hidden;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1050px;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.88rem;\n  color: var(--text);\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.actions-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.action-icon-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.88rem;\n}\n.btn-violet[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.btn-violet[_ngcontent-%COMP%]:hover {\n  background: var(--violet);\n  color: #ffffff;\n}\n.btn-emerald[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.btn-emerald[_ngcontent-%COMP%]:hover {\n  background: #10b981;\n  color: #ffffff;\n}\n.btn-rose[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n  border-color: rgba(244, 63, 94, 0.25);\n}\n.btn-rose[_ngcontent-%COMP%]:hover {\n  background: #f43f5e;\n  color: #ffffff;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-rose[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-rose[_ngcontent-%COMP%] {\n  background: #fff1f2 !important;\n  border-color: #fecdd3 !important;\n  color: #e11d48 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-rose[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-rose[_ngcontent-%COMP%]:hover {\n  background: #e11d48 !important;\n  color: #ffffff !important;\n}\n.status-pill[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 100px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n  border: 1px solid rgba(244, 63, 94, 0.3);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.tasks-builder-section[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px dashed var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.tasks-builder-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.btn-add-task-row[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-add-task-row[_ngcontent-%COMP%]:hover {\n  background: var(--violet);\n  color: #fff;\n}\n.tasks-list-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.task-input-card[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.04);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 14px;\n  padding: 14px 16px;\n  transition: all 0.2s ease;\n}\n.task-input-card[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.07);\n  border-color: rgba(99, 102, 241, 0.35);\n}\nbody.light-theme[_nghost-%COMP%]   .task-input-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .task-input-card[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03) !important;\n}\n.task-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.task-details-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.flex-dept[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 0;\n}\n.flex-price[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 110px;\n}\n.flex-del[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.btn-remove-task-row[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(244, 63, 94, 0.1);\n  border: 1px solid rgba(244, 63, 94, 0.25);\n  color: #fda4af;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.btn-remove-task-row[_ngcontent-%COMP%]:hover {\n  background: #f43f5e;\n  color: #ffffff;\n  border-color: #f43f5e;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-remove-task-row[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-remove-task-row[_ngcontent-%COMP%] {\n  background: #fff1f2 !important;\n  border-color: #fecdd3 !important;\n  color: #e11d48 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-remove-task-row[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-remove-task-row[_ngcontent-%COMP%]:hover {\n  background: #e11d48 !important;\n  color: #ffffff !important;\n}\n.tasks-empty-hint[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-2);\n  background: rgba(99, 102, 241, 0.05);\n  border: 1px dashed rgba(99, 102, 241, 0.2);\n  padding: 12px 16px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-module-container[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-module-container[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\nbody.light-theme[_nghost-%COMP%]   .table-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .table-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  color: #475569 !important;\n  border-bottom-color: #e2e8f0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-color: #f1f5f9 !important;\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\nbody.light-theme[_nghost-%COMP%]   .deal-title-clickable[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .deal-title-clickable[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .deal-title-clickable[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .deal-title-clickable[_ngcontent-%COMP%]:hover {\n  color: #4f46e5 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .status-pending[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .status-pending[_ngcontent-%COMP%] {\n  background: #fffbeb !important;\n  color: #b45309 !important;\n  border-color: #fde68a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .status-active[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .status-active[_ngcontent-%COMP%] {\n  background: #eef2ff !important;\n  color: #4338ca !important;\n  border-color: #c7d2fe !important;\n}\nbody.light-theme[_nghost-%COMP%]   .status-completed[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .status-completed[_ngcontent-%COMP%] {\n  background: #ecfdf5 !important;\n  color: #047857 !important;\n  border-color: #a7f3d0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .status-cancelled[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .status-cancelled[_ngcontent-%COMP%] {\n  background: #fff1f2 !important;\n  color: #be123c !important;\n  border-color: #fecdd3 !important;\n}\n/*# sourceMappingURL=deals-management.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsManagementComponent, [{
    type: Component,
    args: [{ selector: "app-deals-management", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      PrimePickerSelectComponent,
      DialogModule,
      InputTextModule,
      TextareaModule,
      DropdownModule,
      DatePickerModule
    ], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-handshake" style="color:var(--violet-light);"></i> \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629</h2>
          <p class="subtitle">\u0645\u062A\u0627\u0628\u0639\u0629 \u062E\u0637 \u0627\u0644\u0635\u0641\u0642\u0627\u062A\u060C \u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E\u060C \u0627\u0644\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062F\u062F\u0629 \u0648\u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629\u060C \u0648\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629 \u0648\u0627\u0644\u062C\u0627\u0631\u064A\u0629</p>
        </div>
        <button class="btn btn-primary" (click)="openAddDealModal()">
          <i class="fa-solid fa-plus"></i> \u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629
        </button>
      </div>

      <!-- Search & Filters Bar -->
      <div class="filters-bar glass-panel">
        <div class="search-field">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" [(ngModel)]="searchQuery" (input)="onFilterChange()" placeholder="\u0627\u0644\u0628\u062D\u062B \u0628\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 \u0623\u0648 \u0646\u0637\u0627\u0642 \u0627\u0644\u0639\u0645\u0644..." />
        </div>
        <div class="filter-dropdown" style="min-width: 200px;">
          <app-prime-picker-select
            [(ngModel)]="selectedStatus"
            (onChange)="onFilterChange()"
            [items]="statusList"
            optionLabel="label"
            optionValue="id"
            placeholder="\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0627\u0644\u0627\u062A"
          ></app-prime-picker-select>
        </div>
      </div>

      <!-- Deals Table -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F</th>
                <th>\u0627\u0644\u0639\u0645\u064A\u0644</th>
                <th>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</th>
                <th>\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0629</th>
                <th>\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629</th>
                <th>\u0627\u0644\u0645\u062F\u0641\u0648\u0639</th>
                <th>\u0627\u0644\u0645\u062A\u0628\u0642\u064A</th>
                <th>\u0627\u0644\u062D\u0627\u0644\u0629</th>
                <th>\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let deal of deals">
                <td style="font-weight:700; color:var(--text);">
                  <div class="deal-title-clickable" (click)="openDealDetails(deal)" title="\u0627\u0646\u0642\u0631 \u0644\u0641\u062A\u062D \u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0634\u0627\u0645\u0644\u0629 \u0644\u0644\u0635\u0641\u0642\u0629">
                    <i class="fa-solid fa-file-contract" style="color:var(--violet-light); margin-left:6px;"></i>
                    {{ deal.title }}
                  </div>
                </td>
                <td style="color:var(--text-2); font-weight:500;">{{ getClientName(deal) }}</td>
                <td><span class="badge badge-t">{{ deal.department?.name || '\u0639\u0627\u0645' }}</span></td>
                <td>
                  <div *ngIf="deal.sales_person" style="font-weight:600; color:var(--text);">{{ deal.sales_person.name }}</div>
                  <small style="color:var(--teal-light); font-weight:600;" *ngIf="deal.sales_commission_value > 0">
                    \u0627\u0644\u0639\u0645\u0648\u0644\u0629: {{ deal.sales_commission_value }} {{ deal.sales_commission_type === 'percentage' ? '%' : '\u062C.\u0645' }}
                  </small>
                  <div *ngIf="!deal.sales_person" style="color:var(--text-3);">-</div>
                </td>
                <td style="font-weight:700; color:var(--text);">{{ (deal.calculated_total || deal.total_price) | number:'1.2-2' }} \u062C.\u0645</td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ (deal.calculated_paid || deal.paid_amount) | number:'1.2-2' }} \u062C.\u0645</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ deal.remaining_balance | number:'1.2-2' }} \u062C.\u0645</td>
                <td>
                  <span class="status-pill" [ngClass]="'status-' + (deal.status || 'pending')">
                    {{ getStatusLabel(deal.status) }}
                  </span>
                </td>
                <td>
                  <div class="actions-group">
                    <button class="action-icon-btn btn-violet" (click)="openDealDetails(deal)" title="\u0641\u062A\u062D \u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0634\u0627\u0645\u0644\u0629">
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    <button class="action-icon-btn btn-emerald" *ngIf="!isClient()" (click)="openPaymentModal(deal)" title="\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u0645\u0627\u0644\u064A\u0629 \u062C\u062F\u064A\u062F\u0629">
                      <i class="fa-solid fa-money-bill-wave"></i>
                    </button>
                    <button class="action-icon-btn btn-rose" *ngIf="isManagerOrAdmin()" (click)="confirmDeleteDeal(deal)" title="\u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
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

        <!-- Table Pagination Bar -->
        <div class="table-pagination-bar" *ngIf="deals.length > 0">
          <div class="pagination-info-group">
            <div class="pagination-info">
              \u0639\u0631\u0636 {{ (currentPage - 1) * pageSize + 1 }} \u0625\u0644\u0649 {{ currentPage * pageSize > totalRecords ? totalRecords : currentPage * pageSize }} \u0645\u0646 \u0623\u0635\u0644 {{ totalRecords }} \u0635\u0641\u0642\u0629
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

      <!-- PrimeNG Dialog: Add Deal -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u0642\u0629 \u0648\u0639\u0642\u062F \u062C\u062F\u064A\u062F" [style]="{ width: '92vw', maxWidth: '680px' }">
        <form [formGroup]="dealForm" (ngSubmit)="saveDeal()">
          <div class="form-grid" style="padding: 20px 0 10px;">
            <div class="form-group full-width">
              <label>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 <span class="required">*</span></label>
              <input type="text" pInputText formControlName="title" placeholder="\u0645\u062B\u0627\u0644: \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u062D\u0645\u0644\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A\u0629" [class.is-invalid]="dealForm.get('title')?.invalid && (dealForm.get('title')?.touched || dealForm.get('title')?.dirty)" />
              <small class="field-error-msg" *ngIf="dealForm.get('title')?.invalid && (dealForm.get('title')?.touched || dealForm.get('title')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F \u0645\u0637\u0644\u0648\u0628
              </small>
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
              <label>\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)</label>
              <app-prime-picker-select
                formControlName="sales_person_id"
                [items]="employeesWithNoneOption"
                optionLabel="name"
                optionValue="id"
                placeholder="\u0628\u062F\u0648\u0646 \u0645\u0633\u0624\u0648\u0644 \u0645\u0628\u064A\u0639\u0627\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0648\u0644\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)</label>
              <app-prime-picker-select
                formControlName="sales_commission_type"
                [items]="[
                  { label: '\u0628\u062F\u0648\u0646 \u0639\u0645\u0648\u0644\u0629 (\u0644\u0627 \u064A\u0648\u062C\u062F)', id: 'none' },
                  { label: '\u0645\u0628\u0644\u063A \u062B\u0627\u0628\u062A (\u062C.\u0645)', id: 'fixed' },
                  { label: '\u0646\u0633\u0628\u0629 \u0645\u0626\u0648\u064A\u0629 (%)', id: 'percentage' }
                ]"
                optionLabel="label"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0648\u0644\u0629..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group" *ngIf="dealForm.value.sales_commission_type && dealForm.value.sales_commission_type !== 'none'">
              <label>\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629</label>
              <input type="number" pInputText formControlName="sales_commission_value" placeholder="\u0645\u062B\u0627\u0644: 500 \u0623\u0648 10" />
            </div>
            <div class="form-group">
              <label>\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629 (\u062C.\u0645) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="total_price" placeholder="12000" [class.is-invalid]="dealForm.get('total_price')?.invalid && (dealForm.get('total_price')?.touched || dealForm.get('total_price')?.dirty)" />
              <small class="field-error-msg" *ngIf="dealForm.get('total_price')?.invalid && (dealForm.get('total_price')?.touched || dealForm.get('total_price')?.dirty)">
                <i class="fa-solid fa-circle-exclamation"></i> \u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u062A\u0633\u0627\u0648\u064A 0 \u0623\u0648 \u0623\u0643\u062B\u0631
              </small>
            </div>
            <div class="form-group full-width">
              <label>\u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0645\u062A\u0641\u0642 \u0639\u0644\u064A\u0647\u0627</label>
              <textarea pTextarea formControlName="agreed_scope" rows="3" placeholder="\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0642\u062F \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629..."></textarea>
            </div>

            <!-- Tasks Builder Section inside Deal Modal -->
            <div class="full-width tasks-builder-section">
              <div class="tasks-builder-head">
                <label style="font-weight:800; color:var(--violet-light); font-size:0.88rem; margin:0;">
                  <i class="fa-solid fa-list-check" style="margin-left:6px;"></i> \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0644\u0644\u0635\u0641\u0642\u0629 (\u062A\u064F\u0633\u0646\u062F \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0644\u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645)
                </label>
                <button type="button" class="btn-add-task-row" (click)="addTaskRow()">
                  <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629
                </button>
              </div>

              <div class="tasks-list-rows" *ngIf="dealTasks.length > 0">
                <div class="task-input-card" *ngFor="let t of dealTasks; let idx = index">
                  <div class="task-card-inner">
                    <!-- Top Row: Task Title -->
                    <div class="form-group task-title-group">
                      <label>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 <span class="required">*</span></label>
                      <input type="text" pInputText [(ngModel)]="t.title" [ngModelOptions]="{standalone: true}" placeholder="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629..." />
                    </div>

                    <!-- Bottom Row: Executing Department + Client Price + Delete Button -->
                    <div class="task-details-row">
                      <div class="form-group flex-dept">
                        <label>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0646\u0641\u0630</label>
                        <app-prime-picker-select
                          [(ngModel)]="t.department_id"
                          [ngModelOptions]="{standalone: true}"
                          [items]="departments"
                          optionLabel="name"
                          optionValue="id"
                          placeholder="\u0646\u0641\u0633 \u0642\u0633\u0645 \u0627\u0644\u0635\u0641\u0642\u0629 (\u062A\u0644\u0642\u0627\u0626\u064A)"
                        ></app-prime-picker-select>
                      </div>
                      <div class="form-group flex-price">
                        <label>\u0627\u0644\u0633\u0639\u0631 \u0644\u0644\u0639\u0645\u064A\u0644 (\u062C.\u0645)</label>
                        <input type="number" pInputText [(ngModel)]="t.client_price" [ngModelOptions]="{standalone: true}" placeholder="0" />
                      </div>
                      <div class="form-group flex-del">
                        <label>&nbsp;</label>
                        <button type="button" class="btn-remove-task-row" (click)="removeTaskRow(idx)" title="\u062D\u0630\u0641 \u0627\u0644\u0645\u0647\u0645\u0629">
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div *ngIf="dealTasks.length === 0" class="tasks-empty-hint">
                <i class="fa-solid fa-info-circle"></i> \u064A\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0647\u0646\u0627 \u0644\u062A\u0648\u0632\u064A\u0639\u0647\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0639\u0644\u0649 \u0645\u062F\u064A\u0631\u064A \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0639\u0646\u062F \u0627\u0644\u062D\u0641\u0638.
              </div>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="closeAddModal()">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="dealForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0648\u0646\u0634\u0631 \u0627\u0644\u0635\u0641\u0642\u0629' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Payment Modal -->
      <p-dialog [(visible)]="showPaymentModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 / \u0642\u0633\u0637: ' + (selectedDeal?.title || '')" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;" *ngIf="selectedDeal">
            <div class="form-group">
              <label>\u0645\u0628\u0644\u063A \u0627\u0644\u062F\u0641\u0639\u0629 (\u062C.\u0645) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" [placeholder]="selectedDeal.remaining_balance" />
              <small style="color:var(--text-2);">\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644: {{ selectedDeal.remaining_balance | number:'1.2-2' }} \u062C.\u0645</small>
            </div>
            <div class="form-group">
              <label>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F</label>
              <p-datepicker formControlName="payment_date" dateFormat="yy-mm-dd" [showIcon]="true" [iconDisplay]="'input'" [appendTo]="'body'" placeholder="\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F..." styleClass="w-full"></p-datepicker>
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

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="closePaymentModal()">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="paymentForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629...' : '\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Quick Add Client Modal -->
      <p-dialog [(visible)]="showAddClientModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="quickClientForm" (ngSubmit)="saveQuickClient()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 / \u0627\u0644\u0634\u0631\u0643\u0629 <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0627\u0644\u0623\u0645\u0644 \u0644\u0644\u062A\u062C\u0627\u0631\u0629" />
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="client@example.com" />
            </div>
            <div class="form-group">
              <label>\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 / \u0627\u0644\u0647\u0627\u062A\u0641</label>
              <input type="text" pInputText formControlName="phone" placeholder="010xxxxxxx" />
            </div>
            <div class="form-group">
              <label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 <span class="required">*</span></label>
              <div class="password-wrapper">
                <input [type]="showQuickClientPw ? 'text' : 'password'" pInputText formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
                <button type="button" class="btn-toggle-pw" (click)="showQuickClientPw = !showQuickClientPw" [title]="showQuickClientPw ? '\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631' : '\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631'">
                  <i class="fa-solid" [ngClass]="showQuickClientPw ? 'fa-eye-slash' : 'fa-eye'"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showAddClientModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="quickClientForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0648\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0639\u0645\u064A\u0644' }}
            </button>
          </div>
        </form>
      </p-dialog>

    </div>
  `, styles: ['/* angular:styles/component:css;a82f26f3d210f517c3bf6b790ac394427b62350fe8da6faae9e3dbd0428ef7b3;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/deals/deals-management.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text);\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.deal-title-clickable {\n  cursor: pointer;\n  color: var(--text);\n  transition: color 0.2s;\n  font-size: 0.95rem;\n  font-weight: 700;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n}\n.deal-title-clickable:hover {\n  color: var(--violet-light);\n  text-decoration: underline;\n}\n.table-card {\n  border-radius: 18px;\n  overflow: hidden;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n.table-responsive {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.crm-table {\n  width: 100%;\n  min-width: 1050px;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.88rem;\n  color: var(--text);\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.actions-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.action-icon-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.88rem;\n}\n.btn-violet {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.btn-violet:hover {\n  background: var(--violet);\n  color: #ffffff;\n}\n.btn-emerald {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.btn-emerald:hover {\n  background: #10b981;\n  color: #ffffff;\n}\n.btn-rose {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n  border-color: rgba(244, 63, 94, 0.25);\n}\n.btn-rose:hover {\n  background: #f43f5e;\n  color: #ffffff;\n}\n:host-context(body.light-theme) .btn-rose {\n  background: #fff1f2 !important;\n  border-color: #fecdd3 !important;\n  color: #e11d48 !important;\n}\n:host-context(body.light-theme) .btn-rose:hover {\n  background: #e11d48 !important;\n  color: #ffffff !important;\n}\n.status-pill {\n  font-size: 0.74rem;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 100px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.status-pending {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-active {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.status-completed {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.status-cancelled {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n  border: 1px solid rgba(244, 63, 94, 0.3);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.required {\n  color: var(--rose-light);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.full-width {\n  grid-column: span 2;\n}\n.tasks-builder-section {\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px dashed var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.tasks-builder-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.btn-add-task-row {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-add-task-row:hover {\n  background: var(--violet);\n  color: #fff;\n}\n.tasks-list-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.task-input-card {\n  background: rgba(99, 102, 241, 0.04);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 14px;\n  padding: 14px 16px;\n  transition: all 0.2s ease;\n}\n.task-input-card:hover {\n  background: rgba(99, 102, 241, 0.07);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n:host-context(body.light-theme) .task-input-card {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03) !important;\n}\n.task-card-inner {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.task-details-row {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.flex-dept {\n  flex: 2;\n  min-width: 0;\n}\n.flex-price {\n  flex: 1;\n  min-width: 110px;\n}\n.flex-del {\n  flex-shrink: 0;\n}\n.btn-remove-task-row {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(244, 63, 94, 0.1);\n  border: 1px solid rgba(244, 63, 94, 0.25);\n  color: #fda4af;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.btn-remove-task-row:hover {\n  background: #f43f5e;\n  color: #ffffff;\n  border-color: #f43f5e;\n}\n:host-context(body.light-theme) .btn-remove-task-row {\n  background: #fff1f2 !important;\n  border-color: #fecdd3 !important;\n  color: #e11d48 !important;\n}\n:host-context(body.light-theme) .btn-remove-task-row:hover {\n  background: #e11d48 !important;\n  color: #ffffff !important;\n}\n.tasks-empty-hint {\n  font-size: 0.82rem;\n  color: var(--text-2);\n  background: rgba(99, 102, 241, 0.05);\n  border: 1px dashed rgba(99, 102, 241, 0.2);\n  padding: 12px 16px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n:host-context(body.light-theme) .crm-module-container {\n  background: #f8fafc !important;\n}\n:host-context(body.light-theme) .table-card {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .crm-table th {\n  background: #f8fafc !important;\n  color: #475569 !important;\n  border-bottom-color: #e2e8f0 !important;\n}\n:host-context(body.light-theme) .crm-table td {\n  border-bottom-color: #f1f5f9 !important;\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .crm-table tr:hover td {\n  background: #f8fafc !important;\n}\n:host-context(body.light-theme) .deal-title-clickable {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .deal-title-clickable:hover {\n  color: #4f46e5 !important;\n}\n:host-context(body.light-theme) .status-pending {\n  background: #fffbeb !important;\n  color: #b45309 !important;\n  border-color: #fde68a !important;\n}\n:host-context(body.light-theme) .status-active {\n  background: #eef2ff !important;\n  color: #4338ca !important;\n  border-color: #c7d2fe !important;\n}\n:host-context(body.light-theme) .status-completed {\n  background: #ecfdf5 !important;\n  color: #047857 !important;\n  border-color: #a7f3d0 !important;\n}\n:host-context(body.light-theme) .status-cancelled {\n  background: #fff1f2 !important;\n  color: #be123c !important;\n  border-color: #fecdd3 !important;\n}\n/*# sourceMappingURL=deals-management.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsManagementComponent, { className: "DealsManagementComponent", filePath: "src/app/components/deals/deals-management.component.ts", lineNumber: 461 });
})();
export {
  DealsManagementComponent
};
//# sourceMappingURL=chunk-R5AM5RX5.js.map
