import {
  ConfirmService
} from "./chunk-YURY4BWO.js";
import {
  CheckboxControlValueAccessor,
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
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  HostListener,
  NgForOf,
  NgIf,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZYG2ULWX.js";

// src/app/components/controller-dashboard/controller-dashboard.component.ts
var _c0 = () => ["av-p", "av-b", "av-a", "av-g", "av-r"];
var _c1 = () => ["fill-p", "fill-b", "fill-a", "fill-g", "fill-r"];
function ControllerDashboardComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163)(1, "div", 18)(2, "div", 164);
    \u0275\u0275element(3, "i", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 165);
    \u0275\u0275element(5, "i", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "div", 166);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 26);
    \u0275\u0275text(14, "\u0627\u0644\u062A\u062D\u0635\u064A\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0645\u0633\u062F\u062F\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 27);
    \u0275\u0275text(16, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062D\u0635\u0644\u0629 \u0641\u0639\u0644\u064A\u0627\u064B \u0641\u064A \u0627\u0644\u062E\u0632\u064A\u0646\u0629");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCollectionPercentage(), "% \u0646\u0633\u0628\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 2, ctx_r1.crmStats.totalPaid || 0, "1.0-0"), " ");
  }
}
function ControllerDashboardComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "div", 18)(2, "div", 94);
    \u0275\u0275element(3, "i", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 96);
    \u0275\u0275element(5, "i", 169);
    \u0275\u0275text(6, " \u0630\u0645\u0645 \u0645\u0633\u062A\u062D\u0642\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "div", 98);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 26);
    \u0275\u0275text(14, "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u062F\u0649 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 27);
    \u0275\u0275text(16, "\u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0648\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0645\u062A\u0628\u0642\u064A\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 1, ctx_r1.crmStats.totalRemaining || 0, "1.0-0"), " ");
  }
}
function ControllerDashboardComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "div", 18)(2, "div", 86);
    \u0275\u0275element(3, "i", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 87);
    \u0275\u0275element(5, "i", 172);
    \u0275\u0275text(6, " \u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "div", 89);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 26);
    \u0275\u0275text(14, "\u0623\u0631\u0628\u0627\u062D \u0648\u0647\u0627\u0645\u0634 \u0627\u0644\u0648\u0643\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 27);
    \u0275\u0275text(16, "\u0627\u0644\u0647\u0627\u0645\u0634 \u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u062A\u0631\u0627\u0643\u0645\u064A \u0644\u0644\u0634\u0631\u0643\u0629");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 1, ctx_r1.crmStats.totalMargin || 0, "1.0-0"), " ");
  }
}
function ControllerDashboardComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "div")(3, "h3");
    \u0275\u0275element(4, "i", 173);
    \u0275\u0275text(5, " \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u062A\u062D\u0635\u064A\u0644 \u0648\u0627\u0644\u0633\u064A\u0648\u0644\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0645\u0633\u062F\u062F\u0629 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 174);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 48)(11, "div", 49)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 50);
    \u0275\u0275element(19, "div", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 52)(21, "span", 53);
    \u0275\u0275element(22, "i", 54);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 53);
    \u0275\u0275element(25, "i", 176);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.getCollectionPercentage(), "% \u0645\u062D\u0635\u0644");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u062F\u0641\u0648\u0639: ", \u0275\u0275pipeBind2(14, 7, ctx_r1.crmStats.totalPaid || 0, "1.0-0"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u062A\u0628\u0642\u064A: ", \u0275\u0275pipeBind2(17, 10, ctx_r1.crmStats.totalRemaining || 0, "1.0-0"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.getCollectionPercentage(), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u0627\u0644\u0645\u0633\u062F\u062F \u0645\u062D\u0635\u0644 \u0628\u0627\u0644\u0641\u0639\u0644 (", ctx_r1.getCollectionPercentage(), "%)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0623\u0642\u0633\u0627\u0637 \u0645\u0633\u062A\u062D\u0642\u0629 (", 100 - ctx_r1.getCollectionPercentage(), "%)");
  }
}
function ControllerDashboardComponent_ng_container_111_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 179);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 180)(4, "div", 181);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 182);
    \u0275\u0275element(7, "i", 183);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 184)(10, "div", 185);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "\u062C.\u0645");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 186);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pureFunction0(9, _c0)[i_r4 % 5]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (d_r3.title || "\u0635")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r3.title || "\u0635\u0641\u0642\u0629");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getClientName(d_r3), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 7, d_r3.calculated_total || d_r3.value || d_r3.amount || 0), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r3.stage || d_r3.status || "\u0646\u0634\u0637\u0629");
  }
}
function ControllerDashboardComponent_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ControllerDashboardComponent_ng_container_111_div_1_Template, 17, 10, "div", 177);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentDeals);
  }
}
function ControllerDashboardComponent_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u062D\u0627\u0644\u064A\u0629 \u0645\u0633\u062C\u0644\u0629");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_ng_container_123_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 179);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 180)(4, "div", 181);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 182);
    \u0275\u0275element(7, "i", 188);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 184)(10, "span", 189);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pureFunction0(12, _c0)[i_r6 % 5]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (t_r5.title || "\u0645")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5.title || "\u0645\u0647\u0645\u0629");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAssigneeName(t_r5), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("prio-h", t_r5.priority === "high")("prio-m", t_r5.priority === "medium")("prio-l", t_r5.priority === "low");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5.priority === "high" ? "\u0639\u0627\u0644\u064A\u0629" : t_r5.priority === "medium" ? "\u0645\u062A\u0648\u0633\u0637\u0629" : "\u0645\u0646\u062E\u0641\u0636\u0629", " ");
  }
}
function ControllerDashboardComponent_ng_container_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ControllerDashboardComponent_ng_container_123_div_1_Template, 12, 13, "div", 177);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentTasks);
  }
}
function ControllerDashboardComponent_ng_template_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u062C\u0627\u0631\u064A\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_a_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 190);
    \u0275\u0275element(1, "i", 191);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_a_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 192);
    \u0275\u0275element(1, "i", 193);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_ng_container_238_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195)(1, "div", 196)(2, "span", 197);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 198);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 199);
    \u0275\u0275element(7, "div", 200);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 201);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.count);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275pureFunction0(10, _c1)[i_r8 % 5]);
    \u0275\u0275styleProp("width", ctx_r1.overviewStats.projects > 0 ? item_r7.count / ctx_r1.overviewStats.projects * 100 : 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 7, ctx_r1.overviewStats.projects > 0 ? item_r7.count / ctx_r1.overviewStats.projects * 100 : 0, "1.0-0"), "%");
  }
}
function ControllerDashboardComponent_ng_container_238_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ControllerDashboardComponent_ng_container_238_div_1_Template, 11, 11, "div", 194);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.projectsChartData);
  }
}
function ControllerDashboardComponent_ng_template_239_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0639\u062F");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_ng_container_250_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 206);
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r9.main_image_url || p_r9.image, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_ng_container_250_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const p_r9 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    \u0275\u0275classMap(\u0275\u0275pureFunction0(3, _c0)[i_r11 % 5]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (p_r9.title_ar || p_r9.title_en || p_r9.title || "\u061F")[0], " ");
  }
}
function ControllerDashboardComponent_ng_container_250_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 202);
    \u0275\u0275template(2, ControllerDashboardComponent_ng_container_250_div_1_img_2_Template, 1, 1, "img", 203)(3, ControllerDashboardComponent_ng_container_250_div_1_div_3_Template, 2, 4, "div", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 180)(5, "div", 181);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 182);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 184)(10, "span", 205);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r9.main_image_url || p_r9.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(p_r9.main_image_url || p_r9.image));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r9.title_ar || p_r9.title_en || p_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((p_r9.category == null ? null : p_r9.category.name_ar) || (p_r9.category == null ? null : p_r9.category.name_en) || "\u0639\u0627\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getClientName(p_r9));
  }
}
function ControllerDashboardComponent_ng_container_250_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ControllerDashboardComponent_ng_container_250_div_1_Template, 12, 5, "div", 177);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentProjects);
  }
}
function ControllerDashboardComponent_ng_template_251_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0628\u0639\u062F");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_279_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 114)(2, "div", 115);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 208);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_279_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditService());
    });
    \u0275\u0275element(5, "i", 209);
    \u0275\u0275text(6, " \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 134)(8, "form", 135);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_279_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveService());
    });
    \u0275\u0275elementStart(9, "div", 136)(10, "div", 137)(11, "label", 138);
    \u0275\u0275text(12, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062E\u062F\u0645\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 210);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 137)(15, "label", 138);
    \u0275\u0275text(16, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062E\u062F\u0645\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 211);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 137)(19, "label", 138);
    \u0275\u0275text(20, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 / \u0627\u0644\u0634\u0627\u0631\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 212);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 137)(23, "label", 138);
    \u0275\u0275text(24, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 / \u0627\u0644\u0634\u0627\u0631\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 213);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 143)(27, "label", 138);
    \u0275\u0275text(28, "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 143)(31, "label", 138);
    \u0275\u0275text(32, "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "textarea", 215);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 137)(35, "label", 138);
    \u0275\u0275text(36, "\u0631\u0645\u0632 \u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0629 (FontAwesome Icon Class)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 216);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 137)(39, "label", 138);
    \u0275\u0275text(40, "\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0639\u0631\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 217);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 143)(43, "label", 138);
    \u0275\u0275text(44, "\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A - \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 143)(47, "label", 138);
    \u0275\u0275text(48, "\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A - \u0628\u0627\u0644\u0639\u0631\u0628\u064A (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 219);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 143)(51, "label", 138);
    \u0275\u0275text(52, "\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A - \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A (\u0635\u064A\u063A\u0629: Label:SubText:OptionalBadge \u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 220);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 143)(55, "label", 138);
    \u0275\u0275text(56, "\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A - \u0628\u0627\u0644\u0639\u0631\u0628\u064A (\u0635\u064A\u063A\u0629: Label:SubText:OptionalBadge \u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 137)(59, "label", 138);
    \u0275\u0275text(60, "\u0646\u0635 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 CTA (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 222);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 137)(63, "label", 138);
    \u0275\u0275text(64, "\u0646\u0635 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 CTA (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 223);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 143)(67, "label", 138);
    \u0275\u0275text(68, "\u0631\u0627\u0628\u0637 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 CTA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 224);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 225)(71, "button", 147);
    \u0275\u0275element(72, "i", 148);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingService ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629" : "\u0625\u0636\u0627\u0641\u0629 \u062E\u062F\u0645\u0629 \u062C\u062F\u064A\u062F\u0629");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.serviceForm);
    \u0275\u0275advance(63);
    \u0275\u0275property("disabled", ctx_r1.loadingService || ctx_r1.serviceForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingService ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062E\u062F\u0645\u0629" : "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062E\u062F\u0645\u0629", " ");
  }
}
function ControllerDashboardComponent_tr_305_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 226);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 227);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 228)(13, "button", 229);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_305_Template_button_click_13_listener() {
      const s_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editService(s_r14));
    });
    \u0275\u0275element(14, "i", 230);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 231);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_305_Template_button_click_15_listener() {
      const s_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteService(s_r14.id));
    });
    \u0275\u0275element(16, "i", 232);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(s_r14.iconClass || s_r14.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r14.title_ar || s_r14.title_en || (s_r14.title == null ? null : s_r14.title.ar) || (s_r14.title == null ? null : s_r14.title.en));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r14.subtitle_ar || s_r14.subtitle_en || (s_r14.category == null ? null : s_r14.category.ar) || (s_r14.category == null ? null : s_r14.category.en));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r14.order);
  }
}
function ControllerDashboardComponent_tr_306_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 233);
    \u0275\u0275text(2, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u062E\u062F\u0645\u0627\u062A.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_308_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 261);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r16 = ctx.$implicit;
    \u0275\u0275property("value", cat_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r16.name_ar || cat_r16.name_en || (cat_r16.name == null ? null : cat_r16.name.ar) || cat_r16.name);
  }
}
function ControllerDashboardComponent_div_308_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 262);
    \u0275\u0275element(1, "img", 263);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.projectImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_div_308_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 114)(2, "div", 115);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 208);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_308_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditProject());
    });
    \u0275\u0275element(5, "i", 209);
    \u0275\u0275text(6, " \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 134)(8, "form", 135);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_308_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProject());
    });
    \u0275\u0275elementStart(9, "h3", 234);
    \u0275\u0275text(10, "1. \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 136)(12, "div", 137)(13, "label", 138);
    \u0275\u0275text(14, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 235);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 137)(17, "label", 138);
    \u0275\u0275text(18, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 236);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 137)(21, "label", 138);
    \u0275\u0275text(22, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 237)(24, "option", 238);
    \u0275\u0275text(25, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ControllerDashboardComponent_div_308_option_26_Template, 2, 2, "option", 239);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 137)(28, "label", 138);
    \u0275\u0275text(29, "\u0627\u0644\u0646\u0635 \u0627\u0644\u0628\u062F\u064A\u0644 \u0644\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 (SEO)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 240);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 143)(32, "label", 138);
    \u0275\u0275text(33, "\u0627\u0644\u0648\u0635\u0641 / \u0646\u0628\u0630\u0629 \u0645\u062E\u062A\u0635\u0631\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 143)(36, "label", 138);
    \u0275\u0275text(37, "\u0627\u0644\u0648\u0635\u0641 / \u0646\u0628\u0630\u0629 \u0645\u062E\u062A\u0635\u0631\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "textarea", 215);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "h3", 241);
    \u0275\u0275text(40, "2. \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 136)(42, "div", 137)(43, "label", 138);
    \u0275\u0275text(44, "\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0645\u064A\u0632 \u0644\u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 242);
    \u0275\u0275element(46, "input", 243)(47, "input", 244);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 137)(49, "label", 138);
    \u0275\u0275text(50, "\u0631\u0645\u0632 \u0623\u064A\u0642\u0648\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 245);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 143)(53, "label", 138);
    \u0275\u0275text(54, "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 246);
    \u0275\u0275listener("change", function ControllerDashboardComponent_div_308_Template_input_change_55_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProjectImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, ControllerDashboardComponent_div_308_div_56_Template, 2, 1, "div", 247);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "h3", 241);
    \u0275\u0275text(58, "3. \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0645\u064A\u0644 \u0648\u0627\u0644\u0645\u062F\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 136)(60, "div", 137)(61, "label", 138);
    \u0275\u0275text(62, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 248);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 137)(65, "label", 138);
    \u0275\u0275text(66, "\u0627\u0644\u0645\u062F\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629 \u0644\u0644\u062A\u0646\u0641\u064A\u0630");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 249);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 143)(69, "label", 138);
    \u0275\u0275text(70, "\u0648\u0633\u0648\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 250);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 143)(73, "label", 138);
    \u0275\u0275text(74, "\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0648\u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 251);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "h3", 241);
    \u0275\u0275text(77, "4. \u0627\u0644\u062A\u062D\u062F\u064A \u0648\u0627\u0644\u062D\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 136)(79, "div", 143)(80, "label", 138);
    \u0275\u0275text(81, "\u0627\u0644\u062A\u062D\u062F\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "textarea", 252);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 143)(84, "label", 138);
    \u0275\u0275text(85, "\u0627\u0644\u062A\u062D\u062F\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "textarea", 253);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 143)(88, "label", 138);
    \u0275\u0275text(89, "\u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u0642\u062F\u0645 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "textarea", 254);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 143)(92, "label", 138);
    \u0275\u0275text(93, "\u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u0642\u062F\u0645 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "textarea", 255);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "h3", 241);
    \u0275\u0275text(96, "5. \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 136)(98, "div", 143)(99, "label", 138);
    \u0275\u0275text(100, "\u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A (\u0635\u064A\u063A\u0629: Value:Label \u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(101, "input", 256);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 143)(103, "label", 138);
    \u0275\u0275text(104, "\u0646\u0635 \u0631\u0623\u064A \u0648\u062A\u0648\u0635\u064A\u0629 \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275element(105, "textarea", 257);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 137)(107, "label", 138);
    \u0275\u0275text(108, "\u0627\u0633\u0645 \u0635\u0627\u062D\u0628 \u0627\u0644\u0631\u0623\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(109, "input", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 137)(111, "label", 138);
    \u0275\u0275text(112, "\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A \u0648\u0627\u0644\u0634\u0631\u0643\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "input", 259);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div", 143)(115, "label", 138);
    \u0275\u0275text(116, "\u0631\u0627\u0628\u0637 \u0635\u0648\u0631\u0629 \u0635\u0627\u062D\u0628 \u0627\u0644\u0631\u0623\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(117, "input", 260);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 225)(119, "button", 147);
    \u0275\u0275element(120, "i", 148);
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingProject ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062D\u0627\u0644\u0629" : "\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.projectForm);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(30);
    \u0275\u0275property("ngIf", ctx_r1.projectImagePreview);
    \u0275\u0275advance(63);
    \u0275\u0275property("disabled", ctx_r1.loadingProject || ctx_r1.projectForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingProject ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062D\u0627\u0644\u0629" : "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639", " ");
  }
}
function ControllerDashboardComponent_tr_336_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 268);
  }
  if (rf & 2) {
    const p_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r18.main_image_url || p_r18.image, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_tr_336_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 264);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, ControllerDashboardComponent_tr_336_img_4_Template, 1, 1, "img", 265);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 227);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 228)(15, "button", 266);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_336_Template_button_click_15_listener() {
      const p_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editProject(p_r18));
    });
    \u0275\u0275element(16, "i", 230);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 267);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_336_Template_button_click_17_listener() {
      const p_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteProject(p_r18.id));
    });
    \u0275\u0275element(18, "i", 232);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(p_r18.emoji || "fa-solid fa-rocket");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r18.main_image_url || p_r18.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r18.title_ar || p_r18.title_en || (p_r18.title == null ? null : p_r18.title.ar) || (p_r18.title == null ? null : p_r18.title.en) || p_r18.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((p_r18.category == null ? null : p_r18.category.name_ar) || (p_r18.category == null ? null : p_r18.category.name_en) || (p_r18.category == null ? null : p_r18.category.name == null ? null : p_r18.category.name.ar) || "\u0639\u0627\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getClientName(p_r18));
  }
}
function ControllerDashboardComponent_tr_337_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 269);
    \u0275\u0275text(2, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0634\u0627\u0631\u064A\u0639.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_339_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 262);
    \u0275\u0275element(1, "img", 274);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.categoryImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_div_339_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 114)(2, "div", 115);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 208);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_339_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditCategory());
    });
    \u0275\u0275element(5, "i", 209);
    \u0275\u0275text(6, " \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 134)(8, "form", 135);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_339_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCategory());
    });
    \u0275\u0275elementStart(9, "div", 136)(10, "div", 137)(11, "label", 138);
    \u0275\u0275text(12, "\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 270);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 137)(15, "label", 138);
    \u0275\u0275text(16, "\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 271);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 143)(19, "label", 138);
    \u0275\u0275text(20, "\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 272);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 143)(23, "label", 138);
    \u0275\u0275text(24, "\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 273);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 143)(27, "label", 138);
    \u0275\u0275text(28, "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0635\u063A\u0631\u0629 \u0644\u0644\u062A\u0635\u0646\u064A\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 246);
    \u0275\u0275listener("change", function ControllerDashboardComponent_div_339_Template_input_change_29_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ControllerDashboardComponent_div_339_div_30_Template, 2, 1, "div", 247);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 225)(32, "button", 147);
    \u0275\u0275element(33, "i", 148);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingCategory ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641" : "\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.categoryForm);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngIf", ctx_r1.categoryImagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loadingCategory || ctx_r1.categoryForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingCategory ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0635\u0646\u064A\u0641" : "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", " ");
  }
}
function ControllerDashboardComponent_tr_365_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 279);
  }
  if (rf & 2) {
    const cat_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", cat_r21.image_url || cat_r21.image, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_tr_365_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, ControllerDashboardComponent_tr_365_img_2_Template, 1, 1, "img", 275);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 276);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 228)(12, "button", 277);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_365_Template_button_click_12_listener() {
      const cat_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCategory(cat_r21));
    });
    \u0275\u0275element(13, "i", 230);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 278);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_365_Template_button_click_14_listener() {
      const cat_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteCategory(cat_r21.id));
    });
    \u0275\u0275element(15, "i", 232);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cat_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cat_r21.image_url || cat_r21.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r21.name_ar || (cat_r21.name == null ? null : cat_r21.name.ar));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r21.name_en || (cat_r21.name == null ? null : cat_r21.name.en) || cat_r21.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r21.description_ar || cat_r21.description_en || (cat_r21.description == null ? null : cat_r21.description.ar) || "\u2014");
  }
}
function ControllerDashboardComponent_tr_366_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 233);
    \u0275\u0275text(2, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u062A\u0635\u0646\u064A\u0641\u0627\u062A.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_368_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 262);
    \u0275\u0275element(1, "img", 274);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.blogImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_div_368_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 114)(2, "div", 115);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 208);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_368_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditBlog());
    });
    \u0275\u0275element(5, "i", 209);
    \u0275\u0275text(6, " \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 134)(8, "form", 135);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_368_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBlog());
    });
    \u0275\u0275elementStart(9, "div", 136)(10, "div", 137)(11, "label", 138);
    \u0275\u0275text(12, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 280);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 137)(15, "label", 138);
    \u0275\u0275text(16, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 281);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 143)(19, "label", 138);
    \u0275\u0275text(20, "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 282);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 143)(23, "label", 138);
    \u0275\u0275text(24, "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 283);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 137)(27, "label", 138);
    \u0275\u0275text(28, "\u0627\u0644\u0646\u0635 \u0627\u0644\u0628\u062F\u064A\u0644 \u0644\u0644\u0635\u0648\u0631\u0629 (SEO)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 284);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 137)(31, "label", 138);
    \u0275\u0275text(32, "\u0645\u0644\u0641 \u0627\u0644\u0648\u0633\u0627\u0626\u0637 (\u0635\u0648\u0631\u0629 \u0623\u0648 \u0641\u064A\u062F\u064A\u0648)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 285);
    \u0275\u0275listener("change", function ControllerDashboardComponent_div_368_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlogImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ControllerDashboardComponent_div_368_div_34_Template, 2, 1, "div", 247);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 225)(36, "button", 147);
    \u0275\u0275element(37, "i", 286);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingBlog ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644" : "\u0643\u062A\u0627\u0628\u0629 \u0645\u0642\u0627\u0644 \u062C\u062F\u064A\u062F");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.blogForm);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngIf", ctx_r1.blogImagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loadingBlog || ctx_r1.blogForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingBlog ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0642\u0627\u0644" : "\u0646\u0634\u0631 \u0627\u0644\u0645\u0642\u0627\u0644", " ");
  }
}
function ControllerDashboardComponent_tr_394_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 268);
  }
  if (rf & 2) {
    const b_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", b_r24.media_url || b_r24.image, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_tr_394_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, ControllerDashboardComponent_tr_394_img_2_Template, 1, 1, "img", 265);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 287)(9, "span", 227);
    \u0275\u0275text(10);
    \u0275\u0275element(11, "i", 288);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 228)(14, "button", 289);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_394_Template_button_click_14_listener() {
      const b_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editBlog(b_r24));
    });
    \u0275\u0275element(15, "i", 230);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 290);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_394_Template_button_click_16_listener() {
      const b_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteBlog(b_r24.id));
    });
    \u0275\u0275element(17, "i", 232);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const b_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", b_r24.media_url || b_r24.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r24.title_ar || (b_r24.title == null ? null : b_r24.title.ar));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r24.title_en || (b_r24.title == null ? null : b_r24.title.en) || b_r24.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", b_r24.likes || 0, " ");
  }
}
function ControllerDashboardComponent_tr_395_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 233);
    \u0275\u0275text(2, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0642\u0627\u0644\u0627\u062A.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_397_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 114)(2, "div", 115);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 208);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_397_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditTestimonial());
    });
    \u0275\u0275element(5, "i", 209);
    \u0275\u0275text(6, " \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 134)(8, "form", 135);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_397_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveTestimonial());
    });
    \u0275\u0275elementStart(9, "div", 136)(10, "div", 137)(11, "label", 138);
    \u0275\u0275text(12, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 291);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 137)(15, "label", 138);
    \u0275\u0275text(16, "\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A / \u0627\u0644\u062F\u0648\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 292);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 137)(19, "label", 138);
    \u0275\u0275text(20, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 293);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 137)(23, "label", 138);
    \u0275\u0275text(24, "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 (\u0645\u0646 1 \u0625\u0644\u0649 5 \u0646\u062C\u0648\u0645)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 294)(26, "option", 295);
    \u0275\u0275text(27, "\u2605\u2605\u2605\u2605\u2605 (5 \u0646\u062C\u0648\u0645)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 296);
    \u0275\u0275text(29, "\u2605\u2605\u2605\u2605 (4 \u0646\u062C\u0648\u0645)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 297);
    \u0275\u0275text(31, "\u2605\u2605\u2605 (3 \u0646\u062C\u0648\u0645)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 298);
    \u0275\u0275text(33, "\u2605\u2605 (2 \u0646\u062C\u0648\u0645)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 299);
    \u0275\u0275text(35, "\u2605 (\u0646\u062C\u0645\u0629 \u0648\u0627\u062D\u062F\u0629)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 137)(37, "label", 138);
    \u0275\u0275text(38, "\u0644\u0648\u0646 \u062F\u0627\u0626\u0631\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0631\u0645\u0632\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 242);
    \u0275\u0275element(40, "input", 300)(41, "input", 301);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "div");
    \u0275\u0275elementStart(43, "div", 143)(44, "label", 138);
    \u0275\u0275text(45, "\u0646\u0635 \u0627\u0644\u0631\u0623\u064A \u0648\u0627\u0644\u062A\u0648\u0635\u064A\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "textarea", 302);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 143)(48, "label", 138);
    \u0275\u0275text(49, "\u0646\u0635 \u0627\u0644\u0631\u0623\u064A \u0648\u0627\u0644\u062A\u0648\u0635\u064A\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 303);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 225)(52, "button", 147);
    \u0275\u0275element(53, "i", 148);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingTestimonial ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645" : "\u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.testimonialForm);
    \u0275\u0275advance(44);
    \u0275\u0275property("disabled", ctx_r1.loadingTestimonial || ctx_r1.testimonialForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingTestimonial ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0631\u0623\u064A" : "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0631\u0623\u064A", " ");
  }
}
function ControllerDashboardComponent_tr_425_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 304);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 305);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 306);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 228)(15, "button", 307);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_425_Template_button_click_15_listener() {
      const t_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editTestimonial(t_r27));
    });
    \u0275\u0275element(16, "i", 230);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 308);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_425_Template_button_click_17_listener() {
      const t_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteTestimonial(t_r27.id));
    });
    \u0275\u0275element(18, "i", 232);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r27 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", t_r27.avatar_color || "#e8620a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r27.client_name == null ? null : t_r27.client_name.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r27.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r27.job_title, " ", t_r27.company_name ? "@ " + t_r27.company_name : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r27.feedback_ar || t_r27.feedback_en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("\u2605".repeat(t_r27.rating || 5));
  }
}
function ControllerDashboardComponent_tr_426_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 309);
    \u0275\u0275text(2, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0622\u0631\u0627\u0621 \u0644\u0644\u0639\u0645\u0644\u0627\u0621.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_428_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 114)(2, "div", 115);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 208);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_428_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditFaq());
    });
    \u0275\u0275element(5, "i", 209);
    \u0275\u0275text(6, " \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 134)(8, "form", 135);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_428_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveFaq());
    });
    \u0275\u0275elementStart(9, "div", 136)(10, "div", 137)(11, "label", 138);
    \u0275\u0275text(12, "\u0627\u0644\u0633\u0624\u0627\u0644 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 310);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 137)(15, "label", 138);
    \u0275\u0275text(16, "\u0627\u0644\u0633\u0624\u0627\u0644 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 311);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 143)(19, "label", 138);
    \u0275\u0275text(20, "\u0627\u0644\u0625\u062C\u0627\u0628\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 312);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 143)(23, "label", 138);
    \u0275\u0275text(24, "\u0627\u0644\u0625\u062C\u0627\u0628\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 313);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 137)(27, "label", 138);
    \u0275\u0275text(28, "\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0639\u0631\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 314);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 315)(31, "label", 316);
    \u0275\u0275element(32, "input", 317);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "\u0646\u0634\u0637 (\u0638\u0627\u0647\u0631 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0639\u0627\u0645)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 225)(36, "button", 147);
    \u0275\u0275element(37, "i", 148);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingFaq ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u0634\u0627\u0626\u0639" : "\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644 \u0634\u0627\u0626\u0639 \u062C\u062F\u064A\u062F");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.faqForm);
    \u0275\u0275advance(28);
    \u0275\u0275property("disabled", ctx_r1.loadingFaq || ctx_r1.faqForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingFaq ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0633\u0624\u0627\u0644" : "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0633\u0624\u0627\u0644", " ");
  }
}
function ControllerDashboardComponent_tr_454_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 287);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 287)(9, "span", 318);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "div", 228)(13, "button", 319);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_454_Template_button_click_13_listener() {
      const faq_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editFaq(faq_r30));
    });
    \u0275\u0275element(14, "i", 230);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 320);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_454_Template_button_click_15_listener() {
      const faq_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteFaq(faq_r30.id));
    });
    \u0275\u0275element(16, "i", 232);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const faq_r30 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r30.question_ar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r30.question_en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r30.order);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-orange", faq_r30.is_active)("badge-error", !faq_r30.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r30.is_active ? "\u0646\u0634\u0637" : "\u063A\u064A\u0631 \u0646\u0634\u0637", " ");
  }
}
function ControllerDashboardComponent_tr_455_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 233);
    \u0275\u0275text(2, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_span_492_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 321);
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.infoMessage, "");
  }
}
function ControllerDashboardComponent_tr_515_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small", 322);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "a", 323);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275elementStart(11, "span", 324);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 227);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "br");
    \u0275\u0275elementStart(17, "small", 325);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "div", 228)(24, "button", 326);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_515_Template_button_click_24_listener() {
      const inq_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteInquiry(inq_r32.id));
    });
    \u0275\u0275element(25, "i", 232);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const inq_r32 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inq_r32.full_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inq_r32.company_name || "\u0639\u0645\u064A\u0644 \u0641\u0631\u062F\u064A");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("href", "mailto:", inq_r32.email, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inq_r32.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inq_r32.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inq_r32.service_needed || "\u0639\u0627\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", inq_r32.project_details);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inq_r32.project_details);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 10, inq_r32.created_at, "short"));
  }
}
function ControllerDashboardComponent_tr_516_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 233);
    \u0275\u0275text(2, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0637\u0644\u0628\u0627\u062A.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_603_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 327)(1, "button", 328);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_603_Template_button_click_1_listener() {
      const i_r34 = \u0275\u0275restoreView(_r33).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeTimeline(i_r34));
    });
    \u0275\u0275element(2, "i", 232);
    \u0275\u0275text(3, " \u062D\u0630\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 329)(5, "label", 138);
    \u0275\u0275text(6, "\u0627\u0644\u0633\u0646\u0629 / \u0627\u0644\u0639\u0627\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 330);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_603_Template_input_ngModelChange_7_listener($event) {
      const item_r35 = \u0275\u0275restoreView(_r33).$implicit;
      \u0275\u0275twoWayBindingSet(item_r35.year, $event) || (item_r35.year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 136)(9, "div")(10, "label", 138);
    \u0275\u0275text(11, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_603_Template_input_ngModelChange_12_listener($event) {
      const item_r35 = \u0275\u0275restoreView(_r33).$implicit;
      \u0275\u0275twoWayBindingSet(item_r35.title.en, $event) || (item_r35.title.en = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 138);
    \u0275\u0275text(15, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 155);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_603_Template_input_ngModelChange_16_listener($event) {
      const item_r35 = \u0275\u0275restoreView(_r33).$implicit;
      \u0275\u0275twoWayBindingSet(item_r35.title.ar, $event) || (item_r35.title.ar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 156)(18, "label", 138);
    \u0275\u0275text(19, "\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 157);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_603_Template_textarea_ngModelChange_20_listener($event) {
      const item_r35 = \u0275\u0275restoreView(_r33).$implicit;
      \u0275\u0275twoWayBindingSet(item_r35.description.en, $event) || (item_r35.description.en = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 156)(22, "label", 138);
    \u0275\u0275text(23, "\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 158);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_603_Template_textarea_ngModelChange_24_listener($event) {
      const item_r35 = \u0275\u0275restoreView(_r33).$implicit;
      \u0275\u0275twoWayBindingSet(item_r35.description.ar, $event) || (item_r35.description.ar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", item_r35.year);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", item_r35.title.en);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r35.title.ar);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r35.description.en);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r35.description.ar);
  }
}
function ControllerDashboardComponent_div_604_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 322);
    \u0275\u0275text(1, "\u0644\u0645 \u064A\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0623\u062D\u062F\u0627\u062B \u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0628\u0639\u062F.");
    \u0275\u0275elementEnd();
  }
}
var ControllerDashboardComponent = class _ControllerDashboardComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  confirmService = inject(ConfirmService);
  sidebarOpen = false;
  activeTab = "overview";
  activeDropdown = null;
  websiteMenuOpen = true;
  isLightMode = false;
  currentUser = null;
  isEmployee() {
    return this.currentUser?.role === "employee";
  }
  isClient() {
    return this.currentUser?.role === "client";
  }
  isDepartmentManager() {
    return this.currentUser?.role === "department_manager";
  }
  isSuperAdmin() {
    return this.currentUser?.role === "super_admin";
  }
  isAdmin() {
    if (!this.currentUser)
      return true;
    return ["super_admin", "admin"].includes(this.currentUser.role);
  }
  isAdminOrManager() {
    if (!this.currentUser)
      return true;
    return ["super_admin", "admin", "department_manager"].includes(this.currentUser.role);
  }
  getClientName(item) {
    if (!item)
      return "\u0639\u0645\u064A\u0644 \u0645\u062D\u062F\u062F";
    if (typeof item === "string" && item.trim()) {
      return item === "[object Object]" ? "\u0639\u0645\u064A\u0644 \u0645\u062D\u062F\u062F" : item;
    }
    if (typeof item.client_name === "string" && item.client_name.trim() && item.client_name !== "[object Object]") {
      return item.client_name;
    }
    if (item.client_name && typeof item.client_name === "object") {
      const n = item.client_name.name || item.client_name.client_name || item.client_name.title;
      if (n && typeof n === "string" && n !== "[object Object]")
        return n;
    }
    if (typeof item.client === "string" && item.client.trim() && item.client !== "[object Object]") {
      return item.client;
    }
    if (item.client && typeof item.client === "object") {
      const n = item.client.name || item.client.client_name || item.client.title || item.client.company || item.client.full_name;
      if (n && typeof n === "string" && n !== "[object Object]")
        return n;
    }
    if (typeof item.name === "string" && item.name.trim() && item.name !== "[object Object]") {
      return item.name;
    }
    if (typeof item.company_name === "string" && item.company_name.trim() && item.company_name !== "[object Object]") {
      return item.company_name;
    }
    return "\u0639\u0645\u064A\u0644 \u0645\u062D\u062F\u062F";
  }
  getAssigneeName(t) {
    if (!t)
      return "\u0641\u0631\u064A\u0642 \u0627\u0644\u0648\u0643\u0627\u0644\u0629";
    if (typeof t === "string" && t.trim() && t !== "[object Object]")
      return t;
    if (typeof t.assignee_name === "string" && t.assignee_name.trim() && t.assignee_name !== "[object Object]") {
      return t.assignee_name;
    }
    if (typeof t.assigned_to_name === "string" && t.assigned_to_name.trim() && t.assigned_to_name !== "[object Object]") {
      return t.assigned_to_name;
    }
    if (typeof t.assignee === "string" && t.assignee.trim() && t.assignee !== "[object Object]") {
      return t.assignee;
    }
    if (t.assignee && typeof t.assignee === "object") {
      const n = t.assignee.name || t.assignee.full_name;
      if (n && typeof n === "string" && n !== "[object Object]")
        return n;
    }
    if (typeof t.assigned_to === "string" && t.assigned_to.trim() && t.assigned_to !== "[object Object]") {
      return t.assigned_to;
    }
    if (t.assigned_to && typeof t.assigned_to === "object") {
      const n = t.assigned_to.name || t.assigned_to.full_name;
      if (n && typeof n === "string" && n !== "[object Object]")
        return n;
    }
    if (t.users && Array.isArray(t.users) && t.users.length > 0) {
      const u = t.users[0];
      if (typeof u === "string" && u.trim() && u !== "[object Object]")
        return u;
      if (u && typeof u === "object") {
        const n = u.name || u.full_name || u.email;
        if (n && typeof n === "string" && n !== "[object Object]")
          return n;
      }
    }
    return "\u0641\u0631\u064A\u0642 \u0627\u0644\u0648\u0643\u0627\u0644\u0629";
  }
  // FormGroups
  projectForm;
  serviceForm;
  blogForm;
  categoryForm;
  faqForm;
  testimonialForm;
  contactForm;
  // Data lists
  projects = [];
  categories = [];
  servicesList = [];
  blogs = [];
  faqs = [];
  testimonials = [];
  inquiries = [];
  // Form visibility states
  showProjectForm = false;
  showServiceForm = false;
  showBlogForm = false;
  showCategoryForm = false;
  showFaqForm = false;
  showTestimonialForm = false;
  // Edit states
  isEditingProject = false;
  currentProjectId = null;
  isEditingService = false;
  currentServiceId = null;
  isEditingBlog = false;
  currentBlogId = null;
  isEditingCategory = false;
  currentCategoryId = null;
  isEditingFaq = false;
  currentFaqId = null;
  isEditingTestimonial = false;
  currentTestimonialId = null;
  // Loading states
  loadingProject = false;
  loadingService = false;
  loadingBlog = false;
  loadingCategory = false;
  loadingFaq = false;
  loadingTestimonial = false;
  loadingInfo = false;
  infoMessage = "";
  // File variables
  projectImageFile = null;
  projectImagePreview = null;
  categoryImageFile = null;
  categoryImagePreview = null;
  blogImageFile = null;
  blogImagePreview = null;
  // Overview stats
  overviewStats = {
    projects: 0,
    services: 0,
    testimonials: 0,
    inquiries: 0
  };
  crmStats = {
    clients: 0,
    deals: 0,
    tasks: 0,
    departments: 0,
    totalRevenue: 0,
    totalPaid: 0,
    totalRemaining: 0,
    totalMargin: 0,
    pendingTasksCount: 0,
    inProgressTasksCount: 0,
    doneTasksCount: 0,
    newDealsCount: 0,
    wonDealsCount: 0,
    inProgressDealsCount: 0
  };
  recentProjects = [];
  recentTasks = [];
  recentDeals = [];
  projectsChartData = [];
  inquiriesChartData = [];
  // Legacy Section Data
  aboutData = {
    content: {
      hero: { en: { label: "", title1: "", desc: "" }, ar: { label: "", title1: "", desc: "" } },
      story: { en: { title: "", desc: "" }, ar: { title: "", desc: "" } },
      vision: { en: { title: "", desc: "" }, ar: { title: "", desc: "" } },
      mission: { en: { title: "", desc: "" }, ar: { title: "", desc: "" } },
      values: { en: { title: "", desc: "" }, ar: { title: "", desc: "" } },
      team_text: { en: { title: "", desc: "" }, ar: { title: "", desc: "" } }
    },
    timeline: []
  };
  isSavingAbout = false;
  pagesData = {
    home: {
      hero: {
        tag: { en: "", ar: "" },
        title1: { en: "", ar: "" },
        subtitle: { en: "", ar: "" }
      },
      services: { title: { en: "", ar: "" }, subtitle: { en: "", ar: "" } },
      portfolio: { title: { en: "", ar: "" }, subtitle: { en: "", ar: "" } },
      testimonials: { title: { en: "", ar: "" }, subtitle: { en: "", ar: "" } },
      cta: { title: { en: "", ar: "" }, desc: { en: "", ar: "" } }
    },
    services: {
      hero: {
        tag: { en: "", ar: "" },
        title: { en: "", ar: "" },
        desc: { en: "", ar: "" }
      }
    },
    portfolio: {
      hero: {
        tag: { en: "", ar: "" },
        title: { en: "", ar: "" },
        desc: { en: "", ar: "" }
      }
    },
    blogs: {
      hero: {
        tag: { en: "", ar: "" },
        title: { en: "", ar: "" },
        desc: { en: "", ar: "" }
      }
    },
    footer: {
      desc: { en: "", ar: "" },
      copy: { en: "", ar: "" },
      socials: { linkedin: "", twitter: "", facebook: "", instagram: "" },
      email: "",
      phone: ""
    }
  };
  isSavingPage = {};
  ngOnInit() {
    this.initForms();
    this.route.queryParams.subscribe((params) => {
      const targetTab = params["tab"] || "overview";
      this.activeTab = targetTab;
      this.loadDataForTab(targetTab);
    });
    let token = localStorage.getItem("mediaglow_client_token");
    let userStr = localStorage.getItem("mediaglow_user");
    let user = null;
    if (!token) {
      token = "demo_super_admin_token";
      user = { name: "Media Glow Super Admin", role: "super_admin", email: "admin@mediaglow.com" };
      localStorage.setItem("mediaglow_client_token", token);
      localStorage.setItem("mediaglow_user", JSON.stringify(user));
    } else {
      try {
        user = userStr ? JSON.parse(userStr) : null;
      } catch (e) {
      }
    }
    this.currentUser = user;
    this.loadOverviewData();
  }
  initForms() {
    this.projectForm = this.fb.group({
      title_en: ["", Validators.required],
      title_ar: ["", Validators.required],
      category_id: ["", Validators.required],
      description_en: ["", Validators.required],
      description_ar: ["", Validators.required],
      main_image_alt: [""],
      color: ["#000000"],
      emoji: ["\u{1F3D7}\uFE0F"],
      tags: [""],
      client: [""],
      timeline: [""],
      challenge_en: [""],
      challenge_ar: [""],
      solution_en: [""],
      solution_ar: [""],
      deliverables: [""],
      results_str: [""],
      testimonial_text: [""],
      testimonial_name: [""],
      testimonial_role: [""],
      testimonial_avatar: [""]
    });
    this.serviceForm = this.fb.group({
      title_en: ["", Validators.required],
      title_ar: ["", Validators.required],
      subtitle_en: ["", Validators.required],
      subtitle_ar: ["", Validators.required],
      description_en: ["", Validators.required],
      description_ar: ["", Validators.required],
      icon: ["fa-solid fa-gear", Validators.required],
      cta_url: ["/contact"],
      cta_text_en: ["Get Started"],
      cta_text_ar: ["\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646"],
      order: [1],
      features_en: [""],
      features_ar: [""],
      stats_str_en: [""],
      stats_str_ar: [""]
    });
    this.blogForm = this.fb.group({
      title_en: ["", Validators.required],
      title_ar: ["", Validators.required],
      description_en: ["", Validators.required],
      description_ar: ["", Validators.required],
      img_alt: [""]
    });
    this.categoryForm = this.fb.group({
      name_en: ["", Validators.required],
      name_ar: ["", Validators.required],
      description_en: [""],
      description_ar: [""]
    });
    this.faqForm = this.fb.group({
      question_en: ["", Validators.required],
      question_ar: ["", Validators.required],
      answer_en: ["", Validators.required],
      answer_ar: ["", Validators.required],
      sort_order: [1],
      is_active: [true]
    });
    this.testimonialForm = this.fb.group({
      client_name: ["", Validators.required],
      job_title: ["", Validators.required],
      company_name: [""],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      avatar_color: ["#e8620a"],
      feedback_en: ["", Validators.required],
      feedback_ar: ["", Validators.required]
    });
    this.contactForm = this.fb.group({
      id: [""],
      whatsapp_phone: [""],
      whatsapp_desc: [""],
      official_email: [""],
      company_address: [""],
      google_maps_url: [""],
      emergency_support_info: [""]
    });
  }
  // --- Loader functions ---
  loadOverviewData() {
    this.apiService.getProjects().subscribe((res) => {
      const projectsArr = Array.isArray(res) ? res : res?.data || [];
      this.overviewStats.projects = projectsArr.length || 0;
      this.recentProjects = projectsArr.slice(0, 5);
      const projectCounts = {};
      projectsArr.forEach((p) => {
        let catName = p.category?.name_en || p.category?.name?.en;
        if (!catName && p.category?.name) {
          catName = typeof p.category.name === "object" ? p.category.name.en || p.category.name.ar : p.category.name;
        }
        if (!catName) {
          catName = p.category_id ? `Category #${p.category_id}` : "General";
        }
        projectCounts[catName] = (projectCounts[catName] || 0) + 1;
      });
      this.projectsChartData = Object.keys(projectCounts).map((key) => ({
        name: key,
        count: projectCounts[key]
      }));
    });
    this.apiService.getServices().subscribe((res) => {
      const servicesArr = Array.isArray(res) ? res : res?.data || [];
      this.overviewStats.services = servicesArr.length || 0;
    });
    this.apiService.getInquiries().subscribe((res) => {
      const inquiriesArr = Array.isArray(res) ? res : res?.data || [];
      this.overviewStats.inquiries = inquiriesArr.length || 0;
      const inquiryCounts = {};
      inquiriesArr.forEach((inq) => {
        let svcName = inq.service_needed;
        if (svcName && typeof svcName === "object") {
          svcName = svcName.en || svcName.ar || "General";
        }
        if (!svcName)
          svcName = "General";
        inquiryCounts[svcName] = (inquiryCounts[svcName] || 0) + 1;
      });
      this.inquiriesChartData = Object.keys(inquiryCounts).map((key) => ({
        name: key,
        count: inquiryCounts[key]
      }));
    });
    this.apiService.getTestimonials().subscribe((res) => {
      const testimonialsArr = Array.isArray(res) ? res : res?.data || [];
      this.overviewStats.testimonials = testimonialsArr.length || 0;
    });
    this.apiService.getUsers().subscribe((res) => {
      const arr = Array.isArray(res) ? res : res?.data || [];
      const clientUsers = arr.filter((u) => u.role === "client");
      this.crmStats.clients = clientUsers.length > 0 ? clientUsers.length : arr.length;
    });
    this.apiService.getDeals().subscribe((res) => {
      const arr = Array.isArray(res) ? res : res?.data || [];
      this.crmStats.deals = arr.length || 0;
      this.recentDeals = arr.slice(0, 6);
      let totalVal = 0;
      let totalPaid = 0;
      let newCount = 0;
      let wonCount = 0;
      let progressCount = 0;
      arr.forEach((d) => {
        const val = Number(d.calculated_total || d.value || d.amount || 0);
        const paid = Number(d.calculated_paid || d.paid || 0);
        totalVal += val;
        totalPaid += paid;
        const st = d.stage || d.status || "";
        if (st === "new")
          newCount++;
        else if (st === "won" || st === "closed" || st === "completed")
          wonCount++;
        else
          progressCount++;
      });
      this.crmStats.totalRevenue = totalVal;
      this.crmStats.totalPaid = totalPaid;
      this.crmStats.totalRemaining = Math.max(0, totalVal - totalPaid);
      this.crmStats.newDealsCount = newCount;
      this.crmStats.wonDealsCount = wonCount;
      this.crmStats.inProgressDealsCount = progressCount;
    });
    this.apiService.getTasks().subscribe((res) => {
      const arr = Array.isArray(res) ? res : res?.data || [];
      const mainTasks = arr.filter((t) => !t.parent_id && !t.parent);
      this.crmStats.tasks = mainTasks.length > 0 ? mainTasks.length : arr.length || 0;
      this.recentTasks = (mainTasks.length > 0 ? mainTasks : arr).slice(0, 6);
      let marginSum = 0;
      let pendingCount = 0;
      let inProgressCount = 0;
      let doneCount = 0;
      arr.forEach((t) => {
        const cp = Number(t.client_price || 0);
        const ep = Number(t.employee_price || 0);
        const margin = Number(t.company_margin || (cp > 0 ? cp - ep : 0));
        marginSum += margin;
        const st = t.status || "";
        if (st === "client_review" || st === "in_review") {
          pendingCount++;
        } else if (st === "done" || st === "approved") {
          doneCount++;
        } else {
          inProgressCount++;
        }
      });
      this.crmStats.totalMargin = marginSum;
      this.crmStats.pendingTasksCount = pendingCount;
      this.crmStats.inProgressTasksCount = inProgressCount;
      this.crmStats.doneTasksCount = doneCount;
    });
    this.apiService.getDepartments().subscribe((res) => {
      const arr = Array.isArray(res) ? res : res?.data || [];
      this.crmStats.departments = arr.length || 0;
    });
  }
  getCollectionPercentage() {
    const rev = this.crmStats.totalRevenue;
    if (!rev || rev === 0)
      return 0;
    return Math.min(100, Math.round(this.crmStats.totalPaid / rev * 100));
  }
  getOverallTasksCompletionRate() {
    const total = this.crmStats.tasks;
    if (!total || total === 0)
      return 0;
    return Math.min(100, Math.round(this.crmStats.doneTasksCount / total * 100));
  }
  loadProjects() {
    this.apiService.getProjects().subscribe((res) => {
      this.projects = Array.isArray(res) ? res : res?.data || [];
    });
  }
  loadCategories() {
    this.apiService.getCategories().subscribe((res) => {
      this.categories = Array.isArray(res) ? res : res?.data || [];
    });
  }
  loadServices() {
    this.apiService.getServices().subscribe((res) => {
      this.servicesList = Array.isArray(res) ? res : res?.data || [];
    });
  }
  loadBlogs() {
    this.apiService.getBlogs().subscribe((res) => {
      this.blogs = Array.isArray(res) ? res : res?.data || [];
    });
  }
  loadFaqs() {
    this.apiService.getFaqs().subscribe((res) => {
      this.faqs = Array.isArray(res) ? res : res?.data || [];
    });
  }
  loadTestimonials() {
    this.apiService.getTestimonials().subscribe((res) => {
      this.testimonials = Array.isArray(res) ? res : res?.data || [];
    });
  }
  loadInquiries() {
    this.apiService.getInquiries().subscribe((res) => {
      this.inquiries = Array.isArray(res) ? res : res?.data || [];
    });
  }
  loadContactInfo() {
    this.apiService.getContactInfo().subscribe((res) => {
      const info = res?.data || res;
      if (info && typeof info === "object") {
        this.contactForm.patchValue(info);
      }
    });
  }
  loadAboutData() {
    this.apiService.getAbout().subscribe((res) => {
      if (res && res.data) {
        this.aboutData.content = res.data.content || this.aboutData.content;
        this.aboutData.timeline = res.data.timeline || [];
        ["hero", "story", "vision", "mission", "values", "team_text"].forEach((key) => {
          if (!this.aboutData.content[key])
            this.aboutData.content[key] = { en: {}, ar: {} };
          if (!this.aboutData.content[key].en)
            this.aboutData.content[key].en = {};
          if (!this.aboutData.content[key].ar)
            this.aboutData.content[key].ar = {};
        });
      }
    });
  }
  loadPageData(page) {
    this.apiService.getPageContent(page).subscribe((res) => {
      if (res && res.data) {
        this.pagesData[page] = __spreadValues(__spreadValues({}, this.pagesData[page]), res.data);
      }
    });
  }
  // --- Project CRUD Operations ---
  onProjectImageSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.projectImageFile = file;
      const reader = new FileReader();
      reader.onload = (e) => this.projectImagePreview = e.target?.result;
      reader.readAsDataURL(file);
    }
  }
  saveProject() {
    if (this.projectForm.invalid)
      return;
    this.loadingProject = true;
    const formData = new FormData();
    const val = this.projectForm.value;
    Object.keys(val).forEach((key) => {
      if (key !== "tags" && key !== "deliverables" && key !== "results_str") {
        formData.append(key, val[key] || "");
      }
    });
    if (val.tags && typeof val.tags === "string") {
      const tagsArray = val.tags.split(",").map((t) => t.trim()).filter((t) => t);
      formData.append("tags", JSON.stringify(tagsArray));
    } else if (Array.isArray(val.tags)) {
      formData.append("tags", JSON.stringify(val.tags));
    } else {
      formData.append("tags", JSON.stringify([]));
    }
    if (val.deliverables && typeof val.deliverables === "string") {
      const delArray = val.deliverables.split(",").map((d) => d.trim()).filter((d) => d);
      formData.append("deliverables", JSON.stringify(delArray));
    } else if (Array.isArray(val.deliverables)) {
      formData.append("deliverables", JSON.stringify(val.deliverables));
    } else {
      formData.append("deliverables", JSON.stringify([]));
    }
    if (val.results_str && typeof val.results_str === "string") {
      const resultsArray = val.results_str.split(",").map((r) => {
        const parts = r.split(":");
        return {
          value: parts[0]?.trim() || "",
          label: parts[1]?.trim() || ""
        };
      }).filter((r) => r.value || r.label);
      formData.append("results", JSON.stringify(resultsArray));
    } else {
      formData.append("results", JSON.stringify([]));
    }
    if (this.projectImageFile) {
      formData.append("main_image", this.projectImageFile);
    }
    if (this.isEditingProject && this.currentProjectId) {
      this.apiService.updateProject(this.currentProjectId, formData).subscribe({
        next: () => {
          this.loadingProject = false;
          this.cancelEditProject();
          this.loadProjects();
          this.loadOverviewData();
          alert("Project updated successfully!");
        },
        error: () => this.loadingProject = false
      });
    } else {
      this.apiService.addProject(formData).subscribe({
        next: () => {
          this.loadingProject = false;
          this.cancelEditProject();
          this.loadProjects();
          this.loadOverviewData();
          alert("Project created successfully!");
        },
        error: () => this.loadingProject = false
      });
    }
  }
  editProject(project) {
    this.showProjectForm = true;
    this.isEditingProject = true;
    this.currentProjectId = project.id;
    const tagsStr = Array.isArray(project.tags) ? project.tags.join(", ") : "";
    const delStr = Array.isArray(project.deliverables) ? project.deliverables.join(", ") : "";
    const resStr = Array.isArray(project.results) ? project.results.map((r) => `${r.value}:${r.label}`).join(", ") : "";
    this.projectForm.patchValue({
      title_en: project.title_en || project.title,
      title_ar: project.title_ar,
      category_id: project.category_id,
      description_en: project.description_en,
      description_ar: project.description_ar,
      main_image_alt: project.main_image_alt,
      color: project.color || "#000000",
      emoji: project.emoji || "\u{1F3D7}\uFE0F",
      tags: tagsStr,
      client: project.client || "",
      timeline: project.timeline || "",
      challenge_en: project.challenge_en,
      challenge_ar: project.challenge_ar,
      solution_en: project.solution_en,
      solution_ar: project.solution_ar,
      deliverables: delStr,
      results_str: resStr,
      testimonial_text: project.testimonial_text,
      testimonial_name: project.testimonial_name,
      testimonial_role: project.testimonial_role,
      testimonial_avatar: project.testimonial_avatar
    });
    this.projectImagePreview = project.main_image_url || null;
  }
  cancelEditProject() {
    this.showProjectForm = false;
    this.isEditingProject = false;
    this.currentProjectId = null;
    this.projectImageFile = null;
    this.projectImagePreview = null;
    this.projectForm.reset({
      category_id: "",
      color: "#000000",
      emoji: "\u{1F3D7}\uFE0F"
    });
  }
  deleteProject(id) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
      message: "\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u061F",
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteProject(id).subscribe(() => {
          this.loadProjects();
          this.loadOverviewData();
        });
      }
    });
  }
  // --- Category CRUD Operations ---
  onCategoryImageSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.categoryImageFile = file;
      const reader = new FileReader();
      reader.onload = (e) => this.categoryImagePreview = e.target?.result;
      reader.readAsDataURL(file);
    }
  }
  saveCategory() {
    if (this.categoryForm.invalid)
      return;
    this.loadingCategory = true;
    const formData = new FormData();
    const val = this.categoryForm.value;
    formData.append("name_en", val.name_en);
    formData.append("name_ar", val.name_ar);
    formData.append("description_en", val.description_en || "");
    formData.append("description_ar", val.description_ar || "");
    if (this.categoryImageFile) {
      formData.append("image", this.categoryImageFile);
    }
    if (this.isEditingCategory && this.currentCategoryId) {
      this.apiService.updateCategory(this.currentCategoryId, formData).subscribe({
        next: () => {
          this.loadingCategory = false;
          this.cancelEditCategory();
          this.loadCategories();
          alert("Category updated successfully!");
        },
        error: () => this.loadingCategory = false
      });
    } else {
      this.apiService.addCategory(formData).subscribe({
        next: () => {
          this.loadingCategory = false;
          this.cancelEditCategory();
          this.loadCategories();
          alert("Category created successfully!");
        },
        error: () => this.loadingCategory = false
      });
    }
  }
  editCategory(category) {
    this.showCategoryForm = true;
    this.isEditingCategory = true;
    this.currentCategoryId = category.id;
    this.categoryForm.patchValue({
      name_en: category.name_en || (typeof category.name === "object" ? category.name.en : category.name),
      name_ar: category.name_ar || (typeof category.name === "object" ? category.name.ar : ""),
      description_en: category.description_en || (typeof category.description === "object" ? category.description.en : ""),
      description_ar: category.description_ar || (typeof category.description === "object" ? category.description.ar : "")
    });
    this.categoryImagePreview = category.image_url || category.image || null;
  }
  cancelEditCategory() {
    this.showCategoryForm = false;
    this.isEditingCategory = false;
    this.currentCategoryId = null;
    this.categoryImageFile = null;
    this.categoryImagePreview = null;
    this.categoryForm.reset();
  }
  deleteCategory(id) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641",
      message: "\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u061F",
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteCategory(id).subscribe(() => {
          this.loadCategories();
        });
      }
    });
  }
  // --- Service CRUD Operations ---
  saveService() {
    if (this.serviceForm.invalid)
      return;
    this.loadingService = true;
    const formData = new FormData();
    const val = this.serviceForm.value;
    formData.append("icon", val.icon || "fa-solid fa-gear");
    formData.append("cta_url", val.cta_url || "/contact");
    formData.append("cta_text_en", val.cta_text_en || "Get Started");
    formData.append("cta_text_ar", val.cta_text_ar || "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646");
    formData.append("order", String(val.order || 1));
    formData.append("title[en]", val.title_en);
    formData.append("title[ar]", val.title_ar);
    formData.append("subtitle[en]", val.subtitle_en);
    formData.append("subtitle[ar]", val.subtitle_ar);
    formData.append("description[en]", val.description_en);
    formData.append("description[ar]", val.description_ar);
    const featsEn = val.features_en ? val.features_en.split(",").map((f) => f.trim()).filter((f) => f) : [];
    const featsAr = val.features_ar ? val.features_ar.split(",").map((f) => f.trim()).filter((f) => f) : [];
    formData.append("features[en]", JSON.stringify(featsEn));
    formData.append("features[ar]", JSON.stringify(featsAr));
    const parseStats = (str) => {
      if (!str)
        return [];
      return str.split(",").map((s) => {
        const parts = s.split(":");
        return {
          label: parts[0]?.trim() || "",
          sub: parts[1]?.trim() || "",
          badge: parts[2]?.trim() || ""
        };
      }).filter((s) => s.label || s.sub);
    };
    formData.append("stats[en]", JSON.stringify(parseStats(val.stats_str_en)));
    formData.append("stats[ar]", JSON.stringify(parseStats(val.stats_str_ar)));
    if (this.isEditingService && this.currentServiceId) {
      this.apiService.updateService(this.currentServiceId, formData).subscribe({
        next: () => {
          this.loadingService = false;
          this.cancelEditService();
          this.loadServices();
          this.loadOverviewData();
          alert("Service updated successfully!");
        },
        error: () => this.loadingService = false
      });
    } else {
      this.apiService.addService(formData).subscribe({
        next: () => {
          this.loadingService = false;
          this.cancelEditService();
          this.loadServices();
          this.loadOverviewData();
          alert("Service created successfully!");
        },
        error: () => this.loadingService = false
      });
    }
  }
  editService(service) {
    this.showServiceForm = true;
    this.isEditingService = true;
    this.currentServiceId = service.id;
    const getFeaturesStr = (features, lang) => {
      if (!features)
        return "";
      if (Array.isArray(features)) {
        return features.map((f) => typeof f === "object" ? f[lang] || "" : f).filter((f) => f).join(", ");
      }
      return "";
    };
    const getStatsStr = (stats, lang) => {
      if (!stats)
        return "";
      if (Array.isArray(stats)) {
        return stats.map((s) => {
          const lbl = typeof s.label === "object" ? s.label[lang] || "" : s.label;
          const sub = typeof s.sub === "object" ? s.sub[lang] || "" : s.sub;
          const bdg = typeof s.badge === "object" ? s.badge[lang] || "" : s.badge;
          return `${lbl}:${sub}${bdg ? ":" + bdg : ""}`;
        }).join(", ");
      }
      return "";
    };
    this.serviceForm.patchValue({
      title_en: service.title_en || (typeof service.title === "object" ? service.title.en : ""),
      title_ar: service.title_ar || (typeof service.title === "object" ? service.title.ar : ""),
      subtitle_en: service.subtitle_en || (typeof service.category === "object" ? service.category.en : ""),
      subtitle_ar: service.subtitle_ar || (typeof service.category === "object" ? service.category.ar : ""),
      description_en: service.description_en || (typeof service.description === "object" ? service.description.en : ""),
      description_ar: service.description_ar || (typeof service.description === "object" ? service.description.ar : ""),
      icon: service.iconClass || service.icon || "fa-solid fa-gear",
      cta_url: service.cta_url || "/contact",
      cta_text_en: service.ctaText?.en || service.cta_text_en || "Get Started",
      cta_text_ar: service.ctaText?.ar || service.cta_text_ar || "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646",
      order: service.order || 1,
      features_en: getFeaturesStr(service.features, "en"),
      features_ar: getFeaturesStr(service.features, "ar"),
      stats_str_en: getStatsStr(service.stats, "en"),
      stats_str_ar: getStatsStr(service.stats, "ar")
    });
  }
  cancelEditService() {
    this.showServiceForm = false;
    this.isEditingService = false;
    this.currentServiceId = null;
    this.serviceForm.reset({
      icon: "fa-solid fa-gear",
      cta_url: "/contact",
      cta_text_en: "Get Started",
      cta_text_ar: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646",
      order: 1
    });
  }
  deleteService(id) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u062E\u062F\u0645\u0629",
      message: "\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u0647\u0630\u0647 \u0627\u0644\u062E\u062F\u0645\u0629\u061F",
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteService(id).subscribe(() => {
          this.loadServices();
          this.loadOverviewData();
        });
      }
    });
  }
  // --- Blog CRUD Operations ---
  onBlogImageSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.blogImageFile = file;
      const reader = new FileReader();
      reader.onload = (e) => this.blogImagePreview = e.target?.result;
      reader.readAsDataURL(file);
    }
  }
  saveBlog() {
    if (this.blogForm.invalid)
      return;
    this.loadingBlog = true;
    const formData = new FormData();
    const val = this.blogForm.value;
    formData.append("title[en]", val.title_en);
    formData.append("title[ar]", val.title_ar);
    formData.append("description[en]", val.description_en);
    formData.append("description[ar]", val.description_ar);
    formData.append("img_alt", val.img_alt || val.title_en);
    if (this.blogImageFile) {
      formData.append("media", this.blogImageFile);
    }
    if (this.isEditingBlog && this.currentBlogId) {
      this.apiService.updateBlog(this.currentBlogId, formData).subscribe({
        next: () => {
          this.loadingBlog = false;
          this.cancelEditBlog();
          this.loadBlogs();
          alert("Article updated successfully!");
        },
        error: () => this.loadingBlog = false
      });
    } else {
      this.apiService.addBlog(formData).subscribe({
        next: () => {
          this.loadingBlog = false;
          this.cancelEditBlog();
          this.loadBlogs();
          alert("Article published successfully!");
        },
        error: () => this.loadingBlog = false
      });
    }
  }
  editBlog(blog) {
    this.showBlogForm = true;
    this.isEditingBlog = true;
    this.currentBlogId = blog.id;
    this.blogForm.patchValue({
      title_en: blog.title_en || (typeof blog.title === "object" ? blog.title.en : blog.title),
      title_ar: blog.title_ar || (typeof blog.title === "object" ? blog.title.ar : ""),
      description_en: blog.description_en || (typeof blog.description === "object" ? blog.description.en : blog.description),
      description_ar: blog.description_ar || (typeof blog.description === "object" ? blog.description.ar : ""),
      img_alt: blog.img_alt || ""
    });
    this.blogImagePreview = blog.media_url || blog.image || null;
  }
  cancelEditBlog() {
    this.showBlogForm = false;
    this.isEditingBlog = false;
    this.currentBlogId = null;
    this.blogImageFile = null;
    this.blogImagePreview = null;
    this.blogForm.reset();
  }
  deleteBlog(id) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u0645\u0642\u0627\u0644",
      message: "\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0642\u0627\u0644\u061F",
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteBlog(id).subscribe(() => {
          this.loadBlogs();
        });
      }
    });
  }
  // --- Testimonial CRUD Operations ---
  saveTestimonial() {
    if (this.testimonialForm.invalid)
      return;
    this.loadingTestimonial = true;
    const val = this.testimonialForm.value;
    const payload = {
      client_name: val.client_name,
      job_title: val.job_title,
      company_name: val.company_name || "",
      rating: Number(val.rating || 5),
      avatar_color: val.avatar_color || "#e8620a",
      feedback: {
        en: val.feedback_en,
        ar: val.feedback_ar
      }
    };
    if (this.isEditingTestimonial && this.currentTestimonialId) {
      this.apiService.updateTestimonial(this.currentTestimonialId, payload).subscribe({
        next: () => {
          this.loadingTestimonial = false;
          this.cancelEditTestimonial();
          this.loadTestimonials();
          this.loadOverviewData();
          alert("Testimonial updated successfully!");
        },
        error: () => this.loadingTestimonial = false
      });
    } else {
      this.apiService.addTestimonial(payload).subscribe({
        next: () => {
          this.loadingTestimonial = false;
          this.cancelEditTestimonial();
          this.loadTestimonials();
          this.loadOverviewData();
          alert("Testimonial added successfully!");
        },
        error: () => this.loadingTestimonial = false
      });
    }
  }
  editTestimonial(testimonial) {
    this.showTestimonialForm = true;
    this.isEditingTestimonial = true;
    this.currentTestimonialId = testimonial.id;
    this.testimonialForm.patchValue({
      client_name: testimonial.client_name,
      job_title: testimonial.job_title,
      company_name: testimonial.company_name || "",
      rating: testimonial.rating || 5,
      avatar_color: testimonial.avatar_color || "#e8620a",
      feedback_en: testimonial.feedback_en || (typeof testimonial.feedback === "object" ? testimonial.feedback.en : testimonial.feedback),
      feedback_ar: testimonial.feedback_ar || (typeof testimonial.feedback === "object" ? testimonial.feedback.ar : "")
    });
  }
  cancelEditTestimonial() {
    this.showTestimonialForm = false;
    this.isEditingTestimonial = false;
    this.currentTestimonialId = null;
    this.testimonialForm.reset({
      rating: 5,
      avatar_color: "#e8620a"
    });
  }
  deleteTestimonial(id) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u062A\u0642\u064A\u064A\u0645",
      message: "\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u062A\u0642\u064A\u064A\u0645\u061F",
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteTestimonial(id).subscribe(() => {
          this.loadTestimonials();
          this.loadOverviewData();
        });
      }
    });
  }
  // --- FAQ CRUD Operations ---
  saveFaq() {
    if (this.faqForm.invalid)
      return;
    this.loadingFaq = true;
    const val = this.faqForm.value;
    const payload = {
      question_en: val.question_en,
      question_ar: val.question_ar,
      answer_en: val.answer_en,
      answer_ar: val.answer_ar,
      sort_order: val.sort_order || 1,
      is_active: val.is_active ? 1 : 0
    };
    if (this.isEditingFaq && this.currentFaqId) {
      this.apiService.updateFaq(this.currentFaqId, payload).subscribe({
        next: () => {
          this.loadingFaq = false;
          this.cancelEditFaq();
          this.loadFaqs();
          alert("FAQ updated successfully!");
        },
        error: () => this.loadingFaq = false
      });
    } else {
      this.apiService.addFaq(payload).subscribe({
        next: () => {
          this.loadingFaq = false;
          this.cancelEditFaq();
          this.loadFaqs();
          alert("FAQ created successfully!");
        },
        error: () => this.loadingFaq = false
      });
    }
  }
  editFaq(faq) {
    this.showFaqForm = true;
    this.isEditingFaq = true;
    this.currentFaqId = faq.id;
    this.faqForm.patchValue({
      question_en: faq.question_en,
      question_ar: faq.question_ar,
      answer_en: faq.answer_en,
      answer_ar: faq.answer_ar,
      sort_order: faq.order || faq.sort_order || 1,
      is_active: faq.is_active !== void 0 ? faq.is_active : true
    });
  }
  cancelEditFaq() {
    this.showFaqForm = false;
    this.isEditingFaq = false;
    this.currentFaqId = null;
    this.faqForm.reset({
      sort_order: 1,
      is_active: true
    });
  }
  deleteFaq(id) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u0634\u0627\u0626\u0639",
      message: "\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0633\u0624\u0627\u0644\u061F",
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteFaq(id).subscribe(() => {
          this.loadFaqs();
        });
      }
    });
  }
  // --- Contact & Inquiries Operations ---
  saveContactInfo() {
    this.loadingInfo = true;
    this.infoMessage = "";
    this.apiService.updateContactInfo(this.contactForm.value).subscribe({
      next: (res) => {
        this.loadingInfo = false;
        this.infoMessage = "Saved successfully!";
        setTimeout(() => this.infoMessage = "", 3e3);
      },
      error: () => {
        this.loadingInfo = false;
        this.infoMessage = "Failed to save.";
      }
    });
  }
  deleteInquiry(id) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631",
      message: "\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u061F",
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteInquiry(id).subscribe(() => {
          this.loadInquiries();
          this.loadOverviewData();
        });
      }
    });
  }
  // --- Legacy Page Editor operations ---
  addTimeline() {
    this.aboutData.timeline.push({ year: "", title: { en: "", ar: "" }, description: { en: "", ar: "" } });
  }
  removeTimeline(index) {
    this.aboutData.timeline.splice(index, 1);
  }
  saveAboutData() {
    this.isSavingAbout = true;
    const payload = {
      hero: this.aboutData.content.hero,
      story: this.aboutData.content.story,
      vision: this.aboutData.content.vision,
      mission: this.aboutData.content.mission,
      values: this.aboutData.content.values,
      team_text: this.aboutData.content.team_text,
      timeline: this.aboutData.timeline
    };
    this.apiService.updateAbout(payload).subscribe({
      next: () => {
        this.isSavingAbout = false;
        alert("About page updated successfully!");
      },
      error: () => {
        this.isSavingAbout = false;
        alert("Error updating about page");
      }
    });
  }
  savePageData(page) {
    this.isSavingPage[page] = true;
    this.apiService.updatePageContent(page, this.pagesData[page]).subscribe({
      next: () => {
        this.isSavingPage[page] = false;
        alert(`${page} page updated successfully!`);
      },
      error: () => {
        this.isSavingPage[page] = false;
        alert(`Error updating ${page} page`);
      }
    });
  }
  // --- UI Layout handlers ---
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  loadDataForTab(tab) {
    switch (tab) {
      case "overview":
        this.loadOverviewData();
        break;
      case "services":
        this.loadServices();
        break;
      case "projects":
        this.loadProjects();
        this.loadCategories();
        break;
      case "categories":
        this.loadCategories();
        break;
      case "blogs":
        this.loadBlogs();
        break;
      case "testimonials":
        this.loadTestimonials();
        break;
      case "faqs":
        this.loadFaqs();
        break;
      case "contact-hub":
        this.loadInquiries();
        this.loadContactInfo();
        break;
      case "home-page":
        this.loadPageData("home");
        break;
      case "about-page":
        this.loadAboutData();
        break;
      case "services-page":
        this.loadPageData("services");
        break;
      case "portfolio-page":
        this.loadPageData("portfolio");
        break;
      case "blogs-page":
        this.loadPageData("blogs");
        break;
      case "footer-section":
        this.loadPageData("footer");
        break;
    }
  }
  setTab(tab) {
    this.activeTab = tab;
    this.loadDataForTab(tab);
    if (window.innerWidth <= 992) {
      this.sidebarOpen = false;
    }
  }
  toggleWebsiteMenu() {
    this.websiteMenuOpen = !this.websiteMenuOpen;
  }
  toggleDropdown(dd) {
    if (this.activeDropdown === dd) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dd;
    }
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".tb-user") && !target.closest(".dd-user") && !target.closest(".tb-btn") && !target.closest(".dd-notif") && !target.closest(".sb-user")) {
      this.activeDropdown = null;
    }
  }
  logout() {
    localStorage.removeItem("mediaglow_client_token");
    this.router.navigate(["/login"]);
  }
  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }
  static \u0275fac = function ControllerDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ControllerDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControllerDashboardComponent, selectors: [["app-controller-dashboard"]], hostBindings: function ControllerDashboardComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ControllerDashboardComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 709, vars: 158, consts: [["emptyDealsV2", ""], ["emptyTasksV2", ""], ["emptyChartV2", ""], ["emptyProjectsV2", ""], [1, "view"], [1, "dash-root"], [1, "dash-head", "glass-panel"], [1, "dash-eyebrow"], [1, "dash-pulse"], [1, "dash-title"], [1, "dash-desc"], [1, "dash-head-actions"], ["routerLink", "/deals", 1, "dash-btn", "dash-btn-outline"], [1, "fa-solid", "fa-handshake"], ["routerLink", "/tasks", 1, "dash-btn", "dash-btn-solid"], [1, "fa-solid", "fa-list-check"], [1, "dash-kpi-grid"], ["routerLink", "/deals", 1, "kpi-card", "card-blue"], [1, "kpi-card-head"], [1, "kpi-icon-badge", "blue"], [1, "fa-solid", "fa-file-invoice-dollar"], [1, "kpi-pill", "blue"], [1, "fa-solid", "fa-coins"], [1, "kpi-card-body"], [1, "kpi-value", "blue"], [1, "kpi-currency"], [1, "kpi-title"], [1, "kpi-subtitle"], ["class", "kpi-card card-emerald", "routerLink", "/finance", 4, "ngIf"], ["class", "kpi-card card-amber", "routerLink", "/finance", 4, "ngIf"], ["class", "kpi-card card-purple", "routerLink", "/finance", 4, "ngIf"], ["routerLink", "/clients", 1, "kpi-card", "card-cyan"], [1, "kpi-icon-badge", "cyan"], [1, "fa-solid", "fa-users"], [1, "kpi-pill", "cyan"], [1, "fa-solid", "fa-shield-halved"], [1, "kpi-value", "cyan"], ["routerLink", "/tasks", 1, "kpi-card", "card-indigo"], [1, "kpi-icon-badge", "indigo"], [1, "kpi-pill", "indigo"], [1, "fa-solid", "fa-bars-progress"], [1, "kpi-value", "indigo"], [1, "dash-analytics-grid"], ["class", "analytics-card glass-panel", 4, "ngIf"], [1, "analytics-card", "glass-panel"], [1, "ac-head"], [1, "fa-solid", "fa-list-check", "text-cyan"], [1, "ac-badge", "cyan"], [1, "ac-progress-box"], [1, "ac-pb-header"], [1, "ac-pb-track"], [1, "ac-pb-fill", "cyan"], [1, "ac-legend"], [1, "legend-item"], [1, "dot", "emerald"], [1, "dot", "amber"], [1, "dot", "violet"], [1, "dash-grid"], [1, "dash-panel", "glass-panel"], [1, "dash-panel-head"], [1, "dash-panel-title"], [1, "fa-solid", "fa-handshake", "text-blue"], ["routerLink", "/deals", 1, "dash-panel-link"], [1, "fa-solid", "fa-angle-left"], [1, "dash-panel-body"], [4, "ngIf", "ngIfElse"], [1, "fa-solid", "fa-list-check", "text-amber"], ["routerLink", "/tasks", 1, "dash-panel-link"], [1, "dash-shortcuts"], ["routerLink", "/clients", 1, "dash-shortcut"], [1, "fa-solid", "fa-users", "text-purple"], ["routerLink", "/deals", 1, "dash-shortcut"], ["routerLink", "/tasks", 1, "dash-shortcut"], ["class", "dash-shortcut", "routerLink", "/finance", 4, "ngIf"], ["routerLink", "/departments", 1, "dash-shortcut"], [1, "fa-solid", "fa-sitemap", "text-cyan"], ["class", "dash-shortcut", "routerLink", "/roles", 4, "ngIf"], [1, "dash-head"], [1, "dash-eyebrow", "dash-eyebrow-teal"], [1, "dash-pulse", "dash-pulse-teal"], [1, "dash-btn", "dash-btn-outline", 3, "click"], [1, "fa-solid", "fa-inbox"], [1, "dash-btn", "dash-btn-solid", "dash-btn-teal", 3, "click"], [1, "fa-solid", "fa-folder-open"], [1, "dash-kpi-grid", "grid-4-cols"], [1, "kpi-card", "card-purple", 3, "click"], [1, "kpi-icon-badge", "purple"], [1, "kpi-pill", "purple"], [1, "fa-solid", "fa-arrow-trend-up"], [1, "kpi-value", "purple"], [1, "kpi-card", "card-blue", 3, "click"], [1, "fa-solid", "fa-gears"], [1, "fa-solid", "fa-circle-check"], [1, "kpi-card", "card-amber", 3, "click"], [1, "kpi-icon-badge", "amber"], [1, "fa-solid", "fa-star"], [1, "kpi-pill", "amber"], [1, "fa-solid", "fa-thumbs-up"], [1, "kpi-value", "amber"], [1, "kpi-card", "card-rose", 3, "click"], [1, "kpi-icon-badge", "rose"], [1, "fa-solid", "fa-envelope"], [1, "kpi-pill", "rose"], [1, "fa-solid", "fa-bell"], [1, "kpi-value", "rose"], [1, "dash-panel"], [1, "fa-solid", "fa-chart-pie"], [1, "dash-panel-link", 3, "click"], [1, "fa-solid", "fa-rocket"], [1, "dash-shortcut", 3, "click"], [1, "fa-solid", "fa-newspaper"], [1, "fa-solid", "fa-circle-question"], ["class", "card", "style", "margin-bottom: 24px;", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "card-title"], [2, "display", "flex", "gap", "10px"], [1, "save-btn", "font-small", 3, "click"], [1, "fa-solid"], [1, "action-btn", "font-small", 3, "click"], [1, "fa-solid", "fa-rotate"], [1, "table-responsive"], [2, "background", "rgba(255,255,255,0.02)"], [2, "width", "80px"], [2, "width", "140px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "width", "70px", "text-align", "center"], [2, "width", "90px"], [2, "width", "90px", "text-align", "center"], [2, "width", "70px"], [2, "width", "80px", "text-align", "center"], [2, "width", "100px", "text-align", "center"], [1, "card", 2, "margin-bottom", "24px"], [1, "cb", 2, "padding", "24px"], [3, "ngSubmit", "formGroup"], [1, "form-grid-custom"], [1, "fgroup"], [1, "s-label"], ["formControlName", "whatsapp_phone", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: +966500000000", 1, "s-input"], ["formControlName", "whatsapp_desc", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A", 1, "s-input"], ["formControlName", "official_email", "type", "email", "placeholder", "\u0645\u062B\u0627\u0644: info@mediaglow.com", 1, "s-input"], ["formControlName", "company_address", "type", "text", "placeholder", "\u0627\u0644\u0631\u064A\u0627\u0636\u060C \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629", 1, "s-input"], [1, "fgroup", "full-width"], ["formControlName", "google_maps_url", "type", "text", "placeholder", "https://maps.google.com/...", 1, "s-input"], ["formControlName", "emergency_support_info", "type", "text", "placeholder", "\u0627\u062A\u0635\u0644 \u0639\u0644\u0649 +9665XXXXXXX \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0637\u0627\u0631\u0626\u0629", 1, "s-input"], [2, "margin-top", "30px", "display", "flex", "align-items", "center"], ["type", "submit", 1, "save-btn", 3, "disabled"], [1, "fa-solid", "fa-floppy-disk"], ["style", "margin-right: 15px; color: var(--orange); font-weight:600;", 4, "ngIf"], [2, "width", "100px"], [1, "pg-head"], [1, "save-btn", 2, "margin-top", "16px", 3, "click", "disabled"], [1, "card", 2, "margin-top", "24px"], ["type", "text", 1, "s-input", 3, "ngModelChange", "ngModel"], ["type", "text", "dir", "rtl", 1, "s-input", 3, "ngModelChange", "ngModel"], [1, "full-width"], ["rows", "3", 1, "s-input", 3, "ngModelChange", "ngModel"], ["rows", "3", "dir", "rtl", 1, "s-input", 3, "ngModelChange", "ngModel"], [1, "card", 2, "margin-top", "24px", "margin-bottom", "24px"], [1, "fa-solid", "fa-plus"], ["style", "background:rgba(255,255,255,0.01); padding:20px; border-radius:12px; margin-bottom:16px; border:1px solid var(--admin-border); position:relative", 4, "ngFor", "ngForOf"], ["style", "color:rgba(255,255,255,0.5)", 4, "ngIf"], ["routerLink", "/finance", 1, "kpi-card", "card-emerald"], [1, "kpi-icon-badge", "emerald"], [1, "kpi-pill", "emerald"], [1, "kpi-value", "emerald"], ["routerLink", "/finance", 1, "kpi-card", "card-amber"], [1, "fa-solid", "fa-clock-rotate-left"], [1, "fa-solid", "fa-hourglass-half"], ["routerLink", "/finance", 1, "kpi-card", "card-purple"], [1, "fa-solid", "fa-chart-line"], [1, "fa-solid", "fa-sack-dollar"], [1, "fa-solid", "fa-chart-pie", "text-emerald"], [1, "ac-badge", "emerald"], [1, "ac-pb-fill", "emerald"], [1, "dot", "rose"], ["class", "dash-row", 4, "ngFor", "ngForOf"], [1, "dash-row"], [1, "dash-row-avatar"], [1, "dash-row-info"], [1, "dash-row-name"], [1, "dash-row-meta"], [1, "fa-solid", "fa-building"], [1, "dash-row-end"], [1, "dash-amount"], [1, "dash-status-badge"], [1, "dash-empty"], [1, "fa-solid", "fa-user-gear"], [1, "dash-priority"], ["routerLink", "/finance", 1, "dash-shortcut"], [1, "fa-solid", "fa-coins", "text-emerald"], ["routerLink", "/roles", 1, "dash-shortcut"], [1, "fa-solid", "fa-shield-halved", "text-rose"], ["class", "dash-bar-item", 4, "ngFor", "ngForOf"], [1, "dash-bar-item"], [1, "dash-bar-info"], [1, "dash-bar-name"], [1, "dash-bar-count"], [1, "dash-bar-track"], [1, "dash-bar-fill"], [1, "dash-bar-pct"], [1, "dash-row-thumb"], [3, "src", 4, "ngIf"], ["class", "dash-row-thumb-placeholder", 3, "class", 4, "ngIf"], [1, "dash-client-tag"], [3, "src"], [1, "dash-row-thumb-placeholder"], [1, "action-btn", 3, "click"], [1, "fa-solid", "fa-xmark"], ["formControlName", "title_en", "type", "text", "required", "", "placeholder", "e.g. Web Development", 1, "s-input"], ["formControlName", "title_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064A\u0628", "dir", "rtl", 1, "s-input"], ["formControlName", "subtitle_en", "type", "text", "required", "", "placeholder", "e.g. Technology", 1, "s-input"], ["formControlName", "subtitle_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u0627\u0644\u062A\u0642\u0646\u064A\u0629", "dir", "rtl", 1, "s-input"], ["formControlName", "description_en", "rows", "3", "required", "", 1, "s-input"], ["formControlName", "description_ar", "rows", "3", "required", "", "dir", "rtl", 1, "s-input"], ["formControlName", "icon", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: fa-solid fa-laptop-code", 1, "s-input"], ["formControlName", "order", "type", "number", 1, "s-input"], ["formControlName", "features_en", "type", "text", "placeholder", "e.g. Fast Loading, Custom CMS, Responsive Design", 1, "s-input"], ["formControlName", "features_ar", "type", "text", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u062A\u062D\u0645\u064A\u0644 \u0633\u0631\u064A\u0639\u060C \u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u0645\u062E\u0635\u0635\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u0645\u062A\u062C\u0627\u0648\u0628", "dir", "rtl", 1, "s-input"], ["formControlName", "stats_str_en", "type", "text", "placeholder", "e.g. 100%:Customized:New, 24/7:Support:N/A", 1, "s-input"], ["formControlName", "stats_str_ar", "type", "text", "placeholder", "\u0645\u062B\u0644\u0627\u064B: %100:\u0645\u062E\u0635\u0635:\u062C\u062F\u064A\u062F\u060C 24/7:\u062F\u0639\u0645 \u0645\u062A\u0648\u0627\u0635\u0644", "dir", "rtl", 1, "s-input"], ["formControlName", "cta_text_en", "type", "text", 1, "s-input"], ["formControlName", "cta_text_ar", "type", "text", "dir", "rtl", 1, "s-input"], ["formControlName", "cta_url", "type", "text", "placeholder", "/contact", 1, "s-input"], [2, "margin-top", "30px", "display", "flex", "gap", "15px"], [2, "text-align", "center", "font-size", "1.2rem", "padding", "15px"], [1, "badge", "badge-blue"], [1, "table-actions"], ["data-tooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629", "title", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629", 1, "action-icon-btn", "btn-amber", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], ["data-tooltip", "\u062D\u0630\u0641 \u0627\u0644\u062E\u062F\u0645\u0629", "title", "\u062D\u0630\u0641 \u0627\u0644\u062E\u062F\u0645\u0629", 1, "action-icon-btn", "btn-rose", 3, "click"], [1, "fa-solid", "fa-trash-can"], ["colspan", "5", 2, "text-align", "center", "padding", "20px"], [2, "margin-bottom", "15px", "border-bottom", "1px solid var(--admin-border)", "padding-bottom", "5px", "color", "var(--orange)"], ["formControlName", "title_en", "type", "text", "required", "", "placeholder", "e.g. Media Glow E-Commerce Platform", 1, "s-input"], ["formControlName", "title_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u0645\u062A\u062C\u0631 \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "dir", "rtl", 1, "s-input"], ["formControlName", "category_id", "required", "", 1, "s-input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "main_image_alt", "type", "text", "placeholder", "\u0646\u0635 SEO \u0627\u0644\u0628\u062F\u064A\u0644", 1, "s-input"], [2, "margin-top", "25px", "margin-bottom", "15px", "border-bottom", "1px solid var(--admin-border)", "padding-bottom", "5px", "color", "var(--orange)"], [2, "display", "flex", "gap", "10px", "align-items", "center"], ["type", "color", "formControlName", "color", 2, "width", "45px", "height", "45px", "border", "none", "border-radius", "8px", "cursor", "pointer", "background", "transparent"], ["formControlName", "color", "type", "text", "placeholder", "#000000", 1, "s-input", 2, "flex", "1"], ["formControlName", "emoji", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: fa-solid fa-rocket", 1, "s-input"], ["type", "file", "accept", "image/*", 1, "s-input", 2, "padding-top", "10px", 3, "change"], ["style", "margin-top: 10px;", 4, "ngIf"], ["formControlName", "client", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0623\u0648\u0631\u0627 \u0644\u0644\u062A\u062C\u0645\u064A\u0644", 1, "s-input"], ["formControlName", "timeline", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: 3 \u0623\u0634\u0647\u0631", 1, "s-input"], ["formControlName", "tags", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u0645\u062A\u062C\u0631 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u060C \u0623\u0646\u062C\u0648\u0644\u0627\u0631\u060C \u0644\u0627\u0631\u0627\u0641\u064A\u0644", 1, "s-input"], ["formControlName", "deliverables", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u062A\u0635\u0645\u064A\u0645 UI/UX\u060C \u0628\u0648\u0627\u0628\u0627\u062A \u0627\u0644\u062F\u0641\u0639\u060C \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0633\u064A\u0648", 1, "s-input"], ["formControlName", "challenge_en", "rows", "3", 1, "s-input"], ["formControlName", "challenge_ar", "rows", "3", "dir", "rtl", 1, "s-input"], ["formControlName", "solution_en", "rows", "3", 1, "s-input"], ["formControlName", "solution_ar", "rows", "3", "dir", "rtl", 1, "s-input"], ["formControlName", "results_str", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: 150%:\u0646\u0645\u0648 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A\u060C %99.9:\u0633\u0631\u0639\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644", 1, "s-input"], ["formControlName", "testimonial_text", "rows", "2", "placeholder", "\u0627\u0643\u062A\u0628 \u0627\u0642\u062A\u0628\u0627\u0633 \u0627\u0644\u0639\u0645\u064A\u0644...", 1, "s-input"], ["formControlName", "testimonial_name", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u0641\u0647\u062F \u0627\u0644\u0645\u0646\u0635\u0648\u0631\u064A", 1, "s-input"], ["formControlName", "testimonial_role", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u0627\u0644\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A", 1, "s-input"], ["formControlName", "testimonial_avatar", "type", "text", "placeholder", "HTTPS image URL", 1, "s-input"], [3, "value"], [2, "margin-top", "10px"], [2, "max-height", "120px", "border-radius", "8px", "box-shadow", "0 4px 12px rgba(0,0,0,0.3)", 3, "src"], [2, "text-align", "center", "font-size", "1.4rem"], ["style", "width: 50px; height: 50px; border-radius: 6px; object-fit: cover;", 3, "src", 4, "ngIf"], ["data-tooltip", "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639", "title", "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639", 1, "action-icon-btn", "btn-amber", 3, "click"], ["data-tooltip", "\u062D\u0630\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639", "title", "\u062D\u0630\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639", 1, "action-icon-btn", "btn-rose", 3, "click"], [2, "width", "50px", "height", "50px", "border-radius", "6px", "object-fit", "cover", 3, "src"], ["colspan", "6", 2, "text-align", "center", "padding", "25px"], ["formControlName", "name_en", "type", "text", "required", "", "placeholder", "e.g. Mobile Apps", 1, "s-input"], ["formControlName", "name_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u062C\u0648\u0627\u0644", "dir", "rtl", 1, "s-input"], ["formControlName", "description_en", "rows", "2", 1, "s-input"], ["formControlName", "description_ar", "rows", "2", "dir", "rtl", 1, "s-input"], [2, "max-height", "100px", "border-radius", "8px", "box-shadow", "0 4px 12px rgba(0,0,0,0.3)", 3, "src"], ["style", "width: 45px; height: 45px; border-radius: 6px; object-fit: cover;", 3, "src", 4, "ngIf"], [2, "color", "rgba(255,255,255,0.6)", "font-size", "0.9rem"], ["data-tooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", "title", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", 1, "action-icon-btn", "btn-amber", 3, "click"], ["data-tooltip", "\u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", "title", "\u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", 1, "action-icon-btn", "btn-rose", 3, "click"], [2, "width", "45px", "height", "45px", "border-radius", "6px", "object-fit", "cover", 3, "src"], ["formControlName", "title_en", "type", "text", "required", "", "placeholder", "e.g. Modern UI Design Trends", 1, "s-input"], ["formControlName", "title_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u0627\u062A\u062C\u0627\u0647\u0627\u062A \u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062D\u062F\u064A\u062B\u0629", "dir", "rtl", 1, "s-input"], ["formControlName", "description_en", "rows", "5", "required", "", "placeholder", "Write article content here...", 1, "s-input"], ["formControlName", "description_ar", "rows", "5", "required", "", "placeholder", "\u0627\u0643\u062A\u0628 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644 \u0647\u0646\u0627...", "dir", "rtl", 1, "s-input"], ["formControlName", "img_alt", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u0627\u062A\u062C\u0627\u0647\u0627\u062A \u0627\u0644\u062A\u0635\u0645\u064A\u0645", 1, "s-input"], ["type", "file", "accept", "image/*,video/*", 1, "s-input", 2, "padding-top", "10px", 3, "change"], [1, "fa-solid", "fa-paper-plane"], [2, "text-align", "center"], [1, "fa-solid", "fa-heart", 2, "color", "red", "margin-left", "2px"], ["data-tooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644", "title", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644", 1, "action-icon-btn", "btn-amber", 3, "click"], ["data-tooltip", "\u062D\u0630\u0641 \u0627\u0644\u0645\u0642\u0627\u0644", "title", "\u062D\u0630\u0641 \u0627\u0644\u0645\u0642\u0627\u0644", 1, "action-icon-btn", "btn-rose", 3, "click"], ["formControlName", "client_name", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0627\u0644: \u0641\u0647\u062F \u0627\u0644\u0645\u0646\u0635\u0648\u0631\u064A", 1, "s-input"], ["formControlName", "job_title", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0627\u0644: \u0627\u0644\u0645\u0624\u0633\u0633 \u0648\u0627\u0644\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A", 1, "s-input"], ["formControlName", "company_name", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u062A\u0643 \u0646\u0648\u0641\u0627", 1, "s-input"], ["formControlName", "rating", "required", "", 1, "s-input"], ["value", "5"], ["value", "4"], ["value", "3"], ["value", "2"], ["value", "1"], ["type", "color", "formControlName", "avatar_color", 2, "width", "45px", "height", "45px", "border", "none", "border-radius", "8px", "cursor", "pointer", "background", "transparent"], ["formControlName", "avatar_color", "type", "text", "placeholder", "#e8620a", 1, "s-input", 2, "flex", "1"], ["formControlName", "feedback_en", "rows", "3", "required", "", "placeholder", "Client feedback in English...", 1, "s-input"], ["formControlName", "feedback_ar", "rows", "3", "required", "", "placeholder", "\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629...", "dir", "rtl", 1, "s-input"], [2, "width", "38px", "height", "38px", "border-radius", "50%", "color", "white", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "0.95rem"], [2, "color", "rgba(255,255,255,0.7)", "font-size", "0.9rem"], [2, "text-align", "center", "color", "gold", "font-size", "0.85rem"], ["data-tooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0623\u064A", "title", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0623\u064A", 1, "action-icon-btn", "btn-amber", 3, "click"], ["data-tooltip", "\u062D\u0630\u0641 \u0627\u0644\u0631\u0623\u064A", "title", "\u062D\u0630\u0641 \u0627\u0644\u0631\u0623\u064A", 1, "action-icon-btn", "btn-rose", 3, "click"], ["colspan", "6", 2, "text-align", "center", "padding", "20px"], ["formControlName", "question_en", "type", "text", "required", "", "placeholder", "e.g. How long does a project take?", 1, "s-input"], ["formControlName", "question_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u0643\u0645 \u064A\u0633\u062A\u063A\u0631\u0642 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u064A\u061F", "dir", "rtl", 1, "s-input"], ["formControlName", "answer_en", "rows", "3", "required", "", "placeholder", "Detailed answer...", 1, "s-input"], ["formControlName", "answer_ar", "rows", "3", "required", "", "placeholder", "\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A\u0629...", "dir", "rtl", 1, "s-input"], ["formControlName", "sort_order", "type", "number", 1, "s-input"], [1, "fgroup", 2, "justify-content", "center"], [1, "s-label", 2, "display", "flex", "align-items", "center", "gap", "10px", "cursor", "pointer", "padding-top", "25px"], ["type", "checkbox", "formControlName", "is_active", 2, "width", "20px", "height", "20px", "accent-color", "#e8620a"], [1, "badge"], ["data-tooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u0624\u0627\u0644", "title", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u0624\u0627\u0644", 1, "action-icon-btn", "btn-amber", 3, "click"], ["data-tooltip", "\u062D\u0630\u0641 \u0627\u0644\u0633\u0624\u0627\u0644", "title", "\u062D\u0630\u0641 \u0627\u0644\u0633\u0624\u0627\u0644", 1, "action-icon-btn", "btn-rose", 3, "click"], [2, "margin-right", "15px", "color", "var(--orange)", "font-weight", "600"], [2, "color", "rgba(255,255,255,0.5)"], [2, "color", "var(--orange)", "text-decoration", "none", 3, "href"], [2, "font-size", "0.85rem", "color", "rgba(255,255,255,0.5)"], [2, "display", "block", "margin-top", "5px", "max-width", "250px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis", 3, "title"], ["data-tooltip", "\u062D\u0630\u0641 \u0627\u0644\u0631\u0633\u0627\u0644\u0629", "title", "\u062D\u0630\u0641 \u0627\u0644\u0631\u0633\u0627\u0644\u0629", 1, "action-icon-btn", "btn-rose", 3, "click"], [2, "background", "rgba(255,255,255,0.01)", "padding", "20px", "border-radius", "12px", "margin-bottom", "16px", "border", "1px solid var(--admin-border)", "position", "relative"], [2, "position", "absolute", "top", "15px", "left", "15px", "background", "#ef4444", "color", "white", "border", "none", "border-radius", "6px", "padding", "6px 12px", "cursor", "pointer", "font-size", "0.8rem", 3, "click"], [2, "margin-bottom", "16px"], ["type", "text", 1, "s-input", 2, "width", "120px", 3, "ngModelChange", "ngModel"]], template: function ControllerDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div")(4, "div", 7);
      \u0275\u0275element(5, "span", 8);
      \u0275\u0275text(6, "\u0645\u0631\u0643\u0632 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u2014 CRM 2026");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 9);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 10);
      \u0275\u0275text(10, "\u0646\u0638\u0631\u0629 \u0634\u0627\u0645\u0644\u0629 \u0648\u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0644\u0649 \u0623\u062F\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621\u060C \u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629\u060C \u0648\u0645\u0639\u062F\u0644\u0627\u062A \u0625\u0646\u062C\u0627\u0632 \u0627\u0644\u0645\u0647\u0627\u0645.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 11)(12, "a", 12);
      \u0275\u0275element(13, "i", 13);
      \u0275\u0275text(14, " \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 14);
      \u0275\u0275element(16, "i", 15);
      \u0275\u0275text(17, " \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 16)(19, "div", 17)(20, "div", 18)(21, "div", 19);
      \u0275\u0275element(22, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 21);
      \u0275\u0275element(24, "i", 22);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 23)(27, "div", 24);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "number");
      \u0275\u0275elementStart(30, "span", 25);
      \u0275\u0275text(31, "\u062C.\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 26);
      \u0275\u0275text(33, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 27);
      \u0275\u0275text(35, "\u0642\u064A\u0645\u0629 \u0643\u0627\u0641\u0629 \u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0627\u0644\u0645\u0628\u0631\u0645\u0629 \u0628\u0627\u0644\u0633\u064A\u0633\u062A\u0645");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, ControllerDashboardComponent_div_36_Template, 17, 5, "div", 28)(37, ControllerDashboardComponent_div_37_Template, 17, 4, "div", 29)(38, ControllerDashboardComponent_div_38_Template, 17, 4, "div", 30);
      \u0275\u0275elementStart(39, "div", 31)(40, "div", 18)(41, "div", 32);
      \u0275\u0275element(42, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 34);
      \u0275\u0275element(44, "i", 35);
      \u0275\u0275text(45, " \u0639\u0645\u0644\u0627\u0621 \u0646\u0634\u0637\u0648\u0646");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 23)(47, "div", 36);
      \u0275\u0275text(48);
      \u0275\u0275elementStart(49, "span", 25);
      \u0275\u0275text(50, "\u0639\u0645\u064A\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 26);
      \u0275\u0275text(52, "\u062F\u0644\u064A\u0644 \u0648\u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 27);
      \u0275\u0275text(54, "\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u0627\u0639\u062F\u0629 \u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0645\u0642\u064A\u062F\u064A\u0646");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 37)(56, "div", 18)(57, "div", 38);
      \u0275\u0275element(58, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 39);
      \u0275\u0275element(60, "i", 40);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 23)(63, "div", 41);
      \u0275\u0275text(64);
      \u0275\u0275elementStart(65, "span", 25);
      \u0275\u0275text(66, "\u0645\u0647\u0645\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 26);
      \u0275\u0275text(68, "\u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062C\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 27);
      \u0275\u0275text(70, "\u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062C\u0627\u0631\u064A\u0629 \u062A\u062D\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 42);
      \u0275\u0275template(72, ControllerDashboardComponent_div_72_Template, 27, 13, "div", 43);
      \u0275\u0275elementStart(73, "div", 44)(74, "div", 45)(75, "div")(76, "h3");
      \u0275\u0275element(77, "i", 46);
      \u0275\u0275text(78, " \u0645\u0639\u062F\u0644 \u0625\u0646\u062C\u0627\u0632 \u0648\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p");
      \u0275\u0275text(80, "\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0645\u0647\u0627\u0645 \u0628\u064A\u0646 \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629 \u0648\u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629\u060C \u0642\u064A\u062F \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F\u060C \u0648\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "span", 47);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 48)(84, "div", 49)(85, "span");
      \u0275\u0275text(86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 50);
      \u0275\u0275element(90, "div", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 52)(92, "span", 53);
      \u0275\u0275element(93, "i", 54);
      \u0275\u0275text(94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "span", 53);
      \u0275\u0275element(96, "i", 55);
      \u0275\u0275text(97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span", 53);
      \u0275\u0275element(99, "i", 56);
      \u0275\u0275text(100);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(101, "div", 57)(102, "div", 58)(103, "div", 59)(104, "div", 60);
      \u0275\u0275element(105, "i", 61);
      \u0275\u0275text(106, " \u0623\u062D\u062F\u062B \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u0628\u0631\u0645\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "a", 62);
      \u0275\u0275text(108, "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 ");
      \u0275\u0275element(109, "i", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 64);
      \u0275\u0275template(111, ControllerDashboardComponent_ng_container_111_Template, 2, 1, "ng-container", 65)(112, ControllerDashboardComponent_ng_template_112_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 58)(115, "div", 59)(116, "div", 60);
      \u0275\u0275element(117, "i", 66);
      \u0275\u0275text(118, " \u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062C\u0627\u0631\u064A\u0629 \u0628\u0627\u0644\u0648\u0643\u0627\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "a", 67);
      \u0275\u0275text(120, "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 ");
      \u0275\u0275element(121, "i", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 64);
      \u0275\u0275template(123, ControllerDashboardComponent_ng_container_123_Template, 2, 1, "ng-container", 65)(124, ControllerDashboardComponent_ng_template_124_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "div", 68)(127, "a", 69);
      \u0275\u0275element(128, "i", 70);
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "\u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "a", 71);
      \u0275\u0275element(132, "i", 61);
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "a", 72);
      \u0275\u0275element(136, "i", 66);
      \u0275\u0275elementStart(137, "span");
      \u0275\u0275text(138, "\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(139, ControllerDashboardComponent_a_139_Template, 4, 0, "a", 73);
      \u0275\u0275elementStart(140, "a", 74);
      \u0275\u0275element(141, "i", 75);
      \u0275\u0275elementStart(142, "span");
      \u0275\u0275text(143, "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(144, ControllerDashboardComponent_a_144_Template, 4, 0, "a", 76);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(145, "div", 4)(146, "div", 5)(147, "div", 77)(148, "div")(149, "div", 78);
      \u0275\u0275element(150, "span", 79);
      \u0275\u0275text(151, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u2014 CMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "h1", 9);
      \u0275\u0275text(153, "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p", 10);
      \u0275\u0275text(155, "\u0631\u0627\u0642\u0628 \u0645\u0634\u0627\u0631\u064A\u0639\u0643 \u0648\u062E\u062F\u0645\u0627\u062A\u0643 \u0648\u062A\u0642\u064A\u064A\u0645\u0627\u062A\u0643 \u0648\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0648\u0627\u0631\u062F\u0629.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 11)(157, "button", 80);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_157_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("contact-hub"));
      });
      \u0275\u0275element(158, "i", 81);
      \u0275\u0275text(159, " \u0627\u0644\u0631\u0633\u0627\u0626\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "button", 82);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_160_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("projects"));
      });
      \u0275\u0275element(161, "i", 83);
      \u0275\u0275text(162, " \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 84)(164, "div", 85);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_164_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("projects"));
      });
      \u0275\u0275elementStart(165, "div", 18)(166, "div", 86);
      \u0275\u0275element(167, "i", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "span", 87);
      \u0275\u0275element(169, "i", 88);
      \u0275\u0275text(170, " \u0645\u0646\u0634\u0648\u0631 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 23)(172, "div", 89);
      \u0275\u0275text(173);
      \u0275\u0275elementStart(174, "span", 25);
      \u0275\u0275text(175, "\u0645\u0634\u0631\u0648\u0639");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 26);
      \u0275\u0275text(177, "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 27);
      \u0275\u0275text(179, "\u0645\u0639\u0631\u0636 \u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "div", 90);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_180_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("services"));
      });
      \u0275\u0275elementStart(181, "div", 18)(182, "div", 19);
      \u0275\u0275element(183, "i", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "span", 21);
      \u0275\u0275element(185, "i", 92);
      \u0275\u0275text(186, " \u062E\u062F\u0645\u0627\u062A \u0646\u0634\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "div", 23)(188, "div", 24);
      \u0275\u0275text(189);
      \u0275\u0275elementStart(190, "span", 25);
      \u0275\u0275text(191, "\u062E\u062F\u0645\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "div", 26);
      \u0275\u0275text(193, "\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0648\u0643\u0627\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 27);
      \u0275\u0275text(195, "\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0644\u0628\u0627\u0642\u0627\u062A \u0628\u0627\u0644\u0645\u0648\u0642\u0639");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(196, "div", 93);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_196_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("testimonials"));
      });
      \u0275\u0275elementStart(197, "div", 18)(198, "div", 94);
      \u0275\u0275element(199, "i", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "span", 96);
      \u0275\u0275element(201, "i", 97);
      \u0275\u0275text(202, " \u0622\u0631\u0627\u0621 \u0645\u0639\u062A\u0645\u062F\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "div", 23)(204, "div", 98);
      \u0275\u0275text(205);
      \u0275\u0275elementStart(206, "span", 25);
      \u0275\u0275text(207, "\u0631\u0623\u064A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "div", 26);
      \u0275\u0275text(209, "\u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 27);
      \u0275\u0275text(211, "\u062A\u0648\u0635\u064A\u0627\u062A \u0648\u0622\u0631\u0627\u0621 \u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0648\u0643\u0627\u0644\u0629");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(212, "div", 99);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_212_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("contact-hub"));
      });
      \u0275\u0275elementStart(213, "div", 18)(214, "div", 100);
      \u0275\u0275element(215, "i", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "span", 102);
      \u0275\u0275element(217, "i", 103);
      \u0275\u0275text(218, " \u0631\u0633\u0627\u0626\u0644 \u062C\u062F\u064A\u062F\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "div", 23)(220, "div", 104);
      \u0275\u0275text(221);
      \u0275\u0275elementStart(222, "span", 25);
      \u0275\u0275text(223, "\u0631\u0633\u0627\u0644\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "div", 26);
      \u0275\u0275text(225, "\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 27);
      \u0275\u0275text(227, "\u0631\u0633\u0627\u0626\u0644 \u0646\u0645\u0648\u0630\u062C \u0627\u062A\u0635\u0644 \u0628\u0646\u0627 \u0627\u0644\u0648\u0627\u0631\u062F\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(228, "div", 57)(229, "div", 105)(230, "div", 59)(231, "div", 60);
      \u0275\u0275element(232, "i", 106);
      \u0275\u0275text(233, " \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u062D\u0633\u0628 \u0627\u0644\u062A\u0635\u0646\u064A\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "button", 107);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_234_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("projects"));
      });
      \u0275\u0275text(235, "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 ");
      \u0275\u0275element(236, "i", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "div", 64);
      \u0275\u0275template(238, ControllerDashboardComponent_ng_container_238_Template, 2, 1, "ng-container", 65)(239, ControllerDashboardComponent_ng_template_239_Template, 4, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "div", 105)(242, "div", 59)(243, "div", 60);
      \u0275\u0275element(244, "i", 108);
      \u0275\u0275text(245, " \u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "button", 107);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_246_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("projects"));
      });
      \u0275\u0275text(247, "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 ");
      \u0275\u0275element(248, "i", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "div", 64);
      \u0275\u0275template(250, ControllerDashboardComponent_ng_container_250_Template, 2, 1, "ng-container", 65)(251, ControllerDashboardComponent_ng_template_251_Template, 4, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(253, "div", 68)(254, "button", 109);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_254_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("projects"));
      });
      \u0275\u0275element(255, "i", 83);
      \u0275\u0275elementStart(256, "span");
      \u0275\u0275text(257, "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "button", 109);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_258_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("services"));
      });
      \u0275\u0275element(259, "i", 91);
      \u0275\u0275elementStart(260, "span");
      \u0275\u0275text(261, "\u0627\u0644\u062E\u062F\u0645\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "button", 109);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_262_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("testimonials"));
      });
      \u0275\u0275element(263, "i", 95);
      \u0275\u0275elementStart(264, "span");
      \u0275\u0275text(265, "\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "button", 109);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_266_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("contact-hub"));
      });
      \u0275\u0275element(267, "i", 81);
      \u0275\u0275elementStart(268, "span");
      \u0275\u0275text(269, "\u0627\u0644\u0631\u0633\u0627\u0626\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "button", 109);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_270_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("blogs"));
      });
      \u0275\u0275element(271, "i", 110);
      \u0275\u0275elementStart(272, "span");
      \u0275\u0275text(273, "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "button", 109);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_274_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setTab("faqs"));
      });
      \u0275\u0275element(275, "i", 111);
      \u0275\u0275elementStart(276, "span");
      \u0275\u0275text(277, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(278, "div", 4);
      \u0275\u0275template(279, ControllerDashboardComponent_div_279_Template, 74, 4, "div", 112);
      \u0275\u0275elementStart(280, "div", 113)(281, "div", 114)(282, "div", 115);
      \u0275\u0275text(283, "\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0643\u0644\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "div", 116)(285, "button", 117);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_285_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showServiceForm = !ctx.showServiceForm);
      });
      \u0275\u0275element(286, "i", 118);
      \u0275\u0275text(287);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "button", 119);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_288_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadServices());
      });
      \u0275\u0275element(289, "i", 120);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(290, "div", 121)(291, "table")(292, "thead")(293, "tr", 122)(294, "th", 123);
      \u0275\u0275text(295, "\u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "th");
      \u0275\u0275text(297, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062E\u062F\u0645\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "th");
      \u0275\u0275text(299, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "th", 123);
      \u0275\u0275text(301, "\u0627\u0644\u062A\u0631\u062A\u064A\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "th", 124);
      \u0275\u0275text(303, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(304, "tbody");
      \u0275\u0275template(305, ControllerDashboardComponent_tr_305_Template, 17, 5, "tr", 125)(306, ControllerDashboardComponent_tr_306_Template, 3, 0, "tr", 126);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(307, "div", 4);
      \u0275\u0275template(308, ControllerDashboardComponent_div_308_Template, 122, 6, "div", 112);
      \u0275\u0275elementStart(309, "div", 113)(310, "div", 114)(311, "div", 115);
      \u0275\u0275text(312, "\u062C\u0645\u064A\u0639 \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "div", 116)(314, "button", 117);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_314_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showProjectForm = !ctx.showProjectForm);
      });
      \u0275\u0275element(315, "i", 118);
      \u0275\u0275text(316);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "button", 119);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_317_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadProjects());
      });
      \u0275\u0275element(318, "i", 120);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(319, "div", 121)(320, "table")(321, "thead")(322, "tr", 122)(323, "th", 127);
      \u0275\u0275text(324, "\u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "th", 128);
      \u0275\u0275text(326, "\u0627\u0644\u0635\u0648\u0631\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "th");
      \u0275\u0275text(328, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "th");
      \u0275\u0275text(330, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "th");
      \u0275\u0275text(332, "\u0627\u0644\u0639\u0645\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "th", 124);
      \u0275\u0275text(334, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(335, "tbody");
      \u0275\u0275template(336, ControllerDashboardComponent_tr_336_Template, 19, 6, "tr", 125)(337, ControllerDashboardComponent_tr_337_Template, 3, 0, "tr", 126);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(338, "div", 4);
      \u0275\u0275template(339, ControllerDashboardComponent_div_339_Template, 35, 5, "div", 112);
      \u0275\u0275elementStart(340, "div", 113)(341, "div", 114)(342, "div", 115);
      \u0275\u0275text(343, "\u062C\u0645\u064A\u0639 \u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "div", 116)(345, "button", 117);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_345_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showCategoryForm = !ctx.showCategoryForm);
      });
      \u0275\u0275element(346, "i", 118);
      \u0275\u0275text(347);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "button", 119);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_348_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadCategories());
      });
      \u0275\u0275element(349, "i", 120);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(350, "div", 121)(351, "table")(352, "thead")(353, "tr", 122)(354, "th", 128);
      \u0275\u0275text(355, "\u0627\u0644\u0635\u0648\u0631\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "th");
      \u0275\u0275text(357, "\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 (\u0639\u0631\u0628\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "th");
      \u0275\u0275text(359, "\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 (\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "th");
      \u0275\u0275text(361, "\u0627\u0644\u0648\u0635\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "th", 124);
      \u0275\u0275text(363, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(364, "tbody");
      \u0275\u0275template(365, ControllerDashboardComponent_tr_365_Template, 16, 4, "tr", 125)(366, ControllerDashboardComponent_tr_366_Template, 3, 0, "tr", 126);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(367, "div", 4);
      \u0275\u0275template(368, ControllerDashboardComponent_div_368_Template, 39, 5, "div", 112);
      \u0275\u0275elementStart(369, "div", 113)(370, "div", 114)(371, "div", 115);
      \u0275\u0275text(372, "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "div", 116)(374, "button", 117);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_374_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showBlogForm = !ctx.showBlogForm);
      });
      \u0275\u0275element(375, "i", 118);
      \u0275\u0275text(376);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "button", 119);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_377_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadBlogs());
      });
      \u0275\u0275element(378, "i", 120);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(379, "div", 121)(380, "table")(381, "thead")(382, "tr", 122)(383, "th", 128);
      \u0275\u0275text(384, "\u0627\u0644\u063A\u0644\u0627\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "th");
      \u0275\u0275text(386, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0639\u0631\u0628\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "th");
      \u0275\u0275text(388, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "th", 129);
      \u0275\u0275text(390, "\u0627\u0644\u0625\u0639\u062C\u0627\u0628\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "th", 124);
      \u0275\u0275text(392, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(393, "tbody");
      \u0275\u0275template(394, ControllerDashboardComponent_tr_394_Template, 18, 4, "tr", 125)(395, ControllerDashboardComponent_tr_395_Template, 3, 0, "tr", 126);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(396, "div", 4);
      \u0275\u0275template(397, ControllerDashboardComponent_div_397_Template, 55, 4, "div", 112);
      \u0275\u0275elementStart(398, "div", 113)(399, "div", 114)(400, "div", 115);
      \u0275\u0275text(401, "\u062C\u0645\u064A\u0639 \u0622\u0631\u0627\u0621 \u0648\u062A\u0648\u0635\u064A\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "div", 116)(403, "button", 117);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_403_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showTestimonialForm = !ctx.showTestimonialForm);
      });
      \u0275\u0275element(404, "i", 118);
      \u0275\u0275text(405);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "button", 119);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_406_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadTestimonials());
      });
      \u0275\u0275element(407, "i", 120);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(408, "div", 121)(409, "table")(410, "thead")(411, "tr", 122)(412, "th", 130);
      \u0275\u0275text(413, "\u0627\u0644\u0635\u0648\u0631\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "th");
      \u0275\u0275text(415, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "th");
      \u0275\u0275text(417, "\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A / \u0627\u0644\u0634\u0631\u0643\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "th");
      \u0275\u0275text(419, "\u0627\u0644\u0631\u0623\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "th", 129);
      \u0275\u0275text(421, "\u0627\u0644\u062A\u0642\u064A\u064A\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "th", 124);
      \u0275\u0275text(423, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(424, "tbody");
      \u0275\u0275template(425, ControllerDashboardComponent_tr_425_Template, 19, 8, "tr", 125)(426, ControllerDashboardComponent_tr_426_Template, 3, 0, "tr", 126);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(427, "div", 4);
      \u0275\u0275template(428, ControllerDashboardComponent_div_428_Template, 39, 4, "div", 112);
      \u0275\u0275elementStart(429, "div", 113)(430, "div", 114)(431, "div", 115);
      \u0275\u0275text(432, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "div", 116)(434, "button", 117);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_434_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showFaqForm = !ctx.showFaqForm);
      });
      \u0275\u0275element(435, "i", 118);
      \u0275\u0275text(436);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "button", 119);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_437_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadFaqs());
      });
      \u0275\u0275element(438, "i", 120);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(439, "div", 121)(440, "table")(441, "thead")(442, "tr", 122)(443, "th");
      \u0275\u0275text(444, "\u0627\u0644\u0633\u0624\u0627\u0644 (\u0639\u0631\u0628\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "th");
      \u0275\u0275text(446, "\u0627\u0644\u0633\u0624\u0627\u0644 (\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "th", 131);
      \u0275\u0275text(448, "\u0627\u0644\u062A\u0631\u062A\u064A\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "th", 132);
      \u0275\u0275text(450, "\u0627\u0644\u062D\u0627\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "th", 124);
      \u0275\u0275text(452, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(453, "tbody");
      \u0275\u0275template(454, ControllerDashboardComponent_tr_454_Template, 17, 8, "tr", 125)(455, ControllerDashboardComponent_tr_455_Template, 3, 0, "tr", 126);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(456, "div", 4)(457, "div", 133)(458, "div", 114)(459, "div", 115);
      \u0275\u0275text(460, "\u062A\u0639\u062F\u064A\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0648\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(461, "div", 134)(462, "form", 135);
      \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_Template_form_ngSubmit_462_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveContactInfo());
      });
      \u0275\u0275elementStart(463, "div", 136)(464, "div", 137)(465, "label", 138);
      \u0275\u0275text(466, "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275element(467, "input", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "div", 137)(469, "label", 138);
      \u0275\u0275text(470, "\u0648\u0635\u0641 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275element(471, "input", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "div", 137)(473, "label", 138);
      \u0275\u0275text(474, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0631\u0633\u0645\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(475, "input", 141);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "div", 137)(477, "label", 138);
      \u0275\u0275text(478, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(479, "input", 142);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "div", 143)(481, "label", 138);
      \u0275\u0275text(482, "\u0631\u0627\u0628\u0637 \u0645\u0648\u0642\u0639 \u0627\u0644\u0634\u0631\u0643\u0629 \u0639\u0644\u0649 \u062E\u0631\u0627\u0626\u0637 \u062C\u0648\u062C\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275element(483, "input", 144);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "div", 143)(485, "label", 138);
      \u0275\u0275text(486, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0647\u0627\u062A\u0641 \u0627\u0644\u0637\u0648\u0627\u0631\u0626 \u0648\u0627\u0644\u062F\u0639\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275element(487, "input", 145);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(488, "div", 146)(489, "button", 147);
      \u0275\u0275element(490, "i", 148);
      \u0275\u0275text(491, " \u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275template(492, ControllerDashboardComponent_span_492_Template, 3, 1, "span", 149);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(493, "div", 113)(494, "div", 114)(495, "div", 115);
      \u0275\u0275text(496, "\u0631\u0633\u0627\u0626\u0644 \u0648\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621 (Leads)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "button", 117);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_497_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadInquiries());
      });
      \u0275\u0275element(498, "i", 120);
      \u0275\u0275text(499, " \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0631\u0633\u0627\u0626\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(500, "div", 121)(501, "table")(502, "thead")(503, "tr", 122)(504, "th");
      \u0275\u0275text(505, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "th");
      \u0275\u0275text(507, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "th");
      \u0275\u0275text(509, "\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "th");
      \u0275\u0275text(511, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "th", 150);
      \u0275\u0275text(513, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(514, "tbody");
      \u0275\u0275template(515, ControllerDashboardComponent_tr_515_Template, 26, 13, "tr", 125)(516, ControllerDashboardComponent_tr_516_Template, 3, 0, "tr", 126);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(517, "div", 4)(518, "div", 151)(519, "h2");
      \u0275\u0275text(520, "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0642\u0633\u0645 \u0627\u0644\u0647\u064A\u062F\u0631 \u0628\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(521, "p");
      \u0275\u0275text(522, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0646\u0635\u0648\u0635 \u0648\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0644\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0628\u0627\u0644\u0645\u0648\u0642\u0639.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "button", 152);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_523_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.savePageData("home"));
      });
      \u0275\u0275element(524, "i", 148);
      \u0275\u0275text(525);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(526, "div", 153)(527, "div", 114)(528, "div", 115);
      \u0275\u0275text(529, "\u0642\u0633\u0645 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (Hero Banner)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(530, "div", 134)(531, "div", 136)(532, "div")(533, "label", 138);
      \u0275\u0275text(534, "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_535_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.tag.en, $event) || (ctx.pagesData["home"].hero.tag.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(536, "div")(537, "label", 138);
      \u0275\u0275text(538, "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "input", 155);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_539_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.tag.ar, $event) || (ctx.pagesData["home"].hero.tag.ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(540, "div")(541, "label", 138);
      \u0275\u0275text(542, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_543_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.title1.en, $event) || (ctx.pagesData["home"].hero.title1.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(544, "div")(545, "label", 138);
      \u0275\u0275text(546, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "input", 155);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_547_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.title1.ar, $event) || (ctx.pagesData["home"].hero.title1.ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(548, "div", 156)(549, "label", 138);
      \u0275\u0275text(550, "\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "textarea", 157);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_551_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.subtitle.en, $event) || (ctx.pagesData["home"].hero.subtitle.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(552, "div", 156)(553, "label", 138);
      \u0275\u0275text(554, "\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "textarea", 158);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_555_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.subtitle.ar, $event) || (ctx.pagesData["home"].hero.subtitle.ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(556, "div", 4)(557, "div", 151)(558, "h2");
      \u0275\u0275text(559, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u062C\u062F\u0648\u0644 \u0627\u0644\u062A\u0627\u0631\u064A\u062E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(560, "p");
      \u0275\u0275text(561, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0624\u064A\u0629\u060C \u0627\u0644\u0623\u0647\u062F\u0627\u0641\u060C \u0648\u0623\u062D\u062F\u0627\u062B \u0645\u0633\u064A\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0639\u0644\u0649 \u0645\u0631 \u0627\u0644\u0633\u0646\u0648\u0627\u062A.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "button", 152);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_562_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveAboutData());
      });
      \u0275\u0275element(563, "i", 148);
      \u0275\u0275text(564);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(565, "div", 159)(566, "div", 114)(567, "div", 115);
      \u0275\u0275text(568, "\u0646\u0635 \u0627\u0644\u0628\u0627\u0646\u0631 \u0644\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(569, "div", 134)(570, "div", 136)(571, "div")(572, "label", 138);
      \u0275\u0275text(573, "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_574_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.en.label, $event) || (ctx.aboutData.content.hero.en.label = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(575, "div")(576, "label", 138);
      \u0275\u0275text(577, "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(578, "input", 155);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_578_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.ar.label, $event) || (ctx.aboutData.content.hero.ar.label = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(579, "div")(580, "label", 138);
      \u0275\u0275text(581, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_582_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.en.title1, $event) || (ctx.aboutData.content.hero.en.title1 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(583, "div")(584, "label", 138);
      \u0275\u0275text(585, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "input", 155);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_586_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.ar.title1, $event) || (ctx.aboutData.content.hero.ar.title1 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(587, "div", 156)(588, "label", 138);
      \u0275\u0275text(589, "\u0646\u0628\u0630\u0629 \u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "textarea", 157);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_590_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.en.desc, $event) || (ctx.aboutData.content.hero.en.desc = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(591, "div", 156)(592, "label", 138);
      \u0275\u0275text(593, "\u0646\u0628\u0630\u0629 \u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "textarea", 158);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_594_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.ar.desc, $event) || (ctx.aboutData.content.hero.ar.desc = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(595, "div", 133)(596, "div", 114)(597, "div", 115);
      \u0275\u0275text(598, "\u062C\u062F\u0648\u0644 \u062A\u0627\u0631\u064A\u062E \u0648\u0645\u0633\u064A\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "button", 117);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_599_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addTimeline());
      });
      \u0275\u0275element(600, "i", 160);
      \u0275\u0275text(601, " \u0625\u0636\u0627\u0641\u0629 \u062D\u062F\u062B \u062A\u0627\u0631\u064A\u062E\u064A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(602, "div", 134);
      \u0275\u0275template(603, ControllerDashboardComponent_div_603_Template, 25, 5, "div", 161)(604, ControllerDashboardComponent_div_604_Template, 2, 0, "div", 162);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(605, "div", 4)(606, "div", 151)(607, "h2");
      \u0275\u0275text(608, "\u0647\u064A\u062F\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(609, "p");
      \u0275\u0275text(610, "\u062A\u0639\u062F\u064A\u0644 \u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0646\u0635\u0648\u0635 \u0628\u0627\u0646\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0628\u0627\u0644\u0645\u0648\u0642\u0639.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "button", 152);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_611_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.savePageData("services"));
      });
      \u0275\u0275element(612, "i", 148);
      \u0275\u0275text(613);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(614, "div", 153)(615, "div", 134)(616, "div", 136)(617, "div")(618, "label", 138);
      \u0275\u0275text(619, "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(620, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_620_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["services"].hero.tag.en, $event) || (ctx.pagesData["services"].hero.tag.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(621, "div")(622, "label", 138);
      \u0275\u0275text(623, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_624_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["services"].hero.title.en, $event) || (ctx.pagesData["services"].hero.title.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(625, "div", 156)(626, "label", 138);
      \u0275\u0275text(627, "\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(628, "textarea", 157);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_628_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["services"].hero.desc.en, $event) || (ctx.pagesData["services"].hero.desc.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(629, "div", 4)(630, "div", 151)(631, "h2");
      \u0275\u0275text(632, "\u0647\u064A\u062F\u0631 \u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(633, "p");
      \u0275\u0275text(634, "\u062A\u0639\u062F\u064A\u0644 \u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0646\u0635\u0648\u0635 \u0628\u0627\u0646\u0631 \u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(635, "button", 152);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_635_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.savePageData("portfolio"));
      });
      \u0275\u0275element(636, "i", 148);
      \u0275\u0275text(637);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(638, "div", 153)(639, "div", 134)(640, "div", 136)(641, "div")(642, "label", 138);
      \u0275\u0275text(643, "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_644_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["portfolio"].hero.tag.en, $event) || (ctx.pagesData["portfolio"].hero.tag.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(645, "div")(646, "label", 138);
      \u0275\u0275text(647, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(648, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_648_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["portfolio"].hero.title.en, $event) || (ctx.pagesData["portfolio"].hero.title.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(649, "div", 156)(650, "label", 138);
      \u0275\u0275text(651, "\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "textarea", 157);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_652_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["portfolio"].hero.desc.en, $event) || (ctx.pagesData["portfolio"].hero.desc.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(653, "div", 4)(654, "div", 151)(655, "h2");
      \u0275\u0275text(656, "\u0647\u064A\u062F\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(657, "p");
      \u0275\u0275text(658, "\u062A\u0639\u062F\u064A\u0644 \u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0646\u0635\u0648\u0635 \u0628\u0627\u0646\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629 \u0628\u0627\u0644\u0645\u0648\u0642\u0639.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(659, "button", 152);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_659_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.savePageData("blogs"));
      });
      \u0275\u0275element(660, "i", 148);
      \u0275\u0275text(661);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(662, "div", 153)(663, "div", 134)(664, "div", 136)(665, "div")(666, "label", 138);
      \u0275\u0275text(667, "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_668_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["blogs"].hero.tag.en, $event) || (ctx.pagesData["blogs"].hero.tag.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(669, "div")(670, "label", 138);
      \u0275\u0275text(671, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(672, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_672_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["blogs"].hero.title.en, $event) || (ctx.pagesData["blogs"].hero.title.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(673, "div", 156)(674, "label", 138);
      \u0275\u0275text(675, "\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "textarea", 157);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_676_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["blogs"].hero.desc.en, $event) || (ctx.pagesData["blogs"].hero.desc.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(677, "div", 4)(678, "div", 151)(679, "h2");
      \u0275\u0275text(680, "\u0645\u062D\u062A\u0648\u0649 \u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (Footer)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(681, "p");
      \u0275\u0275text(682, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0639\u0627\u0645\u060C \u0627\u0644\u0628\u0631\u064A\u062F\u060C \u0627\u0644\u0647\u0627\u062A\u0641\u060C \u0648\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0641\u064A \u0641\u0648\u062A\u0631 \u0627\u0644\u0645\u0648\u0642\u0639.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(683, "button", 152);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_683_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.savePageData("footer"));
      });
      \u0275\u0275element(684, "i", 148);
      \u0275\u0275text(685);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(686, "div", 153)(687, "div", 134)(688, "div", 136)(689, "div", 156)(690, "label", 138);
      \u0275\u0275text(691, "\u0648\u0635\u0641 \u0627\u0644\u0634\u0631\u0643\u0629 \u0641\u064A \u0641\u0648\u062A\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "textarea", 157);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_692_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].desc.en, $event) || (ctx.pagesData["footer"].desc.en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(693, "div")(694, "label", 138);
      \u0275\u0275text(695, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0631\u0633\u0645\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(696, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_696_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].email, $event) || (ctx.pagesData["footer"].email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(697, "div")(698, "label", 138);
      \u0275\u0275text(699, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u062A\u0648\u0627\u0635\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(700, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_700_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].phone, $event) || (ctx.pagesData["footer"].phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(701, "div")(702, "label", 138);
      \u0275\u0275text(703, "\u0631\u0627\u0628\u0637 LinkedIn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_704_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].socials.linkedin, $event) || (ctx.pagesData["footer"].socials.linkedin = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(705, "div")(706, "label", 138);
      \u0275\u0275text(707, "\u0631\u0627\u0628\u0637 Twitter / X");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(708, "input", 154);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_708_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].socials.twitter, $event) || (ctx.pagesData["footer"].socials.twitter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const emptyDealsV2_r36 = \u0275\u0275reference(113);
      const emptyTasksV2_r37 = \u0275\u0275reference(125);
      const emptyChartV2_r38 = \u0275\u0275reference(240);
      const emptyProjectsV2_r39 = \u0275\u0275reference(252);
      \u0275\u0275classProp("active", ctx.activeTab === "crm-overview" || ctx.activeTab === "overview");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("\u0623\u0647\u0644\u0627\u064B \u0628\u0643\u060C ", (ctx.currentUser == null ? null : ctx.currentUser.name) || "\u0645\u062F\u064A\u0631 \u0627\u0644\u0648\u0643\u0627\u0644\u0629", " \u{1F44B}");
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate1(" ", ctx.crmStats.deals, " \u0639\u0642\u0648\u062F \u0648\u0635\u0641\u0642\u0627\u062A");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(29, 155, ctx.crmStats.totalRevenue || 0, "1.0-0"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.crmStats.clients, " ");
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate1(" ", ctx.getOverallTasksCompletionRate(), "% \u0625\u0646\u062C\u0627\u0632");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.crmStats.tasks, " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.getOverallTasksCompletionRate(), "% \u0645\u0643\u062A\u0645\u0644");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("\u0627\u0644\u0645\u0639\u062A\u0645\u062F \u0648\u0627\u0644\u0645\u0643\u062A\u0645\u0644: ", ctx.crmStats.doneTasksCount, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0647\u0627\u0645: ", ctx.crmStats.tasks, "");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.getOverallTasksCompletionRate(), "%");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" \u0645\u0643\u062A\u0645\u0644 \u0648\u0645\u0639\u062A\u0645\u062F (", ctx.crmStats.doneTasksCount, ")");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" \u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 (", ctx.crmStats.pendingTasksCount, ")");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" \u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A (", ctx.crmStats.inProgressTasksCount, ")");
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.recentDeals.length > 0)("ngIfElse", emptyDealsV2_r36);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.recentTasks.length > 0)("ngIfElse", emptyTasksV2_r37);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "website-overview");
      \u0275\u0275advance(28);
      \u0275\u0275textInterpolate1("", ctx.overviewStats.projects, " ");
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("", ctx.overviewStats.services, " ");
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("", ctx.overviewStats.testimonials, " ");
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("", ctx.overviewStats.inquiries, " ");
      \u0275\u0275advance(17);
      \u0275\u0275property("ngIf", ctx.projectsChartData.length > 0)("ngIfElse", emptyChartV2_r38);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.recentProjects.length > 0)("ngIfElse", emptyProjectsV2_r39);
      \u0275\u0275advance(28);
      \u0275\u0275classProp("active", ctx.activeTab === "services");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showServiceForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("fa-plus", !ctx.showServiceForm)("fa-xmark", ctx.showServiceForm);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showServiceForm ? "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C" : "\u0625\u0636\u0627\u0641\u0629 \u062E\u062F\u0645\u0629", " ");
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.servicesList);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.servicesList.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "projects");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showProjectForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("fa-plus", !ctx.showProjectForm)("fa-xmark", ctx.showProjectForm);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showProjectForm ? "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C" : "\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639", " ");
      \u0275\u0275advance(20);
      \u0275\u0275property("ngForOf", ctx.projects);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.projects.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "categories");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCategoryForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("fa-plus", !ctx.showCategoryForm)("fa-xmark", ctx.showCategoryForm);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showCategoryForm ? "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C" : "\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641", " ");
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.categories.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "blogs");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showBlogForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("fa-plus", !ctx.showBlogForm)("fa-xmark", ctx.showBlogForm);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showBlogForm ? "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C" : "\u0643\u062A\u0627\u0628\u0629 \u0645\u0642\u0627\u0644", " ");
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.blogs);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.blogs.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "testimonials");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTestimonialForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("fa-plus", !ctx.showTestimonialForm)("fa-xmark", ctx.showTestimonialForm);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showTestimonialForm ? "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C" : "\u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A", " ");
      \u0275\u0275advance(20);
      \u0275\u0275property("ngForOf", ctx.testimonials);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.testimonials.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "faqs");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFaqForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("fa-plus", !ctx.showFaqForm)("fa-xmark", ctx.showFaqForm);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showFaqForm ? "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C" : "\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644", " ");
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.faqs);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.faqs.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "contact-hub");
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.contactForm);
      \u0275\u0275advance(27);
      \u0275\u0275property("disabled", ctx.loadingInfo);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.infoMessage);
      \u0275\u0275advance(23);
      \u0275\u0275property("ngForOf", ctx.inquiries);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.inquiries.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "home-page");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isSavingPage["home"]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["home"] ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A", " ");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["home"].hero.tag.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["home"].hero.tag.ar);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["home"].hero.title1.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["home"].hero.title1.ar);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["home"].hero.subtitle.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["home"].hero.subtitle.ar);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "about-page");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isSavingAbout);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isSavingAbout ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A", " ");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.aboutData.content.hero.en.label);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.aboutData.content.hero.ar.label);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.aboutData.content.hero.en.title1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.aboutData.content.hero.ar.title1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.aboutData.content.hero.en.desc);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.aboutData.content.hero.ar.desc);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.aboutData.timeline);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.aboutData.timeline.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "services-page");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isSavingPage["services"]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["services"] ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A", " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["services"].hero.tag.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["services"].hero.title.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["services"].hero.desc.en);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "portfolio-page");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isSavingPage["portfolio"]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["portfolio"] ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A", " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["portfolio"].hero.tag.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["portfolio"].hero.title.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["portfolio"].hero.desc.en);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "blogs-page");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isSavingPage["blogs"]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["blogs"] ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A", " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["blogs"].hero.tag.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["blogs"].hero.title.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["blogs"].hero.desc.en);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "footer-section");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isSavingPage["footer"]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["footer"] ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A", " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["footer"].desc.en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["footer"].email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["footer"].phone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["footer"].socials.linkedin);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pagesData["footer"].socials.twitter);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: [`

[_nghost-%COMP%] {
  display: block;
  width: 100%;
  font-family:
    "Inter",
    "Cairo",
    sans-serif;
  --violet: #6366f1;
  --violet-2: #4f46e5;
  --violet-light:#a5b4fc;
  --violet-glow: rgba(99, 102, 241, 0.35);
  --violet-soft: rgba(99, 102, 241, 0.12);
  --teal: #06b6d4;
  --teal-2: #0891b2;
  --teal-light: #67e8f9;
  --teal-glow: rgba(6, 182, 212, 0.35);
  --teal-soft: rgba(6, 182, 212, 0.12);
  --amber: #f59e0b;
  --amber-light: #fde047;
  --amber-soft: rgba(245, 158, 11, 0.12);
  --rose: #f43f5e;
  --rose-light: #fda4af;
  --rose-soft: rgba(244, 63, 94, 0.12);
  --emerald: #10b981;
  --emerald-light: #6ee7b7;
  --emerald-soft: rgba(16, 185, 129, 0.12);
  --bg: #050510;
  --bg-2: #090918;
  --bg-3: #0e0e24;
  --card:
    linear-gradient(
      90deg,
      rgba(9, 9, 24, 0.85) 0%,
      rgba(9, 9, 24, 0.4) 60%,
      rgba(9, 9, 24, 0.7) 100%);
  --card-hover:
    linear-gradient(
      90deg,
      rgba(14, 14, 32, 0.9) 0%,
      rgba(14, 14, 32, 0.5) 60%,
      rgba(14, 14, 32, 0.8) 100%);
  --sidebar: #040409;
  --topbar:
    linear-gradient(
      90deg,
      rgba(9, 9, 24, 0.95) 0%,
      rgba(9, 9, 24, 0.65) 60%,
      rgba(9, 9, 24, 0.9) 100%);
  --border: rgba(255, 255, 255, 0.08);
  --border-2: rgba(255, 255, 255, 0.14);
  --border-v: rgba(99, 102, 241, 0.35);
  --border-t: rgba(6, 182, 212, 0.35);
  --text: #f3f4f6;
  --text-2: #9ca3af;
  --text-3: #6b7280;
  --sb-w: 260px;
  --tb-h: 64px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --r: 14px;
  --r-lg: 20px;
  --r-xl: 28px;
}
*[_ngcontent-%COMP%], 
*[_ngcontent-%COMP%]::before, 
*[_ngcontent-%COMP%]::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
[_ngcontent-%COMP%]::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.crm-shell[_ngcontent-%COMP%] {
  display: flex;
  min-height: 100vh;
  background: var(--bg);
  background-image:
    radial-gradient(
      ellipse 100% 60% at 0% 0%,
      rgba(99, 102, 241, 0.09) 0%,
      transparent 55%),
    radial-gradient(
      ellipse 70% 50% at 100% 100%,
      rgba(6, 182, 212, 0.07) 0%,
      transparent 50%);
  background-attachment: fixed;
  font-family:
    "Cairo",
    "Inter",
    sans-serif;
  color: var(--text);
  direction: rtl;
}
.sb[_ngcontent-%COMP%] {
  width: var(--sb-w);
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 300;
  background: var(--sidebar);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: transform 0.35s var(--ease);
  will-change: transform;
  box-shadow: 6px 0 45px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(25px);
}
.sb-overlay[_ngcontent-%COMP%] {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 290;
}
.sb-overlay.active[_ngcontent-%COMP%] {
  display: block;
}
.sb-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.sb-logo[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 22px 20px;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  flex-shrink: 0;
  position: relative;
  background:
    linear-gradient(
      180deg,
      rgba(99, 102, 241, 0.06) 0%,
      transparent 100%);
}
.sb-logo-badge[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--teal));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #fff;
  box-shadow: 0 0 25px var(--violet-glow);
  flex-shrink: 0;
  transition: transform 0.3s var(--ease);
}
.sb-logo[_ngcontent-%COMP%]:hover   .sb-logo-badge[_ngcontent-%COMP%] {
  transform: rotate(10deg) scale(1.05);
}
.sb-logo-text[_ngcontent-%COMP%] {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.4px;
  white-space: nowrap;
}
.sb-logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--teal-light);
}
.sb-logo-sub[_ngcontent-%COMP%] {
  font-size: 0.62rem;
  color: var(--text-2);
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  display: block;
  margin-top: 2px;
}
.sb-nav[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 16px 12px;
}
.sb-section[_ngcontent-%COMP%] {
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  padding: 18px 10px 8px;
}
.sb-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
  width: 100%;
  color: var(--text-2);
  font-size: 0.86rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.25s var(--ease);
  margin-bottom: 3px;
  position: relative;
  text-align: left;
  background: transparent;
}
.sb-item[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--border);
  color: var(--text);
  transform: translateX(3px);
}
.sb-item.active[_ngcontent-%COMP%] {
  background: transparent;
  border-color: transparent;
  color: #fff;
  font-weight: 600;
  box-shadow: none;
}
.sb-item.active[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {
  color: var(--violet-light);
  background: rgba(99, 102, 241, 0.12);
  box-shadow: none;
}
.sb-item.active[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  left: -12px;
  top: 15%;
  bottom: 15%;
  width: 4px;
  background:
    linear-gradient(
      to bottom,
      var(--violet),
      var(--teal));
  border-radius: 0 4px 4px 0;
  box-shadow: 0 0 12px var(--violet);
}
.sb-item.danger[_ngcontent-%COMP%] {
  color: rgba(244, 63, 94, 0.8);
}
.sb-item.danger[_ngcontent-%COMP%]:hover {
  color: var(--rose-light);
  background: var(--rose-soft);
  border-color: rgba(244, 63, 94, 0.3);
}
.sb-icon[_ngcontent-%COMP%] {
  font-size: 0.88rem;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s var(--ease);
  color: var(--text-2);
}
.sb-item[_ngcontent-%COMP%]:hover   .sb-icon[_ngcontent-%COMP%] {
  color: var(--teal-light);
  background: rgba(6, 182, 212, 0.1);
}
.sb-badge[_ngcontent-%COMP%] {
  margin-left: auto;
  background:
    linear-gradient(
      135deg,
      var(--rose),
      #e11d48);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 100px;
  flex-shrink: 0;
  box-shadow: 0 2px 10px rgba(244, 63, 94, 0.4);
}
.sb-foot[_ngcontent-%COMP%] {
  border-top: 1px solid var(--border);
  padding: 14px 12px;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.2);
}
.sb-user[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.25s var(--ease);
  text-decoration: none;
}
.sb-user[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--border-v);
}
.sb-av[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--teal));
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #fff;
  box-shadow: 0 0 15px var(--violet-glow);
}
.sb-uinfo[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.sb-uname[_ngcontent-%COMP%] {
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sb-urole[_ngcontent-%COMP%] {
  font-size: 0.65rem;
  color: var(--text-2);
  margin-top: 1px;
}
.sb-ucaret[_ngcontent-%COMP%] {
  color: var(--text-3);
  font-size: 0.7rem;
}
.nav-dropdown[_ngcontent-%COMP%] {
  width: 100%;
}
.dropdown-menu-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease-in-out;
  padding-left: 14px;
  border-left: 1px solid rgba(99, 102, 241, 0.2);
  margin-left: 24px;
  margin-top: 4px;
  margin-bottom: 6px;
}
.nav-dropdown.open[_ngcontent-%COMP%]   .dropdown-menu-list[_ngcontent-%COMP%] {
  max-height: 600px;
}
.nav-sub-item[_ngcontent-%COMP%] {
  padding: 8px 12px !important;
  font-size: 0.8rem !important;
  border-radius: 10px !important;
  color: var(--text-2) !important;
}
.nav-sub-item[_ngcontent-%COMP%]:hover {
  color: var(--text) !important;
  background: rgba(255, 255, 255, 0.04) !important;
}
.nav-sub-item.active[_ngcontent-%COMP%] {
  color: var(--teal-light) !important;
  background: var(--teal-soft) !important;
  border-color: var(--border-t) !important;
}
.arrow-icon[_ngcontent-%COMP%] {
  margin-left: auto;
  font-size: 0.72rem;
  transition: transform 0.3s;
}
.main-container[_ngcontent-%COMP%] {
  margin-left: var(--sb-w);
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: transparent;
  color: var(--text);
  min-height: 100vh;
  transition: margin-left 0.35s var(--ease);
}
.tb[_ngcontent-%COMP%] {
  height: var(--tb-h);
  background: var(--topbar);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  gap: 20px;
  position: sticky;
  top: 0;
  z-index: 200;
  flex-shrink: 0;
}
.tb-l[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}
.tb-menu[_ngcontent-%COMP%] {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  color: var(--text-2);
  transition: all 0.2s;
  flex-shrink: 0;
}
.tb-menu[_ngcontent-%COMP%]:hover {
  border-color: var(--border-v);
  color: var(--violet-light);
  background: var(--violet-soft);
}
.tb-bc[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.84rem;
  color: var(--text-2);
}
.tb-bc[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {
  color: var(--text-3);
  font-size: 0.9rem;
}
.tb-bc[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {
  font-weight: 700;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tb-r[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.tb-btn[_ngcontent-%COMP%] {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  color: var(--text-2);
  transition: all 0.2s;
}
.tb-btn[_ngcontent-%COMP%]:hover {
  border-color: var(--border-v);
  color: var(--violet-light);
  background: var(--violet-soft);
}
.tb-user[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 4px 14px 4px 4px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.2s;
}
.tb-user[_ngcontent-%COMP%]:hover {
  border-color: var(--border-v);
  background: var(--violet-soft);
}
.tb-av[_ngcontent-%COMP%] {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--teal));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  box-shadow: 0 0 10px var(--violet-glow);
}
.tb-uname[_ngcontent-%COMP%] {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
}
.tb-caret[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  color: var(--text-2);
}
.dropdown[_ngcontent-%COMP%] {
  position: absolute;
  top: 70px;
  right: 32px;
  width: 260px;
  background: var(--bg-card);
  border: 1px solid var(--border-v);
  border-radius: var(--r-lg);
  padding: 12px;
  z-index: 250;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(20px);
  display: none;
  animation: _ngcontent-%COMP%_fadeInDown 0.25s var(--ease);
}
.dropdown.show[_ngcontent-%COMP%] {
  display: block;
}
@keyframes _ngcontent-%COMP%_fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.ud-top[_ngcontent-%COMP%] {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 8px;
}
.ud-name[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
}
.ud-role[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  color: var(--teal-light);
  margin-top: 2px;
}
.ud-email[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  color: var(--text-2);
  margin-top: 2px;
}
.ud-divider[_ngcontent-%COMP%] {
  height: 1px;
  background: var(--border);
  margin: 8px 0;
}
.ud-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 10px;
  color: var(--text);
  font-size: 0.84rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}
.ud-row[_ngcontent-%COMP%]:hover {
  background: var(--violet-soft);
  color: var(--text);
}
.ud-row.danger[_ngcontent-%COMP%] {
  color: var(--rose-light);
}
.ud-row.danger[_ngcontent-%COMP%]:hover {
  background: var(--rose-soft);
}
.pc[_ngcontent-%COMP%] {
  padding: 32px;
  flex: 1;
}
.view[_ngcontent-%COMP%] {
  display: none;
}
.view.active[_ngcontent-%COMP%] {
  display: block;
  animation: _ngcontent-%COMP%_fadeIn 0.3s var(--ease);
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.dash-root[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.dash-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 28px !important;
  border: 1px solid var(--border-v, rgba(99, 102, 241, 0.28)) !important;
  border-radius: 20px !important;
  background: var(--bg-card) !important;
  margin-bottom: 24px;
}
.dash-eyebrow[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #7c3aed;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.dash-eyebrow-teal[_ngcontent-%COMP%] {
  color: #0891b2;
}
.dash-pulse[_ngcontent-%COMP%] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7c3aed;
  display: inline-block;
  animation: _ngcontent-%COMP%_dashBlink 2s infinite;
}
.dash-pulse-teal[_ngcontent-%COMP%] {
  background: #0891b2;
}
@keyframes _ngcontent-%COMP%_dashBlink {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4);
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0);
  }
}
.dash-title[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin: 0 0 6px;
}
.dash-desc[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
.dash-head-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
  padding-top: 4px;
}
.dash-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 9px;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
  border: none;
  font-family: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.dash-btn-outline[_ngcontent-%COMP%] {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #94a3b8;
}
.dash-btn-outline[_ngcontent-%COMP%]:hover {
  border-color: rgba(255, 255, 255, 0.25);
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.04);
}
.dash-btn-solid[_ngcontent-%COMP%] {
  background: #4f46e5;
  color: #fff;
  box-shadow: 0 2px 12px rgba(79, 70, 229, 0.35);
}
.dash-btn-solid[_ngcontent-%COMP%]:hover {
  background: #4338ca;
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.5);
}
.dash-btn-teal[_ngcontent-%COMP%] {
  background: #0891b2;
  box-shadow: 0 2px 12px rgba(8, 145, 178, 0.35);
}
.dash-btn-teal[_ngcontent-%COMP%]:hover {
  background: #0e7490;
  box-shadow: 0 4px 20px rgba(8, 145, 178, 0.5);
}
.dash-kpi-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 24px;
}
.dash-kpi-grid.grid-4-cols[_ngcontent-%COMP%] {
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 1200px) {
  .dash-kpi-grid[_ngcontent-%COMP%], 
   .dash-kpi-grid.grid-4-cols[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 680px) {
  .dash-kpi-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.kpi-card[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 22px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}
.kpi-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}
.kpi-card-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.kpi-icon-badge[_ngcontent-%COMP%] {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}
.kpi-pill[_ngcontent-%COMP%] {
  font-size: 0.74rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}
.kpi-card-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.kpi-value[_ngcontent-%COMP%] {
  font-size: 1.85rem;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.5px;
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.kpi-currency[_ngcontent-%COMP%] {
  font-size: 0.82rem;
  font-weight: 700;
  opacity: 0.85;
}
.kpi-title[_ngcontent-%COMP%] {
  font-size: 0.92rem;
  font-weight: 800;
  color: #f8fafc;
  margin-top: 3px;
}
.kpi-subtitle[_ngcontent-%COMP%] {
  font-size: 0.76rem;
  color: #94a3b8;
  font-weight: 500;
}
.card-blue[_ngcontent-%COMP%] {
  border-color: rgba(14, 165, 233, 0.25);
}
.card-blue[_ngcontent-%COMP%]:hover {
  border-color: #38bdf8;
  box-shadow: 0 12px 35px rgba(14, 165, 233, 0.2);
}
.kpi-icon-badge.blue[_ngcontent-%COMP%] {
  background: rgba(14, 165, 233, 0.15);
  color: #38bdf8;
}
.kpi-pill.blue[_ngcontent-%COMP%] {
  background: rgba(14, 165, 233, 0.12);
  color: #38bdf8;
  border: 1px solid rgba(14, 165, 233, 0.25);
}
.kpi-value.blue[_ngcontent-%COMP%] {
  color: #38bdf8;
}
.card-emerald[_ngcontent-%COMP%] {
  border-color: rgba(16, 185, 129, 0.25);
}
.card-emerald[_ngcontent-%COMP%]:hover {
  border-color: #34d399;
  box-shadow: 0 12px 35px rgba(16, 185, 129, 0.2);
}
.kpi-icon-badge.emerald[_ngcontent-%COMP%] {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
}
.kpi-pill.emerald[_ngcontent-%COMP%] {
  background: rgba(16, 185, 129, 0.12);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.25);
}
.kpi-value.emerald[_ngcontent-%COMP%] {
  color: #34d399;
}
.card-amber[_ngcontent-%COMP%] {
  border-color: rgba(245, 158, 11, 0.25);
}
.card-amber[_ngcontent-%COMP%]:hover {
  border-color: #fbbf24;
  box-shadow: 0 12px 35px rgba(245, 158, 11, 0.2);
}
.kpi-icon-badge.amber[_ngcontent-%COMP%] {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
}
.kpi-pill.amber[_ngcontent-%COMP%] {
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.25);
}
.kpi-value.amber[_ngcontent-%COMP%] {
  color: #fbbf24;
}
.card-purple[_ngcontent-%COMP%] {
  border-color: rgba(124, 58, 237, 0.25);
}
.card-purple[_ngcontent-%COMP%]:hover {
  border-color: #a78bfa;
  box-shadow: 0 12px 35px rgba(124, 58, 237, 0.2);
}
.kpi-icon-badge.purple[_ngcontent-%COMP%] {
  background: rgba(124, 58, 237, 0.15);
  color: #a78bfa;
}
.kpi-pill.purple[_ngcontent-%COMP%] {
  background: rgba(124, 58, 237, 0.12);
  color: #a78bfa;
  border: 1px solid rgba(124, 58, 237, 0.25);
}
.kpi-value.purple[_ngcontent-%COMP%] {
  color: #a78bfa;
}
.card-cyan[_ngcontent-%COMP%] {
  border-color: rgba(6, 182, 212, 0.25);
}
.card-cyan[_ngcontent-%COMP%]:hover {
  border-color: #67e8f9;
  box-shadow: 0 12px 35px rgba(6, 182, 212, 0.2);
}
.kpi-icon-badge.cyan[_ngcontent-%COMP%] {
  background: rgba(6, 182, 212, 0.15);
  color: #67e8f9;
}
.kpi-pill.cyan[_ngcontent-%COMP%] {
  background: rgba(6, 182, 212, 0.12);
  color: #67e8f9;
  border: 1px solid rgba(6, 182, 212, 0.25);
}
.kpi-value.cyan[_ngcontent-%COMP%] {
  color: #67e8f9;
}
.card-indigo[_ngcontent-%COMP%] {
  border-color: rgba(99, 102, 241, 0.25);
}
.card-indigo[_ngcontent-%COMP%]:hover {
  border-color: #818cf8;
  box-shadow: 0 12px 35px rgba(99, 102, 241, 0.2);
}
.kpi-icon-badge.indigo[_ngcontent-%COMP%] {
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
}
.kpi-pill.indigo[_ngcontent-%COMP%] {
  background: rgba(99, 102, 241, 0.12);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.25);
}
.kpi-value.indigo[_ngcontent-%COMP%] {
  color: #818cf8;
}
.card-rose[_ngcontent-%COMP%] {
  border-color: rgba(244, 63, 94, 0.25);
}
.card-rose[_ngcontent-%COMP%]:hover {
  border-color: #fda4af;
  box-shadow: 0 12px 35px rgba(244, 63, 94, 0.2);
}
.kpi-icon-badge.rose[_ngcontent-%COMP%] {
  background: rgba(244, 63, 94, 0.15);
  color: #fda4af;
}
.kpi-pill.rose[_ngcontent-%COMP%] {
  background: rgba(244, 63, 94, 0.12);
  color: #fda4af;
  border: 1px solid rgba(244, 63, 94, 0.25);
}
.kpi-value.rose[_ngcontent-%COMP%] {
  color: #fda4af;
}
body.light-theme[_nghost-%COMP%]   .kpi-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05) !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-card[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .kpi-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12) !important;
  border-color: #cbd5e1 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-title[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-title[_ngcontent-%COMP%] {
  color: #0f172a !important;
  font-weight: 800 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-subtitle[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-subtitle[_ngcontent-%COMP%] {
  color: #475569 !important;
  font-weight: 600 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-icon-badge.blue[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-icon-badge.blue[_ngcontent-%COMP%] {
  background: #e0f2fe !important;
  color: #0284c7 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-pill.blue[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-pill.blue[_ngcontent-%COMP%] {
  background: rgba(2, 132, 199, 0.1) !important;
  color: #0284c7 !important;
  border-color: rgba(2, 132, 199, 0.25) !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-value.blue[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-value.blue[_ngcontent-%COMP%] {
  color: #0369a1 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-icon-badge.emerald[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-icon-badge.emerald[_ngcontent-%COMP%] {
  background: #dcfce7 !important;
  color: #16a34a !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-pill.emerald[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-pill.emerald[_ngcontent-%COMP%] {
  background: rgba(22, 163, 74, 0.1) !important;
  color: #16a34a !important;
  border-color: rgba(22, 163, 74, 0.25) !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-value.emerald[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-value.emerald[_ngcontent-%COMP%] {
  color: #15803d !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-icon-badge.amber[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-icon-badge.amber[_ngcontent-%COMP%] {
  background: #fef3c7 !important;
  color: #d97706 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-pill.amber[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-pill.amber[_ngcontent-%COMP%] {
  background: rgba(217, 119, 6, 0.1) !important;
  color: #d97706 !important;
  border-color: rgba(217, 119, 6, 0.25) !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-value.amber[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-value.amber[_ngcontent-%COMP%] {
  color: #b45309 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-icon-badge.purple[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-icon-badge.purple[_ngcontent-%COMP%] {
  background: #f3e8ff !important;
  color: #7e22ce !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-pill.purple[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-pill.purple[_ngcontent-%COMP%] {
  background: rgba(126, 34, 206, 0.1) !important;
  color: #7e22ce !important;
  border-color: rgba(126, 34, 206, 0.25) !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-value.purple[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-value.purple[_ngcontent-%COMP%] {
  color: #6b21a8 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-icon-badge.cyan[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-icon-badge.cyan[_ngcontent-%COMP%] {
  background: #cffafe !important;
  color: #0891b2 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-pill.cyan[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-pill.cyan[_ngcontent-%COMP%] {
  background: rgba(8, 145, 178, 0.1) !important;
  color: #0891b2 !important;
  border-color: rgba(8, 145, 178, 0.25) !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-value.cyan[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-value.cyan[_ngcontent-%COMP%] {
  color: #0e7490 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-icon-badge.indigo[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-icon-badge.indigo[_ngcontent-%COMP%] {
  background: #e0e7ff !important;
  color: #4f46e5 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-pill.indigo[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-pill.indigo[_ngcontent-%COMP%] {
  background: rgba(79, 70, 229, 0.1) !important;
  color: #4f46e5 !important;
  border-color: rgba(79, 70, 229, 0.25) !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-value.indigo[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-value.indigo[_ngcontent-%COMP%] {
  color: #3730a3 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-icon-badge.rose[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-icon-badge.rose[_ngcontent-%COMP%] {
  background: #ffe4e6 !important;
  color: #e11d48 !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-pill.rose[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-pill.rose[_ngcontent-%COMP%] {
  background: rgba(225, 29, 72, 0.1) !important;
  color: #e11d48 !important;
  border-color: rgba(225, 29, 72, 0.25) !important;
}
body.light-theme[_nghost-%COMP%]   .kpi-value.rose[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .kpi-value.rose[_ngcontent-%COMP%] {
  color: #be123c !important;
}
.dash-analytics-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}
.analytics-card[_ngcontent-%COMP%] {
  padding: 22px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  backdrop-filter: blur(12px);
}
.ac-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.ac-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
}
.ac-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.78rem;
  color: #94a3b8;
  margin-top: 4px;
}
.ac-badge[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 100px;
}
.ac-badge.emerald[_ngcontent-%COMP%] {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}
.ac-badge.cyan[_ngcontent-%COMP%] {
  background: rgba(6, 182, 212, 0.15);
  color: #67e8f9;
  border: 1px solid rgba(6, 182, 212, 0.3);
}
.ac-progress-box[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 18px;
  border-radius: 14px;
}
.ac-pb-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}
.ac-pb-track[_ngcontent-%COMP%] {
  height: 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  overflow: hidden;
}
.ac-pb-fill[_ngcontent-%COMP%] {
  height: 100%;
  border-radius: 100px;
  transition: width 0.6s ease;
}
.ac-pb-fill.emerald[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #10b981,
      #34d399);
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
}
.ac-pb-fill.cyan[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #06b6d4,
      #67e8f9);
  box-shadow: 0 0 12px rgba(6, 182, 212, 0.4);
}
.ac-legend[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  margin-top: 14px;
  font-size: 0.76rem;
  color: #94a3b8;
  flex-wrap: wrap;
}
.legend-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
}
.dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.dot.emerald[_ngcontent-%COMP%] {
  background: #34d399;
}
.dot.rose[_ngcontent-%COMP%] {
  background: #f87171;
}
.dot.cyan[_ngcontent-%COMP%] {
  background: #67e8f9;
}
.dot.amber[_ngcontent-%COMP%] {
  background: #fbbf24;
}
.dot.violet[_ngcontent-%COMP%] {
  background: #a78bfa;
}
.dash-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.dash-panel[_ngcontent-%COMP%] {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  overflow: hidden;
  backdrop-filter: blur(12px);
}
.dash-panel-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.dash-panel-title[_ngcontent-%COMP%] {
  font-size: 0.88rem;
  font-weight: 700;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dash-panel-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 0.82rem;
}
.dash-panel-link[_ngcontent-%COMP%] {
  font-size: 0.76rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.18s;
  text-decoration: none;
  border: none;
  background: none;
  padding: 0;
  font-family: inherit;
}
.dash-panel-link[_ngcontent-%COMP%]:hover {
  color: #94a3b8;
}
.dash-panel-body[_ngcontent-%COMP%] {
  padding: 8px 0;
}
.dash-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  transition: background 0.15s;
}
.dash-row[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.03);
}
.dash-row-avatar[_ngcontent-%COMP%] {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}
.dash-row-thumb[_ngcontent-%COMP%] {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}
.dash-row-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dash-row-thumb-placeholder[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
}
.av-p[_ngcontent-%COMP%] {
  background: rgba(124, 58, 237, 0.18);
  color: #a78bfa;
}
.av-b[_ngcontent-%COMP%] {
  background: rgba(14, 165, 233, 0.18);
  color: #38bdf8;
}
.av-a[_ngcontent-%COMP%] {
  background: rgba(245, 158, 11, 0.18);
  color: #fbbf24;
}
.av-g[_ngcontent-%COMP%] {
  background: rgba(34, 197, 94, 0.18);
  color: #4ade80;
}
.av-r[_ngcontent-%COMP%] {
  background: rgba(239, 68, 68, 0.18);
  color: #f87171;
}
.dash-row-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.dash-row-name[_ngcontent-%COMP%] {
  font-size: 0.84rem;
  font-weight: 600;
  color: #e2e8f0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dash-row-meta[_ngcontent-%COMP%] {
  font-size: 0.74rem;
  color: #475569;
  margin-top: 1px;
}
.dash-row-end[_ngcontent-%COMP%] {
  flex-shrink: 0;
  text-align: end;
}
.dash-amount[_ngcontent-%COMP%] {
  font-size: 0.88rem;
  font-weight: 700;
  color: #4ade80;
  white-space: nowrap;
}
.dash-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  font-weight: 500;
  color: #16a34a;
}
.dash-status-badge[_ngcontent-%COMP%] {
  font-size: 0.68rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 100px;
  background: rgba(100, 116, 139, 0.18);
  color: #64748b;
  margin-top: 3px;
  display: inline-block;
}
.dash-priority[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 100px;
  background: rgba(100, 116, 139, 0.2);
  color: #94a3b8;
}
.prio-h[_ngcontent-%COMP%] {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
}
.prio-m[_ngcontent-%COMP%] {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
}
.prio-l[_ngcontent-%COMP%] {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
}
.dash-client-tag[_ngcontent-%COMP%] {
  font-size: 0.74rem;
  font-weight: 500;
  color: #475569;
}
.dash-empty[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px;
  color: #1e293b;
  font-size: 0.84rem;
}
.dash-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 2rem;
}
.dash-bar-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 20px;
}
.dash-bar-info[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  min-width: 110px;
  gap: 8px;
  font-size: 0.8rem;
}
.dash-bar-name[_ngcontent-%COMP%] {
  color: #94a3b8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80px;
}
.dash-bar-count[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #e2e8f0;
  flex-shrink: 0;
}
.dash-bar-track[_ngcontent-%COMP%] {
  flex: 1;
  height: 5px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 100px;
  overflow: hidden;
}
.dash-bar-fill[_ngcontent-%COMP%] {
  height: 100%;
  border-radius: 100px;
  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.fill-p[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #7c3aed,
      #a78bfa);
}
.fill-b[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #0891b2,
      #38bdf8);
}
.fill-a[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #d97706,
      #fbbf24);
}
.fill-g[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #16a34a,
      #4ade80);
}
.fill-r[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #dc2626,
      #f87171);
}
.dash-bar-pct[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  font-weight: 600;
  color: #475569;
  min-width: 30px;
  text-align: end;
}
.dash-shortcuts[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding-top: 4px;
}
.dash-shortcut[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(15, 23, 42, 0.4);
  cursor: pointer;
  transition: all 0.18s ease;
  font-size: 0.77rem;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  font-family: inherit;
}
.dash-shortcut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.05rem;
  color: #334155;
  transition: color 0.18s;
}
.dash-shortcut[_ngcontent-%COMP%]:hover {
  background: rgba(79, 70, 229, 0.08);
  border-color: rgba(79, 70, 229, 0.25);
  color: #a5b4fc;
}
.dash-shortcut[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {
  color: #a5b4fc;
}
body.light-theme[_nghost-%COMP%], body.light-theme   [_nghost-%COMP%] {
  --bg: #f8fafc;
  --bg-2: #f1f5f9;
  --bg-3: #e2e8f0;
  --card: #ffffff;
  --card-hover: #ffffff;
  --sidebar: #ffffff;
  --topbar: #ffffff;
  --border: #e2e8f0;
  --border-2: #cbd5e1;
  --border-v: rgba(99, 102, 241, 0.2);
  --border-t: rgba(6, 182, 212, 0.2);
  --text: #0f172a;
  --text-2: #334155;
  --text-3: #64748b;
}
body.light-theme[_nghost-%COMP%]   .crm-shell[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-shell[_ngcontent-%COMP%] {
  background: #f8fafc !important;
  color: #0f172a !important;
}
body.light-theme[_nghost-%COMP%]   .dash-root[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .dash-root[_ngcontent-%COMP%] {
  background: #f8fafc !important;
}
body.light-theme[_nghost-%COMP%]   .dash-kpi[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .dash-kpi[_ngcontent-%COMP%], 
body.light-theme[_nghost-%COMP%]   .dash-panel[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .dash-panel[_ngcontent-%COMP%], 
body.light-theme[_nghost-%COMP%]   .dash-shortcut[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .dash-shortcut[_ngcontent-%COMP%], 
body.light-theme[_nghost-%COMP%]   .glass-panel[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .glass-panel[_ngcontent-%COMP%], 
body.light-theme[_nghost-%COMP%]   .dash-quick-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .dash-quick-card[_ngcontent-%COMP%], 
body.light-theme[_nghost-%COMP%]   .wbanner[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .wbanner[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05) !important;
}
body.light-theme[_ngcontent-%COMP%]   .dash-head[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border: 1px solid rgba(99, 102, 241, 0.18) !important;
  box-shadow: 0 4px 20px -2px rgba(99, 102, 241, 0.08) !important;
  padding: 24px 28px !important;
}
body.light-theme[_ngcontent-%COMP%]   .dash-eyebrow[_ngcontent-%COMP%] {
  color: #6d28d9;
  font-weight: 800;
}
body.light-theme[_ngcontent-%COMP%]   .dash-eyebrow-teal[_ngcontent-%COMP%] {
  color: #0369a1;
  font-weight: 800;
}
body.light-theme[_ngcontent-%COMP%]   .dash-pulse[_ngcontent-%COMP%] {
  background: #6d28d9;
}
body.light-theme[_ngcontent-%COMP%]   .dash-pulse-teal[_ngcontent-%COMP%] {
  background: #0369a1;
}
body.light-theme[_ngcontent-%COMP%]   .dash-title[_ngcontent-%COMP%] {
  color: #0f172a;
  font-weight: 900;
}
body.light-theme[_ngcontent-%COMP%]   .dash-desc[_ngcontent-%COMP%] {
  color: #475569;
}
body.light-theme[_ngcontent-%COMP%]   .dash-btn-outline[_ngcontent-%COMP%] {
  background: #ffffff;
  border-color: #cbd5e1;
  color: #334155;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
body.light-theme[_ngcontent-%COMP%]   .dash-btn-outline[_ngcontent-%COMP%]:hover {
  border-color: #94a3b8;
  color: #0f172a;
  background: #f8fafc;
}
body.light-theme[_ngcontent-%COMP%]   .dash-btn-solid[_ngcontent-%COMP%] {
  background: #4f46e5;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);
}
body.light-theme[_ngcontent-%COMP%]   .dash-btn-solid[_ngcontent-%COMP%]:hover {
  background: #4338ca;
}
body.light-theme[_ngcontent-%COMP%]   .dash-btn-teal[_ngcontent-%COMP%] {
  background: #0284c7;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.25);
}
body.light-theme[_ngcontent-%COMP%]   .dash-btn-teal[_ngcontent-%COMP%]:hover {
  background: #0369a1;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04) !important;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi[_ngcontent-%COMP%]:hover {
  transform: none;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
  border-color: #e2e8f0;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-label[_ngcontent-%COMP%] {
  color: #334155;
  font-weight: 700;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-sub[_ngcontent-%COMP%] {
  color: #64748b;
  font-weight: 500;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-trend.up[_ngcontent-%COMP%] {
  color: #16a34a;
  font-weight: 700;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-trend.warn[_ngcontent-%COMP%] {
  color: #d97706;
  font-weight: 700;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-purple[_ngcontent-%COMP%]   .dash-kpi-icon[_ngcontent-%COMP%] {
  background: #f3e8ff;
  color: #7e22ce;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-purple[_ngcontent-%COMP%]   .dash-kpi-num[_ngcontent-%COMP%] {
  color: #6b21a8;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-blue[_ngcontent-%COMP%]   .dash-kpi-icon[_ngcontent-%COMP%] {
  background: #e0f2fe;
  color: #0284c7;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-blue[_ngcontent-%COMP%]   .dash-kpi-num[_ngcontent-%COMP%] {
  color: #0369a1;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-amber[_ngcontent-%COMP%]   .dash-kpi-icon[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #d97706;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-amber[_ngcontent-%COMP%]   .dash-kpi-num[_ngcontent-%COMP%] {
  color: #b45309;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-green[_ngcontent-%COMP%]   .dash-kpi-icon[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #15803d;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-green[_ngcontent-%COMP%]   .dash-kpi-num[_ngcontent-%COMP%] {
  color: #15803d;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-red[_ngcontent-%COMP%]   .dash-kpi-icon[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #b91c1c;
}
body.light-theme[_ngcontent-%COMP%]   .dash-kpi-red[_ngcontent-%COMP%]   .dash-kpi-num[_ngcontent-%COMP%] {
  color: #b91c1c;
}
body.light-theme[_ngcontent-%COMP%]   .dash-panel[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04) !important;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
body.light-theme[_ngcontent-%COMP%]   .dash-panel-head[_ngcontent-%COMP%] {
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}
body.light-theme[_ngcontent-%COMP%]   .dash-panel-title[_ngcontent-%COMP%] {
  color: #0f172a;
  font-weight: 800;
}
body.light-theme[_ngcontent-%COMP%]   .dash-panel-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #64748b;
}
body.light-theme[_ngcontent-%COMP%]   .dash-panel-link[_ngcontent-%COMP%] {
  color: #4f46e5;
  font-weight: 700;
}
body.light-theme[_ngcontent-%COMP%]   .dash-panel-link[_ngcontent-%COMP%]:hover {
  color: #3730a3;
}
body.light-theme[_ngcontent-%COMP%]   .dash-row[_ngcontent-%COMP%] {
  border-bottom: 1px solid #f1f5f9;
}
body.light-theme[_ngcontent-%COMP%]   .dash-row[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
body.light-theme[_ngcontent-%COMP%]   .dash-row[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
}
body.light-theme[_ngcontent-%COMP%]   .dash-row-name[_ngcontent-%COMP%] {
  color: #0f172a;
  font-weight: 700;
}
body.light-theme[_ngcontent-%COMP%]   .dash-row-meta[_ngcontent-%COMP%] {
  color: #64748b;
}
body.light-theme[_ngcontent-%COMP%]   .av-p[_ngcontent-%COMP%] {
  background: #f3e8ff;
  color: #7e22ce;
}
body.light-theme[_ngcontent-%COMP%]   .av-b[_ngcontent-%COMP%] {
  background: #e0f2fe;
  color: #0284c7;
}
body.light-theme[_ngcontent-%COMP%]   .av-a[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #b45309;
}
body.light-theme[_ngcontent-%COMP%]   .av-g[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #15803d;
}
body.light-theme[_ngcontent-%COMP%]   .av-r[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #b91c1c;
}
body.light-theme[_ngcontent-%COMP%]   .dash-amount[_ngcontent-%COMP%] {
  color: #15803d;
  font-weight: 800;
}
body.light-theme[_ngcontent-%COMP%]   .dash-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: #166534;
}
body.light-theme[_ngcontent-%COMP%]   .dash-status-badge[_ngcontent-%COMP%] {
  background: #e2e8f0;
  color: #334155;
  font-weight: 700;
}
body.light-theme[_ngcontent-%COMP%]   .dash-client-tag[_ngcontent-%COMP%] {
  color: #475569;
  font-weight: 600;
}
body.light-theme[_ngcontent-%COMP%]   .prio-h[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #b91c1c;
  font-weight: 800;
}
body.light-theme[_ngcontent-%COMP%]   .prio-m[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #b45309;
  font-weight: 800;
}
body.light-theme[_ngcontent-%COMP%]   .prio-l[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #15803d;
  font-weight: 800;
}
body.light-theme[_ngcontent-%COMP%]   .dash-bar-info[_ngcontent-%COMP%] {
  color: #334155;
}
body.light-theme[_ngcontent-%COMP%]   .dash-bar-name[_ngcontent-%COMP%] {
  color: #334155;
  font-weight: 600;
}
body.light-theme[_ngcontent-%COMP%]   .dash-bar-count[_ngcontent-%COMP%] {
  color: #0f172a;
  font-weight: 800;
}
body.light-theme[_ngcontent-%COMP%]   .dash-bar-track[_ngcontent-%COMP%] {
  background: #e2e8f0;
}
body.light-theme[_ngcontent-%COMP%]   .dash-bar-pct[_ngcontent-%COMP%] {
  color: #64748b;
  font-weight: 700;
}
body.light-theme[_ngcontent-%COMP%]   .dash-empty[_ngcontent-%COMP%] {
  color: #94a3b8;
}
body.light-theme[_ngcontent-%COMP%]   .dash-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #cbd5e1;
}
body.light-theme[_ngcontent-%COMP%]   .dash-shortcut[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #334155;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
body.light-theme[_ngcontent-%COMP%]   .dash-shortcut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #64748b;
}
body.light-theme[_ngcontent-%COMP%]   .dash-shortcut[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-weight: 700;
}
body.light-theme[_ngcontent-%COMP%]   .dash-shortcut[_ngcontent-%COMP%]:hover {
  background: #f5f3ff;
  border-color: #c4b5fd;
  color: #6d28d9;
  box-shadow: 0 4px 12px rgba(109, 40, 217, 0.08);
}
body.light-theme[_ngcontent-%COMP%]   .dash-shortcut[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {
  color: #6d28d9;
}
@media (max-width: 1200px) {
  .dash-kpi-row[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .dash-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .dash-shortcuts[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 640px) {
  .dash-kpi-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr;
  }
  .dash-head[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
.wbanner[_ngcontent-%COMP%] {
  position: relative;
  border-radius: var(--r-xl);
  overflow: hidden;
  border: 1px solid var(--border-v);
  background: #090918;
  padding: 36px 40px;
  margin-bottom: 32px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
}
.wb-bg[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 15% 30%,
      rgba(99, 102, 241, 0.25) 0%,
      transparent 45%),
    radial-gradient(
      circle at 85% 70%,
      rgba(6, 182, 212, 0.2) 0%,
      transparent 45%),
    radial-gradient(
      circle at 50% 50%,
      rgba(244, 63, 94, 0.08) 0%,
      transparent 60%);
  filter: blur(30px);
  animation: _ngcontent-%COMP%_pulseGlow 10s infinite alternate var(--ease);
}
@keyframes _ngcontent-%COMP%_pulseGlow {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.1);
    opacity: 1;
  }
}
.wb-grid[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px);
  background-size: 32px 32px;
  opacity: 0.6;
}
.wb-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(9, 9, 24, 0.85) 0%,
      rgba(9, 9, 24, 0.4) 60%,
      rgba(9, 9, 24, 0.7) 100%);
}
.wb-inner[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.wb-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 5px 14px;
  border-radius: 100px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.35);
  color: var(--violet-light);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
}
.wb-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--emerald-light);
  box-shadow: 0 0 10px var(--emerald-light);
  display: inline-block;
  animation: _ngcontent-%COMP%_blink 1.8s infinite;
}
@keyframes _ngcontent-%COMP%_blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
.wb-greeting[_ngcontent-%COMP%] {
  font-size: 2.1rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.6px;
  line-height: 1.25;
}
.wb-greeting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #fff 0%,
      var(--violet-light) 60%,
      var(--teal-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wb-sub[_ngcontent-%COMP%] {
  color: var(--text-2);
  font-size: 0.95rem;
  margin-top: 10px;
  max-width: 540px;
  line-height: 1.6;
}
.wb-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
}
.wb-btn[_ngcontent-%COMP%] {
  padding: 11px 22px;
  border-radius: 12px;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s var(--ease);
  border: none;
}
.wb-primary[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--violet-2));
  color: #fff;
  box-shadow: 0 6px 20px var(--violet-glow);
}
.wb-primary[_ngcontent-%COMP%]:hover {
  box-shadow: 0 10px 30px var(--violet-glow);
  background:
    linear-gradient(
      135deg,
      #6d70f8,
      var(--violet));
}
.wb-secondary[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-2);
  color: var(--text);
  backdrop-filter: blur(10px);
}
.wb-secondary[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--teal-light);
  color: var(--teal-light);
}
.wb-quick-stats[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  flex-shrink: 0;
}
.wb-qs[_ngcontent-%COMP%] {
  background: rgba(15, 15, 32, 0.65);
  border: 1px solid var(--border);
  backdrop-filter: blur(15px);
  padding: 16px 22px;
  border-radius: 16px;
  text-align: center;
  min-width: 110px;
  cursor: pointer;
  transition: all 0.25s var(--ease);
}
.wb-qs[_ngcontent-%COMP%]:hover {
  background: rgba(25, 25, 50, 0.8);
  border-color: var(--border-v);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}
.wb-qs-num[_ngcontent-%COMP%] {
  font-size: 1.6rem;
  font-weight: 800;
  color: #fff;
}
.wb-qs-lbl[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 2px;
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
.stat-card[_ngcontent-%COMP%] {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 24px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s var(--ease);
  backdrop-filter: blur(20px);
}
.stat-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: transparent;
  transition: background 0.3s;
}
.stat-c-violet[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      var(--violet),
      var(--violet-light));
}
.stat-c-teal[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      var(--teal),
      var(--teal-light));
}
.stat-c-amber[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      var(--amber),
      var(--amber-light));
}
.stat-c-rose[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      var(--rose),
      var(--rose-light));
}
.stat-card[_ngcontent-%COMP%]:hover {
  background: var(--card-hover);
  border-color: var(--border-2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
}
.stat-card-icon[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 16px;
  transition: transform 0.3s var(--ease);
}
.stat-c-violet[_ngcontent-%COMP%]   .stat-card-icon[_ngcontent-%COMP%] {
  background: var(--violet-soft);
  color: var(--violet-light);
  border: 1px solid rgba(99, 102, 241, 0.25);
}
.stat-c-teal[_ngcontent-%COMP%]   .stat-card-icon[_ngcontent-%COMP%] {
  background: var(--teal-soft);
  color: var(--teal-light);
  border: 1px solid rgba(6, 182, 212, 0.25);
}
.stat-c-amber[_ngcontent-%COMP%]   .stat-card-icon[_ngcontent-%COMP%] {
  background: var(--amber-soft);
  color: var(--amber-light);
  border: 1px solid rgba(245, 158, 11, 0.25);
}
.stat-c-rose[_ngcontent-%COMP%]   .stat-card-icon[_ngcontent-%COMP%] {
  background: var(--rose-soft);
  color: var(--rose-light);
  border: 1px solid rgba(244, 63, 94, 0.25);
}
.stat-card[_ngcontent-%COMP%]:hover   .stat-card-icon[_ngcontent-%COMP%] {
  transform: none;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.stat-value[_ngcontent-%COMP%] {
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  margin: 6px 0;
  letter-spacing: -1px;
}
.stat-trend[_ngcontent-%COMP%] {
  font-size: 0.76rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}
.trend-v[_ngcontent-%COMP%] {
  color: var(--violet-light);
}
.trend-t[_ngcontent-%COMP%] {
  color: var(--teal-light);
}
.trend-a[_ngcontent-%COMP%] {
  color: var(--amber-light);
}
.card[_ngcontent-%COMP%] {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 24px;
  margin-bottom: 24px;
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
.card-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.card-title[_ngcontent-%COMP%] {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
}
.card-title-icon[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}
.cti-v[_ngcontent-%COMP%] {
  background: var(--violet-soft);
  color: var(--violet-light);
}
.cti-t[_ngcontent-%COMP%] {
  background: var(--teal-soft);
  color: var(--teal-light);
}
.card-action[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--violet-light);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
}
.card-action[_ngcontent-%COMP%]:hover {
  color: #fff;
}
.table-responsive[_ngcontent-%COMP%] {
  width: 100%;
  overflow-x: auto;
}
table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: var(--text);
  font-size: 0.86rem;
}
th[_ngcontent-%COMP%] {
  padding: 12px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-2);
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.015);
}
td[_ngcontent-%COMP%] {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
  transition: background 0.2s;
}
tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.025);
}
.user-cell[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.user-avatar[_ngcontent-%COMP%] {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      var(--violet-2),
      var(--teal-2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  font-size: 0.8rem;
  flex-shrink: 0;
}
.badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.badge-v[_ngcontent-%COMP%] {
  background: var(--violet-soft);
  color: var(--violet-light);
  border: 1px solid rgba(99, 102, 241, 0.25);
}
.badge-t[_ngcontent-%COMP%] {
  background: var(--teal-soft);
  color: var(--teal-light);
  border: 1px solid rgba(6, 182, 212, 0.25);
}
.badge-blue[_ngcontent-%COMP%] {
  background: rgba(59, 130, 246, 0.12);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.25);
}
.save-btn[_ngcontent-%COMP%] {
  padding: 10px 20px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--violet-2));
  color: #fff;
  font-weight: 700;
  font-size: 0.86rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px var(--violet-glow);
  transition: all 0.25s var(--ease);
}
.save-btn[_ngcontent-%COMP%]:hover {
  box-shadow: 0 8px 25px var(--violet-glow);
  background:
    linear-gradient(
      135deg,
      #6d70f8,
      var(--violet));
}
.save-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
.action-btn[_ngcontent-%COMP%] {
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  color: var(--text-2);
  cursor: pointer;
  font-size: 0.82rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.action-btn[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border-color: var(--border-2);
}
.font-small[_ngcontent-%COMP%] {
  font-size: 0.78rem !important;
  padding: 7px 14px !important;
}
.form-grid-custom[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}
.full-width[_ngcontent-%COMP%] {
  grid-column: span 2;
}
.fgroup[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.s-label[_ngcontent-%COMP%] {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-2);
  letter-spacing: 0.3px;
}
.s-input[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 11px 14px;
  color: #fff;
  font-family: inherit;
  font-size: 0.88rem;
  transition: all 0.25s var(--ease);
  outline: none;
}
.s-input[_ngcontent-%COMP%]:focus {
  border-color: var(--violet);
  background: rgba(99, 102, 241, 0.05);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
textarea.s-input[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 90px;
}
select.s-input[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%239ca3af' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}
.empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-2);
}
.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 2.2rem;
  margin-bottom: 12px;
  opacity: 0.4;
  color: var(--violet-light);
}
.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.9rem;
}
@media (max-width: 1200px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
  .content-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr !important;
  }
}
@media (max-width: 992px) {
  .sb[_ngcontent-%COMP%] {
    transform: translateX(-100%);
  }
  .sb.open[_ngcontent-%COMP%] {
    transform: translateX(0);
  }
  .main-container[_ngcontent-%COMP%] {
    margin-left: 0;
  }
  .wb-inner[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
  }
  .wb-quick-stats[_ngcontent-%COMP%] {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
  }
  .pc[_ngcontent-%COMP%] {
    padding: 20px;
  }
}
@media (max-width: 640px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .wb-quick-stats[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
  .form-grid-custom[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .full-width[_ngcontent-%COMP%] {
    grid-column: span 1;
  }
  .tb[_ngcontent-%COMP%] {
    padding: 0 16px;
  }
  .tb-bc[_ngcontent-%COMP%] {
    display: none;
  }
}
body.light-theme[_ngcontent-%COMP%]   .wbanner[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f8fafc 60%,
      rgba(99, 102, 241, 0.08) 100%) !important;
  border-color: rgba(99, 102, 241, 0.22) !important;
  box-shadow: 0 15px 40px rgba(15, 23, 42, 0.06) !important;
}
body.light-theme[_ngcontent-%COMP%]   .wb-overlay[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(248, 250, 252, 0.85) 100%) !important;
}
body.light-theme[_ngcontent-%COMP%]   .wb-greeting[_ngcontent-%COMP%] {
  color: #0f172a !important;
}
body.light-theme[_ngcontent-%COMP%]   .wb-greeting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #4f46e5,
      #0284c7) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
body.light-theme[_ngcontent-%COMP%]   .wb-sub[_ngcontent-%COMP%] {
  color: #475569 !important;
}
body.light-theme[_ngcontent-%COMP%]   .wb-qs[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: rgba(99, 102, 241, 0.18) !important;
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.04) !important;
}
body.light-theme[_ngcontent-%COMP%]   .wb-qs-num[_ngcontent-%COMP%] {
  color: #0f172a !important;
}
body.light-theme[_ngcontent-%COMP%]   .wb-qs-lbl[_ngcontent-%COMP%] {
  color: #64748b !important;
}
body.light-theme[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: rgba(99, 102, 241, 0.15) !important;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05) !important;
}
body.light-theme[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(99, 102, 241, 0.35) !important;
  box-shadow: 0 18px 40px rgba(99, 102, 241, 0.12) !important;
}
body.light-theme[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
  color: #64748b !important;
}
body.light-theme[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {
  color: #0f172a !important;
}
body.light-theme[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: rgba(99, 102, 241, 0.15) !important;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05) !important;
}
body.light-theme[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {
  border-bottom-color: rgba(99, 102, 241, 0.1) !important;
}
body.light-theme[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {
  color: #0f172a !important;
}
body.light-theme[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background: rgba(99, 102, 241, 0.04) !important;
  color: #475569 !important;
  border-bottom-color: rgba(99, 102, 241, 0.12) !important;
}
body.light-theme[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  color: #0f172a !important;
  border-bottom-color: rgba(99, 102, 241, 0.08) !important;
}
body.light-theme[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {
  background: rgba(99, 102, 241, 0.05) !important;
}
.dash-kpi[_ngcontent-%COMP%], 
.dash-shortcut[_ngcontent-%COMP%], 
.analytics-card[_ngcontent-%COMP%], 
.dash-panel[_ngcontent-%COMP%], 
.stat-card[_ngcontent-%COMP%], 
.glass-panel[_ngcontent-%COMP%], 
.dash-head[_ngcontent-%COMP%] {
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease !important;
}
.dash-kpi[_ngcontent-%COMP%]:hover, 
.dash-shortcut[_ngcontent-%COMP%]:hover, 
.analytics-card[_ngcontent-%COMP%]:hover, 
.dash-panel[_ngcontent-%COMP%]:hover, 
.stat-card[_ngcontent-%COMP%]:hover, 
.glass-panel[_ngcontent-%COMP%]:hover, 
.dash-head[_ngcontent-%COMP%]:hover, 
.stat-card[_ngcontent-%COMP%]:hover   .stat-card-icon[_ngcontent-%COMP%], 
body.light-theme[_ngcontent-%COMP%]   .dash-kpi[_ngcontent-%COMP%]:hover, 
body.light-theme[_ngcontent-%COMP%]   .dash-shortcut[_ngcontent-%COMP%]:hover, 
body.light-theme[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]:hover, 
body.light-theme[_ngcontent-%COMP%]   .dash-panel[_ngcontent-%COMP%]:hover, 
body.light-theme[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, 
body.light-theme[_ngcontent-%COMP%]   .glass-panel[_ngcontent-%COMP%]:hover, 
body.light-theme[_ngcontent-%COMP%]   .dash-head[_ngcontent-%COMP%]:hover {
  transform: none !important;
  animation: none !important;
}
/*# sourceMappingURL=controller-dashboard.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControllerDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-controller-dashboard", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     CRM OVERVIEW \u2014 \u0645\u0631\u0643\u0632 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="view" [class.active]="activeTab === 'crm-overview' || activeTab === 'overview'">
  <div class="dash-root">

    <!-- Header Hero Banner -->
    <div class="dash-head glass-panel">
      <div>
        <div class="dash-eyebrow"><span class="dash-pulse"></span>\u0645\u0631\u0643\u0632 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u2014 CRM 2026</div>
        <h1 class="dash-title">\u0623\u0647\u0644\u0627\u064B \u0628\u0643\u060C {{ currentUser?.name || '\u0645\u062F\u064A\u0631 \u0627\u0644\u0648\u0643\u0627\u0644\u0629' }} \u{1F44B}</h1>
        <p class="dash-desc">\u0646\u0638\u0631\u0629 \u0634\u0627\u0645\u0644\u0629 \u0648\u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0644\u0649 \u0623\u062F\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621\u060C \u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629\u060C \u0648\u0645\u0639\u062F\u0644\u0627\u062A \u0625\u0646\u062C\u0627\u0632 \u0627\u0644\u0645\u0647\u0627\u0645.</p>
      </div>
      <div class="dash-head-actions">
        <a class="dash-btn dash-btn-outline" routerLink="/deals"><i class="fa-solid fa-handshake"></i> \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F</a>
        <a class="dash-btn dash-btn-solid" routerLink="/tasks"><i class="fa-solid fa-list-check"></i> \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A</a>
      </div>
    </div>

    <!-- \u2500\u2500 6-METRICS ULTRA-MODERN KPI GRID (3x2) \u2500\u2500 -->
    <div class="dash-kpi-grid">
      
      <!-- 1. Total Revenue / Contracts -->
      <div class="kpi-card card-blue" routerLink="/deals">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge blue"><i class="fa-solid fa-file-invoice-dollar"></i></div>
          <span class="kpi-pill blue"><i class="fa-solid fa-coins"></i> {{ crmStats.deals }} \u0639\u0642\u0648\u062F \u0648\u0635\u0641\u0642\u0627\u062A</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value blue">{{ (crmStats.totalRevenue || 0) | number:'1.0-0' }} <span class="kpi-currency">\u062C.\u0645</span></div>
          <div class="kpi-title">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F</div>
          <div class="kpi-subtitle">\u0642\u064A\u0645\u0629 \u0643\u0627\u0641\u0629 \u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0627\u0644\u0645\u0628\u0631\u0645\u0629 \u0628\u0627\u0644\u0633\u064A\u0633\u062A\u0645</div>
        </div>
      </div>

      <!-- 2. Total Paid / Collected -->
      <div class="kpi-card card-emerald" routerLink="/finance" *ngIf="isAdmin()">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge emerald"><i class="fa-solid fa-circle-check"></i></div>
          <span class="kpi-pill emerald"><i class="fa-solid fa-arrow-trend-up"></i> {{ getCollectionPercentage() }}% \u0646\u0633\u0628\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value emerald">{{ (crmStats.totalPaid || 0) | number:'1.0-0' }} <span class="kpi-currency">\u062C.\u0645</span></div>
          <div class="kpi-title">\u0627\u0644\u062A\u062D\u0635\u064A\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0645\u0633\u062F\u062F\u0629</div>
          <div class="kpi-subtitle">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062D\u0635\u0644\u0629 \u0641\u0639\u0644\u064A\u0627\u064B \u0641\u064A \u0627\u0644\u062E\u0632\u064A\u0646\u0629</div>
        </div>
      </div>

      <!-- 3. Remaining Balance -->
      <div class="kpi-card card-amber" routerLink="/finance" *ngIf="isAdmin()">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge amber"><i class="fa-solid fa-clock-rotate-left"></i></div>
          <span class="kpi-pill amber"><i class="fa-solid fa-hourglass-half"></i> \u0630\u0645\u0645 \u0645\u0633\u062A\u062D\u0642\u0629</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value amber">{{ (crmStats.totalRemaining || 0) | number:'1.0-0' }} <span class="kpi-currency">\u062C.\u0645</span></div>
          <div class="kpi-title">\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u062F\u0649 \u0627\u0644\u0639\u0645\u0644\u0627\u0621</div>
          <div class="kpi-subtitle">\u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0648\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0645\u062A\u0628\u0642\u064A\u0629 \u0627\u0644\u062A\u062D\u0635\u064A\u0644</div>
        </div>
      </div>

      <!-- 4. Total Company Margin / Profits -->
      <div class="kpi-card card-purple" routerLink="/finance" *ngIf="isAdmin()">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge purple"><i class="fa-solid fa-chart-line"></i></div>
          <span class="kpi-pill purple"><i class="fa-solid fa-sack-dollar"></i> \u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value purple">{{ (crmStats.totalMargin || 0) | number:'1.0-0' }} <span class="kpi-currency">\u062C.\u0645</span></div>
          <div class="kpi-title">\u0623\u0631\u0628\u0627\u062D \u0648\u0647\u0627\u0645\u0634 \u0627\u0644\u0648\u0643\u0627\u0644\u0629</div>
          <div class="kpi-subtitle">\u0627\u0644\u0647\u0627\u0645\u0634 \u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u062A\u0631\u0627\u0643\u0645\u064A \u0644\u0644\u0634\u0631\u0643\u0629</div>
        </div>
      </div>

      <!-- 5. Clients Count -->
      <div class="kpi-card card-cyan" routerLink="/clients">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge cyan"><i class="fa-solid fa-users"></i></div>
          <span class="kpi-pill cyan"><i class="fa-solid fa-shield-halved"></i> \u0639\u0645\u0644\u0627\u0621 \u0646\u0634\u0637\u0648\u0646</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value cyan">{{ crmStats.clients }} <span class="kpi-currency">\u0639\u0645\u064A\u0644</span></div>
          <div class="kpi-title">\u062F\u0644\u064A\u0644 \u0648\u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621</div>
          <div class="kpi-subtitle">\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u0627\u0639\u062F\u0629 \u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0645\u0642\u064A\u062F\u064A\u0646</div>
        </div>
      </div>

      <!-- 6. Active Tasks Count -->
      <div class="kpi-card card-indigo" routerLink="/tasks">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge indigo"><i class="fa-solid fa-list-check"></i></div>
          <span class="kpi-pill indigo"><i class="fa-solid fa-bars-progress"></i> {{ getOverallTasksCompletionRate() }}% \u0625\u0646\u062C\u0627\u0632</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value indigo">{{ crmStats.tasks }} <span class="kpi-currency">\u0645\u0647\u0645\u0629</span></div>
          <div class="kpi-title">\u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062C\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A</div>
          <div class="kpi-subtitle">\u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062C\u0627\u0631\u064A\u0629 \u062A\u062D\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629</div>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 VISUAL ANALYTICS & PROGRESS BARS \u2500\u2500 -->
    <div class="dash-analytics-grid">
      
      <!-- Financial Progress Chart Card -->
      <div class="analytics-card glass-panel" *ngIf="isAdmin()">
        <div class="ac-head">
          <div>
            <h3><i class="fa-solid fa-chart-pie text-emerald"></i> \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u062A\u062D\u0635\u064A\u0644 \u0648\u0627\u0644\u0633\u064A\u0648\u0644\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629</h3>
            <p>\u0646\u0633\u0628\u0629 \u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0645\u0633\u062F\u062F\u0629 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629</p>
          </div>
          <span class="ac-badge emerald">{{ getCollectionPercentage() }}% \u0645\u062D\u0635\u0644</span>
        </div>

        <div class="ac-progress-box">
          <div class="ac-pb-header">
            <span>\u0627\u0644\u0645\u062F\u0641\u0648\u0639: {{ (crmStats.totalPaid || 0) | number:'1.0-0' }} \u062C.\u0645</span>
            <span>\u0627\u0644\u0645\u062A\u0628\u0642\u064A: {{ (crmStats.totalRemaining || 0) | number:'1.0-0' }} \u062C.\u0645</span>
          </div>
          <div class="ac-pb-track">
            <div class="ac-pb-fill emerald" [style.width.%]="getCollectionPercentage()"></div>
          </div>
          <div class="ac-legend">
            <span class="legend-item"><i class="dot emerald"></i> \u0627\u0644\u0645\u0633\u062F\u062F \u0645\u062D\u0635\u0644 \u0628\u0627\u0644\u0641\u0639\u0644 ({{ getCollectionPercentage() }}%)</span>
            <span class="legend-item"><i class="dot rose"></i> \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0623\u0642\u0633\u0627\u0637 \u0645\u0633\u062A\u062D\u0642\u0629 ({{ 100 - getCollectionPercentage() }}%)</span>
          </div>
        </div>
      </div>

      <!-- Tasks Progress Breakdown Chart Card -->
      <div class="analytics-card glass-panel">
        <div class="ac-head">
          <div>
            <h3><i class="fa-solid fa-list-check text-cyan"></i> \u0645\u0639\u062F\u0644 \u0625\u0646\u062C\u0627\u0632 \u0648\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A</h3>
            <p>\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0645\u0647\u0627\u0645 \u0628\u064A\u0646 \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629 \u0648\u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629\u060C \u0642\u064A\u062F \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F\u060C \u0648\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630</p>
          </div>
          <span class="ac-badge cyan">{{ getOverallTasksCompletionRate() }}% \u0645\u0643\u062A\u0645\u0644</span>
        </div>

        <div class="ac-progress-box">
          <div class="ac-pb-header">
            <span>\u0627\u0644\u0645\u0639\u062A\u0645\u062F \u0648\u0627\u0644\u0645\u0643\u062A\u0645\u0644: {{ crmStats.doneTasksCount }}</span>
            <span>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0647\u0627\u0645: {{ crmStats.tasks }}</span>
          </div>
          <div class="ac-pb-track">
            <div class="ac-pb-fill cyan" [style.width.%]="getOverallTasksCompletionRate()"></div>
          </div>
          <div class="ac-legend">
            <span class="legend-item"><i class="dot emerald"></i> \u0645\u0643\u062A\u0645\u0644 \u0648\u0645\u0639\u062A\u0645\u062F ({{ crmStats.doneTasksCount }})</span>
            <span class="legend-item"><i class="dot amber"></i> \u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 ({{ crmStats.pendingTasksCount }})</span>
            <span class="legend-item"><i class="dot violet"></i> \u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A ({{ crmStats.inProgressTasksCount }})</span>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 RECENT FEEDS GRID \u2500\u2500 -->
    <div class="dash-grid">

      <!-- Recent Deals Panel -->
      <div class="dash-panel glass-panel">
        <div class="dash-panel-head">
          <div class="dash-panel-title"><i class="fa-solid fa-handshake text-blue"></i> \u0623\u062D\u062F\u062B \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u0628\u0631\u0645\u0629</div>
          <a class="dash-panel-link" routerLink="/deals">\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 <i class="fa-solid fa-angle-left"></i></a>
        </div>
        <div class="dash-panel-body">
          <ng-container *ngIf="recentDeals.length > 0; else emptyDealsV2">
            <div class="dash-row" *ngFor="let d of recentDeals; let i = index">
              <div class="dash-row-avatar" [class]="['av-p','av-b','av-a','av-g','av-r'][i%5]">
                {{ (d.title || '\u0635')[0] }}
              </div>
              <div class="dash-row-info">
                <div class="dash-row-name">{{ d.title || '\u0635\u0641\u0642\u0629' }}</div>
                <div class="dash-row-meta"><i class="fa-solid fa-building"></i> {{ getClientName(d) }}</div>
              </div>
              <div class="dash-row-end">
                <div class="dash-amount">{{ (d.calculated_total || d.value || d.amount || 0) | number }} <span>\u062C.\u0645</span></div>
                <div class="dash-status-badge">{{ d.stage || d.status || '\u0646\u0634\u0637\u0629' }}</div>
              </div>
            </div>
          </ng-container>
          <ng-template #emptyDealsV2>
            <div class="dash-empty"><i class="fa-solid fa-handshake"></i><span>\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u062D\u0627\u0644\u064A\u0629 \u0645\u0633\u062C\u0644\u0629</span></div>
          </ng-template>
        </div>
      </div>

      <!-- Recent Tasks Panel -->
      <div class="dash-panel glass-panel">
        <div class="dash-panel-head">
          <div class="dash-panel-title"><i class="fa-solid fa-list-check text-amber"></i> \u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062C\u0627\u0631\u064A\u0629 \u0628\u0627\u0644\u0648\u0643\u0627\u0644\u0629</div>
          <a class="dash-panel-link" routerLink="/tasks">\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 <i class="fa-solid fa-angle-left"></i></a>
        </div>
        <div class="dash-panel-body">
          <ng-container *ngIf="recentTasks.length > 0; else emptyTasksV2">
            <div class="dash-row" *ngFor="let t of recentTasks; let i = index">
              <div class="dash-row-avatar" [class]="['av-p','av-b','av-a','av-g','av-r'][i%5]">
                {{ (t.title || '\u0645')[0] }}
              </div>
              <div class="dash-row-info">
                <div class="dash-row-name">{{ t.title || '\u0645\u0647\u0645\u0629' }}</div>
                <div class="dash-row-meta"><i class="fa-solid fa-user-gear"></i> {{ getAssigneeName(t) }}</div>
              </div>
              <div class="dash-row-end">
                <span class="dash-priority"
                  [class.prio-h]="t.priority==='high'"
                  [class.prio-m]="t.priority==='medium'"
                  [class.prio-l]="t.priority==='low'">
                  {{ t.priority==='high'?'\u0639\u0627\u0644\u064A\u0629':t.priority==='medium'?'\u0645\u062A\u0648\u0633\u0637\u0629':'\u0645\u0646\u062E\u0641\u0636\u0629' }}
                </span>
              </div>
            </div>
          </ng-container>
          <ng-template #emptyTasksV2>
            <div class="dash-empty"><i class="fa-solid fa-list-check"></i><span>\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u062C\u0627\u0631\u064A\u0629 \u062D\u0627\u0644\u064A\u0627\u064B</span></div>
          </ng-template>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 AGENCY SHORTCUTS HUB \u2500\u2500 -->
    <div class="dash-shortcuts">
      <a class="dash-shortcut" routerLink="/clients"><i class="fa-solid fa-users text-purple"></i><span>\u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621</span></a>
      <a class="dash-shortcut" routerLink="/deals"><i class="fa-solid fa-handshake text-blue"></i><span>\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F</span></a>
      <a class="dash-shortcut" routerLink="/tasks"><i class="fa-solid fa-list-check text-amber"></i><span>\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645</span></a>
      <a class="dash-shortcut" routerLink="/finance" *ngIf="isAdmin()"><i class="fa-solid fa-coins text-emerald"></i><span>\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629</span></a>
      <a class="dash-shortcut" routerLink="/departments"><i class="fa-solid fa-sitemap text-cyan"></i><span>\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632</span></a>
      <a class="dash-shortcut" routerLink="/roles" *ngIf="isAdmin()"><i class="fa-solid fa-shield-halved text-rose"></i><span>\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A</span></a>
    </div>

  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     WEBSITE OVERVIEW \u2014 \u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="view" [class.active]="activeTab === 'website-overview'">
  <div class="dash-root">

    <!-- Header -->
    <div class="dash-head">
      <div>
        <div class="dash-eyebrow dash-eyebrow-teal"><span class="dash-pulse dash-pulse-teal"></span>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u2014 CMS</div>
        <h1 class="dash-title">\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</h1>
        <p class="dash-desc">\u0631\u0627\u0642\u0628 \u0645\u0634\u0627\u0631\u064A\u0639\u0643 \u0648\u062E\u062F\u0645\u0627\u062A\u0643 \u0648\u062A\u0642\u064A\u064A\u0645\u0627\u062A\u0643 \u0648\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0648\u0627\u0631\u062F\u0629.</p>
      </div>
      <div class="dash-head-actions">
        <button class="dash-btn dash-btn-outline" (click)="setTab('contact-hub')"><i class="fa-solid fa-inbox"></i> \u0627\u0644\u0631\u0633\u0627\u0626\u0644</button>
        <button class="dash-btn dash-btn-solid dash-btn-teal" (click)="setTab('projects')"><i class="fa-solid fa-folder-open"></i> \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644</button>
      </div>
    </div>

    <!-- \u2500\u2500 CMS METRICS KPI GRID \u2500\u2500 -->
    <div class="dash-kpi-grid grid-4-cols">
      
      <!-- 1. Projects -->
      <div class="kpi-card card-purple" (click)="setTab('projects')">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge purple"><i class="fa-solid fa-folder-open"></i></div>
          <span class="kpi-pill purple"><i class="fa-solid fa-arrow-trend-up"></i> \u0645\u0646\u0634\u0648\u0631 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value purple">{{ overviewStats.projects }} <span class="kpi-currency">\u0645\u0634\u0631\u0648\u0639</span></div>
          <div class="kpi-title">\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644</div>
          <div class="kpi-subtitle">\u0645\u0639\u0631\u0636 \u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639</div>
        </div>
      </div>

      <!-- 2. Services -->
      <div class="kpi-card card-blue" (click)="setTab('services')">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge blue"><i class="fa-solid fa-gears"></i></div>
          <span class="kpi-pill blue"><i class="fa-solid fa-circle-check"></i> \u062E\u062F\u0645\u0627\u062A \u0646\u0634\u0637\u0629</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value blue">{{ overviewStats.services }} <span class="kpi-currency">\u062E\u062F\u0645\u0629</span></div>
          <div class="kpi-title">\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0648\u0643\u0627\u0644\u0629</div>
          <div class="kpi-subtitle">\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0644\u0628\u0627\u0642\u0627\u062A \u0628\u0627\u0644\u0645\u0648\u0642\u0639</div>
        </div>
      </div>

      <!-- 3. Testimonials -->
      <div class="kpi-card card-amber" (click)="setTab('testimonials')">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge amber"><i class="fa-solid fa-star"></i></div>
          <span class="kpi-pill amber"><i class="fa-solid fa-thumbs-up"></i> \u0622\u0631\u0627\u0621 \u0645\u0639\u062A\u0645\u062F\u0629</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value amber">{{ overviewStats.testimonials }} <span class="kpi-currency">\u0631\u0623\u064A</span></div>
          <div class="kpi-title">\u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621</div>
          <div class="kpi-subtitle">\u062A\u0648\u0635\u064A\u0627\u062A \u0648\u0622\u0631\u0627\u0621 \u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0648\u0643\u0627\u0644\u0629</div>
        </div>
      </div>

      <!-- 4. Messages / Inquiries -->
      <div class="kpi-card card-rose" (click)="setTab('contact-hub')">
        <div class="kpi-card-head">
          <div class="kpi-icon-badge rose"><i class="fa-solid fa-envelope"></i></div>
          <span class="kpi-pill rose"><i class="fa-solid fa-bell"></i> \u0631\u0633\u0627\u0626\u0644 \u062C\u062F\u064A\u062F\u0629</span>
        </div>
        <div class="kpi-card-body">
          <div class="kpi-value rose">{{ overviewStats.inquiries }} <span class="kpi-currency">\u0631\u0633\u0627\u0644\u0629</span></div>
          <div class="kpi-title">\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639</div>
          <div class="kpi-subtitle">\u0631\u0633\u0627\u0626\u0644 \u0646\u0645\u0648\u0630\u062C \u0627\u062A\u0635\u0644 \u0628\u0646\u0627 \u0627\u0644\u0648\u0627\u0631\u062F\u0629</div>
        </div>
      </div>
    </div>

    <!-- Activity Grid -->
    <div class="dash-grid">

      <!-- Projects by Category Chart -->
      <div class="dash-panel">
        <div class="dash-panel-head">
          <div class="dash-panel-title"><i class="fa-solid fa-chart-pie"></i> \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u062D\u0633\u0628 \u0627\u0644\u062A\u0635\u0646\u064A\u0641</div>
          <button class="dash-panel-link" (click)="setTab('projects')">\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 <i class="fa-solid fa-angle-left"></i></button>
        </div>
        <div class="dash-panel-body">
          <ng-container *ngIf="projectsChartData.length > 0; else emptyChartV2">
            <div class="dash-bar-item" *ngFor="let item of projectsChartData; let i = index">
              <div class="dash-bar-info">
                <span class="dash-bar-name">{{ item.name }}</span>
                <span class="dash-bar-count">{{ item.count }}</span>
              </div>
              <div class="dash-bar-track">
                <div class="dash-bar-fill"
                  [style.width.%]="overviewStats.projects > 0 ? (item.count / overviewStats.projects * 100) : 0"
                  [class]="['fill-p','fill-b','fill-a','fill-g','fill-r'][i%5]">
                </div>
              </div>
              <span class="dash-bar-pct">{{ (overviewStats.projects > 0 ? (item.count / overviewStats.projects * 100) : 0) | number:'1.0-0' }}%</span>
            </div>
          </ng-container>
          <ng-template #emptyChartV2>
            <div class="dash-empty"><i class="fa-solid fa-chart-pie"></i><span>\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0639\u062F</span></div>
          </ng-template>
        </div>
      </div>

      <!-- Recent Projects -->
      <div class="dash-panel">
        <div class="dash-panel-head">
          <div class="dash-panel-title"><i class="fa-solid fa-rocket"></i> \u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639</div>
          <button class="dash-panel-link" (click)="setTab('projects')">\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 <i class="fa-solid fa-angle-left"></i></button>
        </div>
        <div class="dash-panel-body">
          <ng-container *ngIf="recentProjects.length > 0; else emptyProjectsV2">
            <div class="dash-row" *ngFor="let p of recentProjects; let i = index">
              <div class="dash-row-thumb">
                <img *ngIf="p.main_image_url || p.image" [src]="p.main_image_url || p.image">
                <div *ngIf="!(p.main_image_url || p.image)" class="dash-row-thumb-placeholder" [class]="['av-p','av-b','av-a','av-g','av-r'][i%5]">
                  {{ (p.title_ar || p.title_en || p.title || '\u061F')[0] }}
                </div>
              </div>
              <div class="dash-row-info">
                <div class="dash-row-name">{{ p.title_ar || p.title_en || p.title }}</div>
                <div class="dash-row-meta">{{ p.category?.name_ar || p.category?.name_en || '\u0639\u0627\u0645' }}</div>
              </div>
              <div class="dash-row-end">
                <span class="dash-client-tag">{{ getClientName(p) }}</span>
              </div>
            </div>
          </ng-container>
          <ng-template #emptyProjectsV2>
            <div class="dash-empty"><i class="fa-solid fa-folder-open"></i><span>\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0628\u0639\u062F</span></div>
          </ng-template>
        </div>
      </div>
    </div>

    <!-- Quick Access -->
    <div class="dash-shortcuts">
      <button class="dash-shortcut" (click)="setTab('projects')"><i class="fa-solid fa-folder-open"></i><span>\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639</span></button>
      <button class="dash-shortcut" (click)="setTab('services')"><i class="fa-solid fa-gears"></i><span>\u0627\u0644\u062E\u062F\u0645\u0627\u062A</span></button>
      <button class="dash-shortcut" (click)="setTab('testimonials')"><i class="fa-solid fa-star"></i><span>\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A</span></button>
      <button class="dash-shortcut" (click)="setTab('contact-hub')"><i class="fa-solid fa-inbox"></i><span>\u0627\u0644\u0631\u0633\u0627\u0626\u0644</span></button>
      <button class="dash-shortcut" (click)="setTab('blogs')"><i class="fa-solid fa-newspaper"></i><span>\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A</span></button>
      <button class="dash-shortcut" (click)="setTab('faqs')"><i class="fa-solid fa-circle-question"></i><span>\u0627\u0644\u0623\u0633\u0626\u0644\u0629</span></button>
    </div>

  </div>
</div>



    <!-- SERVICES TAB -->
    <div class="view" [class.active]="activeTab === 'services'">
      <div class="card" *ngIf="showServiceForm" style="margin-bottom: 24px;">
        <div class="card-header">
          <div class="card-title">{{ isEditingService ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629' : '\u0625\u0636\u0627\u0641\u0629 \u062E\u062F\u0645\u0629 \u062C\u062F\u064A\u062F\u0629' }}</div>
          <button class="action-btn" (click)="cancelEditService()"><i class="fa-solid fa-xmark"></i> \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="serviceForm" (ngSubmit)="saveService()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062E\u062F\u0645\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <input class="s-input" formControlName="title_en" type="text" required placeholder="e.g. Web Development" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062E\u062F\u0645\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <input class="s-input" formControlName="title_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064A\u0628" dir="rtl" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u062A\u0635\u0646\u064A\u0641 / \u0627\u0644\u0634\u0627\u0631\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <input class="s-input" formControlName="subtitle_en" type="text" required placeholder="e.g. Technology" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u062A\u0635\u0646\u064A\u0641 / \u0627\u0644\u0634\u0627\u0631\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <input class="s-input" formControlName="subtitle_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u0627\u0644\u062A\u0642\u0646\u064A\u0629" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <textarea class="s-input" formControlName="description_en" rows="3" required></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <textarea class="s-input" formControlName="description_ar" rows="3" required dir="rtl"></textarea>
              </div>
              <div class="fgroup">
                <label class="s-label">\u0631\u0645\u0632 \u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0629 (FontAwesome Icon Class)</label>
                <input class="s-input" formControlName="icon" type="text" placeholder="\u0645\u062B\u0627\u0644: fa-solid fa-laptop-code" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0639\u0631\u0636</label>
                <input class="s-input" formControlName="order" type="number" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A - \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)</label>
                <input class="s-input" formControlName="features_en" type="text" placeholder="e.g. Fast Loading, Custom CMS, Responsive Design" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A - \u0628\u0627\u0644\u0639\u0631\u0628\u064A (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)</label>
                <input class="s-input" formControlName="features_ar" type="text" placeholder="\u0645\u062B\u0644\u0627\u064B: \u062A\u062D\u0645\u064A\u0644 \u0633\u0631\u064A\u0639\u060C \u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u0645\u062E\u0635\u0635\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u0645\u062A\u062C\u0627\u0648\u0628" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A - \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A (\u0635\u064A\u063A\u0629: Label:SubText:OptionalBadge \u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)</label>
                <input class="s-input" formControlName="stats_str_en" type="text" placeholder="e.g. 100%:Customized:New, 24/7:Support:N/A" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A - \u0628\u0627\u0644\u0639\u0631\u0628\u064A (\u0635\u064A\u063A\u0629: Label:SubText:OptionalBadge \u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)</label>
                <input class="s-input" formControlName="stats_str_ar" type="text" placeholder="\u0645\u062B\u0644\u0627\u064B: %100:\u0645\u062E\u0635\u0635:\u062C\u062F\u064A\u062F\u060C 24/7:\u062F\u0639\u0645 \u0645\u062A\u0648\u0627\u0635\u0644" dir="rtl" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0646\u0635 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 CTA (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <input class="s-input" formControlName="cta_text_en" type="text" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0646\u0635 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 CTA (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <input class="s-input" formControlName="cta_text_ar" type="text" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0631\u0627\u0628\u0637 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 CTA</label>
                <input class="s-input" formControlName="cta_url" type="text" placeholder="/contact" />
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingService || serviceForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingService ? '\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062E\u062F\u0645\u0629' : '\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062E\u062F\u0645\u0629' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0643\u0644\u064A</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showServiceForm = !showServiceForm">
              <i class="fa-solid" [class.fa-plus]="!showServiceForm" [class.fa-xmark]="showServiceForm"></i> 
              {{ showServiceForm ? '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C' : '\u0625\u0636\u0627\u0641\u0629 \u062E\u062F\u0645\u0629' }}
            </button>
            <button class="action-btn font-small" (click)="loadServices()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 80px;">\u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0629</th>
                <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062E\u062F\u0645\u0629</th>
                <th>\u0627\u0644\u062A\u0635\u0646\u064A\u0641</th>
                <th style="width: 80px;">\u0627\u0644\u062A\u0631\u062A\u064A\u0628</th>
                <th style="width: 140px;">\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let s of servicesList">
                <td style="text-align: center; font-size: 1.2rem; padding: 15px;"><i [class]="s.iconClass || s.icon"></i></td>
                <td><strong>{{ s.title_ar || s.title_en || s.title?.ar || s.title?.en }}</strong></td>
                <td><span class="badge badge-blue">{{ s.subtitle_ar || s.subtitle_en || s.category?.ar || s.category?.en }}</span></td>
                <td>{{ s.order }}</td>
                <td>
                  <div class="table-actions">
                    <button class="action-icon-btn btn-amber" (click)="editService(s)" data-tooltip="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629" title="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon-btn btn-rose" (click)="deleteService(s.id)" data-tooltip="\u062D\u0630\u0641 \u0627\u0644\u062E\u062F\u0645\u0629" title="\u062D\u0630\u0641 \u0627\u0644\u062E\u062F\u0645\u0629"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="servicesList.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u062E\u062F\u0645\u0627\u062A.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- PROJECTS TAB -->
    <div class="view" [class.active]="activeTab === 'projects'">
      <div class="card" *ngIf="showProjectForm" style="margin-bottom: 24px;">
        <div class="card-header">
          <div class="card-title">{{ isEditingProject ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062D\u0627\u0644\u0629' : '\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F' }}</div>
          <button class="action-btn" (click)="cancelEditProject()"><i class="fa-solid fa-xmark"></i> \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="projectForm" (ngSubmit)="saveProject()">
            
            <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">1. \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629</h3>
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <input class="s-input" formControlName="title_en" type="text" required placeholder="e.g. Media Glow E-Commerce Platform" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <input class="s-input" formControlName="title_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u0645\u062A\u062C\u0631 \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" dir="rtl" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u062A\u0635\u0646\u064A\u0641</label>
                <select class="s-input" formControlName="category_id" required>
                  <option value="">\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641...</option>
                  <option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name_ar || cat.name_en || cat.name?.ar || cat.name }}</option>
                </select>
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u0646\u0635 \u0627\u0644\u0628\u062F\u064A\u0644 \u0644\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 (SEO)</label>
                <input class="s-input" formControlName="main_image_alt" type="text" placeholder="\u0646\u0635 SEO \u0627\u0644\u0628\u062F\u064A\u0644" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0648\u0635\u0641 / \u0646\u0628\u0630\u0629 \u0645\u062E\u062A\u0635\u0631\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <textarea class="s-input" formControlName="description_en" rows="3" required></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0648\u0635\u0641 / \u0646\u0628\u0630\u0629 \u0645\u062E\u062A\u0635\u0631\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <textarea class="s-input" formControlName="description_ar" rows="3" required dir="rtl"></textarea>
              </div>
            </div>

            <h3 style="margin-top: 25px; margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">2. \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0636</h3>
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0645\u064A\u0632 \u0644\u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062D\u0627\u0644\u0629</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <input type="color" formControlName="color" style="width: 45px; height: 45px; border: none; border-radius: 8px; cursor: pointer; background: transparent;" />
                  <input class="s-input" formControlName="color" type="text" placeholder="#000000" style="flex: 1;" />
                </div>
              </div>
              <div class="fgroup">
                <label class="s-label">\u0631\u0645\u0632 \u0623\u064A\u0642\u0648\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639</label>
                <input class="s-input" formControlName="emoji" type="text" placeholder="\u0645\u062B\u0627\u0644: fa-solid fa-rocket" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639</label>
                <input class="s-input" type="file" accept="image/*" (change)="onProjectImageSelected($event)" style="padding-top: 10px;" />
                <div *ngIf="projectImagePreview" style="margin-top: 10px;">
                  <img [src]="projectImagePreview" style="max-height: 120px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                </div>
              </div>
            </div>

            <h3 style="margin-top: 25px; margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">3. \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0645\u064A\u0644 \u0648\u0627\u0644\u0645\u062F\u062F</h3>
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644</label>
                <input class="s-input" formControlName="client" type="text" placeholder="\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0623\u0648\u0631\u0627 \u0644\u0644\u062A\u062C\u0645\u064A\u0644" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u0645\u062F\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629 \u0644\u0644\u062A\u0646\u0641\u064A\u0630</label>
                <input class="s-input" formControlName="timeline" type="text" placeholder="\u0645\u062B\u0627\u0644: 3 \u0623\u0634\u0647\u0631" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0648\u0633\u0648\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)</label>
                <input class="s-input" formControlName="tags" type="text" placeholder="\u0645\u062B\u0627\u0644: \u0645\u062A\u062C\u0631 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u060C \u0623\u0646\u062C\u0648\u0644\u0627\u0631\u060C \u0644\u0627\u0631\u0627\u0641\u064A\u0644" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0648\u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)</label>
                <input class="s-input" formControlName="deliverables" type="text" placeholder="\u0645\u062B\u0627\u0644: \u062A\u0635\u0645\u064A\u0645 UI/UX\u060C \u0628\u0648\u0627\u0628\u0627\u062A \u0627\u0644\u062F\u0641\u0639\u060C \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0633\u064A\u0648" />
              </div>
            </div>

            <h3 style="margin-top: 25px; margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">4. \u0627\u0644\u062A\u062D\u062F\u064A \u0648\u0627\u0644\u062D\u0644</h3>
            <div class="form-grid-custom">
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u062A\u062D\u062F\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <textarea class="s-input" formControlName="challenge_en" rows="3"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u062A\u062D\u062F\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <textarea class="s-input" formControlName="challenge_ar" rows="3" dir="rtl"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u0642\u062F\u0645 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <textarea class="s-input" formControlName="solution_en" rows="3"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u0642\u062F\u0645 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <textarea class="s-input" formControlName="solution_ar" rows="3" dir="rtl"></textarea>
              </div>
            </div>

            <h3 style="margin-top: 25px; margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">5. \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644</h3>
            <div class="form-grid-custom">
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0648\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A (\u0635\u064A\u063A\u0629: Value:Label \u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)</label>
                <input class="s-input" formControlName="results_str" type="text" placeholder="\u0645\u062B\u0627\u0644: 150%:\u0646\u0645\u0648 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A\u060C %99.9:\u0633\u0631\u0639\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0646\u0635 \u0631\u0623\u064A \u0648\u062A\u0648\u0635\u064A\u0629 \u0627\u0644\u0639\u0645\u064A\u0644</label>
                <textarea class="s-input" formControlName="testimonial_text" rows="2" placeholder="\u0627\u0643\u062A\u0628 \u0627\u0642\u062A\u0628\u0627\u0633 \u0627\u0644\u0639\u0645\u064A\u0644..."></textarea>
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0633\u0645 \u0635\u0627\u062D\u0628 \u0627\u0644\u0631\u0623\u064A</label>
                <input class="s-input" formControlName="testimonial_name" type="text" placeholder="\u0645\u062B\u0627\u0644: \u0641\u0647\u062F \u0627\u0644\u0645\u0646\u0635\u0648\u0631\u064A" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A \u0648\u0627\u0644\u0634\u0631\u0643\u0629</label>
                <input class="s-input" formControlName="testimonial_role" type="text" placeholder="\u0645\u062B\u0627\u0644: \u0627\u0644\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0631\u0627\u0628\u0637 \u0635\u0648\u0631\u0629 \u0635\u0627\u062D\u0628 \u0627\u0644\u0631\u0623\u064A</label>
                <input class="s-input" formControlName="testimonial_avatar" type="text" placeholder="HTTPS image URL" />
              </div>
            </div>

            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingProject || projectForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingProject ? '\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062D\u0627\u0644\u0629' : '\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">\u062C\u0645\u064A\u0639 \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showProjectForm = !showProjectForm">
              <i class="fa-solid" [class.fa-plus]="!showProjectForm" [class.fa-xmark]="showProjectForm"></i> 
              {{ showProjectForm ? '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C' : '\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639' }}
            </button>
            <button class="action-btn font-small" (click)="loadProjects()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 70px; text-align: center;">\u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0629</th>
                <th style="width: 90px;">\u0627\u0644\u0635\u0648\u0631\u0629</th>
                <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639</th>
                <th>\u0627\u0644\u062A\u0635\u0646\u064A\u0641</th>
                <th>\u0627\u0644\u0639\u0645\u064A\u0644</th>
                <th style="width: 140px;">\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of projects">
                <td style="text-align: center; font-size: 1.4rem;"><i [class]="p.emoji || 'fa-solid fa-rocket'"></i></td>
                <td>
                  <img *ngIf="p.main_image_url || p.image" [src]="p.main_image_url || p.image" style="width: 50px; height: 50px; border-radius: 6px; object-fit: cover;">
                </td>
                <td><strong>{{ p.title_ar || p.title_en || p.title?.ar || p.title?.en || p.title }}</strong></td>
                <td><span class="badge badge-blue">{{ p.category?.name_ar || p.category?.name_en || p.category?.name?.ar || '\u0639\u0627\u0645' }}</span></td>
                <td>{{ getClientName(p) }}</td>
                <td>
                  <div class="table-actions">
                    <button class="action-icon-btn btn-amber" (click)="editProject(p)" data-tooltip="\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639" title="\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon-btn btn-rose" (click)="deleteProject(p.id)" data-tooltip="\u062D\u0630\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" title="\u062D\u0630\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="projects.length === 0">
                <td colspan="6" style="text-align: center; padding: 25px;">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0634\u0627\u0631\u064A\u0639.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- CATEGORIES TAB -->
    <div class="view" [class.active]="activeTab === 'categories'">
      <div class="card" *ngIf="showCategoryForm" style="margin-bottom: 24px;">
        <div class="card-header">
          <div class="card-title">{{ isEditingCategory ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641' : '\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F' }}</div>
          <button class="action-btn" (click)="cancelEditCategory()"><i class="fa-solid fa-xmark"></i> \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="categoryForm" (ngSubmit)="saveCategory()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <input class="s-input" formControlName="name_en" type="text" required placeholder="e.g. Mobile Apps" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <input class="s-input" formControlName="name_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u062C\u0648\u0627\u0644" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <textarea class="s-input" formControlName="description_en" rows="2"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <textarea class="s-input" formControlName="description_ar" rows="2" dir="rtl"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0635\u063A\u0631\u0629 \u0644\u0644\u062A\u0635\u0646\u064A\u0641</label>
                <input class="s-input" type="file" accept="image/*" (change)="onCategoryImageSelected($event)" style="padding-top: 10px;" />
                <div *ngIf="categoryImagePreview" style="margin-top: 10px;">
                  <img [src]="categoryImagePreview" style="max-height: 100px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                </div>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingCategory || categoryForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingCategory ? '\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0635\u0646\u064A\u0641' : '\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062A\u0635\u0646\u064A\u0641' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">\u062C\u0645\u064A\u0639 \u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showCategoryForm = !showCategoryForm">
              <i class="fa-solid" [class.fa-plus]="!showCategoryForm" [class.fa-xmark]="showCategoryForm"></i> 
              {{ showCategoryForm ? '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C' : '\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641' }}
            </button>
            <button class="action-btn font-small" (click)="loadCategories()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 90px;">\u0627\u0644\u0635\u0648\u0631\u0629</th>
                <th>\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 (\u0639\u0631\u0628\u064A)</th>
                <th>\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 (\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</th>
                <th>\u0627\u0644\u0648\u0635\u0641</th>
                <th style="width: 140px;">\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let cat of categories">
                <td>
                  <img *ngIf="cat.image_url || cat.image" [src]="cat.image_url || cat.image" style="width: 45px; height: 45px; border-radius: 6px; object-fit: cover;">
                </td>
                <td><strong>{{ cat.name_ar || cat.name?.ar }}</strong></td>
                <td>{{ cat.name_en || cat.name?.en || cat.name }}</td>
                <td style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">{{ cat.description_ar || cat.description_en || cat.description?.ar || '\u2014' }}</td>
                <td>
                  <div class="table-actions">
                    <button class="action-icon-btn btn-amber" (click)="editCategory(cat)" data-tooltip="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641" title="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon-btn btn-rose" (click)="deleteCategory(cat.id)" data-tooltip="\u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641" title="\u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="categories.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u062A\u0635\u0646\u064A\u0641\u0627\u062A.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- BLOG ARTICLES TAB -->
    <div class="view" [class.active]="activeTab === 'blogs'">
      <div class="card" *ngIf="showBlogForm" style="margin-bottom: 24px;">
        <div class="card-header">
          <div class="card-title">{{ isEditingBlog ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644' : '\u0643\u062A\u0627\u0628\u0629 \u0645\u0642\u0627\u0644 \u062C\u062F\u064A\u062F' }}</div>
          <button class="action-btn" (click)="cancelEditBlog()"><i class="fa-solid fa-xmark"></i> \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="blogForm" (ngSubmit)="saveBlog()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <input class="s-input" formControlName="title_en" type="text" required placeholder="e.g. Modern UI Design Trends" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <input class="s-input" formControlName="title_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u0627\u062A\u062C\u0627\u0647\u0627\u062A \u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062D\u062F\u064A\u062B\u0629" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <textarea class="s-input" formControlName="description_en" rows="5" required placeholder="Write article content here..."></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <textarea class="s-input" formControlName="description_ar" rows="5" required placeholder="\u0627\u0643\u062A\u0628 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644 \u0647\u0646\u0627..." dir="rtl"></textarea>
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u0646\u0635 \u0627\u0644\u0628\u062F\u064A\u0644 \u0644\u0644\u0635\u0648\u0631\u0629 (SEO)</label>
                <input class="s-input" formControlName="img_alt" type="text" placeholder="\u0645\u062B\u0627\u0644: \u0627\u062A\u062C\u0627\u0647\u0627\u062A \u0627\u0644\u062A\u0635\u0645\u064A\u0645" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0645\u0644\u0641 \u0627\u0644\u0648\u0633\u0627\u0626\u0637 (\u0635\u0648\u0631\u0629 \u0623\u0648 \u0641\u064A\u062F\u064A\u0648)</label>
                <input class="s-input" type="file" accept="image/*,video/*" (change)="onBlogImageSelected($event)" style="padding-top: 10px;" />
                <div *ngIf="blogImagePreview" style="margin-top: 10px;">
                  <img [src]="blogImagePreview" style="max-height: 100px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />
                </div>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingBlog || blogForm.invalid">
                <i class="fa-solid fa-paper-plane"></i> {{ isEditingBlog ? '\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0642\u0627\u0644' : '\u0646\u0634\u0631 \u0627\u0644\u0645\u0642\u0627\u0644' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showBlogForm = !showBlogForm">
              <i class="fa-solid" [class.fa-plus]="!showBlogForm" [class.fa-xmark]="showBlogForm"></i> 
              {{ showBlogForm ? '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C' : '\u0643\u062A\u0627\u0628\u0629 \u0645\u0642\u0627\u0644' }}
            </button>
            <button class="action-btn font-small" (click)="loadBlogs()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 90px;">\u0627\u0644\u063A\u0644\u0627\u0641</th>
                <th>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0639\u0631\u0628\u064A)</th>
                <th>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</th>
                <th style="width: 90px; text-align: center;">\u0627\u0644\u0625\u0639\u062C\u0627\u0628\u0627\u062A</th>
                <th style="width: 140px;">\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let b of blogs">
                <td>
                  <img *ngIf="b.media_url || b.image" [src]="b.media_url || b.image" style="width: 50px; height: 50px; border-radius: 6px; object-fit: cover;">
                </td>
                <td><strong>{{ b.title_ar || b.title?.ar }}</strong></td>
                <td>{{ b.title_en || b.title?.en || b.title }}</td>
                <td style="text-align: center;">
                  <span class="badge badge-blue">{{ b.likes || 0 }} <i class="fa-solid fa-heart" style="color: red; margin-left: 2px;"></i></span>
                </td>
                <td>
                  <div class="table-actions">
                    <button class="action-icon-btn btn-amber" (click)="editBlog(b)" data-tooltip="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644" title="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon-btn btn-rose" (click)="deleteBlog(b.id)" data-tooltip="\u062D\u0630\u0641 \u0627\u0644\u0645\u0642\u0627\u0644" title="\u062D\u0630\u0641 \u0627\u0644\u0645\u0642\u0627\u0644"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="blogs.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0642\u0627\u0644\u0627\u062A.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TESTIMONIALS TAB -->
    <div class="view" [class.active]="activeTab === 'testimonials'">
      <div class="card" *ngIf="showTestimonialForm" style="margin-bottom: 24px;">
        <div class="card-header">
          <div class="card-title">{{ isEditingTestimonial ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645' : '\u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F' }}</div>
          <button class="action-btn" (click)="cancelEditTestimonial()"><i class="fa-solid fa-xmark"></i> \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="testimonialForm" (ngSubmit)="saveTestimonial()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644</label>
                <input class="s-input" formControlName="client_name" type="text" required placeholder="\u0645\u062B\u0627\u0644: \u0641\u0647\u062F \u0627\u0644\u0645\u0646\u0635\u0648\u0631\u064A" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A / \u0627\u0644\u062F\u0648\u0631</label>
                <input class="s-input" formControlName="job_title" type="text" required placeholder="\u0645\u062B\u0627\u0644: \u0627\u0644\u0645\u0624\u0633\u0633 \u0648\u0627\u0644\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)</label>
                <input class="s-input" formControlName="company_name" type="text" placeholder="\u0645\u062B\u0627\u0644: \u062A\u0643 \u0646\u0648\u0641\u0627" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u062A\u0642\u064A\u064A\u0645 (\u0645\u0646 1 \u0625\u0644\u0649 5 \u0646\u062C\u0648\u0645)</label>
                <select class="s-input" formControlName="rating" required>
                  <option value="5">\u2605\u2605\u2605\u2605\u2605 (5 \u0646\u062C\u0648\u0645)</option>
                  <option value="4">\u2605\u2605\u2605\u2605 (4 \u0646\u062C\u0648\u0645)</option>
                  <option value="3">\u2605\u2605\u2605 (3 \u0646\u062C\u0648\u0645)</option>
                  <option value="2">\u2605\u2605 (2 \u0646\u062C\u0648\u0645)</option>
                  <option value="1">\u2605 (\u0646\u062C\u0645\u0629 \u0648\u0627\u062D\u062F\u0629)</option>
                </select>
              </div>
              <div class="fgroup">
                <label class="s-label">\u0644\u0648\u0646 \u062F\u0627\u0626\u0631\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0631\u0645\u0632\u064A\u0629</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <input type="color" formControlName="avatar_color" style="width: 45px; height: 45px; border: none; border-radius: 8px; cursor: pointer; background: transparent;" />
                  <input class="s-input" formControlName="avatar_color" type="text" placeholder="#e8620a" style="flex: 1;" />
                </div>
              </div>
              <div></div> <!-- Spacer -->
              
              <div class="fgroup full-width">
                <label class="s-label">\u0646\u0635 \u0627\u0644\u0631\u0623\u064A \u0648\u0627\u0644\u062A\u0648\u0635\u064A\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <textarea class="s-input" formControlName="feedback_en" rows="3" required placeholder="Client feedback in English..."></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0646\u0635 \u0627\u0644\u0631\u0623\u064A \u0648\u0627\u0644\u062A\u0648\u0635\u064A\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <textarea class="s-input" formControlName="feedback_ar" rows="3" required placeholder="\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629..." dir="rtl"></textarea>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingTestimonial || testimonialForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingTestimonial ? '\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0631\u0623\u064A' : '\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0631\u0623\u064A' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">\u062C\u0645\u064A\u0639 \u0622\u0631\u0627\u0621 \u0648\u062A\u0648\u0635\u064A\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showTestimonialForm = !showTestimonialForm">
              <i class="fa-solid" [class.fa-plus]="!showTestimonialForm" [class.fa-xmark]="showTestimonialForm"></i> 
              {{ showTestimonialForm ? '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C' : '\u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A' }}
            </button>
            <button class="action-btn font-small" (click)="loadTestimonials()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 70px;">\u0627\u0644\u0635\u0648\u0631\u0629</th>
                <th>\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644</th>
                <th>\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A / \u0627\u0644\u0634\u0631\u0643\u0629</th>
                <th>\u0627\u0644\u0631\u0623\u064A</th>
                <th style="width: 90px; text-align: center;">\u0627\u0644\u062A\u0642\u064A\u064A\u0645</th>
                <th style="width: 140px;">\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let t of testimonials">
                <td>
                  <div [style.background]="t.avatar_color || '#e8620a'" style="width: 38px; height: 38px; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.95rem;">
                    {{ t.client_name?.charAt(0) }}
                  </div>
                </td>
                <td><strong>{{ t.client_name }}</strong></td>
                <td>{{ t.job_title }} {{ t.company_name ? '@ ' + t.company_name : '' }}</td>
                <td style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">{{ t.feedback_ar || t.feedback_en }}</td>
                <td style="text-align: center; color: gold; font-size: 0.85rem;">{{ '\u2605'.repeat(t.rating || 5) }}</td>
                <td>
                  <div class="table-actions">
                    <button class="action-icon-btn btn-amber" (click)="editTestimonial(t)" data-tooltip="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0623\u064A" title="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0623\u064A"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon-btn btn-rose" (click)="deleteTestimonial(t.id)" data-tooltip="\u062D\u0630\u0641 \u0627\u0644\u0631\u0623\u064A" title="\u062D\u0630\u0641 \u0627\u0644\u0631\u0623\u064A"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="testimonials.length === 0">
                <td colspan="6" style="text-align: center; padding: 20px;">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0622\u0631\u0627\u0621 \u0644\u0644\u0639\u0645\u0644\u0627\u0621.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- FAQS TAB -->
    <div class="view" [class.active]="activeTab === 'faqs'">
      <div class="card" *ngIf="showFaqForm" style="margin-bottom: 24px;">
        <div class="card-header">
          <div class="card-title">{{ isEditingFaq ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u0634\u0627\u0626\u0639' : '\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644 \u0634\u0627\u0626\u0639 \u062C\u062F\u064A\u062F' }}</div>
          <button class="action-btn" (click)="cancelEditFaq()"><i class="fa-solid fa-xmark"></i> \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="faqForm" (ngSubmit)="saveFaq()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u0633\u0624\u0627\u0644 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <input class="s-input" formControlName="question_en" type="text" required placeholder="e.g. How long does a project take?" />
              </div>
              <div class="fgroup">
                <label class="s-label">\u0627\u0644\u0633\u0624\u0627\u0644 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <input class="s-input" formControlName="question_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u0643\u0645 \u064A\u0633\u062A\u063A\u0631\u0642 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u064A\u061F" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0625\u062C\u0627\u0628\u0629 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
                <textarea class="s-input" formControlName="answer_en" rows="3" required placeholder="Detailed answer..."></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">\u0627\u0644\u0625\u062C\u0627\u0628\u0629 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label>
                <textarea class="s-input" formControlName="answer_ar" rows="3" required placeholder="\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A\u0629..." dir="rtl"></textarea>
              </div>
              <div class="fgroup">
                <label class="s-label">\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0639\u0631\u0636</label>
                <input class="s-input" formControlName="sort_order" type="number" />
              </div>
              <div class="fgroup" style="justify-content: center;">
                <label class="s-label" style="display: flex; align-items: center; gap: 10px; cursor: pointer; padding-top: 25px;">
                  <input type="checkbox" formControlName="is_active" style="width: 20px; height: 20px; accent-color: #e8620a;" />
                  <span>\u0646\u0634\u0637 (\u0638\u0627\u0647\u0631 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0639\u0627\u0645)</span>
                </label>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingFaq || faqForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingFaq ? '\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0633\u0624\u0627\u0644' : '\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0633\u0624\u0627\u0644' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showFaqForm = !showFaqForm">
              <i class="fa-solid" [class.fa-plus]="!showFaqForm" [class.fa-xmark]="showFaqForm"></i> 
              {{ showFaqForm ? '\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0645\u0648\u0630\u062C' : '\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644' }}
            </button>
            <button class="action-btn font-small" (click)="loadFaqs()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th>\u0627\u0644\u0633\u0624\u0627\u0644 (\u0639\u0631\u0628\u064A)</th>
                <th>\u0627\u0644\u0633\u0624\u0627\u0644 (\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</th>
                <th style="width: 80px; text-align: center;">\u0627\u0644\u062A\u0631\u062A\u064A\u0628</th>
                <th style="width: 100px; text-align: center;">\u0627\u0644\u062D\u0627\u0644\u0629</th>
                <th style="width: 140px;">\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let faq of faqs">
                <td><strong>{{ faq.question_ar }}</strong></td>
                <td>{{ faq.question_en }}</td>
                <td style="text-align: center;">{{ faq.order }}</td>
                <td style="text-align: center;">
                  <span class="badge" [class.badge-orange]="faq.is_active" [class.badge-error]="!faq.is_active">
                    {{ faq.is_active ? '\u0646\u0634\u0637' : '\u063A\u064A\u0631 \u0646\u0634\u0637' }}
                  </span>
                </td>
                <td>
                  <div class="table-actions">
                    <button class="action-icon-btn btn-amber" (click)="editFaq(faq)" data-tooltip="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u0624\u0627\u0644" title="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u0624\u0627\u0644"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-icon-btn btn-rose" (click)="deleteFaq(faq.id)" data-tooltip="\u062D\u0630\u0641 \u0627\u0644\u0633\u0624\u0627\u0644" title="\u062D\u0630\u0641 \u0627\u0644\u0633\u0624\u0627\u0644"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="faqs.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- CONTACT HUB TAB -->
    <div class="view" [class.active]="activeTab === 'contact-hub'">
      <div class="card" style="margin-bottom: 24px;">
        <div class="card-header"><div class="card-title">\u062A\u0639\u062F\u064A\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0648\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</div></div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="contactForm" (ngSubmit)="saveContactInfo()">
            <div class="form-grid-custom">
              <div class="fgroup"><label class="s-label">\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628</label><input class="s-input" formControlName="whatsapp_phone" type="text" placeholder="\u0645\u062B\u0627\u0644: +966500000000" /></div>
              <div class="fgroup"><label class="s-label">\u0648\u0635\u0641 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628</label><input class="s-input" formControlName="whatsapp_desc" type="text" placeholder="\u0645\u062B\u0627\u0644: \u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A" /></div>
              <div class="fgroup"><label class="s-label">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0631\u0633\u0645\u064A</label><input class="s-input" formControlName="official_email" type="email" placeholder="\u0645\u062B\u0627\u0644: info@mediaglow.com" /></div>
              <div class="fgroup"><label class="s-label">\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</label><input class="s-input" formControlName="company_address" type="text" placeholder="\u0627\u0644\u0631\u064A\u0627\u0636\u060C \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629" /></div>
              <div class="fgroup full-width"><label class="s-label">\u0631\u0627\u0628\u0637 \u0645\u0648\u0642\u0639 \u0627\u0644\u0634\u0631\u0643\u0629 \u0639\u0644\u0649 \u062E\u0631\u0627\u0626\u0637 \u062C\u0648\u062C\u0644</label><input class="s-input" formControlName="google_maps_url" type="text" placeholder="https://maps.google.com/..." /></div>
              <div class="fgroup full-width"><label class="s-label">\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0647\u0627\u062A\u0641 \u0627\u0644\u0637\u0648\u0627\u0631\u0626 \u0648\u0627\u0644\u062F\u0639\u0645</label><input class="s-input" formControlName="emergency_support_info" type="text" placeholder="\u0627\u062A\u0635\u0644 \u0639\u0644\u0649 +9665XXXXXXX \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0637\u0627\u0631\u0626\u0629" /></div>
            </div>
            <div style="margin-top: 30px; display: flex; align-items: center;">
              <button type="submit" class="save-btn" [disabled]="loadingInfo"><i class="fa-solid fa-floppy-disk"></i> \u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A</button>
              <span *ngIf="infoMessage" style="margin-right: 15px; color: var(--orange); font-weight:600;"><i class="fa-solid fa-circle-check"></i> {{ infoMessage }}</span>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">\u0631\u0633\u0627\u0626\u0644 \u0648\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621 (Leads)</div>
          <button class="save-btn font-small" (click)="loadInquiries()"><i class="fa-solid fa-rotate"></i> \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0631\u0633\u0627\u0626\u0644</button>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th>\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644</th>
                <th>\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644</th>
                <th>\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629</th>
                <th>\u0627\u0644\u062A\u0627\u0631\u064A\u062E</th>
                <th style="width: 100px;">\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let inq of inquiries">
                <td>
                  <strong>{{ inq.full_name }}</strong><br>
                  <small style="color:rgba(255,255,255,0.5)">{{ inq.company_name || '\u0639\u0645\u064A\u0644 \u0641\u0631\u062F\u064A' }}</small>
                </td>
                <td>
                  <a href="mailto:{{ inq.email }}" style="color:var(--orange); text-decoration:none">{{ inq.email }}</a><br>
                  <span style="font-size:0.85rem; color:rgba(255,255,255,0.5)">{{ inq.phone }}</span>
                </td>
                <td>
                  <span class="badge badge-blue">{{ inq.service_needed || '\u0639\u0627\u0645' }}</span><br>
                  <small style="display:block; margin-top:5px; max-width:250px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis" [title]="inq.project_details">{{ inq.project_details }}</small>
                </td>
                <td>{{ inq.created_at | date:'short' }}</td>
                <td>
                  <div class="table-actions">
                    <button class="action-icon-btn btn-rose" (click)="deleteInquiry(inq.id)" data-tooltip="\u062D\u0630\u0641 \u0627\u0644\u0631\u0633\u0627\u0644\u0629" title="\u062D\u0630\u0641 \u0627\u0644\u0631\u0633\u0627\u0644\u0629"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="inquiries.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0637\u0644\u0628\u0627\u062A.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- HOME PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'home-page'">
      <div class="pg-head">
        <h2>\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0642\u0633\u0645 \u0627\u0644\u0647\u064A\u062F\u0631 \u0628\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</h2>
        <p>\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0646\u0635\u0648\u0635 \u0648\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0644\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0628\u0627\u0644\u0645\u0648\u0642\u0639.</p>
        <button class="save-btn" (click)="savePageData('home')" [disabled]="isSavingPage['home']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['home'] ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="card-header"><div class="card-title">\u0642\u0633\u0645 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (Hero Banner)</div></div>
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="pagesData['home'].hero.tag.en" class="s-input"></div>
            <div><label class="s-label">\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label><input type="text" [(ngModel)]="pagesData['home'].hero.tag.ar" class="s-input" dir="rtl"></div>
            <div><label class="s-label">\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="pagesData['home'].hero.title1.en" class="s-input"></div>
            <div><label class="s-label">\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label><input type="text" [(ngModel)]="pagesData['home'].hero.title1.ar" class="s-input" dir="rtl"></div>
            <div class="full-width"><label class="s-label">\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><textarea [(ngModel)]="pagesData['home'].hero.subtitle.en" rows="3" class="s-input"></textarea></div>
            <div class="full-width"><label class="s-label">\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label><textarea [(ngModel)]="pagesData['home'].hero.subtitle.ar" rows="3" class="s-input" dir="rtl"></textarea></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ABOUT PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'about-page'">
      <div class="pg-head">
        <h2>\u062A\u0641\u0627\u0635\u064A\u0644 \u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u062C\u062F\u0648\u0644 \u0627\u0644\u062A\u0627\u0631\u064A\u062E</h2>
        <p>\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0624\u064A\u0629\u060C \u0627\u0644\u0623\u0647\u062F\u0627\u0641\u060C \u0648\u0623\u062D\u062F\u0627\u062B \u0645\u0633\u064A\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0639\u0644\u0649 \u0645\u0631 \u0627\u0644\u0633\u0646\u0648\u0627\u062A.</p>
        <button class="save-btn" (click)="saveAboutData()" [disabled]="isSavingAbout" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingAbout ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px; margin-bottom:24px;">
        <div class="card-header"><div class="card-title">\u0646\u0635 \u0627\u0644\u0628\u0627\u0646\u0631 \u0644\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629</div></div>
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="aboutData.content.hero.en.label" class="s-input"></div>
            <div><label class="s-label">\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label><input type="text" [(ngModel)]="aboutData.content.hero.ar.label" class="s-input" dir="rtl"></div>
            <div><label class="s-label">\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="aboutData.content.hero.en.title1" class="s-input"></div>
            <div><label class="s-label">\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label><input type="text" [(ngModel)]="aboutData.content.hero.ar.title1" class="s-input" dir="rtl"></div>
            <div class="full-width"><label class="s-label">\u0646\u0628\u0630\u0629 \u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><textarea [(ngModel)]="aboutData.content.hero.en.desc" rows="3" class="s-input"></textarea></div>
            <div class="full-width"><label class="s-label">\u0646\u0628\u0630\u0629 \u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label><textarea [(ngModel)]="aboutData.content.hero.ar.desc" rows="3" class="s-input" dir="rtl"></textarea></div>
          </div>
        </div>
      </div>

      <div class="card" style="margin-bottom:24px;">
        <div class="card-header">
          <div class="card-title">\u062C\u062F\u0648\u0644 \u062A\u0627\u0631\u064A\u062E \u0648\u0645\u0633\u064A\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629</div>
          <button class="save-btn font-small" (click)="addTimeline()"><i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u062D\u062F\u062B \u062A\u0627\u0631\u064A\u062E\u064A</button>
        </div>
        <div class="cb" style="padding:24px;">
          <div *ngFor="let item of aboutData.timeline; let i = index" style="background:rgba(255,255,255,0.01); padding:20px; border-radius:12px; margin-bottom:16px; border:1px solid var(--admin-border); position:relative">
            <button (click)="removeTimeline(i)" style="position:absolute; top:15px; left:15px; background:#ef4444; color:white; border:none; border-radius:6px; padding:6px 12px; cursor:pointer; font-size:0.8rem;"><i class="fa-solid fa-trash-can"></i> \u062D\u0630\u0641</button>
            <div style="margin-bottom:16px">
              <label class="s-label">\u0627\u0644\u0633\u0646\u0629 / \u0627\u0644\u0639\u0627\u0645</label>
              <input type="text" [(ngModel)]="item.year" class="s-input" style="width:120px;">
            </div>
            <div class="form-grid-custom">
              <div><label class="s-label">\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="item.title.en" class="s-input"></div>
              <div><label class="s-label">\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label><input type="text" [(ngModel)]="item.title.ar" class="s-input" dir="rtl"></div>
              <div class="full-width"><label class="s-label">\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><textarea [(ngModel)]="item.description.en" rows="3" class="s-input"></textarea></div>
              <div class="full-width"><label class="s-label">\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0639\u0631\u0628\u064A)</label><textarea [(ngModel)]="item.description.ar" rows="3" class="s-input" dir="rtl"></textarea></div>
            </div>
          </div>
          <div *ngIf="aboutData.timeline.length === 0" style="color:rgba(255,255,255,0.5)">\u0644\u0645 \u064A\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0623\u062D\u062F\u0627\u062B \u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0628\u0639\u062F.</div>
        </div>
      </div>
    </div>

    <!-- SERVICES PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'services-page'">
      <div class="pg-head">
        <h2>\u0647\u064A\u062F\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A</h2>
        <p>\u062A\u0639\u062F\u064A\u0644 \u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0646\u0635\u0648\u0635 \u0628\u0627\u0646\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0628\u0627\u0644\u0645\u0648\u0642\u0639.</p>
        <button class="save-btn" (click)="savePageData('services')" [disabled]="isSavingPage['services']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['services'] ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="pagesData['services'].hero.tag.en" class="s-input"></div>
            <div><label class="s-label">\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="pagesData['services'].hero.title.en" class="s-input"></div>
            <div class="full-width"><label class="s-label">\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><textarea [(ngModel)]="pagesData['services'].hero.desc.en" rows="3" class="s-input"></textarea></div>
          </div>
        </div>
      </div>
    </div>

    <!-- PORTFOLIO PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'portfolio-page'">
      <div class="pg-head">
        <h2>\u0647\u064A\u062F\u0631 \u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644</h2>
        <p>\u062A\u0639\u062F\u064A\u0644 \u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0646\u0635\u0648\u0635 \u0628\u0627\u0646\u0631 \u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644.</p>
        <button class="save-btn" (click)="savePageData('portfolio')" [disabled]="isSavingPage['portfolio']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['portfolio'] ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="pagesData['portfolio'].hero.tag.en" class="s-input"></div>
            <div><label class="s-label">\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="pagesData['portfolio'].hero.title.en" class="s-input"></div>
            <div class="full-width"><label class="s-label">\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><textarea [(ngModel)]="pagesData['portfolio'].hero.desc.en" rows="3" class="s-input"></textarea></div>
          </div>
        </div>
      </div>
    </div>

    <!-- BLOGS PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'blogs-page'">
      <div class="pg-head">
        <h2>\u0647\u064A\u062F\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A</h2>
        <p>\u062A\u0639\u062F\u064A\u0644 \u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0646\u0635\u0648\u0635 \u0628\u0627\u0646\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629 \u0628\u0627\u0644\u0645\u0648\u0642\u0639.</p>
        <button class="save-btn" (click)="savePageData('blogs')" [disabled]="isSavingPage['blogs']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['blogs'] ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="pagesData['blogs'].hero.tag.en" class="s-input"></div>
            <div><label class="s-label">\u0627\u0644\u0639\u0646\u0648\u0627\u0646 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><input type="text" [(ngModel)]="pagesData['blogs'].hero.title.en" class="s-input"></div>
            <div class="full-width"><label class="s-label">\u0627\u0644\u0648\u0635\u0641 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><textarea [(ngModel)]="pagesData['blogs'].hero.desc.en" rows="3" class="s-input"></textarea></div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER CONTENT SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'footer-section'">
      <div class="pg-head">
        <h2>\u0645\u062D\u062A\u0648\u0649 \u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (Footer)</h2>
        <p>\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0639\u0627\u0645\u060C \u0627\u0644\u0628\u0631\u064A\u062F\u060C \u0627\u0644\u0647\u0627\u062A\u0641\u060C \u0648\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0641\u064A \u0641\u0648\u062A\u0631 \u0627\u0644\u0645\u0648\u0642\u0639.</p>
        <button class="save-btn" (click)="savePageData('footer')" [disabled]="isSavingPage['footer']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['footer'] ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div class="full-width"><label class="s-label">\u0648\u0635\u0641 \u0627\u0644\u0634\u0631\u0643\u0629 \u0641\u064A \u0641\u0648\u062A\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label><textarea [(ngModel)]="pagesData['footer'].desc.en" rows="3" class="s-input"></textarea></div>
            <div><label class="s-label">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0631\u0633\u0645\u064A</label><input type="text" [(ngModel)]="pagesData['footer'].email" class="s-input"></div>
            <div><label class="s-label">\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u062A\u0648\u0627\u0635\u0644</label><input type="text" [(ngModel)]="pagesData['footer'].phone" class="s-input"></div>
            <div><label class="s-label">\u0631\u0627\u0628\u0637 LinkedIn</label><input type="text" [(ngModel)]="pagesData['footer'].socials.linkedin" class="s-input"></div>
            <div><label class="s-label">\u0631\u0627\u0628\u0637 Twitter / X</label><input type="text" [(ngModel)]="pagesData['footer'].socials.twitter" class="s-input"></div>
          </div>
        </div>
    </div>

`, styles: [`/* src/app/components/controller-dashboard/controller-dashboard.component.css */
:host {
  display: block;
  width: 100%;
  font-family:
    "Inter",
    "Cairo",
    sans-serif;
  --violet: #6366f1;
  --violet-2: #4f46e5;
  --violet-light:#a5b4fc;
  --violet-glow: rgba(99, 102, 241, 0.35);
  --violet-soft: rgba(99, 102, 241, 0.12);
  --teal: #06b6d4;
  --teal-2: #0891b2;
  --teal-light: #67e8f9;
  --teal-glow: rgba(6, 182, 212, 0.35);
  --teal-soft: rgba(6, 182, 212, 0.12);
  --amber: #f59e0b;
  --amber-light: #fde047;
  --amber-soft: rgba(245, 158, 11, 0.12);
  --rose: #f43f5e;
  --rose-light: #fda4af;
  --rose-soft: rgba(244, 63, 94, 0.12);
  --emerald: #10b981;
  --emerald-light: #6ee7b7;
  --emerald-soft: rgba(16, 185, 129, 0.12);
  --bg: #050510;
  --bg-2: #090918;
  --bg-3: #0e0e24;
  --card:
    linear-gradient(
      90deg,
      rgba(9, 9, 24, 0.85) 0%,
      rgba(9, 9, 24, 0.4) 60%,
      rgba(9, 9, 24, 0.7) 100%);
  --card-hover:
    linear-gradient(
      90deg,
      rgba(14, 14, 32, 0.9) 0%,
      rgba(14, 14, 32, 0.5) 60%,
      rgba(14, 14, 32, 0.8) 100%);
  --sidebar: #040409;
  --topbar:
    linear-gradient(
      90deg,
      rgba(9, 9, 24, 0.95) 0%,
      rgba(9, 9, 24, 0.65) 60%,
      rgba(9, 9, 24, 0.9) 100%);
  --border: rgba(255, 255, 255, 0.08);
  --border-2: rgba(255, 255, 255, 0.14);
  --border-v: rgba(99, 102, 241, 0.35);
  --border-t: rgba(6, 182, 212, 0.35);
  --text: #f3f4f6;
  --text-2: #9ca3af;
  --text-3: #6b7280;
  --sb-w: 260px;
  --tb-h: 64px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --r: 14px;
  --r-lg: 20px;
  --r-xl: 28px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.crm-shell {
  display: flex;
  min-height: 100vh;
  background: var(--bg);
  background-image:
    radial-gradient(
      ellipse 100% 60% at 0% 0%,
      rgba(99, 102, 241, 0.09) 0%,
      transparent 55%),
    radial-gradient(
      ellipse 70% 50% at 100% 100%,
      rgba(6, 182, 212, 0.07) 0%,
      transparent 50%);
  background-attachment: fixed;
  font-family:
    "Cairo",
    "Inter",
    sans-serif;
  color: var(--text);
  direction: rtl;
}
.sb {
  width: var(--sb-w);
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 300;
  background: var(--sidebar);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: transform 0.35s var(--ease);
  will-change: transform;
  box-shadow: 6px 0 45px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(25px);
}
.sb-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 290;
}
.sb-overlay.active {
  display: block;
}
.sb-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.sb-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 22px 20px;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  flex-shrink: 0;
  position: relative;
  background:
    linear-gradient(
      180deg,
      rgba(99, 102, 241, 0.06) 0%,
      transparent 100%);
}
.sb-logo-badge {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--teal));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #fff;
  box-shadow: 0 0 25px var(--violet-glow);
  flex-shrink: 0;
  transition: transform 0.3s var(--ease);
}
.sb-logo:hover .sb-logo-badge {
  transform: rotate(10deg) scale(1.05);
}
.sb-logo-text {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.4px;
  white-space: nowrap;
}
.sb-logo-text span {
  color: var(--teal-light);
}
.sb-logo-sub {
  font-size: 0.62rem;
  color: var(--text-2);
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  display: block;
  margin-top: 2px;
}
.sb-nav {
  flex: 1;
  overflow-y: auto;
  padding: 16px 12px;
}
.sb-section {
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  padding: 18px 10px 8px;
}
.sb-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
  width: 100%;
  color: var(--text-2);
  font-size: 0.86rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.25s var(--ease);
  margin-bottom: 3px;
  position: relative;
  text-align: left;
  background: transparent;
}
.sb-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--border);
  color: var(--text);
  transform: translateX(3px);
}
.sb-item.active {
  background: transparent;
  border-color: transparent;
  color: #fff;
  font-weight: 600;
  box-shadow: none;
}
.sb-item.active .sb-icon {
  color: var(--violet-light);
  background: rgba(99, 102, 241, 0.12);
  box-shadow: none;
}
.sb-item.active::after {
  content: "";
  position: absolute;
  left: -12px;
  top: 15%;
  bottom: 15%;
  width: 4px;
  background:
    linear-gradient(
      to bottom,
      var(--violet),
      var(--teal));
  border-radius: 0 4px 4px 0;
  box-shadow: 0 0 12px var(--violet);
}
.sb-item.danger {
  color: rgba(244, 63, 94, 0.8);
}
.sb-item.danger:hover {
  color: var(--rose-light);
  background: var(--rose-soft);
  border-color: rgba(244, 63, 94, 0.3);
}
.sb-icon {
  font-size: 0.88rem;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s var(--ease);
  color: var(--text-2);
}
.sb-item:hover .sb-icon {
  color: var(--teal-light);
  background: rgba(6, 182, 212, 0.1);
}
.sb-badge {
  margin-left: auto;
  background:
    linear-gradient(
      135deg,
      var(--rose),
      #e11d48);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 100px;
  flex-shrink: 0;
  box-shadow: 0 2px 10px rgba(244, 63, 94, 0.4);
}
.sb-foot {
  border-top: 1px solid var(--border);
  padding: 14px 12px;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.2);
}
.sb-user {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.25s var(--ease);
  text-decoration: none;
}
.sb-user:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--border-v);
}
.sb-av {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--teal));
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #fff;
  box-shadow: 0 0 15px var(--violet-glow);
}
.sb-uinfo {
  flex: 1;
  min-width: 0;
}
.sb-uname {
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sb-urole {
  font-size: 0.65rem;
  color: var(--text-2);
  margin-top: 1px;
}
.sb-ucaret {
  color: var(--text-3);
  font-size: 0.7rem;
}
.nav-dropdown {
  width: 100%;
}
.dropdown-menu-list {
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease-in-out;
  padding-left: 14px;
  border-left: 1px solid rgba(99, 102, 241, 0.2);
  margin-left: 24px;
  margin-top: 4px;
  margin-bottom: 6px;
}
.nav-dropdown.open .dropdown-menu-list {
  max-height: 600px;
}
.nav-sub-item {
  padding: 8px 12px !important;
  font-size: 0.8rem !important;
  border-radius: 10px !important;
  color: var(--text-2) !important;
}
.nav-sub-item:hover {
  color: var(--text) !important;
  background: rgba(255, 255, 255, 0.04) !important;
}
.nav-sub-item.active {
  color: var(--teal-light) !important;
  background: var(--teal-soft) !important;
  border-color: var(--border-t) !important;
}
.arrow-icon {
  margin-left: auto;
  font-size: 0.72rem;
  transition: transform 0.3s;
}
.main-container {
  margin-left: var(--sb-w);
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: transparent;
  color: var(--text);
  min-height: 100vh;
  transition: margin-left 0.35s var(--ease);
}
.tb {
  height: var(--tb-h);
  background: var(--topbar);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  gap: 20px;
  position: sticky;
  top: 0;
  z-index: 200;
  flex-shrink: 0;
}
.tb-l {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}
.tb-menu {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  color: var(--text-2);
  transition: all 0.2s;
  flex-shrink: 0;
}
.tb-menu:hover {
  border-color: var(--border-v);
  color: var(--violet-light);
  background: var(--violet-soft);
}
.tb-bc {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.84rem;
  color: var(--text-2);
}
.tb-bc .sep {
  color: var(--text-3);
  font-size: 0.9rem;
}
.tb-bc .cur {
  font-weight: 700;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tb-r {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.tb-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  color: var(--text-2);
  transition: all 0.2s;
}
.tb-btn:hover {
  border-color: var(--border-v);
  color: var(--violet-light);
  background: var(--violet-soft);
}
.tb-user {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 4px 14px 4px 4px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.2s;
}
.tb-user:hover {
  border-color: var(--border-v);
  background: var(--violet-soft);
}
.tb-av {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--teal));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  box-shadow: 0 0 10px var(--violet-glow);
}
.tb-uname {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
}
.tb-caret {
  font-size: 0.7rem;
  color: var(--text-2);
}
.dropdown {
  position: absolute;
  top: 70px;
  right: 32px;
  width: 260px;
  background: var(--bg-card);
  border: 1px solid var(--border-v);
  border-radius: var(--r-lg);
  padding: 12px;
  z-index: 250;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(20px);
  display: none;
  animation: fadeInDown 0.25s var(--ease);
}
.dropdown.show {
  display: block;
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.ud-top {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 8px;
}
.ud-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
}
.ud-role {
  font-size: 0.72rem;
  color: var(--teal-light);
  margin-top: 2px;
}
.ud-email {
  font-size: 0.72rem;
  color: var(--text-2);
  margin-top: 2px;
}
.ud-divider {
  height: 1px;
  background: var(--border);
  margin: 8px 0;
}
.ud-row {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 10px;
  color: var(--text);
  font-size: 0.84rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}
.ud-row:hover {
  background: var(--violet-soft);
  color: var(--text);
}
.ud-row.danger {
  color: var(--rose-light);
}
.ud-row.danger:hover {
  background: var(--rose-soft);
}
.pc {
  padding: 32px;
  flex: 1;
}
.view {
  display: none;
}
.view.active {
  display: block;
  animation: fadeIn 0.3s var(--ease);
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.dash-root {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.dash-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 28px !important;
  border: 1px solid var(--border-v, rgba(99, 102, 241, 0.28)) !important;
  border-radius: 20px !important;
  background: var(--bg-card) !important;
  margin-bottom: 24px;
}
.dash-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #7c3aed;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.dash-eyebrow-teal {
  color: #0891b2;
}
.dash-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7c3aed;
  display: inline-block;
  animation: dashBlink 2s infinite;
}
.dash-pulse-teal {
  background: #0891b2;
}
@keyframes dashBlink {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4);
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0);
  }
}
.dash-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin: 0 0 6px;
}
.dash-desc {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
.dash-head-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
  padding-top: 4px;
}
.dash-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 9px;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
  border: none;
  font-family: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.dash-btn-outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #94a3b8;
}
.dash-btn-outline:hover {
  border-color: rgba(255, 255, 255, 0.25);
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.04);
}
.dash-btn-solid {
  background: #4f46e5;
  color: #fff;
  box-shadow: 0 2px 12px rgba(79, 70, 229, 0.35);
}
.dash-btn-solid:hover {
  background: #4338ca;
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.5);
}
.dash-btn-teal {
  background: #0891b2;
  box-shadow: 0 2px 12px rgba(8, 145, 178, 0.35);
}
.dash-btn-teal:hover {
  background: #0e7490;
  box-shadow: 0 4px 20px rgba(8, 145, 178, 0.5);
}
.dash-kpi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 24px;
}
.dash-kpi-grid.grid-4-cols {
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 1200px) {
  .dash-kpi-grid,
  .dash-kpi-grid.grid-4-cols {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 680px) {
  .dash-kpi-grid {
    grid-template-columns: 1fr;
  }
}
.kpi-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 22px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}
.kpi-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}
.kpi-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.kpi-icon-badge {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}
.kpi-pill {
  font-size: 0.74rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}
.kpi-card-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.kpi-value {
  font-size: 1.85rem;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.5px;
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.kpi-currency {
  font-size: 0.82rem;
  font-weight: 700;
  opacity: 0.85;
}
.kpi-title {
  font-size: 0.92rem;
  font-weight: 800;
  color: #f8fafc;
  margin-top: 3px;
}
.kpi-subtitle {
  font-size: 0.76rem;
  color: #94a3b8;
  font-weight: 500;
}
.card-blue {
  border-color: rgba(14, 165, 233, 0.25);
}
.card-blue:hover {
  border-color: #38bdf8;
  box-shadow: 0 12px 35px rgba(14, 165, 233, 0.2);
}
.kpi-icon-badge.blue {
  background: rgba(14, 165, 233, 0.15);
  color: #38bdf8;
}
.kpi-pill.blue {
  background: rgba(14, 165, 233, 0.12);
  color: #38bdf8;
  border: 1px solid rgba(14, 165, 233, 0.25);
}
.kpi-value.blue {
  color: #38bdf8;
}
.card-emerald {
  border-color: rgba(16, 185, 129, 0.25);
}
.card-emerald:hover {
  border-color: #34d399;
  box-shadow: 0 12px 35px rgba(16, 185, 129, 0.2);
}
.kpi-icon-badge.emerald {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
}
.kpi-pill.emerald {
  background: rgba(16, 185, 129, 0.12);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.25);
}
.kpi-value.emerald {
  color: #34d399;
}
.card-amber {
  border-color: rgba(245, 158, 11, 0.25);
}
.card-amber:hover {
  border-color: #fbbf24;
  box-shadow: 0 12px 35px rgba(245, 158, 11, 0.2);
}
.kpi-icon-badge.amber {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
}
.kpi-pill.amber {
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.25);
}
.kpi-value.amber {
  color: #fbbf24;
}
.card-purple {
  border-color: rgba(124, 58, 237, 0.25);
}
.card-purple:hover {
  border-color: #a78bfa;
  box-shadow: 0 12px 35px rgba(124, 58, 237, 0.2);
}
.kpi-icon-badge.purple {
  background: rgba(124, 58, 237, 0.15);
  color: #a78bfa;
}
.kpi-pill.purple {
  background: rgba(124, 58, 237, 0.12);
  color: #a78bfa;
  border: 1px solid rgba(124, 58, 237, 0.25);
}
.kpi-value.purple {
  color: #a78bfa;
}
.card-cyan {
  border-color: rgba(6, 182, 212, 0.25);
}
.card-cyan:hover {
  border-color: #67e8f9;
  box-shadow: 0 12px 35px rgba(6, 182, 212, 0.2);
}
.kpi-icon-badge.cyan {
  background: rgba(6, 182, 212, 0.15);
  color: #67e8f9;
}
.kpi-pill.cyan {
  background: rgba(6, 182, 212, 0.12);
  color: #67e8f9;
  border: 1px solid rgba(6, 182, 212, 0.25);
}
.kpi-value.cyan {
  color: #67e8f9;
}
.card-indigo {
  border-color: rgba(99, 102, 241, 0.25);
}
.card-indigo:hover {
  border-color: #818cf8;
  box-shadow: 0 12px 35px rgba(99, 102, 241, 0.2);
}
.kpi-icon-badge.indigo {
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
}
.kpi-pill.indigo {
  background: rgba(99, 102, 241, 0.12);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.25);
}
.kpi-value.indigo {
  color: #818cf8;
}
.card-rose {
  border-color: rgba(244, 63, 94, 0.25);
}
.card-rose:hover {
  border-color: #fda4af;
  box-shadow: 0 12px 35px rgba(244, 63, 94, 0.2);
}
.kpi-icon-badge.rose {
  background: rgba(244, 63, 94, 0.15);
  color: #fda4af;
}
.kpi-pill.rose {
  background: rgba(244, 63, 94, 0.12);
  color: #fda4af;
  border: 1px solid rgba(244, 63, 94, 0.25);
}
.kpi-value.rose {
  color: #fda4af;
}
:host-context(body.light-theme) .kpi-card {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05) !important;
}
:host-context(body.light-theme) .kpi-card:hover {
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12) !important;
  border-color: #cbd5e1 !important;
}
:host-context(body.light-theme) .kpi-title {
  color: #0f172a !important;
  font-weight: 800 !important;
}
:host-context(body.light-theme) .kpi-subtitle {
  color: #475569 !important;
  font-weight: 600 !important;
}
:host-context(body.light-theme) .kpi-icon-badge.blue {
  background: #e0f2fe !important;
  color: #0284c7 !important;
}
:host-context(body.light-theme) .kpi-pill.blue {
  background: rgba(2, 132, 199, 0.1) !important;
  color: #0284c7 !important;
  border-color: rgba(2, 132, 199, 0.25) !important;
}
:host-context(body.light-theme) .kpi-value.blue {
  color: #0369a1 !important;
}
:host-context(body.light-theme) .kpi-icon-badge.emerald {
  background: #dcfce7 !important;
  color: #16a34a !important;
}
:host-context(body.light-theme) .kpi-pill.emerald {
  background: rgba(22, 163, 74, 0.1) !important;
  color: #16a34a !important;
  border-color: rgba(22, 163, 74, 0.25) !important;
}
:host-context(body.light-theme) .kpi-value.emerald {
  color: #15803d !important;
}
:host-context(body.light-theme) .kpi-icon-badge.amber {
  background: #fef3c7 !important;
  color: #d97706 !important;
}
:host-context(body.light-theme) .kpi-pill.amber {
  background: rgba(217, 119, 6, 0.1) !important;
  color: #d97706 !important;
  border-color: rgba(217, 119, 6, 0.25) !important;
}
:host-context(body.light-theme) .kpi-value.amber {
  color: #b45309 !important;
}
:host-context(body.light-theme) .kpi-icon-badge.purple {
  background: #f3e8ff !important;
  color: #7e22ce !important;
}
:host-context(body.light-theme) .kpi-pill.purple {
  background: rgba(126, 34, 206, 0.1) !important;
  color: #7e22ce !important;
  border-color: rgba(126, 34, 206, 0.25) !important;
}
:host-context(body.light-theme) .kpi-value.purple {
  color: #6b21a8 !important;
}
:host-context(body.light-theme) .kpi-icon-badge.cyan {
  background: #cffafe !important;
  color: #0891b2 !important;
}
:host-context(body.light-theme) .kpi-pill.cyan {
  background: rgba(8, 145, 178, 0.1) !important;
  color: #0891b2 !important;
  border-color: rgba(8, 145, 178, 0.25) !important;
}
:host-context(body.light-theme) .kpi-value.cyan {
  color: #0e7490 !important;
}
:host-context(body.light-theme) .kpi-icon-badge.indigo {
  background: #e0e7ff !important;
  color: #4f46e5 !important;
}
:host-context(body.light-theme) .kpi-pill.indigo {
  background: rgba(79, 70, 229, 0.1) !important;
  color: #4f46e5 !important;
  border-color: rgba(79, 70, 229, 0.25) !important;
}
:host-context(body.light-theme) .kpi-value.indigo {
  color: #3730a3 !important;
}
:host-context(body.light-theme) .kpi-icon-badge.rose {
  background: #ffe4e6 !important;
  color: #e11d48 !important;
}
:host-context(body.light-theme) .kpi-pill.rose {
  background: rgba(225, 29, 72, 0.1) !important;
  color: #e11d48 !important;
  border-color: rgba(225, 29, 72, 0.25) !important;
}
:host-context(body.light-theme) .kpi-value.rose {
  color: #be123c !important;
}
.dash-analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}
.analytics-card {
  padding: 22px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  backdrop-filter: blur(12px);
}
.ac-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.ac-head h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
}
.ac-head p {
  font-size: 0.78rem;
  color: #94a3b8;
  margin-top: 4px;
}
.ac-badge {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 100px;
}
.ac-badge.emerald {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}
.ac-badge.cyan {
  background: rgba(6, 182, 212, 0.15);
  color: #67e8f9;
  border: 1px solid rgba(6, 182, 212, 0.3);
}
.ac-progress-box {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 18px;
  border-radius: 14px;
}
.ac-pb-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}
.ac-pb-track {
  height: 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  overflow: hidden;
}
.ac-pb-fill {
  height: 100%;
  border-radius: 100px;
  transition: width 0.6s ease;
}
.ac-pb-fill.emerald {
  background:
    linear-gradient(
      90deg,
      #10b981,
      #34d399);
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
}
.ac-pb-fill.cyan {
  background:
    linear-gradient(
      90deg,
      #06b6d4,
      #67e8f9);
  box-shadow: 0 0 12px rgba(6, 182, 212, 0.4);
}
.ac-legend {
  display: flex;
  gap: 16px;
  margin-top: 14px;
  font-size: 0.76rem;
  color: #94a3b8;
  flex-wrap: wrap;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.dot.emerald {
  background: #34d399;
}
.dot.rose {
  background: #f87171;
}
.dot.cyan {
  background: #67e8f9;
}
.dot.amber {
  background: #fbbf24;
}
.dot.violet {
  background: #a78bfa;
}
.dash-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.dash-panel {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  overflow: hidden;
  backdrop-filter: blur(12px);
}
.dash-panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.dash-panel-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dash-panel-title i {
  color: #64748b;
  font-size: 0.82rem;
}
.dash-panel-link {
  font-size: 0.76rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.18s;
  text-decoration: none;
  border: none;
  background: none;
  padding: 0;
  font-family: inherit;
}
.dash-panel-link:hover {
  color: #94a3b8;
}
.dash-panel-body {
  padding: 8px 0;
}
.dash-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  transition: background 0.15s;
}
.dash-row:hover {
  background: rgba(255, 255, 255, 0.03);
}
.dash-row-avatar {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}
.dash-row-thumb {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}
.dash-row-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dash-row-thumb-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
}
.av-p {
  background: rgba(124, 58, 237, 0.18);
  color: #a78bfa;
}
.av-b {
  background: rgba(14, 165, 233, 0.18);
  color: #38bdf8;
}
.av-a {
  background: rgba(245, 158, 11, 0.18);
  color: #fbbf24;
}
.av-g {
  background: rgba(34, 197, 94, 0.18);
  color: #4ade80;
}
.av-r {
  background: rgba(239, 68, 68, 0.18);
  color: #f87171;
}
.dash-row-info {
  flex: 1;
  min-width: 0;
}
.dash-row-name {
  font-size: 0.84rem;
  font-weight: 600;
  color: #e2e8f0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dash-row-meta {
  font-size: 0.74rem;
  color: #475569;
  margin-top: 1px;
}
.dash-row-end {
  flex-shrink: 0;
  text-align: end;
}
.dash-amount {
  font-size: 0.88rem;
  font-weight: 700;
  color: #4ade80;
  white-space: nowrap;
}
.dash-amount span {
  font-size: 0.72rem;
  font-weight: 500;
  color: #16a34a;
}
.dash-status-badge {
  font-size: 0.68rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 100px;
  background: rgba(100, 116, 139, 0.18);
  color: #64748b;
  margin-top: 3px;
  display: inline-block;
}
.dash-priority {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 100px;
  background: rgba(100, 116, 139, 0.2);
  color: #94a3b8;
}
.prio-h {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
}
.prio-m {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
}
.prio-l {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
}
.dash-client-tag {
  font-size: 0.74rem;
  font-weight: 500;
  color: #475569;
}
.dash-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px;
  color: #1e293b;
  font-size: 0.84rem;
}
.dash-empty i {
  font-size: 2rem;
}
.dash-bar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 20px;
}
.dash-bar-info {
  display: flex;
  justify-content: space-between;
  min-width: 110px;
  gap: 8px;
  font-size: 0.8rem;
}
.dash-bar-name {
  color: #94a3b8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80px;
}
.dash-bar-count {
  font-weight: 700;
  color: #e2e8f0;
  flex-shrink: 0;
}
.dash-bar-track {
  flex: 1;
  height: 5px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 100px;
  overflow: hidden;
}
.dash-bar-fill {
  height: 100%;
  border-radius: 100px;
  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.fill-p {
  background:
    linear-gradient(
      90deg,
      #7c3aed,
      #a78bfa);
}
.fill-b {
  background:
    linear-gradient(
      90deg,
      #0891b2,
      #38bdf8);
}
.fill-a {
  background:
    linear-gradient(
      90deg,
      #d97706,
      #fbbf24);
}
.fill-g {
  background:
    linear-gradient(
      90deg,
      #16a34a,
      #4ade80);
}
.fill-r {
  background:
    linear-gradient(
      90deg,
      #dc2626,
      #f87171);
}
.dash-bar-pct {
  font-size: 0.72rem;
  font-weight: 600;
  color: #475569;
  min-width: 30px;
  text-align: end;
}
.dash-shortcuts {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding-top: 4px;
}
.dash-shortcut {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(15, 23, 42, 0.4);
  cursor: pointer;
  transition: all 0.18s ease;
  font-size: 0.77rem;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  font-family: inherit;
}
.dash-shortcut i {
  font-size: 1.05rem;
  color: #334155;
  transition: color 0.18s;
}
.dash-shortcut:hover {
  background: rgba(79, 70, 229, 0.08);
  border-color: rgba(79, 70, 229, 0.25);
  color: #a5b4fc;
}
.dash-shortcut:hover i {
  color: #a5b4fc;
}
:host-context(body.light-theme) {
  --bg: #f8fafc;
  --bg-2: #f1f5f9;
  --bg-3: #e2e8f0;
  --card: #ffffff;
  --card-hover: #ffffff;
  --sidebar: #ffffff;
  --topbar: #ffffff;
  --border: #e2e8f0;
  --border-2: #cbd5e1;
  --border-v: rgba(99, 102, 241, 0.2);
  --border-t: rgba(6, 182, 212, 0.2);
  --text: #0f172a;
  --text-2: #334155;
  --text-3: #64748b;
}
:host-context(body.light-theme) .crm-shell {
  background: #f8fafc !important;
  color: #0f172a !important;
}
:host-context(body.light-theme) .dash-root {
  background: #f8fafc !important;
}
:host-context(body.light-theme) .dash-kpi,
:host-context(body.light-theme) .dash-panel,
:host-context(body.light-theme) .dash-shortcut,
:host-context(body.light-theme) .glass-panel,
:host-context(body.light-theme) .dash-quick-card,
:host-context(body.light-theme) .wbanner {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05) !important;
}
body.light-theme .dash-head {
  background: #ffffff !important;
  border: 1px solid rgba(99, 102, 241, 0.18) !important;
  box-shadow: 0 4px 20px -2px rgba(99, 102, 241, 0.08) !important;
  padding: 24px 28px !important;
}
body.light-theme .dash-eyebrow {
  color: #6d28d9;
  font-weight: 800;
}
body.light-theme .dash-eyebrow-teal {
  color: #0369a1;
  font-weight: 800;
}
body.light-theme .dash-pulse {
  background: #6d28d9;
}
body.light-theme .dash-pulse-teal {
  background: #0369a1;
}
body.light-theme .dash-title {
  color: #0f172a;
  font-weight: 900;
}
body.light-theme .dash-desc {
  color: #475569;
}
body.light-theme .dash-btn-outline {
  background: #ffffff;
  border-color: #cbd5e1;
  color: #334155;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
body.light-theme .dash-btn-outline:hover {
  border-color: #94a3b8;
  color: #0f172a;
  background: #f8fafc;
}
body.light-theme .dash-btn-solid {
  background: #4f46e5;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);
}
body.light-theme .dash-btn-solid:hover {
  background: #4338ca;
}
body.light-theme .dash-btn-teal {
  background: #0284c7;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.25);
}
body.light-theme .dash-btn-teal:hover {
  background: #0369a1;
}
body.light-theme .dash-kpi {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04) !important;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
body.light-theme .dash-kpi:hover {
  transform: none;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
  border-color: #e2e8f0;
}
body.light-theme .dash-kpi-label {
  color: #334155;
  font-weight: 700;
}
body.light-theme .dash-kpi-sub {
  color: #64748b;
  font-weight: 500;
}
body.light-theme .dash-kpi-trend.up {
  color: #16a34a;
  font-weight: 700;
}
body.light-theme .dash-kpi-trend.warn {
  color: #d97706;
  font-weight: 700;
}
body.light-theme .dash-kpi-purple .dash-kpi-icon {
  background: #f3e8ff;
  color: #7e22ce;
}
body.light-theme .dash-kpi-purple .dash-kpi-num {
  color: #6b21a8;
}
body.light-theme .dash-kpi-blue .dash-kpi-icon {
  background: #e0f2fe;
  color: #0284c7;
}
body.light-theme .dash-kpi-blue .dash-kpi-num {
  color: #0369a1;
}
body.light-theme .dash-kpi-amber .dash-kpi-icon {
  background: #fef3c7;
  color: #d97706;
}
body.light-theme .dash-kpi-amber .dash-kpi-num {
  color: #b45309;
}
body.light-theme .dash-kpi-green .dash-kpi-icon {
  background: #dcfce7;
  color: #15803d;
}
body.light-theme .dash-kpi-green .dash-kpi-num {
  color: #15803d;
}
body.light-theme .dash-kpi-red .dash-kpi-icon {
  background: #fee2e2;
  color: #b91c1c;
}
body.light-theme .dash-kpi-red .dash-kpi-num {
  color: #b91c1c;
}
body.light-theme .dash-panel {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04) !important;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
body.light-theme .dash-panel-head {
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}
body.light-theme .dash-panel-title {
  color: #0f172a;
  font-weight: 800;
}
body.light-theme .dash-panel-title i {
  color: #64748b;
}
body.light-theme .dash-panel-link {
  color: #4f46e5;
  font-weight: 700;
}
body.light-theme .dash-panel-link:hover {
  color: #3730a3;
}
body.light-theme .dash-row {
  border-bottom: 1px solid #f1f5f9;
}
body.light-theme .dash-row:last-child {
  border-bottom: none;
}
body.light-theme .dash-row:hover {
  background: #f8fafc;
}
body.light-theme .dash-row-name {
  color: #0f172a;
  font-weight: 700;
}
body.light-theme .dash-row-meta {
  color: #64748b;
}
body.light-theme .av-p {
  background: #f3e8ff;
  color: #7e22ce;
}
body.light-theme .av-b {
  background: #e0f2fe;
  color: #0284c7;
}
body.light-theme .av-a {
  background: #fef3c7;
  color: #b45309;
}
body.light-theme .av-g {
  background: #dcfce7;
  color: #15803d;
}
body.light-theme .av-r {
  background: #fee2e2;
  color: #b91c1c;
}
body.light-theme .dash-amount {
  color: #15803d;
  font-weight: 800;
}
body.light-theme .dash-amount span {
  color: #166534;
}
body.light-theme .dash-status-badge {
  background: #e2e8f0;
  color: #334155;
  font-weight: 700;
}
body.light-theme .dash-client-tag {
  color: #475569;
  font-weight: 600;
}
body.light-theme .prio-h {
  background: #fee2e2;
  color: #b91c1c;
  font-weight: 800;
}
body.light-theme .prio-m {
  background: #fef3c7;
  color: #b45309;
  font-weight: 800;
}
body.light-theme .prio-l {
  background: #dcfce7;
  color: #15803d;
  font-weight: 800;
}
body.light-theme .dash-bar-info {
  color: #334155;
}
body.light-theme .dash-bar-name {
  color: #334155;
  font-weight: 600;
}
body.light-theme .dash-bar-count {
  color: #0f172a;
  font-weight: 800;
}
body.light-theme .dash-bar-track {
  background: #e2e8f0;
}
body.light-theme .dash-bar-pct {
  color: #64748b;
  font-weight: 700;
}
body.light-theme .dash-empty {
  color: #94a3b8;
}
body.light-theme .dash-empty i {
  color: #cbd5e1;
}
body.light-theme .dash-shortcut {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #334155;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
body.light-theme .dash-shortcut i {
  color: #64748b;
}
body.light-theme .dash-shortcut span {
  font-weight: 700;
}
body.light-theme .dash-shortcut:hover {
  background: #f5f3ff;
  border-color: #c4b5fd;
  color: #6d28d9;
  box-shadow: 0 4px 12px rgba(109, 40, 217, 0.08);
}
body.light-theme .dash-shortcut:hover i {
  color: #6d28d9;
}
@media (max-width: 1200px) {
  .dash-kpi-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .dash-grid {
    grid-template-columns: 1fr;
  }
  .dash-shortcuts {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 640px) {
  .dash-kpi-row {
    grid-template-columns: 1fr 1fr;
  }
  .dash-head {
    flex-direction: column;
  }
}
.wbanner {
  position: relative;
  border-radius: var(--r-xl);
  overflow: hidden;
  border: 1px solid var(--border-v);
  background: #090918;
  padding: 36px 40px;
  margin-bottom: 32px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
}
.wb-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 15% 30%,
      rgba(99, 102, 241, 0.25) 0%,
      transparent 45%),
    radial-gradient(
      circle at 85% 70%,
      rgba(6, 182, 212, 0.2) 0%,
      transparent 45%),
    radial-gradient(
      circle at 50% 50%,
      rgba(244, 63, 94, 0.08) 0%,
      transparent 60%);
  filter: blur(30px);
  animation: pulseGlow 10s infinite alternate var(--ease);
}
@keyframes pulseGlow {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.1);
    opacity: 1;
  }
}
.wb-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px);
  background-size: 32px 32px;
  opacity: 0.6;
}
.wb-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(9, 9, 24, 0.85) 0%,
      rgba(9, 9, 24, 0.4) 60%,
      rgba(9, 9, 24, 0.7) 100%);
}
.wb-inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.wb-tag {
  display: inline-flex;
  align-items: center;
  padding: 5px 14px;
  border-radius: 100px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.35);
  color: var(--violet-light);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
}
.wb-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--emerald-light);
  box-shadow: 0 0 10px var(--emerald-light);
  display: inline-block;
  animation: blink 1.8s infinite;
}
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
.wb-greeting {
  font-size: 2.1rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.6px;
  line-height: 1.25;
}
.wb-greeting span {
  background:
    linear-gradient(
      135deg,
      #fff 0%,
      var(--violet-light) 60%,
      var(--teal-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wb-sub {
  color: var(--text-2);
  font-size: 0.95rem;
  margin-top: 10px;
  max-width: 540px;
  line-height: 1.6;
}
.wb-actions {
  display: flex;
  gap: 12px;
}
.wb-btn {
  padding: 11px 22px;
  border-radius: 12px;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s var(--ease);
  border: none;
}
.wb-primary {
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--violet-2));
  color: #fff;
  box-shadow: 0 6px 20px var(--violet-glow);
}
.wb-primary:hover {
  box-shadow: 0 10px 30px var(--violet-glow);
  background:
    linear-gradient(
      135deg,
      #6d70f8,
      var(--violet));
}
.wb-secondary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-2);
  color: var(--text);
  backdrop-filter: blur(10px);
}
.wb-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--teal-light);
  color: var(--teal-light);
}
.wb-quick-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  flex-shrink: 0;
}
.wb-qs {
  background: rgba(15, 15, 32, 0.65);
  border: 1px solid var(--border);
  backdrop-filter: blur(15px);
  padding: 16px 22px;
  border-radius: 16px;
  text-align: center;
  min-width: 110px;
  cursor: pointer;
  transition: all 0.25s var(--ease);
}
.wb-qs:hover {
  background: rgba(25, 25, 50, 0.8);
  border-color: var(--border-v);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}
.wb-qs-num {
  font-size: 1.6rem;
  font-weight: 800;
  color: #fff;
}
.wb-qs-lbl {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 2px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
.stat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 24px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s var(--ease);
  backdrop-filter: blur(20px);
}
.stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: transparent;
  transition: background 0.3s;
}
.stat-c-violet::before {
  background:
    linear-gradient(
      90deg,
      var(--violet),
      var(--violet-light));
}
.stat-c-teal::before {
  background:
    linear-gradient(
      90deg,
      var(--teal),
      var(--teal-light));
}
.stat-c-amber::before {
  background:
    linear-gradient(
      90deg,
      var(--amber),
      var(--amber-light));
}
.stat-c-rose::before {
  background:
    linear-gradient(
      90deg,
      var(--rose),
      var(--rose-light));
}
.stat-card:hover {
  background: var(--card-hover);
  border-color: var(--border-2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
}
.stat-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 16px;
  transition: transform 0.3s var(--ease);
}
.stat-c-violet .stat-card-icon {
  background: var(--violet-soft);
  color: var(--violet-light);
  border: 1px solid rgba(99, 102, 241, 0.25);
}
.stat-c-teal .stat-card-icon {
  background: var(--teal-soft);
  color: var(--teal-light);
  border: 1px solid rgba(6, 182, 212, 0.25);
}
.stat-c-amber .stat-card-icon {
  background: var(--amber-soft);
  color: var(--amber-light);
  border: 1px solid rgba(245, 158, 11, 0.25);
}
.stat-c-rose .stat-card-icon {
  background: var(--rose-soft);
  color: var(--rose-light);
  border: 1px solid rgba(244, 63, 94, 0.25);
}
.stat-card:hover .stat-card-icon {
  transform: none;
}
.stat-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.stat-value {
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  margin: 6px 0;
  letter-spacing: -1px;
}
.stat-trend {
  font-size: 0.76rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}
.trend-v {
  color: var(--violet-light);
}
.trend-t {
  color: var(--teal-light);
}
.trend-a {
  color: var(--amber-light);
}
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 24px;
  margin-bottom: 24px;
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
}
.card-title-icon {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}
.cti-v {
  background: var(--violet-soft);
  color: var(--violet-light);
}
.cti-t {
  background: var(--teal-soft);
  color: var(--teal-light);
}
.card-action {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--violet-light);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
}
.card-action:hover {
  color: #fff;
}
.table-responsive {
  width: 100%;
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: var(--text);
  font-size: 0.86rem;
}
th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-2);
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.015);
}
td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
  transition: background 0.2s;
}
tr:hover td {
  background: rgba(255, 255, 255, 0.025);
}
.user-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}
.user-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      var(--violet-2),
      var(--teal-2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  font-size: 0.8rem;
  flex-shrink: 0;
}
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.badge-v {
  background: var(--violet-soft);
  color: var(--violet-light);
  border: 1px solid rgba(99, 102, 241, 0.25);
}
.badge-t {
  background: var(--teal-soft);
  color: var(--teal-light);
  border: 1px solid rgba(6, 182, 212, 0.25);
}
.badge-blue {
  background: rgba(59, 130, 246, 0.12);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.25);
}
.save-btn {
  padding: 10px 20px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--violet-2));
  color: #fff;
  font-weight: 700;
  font-size: 0.86rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px var(--violet-glow);
  transition: all 0.25s var(--ease);
}
.save-btn:hover {
  box-shadow: 0 8px 25px var(--violet-glow);
  background:
    linear-gradient(
      135deg,
      #6d70f8,
      var(--violet));
}
.save-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
.action-btn {
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  color: var(--text-2);
  cursor: pointer;
  font-size: 0.82rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.action-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border-color: var(--border-2);
}
.font-small {
  font-size: 0.78rem !important;
  padding: 7px 14px !important;
}
.form-grid-custom {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}
.full-width {
  grid-column: span 2;
}
.fgroup {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.s-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-2);
  letter-spacing: 0.3px;
}
.s-input {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 11px 14px;
  color: #fff;
  font-family: inherit;
  font-size: 0.88rem;
  transition: all 0.25s var(--ease);
  outline: none;
}
.s-input:focus {
  border-color: var(--violet);
  background: rgba(99, 102, 241, 0.05);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
textarea.s-input {
  resize: vertical;
  min-height: 90px;
}
select.s-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%239ca3af' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}
.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-2);
}
.empty-state i {
  font-size: 2.2rem;
  margin-bottom: 12px;
  opacity: 0.4;
  color: var(--violet-light);
}
.empty-state p {
  font-size: 0.9rem;
}
@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .content-row {
    grid-template-columns: 1fr !important;
  }
}
@media (max-width: 992px) {
  .sb {
    transform: translateX(-100%);
  }
  .sb.open {
    transform: translateX(0);
  }
  .main-container {
    margin-left: 0;
  }
  .wb-inner {
    flex-direction: column;
    align-items: flex-start;
  }
  .wb-quick-stats {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
  }
  .pc {
    padding: 20px;
  }
}
@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .wb-quick-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .form-grid-custom {
    grid-template-columns: 1fr;
  }
  .full-width {
    grid-column: span 1;
  }
  .tb {
    padding: 0 16px;
  }
  .tb-bc {
    display: none;
  }
}
body.light-theme .wbanner {
  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f8fafc 60%,
      rgba(99, 102, 241, 0.08) 100%) !important;
  border-color: rgba(99, 102, 241, 0.22) !important;
  box-shadow: 0 15px 40px rgba(15, 23, 42, 0.06) !important;
}
body.light-theme .wb-overlay {
  background:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(248, 250, 252, 0.85) 100%) !important;
}
body.light-theme .wb-greeting {
  color: #0f172a !important;
}
body.light-theme .wb-greeting span {
  background:
    linear-gradient(
      135deg,
      #4f46e5,
      #0284c7) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
body.light-theme .wb-sub {
  color: #475569 !important;
}
body.light-theme .wb-qs {
  background: #ffffff !important;
  border-color: rgba(99, 102, 241, 0.18) !important;
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.04) !important;
}
body.light-theme .wb-qs-num {
  color: #0f172a !important;
}
body.light-theme .wb-qs-lbl {
  color: #64748b !important;
}
body.light-theme .stat-card {
  background: #ffffff !important;
  border-color: rgba(99, 102, 241, 0.15) !important;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05) !important;
}
body.light-theme .stat-card:hover {
  border-color: rgba(99, 102, 241, 0.35) !important;
  box-shadow: 0 18px 40px rgba(99, 102, 241, 0.12) !important;
}
body.light-theme .stat-label {
  color: #64748b !important;
}
body.light-theme .stat-value {
  color: #0f172a !important;
}
body.light-theme .card {
  background: #ffffff !important;
  border-color: rgba(99, 102, 241, 0.15) !important;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05) !important;
}
body.light-theme .card-header {
  border-bottom-color: rgba(99, 102, 241, 0.1) !important;
}
body.light-theme .card-title {
  color: #0f172a !important;
}
body.light-theme table th {
  background: rgba(99, 102, 241, 0.04) !important;
  color: #475569 !important;
  border-bottom-color: rgba(99, 102, 241, 0.12) !important;
}
body.light-theme table td {
  color: #0f172a !important;
  border-bottom-color: rgba(99, 102, 241, 0.08) !important;
}
body.light-theme table tr:hover td {
  background: rgba(99, 102, 241, 0.05) !important;
}
.dash-kpi,
.dash-shortcut,
.analytics-card,
.dash-panel,
.stat-card,
.glass-panel,
.dash-head {
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease !important;
}
.dash-kpi:hover,
.dash-shortcut:hover,
.analytics-card:hover,
.dash-panel:hover,
.stat-card:hover,
.glass-panel:hover,
.dash-head:hover,
.stat-card:hover .stat-card-icon,
body.light-theme .dash-kpi:hover,
body.light-theme .dash-shortcut:hover,
body.light-theme .analytics-card:hover,
body.light-theme .dash-panel:hover,
body.light-theme .stat-card:hover,
body.light-theme .glass-panel:hover,
body.light-theme .dash-head:hover {
  transform: none !important;
  animation: none !important;
}
/*# sourceMappingURL=controller-dashboard.component.css.map */
`] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControllerDashboardComponent, { className: "ControllerDashboardComponent", filePath: "src/app/components/controller-dashboard/controller-dashboard.component.ts", lineNumber: 15 });
})();
export {
  ControllerDashboardComponent
};
//# sourceMappingURL=chunk-GRNTEKQ3.js.map
