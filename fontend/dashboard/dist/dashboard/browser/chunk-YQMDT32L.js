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
  NgModel,
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
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CK3LQYPJ.js";

// src/app/components/tasks/tasks-board.component.ts
function TasksBoardComponent_div_12_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r2.deal.title);
  }
}
function TasksBoardComponent_div_12_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r2.sub_category.name_ar);
  }
}
function TasksBoardComponent_div_12_div_7_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r2.scope);
  }
}
function TasksBoardComponent_div_12_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "small");
    \u0275\u0275text(3, "\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "small");
    \u0275\u0275text(8, "\u0623\u062C\u0631 \u0627\u0644\u0645\u0648\u0638\u0641:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", task_r2.client_price, " EGP");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", task_r2.employee_price, " EGP");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u0647\u0627\u0645\u0634 \u0627\u0644\u0634\u0631\u0643\u0629: +", task_r2.client_price - task_r2.employee_price, " EGP ");
  }
}
function TasksBoardComponent_div_12_div_7_div_8_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 37);
    \u0275\u0275listener("click", function TasksBoardComponent_div_12_div_7_div_8_img_1_Template_img_click_0_listener($event) {
      const img_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.expandImage(img_r5.file_url, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r5 = ctx.$implicit;
    \u0275\u0275property("src", img_r5.file_url, \u0275\u0275sanitizeUrl);
  }
}
function TasksBoardComponent_div_12_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, TasksBoardComponent_div_12_div_7_div_8_img_1_Template, 1, 1, "img", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getImageAttachments(task_r2));
  }
}
function TasksBoardComponent_div_12_div_7_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    \u0275\u0275property("title", u_r6.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.name.charAt(0));
  }
}
function TasksBoardComponent_div_12_div_7_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", task_r2.subtasks_count, " \u0641\u0631\u0639\u064A\u0629 ");
  }
}
function TasksBoardComponent_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function TasksBoardComponent_div_12_div_7_Template_div_click_0_listener() {
      const task_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTaskDetails(task_r2));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275template(2, TasksBoardComponent_div_12_div_7_span_2_Template, 2, 1, "span", 19)(3, TasksBoardComponent_div_12_div_7_span_3_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TasksBoardComponent_div_12_div_7_p_6_Template, 2, 1, "p", 22)(7, TasksBoardComponent_div_12_div_7_div_7_Template, 13, 3, "div", 23)(8, TasksBoardComponent_div_12_div_7_div_8_Template, 2, 1, "div", 24);
    \u0275\u0275elementStart(9, "div", 25)(10, "div", 26);
    \u0275\u0275template(11, TasksBoardComponent_div_12_div_7_span_11_Template, 2, 2, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, TasksBoardComponent_div_12_div_7_div_12_Template, 3, 1, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", task_r2.deal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r2.sub_category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r2.scope);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r2.client_price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getImageAttachments(task_r2).length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", task_r2.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r2.subtasks_count > 0);
  }
}
function TasksBoardComponent_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 ");
    \u0275\u0275elementEnd();
  }
}
function TasksBoardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275template(7, TasksBoardComponent_div_12_div_7_Template, 13, 8, "div", 15)(8, TasksBoardComponent_div_12_div_8_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", col_r7.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getTasksForColumn(col_r7.key).length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getTasksForColumn(col_r7.key));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getTasksForColumn(col_r7.key).length === 0);
  }
}
function TasksBoardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "h3");
    \u0275\u0275element(4, "i", 45);
    \u0275\u0275text(5, " \u0625\u0646\u0634\u0627\u0621 \u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function TasksBoardComponent_div_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCreateModal = false);
    });
    \u0275\u0275element(7, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 48);
    \u0275\u0275listener("ngSubmit", function TasksBoardComponent_div_13_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTask());
    });
    \u0275\u0275elementStart(9, "div", 49)(10, "div", 50)(11, "label");
    \u0275\u0275text(12, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 ");
    \u0275\u0275elementStart(13, "span", 51);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 53)(17, "label");
    \u0275\u0275text(18, "\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0640 \u0635\u0641\u0642\u0629 (Deal)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "app-prime-picker-select", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 53)(21, "label");
    \u0275\u0275text(22, "\u0627\u0644\u0642\u0633\u0645 \u0648\u0627\u0644\u0645\u0631\u0643\u0632");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "app-prime-picker-select", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 53)(25, "label");
    \u0275\u0275text(26, "\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644 \u0644\u0644\u0645\u0647\u0645\u0629 (Client Price)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 56);
    \u0275\u0275listener("input", function TasksBoardComponent_div_13_Template_input_input_27_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.computeMargin());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 53)(29, "label");
    \u0275\u0275text(30, "\u0645\u0633\u062A\u062D\u0642 \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0645\u0646\u0641\u0630 (Employee Price)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 57);
    \u0275\u0275listener("input", function TasksBoardComponent_div_13_Template_input_input_31_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.computeMargin());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 58)(33, "label");
    \u0275\u0275text(34, "\u0647\u0627\u0645\u0634 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A (Company Margin Auto-Calculated):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 59);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "small", 60);
    \u0275\u0275text(38, "\u064A\u062A\u0645 \u062D\u0633\u0627\u0628\u0647 \u0622\u0644\u064A\u0627\u064B \u0628\u062F\u0642\u0629: margin = client_price - employee_price \u062F\u0648\u0646 \u0625\u062F\u062E\u0627\u0644 \u064A\u062F\u0648\u064A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 53)(40, "label");
    \u0275\u0275text(41, "\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0639\u0645\u0644 \u0628\u0627\u0644\u062E\u0637 (Status Pipeline)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 61)(43, "option", 62);
    \u0275\u0275text(44, "\u062C\u062F\u064A\u062F (New)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 63);
    \u0275\u0275text(46, "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630 (In Progress)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 64);
    \u0275\u0275text(48, "\u0635\u0627\u0646\u0639 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 (Content Creator)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 65);
    \u0275\u0275text(50, "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 (In Review)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 66);
    \u0275\u0275text(52, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644 (Client Feedback)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 67);
    \u0275\u0275text(54, "\u0645\u0643\u062A\u0645\u0644 (Done)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 53)(56, "label");
    \u0275\u0275text(57, "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "select", 68)(59, "option", 69);
    \u0275\u0275text(60, "\u0645\u0646\u062E\u0641\u0636\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 70);
    \u0275\u0275text(62, "\u0645\u062A\u0648\u0633\u0637\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 71);
    \u0275\u0275text(64, "\u0639\u0627\u0644\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 72);
    \u0275\u0275text(66, "\u0639\u0627\u062C\u0644\u0629 \u062C\u062F\u0627\u064B");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 50)(68, "label");
    \u0275\u0275text(69, "\u0646\u0637\u0627\u0642 \u0627\u0644\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 (Agreed Scope)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "textarea", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 74)(72, "button", 75);
    \u0275\u0275listener("click", function TasksBoardComponent_div_13_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCreateModal = false);
    });
    \u0275\u0275text(73, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 76);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r2.taskForm);
    \u0275\u0275advance(11);
    \u0275\u0275property("items", ctx_r2.deals);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r2.departments);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("+", ctx_r2.computedMarginVal, " EGP");
    \u0275\u0275advance(38);
    \u0275\u0275property("disabled", ctx_r2.taskForm.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0648\u0646\u0634\u0631 \u0627\u0644\u0645\u0647\u0645\u0629", " ");
  }
}
function TasksBoardComponent_div_14_div_33_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 99);
    \u0275\u0275listener("click", function TasksBoardComponent_div_14_div_33_img_1_Template_img_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const att_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expandImage(att_r11.file_url, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", att_r11.file_url, \u0275\u0275sanitizeUrl);
  }
}
function TasksBoardComponent_div_14_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "i", 101);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const att_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(att_r11.file_name || "\u0645\u0633\u062A\u0646\u062F");
  }
}
function TasksBoardComponent_div_14_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275template(1, TasksBoardComponent_div_14_div_33_img_1_Template, 1, 1, "img", 97)(2, TasksBoardComponent_div_14_div_33_div_2_Template, 4, 1, "div", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", att_r11.is_image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !att_r11.is_image);
  }
}
function TasksBoardComponent_div_14_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 104);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 105);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((note_r13.user == null ? null : note_r13.user.name) || "\u0645\u0633\u062A\u062E\u062F\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(note_r13.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, note_r13.created_at, "short"));
  }
}
function TasksBoardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 77)(2, "div", 44)(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 46);
    \u0275\u0275listener("click", function TasksBoardComponent_div_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedTask = null);
    });
    \u0275\u0275element(9, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 79)(11, "div", 80)(12, "div", 81)(13, "div", 82)(14, "small");
    \u0275\u0275text(15, "\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h4");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 82)(19, "small");
    \u0275\u0275text(20, "\u0623\u062C\u0631 \u0627\u0644\u0645\u0648\u0638\u0641:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h4");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 83)(24, "small");
    \u0275\u0275text(25, "\u0647\u0627\u0645\u0634 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h4");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 84)(29, "h4");
    \u0275\u0275element(30, "i", 85);
    \u0275\u0275text(31, " \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0635\u0648\u0631 Inline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 86);
    \u0275\u0275template(33, TasksBoardComponent_div_14_div_33_Template, 3, 2, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 88)(35, "input", 89, 0);
    \u0275\u0275listener("change", function TasksBoardComponent_div_14_Template_input_change_35_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 75);
    \u0275\u0275listener("click", function TasksBoardComponent_div_14_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r9);
      const fileInput_r12 = \u0275\u0275reference(36);
      return \u0275\u0275resetView(fileInput_r12.click());
    });
    \u0275\u0275element(38, "i", 90);
    \u0275\u0275text(39, " \u0631\u0641\u0639 \u0645\u0631\u0641\u0642 / \u0635\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 84)(41, "h4");
    \u0275\u0275element(42, "i", 91);
    \u0275\u0275text(43, " \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0648\u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062A (@mentions)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 92);
    \u0275\u0275template(45, TasksBoardComponent_div_14_div_45_Template, 8, 6, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 94)(47, "textarea", 95);
    \u0275\u0275twoWayListener("ngModelChange", function TasksBoardComponent_div_14_Template_textarea_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newNoteText, $event) || (ctx_r2.newNoteText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 5);
    \u0275\u0275listener("click", function TasksBoardComponent_div_14_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitNote());
    });
    \u0275\u0275text(49, "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u0639\u0644\u064A\u0642");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTask.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.selectedTask.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedTask.status);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedTask.client_price, " EGP");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedTask.employee_price, " EGP");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", ctx_r2.selectedTask.client_price - ctx_r2.selectedTask.employee_price, " EGP");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.selectedTask.attachments);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r2.selectedTask.notes);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newNoteText);
  }
}
function TasksBoardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275listener("click", function TasksBoardComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandedImageUrl = null);
    });
    \u0275\u0275element(1, "img", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.expandedImageUrl, \u0275\u0275sanitizeUrl);
  }
}
var TasksBoardComponent = class _TasksBoardComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  tasks = [];
  deals = [];
  departments = [];
  columns = [
    { key: "new", title: "New" },
    { key: "in_progress", title: "In Progress" },
    { key: "content_creator", title: "Content Creation" },
    { key: "in_review", title: "In Review" },
    { key: "client_feedback", title: "Client Feedback" },
    { key: "done", title: "Completed" }
  ];
  showCreateModal = false;
  selectedTask = null;
  expandedImageUrl = null;
  newNoteText = "";
  computedMarginVal = 0;
  loading = false;
  taskForm;
  ngOnInit() {
    this.initForm();
    this.loadData();
  }
  initForm() {
    this.taskForm = this.fb.group({
      title: ["", Validators.required],
      deal_id: [null],
      department_id: [null],
      client_price: [0],
      employee_price: [0],
      status: ["new", Validators.required],
      priority: ["medium", Validators.required],
      scope: [""]
    });
  }
  loadData() {
    this.apiService.getTasks({ parents_only: "true" }).subscribe((res) => this.tasks = res || []);
    this.apiService.getDeals().subscribe((res) => this.deals = res || []);
    this.apiService.getDepartments().subscribe((res) => this.departments = res || []);
  }
  getTasksForColumn(colKey) {
    return this.tasks.filter((t) => t.status === colKey);
  }
  computeMargin() {
    const cp = Number(this.taskForm.value.client_price || 0);
    const ep = Number(this.taskForm.value.employee_price || 0);
    this.computedMarginVal = Math.max(0, cp - ep);
  }
  openCreateModal() {
    this.taskForm.reset({ status: "new", priority: "medium", client_price: 0, employee_price: 0 });
    this.computedMarginVal = 0;
    this.showCreateModal = true;
  }
  saveTask() {
    if (this.taskForm.invalid)
      return;
    this.loading = true;
    this.apiService.createTask(this.taskForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showCreateModal = false;
        this.loadData();
      },
      error: () => this.loading = false
    });
  }
  openTaskDetails(task) {
    this.selectedTask = task;
  }
  getImageAttachments(task) {
    if (!task.attachments)
      return [];
    return task.attachments.filter((a) => a.is_image || a.file_type === "image");
  }
  expandImage(url, event) {
    event.stopPropagation();
    this.expandedImageUrl = url;
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file && this.selectedTask) {
      const formData = new FormData();
      formData.append("file", file);
      this.apiService.addTaskAttachment(this.selectedTask.id, formData).subscribe((res) => {
        if (res.data) {
          if (!this.selectedTask.attachments)
            this.selectedTask.attachments = [];
          this.selectedTask.attachments.push(res.data);
        }
      });
    }
  }
  submitNote() {
    if (!this.newNoteText.trim() || !this.selectedTask)
      return;
    this.apiService.addTaskNote(this.selectedTask.id, this.newNoteText).subscribe((res) => {
      if (res.data) {
        if (!this.selectedTask.notes)
          this.selectedTask.notes = [];
        this.selectedTask.notes.push(res.data);
        this.newNoteText = "";
      }
    });
  }
  static \u0275fac = function TasksBoardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksBoardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksBoardComponent, selectors: [["app-tasks-board"]], decls: 16, vars: 4, consts: [["fileInput", ""], [1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-list-check", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "kanban-pipeline"], ["class", "kanban-column", 4, "ngFor", "ngForOf"], ["class", "crm-modal-backdrop", 4, "ngIf"], ["class", "lightbox-overlay", 3, "click", 4, "ngIf"], [1, "kanban-column"], [1, "column-header", 3, "ngClass"], [1, "count-badge"], [1, "column-body"], ["class", "task-card glass-panel", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-column", 4, "ngIf"], [1, "task-card", "glass-panel", 3, "click"], [1, "card-top"], ["class", "deal-tag", 4, "ngIf"], ["class", "subcat-tag", 4, "ngIf"], [1, "task-title"], ["class", "task-desc", 4, "ngIf"], ["class", "margin-row", 4, "ngIf"], ["class", "attachments-preview-grid", 4, "ngIf"], [1, "card-footer"], [1, "assigned-users"], ["class", "avatar-circle", 3, "title", 4, "ngFor", "ngForOf"], ["class", "subtask-indicator", 4, "ngIf"], [1, "deal-tag"], [1, "subcat-tag"], [1, "task-desc"], [1, "margin-row"], [1, "price-item"], [1, "margin-badge"], [1, "attachments-preview-grid"], ["class", "inline-thumb", "alt", "Attachment Preview", 3, "src", "click", 4, "ngFor", "ngForOf"], ["alt", "Attachment Preview", 1, "inline-thumb", 3, "click", "src"], [1, "avatar-circle", 3, "title"], [1, "subtask-indicator"], [1, "fa-solid", "fa-diagram-project"], [1, "empty-column"], [1, "crm-modal-backdrop"], [1, "crm-modal-card", "glass-panel", "wide-modal"], [1, "modal-header"], [1, "fa-solid", "fa-plus", "text-orange"], [1, "close-btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "formControlName", "title", "placeholder", "\u0645\u062B\u0627\u0644: \u062A\u0635\u0648\u064A\u0631 \u0648\u062A\u0639\u062F\u064A\u0644 20 \u0641\u064A\u062F\u064A\u0648 \u0631\u064A\u0644\u0632"], [1, "form-group"], ["formControlName", "deal_id", "optionLabel", "title", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0642\u0629...", 3, "items"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "items"], ["type", "number", "formControlName", "client_price", "placeholder", "120", 3, "input"], ["type", "number", "formControlName", "employee_price", "placeholder", "100", 3, "input"], [1, "form-group", "full-width", "margin-calc-box"], [1, "calculated-margin-val"], [1, "text-muted"], ["formControlName", "status"], ["value", "new"], ["value", "in_progress"], ["value", "content_creator"], ["value", "in_review"], ["value", "client_feedback"], ["value", "done"], ["formControlName", "priority"], ["value", "low"], ["value", "medium"], ["value", "high"], ["value", "urgent"], ["formControlName", "scope", "rows", "2", "placeholder", "\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0645\u0633\u0628\u0642\u0627\u064B \u0645\u0646 \u0627\u0644\u0639\u0642\u062F..."], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-glass", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "crm-modal-card", "glass-panel", "extra-wide-modal"], [1, "badge", 3, "ngClass"], [1, "task-detail-grid"], [1, "detail-main"], [1, "pricing-banner", "glass-panel"], [1, "banner-item"], [1, "banner-item", "margin-highlight"], [1, "detail-section"], [1, "fa-solid", "fa-images", "text-orange"], [1, "image-previews-container"], ["class", "img-preview-box", 4, "ngFor", "ngForOf"], [1, "upload-box"], ["type", "file", 2, "display", "none", 3, "change"], [1, "fa-solid", "fa-upload"], [1, "fa-solid", "fa-comments", "text-orange"], [1, "notes-thread"], ["class", "note-item", 4, "ngFor", "ngForOf"], [1, "add-note-box"], ["placeholder", "\u0627\u0643\u062A\u0628 \u062A\u0639\u0644\u064A\u0642\u0627\u064B... \u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 @\u0627\u0633\u0645_\u0627\u0644\u0645\u0648\u0638\u0641 \u0644\u062A\u0646\u0628\u064A\u0647\u0647 \u0641\u0648\u0631\u0627", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "img-preview-box"], ["class", "inline-preview-img", 3, "src", "click", 4, "ngIf"], ["class", "file-doc-box", 4, "ngIf"], [1, "inline-preview-img", 3, "click", "src"], [1, "file-doc-box"], [1, "fa-solid", "fa-file-lines"], [1, "note-item"], [1, "note-author", "font-bold"], [1, "note-text"], [1, "note-date"], [1, "lightbox-overlay", 3, "click"], [1, "lightbox-img", 3, "src"]], template: function TasksBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, " Task Board & Pipeline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Workflow management, auto-calculated margins, inline attachments & team mentions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function TasksBoardComponent_Template_button_click_8_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, " Add New Task ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275template(12, TasksBoardComponent_div_12_Template, 9, 5, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, TasksBoardComponent_div_13_Template, 76, 6, "div", 9)(14, TasksBoardComponent_div_14_Template, 50, 9, "div", 9)(15, TasksBoardComponent_div_15_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.columns);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCreateModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTask);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expandedImageUrl);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, PrimePickerSelectComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.kanban-pipeline[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  overflow-x: auto;\n  padding-bottom: 14px;\n  align-items: flex-start;\n  -webkit-overflow-scrolling: touch;\n}\n.kanban-column[_ngcontent-%COMP%] {\n  flex: 0 0 270px;\n  min-width: 270px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 180px);\n  overflow: hidden;\n  transition: border-color 0.2s;\n}\n.kanban-column[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n}\n.column-header[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 3px solid transparent;\n  font-size: 0.84rem;\n  background: rgba(0, 0, 0, 0.18);\n}\n.column-header.new[_ngcontent-%COMP%] {\n  border-color: var(--violet-light);\n}\n.column-header.in_progress[_ngcontent-%COMP%] {\n  border-color: var(--amber-light);\n}\n.column-header.content_creator[_ngcontent-%COMP%] {\n  border-color: var(--pink-light);\n}\n.column-header.in_review[_ngcontent-%COMP%] {\n  border-color: var(--teal-light);\n}\n.column-header.client_feedback[_ngcontent-%COMP%] {\n  border-color: var(--blue-light);\n}\n.column-header.done[_ngcontent-%COMP%] {\n  border-color: var(--emerald-light);\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid var(--border);\n  padding: 2px 8px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-2);\n}\n.column-body[_ngcontent-%COMP%] {\n  padding: 10px;\n  overflow-y: auto;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.task-card[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-radius: var(--r);\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.025);\n  border: 1px solid var(--border);\n  transition: all 0.2s var(--ease);\n}\n.task-card[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.07);\n  border-color: var(--border-v);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.deal-tag[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  padding: 2px 8px;\n  border-radius: 100px;\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  font-weight: 600;\n}\n.subcat-tag[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  padding: 2px 8px;\n  border-radius: 100px;\n  background: var(--teal-soft);\n  color: var(--teal-light);\n  border: 1px solid rgba(13, 148, 136, 0.2);\n  font-weight: 600;\n}\n.task-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #fff;\n  margin-bottom: 6px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.task-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-2);\n  margin-bottom: 10px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.margin-row[_ngcontent-%COMP%] {\n  background: var(--emerald-soft);\n  border: 1px solid rgba(5, 150, 105, 0.15);\n  padding: 8px 10px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.margin-badge[_ngcontent-%COMP%] {\n  color: var(--emerald-light);\n  font-weight: 700;\n  font-size: 0.76rem;\n  margin-top: 4px;\n  padding-top: 4px;\n  border-top: 1px solid rgba(5, 150, 105, 0.15);\n  text-align: right;\n}\n.attachments-preview-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n}\n.inline-thumb[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  border-radius: 7px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.inline-thumb[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid var(--border);\n  padding-top: 8px;\n  margin-top: 4px;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  color: #fff;\n  font-size: 0.65rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  margin-right: -4px;\n  border: 2px solid var(--bg);\n}\n.empty-column[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-3);\n  font-size: 0.82rem;\n  padding: 24px 12px;\n}\n.crm-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: _ngcontent-%COMP%_modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n.extra-wide-modal[_ngcontent-%COMP%] {\n  max-width: 860px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: var(--text);\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 1500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.lightbox-img[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  max-height: 90vh;\n  border-radius: 12px;\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.8);\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.subtask-indicator[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n/*# sourceMappingURL=tasks-board.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksBoardComponent, [{
    type: Component,
    args: [{ selector: "app-tasks-board", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimePickerSelectComponent], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-list-check" style="color:var(--violet-light);"></i> Task Board & Pipeline</h2>
          <p class="subtitle">Workflow management, auto-calculated margins, inline attachments & team mentions</p>
        </div>
        <button class="btn btn-primary" (click)="openCreateModal()">
          <i class="fa-solid fa-plus"></i> Add New Task
        </button>
      </div>

      <!-- Pipeline Kanban Columns -->
      <div class="kanban-pipeline">
        <div class="kanban-column" *ngFor="let col of columns">
          <div class="column-header" [ngClass]="col.key">
            <span>{{ col.title }}</span>
            <span class="count-badge">{{ getTasksForColumn(col.key).length }}</span>
          </div>

          <div class="column-body">
            <div class="task-card glass-panel" *ngFor="let task of getTasksForColumn(col.key)" (click)="openTaskDetails(task)">
              <div class="card-top">
                <span class="deal-tag" *ngIf="task.deal">{{ task.deal.title }}</span>
                <span class="subcat-tag" *ngIf="task.sub_category">{{ task.sub_category.name_ar }}</span>
              </div>
              <h4 class="task-title">{{ task.title }}</h4>
              <p class="task-desc" *ngIf="task.scope">{{ task.scope }}</p>

              <!-- Margin Auto-Derived Preview -->
              <div class="margin-row" *ngIf="task.client_price > 0">
                <div class="price-item">
                  <small>\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644:</small>
                  <span>{{ task.client_price }} EGP</span>
                </div>
                <div class="price-item">
                  <small>\u0623\u062C\u0631 \u0627\u0644\u0645\u0648\u0638\u0641:</small>
                  <span>{{ task.employee_price }} EGP</span>
                </div>
                <div class="margin-badge">
                  \u0647\u0627\u0645\u0634 \u0627\u0644\u0634\u0631\u0643\u0629: +{{ (task.client_price - task.employee_price) }} EGP
                </div>
              </div>

              <!-- Inline Attachments Preview (Thumbnail grid) -->
              <div class="attachments-preview-grid" *ngIf="getImageAttachments(task).length > 0">
                <img 
                  *ngFor="let img of getImageAttachments(task)" 
                  [src]="img.file_url" 
                  class="inline-thumb" 
                  alt="Attachment Preview" 
                  (click)="expandImage(img.file_url, $event)"
                />
              </div>

              <!-- Card Footer -->
              <div class="card-footer">
                <div class="assigned-users">
                  <span *ngFor="let u of task.users" class="avatar-circle" [title]="u.name">{{ u.name.charAt(0) }}</span>
                </div>
                <div class="subtask-indicator" *ngIf="task.subtasks_count > 0">
                  <i class="fa-solid fa-diagram-project"></i> {{ task.subtasks_count }} \u0641\u0631\u0639\u064A\u0629
                </div>
              </div>
            </div>

            <div class="empty-column" *ngIf="getTasksForColumn(col.key).length === 0">
              \u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645
            </div>
          </div>
        </div>
      </div>

      <!-- Create Task Modal -->
      <div class="crm-modal-backdrop" *ngIf="showCreateModal">
        <div class="crm-modal-card glass-panel wide-modal">
          <div class="modal-header">
            <h3><i class="fa-solid fa-plus text-orange"></i> \u0625\u0646\u0634\u0627\u0621 \u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629</h3>
            <button class="close-btn" (click)="showCreateModal = false"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="taskForm" (ngSubmit)="saveTask()">
            <div class="form-grid">
              <div class="form-group full-width">
                <label>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 <span class="required">*</span></label>
                <input type="text" formControlName="title" placeholder="\u0645\u062B\u0627\u0644: \u062A\u0635\u0648\u064A\u0631 \u0648\u062A\u0639\u062F\u064A\u0644 20 \u0641\u064A\u062F\u064A\u0648 \u0631\u064A\u0644\u0632" />
              </div>

              <div class="form-group">
                <label>\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0640 \u0635\u0641\u0642\u0629 (Deal)</label>
                <app-prime-picker-select
                  formControlName="deal_id"
                  [items]="deals"
                  optionLabel="title"
                  optionValue="id"
                  placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0642\u0629..."
                ></app-prime-picker-select>
              </div>

              <div class="form-group">
                <label>\u0627\u0644\u0642\u0633\u0645 \u0648\u0627\u0644\u0645\u0631\u0643\u0632</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645..."
                ></app-prime-picker-select>
              </div>

              <!-- Pricing & Auto Margin -->
              <div class="form-group">
                <label>\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644 \u0644\u0644\u0645\u0647\u0645\u0629 (Client Price)</label>
                <input type="number" formControlName="client_price" (input)="computeMargin()" placeholder="120" />
              </div>

              <div class="form-group">
                <label>\u0645\u0633\u062A\u062D\u0642 \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0645\u0646\u0641\u0630 (Employee Price)</label>
                <input type="number" formControlName="employee_price" (input)="computeMargin()" placeholder="100" />
              </div>

              <div class="form-group full-width margin-calc-box">
                <label>\u0647\u0627\u0645\u0634 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A (Company Margin Auto-Calculated):</label>
                <div class="calculated-margin-val">+{{ computedMarginVal }} EGP</div>
                <small class="text-muted">\u064A\u062A\u0645 \u062D\u0633\u0627\u0628\u0647 \u0622\u0644\u064A\u0627\u064B \u0628\u062F\u0642\u0629: margin = client_price - employee_price \u062F\u0648\u0646 \u0625\u062F\u062E\u0627\u0644 \u064A\u062F\u0648\u064A</small>
              </div>

              <div class="form-group">
                <label>\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0639\u0645\u0644 \u0628\u0627\u0644\u062E\u0637 (Status Pipeline)</label>
                <select formControlName="status">
                  <option value="new">\u062C\u062F\u064A\u062F (New)</option>
                  <option value="in_progress">\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630 (In Progress)</option>
                  <option value="content_creator">\u0635\u0627\u0646\u0639 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 (Content Creator)</option>
                  <option value="in_review">\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 (In Review)</option>
                  <option value="client_feedback">\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644 (Client Feedback)</option>
                  <option value="done">\u0645\u0643\u062A\u0645\u0644 (Done)</option>
                </select>
              </div>

              <div class="form-group">
                <label>\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629</label>
                <select formControlName="priority">
                  <option value="low">\u0645\u0646\u062E\u0641\u0636\u0629</option>
                  <option value="medium">\u0645\u062A\u0648\u0633\u0637\u0629</option>
                  <option value="high">\u0639\u0627\u0644\u064A\u0629</option>
                  <option value="urgent">\u0639\u0627\u062C\u0644\u0629 \u062C\u062F\u0627\u064B</option>
                </select>
              </div>

              <div class="form-group full-width">
                <label>\u0646\u0637\u0627\u0642 \u0627\u0644\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 (Agreed Scope)</label>
                <textarea formControlName="scope" rows="2" placeholder="\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0645\u0633\u0628\u0642\u0627\u064B \u0645\u0646 \u0627\u0644\u0639\u0642\u062F..."></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="showCreateModal = false">\u0625\u0644\u063A\u0627\u0621</button>
              <button type="submit" class="btn btn-primary" [disabled]="taskForm.invalid || loading">
                {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0648\u0646\u0634\u0631 \u0627\u0644\u0645\u0647\u0645\u0629' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Task Detail Drawer / Modal -->
      <div class="crm-modal-backdrop" *ngIf="selectedTask">
        <div class="crm-modal-card glass-panel extra-wide-modal">
          <div class="modal-header">
            <div>
              <h3>{{ selectedTask.title }}</h3>
              <span class="badge" [ngClass]="selectedTask.status">{{ selectedTask.status }}</span>
            </div>
            <button class="close-btn" (click)="selectedTask = null"><i class="fa-solid fa-xmark"></i></button>
          </div>

          <div class="task-detail-grid">
            <div class="detail-main">
              <!-- Margin Banner -->
              <div class="pricing-banner glass-panel">
                <div class="banner-item">
                  <small>\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644:</small>
                  <h4>{{ selectedTask.client_price }} EGP</h4>
                </div>
                <div class="banner-item">
                  <small>\u0623\u062C\u0631 \u0627\u0644\u0645\u0648\u0638\u0641:</small>
                  <h4>{{ selectedTask.employee_price }} EGP</h4>
                </div>
                <div class="banner-item margin-highlight">
                  <small>\u0647\u0627\u0645\u0634 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A:</small>
                  <h4>+{{ (selectedTask.client_price - selectedTask.employee_price) }} EGP</h4>
                </div>
              </div>

              <!-- Attachments Upload & Inline Preview -->
              <div class="detail-section">
                <h4><i class="fa-solid fa-images text-orange"></i> \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0635\u0648\u0631 Inline</h4>
                <div class="image-previews-container">
                  <div *ngFor="let att of selectedTask.attachments" class="img-preview-box">
                    <img *ngIf="att.is_image" [src]="att.file_url" class="inline-preview-img" (click)="expandImage(att.file_url, $event)" />
                    <div *ngIf="!att.is_image" class="file-doc-box">
                      <i class="fa-solid fa-file-lines"></i>
                      <span>{{ att.file_name || '\u0645\u0633\u062A\u0646\u062F' }}</span>
                    </div>
                  </div>
                </div>

                <div class="upload-box">
                  <input type="file" #fileInput (change)="onFileSelected($event)" style="display:none;" />
                  <button type="button" class="btn btn-glass" (click)="fileInput.click()">
                    <i class="fa-solid fa-upload"></i> \u0631\u0641\u0639 \u0645\u0631\u0641\u0642 / \u0635\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629
                  </button>
                </div>
              </div>

              <!-- Comments / Notes Thread with Mentions -->
              <div class="detail-section">
                <h4><i class="fa-solid fa-comments text-orange"></i> \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0648\u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062A (&#64;mentions)</h4>
                <div class="notes-thread">
                  <div class="note-item" *ngFor="let note of selectedTask.notes">
                    <div class="note-author font-bold">{{ note.user?.name || '\u0645\u0633\u062A\u062E\u062F\u0645' }}</div>
                    <div class="note-text">{{ note.note }}</div>
                    <small class="note-date">{{ note.created_at | date:'short' }}</small>
                  </div>
                </div>

                <div class="add-note-box">
                  <textarea [(ngModel)]="newNoteText" placeholder="\u0627\u0643\u062A\u0628 \u062A\u0639\u0644\u064A\u0642\u0627\u064B... \u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 &#64;\u0627\u0633\u0645_\u0627\u0644\u0645\u0648\u0638\u0641 \u0644\u062A\u0646\u0628\u064A\u0647\u0647 \u0641\u0648\u0631\u0627" rows="2"></textarea>
                  <button class="btn btn-primary" (click)="submitNote()">\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u0639\u0644\u064A\u0642</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Expanded Image Viewer -->
      <div class="lightbox-overlay" *ngIf="expandedImageUrl" (click)="expandedImageUrl = null">
        <img [src]="expandedImageUrl" class="lightbox-img" />
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;22015080e734aeb5511cb4b1495e90b1f84baae6fc0451e49a472efc5245545e;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/tasks/tasks-board.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.kanban-pipeline {\n  display: flex;\n  gap: 14px;\n  overflow-x: auto;\n  padding-bottom: 14px;\n  align-items: flex-start;\n  -webkit-overflow-scrolling: touch;\n}\n.kanban-column {\n  flex: 0 0 270px;\n  min-width: 270px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 180px);\n  overflow: hidden;\n  transition: border-color 0.2s;\n}\n.kanban-column:hover {\n  border-color: var(--border-v);\n}\n.column-header {\n  padding: 13px 16px;\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 3px solid transparent;\n  font-size: 0.84rem;\n  background: rgba(0, 0, 0, 0.18);\n}\n.column-header.new {\n  border-color: var(--violet-light);\n}\n.column-header.in_progress {\n  border-color: var(--amber-light);\n}\n.column-header.content_creator {\n  border-color: var(--pink-light);\n}\n.column-header.in_review {\n  border-color: var(--teal-light);\n}\n.column-header.client_feedback {\n  border-color: var(--blue-light);\n}\n.column-header.done {\n  border-color: var(--emerald-light);\n}\n.count-badge {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid var(--border);\n  padding: 2px 8px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-2);\n}\n.column-body {\n  padding: 10px;\n  overflow-y: auto;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.task-card {\n  padding: 14px;\n  border-radius: var(--r);\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.025);\n  border: 1px solid var(--border);\n  transition: all 0.2s var(--ease);\n}\n.task-card:hover {\n  background: rgba(124, 58, 237, 0.07);\n  border-color: var(--border-v);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);\n}\n.card-top {\n  display: flex;\n  gap: 5px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.deal-tag {\n  font-size: 0.68rem;\n  padding: 2px 8px;\n  border-radius: 100px;\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(124, 58, 237, 0.2);\n  font-weight: 600;\n}\n.subcat-tag {\n  font-size: 0.68rem;\n  padding: 2px 8px;\n  border-radius: 100px;\n  background: var(--teal-soft);\n  color: var(--teal-light);\n  border: 1px solid rgba(13, 148, 136, 0.2);\n  font-weight: 600;\n}\n.task-title {\n  font-size: 0.88rem;\n  color: #fff;\n  margin-bottom: 6px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.task-desc {\n  font-size: 0.8rem;\n  color: var(--text-2);\n  margin-bottom: 10px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.margin-row {\n  background: var(--emerald-soft);\n  border: 1px solid rgba(5, 150, 105, 0.15);\n  padding: 8px 10px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.margin-badge {\n  color: var(--emerald-light);\n  font-weight: 700;\n  font-size: 0.76rem;\n  margin-top: 4px;\n  padding-top: 4px;\n  border-top: 1px solid rgba(5, 150, 105, 0.15);\n  text-align: right;\n}\n.attachments-preview-grid {\n  display: flex;\n  gap: 5px;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n}\n.inline-thumb {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  border-radius: 7px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.inline-thumb:hover {\n  transform: scale(1.08);\n}\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid var(--border);\n  padding-top: 8px;\n  margin-top: 4px;\n}\n.avatar-circle {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  color: #fff;\n  font-size: 0.65rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  margin-right: -4px;\n  border: 2px solid var(--bg);\n}\n.empty-column {\n  text-align: center;\n  color: var(--text-3);\n  font-size: 0.82rem;\n  padding: 24px 12px;\n}\n.crm-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 520px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.wide-modal {\n  max-width: 680px;\n}\n.extra-wide-modal {\n  max-width: 860px;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h3 {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.full-width {\n  grid-column: span 2;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: var(--text);\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.form-group select option {\n  background: #12121e;\n  color: var(--text);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.lightbox-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 1500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.lightbox-img {\n  max-width: 90vw;\n  max-height: 90vh;\n  border-radius: 12px;\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.8);\n}\n.required {\n  color: var(--rose-light);\n}\n.subtask-indicator {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n/*# sourceMappingURL=tasks-board.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksBoardComponent, { className: "TasksBoardComponent", filePath: "src/app/components/tasks/tasks-board.component.ts", lineNumber: 308 });
})();
export {
  TasksBoardComponent
};
//# sourceMappingURL=chunk-YQMDT32L.js.map
