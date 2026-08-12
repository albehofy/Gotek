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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CK3LQYPJ.js";

// src/app/components/finance/finance-dashboard.component.ts
function FinanceDashboardComponent_div_31_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 34);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.deals_count, " deals");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 5, item_r1.total_billed, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 8, item_r1.total_paid, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 11, item_r1.outstanding_balance, "1.2-2"), " EGP");
  }
}
function FinanceDashboardComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4, "Total Revenue & Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 19)(9, "span", 20);
    \u0275\u0275text(10, "Total Expenses & Outflow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 22);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 19)(15, "span", 20);
    \u0275\u0275text(16, "Net Balance (Liquidity)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3", 23);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 24)(21, "span", 20);
    \u0275\u0275text(22, "Company Capital & Reserve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 25);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "small", 26);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 27)(30, "h3", 28);
    \u0275\u0275element(31, "i", 29);
    \u0275\u0275text(32, " Client Outstanding Balances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 30)(34, "table", 31)(35, "thead")(36, "tr")(37, "th");
    \u0275\u0275text(38, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Deals Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Total Billed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Collected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Outstanding Balance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "tbody");
    \u0275\u0275template(48, FinanceDashboardComponent_div_31_tr_48_Template, 14, 14, "tr", 32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 6, ctx_r1.summary.total_income, "1.2-2"), " EGP");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 9, ctx_r1.summary.total_expenses, "1.2-2"), " EGP");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 12, ctx_r1.summary.net_balance, "1.2-2"), " EGP");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 15, ctx_r1.summary.company_capital, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Fixed Assets: ", \u0275\u0275pipeBind2(28, 18, ctx_r1.summary.total_fixed_assets, "1.2-2"), " EGP");
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.clientBalances);
  }
}
function FinanceDashboardComponent_div_32_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 40);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 26);
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
    \u0275\u0275textInterpolate(entry_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((entry_r3.category == null ? null : entry_r3.category.name_ar) || (entry_r3.category == null ? null : entry_r3.category.name_en) || "General");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentMethodLabel(entry_r3.payment_method));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", entry_r3.type === "income" ? "text-success" : "text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", entry_r3.type === "income" ? "+" : "-", "", \u0275\u0275pipeBind2(13, 9, entry_r3.amount, "1.2-2"), " EGP ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r3.description);
  }
}
function FinanceDashboardComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 36)(2, "div", 37)(3, "table", 31)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Amount (EGP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, FinanceDashboardComponent_div_32_tr_19_Template, 16, 12, "tr", 32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.ledgerEntries);
  }
}
function FinanceDashboardComponent_div_33_tr_26_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_33_tr_26_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const custody_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openReturnCustodyModal(custody_r6));
    });
    \u0275\u0275text(1, " Settle Custody ");
    \u0275\u0275elementEnd();
  }
}
function FinanceDashboardComponent_div_33_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 45);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 35);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, FinanceDashboardComponent_div_33_tr_26_button_16_Template, 2, 0, "button", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const custody_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(custody_r6.employee == null ? null : custody_r6.employee.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 6, custody_r6.issued_amount, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 9, custody_r6.returned_amount, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 12, custody_r6.issued_amount - custody_r6.returned_amount, "1.2-2"), " EGP");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(custody_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", custody_r6.status === "open");
  }
}
function FinanceDashboardComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 41)(2, "h3", 42);
    \u0275\u0275element(3, "i", 43);
    \u0275\u0275text(4, " Employee Custody Float Accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openIssueCustodyModal());
    });
    \u0275\u0275element(6, "i", 44);
    \u0275\u0275text(7, " Issue New Custody ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 36)(9, "div", 37)(10, "table", 31)(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Issued Float");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Returned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Actual Outflow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, FinanceDashboardComponent_div_33_tr_26_Template, 17, 15, "tr", 32);
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
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 45);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 54);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 33);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 55);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 34);
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
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 8, ps_r7.total_income, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 11, ps_r7.total_expenses, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 14, ps_r7.net_profit, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 17, ps_r7.partner_share, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 20, ps_r7.company_share, "1.2-2"), " EGP");
  }
}
function FinanceDashboardComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 49)(2, "h3", 50);
    \u0275\u0275element(3, "i", 51);
    \u0275\u0275text(4, " Department Partner Profit Distribution Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 52)(6, "table", 31)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Department / Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "External Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Partner Share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Total Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Total Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Net Profit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Partner Net Share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Company Net Share");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, FinanceDashboardComponent_div_34_tr_26_Template, 23, 23, "tr", 32);
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
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 46);
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
    \u0275\u0275elementStart(12, "td", 58);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 54);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 54);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 45);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 59);
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
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 27, p_r8.net_payable, "1.2-2"), " EGP");
  }
}
function FinanceDashboardComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 49)(2, "h3", 50);
    \u0275\u0275element(3, "i", 56);
    \u0275\u0275text(4, " Employee Payroll Due Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 57);
    \u0275\u0275text(6, "Formula: net_payable = base_salary + task_earnings + commission - advances - deductions + bonuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 52)(8, "table", 31)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Payment Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Base Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Task Earnings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Commissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Advances (-)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Deductions (-)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Bonuses (+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Net Payable");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, FinanceDashboardComponent_div_35_tr_30_Template, 27, 30, "tr", 32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275property("ngForOf", ctx_r1.payrollSummary);
  }
}
function FinanceDashboardComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "h3");
    \u0275\u0275element(4, "i", 63);
    \u0275\u0275text(5, " Record Ledger / Expense Entry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 64);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_36_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLedgerModal = false);
    });
    \u0275\u0275element(7, "i", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 66);
    \u0275\u0275listener("ngSubmit", function FinanceDashboardComponent_div_36_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveLedgerEntry());
    });
    \u0275\u0275elementStart(9, "div", 67)(10, "div", 68)(11, "label");
    \u0275\u0275text(12, "Entry Type ");
    \u0275\u0275elementStart(13, "span", 69);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "select", 70)(16, "option", 71);
    \u0275\u0275text(17, "Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 72);
    \u0275\u0275text(19, "Income / Revenue");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 68)(21, "label");
    \u0275\u0275text(22, "Category ");
    \u0275\u0275elementStart(23, "span", 69);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "app-prime-picker-select", 73);
    \u0275\u0275listener("addNew", function FinanceDashboardComponent_div_36_Template_app_prime_picker_select_addNew_25_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerAddCategory());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 68)(27, "label");
    \u0275\u0275text(28, "Amount (EGP) ");
    \u0275\u0275elementStart(29, "span", 69);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 68)(33, "label");
    \u0275\u0275text(34, "Payment Method ");
    \u0275\u0275elementStart(35, "span", 69);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "select", 75)(38, "option", 76);
    \u0275\u0275text(39, "Cash (Local Safe)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 77);
    \u0275\u0275text(41, "Direct Cash-in-hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 78);
    \u0275\u0275text(43, "InstaPay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 79);
    \u0275\u0275text(45, "Bank Transfer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 68)(47, "label");
    \u0275\u0275text(48, "Associated Department");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "app-prime-picker-select", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 68)(51, "label");
    \u0275\u0275text(52, "Entry Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 82)(55, "label");
    \u0275\u0275text(56, "Description & Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "textarea", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 84)(59, "button", 85);
    \u0275\u0275listener("click", function FinanceDashboardComponent_div_36_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLedgerModal = false);
    });
    \u0275\u0275text(60, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 86);
    \u0275\u0275text(62, "Record Entry");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r1.ledgerForm);
    \u0275\u0275advance(17);
    \u0275\u0275property("items", ctx_r1.categories);
    \u0275\u0275advance(24);
    \u0275\u0275property("items", ctx_r1.departments);
    \u0275\u0275advance(12);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinanceDashboardComponent, selectors: [["app-finance-dashboard"]], decls: 37, vars: 18, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-chart-line", 2, "color", "var(--emerald-light)"], [1, "subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "finance-tabs-nav", "glass-panel"], [3, "click"], [1, "fa-solid", "fa-chart-line"], [1, "fa-solid", "fa-book"], [1, "fa-solid", "fa-hand-holding-dollar"], [1, "fa-solid", "fa-users-rectangle"], [1, "fa-solid", "fa-money-check-dollar"], [1, "fa-solid", "fa-vault"], ["class", "tab-content", 4, "ngIf"], ["class", "crm-modal-backdrop", 4, "ngIf"], [1, "tab-content"], [1, "metrics-grid"], [1, "metric-card", "glass-panel"], [1, "label"], [1, "value", 2, "color", "var(--emerald-light)"], [1, "value", 2, "color", "var(--rose-light)"], [1, "value", 2, "color", "#fff"], [1, "metric-card", "glass-panel", "highlight-orange"], [1, "value", 2, "color", "var(--violet-light)"], [2, "color", "var(--text-2)"], [1, "section-card", "glass-panel", "margin-top"], [2, "font-size", "1rem", "font-weight", "700", "color", "#fff", "display", "flex", "align-items", "center", "gap", "8px"], [1, "fa-solid", "fa-file-invoice-dollar", 2, "color", "var(--amber-light)"], [1, "table-responsive", 2, "margin-top", "14px"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [2, "font-weight", "700", "color", "#fff"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], [1, "table-card", "glass-panel"], [1, "table-responsive"], [1, "badge", 3, "ngClass"], [1, "method-badge"], [2, "font-weight", "700", 3, "ngClass"], [1, "tab-header", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "16px"], [2, "font-size", "1.05rem", "color", "#fff", "font-weight", "700"], [1, "fa-solid", "fa-hand-holding-dollar", 2, "color", "var(--teal-light)"], [1, "fa-solid", "fa-handshake-angle"], [2, "color", "var(--emerald-light)"], [1, "badge", "badge-v"], ["class", "btn-action primary", 3, "click", 4, "ngIf"], [1, "btn-action", "primary", 3, "click"], [1, "section-card", "glass-panel"], [2, "font-size", "1rem", "color", "#fff", "font-weight", "700"], [1, "fa-solid", "fa-users-rectangle", 2, "color", "var(--amber-light)"], [1, "table-responsive", "margin-top"], [1, "badge", "badge-a"], [2, "color", "var(--rose-light)"], [2, "color", "var(--amber-light)", "font-weight", "700"], [1, "fa-solid", "fa-money-check-dollar", 2, "color", "var(--teal-light)"], [2, "font-size", "0.78rem", "color", "var(--text-2)", "margin-top", "4px"], [2, "color", "var(--teal-light)"], [2, "color", "var(--teal-light)", "font-weight", "800", "font-size", "0.95rem"], [1, "crm-modal-backdrop"], [1, "crm-modal-card", "glass-panel", "wide-modal"], [1, "modal-header"], [1, "fa-solid", "fa-plus", 2, "color", "var(--violet-light)"], [1, "close-btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "type"], ["value", "expense"], ["value", "income"], ["formControlName", "category_id", "optionLabel", "name_ar", "optionValue", "id", "placeholder", "Select category...", "addNewLabel", "+ Add new category", 3, "addNew", "items"], ["type", "number", "formControlName", "amount", "placeholder", "500"], ["formControlName", "payment_method"], ["value", "cash"], ["value", "cash_hand"], ["value", "instapay"], ["value", "bank_transfer"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select department...", 3, "items"], ["type", "date", "formControlName", "date"], [1, "form-group", "full-width"], ["formControlName", "description", "rows", "2", "placeholder", "Ledger description..."], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-glass", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function FinanceDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Finance & Accounting Ledger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Ledger entries, expenses, custody float, partner profit splits, payroll & capital assets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_9_listener() {
        return ctx.openAddLedgerModal();
      });
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275text(11, " Record Ledger Entry ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_13_listener() {
        return ctx.activeTab = "summary";
      });
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275text(15, " Financial Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_16_listener() {
        return ctx.activeTab = "ledger";
      });
      \u0275\u0275element(17, "i", 10);
      \u0275\u0275text(18, " General Ledger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_19_listener() {
        return ctx.activeTab = "custody";
      });
      \u0275\u0275element(20, "i", 11);
      \u0275\u0275text(21, " Custody Float");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_22_listener() {
        return ctx.activeTab = "partners";
      });
      \u0275\u0275element(23, "i", 12);
      \u0275\u0275text(24, " Partner Profit Splits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_25_listener() {
        return ctx.activeTab = "payroll";
      });
      \u0275\u0275element(26, "i", 13);
      \u0275\u0275text(27, " Payroll Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 8);
      \u0275\u0275listener("click", function FinanceDashboardComponent_Template_button_click_28_listener() {
        return ctx.activeTab = "assets";
      });
      \u0275\u0275element(29, "i", 14);
      \u0275\u0275text(30, " Assets & Capital");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, FinanceDashboardComponent_div_31_Template, 49, 21, "div", 15)(32, FinanceDashboardComponent_div_32_Template, 20, 1, "div", 15)(33, FinanceDashboardComponent_div_33_Template, 27, 1, "div", 15)(34, FinanceDashboardComponent_div_34_Template, 27, 1, "div", 15)(35, FinanceDashboardComponent_div_35_Template, 31, 1, "div", 15)(36, FinanceDashboardComponent_div_36_Template, 63, 4, "div", 16);
      \u0275\u0275elementEnd();
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
      \u0275\u0275property("ngIf", ctx.showLedgerModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, PrimePickerSelectComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.finance-tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 6px;\n  border-radius: var(--r-lg);\n  margin-bottom: 24px;\n  overflow-x: auto;\n}\n.finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--text-2);\n  padding: 9px 16px;\n  border-radius: var(--r);\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.84rem;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  white-space: nowrap;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.finance-tabs-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #fff;\n}\n.finance-tabs-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--emerald),\n      var(--teal));\n  color: #fff;\n  box-shadow: 0 4px 16px var(--emerald-soft);\n  border-color: transparent;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  padding: 22px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s var(--ease);\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.metric-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 8px;\n}\n.metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -1px;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n.highlight-orange[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--violet-light) !important;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  direction: ltr;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.method-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: var(--emerald-light);\n  font-weight: 700;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n  font-weight: 700;\n}\n.crm-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 540px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: _ngcontent-%COMP%_modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  padding: 24px;\n  background: #12121e;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n}\n.wide-modal[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #a0a0ab;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 0.85rem;\n  color: #fff;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  color: #fff;\n  outline: none;\n}\n/*# sourceMappingURL=finance-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinanceDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-finance-dashboard", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimePickerSelectComponent], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-chart-line" style="color:var(--emerald-light);"></i> Finance &amp; Accounting Ledger</h2>
          <p class="subtitle">Ledger entries, expenses, custody float, partner profit splits, payroll &amp; capital assets</p>
        </div>

        <div class="header-actions">
          <button class="btn btn-primary" (click)="openAddLedgerModal()">
            <i class="fa-solid fa-plus"></i> Record Ledger Entry
          </button>
        </div>
      </div>

      <!-- Navigation Sub-Tabs -->
      <div class="finance-tabs-nav glass-panel">
        <button [class.active]="activeTab === 'summary'" (click)="activeTab = 'summary'"><i class="fa-solid fa-chart-line"></i> Financial Summary</button>
        <button [class.active]="activeTab === 'ledger'" (click)="activeTab = 'ledger'"><i class="fa-solid fa-book"></i> General Ledger</button>
        <button [class.active]="activeTab === 'custody'" (click)="activeTab = 'custody'"><i class="fa-solid fa-hand-holding-dollar"></i> Custody Float</button>
        <button [class.active]="activeTab === 'partners'" (click)="activeTab = 'partners'"><i class="fa-solid fa-users-rectangle"></i> Partner Profit Splits</button>
        <button [class.active]="activeTab === 'payroll'" (click)="activeTab = 'payroll'"><i class="fa-solid fa-money-check-dollar"></i> Payroll Due</button>
        <button [class.active]="activeTab === 'assets'" (click)="activeTab = 'assets'"><i class="fa-solid fa-vault"></i> Assets &amp; Capital</button>
      </div>

      <!-- TAB 1: SUMMARY -->
      <div class="tab-content" *ngIf="activeTab === 'summary'">
        <div class="metrics-grid">
          <div class="metric-card glass-panel">
            <span class="label">Total Revenue &amp; Income</span>
            <h3 class="value" style="color:var(--emerald-light);">{{ summary.total_income | number:'1.2-2' }} EGP</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">Total Expenses &amp; Outflow</span>
            <h3 class="value" style="color:var(--rose-light);">{{ summary.total_expenses | number:'1.2-2' }} EGP</h3>
          </div>

          <div class="metric-card glass-panel">
            <span class="label">Net Balance (Liquidity)</span>
            <h3 class="value" style="color:#fff;">{{ summary.net_balance | number:'1.2-2' }} EGP</h3>
          </div>

          <div class="metric-card glass-panel highlight-orange">
            <span class="label">Company Capital &amp; Reserve</span>
            <h3 class="value" style="color:var(--violet-light);">{{ summary.company_capital | number:'1.2-2' }} EGP</h3>
            <small style="color:var(--text-2);">Fixed Assets: {{ summary.total_fixed_assets | number:'1.2-2' }} EGP</small>
          </div>
        </div>

        <!-- Client Outstanding Balances Table -->
        <div class="section-card glass-panel margin-top">
          <h3 style="font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-file-invoice-dollar" style="color:var(--amber-light);"></i> Client Outstanding Balances</h3>
          <div class="table-responsive" style="margin-top:14px;">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Deals Count</th>
                  <th>Total Billed</th>
                  <th>Collected</th>
                  <th>Outstanding Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of clientBalances">
                  <td style="font-weight:700; color:#fff;">{{ item.client_name }}</td>
                  <td>{{ item.deals_count }} deals</td>
                  <td>{{ item.total_billed | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ item.total_paid | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ item.outstanding_balance | number:'1.2-2' }} EGP</td>
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
                  <th>Date</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Payment Method</th>
                  <th>Amount (EGP)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let entry of ledgerEntries">
                  <td style="color:var(--text-2);">{{ entry.date }}</td>
                  <td><span class="badge" [ngClass]="entry.type === 'income' ? 'badge-e' : 'badge-r'">{{ entry.type }}</span></td>
                  <td>{{ entry.category?.name_ar || entry.category?.name_en || 'General' }}</td>
                  <td><span class="method-badge">{{ getPaymentMethodLabel(entry.payment_method) }}</span></td>
                  <td style="font-weight:700;" [ngClass]="entry.type === 'income' ? 'text-success' : 'text-danger'">
                    {{ entry.type === 'income' ? '+' : '-' }}{{ entry.amount | number:'1.2-2' }} EGP
                  </td>
                  <td style="color:var(--text-2);">{{ entry.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 3: CUSTODY (\u0628\u0646\u062F \u0627\u0644\u0639\u0647\u062F\u0629) -->
      <div class="tab-content" *ngIf="activeTab === 'custody'">
        <div class="tab-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:1.05rem; color:#fff; font-weight:700;"><i class="fa-solid fa-hand-holding-dollar" style="color:var(--teal-light);"></i> Employee Custody Float Accounts</h3>
          <button class="btn btn-primary" (click)="openIssueCustodyModal()">
            <i class="fa-solid fa-handshake-angle"></i> Issue New Custody
          </button>
        </div>
        <div class="table-card glass-panel">
          <div class="table-responsive">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Issued Float</th>
                  <th>Returned</th>
                  <th>Actual Outflow</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let custody of custodyAccounts">
                  <td style="font-weight:700; color:#fff;">{{ custody.employee?.name }}</td>
                  <td>{{ custody.issued_amount | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--emerald-light);">{{ custody.returned_amount | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ (custody.issued_amount - custody.returned_amount) | number:'1.2-2' }} EGP</td>
                  <td><span class="badge badge-v">{{ custody.status }}</span></td>
                  <td>
                    <button *ngIf="custody.status === 'open'" class="btn-action primary" (click)="openReturnCustodyModal(custody)">
                      Settle Custody
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
          <h3 style="font-size:1rem; color:#fff; font-weight:700;"><i class="fa-solid fa-users-rectangle" style="color:var(--amber-light);"></i> Department Partner Profit Distribution Report</h3>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Department / Center</th>
                  <th>External Partner</th>
                  <th>Partner Share</th>
                  <th>Total Income</th>
                  <th>Total Expenses</th>
                  <th>Net Profit</th>
                  <th>Partner Net Share</th>
                  <th>Company Net Share</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let ps of partnerSplits">
                  <td style="font-weight:700; color:#fff;">{{ ps.department_name }}</td>
                  <td style="color:var(--text-2);">{{ ps.partner_name }}</td>
                  <td><span class="badge badge-a">{{ ps.partner_percentage }}%</span></td>
                  <td style="color:var(--emerald-light);">{{ ps.total_income | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--rose-light);">{{ ps.total_expenses | number:'1.2-2' }} EGP</td>
                  <td style="font-weight:700; color:#fff;">{{ ps.net_profit | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--amber-light); font-weight:700;">{{ ps.partner_share | number:'1.2-2' }} EGP</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ ps.company_share | number:'1.2-2' }} EGP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TAB 5: PAYROLL DUE -->
      <div class="tab-content" *ngIf="activeTab === 'payroll'">
        <div class="section-card glass-panel">
          <h3 style="font-size:1rem; color:#fff; font-weight:700;"><i class="fa-solid fa-money-check-dollar" style="color:var(--teal-light);"></i> Employee Payroll Due Summary</h3>
          <p style="font-size:0.78rem; color:var(--text-2); margin-top:4px;">Formula: net_payable = base_salary + task_earnings + commission - advances - deductions + bonuses</p>
          <div class="table-responsive margin-top">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Payment Model</th>
                  <th>Base Salary</th>
                  <th>Task Earnings</th>
                  <th>Commissions</th>
                  <th>Advances (-)</th>
                  <th>Deductions (-)</th>
                  <th>Bonuses (+)</th>
                  <th>Net Payable</th>
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
                  <td style="color:var(--teal-light); font-weight:800; font-size:0.95rem;">{{ p.net_payable | number:'1.2-2' }} EGP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Add Ledger Entry Modal -->
      <div class="crm-modal-backdrop" *ngIf="showLedgerModal">
        <div class="crm-modal-card glass-panel wide-modal">
          <div class="modal-header">
            <h3><i class="fa-solid fa-plus" style="color:var(--violet-light);"></i> Record Ledger / Expense Entry</h3>
            <button class="close-btn" (click)="showLedgerModal = false"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="ledgerForm" (ngSubmit)="saveLedgerEntry()">
            <div class="form-grid">
              <div class="form-group">
                <label>Entry Type <span class="required">*</span></label>
                <select formControlName="type">
                  <option value="expense">Expense</option>
                  <option value="income">Income / Revenue</option>
                </select>
              </div>
              <div class="form-group">
                <label>Category <span class="required">*</span></label>
                <app-prime-picker-select
                  formControlName="category_id"
                  [items]="categories"
                  optionLabel="name_ar"
                  optionValue="id"
                  placeholder="Select category..."
                  addNewLabel="+ Add new category"
                  (addNew)="triggerAddCategory()"
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Amount (EGP) <span class="required">*</span></label>
                <input type="number" formControlName="amount" placeholder="500" />
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
                <label>Associated Department</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select department..."
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>Entry Date</label>
                <input type="date" formControlName="date" />
              </div>
              <div class="form-group full-width">
                <label>Description &amp; Notes</label>
                <textarea formControlName="description" rows="2" placeholder="Ledger description..."></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="showLedgerModal = false">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="ledgerForm.invalid || loading">Record Entry</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;3f8a0eb0bf92ddbdda7cbd1698b5c09cb64939c888ed5fe451fae82ef60dedf9;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/finance/finance-dashboard.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.finance-tabs-nav {\n  display: flex;\n  gap: 6px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 6px;\n  border-radius: var(--r-lg);\n  margin-bottom: 24px;\n  overflow-x: auto;\n}\n.finance-tabs-nav button {\n  background: transparent;\n  border: 1px solid transparent;\n  color: var(--text-2);\n  padding: 9px 16px;\n  border-radius: var(--r);\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.84rem;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  white-space: nowrap;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.finance-tabs-nav button:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #fff;\n}\n.finance-tabs-nav button.active {\n  background:\n    linear-gradient(\n      135deg,\n      var(--emerald),\n      var(--teal));\n  color: #fff;\n  box-shadow: 0 4px 16px var(--emerald-soft);\n  border-color: transparent;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card {\n  padding: 22px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s var(--ease);\n}\n.metric-card:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.metric-card .label {\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 8px;\n}\n.metric-card .value {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -1px;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n.highlight-orange {\n  border-top: 3px solid var(--violet-light) !important;\n}\n.section-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.margin-top {\n  margin-top: 20px;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  direction: ltr;\n}\n.crm-table th {\n  text-align: left;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 13px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.method-badge {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.btn-action {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.text-success {\n  color: var(--emerald-light);\n  font-weight: 700;\n}\n.text-danger {\n  color: var(--rose-light);\n  font-weight: 700;\n}\n.crm-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 540px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal {\n  max-width: 700px;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h3 {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width {\n  grid-column: span 2;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group select option {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required {\n  color: var(--rose-light);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 520px;\n  padding: 24px;\n  background: #12121e;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n}\n.wide-modal {\n  max-width: 680px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.full-width {\n  grid-column: span 2;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.close-btn {\n  background: transparent;\n  border: none;\n  color: #a0a0ab;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 0.85rem;\n  color: #fff;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  color: #fff;\n  outline: none;\n}\n/*# sourceMappingURL=finance-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinanceDashboardComponent, { className: "FinanceDashboardComponent", filePath: "src/app/components/finance/finance-dashboard.component.ts", lineNumber: 362 });
})();
export {
  FinanceDashboardComponent
};
//# sourceMappingURL=chunk-IQUKW2EL.js.map
