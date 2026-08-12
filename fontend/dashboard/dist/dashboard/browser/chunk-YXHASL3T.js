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
  NgModel,
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
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TC7O2TE3.js";

// src/app/components/tasks/tasks-board.component.ts
var _c0 = () => ({ width: "640px" });
var _c1 = () => ({ label: "\u0645\u0646\u062E\u0641\u0636\u0629", value: "low" });
var _c2 = () => ({ label: "\u0645\u062A\u0648\u0633\u0637\u0629", value: "medium" });
var _c3 = () => ({ label: "\u0639\u0627\u0644\u064A\u0629", value: "high" });
var _c4 = () => ({ label: "\u0639\u0627\u062C\u0644\u0629 \u062C\u062F\u0627\u064B", value: "urgent" });
var _c5 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c6 = () => [];
function TasksBoardComponent_div_22_div_9_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(3, 2, task_r5.deal.title, 0, 18), "", (task_r5.deal.title == null ? null : task_r5.deal.title.length) > 18 ? "..." : "", " ");
  }
}
function TasksBoardComponent_div_22_div_9_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r5.sub_category.name_ar, " ");
  }
}
function TasksBoardComponent_div_22_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, TasksBoardComponent_div_22_div_9_div_2_span_1_Template, 4, 6, "span", 59)(2, TasksBoardComponent_div_22_div_9_div_2_span_2_Template, 2, 1, "span", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r5.deal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r5.sub_category);
  }
}
function TasksBoardComponent_div_22_div_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r5.scope);
  }
}
function TasksBoardComponent_div_22_div_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "span", 66);
    \u0275\u0275element(2, "i", 67);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 68);
    \u0275\u0275text(6, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 69);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 2, task_r5.client_price, "1.0-0"), " EGP");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(9, 5, task_r5.client_price - task_r5.employee_price, "1.0-0"), " margin");
  }
}
function TasksBoardComponent_div_22_div_9_div_7_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 73);
    \u0275\u0275listener("click", function TasksBoardComponent_div_22_div_9_div_7_img_1_Template_img_click_0_listener($event) {
      const img_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.expandImage(img_r7.file_url, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    \u0275\u0275property("src", img_r7.file_url, \u0275\u0275sanitizeUrl);
  }
}
function TasksBoardComponent_div_22_div_9_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r2.getImageAttachments(task_r5).length - 3, " ");
  }
}
function TasksBoardComponent_div_22_div_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, TasksBoardComponent_div_22_div_9_div_7_img_1_Template, 1, 1, "img", 71)(2, TasksBoardComponent_div_22_div_9_div_7_span_2_Template, 2, 1, "span", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getImageAttachments(task_r5).slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getImageAttachments(task_r5).length > 3);
  }
}
function TasksBoardComponent_div_22_div_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r8 = ctx.$implicit;
    \u0275\u0275property("title", u_r8.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r8.name == null ? null : u_r8.name.charAt(0));
  }
}
function TasksBoardComponent_div_22_div_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", (task_r5.users || \u0275\u0275pureFunction0(1, _c6)).length - 4, " ");
  }
}
function TasksBoardComponent_div_22_div_9_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (task_r5.attachments || \u0275\u0275pureFunction0(1, _c6)).length, " ");
  }
}
function TasksBoardComponent_div_22_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("dragstart", function TasksBoardComponent_div_22_div_9_Template_div_dragstart_0_listener($event) {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDragStart($event, task_r5));
    })("dragend", function TasksBoardComponent_div_22_div_9_Template_div_dragend_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDragEnd());
    })("click", function TasksBoardComponent_div_22_div_9_Template_div_click_0_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTaskDetail(task_r5));
    });
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275template(2, TasksBoardComponent_div_22_div_9_div_2_Template, 3, 2, "div", 46);
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TasksBoardComponent_div_22_div_9_div_5_Template, 2, 1, "div", 48)(6, TasksBoardComponent_div_22_div_9_div_6_Template, 10, 8, "div", 49)(7, TasksBoardComponent_div_22_div_9_div_7_Template, 3, 2, "div", 50);
    \u0275\u0275elementStart(8, "div", 51)(9, "div", 52);
    \u0275\u0275template(10, TasksBoardComponent_div_22_div_9_div_10_Template, 2, 2, "div", 53)(11, TasksBoardComponent_div_22_div_9_div_11_Template, 2, 2, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 55);
    \u0275\u0275template(13, TasksBoardComponent_div_22_div_9_span_13_Template, 3, 2, "span", 56);
    \u0275\u0275elementStart(14, "span", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("dragging", (ctx_r2.draggingTask == null ? null : ctx_r2.draggingTask.id) === task_r5.id);
    \u0275\u0275advance();
    \u0275\u0275classMap("p-" + (task_r5.priority || "medium"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r5.deal || task_r5.sub_category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r5.scope);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r5.client_price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getImageAttachments(task_r5).length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (task_r5.users || \u0275\u0275pureFunction0(15, _c6)).slice(0, 4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (task_r5.users || \u0275\u0275pureFunction0(16, _c6)).length > 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (task_r5.attachments || \u0275\u0275pureFunction0(17, _c6)).length > 0);
    \u0275\u0275advance();
    \u0275\u0275classMap("pb-" + (task_r5.priority || "medium"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r5.priority || "medium", " ");
  }
}
function TasksBoardComponent_div_22_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Drop here");
    \u0275\u0275elementEnd()();
  }
}
function TasksBoardComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("dragover", function TasksBoardComponent_div_22_Template_div_dragover_0_listener($event) {
      const col_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragOver($event, col_r2.key));
    })("dragleave", function TasksBoardComponent_div_22_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragLeave($event));
    })("drop", function TasksBoardComponent_div_22_Template_div_drop_0_listener($event) {
      const col_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrop($event, col_r2.key));
    });
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 37);
    \u0275\u0275element(3, "span", 38);
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 41);
    \u0275\u0275template(9, TasksBoardComponent_div_22_div_9_Template, 16, 18, "div", 42)(10, TasksBoardComponent_div_22_div_10_Template, 4, 0, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("drag-over", ctx_r2.dragOverCol === col_r2.key);
    \u0275\u0275attribute("data-col", col_r2.key);
    \u0275\u0275advance();
    \u0275\u0275styleProp("--col-accent", col_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", col_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r2.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", col_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTasksForColumn(col_r2.key).length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getTasksForColumn(col_r2.key));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getTasksForColumn(col_r2.key).length === 0);
  }
}
function TasksBoardComponent_div_23_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function TasksBoardComponent_div_23_button_17_Template_button_click_0_listener() {
      const col_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateTaskStatus(ctx_r2.selectedTask, col_r11.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--col-c", col_r11.color);
    \u0275\u0275classProp("active", ctx_r2.selectedTask.status === col_r11.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r11.title);
  }
}
function TasksBoardComponent_div_23_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114)(2, "small");
    \u0275\u0275text(3, "Client Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 115);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 116);
    \u0275\u0275element(8, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 114)(10, "small");
    \u0275\u0275text(11, "Employee Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong", 118);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 116);
    \u0275\u0275element(16, "i", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 120)(18, "small");
    \u0275\u0275text(19, "Company Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong", 121);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 3, ctx_r2.selectedTask.client_price, "1.2-2"), " EGP");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 6, ctx_r2.selectedTask.employee_price, "1.2-2"), " EGP");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(22, 9, ctx_r2.selectedTask.client_price - ctx_r2.selectedTask.employee_price, "1.2-2"), " EGP");
  }
}
function TasksBoardComponent_div_23_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275element(2, "i", 122);
    \u0275\u0275text(3, " Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 123);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTask.scope);
  }
}
function TasksBoardComponent_div_23_div_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 128);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r12.name == null ? null : u_r12.name.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r12.name);
  }
}
function TasksBoardComponent_div_23_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275element(2, "i", 124);
    \u0275\u0275text(3, " Assigned Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 125);
    \u0275\u0275template(5, TasksBoardComponent_div_23_div_21_div_5_Template, 5, 2, "div", 126);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.selectedTask.users);
  }
}
function TasksBoardComponent_div_23_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275element(2, "i", 62);
    \u0275\u0275text(3, " Linked Deal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 129);
    \u0275\u0275element(5, "i", 130);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedTask.deal.title, " ");
  }
}
function TasksBoardComponent_div_23_div_28_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 134);
    \u0275\u0275listener("click", function TasksBoardComponent_div_23_div_28_img_1_Template_img_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const att_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expandImage(att_r14.file_url, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", att_r14.file_url, \u0275\u0275sanitizeUrl);
  }
}
function TasksBoardComponent_div_23_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const att_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(att_r14.file_name || "File");
  }
}
function TasksBoardComponent_div_23_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275template(1, TasksBoardComponent_div_23_div_28_img_1_Template, 1, 1, "img", 132)(2, TasksBoardComponent_div_23_div_28_div_2_Template, 4, 1, "div", 133);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", att_r14.is_image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !att_r14.is_image);
  }
}
function TasksBoardComponent_div_23_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 137);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 138)(4, "div", 139);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 140);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 141);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const note_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((note_r16.user == null ? null : note_r16.user.name == null ? null : note_r16.user.name.charAt(0)) || "U");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((note_r16.user == null ? null : note_r16.user.name) || "\u0645\u0633\u062A\u062E\u062F\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(note_r16.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, note_r16.created_at, "short"));
  }
}
function TasksBoardComponent_div_23_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275element(1, "i", 143);
    \u0275\u0275text(2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0628\u0639\u062F ");
    \u0275\u0275elementEnd();
  }
}
function TasksBoardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function TasksBoardComponent_div_23_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail($event));
    });
    \u0275\u0275elementStart(1, "div", 82);
    \u0275\u0275listener("click", function TasksBoardComponent_div_23_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "div", 84)(4, "div", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 86);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 87)(10, "span", 88);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 57);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 89);
    \u0275\u0275listener("click", function TasksBoardComponent_div_23_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedTask = null);
    });
    \u0275\u0275element(15, "i", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 91);
    \u0275\u0275template(17, TasksBoardComponent_div_23_button_17_Template, 2, 5, "button", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 93);
    \u0275\u0275template(19, TasksBoardComponent_div_23_div_19_Template, 23, 12, "div", 94)(20, TasksBoardComponent_div_23_div_20_Template, 6, 1, "div", 95)(21, TasksBoardComponent_div_23_div_21_Template, 6, 1, "div", 95)(22, TasksBoardComponent_div_23_div_22_Template, 7, 1, "div", 95);
    \u0275\u0275elementStart(23, "div", 96)(24, "div", 97);
    \u0275\u0275element(25, "i", 98);
    \u0275\u0275text(26, " Attachments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 99);
    \u0275\u0275template(28, TasksBoardComponent_div_23_div_28_Template, 3, 2, "div", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 101);
    \u0275\u0275listener("click", function TasksBoardComponent_div_23_Template_div_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const fileInput_r15 = \u0275\u0275reference(31);
      return \u0275\u0275resetView(fileInput_r15.click());
    });
    \u0275\u0275elementStart(30, "input", 102, 0);
    \u0275\u0275listener("change", function TasksBoardComponent_div_23_Template_input_change_30_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "i", 103);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Click to upload attachment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 96)(36, "div", 97);
    \u0275\u0275element(37, "i", 104);
    \u0275\u0275text(38, " \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0648\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 105);
    \u0275\u0275template(40, TasksBoardComponent_div_23_div_40_Template, 11, 7, "div", 106)(41, TasksBoardComponent_div_23_div_41_Template, 3, 0, "div", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 108)(43, "textarea", 109);
    \u0275\u0275twoWayListener("ngModelChange", function TasksBoardComponent_div_23_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newNoteText, $event) || (ctx_r2.newNoteText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 110);
    \u0275\u0275listener("click", function TasksBoardComponent_div_23_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitNote());
    });
    \u0275\u0275element(45, "i", 111);
    \u0275\u0275text(46, " \u0625\u0631\u0633\u0627\u0644 ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTask.title == null ? null : ctx_r2.selectedTask.title.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedTask.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.selectedTask.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedTask.status == null ? null : ctx_r2.selectedTask.status.replace("_", " "));
    \u0275\u0275advance();
    \u0275\u0275classMap("pb-" + (ctx_r2.selectedTask.priority || "medium"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedTask.priority);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.columns);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedTask.client_price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTask.scope);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.selectedTask.users || \u0275\u0275pureFunction0(17, _c6)).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTask.deal);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.selectedTask.attachments || \u0275\u0275pureFunction0(18, _c6));
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r2.selectedTask.notes || \u0275\u0275pureFunction0(19, _c6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r2.selectedTask.notes || \u0275\u0275pureFunction0(20, _c6)).length);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newNoteText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newNoteText.trim());
  }
}
function TasksBoardComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275element(1, "i", 145);
    \u0275\u0275text(2, " \u0647\u0627\u0645\u0634 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0629: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(5, 1, ctx_r2.computedMarginVal, "1.2-2"), " \u062C.\u0645");
  }
}
function TasksBoardComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 146);
    \u0275\u0275listener("click", function TasksBoardComponent_ng_template_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCreateModal = false);
    });
    \u0275\u0275text(1, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 147);
    \u0275\u0275element(3, "i", 148);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.taskForm.invalid || ctx_r2.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0647\u0645\u0629", " ");
  }
}
function TasksBoardComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275listener("click", function TasksBoardComponent_div_64_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandedImageUrl = null);
    });
    \u0275\u0275element(1, "img", 150);
    \u0275\u0275elementStart(2, "button", 151);
    \u0275\u0275element(3, "i", 90);
    \u0275\u0275elementEnd()();
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
    { key: "new", title: "\u062C\u062F\u064A\u062F", color: "#a5b4fc" },
    { key: "in_progress", title: "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630", color: "#fbbf24" },
    { key: "content_creator", title: "\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649", color: "#f472b6" },
    { key: "in_review", title: "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629", color: "#67e8f9" },
    { key: "client_feedback", title: "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644", color: "#93c5fd" },
    { key: "done", title: "\u0645\u0643\u062A\u0645\u0644", color: "#6ee7b7" }
  ];
  showCreateModal = false;
  selectedTask = null;
  expandedImageUrl = null;
  newNoteText = "";
  computedMarginVal = 0;
  loading = false;
  taskForm;
  // Drag & Drop state
  draggingTask = null;
  dragOverCol = null;
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
  openTaskDetail(task) {
    if (this.draggingTask)
      return;
    this.selectedTask = task;
  }
  closeDetail(event) {
    const target = event.target;
    if (target.classList.contains("drawer-backdrop")) {
      this.selectedTask = null;
    }
  }
  persistStatusUpdate(task, newStatus, rollbackCallback) {
    const payload = {
      title: task.title,
      priority: task.priority || "medium",
      status: newStatus,
      client_price: task.client_price || 0,
      employee_price: task.employee_price || 0,
      scope: task.scope || "",
      deal_id: task.deal_id || task.deal?.id || null,
      department_id: task.department_id || task.department?.id || null
    };
    this.apiService.updateTask(task.id, payload).subscribe({
      next: () => {
      },
      error: () => {
        this.apiService.updateTaskStatus(task.id, newStatus).subscribe({
          error: () => {
            if (rollbackCallback)
              rollbackCallback();
          }
        });
      }
    });
  }
  updateTaskStatus(task, newStatus) {
    const oldStatus = task.status;
    task.status = newStatus;
    this.persistStatusUpdate(task, newStatus, () => task.status = oldStatus);
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
      const fd = new FormData();
      fd.append("file", file);
      this.apiService.addTaskAttachment(this.selectedTask.id, fd).subscribe((res) => {
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
  /* ── DRAG & DROP ──────────────────────────────────────────── */
  onDragStart(event, task) {
    this.draggingTask = task;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", task.id.toString());
    }
    setTimeout(() => {
    }, 0);
  }
  onDragEnd() {
    this.draggingTask = null;
    this.dragOverCol = null;
  }
  onDragOver(event, colKey) {
    event.preventDefault();
    if (event.dataTransfer)
      event.dataTransfer.dropEffect = "move";
    this.dragOverCol = colKey;
  }
  onDragLeave(event) {
    const relatedTarget = event.relatedTarget;
    if (!relatedTarget || !event.currentTarget.contains(relatedTarget)) {
      this.dragOverCol = null;
    }
  }
  onDrop(event, targetColKey) {
    event.preventDefault();
    this.dragOverCol = null;
    if (!this.draggingTask)
      return;
    const task = this.draggingTask;
    this.draggingTask = null;
    if (task.status === targetColKey)
      return;
    const oldStatus = task.status;
    task.status = targetColKey;
    this.persistStatusUpdate(task, targetColKey, () => task.status = oldStatus);
  }
  static \u0275fac = function TasksBoardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksBoardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksBoardComponent, selectors: [["app-tasks-board"]], decls: 65, vars: 29, consts: [["fileInput", ""], [1, "tb-shell"], [1, "tb-header"], [1, "tb-header-left"], [1, "tb-icon-badge"], [1, "fa-solid", "fa-list-check"], [1, "tb-header-right"], [1, "tb-stats"], [1, "stat-pill"], [1, "fa-solid", "fa-circle-dot", 2, "color", "var(--violet-light)"], [1, "stat-pill", "emerald"], [1, "fa-solid", "fa-check-circle"], [1, "btn-new-task", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "kanban-board"], ["class", "kanban-col", 3, "drag-over", "dragover", "dragleave", "drop", 4, "ngFor", "ngForOf"], ["class", "drawer-backdrop", 3, "click", 4, "ngIf"], ["header", "\u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-grid"], [1, "fg", "full"], [1, "req"], ["type", "text", "pInputText", "", "formControlName", "title", "placeholder", "\u0645\u062B\u0627\u0644: \u062A\u0635\u0645\u064A\u0645 10 \u0641\u064A\u062F\u064A\u0648 \u0631\u064A\u0644\u0632 \u0644\u0644\u062D\u0645\u0644\u0629..."], [1, "fg"], ["formControlName", "deal_id", "optionLabel", "title", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0642\u0629...", 3, "items"], ["formControlName", "department_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645...", 3, "items"], ["type", "number", "pInputText", "", "formControlName", "client_price", "placeholder", "0", 3, "input"], ["type", "number", "pInputText", "", "formControlName", "employee_price", "placeholder", "0", 3, "input"], ["class", "fg full margin-preview", 4, "ngIf"], ["formControlName", "status", "optionLabel", "title", "optionValue", "key", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...", 3, "appendTo", "options"], ["formControlName", "priority", "optionLabel", "label", "optionValue", "value", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629...", 3, "appendTo", "options"], ["pTextarea", "", "formControlName", "scope", "rows", "3", "placeholder", "\u0627\u0643\u062A\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0645\u0637\u0644\u0648\u0628\u0627\u062A \u0627\u0644\u0645\u0647\u0645\u0629..."], ["pTemplate", "footer"], ["class", "lightbox", 3, "click", 4, "ngIf"], [1, "kanban-col", 3, "dragover", "dragleave", "drop"], [1, "col-hd"], [1, "col-hd-left"], [1, "col-dot"], [1, "col-title"], [1, "col-count"], [1, "col-body"], ["class", "tk-card", "draggable", "true", 3, "dragging", "dragstart", "dragend", "click", 4, "ngFor", "ngForOf"], ["class", "col-empty", 4, "ngIf"], ["draggable", "true", 1, "tk-card", 3, "dragstart", "dragend", "click"], [1, "priority-ribbon"], ["class", "tk-tags", 4, "ngIf"], [1, "tk-title"], ["class", "tk-scope", 4, "ngIf"], ["class", "tk-margin", 4, "ngIf"], ["class", "tk-thumbs", 4, "ngIf"], [1, "tk-foot"], [1, "tk-avatars"], ["class", "av-sm", 3, "title", 4, "ngFor", "ngForOf"], ["class", "av-sm av-more", 4, "ngIf"], [1, "tk-foot-right"], ["class", "tk-attach", 4, "ngIf"], [1, "priority-badge"], [1, "tk-tags"], ["class", "tag tag-deal", 4, "ngIf"], ["class", "tag tag-cat", 4, "ngIf"], [1, "tag", "tag-deal"], [1, "fa-solid", "fa-handshake"], [1, "tag", "tag-cat"], [1, "tk-scope"], [1, "tk-margin"], [1, "m-item"], [1, "fa-solid", "fa-arrow-up-right-dots"], [1, "m-sep"], [1, "m-profit"], [1, "tk-thumbs"], ["class", "thumb", "alt", "", 3, "src", "click", 4, "ngFor", "ngForOf"], ["class", "thumb-more", 4, "ngIf"], ["alt", "", 1, "thumb", 3, "click", "src"], [1, "thumb-more"], [1, "av-sm", 3, "title"], [1, "av-sm", "av-more"], [1, "tk-attach"], [1, "fa-solid", "fa-paperclip"], [1, "col-empty"], [1, "fa-regular", "fa-circle-dot"], [1, "drawer-backdrop", 3, "click"], [1, "detail-drawer", 3, "click"], [1, "drawer-hd"], [1, "drawer-hd-left"], [1, "drawer-task-av"], [1, "drawer-title"], [1, "drawer-meta"], [1, "badge", 3, "ngClass"], [1, "close-btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "status-switcher"], ["class", "status-btn", 3, "active", "--col-c", "click", 4, "ngFor", "ngForOf"], [1, "drawer-body"], ["class", "pricing-banner", 4, "ngIf"], ["class", "drawer-section", 4, "ngIf"], [1, "drawer-section"], [1, "ds-label"], [1, "fa-solid", "fa-images"], [1, "att-grid"], ["class", "att-item", 4, "ngFor", "ngForOf"], [1, "upload-zone", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], [1, "fa-solid", "fa-cloud-arrow-up"], [1, "fa-solid", "fa-comments"], [1, "notes-list"], ["class", "note-item", 4, "ngFor", "ngForOf"], ["class", "notes-empty", 4, "ngIf"], [1, "add-note"], ["placeholder", "\u0627\u0643\u062A\u0628 \u062A\u0639\u0644\u064A\u0642\u0627\u064B... \u064A\u0645\u0643\u0646\u0643 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 @ \u0644\u0625\u0634\u0627\u0631\u0629 \u0623\u064A \u0639\u0636\u0648", "rows", "2", "dir", "rtl", 3, "ngModelChange", "ngModel"], [1, "btn-send-note", 3, "click", "disabled"], [1, "fa-solid", "fa-paper-plane"], [1, "status-btn", 3, "click"], [1, "pricing-banner"], [1, "pricing-item"], [1, "teal"], [1, "pricing-sep"], [1, "fa-solid", "fa-arrow-right"], [1, "amber"], [1, "fa-solid", "fa-equals"], [1, "pricing-item", "highlight"], [1, "emerald"], [1, "fa-solid", "fa-file-lines"], [1, "ds-text"], [1, "fa-solid", "fa-users"], [1, "team-chips"], ["class", "team-chip", 4, "ngFor", "ngForOf"], [1, "team-chip"], [1, "tc-av"], [1, "deal-chip"], [1, "fa-solid", "fa-link"], [1, "att-item"], ["class", "att-img", 3, "src", "click", 4, "ngIf"], ["class", "att-doc", 4, "ngIf"], [1, "att-img", 3, "click", "src"], [1, "att-doc"], [1, "note-item"], [1, "note-av"], [1, "note-body"], [1, "note-author"], [1, "note-text"], [1, "note-time"], [1, "notes-empty"], [1, "fa-regular", "fa-comment"], [1, "fg", "full", "margin-preview"], [1, "fa-solid", "fa-chart-line"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "fa-solid", "fa-floppy-disk"], [1, "lightbox", 3, "click"], [3, "src"], [1, "lb-close"]], template: function TasksBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "h2");
      \u0275\u0275text(7, "\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "\u0633\u062D\u0628 \u0648\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A \u0628\u064A\u0646 \u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0644\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062D\u0627\u0644\u0629 \u0641\u0648\u0631\u0627\u064B");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "span", 8);
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 10);
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275listener("click", function TasksBoardComponent_Template_button_click_18_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275element(19, "i", 13);
      \u0275\u0275text(20, " \u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275template(22, TasksBoardComponent_div_22_Template, 11, 13, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, TasksBoardComponent_div_23_Template, 47, 21, "div", 16);
      \u0275\u0275elementStart(24, "p-dialog", 17);
      \u0275\u0275twoWayListener("visibleChange", function TasksBoardComponent_Template_p_dialog_visibleChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showCreateModal, $event) || (ctx.showCreateModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(25, "form", 18);
      \u0275\u0275listener("ngSubmit", function TasksBoardComponent_Template_form_ngSubmit_25_listener() {
        return ctx.saveTask();
      });
      \u0275\u0275elementStart(26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "label");
      \u0275\u0275text(30, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 ");
      \u0275\u0275elementStart(31, "span", 22);
      \u0275\u0275text(32, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(33, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 24)(35, "label");
      \u0275\u0275text(36, "\u0627\u0644\u0635\u0641\u0642\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "app-prime-picker-select", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 24)(39, "label");
      \u0275\u0275text(40, "\u0627\u0644\u0642\u0633\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "app-prime-picker-select", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 24)(43, "label");
      \u0275\u0275text(44, "\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644 (\u062C.\u0645)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "input", 27);
      \u0275\u0275listener("input", function TasksBoardComponent_Template_input_input_45_listener() {
        return ctx.computeMargin();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 24)(47, "label");
      \u0275\u0275text(48, "\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0645\u0648\u0638\u0641 (\u062C.\u0645)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "input", 28);
      \u0275\u0275listener("input", function TasksBoardComponent_Template_input_input_49_listener() {
        return ctx.computeMargin();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(50, TasksBoardComponent_div_50_Template, 6, 4, "div", 29);
      \u0275\u0275elementStart(51, "div", 24)(52, "label");
      \u0275\u0275text(53, "\u0627\u0644\u062D\u0627\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "p-dropdown", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 24)(56, "label");
      \u0275\u0275text(57, "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "p-dropdown", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 21)(60, "label");
      \u0275\u0275text(61, "\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A (Scope)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "textarea", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(63, TasksBoardComponent_ng_template_63_Template, 5, 2, "ng-template", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(64, TasksBoardComponent_div_64_Template, 4, 1, "div", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate1(" ", ctx.tasks.length, " \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.getTasksForColumn("done").length, " \u0645\u0643\u062A\u0645\u0644 ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.columns);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTask);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showCreateModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.taskForm);
      \u0275\u0275advance(12);
      \u0275\u0275property("items", ctx.deals);
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.departments);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.computedMarginVal > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("appendTo", "body")("options", ctx.columns);
      \u0275\u0275advance(4);
      \u0275\u0275property("appendTo", "body")("options", \u0275\u0275pureFunction4(24, _c5, \u0275\u0275pureFunction0(20, _c1), \u0275\u0275pureFunction0(21, _c2), \u0275\u0275pureFunction0(22, _c3), \u0275\u0275pureFunction0(23, _c4)));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.expandedImageUrl);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    SlicePipe,
    DecimalPipe,
    DatePipe,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
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
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.tb-shell[_ngcontent-%COMP%] {\n  padding: 0;\n  height: calc(100vh - var(--nav-h) - 64px);\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n  overflow: hidden;\n}\n.tb-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.tb-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.tb-icon-badge[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #fff;\n  box-shadow: 0 0 24px var(--violet-glow);\n  flex-shrink: 0;\n}\n.tb-header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  margin: 0;\n}\n.tb-header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.8rem;\n  margin: 0;\n}\n.tb-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tb-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: 100px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.stat-pill.emerald[_ngcontent-%COMP%] {\n  color: var(--emerald-light);\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.btn-new-task[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--violet-2));\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  transition: all 0.25s;\n  box-shadow: 0 4px 20px var(--violet-glow);\n  font-family: inherit;\n}\n.btn-new-task[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px var(--violet-glow);\n}\n.kanban-board[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  flex: 1;\n  min-height: 0;\n  align-items: stretch;\n  padding-bottom: 4px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.kanban-board[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.kanban-col[_ngcontent-%COMP%] {\n  flex: 0 0 280px;\n  min-width: 280px;\n  background: rgba(12, 12, 26, 0.7);\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    transform 0.2s;\n  backdrop-filter: blur(12px);\n}\n.kanban-col.drag-over[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.6);\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25), 0 8px 32px rgba(99, 102, 241, 0.15);\n  transform: scale(1.01);\n}\n.col-hd[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--border);\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 18px 18px 0 0;\n  border-top: 3px solid var(--col-accent, var(--violet));\n}\n.col-hd-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.col-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 0 8px currentColor;\n}\n.col-title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #fff;\n}\n.col-count[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 3px 9px;\n  border-radius: 100px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.col-body[_ngcontent-%COMP%] {\n  padding: 10px;\n  overflow-y: auto;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.col-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.col-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.25);\n  border-radius: 4px;\n}\n.col-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 28px 12px;\n  color: rgba(255, 255, 255, 0.15);\n  font-size: 0.78rem;\n  border: 2px dashed rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  min-height: 80px;\n}\n.col-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.tk-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 12px 13px;\n  cursor: grab;\n  transition: all 0.2s var(--ease);\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.tk-card[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.07);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);\n}\n.tk-card[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.tk-card.dragging[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  transform: scale(0.97);\n}\n.priority-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  border-radius: 14px 14px 0 0;\n}\n.priority-ribbon.p-low[_ngcontent-%COMP%] {\n  background: var(--emerald);\n}\n.priority-ribbon.p-medium[_ngcontent-%COMP%] {\n  background: var(--amber);\n}\n.priority-ribbon.p-high[_ngcontent-%COMP%] {\n  background: var(--rose);\n}\n.priority-ribbon.p-urgent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--rose),\n      #ff0050);\n}\n.tk-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n  margin-top: 6px;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  padding: 2px 7px;\n  border-radius: 100px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.tag-deal[_ngcontent-%COMP%] {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.tag-cat[_ngcontent-%COMP%] {\n  background: var(--teal-soft);\n  color: var(--teal-light);\n  border: 1px solid rgba(6, 182, 212, 0.2);\n}\n.tk-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #eee;\n  line-height: 1.3;\n  margin-bottom: 5px;\n}\n.tk-scope[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--text-2);\n  line-height: 1.4;\n  margin-bottom: 8px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tk-margin[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.15);\n  padding: 3px 8px;\n  border-radius: 100px;\n  margin-bottom: 8px;\n  font-size: 0.68rem;\n}\n.m-item[_ngcontent-%COMP%] {\n  color: var(--teal-light);\n  font-weight: 600;\n}\n.m-sep[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.2);\n}\n.m-profit[_ngcontent-%COMP%] {\n  color: var(--emerald-light);\n  font-weight: 700;\n}\n.tk-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 8px;\n  align-items: center;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.thumb[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.thumb-more[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  background: rgba(99, 102, 241, 0.15);\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--violet-light);\n}\n.tk-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding-top: 8px;\n  margin-top: 4px;\n}\n.tk-avatars[_ngcontent-%COMP%] {\n  display: flex;\n}\n.av-sm[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  color: #fff;\n  font-size: 0.6rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--bg-sidebar);\n  margin-right: -5px;\n  position: relative;\n}\n.av-more[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-2);\n  font-size: 0.55rem;\n}\n.tk-foot-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tk-attach[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--text-3);\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.priority-badge[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 100px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.pb-low[_ngcontent-%COMP%] {\n  background: var(--emerald-soft);\n  color: var(--emerald-light);\n}\n.pb-medium[_ngcontent-%COMP%] {\n  background: var(--amber-soft);\n  color: var(--amber-light);\n}\n.pb-high[_ngcontent-%COMP%] {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n}\n.pb-urgent[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 80, 0.15);\n  color: #ff4488;\n  border: 1px solid rgba(255, 0, 80, 0.25);\n}\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1200;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(6px);\n  display: flex;\n  justify-content: flex-end;\n}\n.detail-drawer[_ngcontent-%COMP%] {\n  width: 480px;\n  max-width: 95vw;\n  height: 100vh;\n  background: #0e0e22;\n  border-left: 1px solid rgba(99, 102, 241, 0.2);\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_drawerSlideIn 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: -20px 0 60px rgba(0, 0, 0, 0.6);\n}\n@keyframes _ngcontent-%COMP%_drawerSlideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.drawer-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px 22px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  background: rgba(99, 102, 241, 0.06);\n  flex-shrink: 0;\n}\n.drawer-hd-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.drawer-task-av[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #fff;\n  box-shadow: 0 0 16px var(--violet-glow);\n}\n.drawer-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.3;\n  margin-bottom: 6px;\n  word-break: break-word;\n}\n.drawer-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.status-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  overflow-x: auto;\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.status-switcher[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0;\n}\n.status-btn[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  border-radius: 100px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  font-size: 0.72rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.status-btn.active[_ngcontent-%COMP%] {\n  background: var(--col-c, var(--violet));\n  border-color: var(--col-c, var(--violet));\n  color: #fff;\n  opacity: 1;\n  box-shadow: 0 2px 12px var(--col-c, var(--violet-glow));\n}\n.status-btn[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.drawer-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.drawer-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.3);\n  border-radius: 4px;\n}\n.pricing-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: rgba(6, 182, 212, 0.06);\n  border: 1px solid rgba(6, 182, 212, 0.15);\n  border-radius: 12px;\n  padding: 14px 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.pricing-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.pricing-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--text-2);\n}\n.pricing-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n}\n.pricing-item.highlight[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid rgba(16, 185, 129, 0.2);\n}\n.pricing-sep[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.2);\n  font-size: 0.9rem;\n}\n.teal[_ngcontent-%COMP%] {\n  color: var(--teal-light) !important;\n}\n.amber[_ngcontent-%COMP%] {\n  color: var(--amber-light) !important;\n}\n.emerald[_ngcontent-%COMP%] {\n  color: var(--emerald-light) !important;\n}\n.drawer-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ds-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.ds-text[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--text);\n  line-height: 1.55;\n}\n.team-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.team-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(99, 102, 241, 0.08);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 5px 10px;\n  border-radius: 100px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--violet-light);\n}\n.tc-av[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n}\n.deal-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--violet-soft);\n  border: 1px solid var(--border-v);\n  padding: 6px 12px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  color: var(--violet-light);\n  font-weight: 600;\n}\n.att-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.att-img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.att-img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.att-doc[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-size: 0.62rem;\n  color: var(--text-2);\n}\n.att-doc[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px dashed rgba(99, 102, 241, 0.25);\n  color: var(--text-2);\n  font-size: 0.78rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.5);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.upload-zone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.notes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 240px;\n  overflow-y: auto;\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.25);\n  border-radius: 4px;\n}\n.note-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.note-av[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet-2),\n      var(--teal-2));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #fff;\n}\n.note-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.note-author[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--violet-light);\n  margin-bottom: 2px;\n}\n.note-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text);\n  line-height: 1.45;\n}\n.note-time[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-3);\n  margin-top: 3px;\n  display: block;\n}\n.notes-empty[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-3);\n  text-align: center;\n  padding: 12px;\n}\n.add-note[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.add-note[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  color: var(--text);\n  font-family: inherit;\n  font-size: 0.84rem;\n  outline: none;\n  resize: none;\n  transition: all 0.2s;\n}\n.add-note[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(99, 102, 241, 0.05);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.btn-send-note[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--violet-2));\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  box-shadow: 0 4px 14px var(--violet-glow);\n}\n.btn-send-note[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px var(--violet-glow);\n}\n.btn-send-note[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.crm-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1200;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.create-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  background: #0e0e22;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 22px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: _ngcontent-%COMP%_modalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.modal-hd[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.fg.full[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.fg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.fg[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.fg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  color: var(--text);\n  outline: none;\n  font-family: inherit;\n  font-size: 0.86rem;\n  transition: all 0.2s;\n}\n.fg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.fg[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.fg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(99, 102, 241, 0.06);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.fg[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #12121e;\n  color: var(--text);\n}\n.fg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.margin-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--emerald-soft);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  color: var(--emerald-light);\n  font-weight: 600;\n}\n.margin-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.modal-ft[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  font-size: 0.84rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--violet-2));\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.84rem;\n  cursor: pointer;\n  transition: all 0.25s;\n  font-family: inherit;\n  box-shadow: 0 4px 16px var(--violet-glow);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 24px var(--violet-glow);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1500;\n  background: rgba(0, 0, 0, 0.92);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 92vw;\n  max-height: 90vh;\n  border-radius: 14px;\n  box-shadow: 0 0 80px rgba(0, 0, 0, 0.8);\n}\n.lb-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #fff;\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.lb-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n@media (max-width: 768px) {\n  .tb-shell[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .detail-drawer[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg.full[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=tasks-board.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksBoardComponent, [{
    type: Component,
    args: [{ selector: "app-tasks-board", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      PrimePickerSelectComponent,
      DialogModule,
      InputTextModule,
      TextareaModule,
      DropdownModule
    ], template: `
    <div class="tb-shell">

      <!-- \u2500\u2500 PAGE HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="tb-header">
        <div class="tb-header-left">
          <div class="tb-icon-badge"><i class="fa-solid fa-list-check"></i></div>
          <div>
            <h2>\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630</h2>
            <p>\u0633\u062D\u0628 \u0648\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A \u0628\u064A\u0646 \u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0644\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062D\u0627\u0644\u0629 \u0641\u0648\u0631\u0627\u064B</p>
          </div>
        </div>
        <div class="tb-header-right">
          <div class="tb-stats">
            <span class="stat-pill">
              <i class="fa-solid fa-circle-dot" style="color:var(--violet-light)"></i>
              {{ tasks.length }} \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A
            </span>
            <span class="stat-pill emerald">
              <i class="fa-solid fa-check-circle"></i>
              {{ getTasksForColumn('done').length }} \u0645\u0643\u062A\u0645\u0644
            </span>
          </div>
          <button class="btn-new-task" (click)="openCreateModal()">
            <i class="fa-solid fa-plus"></i> \u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629
          </button>
        </div>
      </div>

      <!-- \u2500\u2500 KANBAN BOARD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="kanban-board">
        <div
          class="kanban-col"
          *ngFor="let col of columns"
          [attr.data-col]="col.key"
          (dragover)="onDragOver($event, col.key)"
          (dragleave)="onDragLeave($event)"
          (drop)="onDrop($event, col.key)"
          [class.drag-over]="dragOverCol === col.key"
        >
          <!-- Column Header -->
          <div class="col-hd" [style.--col-accent]="col.color">
            <div class="col-hd-left">
              <span class="col-dot" [style.background]="col.color"></span>
              <span class="col-title">{{ col.title }}</span>
            </div>
            <span class="col-count" [style.color]="col.color">
              {{ getTasksForColumn(col.key).length }}
            </span>
          </div>

          <!-- Cards -->
          <div class="col-body">
            <div
              class="tk-card"
              *ngFor="let task of getTasksForColumn(col.key)"
              draggable="true"
              (dragstart)="onDragStart($event, task)"
              (dragend)="onDragEnd()"
              (click)="openTaskDetail(task)"
              [class.dragging]="draggingTask?.id === task.id"
            >
              <!-- Priority ribbon -->
              <div class="priority-ribbon" [class]="'p-' + (task.priority || 'medium')"></div>

              <!-- Top tags -->
              <div class="tk-tags" *ngIf="task.deal || task.sub_category">
                <span class="tag tag-deal" *ngIf="task.deal">
                  <i class="fa-solid fa-handshake"></i> {{ task.deal.title | slice:0:18 }}{{ task.deal.title?.length > 18 ? '...' : '' }}
                </span>
                <span class="tag tag-cat" *ngIf="task.sub_category">
                  {{ task.sub_category.name_ar }}
                </span>
              </div>

              <!-- Title -->
              <div class="tk-title">{{ task.title }}</div>

              <!-- Scope preview -->
              <div class="tk-scope" *ngIf="task.scope">{{ task.scope }}</div>

              <!-- Margin chip -->
              <div class="tk-margin" *ngIf="task.client_price > 0">
                <span class="m-item"><i class="fa-solid fa-arrow-up-right-dots"></i> {{ task.client_price | number:'1.0-0' }} EGP</span>
                <span class="m-sep">\u2192</span>
                <span class="m-profit">+{{ (task.client_price - task.employee_price) | number:'1.0-0' }} margin</span>
              </div>

              <!-- Thumbnails -->
              <div class="tk-thumbs" *ngIf="getImageAttachments(task).length > 0">
                <img
                  *ngFor="let img of getImageAttachments(task).slice(0,3)"
                  [src]="img.file_url"
                  class="thumb"
                  (click)="expandImage(img.file_url, $event)"
                  alt=""
                />
                <span class="thumb-more" *ngIf="getImageAttachments(task).length > 3">
                  +{{ getImageAttachments(task).length - 3 }}
                </span>
              </div>

              <!-- Footer -->
              <div class="tk-foot">
                <div class="tk-avatars">
                  <div
                    *ngFor="let u of (task.users || []).slice(0,4)"
                    class="av-sm"
                    [title]="u.name"
                  >{{ u.name?.charAt(0) }}</div>
                  <div class="av-sm av-more" *ngIf="(task.users || []).length > 4">
                    +{{ (task.users || []).length - 4 }}
                  </div>
                </div>
                <div class="tk-foot-right">
                  <span class="tk-attach" *ngIf="(task.attachments || []).length > 0">
                    <i class="fa-solid fa-paperclip"></i> {{ (task.attachments || []).length }}
                  </span>
                  <span class="priority-badge" [class]="'pb-' + (task.priority || 'medium')">
                    {{ task.priority || 'medium' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Empty column drop zone -->
            <div class="col-empty" *ngIf="getTasksForColumn(col.key).length === 0">
              <i class="fa-regular fa-circle-dot"></i>
              <span>Drop here</span>
            </div>
          </div>
        </div>
      </div>

      <!-- \u2500\u2500 TASK DETAIL SIDE DRAWER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="drawer-backdrop" *ngIf="selectedTask" (click)="closeDetail($event)">
        <div class="detail-drawer" (click)="$event.stopPropagation()">

          <!-- Drawer Header -->
          <div class="drawer-hd">
            <div class="drawer-hd-left">
              <div class="drawer-task-av">{{ selectedTask.title?.charAt(0) }}</div>
              <div>
                <div class="drawer-title">{{ selectedTask.title }}</div>
                <div class="drawer-meta">
                  <span class="badge" [ngClass]="selectedTask.status">{{ selectedTask.status?.replace('_', ' ') }}</span>
                  <span class="priority-badge" [class]="'pb-' + (selectedTask.priority || 'medium')">{{ selectedTask.priority }}</span>
                </div>
              </div>
            </div>
            <button class="close-btn" (click)="selectedTask = null">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Status quick-change -->
          <div class="status-switcher">
            <button
              *ngFor="let col of columns"
              class="status-btn"
              [class.active]="selectedTask.status === col.key"
              [style.--col-c]="col.color"
              (click)="updateTaskStatus(selectedTask, col.key)"
            >{{ col.title }}</button>
          </div>

          <!-- Drawer Body -->
          <div class="drawer-body">

            <!-- Pricing banner -->
            <div class="pricing-banner" *ngIf="selectedTask.client_price > 0">
              <div class="pricing-item">
                <small>Client Price</small>
                <strong class="teal">{{ selectedTask.client_price | number:'1.2-2' }} EGP</strong>
              </div>
              <div class="pricing-sep"><i class="fa-solid fa-arrow-right"></i></div>
              <div class="pricing-item">
                <small>Employee Cost</small>
                <strong class="amber">{{ selectedTask.employee_price | number:'1.2-2' }} EGP</strong>
              </div>
              <div class="pricing-sep"><i class="fa-solid fa-equals"></i></div>
              <div class="pricing-item highlight">
                <small>Company Margin</small>
                <strong class="emerald">+{{ (selectedTask.client_price - selectedTask.employee_price) | number:'1.2-2' }} EGP</strong>
              </div>
            </div>

            <!-- Scope -->
            <div class="drawer-section" *ngIf="selectedTask.scope">
              <div class="ds-label"><i class="fa-solid fa-file-lines"></i> Scope</div>
              <div class="ds-text">{{ selectedTask.scope }}</div>
            </div>

            <!-- Team -->
            <div class="drawer-section" *ngIf="(selectedTask.users || []).length > 0">
              <div class="ds-label"><i class="fa-solid fa-users"></i> Assigned Team</div>
              <div class="team-chips">
                <div class="team-chip" *ngFor="let u of selectedTask.users">
                  <div class="tc-av">{{ u.name?.charAt(0) }}</div>
                  <span>{{ u.name }}</span>
                </div>
              </div>
            </div>

            <!-- Deal info -->
            <div class="drawer-section" *ngIf="selectedTask.deal">
              <div class="ds-label"><i class="fa-solid fa-handshake"></i> Linked Deal</div>
              <div class="deal-chip">
                <i class="fa-solid fa-link"></i> {{ selectedTask.deal.title }}
              </div>
            </div>

            <!-- Attachments -->
            <div class="drawer-section">
              <div class="ds-label"><i class="fa-solid fa-images"></i> Attachments</div>
              <div class="att-grid">
                <div
                  *ngFor="let att of (selectedTask.attachments || [])"
                  class="att-item"
                >
                  <img *ngIf="att.is_image" [src]="att.file_url" class="att-img" (click)="expandImage(att.file_url, $event)" />
                  <div *ngIf="!att.is_image" class="att-doc">
                    <i class="fa-solid fa-file-lines"></i>
                    <span>{{ att.file_name || 'File' }}</span>
                  </div>
                </div>
              </div>
              <div class="upload-zone" (click)="fileInput.click()">
                <input type="file" #fileInput (change)="onFileSelected($event)" style="display:none" />
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <span>Click to upload attachment</span>
              </div>
            </div>

            <!-- Comments -->
            <div class="drawer-section">
              <div class="ds-label"><i class="fa-solid fa-comments"></i> \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0648\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A</div>
              <div class="notes-list">
                <div class="note-item" *ngFor="let note of (selectedTask.notes || [])">
                  <div class="note-av">{{ note.user?.name?.charAt(0) || 'U' }}</div>
                  <div class="note-body">
                    <div class="note-author">{{ note.user?.name || '\u0645\u0633\u062A\u062E\u062F\u0645' }}</div>
                    <div class="note-text">{{ note.note }}</div>
                    <small class="note-time">{{ note.created_at | date:'short' }}</small>
                  </div>
                </div>
                <div class="notes-empty" *ngIf="!(selectedTask.notes || []).length">
                  <i class="fa-regular fa-comment"></i> \u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0628\u0639\u062F
                </div>
              </div>
              <div class="add-note">
                <textarea
                  [(ngModel)]="newNoteText"
                  placeholder="\u0627\u0643\u062A\u0628 \u062A\u0639\u0644\u064A\u0642\u0627\u064B... \u064A\u0645\u0643\u0646\u0643 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 @ \u0644\u0625\u0634\u0627\u0631\u0629 \u0623\u064A \u0639\u0636\u0648"
                  rows="2"
                  dir="rtl"
                ></textarea>
                <button class="btn-send-note" (click)="submitNote()" [disabled]="!newNoteText.trim()">
                  <i class="fa-solid fa-paper-plane"></i> \u0625\u0631\u0633\u0627\u0644
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- \u2500\u2500 CREATE TASK MODAL (PrimeNG Dialog) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <p-dialog [(visible)]="showCreateModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0645\u0647\u0645\u0629 \u062C\u062F\u064A\u062F\u0629" [style]="{ width: '640px' }">
        <form [formGroup]="taskForm" (ngSubmit)="saveTask()">
          <div class="modal-body">
            <div class="form-grid">

              <div class="fg full">
                <label>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 <span class="req">*</span></label>
                <input type="text" pInputText formControlName="title" placeholder="\u0645\u062B\u0627\u0644: \u062A\u0635\u0645\u064A\u0645 10 \u0641\u064A\u062F\u064A\u0648 \u0631\u064A\u0644\u0632 \u0644\u0644\u062D\u0645\u0644\u0629..." />
              </div>

              <div class="fg">
                <label>\u0627\u0644\u0635\u0641\u0642\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629</label>
                <app-prime-picker-select
                  formControlName="deal_id"
                  [items]="deals"
                  optionLabel="title"
                  optionValue="id"
                  placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0642\u0629..."
                ></app-prime-picker-select>
              </div>

              <div class="fg">
                <label>\u0627\u0644\u0642\u0633\u0645</label>
                <app-prime-picker-select
                  formControlName="department_id"
                  [items]="departments"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645..."
                ></app-prime-picker-select>
              </div>

              <div class="fg">
                <label>\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644 (\u062C.\u0645)</label>
                <input type="number" pInputText formControlName="client_price" (input)="computeMargin()" placeholder="0" />
              </div>

              <div class="fg">
                <label>\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0645\u0648\u0638\u0641 (\u062C.\u0645)</label>
                <input type="number" pInputText formControlName="employee_price" (input)="computeMargin()" placeholder="0" />
              </div>

              <div class="fg full margin-preview" *ngIf="computedMarginVal > 0">
                <i class="fa-solid fa-chart-line"></i>
                \u0647\u0627\u0645\u0634 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u0643\u0629: <strong>+{{ computedMarginVal | number:'1.2-2' }} \u062C.\u0645</strong>
              </div>

              <div class="fg">
                <label>\u0627\u0644\u062D\u0627\u0644\u0629</label>
                <p-dropdown
                  formControlName="status"
                  [appendTo]="'body'"
                  [options]="columns"
                  optionLabel="title"
                  optionValue="key"
                  placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629..."
                ></p-dropdown>
              </div>

              <div class="fg">
                <label>\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629</label>
                <p-dropdown
                  formControlName="priority"
                  [appendTo]="'body'"
                  [options]="[
                    { label: '\u0645\u0646\u062E\u0641\u0636\u0629', value: 'low' },
                    { label: '\u0645\u062A\u0648\u0633\u0637\u0629', value: 'medium' },
                    { label: '\u0639\u0627\u0644\u064A\u0629', value: 'high' },
                    { label: '\u0639\u0627\u062C\u0644\u0629 \u062C\u062F\u0627\u064B', value: 'urgent' }
                  ]"
                  optionLabel="label"
                  optionValue="value"
                  placeholder="\u0627\u062E\u062A\u0631 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629..."
                ></p-dropdown>
              </div>

              <div class="fg full">
                <label>\u0627\u0644\u0648\u0635\u0641 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A (Scope)</label>
                <textarea pTextarea formControlName="scope" rows="3" placeholder="\u0627\u0643\u062A\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0645\u0637\u0644\u0648\u0628\u0627\u062A \u0627\u0644\u0645\u0647\u0645\u0629..."></textarea>
              </div>

            </div>
          </div>

          <ng-template pTemplate="footer">
            <button type="button" class="btn-cancel" (click)="showCreateModal = false">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn-save" [disabled]="taskForm.invalid || loading">
              <i class="fa-solid fa-floppy-disk"></i>
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0647\u0645\u0629' }}
            </button>
          </ng-template>
        </form>
      </p-dialog>

      <!-- \u2500\u2500 LIGHTBOX \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="lightbox" *ngIf="expandedImageUrl" (click)="expandedImageUrl = null">
        <img [src]="expandedImageUrl" />
        <button class="lb-close"><i class="fa-solid fa-xmark"></i></button>
      </div>

    </div>
  `, styles: ['/* angular:styles/component:css;ebc360c724878d6ed4a760d0eef5d2084dcc27f3fca787dbdd0e6703392acd5c;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/tasks/tasks-board.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.tb-shell {\n  padding: 0;\n  height: calc(100vh - var(--nav-h) - 64px);\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n  overflow: hidden;\n}\n.tb-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.tb-header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.tb-icon-badge {\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #fff;\n  box-shadow: 0 0 24px var(--violet-glow);\n  flex-shrink: 0;\n}\n.tb-header-left h2 {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  margin: 0;\n}\n.tb-header-left p {\n  color: var(--text-2);\n  font-size: 0.8rem;\n  margin: 0;\n}\n.tb-header-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tb-stats {\n  display: flex;\n  gap: 8px;\n}\n.stat-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: 100px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--text-2);\n}\n.stat-pill.emerald {\n  color: var(--emerald-light);\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.btn-new-task {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--violet-2));\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.86rem;\n  cursor: pointer;\n  transition: all 0.25s;\n  box-shadow: 0 4px 20px var(--violet-glow);\n  font-family: inherit;\n}\n.btn-new-task:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px var(--violet-glow);\n}\n.kanban-board {\n  display: flex;\n  gap: 14px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  flex: 1;\n  min-height: 0;\n  align-items: stretch;\n  padding-bottom: 4px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.kanban-board::-webkit-scrollbar {\n  display: none;\n}\n.kanban-col {\n  flex: 0 0 280px;\n  min-width: 280px;\n  background: rgba(12, 12, 26, 0.7);\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    transform 0.2s;\n  backdrop-filter: blur(12px);\n}\n.kanban-col.drag-over {\n  border-color: rgba(99, 102, 241, 0.6);\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25), 0 8px 32px rgba(99, 102, 241, 0.15);\n  transform: scale(1.01);\n}\n.col-hd {\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--border);\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 18px 18px 0 0;\n  border-top: 3px solid var(--col-accent, var(--violet));\n}\n.col-hd-left {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.col-dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 0 8px currentColor;\n}\n.col-title {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #fff;\n}\n.col-count {\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 3px 9px;\n  border-radius: 100px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.col-body {\n  padding: 10px;\n  overflow-y: auto;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.col-body::-webkit-scrollbar {\n  width: 3px;\n}\n.col-body::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.25);\n  border-radius: 4px;\n}\n.col-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 28px 12px;\n  color: rgba(255, 255, 255, 0.15);\n  font-size: 0.78rem;\n  border: 2px dashed rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  min-height: 80px;\n}\n.col-empty i {\n  font-size: 1.2rem;\n}\n.tk-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 12px 13px;\n  cursor: grab;\n  transition: all 0.2s var(--ease);\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.tk-card:hover {\n  background: rgba(99, 102, 241, 0.07);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);\n}\n.tk-card:active {\n  cursor: grabbing;\n}\n.tk-card.dragging {\n  opacity: 0.4;\n  transform: scale(0.97);\n}\n.priority-ribbon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  border-radius: 14px 14px 0 0;\n}\n.priority-ribbon.p-low {\n  background: var(--emerald);\n}\n.priority-ribbon.p-medium {\n  background: var(--amber);\n}\n.priority-ribbon.p-high {\n  background: var(--rose);\n}\n.priority-ribbon.p-urgent {\n  background:\n    linear-gradient(\n      90deg,\n      var(--rose),\n      #ff0050);\n}\n.tk-tags {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n  margin-top: 6px;\n}\n.tag {\n  font-size: 0.65rem;\n  padding: 2px 7px;\n  border-radius: 100px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.tag-deal {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.tag-cat {\n  background: var(--teal-soft);\n  color: var(--teal-light);\n  border: 1px solid rgba(6, 182, 212, 0.2);\n}\n.tk-title {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #eee;\n  line-height: 1.3;\n  margin-bottom: 5px;\n}\n.tk-scope {\n  font-size: 0.76rem;\n  color: var(--text-2);\n  line-height: 1.4;\n  margin-bottom: 8px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tk-margin {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.15);\n  padding: 3px 8px;\n  border-radius: 100px;\n  margin-bottom: 8px;\n  font-size: 0.68rem;\n}\n.m-item {\n  color: var(--teal-light);\n  font-weight: 600;\n}\n.m-sep {\n  color: rgba(255, 255, 255, 0.2);\n}\n.m-profit {\n  color: var(--emerald-light);\n  font-weight: 700;\n}\n.tk-thumbs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 8px;\n  align-items: center;\n}\n.thumb {\n  width: 38px;\n  height: 38px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.thumb:hover {\n  transform: scale(1.1);\n}\n.thumb-more {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  background: rgba(99, 102, 241, 0.15);\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--violet-light);\n}\n.tk-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding-top: 8px;\n  margin-top: 4px;\n}\n.tk-avatars {\n  display: flex;\n}\n.av-sm {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  color: #fff;\n  font-size: 0.6rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--bg-sidebar);\n  margin-right: -5px;\n  position: relative;\n}\n.av-more {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-2);\n  font-size: 0.55rem;\n}\n.tk-foot-right {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tk-attach {\n  font-size: 0.68rem;\n  color: var(--text-3);\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.priority-badge {\n  font-size: 0.6rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 100px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.pb-low {\n  background: var(--emerald-soft);\n  color: var(--emerald-light);\n}\n.pb-medium {\n  background: var(--amber-soft);\n  color: var(--amber-light);\n}\n.pb-high {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n}\n.pb-urgent {\n  background: rgba(255, 0, 80, 0.15);\n  color: #ff4488;\n  border: 1px solid rgba(255, 0, 80, 0.25);\n}\n.drawer-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 1200;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(6px);\n  display: flex;\n  justify-content: flex-end;\n}\n.detail-drawer {\n  width: 480px;\n  max-width: 95vw;\n  height: 100vh;\n  background: #0e0e22;\n  border-left: 1px solid rgba(99, 102, 241, 0.2);\n  display: flex;\n  flex-direction: column;\n  animation: drawerSlideIn 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: -20px 0 60px rgba(0, 0, 0, 0.6);\n}\n@keyframes drawerSlideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.drawer-hd {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px 22px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  background: rgba(99, 102, 241, 0.06);\n  flex-shrink: 0;\n}\n.drawer-hd-left {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.drawer-task-av {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #fff;\n  box-shadow: 0 0 16px var(--violet-glow);\n}\n.drawer-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.3;\n  margin-bottom: 6px;\n  word-break: break-word;\n}\n.drawer-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.status-switcher {\n  display: flex;\n  gap: 5px;\n  overflow-x: auto;\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.status-switcher::-webkit-scrollbar {\n  height: 0;\n}\n.status-btn {\n  padding: 5px 11px;\n  border-radius: 100px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  font-size: 0.72rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.status-btn.active {\n  background: var(--col-c, var(--violet));\n  border-color: var(--col-c, var(--violet));\n  color: #fff;\n  opacity: 1;\n  box-shadow: 0 2px 12px var(--col-c, var(--violet-glow));\n}\n.status-btn:not(.active):hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.drawer-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.drawer-body::-webkit-scrollbar {\n  width: 3px;\n}\n.drawer-body::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.3);\n  border-radius: 4px;\n}\n.pricing-banner {\n  display: flex;\n  align-items: center;\n  background: rgba(6, 182, 212, 0.06);\n  border: 1px solid rgba(6, 182, 212, 0.15);\n  border-radius: 12px;\n  padding: 14px 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.pricing-item {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.pricing-item small {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--text-2);\n}\n.pricing-item strong {\n  font-size: 0.95rem;\n  font-weight: 800;\n}\n.pricing-item.highlight {\n  margin-left: auto;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid rgba(16, 185, 129, 0.2);\n}\n.pricing-sep {\n  color: rgba(255, 255, 255, 0.2);\n  font-size: 0.9rem;\n}\n.teal {\n  color: var(--teal-light) !important;\n}\n.amber {\n  color: var(--amber-light) !important;\n}\n.emerald {\n  color: var(--emerald-light) !important;\n}\n.drawer-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ds-label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.ds-text {\n  font-size: 0.84rem;\n  color: var(--text);\n  line-height: 1.55;\n}\n.team-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.team-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(99, 102, 241, 0.08);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  padding: 5px 10px;\n  border-radius: 100px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--violet-light);\n}\n.tc-av {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n}\n.deal-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--violet-soft);\n  border: 1px solid var(--border-v);\n  padding: 6px 12px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  color: var(--violet-light);\n  font-weight: 600;\n}\n.att-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.att-img {\n  width: 70px;\n  height: 70px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.att-img:hover {\n  transform: scale(1.05);\n}\n.att-doc {\n  width: 70px;\n  height: 70px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-size: 0.62rem;\n  color: var(--text-2);\n}\n.att-doc i {\n  font-size: 1.2rem;\n}\n.upload-zone {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px dashed rgba(99, 102, 241, 0.25);\n  color: var(--text-2);\n  font-size: 0.78rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.upload-zone:hover {\n  border-color: rgba(99, 102, 241, 0.5);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.upload-zone i {\n  font-size: 1rem;\n}\n.notes-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 240px;\n  overflow-y: auto;\n}\n.notes-list::-webkit-scrollbar {\n  width: 3px;\n}\n.notes-list::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.25);\n  border-radius: 4px;\n}\n.note-item {\n  display: flex;\n  gap: 10px;\n}\n.note-av {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet-2),\n      var(--teal-2));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #fff;\n}\n.note-body {\n  flex: 1;\n}\n.note-author {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--violet-light);\n  margin-bottom: 2px;\n}\n.note-text {\n  font-size: 0.82rem;\n  color: var(--text);\n  line-height: 1.45;\n}\n.note-time {\n  font-size: 0.65rem;\n  color: var(--text-3);\n  margin-top: 3px;\n  display: block;\n}\n.notes-empty {\n  font-size: 0.78rem;\n  color: var(--text-3);\n  text-align: center;\n  padding: 12px;\n}\n.add-note {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.add-note textarea {\n  width: 100%;\n  padding: 10px 13px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  color: var(--text);\n  font-family: inherit;\n  font-size: 0.84rem;\n  outline: none;\n  resize: none;\n  transition: all 0.2s;\n}\n.add-note textarea:focus {\n  border-color: var(--violet);\n  background: rgba(99, 102, 241, 0.05);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.btn-send-note {\n  align-self: flex-end;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--violet-2));\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  box-shadow: 0 4px 14px var(--violet-glow);\n}\n.btn-send-note:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px var(--violet-glow);\n}\n.btn-send-note:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.crm-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 1200;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.create-modal {\n  width: 100%;\n  max-width: 640px;\n  background: #0e0e22;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 22px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: modalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-hd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.modal-hd h3 {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n}\n.close-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.close-btn:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.modal-body {\n  padding: 20px 24px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.fg.full {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.fg input,\n.fg select,\n.fg textarea {\n  width: 100%;\n  padding: 10px 13px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  color: var(--text);\n  outline: none;\n  font-family: inherit;\n  font-size: 0.86rem;\n  transition: all 0.2s;\n}\n.fg input:focus,\n.fg select:focus,\n.fg textarea:focus {\n  border-color: var(--violet);\n  background: rgba(99, 102, 241, 0.06);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.fg select option {\n  background: #12121e;\n  color: var(--text);\n}\n.fg textarea {\n  resize: vertical;\n}\n.req {\n  color: var(--rose-light);\n}\n.margin-preview {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--emerald-soft);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  color: var(--emerald-light);\n  font-weight: 600;\n}\n.margin-preview strong {\n  font-size: 1rem;\n}\n.modal-ft {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.btn-cancel {\n  padding: 9px 18px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  font-size: 0.84rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-cancel:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--violet-2));\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.84rem;\n  cursor: pointer;\n  transition: all 0.25s;\n  font-family: inherit;\n  box-shadow: 0 4px 16px var(--violet-glow);\n}\n.btn-save:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 24px var(--violet-glow);\n}\n.btn-save:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.lightbox {\n  position: fixed;\n  inset: 0;\n  z-index: 1500;\n  background: rgba(0, 0, 0, 0.92);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.lightbox img {\n  max-width: 92vw;\n  max-height: 90vh;\n  border-radius: 14px;\n  box-shadow: 0 0 80px rgba(0, 0, 0, 0.8);\n}\n.lb-close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #fff;\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.lb-close:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n@media (max-width: 768px) {\n  .tb-shell {\n    padding: 16px;\n  }\n  .detail-drawer {\n    width: 100%;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .fg.full {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=tasks-board.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksBoardComponent, { className: "TasksBoardComponent", filePath: "src/app/components/tasks/tasks-board.component.ts", lineNumber: 930 });
})();
export {
  TasksBoardComponent
};
//# sourceMappingURL=chunk-YXHASL3T.js.map
