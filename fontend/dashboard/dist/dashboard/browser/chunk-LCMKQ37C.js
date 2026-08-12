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
  NgClass,
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

// src/app/components/finance/finance-dashboard.component.ts
var _c0 = () => ({ width: "640px" });
var _c1 = () => ({ label: "\u0645\u0635\u0631\u0648\u0641\u0627\u062A", value: "expense" });
var _c2 = () => ({ label: "\u0625\u064A\u0631\u0627\u062F\u0627\u062A / \u062F\u062E\u0644", value: "income" });
var _c3 = (a0, a1) => [a0, a1];
var _c4 = () => ({ label: "\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u0646\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629)", value: "cash" });
var _c5 = () => ({ label: "\u0646\u0642\u062F\u064A \u064A\u062F\u0648\u064A", value: "cash_hand" });
var _c6 = () => ({ label: "\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)", value: "instapay" });
var _c7 = () => ({ label: "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A", value: "bank_transfer" });
var _c8 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function FinanceDashboardComponent_div_31_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 48);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 49);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.deals_count, " \u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 5, item_r1.total_billed, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 8, item_r1.total_paid, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 11, item_r1.outstanding_balance, "1.2-2"), " \u062C.\u0645");
  }
}
function FinanceDashboardComponent_div_31_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 50)(2, "div", 51)(3, "div", 52);
    \u0275\u0275element(4, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0635\u062F\u0629 \u0644\u0644\u0639\u0645\u0644\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275text(8, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0635\u062F\u0629 \u0646\u0634\u0637\u0629 \u0645\u0633\u062C\u0644\u0629 \u0644\u0644\u0639\u0645\u0644\u0627\u0621 \u0641\u064A \u0627\u0644\u062F\u0641\u062A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A.");
    \u0275\u0275elementEnd()()()();
  }
}
function FinanceDashboardComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "span", 33);
    \u0275\u0275text(4, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u062F\u062E\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 34);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "span", 33);
    \u0275\u0275text(10, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 35);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 32)(15, "span", 33);
    \u0275\u0275text(16, "\u0635\u0627\u0641\u064A \u0627\u0644\u0633\u064A\u0648\u0644\u0629 \u0627\u0644\u0646\u0642\u062F\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3", 36);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 37)(21, "span", 33);
    \u0275\u0275text(22, "\u0631\u0623\u0633 \u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0627\u062D\u062A\u064A\u0627\u0637\u064A \u0627\u0644\u0623\u0635\u0648\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 38);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "small", 39);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 40)(30, "h3", 41);
    \u0275\u0275element(31, "i", 42);
    \u0275\u0275text(32, " \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 43)(34, "table", 44)(35, "thead")(36, "tr")(37, "th");
    \u0275\u0275text(38, "\u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "\u0627\u0644\u0645\u062D\u0635\u0644 (\u0627\u0644\u0645\u062F\u0641\u0648\u0639)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u0633\u062A\u062D\u0642 (\u0627\u0644\u0645\u062A\u0628\u0642\u064A)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "tbody");
    \u0275\u0275template(48, FinanceDashboardComponent_div_31_tr_48_Template, 14, 14, "tr", 45)(49, FinanceDashboardComponent_div_31_tr_49_Template, 9, 0, "tr", 46);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 7, ctx_r1.summary.total_income, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 10, ctx_r1.summary.total_expenses, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 13, ctx_r1.summary.net_balance, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 16, ctx_r1.summary.company_capital, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062B\u0627\u0628\u062A\u0629: ", \u0275\u0275pipeBind2(28, 19, ctx_r1.summary.total_fixed_assets, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.clientBalances);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clientBalances.length === 0);
  }
}
function FinanceDashboardComponent_div_32_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 59);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 60);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 39);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r3.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", entry_r3.type === "income" ? "badge-e" : "badge-r");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r3.type === "income" ? "\u0625\u064A\u0631\u0627\u062F" : "\u0645\u0635\u0631\u0648\u0641");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((entry_r3.category == null ? null : entry_r3.category.name_ar) || (entry_r3.category == null ? null : entry_r3.category.name_en) || "\u0639\u0627\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentMethodLabel(entry_r3.payment_method));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", entry_r3.type === "income" ? "text-success" : "text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", entry_r3.type === "income" ? "+" : "-", "", \u0275\u0275pipeBind2(13, 9, entry_r3.amount, "1.2-2"), " \u062C.\u0645 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r3.description);
  }
}
function FinanceDashboardComponent_div_32_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61)(2, "div", 51)(3, "div", 52);
    \u0275\u0275element(4, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54);
    \u0275\u0275text(6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0648\u062F \u0645\u0627\u0644\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275text(8, "\u0633\u062C\u0644 \u0623\u0648\u0644 \u062D\u0631\u0643\u0629 \u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0623\u0648 \u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645.");
    \u0275\u0275elementEnd()()()();
  }
}
function FinanceDashboardComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 56)(2, "div", 57)(3, "table", 44)(4, "thead")(5, "tr")(6, "th");
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
    \u0275\u0275template(19, FinanceDashboardComponent_div_32_tr_19_Template, 16, 12, "tr", 45)(20, FinanceDashboardComponent_div_32_tr_20_Template, 9, 0, "tr", 46);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.ledgerEntries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ledgerEntries.length === 0);
  }
}
function FinanceDashboardComponent_div_33_tr_26_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_33_tr_26_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const custody_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openReturnCustodyModal(custody_r6));
    });
    \u0275\u0275text(1, " \u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0639\u0647\u062F\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function FinanceDashboardComponent_div_33_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 67);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 49);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 68);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, FinanceDashboardComponent_div_33_tr_26_button_16_Template, 2, 0, "button", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const custody_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(custody_r6.employee == null ? null : custody_r6.employee.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 6, custody_r6.issued_amount, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 9, custody_r6.returned_amount, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 12, custody_r6.issued_amount - custody_r6.returned_amount, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(custody_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", custody_r6.status === "open");
  }
}
function FinanceDashboardComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 63)(2, "h3", 64);
    \u0275\u0275element(3, "i", 65);
    \u0275\u0275text(4, " \u062D\u0633\u0627\u0628\u0627\u062A \u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openIssueCustodyModal());
    });
    \u0275\u0275element(6, "i", 66);
    \u0275\u0275text(7, " \u0635\u0631\u0641 \u0639\u0647\u062F\u0629 \u062C\u062F\u064A\u062F\u0629 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 56)(9, "div", 57)(10, "table", 44)(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "\u0627\u0644\u0645\u0648\u0638\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\u0627\u0644\u0645\u0633\u062A\u0631\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "\u0627\u0644\u0645\u0646\u0635\u0631\u0641 \u0627\u0644\u0641\u0639\u0644\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "\u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, FinanceDashboardComponent_div_33_tr_26_Template, 17, 15, "tr", 45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r1.custodyAccounts);
  }
}
function FinanceDashboardComponent_div_34_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 75);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 67);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 76);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 47);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 77);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 48);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ps_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ps_r7.department_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ps_r7.partner_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ps_r7.partner_percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 8, ps_r7.total_income, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 11, ps_r7.total_expenses, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 14, ps_r7.net_profit, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 17, ps_r7.partner_share, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 20, ps_r7.company_share, "1.2-2"), " \u062C.\u0645");
  }
}
function FinanceDashboardComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 71)(2, "h3", 72);
    \u0275\u0275element(3, "i", 73);
    \u0275\u0275text(4, " \u062A\u0642\u0631\u064A\u0631 \u062A\u0648\u0632\u064A\u0639 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0641\u064A \u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0648\u0627\u0644\u0623\u0642\u0633\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 74)(6, "table", 44)(7, "thead")(8, "tr")(9, "th");
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
    \u0275\u0275template(26, FinanceDashboardComponent_div_34_tr_26_Template, 23, 23, "tr", 45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r1.partnerSplits);
  }
}
function FinanceDashboardComponent_div_35_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 80);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 76);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 76);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 67);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 81);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r8.employee_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r8.payment_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, p_r8.base_salary, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 12, p_r8.task_earnings, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 15, p_r8.commission_earnings, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind2(17, 18, p_r8.advances, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind2(20, 21, p_r8.deductions, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(23, 24, p_r8.bonuses, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 27, p_r8.net_payable, "1.2-2"), " \u062C.\u0645");
  }
}
function FinanceDashboardComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 71)(2, "h3", 72);
    \u0275\u0275element(3, "i", 78);
    \u0275\u0275text(4, " \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0648\u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0645\u0648\u0638\u0641\u064A\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 79);
    \u0275\u0275text(6, "\u0627\u0644\u0645\u0639\u0627\u062F\u0644\u0629: \u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0627\u0644\u0635\u0627\u0641\u064A = \u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A + \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645 + \u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A - \u0627\u0644\u0633\u0644\u0641 - \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A + \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 74)(8, "table", 44)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "\u0627\u0644\u0645\u0648\u0638\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "\u0627\u0644\u0633\u0644\u0641 (-)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A (-)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "\u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A (+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "\u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, FinanceDashboardComponent_div_35_tr_30_Template, 27, 30, "tr", 45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275property("ngForOf", ctx_r1.payrollSummary);
  }
}
function FinanceDashboardComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function FinanceDashboardComponent_ng_template_75_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLedgerModal = false);
    });
    \u0275\u0275text(1, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 83);
    \u0275\u0275text(3, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0642\u064A\u062F");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.ledgerForm.invalid || ctx_r1.loading);
  }
}
var FinanceDashboardComponent = class _FinanceDashboardComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  activeTab = "summary";
  summary = {};
  ledgerEntries = [];
  categories = [];
  clientBalances = [];
  custodyAccounts = [];
  partnerSplits = [];
  payrollSummary = [];
  departments = [];
  showLedgerModal = false;
  loading = false;
  ledgerForm;
  ngOnInit() {
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
  }
  loadAllData() {
    this.apiService.getFinanceSummary().subscribe((res) => this.summary = res.summary || {});
    this.apiService.getLedger().subscribe((res) => this.ledgerEntries = res.data?.data || res.data || []);
    this.apiService.getFinanceCategories().subscribe((res) => this.categories = res.data || []);
    this.apiService.getClientBalances().subscribe((res) => this.clientBalances = res.data || []);
    this.apiService.getCustodyAccounts().subscribe((res) => this.custodyAccounts = res.data || []);
    this.apiService.getPartnerProfitSplits().subscribe((res) => this.partnerSplits = res.data || []);
    this.apiService.getPayrollSummary().subscribe((res) => this.payrollSummary = res.data || []);
    this.apiService.getDepartments().subscribe((res) => this.departments = res || []);
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
  openAddLedgerModal() {
    this.ledgerForm.reset({ type: "expense", payment_method: "cash", amount: 0, date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] });
    this.showLedgerModal = true;
  }
  triggerAddCategory() {
    const catName = prompt("\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0641\u0626\u0629 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A/\u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629:");
    if (catName) {
      this.apiService.storeFinanceCategory({ name_ar: catName, type: this.ledgerForm.value.type }).subscribe((res) => {
        if (res.data) {
          this.categories.push(res.data);
          this.ledgerForm.patchValue({ category_id: res.data.id });
        }
      });
    }
  }
  saveLedgerEntry() {
    if (this.ledgerForm.invalid)
      return;
    this.loading = true;
    this.apiService.storeLedgerEntry(this.ledgerForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showLedgerModal = false;
        this.loadAllData();
      },
      error: () => this.loading = false
    });
  }
  openIssueCustodyModal() {
    const empIdStr = prompt("\u0623\u062F\u062E\u0644 \u0631\u0642\u0645 ID \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0645\u0633\u062A\u0644\u0645 \u0644\u0644\u0639\u0647\u062F\u0629:");
    const amountStr = prompt("\u0623\u062F\u062E\u0644 \u0642\u064A\u0645\u0629 \u0645\u0628\u0644\u063A \u0627\u0644\u0639\u0647\u062F\u0629 (EGP):");
    if (empIdStr && amountStr) {
      this.apiService.issueCustody({ employee_id: +empIdStr, issued_amount: +amountStr }).subscribe(() => {
        this.loadAllData();
      });
    }
  }
  openReturnCustodyModal(custody) {
    const returnedStr = prompt(`\u0623\u062F\u062E\u0644 \u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0627\u0644\u0645\u0631\u062C\u0639 \u0645\u0646 \u0627\u0644\u0639\u0647\u062F\u0629 (\u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0633\u0644\u0645\u0629: ${custody.issued_amount} EGP):`);
    if (returnedStr !== null) {
      this.apiService.returnCustody(custody.id, { returned_amount: +returnedStr }).subscribe(() => {
        this.loadAllData();
      });
    }
  }
  static \u0275fac = function FinanceDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinanceDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinanceDashboardComponent, selectors: [["app-finance-dashboard"]], decls: 76, vars: 45, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-chart-line", 2, "color", "var(--emerald-light)"], [1, "subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "finance-tabs-nav", "glass-panel"], [3, "click"], [1, "fa-solid", "fa-chart-line"], [1, "fa-solid", "fa-book"], [1, "fa-solid", "fa-hand-holding-dollar"], [1, "fa-solid", "fa-users-rectangle"], [1, "fa-solid", "fa-money-check-dollar"], [1, "fa-solid", "fa-vault"], ["class", "tab-content", 4, "ngIf"], ["header", "\u062A\u0633\u062C\u064A\u0644 \u0642\u0633\u0637 / \u062D\u0631\u0643\u0629 \u0645\u0627\u0644\u064A\u0629 \u062C\u062F\u064A\u062F\u0629", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [3, "ngSubmit", "formGroup"], [1, "form-grid", 2, "padding", "10px 0"], [1, "form-group"], [1, "required"], ["formControlName", "type", "optionLabel", "label", "optionValue", "value", 3, "appendTo", "options"], ["formControlName", "category_id", "optionLabel", "name_ar", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641...", "addNewLabel", "+ \u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F", 3, "addNew", "items"], ["type", "number", "pInputText", "", "formControlName", "amount", "placeholder", "500"], ["formControlName", "payment_method", "optionLabel", "label", "optionValue", "value", 3, "appendTo", "options"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "items"], ["type", "date", "pInputText", "", "formControlName", "date"], [1, "form-group", "full-width"], ["pTextarea", "", "formControlName", "description", "rows", "2", "placeholder", "\u0648\u0635\u0641 \u0627\u0644\u062D\u0631\u0643\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629..."], ["pTemplate", "footer"], [1, "tab-content"], [1, "metrics-grid"], [1, "metric-card", "glass-panel"], [1, "label"], [1, "value", 2, "color", "var(--emerald-light)"], [1, "value", 2, "color", "var(--rose-light)"], [1, "value", 2, "color", "#fff"], [1, "metric-card", "glass-panel", "highlight-orange"], [1, "value", 2, "color", "var(--violet-light)"], [2, "color", "var(--text-2)"], [1, "section-card", "glass-panel", "margin-top"], [2, "font-size", "1rem", "font-weight", "700", "color", "#fff", "display", "flex", "align-items", "center", "gap", "8px"], [1, "fa-solid", "fa-file-invoice-dollar", 2, "color", "var(--amber-light)"], [1, "table-responsive", 2, "margin-top", "14px"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "font-weight", "700", "color", "#fff"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], ["colspan", "5"], [1, "empty-state"], [1, "empty-state-icon"], [1, "fa-solid", "fa-receipt"], [1, "empty-state-title"], [1, "empty-state-desc"], [1, "table-card", "glass-panel"], [1, "table-responsive"], [1, "badge", 3, "ngClass"], [1, "method-badge"], [2, "font-weight", "700", 3, "ngClass"], ["colspan", "6"], [1, "fa-solid", "fa-folder-open"], [1, "tab-header", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "16px"], [2, "font-size", "1.05rem", "color", "#fff", "font-weight", "700"], [1, "fa-solid", "fa-hand-holding-dollar", 2, "color", "var(--teal-light)"], [1, "fa-solid", "fa-handshake-angle"], [2, "color", "var(--emerald-light)"], [1, "badge", "badge-v"], ["class", "btn-action primary", 3, "click", 4, "ngIf"], [1, "btn-action", "primary", 3, "click"], [1, "section-card", "glass-panel"], [2, "font-size", "1rem", "color", "#fff", "font-weight", "700"], [1, "fa-solid", "fa-users-rectangle", 2, "color", "var(--amber-light)"], [1, "table-responsive", "margin-top"], [1, "badge", "badge-a"], [2, "color", "var(--rose-light)"], [2, "color", "var(--amber-light)", "font-weight", "700"], [1, "fa-solid", "fa-money-check-dollar", 2, "color", "var(--teal-light)"], [2, "font-size", "0.78rem", "color", "var(--text-2)", "margin-top", "4px"], [2, "color", "var(--teal-light)"], [2, "color", "var(--teal-light)", "font-weight", "800", "font-size", "0.95rem"], ["type", "button", 1, "btn", "btn-glass", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function FinanceDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "\u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A\u060C \u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u062A\u0648\u0632\u064A\u0639 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621\u060C \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_9_listener() {
        return ctx.openAddLedgerModal();
      });
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275text(11, " \u062A\u0633\u062C\u064A\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u0645\u0627\u0644\u064A\u0629 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_13_listener() {
        return ctx.activeTab = "summary";
      });
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275text(15, " \u0627\u0644\u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0627\u0644\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_16_listener() {
        return ctx.activeTab = "ledger";
      });
      \u0275\u0275element(17, "i", 10);
      \u0275\u0275text(18, " \u062F\u0641\u062A\u0631 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_19_listener() {
        return ctx.activeTab = "custody";
      });
      \u0275\u0275element(20, "i", 11);
      \u0275\u0275text(21, " \u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_22_listener() {
        return ctx.activeTab = "partners";
      });
      \u0275\u0275element(23, "i", 12);
      \u0275\u0275text(24, " \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_25_listener() {
        return ctx.activeTab = "payroll";
      });
      \u0275\u0275element(26, "i", 13);
      \u0275\u0275text(27, " \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_28_listener() {
        return ctx.activeTab = "assets";
      });
      \u0275\u0275element(29, "i", 14);
      \u0275\u0275text(30, " \u0627\u0644\u0623\u0635\u0648\u0644 \u0648\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, FinanceDashboardComponent_div_31_Template, 50, 22, "div", 15)(32, FinanceDashboardComponent_div_32_Template, 21, 2, "div", 15)(33, FinanceDashboardComponent_div_33_Template, 27, 1, "div", 15)(34, FinanceDashboardComponent_div_34_Template, 27, 1, "div", 15)(35, FinanceDashboardComponent_div_35_Template, 31, 1, "div", 15);
      \u0275\u0275elementStart(36, "p-dialog", 16);
      \u0275\u0275twoWayListener("visibleChange", function FinanceDashboardComponent_Template_p_dialog_visibleChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showLedgerModal, $event) || (ctx.showLedgerModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(37, "form", 17);
      \u0275\u0275listener("ngSubmit", function FinanceDashboardComponent_Template_form_ngSubmit_37_listener() {
        return ctx.saveLedgerEntry();
      });
      \u0275\u0275elementStart(38, "div", 18)(39, "div", 19)(40, "label");
      \u0275\u0275text(41, "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629 ");
      \u0275\u0275elementStart(42, "span", 20);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "p-dropdown", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 19)(46, "label");
      \u0275\u0275text(47, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 ");
      \u0275\u0275elementStart(48, "span", 20);
      \u0275\u0275text(49, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "app-prime-picker-select", 22);
      \u0275\u0275listener("addNew", function FinanceDashboardComponent_Template_app_prime_picker_select_addNew_50_listener() {
        return ctx.triggerAddCategory();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 19)(52, "label");
      \u0275\u0275text(53, "\u0627\u0644\u0645\u0628\u0644\u063A (\u062C.\u0645) ");
      \u0275\u0275elementStart(54, "span", 20);
      \u0275\u0275text(55, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 19)(58, "label");
      \u0275\u0275text(59, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639 ");
      \u0275\u0275elementStart(60, "span", 20);
      \u0275\u0275text(61, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(62, "p-dropdown", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 19)(64, "label");
      \u0275\u0275text(65, "\u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0631\u062A\u0628\u0637");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-prime-picker-select", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 19)(68, "label");
      \u0275\u0275text(69, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u064A\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 27)(72, "label");
      \u0275\u0275text(73, "\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "textarea", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(75, FinanceDashboardComponent_ng_template_75_Template, 4, 1, "ng-template", 29);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.activeTab === "summary");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "ledger");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "custody");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "partners");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "payroll");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "assets");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.activeTab === "summary");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "ledger");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "custody");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "partners");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "payroll");
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showLedgerModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.ledgerForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("appendTo", "body")("options", \u0275\u0275pureFunction2(33, _c3, \u0275\u0275pureFunction0(31, _c1), \u0275\u0275pureFunction0(32, _c2)));
      \u0275\u0275advance(6);
      \u0275\u0275property("items", ctx.categories);
      \u0275\u0275advance(12);
      \u0275\u0275property("appendTo", "body")("options", \u0275\u0275pureFunction4(40, _c8, \u0275\u0275pureFunction0(36, _c4), \u0275\u0275pureFunction0(37, _c5), \u0275\u0275pureFunction0(38, _c6), \u0275\u0275pureFunction0(39, _c7)));
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.departments);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
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
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.finance-tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 6px;\n  border-radius: var(--r-lg);\n  margin-bottom: 24px;\n  overflow-x: auto;\n}\n.finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--text-2);\n  padding: 9px 16px;\n  border-radius: var(--r);\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.84rem;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  white-space: nowrap;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #fff;\n}\n.finance-tabs-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--emerald),\n      var(--teal));\n  color: #fff;\n  box-shadow: 0 4px 16px var(--emerald-soft);\n  border-color: transparent;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  padding: 22px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s var(--ease);\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.metric-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 8px;\n}\n.metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -1px;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n.highlight-orange[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--violet-light) !important;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.method-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: var(--emerald-light);\n  font-weight: 700;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n  font-weight: 700;\n}\n.crm-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 540px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: _ngcontent-%COMP%_modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  padding: 24px;\n  background: #12121e;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n}\n.wide-modal[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #a0a0ab;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 0.85rem;\n  color: #fff;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  color: #fff;\n  outline: none;\n}\n/*# sourceMappingURL=finance-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinanceDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-finance-dashboard", standalone: true, imports: [
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
          <h2><i class="fa-solid fa-chart-line" style="color:var(--emerald-light);"></i> \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629</h2>
          <p class="subtitle">\u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A\u060C \u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u062A\u0648\u0632\u064A\u0639 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621\u060C \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0644</p>
        </div>

        <div class="header-actions">
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
          <div class="metric-card glass-panel">
            <span class="label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u062F\u062E\u0644</span>
            <h3 class="value" style="color:var(--emerald-light);">{{ summary.total_income | number:'1.2-2' }} \u062C.\u0645</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A</span>
            <h3 class="value" style="color:var(--rose-light);">{{ summary.total_expenses | number:'1.2-2' }} \u062C.\u0645</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">\u0635\u0627\u0641\u064A \u0627\u0644\u0633\u064A\u0648\u0644\u0629 \u0627\u0644\u0646\u0642\u062F\u064A\u0629</span>
            <h3 class="value" style="color:#fff;">{{ summary.net_balance | number:'1.2-2' }} \u062C.\u0645</h3>
          </div>

          <div class="metric-card glass-panel highlight-orange">
            <span class="label">\u0631\u0623\u0633 \u0645\u0627\u0644 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0627\u062D\u062A\u064A\u0627\u0637\u064A \u0627\u0644\u0623\u0635\u0648\u0644</span>
            <h3 class="value" style="color:var(--violet-light);">{{ summary.company_capital | number:'1.2-2' }} \u062C.\u0645</h3>
            <small style="color:var(--text-2);">\u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062B\u0627\u0628\u062A\u0629: {{ summary.total_fixed_assets | number:'1.2-2' }} \u062C.\u0645</small>
          </div>
        </div>

        <!-- Client Outstanding Balances Table -->
        <div class="section-card glass-panel margin-top">
          <h3 style="font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-file-invoice-dollar" style="color:var(--amber-light);"></i> \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629</h3>
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
                  <td style="font-weight:700; color:#fff;">{{ item.client_name }}</td>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 3: CUSTODY (\u0628\u0646\u062F \u0627\u0644\u0639\u0647\u062F\u0629) -->
      <div class="tab-content" *ngIf="activeTab === 'custody'">
        <div class="tab-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:1.05rem; color:#fff; font-weight:700;"><i class="fa-solid fa-hand-holding-dollar" style="color:var(--teal-light);"></i> \u062D\u0633\u0627\u0628\u0627\u062A \u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646</h3>
          <button class="btn btn-primary" (click)="openIssueCustodyModal()">
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
                  <td style="font-weight:700; color:#fff;">{{ custody.employee?.name }}</td>
                  <td>{{ custody.issued_amount | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--emerald-light);">{{ custody.returned_amount | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ (custody.issued_amount - custody.returned_amount) | number:'1.2-2' }} \u062C.\u0645</td>
                  <td><span class="badge badge-v">{{ custody.status }}</span></td>
                  <td>
                    <button *ngIf="custody.status === 'open'" class="btn-action primary" (click)="openReturnCustodyModal(custody)">
                      \u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0639\u0647\u062F\u0629
                    </button>
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
          <h3 style="font-size:1rem; color:#fff; font-weight:700;"><i class="fa-solid fa-users-rectangle" style="color:var(--amber-light);"></i> \u062A\u0642\u0631\u064A\u0631 \u062A\u0648\u0632\u064A\u0639 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0641\u064A \u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0648\u0627\u0644\u0623\u0642\u0633\u0627\u0645</h3>
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
                  <td style="font-weight:700; color:#fff;">{{ ps.department_name }}</td>
                  <td style="color:var(--text-2);">{{ ps.partner_name }}</td>
                  <td><span class="badge badge-a">{{ ps.partner_percentage }}%</span></td>
                  <td style="color:var(--emerald-light);">{{ ps.total_income | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--rose-light);">{{ ps.total_expenses | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="font-weight:700; color:#fff;">{{ ps.net_profit | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--amber-light); font-weight:700;">{{ ps.partner_share | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ ps.company_share | number:'1.2-2' }} \u062C.\u0645</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 5: PAYROLL DUE -->
      <div class="tab-content" *ngIf="activeTab === 'payroll'">
        <div class="section-card glass-panel">
          <h3 style="font-size:1rem; color:#fff; font-weight:700;"><i class="fa-solid fa-money-check-dollar" style="color:var(--teal-light);"></i> \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0631\u062A\u0628\u0627\u062A \u0648\u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0645\u0648\u0638\u0641\u064A\u0646</h3>
          <p style="font-size:0.78rem; color:var(--text-2); margin-top:4px;">\u0627\u0644\u0645\u0639\u0627\u062F\u0644\u0629: \u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0627\u0644\u0635\u0627\u0641\u064A = \u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A + \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645 + \u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A - \u0627\u0644\u0633\u0644\u0641 - \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A + \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A</p>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0627\u0644\u0645\u0648\u0638\u0641</th>
                  <th>\u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639</th>
                  <th>\u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A</th>
                  <th>\u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0645\u0647\u0627\u0645</th>
                  <th>\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A</th>
                  <th>\u0627\u0644\u0633\u0644\u0641 (-)</th>
                  <th>\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A (-)</th>
                  <th>\u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A (+)</th>
                  <th>\u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of payrollSummary">
                  <td style="font-weight:700; color:#fff;">{{ p.employee_name }}</td>
                  <td><span class="badge badge-v">{{ p.payment_type }}</span></td>
                  <td>{{ p.base_salary | number:'1.2-2' }}</td>
                  <td>{{ p.task_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light);">{{ p.commission_earnings | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.advances | number:'1.2-2' }}</td>
                  <td style="color:var(--rose-light);">-{{ p.deductions | number:'1.2-2' }}</td>
                  <td style="color:var(--emerald-light);">+{{ p.bonuses | number:'1.2-2' }}</td>
                  <td style="color:var(--teal-light); font-weight:800; font-size:0.95rem;">{{ p.net_payable | number:'1.2-2' }} \u062C.\u0645</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add Ledger Entry -->
      <p-dialog [(visible)]="showLedgerModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u062A\u0633\u062C\u064A\u0644 \u0642\u0633\u0637 / \u062D\u0631\u0643\u0629 \u0645\u0627\u0644\u064A\u0629 \u062C\u062F\u064A\u062F\u0629" [style]="{ width: '640px' }">
        <form [formGroup]="ledgerForm" (ngSubmit)="saveLedgerEntry()">
          <div class="form-grid" style="padding: 10px 0;">
            <div class="form-group">
              <label>\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629 <span class="required">*</span></label>
              <p-dropdown
                formControlName="type"
                [appendTo]="'body'"
                [options]="[
                  { label: '\u0645\u0635\u0631\u0648\u0641\u0627\u062A', value: 'expense' },
                  { label: '\u0625\u064A\u0631\u0627\u062F\u0627\u062A / \u062F\u062E\u0644', value: 'income' }
                ]"
                optionLabel="label"
                optionValue="value"
              ></p-dropdown>
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
              <p-dropdown
                formControlName="payment_method"
                [appendTo]="'body'"
                [options]="[
                  { label: '\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u0646\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629)', value: 'cash' },
                  { label: '\u0646\u0642\u062F\u064A \u064A\u062F\u0648\u064A', value: 'cash_hand' },
                  { label: '\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)', value: 'instapay' },
                  { label: '\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A', value: 'bank_transfer' }
                ]"
                optionLabel="label"
                optionValue="value"
              ></p-dropdown>
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
              <input type="date" pInputText formControlName="date" />
            </div>
            <div class="form-group full-width">
              <label>\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A</label>
              <textarea pTextarea formControlName="description" rows="2" placeholder="\u0648\u0635\u0641 \u0627\u0644\u062D\u0631\u0643\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629..."></textarea>
            </div>
          </div>

          <ng-template pTemplate="footer">
            <button type="button" class="btn btn-glass" (click)="showLedgerModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn btn-primary" [disabled]="ledgerForm.invalid || loading">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0642\u064A\u062F</button>
          </ng-template>
        </form>
      </p-dialog>
    </div>
  `, styles: ['/* angular:styles/component:css;be6e8c3376d919d6d478a82dca35223397a7bf6746f29f30c67ee401c37625fe;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/finance/finance-dashboard.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.finance-tabs-nav {\n  display: flex;\n  gap: 6px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 6px;\n  border-radius: var(--r-lg);\n  margin-bottom: 24px;\n  overflow-x: auto;\n}\n.finance-tabs-nav button {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--text-2);\n  padding: 9px 16px;\n  border-radius: var(--r);\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.84rem;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  white-space: nowrap;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.finance-tabs-nav button:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #fff;\n}\n.finance-tabs-nav button.active {\n  background:\n    linear-gradient(\n      135deg,\n      var(--emerald),\n      var(--teal));\n  color: #fff;\n  box-shadow: 0 4px 16px var(--emerald-soft);\n  border-color: transparent;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card {\n  padding: 22px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s var(--ease);\n}\n.metric-card:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.metric-card .label {\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 8px;\n}\n.metric-card .value {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -1px;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n.highlight-orange {\n  border-top: 3px solid var(--violet-light) !important;\n}\n.section-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.method-badge {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.btn-action {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.text-success {\n  color: var(--emerald-light);\n  font-weight: 700;\n}\n.text-danger {\n  color: var(--rose-light);\n  font-weight: 700;\n}\n.crm-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 540px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal {\n  max-width: 700px;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h3 {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width {\n  grid-column: span 2;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group select option {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required {\n  color: var(--rose-light);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 520px;\n  padding: 24px;\n  background: #12121e;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n}\n.wide-modal {\n  max-width: 680px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.full-width {\n  grid-column: span 2;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.close-btn {\n  background: transparent;\n  border: none;\n  color: #a0a0ab;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 0.85rem;\n  color: #fff;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  color: #fff;\n  outline: none;\n}\n/*# sourceMappingURL=finance-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinanceDashboardComponent, { className: "FinanceDashboardComponent", filePath: "src/app/components/finance/finance-dashboard.component.ts", lineNumber: 398 });
})();
export {
  FinanceDashboardComponent
};
//# sourceMappingURL=chunk-LCMKQ37C.js.map
