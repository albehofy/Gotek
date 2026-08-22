import {
  Textarea,
  TextareaModule
} from "./chunk-DWYKOETT.js";
import {
  PrimePickerSelectComponent
} from "./chunk-PFLXRYTA.js";
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
  DatePipe,
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
  ɵɵpureFunction5,
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

// src/app/components/finance/finance-dashboard.component.ts
var _c0 = () => ({ width: "92vw", maxWidth: "640px" });
var _c1 = () => ({ width: "90vw", maxWidth: "420px" });
var _c2 = () => ({ width: "90vw", maxWidth: "460px" });
var _c3 = () => ({ width: "92vw", maxWidth: "500px" });
var _c4 = () => ({ width: "92vw", maxWidth: "960px" });
var _c5 = () => ({ width: "92vw", maxWidth: "520px" });
var _c6 = () => ({ width: "100%", display: "block" });
var _c7 = () => ({ label: "\u0643\u0627\u0641\u0629 \u0637\u0631\u0642 \u0627\u0644\u062F\u0641\u0639 \u0648\u0627\u0644\u0645\u062D\u0627\u0641\u0638", value: "" });
var _c8 = () => ({ label: "\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u0646\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629)", value: "cash" });
var _c9 = () => ({ label: "\u0646\u0642\u062F\u064A \u064A\u062F\u0648\u064A", value: "cash_hand" });
var _c10 = () => ({ label: "\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)", value: "instapay" });
var _c11 = () => ({ label: "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A", value: "bank_transfer" });
var _c12 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c13 = () => ({ width: "100%" });
function FinanceDashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275elementStart(2, "h2", 4);
    \u0275\u0275text(3, "\u063A\u064A\u0631 \u0645\u0633\u0645\u0648\u062D \u0628\u0641\u062A\u062D \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5, "\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u062E\u0627\u0635\u0629 \u0628\u062D\u0633\u0627\u0628\u0627\u062A \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0641\u0642\u0637 \u0648\u0644\u0627 \u062A\u062A\u0627\u062D \u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.redirectToDashboard());
    });
    \u0275\u0275element(7, "i", 7);
    \u0275\u0275text(8, " \u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 ");
    \u0275\u0275elementEnd()();
  }
}
function FinanceDashboardComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u0627\u0644\u0641\u062A\u0631\u0629: ", ctx_r1.filterFromDate ? ctx_r1.formatDatePayload(ctx_r1.filterFromDate) : "\u0627\u0644\u0628\u062F\u0627\u064A\u0629", " \u0625\u0644\u0649 ", ctx_r1.filterToDate ? ctx_r1.formatDatePayload(ctx_r1.filterToDate) : "\u0627\u0644\u064A\u0648\u0645", "");
  }
}
function FinanceDashboardComponent_div_1_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.activeFilterCount, " ");
  }
}
function FinanceDashboardComponent_div_1_div_60_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 143);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 144);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r4.deals_count, " \u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 5, item_r4.total_billed, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 8, item_r4.total_paid, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 11, item_r4.outstanding_balance, "1.2-2"), " \u062C.\u0645");
  }
}
function FinanceDashboardComponent_div_1_div_60_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145)(2, "div", 146)(3, "div", 147);
    \u0275\u0275element(4, "i", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 148);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0635\u062F\u0629 \u0644\u0644\u0639\u0645\u0644\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 149);
    \u0275\u0275text(8, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0635\u062F\u0629 \u0646\u0634\u0637\u0629 \u0645\u0633\u062C\u0644\u0629 \u0644\u0644\u0639\u0645\u0644\u0627\u0621 \u0641\u064A \u0627\u0644\u062F\u0641\u062A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A.");
    \u0275\u0275elementEnd()()()();
  }
}
function FinanceDashboardComponent_div_1_div_60_div_118_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 161);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_60_div_118_button_22_Template_button_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeClientBalancesPage(p_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", p_r7 === ctx_r1.clientBalancesPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r7, " ");
  }
}
function FinanceDashboardComponent_div_1_div_60_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150)(1, "div", 151)(2, "div", 152);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 153)(5, "span");
    \u0275\u0275text(6, "\u0639\u0631\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 154);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_div_60_div_118_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FinanceDashboardComponent_div_1_div_60_div_118_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onClientBalancesPerPageChange());
    });
    \u0275\u0275elementStart(8, "option", 155);
    \u0275\u0275text(9, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 155);
    \u0275\u0275text(11, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 155);
    \u0275\u0275text(13, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 155);
    \u0275\u0275text(15, "50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\u0635\u0641\u0648\u0641");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 156)(19, "button", 157);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_60_div_118_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeClientBalancesPage(ctx_r1.clientBalancesPage - 1));
    });
    \u0275\u0275element(20, "i", 158);
    \u0275\u0275text(21, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, FinanceDashboardComponent_div_1_div_60_div_118_button_22_Template, 2, 3, "button", 159);
    \u0275\u0275elementStart(23, "button", 157);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_60_div_118_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeClientBalancesPage(ctx_r1.clientBalancesPage + 1));
    });
    \u0275\u0275text(24, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    \u0275\u0275element(25, "i", 160);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" \u0639\u0631\u0636 ", (ctx_r1.clientBalancesPage - 1) * ctx_r1.pageSize + 1, " \u0625\u0644\u0649 ", ctx_r1.clientBalancesPage * ctx_r1.pageSize > ctx_r1.totalClientBalancesRecords ? ctx_r1.totalClientBalancesRecords : ctx_r1.clientBalancesPage * ctx_r1.pageSize, " \u0645\u0646 \u0623\u0635\u0644 ", ctx_r1.totalClientBalancesRecords, " \u0631\u0635\u064A\u062F ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.clientBalancesPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.clientBalancesPageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.clientBalancesPage * ctx_r1.pageSize >= ctx_r1.totalClientBalancesRecords);
  }
}
function FinanceDashboardComponent_div_1_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "div", 110)(3, "div", 111)(4, "span", 112);
    \u0275\u0275text(5, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u062F\u062E\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 113);
    \u0275\u0275element(7, "i", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 115);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 116)(14, "span", 117);
    \u0275\u0275element(15, "i", 118);
    \u0275\u0275text(16, " \u0627\u0644\u0645\u062D\u0635\u0644 \u0648\u0625\u062C\u0645\u0627\u0644\u064A \u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 119)(18, "div", 111)(19, "span", 112);
    \u0275\u0275text(20, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 113);
    \u0275\u0275element(22, "i", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 121);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementStart(26, "small");
    \u0275\u0275text(27, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 116)(29, "span", 117);
    \u0275\u0275element(30, "i", 122);
    \u0275\u0275text(31, " \u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0648\u0627\u0644\u0639\u0647\u062F \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 123)(33, "div", 111)(34, "span", 112);
    \u0275\u0275text(35, "\u0635\u0627\u0641\u064A \u0627\u0644\u0633\u064A\u0648\u0644\u0629 \u0627\u0644\u0646\u0642\u062F\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 113);
    \u0275\u0275element(37, "i", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 125);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementStart(41, "small");
    \u0275\u0275text(42, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 116)(44, "span", 117);
    \u0275\u0275element(45, "i", 83);
    \u0275\u0275text(46, " \u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0635\u0627\u0641\u064A (\u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A - \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 126)(48, "div", 111)(49, "span", 112);
    \u0275\u0275text(50, "\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0648\u0627\u062D\u062A\u064A\u0627\u0637\u064A \u0627\u0644\u0623\u0635\u0648\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 113);
    \u0275\u0275element(52, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 127);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementStart(56, "small");
    \u0275\u0275text(57, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 116)(59, "span", 117);
    \u0275\u0275element(60, "i", 128);
    \u0275\u0275text(61, " \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062B\u0627\u0628\u062A\u0629: ");
    \u0275\u0275elementStart(62, "strong");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div", 129)(66, "div", 111)(67, "span", 112);
    \u0275\u0275text(68, "\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629 \u0644\u0644\u0634\u0631\u0643\u0629 \u0628\u0627\u0644\u062E\u0627\u0631\u062C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 113);
    \u0275\u0275element(70, "i", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 131);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "number");
    \u0275\u0275elementStart(74, "small");
    \u0275\u0275text(75, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 116)(77, "span", 117);
    \u0275\u0275element(78, "i", 90);
    \u0275\u0275text(79, " \u0622\u062C\u0644 \u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629 \u0639\u0646\u062F \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "div", 132)(81, "div", 111)(82, "span", 112);
    \u0275\u0275text(83, "\u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0648\u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0643\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 113);
    \u0275\u0275element(85, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 133);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "number");
    \u0275\u0275elementStart(89, "small");
    \u0275\u0275text(90, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 116)(92, "span", 117);
    \u0275\u0275element(93, "i", 134);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "number");
    \u0275\u0275pipe(96, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(97, "div", 135)(98, "h3", 136);
    \u0275\u0275element(99, "i", 137);
    \u0275\u0275text(100, " \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 138)(102, "table", 139)(103, "thead")(104, "tr")(105, "th");
    \u0275\u0275text(106, "\u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "th");
    \u0275\u0275text(108, "\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "th");
    \u0275\u0275text(110, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "th");
    \u0275\u0275text(112, "\u0627\u0644\u0645\u062D\u0635\u0644 (\u0627\u0644\u0645\u062F\u0641\u0648\u0639)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "th");
    \u0275\u0275text(114, "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u0633\u062A\u062D\u0642 (\u0627\u0644\u0645\u062A\u0628\u0642\u064A)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "tbody");
    \u0275\u0275template(116, FinanceDashboardComponent_div_1_div_60_tr_116_Template, 14, 14, "tr", 140)(117, FinanceDashboardComponent_div_1_div_60_tr_117_Template, 9, 0, "tr", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(118, FinanceDashboardComponent_div_1_div_60_div_118_Template, 26, 11, "div", 141);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 12, ctx_r1.summary.total_income, "1.2-2"), " ");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 15, ctx_r1.summary.total_expenses, "1.2-2"), " ");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(40, 18, ctx_r1.summary.net_balance, "1.2-2"), " ");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(55, 21, ctx_r1.summary.company_capital, "1.2-2"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(64, 24, ctx_r1.summary.total_fixed_assets, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(73, 27, ctx_r1.summary.total_receivables, "1.2-2"), " ");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(88, 30, ctx_r1.summary.monthly_obligations, "1.2-2"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" \u0645\u0631\u062A\u0628\u0627\u062A + \u0645\u0647\u0627\u0645 (", \u0275\u0275pipeBind2(95, 33, ctx_r1.summary.total_task_earnings, "1.2-2"), " \u062C.\u0645) + \u0639\u0645\u0648\u0644\u0627\u062A (", \u0275\u0275pipeBind2(96, 36, ctx_r1.summary.total_commissions, "1.2-2"), " \u062C.\u0645)");
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.clientBalances);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clientBalances.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clientBalances.length > 0);
  }
}
function FinanceDashboardComponent_div_1_div_61_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 164);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 165);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 166);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 167);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 164);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r8.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", entry_r8.type === "income" ? "badge-e" : "badge-r");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r8.type === "income" ? "\u0625\u064A\u0631\u0627\u062F" : "\u0645\u0635\u0631\u0648\u0641");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((entry_r8.category == null ? null : entry_r8.category.name_ar) || (entry_r8.category == null ? null : entry_r8.category.name_en) || "\u0639\u0627\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentMethodLabel(entry_r8.payment_method));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", entry_r8.type === "income" ? "text-success" : "text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", entry_r8.type === "income" ? "+" : "-", "", \u0275\u0275pipeBind2(13, 9, entry_r8.amount, "1.2-2"), " \u062C.\u0645 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r8.description);
  }
}
function FinanceDashboardComponent_div_1_div_61_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 168)(2, "div", 146)(3, "div", 147);
    \u0275\u0275element(4, "i", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 148);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0648\u062F \u0645\u0627\u0644\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 149);
    \u0275\u0275text(8, "\u0633\u062C\u0644 \u0623\u0648\u0644 \u062D\u0631\u0643\u0629 \u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0623\u0648 \u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645.");
    \u0275\u0275elementEnd()()()();
  }
}
function FinanceDashboardComponent_div_1_div_61_div_21_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 161);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_61_div_21_button_22_Template_button_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.changeLedgerPage(p_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", p_r11 === ctx_r1.ledgerPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r11, " ");
  }
}
function FinanceDashboardComponent_div_1_div_61_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150)(1, "div", 151)(2, "div", 152);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 153)(5, "span");
    \u0275\u0275text(6, "\u0639\u0631\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 154);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_div_61_div_21_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FinanceDashboardComponent_div_1_div_61_div_21_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onLedgerPerPageChange());
    });
    \u0275\u0275elementStart(8, "option", 155);
    \u0275\u0275text(9, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 155);
    \u0275\u0275text(11, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 155);
    \u0275\u0275text(13, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 155);
    \u0275\u0275text(15, "50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\u0635\u0641\u0648\u0641");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 156)(19, "button", 157);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_61_div_21_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeLedgerPage(ctx_r1.ledgerPage - 1));
    });
    \u0275\u0275element(20, "i", 158);
    \u0275\u0275text(21, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, FinanceDashboardComponent_div_1_div_61_div_21_button_22_Template, 2, 3, "button", 159);
    \u0275\u0275elementStart(23, "button", 157);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_61_div_21_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeLedgerPage(ctx_r1.ledgerPage + 1));
    });
    \u0275\u0275text(24, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    \u0275\u0275element(25, "i", 160);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" \u0639\u0631\u0636 ", (ctx_r1.ledgerPage - 1) * ctx_r1.pageSize + 1, " \u0625\u0644\u0649 ", ctx_r1.ledgerPage * ctx_r1.pageSize > ctx_r1.totalLedgerRecords ? ctx_r1.totalLedgerRecords : ctx_r1.ledgerPage * ctx_r1.pageSize, " \u0645\u0646 \u0623\u0635\u0644 ", ctx_r1.totalLedgerRecords, " \u0642\u064A\u062F ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.ledgerPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.ledgerPageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.ledgerPage * ctx_r1.pageSize >= ctx_r1.totalLedgerRecords);
  }
}
function FinanceDashboardComponent_div_1_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 162)(2, "div", 163)(3, "table", 139)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\u0627\u0644\u0645\u0628\u0644\u063A (\u062C.\u0645)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0628\u064A\u0627\u0646");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, FinanceDashboardComponent_div_1_div_61_tr_19_Template, 16, 12, "tr", 140)(20, FinanceDashboardComponent_div_1_div_61_tr_20_Template, 9, 0, "tr", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, FinanceDashboardComponent_div_1_div_61_div_21_Template, 26, 11, "div", 141);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.ledgerEntries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ledgerEntries.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ledgerEntries.length > 0);
  }
}
function FinanceDashboardComponent_div_1_div_62_tr_29_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 178);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_62_tr_29_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const custody_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openReturnCustodyModal(custody_r14));
    });
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275elementEnd();
  }
}
function FinanceDashboardComponent_div_1_div_62_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 176);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 144);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 165);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, FinanceDashboardComponent_div_1_div_62_tr_29_button_16_Template, 2, 0, "button", 177);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const custody_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(custody_r14.employee == null ? null : custody_r14.employee.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 7, custody_r14.issued_amount, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 10, custody_r14.returned_amount, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 13, custody_r14.issued_amount - custody_r14.returned_amount, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getCustodyStatusClass(custody_r14.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCustodyStatusLabel(custody_r14.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", custody_r14.status === "open");
  }
}
function FinanceDashboardComponent_div_1_div_62_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 168)(2, "div", 179)(3, "div", 180);
    \u0275\u0275element(4, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 181);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0647\u062F \u0645\u0627\u0644\u064A\u0629 \u0645\u0635\u0631\u0648\u0641\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 182);
    \u0275\u0275text(8, '\u0644\u0645 \u064A\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0623\u064A\u0629 \u0639\u0647\u062F \u0645\u0627\u0644\u064A\u0629 \u0645\u0635\u0631\u0648\u0641\u0629 \u0644\u0645\u062F\u0631\u0627\u0621 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0623\u0648 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u062D\u0627\u0644\u064A\u0627\u064B. \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 "\u0635\u0631\u0641 \u0639\u0647\u062F\u0629 \u062C\u062F\u064A\u062F\u0629" \u0644\u0644\u0628\u062F\u0621.');
    \u0275\u0275elementEnd()()()();
  }
}
function FinanceDashboardComponent_div_1_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 170)(2, "div")(3, "h3", 171);
    \u0275\u0275element(4, "i", 172);
    \u0275\u0275text(5, " \u062D\u0633\u0627\u0628\u0627\u062A \u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 173);
    \u0275\u0275text(7, " \u0645\u062A\u0627\u0628\u0639\u0629 \u0648\u062A\u0633\u0648\u064A\u0629 \u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0648\u0627\u0644\u0645\u0633\u0644\u0645\u0629 \u0644\u0645\u062F\u0631\u0627\u0621 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 174);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_62_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openIssueCustodyModal());
    });
    \u0275\u0275element(9, "i", 175);
    \u0275\u0275text(10, " \u0635\u0631\u0641 \u0639\u0647\u062F\u0629 \u062C\u062F\u064A\u062F\u0629 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 162)(12, "div", 163)(13, "table", 139)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "\u0627\u0644\u0645\u0648\u0638\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "\u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "\u0627\u0644\u0645\u0633\u062A\u0631\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "\u0627\u0644\u0645\u0646\u0635\u0631\u0641 \u0627\u0644\u0641\u0639\u0644\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "\u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275template(29, FinanceDashboardComponent_div_1_div_62_tr_29_Template, 17, 16, "tr", 140)(30, FinanceDashboardComponent_div_1_div_62_tr_30_Template, 9, 0, "tr", 14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(29);
    \u0275\u0275property("ngForOf", ctx_r1.custodyAccounts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.custodyAccounts.length === 0);
  }
}
function FinanceDashboardComponent_div_1_div_63_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 164);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 187);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 176);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 188);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 142);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 189);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 143);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ps_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ps_r15.department_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ps_r15.partner_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ps_r15.partner_percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 8, ps_r15.total_income, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 11, ps_r15.total_expenses, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 14, ps_r15.net_profit, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 17, ps_r15.partner_share, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 20, ps_r15.company_share, "1.2-2"), " \u062C.\u0645");
  }
}
function FinanceDashboardComponent_div_1_div_63_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 190)(2, "div", 179)(3, "div", 191);
    \u0275\u0275element(4, "i", 192);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 181);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0631\u0628\u0627\u062D \u0634\u0631\u0643\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 182);
    \u0275\u0275text(8, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0623\u0648 \u0634\u0631\u0643\u0627\u0621 \u062E\u0627\u0631\u062C\u064A\u064A\u0646 \u0645\u0631\u062A\u0628\u0637\u064A\u0646 \u0628\u0623\u0642\u0633\u0627\u0645 \u0645\u0633\u062C\u0644\u0629 \u0641\u064A \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062D\u0627\u0644\u064A.");
    \u0275\u0275elementEnd()()()();
  }
}
function FinanceDashboardComponent_div_1_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 183)(2, "h3", 184);
    \u0275\u0275element(3, "i", 185);
    \u0275\u0275text(4, " \u062A\u0642\u0631\u064A\u0631 \u062A\u0648\u0632\u064A\u0639 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0641\u064A \u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0648\u0627\u0644\u0623\u0642\u0633\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 186)(6, "table", 139)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "\u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u0631\u0643\u0632");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u062E\u0627\u0631\u062C\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0634\u0631\u064A\u0643");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "\u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "\u062D\u0635\u0629 \u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u0635\u0627\u0641\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "\u062D\u0635\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0635\u0627\u0641\u064A\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, FinanceDashboardComponent_div_1_div_63_tr_26_Template, 23, 23, "tr", 140)(27, FinanceDashboardComponent_div_1_div_63_tr_27_Template, 9, 0, "tr", 14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r1.partnerSplits);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.partnerSplits.length === 0);
  }
}
function FinanceDashboardComponent_div_1_div_64_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 164);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 196);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 197);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 188);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 188);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 176);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 198);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 195)(30, "button", 199);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_64_tr_34_Template_button_click_30_listener() {
      const p_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectEmployeeForStatement(p_r17));
    });
    \u0275\u0275element(31, "i", 130);
    \u0275\u0275text(32, " \u0643\u0634\u0641 \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u062D\u0633\u0627\u0628 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.employee_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.department_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentTypeLabel(p_r17.payment_type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, p_r17.base_salary, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 13, p_r17.task_earnings, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 16, p_r17.commission_earnings, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind2(19, 19, p_r17.advances, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind2(22, 22, p_r17.deductions, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(25, 25, p_r17.bonuses, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(28, 28, p_r17.net_payable, "1.2-2"), " \u062C.\u0645");
  }
}
function FinanceDashboardComponent_div_1_div_64_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 200)(2, "div", 179)(3, "div", 201);
    \u0275\u0275element(4, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 181);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0631\u062A\u0628\u0627\u062A \u0623\u0648 \u0627\u0633\u062A\u062D\u0642\u0627\u0642\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 182);
    \u0275\u0275text(8, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u062C\u0644\u0627\u062A \u0645\u0631\u062A\u0628\u0627\u062A \u0623\u0648 \u0627\u0633\u062A\u062D\u0642\u0627\u0642\u0627\u062A \u0645\u0646\u0641\u0630\u0629 \u0641\u064A \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0645\u0646\u064A \u0648\u0627\u0644\u0641\u0644\u062A\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631.");
    \u0275\u0275elementEnd()()()();
  }
}
function FinanceDashboardComponent_div_1_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 183)(2, "h3", 184);
    \u0275\u0275element(3, "i", 193);
    \u0275\u0275text(4, " \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0648\u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0645\u0648\u0638\u0641\u064A\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 194);
    \u0275\u0275text(6, "\u0627\u0644\u0645\u0639\u0627\u062F\u0644\u0629: \u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0627\u0644\u0635\u0627\u0641\u064A = \u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A + \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645 + \u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A - \u0627\u0644\u0633\u0644\u0641 - \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A + \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 186)(8, "table", 139)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "\u0627\u0644\u0645\u0648\u0638\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0627\u0644\u0642\u0633\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "\u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "\u0627\u0644\u0633\u0644\u0641 (-)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A (-)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "\u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A (+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "\u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 195);
    \u0275\u0275text(32, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0648\u0627\u0644\u0643\u0634\u0641");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, FinanceDashboardComponent_div_1_div_64_tr_34_Template, 33, 31, "tr", 140)(35, FinanceDashboardComponent_div_1_div_64_tr_35_Template, 9, 0, "tr", 14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(34);
    \u0275\u0275property("ngForOf", ctx_r1.payrollSummary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.payrollSummary.length === 0);
  }
}
function FinanceDashboardComponent_div_1_div_65_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 164);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 207);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 164);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 208);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r19.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((a_r19.department == null ? null : a_r19.department.name) || "\u0639\u0627\u0645 / \u0627\u0644\u0634\u0631\u0643\u0629");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 5, a_r19.value, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r19.purchase_date || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r19.notes || "-");
  }
}
function FinanceDashboardComponent_div_1_div_65_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 209);
    \u0275\u0275text(2, ' \u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0635\u0648\u0644 \u062B\u0627\u0628\u062A\u0629 \u0645\u0633\u062C\u0644\u0629 \u062D\u0627\u0644\u064A\u0627\u064B. \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 "\u0625\u0636\u0627\u0641\u0629 \u0623\u0635\u0644 \u062B\u0627\u0628\u062A \u062C\u062F\u064A\u062F" \u0644\u0625\u0636\u0627\u0641\u0629 \u0623\u0635\u0644. ');
    \u0275\u0275elementEnd()();
  }
}
function FinanceDashboardComponent_div_1_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 183)(2, "div", 202)(3, "div")(4, "h3", 203);
    \u0275\u0275element(5, "i", 204);
    \u0275\u0275text(6, " \u0633\u062C\u0644 \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 \u0648\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 205);
    \u0275\u0275text(8, " \u0633\u062C\u0644 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0648\u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u0645\u0645\u0644\u0648\u0643\u0629 \u0644\u0644\u0634\u0631\u0643\u0629 \u0648\u062A\u0642\u064A\u064A\u0645\u0647\u0627 \u0627\u0644\u0645\u0627\u0644\u064A. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 206);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_65_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddAssetModal());
    });
    \u0275\u0275element(10, "i", 27);
    \u0275\u0275text(11, " \u0625\u0636\u0627\u0641\u0629 \u0623\u0635\u0644 \u062B\u0627\u0628\u062A \u062C\u062F\u064A\u062F ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 163)(13, "table", 139)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "\u0627\u0633\u0645 \u0627\u0644\u0623\u0635\u0644 \u0627\u0644\u062B\u0627\u0628\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0623\u0635\u0644 (\u062C.\u0645)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0631\u0627\u0621 / \u0627\u0644\u0627\u0633\u062A\u062D\u0648\u0627\u0630");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275template(27, FinanceDashboardComponent_div_1_div_65_tr_27_Template, 12, 8, "tr", 140)(28, FinanceDashboardComponent_div_1_div_65_tr_28_Template, 3, 0, "tr", 14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(27);
    \u0275\u0275property("ngForOf", ctx_r1.fixedAssets);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fixedAssets.length === 0);
  }
}
function FinanceDashboardComponent_div_1_div_131_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "label");
    \u0275\u0275text(2, "\u0627\u0644\u0645\u0648\u0638\u0641 / \u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0644\u0645 ");
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "app-prime-picker-select", 210);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_div_131_Template_app_prime_picker_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.custodyEmpId, $event) || (ctx_r1.custodyEmpId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.custodyEmpId);
    \u0275\u0275property("items", ctx_r1.filteredCustodyEmployees);
  }
}
function FinanceDashboardComponent_div_1_div_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "label");
    \u0275\u0275text(2, "\u0645\u0628\u0644\u063A \u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0633\u0644\u0645\u0629 (\u062C.\u0645) ");
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 211);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_div_132_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.custodyAmount, $event) || (ctx_r1.custodyAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.custodyAmount);
  }
}
function FinanceDashboardComponent_div_1_div_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "label");
    \u0275\u0275text(2, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0648\u0628\u064A\u0627\u0646 \u0627\u0644\u0639\u0647\u062F\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 212);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_div_133_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.custodyNotes, $event) || (ctx_r1.custodyNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.custodyNotes);
  }
}
function FinanceDashboardComponent_div_1_div_140_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 221);
    \u0275\u0275element(1, "i", 222);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u0633\u064A\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0645\u0628\u0644\u063A ", \u0275\u0275pipeBind2(3, 1, ctx_r1.selectedCustody.issued_amount - ctx_r1.returnedAmount, "1.2-2"), " \u062C.\u0645 \u0643\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0639\u0647\u062F\u0629 \u0641\u0639\u0644\u064A\u0629 ");
  }
}
function FinanceDashboardComponent_div_1_div_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 213)(1, "div", 214)(2, "span", 215);
    \u0275\u0275text(3, "\u0627\u0644\u0645\u0648\u0638\u0641: ");
    \u0275\u0275elementStart(4, "strong", 216);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 215);
    \u0275\u0275text(7, "\u0645\u0628\u0644\u063A \u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0623\u0635\u0644\u064A: ");
    \u0275\u0275elementStart(8, "strong", 217);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 40)(12, "label");
    \u0275\u0275text(13, "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062A\u0628\u0642\u064A / \u0627\u0644\u0645\u0631\u062C\u0639 \u0644\u0644\u062E\u0632\u064A\u0646\u0629 (\u062C.\u0645) ");
    \u0275\u0275elementStart(14, "span", 41);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 211);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_div_140_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.returnedAmount, $event) || (ctx_r1.returnedAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, FinanceDashboardComponent_div_1_div_140_small_17_Template, 4, 4, "small", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 40)(19, "label");
    \u0275\u0275text(20, "\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0627\u0644\u0641\u0639\u0644\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-dropdown", 219);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_div_140_Template_p_dropdown_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.returnCategoryId, $event) || (ctx_r1.returnCategoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 40)(23, "label");
    \u0275\u0275text(24, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0648\u0628\u064A\u0627\u0646 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A (\u0641\u064A \u0623\u064A \u0627\u0644\u0628\u0646\u0648\u062F \u062A\u0645 \u0635\u0631\u0641 \u0627\u0644\u0639\u0647\u062F\u0629) ");
    \u0275\u0275elementStart(25, "span", 41);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "textarea", 220);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_div_140_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.returnNotes, $event) || (ctx_r1.returnNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCustody.employee == null ? null : ctx_r1.selectedCustody.employee.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 10, ctx_r1.selectedCustody.issued_amount, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.returnedAmount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustody.issued_amount - ctx_r1.returnedAmount > 0);
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(13, _c13));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.returnCategoryId);
    \u0275\u0275property("options", ctx_r1.categories)("appendTo", "body");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.returnNotes);
  }
}
function FinanceDashboardComponent_div_1_div_147_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 226);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u0627\u0644\u0641\u062A\u0631\u0629: \u0645\u0646 ", ctx_r1.filterFromDate ? ctx_r1.formatDatePayload(ctx_r1.filterFromDate) : "\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0633\u062C\u0644", " \u0625\u0644\u0649 ", ctx_r1.filterToDate ? ctx_r1.formatDatePayload(ctx_r1.filterToDate) : "\u0627\u0644\u064A\u0648\u0645", " ");
  }
}
function FinanceDashboardComponent_div_1_div_147_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 164);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 208);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 238);
    \u0275\u0275text(9, "\u0645\u0643\u062A\u0645\u0644 \u0648\u0645\u0633\u062A\u0644\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 239);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r24.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r24.deal_title || "\u0639\u0627\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r24.date || "\u062A\u0645 \u062D\u062F\u064A\u062B\u0627\u064B");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 4, t_r24.price, "1.2-2"), " \u062C.\u0645");
  }
}
function FinanceDashboardComponent_div_1_div_147_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145)(2, "div", 240)(3, "div", 241);
    \u0275\u0275element(4, "i", 242);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 243);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u0646\u062C\u0632\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0638\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 244);
    \u0275\u0275text(8, "\u0644\u0645 \u064A\u0642\u064F\u0645 \u0627\u0644\u0645\u0648\u0638\u0641 \u0628\u0625\u0643\u0645\u0627\u0644 \u0645\u0647\u0627\u0645 \u0644\u0647\u0627 \u0645\u0642\u0627\u0628\u0644 \u0645\u0627\u0644\u064A \u0641\u064A \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0645\u0646\u064A \u0627\u0644\u0645\u062D\u062F\u062F.");
    \u0275\u0275elementEnd()()()();
  }
}
function FinanceDashboardComponent_div_1_div_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223)(1, "div", 224)(2, "div")(3, "h4", 225);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 226);
    \u0275\u0275text(6, " \u0627\u0644\u0642\u0633\u0645: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " | \u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639: ");
    \u0275\u0275elementStart(10, "span", 196);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, FinanceDashboardComponent_div_1_div_147_div_12_Template, 2, 2, "div", 227);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 228)(14, "div", 229)(15, "span", 112);
    \u0275\u0275text(16, "\u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 127);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21, "\u062C.\u0645");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 230)(23, "span", 112);
    \u0275\u0275text(24, "\u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0625\u0646\u062A\u0627\u062C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 125);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "small", 164);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 231)(33, "span", 112);
    \u0275\u0275text(34, "\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 115);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementStart(38, "small");
    \u0275\u0275text(39, "\u062C.\u0645");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 232)(41, "span", 112);
    \u0275\u0275text(42, "\u0627\u0644\u0633\u0644\u0641 \u0648\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 121);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementStart(46, "small");
    \u0275\u0275text(47, "\u062C.\u0645");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 233)(49, "span", 112);
    \u0275\u0275text(50, "\u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0644\u0644\u0645\u0648\u0638\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 234);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementStart(54, "small");
    \u0275\u0275text(55, "\u062C.\u0645");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "h4", 235);
    \u0275\u0275element(57, "i", 236);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 237)(60, "table", 139)(61, "thead")(62, "tr")(63, "th");
    \u0275\u0275text(64, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0647\u0645\u0629 / \u0627\u0644\u0639\u0645\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th");
    \u0275\u0275text(66, "\u0627\u0644\u0639\u0642\u062F / \u0627\u0644\u0635\u0641\u0642\u0629 \u0627\u0644\u062A\u0627\u0628\u0639\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th");
    \u0275\u0275text(68, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u062C\u0627\u0632");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "th");
    \u0275\u0275text(70, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th");
    \u0275\u0275text(72, "\u0627\u0644\u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0645\u0627\u0644\u064A \u0644\u0644\u0645\u0647\u0645\u0629 (\u062C.\u0645)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "tbody");
    \u0275\u0275template(74, FinanceDashboardComponent_div_1_div_147_tr_74_Template, 13, 7, "tr", 140)(75, FinanceDashboardComponent_div_1_div_147_tr_75_Template, 9, 0, "tr", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedEmployeeStatement.employee_name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedEmployeeStatement.department_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentTypeLabel(ctx_r1.selectedEmployeeStatement.payment_type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filterFromDate || ctx_r1.filterToDate);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 13, ctx_r1.selectedEmployeeStatement.base_salary, "1.2-2"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(27, 16, ctx_r1.selectedEmployeeStatement.task_earnings, "1.2-2"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("(", ctx_r1.selectedEmployeeStatement.tasks_count, " \u0645\u0647\u0645\u0629 \u0645\u0643\u062A\u0645\u0644\u0629)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(37, 19, ctx_r1.selectedEmployeeStatement.commission_earnings, "1.2-2"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind2(45, 22, ctx_r1.selectedEmployeeStatement.advances + ctx_r1.selectedEmployeeStatement.deductions, "1.2-2"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(53, 25, ctx_r1.selectedEmployeeStatement.net_payable, "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" \u0633\u062C\u0644 \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0646\u062C\u0632\u0629 \u062E\u0644\u0627\u0644 \u0627\u0644\u0641\u062A\u0631\u0629 (", ctx_r1.selectedEmployeeStatement.tasks_count, " \u0645\u0647\u0645\u0629) ");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.selectedEmployeeStatement.tasks_list);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedEmployeeStatement.tasks_list || ctx_r1.selectedEmployeeStatement.tasks_list.length === 0);
  }
}
function FinanceDashboardComponent_div_1_div_184_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 245);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_div_184_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showFilterSidebar = false);
    });
    \u0275\u0275elementEnd();
  }
}
function FinanceDashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h2", 11);
    \u0275\u0275text(4, "\u0634\u0631\u0643\u0629 \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648 \u0644\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u062D\u0644\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13)(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, FinanceDashboardComponent_div_1_div_13_Template, 2, 2, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "div")(16, "h2");
    \u0275\u0275element(17, "i", 16);
    \u0275\u0275text(18, " \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 17);
    \u0275\u0275text(20, "\u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A\u060C \u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u062A\u0648\u0632\u064A\u0639 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621\u060C \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 19)(23, "button", 20);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("today"));
    });
    \u0275\u0275text(24, "\u0647\u0630\u0627 \u0627\u0644\u064A\u0648\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 20);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("week"));
    });
    \u0275\u0275text(26, "\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 20);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("month"));
    });
    \u0275\u0275text(28, "\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 20);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("year"));
    });
    \u0275\u0275text(30, "\u0647\u0630\u0647 \u0627\u0644\u0633\u0646\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 21);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showFilterSidebar = true);
    });
    \u0275\u0275element(32, "i", 22);
    \u0275\u0275text(33, " \u0627\u0644\u0641\u0644\u062A\u0631\u0629 \u0648\u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0645\u062A\u0642\u062F\u0645 ");
    \u0275\u0275template(34, FinanceDashboardComponent_div_1_span_34_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 24);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportToExcel());
    });
    \u0275\u0275element(36, "i", 25);
    \u0275\u0275text(37, " \u062A\u0635\u062F\u064A\u0631 \u0625\u0643\u0633\u0644 Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 26);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddLedgerModal());
    });
    \u0275\u0275element(39, "i", 27);
    \u0275\u0275text(40, " \u062A\u0633\u062C\u064A\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u0645\u0627\u0644\u064A\u0629 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 28)(42, "button", 29);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "summary");
    });
    \u0275\u0275element(43, "i", 30);
    \u0275\u0275text(44, " \u0627\u0644\u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0627\u0644\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 29);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "ledger");
    });
    \u0275\u0275element(46, "i", 31);
    \u0275\u0275text(47, " \u062F\u0641\u062A\u0631 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 29);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "custody");
    });
    \u0275\u0275element(49, "i", 32);
    \u0275\u0275text(50, " \u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 29);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "partners");
    });
    \u0275\u0275element(52, "i", 33);
    \u0275\u0275text(53, " \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 29);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "payroll");
    });
    \u0275\u0275element(55, "i", 34);
    \u0275\u0275text(56, " \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 29);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "assets");
    });
    \u0275\u0275element(58, "i", 35);
    \u0275\u0275text(59, " \u0627\u0644\u0623\u0635\u0648\u0644 \u0648\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, FinanceDashboardComponent_div_1_div_60_Template, 119, 39, "div", 36)(61, FinanceDashboardComponent_div_1_div_61_Template, 22, 3, "div", 36)(62, FinanceDashboardComponent_div_1_div_62_Template, 31, 2, "div", 36)(63, FinanceDashboardComponent_div_1_div_63_Template, 28, 2, "div", 36)(64, FinanceDashboardComponent_div_1_div_64_Template, 36, 2, "div", 36)(65, FinanceDashboardComponent_div_1_div_65_Template, 29, 2, "div", 36);
    \u0275\u0275elementStart(66, "p-dialog", 37);
    \u0275\u0275twoWayListener("visibleChange", function FinanceDashboardComponent_div_1_Template_p_dialog_visibleChange_66_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showLedgerModal, $event) || (ctx_r1.showLedgerModal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(67, "form", 38);
    \u0275\u0275listener("ngSubmit", function FinanceDashboardComponent_div_1_Template_form_ngSubmit_67_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveLedgerEntry());
    });
    \u0275\u0275elementStart(68, "div", 39)(69, "div", 40)(70, "label");
    \u0275\u0275text(71, "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629 ");
    \u0275\u0275elementStart(72, "span", 41);
    \u0275\u0275text(73, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(74, "app-prime-picker-select", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 40)(76, "label");
    \u0275\u0275text(77, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 ");
    \u0275\u0275elementStart(78, "span", 41);
    \u0275\u0275text(79, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "app-prime-picker-select", 43);
    \u0275\u0275listener("addNew", function FinanceDashboardComponent_div_1_Template_app_prime_picker_select_addNew_80_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerAddCategory());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 40)(82, "label");
    \u0275\u0275text(83, "\u0627\u0644\u0645\u0628\u0644\u063A (\u062C.\u0645) ");
    \u0275\u0275elementStart(84, "span", 41);
    \u0275\u0275text(85, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(86, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 40)(88, "label");
    \u0275\u0275text(89, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639 ");
    \u0275\u0275elementStart(90, "span", 41);
    \u0275\u0275text(91, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(92, "app-prime-picker-select", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 40)(94, "label");
    \u0275\u0275text(95, "\u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0631\u062A\u0628\u0637");
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "app-prime-picker-select", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 40)(98, "label");
    \u0275\u0275text(99, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u064A\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "p-datepicker", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 48)(102, "label");
    \u0275\u0275text(103, "\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "textarea", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 50)(106, "button", 51);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLedgerModal = false);
    });
    \u0275\u0275text(107, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "button", 52);
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(110, "p-dialog", 53);
    \u0275\u0275twoWayListener("visibleChange", function FinanceDashboardComponent_div_1_Template_p_dialog_visibleChange_110_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showCatModal, $event) || (ctx_r1.showCatModal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(111, "div", 54)(112, "div", 40)(113, "label");
    \u0275\u0275text(114, "\u0627\u0633\u0645 \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0627\u0644\u0640\u064A\u0629 ");
    \u0275\u0275elementStart(115, "span", 41);
    \u0275\u0275text(116, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_Template_input_ngModelChange_117_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.catNameInput, $event) || (ctx_r1.catNameInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 50)(119, "button", 51);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_119_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCatModal = false);
    });
    \u0275\u0275text(120, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "button", 56);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_121_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCategory());
    });
    \u0275\u0275text(122, "\u062D\u0641\u0638 \u0627\u0644\u0641\u0626\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "p-dialog", 57);
    \u0275\u0275twoWayListener("visibleChange", function FinanceDashboardComponent_div_1_Template_p_dialog_visibleChange_123_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showCustodyModal, $event) || (ctx_r1.showCustodyModal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(124, "div", 54)(125, "div", 40)(126, "label");
    \u0275\u0275text(127, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641 ");
    \u0275\u0275elementStart(128, "span", 41);
    \u0275\u0275text(129, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "app-prime-picker-select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_Template_app_prime_picker_select_ngModelChange_130_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.custodyDeptId, $event) || (ctx_r1.custodyDeptId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanceDashboardComponent_div_1_Template_app_prime_picker_select_ngModelChange_130_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCustodyDeptChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(131, FinanceDashboardComponent_div_1_div_131_Template, 6, 2, "div", 59)(132, FinanceDashboardComponent_div_1_div_132_Template, 6, 1, "div", 59)(133, FinanceDashboardComponent_div_1_div_133_Template, 4, 1, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 50)(135, "button", 51);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_135_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCustodyModal = false);
    });
    \u0275\u0275text(136, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "button", 56);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_137_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveIssueCustody());
    });
    \u0275\u0275text(138, "\u0635\u0631\u0641 \u0627\u0644\u0639\u0647\u062F\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(139, "p-dialog", 60);
    \u0275\u0275twoWayListener("visibleChange", function FinanceDashboardComponent_div_1_Template_p_dialog_visibleChange_139_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showReturnCustodyModal, $event) || (ctx_r1.showReturnCustodyModal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(140, FinanceDashboardComponent_div_1_div_140_Template, 28, 14, "div", 61);
    \u0275\u0275elementStart(141, "div", 50)(142, "button", 51);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_142_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showReturnCustodyModal = false);
    });
    \u0275\u0275text(143, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "button", 62);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_144_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveReturnCustody());
    });
    \u0275\u0275text(145, "\u062A\u0623\u0643\u064A\u062F \u0648\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u062A\u0633\u0648\u064A\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(146, "p-dialog", 63);
    \u0275\u0275twoWayListener("visibleChange", function FinanceDashboardComponent_div_1_Template_p_dialog_visibleChange_146_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showStatementModal, $event) || (ctx_r1.showStatementModal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(147, FinanceDashboardComponent_div_1_div_147_Template, 76, 28, "div", 64);
    \u0275\u0275elementStart(148, "div", 65)(149, "button", 66);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_149_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatementModal = false);
    });
    \u0275\u0275element(150, "i", 7);
    \u0275\u0275text(151, " \u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(152, "p-dialog", 67);
    \u0275\u0275twoWayListener("visibleChange", function FinanceDashboardComponent_div_1_Template_p_dialog_visibleChange_152_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showAssetModal, $event) || (ctx_r1.showAssetModal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(153, "form", 38);
    \u0275\u0275listener("ngSubmit", function FinanceDashboardComponent_div_1_Template_form_ngSubmit_153_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAsset());
    });
    \u0275\u0275elementStart(154, "div", 54)(155, "div", 40)(156, "label");
    \u0275\u0275text(157, "\u0627\u0633\u0645 \u0627\u0644\u0623\u0635\u0644 \u0627\u0644\u062B\u0627\u0628\u062A ");
    \u0275\u0275elementStart(158, "span", 41);
    \u0275\u0275text(159, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(160, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "div", 40)(162, "label");
    \u0275\u0275text(163, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0623\u0635\u0644 (\u062C.\u0645) ");
    \u0275\u0275elementStart(164, "span", 41);
    \u0275\u0275text(165, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(166, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "div", 40)(168, "label");
    \u0275\u0275text(169, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(170, "app-prime-picker-select", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "div", 40)(172, "label");
    \u0275\u0275text(173, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0631\u0627\u0621 / \u0627\u0644\u0627\u0633\u062A\u062D\u0648\u0627\u0630");
    \u0275\u0275elementEnd();
    \u0275\u0275element(174, "p-datepicker", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "div", 40)(176, "label");
    \u0275\u0275text(177, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0648\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0623\u0635\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275element(178, "textarea", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(179, "div", 50)(180, "button", 51);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_180_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAssetModal = false);
    });
    \u0275\u0275text(181, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "button", 52);
    \u0275\u0275text(183);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(184, FinanceDashboardComponent_div_1_div_184_Template, 1, 0, "div", 73);
    \u0275\u0275elementStart(185, "div", 74)(186, "div", 75)(187, "h3");
    \u0275\u0275element(188, "i", 76);
    \u0275\u0275text(189, " \u0627\u0644\u0641\u0644\u062A\u0631\u0629 \u0648\u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0645\u062A\u0642\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "button", 77);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_190_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showFilterSidebar = false);
    });
    \u0275\u0275element(191, "i", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "div", 79)(193, "div", 80)(194, "label");
    \u0275\u0275element(195, "i", 81);
    \u0275\u0275text(196, " \u0627\u0644\u0628\u062D\u062B \u0628\u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0641\u062A\u0627\u062D\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_Template_input_ngModelChange_197_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterSearch, $event) || (ctx_r1.filterSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function FinanceDashboardComponent_div_1_Template_input_input_197_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "div", 80)(199, "label");
    \u0275\u0275element(200, "i", 83);
    \u0275\u0275text(201, " \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639 / \u0627\u0644\u0645\u062D\u0641\u0638\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "app-prime-picker-select", 84);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_Template_app_prime_picker_select_ngModelChange_202_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterPaymentMethod, $event) || (ctx_r1.filterPaymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanceDashboardComponent_div_1_Template_app_prime_picker_select_ngModelChange_202_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(203, "div", 80)(204, "label");
    \u0275\u0275element(205, "i", 85);
    \u0275\u0275text(206, " \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "app-prime-picker-select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_Template_app_prime_picker_select_ngModelChange_207_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterDepartmentId, $event) || (ctx_r1.filterDepartmentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanceDashboardComponent_div_1_Template_app_prime_picker_select_ngModelChange_207_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(208, "div", 80)(209, "label");
    \u0275\u0275element(210, "i", 87);
    \u0275\u0275text(211, " \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0645\u0627\u0644\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "app-prime-picker-select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_Template_app_prime_picker_select_ngModelChange_212_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterCategoryId, $event) || (ctx_r1.filterCategoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanceDashboardComponent_div_1_Template_app_prime_picker_select_ngModelChange_212_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "div", 89)(214, "label");
    \u0275\u0275element(215, "i", 90);
    \u0275\u0275text(216, " \u0627\u062E\u062A\u0635\u0627\u0631 \u0627\u0644\u0641\u0644\u062A\u0631\u0629 \u0628\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "div", 91)(218, "button", 92);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_218_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("today"));
    });
    \u0275\u0275element(219, "i", 93);
    \u0275\u0275text(220, " \u0647\u0630\u0627 \u0627\u0644\u064A\u0648\u0645 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "button", 92);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_221_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("week"));
    });
    \u0275\u0275element(222, "i", 94);
    \u0275\u0275text(223, " \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "button", 92);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_224_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("month"));
    });
    \u0275\u0275element(225, "i", 95);
    \u0275\u0275text(226, " \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(227, "button", 92);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_227_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("year"));
    });
    \u0275\u0275element(228, "i", 96);
    \u0275\u0275text(229, " \u0647\u0630\u0647 \u0627\u0644\u0633\u0646\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(230, "button", 92);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_230_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDatePreset("custom"));
    });
    \u0275\u0275element(231, "i", 97);
    \u0275\u0275text(232, " \u062A\u0627\u0631\u064A\u062E \u0645\u062E\u0635\u0635 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(233, "div", 98)(234, "div", 80)(235, "label");
    \u0275\u0275element(236, "i", 99);
    \u0275\u0275text(237, " \u0645\u0646 \u062A\u0627\u0631\u064A\u062E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "p-datepicker", 100);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_Template_p_datepicker_ngModelChange_238_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterFromDate, $event) || (ctx_r1.filterFromDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanceDashboardComponent_div_1_Template_p_datepicker_ngModelChange_238_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.datePreset = "custom";
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(239, "div", 80)(240, "label");
    \u0275\u0275element(241, "i", 99);
    \u0275\u0275text(242, " \u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "p-datepicker", 101);
    \u0275\u0275twoWayListener("ngModelChange", function FinanceDashboardComponent_div_1_Template_p_datepicker_ngModelChange_243_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterToDate, $event) || (ctx_r1.filterToDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanceDashboardComponent_div_1_Template_p_datepicker_ngModelChange_243_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.datePreset = "custom";
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(244, "div", 102)(245, "button", 103);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_245_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275element(246, "i", 104);
    \u0275\u0275text(247, " \u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062A\u0631 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(248, "button", 105);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_1_Template_button_click_248_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showFilterSidebar = false);
    });
    \u0275\u0275element(249, "i", 106);
    \u0275\u0275text(250, " \u062A\u0645 \u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0641\u0644\u062A\u0631\u0629 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A \u0648\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0634\u0627\u0645\u0644\u0629 - ", ctx_r1.getActiveTabTitle(), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0628\u0627\u0639\u0629: ", \u0275\u0275pipeBind2(10, 125, ctx_r1.currentDate, "yyyy-MM-dd HH:mm"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0637\u064F\u0628\u0639 \u0628\u0648\u0627\u0633\u0637\u0629: ", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.name) || "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filterFromDate || ctx_r1.filterToDate);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("active", ctx_r1.datePreset === "today");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.datePreset === "week");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.datePreset === "month");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.datePreset === "year");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.hasActiveFilters());
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "summary");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "ledger");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "custody");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "partners");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "payroll");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "assets");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "summary");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "ledger");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "custody");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "partners");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "payroll");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "assets");
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(128, _c0));
    \u0275\u0275twoWayProperty("visible", ctx_r1.showLedgerModal);
    \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.ledgerForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("items", ctx_r1.ledgerTypes);
    \u0275\u0275advance(6);
    \u0275\u0275property("items", ctx_r1.categories);
    \u0275\u0275advance(12);
    \u0275\u0275property("items", ctx_r1.paymentMethodsList);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.departments);
    \u0275\u0275advance(4);
    \u0275\u0275property("showIcon", true)("iconDisplay", "input")("appendTo", "body");
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.ledgerForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629..." : "\u062A\u0623\u0643\u064A\u062F \u0648\u062D\u0641\u0638 \u0627\u0644\u0642\u064A\u062F", " ");
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(129, _c1));
    \u0275\u0275twoWayProperty("visible", ctx_r1.showCatModal);
    \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.catNameInput);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.catNameInput || !ctx_r1.catNameInput.trim());
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(130, _c2));
    \u0275\u0275twoWayProperty("visible", ctx_r1.showCustodyModal);
    \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.custodyDeptId);
    \u0275\u0275property("items", ctx_r1.departments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.custodyDeptId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.custodyEmpId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.custodyEmpId);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.custodyEmpId || ctx_r1.custodyAmount <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(131, _c3));
    \u0275\u0275twoWayProperty("visible", ctx_r1.showReturnCustodyModal);
    \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustody);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(132, _c4));
    \u0275\u0275twoWayProperty("visible", ctx_r1.showStatementModal);
    \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body")("header", "\u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0648\u062A\u0642\u0631\u064A\u0631 \u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u0648\u0638\u0641: " + ((ctx_r1.selectedEmployeeStatement == null ? null : ctx_r1.selectedEmployeeStatement.employee_name) || ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedEmployeeStatement);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(133, _c5));
    \u0275\u0275twoWayProperty("visible", ctx_r1.showAssetModal);
    \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.assetForm);
    \u0275\u0275advance(17);
    \u0275\u0275property("items", ctx_r1.departments);
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(134, _c6));
    \u0275\u0275property("appendTo", "body")("showIcon", true)("iconDisplay", "input");
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.assetForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0623\u0635\u0644", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showFilterSidebar);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.showFilterSidebar);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterSearch);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterPaymentMethod);
    \u0275\u0275property("items", \u0275\u0275pureFunction5(140, _c12, \u0275\u0275pureFunction0(135, _c7), \u0275\u0275pureFunction0(136, _c8), \u0275\u0275pureFunction0(137, _c9), \u0275\u0275pureFunction0(138, _c10), \u0275\u0275pureFunction0(139, _c11)));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterDepartmentId);
    \u0275\u0275property("items", ctx_r1.departmentsWithAllOption);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterCategoryId);
    \u0275\u0275property("items", ctx_r1.categoriesWithAllOption);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.datePreset === "today");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.datePreset === "week");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.datePreset === "month");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.datePreset === "year");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.datePreset === "custom");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterFromDate);
    \u0275\u0275property("appendTo", "body")("showIcon", true)("iconDisplay", "input");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterToDate);
    \u0275\u0275property("appendTo", "body")("showIcon", true)("iconDisplay", "input");
  }
}
var FinanceDashboardComponent = class _FinanceDashboardComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  router = inject(Router);
  toastService = inject(ToastService);
  activeTab = "summary";
  summary = {};
  ledgerEntries = [];
  categories = [];
  clientBalances = [];
  custodyAccounts = [];
  partnerSplits = [];
  employees = [];
  fixedAssets = [];
  ledgerTypes = [
    { id: "expense", label: "\u0645\u0635\u0631\u0648\u0641\u0627\u062A" },
    { id: "income", label: "\u0625\u064A\u0631\u0627\u062F\u0627\u062A / \u062F\u062E\u0644" }
  ];
  paymentMethodsList = [
    { id: "cash", label: "\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u0646\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629)" },
    { id: "cash_hand", label: "\u0646\u0642\u062F\u064A \u064A\u062F\u0648\u064A" },
    { id: "instapay", label: "\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)" },
    { id: "bank_transfer", label: "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A" }
  ];
  // Pagination
  clientBalancesPage = 1;
  totalClientBalancesRecords = 0;
  ledgerPage = 1;
  totalLedgerRecords = 0;
  pageSize = 5;
  get clientBalancesTotalPages() {
    return Math.ceil(this.totalClientBalancesRecords / this.pageSize) || 1;
  }
  get clientBalancesPageNumbers() {
    return Array.from({ length: this.clientBalancesTotalPages }, (_, i) => i + 1);
  }
  get ledgerTotalPages() {
    return Math.ceil(this.totalLedgerRecords / this.pageSize) || 1;
  }
  get ledgerPageNumbers() {
    return Array.from({ length: this.ledgerTotalPages }, (_, i) => i + 1);
  }
  get departmentsWithAllOption() {
    return [{ id: null, name: "\u0643\u0627\u0641\u0629 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A" }, ...this.departments || []];
  }
  get categoriesWithAllOption() {
    return [{ id: null, name: "\u0643\u0627\u0641\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0651\u0629" }, ...this.categories || []];
  }
  filterSearch = "";
  filterType = "";
  filterCategoryId = null;
  filterDepartmentId = null;
  filterEmployeeId = null;
  filterPaymentMethod = "";
  filterFromDate = null;
  filterToDate = null;
  selectedEmployeeStatement = null;
  datePreset = "custom";
  showFilterSidebar = false;
  setDatePreset(preset) {
    this.datePreset = preset;
    const now = /* @__PURE__ */ new Date();
    if (preset === "today") {
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      this.filterFromDate = today;
      this.filterToDate = today;
    } else if (preset === "week") {
      const dayOfWeek = now.getDay();
      const diffToSat = dayOfWeek === 6 ? 0 : dayOfWeek + 1;
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - diffToSat);
      this.filterFromDate = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate());
      this.filterToDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (preset === "month") {
      this.filterFromDate = new Date(now.getFullYear(), now.getMonth(), 1);
      this.filterToDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (preset === "year") {
      this.filterFromDate = new Date(now.getFullYear(), 0, 1);
      this.filterToDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (preset === "custom") {
    }
    this.onFilterChange();
  }
  get activeFilterCount() {
    let count = 0;
    if (this.filterSearch && this.filterSearch.trim())
      count++;
    if (this.filterType)
      count++;
    if (this.filterCategoryId)
      count++;
    if (this.filterDepartmentId)
      count++;
    if (this.filterEmployeeId)
      count++;
    if (this.filterPaymentMethod)
      count++;
    if (this.filterFromDate)
      count++;
    if (this.filterToDate)
      count++;
    return count;
  }
  hasActiveFilters() {
    return this.activeFilterCount > 0;
  }
  applyFilters() {
    this.showFilterSidebar = false;
    this.onFilterChange();
  }
  onFilterChange() {
    this.ledgerPage = 1;
    this.loadLedger();
    this.loadPayrollSummary();
  }
  resetFilters() {
    this.filterSearch = "";
    this.filterType = "";
    this.filterCategoryId = null;
    this.filterDepartmentId = null;
    this.filterEmployeeId = null;
    this.filterPaymentMethod = "";
    this.filterFromDate = null;
    this.filterToDate = null;
    this.datePreset = "custom";
    this.selectedEmployeeStatement = null;
    this.ledgerPage = 1;
    this.loadLedger();
    this.loadPayrollSummary();
  }
  showStatementModal = false;
  selectEmployeeForStatement(emp) {
    this.selectedEmployeeStatement = emp;
    this.showStatementModal = true;
  }
  loadPayrollSummary() {
    const params = {};
    if (this.filterEmployeeId)
      params.employee_id = this.filterEmployeeId;
    if (this.filterFromDate)
      params.from_date = this.formatDatePayload(this.filterFromDate);
    if (this.filterToDate)
      params.to_date = this.formatDatePayload(this.filterToDate);
    this.apiService.getPayrollSummary(params).subscribe((res) => {
      this.payrollSummary = res.data || [];
      if (this.filterEmployeeId && this.payrollSummary.length > 0) {
        this.selectedEmployeeStatement = this.payrollSummary[0];
      }
    });
  }
  loadLedger() {
    const params = {
      page: this.ledgerPage,
      per_page: this.pageSize
    };
    if (this.filterSearch && this.filterSearch.trim())
      params.search = this.filterSearch.trim();
    if (this.filterType)
      params.type = this.filterType;
    if (this.filterCategoryId)
      params.category_id = this.filterCategoryId;
    if (this.filterDepartmentId)
      params.department_id = this.filterDepartmentId;
    if (this.filterPaymentMethod)
      params.payment_method = this.filterPaymentMethod;
    if (this.filterFromDate)
      params.from_date = this.formatDatePayload(this.filterFromDate);
    if (this.filterToDate)
      params.to_date = this.formatDatePayload(this.filterToDate);
    this.apiService.getLedger(params).subscribe((res) => {
      if (res && res.data) {
        if (Array.isArray(res.data)) {
          this.ledgerEntries = res.data;
          this.totalLedgerRecords = res.total || this.ledgerEntries.length;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          this.ledgerEntries = res.data.data;
          this.totalLedgerRecords = res.data.total || this.ledgerEntries.length;
        }
      } else if (Array.isArray(res)) {
        this.ledgerEntries = res;
        this.totalLedgerRecords = res.length;
      }
    });
  }
  loadClientBalances() {
    const params = {
      page: this.clientBalancesPage,
      per_page: this.pageSize
    };
    this.apiService.getClientBalances(params).subscribe((res) => {
      let raw = [];
      if (res && res.data) {
        if (Array.isArray(res.data)) {
          raw = res.data;
          this.totalClientBalancesRecords = res.total || raw.length;
        } else if (res.data.data && Array.isArray(res.data.data)) {
          raw = res.data.data;
          this.totalClientBalancesRecords = res.data.total || raw.length;
        } else {
          raw = [res.data];
          this.totalClientBalancesRecords = raw.length;
        }
      } else if (Array.isArray(res)) {
        raw = res;
        this.totalClientBalancesRecords = raw.length;
      }
      this.clientBalances = raw;
    });
  }
  changeClientBalancesPage(p) {
    if (p < 1 || p > this.clientBalancesTotalPages)
      return;
    this.clientBalancesPage = p;
    this.loadClientBalances();
  }
  onClientBalancesPerPageChange() {
    this.clientBalancesPage = 1;
    this.loadClientBalances();
  }
  changeLedgerPage(p) {
    if (p < 1 || p > this.ledgerTotalPages)
      return;
    this.ledgerPage = p;
    this.loadLedger();
  }
  onLedgerPerPageChange() {
    this.ledgerPage = 1;
    this.loadLedger();
  }
  payrollSummary = [];
  departments = [];
  showLedgerModal = false;
  loading = false;
  ledgerForm;
  assetForm;
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
  redirectToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
  ngOnInit() {
    if (this.isClient()) {
      this.redirectToDashboard();
      return;
    }
    this.initForms();
    this.loadAllData();
  }
  initForms() {
    this.ledgerForm = this.fb.group({
      type: ["expense", Validators.required],
      category_id: [null],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      payment_method: ["cash", Validators.required],
      department_id: [null],
      date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      description: [""]
    });
    this.assetForm = this.fb.group({
      name: ["", Validators.required],
      value: [0, [Validators.required, Validators.min(0)]],
      department_id: [null],
      purchase_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0]],
      notes: [""]
    });
  }
  loadAllData() {
    this.apiService.getFinanceSummary().subscribe((res) => this.summary = res.summary || {});
    this.loadLedger();
    this.loadClientBalances();
    this.apiService.getFinanceCategories().subscribe((res) => this.categories = res.data || []);
    this.apiService.getCustodyAccounts().subscribe((res) => this.custodyAccounts = res.data || []);
    this.apiService.getPartnerProfitSplits().subscribe((res) => this.partnerSplits = res.data || []);
    this.loadPayrollSummary();
    this.apiService.getDepartments().subscribe((res) => this.departments = res || []);
    this.apiService.getFixedAssets().subscribe((res) => this.fixedAssets = res.data || []);
    this.apiService.getUsers().subscribe((res) => {
      const arr = res.data || [];
      this.employees = arr.filter((u) => u.role !== "client" && u.role !== "Client");
    });
  }
  getPaymentMethodLabel(method) {
    switch (method) {
      case "cash":
        return "\u0643\u0627\u0634 (\u062E\u0632\u0646\u0629)";
      case "cash_hand":
        return "\u0646\u0642\u062F\u064A (\u064A\u062F\u0648\u064A)";
      case "instapay":
        return "\u0627\u0646\u0633\u062A\u0627 \u0628\u0627\u064A";
      case "bank_transfer":
        return "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A";
      default:
        return method;
    }
  }
  getPaymentTypeLabel(type) {
    if (!type)
      return "\u0631\u0627\u062A\u0628 \u062B\u0627\u0628\u062A";
    const t = type.toString().toLowerCase();
    if (t.includes("salary"))
      return "\u0631\u0627\u062A\u0628 \u0634\u0647\u0631\u064A \u062B\u0627\u0628\u062A";
    if (t.includes("task"))
      return "\u062D\u0633\u0628 \u0627\u0644\u0645\u0647\u0645\u0629 / \u0627\u0644\u0625\u0646\u062A\u0627\u062C";
    if (t.includes("hybrid"))
      return "\u0645\u062E\u062A\u0644\u0637 (\u0631\u0627\u062A\u0628 + \u0639\u0645\u0648\u0644\u0629/\u0645\u0647\u0627\u0645)";
    if (t.includes("percentage"))
      return "\u0646\u0633\u0628\u0629 \u0645\u0626\u0648\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A";
    if (t.includes("commission"))
      return "\u0639\u0645\u0648\u0644\u0629 \u0641\u0642\u0637";
    if (t.includes("hourly"))
      return "\u0628\u0627\u0644\u0633\u0627\u0639\u0629";
    return type;
  }
  openAddLedgerModal() {
    this.ledgerForm.reset({ type: "expense", payment_method: "cash", amount: 0, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] });
    this.showLedgerModal = true;
  }
  showCatModal = false;
  catNameInput = "";
  showCustodyModal = false;
  custodyDeptId = null;
  custodyEmpId = null;
  filteredCustodyEmployees = [];
  custodyAmount = 0;
  showReturnCustodyModal = false;
  selectedCustody = null;
  returnedAmount = 0;
  returnNotes = "";
  returnCategoryId = null;
  onCustodyDeptChange() {
    this.custodyEmpId = null;
    if (!this.custodyDeptId) {
      this.filteredCustodyEmployees = [];
      return;
    }
    const dept = this.departments.find((d) => d.id === this.custodyDeptId);
    const managerId = dept?.manager_id;
    const deptEmps = (this.employees || []).filter((e) => e.department_id === this.custodyDeptId || e.id === managerId);
    this.filteredCustodyEmployees = deptEmps.map((e) => {
      const isManager = e.id === managerId || e.role === "department_manager" || e.role === "Department Manager";
      return __spreadProps(__spreadValues({}, e), {
        displayName: isManager ? `\u{1F451} ${e.name} (\u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645)` : e.name
      });
    });
  }
  triggerAddCategory() {
    this.catNameInput = "";
    this.showCatModal = true;
  }
  saveCategory() {
    if (!this.catNameInput || !this.catNameInput.trim())
      return;
    this.apiService.storeFinanceCategory({ name_ar: this.catNameInput.trim(), type: this.ledgerForm.value.type }).subscribe((res) => {
      this.showCatModal = false;
      if (res.data) {
        this.categories.push(res.data);
        this.ledgerForm.patchValue({ category_id: res.data.id });
      }
    });
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
  saveLedgerEntry() {
    if (this.ledgerForm.invalid) {
      this.ledgerForm.markAllAsTouched();
      this.toastService.warning("\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D \u0642\u0628\u0644 \u0627\u0644\u062D\u0641\u0638");
      return;
    }
    this.loading = true;
    const payload = __spreadProps(__spreadValues({}, this.ledgerForm.value), {
      date: this.formatDatePayload(this.ledgerForm.value.date)
    });
    this.apiService.storeLedgerEntry(payload).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success("\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0628\u0646\u062C\u0627\u062D", "\u062A\u0645\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629");
        this.showLedgerModal = false;
        this.loadAllData();
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
      }
    });
  }
  openIssueCustodyModal() {
    this.custodyDeptId = null;
    this.custodyEmpId = null;
    this.custodyAmount = 0;
    this.filteredCustodyEmployees = [];
    this.showCustodyModal = true;
  }
  custodyNotes = "";
  saveIssueCustody() {
    if (!this.custodyEmpId || this.custodyAmount <= 0)
      return;
    const payload = {
      employee_id: +this.custodyEmpId,
      issued_amount: +this.custodyAmount
    };
    if (this.custodyNotes && this.custodyNotes.trim()) {
      payload.notes = this.custodyNotes.trim();
    }
    this.apiService.issueCustody(payload).subscribe(() => {
      this.showCustodyModal = false;
      this.custodyNotes = "";
      this.loadAllData();
    });
  }
  getCustodyStatusLabel(status) {
    if (!status)
      return "\u0646\u0634\u0637\u0629";
    const st = status.toLowerCase();
    if (st === "open" || st === "issued" || st === "active")
      return "\u0639\u0647\u062F\u064E\u0629 \u0646\u0634\u0637\u0629";
    if (st === "settled" || st === "closed" || st === "returned")
      return "\u062A\u0645\u062A \u0627\u0644\u062A\u0633\u0648\u064A\u0629";
    return status;
  }
  getCustodyStatusClass(status) {
    if (!status)
      return "badge-a";
    const st = status.toLowerCase();
    if (st === "open" || st === "issued" || st === "active")
      return "badge-a";
    if (st === "settled" || st === "closed" || st === "returned")
      return "badge-e";
    return "badge-v";
  }
  openReturnCustodyModal(custody) {
    this.selectedCustody = custody;
    this.returnedAmount = custody.issued_amount || 0;
    this.returnNotes = "";
    this.returnCategoryId = null;
    this.showReturnCustodyModal = true;
  }
  saveReturnCustody() {
    if (!this.selectedCustody)
      return;
    const payload = {
      returned_amount: +this.returnedAmount
    };
    if (this.returnNotes && this.returnNotes.trim()) {
      payload.notes = this.returnNotes.trim();
    }
    if (this.returnCategoryId) {
      payload.spent_category_id = this.returnCategoryId;
    }
    this.apiService.returnCustody(this.selectedCustody.id, payload).subscribe({
      next: () => {
        this.showReturnCustodyModal = false;
        this.toastService.success("\u062A\u0645 \u0625\u062A\u0645\u0627\u0645 \u062A\u0633\u0648\u064A\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0627\u0628 \u0627\u0644\u0639\u0647\u062F\u0629 \u0628\u0646\u062C\u0627\u062D", "\u062A\u0645\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629");
        this.loadAllData();
      },
      error: (err) => {
        this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u0625\u062A\u0645\u0627\u0645 \u062A\u0633\u0648\u064A\u0629 \u0627\u0644\u0639\u0647\u062F\u0629");
      }
    });
  }
  showAssetModal = false;
  openAddAssetModal() {
    this.assetForm.reset({ value: 0, purchase_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] });
    this.showAssetModal = true;
  }
  saveAsset() {
    if (this.assetForm.invalid)
      return;
    this.loading = true;
    const payload = __spreadProps(__spreadValues({}, this.assetForm.value), {
      purchase_date: this.formatDatePayload(this.assetForm.value.purchase_date)
    });
    this.apiService.storeFixedAsset(payload).subscribe({
      next: () => {
        this.loading = false;
        this.showAssetModal = false;
        this.loadAllData();
      },
      error: () => this.loading = false
    });
  }
  currentDate = /* @__PURE__ */ new Date();
  currentUser = null;
  exportToExcel() {
    let filename = "\u0627\u0644\u062A\u0642\u0631\u064A\u0631_\u0627\u0644\u0645\u0627\u0644\u064A.csv";
    let csvContent = "\uFEFF";
    if (this.activeTab === "summary" || this.activeTab === "ledger") {
      filename = `\u062F\u0641\u062A\u0631_\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A_\u0627\u0644\u0645\u0627\u0644\u064A\u0629_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
      const headers = ["\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629", "\u0627\u0644\u062A\u0635\u0646\u064A\u0641", "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639", "\u0627\u0644\u0645\u0628\u0644\u063A (\u062C.\u0645)", "\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0628\u064A\u0627\u0646"];
      csvContent += headers.join(",") + "\n";
      this.ledgerEntries.forEach((entry) => {
        const type = entry.type === "income" ? "\u0625\u064A\u0631\u0627\u062F" : "\u0645\u0635\u0631\u0648\u0641";
        const category = entry.category?.name_ar || entry.category?.name_en || "\u0639\u0627\u0645";
        const method = this.getPaymentMethodLabel(entry.payment_method);
        const amount = (entry.type === "income" ? "+" : "-") + entry.amount;
        const desc = `"${(entry.description || "").replace(/"/g, '""')}"`;
        csvContent += `"${entry.date}","${type}","${category}","${method}","${amount}",${desc}
`;
      });
    } else if (this.activeTab === "custody") {
      filename = `\u0639\u0647\u062F_\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
      const headers = ["\u0627\u0644\u0645\u0648\u0638\u0641", "\u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0629", "\u0627\u0644\u0645\u0633\u062A\u0631\u062F", "\u0627\u0644\u0645\u0646\u0635\u0631\u0641 \u0627\u0644\u0641\u0639\u0644\u064A", "\u0627\u0644\u062D\u0627\u0644\u0629"];
      csvContent += headers.join(",") + "\n";
      this.custodyAccounts.forEach((c) => {
        const emp = `"${(c.employee?.name || "").replace(/"/g, '""')}"`;
        const net = c.issued_amount - c.returned_amount;
        csvContent += `${emp},"${c.issued_amount}","${c.returned_amount}","${net}","${c.status}"
`;
      });
    } else if (this.activeTab === "partners") {
      filename = `\u062A\u0648\u0632\u064A\u0639_\u0623\u0631\u0628\u0627\u062D_\u0627\u0644\u0634\u0631\u0643\u0627\u0621_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
      const headers = ["\u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u0631\u0643\u0632", "\u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u062E\u0627\u0631\u062C\u064A", "\u0646\u0633\u0628\u0629 \u0627\u0644\u0634\u0631\u064A\u0643", "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A", "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A", "\u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D", "\u062D\u0635\u0629 \u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u0635\u0627\u0641\u064A\u0629", "\u062D\u0635\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0635\u0627\u0641\u064A\u0629"];
      csvContent += headers.join(",") + "\n";
      this.partnerSplits.forEach((ps) => {
        const dept = `"${(ps.department_name || "").replace(/"/g, '""')}"`;
        const partner = `"${(ps.partner_name || "").replace(/"/g, '""')}"`;
        csvContent += `${dept},${partner},"${ps.partner_percentage}%","${ps.total_income}","${ps.total_expenses}","${ps.net_profit}","${ps.partner_share}","${ps.company_share}"
`;
      });
    } else if (this.activeTab === "payroll") {
      filename = `\u0645\u0631\u062A\u0628\u0627\u062A_\u0648\u0645\u0633\u062A\u062D\u0642\u0627\u062A_\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
      const headers = ["\u0627\u0644\u0645\u0648\u0638\u0641", "\u0627\u0644\u0642\u0633\u0645", "\u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u0639\u0648\u064A\u0636", "\u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A", "\u0623\u062C\u0631 \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0625\u0646\u062A\u0627\u062C", "\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A", "\u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A", "\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u0639\u0631\u0628\u0627\u062A", "\u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642", "\u0627\u0644\u062D\u0627\u0644\u0629"];
      csvContent += headers.join(",") + "\n";
      this.payrollSummary.forEach((p) => {
        const emp = `"${(p.employee?.name || "").replace(/"/g, '""')}"`;
        const dept = `"${(p.employee?.department?.name || "").replace(/"/g, '""')}"`;
        const model = `"${this.getPaymentTypeLabel(p.employee?.compensation_model)}"`;
        csvContent += `${emp},${dept},${model},"${p.base_salary}","${p.tasks_earnings}","${p.commissions}","${p.bonuses}","${p.advances_deductions}","${p.net_salary_due}","${p.status}"
`;
      });
    } else if (this.activeTab === "assets") {
      filename = `\u0627\u0644\u0623\u0635\u0648\u0644_\u0627\u0644\u062B\u0627\u0628\u062A\u0629_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
      const headers = ["\u0627\u0633\u0645 \u0627\u0644\u0623\u0635\u0644 \u0627\u0644\u062B\u0627\u0628\u062A", "\u0642\u064A\u0645\u0629 \u0627\u0644\u0623\u0635\u0644 (\u062C.\u0645)", "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F", "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0631\u0627\u0621", "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A"];
      csvContent += headers.join(",") + "\n";
      this.fixedAssets.forEach((a) => {
        const name = `"${(a.name || "").replace(/"/g, '""')}"`;
        const dept = `"${(a.department?.name || "\u0639\u0627\u0645").replace(/"/g, '""')}"`;
        const notes = `"${(a.notes || "").replace(/"/g, '""')}"`;
        csvContent += `${name},"${a.value}",${dept},"${a.purchase_date || ""}",${notes}
`;
      });
    }
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  getActiveTabTitle() {
    switch (this.activeTab) {
      case "summary":
        return "\u0627\u0644\u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0627\u0644\u064A \u0627\u0644\u0639\u0627\u0645";
      case "ledger":
        return "\u062F\u0641\u062A\u0631 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0648\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0642\u064A\u0648\u062F";
      case "custody":
        return "\u062D\u0633\u0627\u0628\u0627\u062A \u0639\u0647\u062F \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646";
      case "partners":
        return "\u062A\u0642\u0631\u064A\u0631 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0648\u0627\u0644\u0645\u0631\u0643\u0632";
      case "payroll":
        return "\u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0648\u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A";
      case "assets":
        return "\u0633\u062C\u0644 \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 \u0648\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644";
      default:
        return "\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A";
    }
  }
  static \u0275fac = function FinanceDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinanceDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinanceDashboardComponent, selectors: [["app-finance-dashboard"]], decls: 2, vars: 2, consts: [["class", "access-denied-shell", "style", "display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:70vh; text-align:center; gap:16px; direction:rtl; padding:30px;", 4, "ngIf"], ["class", "crm-module-container", 4, "ngIf"], [1, "access-denied-shell", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "min-height", "70vh", "text-align", "center", "gap", "16px", "direction", "rtl", "padding", "30px"], [1, "fa-solid", "fa-shield-halved", 2, "font-size", "3.5rem", "color", "var(--rose-light, #f43f5e)"], [2, "color", "var(--text, #fff)", "font-weight", "900", "font-size", "1.4rem", "margin", "0"], [2, "color", "var(--text-2, #94a3b8)", "font-size", "0.9rem", "max-width", "450px", "margin", "0"], [1, "btn", "btn-primary", 2, "padding", "10px 24px", "border-radius", "12px", "font-weight", "700", "cursor", "pointer", "background", "linear-gradient(135deg, #6366f1, #4f46e5)", "color", "#fff", "border", "none", 3, "click"], [1, "fa-solid", "fa-arrow-right"], [1, "crm-module-container"], [1, "print-only-header"], [2, "text-align", "right"], [2, "font-size", "1.4rem", "font-weight", "800", "color", "#0f172a", "margin", "0"], [2, "font-size", "0.9rem", "color", "#475569", "margin", "4px 0 0 0"], [2, "text-align", "left", "font-size", "0.82rem", "color", "#475569"], [4, "ngIf"], [1, "module-header"], [1, "fa-solid", "fa-chart-line", 2, "color", "var(--emerald-light)"], [1, "subtitle"], [1, "header-actions", "no-print", 2, "display", "flex", "gap", "10px", "align-items", "center", "flex-wrap", "wrap"], [1, "quick-header-date-presets", 2, "display", "flex", "gap", "6px", "align-items", "center"], ["type", "button", 1, "hdr-date-chip", 3, "click"], ["type", "button", 1, "btn", "btn-action", "primary", 3, "click"], [1, "fa-solid", "fa-sliders"], ["style", "background:#f43f5e; color:#fff; font-size:0.7rem; padding:2px 6px; border-radius:100px; margin-right:4px; font-weight:800;", 4, "ngIf"], ["type", "button", "title", "\u062A\u0635\u062F\u064A\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0645\u0639\u0631\u0648\u0636 \u062D\u0627\u0644\u064A\u0627\u064B \u0625\u0644\u0649 \u0645\u0644\u0641 Excel", 1, "btn", "btn-action", "primary", 3, "click"], [1, "fa-solid", "fa-file-excel", 2, "color", "#10b981"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "finance-tabs-nav", "glass-panel"], [3, "click"], [1, "fa-solid", "fa-chart-line"], [1, "fa-solid", "fa-book"], [1, "fa-solid", "fa-hand-holding-dollar"], [1, "fa-solid", "fa-users-rectangle"], [1, "fa-solid", "fa-money-check-dollar"], [1, "fa-solid", "fa-vault"], ["class", "tab-content", 4, "ngIf"], ["header", "\u062A\u0633\u062C\u064A\u0644 \u0642\u0633\u0637 / \u062D\u0631\u0643\u0629 \u0645\u0627\u0644\u064A\u0629 \u062C\u062F\u064A\u062F\u0629", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [3, "ngSubmit", "formGroup"], [1, "form-grid", 2, "padding", "10px 0"], [1, "form-group"], [1, "required"], ["formControlName", "type", "optionLabel", "label", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629...", 3, "items"], ["formControlName", "category_id", "optionLabel", "name_ar", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641...", "addNewLabel", "+ \u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F", 3, "addNew", "items"], ["type", "number", "pInputText", "", "formControlName", "amount", "placeholder", "500"], ["formControlName", "payment_method", "optionLabel", "label", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639...", 3, "items"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "items"], ["formControlName", "date", "dateFormat", "yy-mm-dd", "placeholder", "\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u064A\u062F...", "styleClass", "w-full", 3, "showIcon", "iconDisplay", "appendTo"], [1, "form-group", "full-width"], ["pTextarea", "", "formControlName", "description", "rows", "2", "placeholder", "\u0648\u0635\u0641 \u0627\u0644\u062D\u0631\u0643\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629..."], [1, "dialog-footer-actions"], ["type", "button", 1, "btn-dialog-cancel", 3, "click"], ["type", "submit", 1, "btn-dialog-submit", 3, "disabled"], ["header", "\u0625\u0636\u0627\u0641\u0629 \u0641\u0626\u0629 \u0645\u0627\u0644\u064A\u0629 \u062C\u062F\u064A\u062F\u0629", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "14px"], ["type", "text", "pInputText", "", "placeholder", "\u0645\u062B\u0627\u0644: \u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0645\u0645\u0648\u0644\u0629 \u0623\u0648 \u0623\u062F\u0648\u0627\u062A \u0645\u0643\u062A\u0628\u064A\u0629...", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-dialog-submit", 3, "click", "disabled"], ["header", "\u0635\u0631\u0641 \u0639\u0647\u062F\u0629 \u0645\u0627\u0644\u064A\u0629 \u0644\u0645\u0648\u0638\u0641", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], ["optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 \u0623\u0648\u0644\u0627\u064B...", 3, "ngModelChange", "ngModel", "items"], ["class", "form-group", 4, "ngIf"], ["header", "\u062A\u0633\u0648\u064A\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u0639\u0647\u062F\u0629 \u0645\u0627\u0644\u064A\u0629", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], ["style", "padding:10px 0; display:flex; flex-direction:column; gap:16px;", 4, "ngIf"], ["type", "button", 1, "btn-dialog-submit", 3, "click"], [3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo", "header"], ["style", "padding: 8px 0;", 4, "ngIf"], [1, "dialog-footer-actions", 2, "margin-top", "20px"], ["type", "button", 1, "btn-dialog-cancel", 2, "display", "flex", "align-items", "center", "gap", "8px", 3, "click"], ["header", "\u0625\u0636\u0627\u0641\u0629 \u0623\u0635\u0644 \u062B\u0627\u0628\u062A \u062C\u062F\u064A\u062F", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], ["type", "text", "pInputText", "", "formControlName", "name", "placeholder", "\u0645\u062B\u0627\u0644: \u0623\u062C\u0647\u0632\u0629 \u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0642\u0633\u0645 \u0627\u0644\u0645\u0648\u0646\u062A\u0627\u062C \u0623\u0648 \u0633\u064A\u0627\u0631\u0629 \u0646\u0642\u0644..."], ["type", "number", "pInputText", "", "formControlName", "value", "placeholder", "0"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)...", 3, "items"], ["formControlName", "purchase_date", "dateFormat", "yy-mm-dd", "placeholder", "\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0631\u0627\u0621...", "styleClass", "w-full", 3, "appendTo", "showIcon", "iconDisplay"], ["pTextarea", "", "formControlName", "notes", "rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0623\u064A\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0648 \u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629 \u0644\u0644\u0623\u0635\u0644..."], ["class", "filter-drawer-overlay", 3, "click", 4, "ngIf"], [1, "filter-drawer-panel"], [1, "filter-drawer-header"], [1, "fa-solid", "fa-sliders", 2, "color", "var(--violet-light)"], ["type", "button", 1, "btn-close-drawer", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "filter-drawer-body"], [1, "filter-field-group"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "pInputText", "", "placeholder", "\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645\u060C \u0627\u0644\u0648\u0635\u0641\u060C \u0627\u0644\u0628\u064A\u0627\u0646\u060C \u0623\u0648 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629...", 1, "w-full", 3, "ngModelChange", "input", "ngModel"], [1, "fa-solid", "fa-wallet"], ["optionLabel", "label", "optionValue", "value", "placeholder", "\u0627\u062E\u062A\u0631 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639...", 3, "ngModelChange", "ngModel", "items"], [1, "fa-solid", "fa-building-user"], ["optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "ngModelChange", "ngModel", "items"], [1, "fa-solid", "fa-tags"], ["optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641...", 3, "ngModelChange", "ngModel", "items"], [1, "filter-field-group", "full-width"], [1, "fa-solid", "fa-clock-rotate-left"], [1, "date-preset-chips", 2, "display", "flex", "flex-wrap", "wrap", "gap", "8px", "width", "100%", "margin-bottom", "8px"], ["type", "button", 1, "preset-chip", 3, "click"], [1, "fa-regular", "fa-sun"], [1, "fa-solid", "fa-calendar-week"], [1, "fa-solid", "fa-calendar-days"], [1, "fa-solid", "fa-calendar"], [1, "fa-solid", "fa-pen-to-square"], [1, "date-range-grid", 2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "12px", "width", "100%"], [1, "fa-regular", "fa-calendar-days"], ["dateFormat", "yy-mm-dd", "placeholder", "\u0627\u062E\u062A\u0631 \u0645\u0646 \u062A\u0627\u0631\u064A\u062E...", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "appendTo", "showIcon", "iconDisplay"], ["dateFormat", "yy-mm-dd", "placeholder", "\u0627\u062E\u062A\u0631 \u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E...", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "appendTo", "showIcon", "iconDisplay"], [1, "filter-drawer-footer"], ["type", "button", 1, "btn-reset-filters", 3, "click"], [1, "fa-solid", "fa-rotate-left"], ["type", "button", 1, "btn-apply-filters", 3, "click"], [1, "fa-solid", "fa-check"], [2, "background", "#f43f5e", "color", "#fff", "font-size", "0.7rem", "padding", "2px 6px", "border-radius", "100px", "margin-right", "4px", "font-weight", "800"], [1, "tab-content"], [1, "metrics-grid"], [1, "kpi-card", "kpi-emerald"], [1, "kpi-card-head"], [1, "kpi-label"], [1, "kpi-icon-badge"], [1, "fa-solid", "fa-arrow-trend-up"], [1, "kpi-value", "text-emerald"], [1, "kpi-footer"], [1, "kpi-subtext"], [1, "fa-solid", "fa-circle-check"], [1, "kpi-card", "kpi-rose"], [1, "fa-solid", "fa-arrow-trend-down"], [1, "kpi-value", "text-rose"], [1, "fa-solid", "fa-receipt"], [1, "kpi-card", "kpi-teal"], [1, "fa-solid", "fa-scale-balanced"], [1, "kpi-value", "text-teal"], [1, "kpi-card", "kpi-violet"], [1, "kpi-value", "text-violet"], [1, "fa-solid", "fa-boxes-packing"], [1, "kpi-card", "kpi-amber"], [1, "fa-solid", "fa-file-invoice-dollar"], [1, "kpi-value", "text-amber"], [1, "kpi-card", "kpi-coral"], [1, "kpi-value", "text-coral"], [1, "fa-solid", "fa-user-group"], [1, "section-card", "glass-panel", "margin-top"], [2, "font-size", "1rem", "font-weight", "700", "color", "var(--text)", "display", "flex", "align-items", "center", "gap", "8px"], [1, "fa-solid", "fa-file-invoice-dollar", 2, "color", "var(--amber-light)"], [1, "table-responsive", 2, "margin-top", "14px"], [1, "crm-table"], [4, "ngFor", "ngForOf"], ["class", "table-pagination-bar", 4, "ngIf"], [2, "font-weight", "700", "color", "var(--text)"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], ["colspan", "5"], [1, "empty-state"], [1, "empty-state-icon"], [1, "empty-state-title"], [1, "empty-state-desc"], [1, "table-pagination-bar"], [1, "pagination-info-group"], [1, "pagination-info"], [1, "pagination-per-page"], [1, "pg-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [1, "pagination-controls"], [1, "pg-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-chevron-right"], ["class", "pg-num-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-chevron-left"], [1, "pg-num-btn", 3, "click"], [1, "table-card", "glass-panel"], [1, "table-responsive"], [2, "color", "var(--text-2)"], [1, "badge", 3, "ngClass"], [1, "method-badge"], [2, "font-weight", "700", 3, "ngClass"], ["colspan", "6"], [1, "fa-solid", "fa-folder-open"], [1, "tab-header", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "16px", "margin-bottom", "20px"], [2, "font-size", "1.05rem", "color", "var(--text)", "font-weight", "800", "margin", "0", "display", "flex", "align-items", "center", "gap", "8px"], [1, "fa-solid", "fa-hand-holding-dollar", 2, "color", "var(--teal-light)"], [2, "font-size", "0.8rem", "color", "var(--text-2)", "margin-top", "4px", "margin-bottom", "0"], ["type", "button", 1, "btn", "btn-action", "primary", 2, "padding", "9px 18px", "font-weight", "700", 3, "click"], [1, "fa-solid", "fa-handshake-angle"], [2, "color", "var(--emerald-light)"], ["class", "action-icon-btn btn-emerald", "data-tooltip", "\u062A\u0633\u0648\u064A\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0627\u0628 \u0627\u0644\u0639\u0647\u062F\u0629", "title", "\u062A\u0633\u0648\u064A\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0627\u0628 \u0627\u0644\u0639\u0647\u062F\u0629", 3, "click", 4, "ngIf"], ["data-tooltip", "\u062A\u0633\u0648\u064A\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0627\u0628 \u0627\u0644\u0639\u0647\u062F\u0629", "title", "\u062A\u0633\u0648\u064A\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0627\u0628 \u0627\u0644\u0639\u0647\u062F\u0629", 1, "action-icon-btn", "btn-emerald", 3, "click"], [1, "empty-state", 2, "padding", "28px 16px", "text-align", "center"], [1, "empty-state-icon", 2, "font-size", "1.6rem", "color", "var(--violet-light)", "margin-bottom", "8px"], [1, "empty-state-title", 2, "font-size", "0.92rem", "font-weight", "700", "color", "var(--text)"], [1, "empty-state-desc", 2, "font-size", "0.8rem", "color", "var(--text-2)", "margin-top", "4px"], [1, "section-card", "glass-panel"], [2, "font-size", "1rem", "color", "var(--text)", "font-weight", "700"], [1, "fa-solid", "fa-users-rectangle", 2, "color", "var(--amber-light)"], [1, "table-responsive", "margin-top"], [1, "badge", "badge-a"], [2, "color", "var(--rose-light)"], [2, "color", "var(--amber-light)", "font-weight", "700"], ["colspan", "8"], [1, "empty-state-icon", 2, "font-size", "1.6rem", "color", "var(--amber-light)", "margin-bottom", "8px"], [1, "fa-solid", "fa-users-slash"], [1, "fa-solid", "fa-money-check-dollar", 2, "color", "var(--teal-light)"], [2, "font-size", "0.78rem", "color", "var(--text-2)", "margin-top", "4px"], [1, "no-print"], [1, "badge", "badge-v"], [2, "color", "var(--teal-light)"], [2, "color", "var(--teal-light)", "font-weight", "800", "font-size", "0.95rem"], ["type", "button", "title", "\u0639\u0631\u0636 \u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0648\u0638\u0641", 1, "btn-action", "primary", 3, "click"], ["colspan", "11"], [1, "empty-state-icon", 2, "font-size", "1.6rem", "color", "var(--teal-light)", "margin-bottom", "8px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "12px", "margin-bottom", "16px"], [2, "font-size", "1rem", "color", "var(--text)", "font-weight", "700", "margin", "0"], [1, "fa-solid", "fa-vault", 2, "color", "var(--violet-light)", "margin-left", "6px"], [2, "font-size", "0.78rem", "color", "var(--text-2)", "margin-top", "4px", "margin-bottom", "0"], ["type", "button", 1, "btn-action", "primary", 3, "click"], [2, "color", "var(--emerald-light)", "font-weight", "800", "font-size", "0.95rem"], [2, "color", "var(--text-2)", "font-size", "0.82rem"], ["colspan", "5", 2, "text-align", "center", "padding", "24px", "color", "var(--text-2)"], ["optionLabel", "displayName", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0638\u0641 \u0623\u0648 \u0627\u0644\u0645\u0634\u0631\u0641...", 3, "ngModelChange", "ngModel", "items"], ["type", "number", "pInputText", "", "placeholder", "0", 3, "ngModelChange", "ngModel"], ["type", "text", "pInputText", "", "placeholder", "\u0623\u062F\u062E\u0644 \u0623\u064A\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0648 \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0644\u0644\u0639\u0647\u062F\u0629...", 3, "ngModelChange", "ngModel"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "16px"], [2, "background", "rgba(99, 102, 241, 0.08)", "border", "1px solid var(--border)", "border-radius", "12px", "padding", "12px 16px", "display", "flex", "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "8px"], [2, "font-size", "0.88rem", "color", "var(--text-2)"], [2, "color", "var(--text)"], [2, "color", "var(--violet-light)"], ["style", "color:var(--rose-light); font-weight:600; margin-top:4px; display:block;", 4, "ngIf"], ["optionLabel", "name_ar", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)...", 3, "ngModelChange", "ngModel", "options", "appendTo"], ["pTextarea", "", "rows", "3", "placeholder", "\u0645\u062B\u0627\u0644: \u062A\u0645 \u0634\u0631\u0627\u0621 \u0623\u062F\u0648\u0627\u062A \u0645\u0643\u062A\u0628\u064A\u0629 \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u062A\u0635\u0648\u064A\u0631 \u0648\u062A\u0623\u0645\u064A\u0646 \u0627\u0646\u062A\u0642\u0627\u0644\u0627\u062A...", 2, "width", "100%", "border-radius", "10px", "background", "var(--bg-input)", "color", "var(--text)", "border", "1px solid var(--border)", "padding", "10px", "font-family", "inherit", "font-size", "0.88rem", 3, "ngModelChange", "ngModel"], [2, "color", "var(--rose-light)", "font-weight", "600", "margin-top", "4px", "display", "block"], [1, "fa-solid", "fa-calculator"], [2, "padding", "8px 0"], [2, "background", "rgba(99, 102, 241, 0.06)", "border", "1px solid var(--border)", "border-radius", "12px", "padding", "12px 16px", "margin-bottom", "20px", "display", "flex", "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "10px"], [2, "font-size", "0.95rem", "font-weight", "800", "color", "var(--text)", "margin", "0"], [2, "font-size", "0.8rem", "color", "var(--text-2)"], ["style", "font-size:0.8rem; color:var(--text-2);", 4, "ngIf"], [1, "metrics-grid", 2, "grid-template-columns", "repeat(auto-fit, minmax(160px, 1fr))", "margin-bottom", "24px"], [1, "kpi-card", "kpi-violet", 2, "min-height", "120px", "padding", "16px"], [1, "kpi-card", "kpi-teal", 2, "min-height", "120px", "padding", "16px"], [1, "kpi-card", "kpi-emerald", 2, "min-height", "120px", "padding", "16px"], [1, "kpi-card", "kpi-rose", 2, "min-height", "120px", "padding", "16px"], [1, "kpi-card", "kpi-amber", 2, "min-height", "120px", "padding", "16px"], [1, "kpi-value", "text-amber", 2, "font-size", "1.6rem", "font-weight", "900"], [2, "font-size", "0.95rem", "font-weight", "800", "color", "var(--text)", "margin-bottom", "14px", "display", "flex", "align-items", "center", "gap", "8px"], [1, "fa-solid", "fa-list-check", 2, "color", "var(--violet-light)"], [1, "table-responsive", 2, "max-height", "340px", "overflow-y", "auto"], [1, "badge", "badge-v", 2, "background", "rgba(16,185,129,0.15)", "color", "var(--emerald-light)"], [2, "color", "var(--teal-light)", "font-weight", "700"], [1, "empty-state", 2, "padding", "24px 16px", "text-align", "center"], [1, "empty-state-icon", 2, "font-size", "1.5rem", "color", "var(--violet-light)", "margin-bottom", "6px"], [1, "fa-solid", "fa-clipboard-check"], [1, "empty-state-title", 2, "font-size", "0.9rem", "font-weight", "700", "color", "var(--text)"], [1, "empty-state-desc", 2, "font-size", "0.78rem", "color", "var(--text-2)", "margin-top", "4px"], [1, "filter-drawer-overlay", 3, "click"]], template: function FinanceDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FinanceDashboardComponent_div_0_Template, 9, 0, "div", 0)(1, FinanceDashboardComponent_div_1_Template, 251, 146, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isClient());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isClient());
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    DecimalPipe,
    DatePipe,
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
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text);\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], \n.header-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%], \n.header-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  height: 42px !important;\n  padding: 0 18px !important;\n  border-radius: 12px !important;\n  font-size: 0.86rem !important;\n  font-weight: 700 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 8px !important;\n  cursor: pointer !important;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;\n  box-sizing: border-box !important;\n  white-space: nowrap !important;\n}\n.header-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5) !important;\n  color: #ffffff !important;\n  border: 1px solid rgba(99, 102, 241, 0.4) !important;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35) !important;\n}\n.header-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) !important;\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5) !important;\n}\n.header-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  background: var(--bg-card, rgba(255, 255, 255, 0.04)) !important;\n  color: var(--text, #f3f4f6) !important;\n  border: 1px solid var(--border, rgba(99, 102, 241, 0.22)) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;\n}\n.header-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12) !important;\n  color: var(--violet-light, #a5b4fc) !important;\n  border-color: rgba(99, 102, 241, 0.4) !important;\n  transform: translateY(-2px) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #0f172a !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  color: #4f46e5 !important;\n  border-color: #94a3b8 !important;\n}\n.finance-tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 6px;\n  border-radius: var(--r-lg);\n  margin-bottom: 24px;\n  overflow-x: auto;\n}\n.finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--text-2);\n  padding: 9px 16px;\n  border-radius: var(--r);\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.84rem;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  white-space: nowrap;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n}\n.finance-tabs-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--emerald),\n      var(--teal));\n  color: #ffffff !important;\n  box-shadow: 0 4px 16px var(--emerald-soft);\n  border-color: transparent;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 28px;\n}\n@media (max-width: 1024px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-card, #111228);\n  border: 1px solid var(--border, rgba(99, 102, 241, 0.18));\n  border-radius: 16px;\n  padding: 22px 24px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 146px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.kpi-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  border-radius: 16px 16px 0 0;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.kpi-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: var(--text-2, #94a3b8);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  line-height: 1.3;\n}\n.kpi-icon-badge[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.kpi-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  opacity: 0.85;\n}\n.kpi-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding-top: 8px;\n  margin-top: 4px;\n}\n.kpi-subtext[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--text-2, #94a3b8);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  line-height: 1.3;\n}\n.kpi-emerald[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #059669);\n}\n.kpi-emerald[_ngcontent-%COMP%]   .kpi-icon-badge[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.text-emerald[_ngcontent-%COMP%] {\n  color: #10b981 !important;\n}\n.kpi-rose[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f43f5e,\n      #e11d48);\n}\n.kpi-rose[_ngcontent-%COMP%]   .kpi-icon-badge[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.15);\n  color: #fb7185;\n}\n.text-rose[_ngcontent-%COMP%] {\n  color: #f43f5e !important;\n}\n.kpi-teal[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #14b8a6,\n      #0d9488);\n}\n.kpi-teal[_ngcontent-%COMP%]   .kpi-icon-badge[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.15);\n  color: #2dd4bf;\n}\n.text-teal[_ngcontent-%COMP%] {\n  color: #14b8a6 !important;\n}\n.kpi-violet[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #6366f1);\n}\n.kpi-violet[_ngcontent-%COMP%]   .kpi-icon-badge[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.text-violet[_ngcontent-%COMP%] {\n  color: #a78bfa !important;\n}\n.kpi-amber[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #d97706);\n}\n.kpi-amber[_ngcontent-%COMP%]   .kpi-icon-badge[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n}\n.text-amber[_ngcontent-%COMP%] {\n  color: #f59e0b !important;\n}\n.kpi-coral[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #be185d);\n}\n.kpi-coral[_ngcontent-%COMP%]   .kpi-icon-badge[_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.15);\n  color: #f472b6;\n}\n.text-coral[_ngcontent-%COMP%] {\n  color: #ec4899 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 35px rgba(15, 23, 42, 0.12) !important;\n  border-color: #94a3b8 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .kpi-footer[_ngcontent-%COMP%] {\n  border-top-color: #f1f5f9 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .kpi-subtext[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: var(--text);\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.04);\n}\n.method-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.btn-action.primary[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.22);\n  color: var(--violet-light);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: var(--emerald-light);\n  font-weight: 700;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n  font-weight: 700;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.filter-drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(10, 11, 26, 0.75);\n  backdrop-filter: blur(6px);\n  z-index: 2990;\n}\n.filter-drawer-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 420px;\n  max-width: 90vw;\n  height: 100vh;\n  background: var(--bg-card, #111228);\n  border-left: 1px solid var(--border-v, rgba(99, 102, 241, 0.3));\n  box-shadow: -15px 0 50px rgba(0, 0, 0, 0.85);\n  z-index: 3000;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.filter-drawer-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.filter-drawer-header[_ngcontent-%COMP%] {\n  padding: 22px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(99, 102, 241, 0.06);\n}\n.filter-drawer-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text, #f3f4f6) !important;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-close-drawer[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: var(--text-2, #94a3b8);\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n.btn-close-drawer[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 63, 94, 0.2);\n  color: #fb7185;\n  border-color: rgba(244, 63, 94, 0.4);\n}\n.filter-drawer-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.filter-field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.filter-field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--violet-light, #a5b4fc) !important;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-drawer-body[_ngcontent-%COMP%]   input[pInputText][_ngcontent-%COMP%] {\n  width: 100% !important;\n  background: var(--bg-input, rgba(255, 255, 255, 0.04)) !important;\n  border: 1px solid var(--border, rgba(99, 102, 241, 0.25)) !important;\n  border-radius: 12px !important;\n  color: var(--text, #f3f4f6) !important;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif !important;\n  font-size: 0.88rem !important;\n  height: 44px !important;\n  padding: 0 14px !important;\n  box-sizing: border-box !important;\n}\n.filter-drawer-body[_ngcontent-%COMP%]   input[pInputText][_ngcontent-%COMP%]:focus {\n  border-color: var(--violet-light, #a5b4fc) !important;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2) !important;\n}\n.filter-drawer-body[_ngcontent-%COMP%]   p-datepicker[_ngcontent-%COMP%], \n.filter-drawer-body[_ngcontent-%COMP%]   p-calendar[_ngcontent-%COMP%] {\n  width: 100% !important;\n  display: block !important;\n}\n.filter-drawer-footer[_ngcontent-%COMP%] {\n  padding: 18px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  gap: 12px;\n  background: rgba(17, 18, 40, 0.95);\n}\n.preset-chip[_ngcontent-%COMP%] {\n  padding: 7px 13px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--text-2, #94a3b8);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.preset-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.18);\n  border-color: var(--violet, #6366f1);\n  color: var(--text, #ffffff);\n}\n.preset-chip.active[_ngcontent-%COMP%] {\n  background: var(--violet, #6366f1) !important;\n  color: #ffffff !important;\n  border-color: var(--violet, #6366f1) !important;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.hdr-date-chip[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 100px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2, #94a3b8);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.hdr-date-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.15);\n  border-color: var(--violet, #6366f1);\n  color: var(--text, #ffffff);\n}\n.hdr-date-chip.active[_ngcontent-%COMP%] {\n  background: var(--violet, #6366f1) !important;\n  color: #ffffff !important;\n  border-color: var(--violet, #6366f1) !important;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.35);\n}\nbody.light-theme[_ngcontent-%COMP%]   .hdr-date-chip[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .preset-chip[_ngcontent-%COMP%] {\n  background: #f1f5f9 !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .hdr-date-chip[_ngcontent-%COMP%]:hover, \nbody.light-theme[_ngcontent-%COMP%]   .preset-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.1) !important;\n  border-color: #6366f1 !important;\n  color: #4f46e5 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .hdr-date-chip.active[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .preset-chip.active[_ngcontent-%COMP%] {\n  background: #6366f1 !important;\n  color: #ffffff !important;\n  border-color: #6366f1 !important;\n}\n.btn-reset-filters[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: var(--text-2, #94a3b8);\n  font-weight: 700;\n  font-size: 0.86rem;\n  font-family: inherit;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.btn-reset-filters[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 63, 94, 0.15);\n  color: #fb7185;\n  border-color: rgba(244, 63, 94, 0.3);\n}\n.btn-apply-filters[_ngcontent-%COMP%] {\n  flex: 1.4;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  border: none;\n  color: #ffffff;\n  font-weight: 800;\n  font-size: 0.86rem;\n  font-family: inherit;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);\n  transition: all 0.2s;\n}\n.btn-apply-filters[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 22px rgba(99, 102, 241, 0.55);\n}\nbody.light-theme[_ngcontent-%COMP%]   .filter-drawer-panel[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-left-color: #cbd5e1 !important;\n  box-shadow: -15px 0 45px rgba(15, 23, 42, 0.15) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .filter-drawer-header[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-bottom-color: #e2e8f0 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .filter-drawer-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .filter-field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #4f46e5 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .filter-drawer-body[_ngcontent-%COMP%]   input[pInputText][_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #0f172a !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .filter-drawer-footer[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-top-color: #e2e8f0 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .btn-reset-filters[_ngcontent-%COMP%] {\n  background: #f1f5f9 !important;\n  border-color: #cbd5e1 !important;\n  color: #475569 !important;\n}\n.print-only-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media print {\n  body[_ngcontent-%COMP%] {\n    background: #ffffff !important;\n    color: #000000 !important;\n  }\n  .no-print[_ngcontent-%COMP%], \n   .finance-tabs-nav[_ngcontent-%COMP%], \n   .finance-filter-card[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .btn[_ngcontent-%COMP%], \n   .btn-action[_ngcontent-%COMP%], \n   .dialog-footer-actions[_ngcontent-%COMP%], \n   .access-denied-shell[_ngcontent-%COMP%], \n   p-dialog[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .crm-module-container[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    background: #ffffff !important;\n  }\n  .print-only-header[_ngcontent-%COMP%] {\n    display: flex !important;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 2px solid #0f172a;\n    padding-bottom: 12px;\n    margin-bottom: 20px;\n  }\n  .section-card[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n    border: 1px solid #cbd5e1 !important;\n    background: #ffffff !important;\n    color: #000000 !important;\n    padding: 12px !important;\n  }\n  .crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f1f5f9 !important;\n    color: #0f172a !important;\n    border-bottom: 2px solid #0f172a !important;\n    font-weight: 800 !important;\n  }\n  .crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    color: #0f172a !important;\n    border-bottom: 1px solid #cbd5e1 !important;\n    font-size: 0.85rem !important;\n  }\n  .metric-card[_ngcontent-%COMP%] {\n    background: #ffffff !important;\n    border: 1px solid #cbd5e1 !important;\n    box-shadow: none !important;\n  }\n  .metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    color: #0f172a !important;\n  }\n  .metric-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    color: #475569 !important;\n  }\n}\nbody.light-theme[_nghost-%COMP%]   .finance-filter-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .finance-filter-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .filter-title[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .filter-title[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .search-input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .search-input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-module-container[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-module-container[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\nbody.light-theme[_nghost-%COMP%]   .module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .finance-tabs-nav[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .finance-tabs-nav[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #475569 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #eef2ff !important;\n  color: #4f46e5 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .finance-tabs-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .finance-tabs-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669) !important;\n  color: #ffffff !important;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .section-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .section-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  color: #475569 !important;\n  border-bottom-color: #e2e8f0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-color: #f1f5f9 !important;\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\nbody.light-theme[_nghost-%COMP%]   .method-badge[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .method-badge[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-action[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\n  background: #eef2ff !important;\n  color: #4f46e5 !important;\n  border-color: #c7d2fe !important;\n}\n/*# sourceMappingURL=finance-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinanceDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-finance-dashboard", standalone: true, imports: [
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
    <!-- Access Denied for Client Role -->
    <div class="access-denied-shell" *ngIf="isClient()" style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:70vh; text-align:center; gap:16px; direction:rtl; padding:30px;">
      <i class="fa-solid fa-shield-halved" style="font-size:3.5rem; color:var(--rose-light, #f43f5e);"></i>
      <h2 style="color:var(--text, #fff); font-weight:900; font-size:1.4rem; margin:0;">\u063A\u064A\u0631 \u0645\u0633\u0645\u0648\u062D \u0628\u0641\u062A\u062D \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629</h2>
      <p style="color:var(--text-2, #94a3b8); font-size:0.9rem; max-width:450px; margin:0;">\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u062E\u0627\u0635\u0629 \u0628\u062D\u0633\u0627\u0628\u0627\u062A \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0641\u0642\u0637 \u0648\u0644\u0627 \u062A\u062A\u0627\u062D \u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621.</p>
      <button class="btn btn-primary" (click)="redirectToDashboard()" style="padding:10px 24px; border-radius:12px; font-weight:700; cursor:pointer; background:linear-gradient(135deg, #6366f1, #4f46e5); color:#fff; border:none;">
        <i class="fa-solid fa-arrow-right"></i> \u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645
      </button>
    </div>

    <div class="crm-module-container" *ngIf="!isClient()">
      <!-- Print Only Official Header -->
      <div class="print-only-header">
        <div style="text-align:right;">
          <h2 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin:0;">\u0634\u0631\u0643\u0629 \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648 \u0644\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u062D\u0644\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u0629</h2>
          <p style="font-size:0.9rem; color:#475569; margin:4px 0 0 0;">\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A \u0648\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0634\u0627\u0645\u0644\u0629 - {{ getActiveTabTitle() }}</p>
        </div>
        <div style="text-align:left; font-size:0.82rem; color:#475569;">
          <div>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0628\u0627\u0639\u0629: {{ currentDate | date:'yyyy-MM-dd HH:mm' }}</div>
          <div>\u0637\u064F\u0628\u0639 \u0628\u0648\u0627\u0633\u0637\u0629: {{ currentUser?.name || '\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645' }}</div>
          <div *ngIf="filterFromDate || filterToDate">\u0627\u0644\u0641\u062A\u0631\u0629: {{ filterFromDate ? formatDatePayload(filterFromDate) : '\u0627\u0644\u0628\u062F\u0627\u064A\u0629' }} \u0625\u0644\u0649 {{ filterToDate ? formatDatePayload(filterToDate) : '\u0627\u0644\u064A\u0648\u0645' }}</div>
        </div>
      </div>

      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-chart-line" style="color:var(--emerald-light);"></i> \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629</h2>
          <p class="subtitle">\u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A\u060C \u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u062A\u0648\u0632\u064A\u0639 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621\u060C \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0644</p>
        </div>

        <div class="header-actions no-print" style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <div class="quick-header-date-presets" style="display:flex; gap:6px; align-items:center;">
            <button type="button" class="hdr-date-chip" [class.active]="datePreset === 'today'" (click)="setDatePreset('today')">\u0647\u0630\u0627 \u0627\u0644\u064A\u0648\u0645</button>
            <button type="button" class="hdr-date-chip" [class.active]="datePreset === 'week'" (click)="setDatePreset('week')">\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639</button>
            <button type="button" class="hdr-date-chip" [class.active]="datePreset === 'month'" (click)="setDatePreset('month')">\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631</button>
            <button type="button" class="hdr-date-chip" [class.active]="datePreset === 'year'" (click)="setDatePreset('year')">\u0647\u0630\u0647 \u0627\u0644\u0633\u0646\u0629</button>
          </div>

          <button type="button" class="btn btn-action primary" (click)="showFilterSidebar = true">
            <i class="fa-solid fa-sliders"></i> \u0627\u0644\u0641\u0644\u062A\u0631\u0629 \u0648\u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0645\u062A\u0642\u062F\u0645
            <span *ngIf="hasActiveFilters()" style="background:#f43f5e; color:#fff; font-size:0.7rem; padding:2px 6px; border-radius:100px; margin-right:4px; font-weight:800;">
              {{ activeFilterCount }}
            </span>
          </button>
          <button type="button" class="btn btn-action primary" (click)="exportToExcel()" title="\u062A\u0635\u062F\u064A\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0645\u0639\u0631\u0648\u0636 \u062D\u0627\u0644\u064A\u0627\u064B \u0625\u0644\u0649 \u0645\u0644\u0641 Excel">
            <i class="fa-solid fa-file-excel" style="color:#10b981;"></i> \u062A\u0635\u062F\u064A\u0631 \u0625\u0643\u0633\u0644 Excel
          </button>
          <button class="btn btn-primary" (click)="openAddLedgerModal()">
            <i class="fa-solid fa-plus"></i> \u062A\u0633\u062C\u064A\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u0645\u0627\u0644\u064A\u0629
          </button>
        </div>
      </div>

      <!-- Navigation Sub-Tabs -->
      <div class="finance-tabs-nav glass-panel">
        <button [class.active]="activeTab === 'summary'" (click)="activeTab = 'summary'"><i class="fa-solid fa-chart-line"></i> \u0627\u0644\u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0627\u0644\u064A</button>
        <button [class.active]="activeTab === 'ledger'" (click)="activeTab = 'ledger'"><i class="fa-solid fa-book"></i> \u062F\u0641\u062A\u0631 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A</button>
        <button [class.active]="activeTab === 'custody'" (click)="activeTab = 'custody'"><i class="fa-solid fa-hand-holding-dollar"></i> \u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646</button>
        <button [class.active]="activeTab === 'partners'" (click)="activeTab = 'partners'"><i class="fa-solid fa-users-rectangle"></i> \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621</button>
        <button [class.active]="activeTab === 'payroll'" (click)="activeTab = 'payroll'"><i class="fa-solid fa-money-check-dollar"></i> \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629</button>
        <button [class.active]="activeTab === 'assets'" (click)="activeTab = 'assets'"><i class="fa-solid fa-vault"></i> \u0627\u0644\u0623\u0635\u0648\u0644 \u0648\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644</button>
      </div>



      <!-- TAB 1: SUMMARY -->
      <div class="tab-content" *ngIf="activeTab === 'summary'">
        <div class="metrics-grid">
          <!-- Card 1: Revenue -->
          <div class="kpi-card kpi-emerald">
            <div class="kpi-card-head">
              <span class="kpi-label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u062F\u062E\u0644</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-arrow-trend-up"></i></div>
            </div>
            <div class="kpi-value text-emerald">{{ summary.total_income | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-circle-check"></i> \u0627\u0644\u0645\u062D\u0635\u0644 \u0648\u0625\u062C\u0645\u0627\u0644\u064A \u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A</span>
            </div>
          </div>

          <!-- Card 2: Expenses -->
          <div class="kpi-card kpi-rose">
            <div class="kpi-card-head">
              <span class="kpi-label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-arrow-trend-down"></i></div>
            </div>
            <div class="kpi-value text-rose">{{ summary.total_expenses | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-receipt"></i> \u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0648\u0627\u0644\u0639\u0647\u062F \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629</span>
            </div>
          </div>

          <!-- Card 3: Net Cashflow -->
          <div class="kpi-card kpi-teal">
            <div class="kpi-card-head">
              <span class="kpi-label">\u0635\u0627\u0641\u064A \u0627\u0644\u0633\u064A\u0648\u0644\u0629 \u0627\u0644\u0646\u0642\u062F\u064A\u0629</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-scale-balanced"></i></div>
            </div>
            <div class="kpi-value text-teal">{{ summary.net_balance | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-wallet"></i> \u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0635\u0627\u0641\u064A (\u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A - \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A)</span>
            </div>
          </div>

          <!-- Card 4: Capital & Assets -->
          <div class="kpi-card kpi-violet">
            <div class="kpi-card-head">
              <span class="kpi-label">\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0648\u0627\u062D\u062A\u064A\u0627\u0637\u064A \u0627\u0644\u0623\u0635\u0648\u0644</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-vault"></i></div>
            </div>
            <div class="kpi-value text-violet">{{ summary.company_capital | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-boxes-packing"></i> \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062B\u0627\u0628\u062A\u0629: <strong>{{ summary.total_fixed_assets | number:'1.2-2' }} \u062C.\u0645</strong></span>
            </div>
          </div>

          <!-- Card 5: Outstanding Receivables (Owed to Company) -->
          <div class="kpi-card kpi-amber">
            <div class="kpi-card-head">
              <span class="kpi-label">\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629 \u0644\u0644\u0634\u0631\u0643\u0629 \u0628\u0627\u0644\u062E\u0627\u0631\u062C</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            </div>
            <div class="kpi-value text-amber">{{ summary.total_receivables | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-clock-rotate-left"></i> \u0622\u062C\u0644 \u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629 \u0639\u0646\u062F \u0627\u0644\u0639\u0645\u0644\u0627\u0621</span>
            </div>
          </div>

          <!-- Card 6: Obligations (Owed by Company) -->
          <div class="kpi-card kpi-coral">
            <div class="kpi-card-head">
              <span class="kpi-label">\u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0648\u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0643\u0629</span>
              <div class="kpi-icon-badge"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            </div>
            <div class="kpi-value text-coral">{{ summary.monthly_obligations | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            <div class="kpi-footer">
              <span class="kpi-subtext"><i class="fa-solid fa-user-group"></i> \u0645\u0631\u062A\u0628\u0627\u062A + \u0645\u0647\u0627\u0645 ({{ summary.total_task_earnings | number:'1.2-2' }} \u062C.\u0645) + \u0639\u0645\u0648\u0644\u0627\u062A ({{ summary.total_commissions | number:'1.2-2' }} \u062C.\u0645)</span>
            </div>
          </div>
        </div>

        <!-- Client Outstanding Balances Table -->
        <div class="section-card glass-panel margin-top">
          <h3 style="font-size:1rem; font-weight:700; color:var(--text); display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-file-invoice-dollar" style="color:var(--amber-light);"></i> \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629</h3>
          <div class="table-responsive" style="margin-top:14px;">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0627\u0644\u0639\u0645\u064A\u0644</th>
                  <th>\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0642\u0627\u062A</th>
                  <th>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631</th>
                  <th>\u0627\u0644\u0645\u062D\u0635\u0644 (\u0627\u0644\u0645\u062F\u0641\u0648\u0639)</th>
                  <th>\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u0633\u062A\u062D\u0642 (\u0627\u0644\u0645\u062A\u0628\u0642\u064A)</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of clientBalances">
                  <td style="font-weight:700; color:var(--text);">{{ item.client_name }}</td>
                  <td>{{ item.deals_count }} \u0635\u0641\u0642\u0627\u062A</td>
                  <td>{{ item.total_billed | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ item.total_paid | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ item.outstanding_balance | number:'1.2-2' }} \u062C.\u0645</td>
                </tr>
                <tr *ngIf="clientBalances.length === 0">
                  <td colspan="5">
                    <div class="empty-state">
                      <div class="empty-state-icon"><i class="fa-solid fa-receipt"></i></div>
                      <div class="empty-state-title">\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0635\u062F\u0629 \u0644\u0644\u0639\u0645\u0644\u0627\u0621</div>
                      <div class="empty-state-desc">\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0635\u062F\u0629 \u0646\u0634\u0637\u0629 \u0645\u0633\u062C\u0644\u0629 \u0644\u0644\u0639\u0645\u0644\u0627\u0621 \u0641\u064A \u0627\u0644\u062F\u0641\u062A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination Bar for Client Balances -->
          <div class="table-pagination-bar" *ngIf="clientBalances.length > 0">
            <div class="pagination-info-group">
              <div class="pagination-info">
                \u0639\u0631\u0636 {{ (clientBalancesPage - 1) * pageSize + 1 }} \u0625\u0644\u0649 {{ clientBalancesPage * pageSize > totalClientBalancesRecords ? totalClientBalancesRecords : clientBalancesPage * pageSize }} \u0645\u0646 \u0623\u0635\u0644 {{ totalClientBalancesRecords }} \u0631\u0635\u064A\u062F
              </div>
              <div class="pagination-per-page">
                <span>\u0639\u0631\u0636</span>
                <select [(ngModel)]="pageSize" (change)="onClientBalancesPerPageChange()" class="pg-select">
                  <option [ngValue]="5">5</option>
                  <option [ngValue]="10">10</option>
                  <option [ngValue]="25">25</option>
                  <option [ngValue]="50">50</option>
                </select>
                <span>\u0635\u0641\u0648\u0641</span>
              </div>
            </div>
            <div class="pagination-controls">
              <button class="pg-btn" [disabled]="clientBalancesPage === 1" (click)="changeClientBalancesPage(clientBalancesPage - 1)">
                <i class="fa-solid fa-chevron-right"></i> \u0627\u0644\u0633\u0627\u0628\u0642
              </button>
              <button
                *ngFor="let p of clientBalancesPageNumbers"
                class="pg-num-btn"
                [class.active]="p === clientBalancesPage"
                (click)="changeClientBalancesPage(p)"
              >
                {{ p }}
              </button>
              <button class="pg-btn" [disabled]="clientBalancesPage * pageSize >= totalClientBalancesRecords" (click)="changeClientBalancesPage(clientBalancesPage + 1)">
                \u0627\u0644\u062A\u0627\u0644\u064A <i class="fa-solid fa-chevron-left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 2: LEDGER (\u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0648\u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A) -->
      <div class="tab-content" *ngIf="activeTab === 'ledger'">
        <div class="table-card glass-panel">
          <div class="table-responsive">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0627\u0644\u062A\u0627\u0631\u064A\u062E</th>
                  <th>\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629</th>
                  <th>\u0627\u0644\u062A\u0635\u0646\u064A\u0641</th>
                  <th>\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639</th>
                  <th>\u0627\u0644\u0645\u0628\u0644\u063A (\u062C.\u0645)</th>
                  <th>\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0628\u064A\u0627\u0646</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let entry of ledgerEntries">
                  <td style="color:var(--text-2);">{{ entry.date }}</td>
                  <td><span class="badge" [ngClass]="entry.type === 'income' ? 'badge-e' : 'badge-r'">{{ entry.type === 'income' ? '\u0625\u064A\u0631\u0627\u062F' : '\u0645\u0635\u0631\u0648\u0641' }}</span></td>
                  <td>{{ entry.category?.name_ar || entry.category?.name_en || '\u0639\u0627\u0645' }}</td>
                  <td><span class="method-badge">{{ getPaymentMethodLabel(entry.payment_method) }}</span></td>
                  <td style="font-weight:700;" [ngClass]="entry.type === 'income' ? 'text-success' : 'text-danger'">
                    {{ entry.type === 'income' ? '+' : '-' }}{{ entry.amount | number:'1.2-2' }} \u062C.\u0645
                  </td>
                  <td style="color:var(--text-2);">{{ entry.description }}</td>
                </tr>
                <tr *ngIf="ledgerEntries.length === 0">
                  <td colspan="6">
                    <div class="empty-state">
                      <div class="empty-state-icon"><i class="fa-solid fa-folder-open"></i></div>
                      <div class="empty-state-title">\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0648\u062F \u0645\u0627\u0644\u064A\u0629</div>
                      <div class="empty-state-desc">\u0633\u062C\u0644 \u0623\u0648\u0644 \u062D\u0631\u0643\u0629 \u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0623\u0648 \u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination Bar for Ledger -->
          <div class="table-pagination-bar" *ngIf="ledgerEntries.length > 0">
            <div class="pagination-info-group">
              <div class="pagination-info">
                \u0639\u0631\u0636 {{ (ledgerPage - 1) * pageSize + 1 }} \u0625\u0644\u0649 {{ ledgerPage * pageSize > totalLedgerRecords ? totalLedgerRecords : ledgerPage * pageSize }} \u0645\u0646 \u0623\u0635\u0644 {{ totalLedgerRecords }} \u0642\u064A\u062F
              </div>
              <div class="pagination-per-page">
                <span>\u0639\u0631\u0636</span>
                <select [(ngModel)]="pageSize" (change)="onLedgerPerPageChange()" class="pg-select">
                  <option [ngValue]="5">5</option>
                  <option [ngValue]="10">10</option>
                  <option [ngValue]="25">25</option>
                  <option [ngValue]="50">50</option>
                </select>
                <span>\u0635\u0641\u0648\u0641</span>
              </div>
            </div>
            <div class="pagination-controls">
              <button class="pg-btn" [disabled]="ledgerPage === 1" (click)="changeLedgerPage(ledgerPage - 1)">
                <i class="fa-solid fa-chevron-right"></i> \u0627\u0644\u0633\u0627\u0628\u0642
              </button>
              <button
                *ngFor="let p of ledgerPageNumbers"
                class="pg-num-btn"
                [class.active]="p === ledgerPage"
                (click)="changeLedgerPage(p)"
              >
                {{ p }}
              </button>
              <button class="pg-btn" [disabled]="ledgerPage * pageSize >= totalLedgerRecords" (click)="changeLedgerPage(ledgerPage + 1)">
                \u0627\u0644\u062A\u0627\u0644\u064A <i class="fa-solid fa-chevron-left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 3: CUSTODY (\u0628\u0646\u062F \u0627\u0644\u0639\u0647\u062F\u0629) -->
      <div class="tab-content" *ngIf="activeTab === 'custody'">
        <div class="tab-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:20px;">
          <div>
            <h3 style="font-size:1.05rem; color:var(--text); font-weight:800; margin:0; display:flex; align-items:center; gap:8px;">
              <i class="fa-solid fa-hand-holding-dollar" style="color:var(--teal-light);"></i> \u062D\u0633\u0627\u0628\u0627\u062A \u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646
            </h3>
            <p style="font-size:0.8rem; color:var(--text-2); margin-top:4px; margin-bottom:0;">
              \u0645\u062A\u0627\u0628\u0639\u0629 \u0648\u062A\u0633\u0648\u064A\u0629 \u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0648\u0627\u0644\u0645\u0633\u0644\u0645\u0629 \u0644\u0645\u062F\u0631\u0627\u0621 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646
            </p>
          </div>
          <button type="button" class="btn btn-action primary" (click)="openIssueCustodyModal()" style="padding:9px 18px; font-weight:700;">
            <i class="fa-solid fa-handshake-angle"></i> \u0635\u0631\u0641 \u0639\u0647\u062F\u0629 \u062C\u062F\u064A\u062F\u0629
          </button>
        </div>
        <div class="table-card glass-panel">
          <div class="table-responsive">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0627\u0644\u0645\u0648\u0638\u0641</th>
                  <th>\u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0629</th>
                  <th>\u0627\u0644\u0645\u0633\u062A\u0631\u062F</th>
                  <th>\u0627\u0644\u0645\u0646\u0635\u0631\u0641 \u0627\u0644\u0641\u0639\u0644\u064A</th>
                  <th>\u0627\u0644\u062D\u0627\u0644\u0629</th>
                  <th>\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let custody of custodyAccounts">
                  <td style="font-weight:700; color:var(--text);">{{ custody.employee?.name }}</td>
                  <td>{{ custody.issued_amount | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--emerald-light);">{{ custody.returned_amount | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ (custody.issued_amount - custody.returned_amount) | number:'1.2-2' }} \u062C.\u0645</td>
                  <td><span class="badge" [ngClass]="getCustodyStatusClass(custody.status)">{{ getCustodyStatusLabel(custody.status) }}</span></td>
                  <td>
                    <button *ngIf="custody.status === 'open'" class="action-icon-btn btn-emerald" (click)="openReturnCustodyModal(custody)" data-tooltip="\u062A\u0633\u0648\u064A\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0627\u0628 \u0627\u0644\u0639\u0647\u062F\u0629" title="\u062A\u0633\u0648\u064A\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0627\u0628 \u0627\u0644\u0639\u0647\u062F\u0629">
                      <i class="fa-solid fa-file-invoice-dollar"></i>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="custodyAccounts.length === 0">
                  <td colspan="6">
                    <div class="empty-state" style="padding:28px 16px; text-align:center;">
                      <div class="empty-state-icon" style="font-size:1.6rem; color:var(--violet-light); margin-bottom:8px;"><i class="fa-solid fa-hand-holding-dollar"></i></div>
                      <div class="empty-state-title" style="font-size:0.92rem; font-weight:700; color:var(--text);">\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0647\u062F \u0645\u0627\u0644\u064A\u0629 \u0645\u0635\u0631\u0648\u0641\u0629</div>
                      <div class="empty-state-desc" style="font-size:0.8rem; color:var(--text-2); margin-top:4px;">\u0644\u0645 \u064A\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0623\u064A\u0629 \u0639\u0647\u062F \u0645\u0627\u0644\u064A\u0629 \u0645\u0635\u0631\u0648\u0641\u0629 \u0644\u0645\u062F\u0631\u0627\u0621 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0623\u0648 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u062D\u0627\u0644\u064A\u0627\u064B. \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 "\u0635\u0631\u0641 \u0639\u0647\u062F\u0629 \u062C\u062F\u064A\u062F\u0629" \u0644\u0644\u0628\u062F\u0621.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 4: PARTNER SPLITS -->
      <div class="tab-content" *ngIf="activeTab === 'partners'">
        <div class="section-card glass-panel">
          <h3 style="font-size:1rem; color:var(--text); font-weight:700;"><i class="fa-solid fa-users-rectangle" style="color:var(--amber-light);"></i> \u062A\u0642\u0631\u064A\u0631 \u062A\u0648\u0632\u064A\u0639 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0641\u064A \u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0648\u0627\u0644\u0623\u0642\u0633\u0627\u0645</h3>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u0631\u0643\u0632</th>
                  <th>\u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u062E\u0627\u0631\u062C\u064A</th>
                  <th>\u0646\u0633\u0628\u0629 \u0627\u0644\u0634\u0631\u064A\u0643</th>
                  <th>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A</th>
                  <th>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A</th>
                  <th>\u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D</th>
                  <th>\u062D\u0635\u0629 \u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u0635\u0627\u0641\u064A\u0629</th>
                  <th>\u062D\u0635\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0635\u0627\u0641\u064A\u0629</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let ps of partnerSplits">
                  <td style="font-weight:700; color:var(--text);">{{ ps.department_name }}</td>
                  <td style="color:var(--text-2);">{{ ps.partner_name }}</td>
                  <td><span class="badge badge-a">{{ ps.partner_percentage }}%</span></td>
                  <td style="color:var(--emerald-light);">{{ ps.total_income | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--rose-light);">{{ ps.total_expenses | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="font-weight:700; color:var(--text);">{{ ps.net_profit | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--amber-light); font-weight:700;">{{ ps.partner_share | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ ps.company_share | number:'1.2-2' }} \u062C.\u0645</td>
                </tr>
                <tr *ngIf="partnerSplits.length === 0">
                  <td colspan="8">
                    <div class="empty-state" style="padding:28px 16px; text-align:center;">
                      <div class="empty-state-icon" style="font-size:1.6rem; color:var(--amber-light); margin-bottom:8px;"><i class="fa-solid fa-users-slash"></i></div>
                      <div class="empty-state-title" style="font-size:0.92rem; font-weight:700; color:var(--text);">\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0631\u0628\u0627\u062D \u0634\u0631\u0643\u0627\u0621</div>
                      <div class="empty-state-desc" style="font-size:0.8rem; color:var(--text-2); margin-top:4px;">\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0623\u0648 \u0634\u0631\u0643\u0627\u0621 \u062E\u0627\u0631\u062C\u064A\u064A\u0646 \u0645\u0631\u062A\u0628\u0637\u064A\u0646 \u0628\u0623\u0642\u0633\u0627\u0645 \u0645\u0633\u062C\u0644\u0629 \u0641\u064A \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062D\u0627\u0644\u064A.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 5: PAYROLL DUE & EMPLOYEE STATEMENT -->
      <div class="tab-content" *ngIf="activeTab === 'payroll'">
        <div class="section-card glass-panel">
          <h3 style="font-size:1rem; color:var(--text); font-weight:700;"><i class="fa-solid fa-money-check-dollar" style="color:var(--teal-light);"></i> \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0648\u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0645\u0648\u0638\u0641\u064A\u0646</h3>
          <p style="font-size:0.78rem; color:var(--text-2); margin-top:4px;">\u0627\u0644\u0645\u0639\u0627\u062F\u0644\u0629: \u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0627\u0644\u0635\u0627\u0641\u064A = \u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A + \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645 + \u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A - \u0627\u0644\u0633\u0644\u0641 - \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A + \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A</p>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0627\u0644\u0645\u0648\u0638\u0641</th>
                  <th>\u0627\u0644\u0642\u0633\u0645</th>
                  <th>\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639</th>
                  <th>\u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A</th>
                  <th>\u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645</th>
                  <th>\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A</th>
                  <th>\u0627\u0644\u0633\u0644\u0641 (-)</th>
                  <th>\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A (-)</th>
                  <th>\u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A (+)</th>
                  <th>\u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642</th>
                  <th class="no-print">\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0648\u0627\u0644\u0643\u0634\u0641</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of payrollSummary">
                  <td style="font-weight:700; color:var(--text);">{{ p.employee_name }}</td>
                  <td style="color:var(--text-2);">{{ p.department_name }}</td>
                  <td><span class="badge badge-v">{{ getPaymentTypeLabel(p.payment_type) }}</span></td>
                  <td>{{ p.base_salary | number:'1.2-2' }}</td>
                  <td>{{ p.task_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light);">{{ p.commission_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.advances | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.deductions | number:'1.2-2' }}</td>
                  <td style="color:var(--emerald-light);">+{{ p.bonuses | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light); font-weight:800; font-size:0.95rem;">{{ p.net_payable | number:'1.2-2' }} \u062C.\u0645</td>
                  <td class="no-print">
                    <button type="button" class="btn-action primary" (click)="selectEmployeeForStatement(p)" title="\u0639\u0631\u0636 \u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0648\u0638\u0641">
                      <i class="fa-solid fa-file-invoice-dollar"></i> \u0643\u0634\u0641 \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u062D\u0633\u0627\u0628
                    </button>
                  </td>
                </tr>
                <tr *ngIf="payrollSummary.length === 0">
                  <td colspan="11">
                    <div class="empty-state" style="padding:28px 16px; text-align:center;">
                      <div class="empty-state-icon" style="font-size:1.6rem; color:var(--teal-light); margin-bottom:8px;"><i class="fa-solid fa-money-check-dollar"></i></div>
                      <div class="empty-state-title" style="font-size:0.92rem; font-weight:700; color:var(--text);">\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0631\u062A\u0628\u0627\u062A \u0623\u0648 \u0627\u0633\u062A\u062D\u0642\u0627\u0642\u0627\u062A</div>
                      <div class="empty-state-desc" style="font-size:0.8rem; color:var(--text-2); margin-top:4px;">\u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u062C\u0644\u0627\u062A \u0645\u0631\u062A\u0628\u0627\u062A \u0623\u0648 \u0627\u0633\u062A\u062D\u0642\u0627\u0642\u0627\u062A \u0645\u0646\u0641\u0630\u0629 \u0641\u064A \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0645\u0646\u064A \u0648\u0627\u0644\u0641\u0644\u062A\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


      </div>

      <!-- TAB 6: FIXED ASSETS & CAPITAL -->
      <div class="tab-content" *ngIf="activeTab === 'assets'">
        <div class="section-card glass-panel">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
            <div>
              <h3 style="font-size:1rem; color:var(--text); font-weight:700; margin:0;">
                <i class="fa-solid fa-vault" style="color:var(--violet-light); margin-left:6px;"></i> \u0633\u062C\u0644 \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 \u0648\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644
              </h3>
              <p style="font-size:0.78rem; color:var(--text-2); margin-top:4px; margin-bottom:0;">
                \u0633\u062C\u0644 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0648\u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u0645\u0645\u0644\u0648\u0643\u0629 \u0644\u0644\u0634\u0631\u0643\u0629 \u0648\u062A\u0642\u064A\u064A\u0645\u0647\u0627 \u0627\u0644\u0645\u0627\u0644\u064A.
              </p>
            </div>
            <button type="button" class="btn-action primary" (click)="openAddAssetModal()">
              <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0623\u0635\u0644 \u062B\u0627\u0628\u062A \u062C\u062F\u064A\u062F
            </button>
          </div>

          <div class="table-responsive">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0627\u0633\u0645 \u0627\u0644\u0623\u0635\u0644 \u0627\u0644\u062B\u0627\u0628\u062A</th>
                  <th>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F</th>
                  <th>\u0642\u064A\u0645\u0629 \u0627\u0644\u0623\u0635\u0644 (\u062C.\u0645)</th>
                  <th>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0631\u0627\u0621 / \u0627\u0644\u0627\u0633\u062A\u062D\u0648\u0627\u0630</th>
                  <th>\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let a of fixedAssets">
                  <td style="font-weight:700; color:var(--text);">{{ a.name }}</td>
                  <td style="color:var(--text-2);">{{ a.department?.name || '\u0639\u0627\u0645 / \u0627\u0644\u0634\u0631\u0643\u0629' }}</td>
                  <td style="color:var(--emerald-light); font-weight:800; font-size:0.95rem;">{{ a.value | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--text-2);">{{ a.purchase_date || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</td>
                  <td style="color:var(--text-2); font-size:0.82rem;">{{ a.notes || '-' }}</td>
                </tr>
                <tr *ngIf="fixedAssets.length === 0">
                  <td colspan="5" style="text-align:center; padding:24px; color:var(--text-2);">
                    \u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0635\u0648\u0644 \u062B\u0627\u0628\u062A\u0629 \u0645\u0633\u062C\u0644\u0629 \u062D\u0627\u0644\u064A\u0627\u064B. \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 "\u0625\u0636\u0627\u0641\u0629 \u0623\u0635\u0644 \u062B\u0627\u0628\u062A \u062C\u062F\u064A\u062F" \u0644\u0625\u0636\u0627\u0641\u0629 \u0623\u0635\u0644.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add Ledger Entry -->
      <p-dialog [(visible)]="showLedgerModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u062A\u0633\u062C\u064A\u0644 \u0642\u0633\u0637 / \u062D\u0631\u0643\u0629 \u0645\u0627\u0644\u064A\u0629 \u062C\u062F\u064A\u062F\u0629" [style]="{ width: '92vw', maxWidth: '640px' }">
        <form [formGroup]="ledgerForm" (ngSubmit)="saveLedgerEntry()">
          <div class="form-grid" style="padding: 10px 0;">
            <div class="form-group">
              <label>\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629 <span class="required">*</span></label>
              <app-prime-picker-select
                formControlName="type"
                [items]="ledgerTypes"
                optionLabel="label"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u062A\u0635\u0646\u064A\u0641 <span class="required">*</span></label>
              <app-prime-picker-select
                formControlName="category_id"
                [items]="categories"
                optionLabel="name_ar"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641..."
                addNewLabel="+ \u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F"
                (addNew)="triggerAddCategory()"
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0645\u0628\u0644\u063A (\u062C.\u0645) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" placeholder="500" />
            </div>
            <div class="form-group">
              <label>\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639 <span class="required">*</span></label>
              <app-prime-picker-select
                formControlName="payment_method"
                [items]="paymentMethodsList"
                optionLabel="label"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0631\u062A\u0628\u0637</label>
              <app-prime-picker-select
                formControlName="department_id"
                [items]="departments"
                optionLabel="name"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u064A\u062F</label>
              <p-datepicker formControlName="date" dateFormat="yy-mm-dd" [showIcon]="true" [iconDisplay]="'input'" [appendTo]="'body'" placeholder="\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u064A\u062F..." styleClass="w-full"></p-datepicker>
            </div>
            <div class="form-group full-width">
              <label>\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A</label>
              <textarea pTextarea formControlName="description" rows="2" placeholder="\u0648\u0635\u0641 \u0627\u0644\u062D\u0631\u0643\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629..."></textarea>
            </div>
          </div>

          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showLedgerModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="ledgerForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629...' : '\u062A\u0623\u0643\u064A\u062F \u0648\u062D\u0641\u0638 \u0627\u0644\u0642\u064A\u062F' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Quick Add Category Modal -->
      <p-dialog [(visible)]="showCatModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0625\u0636\u0627\u0641\u0629 \u0641\u0626\u0629 \u0645\u0627\u0644\u064A\u0629 \u062C\u062F\u064A\u062F\u0629" [style]="{ width: '90vw', maxWidth: '420px' }">
        <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
          <div class="form-group">
            <label>\u0627\u0633\u0645 \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0627\u0644\u0640\u064A\u0629 <span class="required">*</span></label>
            <input type="text" pInputText [(ngModel)]="catNameInput" placeholder="\u0645\u062B\u0627\u0644: \u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0645\u0645\u0648\u0644\u0629 \u0623\u0648 \u0623\u062F\u0648\u0627\u062A \u0645\u0643\u062A\u0628\u064A\u0629..." />
          </div>
        </div>
        <div class="dialog-footer-actions">
          <button type="button" class="btn-dialog-cancel" (click)="showCatModal = false">\u0625\u0644\u063A\u0627\u0621</button>
          <button type="button" class="btn-dialog-submit" [disabled]="!catNameInput || !catNameInput.trim()" (click)="saveCategory()">\u062D\u0641\u0638 \u0627\u0644\u0641\u0626\u0629</button>
        </div>
      </p-dialog>

      <!-- PrimeNG Dialog: Issue Custody Modal -->
      <p-dialog [(visible)]="showCustodyModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0635\u0631\u0641 \u0639\u0647\u062F\u0629 \u0645\u0627\u0644\u064A\u0629 \u0644\u0645\u0648\u0638\u0641" [style]="{ width: '90vw', maxWidth: '460px' }">
        <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
          <div class="form-group">
            <label>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641 <span class="required">*</span></label>
            <app-prime-picker-select
              [(ngModel)]="custodyDeptId"
              (ngModelChange)="onCustodyDeptChange()"
              [items]="departments"
              optionLabel="name"
              optionValue="id"
              placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 \u0623\u0648\u0644\u0627\u064B..."
            ></app-prime-picker-select>
          </div>
          <div class="form-group" *ngIf="custodyDeptId">
            <label>\u0627\u0644\u0645\u0648\u0638\u0641 / \u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0644\u0645 <span class="required">*</span></label>
            <app-prime-picker-select
              [(ngModel)]="custodyEmpId"
              [items]="filteredCustodyEmployees"
              optionLabel="displayName"
              optionValue="id"
              placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0638\u0641 \u0623\u0648 \u0627\u0644\u0645\u0634\u0631\u0641..."
            ></app-prime-picker-select>
          </div>
          <div class="form-group" *ngIf="custodyEmpId">
            <label>\u0645\u0628\u0644\u063A \u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0633\u0644\u0645\u0629 (\u062C.\u0645) <span class="required">*</span></label>
            <input type="number" pInputText [(ngModel)]="custodyAmount" placeholder="0" />
          </div>
          <div class="form-group" *ngIf="custodyEmpId">
            <label>\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0648\u0628\u064A\u0627\u0646 \u0627\u0644\u0639\u0647\u062F\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)</label>
            <input type="text" pInputText [(ngModel)]="custodyNotes" placeholder="\u0623\u062F\u062E\u0644 \u0623\u064A\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0648 \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0644\u0644\u0639\u0647\u062F\u0629..." />
          </div>
        </div>
        <div class="dialog-footer-actions">
          <button type="button" class="btn-dialog-cancel" (click)="showCustodyModal = false">\u0625\u0644\u063A\u0627\u0621</button>
          <button type="button" class="btn-dialog-submit" [disabled]="!custodyEmpId || custodyAmount <= 0" (click)="saveIssueCustody()">\u0635\u0631\u0641 \u0627\u0644\u0639\u0647\u062F\u0629</button>
        </div>
      </p-dialog>

      <!-- PrimeNG Dialog: Return Custody Modal -->
      <p-dialog [(visible)]="showReturnCustodyModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u062A\u0633\u0648\u064A\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u0639\u0647\u062F\u0629 \u0645\u0627\u0644\u064A\u0629" [style]="{ width: '92vw', maxWidth: '500px' }">
        <div style="padding:10px 0; display:flex; flex-direction:column; gap:16px;" *ngIf="selectedCustody">
          
          <div style="background:rgba(99, 102, 241, 0.08); border:1px solid var(--border); border-radius:12px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <span style="font-size:0.88rem; color:var(--text-2);">\u0627\u0644\u0645\u0648\u0638\u0641: <strong style="color:var(--text);">{{ selectedCustody.employee?.name }}</strong></span>
            <span style="font-size:0.88rem; color:var(--text-2);">\u0645\u0628\u0644\u063A \u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0623\u0635\u0644\u064A: <strong style="color:var(--violet-light);">{{ selectedCustody.issued_amount | number:'1.2-2' }} \u062C.\u0645</strong></span>
          </div>

          <div class="form-group">
            <label>\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062A\u0628\u0642\u064A / \u0627\u0644\u0645\u0631\u062C\u0639 \u0644\u0644\u062E\u0632\u064A\u0646\u0629 (\u062C.\u0645) <span class="required">*</span></label>
            <input type="number" pInputText [(ngModel)]="returnedAmount" placeholder="0" />
            <small style="color:var(--rose-light); font-weight:600; margin-top:4px; display:block;" *ngIf="selectedCustody.issued_amount - returnedAmount > 0">
              <i class="fa-solid fa-calculator"></i> \u0633\u064A\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0645\u0628\u0644\u063A {{ (selectedCustody.issued_amount - returnedAmount) | number:'1.2-2' }} \u062C.\u0645 \u0643\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0639\u0647\u062F\u0629 \u0641\u0639\u0644\u064A\u0629
            </small>
          </div>

          <div class="form-group">
            <label>\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0627\u0644\u0641\u0639\u0644\u064A</label>
            <p-dropdown
              [(ngModel)]="returnCategoryId"
              [options]="categories"
              optionLabel="name_ar"
              optionValue="id"
              placeholder="\u0627\u062E\u062A\u0631 \u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)..."
              [appendTo]="'body'"
              [style]="{ width: '100%' }"
            ></p-dropdown>
          </div>

          <div class="form-group">
            <label>\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0648\u0628\u064A\u0627\u0646 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A (\u0641\u064A \u0623\u064A \u0627\u0644\u0628\u0646\u0648\u062F \u062A\u0645 \u0635\u0631\u0641 \u0627\u0644\u0639\u0647\u062F\u0629) <span class="required">*</span></label>
            <textarea
              pTextarea
              rows="3"
              [(ngModel)]="returnNotes"
              placeholder="\u0645\u062B\u0627\u0644: \u062A\u0645 \u0634\u0631\u0627\u0621 \u0623\u062F\u0648\u0627\u062A \u0645\u0643\u062A\u0628\u064A\u0629 \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u062A\u0635\u0648\u064A\u0631 \u0648\u062A\u0623\u0645\u064A\u0646 \u0627\u0646\u062A\u0642\u0627\u0644\u0627\u062A..."
              style="width:100%; border-radius:10px; background:var(--bg-input); color:var(--text); border:1px solid var(--border); padding:10px; font-family:inherit; font-size:0.88rem;"
            ></textarea>
          </div>

        </div>
        <div class="dialog-footer-actions">
          <button type="button" class="btn-dialog-cancel" (click)="showReturnCustodyModal = false">\u0625\u0644\u063A\u0627\u0621</button>
          <button type="button" class="btn-dialog-submit" (click)="saveReturnCustody()">\u062A\u0623\u0643\u064A\u062F \u0648\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u062A\u0633\u0648\u064A\u0629</button>
        </div>
      </p-dialog>

      <!-- PrimeNG Dialog: Employee Statement & Performance Modal -->
      <p-dialog
        [(visible)]="showStatementModal"
        [modal]="true"
        [dismissableMask]="true"
        [appendTo]="'body'"
        [header]="'\u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0648\u062A\u0642\u0631\u064A\u0631 \u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u0648\u0638\u0641: ' + (selectedEmployeeStatement?.employee_name || '')"
        [style]="{ width: '92vw', maxWidth: '960px' }"
      >
        <div *ngIf="selectedEmployeeStatement" style="padding: 8px 0;">
          <!-- Employee Meta Subtitle -->
          <div style="background:rgba(99, 102, 241, 0.06); border:1px solid var(--border); border-radius:12px; padding:12px 16px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <h4 style="font-size:0.95rem; font-weight:800; color:var(--text); margin:0;">
                {{ selectedEmployeeStatement.employee_name }}
              </h4>
              <span style="font-size:0.8rem; color:var(--text-2);">
                \u0627\u0644\u0642\u0633\u0645: <strong>{{ selectedEmployeeStatement.department_name }}</strong> | \u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639: <span class="badge badge-v">{{ getPaymentTypeLabel(selectedEmployeeStatement.payment_type) }}</span>
              </span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-2);" *ngIf="filterFromDate || filterToDate">
              \u0627\u0644\u0641\u062A\u0631\u0629: \u0645\u0646 {{ filterFromDate ? formatDatePayload(filterFromDate) : '\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0633\u062C\u0644' }} \u0625\u0644\u0649 {{ filterToDate ? formatDatePayload(filterToDate) : '\u0627\u0644\u064A\u0648\u0645' }}
            </div>
          </div>

          <!-- KPI Cards for Employee Statement -->
          <div class="metrics-grid" style="grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); margin-bottom:24px;">
            <div class="kpi-card kpi-violet" style="min-height:120px; padding:16px;">
              <span class="kpi-label">\u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A</span>
              <div class="kpi-value text-violet">{{ selectedEmployeeStatement.base_salary | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            </div>

            <div class="kpi-card kpi-teal" style="min-height:120px; padding:16px;">
              <span class="kpi-label">\u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0625\u0646\u062A\u0627\u062C</span>
              <div class="kpi-value text-teal">+{{ selectedEmployeeStatement.task_earnings | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
              <small style="color:var(--text-2);">({{ selectedEmployeeStatement.tasks_count }} \u0645\u0647\u0645\u0629 \u0645\u0643\u062A\u0645\u0644\u0629)</small>
            </div>

            <div class="kpi-card kpi-emerald" style="min-height:120px; padding:16px;">
              <span class="kpi-label">\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A</span>
              <div class="kpi-value text-emerald">+{{ selectedEmployeeStatement.commission_earnings | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            </div>

            <div class="kpi-card kpi-rose" style="min-height:120px; padding:16px;">
              <span class="kpi-label">\u0627\u0644\u0633\u0644\u0641 \u0648\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A</span>
              <div class="kpi-value text-rose">-{{ (selectedEmployeeStatement.advances + selectedEmployeeStatement.deductions) | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            </div>

            <div class="kpi-card kpi-amber" style="min-height:120px; padding:16px;">
              <span class="kpi-label">\u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0644\u0644\u0645\u0648\u0638\u0641</span>
              <div class="kpi-value text-amber" style="font-size:1.6rem; font-weight:900;">{{ selectedEmployeeStatement.net_payable | number:'1.2-2' }} <small>\u062C.\u0645</small></div>
            </div>
          </div>

          <!-- Work Log Table -->
          <h4 style="font-size:0.95rem; font-weight:800; color:var(--text); margin-bottom:14px; display:flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-list-check" style="color:var(--violet-light);"></i> \u0633\u062C\u0644 \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0646\u062C\u0632\u0629 \u062E\u0644\u0627\u0644 \u0627\u0644\u0641\u062A\u0631\u0629 ({{ selectedEmployeeStatement.tasks_count }} \u0645\u0647\u0645\u0629)
          </h4>

          <div class="table-responsive" style="max-height: 340px; overflow-y: auto;">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0627\u0633\u0645 \u0627\u0644\u0645\u0647\u0645\u0629 / \u0627\u0644\u0639\u0645\u0644</th>
                  <th>\u0627\u0644\u0639\u0642\u062F / \u0627\u0644\u0635\u0641\u0642\u0629 \u0627\u0644\u062A\u0627\u0628\u0639\u0629</th>
                  <th>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u062C\u0627\u0632</th>
                  <th>\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0645\u0629</th>
                  <th>\u0627\u0644\u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0645\u0627\u0644\u064A \u0644\u0644\u0645\u0647\u0645\u0629 (\u062C.\u0645)</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let t of selectedEmployeeStatement.tasks_list">
                  <td style="font-weight:700; color:var(--text);">{{ t.title }}</td>
                  <td style="color:var(--text-2);">{{ t.deal_title || '\u0639\u0627\u0645' }}</td>
                  <td style="color:var(--text-2); font-size:0.82rem;">{{ t.date || '\u062A\u0645 \u062D\u062F\u064A\u062B\u0627\u064B' }}</td>
                  <td><span class="badge badge-v" style="background:rgba(16,185,129,0.15); color:var(--emerald-light);">\u0645\u0643\u062A\u0645\u0644 \u0648\u0645\u0633\u062A\u0644\u0645</span></td>
                  <td style="color:var(--teal-light); font-weight:700;">{{ t.price | number:'1.2-2' }} \u062C.\u0645</td>
                </tr>
                <tr *ngIf="!selectedEmployeeStatement.tasks_list || selectedEmployeeStatement.tasks_list.length === 0">
                  <td colspan="5">
                    <div class="empty-state" style="padding:24px 16px; text-align:center;">
                      <div class="empty-state-icon" style="font-size:1.5rem; color:var(--violet-light); margin-bottom:6px;"><i class="fa-solid fa-clipboard-check"></i></div>
                      <div class="empty-state-title" style="font-size:0.9rem; font-weight:700; color:var(--text);">\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u0646\u062C\u0632\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0638\u0641</div>
                      <div class="empty-state-desc" style="font-size:0.78rem; color:var(--text-2); margin-top:4px;">\u0644\u0645 \u064A\u0642\u064F\u0645 \u0627\u0644\u0645\u0648\u0638\u0641 \u0628\u0625\u0643\u0645\u0627\u0644 \u0645\u0647\u0627\u0645 \u0644\u0647\u0627 \u0645\u0642\u0627\u0628\u0644 \u0645\u0627\u0644\u064A \u0641\u064A \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0645\u0646\u064A \u0627\u0644\u0645\u062D\u062F\u062F.</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="dialog-footer-actions" style="margin-top:20px;">
          <button type="button" class="btn-dialog-cancel" (click)="showStatementModal = false" style="display:flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-arrow-right"></i> \u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A
          </button>
        </div>
      </p-dialog>
      <p-dialog [(visible)]="showAssetModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0625\u0636\u0627\u0641\u0629 \u0623\u0635\u0644 \u062B\u0627\u0628\u062A \u062C\u062F\u064A\u062F" [style]="{ width: '92vw', maxWidth: '520px' }">
        <form [formGroup]="assetForm" (ngSubmit)="saveAsset()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>\u0627\u0633\u0645 \u0627\u0644\u0623\u0635\u0644 \u0627\u0644\u062B\u0627\u0628\u062A <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="\u0645\u062B\u0627\u0644: \u0623\u062C\u0647\u0632\u0629 \u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0642\u0633\u0645 \u0627\u0644\u0645\u0648\u0646\u062A\u0627\u062C \u0623\u0648 \u0633\u064A\u0627\u0631\u0629 \u0646\u0642\u0644..." />
            </div>
            <div class="form-group">
              <label>\u0642\u064A\u0645\u0629 \u0627\u0644\u0623\u0635\u0644 (\u062C.\u0645) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="value" placeholder="0" />
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F</label>
              <app-prime-picker-select
                formControlName="department_id"
                [items]="departments"
                optionLabel="name"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0631\u0627\u0621 / \u0627\u0644\u0627\u0633\u062A\u062D\u0648\u0627\u0630</label>
              <p-datepicker formControlName="purchase_date" [appendTo]="'body'" dateFormat="yy-mm-dd" [showIcon]="true" [iconDisplay]="'input'" placeholder="\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0631\u0627\u0621..." styleClass="w-full" [style]="{ width: '100%', display: 'block' }"></p-datepicker>
            </div>
            <div class="form-group">
              <label>\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0648\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0623\u0635\u0644</label>
              <textarea pTextarea formControlName="notes" rows="3" placeholder="\u0623\u062F\u062E\u0644 \u0623\u064A\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0648 \u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629 \u0644\u0644\u0623\u0635\u0644..."></textarea>
            </div>
          </div>
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showAssetModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="assetForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0623\u0635\u0644' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- Side Drawer Filter Panel Overlay -->
      <div class="filter-drawer-overlay" *ngIf="showFilterSidebar" (click)="showFilterSidebar = false"></div>
      <div class="filter-drawer-panel" [class.open]="showFilterSidebar">
        <div class="filter-drawer-header">
          <h3><i class="fa-solid fa-sliders" style="color:var(--violet-light);"></i> \u0627\u0644\u0641\u0644\u062A\u0631\u0629 \u0648\u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0645\u062A\u0642\u062F\u0645</h3>
          <button type="button" class="btn-close-drawer" (click)="showFilterSidebar = false">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div class="filter-drawer-body">
          <!-- Filter 1: Quick Search -->
          <div class="filter-field-group">
            <label><i class="fa-solid fa-magnifying-glass"></i> \u0627\u0644\u0628\u062D\u062B \u0628\u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0641\u062A\u0627\u062D\u064A\u0629</label>
            <input
              type="text"
              pInputText
              [(ngModel)]="filterSearch"
              (input)="applyFilters()"
              placeholder="\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645\u060C \u0627\u0644\u0648\u0635\u0641\u060C \u0627\u0644\u0628\u064A\u0627\u0646\u060C \u0623\u0648 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629..."
              class="w-full"
            />
          </div>

          <!-- Filter 2: Payment Method -->
          <div class="filter-field-group">
            <label><i class="fa-solid fa-wallet"></i> \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639 / \u0627\u0644\u0645\u062D\u0641\u0638\u0629</label>
            <app-prime-picker-select
              [(ngModel)]="filterPaymentMethod"
              (ngModelChange)="applyFilters()"
              [items]="[
                { label: '\u0643\u0627\u0641\u0629 \u0637\u0631\u0642 \u0627\u0644\u062F\u0641\u0639 \u0648\u0627\u0644\u0645\u062D\u0627\u0641\u0638', value: '' },
                { label: '\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u0646\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629)', value: 'cash' },
                { label: '\u0646\u0642\u062F\u064A \u064A\u062F\u0648\u064A', value: 'cash_hand' },
                { label: '\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)', value: 'instapay' },
                { label: '\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A', value: 'bank_transfer' }
              ]"
              optionLabel="label"
              optionValue="value"
              placeholder="\u0627\u062E\u062A\u0631 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639..."
            ></app-prime-picker-select>
          </div>

          <!-- Filter 3: Department -->
          <div class="filter-field-group">
            <label><i class="fa-solid fa-building-user"></i> \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641</label>
            <app-prime-picker-select
              [(ngModel)]="filterDepartmentId"
              (ngModelChange)="applyFilters()"
              [items]="departmentsWithAllOption"
              optionLabel="name"
              optionValue="id"
              placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645..."
            ></app-prime-picker-select>
          </div>

          <!-- Filter 4: Category -->
          <div class="filter-field-group">
            <label><i class="fa-solid fa-tags"></i> \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0645\u0627\u0644\u064A</label>
            <app-prime-picker-select
              [(ngModel)]="filterCategoryId"
              (ngModelChange)="applyFilters()"
              [items]="categoriesWithAllOption"
              optionLabel="name"
              optionValue="id"
              placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641..."
            ></app-prime-picker-select>
          </div>

          <!-- Fast Date Presets inside Filter Drawer -->
          <div class="filter-field-group full-width">
            <label><i class="fa-solid fa-clock-rotate-left"></i> \u0627\u062E\u062A\u0635\u0627\u0631 \u0627\u0644\u0641\u0644\u062A\u0631\u0629 \u0628\u0627\u0644\u062A\u0627\u0631\u064A\u062E</label>
            <div class="date-preset-chips" style="display:flex; flex-wrap:wrap; gap:8px; width:100%; margin-bottom:8px;">
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'today'" 
                (click)="setDatePreset('today')"
              >
                <i class="fa-regular fa-sun"></i> \u0647\u0630\u0627 \u0627\u0644\u064A\u0648\u0645
              </button>
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'week'" 
                (click)="setDatePreset('week')"
              >
                <i class="fa-solid fa-calendar-week"></i> \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639
              </button>
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'month'" 
                (click)="setDatePreset('month')"
              >
                <i class="fa-solid fa-calendar-days"></i> \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631
              </button>
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'year'" 
                (click)="setDatePreset('year')"
              >
                <i class="fa-solid fa-calendar"></i> \u0647\u0630\u0647 \u0627\u0644\u0633\u0646\u0629
              </button>
              <button 
                type="button" 
                class="preset-chip" 
                [class.active]="datePreset === 'custom'" 
                (click)="setDatePreset('custom')"
              >
                <i class="fa-solid fa-pen-to-square"></i> \u062A\u0627\u0631\u064A\u062E \u0645\u062E\u0635\u0635
              </button>
            </div>
          </div>

          <!-- Filter 5 & 6: Date Range From & To (Side by Side Grid) -->
          <div class="date-range-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; width:100%;">
            <div class="filter-field-group">
              <label><i class="fa-regular fa-calendar-days"></i> \u0645\u0646 \u062A\u0627\u0631\u064A\u062E</label>
              <p-datepicker
                [(ngModel)]="filterFromDate"
                (ngModelChange)="datePreset = 'custom'; applyFilters()"
                [appendTo]="'body'"
                dateFormat="yy-mm-dd"
                [showIcon]="true"
                [iconDisplay]="'input'"
                placeholder="\u0627\u062E\u062A\u0631 \u0645\u0646 \u062A\u0627\u0631\u064A\u062E..."
                styleClass="w-full"
              ></p-datepicker>
            </div>

            <div class="filter-field-group">
              <label><i class="fa-regular fa-calendar-days"></i> \u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E</label>
              <p-datepicker
                [(ngModel)]="filterToDate"
                (ngModelChange)="datePreset = 'custom'; applyFilters()"
                [appendTo]="'body'"
                dateFormat="yy-mm-dd"
                [showIcon]="true"
                [iconDisplay]="'input'"
                placeholder="\u0627\u062E\u062A\u0631 \u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E..."
                styleClass="w-full"
              ></p-datepicker>
            </div>
          </div>
        </div>

        <div class="filter-drawer-footer">
          <button type="button" class="btn-reset-filters" (click)="resetFilters()">
            <i class="fa-solid fa-rotate-left"></i> \u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062A\u0631
          </button>
          <button type="button" class="btn-apply-filters" (click)="showFilterSidebar = false">
            <i class="fa-solid fa-check"></i> \u062A\u0645 \u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0641\u0644\u062A\u0631\u0629
          </button>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;2dca781d3e764e5017b63714600cd126656e5eff3a35f055a1257fc76c4be29e;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/finance/finance-dashboard.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text);\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.header-actions .btn,\n.header-actions .btn-action,\n.header-actions .btn-primary {\n  height: 42px !important;\n  padding: 0 18px !important;\n  border-radius: 12px !important;\n  font-size: 0.86rem !important;\n  font-weight: 700 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 8px !important;\n  cursor: pointer !important;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;\n  box-sizing: border-box !important;\n  white-space: nowrap !important;\n}\n.header-actions .btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5) !important;\n  color: #ffffff !important;\n  border: 1px solid rgba(99, 102, 241, 0.4) !important;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35) !important;\n}\n.header-actions .btn-primary:hover {\n  transform: translateY(-2px) !important;\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5) !important;\n}\n.header-actions .btn-action {\n  background: var(--bg-card, rgba(255, 255, 255, 0.04)) !important;\n  color: var(--text, #f3f4f6) !important;\n  border: 1px solid var(--border, rgba(99, 102, 241, 0.22)) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;\n}\n.header-actions .btn-action:hover {\n  background: rgba(99, 102, 241, 0.12) !important;\n  color: var(--violet-light, #a5b4fc) !important;\n  border-color: rgba(99, 102, 241, 0.4) !important;\n  transform: translateY(-2px) !important;\n}\nbody.light-theme .header-actions .btn-action {\n  background: #ffffff !important;\n  color: #0f172a !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06) !important;\n}\nbody.light-theme .header-actions .btn-action:hover {\n  background: #f8fafc !important;\n  color: #4f46e5 !important;\n  border-color: #94a3b8 !important;\n}\n.finance-tabs-nav {\n  display: flex;\n  gap: 6px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 6px;\n  border-radius: var(--r-lg);\n  margin-bottom: 24px;\n  overflow-x: auto;\n}\n.finance-tabs-nav button {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--text-2);\n  padding: 9px 16px;\n  border-radius: var(--r);\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.84rem;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  white-space: nowrap;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.finance-tabs-nav button:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n}\n.finance-tabs-nav button.active {\n  background:\n    linear-gradient(\n      135deg,\n      var(--emerald),\n      var(--teal));\n  color: #ffffff !important;\n  box-shadow: 0 4px 16px var(--emerald-soft);\n  border-color: transparent;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 28px;\n}\n@media (max-width: 1024px) {\n  .metrics-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .metrics-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.kpi-card {\n  background: var(--bg-card, #111228);\n  border: 1px solid var(--border, rgba(99, 102, 241, 0.18));\n  border-radius: 16px;\n  padding: 22px 24px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 146px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.kpi-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  border-radius: 16px 16px 0 0;\n}\n.kpi-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.kpi-card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.kpi-label {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: var(--text-2, #94a3b8);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  line-height: 1.3;\n}\n.kpi-icon-badge {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.kpi-value {\n  font-size: 1.9rem;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.kpi-value small {\n  font-size: 0.95rem;\n  font-weight: 700;\n  opacity: 0.85;\n}\n.kpi-footer {\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding-top: 8px;\n  margin-top: 4px;\n}\n.kpi-subtext {\n  font-size: 0.76rem;\n  color: var(--text-2, #94a3b8);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  line-height: 1.3;\n}\n.kpi-emerald::before {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #059669);\n}\n.kpi-emerald .kpi-icon-badge {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.text-emerald {\n  color: #10b981 !important;\n}\n.kpi-rose::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f43f5e,\n      #e11d48);\n}\n.kpi-rose .kpi-icon-badge {\n  background: rgba(244, 63, 94, 0.15);\n  color: #fb7185;\n}\n.text-rose {\n  color: #f43f5e !important;\n}\n.kpi-teal::before {\n  background:\n    linear-gradient(\n      90deg,\n      #14b8a6,\n      #0d9488);\n}\n.kpi-teal .kpi-icon-badge {\n  background: rgba(20, 184, 166, 0.15);\n  color: #2dd4bf;\n}\n.text-teal {\n  color: #14b8a6 !important;\n}\n.kpi-violet::before {\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #6366f1);\n}\n.kpi-violet .kpi-icon-badge {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.text-violet {\n  color: #a78bfa !important;\n}\n.kpi-amber::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #d97706);\n}\n.kpi-amber .kpi-icon-badge {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n}\n.text-amber {\n  color: #f59e0b !important;\n}\n.kpi-coral::before {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #be185d);\n}\n.kpi-coral .kpi-icon-badge {\n  background: rgba(236, 72, 153, 0.15);\n  color: #f472b6;\n}\n.text-coral {\n  color: #ec4899 !important;\n}\nbody.light-theme .kpi-card {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06) !important;\n}\nbody.light-theme .kpi-card:hover {\n  box-shadow: 0 16px 35px rgba(15, 23, 42, 0.12) !important;\n  border-color: #94a3b8 !important;\n}\nbody.light-theme .kpi-label {\n  color: #64748b !important;\n}\nbody.light-theme .kpi-footer {\n  border-top-color: #f1f5f9 !important;\n}\nbody.light-theme .kpi-subtext {\n  color: #64748b !important;\n}\n.section-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: var(--text);\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(99, 102, 241, 0.04);\n}\n.method-badge {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.btn-action {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.btn-action.primary {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary:hover {\n  background: rgba(124, 58, 237, 0.22);\n  color: var(--violet-light);\n}\n.text-success {\n  color: var(--emerald-light);\n  font-weight: 700;\n}\n.text-danger {\n  color: var(--rose-light);\n  font-weight: 700;\n}\n.required {\n  color: var(--rose-light);\n}\n.filter-drawer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(10, 11, 26, 0.75);\n  backdrop-filter: blur(6px);\n  z-index: 2990;\n}\n.filter-drawer-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 420px;\n  max-width: 90vw;\n  height: 100vh;\n  background: var(--bg-card, #111228);\n  border-left: 1px solid var(--border-v, rgba(99, 102, 241, 0.3));\n  box-shadow: -15px 0 50px rgba(0, 0, 0, 0.85);\n  z-index: 3000;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.filter-drawer-panel.open {\n  transform: translateX(0);\n}\n.filter-drawer-header {\n  padding: 22px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(99, 102, 241, 0.06);\n}\n.filter-drawer-header h3 {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text, #f3f4f6) !important;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-close-drawer {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: var(--text-2, #94a3b8);\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n.btn-close-drawer:hover {\n  background: rgba(244, 63, 94, 0.2);\n  color: #fb7185;\n  border-color: rgba(244, 63, 94, 0.4);\n}\n.filter-drawer-body {\n  padding: 24px;\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.filter-field-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.filter-field-group label {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--violet-light, #a5b4fc) !important;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-drawer-body input[pInputText] {\n  width: 100% !important;\n  background: var(--bg-input, rgba(255, 255, 255, 0.04)) !important;\n  border: 1px solid var(--border, rgba(99, 102, 241, 0.25)) !important;\n  border-radius: 12px !important;\n  color: var(--text, #f3f4f6) !important;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif !important;\n  font-size: 0.88rem !important;\n  height: 44px !important;\n  padding: 0 14px !important;\n  box-sizing: border-box !important;\n}\n.filter-drawer-body input[pInputText]:focus {\n  border-color: var(--violet-light, #a5b4fc) !important;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2) !important;\n}\n.filter-drawer-body p-datepicker,\n.filter-drawer-body p-calendar {\n  width: 100% !important;\n  display: block !important;\n}\n.filter-drawer-footer {\n  padding: 18px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  gap: 12px;\n  background: rgba(17, 18, 40, 0.95);\n}\n.preset-chip {\n  padding: 7px 13px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--text-2, #94a3b8);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.preset-chip:hover {\n  background: rgba(99, 102, 241, 0.18);\n  border-color: var(--violet, #6366f1);\n  color: var(--text, #ffffff);\n}\n.preset-chip.active {\n  background: var(--violet, #6366f1) !important;\n  color: #ffffff !important;\n  border-color: var(--violet, #6366f1) !important;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.hdr-date-chip {\n  padding: 6px 14px;\n  border-radius: 100px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2, #94a3b8);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.hdr-date-chip:hover {\n  background: rgba(99, 102, 241, 0.15);\n  border-color: var(--violet, #6366f1);\n  color: var(--text, #ffffff);\n}\n.hdr-date-chip.active {\n  background: var(--violet, #6366f1) !important;\n  color: #ffffff !important;\n  border-color: var(--violet, #6366f1) !important;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.35);\n}\nbody.light-theme .hdr-date-chip,\nbody.light-theme .preset-chip {\n  background: #f1f5f9 !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\nbody.light-theme .hdr-date-chip:hover,\nbody.light-theme .preset-chip:hover {\n  background: rgba(99, 102, 241, 0.1) !important;\n  border-color: #6366f1 !important;\n  color: #4f46e5 !important;\n}\nbody.light-theme .hdr-date-chip.active,\nbody.light-theme .preset-chip.active {\n  background: #6366f1 !important;\n  color: #ffffff !important;\n  border-color: #6366f1 !important;\n}\n.btn-reset-filters {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: var(--text-2, #94a3b8);\n  font-weight: 700;\n  font-size: 0.86rem;\n  font-family: inherit;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.btn-reset-filters:hover {\n  background: rgba(244, 63, 94, 0.15);\n  color: #fb7185;\n  border-color: rgba(244, 63, 94, 0.3);\n}\n.btn-apply-filters {\n  flex: 1.4;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  border: none;\n  color: #ffffff;\n  font-weight: 800;\n  font-size: 0.86rem;\n  font-family: inherit;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);\n  transition: all 0.2s;\n}\n.btn-apply-filters:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 22px rgba(99, 102, 241, 0.55);\n}\nbody.light-theme .filter-drawer-panel {\n  background: #ffffff !important;\n  border-left-color: #cbd5e1 !important;\n  box-shadow: -15px 0 45px rgba(15, 23, 42, 0.15) !important;\n}\nbody.light-theme .filter-drawer-header {\n  background: #f8fafc !important;\n  border-bottom-color: #e2e8f0 !important;\n}\nbody.light-theme .filter-drawer-header h3 {\n  color: #0f172a !important;\n}\nbody.light-theme .filter-field-group label {\n  color: #4f46e5 !important;\n}\nbody.light-theme .filter-drawer-body input[pInputText] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #0f172a !important;\n}\nbody.light-theme .filter-drawer-footer {\n  background: #ffffff !important;\n  border-top-color: #e2e8f0 !important;\n}\nbody.light-theme .btn-reset-filters {\n  background: #f1f5f9 !important;\n  border-color: #cbd5e1 !important;\n  color: #475569 !important;\n}\n.print-only-header {\n  display: none;\n}\n@media print {\n  body {\n    background: #ffffff !important;\n    color: #000000 !important;\n  }\n  .no-print,\n  .finance-tabs-nav,\n  .finance-filter-card,\n  .header-actions,\n  .btn,\n  .btn-action,\n  .dialog-footer-actions,\n  .access-denied-shell,\n  p-dialog {\n    display: none !important;\n  }\n  .crm-module-container {\n    padding: 0 !important;\n    background: #ffffff !important;\n  }\n  .print-only-header {\n    display: flex !important;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 2px solid #0f172a;\n    padding-bottom: 12px;\n    margin-bottom: 20px;\n  }\n  .section-card {\n    box-shadow: none !important;\n    border: 1px solid #cbd5e1 !important;\n    background: #ffffff !important;\n    color: #000000 !important;\n    padding: 12px !important;\n  }\n  .crm-table th {\n    background: #f1f5f9 !important;\n    color: #0f172a !important;\n    border-bottom: 2px solid #0f172a !important;\n    font-weight: 800 !important;\n  }\n  .crm-table td {\n    color: #0f172a !important;\n    border-bottom: 1px solid #cbd5e1 !important;\n    font-size: 0.85rem !important;\n  }\n  .metric-card {\n    background: #ffffff !important;\n    border: 1px solid #cbd5e1 !important;\n    box-shadow: none !important;\n  }\n  .metric-card .value {\n    color: #0f172a !important;\n  }\n  .metric-card .label {\n    color: #475569 !important;\n  }\n}\n:host-context(body.light-theme) .finance-filter-card {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .filter-title {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .filter-item label {\n  color: #64748b !important;\n}\n:host-context(body.light-theme) .search-input-box input {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .crm-module-container {\n  background: #f8fafc !important;\n}\n:host-context(body.light-theme) .module-header h2 {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .finance-tabs-nav {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .finance-tabs-nav button {\n  color: #475569 !important;\n}\n:host-context(body.light-theme) .finance-tabs-nav button:hover {\n  background: #eef2ff !important;\n  color: #4f46e5 !important;\n}\n:host-context(body.light-theme) .finance-tabs-nav button.active {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669) !important;\n  color: #ffffff !important;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3) !important;\n}\n:host-context(body.light-theme) .metric-card {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .metric-card .value {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .metric-card .label {\n  color: #64748b !important;\n}\n:host-context(body.light-theme) .section-card {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .crm-table th {\n  background: #f8fafc !important;\n  color: #475569 !important;\n  border-bottom-color: #e2e8f0 !important;\n}\n:host-context(body.light-theme) .crm-table td {\n  border-bottom-color: #f1f5f9 !important;\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .crm-table tr:hover td {\n  background: #f8fafc !important;\n}\n:host-context(body.light-theme) .method-badge {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\n:host-context(body.light-theme) .btn-action {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\n:host-context(body.light-theme) .btn-action:hover {\n  background: #eef2ff !important;\n  color: #4f46e5 !important;\n  border-color: #c7d2fe !important;\n}\n/*# sourceMappingURL=finance-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinanceDashboardComponent, { className: "FinanceDashboardComponent", filePath: "src/app/components/finance/finance-dashboard.component.ts", lineNumber: 1500 });
})();
export {
  FinanceDashboardComponent
};
//# sourceMappingURL=chunk-KTSJHHJU.js.map
