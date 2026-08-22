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
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-KWEQLBRN.js";
import {
  ApiService
} from "./chunk-HE5SAGTC.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
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
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZYG2ULWX.js";

// src/app/components/clients/client-detail.component.ts
var _c0 = () => ({ width: "92vw", maxWidth: "480px" });
var _c1 = (a0) => ["/deals", a0];
var _c2 = () => ({ label: "\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u064A\u0646\u0629 \u0627\u0644\u0645\u062D\u0644\u064A\u0629)", value: "cash" });
var _c3 = () => ({ label: "\u0646\u0642\u062F\u0627\u064B \u064A\u062F \u0628\u064A\u062F", value: "cash_hand" });
var _c4 = () => ({ label: "\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)", value: "instapay" });
var _c5 = () => ({ label: "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A", value: "bank_transfer" });
var _c6 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ClientDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0628\u0648\u0627\u0628\u0629 \u0648\u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0627\u0644\u0643\u0627\u0645\u0644...");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275element(7, "i", 15);
    \u0275\u0275text(8, " \u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 ");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailComponent_div_3_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function ClientDetailComponent_div_3_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPaymentModal());
    });
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2, " + \u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u0644\u0639\u0645\u064A\u0644 ");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailComponent_div_3_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.client.phone, "");
  }
}
function ClientDetailComponent_div_3_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind2(2, 1, ctx_r2.totalPaid / ctx_r2.totalBilled * 100, "1.0-0"), "% \u0645\u0633\u062F\u062F) ");
  }
}
function ClientDetailComponent_div_3_div_94_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72)(2, "a", 73);
    \u0275\u0275element(3, "i", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "span", 75);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 76);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 77);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 78);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 79);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 80);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "button", 81);
    \u0275\u0275element(25, "i", 82);
    \u0275\u0275text(26, " \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deal_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c1, deal_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", deal_r4.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((deal_r4.department == null ? null : deal_r4.department.name) || "\u0639\u0627\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 10, deal_r4.created_at, "yyyy/MM/dd") || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 13, deal_r4.calculated_total || deal_r4.total_price, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 16, deal_r4.calculated_paid || deal_r4.paid_amount, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 19, deal_r4.remaining_balance || 0, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "status-" + (deal_r4.status || "pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDealStatusLabel(deal_r4.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c1, deal_r4.id));
  }
}
function ClientDetailComponent_div_3_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "table", 70)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0639\u0627\u0642\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "\u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, ClientDetailComponent_div_3_div_94_tr_21_Template, 27, 26, "tr", 71);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r2.deals);
  }
}
function ClientDetailComponent_div_3_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0623\u0648 \u0639\u0642\u0648\u062F \u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644 \u062D\u062A\u0649 \u0627\u0644\u0622\u0646.");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailComponent_div_3_button_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function ClientDetailComponent_div_3_button_101_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPaymentModal());
    });
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275text(2, " \u0625\u0636\u0627\u0641\u0629 \u062F\u0641\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailComponent_div_3_div_102_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72);
    \u0275\u0275element(2, "i", 87);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 88);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 89);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 90);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 91);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, p_r6.payment_date, "yyyy/MM/dd") || \u0275\u0275pipeBind2(5, 8, p_r6.created_at, "yyyy/MM/dd"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 11, p_r6.amount, "1.2-2"), " \u062C.\u0645 ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getPaymentMethodLabel(p_r6.payment_method), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r6.receipt_ref || p_r6.reference_number || "\u0628\u062F\u0648\u0646 \u0645\u0631\u062C\u0639", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r6.deal_title || "\u0635\u0641\u0642\u0629 \u0639\u0627\u0645\u0629", " ");
  }
}
function ClientDetailComponent_div_3_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "table", 70)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u062F\u064A\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0631\u062C\u0639 / \u0627\u0644\u0625\u064A\u0635\u0627\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u0627\u0644\u0635\u0641\u0642\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, ClientDetailComponent_div_3_div_102_tr_15_Template, 16, 14, "tr", 71);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.payments);
  }
}
function ClientDetailComponent_div_3_div_103_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function ClientDetailComponent_div_3_div_103_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openPaymentModal());
    });
    \u0275\u0275text(1, " + \u062A\u0633\u062C\u064A\u0644 \u0623\u0648\u0644 \u062F\u0641\u0639\u0629 \u0645\u0627\u0644\u064A\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailComponent_div_3_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0644\u0645 \u064A\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0623\u064A \u062F\u0641\u0639\u0627\u062A \u0645\u0627\u0644\u064A\u0629 \u0645\u0633\u062F\u062F\u0629 \u0644\u0644\u0639\u0645\u064A\u0644 \u0628\u0639\u062F.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ClientDetailComponent_div_3_div_103_button_4_Template, 2, 0, "button", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r2.isClient());
  }
}
function ClientDetailComponent_div_3_div_111_tr_15_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r8.name);
  }
}
function ClientDetailComponent_div_3_div_111_tr_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275template(1, ClientDetailComponent_div_3_div_111_tr_15_div_7_span_1_Template, 2, 1, "span", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", task_r9.users);
  }
}
function ClientDetailComponent_div_3_div_111_tr_15_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u0633\u0646\u062F");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailComponent_div_3_div_111_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, ClientDetailComponent_div_3_div_111_tr_15_div_7_Template, 2, 1, "div", 95)(8, ClientDetailComponent_div_3_div_111_tr_15_span_8_Template, 2, 0, "span", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 77);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 97);
    \u0275\u0275element(14, "i", 98);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r9.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((task_r9.subCategory == null ? null : task_r9.subCategory.name_ar) || (task_r9.department == null ? null : task_r9.department.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", task_r9.users && task_r9.users.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !task_r9.users || task_r9.users.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 8, task_r9.client_price || 0, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.getTaskStatusClass(task_r9.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getTaskStatusIcon(task_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTaskStatusLabel(task_r9.status), " ");
  }
}
function ClientDetailComponent_div_3_div_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "table", 70)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0646\u0641\u0630");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0633\u0646\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0633\u0639\u0631 \u0627\u0644\u062E\u062F\u0645\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, ClientDetailComponent_div_3_div_111_tr_15_Template, 16, 11, "tr", 71);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.tasks);
  }
}
function ClientDetailComponent_div_3_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 103);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0625\u062C\u0631\u0627\u0626\u064A\u0629 \u0645\u0633\u0646\u062F\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644 \u062D\u0627\u0644\u064A\u0627\u064B.");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 16)(2, "button", 17);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275text(4, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275template(6, ClientDetailComponent_div_3_button_6_Template, 3, 0, "button", 19);
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function ClientDetailComponent_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadClientData());
    });
    \u0275\u0275element(8, "i", 21);
    \u0275\u0275text(9, " \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 22)(11, "div", 23)(12, "div", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 25)(15, "div", 26)(16, "h2");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 27);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 28)(21, "span", 29);
    \u0275\u0275element(22, "i", 30);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ClientDetailComponent_div_3_span_24_Template, 3, 1, "span", 31);
    \u0275\u0275elementStart(25, "span", 29);
    \u0275\u0275element(26, "i", 32);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 33)(30, "span", 34);
    \u0275\u0275element(31, "span", 35);
    \u0275\u0275text(32, " \u0628\u0648\u0627\u0628\u0629 \u0639\u0645\u064A\u0644 \u0646\u0634\u0637\u0629 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 36)(34, "div", 37)(35, "div", 38);
    \u0275\u0275element(36, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 40)(38, "span", 41);
    \u0275\u0275text(39, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0648\u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 42);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementStart(43, "small");
    \u0275\u0275text(44, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "span", 43);
    \u0275\u0275text(46, "\u0625\u062C\u0645\u0627\u0644\u064A \u0639\u0642\u0648\u062F \u0635\u0641\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 44)(48, "div", 38);
    \u0275\u0275element(49, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 40)(51, "span", 41);
    \u0275\u0275text(52, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639 \u0648\u0627\u0644\u0645\u0633\u062A\u0644\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 46);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementStart(56, "small");
    \u0275\u0275text(57, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, ClientDetailComponent_div_3_span_58_Template, 3, 4, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 48)(60, "div", 38);
    \u0275\u0275element(61, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 40)(63, "span", 41);
    \u0275\u0275text(64, "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0627\u0644\u0645\u0639\u0644\u0642");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 50);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "number");
    \u0275\u0275elementStart(68, "small");
    \u0275\u0275text(69, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "span", 51);
    \u0275\u0275text(71, "\u0645\u0633\u062A\u062D\u0642 \u0644\u0644\u062A\u062D\u0635\u064A\u0644");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 52)(73, "div", 38);
    \u0275\u0275element(74, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 40)(76, "span", 41);
    \u0275\u0275text(77, "\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0645\u0647\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 42);
    \u0275\u0275text(79);
    \u0275\u0275elementStart(80, "small");
    \u0275\u0275text(81, "\u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82);
    \u0275\u0275elementStart(83, "small");
    \u0275\u0275text(84, "\u0645\u0647\u0627\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "span", 54);
    \u0275\u0275text(86, "\u0639\u0642\u0648\u062F \u0648\u0645\u062E\u0631\u062C\u0627\u062A \u062A\u0646\u0641\u064A\u0630\u064A\u0629");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(87, "div", 55)(88, "div", 56)(89, "h3");
    \u0275\u0275element(90, "i", 57);
    \u0275\u0275text(91, " \u0635\u0641\u0642\u0627\u062A \u0648\u0639\u0642\u0648\u062F \u0627\u0644\u0639\u0645\u064A\u0644 (Deals & Contracts)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 58);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(94, ClientDetailComponent_div_3_div_94_Template, 22, 1, "div", 59)(95, ClientDetailComponent_div_3_div_95_Template, 4, 0, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 55)(97, "div", 56)(98, "h3");
    \u0275\u0275element(99, "i", 61);
    \u0275\u0275text(100, " \u0633\u062C\u0644 \u0627\u0644\u062A\u062D\u0635\u064A\u0644\u0627\u062A \u0648\u0625\u064A\u0635\u0627\u0644\u0627\u062A \u0627\u0644\u062F\u0641\u0639 (Payments Ledger)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(101, ClientDetailComponent_div_3_button_101_Template, 3, 0, "button", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(102, ClientDetailComponent_div_3_div_102_Template, 16, 1, "div", 59)(103, ClientDetailComponent_div_3_div_103_Template, 5, 1, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 55)(105, "div", 56)(106, "h3");
    \u0275\u0275element(107, "i", 63);
    \u0275\u0275text(108, " \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0644\u0644\u0639\u0645\u064A\u0644 (Tasks & Deliverables)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span", 64);
    \u0275\u0275text(110);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(111, ClientDetailComponent_div_3_div_111_Template, 16, 1, "div", 59)(112, ClientDetailComponent_div_3_div_112_Template, 4, 0, "div", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r2.isClient());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.getInitial());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.client.name || ctx_r2.client.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#CLIENT-", ctx_r2.client.id || ctx_r2.clientId, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.client.email || ctx_r2.client.client_email || "\u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u0631\u064A\u062F \u0645\u0633\u062C\u0644", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.client.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u0639\u0636\u0648 \u0645\u0646\u0630: ", \u0275\u0275pipeBind2(28, 22, ctx_r2.client.created_at, "yyyy/MM/dd") || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", "");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(42, 25, ctx_r2.totalBilled, "1.2-2"), " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(55, 28, ctx_r2.totalPaid, "1.2-2"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.totalBilled > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(67, 31, ctx_r2.remainingBalance, "1.2-2"), " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", ctx_r2.deals.length, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" / ", ctx_r2.tasks.length, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r2.deals.length, " \u0635\u0641\u0642\u0627\u062A \u0645\u0633\u0646\u062F\u0629");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.deals.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.deals.length === 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r2.isClient());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.payments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.payments.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.tasks.length, " \u0645\u0647\u0627\u0645");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tasks.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tasks.length === 0);
  }
}
function ClientDetailComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "label");
    \u0275\u0275text(2, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0642\u0629 / \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0645\u0631\u062A\u0628\u0637");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-dropdown", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("appendTo", "body")("options", ctx_r2.dealOptions);
  }
}
function ClientDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275template(1, ClientDetailComponent_div_6_div_1_Template, 4, 2, "div", 105);
    \u0275\u0275elementStart(2, "div", 106)(3, "label");
    \u0275\u0275text(4, "\u0645\u0628\u0644\u063A \u0627\u0644\u062F\u0641\u0639\u0629 (\u062C.\u0645) ");
    \u0275\u0275elementStart(5, "span", 107);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 108);
    \u0275\u0275elementStart(8, "small", 109);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 106)(12, "label");
    \u0275\u0275text(13, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-datepicker", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 106)(16, "label");
    \u0275\u0275text(17, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644 / \u0627\u0644\u062F\u0641\u0639 ");
    \u0275\u0275elementStart(18, "span", 107);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "p-dropdown", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 106)(22, "label");
    \u0275\u0275text(23, "\u0631\u0642\u0645 \u0627\u0644\u0625\u064A\u0635\u0627\u0644 / \u0627\u0644\u0645\u0631\u062C\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.deals.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", ctx_r2.remainingBalance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644: ", \u0275\u0275pipeBind2(10, 8, ctx_r2.remainingBalance, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(5);
    \u0275\u0275property("showIcon", true)("iconDisplay", "input")("appendTo", "body");
    \u0275\u0275advance(6);
    \u0275\u0275property("appendTo", "body")("options", \u0275\u0275pureFunction4(15, _c6, \u0275\u0275pureFunction0(11, _c2), \u0275\u0275pureFunction0(12, _c3), \u0275\u0275pureFunction0(13, _c4), \u0275\u0275pureFunction0(14, _c5)));
  }
}
var ClientDetailComponent = class _ClientDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  clientId = null;
  client = null;
  deals = [];
  tasks = [];
  payments = [];
  dealOptions = [];
  loading = true;
  submitting = false;
  totalBilled = 0;
  totalPaid = 0;
  remainingBalance = 0;
  showPaymentModal = false;
  paymentForm;
  ngOnInit() {
    this.initPaymentForm();
    this.route.params.subscribe((params) => {
      this.clientId = +params["id"];
      if (this.clientId) {
        this.loadClientData();
      }
    });
  }
  initPaymentForm() {
    this.paymentForm = this.fb.group({
      deal_id: [null],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      payment_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      payment_method: ["cash", Validators.required],
      receipt_ref: [""]
    });
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
  getInitial() {
    const name = this.client?.name || this.client?.client_name || "";
    return name ? name[0].toUpperCase() : "C";
  }
  getDealStatusLabel(status) {
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
  isTaskCompleted(status) {
    return ["completed", "done", "approved"].includes(status);
  }
  isTaskInProgress(status) {
    return ["in_progress", "content_creator"].includes(status);
  }
  isTaskInReview(status) {
    return ["in_review", "client_review", "client_feedback"].includes(status);
  }
  getTaskStatusLabel(status) {
    if (this.isTaskCompleted(status))
      return "\u0645\u0643\u062A\u0645\u0644\u0629 \u0648\u0645\u0639\u062A\u0645\u062F\u0629";
    if (this.isTaskInReview(status))
      return "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u0648\u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629";
    if (this.isTaskInProgress(status))
      return "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A";
    if (status === "cancelled")
      return "\u0645\u0644\u063A\u0627\u0629";
    return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";
  }
  getTaskStatusIcon(status) {
    if (this.isTaskCompleted(status))
      return "fa-circle-check text-emerald";
    if (this.isTaskInReview(status))
      return "fa-eye text-cyan";
    if (this.isTaskInProgress(status))
      return "fa-spinner fa-spin text-amber";
    if (status === "cancelled")
      return "fa-ban text-rose";
    return "fa-hourglass-start text-violet";
  }
  getTaskStatusClass(status) {
    if (this.isTaskCompleted(status))
      return "tstatus-done";
    if (this.isTaskInReview(status))
      return "tstatus-review";
    if (this.isTaskInProgress(status))
      return "tstatus-progress";
    if (status === "cancelled")
      return "tstatus-cancelled";
    return "tstatus-pending";
  }
  getPaymentMethodLabel(method) {
    switch (method) {
      case "instapay":
        return "\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)";
      case "bank_transfer":
        return "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A";
      case "cash_hand":
        return "\u0646\u0642\u062F\u0627\u064B \u064A\u062F \u0628\u064A\u062F";
      case "cash":
      default:
        return "\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u064A\u0646\u0629)";
    }
  }
  loadClientData() {
    if (!this.clientId)
      return;
    this.loading = true;
    this.apiService.getUsers("client").subscribe({
      next: (r) => {
        const users = r.data || [];
        const found = users.find((x) => x.id === this.clientId);
        if (found) {
          this.client = found;
        } else {
          this.client = {
            id: this.clientId,
            name: "\u0639\u0645\u064A\u0644 \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648 #" + this.clientId,
            email: "client" + this.clientId + "@mediaglow.com"
          };
        }
        this.fetchClientDealsAndTasks();
      },
      error: () => {
        this.client = {
          id: this.clientId,
          name: "\u0639\u0645\u064A\u0644 \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648 #" + this.clientId,
          email: "client" + this.clientId + "@mediaglow.com"
        };
        this.fetchClientDealsAndTasks();
      }
    });
  }
  fetchClientDealsAndTasks() {
    this.apiService.getDeals().subscribe({
      next: (allDeals) => {
        const cId = this.clientId;
        const cEmail = this.client?.email;
        const cName = this.client?.name;
        const clientDeals = (Array.isArray(allDeals) ? allDeals : []).filter((d) => d.client_id === cId || d.client?.id === cId || cEmail && d.client?.email === cEmail || cName && d.client?.name === cName);
        this.deals = clientDeals;
        this.dealOptions = [
          { label: "\u0639\u0627\u0645 / \u0631\u0635\u064A\u062F \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0628\u0627\u0634\u0631\u0629", value: null },
          ...this.deals.map((d) => ({ label: `${d.title} (\u0645\u062A\u0628\u0642\u064A: ${d.remaining_balance || 0} \u062C.\u0645)`, value: d.id }))
        ];
        const pList = [];
        this.deals.forEach((d) => {
          if (d.payments && Array.isArray(d.payments)) {
            d.payments.forEach((p) => pList.push(__spreadProps(__spreadValues({}, p), { deal_title: d.title })));
          }
        });
        this.payments = pList.sort((a, b) => new Date(b.created_at || b.payment_date).getTime() - new Date(a.created_at || a.payment_date).getTime());
        this.totalBilled = this.deals.reduce((acc, d) => acc + Number(d.calculated_total || d.total_price || 0), 0);
        this.totalPaid = this.deals.reduce((acc, d) => acc + Number(d.calculated_paid || d.paid_amount || 0), 0);
        this.remainingBalance = Math.max(0, this.totalBilled - this.totalPaid);
        this.apiService.getTasks().subscribe((allTasks) => {
          const dealIds = this.deals.map((d) => d.id);
          this.tasks = (Array.isArray(allTasks) ? allTasks : []).filter((t) => dealIds.includes(t.deal_id) && !t.parent_id);
          this.loading = false;
        });
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openPaymentModal() {
    if (!this.client)
      return;
    this.paymentForm.reset({
      deal_id: this.deals.length > 0 ? this.deals[0].id : null,
      amount: this.remainingBalance || 0,
      payment_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      payment_method: "cash"
    });
    this.showPaymentModal = true;
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
  savePayment() {
    if (this.paymentForm.invalid || !this.client)
      return;
    this.submitting = true;
    const payload = __spreadProps(__spreadValues({}, this.paymentForm.value), {
      payment_date: this.formatDatePayload(this.paymentForm.value.payment_date),
      client_id: this.client.id || this.clientId
    });
    this.apiService.storeClientPayment(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.showPaymentModal = false;
        this.loadClientData();
      },
      error: () => this.submitting = false
    });
  }
  static \u0275fac = function ClientDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailComponent, selectors: [["app-client-detail"]], decls: 12, vars: 15, consts: [[1, "client-detail-container"], ["class", "loading-shell", 4, "ngIf"], ["class", "error-shell", 4, "ngIf"], [4, "ngIf"], [3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo", "header"], [3, "ngSubmit", "formGroup"], ["style", "padding:10px 0; display:flex; flex-direction:column; gap:14px;", 4, "ngIf"], [1, "dialog-footer-actions"], ["type", "button", 1, "btn-dialog-cancel", 3, "click"], ["type", "submit", 1, "btn-dialog-submit", 3, "disabled"], [1, "loading-shell"], [1, "fa-solid", "fa-circle-notch", "fa-spin", 2, "font-size", "2.2rem", "color", "var(--violet-light)"], [1, "error-shell"], [1, "fa-solid", "fa-circle-exclamation"], ["routerLink", "/clients", 1, "btn-primary-gradient"], [1, "fa-solid", "fa-arrow-right"], [1, "top-nav-bar"], ["routerLink", "/clients", 1, "btn-glass-back"], [1, "top-nav-actions"], ["class", "btn-primary-gradient", 3, "click", 4, "ngIf"], [1, "btn-glass-purple", 3, "click"], [1, "fa-solid", "fa-rotate-right"], [1, "client-hero-card", "glass-panel", "margin-top"], [1, "hero-left-info"], [1, "client-av-lg"], [1, "client-titles"], [1, "name-row"], [1, "client-id-pill"], [1, "meta-row"], [1, "meta-item"], [1, "fa-solid", "fa-envelope"], ["class", "meta-item", 4, "ngIf"], [1, "fa-solid", "fa-calendar-day"], [1, "hero-right-status"], [1, "client-status-badge"], [1, "pulse-dot"], [1, "metrics-grid", "margin-top"], [1, "metric-card", "kpi-total"], [1, "kpi-icon-box"], [1, "fa-solid", "fa-file-invoice-dollar"], [1, "kpi-content"], [1, "kpi-title"], [1, "kpi-amount"], [1, "kpi-sub", "font-normal"], [1, "metric-card", "kpi-paid"], [1, "fa-solid", "fa-circle-check"], [1, "kpi-amount", "text-emerald"], ["class", "kpi-sub text-emerald", 4, "ngIf"], [1, "metric-card", "kpi-remaining"], [1, "fa-solid", "fa-hand-holding-dollar"], [1, "kpi-amount", "text-rose"], [1, "kpi-sub", "text-rose"], [1, "metric-card", "kpi-deals"], [1, "fa-solid", "fa-handshake"], [1, "kpi-sub"], [1, "section-card", "glass-panel", "margin-top"], [1, "section-head", "flex-between"], [1, "fa-solid", "fa-file-contract", 2, "color", "var(--violet-light)"], [1, "badge", "badge-v"], ["class", "table-wrap", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "fa-solid", "fa-receipt", 2, "color", "var(--emerald-light)"], ["class", "btn-sm-primary", 3, "click", 4, "ngIf"], [1, "fa-solid", "fa-list-check", 2, "color", "var(--teal-light)"], [1, "badge", "badge-t"], [1, "btn-primary-gradient", 3, "click"], [1, "fa-solid", "fa-money-bill-wave"], [1, "fa-solid", "fa-phone"], [1, "kpi-sub", "text-emerald"], [1, "table-wrap"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [2, "font-weight", "700", "color", "var(--text)"], ["title", "\u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0635\u0641\u0642\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644", 1, "deal-link-title", 3, "routerLink"], [1, "fa-solid", "fa-arrow-up-right-from-square", 2, "margin-left", "6px", "font-size", "0.8rem", "color", "var(--violet-light)"], [1, "dept-badge"], [2, "font-size", "0.8rem", "color", "var(--text-2)"], [2, "font-weight", "700"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], [1, "status-pill", 3, "ngClass"], ["title", "\u0641\u062A\u062D \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0643\u0627\u0645\u0644\u0647 \u0644\u0644\u0639\u0642\u062F", 1, "btn-action-view", 3, "routerLink"], [1, "fa-solid", "fa-eye"], [1, "empty-state"], [1, "fa-solid", "fa-file-circle-xmark"], [1, "btn-sm-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "fa-regular", "fa-calendar-check", 2, "color", "var(--emerald-light)", "margin-left", "6px"], [2, "font-weight", "800", "color", "var(--emerald-light)", "font-size", "0.95rem"], [1, "payment-method-badge"], [2, "font-family", "monospace", "color", "var(--text-2)"], [2, "color", "var(--text-2)", "font-weight", "600"], [1, "fa-solid", "fa-file-invoice"], ["class", "btn-sm-primary", "style", "margin-top:10px;", 3, "click", 4, "ngIf"], [1, "btn-sm-primary", 2, "margin-top", "10px", 3, "click"], ["class", "users-flex", 4, "ngIf"], ["style", "color:var(--text-3); font-size:0.75rem;", 4, "ngIf"], [1, "task-status-pill", 3, "ngClass"], [1, "fa-solid", 3, "ngClass"], [1, "users-flex"], ["class", "user-chip", 4, "ngFor", "ngForOf"], [1, "user-chip"], [2, "color", "var(--text-3)", "font-size", "0.75rem"], [1, "fa-solid", "fa-clipboard-check"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "14px"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "required"], ["type", "number", "pInputText", "", "formControlName", "amount", 3, "placeholder"], [2, "color", "var(--text-2)"], ["formControlName", "payment_date", "dateFormat", "yy-mm-dd", "placeholder", "\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F...", "styleClass", "w-full", 3, "showIcon", "iconDisplay", "appendTo"], ["formControlName", "payment_method", "optionLabel", "label", "optionValue", "value", 3, "appendTo", "options"], ["type", "text", "pInputText", "", "formControlName", "receipt_ref", "placeholder", "\u0645\u062B\u0627\u0644: TXN-998811"], ["formControlName", "deal_id", "optionLabel", "label", "optionValue", "value", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0642\u0629...", 3, "appendTo", "options"]], template: function ClientDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ClientDetailComponent_div_1_Template, 4, 0, "div", 1)(2, ClientDetailComponent_div_2_Template, 9, 0, "div", 2)(3, ClientDetailComponent_div_3_Template, 113, 34, "div", 3);
      \u0275\u0275elementStart(4, "p-dialog", 4);
      \u0275\u0275twoWayListener("visibleChange", function ClientDetailComponent_Template_p_dialog_visibleChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showPaymentModal, $event) || (ctx.showPaymentModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(5, "form", 5);
      \u0275\u0275listener("ngSubmit", function ClientDetailComponent_Template_form_ngSubmit_5_listener() {
        return ctx.savePayment();
      });
      \u0275\u0275template(6, ClientDetailComponent_div_6_Template, 25, 20, "div", 6);
      \u0275\u0275elementStart(7, "div", 7)(8, "button", 8);
      \u0275\u0275listener("click", function ClientDetailComponent_Template_button_click_8_listener() {
        return ctx.showPaymentModal = false;
      });
      \u0275\u0275text(9, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading && !ctx.client);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.client);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.client);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showPaymentModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body")("header", "\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0639\u0645\u064A\u0644: " + ((ctx.client == null ? null : ctx.client.name) || ""));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.paymentForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.client);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.paymentForm.invalid || ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.submitting ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629..." : "\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629", " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, DialogModule, Dialog, InputTextModule, InputText, DropdownModule, Dropdown, DatePickerModule, DatePicker], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.client-detail-container[_ngcontent-%COMP%] {\n  padding: 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.loading-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: var(--text-2);\n  font-size: 0.95rem;\n}\n.error-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 14px;\n  color: var(--text-2);\n  text-align: center;\n}\n.error-shell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--rose-light);\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.top-nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.btn-glass-back[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text);\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-glass-back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--violet-light);\n  border-color: var(--violet-light);\n  transform: translateX(3px);\n}\n.top-nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-primary-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border: none;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35);\n  transition: all 0.25s;\n  font-family: inherit;\n  text-decoration: none;\n}\n.btn-primary-gradient[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5);\n  transform: translateY(-2px);\n}\n.btn-glass-purple[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--text);\n  padding: 10px 16px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-glass-purple[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.client-hero-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  box-shadow: var(--shadow-sm);\n}\n.hero-left-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.client-av-lg[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #ffffff;\n  font-size: 1.6rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35);\n  flex-shrink: 0;\n}\n.client-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.name-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n}\n.client-id-pill[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  font-family: monospace;\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 3px 10px;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  color: var(--text-2);\n  font-size: 0.84rem;\n  flex-wrap: wrap;\n}\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  margin-left: 5px;\n}\n.client-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 18px;\n  border-radius: 100px;\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  font-size: 0.8rem;\n  font-weight: 800;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #34d399;\n  box-shadow: 0 0 10px #34d399;\n  animation: _ngcontent-%COMP%_pulse 1.8s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.3);\n  }\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 18px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.2s;\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.kpi-icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.kpi-total[_ngcontent-%COMP%]   .kpi-icon-box[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n}\n.kpi-paid[_ngcontent-%COMP%]   .kpi-icon-box[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n}\n.kpi-remaining[_ngcontent-%COMP%]   .kpi-icon-box[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n}\n.kpi-deals[_ngcontent-%COMP%]   .kpi-icon-box[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n}\n.kpi-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.kpi-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-2);\n  font-weight: 700;\n}\n.kpi-amount[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text);\n  line-height: 1.2;\n}\n.kpi-amount[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.text-emerald[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.text-rose[_ngcontent-%COMP%] {\n  color: #f43f5e;\n}\n.kpi-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--text-3);\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: var(--shadow-sm);\n}\n.section-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.08rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.btn-sm-primary[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-sm-primary[_ngcontent-%COMP%]:hover {\n  background: var(--violet);\n  color: #ffffff;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 900px;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 14px 18px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.74rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.88rem;\n  color: var(--text);\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.deal-link-title[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-weight: 700;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.deal-link-title[_ngcontent-%COMP%]:hover {\n  color: var(--violet-light);\n  text-decoration: underline;\n}\n.btn-action-view[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--violet-light);\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action-view[_ngcontent-%COMP%]:hover {\n  background: var(--violet);\n  color: #ffffff;\n}\n.dept-badge[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 3px 9px;\n  border-radius: 6px;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.payment-method-badge[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--text-2);\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.users-flex[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.user-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.72rem;\n  color: var(--text-2);\n}\n.status-pill[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 100px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n  border: 1px solid rgba(244, 63, 94, 0.3);\n}\n.task-status-pill[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 100px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.tstatus-done[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.tstatus-progress[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.tstatus-review[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  color: #67e8f9;\n  border: 1px solid rgba(6, 182, 212, 0.3);\n}\n.tstatus-pending[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: #a5b4fc;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.tstatus-cancelled[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.15);\n  color: #f87171;\n  border: 1px solid rgba(244, 63, 94, 0.3);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: var(--text-2);\n  background: rgba(0, 0, 0, 0.1);\n  border: 1px dashed var(--border);\n  border-radius: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  margin-bottom: 8px;\n  opacity: 0.4;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  margin: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\nbody.light-theme[_nghost-%COMP%]   .client-detail-container[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .client-detail-container[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-glass-back[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-glass-back[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #1e293b !important;\n  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05);\n}\nbody.light-theme[_nghost-%COMP%]   .btn-glass-back[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-glass-back[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9 !important;\n  color: #4f46e5 !important;\n  border-color: #6366f1 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .client-hero-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .client-hero-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .client-av-lg[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .client-av-lg[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .name-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .name-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .meta-row[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .meta-row[_ngcontent-%COMP%] {\n  color: #475569 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .kpi-title[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-title[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .kpi-amount[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-amount[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .section-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .section-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .section-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .section-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  color: #475569 !important;\n  border-bottom-color: #e2e8f0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-color: #f1f5f9 !important;\n  color: #1e293b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .deal-link-title[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .deal-link-title[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .deal-link-title[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .deal-link-title[_ngcontent-%COMP%]:hover {\n  color: #4f46e5 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .payment-method-badge[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .payment-method-badge[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .user-chip[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .user-chip[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n  color: #475569 !important;\n}\n/*# sourceMappingURL=client-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDetailComponent, [{
    type: Component,
    args: [{ selector: "app-client-detail", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      DialogModule,
      InputTextModule,
      DropdownModule,
      DatePickerModule
    ], template: `
    <div class="client-detail-container">
      <!-- Loading State -->
      <div class="loading-shell" *ngIf="loading && !client">
        <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2.2rem; color: var(--violet-light);"></i>
        <p>\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0628\u0648\u0627\u0628\u0629 \u0648\u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0627\u0644\u0643\u0627\u0645\u0644...</p>
      </div>

      <!-- Error State -->
      <div class="error-shell" *ngIf="!loading && !client">
        <i class="fa-solid fa-circle-exclamation"></i>
        <h3>\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644</h3>
        <p>\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644.</p>
        <button class="btn-primary-gradient" routerLink="/clients">
          <i class="fa-solid fa-arrow-right"></i> \u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621
        </button>
      </div>

      <!-- Main Portal Content -->
      <div *ngIf="client">
        <!-- Top Back Navigation & Quick Action Bar -->
        <div class="top-nav-bar">
          <button class="btn-glass-back" routerLink="/clients">
            <i class="fa-solid fa-arrow-right"></i> \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621
          </button>

          <div class="top-nav-actions">
            <button class="btn-primary-gradient" *ngIf="!isClient()" (click)="openPaymentModal()">
              <i class="fa-solid fa-money-bill-wave"></i> + \u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u0644\u0639\u0645\u064A\u0644
            </button>
            <button class="btn-glass-purple" (click)="loadClientData()">
              <i class="fa-solid fa-rotate-right"></i> \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A
            </button>
          </div>
        </div>

        <!-- Hero Client Profile Header Card -->
        <div class="client-hero-card glass-panel margin-top">
          <div class="hero-left-info">
            <div class="client-av-lg">{{ getInitial() }}</div>
            <div class="client-titles">
              <div class="name-row">
                <h2>{{ client.name || client.client_name }}</h2>
                <span class="client-id-pill">#CLIENT-{{ client.id || clientId }}</span>
              </div>
              <div class="meta-row">
                <span class="meta-item"><i class="fa-solid fa-envelope"></i> {{ client.email || client.client_email || '\u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u0631\u064A\u062F \u0645\u0633\u062C\u0644' }}</span>
                <span class="meta-item" *ngIf="client.phone"><i class="fa-solid fa-phone"></i> {{ client.phone }}</span>
                <span class="meta-item"><i class="fa-solid fa-calendar-day"></i> \u0639\u0636\u0648 \u0645\u0646\u0630: {{ (client.created_at | date:'yyyy/MM/dd') || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</span>
              </div>
            </div>
          </div>
          
          <div class="hero-right-status">
            <span class="client-status-badge">
              <span class="pulse-dot"></span> \u0628\u0648\u0627\u0628\u0629 \u0639\u0645\u064A\u0644 \u0646\u0634\u0637\u0629
            </span>
          </div>
        </div>

        <!-- Financial & Work KPIs Grid -->
        <div class="metrics-grid margin-top">
          <div class="metric-card kpi-total">
            <div class="kpi-icon-box"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0648\u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A</span>
              <span class="kpi-amount">{{ totalBilled | number:'1.2-2' }} <small>\u062C.\u0645</small></span>
              <span class="kpi-sub font-normal">\u0625\u062C\u0645\u0627\u0644\u064A \u0639\u0642\u0648\u062F \u0635\u0641\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644</span>
            </div>
          </div>

          <div class="metric-card kpi-paid">
            <div class="kpi-icon-box"><i class="fa-solid fa-circle-check"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639 \u0648\u0627\u0644\u0645\u0633\u062A\u0644\u0645</span>
              <span class="kpi-amount text-emerald">{{ totalPaid | number:'1.2-2' }} <small>\u062C.\u0645</small></span>
              <span class="kpi-sub text-emerald" *ngIf="totalBilled > 0">
                ({{ ((totalPaid / totalBilled) * 100) | number:'1.0-0' }}% \u0645\u0633\u062F\u062F)
              </span>
            </div>
          </div>

          <div class="metric-card kpi-remaining">
            <div class="kpi-icon-box"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0627\u0644\u0645\u0639\u0644\u0642</span>
              <span class="kpi-amount text-rose">{{ remainingBalance | number:'1.2-2' }} <small>\u062C.\u0645</small></span>
              <span class="kpi-sub text-rose">\u0645\u0633\u062A\u062D\u0642 \u0644\u0644\u062A\u062D\u0635\u064A\u0644</span>
            </div>
          </div>

          <div class="metric-card kpi-deals">
            <div class="kpi-icon-box"><i class="fa-solid fa-handshake"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0645\u0647\u0627\u0645</span>
              <span class="kpi-amount">{{ deals.length }} <small>\u0635\u0641\u0642\u0627\u062A</small> / {{ tasks.length }} <small>\u0645\u0647\u0627\u0645</small></span>
              <span class="kpi-sub">\u0639\u0642\u0648\u062F \u0648\u0645\u062E\u0631\u062C\u0627\u062A \u062A\u0646\u0641\u064A\u0630\u064A\u0629</span>
            </div>
          </div>
        </div>

        <!-- Section 1: Deals & Contracts -->
        <div class="section-card glass-panel margin-top">
          <div class="section-head flex-between">
            <h3><i class="fa-solid fa-file-contract" style="color:var(--violet-light)"></i> \u0635\u0641\u0642\u0627\u062A \u0648\u0639\u0642\u0648\u062F \u0627\u0644\u0639\u0645\u064A\u0644 (Deals & Contracts)</h3>
            <span class="badge badge-v">{{ deals.length }} \u0635\u0641\u0642\u0627\u062A \u0645\u0633\u0646\u062F\u0629</span>
          </div>

          <div class="table-wrap" *ngIf="deals.length > 0">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 \u0648\u0627\u0644\u0639\u0642\u062F</th>
                  <th>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</th>
                  <th>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0639\u0627\u0642\u062F</th>
                  <th>\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629</th>
                  <th>\u0627\u0644\u0645\u062F\u0641\u0648\u0639</th>
                  <th>\u0627\u0644\u0645\u062A\u0628\u0642\u064A</th>
                  <th>\u0627\u0644\u062D\u0627\u0644\u0629</th>
                  <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let deal of deals">
                  <td style="font-weight:700; color:var(--text)">
                    <a [routerLink]="['/deals', deal.id]" class="deal-link-title" title="\u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0635\u0641\u0642\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644">
                      <i class="fa-solid fa-arrow-up-right-from-square" style="margin-left:6px; font-size:0.8rem; color:var(--violet-light);"></i>
                      {{ deal.title }}
                    </a>
                  </td>
                  <td><span class="dept-badge">{{ deal.department?.name || '\u0639\u0627\u0645' }}</span></td>
                  <td style="font-size:0.8rem; color:var(--text-2);">
                    {{ (deal.created_at | date:'yyyy/MM/dd') || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}
                  </td>
                  <td style="font-weight:700;">{{ (deal.calculated_total || deal.total_price) | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--emerald-light); font-weight:700;">{{ (deal.calculated_paid || deal.paid_amount) | number:'1.2-2' }} \u062C.\u0645</td>
                  <td style="color:var(--rose-light); font-weight:700;">{{ (deal.remaining_balance || 0) | number:'1.2-2' }} \u062C.\u0645</td>
                  <td>
                    <span class="status-pill" [ngClass]="'status-' + (deal.status || 'pending')">
                      {{ getDealStatusLabel(deal.status) }}
                    </span>
                  </td>
                  <td>
                    <button class="btn-action-view" [routerLink]="['/deals', deal.id]" title="\u0641\u062A\u062D \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0643\u0627\u0645\u0644\u0647 \u0644\u0644\u0639\u0642\u062F">
                      <i class="fa-solid fa-eye"></i> \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="deals.length === 0" class="empty-state">
            <i class="fa-solid fa-file-circle-xmark"></i>
            <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0623\u0648 \u0639\u0642\u0648\u062F \u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644 \u062D\u062A\u0649 \u0627\u0644\u0622\u0646.</p>
          </div>
        </div>

        <!-- Section 2: Payments Ledger -->
        <div class="section-card glass-panel margin-top">
          <div class="section-head flex-between">
            <h3><i class="fa-solid fa-receipt" style="color:var(--emerald-light)"></i> \u0633\u062C\u0644 \u0627\u0644\u062A\u062D\u0635\u064A\u0644\u0627\u062A \u0648\u0625\u064A\u0635\u0627\u0644\u0627\u062A \u0627\u0644\u062F\u0641\u0639 (Payments Ledger)</h3>
            <button class="btn-sm-primary" *ngIf="!isClient()" (click)="openPaymentModal()">
              <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u062F\u0641\u0639\u0629 \u062C\u062F\u064A\u062F\u0629
            </button>
          </div>

          <div class="table-wrap" *ngIf="payments.length > 0">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u062F\u064A\u062F</th>
                  <th>\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062F\u0641\u0648\u0639</th>
                  <th>\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644</th>
                  <th>\u0631\u0642\u0645 \u0627\u0644\u0645\u0631\u062C\u0639 / \u0627\u0644\u0625\u064A\u0635\u0627\u0644</th>
                  <th>\u0627\u0644\u0635\u0641\u0642\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of payments">
                  <td style="font-weight:700; color:var(--text);">
                    <i class="fa-regular fa-calendar-check" style="color:var(--emerald-light); margin-left:6px;"></i>
                    {{ (p.payment_date | date:'yyyy/MM/dd') || (p.created_at | date:'yyyy/MM/dd') }}
                  </td>
                  <td style="font-weight:800; color:var(--emerald-light); font-size:0.95rem;">
                    {{ p.amount | number:'1.2-2' }} \u062C.\u0645
                  </td>
                  <td>
                    <span class="payment-method-badge">
                      {{ getPaymentMethodLabel(p.payment_method) }}
                    </span>
                  </td>
                  <td style="font-family:monospace; color:var(--text-2);">
                    {{ p.receipt_ref || p.reference_number || '\u0628\u062F\u0648\u0646 \u0645\u0631\u062C\u0639' }}
                  </td>
                  <td style="color:var(--text-2); font-weight:600;">
                    {{ p.deal_title || '\u0635\u0641\u0642\u0629 \u0639\u0627\u0645\u0629' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="payments.length === 0" class="empty-state">
            <i class="fa-solid fa-file-invoice"></i>
            <p>\u0644\u0645 \u064A\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0623\u064A \u062F\u0641\u0639\u0627\u062A \u0645\u0627\u0644\u064A\u0629 \u0645\u0633\u062F\u062F\u0629 \u0644\u0644\u0639\u0645\u064A\u0644 \u0628\u0639\u062F.</p>
            <button class="btn-sm-primary" *ngIf="!isClient()" style="margin-top:10px;" (click)="openPaymentModal()">
              + \u062A\u0633\u062C\u064A\u0644 \u0623\u0648\u0644 \u062F\u0641\u0639\u0629 \u0645\u0627\u0644\u064A\u0629
            </button>
          </div>
        </div>

        <!-- Section 3: Tasks Breakdown -->
        <div class="section-card glass-panel margin-top">
          <div class="section-head flex-between">
            <h3><i class="fa-solid fa-list-check" style="color:var(--teal-light)"></i> \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0644\u0644\u0639\u0645\u064A\u0644 (Tasks & Deliverables)</h3>
            <span class="badge badge-t">{{ tasks.length }} \u0645\u0647\u0627\u0645</span>
          </div>

          <div class="table-wrap" *ngIf="tasks.length > 0">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629</th>
                  <th>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0646\u0641\u0630</th>
                  <th>\u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0633\u0646\u062F</th>
                  <th>\u0633\u0639\u0631 \u0627\u0644\u062E\u062F\u0645\u0629</th>
                  <th>\u0627\u0644\u062D\u0627\u0644\u0629 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let task of tasks">
                  <td style="font-weight:700; color:var(--text)">{{ task.title }}</td>
                  <td><span class="dept-badge">{{ task.subCategory?.name_ar || task.department?.name || '-' }}</span></td>
                  <td>
                    <div class="users-flex" *ngIf="task.users && task.users.length > 0">
                      <span class="user-chip" *ngFor="let u of task.users">{{ u.name }}</span>
                    </div>
                    <span *ngIf="!task.users || task.users.length === 0" style="color:var(--text-3); font-size:0.75rem;">\u063A\u064A\u0631 \u0645\u0633\u0646\u062F</span>
                  </td>
                  <td style="font-weight:700;">{{ (task.client_price || 0) | number:'1.2-2' }} \u062C.\u0645</td>
                  <td>
                    <span class="task-status-pill" [ngClass]="getTaskStatusClass(task.status)">
                      <i class="fa-solid" [ngClass]="getTaskStatusIcon(task.status)"></i>
                      {{ getTaskStatusLabel(task.status) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="tasks.length === 0" class="empty-state">
            <i class="fa-solid fa-clipboard-check"></i>
            <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0625\u062C\u0631\u0627\u0626\u064A\u0629 \u0645\u0633\u0646\u062F\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644 \u062D\u0627\u0644\u064A\u0627\u064B.</p>
          </div>
        </div>

      </div>

      <!-- PrimeNG Dialog: Add Payment for Client -->
      <p-dialog [(visible)]="showPaymentModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0639\u0645\u064A\u0644: ' + (client?.name || '')" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;" *ngIf="client">
            <div class="form-group" *ngIf="deals.length > 0">
              <label>\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0642\u0629 / \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0645\u0631\u062A\u0628\u0637</label>
              <p-dropdown
                formControlName="deal_id"
                [appendTo]="'body'"
                [options]="dealOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0642\u0629..."
              ></p-dropdown>
            </div>

            <div class="form-group">
              <label>\u0645\u0628\u0644\u063A \u0627\u0644\u062F\u0641\u0639\u0629 (\u062C.\u0645) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" [placeholder]="remainingBalance" />
              <small style="color:var(--text-2);">\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644: {{ remainingBalance | number:'1.2-2' }} \u062C.\u0645</small>
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
            <button type="button" class="btn-dialog-cancel" (click)="showPaymentModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="paymentForm.invalid || submitting">
              {{ submitting ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629...' : '\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629' }}
            </button>
          </div>
        </form>
      </p-dialog>
    </div>
  `, styles: ['/* angular:styles/component:css;bb4098fb4e108d5c6263c3e661827327e7a01a39cc70b0d35d1e9535c1177d8f;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/clients/client-detail.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.client-detail-container {\n  padding: 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.loading-shell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: var(--text-2);\n  font-size: 0.95rem;\n}\n.error-shell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 14px;\n  color: var(--text-2);\n  text-align: center;\n}\n.error-shell i {\n  font-size: 3rem;\n  color: var(--rose-light);\n}\n.margin-top {\n  margin-top: 24px;\n}\n.top-nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.btn-glass-back {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text);\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-glass-back:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--violet-light);\n  border-color: var(--violet-light);\n  transform: translateX(3px);\n}\n.top-nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-primary-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border: none;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35);\n  transition: all 0.25s;\n  font-family: inherit;\n  text-decoration: none;\n}\n.btn-primary-gradient:hover {\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5);\n  transform: translateY(-2px);\n}\n.btn-glass-purple {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--text);\n  padding: 10px 16px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-glass-purple:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.client-hero-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  box-shadow: var(--shadow-sm);\n}\n.hero-left-info {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.client-av-lg {\n  width: 62px;\n  height: 62px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #ffffff;\n  font-size: 1.6rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35);\n  flex-shrink: 0;\n}\n.client-titles {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.name-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.name-row h2 {\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n}\n.client-id-pill {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  font-family: monospace;\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 3px 10px;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.meta-row {\n  display: flex;\n  gap: 18px;\n  color: var(--text-2);\n  font-size: 0.84rem;\n  flex-wrap: wrap;\n}\n.meta-item i {\n  color: var(--violet-light);\n  margin-left: 5px;\n}\n.client-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 18px;\n  border-radius: 100px;\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  font-size: 0.8rem;\n  font-weight: 800;\n}\n.pulse-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #34d399;\n  box-shadow: 0 0 10px #34d399;\n  animation: pulse 1.8s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.3);\n  }\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 18px;\n}\n.metric-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.2s;\n}\n.metric-card:hover {\n  transform: translateY(-2px);\n}\n.kpi-icon-box {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.kpi-total .kpi-icon-box {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n}\n.kpi-paid .kpi-icon-box {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n}\n.kpi-remaining .kpi-icon-box {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n}\n.kpi-deals .kpi-icon-box {\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n}\n.kpi-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.kpi-title {\n  font-size: 0.78rem;\n  color: var(--text-2);\n  font-weight: 700;\n}\n.kpi-amount {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text);\n  line-height: 1.2;\n}\n.kpi-amount small {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.text-emerald {\n  color: #34d399;\n}\n.text-rose {\n  color: #f43f5e;\n}\n.kpi-sub {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--text-3);\n}\n.section-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: var(--shadow-sm);\n}\n.section-head h3 {\n  font-size: 1.08rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.btn-sm-primary {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-sm-primary:hover {\n  background: var(--violet);\n  color: #ffffff;\n}\n.table-wrap {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.crm-table {\n  width: 100%;\n  min-width: 900px;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 14px 18px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.74rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 14px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.88rem;\n  color: var(--text);\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.deal-link-title {\n  color: var(--text);\n  font-weight: 700;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.deal-link-title:hover {\n  color: var(--violet-light);\n  text-decoration: underline;\n}\n.btn-action-view {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--violet-light);\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action-view:hover {\n  background: var(--violet);\n  color: #ffffff;\n}\n.dept-badge {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 3px 9px;\n  border-radius: 6px;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.payment-method-badge {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--text-2);\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.users-flex {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.user-chip {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.72rem;\n  color: var(--text-2);\n}\n.status-pill {\n  font-size: 0.74rem;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 100px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.status-pending {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-active {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.status-completed {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.status-cancelled {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n  border: 1px solid rgba(244, 63, 94, 0.3);\n}\n.task-status-pill {\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 100px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.tstatus-done {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.tstatus-progress {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.tstatus-review {\n  background: rgba(6, 182, 212, 0.15);\n  color: #67e8f9;\n  border: 1px solid rgba(6, 182, 212, 0.3);\n}\n.tstatus-pending {\n  background: rgba(99, 102, 241, 0.15);\n  color: #a5b4fc;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.tstatus-cancelled {\n  background: rgba(244, 63, 94, 0.15);\n  color: #f87171;\n  border: 1px solid rgba(244, 63, 94, 0.3);\n}\n.empty-state {\n  text-align: center;\n  padding: 32px 16px;\n  color: var(--text-2);\n  background: rgba(0, 0, 0, 0.1);\n  border: 1px dashed var(--border);\n  border-radius: 14px;\n}\n.empty-state i {\n  font-size: 2.2rem;\n  margin-bottom: 8px;\n  opacity: 0.4;\n  display: block;\n}\n.empty-state p {\n  font-size: 0.86rem;\n  margin: 0;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.required {\n  color: var(--rose-light);\n}\n:host-context(body.light-theme) .client-detail-container {\n  background: #f8fafc !important;\n}\n:host-context(body.light-theme) .btn-glass-back {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #1e293b !important;\n  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05);\n}\n:host-context(body.light-theme) .btn-glass-back:hover {\n  background: #f1f5f9 !important;\n  color: #4f46e5 !important;\n  border-color: #6366f1 !important;\n}\n:host-context(body.light-theme) .client-hero-card {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .client-av-lg {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed) !important;\n}\n:host-context(body.light-theme) .name-row h2 {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .meta-row {\n  color: #475569 !important;\n}\n:host-context(body.light-theme) .metric-card {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .kpi-title {\n  color: #64748b !important;\n}\n:host-context(body.light-theme) .kpi-amount {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .section-card {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .section-head h3 {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .crm-table th {\n  background: #f8fafc !important;\n  color: #475569 !important;\n  border-bottom-color: #e2e8f0 !important;\n}\n:host-context(body.light-theme) .crm-table td {\n  border-bottom-color: #f1f5f9 !important;\n  color: #1e293b !important;\n}\n:host-context(body.light-theme) .deal-link-title {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .deal-link-title:hover {\n  color: #4f46e5 !important;\n}\n:host-context(body.light-theme) .payment-method-badge {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\n:host-context(body.light-theme) .user-chip {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\n:host-context(body.light-theme) .empty-state {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n  color: #475569 !important;\n}\n/*# sourceMappingURL=client-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailComponent, { className: "ClientDetailComponent", filePath: "src/app/components/clients/client-detail.component.ts", lineNumber: 474 });
})();
export {
  ClientDetailComponent
};
//# sourceMappingURL=chunk-GWXKQBK6.js.map
