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
  Location,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZYG2ULWX.js";

// src/app/components/deals/deal-detail.component.ts
var _c0 = () => ({ width: "92vw", maxWidth: "480px" });
var _c1 = (a0) => ["/clients", a0];
var _c2 = () => ({ label: "\u0643\u0627\u0634 (\u0627\u0644\u062E\u0632\u064A\u0646\u0629 \u0627\u0644\u0645\u062D\u0644\u064A\u0629)", value: "cash" });
var _c3 = () => ({ label: "\u0646\u0642\u062F\u0627\u064B \u064A\u062F \u0628\u064A\u062F", value: "cash_hand" });
var _c4 = () => ({ label: "\u0625\u0646\u0633\u062A\u0627 \u0628\u0627\u064A (InstaPay)", value: "instapay" });
var _c5 = () => ({ label: "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A", value: "bank_transfer" });
var _c6 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function DealDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0643\u0627\u0641\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0642\u062F \u0648\u0627\u0644\u0635\u0641\u0642\u0629...");
    \u0275\u0275elementEnd()();
  }
}
function DealDetailComponent_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function DealDetailComponent_div_2_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPaymentModal());
    });
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2, " + \u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function DealDetailComponent_div_2_a_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, ctx_r1.deal.client_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.deal.client == null ? null : ctx_r1.deal.client.name) || "\u0639\u0645\u064A\u0644 \u0639\u0627\u0645", " ");
  }
}
function DealDetailComponent_div_2_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r1.deal.client == null ? null : ctx_r1.deal.client.name) || "\u0639\u0645\u064A\u0644 \u0639\u0627\u0645");
  }
}
function DealDetailComponent_div_2_small_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deal.client == null ? null : ctx_r1.deal.client.email);
  }
}
function DealDetailComponent_div_2_small_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u0639\u0645\u0648\u0644\u0629: ", ctx_r1.deal.sales_commission_value, " ", ctx_r1.deal.sales_commission_type === "percentage" ? "%" : "\u062C.\u0645", " ");
  }
}
function DealDetailComponent_div_2_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind2(2, 1, (ctx_r1.deal.calculated_paid || ctx_r1.deal.paid_amount) / (ctx_r1.deal.calculated_total || ctx_r1.deal.total_price) * 100, "1.0-0"), "% \u062A\u0645 \u062A\u0633\u062F\u064A\u062F\u0647) ");
  }
}
function DealDetailComponent_div_2_span_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind2(2, 1, ctx_r1.getCompletedTasksCount() / ctx_r1.deal.tasks.length * 100, "1.0-0"), "% \u0645\u0643\u062A\u0645\u0644) ");
  }
}
function DealDetailComponent_div_2_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 75);
    \u0275\u0275text(2, "\u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0637\u0627\u062A:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.deal.agreed_scope);
  }
}
function DealDetailComponent_div_2_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span", 75);
    \u0275\u0275text(2, "\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.deal.description);
  }
}
function DealDetailComponent_div_2_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, " \u0644\u0645 \u064A\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0648 \u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0645\u0643\u062A\u0648\u0628\u0629 \u0644\u0644\u0646\u0637\u0627\u0642 \u0641\u064A \u0627\u0644\u0639\u0642\u062F \u0623\u062B\u0646\u0627\u0621 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0635\u0641\u0642\u0629. ");
    \u0275\u0275elementEnd();
  }
}
function DealDetailComponent_div_2_button_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function DealDetailComponent_div_2_button_121_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPaymentModal());
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275text(2, " \u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function DealDetailComponent_div_2_div_122_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275element(2, "i", 84);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 85);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 86);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 87);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 88);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, p_r5.payment_date, "yyyy/MM/dd") || \u0275\u0275pipeBind2(5, 8, p_r5.created_at, "yyyy/MM/dd"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 11, p_r5.amount, "1.2-2"), " \u062C.\u0645 ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPaymentMethodLabel(p_r5.payment_method), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r5.receipt_ref || p_r5.reference_number || "\u0628\u062F\u0648\u0646 \u0631\u0642\u0645 \u0645\u0631\u062C\u0639", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 14, p_r5.created_at, "yyyy/MM/dd - hh:mm a") || "-", " ");
  }
}
function DealDetailComponent_div_2_div_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 81)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u062F\u064A\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644 / \u0627\u0644\u062F\u0641\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0631\u062C\u0639 / \u0627\u0644\u0625\u064A\u0635\u0627\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u064A\u062F \u0628\u0627\u0644\u0633\u064A\u0633\u062A\u0645");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, DealDetailComponent_div_2_div_122_tr_15_Template, 17, 17, "tr", 82);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.deal.payments);
  }
}
function DealDetailComponent_div_2_div_123_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function DealDetailComponent_div_2_div_123_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPaymentModal());
    });
    \u0275\u0275text(1, " + \u062A\u0633\u062C\u064A\u0644 \u0623\u0648\u0644 \u062F\u0641\u0639\u0629 \u0645\u0627\u0644\u064A\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function DealDetailComponent_div_2_div_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275elementStart(2, "div", 83);
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u064A \u062A\u062D\u0635\u064A\u0644\u0627\u062A \u0645\u0633\u0628\u0642\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 91);
    \u0275\u0275text(5, "\u0644\u0645 \u064A\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0623\u064A \u0623\u0642\u0633\u0627\u0637 \u0623\u0648 \u062F\u0641\u0639\u0627\u062A \u0645\u0627\u0644\u064A\u0629 \u0644\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u0642\u0629 \u062D\u062A\u0649 \u0627\u0644\u0622\u0646.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DealDetailComponent_div_2_div_123_button_6_Template, 2, 0, "button", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.isClient());
  }
}
function DealDetailComponent_div_2_div_131_tr_15_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r7.name);
  }
}
function DealDetailComponent_div_2_div_131_tr_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275template(1, DealDetailComponent_div_2_div_131_tr_15_div_7_span_1_Template, 2, 1, "span", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", t_r8.users);
  }
}
function DealDetailComponent_div_2_div_131_tr_15_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u0633\u0646\u062F");
    \u0275\u0275elementEnd();
  }
}
function DealDetailComponent_div_2_div_131_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, DealDetailComponent_div_2_div_131_tr_15_div_7_Template, 2, 1, "div", 95)(8, DealDetailComponent_div_2_div_131_tr_15_span_8_Template, 2, 0, "span", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 97);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 98);
    \u0275\u0275element(14, "i", 99);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((t_r8.department == null ? null : t_r8.department.name) || "\u0639\u0627\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r8.users && t_r8.users.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r8.users || t_r8.users.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 8, t_r8.created_at, "yyyy/MM/dd") || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getTaskStatusClass(t_r8.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getTaskStatusIcon(t_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTaskStatusLabel(t_r8.status), " ");
  }
}
function DealDetailComponent_div_2_div_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 81)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0646\u0641\u0630");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0633\u0646\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621 / \u0627\u0644\u0645\u0648\u0639\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u0646\u062C\u0627\u0632");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, DealDetailComponent_div_2_div_131_tr_15_Template, 16, 11, "tr", 82);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.deal.tasks);
  }
}
function DealDetailComponent_div_2_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275elementStart(2, "div", 83);
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u0633\u0646\u062F\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 91);
    \u0275\u0275text(5, "\u0644\u0645 \u062A\u0642\u0645 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0628\u0646\u0634\u0631 \u0645\u0647\u0627\u0645 \u062A\u0627\u0628\u0639\u0629 \u0644\u062A\u0631\u062E\u064A\u0635 \u0648\u062A\u0646\u0641\u064A\u0630 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u0642\u0629 \u0628\u0639\u062F.");
    \u0275\u0275elementEnd()();
  }
}
function DealDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 11)(2, "button", 12);
    \u0275\u0275listener("click", function DealDetailComponent_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(3, "i", 13);
    \u0275\u0275text(4, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275template(6, DealDetailComponent_div_2_button_6_Template, 3, 0, "button", 15);
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275listener("click", function DealDetailComponent_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275element(8, "i", 17);
    \u0275\u0275text(9, " \u062A\u062D\u062F\u064A\u062B ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 18)(11, "div", 19)(12, "div", 20)(13, "span", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h2");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 23)(20, "span");
    \u0275\u0275element(21, "i", 24);
    \u0275\u0275text(22, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0639\u0627\u0642\u062F: ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275element(27, "i", 25);
    \u0275\u0275text(28, " \u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B: ");
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 26)(33, "div", 27)(34, "div", 28);
    \u0275\u0275element(35, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 30)(37, "span", 31);
    \u0275\u0275text(38, "\u0627\u0644\u0639\u0645\u064A\u0644 \u0648\u0635\u0627\u062D\u0628 \u0627\u0644\u0635\u0641\u0642\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong", 32);
    \u0275\u0275template(40, DealDetailComponent_div_2_a_40_Template, 2, 4, "a", 33)(41, DealDetailComponent_div_2_span_41_Template, 2, 1, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, DealDetailComponent_div_2_small_42_Template, 2, 1, "small", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 27)(44, "div", 28);
    \u0275\u0275element(45, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 30)(47, "span", 31);
    \u0275\u0275text(48, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u0633\u0624\u0648\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "strong", 32);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 27)(52, "div", 28);
    \u0275\u0275element(53, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 30)(55, "span", 31);
    \u0275\u0275text(56, "\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "strong", 32);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, DealDetailComponent_div_2_small_59_Template, 2, 2, "small", 37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 38)(61, "div", 39)(62, "div", 40);
    \u0275\u0275element(63, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 42)(65, "span", 43);
    \u0275\u0275text(66, "\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 44);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementStart(70, "small");
    \u0275\u0275text(71, "\u062C.\u0645");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 45)(73, "div", 40);
    \u0275\u0275element(74, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 42)(76, "span", 43);
    \u0275\u0275text(77, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062F\u062F \u0648\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 44);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "number");
    \u0275\u0275elementStart(81, "small");
    \u0275\u0275text(82, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(83, DealDetailComponent_div_2_span_83_Template, 3, 4, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 48)(85, "div", 40);
    \u0275\u0275element(86, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 42)(88, "span", 43);
    \u0275\u0275text(89, "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0644\u062A\u062D\u0635\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 50);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "number");
    \u0275\u0275elementStart(93, "small");
    \u0275\u0275text(94, "\u062C.\u0645");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(95, "div", 51)(96, "div", 40);
    \u0275\u0275element(97, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div", 42)(99, "span", 43);
    \u0275\u0275text(100, "\u0625\u0646\u062C\u0627\u0632 \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "span", 44);
    \u0275\u0275text(102);
    \u0275\u0275elementStart(103, "small");
    \u0275\u0275text(104, "\u0645\u0643\u062A\u0645\u0644\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(105, DealDetailComponent_div_2_span_105_Template, 3, 4, "span", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "div", 53)(107, "div", 54)(108, "div", 55)(109, "h3");
    \u0275\u0275element(110, "i", 56);
    \u0275\u0275text(111, " \u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0645\u062A\u0641\u0642 \u0639\u0644\u064A\u0647\u0627 \u0628\u0627\u0644\u062A\u0641\u0635\u064A\u0644 (Agreed Scope)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 57);
    \u0275\u0275template(113, DealDetailComponent_div_2_div_113_Template, 5, 1, "div", 58)(114, DealDetailComponent_div_2_div_114_Template, 5, 1, "div", 59)(115, DealDetailComponent_div_2_div_115_Template, 2, 0, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 54)(117, "div", 61)(118, "h3");
    \u0275\u0275element(119, "i", 62);
    \u0275\u0275text(120, " \u0633\u062C\u0644 \u0627\u0644\u062F\u0641\u0639\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0635\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 (Payments Ledger)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(121, DealDetailComponent_div_2_button_121_Template, 3, 0, "button", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(122, DealDetailComponent_div_2_div_122_Template, 16, 1, "div", 64)(123, DealDetailComponent_div_2_div_123_Template, 7, 1, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 54)(125, "div", 61)(126, "h3");
    \u0275\u0275element(127, "i", 66);
    \u0275\u0275text(128, " \u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0627\u0644\u0635\u0641\u0642\u0629 (Tasks Breakdown)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span", 67);
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(131, DealDetailComponent_div_2_div_131_Template, 16, 1, "div", 64)(132, DealDetailComponent_div_2_div_132_Template, 6, 0, "div", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.isClient());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("#DEAL-", ctx_r1.deal.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.deal.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + (ctx_r1.deal.status || "pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.deal.status), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 30, ctx_r1.deal.created_at, "yyyy/MM/dd - hh:mm a") || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 33, ctx_r1.deal.updated_at, "yyyy/MM/dd - hh:mm a") || "\u0627\u0644\u0622\u0646");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.deal.client_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.deal.client_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deal.client == null ? null : ctx_r1.deal.client.email);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.deal.department == null ? null : ctx_r1.deal.department.name) || "\u0639\u0627\u0645 / \u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.deal.sales_person == null ? null : ctx_r1.deal.sales_person.name) || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deal.sales_commission_value > 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(69, 36, ctx_r1.deal.calculated_total || ctx_r1.deal.total_price, "1.2-2"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(80, 39, ctx_r1.deal.calculated_paid || ctx_r1.deal.paid_amount, "1.2-2"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.deal.calculated_total || ctx_r1.deal.total_price) > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(92, 42, ctx_r1.deal.remaining_balance, "1.2-2"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", ctx_r1.getCompletedTasksCount(), " / ", (ctx_r1.deal.tasks == null ? null : ctx_r1.deal.tasks.length) || 0, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.deal.tasks && ctx_r1.deal.tasks.length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.deal.agreed_scope);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deal.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.deal.agreed_scope && !ctx_r1.deal.description);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.isClient());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deal.payments && ctx_r1.deal.payments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.deal.payments || ctx_r1.deal.payments.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getCompletedTasksCount(), " \u0645\u0643\u062A\u0645\u0644\u0629 \u0645\u0646 \u0625\u062C\u0645\u0627\u0644\u064A ", (ctx_r1.deal.tasks == null ? null : ctx_r1.deal.tasks.length) || 0, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deal.tasks && ctx_r1.deal.tasks.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.deal.tasks || ctx_r1.deal.tasks.length === 0);
  }
}
function DealDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106)(2, "label");
    \u0275\u0275text(3, "\u0645\u0628\u0644\u063A \u0627\u0644\u062F\u0641\u0639\u0629 (\u062C.\u0645) ");
    \u0275\u0275elementStart(4, "span", 107);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 108);
    \u0275\u0275elementStart(7, "small", 71);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 106)(11, "label");
    \u0275\u0275text(12, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "p-datepicker", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 106)(15, "label");
    \u0275\u0275text(16, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644 / \u0627\u0644\u062F\u0641\u0639 ");
    \u0275\u0275elementStart(17, "span", 107);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "p-dropdown", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 106)(21, "label");
    \u0275\u0275text(22, "\u0631\u0642\u0645 \u0627\u0644\u0625\u064A\u0635\u0627\u0644 / \u0627\u0644\u0645\u0631\u062C\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", ctx_r1.deal.remaining_balance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644: ", \u0275\u0275pipeBind2(9, 7, ctx_r1.deal.remaining_balance, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(5);
    \u0275\u0275property("showIcon", true)("iconDisplay", "input")("appendTo", "body");
    \u0275\u0275advance(6);
    \u0275\u0275property("appendTo", "body")("options", \u0275\u0275pureFunction4(14, _c6, \u0275\u0275pureFunction0(10, _c2), \u0275\u0275pureFunction0(11, _c3), \u0275\u0275pureFunction0(12, _c4), \u0275\u0275pureFunction0(13, _c5)));
  }
}
var DealDetailComponent = class _DealDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  dealId = null;
  deal = null;
  loading = true;
  submitting = false;
  showPaymentModal = false;
  paymentForm;
  ngOnInit() {
    this.initPaymentForm();
    this.route.paramMap.subscribe((params) => {
      this.dealId = params.get("id");
      if (this.dealId) {
        this.loadDealDetails(this.dealId);
      }
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
  initPaymentForm() {
    this.paymentForm = this.fb.group({
      amount: [0, [Validators.required, Validators.min(0.01)]],
      payment_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      payment_method: ["cash", Validators.required],
      receipt_ref: [""]
    });
  }
  loadDealDetails(id) {
    this.loading = true;
    this.apiService.getDeal(id).subscribe({
      next: (res) => {
        this.deal = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  refreshData() {
    if (this.dealId)
      this.loadDealDetails(this.dealId);
  }
  goBack() {
    this.router.navigate(["/deals"]);
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
  getCompletedTasksCount() {
    if (!this.deal || !this.deal.tasks)
      return 0;
    return this.deal.tasks.filter((t) => this.isTaskCompleted(t.status)).length;
  }
  openPaymentModal() {
    if (!this.deal)
      return;
    this.paymentForm.reset({
      amount: this.deal.remaining_balance || 0,
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
    if (this.paymentForm.invalid || !this.deal)
      return;
    this.submitting = true;
    const payload = __spreadProps(__spreadValues({}, this.paymentForm.value), {
      payment_date: this.formatDatePayload(this.paymentForm.value.payment_date),
      deal_id: this.deal.id,
      client_id: this.deal.client_id
    });
    this.apiService.storeClientPayment(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.showPaymentModal = false;
        this.refreshData();
      },
      error: () => this.submitting = false
    });
  }
  static \u0275fac = function DealDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DealDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealDetailComponent, selectors: [["app-deal-detail"]], decls: 11, vars: 14, consts: [[1, "crm-module-container"], ["class", "loading-shell", 4, "ngIf"], [4, "ngIf"], [3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo", "header"], [3, "ngSubmit", "formGroup"], ["style", "padding:10px 0; display:flex; flex-direction:column; gap:14px;", 4, "ngIf"], [1, "dialog-footer-actions"], ["type", "button", 1, "btn-dialog-cancel", 3, "click"], ["type", "submit", 1, "btn-dialog-submit", 3, "disabled"], [1, "loading-shell"], [1, "fa-solid", "fa-circle-notch", "fa-spin", 2, "font-size", "2.2rem", "color", "var(--violet-light)"], [1, "top-nav-bar"], [1, "btn-glass-back", 3, "click"], [1, "fa-solid", "fa-arrow-right"], [1, "top-nav-actions"], ["class", "btn-primary-gradient", 3, "click", 4, "ngIf"], [1, "btn-glass-purple", 3, "click"], [1, "fa-solid", "fa-rotate-right"], [1, "deal-header-card", "glass-panel"], [1, "banner-top-row"], [1, "title-with-badge"], [1, "deal-code-badge"], [1, "status-pill", 3, "ngClass"], [1, "banner-timestamps"], [1, "fa-regular", "fa-calendar-plus"], [1, "fa-regular", "fa-clock"], [1, "parties-grid"], [1, "party-card"], [1, "party-icon-badge"], [1, "fa-solid", "fa-user-tie"], [1, "party-meta"], [1, "party-lbl"], [1, "party-val"], ["class", "client-link", 3, "routerLink", 4, "ngIf"], ["style", "color:var(--text-2);", 4, "ngIf"], [1, "fa-solid", "fa-sitemap"], [1, "fa-solid", "fa-briefcase"], ["style", "color:var(--teal-light); font-weight:700;", 4, "ngIf"], [1, "kpis-grid"], [1, "kpi-card", "total-kpi"], [1, "kpi-icon-box"], [1, "fa-solid", "fa-file-invoice-dollar"], [1, "kpi-content"], [1, "kpi-title"], [1, "kpi-amount"], [1, "kpi-card", "paid-kpi"], [1, "fa-solid", "fa-circle-check"], ["class", "kpi-percent", 4, "ngIf"], [1, "kpi-card", "remaining-kpi"], [1, "fa-solid", "fa-hand-holding-dollar"], [1, "kpi-amount", "highlight-red"], [1, "kpi-card", "tasks-kpi"], [1, "fa-solid", "fa-list-check"], [1, "sections-column"], [1, "section-card", "glass-panel"], [1, "section-card-hd"], [1, "fa-solid", "fa-file-signature", 2, "color", "var(--violet-light)"], [1, "written-body-box"], ["class", "scope-paragraph", 4, "ngIf"], ["class", "desc-paragraph", 4, "ngIf"], ["class", "empty-note", 4, "ngIf"], [1, "section-card-hd", "flex-between"], [1, "fa-solid", "fa-receipt", 2, "color", "var(--emerald-light)"], ["class", "btn-sm-primary", 3, "click", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "empty-state-card", 4, "ngIf"], [1, "fa-solid", "fa-tasks", 2, "color", "var(--amber-light)"], [1, "tasks-counter-badge"], [1, "btn-primary-gradient", 3, "click"], [1, "fa-solid", "fa-money-bill-wave"], [1, "client-link", 3, "routerLink"], [2, "color", "var(--text-2)"], [2, "color", "var(--teal-light)", "font-weight", "700"], [1, "kpi-percent"], [1, "scope-paragraph"], [1, "sub-label"], [1, "desc-paragraph"], [1, "empty-note"], [1, "btn-sm-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "table-responsive"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [2, "font-weight", "700", "color", "var(--text)"], [1, "fa-regular", "fa-calendar-check", 2, "color", "var(--emerald-light)", "margin-left", "6px"], [2, "font-weight", "800", "color", "var(--emerald-light)", "font-size", "0.95rem"], [1, "payment-method-badge"], [2, "font-family", "monospace", "color", "var(--text-2)"], [2, "font-size", "0.78rem", "color", "var(--text-3)"], [1, "empty-state-card"], [1, "fa-solid", "fa-file-circle-xmark", 2, "font-size", "2rem", "color", "var(--text-3)", "margin-bottom", "8px"], [2, "color", "var(--text-2)", "font-size", "0.85rem", "margin-top", "4px"], ["class", "btn-sm-primary", "style", "margin-top:12px;", 3, "click", 4, "ngIf"], [1, "btn-sm-primary", 2, "margin-top", "12px", 3, "click"], [1, "dept-badge"], ["class", "users-flex", 4, "ngIf"], ["style", "color:var(--text-3); font-size:0.75rem;", 4, "ngIf"], [2, "font-size", "0.8rem", "color", "var(--text-2)"], [1, "task-status-pill", 3, "ngClass"], [1, "fa-solid", 3, "ngClass"], [1, "users-flex"], ["class", "user-chip", 4, "ngFor", "ngForOf"], [1, "user-chip"], [2, "color", "var(--text-3)", "font-size", "0.75rem"], [1, "fa-solid", "fa-list-check", 2, "font-size", "2rem", "color", "var(--text-3)", "margin-bottom", "8px"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "14px"], [1, "form-group"], [1, "required"], ["type", "number", "pInputText", "", "formControlName", "amount", 3, "placeholder"], ["formControlName", "payment_date", "dateFormat", "yy-mm-dd", "placeholder", "\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062F\u0627\u062F...", "styleClass", "w-full", 3, "showIcon", "iconDisplay", "appendTo"], ["formControlName", "payment_method", "optionLabel", "label", "optionValue", "value", 3, "appendTo", "options"], ["type", "text", "pInputText", "", "formControlName", "receipt_ref", "placeholder", "\u0645\u062B\u0627\u0644: TXN-998811"]], template: function DealDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, DealDetailComponent_div_1_Template, 4, 0, "div", 1)(2, DealDetailComponent_div_2_Template, 133, 45, "div", 2);
      \u0275\u0275elementStart(3, "p-dialog", 3);
      \u0275\u0275twoWayListener("visibleChange", function DealDetailComponent_Template_p_dialog_visibleChange_3_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showPaymentModal, $event) || (ctx.showPaymentModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(4, "form", 4);
      \u0275\u0275listener("ngSubmit", function DealDetailComponent_Template_form_ngSubmit_4_listener() {
        return ctx.savePayment();
      });
      \u0275\u0275template(5, DealDetailComponent_div_5_Template, 24, 19, "div", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
      \u0275\u0275listener("click", function DealDetailComponent_Template_button_click_7_listener() {
        return ctx.showPaymentModal = false;
      });
      \u0275\u0275text(8, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading && !ctx.deal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deal);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showPaymentModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body")("header", "\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 / \u0642\u0633\u0637: " + ((ctx.deal == null ? null : ctx.deal.title) || ""));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.paymentForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deal);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.paymentForm.invalid || ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.submitting ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629..." : "\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629", " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, DialogModule, Dialog, InputTextModule, InputText, DropdownModule, Dropdown, DatePickerModule, DatePicker], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.loading-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: var(--text-2);\n  font-size: 0.95rem;\n}\n.top-nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.btn-glass-back[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text);\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-glass-back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: var(--violet-light);\n  color: var(--violet-light);\n  transform: translateX(3px);\n}\n.top-nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-primary-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border: none;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35);\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-primary-gradient[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5);\n  transform: translateY(-2px);\n}\n.btn-glass-purple[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--text);\n  padding: 10px 16px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-glass-purple[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.deal-header-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 26px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  box-shadow: var(--shadow-sm);\n}\n.banner-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  flex-wrap: wrap;\n  border-bottom: 1px solid var(--border);\n  padding-bottom: 18px;\n}\n.title-with-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.deal-code-badge[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  font-family: monospace;\n  font-size: 0.82rem;\n  font-weight: 800;\n  padding: 5px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.title-with-badge[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n}\n.status-pill[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 100px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n  border: 1px solid rgba(244, 63, 94, 0.3);\n}\n.banner-timestamps[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  color: var(--text-2);\n  font-size: 0.8rem;\n  flex-wrap: wrap;\n}\n.banner-timestamps[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  margin-left: 5px;\n}\n.banner-timestamps[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n.parties-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 16px;\n}\n.party-card[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.party-icon-badge[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.party-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.party-lbl[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-3);\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.party-val[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text);\n  font-weight: 700;\n}\n.client-link[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  text-decoration: none;\n  transition: underline 0.2s;\n}\n.client-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.kpis-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 18px;\n  margin-bottom: 26px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.2s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.kpi-icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.total-kpi[_ngcontent-%COMP%]   .kpi-icon-box[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n}\n.paid-kpi[_ngcontent-%COMP%]   .kpi-icon-box[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n}\n.remaining-kpi[_ngcontent-%COMP%]   .kpi-icon-box[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n}\n.tasks-kpi[_ngcontent-%COMP%]   .kpi-icon-box[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n}\n.kpi-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.kpi-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-2);\n  font-weight: 700;\n}\n.kpi-amount[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text);\n  line-height: 1.2;\n}\n.kpi-amount[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.highlight-red[_ngcontent-%COMP%] {\n  color: #f43f5e;\n}\n.kpi-percent[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #34d399;\n  font-weight: 700;\n}\n.sections-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  box-shadow: var(--shadow-sm);\n}\n.section-card-hd[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.08rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.written-body-box[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sub-label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n  display: block;\n}\n.written-body-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  line-height: 1.65;\n  color: var(--text);\n  margin: 0;\n}\n.empty-note[_ngcontent-%COMP%] {\n  color: var(--text-3);\n  font-style: italic;\n  font-size: 0.85rem;\n}\n.btn-sm-primary[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-sm-primary[_ngcontent-%COMP%]:hover {\n  background: var(--violet);\n  color: #ffffff;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 12px 18px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.74rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.88rem;\n  color: var(--text);\n  vertical-align: middle;\n}\n.payment-method-badge[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--text-2);\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.dept-badge[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 3px 9px;\n  border-radius: 6px;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.users-flex[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.user-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.72rem;\n  color: var(--text-2);\n}\n.task-status-pill[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 100px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.tstatus-completed[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n}\n.tstatus-in_progress[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n}\n.tstatus-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n}\n.tasks-counter-badge[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.25);\n  padding: 4px 12px;\n  border-radius: 100px;\n}\n.empty-state-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.1);\n  border: 1px dashed var(--border);\n  border-radius: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\nbody.light-theme[_nghost-%COMP%]   .crm-module-container[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-module-container[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-glass-back[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-glass-back[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #1e293b !important;\n  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05);\n}\nbody.light-theme[_nghost-%COMP%]   .btn-glass-back[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-glass-back[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9 !important;\n  color: #4f46e5 !important;\n  border-color: #6366f1 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .deal-header-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .deal-header-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .banner-top-row[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .banner-top-row[_ngcontent-%COMP%] {\n  border-bottom-color: #e2e8f0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .party-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .party-card[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #e2e8f0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .party-icon-badge[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .party-icon-badge[_ngcontent-%COMP%] {\n  background: #e0e7ff !important;\n  color: #4338ca !important;\n}\nbody.light-theme[_nghost-%COMP%]   .party-val[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .party-val[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .kpi-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .kpi-title[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-title[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .kpi-amount[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-amount[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .section-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .section-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .section-card-hd[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .section-card-hd[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .written-body-box[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .written-body-box[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #e2e8f0 !important;\n  color: #1e293b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f1f5f9 !important;\n  color: #475569 !important;\n  border-bottom-color: #e2e8f0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-color: #f1f5f9 !important;\n  color: #1e293b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .payment-method-badge[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .payment-method-badge[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .user-chip[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .user-chip[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .empty-state-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .empty-state-card[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n/*# sourceMappingURL=deal-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealDetailComponent, [{
    type: Component,
    args: [{ selector: "app-deal-detail", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      DialogModule,
      InputTextModule,
      DropdownModule,
      DatePickerModule
    ], template: `
    <div class="crm-module-container">
      <!-- Loading Shell -->
      <div class="loading-shell" *ngIf="loading && !deal">
        <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2.2rem; color: var(--violet-light);"></i>
        <span>\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0643\u0627\u0641\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0642\u062F \u0648\u0627\u0644\u0635\u0641\u0642\u0629...</span>
      </div>

      <div *ngIf="deal">
        <!-- Top Back Bar & Actions -->
        <div class="top-nav-bar">
          <button class="btn-glass-back" (click)="goBack()">
            <i class="fa-solid fa-arrow-right"></i> \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F
          </button>
          
          <div class="top-nav-actions">
            <button class="btn-primary-gradient" *ngIf="!isClient()" (click)="openPaymentModal()">
              <i class="fa-solid fa-money-bill-wave"></i> + \u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u062C\u062F\u064A\u062F\u0629
            </button>
            <button class="btn-glass-purple" (click)="refreshData()">
              <i class="fa-solid fa-rotate-right"></i> \u062A\u062D\u062F\u064A\u062B
            </button>
          </div>
        </div>

        <!-- Deal Main Header Banner -->
        <div class="deal-header-card glass-panel">
          <div class="banner-top-row">
            <div class="title-with-badge">
              <span class="deal-code-badge">#DEAL-{{ deal.id }}</span>
              <h2>{{ deal.title }}</h2>
              <span class="status-pill" [ngClass]="'status-' + (deal.status || 'pending')">
                {{ getStatusLabel(deal.status) }}
              </span>
            </div>
            
            <div class="banner-timestamps">
              <span><i class="fa-regular fa-calendar-plus"></i> \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0639\u0627\u0642\u062F: <strong>{{ (deal.created_at | date:'yyyy/MM/dd - hh:mm a') || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</strong></span>
              <span><i class="fa-regular fa-clock"></i> \u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B: <strong>{{ (deal.updated_at | date:'yyyy/MM/dd - hh:mm a') || '\u0627\u0644\u0622\u0646' }}</strong></span>
            </div>
          </div>

          <!-- Parties & Sales Grid -->
          <div class="parties-grid">
            <div class="party-card">
              <div class="party-icon-badge"><i class="fa-solid fa-user-tie"></i></div>
              <div class="party-meta">
                <span class="party-lbl">\u0627\u0644\u0639\u0645\u064A\u0644 \u0648\u0635\u0627\u062D\u0628 \u0627\u0644\u0635\u0641\u0642\u0629</span>
                <strong class="party-val">
                  <a *ngIf="deal.client_id" [routerLink]="['/clients', deal.client_id]" class="client-link">
                    {{ deal.client?.name || '\u0639\u0645\u064A\u0644 \u0639\u0627\u0645' }}
                  </a>
                  <span *ngIf="!deal.client_id">{{ deal.client?.name || '\u0639\u0645\u064A\u0644 \u0639\u0627\u0645' }}</span>
                </strong>
                <small *ngIf="deal.client?.email" style="color:var(--text-2);">{{ deal.client?.email }}</small>
              </div>
            </div>

            <div class="party-card">
              <div class="party-icon-badge"><i class="fa-solid fa-sitemap"></i></div>
              <div class="party-meta">
                <span class="party-lbl">\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u0633\u0624\u0648\u0644</span>
                <strong class="party-val">{{ deal.department?.name || '\u0639\u0627\u0645 / \u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</strong>
              </div>
            </div>

            <div class="party-card">
              <div class="party-icon-badge"><i class="fa-solid fa-briefcase"></i></div>
              <div class="party-meta">
                <span class="party-lbl">\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0629</span>
                <strong class="party-val">{{ deal.sales_person?.name || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}</strong>
                <small *ngIf="deal.sales_commission_value > 0" style="color:var(--teal-light); font-weight:700;">
                  \u0639\u0645\u0648\u0644\u0629: {{ deal.sales_commission_value }} {{ deal.sales_commission_type === 'percentage' ? '%' : '\u062C.\u0645' }}
                </small>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Financial & Tasks KPIs Row -->
        <div class="kpis-grid">
          <div class="kpi-card total-kpi">
            <div class="kpi-icon-box"><i class="fa-solid fa-file-invoice-dollar"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F</span>
              <span class="kpi-amount">{{ (deal.calculated_total || deal.total_price) | number:'1.2-2' }} <small>\u062C.\u0645</small></span>
            </div>
          </div>

          <div class="kpi-card paid-kpi">
            <div class="kpi-icon-box"><i class="fa-solid fa-circle-check"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062F\u062F \u0648\u0627\u0644\u0645\u062F\u0641\u0648\u0639</span>
              <span class="kpi-amount">{{ (deal.calculated_paid || deal.paid_amount) | number:'1.2-2' }} <small>\u062C.\u0645</small></span>
              <span class="kpi-percent" *ngIf="(deal.calculated_total || deal.total_price) > 0">
                ({{ (((deal.calculated_paid || deal.paid_amount) / (deal.calculated_total || deal.total_price)) * 100) | number:'1.0-0' }}% \u062A\u0645 \u062A\u0633\u062F\u064A\u062F\u0647)
              </span>
            </div>
          </div>

          <div class="kpi-card remaining-kpi">
            <div class="kpi-icon-box"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0644\u062A\u062D\u0635\u064A\u0644</span>
              <span class="kpi-amount highlight-red">{{ deal.remaining_balance | number:'1.2-2' }} <small>\u062C.\u0645</small></span>
            </div>
          </div>

          <div class="kpi-card tasks-kpi">
            <div class="kpi-icon-box"><i class="fa-solid fa-list-check"></i></div>
            <div class="kpi-content">
              <span class="kpi-title">\u0625\u0646\u062C\u0627\u0632 \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645</span>
              <span class="kpi-amount">{{ getCompletedTasksCount() }} / {{ deal.tasks?.length || 0 }} <small>\u0645\u0643\u062A\u0645\u0644\u0629</small></span>
              <span class="kpi-percent" *ngIf="deal.tasks && deal.tasks.length > 0">
                ({{ ((getCompletedTasksCount() / deal.tasks.length) * 100) | number:'1.0-0' }}% \u0645\u0643\u062A\u0645\u0644)
              </span>
            </div>
          </div>
        </div>

        <!-- Main Content Sections Grid -->
        <div class="sections-column">

          <!-- 1. Scope & Description -->
          <div class="section-card glass-panel">
            <div class="section-card-hd">
              <h3><i class="fa-solid fa-file-signature" style="color:var(--violet-light);"></i> \u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0645\u062A\u0641\u0642 \u0639\u0644\u064A\u0647\u0627 \u0628\u0627\u0644\u062A\u0641\u0635\u064A\u0644 (Agreed Scope)</h3>
            </div>
            <div class="written-body-box">
              <div *ngIf="deal.agreed_scope" class="scope-paragraph">
                <span class="sub-label">\u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0637\u0627\u062A:</span>
                <p>{{ deal.agreed_scope }}</p>
              </div>
              <div *ngIf="deal.description" class="desc-paragraph">
                <span class="sub-label">\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644:</span>
                <p>{{ deal.description }}</p>
              </div>
              <div *ngIf="!deal.agreed_scope && !deal.description" class="empty-note">
                \u0644\u0645 \u064A\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0648 \u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0645\u0643\u062A\u0648\u0628\u0629 \u0644\u0644\u0646\u0637\u0627\u0642 \u0641\u064A \u0627\u0644\u0639\u0642\u062F \u0623\u062B\u0646\u0627\u0621 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0635\u0641\u0642\u0629.
              </div>
            </div>
          </div>

          <!-- 2. Financial Payments Ledger -->
          <div class="section-card glass-panel">
            <div class="section-card-hd flex-between">
              <h3><i class="fa-solid fa-receipt" style="color:var(--emerald-light);"></i> \u0633\u062C\u0644 \u0627\u0644\u062F\u0641\u0639\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0635\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 (Payments Ledger)</h3>
              <button class="btn-sm-primary" *ngIf="!isClient()" (click)="openPaymentModal()">
                <i class="fa-solid fa-plus"></i> \u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 \u062C\u062F\u064A\u062F\u0629
              </button>
            </div>

            <div class="table-responsive" *ngIf="deal.payments && deal.payments.length > 0">
              <table class="crm-table">
                <thead>
                  <tr>
                    <th>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u062F\u064A\u062F</th>
                    <th>\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062F\u0641\u0648\u0639</th>
                    <th>\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644 / \u0627\u0644\u062F\u0641\u0639</th>
                    <th>\u0631\u0642\u0645 \u0627\u0644\u0645\u0631\u062C\u0639 / \u0627\u0644\u0625\u064A\u0635\u0627\u0644</th>
                    <th>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u064A\u062F \u0628\u0627\u0644\u0633\u064A\u0633\u062A\u0645</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let p of deal.payments">
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
                      {{ p.receipt_ref || p.reference_number || '\u0628\u062F\u0648\u0646 \u0631\u0642\u0645 \u0645\u0631\u062C\u0639' }}
                    </td>
                    <td style="font-size:0.78rem; color:var(--text-3);">
                      {{ (p.created_at | date:'yyyy/MM/dd - hh:mm a') || '-' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div *ngIf="!deal.payments || deal.payments.length === 0" class="empty-state-card">
              <i class="fa-solid fa-file-circle-xmark" style="font-size:2rem; color:var(--text-3); margin-bottom:8px;"></i>
              <div style="font-weight:700; color:var(--text);">\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u064A \u062A\u062D\u0635\u064A\u0644\u0627\u062A \u0645\u0633\u0628\u0642\u0629</div>
              <p style="color:var(--text-2); font-size:0.85rem; margin-top:4px;">\u0644\u0645 \u064A\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0623\u064A \u0623\u0642\u0633\u0627\u0637 \u0623\u0648 \u062F\u0641\u0639\u0627\u062A \u0645\u0627\u0644\u064A\u0629 \u0644\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u0642\u0629 \u062D\u062A\u0649 \u0627\u0644\u0622\u0646.</p>
              <button class="btn-sm-primary" *ngIf="!isClient()" style="margin-top:12px;" (click)="openPaymentModal()">
                + \u062A\u0633\u062C\u064A\u0644 \u0623\u0648\u0644 \u062F\u0641\u0639\u0629 \u0645\u0627\u0644\u064A\u0629
              </button>
            </div>
          </div>

          <!-- 3. Associated Tasks Breakdown -->
          <div class="section-card glass-panel">
            <div class="section-card-hd flex-between">
              <h3><i class="fa-solid fa-tasks" style="color:var(--amber-light);"></i> \u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0627\u0644\u0635\u0641\u0642\u0629 (Tasks Breakdown)</h3>
              <span class="tasks-counter-badge">
                {{ getCompletedTasksCount() }} \u0645\u0643\u062A\u0645\u0644\u0629 \u0645\u0646 \u0625\u062C\u0645\u0627\u0644\u064A {{ deal.tasks?.length || 0 }}
              </span>
            </div>

            <div class="table-responsive" *ngIf="deal.tasks && deal.tasks.length > 0">
              <table class="crm-table">
                <thead>
                  <tr>
                    <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629</th>
                    <th>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0646\u0641\u0630</th>
                    <th>\u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0633\u0646\u062F</th>
                    <th>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621 / \u0627\u0644\u0645\u0648\u0639\u062F</th>
                    <th>\u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u0646\u062C\u0627\u0632</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let t of deal.tasks">
                    <td style="font-weight:700; color:var(--text);">{{ t.title }}</td>
                    <td><span class="dept-badge">{{ t.department?.name || '\u0639\u0627\u0645' }}</span></td>
                    <td>
                      <div class="users-flex" *ngIf="t.users && t.users.length > 0">
                        <span class="user-chip" *ngFor="let u of t.users">{{ u.name }}</span>
                      </div>
                      <span *ngIf="!t.users || t.users.length === 0" style="color:var(--text-3); font-size:0.75rem;">\u063A\u064A\u0631 \u0645\u0633\u0646\u062F</span>
                    </td>
                    <td style="font-size:0.8rem; color:var(--text-2);">
                      {{ (t.created_at | date:'yyyy/MM/dd') || '\u063A\u064A\u0631 \u0645\u062D\u062F\u062F' }}
                    </td>
                    <td>
                      <span class="task-status-pill" [ngClass]="getTaskStatusClass(t.status)">
                        <i class="fa-solid" [ngClass]="getTaskStatusIcon(t.status)"></i>
                        {{ getTaskStatusLabel(t.status) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div *ngIf="!deal.tasks || deal.tasks.length === 0" class="empty-state-card">
              <i class="fa-solid fa-list-check" style="font-size:2rem; color:var(--text-3); margin-bottom:8px;"></i>
              <div style="font-weight:700; color:var(--text);">\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u0633\u0646\u062F\u0629</div>
              <p style="color:var(--text-2); font-size:0.85rem; margin-top:4px;">\u0644\u0645 \u062A\u0642\u0645 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0628\u0646\u0634\u0631 \u0645\u0647\u0627\u0645 \u062A\u0627\u0628\u0639\u0629 \u0644\u062A\u0631\u062E\u064A\u0635 \u0648\u062A\u0646\u0641\u064A\u0630 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u0642\u0629 \u0628\u0639\u062F.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- PrimeNG Dialog: Add Payment -->
      <p-dialog [(visible)]="showPaymentModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639\u0629 / \u0642\u0633\u0637: ' + (deal?.title || '')" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="paymentForm" (ngSubmit)="savePayment()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;" *ngIf="deal">
            <div class="form-group">
              <label>\u0645\u0628\u0644\u063A \u0627\u0644\u062F\u0641\u0639\u0629 (\u062C.\u0645) <span class="required">*</span></label>
              <input type="number" pInputText formControlName="amount" [placeholder]="deal.remaining_balance" />
              <small style="color:var(--text-2);">\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644: {{ deal.remaining_balance | number:'1.2-2' }} \u062C.\u0645</small>
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
  `, styles: ['/* angular:styles/component:css;e454f786711817340baa06c208c5a5590d85596ae4ce5da641a498fbc5480a5d;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/deals/deal-detail.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.loading-shell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: var(--text-2);\n  font-size: 0.95rem;\n}\n.top-nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.btn-glass-back {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text);\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-glass-back:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: var(--violet-light);\n  color: var(--violet-light);\n  transform: translateX(3px);\n}\n.top-nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-primary-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border: none;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35);\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-primary-gradient:hover {\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5);\n  transform: translateY(-2px);\n}\n.btn-glass-purple {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--text);\n  padding: 10px 16px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s;\n  font-family: inherit;\n}\n.btn-glass-purple:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.deal-header-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 26px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  box-shadow: var(--shadow-sm);\n}\n.banner-top-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  flex-wrap: wrap;\n  border-bottom: 1px solid var(--border);\n  padding-bottom: 18px;\n}\n.title-with-badge {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.deal-code-badge {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  font-family: monospace;\n  font-size: 0.82rem;\n  font-weight: 800;\n  padding: 5px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.title-with-badge h2 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n}\n.status-pill {\n  font-size: 0.74rem;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 100px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-pending {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-active {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.status-completed {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.status-cancelled {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n  border: 1px solid rgba(244, 63, 94, 0.3);\n}\n.banner-timestamps {\n  display: flex;\n  gap: 20px;\n  color: var(--text-2);\n  font-size: 0.8rem;\n  flex-wrap: wrap;\n}\n.banner-timestamps i {\n  color: var(--violet-light);\n  margin-left: 5px;\n}\n.banner-timestamps strong {\n  color: var(--text);\n}\n.parties-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 16px;\n}\n.party-card {\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.party-icon-badge {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.party-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.party-lbl {\n  font-size: 0.72rem;\n  color: var(--text-3);\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.party-val {\n  font-size: 0.95rem;\n  color: var(--text);\n  font-weight: 700;\n}\n.client-link {\n  color: var(--violet-light);\n  text-decoration: none;\n  transition: underline 0.2s;\n}\n.client-link:hover {\n  text-decoration: underline;\n}\n.kpis-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 18px;\n  margin-bottom: 26px;\n}\n.kpi-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.2s;\n}\n.kpi-card:hover {\n  transform: translateY(-2px);\n}\n.kpi-icon-box {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.total-kpi .kpi-icon-box {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n}\n.paid-kpi .kpi-icon-box {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n}\n.remaining-kpi .kpi-icon-box {\n  background: rgba(244, 63, 94, 0.12);\n  color: #fb7185;\n}\n.tasks-kpi .kpi-icon-box {\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n}\n.kpi-content {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.kpi-title {\n  font-size: 0.78rem;\n  color: var(--text-2);\n  font-weight: 700;\n}\n.kpi-amount {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text);\n  line-height: 1.2;\n}\n.kpi-amount small {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.highlight-red {\n  color: #f43f5e;\n}\n.kpi-percent {\n  font-size: 0.74rem;\n  color: #34d399;\n  font-weight: 700;\n}\n.sections-column {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.section-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  box-shadow: var(--shadow-sm);\n}\n.section-card-hd h3 {\n  font-size: 1.08rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.written-body-box {\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sub-label {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n  display: block;\n}\n.written-body-box p {\n  font-size: 0.92rem;\n  line-height: 1.65;\n  color: var(--text);\n  margin: 0;\n}\n.empty-note {\n  color: var(--text-3);\n  font-style: italic;\n  font-size: 0.85rem;\n}\n.btn-sm-primary {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-sm-primary:hover {\n  background: var(--violet);\n  color: #ffffff;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 12px 18px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.74rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 14px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.88rem;\n  color: var(--text);\n  vertical-align: middle;\n}\n.payment-method-badge {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--text-2);\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.dept-badge {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 3px 9px;\n  border-radius: 6px;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.users-flex {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.user-chip {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 3px 8px;\n  border-radius: 100px;\n  font-size: 0.72rem;\n  color: var(--text-2);\n}\n.task-status-pill {\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 100px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.tstatus-completed {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n}\n.tstatus-in_progress {\n  background: rgba(99, 102, 241, 0.12);\n  color: #818cf8;\n}\n.tstatus-pending {\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n}\n.tasks-counter-badge {\n  font-size: 0.76rem;\n  font-weight: 700;\n  background: rgba(245, 158, 11, 0.12);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.25);\n  padding: 4px 12px;\n  border-radius: 100px;\n}\n.empty-state-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.1);\n  border: 1px dashed var(--border);\n  border-radius: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.required {\n  color: var(--rose-light);\n}\n:host-context(body.light-theme) .crm-module-container {\n  background: #f8fafc !important;\n}\n:host-context(body.light-theme) .btn-glass-back {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #1e293b !important;\n  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05);\n}\n:host-context(body.light-theme) .btn-glass-back:hover {\n  background: #f1f5f9 !important;\n  color: #4f46e5 !important;\n  border-color: #6366f1 !important;\n}\n:host-context(body.light-theme) .deal-header-card {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .banner-top-row {\n  border-bottom-color: #e2e8f0 !important;\n}\n:host-context(body.light-theme) .party-card {\n  background: #f8fafc !important;\n  border-color: #e2e8f0 !important;\n}\n:host-context(body.light-theme) .party-icon-badge {\n  background: #e0e7ff !important;\n  color: #4338ca !important;\n}\n:host-context(body.light-theme) .party-val {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .kpi-card {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .kpi-title {\n  color: #64748b !important;\n}\n:host-context(body.light-theme) .kpi-amount {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .section-card {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .section-card-hd h3 {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .written-body-box {\n  background: #f8fafc !important;\n  border-color: #e2e8f0 !important;\n  color: #1e293b !important;\n}\n:host-context(body.light-theme) .crm-table th {\n  background: #f1f5f9 !important;\n  color: #475569 !important;\n  border-bottom-color: #e2e8f0 !important;\n}\n:host-context(body.light-theme) .crm-table td {\n  border-bottom-color: #f1f5f9 !important;\n  color: #1e293b !important;\n}\n:host-context(body.light-theme) .payment-method-badge {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\n:host-context(body.light-theme) .user-chip {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\n:host-context(body.light-theme) .empty-state-card {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n/*# sourceMappingURL=deal-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealDetailComponent, { className: "DealDetailComponent", filePath: "src/app/components/deals/deal-detail.component.ts", lineNumber: 447 });
})();
export {
  DealDetailComponent
};
//# sourceMappingURL=chunk-4M5WDMQT.js.map
