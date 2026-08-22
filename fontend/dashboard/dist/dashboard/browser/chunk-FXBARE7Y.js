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
  CheckboxControlValueAccessor,
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
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/components/departments/departments-sections.component.ts
var _c0 = () => ({ width: "92vw", maxWidth: "540px" });
var _c1 = () => ({ width: "92vw", maxWidth: "560px" });
var _c2 = () => ({ width: "92vw", maxWidth: "480px" });
var _c3 = () => ({ width: "92vw", maxWidth: "460px" });
function DepartmentsSectionsComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddEmployeeModal());
    });
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275text(2, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F ");
    \u0275\u0275elementEnd();
  }
}
function DepartmentsSectionsComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2, " \u0625\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u062C\u062F\u064A\u062F ");
    \u0275\u0275elementEnd();
  }
}
function DepartmentsSectionsComponent_div_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", dept_r4.partner_percentage, "% \u0634\u0631\u0643\u0629 / ", 100 - dept_r4.partner_percentage, "% \u0634\u0631\u064A\u0643 ");
  }
}
function DepartmentsSectionsComponent_div_14_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r4.manager.name);
  }
}
function DepartmentsSectionsComponent_div_14_span_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_span_19_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const dept_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(dept_r4));
    });
    \u0275\u0275text(1, "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F (\u0627\u0646\u0642\u0631 \u0644\u062A\u0639\u064A\u064A\u0646 \u0645\u062F\u064A\u0631)");
    \u0275\u0275elementEnd();
  }
}
function DepartmentsSectionsComponent_div_14_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const dept_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(dept_r4));
    });
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementEnd();
  }
}
function DepartmentsSectionsComponent_div_14_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const dept_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddEmployeeModal(dept_r4.id));
    });
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2, " \u0645\u0648\u0638\u0641 ");
    \u0275\u0275elementEnd();
  }
}
function DepartmentsSectionsComponent_div_14_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "span", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 91);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emp_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r8.name ? emp_r8.name.charAt(0) : "M");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r8.name);
  }
}
function DepartmentsSectionsComponent_div_14_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1, " \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0648\u0638\u0641\u0648\u0646 \u0645\u0636\u0627\u0641\u0648\u0646 \u0628\u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645 \u0628\u0639\u062F ");
    \u0275\u0275elementEnd();
  }
}
function DepartmentsSectionsComponent_div_14_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const dept_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSubCategoryModal(dept_r4));
    });
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2, " \u062A\u0635\u0646\u064A\u0641 ");
    \u0275\u0275elementEnd();
  }
}
function DepartmentsSectionsComponent_div_14_div_37_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 97)(1, "button", 98);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_div_37_span_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const sub_r11 = \u0275\u0275nextContext().$implicit;
      const dept_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditSubCategoryModal(sub_r11, dept_r4));
    });
    \u0275\u0275element(2, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 100);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_div_37_span_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const sub_r11 = \u0275\u0275nextContext().$implicit;
      const dept_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteSubCategory(sub_r11, dept_r4));
    });
    \u0275\u0275element(4, "i", 101);
    \u0275\u0275elementEnd()();
  }
}
function DepartmentsSectionsComponent_div_14_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "span", 94);
    \u0275\u0275element(2, "i", 95);
    \u0275\u0275text(3);
    \u0275\u0275template(4, DepartmentsSectionsComponent_div_14_div_37_span_4_Template, 5, 0, "span", 96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sub_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", sub_r11.name_ar || sub_r11.name_en, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isManagerOrAdmin());
  }
}
function DepartmentsSectionsComponent_div_14_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0641\u0631\u0639\u064A\u0629 \u0645\u0636\u0627\u0641\u0629 \u0628\u0639\u062F ");
    \u0275\u0275elementEnd();
  }
}
function DepartmentsSectionsComponent_div_14_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "button", 103);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_div_39_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const dept_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(dept_r4));
    });
    \u0275\u0275element(2, "i", 87);
    \u0275\u0275text(3, " \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0633\u0645 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 104);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_div_39_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const dept_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteDepartment(dept_r4));
    });
    \u0275\u0275element(5, "i", 105);
    \u0275\u0275elementEnd()();
  }
}
function DepartmentsSectionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "div", 56);
    \u0275\u0275elementStart(2, "div", 57)(3, "div", 58)(4, "div", 59)(5, "div", 60);
    \u0275\u0275element(6, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, DepartmentsSectionsComponent_div_14_span_9_Template, 3, 2, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 64)(13, "div", 65);
    \u0275\u0275element(14, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 66)(16, "span", 67);
    \u0275\u0275text(17, "\u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u0633\u0624\u0648\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, DepartmentsSectionsComponent_div_14_span_18_Template, 2, 1, "span", 68)(19, DepartmentsSectionsComponent_div_14_span_19_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, DepartmentsSectionsComponent_div_14_button_20_Template, 2, 0, "button", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 71)(22, "div", 72)(23, "span", 73);
    \u0275\u0275element(24, "i", 74);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, DepartmentsSectionsComponent_div_14_button_26_Template, 3, 0, "button", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 76);
    \u0275\u0275template(28, DepartmentsSectionsComponent_div_14_div_28_Template, 5, 2, "div", 77)(29, DepartmentsSectionsComponent_div_14_div_29_Template, 2, 0, "div", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 79)(31, "div", 72)(32, "span", 73);
    \u0275\u0275element(33, "i", 80);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, DepartmentsSectionsComponent_div_14_button_35_Template, 3, 0, "button", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 76);
    \u0275\u0275template(37, DepartmentsSectionsComponent_div_14_div_37_Template, 5, 2, "div", 81)(38, DepartmentsSectionsComponent_div_14_div_38_Template, 2, 0, "div", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, DepartmentsSectionsComponent_div_14_div_39_Template, 6, 0, "div", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dept_r4 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "accent-" + i_r13 % 4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.getDepartmentIcon(dept_r4.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dept_r4.has_partner);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r4.description || "\u0642\u0633\u0645 \u062A\u0634\u063A\u064A\u0644\u064A \u0645\u062A\u0643\u0627\u0645\u0644 \u064A\u062F\u064A\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u062A\u0627\u0628\u0639\u0629.");
    \u0275\u0275advance();
    \u0275\u0275classProp("assigned", dept_r4.manager);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", dept_r4.manager ? "fa-user-shield" : "fa-user-clock");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", dept_r4.manager);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dept_r4.manager);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isManagerOrAdmin());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u0627\u0644\u0645\u0648\u0638\u0641\u0648\u0646 \u0628\u0627\u0644\u0642\u0633\u0645 (", (dept_r4.employees == null ? null : dept_r4.employees.length) || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isManagerOrAdmin());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", dept_r4.employees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dept_r4.employees || dept_r4.employees.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0641\u0631\u0639\u064A\u0629 (", (dept_r4.sub_categories == null ? null : dept_r4.sub_categories.length) || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isManagerOrAdmin());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", dept_r4.sub_categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dept_r4.sub_categories || dept_r4.sub_categories.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isManagerOrAdmin());
  }
}
function DepartmentsSectionsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 14)(2, "label");
    \u0275\u0275text(3, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u062E\u0627\u0631\u062C\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "label");
    \u0275\u0275text(7, "\u0646\u0633\u0628\u0629 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0629 (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 108);
    \u0275\u0275elementStart(9, "small", 109);
    \u0275\u0275text(10, "\u062A\u064F\u0642\u0633\u0645 \u0623\u0631\u0628\u0627\u062D \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0646\u0633\u0628\u0629.");
    \u0275\u0275elementEnd()()();
  }
}
var DepartmentsSectionsComponent = class _DepartmentsSectionsComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  toastService = inject(ToastService);
  confirmService = inject(ConfirmService);
  departments = [];
  employees = [];
  rolesList = [
    { id: "employee", label: "\u0645\u0648\u0638\u0641 (Employee)" },
    { id: "department_manager", label: "\u0645\u062F\u064A\u0631 \u0642\u0633\u0645 (Department Manager)" },
    { id: "admin", label: "\u0645\u062F\u064A\u0631 \u0646\u0638\u0627\u0645 (Admin)" }
  ];
  paymentTypesList = [
    { id: "salary_based", label: "\u0631\u0627\u062A\u0628 \u062B\u0627\u0628\u062A" },
    { id: "task_based", label: "\u0628\u0627\u0644\u0645\u0647\u0627\u0645 / \u0627\u0644\u0642\u0637\u0639\u0629" },
    { id: "percentage_based", label: "\u0646\u0633\u0628\u0629 \u0645\u0626\u0648\u064A\u0629" },
    { id: "hybrid", label: "\u0647\u062C\u064A\u0646 (\u0631\u0627\u062A\u0628 + \u0639\u0645\u0648\u0644\u0629)" }
  ];
  showAddModal = false;
  showSubModal = false;
  showSubEditModal = false;
  showEmployeeModal = false;
  editingDeptId = null;
  editingSubCategory = null;
  selectedDept = null;
  loading = false;
  deptForm;
  subForm;
  empForm;
  currentUser = null;
  ngOnInit() {
    try {
      const uStr = localStorage.getItem("mediaglow_user");
      if (uStr)
        this.currentUser = JSON.parse(uStr);
    } catch (e) {
    }
    this.initForms();
    this.loadData();
  }
  isEmployee() {
    return this.currentUser?.role === "employee";
  }
  isDepartmentManager() {
    return this.currentUser?.role === "department_manager";
  }
  isManagerOrAdmin() {
    if (!this.currentUser)
      return true;
    return ["super_admin", "admin", "department_manager"].includes(this.currentUser.role);
  }
  getDepartmentIcon(name) {
    if (!name)
      return "fa-folder";
    const n = name.toLowerCase();
    if (n.includes("video") || n.includes("photo") || n.includes("\u062A\u0635\u0648\u064A\u0631") || n.includes("\u0641\u064A\u062F\u064A\u0648"))
      return "fa-camera-retro";
    if (n.includes("design") || n.includes("graphic") || n.includes("\u062A\u0635\u0645\u064A\u0645"))
      return "fa-palette";
    if (n.includes("dev") || n.includes("code") || n.includes("\u0628\u0631\u0645\u062C\u0629") || n.includes("\u062A\u0637\u0648\u064A\u0631"))
      return "fa-code";
    if (n.includes("market") || n.includes("\u062A\u0633\u0648\u064A\u0642") || n.includes("\u0633\u0648\u0634\u064A\u0627\u0644"))
      return "fa-bullhorn";
    if (n.includes("finance") || n.includes("\u0645\u0627\u0644\u064A\u0629") || n.includes("\u062D\u0633\u0627\u0628\u0627\u062A"))
      return "fa-coins";
    return "fa-sitemap";
  }
  initForms() {
    this.deptForm = this.fb.group({
      name: ["", Validators.required],
      manager_id: [null],
      has_partner: [false],
      partner_name: [""],
      partner_percentage: [50],
      description: [""]
    });
    this.subForm = this.fb.group({
      name_ar: ["", Validators.required],
      name_en: [""]
    });
    this.empForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["12345678", [Validators.required, Validators.minLength(6)]],
      role: ["employee", Validators.required],
      department_id: [null],
      payment_type: ["salary_based"],
      base_salary: [0],
      commission_rate: [0]
    });
  }
  loadData() {
    this.apiService.getDepartments().subscribe((res) => this.departments = res || []);
    this.apiService.getUsers().subscribe((res) => {
      const arr = res.data || [];
      this.employees = arr.filter((u) => u.role !== "client" && u.role !== "Client");
    });
  }
  togglePartnerCheckbox() {
    const current = this.deptForm.value.has_partner;
    this.deptForm.patchValue({ has_partner: !current });
    this.togglePartnerFields();
  }
  togglePartnerFields() {
    if (!this.deptForm.value.has_partner) {
      this.deptForm.patchValue({ partner_name: "", partner_percentage: 50 });
    }
  }
  openAddModal() {
    this.editingDeptId = null;
    this.deptForm.reset({ has_partner: false, partner_percentage: 50 });
    this.showAddModal = true;
  }
  openEditModal(dept) {
    this.editingDeptId = dept.id;
    this.deptForm.patchValue({
      name: dept.name,
      manager_id: dept.manager_id || null,
      has_partner: !!dept.has_partner,
      partner_name: dept.partner_name || "",
      partner_percentage: dept.partner_percentage || 50,
      description: dept.description || ""
    });
    this.showAddModal = true;
  }
  confirmDeleteDepartment(dept) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A",
      message: `\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u0631\u063A\u0628\u062A\u0643 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645 "${dept.name}"\u061F \u0642\u062F \u064A\u0624\u062B\u0631 \u0630\u0644\u0643 \u0639\u0644\u0649 \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u0647.`,
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645",
      cancelText: "\u0625\u0644\u063A\u0627\u0621 \u0648\u062A\u0631\u0627\u062C\u0639",
      type: "danger",
      icon: "fa-solid fa-folder-minus",
      accept: () => {
        this.apiService.deleteDepartment(dept.id).subscribe({
          next: () => {
            this.toastService.success(`\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645 "${dept.name}" \u0628\u0646\u062C\u0627\u062D`);
            this.loadData();
          },
          error: (err) => {
            this.toastService.error(err.error?.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645.");
          }
        });
      }
    });
  }
  saveDepartment() {
    if (this.deptForm.invalid) {
      this.deptForm.markAllAsTouched();
      this.toastService.warning("\u064A\u0631\u062C\u0649 \u0643\u062A\u0627\u0628\u0629 \u0627\u0633\u0645 \u0627\u0644\u0642\u0633\u0645 \u0648\u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D \u0642\u0628\u0644 \u0627\u0644\u062D\u0641\u0638");
      return;
    }
    this.loading = true;
    if (this.editingDeptId) {
      this.apiService.updateDepartment(this.editingDeptId, this.deptForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.success("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u0633\u0645 \u0628\u0646\u062C\u0627\u062D", "\u062A\u0645\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629");
          this.showAddModal = false;
          this.editingDeptId = null;
          this.loadData();
        },
        error: (err) => {
          this.loading = false;
          this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0642\u0633\u0645");
        }
      });
    } else {
      this.apiService.createDepartment(this.deptForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.toastService.success("\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u062C\u062F\u064A\u062F \u0628\u0646\u062C\u0627\u062D", "\u062A\u0645\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629");
          this.showAddModal = false;
          this.loadData();
        },
        error: (err) => {
          this.loading = false;
          this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u0633\u0645");
        }
      });
    }
  }
  openAddEmployeeModal(deptId) {
    this.empForm.reset({
      role: "employee",
      department_id: deptId || null,
      payment_type: "salary_based",
      base_salary: 0,
      commission_rate: 0,
      password: "password123"
    });
    this.showEmployeeModal = true;
  }
  saveEmployee() {
    if (this.empForm.invalid)
      return;
    this.loading = true;
    this.apiService.createUser(this.empForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showEmployeeModal = false;
        this.loadData();
      },
      error: (err) => {
        this.loading = false;
        alert(err.error?.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0648\u0638\u0641. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0645\u0643\u0631\u0631.");
      }
    });
  }
  openSubCategoryModal(dept) {
    this.selectedDept = dept;
    this.subForm.reset();
    this.showSubModal = true;
  }
  saveSubCategory() {
    if (this.subForm.invalid || !this.selectedDept)
      return;
    this.loading = true;
    this.apiService.addSubCategory(this.selectedDept.id, this.subForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showSubModal = false;
        this.loadData();
      },
      error: () => this.loading = false
    });
  }
  openEditSubCategoryModal(sub, dept) {
    this.editingSubCategory = sub;
    this.selectedDept = dept;
    this.subForm.patchValue({
      name_ar: sub.name_ar || sub.name_en || "",
      name_en: sub.name_en || ""
    });
    this.showSubEditModal = true;
  }
  saveSubCategoryEdit() {
    if (this.subForm.invalid || !this.editingSubCategory)
      return;
    this.loading = true;
    this.apiService.updateSubCategory(this.editingSubCategory.id, this.subForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showSubEditModal = false;
        this.editingSubCategory = null;
        this.loadData();
      },
      error: () => this.loading = false
    });
  }
  confirmDeleteSubCategory(sub, dept) {
    const subName = sub.name_ar || sub.name_en || "";
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A",
      message: `\u0647\u0644 \u0623\u0646\u062A \u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A "${subName}" \u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645\u061F`,
      confirmText: "\u0646\u0639\u0645\u060C \u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621 \u0648\u062A\u0631\u0627\u062C\u0639",
      type: "danger",
      icon: "fa-solid fa-tags",
      accept: () => {
        this.loading = true;
        this.apiService.deleteSubCategory(sub.id).subscribe({
          next: () => {
            this.loading = false;
            this.toastService.success(`\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A "${subName}" \u0628\u0646\u062C\u0627\u062D`);
            this.loadData();
          },
          error: (err) => {
            this.loading = false;
            this.toastService.error(err.error?.message || "\u062A\u0639\u0630\u0631 \u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A");
          }
        });
      }
    });
  }
  static \u0275fac = function DepartmentsSectionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsSectionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentsSectionsComponent, selectors: [["app-departments-sections"]], decls: 135, vars: 52, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "header-title-wrapper"], [1, "header-icon-box"], [1, "fa-solid", "fa-sitemap"], [1, "subtitle"], [1, "header-actions"], ["class", "btn-glass-purple", 3, "click", 4, "ngIf"], ["class", "btn-primary-gradient", 3, "click", 4, "ngIf"], [1, "depts-grid"], ["class", "dept-card", 4, "ngFor", "ngForOf"], [3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo", "header"], [3, "ngSubmit", "formGroup"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "16px"], [1, "form-group"], [1, "fa-solid", "fa-folder", 2, "color", "var(--violet-light)", "margin-left", "4px"], [1, "required"], ["type", "text", "pInputText", "", "formControlName", "name", "placeholder", "\u0645\u062B\u0627\u0644: \u0642\u0633\u0645 \u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0648\u0627\u0644\u0635\u0648\u062A"], [1, "fa-solid", "fa-user-shield", 2, "color", "var(--violet-light)", "margin-left", "4px"], ["formControlName", "manager_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0642\u0633\u0645...", "addNewLabel", "+ \u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F \u0644\u062A\u0639\u064A\u064A\u0646\u0647 \u0643\u0645\u062F\u064A\u0631", 3, "addNew", "items"], [2, "color", "var(--text-2)", "font-size", "0.74rem", "margin-top", "3px", "display", "block"], [1, "partner-toggle-card", 3, "click"], [1, "partner-toggle-info"], [1, "fa-solid", "fa-handshake"], [1, "partner-toggle-text"], [1, "partner-toggle-title"], [1, "partner-toggle-sub"], [1, "custom-switch", 3, "click"], ["type", "checkbox", "formControlName", "has_partner", 3, "change"], [1, "switch-slider"], ["class", "partner-fields-box", "style", "background:rgba(217,119,6,0.06); padding:16px; border-radius:14px; border:1px dashed rgba(217,119,6,0.35); display:flex; flex-direction:column; gap:12px;", 4, "ngIf"], [1, "fa-solid", "fa-align-right", 2, "color", "var(--violet-light)", "margin-left", "4px"], ["pTextarea", "", "formControlName", "description", "rows", "3", "placeholder", "\u0648\u0635\u0641 \u0645\u0647\u0627\u0645 \u0648\u062A\u062E\u0635\u0635 \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645..."], [1, "dialog-footer-actions"], ["type", "button", 1, "btn-dialog-cancel", 3, "click"], ["type", "submit", 1, "btn-dialog-submit", 3, "disabled"], ["header", "\u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F \u0648\u062A\u0639\u064A\u064A\u0646 \u0642\u0633\u0645\u0647", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "14px"], ["type", "text", "pInputText", "", "formControlName", "name", "placeholder", "\u0645\u062B\u0627\u0644: \u0623\u062D\u0645\u062F \u0645\u0635\u0637\u0641\u0649"], ["type", "email", "pInputText", "", "formControlName", "email", "placeholder", "example@mediaglow.com"], ["type", "password", "pInputText", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["formControlName", "role", "optionLabel", "label", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A...", 3, "items"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "items"], [1, "form-grid-2col"], ["formControlName", "payment_type", "optionLabel", "label", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0646\u0638\u0627\u0645 \u0627\u0644\u0631\u0627\u062A\u0628...", 3, "items"], ["type", "number", "pInputText", "", "formControlName", "base_salary", "placeholder", "0"], ["type", "text", "pInputText", "", "formControlName", "name_ar", "placeholder", "\u0645\u062B\u0627\u0644: \u0641\u064A\u062F\u064A\u0648 \u0631\u064A\u0644\u0632 / Reels"], ["type", "text", "pInputText", "", "formControlName", "name_en", "placeholder", "Reels Video"], ["header", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], ["type", "text", "pInputText", "", "formControlName", "name_ar", "placeholder", "\u0645\u062B\u0627\u0644: \u062A\u0635\u0627\u0645\u064A\u0645 \u0633\u0648\u0634\u064A\u0627\u0644 \u0645\u064A\u062F\u064A\u0627..."], ["type", "text", "pInputText", "", "formControlName", "name_en", "placeholder", "Sub-category name..."], [1, "btn-glass-purple", 3, "click"], [1, "fa-solid", "fa-user-plus"], [1, "btn-primary-gradient", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "dept-card"], [1, "card-accent-bar", 3, "ngClass"], [1, "card-body"], [1, "dept-header-row"], [1, "dept-title-box"], [1, "dept-icon-badge"], [1, "fa-solid", 3, "ngClass"], ["class", "partner-pill", 4, "ngIf"], [1, "dept-desc"], [1, "manager-widget"], [1, "mgr-avatar"], [1, "mgr-details"], [1, "mgr-label"], ["class", "mgr-name", 4, "ngIf"], ["class", "mgr-empty", 3, "click", 4, "ngIf"], ["class", "btn-mgr-edit", "title", "\u062A\u063A\u064A\u064A\u0631 \u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645", 3, "click", 4, "ngIf"], [1, "section-box", "employees-box"], [1, "section-box-header"], [1, "section-title"], [1, "fa-solid", "fa-users"], ["class", "btn-box-action", 3, "click", 4, "ngIf"], [1, "chips-flex"], ["class", "emp-chip", 4, "ngFor", "ngForOf"], ["class", "empty-chips-note", 4, "ngIf"], [1, "section-box", "subcategories-box"], [1, "fa-solid", "fa-layer-group"], ["class", "sub-chip-wrapper", 4, "ngFor", "ngForOf"], ["class", "card-footer-actions", 4, "ngIf"], [1, "partner-pill"], [1, "mgr-name"], [1, "mgr-empty", 3, "click"], ["title", "\u062A\u063A\u064A\u064A\u0631 \u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645", 1, "btn-mgr-edit", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], [1, "btn-box-action", 3, "click"], [1, "emp-chip"], [1, "emp-initial"], [1, "emp-name"], [1, "empty-chips-note"], [1, "sub-chip-wrapper"], [1, "sub-chip"], [1, "fa-solid", "fa-tag"], ["class", "sub-chip-actions", 4, "ngIf"], [1, "sub-chip-actions"], ["type", "button", "title", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A", 1, "sub-action-btn", "edit", 3, "click"], [1, "fa-solid", "fa-pen"], ["type", "button", "title", "\u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A", 1, "sub-action-btn", "delete", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "card-footer-actions"], [1, "btn-action", "edit", 3, "click"], ["title", "\u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645", 1, "btn-action", "delete", 3, "click"], [1, "fa-solid", "fa-trash-can"], [1, "partner-fields-box", 2, "background", "rgba(217,119,6,0.06)", "padding", "16px", "border-radius", "14px", "border", "1px dashed rgba(217,119,6,0.35)", "display", "flex", "flex-direction", "column", "gap", "12px"], ["type", "text", "pInputText", "", "formControlName", "partner_name", "placeholder", "\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0628\u0631\u0648\u062A\u064A\u0643 \u0644\u0644\u0625\u0646\u062A\u0627\u062C"], ["type", "number", "pInputText", "", "formControlName", "partner_percentage", "placeholder", "50"], [2, "color", "var(--text-2)"]], template: function DepartmentsSectionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "h2");
      \u0275\u0275text(7, "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0629\u060C \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0641\u0631\u0639\u064A\u0629\u060C \u0648\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0643\u0648\u0627\u062F\u0631 \u0648\u0627\u0644\u0645\u062F\u0631\u0627\u0621");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275template(11, DepartmentsSectionsComponent_button_11_Template, 3, 0, "button", 7)(12, DepartmentsSectionsComponent_button_12_Template, 3, 0, "button", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275template(14, DepartmentsSectionsComponent_div_14_Template, 40, 20, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function DepartmentsSectionsComponent_Template_p_dialog_visibleChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showAddModal, $event) || (ctx.showAddModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(16, "form", 12);
      \u0275\u0275listener("ngSubmit", function DepartmentsSectionsComponent_Template_form_ngSubmit_16_listener() {
        return ctx.saveDepartment();
      });
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "label");
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21, " \u0627\u0633\u0645 \u0627\u0644\u0642\u0633\u0645 ");
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 14)(26, "label");
      \u0275\u0275element(27, "i", 18);
      \u0275\u0275text(28, " \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u062F\u064A\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "app-prime-picker-select", 19);
      \u0275\u0275listener("addNew", function DepartmentsSectionsComponent_Template_app_prime_picker_select_addNew_29_listener() {
        return ctx.openAddEmployeeModal();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "small", 20);
      \u0275\u0275text(31, "\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645 \u064A\u0645\u0646\u062D\u0647 \u0635\u0644\u0627\u062D\u064A\u0629 \u0645\u062A\u0627\u0628\u0639\u0629 \u062C\u0645\u064A\u0639 \u0635\u0641\u0642\u0627\u062A \u0648\u0645\u0647\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 21);
      \u0275\u0275listener("click", function DepartmentsSectionsComponent_Template_div_click_32_listener() {
        return ctx.togglePartnerCheckbox();
      });
      \u0275\u0275elementStart(33, "div", 22);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementStart(35, "div", 24)(36, "span", 25);
      \u0275\u0275text(37, "\u0634\u0631\u064A\u0643 \u062E\u0627\u0631\u062C\u064A (\u0634\u0631\u0627\u0643\u0629 \u0642\u0633\u0645 / \u0645\u0634\u0631\u0648\u0639 \u0645\u0634\u062A\u0631\u0643)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 26);
      \u0275\u0275text(39, "\u062A\u0641\u0639\u064A\u0644 \u0627\u0642\u062A\u0633\u0627\u0645 \u0627\u0644\u0623\u0631\u0628\u0627\u062D \u0648\u0646\u0633\u0628 \u0627\u0644\u0634\u0631\u0627\u0643\u0629 \u0645\u0639 \u0637\u0631\u0641 \u062E\u0627\u0631\u062C\u064A \u0644\u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "label", 27);
      \u0275\u0275listener("click", function DepartmentsSectionsComponent_Template_label_click_40_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(41, "input", 28);
      \u0275\u0275listener("change", function DepartmentsSectionsComponent_Template_input_change_41_listener() {
        return ctx.togglePartnerFields();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "span", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(43, DepartmentsSectionsComponent_div_43_Template, 11, 0, "div", 30);
      \u0275\u0275elementStart(44, "div", 14)(45, "label");
      \u0275\u0275element(46, "i", 31);
      \u0275\u0275text(47, " \u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0645\u0647\u0627\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "textarea", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 33)(50, "button", 34);
      \u0275\u0275listener("click", function DepartmentsSectionsComponent_Template_button_click_50_listener() {
        return ctx.showAddModal = false;
      });
      \u0275\u0275text(51, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 35);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "p-dialog", 36);
      \u0275\u0275twoWayListener("visibleChange", function DepartmentsSectionsComponent_Template_p_dialog_visibleChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showEmployeeModal, $event) || (ctx.showEmployeeModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(55, "form", 12);
      \u0275\u0275listener("ngSubmit", function DepartmentsSectionsComponent_Template_form_ngSubmit_55_listener() {
        return ctx.saveEmployee();
      });
      \u0275\u0275elementStart(56, "div", 37)(57, "div", 14)(58, "label");
      \u0275\u0275text(59, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0643\u0627\u0645\u0644 ");
      \u0275\u0275elementStart(60, "span", 16);
      \u0275\u0275text(61, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(62, "input", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 14)(64, "label");
      \u0275\u0275text(65, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
      \u0275\u0275elementStart(66, "span", 16);
      \u0275\u0275text(67, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(68, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 14)(70, "label");
      \u0275\u0275text(71, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 ");
      \u0275\u0275elementStart(72, "span", 16);
      \u0275\u0275text(73, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(74, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 14)(76, "label");
      \u0275\u0275text(77, "\u0627\u0644\u062F\u0648\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A ");
      \u0275\u0275elementStart(78, "span", 16);
      \u0275\u0275text(79, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(80, "app-prime-picker-select", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 14)(82, "label");
      \u0275\u0275text(83, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u0646\u062F \u0625\u0644\u064A\u0647 \u0627\u0644\u0645\u0648\u0638\u0641");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "app-prime-picker-select", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 43)(86, "div", 14)(87, "label");
      \u0275\u0275text(88, "\u0646\u0638\u0627\u0645 \u0627\u0644\u0631\u0627\u062A\u0628/\u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642");
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "app-prime-picker-select", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 14)(91, "label");
      \u0275\u0275text(92, "\u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A ($)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "input", 45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 33)(95, "button", 34);
      \u0275\u0275listener("click", function DepartmentsSectionsComponent_Template_button_click_95_listener() {
        return ctx.showEmployeeModal = false;
      });
      \u0275\u0275text(96, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "button", 35);
      \u0275\u0275text(98);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(99, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function DepartmentsSectionsComponent_Template_p_dialog_visibleChange_99_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showSubModal, $event) || (ctx.showSubModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(100, "form", 12);
      \u0275\u0275listener("ngSubmit", function DepartmentsSectionsComponent_Template_form_ngSubmit_100_listener() {
        return ctx.saveSubCategory();
      });
      \u0275\u0275elementStart(101, "div", 37)(102, "div", 14)(103, "label");
      \u0275\u0275text(104, "\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A) ");
      \u0275\u0275elementStart(105, "span", 16);
      \u0275\u0275text(106, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(107, "input", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 14)(109, "label");
      \u0275\u0275text(110, "\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "input", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 33)(113, "button", 34);
      \u0275\u0275listener("click", function DepartmentsSectionsComponent_Template_button_click_113_listener() {
        return ctx.showSubModal = false;
      });
      \u0275\u0275text(114, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "button", 35);
      \u0275\u0275text(116);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(117, "p-dialog", 48);
      \u0275\u0275twoWayListener("visibleChange", function DepartmentsSectionsComponent_Template_p_dialog_visibleChange_117_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showSubEditModal, $event) || (ctx.showSubEditModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(118, "form", 12);
      \u0275\u0275listener("ngSubmit", function DepartmentsSectionsComponent_Template_form_ngSubmit_118_listener() {
        return ctx.saveSubCategoryEdit();
      });
      \u0275\u0275elementStart(119, "div", 37)(120, "div", 14)(121, "label");
      \u0275\u0275text(122, "\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A) ");
      \u0275\u0275elementStart(123, "span", 16);
      \u0275\u0275text(124, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(125, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 14)(127, "label");
      \u0275\u0275text(128, "\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(129, "input", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 33)(131, "button", 34);
      \u0275\u0275listener("click", function DepartmentsSectionsComponent_Template_button_click_131_listener() {
        return ctx.showSubEditModal = false;
      });
      \u0275\u0275text(132, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "button", 35);
      \u0275\u0275text(134);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.isManagerOrAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isManagerOrAdmin());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.departments);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(48, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showAddModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body")("header", ctx.editingDeptId ? "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u0633\u0645" : "\u0625\u0646\u0634\u0627\u0621 \u0642\u0633\u0645 \u062C\u062F\u064A\u062F");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.deptForm);
      \u0275\u0275advance(13);
      \u0275\u0275property("items", ctx.employees);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.deptForm.value.has_partner);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.deptForm.value.has_partner);
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.deptForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : ctx.editingDeptId ? "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A" : "\u062D\u0641\u0638 \u0627\u0644\u0642\u0633\u0645", " ");
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(49, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.showEmployeeModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.empForm);
      \u0275\u0275advance(25);
      \u0275\u0275property("items", ctx.rolesList);
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.departments);
      \u0275\u0275advance(5);
      \u0275\u0275property("items", ctx.paymentTypesList);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.empForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629..." : "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0648\u0638\u0641", " ");
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(50, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.showSubModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body")("header", "\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u0641\u0631\u0639\u064A \u0625\u0644\u0649: " + ((ctx.selectedDept == null ? null : ctx.selectedDept.name) || ""));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.subForm);
      \u0275\u0275advance(15);
      \u0275\u0275property("disabled", ctx.subForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629..." : "\u062D\u0641\u0638 \u0648\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", " ");
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(51, _c3));
      \u0275\u0275twoWayProperty("visible", ctx.showSubEditModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.subForm);
      \u0275\u0275advance(15);
      \u0275\u0275property("disabled", ctx.subForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A", " ");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    PrimePickerSelectComponent,
    DialogModule,
    Dialog,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 28px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.header-title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.header-icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);\n  flex-shrink: 0;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n  letter-spacing: -0.3px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.86rem;\n  margin-top: 3px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-glass-purple[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--text);\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s ease;\n  font-family: inherit;\n}\n.btn-glass-purple[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.2);\n  border-color: rgba(99, 102, 241, 0.4);\n  transform: translateY(-1px);\n}\n.btn-primary-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  border: none;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);\n  transition: all 0.25s ease;\n  font-family: inherit;\n}\n.btn-primary-gradient[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.5);\n  transform: translateY(-2px);\n}\n.depts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 22px;\n}\n.dept-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dept-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-3px);\n}\n.card-accent-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n}\n.accent-0[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n}\n.accent-1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #06b6d4,\n      #3b82f6);\n}\n.accent-2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #f43f5e);\n}\n.accent-3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #06b6d4);\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex: 1;\n}\n.dept-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.dept-title-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.dept-icon-badge[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.dept-header-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 1.15rem;\n  font-weight: 800;\n  margin: 0;\n  line-height: 1.3;\n}\n.partner-pill[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  padding: 4px 10px;\n  border-radius: 100px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.dept-desc[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  line-height: 1.55;\n  margin: 0;\n}\n.manager-widget[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  padding: 10px 14px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: background 0.2s;\n}\n.manager-widget.assigned[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.05);\n  border-color: rgba(99, 102, 241, 0.18);\n}\n.mgr-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.mgr-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.mgr-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-3);\n  font-weight: 600;\n}\n.mgr-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: var(--text);\n}\n.mgr-empty[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-3);\n  font-style: italic;\n  cursor: pointer;\n}\n.mgr-empty[_ngcontent-%COMP%]:hover {\n  color: var(--violet-light);\n  text-decoration: underline;\n}\n.btn-mgr-edit[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.btn-mgr-edit[_ngcontent-%COMP%]:hover {\n  color: var(--violet-light);\n  background: rgba(99, 102, 241, 0.1);\n}\n.section-box[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.section-box-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-box-action[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  color: var(--violet-light);\n  padding: 3px 10px;\n  border-radius: 8px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-box-action[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.2);\n  color: #ffffff;\n}\n.chips-flex[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.emp-chip[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 4px 10px;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.emp-initial[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--violet);\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-name[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--text);\n}\n.sub-chip-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.sub-chip[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 5px 12px;\n  border-radius: 100px;\n  font-size: 0.78rem;\n  color: var(--text);\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s ease;\n}\n.sub-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.18);\n  border-color: rgba(99, 102, 241, 0.45);\n  color: #ffffff;\n}\n.sub-chip-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-right: 4px;\n  padding-right: 6px;\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n}\n.sub-action-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-2);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.72rem;\n  transition: all 0.2s ease;\n}\n.sub-action-btn.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.35);\n  color: #a5b4fc;\n}\n.sub-action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 63, 94, 0.35);\n  color: #fda4af;\n}\n.empty-chips-note[_ngcontent-%COMP%] {\n  color: var(--text-3);\n  font-size: 0.76rem;\n  font-style: italic;\n}\n.card-footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 4px;\n  padding-top: 14px;\n  border-top: 1px solid var(--border);\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action.edit[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet-light);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: var(--violet);\n  color: #ffffff;\n  border-color: var(--violet);\n}\n.btn-action.delete[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.1);\n  color: #fda4af;\n  border-color: rgba(244, 63, 94, 0.25);\n  padding: 9px 12px;\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: var(--rose);\n  color: #ffffff;\n  border-color: var(--rose);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.custom-select-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.custom-select-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #121224;\n  color: #fff;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.partner-toggle-card[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.04);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 14px;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.partner-toggle-card[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.partner-toggle-card.active[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.08);\n  border-color: rgba(217, 119, 6, 0.4);\n}\n.partner-toggle-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.partner-toggle-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--violet-light, #818cf8);\n}\n.partner-toggle-card.active[_ngcontent-%COMP%]   .partner-toggle-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.partner-toggle-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.partner-toggle-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.partner-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: var(--text-2);\n}\n.custom-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.custom-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.15);\n  transition: .3s;\n  border-radius: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.switch-slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: .3s;\n  border-radius: 50%;\n}\n.custom-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .switch-slider[_ngcontent-%COMP%] {\n  background-color: #6366f1;\n  border-color: #6366f1;\n}\n.custom-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .switch-slider[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\nbody.light-theme[_nghost-%COMP%]   .partner-toggle-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .partner-toggle-card[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .partner-toggle-card.active[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .partner-toggle-card.active[_ngcontent-%COMP%] {\n  background: #fffbeb !important;\n  border-color: #fde68a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .partner-toggle-title[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .partner-toggle-title[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .partner-toggle-sub[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .partner-toggle-sub[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .switch-slider[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .switch-slider[_ngcontent-%COMP%] {\n  background-color: #cbd5e1;\n  border-color: #94a3b8;\n}\n.form-grid-2col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.dialog-footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n.btn-dialog-cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-dialog-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text);\n}\n.btn-dialog-submit[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  border: none;\n  color: #ffffff;\n  padding: 9px 22px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-dialog-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n  transform: translateY(-1px);\n}\n.btn-dialog-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .crm-module-container[_ngcontent-%COMP%] {\n    padding: 18px 14px !important;\n  }\n  .module-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 14px;\n    margin-bottom: 20px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .btn-glass-purple[_ngcontent-%COMP%], \n   .btn-primary-gradient[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 12px 16px;\n  }\n  .depts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 16px;\n    gap: 14px;\n  }\n  .dept-header-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .partner-pill[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .form-grid-2col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n@media (max-width: 480px) {\n  .header-icon-box[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1.1rem;\n  }\n  .module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .card-footer-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-action.delete[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dialog-footer-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 8px;\n  }\n  .btn-dialog-cancel[_ngcontent-%COMP%], \n   .btn-dialog-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\nbody.light-theme[_nghost-%COMP%]   .crm-module-container[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .crm-module-container[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\nbody.light-theme[_nghost-%COMP%]   .header-icon-box[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .header-icon-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed) !important;\n  color: #ffffff !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-glass-purple[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-glass-purple[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #1e293b !important;\n  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05);\n}\nbody.light-theme[_nghost-%COMP%]   .btn-glass-purple[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-glass-purple[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9 !important;\n  border-color: #6366f1 !important;\n  color: #4f46e5 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .dept-card[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .dept-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .dept-card[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .dept-card[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc !important;\n  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.12) !important;\n}\nbody.light-theme[_nghost-%COMP%]   .dept-icon-badge[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .dept-icon-badge[_ngcontent-%COMP%] {\n  background: #eef2ff !important;\n  color: #4f46e5 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .partner-pill[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .partner-pill[_ngcontent-%COMP%] {\n  background: #fffbeb !important;\n  color: #b45309 !important;\n  border-color: #fde68a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .manager-widget[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .manager-widget[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #e2e8f0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .manager-widget.assigned[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .manager-widget.assigned[_ngcontent-%COMP%] {\n  background: #eef2ff !important;\n  border-color: #c7d2fe !important;\n}\nbody.light-theme[_nghost-%COMP%]   .mgr-avatar[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .mgr-avatar[_ngcontent-%COMP%] {\n  background: #e0e7ff !important;\n  color: #4338ca !important;\n}\nbody.light-theme[_nghost-%COMP%]   .mgr-label[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .mgr-label[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .mgr-name[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .mgr-name[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .mgr-empty[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .mgr-empty[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .section-box[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .section-box[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #e2e8f0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #1e293b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-box-action[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-box-action[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #c7d2fe !important;\n  color: #4f46e5 !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\nbody.light-theme[_nghost-%COMP%]   .btn-box-action[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-box-action[_ngcontent-%COMP%]:hover {\n  background: #4f46e5 !important;\n  color: #ffffff !important;\n}\nbody.light-theme[_nghost-%COMP%]   .emp-chip[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .emp-chip[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\nbody.light-theme[_nghost-%COMP%]   .emp-name[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .emp-name[_ngcontent-%COMP%] {\n  color: #1e293b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .sub-chip[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .sub-chip[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\nbody.light-theme[_nghost-%COMP%]   .empty-chips-note[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .empty-chips-note[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-action.edit[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-action.edit[_ngcontent-%COMP%] {\n  background: #eef2ff !important;\n  color: #4338ca !important;\n  border-color: #c7d2fe !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: #4f46e5 !important;\n  color: #ffffff !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-action.delete[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-action.delete[_ngcontent-%COMP%] {\n  background: #fff1f2 !important;\n  color: #e11d48 !important;\n  border-color: #fecdd3 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: #e11d48 !important;\n  color: #ffffff !important;\n}\nbody.light-theme[_nghost-%COMP%]   .dialog-footer-actions[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .dialog-footer-actions[_ngcontent-%COMP%] {\n  border-top-color: #e2e8f0 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-dialog-cancel[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-dialog-cancel[_ngcontent-%COMP%] {\n  background: #f1f5f9 !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-dialog-cancel[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-dialog-cancel[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0 !important;\n  color: #0f172a !important;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-dialog-submit[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-dialog-submit[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      #4338ca 100%) !important;\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=departments-sections.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsSectionsComponent, [{
    type: Component,
    args: [{ selector: "app-departments-sections", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      PrimePickerSelectComponent,
      DialogModule,
      InputTextModule,
      TextareaModule
    ], template: `
    <div class="crm-module-container">
      <!-- Module Header -->
      <div class="module-header">
        <div class="header-title-wrapper">
          <div class="header-icon-box">
            <i class="fa-solid fa-sitemap"></i>
          </div>
          <div>
            <h2>\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629</h2>
            <p class="subtitle">\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0629\u060C \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0641\u0631\u0639\u064A\u0629\u060C \u0648\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0643\u0648\u0627\u062F\u0631 \u0648\u0627\u0644\u0645\u062F\u0631\u0627\u0621</p>
          </div>
        </div>
        <div class="header-actions">
          <button class="btn-glass-purple" *ngIf="isManagerOrAdmin()" (click)="openAddEmployeeModal()">
            <i class="fa-solid fa-user-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F
          </button>
          <button class="btn-primary-gradient" *ngIf="isManagerOrAdmin()" (click)="openAddModal()">
            <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u062C\u062F\u064A\u062F
          </button>
        </div>
      </div>

      <!-- Departments Cards Grid -->
      <div class="depts-grid">
        <div class="dept-card" *ngFor="let dept of departments; let i = index">
          <!-- Card Top Accent Bar -->
          <div class="card-accent-bar" [ngClass]="'accent-' + (i % 4)"></div>

          <div class="card-body">
            <!-- Header Row -->
            <div class="dept-header-row">
              <div class="dept-title-box">
                <div class="dept-icon-badge">
                  <i class="fa-solid" [ngClass]="getDepartmentIcon(dept.name)"></i>
                </div>
                <h3>{{ dept.name }}</h3>
              </div>
              <span class="partner-pill" *ngIf="dept.has_partner">
                <i class="fa-solid fa-handshake"></i> {{ dept.partner_percentage }}% \u0634\u0631\u0643\u0629 / {{ 100 - dept.partner_percentage }}% \u0634\u0631\u064A\u0643
              </span>
            </div>

            <!-- Description -->
            <p class="dept-desc">{{ dept.description || '\u0642\u0633\u0645 \u062A\u0634\u063A\u064A\u0644\u064A \u0645\u062A\u0643\u0627\u0645\u0644 \u064A\u062F\u064A\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u062A\u0627\u0628\u0639\u0629.' }}</p>

            <!-- Manager Section Widget -->
            <div class="manager-widget" [class.assigned]="dept.manager">
              <div class="mgr-avatar">
                <i class="fa-solid" [ngClass]="dept.manager ? 'fa-user-shield' : 'fa-user-clock'"></i>
              </div>
              <div class="mgr-details">
                <span class="mgr-label">\u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u0633\u0624\u0648\u0644:</span>
                <span class="mgr-name" *ngIf="dept.manager">{{ dept.manager.name }}</span>
                <span class="mgr-empty" *ngIf="!dept.manager" (click)="openEditModal(dept)">\u063A\u064A\u0631 \u0645\u062D\u062F\u062F (\u0627\u0646\u0642\u0631 \u0644\u062A\u0639\u064A\u064A\u0646 \u0645\u062F\u064A\u0631)</span>
              </div>
              <button class="btn-mgr-edit" *ngIf="isManagerOrAdmin()" (click)="openEditModal(dept)" title="\u062A\u063A\u064A\u064A\u0631 \u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>

            <!-- Employees Box -->
            <div class="section-box employees-box">
              <div class="section-box-header">
                <span class="section-title">
                  <i class="fa-solid fa-users"></i> \u0627\u0644\u0645\u0648\u0638\u0641\u0648\u0646 \u0628\u0627\u0644\u0642\u0633\u0645 ({{ dept.employees?.length || 0 }})
                </span>
                <button class="btn-box-action" *ngIf="isManagerOrAdmin()" (click)="openAddEmployeeModal(dept.id)">
                  <i class="fa-solid fa-plus"></i> \u0645\u0648\u0638\u0641
                </button>
              </div>

              <div class="chips-flex">
                <div class="emp-chip" *ngFor="let emp of dept.employees">
                  <span class="emp-initial">{{ emp.name ? emp.name.charAt(0) : 'M' }}</span>
                  <span class="emp-name">{{ emp.name }}</span>
                </div>
                <div class="empty-chips-note" *ngIf="!dept.employees || dept.employees.length === 0">
                  \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0648\u0638\u0641\u0648\u0646 \u0645\u0636\u0627\u0641\u0648\u0646 \u0628\u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645 \u0628\u0639\u062F
                </div>
              </div>
            </div>

            <!-- Subcategories Box -->
            <div class="section-box subcategories-box">
              <div class="section-box-header">
                <span class="section-title">
                  <i class="fa-solid fa-layer-group"></i> \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0641\u0631\u0639\u064A\u0629 ({{ dept.sub_categories?.length || 0 }})
                </span>
                <button class="btn-box-action" *ngIf="isManagerOrAdmin()" (click)="openSubCategoryModal(dept)">
                  <i class="fa-solid fa-plus"></i> \u062A\u0635\u0646\u064A\u0641
                </button>
              </div>

              <div class="chips-flex">
                <div class="sub-chip-wrapper" *ngFor="let sub of dept.sub_categories">
                  <span class="sub-chip">
                    <i class="fa-solid fa-tag"></i> {{ sub.name_ar || sub.name_en }}
                    <span class="sub-chip-actions" *ngIf="isManagerOrAdmin()">
                      <button type="button" class="sub-action-btn edit" (click)="openEditSubCategoryModal(sub, dept)" title="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A">
                        <i class="fa-solid fa-pen"></i>
                      </button>
                      <button type="button" class="sub-action-btn delete" (click)="confirmDeleteSubCategory(sub, dept)" title="\u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A">
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </span>
                  </span>
                </div>
                <div class="empty-chips-note" *ngIf="!dept.sub_categories || dept.sub_categories.length === 0">
                  \u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0641\u0631\u0639\u064A\u0629 \u0645\u0636\u0627\u0641\u0629 \u0628\u0639\u062F
                </div>
              </div>
            </div>

            <!-- Card Actions Row -->
            <div class="card-footer-actions" *ngIf="isManagerOrAdmin()">
              <button class="btn-action edit" (click)="openEditModal(dept)">
                <i class="fa-solid fa-pen-to-square"></i> \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0633\u0645
              </button>
              <button class="btn-action delete" (click)="confirmDeleteDepartment(dept)" title="\u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add / Edit Department -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="editingDeptId ? '\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u0633\u0645' : '\u0625\u0646\u0634\u0627\u0621 \u0642\u0633\u0645 \u062C\u062F\u064A\u062F'" [style]="{ width: '92vw', maxWidth: '540px' }">
        <form [formGroup]="deptForm" (ngSubmit)="saveDepartment()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:16px;">
            <div class="form-group">
              <label><i class="fa-solid fa-folder" style="color:var(--violet-light); margin-left:4px;"></i> \u0627\u0633\u0645 \u0627\u0644\u0642\u0633\u0645 <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="\u0645\u062B\u0627\u0644: \u0642\u0633\u0645 \u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0648\u0627\u0644\u0635\u0648\u062A" />
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-user-shield" style="color:var(--violet-light); margin-left:4px;"></i> \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0645\u062F\u064A\u0631</label>
              <app-prime-picker-select
                formControlName="manager_id"
                [items]="employees"
                optionLabel="name"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0642\u0633\u0645..."
                addNewLabel="+ \u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F \u0644\u062A\u0639\u064A\u064A\u0646\u0647 \u0643\u0645\u062F\u064A\u0631"
                (addNew)="openAddEmployeeModal()"
              ></app-prime-picker-select>
              <small style="color:var(--text-2); font-size:0.74rem; margin-top:3px; display:block;">\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u062F\u064A\u0631 \u0627\u0644\u0642\u0633\u0645 \u064A\u0645\u0646\u062D\u0647 \u0635\u0644\u0627\u062D\u064A\u0629 \u0645\u062A\u0627\u0628\u0639\u0629 \u062C\u0645\u064A\u0639 \u0635\u0641\u0642\u0627\u062A \u0648\u0645\u0647\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B.</small>
            </div>

            <!-- Partnerships Toggle Switch Card -->
            <div class="partner-toggle-card" (click)="togglePartnerCheckbox()" [class.active]="deptForm.value.has_partner">
              <div class="partner-toggle-info">
                <i class="fa-solid fa-handshake"></i>
                <div class="partner-toggle-text">
                  <span class="partner-toggle-title">\u0634\u0631\u064A\u0643 \u062E\u0627\u0631\u062C\u064A (\u0634\u0631\u0627\u0643\u0629 \u0642\u0633\u0645 / \u0645\u0634\u0631\u0648\u0639 \u0645\u0634\u062A\u0631\u0643)</span>
                  <span class="partner-toggle-sub">\u062A\u0641\u0639\u064A\u0644 \u0627\u0642\u062A\u0633\u0627\u0645 \u0627\u0644\u0623\u0631\u0628\u0627\u062D \u0648\u0646\u0633\u0628 \u0627\u0644\u0634\u0631\u0627\u0643\u0629 \u0645\u0639 \u0637\u0631\u0641 \u062E\u0627\u0631\u062C\u064A \u0644\u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645</span>
                </div>
              </div>
              <label class="custom-switch" (click)="$event.stopPropagation()">
                <input type="checkbox" formControlName="has_partner" (change)="togglePartnerFields()" />
                <span class="switch-slider"></span>
              </label>
            </div>

            <div *ngIf="deptForm.value.has_partner" class="partner-fields-box" style="background:rgba(217,119,6,0.06); padding:16px; border-radius:14px; border:1px dashed rgba(217,119,6,0.35); display:flex; flex-direction:column; gap:12px;">
              <div class="form-group">
                <label>\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u062E\u0627\u0631\u062C\u064A</label>
                <input type="text" pInputText formControlName="partner_name" placeholder="\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0628\u0631\u0648\u062A\u064A\u0643 \u0644\u0644\u0625\u0646\u062A\u0627\u062C" />
              </div>
              <div class="form-group">
                <label>\u0646\u0633\u0628\u0629 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0629 (%)</label>
                <input type="number" pInputText formControlName="partner_percentage" placeholder="50" />
                <small style="color:var(--text-2);">\u062A\u064F\u0642\u0633\u0645 \u0623\u0631\u0628\u0627\u062D \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0646\u0633\u0628\u0629.</small>
              </div>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-align-right" style="color:var(--violet-light); margin-left:4px;"></i> \u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0645\u0647\u0627\u0645</label>
              <textarea pTextarea formControlName="description" rows="3" placeholder="\u0648\u0635\u0641 \u0645\u0647\u0627\u0645 \u0648\u062A\u062E\u0635\u0635 \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645..."></textarea>
            </div>
          </div>

          <!-- Dialog Footer Actions -->
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showAddModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="deptForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : (editingDeptId ? '\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A' : '\u062D\u0641\u0638 \u0627\u0644\u0642\u0633\u0645') }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Add Employee -->
      <p-dialog [(visible)]="showEmployeeModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F \u0648\u062A\u0639\u064A\u064A\u0646 \u0642\u0633\u0645\u0647" [style]="{ width: '92vw', maxWidth: '560px' }">
        <form [formGroup]="empForm" (ngSubmit)="saveEmployee()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0643\u0627\u0645\u0644 <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="\u0645\u062B\u0627\u0644: \u0623\u062D\u0645\u062F \u0645\u0635\u0637\u0641\u0649" />
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="example@mediaglow.com" />
            </div>
            <div class="form-group">
              <label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 <span class="required">*</span></label>
              <input type="password" pInputText formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u062F\u0648\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A <span class="required">*</span></label>
              <app-prime-picker-select
                formControlName="role"
                [items]="rolesList"
                optionLabel="label"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A..."
              ></app-prime-picker-select>
            </div>
            <div class="form-group">
              <label>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u0633\u0646\u062F \u0625\u0644\u064A\u0647 \u0627\u0644\u0645\u0648\u0638\u0641</label>
              <app-prime-picker-select
                formControlName="department_id"
                [items]="departments"
                optionLabel="name"
                optionValue="id"
                placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645..."
              ></app-prime-picker-select>
            </div>

            <div class="form-grid-2col">
              <div class="form-group">
                <label>\u0646\u0638\u0627\u0645 \u0627\u0644\u0631\u0627\u062A\u0628/\u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642</label>
                <app-prime-picker-select
                  formControlName="payment_type"
                  [items]="paymentTypesList"
                  optionLabel="label"
                  optionValue="id"
                  placeholder="\u0627\u062E\u062A\u0631 \u0646\u0638\u0627\u0645 \u0627\u0644\u0631\u0627\u062A\u0628..."
                ></app-prime-picker-select>
              </div>
              <div class="form-group">
                <label>\u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064A ($)</label>
                <input type="number" pInputText formControlName="base_salary" placeholder="0" />
              </div>
            </div>
          </div>

          <!-- Dialog Footer Actions -->
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showEmployeeModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="empForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629...' : '\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0648\u0638\u0641' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Add Sub-category -->
      <p-dialog [(visible)]="showSubModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" [header]="'\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u0641\u0631\u0639\u064A \u0625\u0644\u0649: ' + (selectedDept?.name || '')" [style]="{ width: '92vw', maxWidth: '480px' }">
        <form [formGroup]="subForm" (ngSubmit)="saveSubCategory()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A) <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name_ar" placeholder="\u0645\u062B\u0627\u0644: \u0641\u064A\u062F\u064A\u0648 \u0631\u064A\u0644\u0632 / Reels" />
            </div>
            <div class="form-group">
              <label>\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
              <input type="text" pInputText formControlName="name_en" placeholder="Reels Video" />
            </div>
          </div>

          <!-- Dialog Footer Actions -->
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showSubModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="subForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629...' : '\u062D\u0641\u0638 \u0648\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641' }}
            </button>
          </div>
        </form>
      </p-dialog>

      <!-- PrimeNG Dialog: Edit SubCategory -->
      <p-dialog [(visible)]="showSubEditModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A" [style]="{ width: '92vw', maxWidth: '460px' }">
        <form [formGroup]="subForm" (ngSubmit)="saveSubCategoryEdit()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group">
              <label>\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0639\u0631\u0628\u064A) <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name_ar" placeholder="\u0645\u062B\u0627\u0644: \u062A\u0635\u0627\u0645\u064A\u0645 \u0633\u0648\u0634\u064A\u0627\u0644 \u0645\u064A\u062F\u064A\u0627..." />
            </div>
            <div class="form-group">
              <label>\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0641\u0631\u0639\u064A (\u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A)</label>
              <input type="text" pInputText formControlName="name_en" placeholder="Sub-category name..." />
            </div>
          </div>
          <div class="dialog-footer-actions">
            <button type="button" class="btn-dialog-cancel" (click)="showSubEditModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-dialog-submit" [disabled]="subForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A' }}
            </button>
          </div>
        </form>
      </p-dialog>
    </div>
  `, styles: ['/* angular:styles/component:css;9463866616d0b4778784f968f3803fb83c289f8538e142aef01729499f1a8c77;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/departments/departments-sections.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 28px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.header-title-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.header-icon-box {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);\n  flex-shrink: 0;\n}\n.module-header h2 {\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0;\n  letter-spacing: -0.3px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.86rem;\n  margin-top: 3px;\n}\n.header-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-glass-purple {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  color: var(--text);\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.25s ease;\n  font-family: inherit;\n}\n.btn-glass-purple:hover {\n  background: rgba(99, 102, 241, 0.2);\n  border-color: rgba(99, 102, 241, 0.4);\n  transform: translateY(-1px);\n}\n.btn-primary-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  border: none;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);\n  transition: all 0.25s ease;\n  font-family: inherit;\n}\n.btn-primary-gradient:hover {\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.5);\n  transform: translateY(-2px);\n}\n.depts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 22px;\n}\n.dept-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dept-card:hover {\n  border-color: var(--border-v);\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-3px);\n}\n.card-accent-bar {\n  height: 4px;\n  width: 100%;\n}\n.accent-0 {\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n}\n.accent-1 {\n  background:\n    linear-gradient(\n      90deg,\n      #06b6d4,\n      #3b82f6);\n}\n.accent-2 {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #f43f5e);\n}\n.accent-3 {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #06b6d4);\n}\n.card-body {\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex: 1;\n}\n.dept-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.dept-title-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.dept-icon-badge {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.dept-header-row h3 {\n  color: var(--text);\n  font-size: 1.15rem;\n  font-weight: 800;\n  margin: 0;\n  line-height: 1.3;\n}\n.partner-pill {\n  font-size: 0.7rem;\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  padding: 4px 10px;\n  border-radius: 100px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.dept-desc {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  line-height: 1.55;\n  margin: 0;\n}\n.manager-widget {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  padding: 10px 14px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: background 0.2s;\n}\n.manager-widget.assigned {\n  background: rgba(99, 102, 241, 0.05);\n  border-color: rgba(99, 102, 241, 0.18);\n}\n.mgr-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--violet-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.mgr-details {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.mgr-label {\n  font-size: 0.7rem;\n  color: var(--text-3);\n  font-weight: 600;\n}\n.mgr-name {\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: var(--text);\n}\n.mgr-empty {\n  font-size: 0.8rem;\n  color: var(--text-3);\n  font-style: italic;\n  cursor: pointer;\n}\n.mgr-empty:hover {\n  color: var(--violet-light);\n  text-decoration: underline;\n}\n.btn-mgr-edit {\n  background: transparent;\n  border: none;\n  color: var(--text-3);\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.btn-mgr-edit:hover {\n  color: var(--violet-light);\n  background: rgba(99, 102, 241, 0.1);\n}\n.section-box {\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.section-box-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.section-title {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-box-action {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  color: var(--violet-light);\n  padding: 3px 10px;\n  border-radius: 8px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-box-action:hover {\n  background: rgba(99, 102, 241, 0.2);\n  color: #ffffff;\n}\n.chips-flex {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.emp-chip {\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 4px 10px;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.emp-initial {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--violet);\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-name {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--text);\n}\n.sub-chip-wrapper {\n  display: inline-flex;\n}\n.sub-chip {\n  background: rgba(99, 102, 241, 0.08);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 5px 12px;\n  border-radius: 100px;\n  font-size: 0.78rem;\n  color: var(--text);\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s ease;\n}\n.sub-chip:hover {\n  background: rgba(99, 102, 241, 0.18);\n  border-color: rgba(99, 102, 241, 0.45);\n  color: #ffffff;\n}\n.sub-chip-actions {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-right: 4px;\n  padding-right: 6px;\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n}\n.sub-action-btn {\n  background: transparent;\n  border: none;\n  color: var(--text-2);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.72rem;\n  transition: all 0.2s ease;\n}\n.sub-action-btn.edit:hover {\n  background: rgba(99, 102, 241, 0.35);\n  color: #a5b4fc;\n}\n.sub-action-btn.delete:hover {\n  background: rgba(244, 63, 94, 0.35);\n  color: #fda4af;\n}\n.empty-chips-note {\n  color: var(--text-3);\n  font-size: 0.76rem;\n  font-style: italic;\n}\n.card-footer-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 4px;\n  padding-top: 14px;\n  border-top: 1px solid var(--border);\n}\n.btn-action {\n  padding: 9px 14px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action.edit {\n  flex: 1;\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--violet-light);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.btn-action.edit:hover {\n  background: var(--violet);\n  color: #ffffff;\n  border-color: var(--violet);\n}\n.btn-action.delete {\n  background: rgba(244, 63, 94, 0.1);\n  color: #fda4af;\n  border-color: rgba(244, 63, 94, 0.25);\n  padding: 9px 12px;\n}\n.btn-action.delete:hover {\n  background: var(--rose);\n  color: #ffffff;\n  border-color: var(--rose);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input,\n.form-group textarea,\n.custom-select-input {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.custom-select-input option {\n  background: #121224;\n  color: #fff;\n}\n.required {\n  color: var(--rose-light);\n}\n.partner-toggle-card {\n  background: rgba(99, 102, 241, 0.04);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 14px;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.partner-toggle-card:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.35);\n}\n.partner-toggle-card.active {\n  background: rgba(217, 119, 6, 0.08);\n  border-color: rgba(217, 119, 6, 0.4);\n}\n.partner-toggle-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.partner-toggle-info i {\n  font-size: 1.2rem;\n  color: var(--violet-light, #818cf8);\n}\n.partner-toggle-card.active .partner-toggle-info i {\n  color: #f59e0b;\n}\n.partner-toggle-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.partner-toggle-title {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.partner-toggle-sub {\n  font-size: 0.74rem;\n  color: var(--text-2);\n}\n.custom-switch {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.custom-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.15);\n  transition: .3s;\n  border-radius: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.switch-slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: .3s;\n  border-radius: 50%;\n}\n.custom-switch input:checked + .switch-slider {\n  background-color: #6366f1;\n  border-color: #6366f1;\n}\n.custom-switch input:checked + .switch-slider:before {\n  transform: translateX(20px);\n}\n:host-context(body.light-theme) .partner-toggle-card {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n:host-context(body.light-theme) .partner-toggle-card.active {\n  background: #fffbeb !important;\n  border-color: #fde68a !important;\n}\n:host-context(body.light-theme) .partner-toggle-title {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .partner-toggle-sub {\n  color: #64748b !important;\n}\n:host-context(body.light-theme) .switch-slider {\n  background-color: #cbd5e1;\n  border-color: #94a3b8;\n}\n.form-grid-2col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.dialog-footer-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n.btn-dialog-cancel {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-dialog-cancel:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text);\n}\n.btn-dialog-submit {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  border: none;\n  color: #ffffff;\n  padding: 9px 22px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-dialog-submit:hover:not(:disabled) {\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n  transform: translateY(-1px);\n}\n.btn-dialog-submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .crm-module-container {\n    padding: 18px 14px !important;\n  }\n  .module-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 14px;\n    margin-bottom: 20px;\n  }\n  .header-actions {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .btn-glass-purple,\n  .btn-primary-gradient {\n    width: 100%;\n    justify-content: center;\n    padding: 12px 16px;\n  }\n  .depts-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .card-body {\n    padding: 16px;\n    gap: 14px;\n  }\n  .dept-header-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .partner-pill {\n    align-self: flex-start;\n  }\n  .form-grid-2col {\n    grid-template-columns: 1fr !important;\n  }\n}\n@media (max-width: 480px) {\n  .header-icon-box {\n    width: 40px;\n    height: 40px;\n    font-size: 1.1rem;\n  }\n  .module-header h2 {\n    font-size: 1.2rem;\n  }\n  .subtitle {\n    font-size: 0.78rem;\n  }\n  .card-footer-actions {\n    flex-direction: column;\n  }\n  .btn-action.delete {\n    width: 100%;\n  }\n  .dialog-footer-actions {\n    flex-direction: column-reverse;\n    gap: 8px;\n  }\n  .btn-dialog-cancel,\n  .btn-dialog-submit {\n    width: 100%;\n    text-align: center;\n  }\n}\n:host-context(body.light-theme) .crm-module-container {\n  background: #f8fafc !important;\n}\n:host-context(body.light-theme) .header-icon-box {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed) !important;\n  color: #ffffff !important;\n}\n:host-context(body.light-theme) .btn-glass-purple {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #1e293b !important;\n  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05);\n}\n:host-context(body.light-theme) .btn-glass-purple:hover {\n  background: #f1f5f9 !important;\n  border-color: #6366f1 !important;\n  color: #4f46e5 !important;\n}\n:host-context(body.light-theme) .dept-card {\n  background: #ffffff !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;\n}\n:host-context(body.light-theme) .dept-card:hover {\n  border-color: #a5b4fc !important;\n  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.12) !important;\n}\n:host-context(body.light-theme) .dept-icon-badge {\n  background: #eef2ff !important;\n  color: #4f46e5 !important;\n}\n:host-context(body.light-theme) .partner-pill {\n  background: #fffbeb !important;\n  color: #b45309 !important;\n  border-color: #fde68a !important;\n}\n:host-context(body.light-theme) .manager-widget {\n  background: #f8fafc !important;\n  border-color: #e2e8f0 !important;\n}\n:host-context(body.light-theme) .manager-widget.assigned {\n  background: #eef2ff !important;\n  border-color: #c7d2fe !important;\n}\n:host-context(body.light-theme) .mgr-avatar {\n  background: #e0e7ff !important;\n  color: #4338ca !important;\n}\n:host-context(body.light-theme) .mgr-label {\n  color: #64748b !important;\n}\n:host-context(body.light-theme) .mgr-name {\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .mgr-empty {\n  color: #64748b !important;\n}\n:host-context(body.light-theme) .section-box {\n  background: #f8fafc !important;\n  border-color: #e2e8f0 !important;\n}\n:host-context(body.light-theme) .section-title {\n  color: #1e293b !important;\n}\n:host-context(body.light-theme) .btn-box-action {\n  background: #ffffff !important;\n  border-color: #c7d2fe !important;\n  color: #4f46e5 !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n:host-context(body.light-theme) .btn-box-action:hover {\n  background: #4f46e5 !important;\n  color: #ffffff !important;\n}\n:host-context(body.light-theme) .emp-chip {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n:host-context(body.light-theme) .emp-name {\n  color: #1e293b !important;\n}\n:host-context(body.light-theme) .sub-chip {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n:host-context(body.light-theme) .empty-chips-note {\n  color: #64748b !important;\n}\n:host-context(body.light-theme) .btn-action.edit {\n  background: #eef2ff !important;\n  color: #4338ca !important;\n  border-color: #c7d2fe !important;\n}\n:host-context(body.light-theme) .btn-action.edit:hover {\n  background: #4f46e5 !important;\n  color: #ffffff !important;\n}\n:host-context(body.light-theme) .btn-action.delete {\n  background: #fff1f2 !important;\n  color: #e11d48 !important;\n  border-color: #fecdd3 !important;\n}\n:host-context(body.light-theme) .btn-action.delete:hover {\n  background: #e11d48 !important;\n  color: #ffffff !important;\n}\n:host-context(body.light-theme) .dialog-footer-actions {\n  border-top-color: #e2e8f0 !important;\n}\n:host-context(body.light-theme) .btn-dialog-cancel {\n  background: #f1f5f9 !important;\n  border-color: #cbd5e1 !important;\n  color: #334155 !important;\n}\n:host-context(body.light-theme) .btn-dialog-cancel:hover {\n  background: #e2e8f0 !important;\n  color: #0f172a !important;\n}\n:host-context(body.light-theme) .btn-dialog-submit {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      #4338ca 100%) !important;\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=departments-sections.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentsSectionsComponent, { className: "DepartmentsSectionsComponent", filePath: "src/app/components/departments/departments-sections.component.ts", lineNumber: 647 });
})();
export {
  DepartmentsSectionsComponent
};
//# sourceMappingURL=chunk-FXBARE7Y.js.map
