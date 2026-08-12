import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-TRCV7UC3.js";
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
} from "./chunk-6TEPOG2V.js";
import {
  ApiService
} from "./chunk-VFRQX7SG.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CK3LQYPJ.js";

// src/app/components/controller-dashboard/controller-dashboard.component.ts
function ControllerDashboardComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No category data yet");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_95_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 104)(2, "span", 105);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "small", 107);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 108);
    \u0275\u0275element(10, "div", 109);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.count, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(8, 5, ctx_r1.overviewStats.projects > 0 ? item_r1.count / ctx_r1.overviewStats.projects * 100 : 0, "1.0-0"), "%)");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.overviewStats.projects > 0 ? item_r1.count / ctx_r1.overviewStats.projects * 100 : 0, "%");
  }
}
function ControllerDashboardComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275template(1, ControllerDashboardComponent_div_95_div_1_Template, 11, 8, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.projectsChartData);
  }
}
function ControllerDashboardComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No leads data yet");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_103_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 104)(2, "span", 105);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 110);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "small", 107);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 108);
    \u0275\u0275element(10, "div", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r3.count, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(8, 5, ctx_r1.overviewStats.inquiries > 0 ? item_r3.count / ctx_r1.overviewStats.inquiries * 100 : 0, "1.0-0"), "%)");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.overviewStats.inquiries > 0 ? item_r3.count / ctx_r1.overviewStats.inquiries * 100 : 0, "%");
  }
}
function ControllerDashboardComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275template(1, ControllerDashboardComponent_div_103_div_1_Template, 11, 8, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.inquiriesChartData);
  }
}
function ControllerDashboardComponent_tr_124_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 118);
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r4.main_image_url || p_r4.image, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_tr_124_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((p_r4.title_en || p_r4.title || "?")[0]);
  }
}
function ControllerDashboardComponent_tr_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 112);
    \u0275\u0275template(3, ControllerDashboardComponent_tr_124_img_3_Template, 1, 1, "img", 113)(4, ControllerDashboardComponent_tr_124_div_4_Template, 2, 1, "div", 114);
    \u0275\u0275elementStart(5, "span", 115);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span", 116);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 117);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r4.main_image_url || p_r4.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(p_r4.main_image_url || p_r4.image));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.title_en || p_r4.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((p_r4.category == null ? null : p_r4.category.name_en) || (p_r4.category == null ? null : p_r4.category.name == null ? null : p_r4.category.name.en) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.client || "\u2014");
  }
}
function ControllerDashboardComponent_tr_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 120);
    \u0275\u0275text(2, "No recent projects found.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 121);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_127_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditService());
    });
    \u0275\u0275element(5, "i", 122);
    \u0275\u0275text(6, " Cancel Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "form", 74);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_127_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveService());
    });
    \u0275\u0275elementStart(9, "div", 75)(10, "div", 76)(11, "label", 77);
    \u0275\u0275text(12, "Service Title (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 76)(15, "label", 77);
    \u0275\u0275text(16, "Service Title (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 76)(19, "label", 77);
    \u0275\u0275text(20, "Category / Badge (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 76)(23, "label", 77);
    \u0275\u0275text(24, "Category / Badge (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 82)(27, "label", 77);
    \u0275\u0275text(28, "Description (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 82)(31, "label", 77);
    \u0275\u0275text(32, "Description (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "textarea", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 76)(35, "label", 77);
    \u0275\u0275text(36, "FontAwesome Icon Class");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 76)(39, "label", 77);
    \u0275\u0275text(40, "Display Order");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 82)(43, "label", 77);
    \u0275\u0275text(44, "Features - English (Comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 82)(47, "label", 77);
    \u0275\u0275text(48, "Features - Arabic (Comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 82)(51, "label", 77);
    \u0275\u0275text(52, "Stats - English (Format: Label:SubText:OptionalBadge, separated by commas)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 82)(55, "label", 77);
    \u0275\u0275text(56, "Stats - Arabic (Format: Label:SubText:OptionalBadge, separated by commas)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 76)(59, "label", 77);
    \u0275\u0275text(60, "CTA Text (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 76)(63, "label", 77);
    \u0275\u0275text(64, "CTA Text (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 82)(67, "label", 77);
    \u0275\u0275text(68, "CTA Link URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 138)(71, "button", 86);
    \u0275\u0275element(72, "i", 87);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingService ? "Edit Service" : "Add New Service");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.serviceForm);
    \u0275\u0275advance(63);
    \u0275\u0275property("disabled", ctx_r1.loadingService || ctx_r1.serviceForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingService ? "Update Service" : "Create Service", " ");
  }
}
function ControllerDashboardComponent_tr_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 139);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 140);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 141);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_153_Template_button_click_12_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editService(s_r7));
    });
    \u0275\u0275element(13, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 143);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_153_Template_button_click_14_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteService(s_r7.id));
    });
    \u0275\u0275element(15, "i", 144);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(s_r7.iconClass || s_r7.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r7.title_en || (s_r7.title == null ? null : s_r7.title.en) || s_r7.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r7.subtitle_en || (s_r7.category == null ? null : s_r7.category.en) || s_r7.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.order);
  }
}
function ControllerDashboardComponent_tr_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145);
    \u0275\u0275text(2, "No services found.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_156_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 173);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    \u0275\u0275property("value", cat_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r9.name_en || (cat_r9.name == null ? null : cat_r9.name.en) || cat_r9.name);
  }
}
function ControllerDashboardComponent_div_156_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275element(1, "img", 175);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.projectImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_div_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 121);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_156_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditProject());
    });
    \u0275\u0275element(5, "i", 122);
    \u0275\u0275text(6, " Cancel Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "form", 74);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_156_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProject());
    });
    \u0275\u0275elementStart(9, "h3", 146);
    \u0275\u0275text(10, "1. General Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 75)(12, "div", 76)(13, "label", 77);
    \u0275\u0275text(14, "Project Title (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 76)(17, "label", 77);
    \u0275\u0275text(18, "Project Title (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 76)(21, "label", 77);
    \u0275\u0275text(22, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 149)(24, "option", 150);
    \u0275\u0275text(25, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ControllerDashboardComponent_div_156_option_26_Template, 2, 2, "option", 151);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 76)(28, "label", 77);
    \u0275\u0275text(29, "Main Image Alt Text (SEO)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 82)(32, "label", 77);
    \u0275\u0275text(33, "Description / Brief (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 82)(36, "label", 77);
    \u0275\u0275text(37, "Description / Brief (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "textarea", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "h3", 153);
    \u0275\u0275text(40, "2. Branding & Visuals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 75)(42, "div", 76)(43, "label", 77);
    \u0275\u0275text(44, "Case Study Accent Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 154);
    \u0275\u0275element(46, "input", 155)(47, "input", 156);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 76)(49, "label", 77);
    \u0275\u0275text(50, "Project Emoji Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 82)(53, "label", 77);
    \u0275\u0275text(54, "Main Image File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 158);
    \u0275\u0275listener("change", function ControllerDashboardComponent_div_156_Template_input_change_55_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProjectImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, ControllerDashboardComponent_div_156_div_56_Template, 2, 1, "div", 159);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "h3", 153);
    \u0275\u0275text(58, "3. Case Study Meta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 75)(60, "div", 76)(61, "label", 77);
    \u0275\u0275text(62, "Client Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 76)(65, "label", 77);
    \u0275\u0275text(66, "Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 82)(69, "label", 77);
    \u0275\u0275text(70, "Project Tags (Comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 82)(73, "label", 77);
    \u0275\u0275text(74, "Deliverables (Comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 163);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "h3", 153);
    \u0275\u0275text(77, "4. Challenge & Solution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 75)(79, "div", 82)(80, "label", 77);
    \u0275\u0275text(81, "Challenge (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "textarea", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 82)(84, "label", 77);
    \u0275\u0275text(85, "Challenge (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "textarea", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 82)(88, "label", 77);
    \u0275\u0275text(89, "Solution (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "textarea", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 82)(92, "label", 77);
    \u0275\u0275text(93, "Solution (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "textarea", 167);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "h3", 153);
    \u0275\u0275text(96, "5. Metrics & Testimonial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 75)(98, "div", 82)(99, "label", 77);
    \u0275\u0275text(100, "Results / Stats (Format: Value:Label, separated by commas)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(101, "input", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 82)(103, "label", 77);
    \u0275\u0275text(104, "Client Quote / Testimonial Text");
    \u0275\u0275elementEnd();
    \u0275\u0275element(105, "textarea", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 76)(107, "label", 77);
    \u0275\u0275text(108, "Quote Author Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(109, "input", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 76)(111, "label", 77);
    \u0275\u0275text(112, "Quote Author Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "input", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div", 82)(115, "label", 77);
    \u0275\u0275text(116, "Quote Author Avatar Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(117, "input", 172);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 138)(119, "button", 86);
    \u0275\u0275element(120, "i", 87);
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingProject ? "Edit Project & Case Study" : "Add New Project");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.projectForm);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(30);
    \u0275\u0275property("ngIf", ctx_r1.projectImagePreview);
    \u0275\u0275advance(63);
    \u0275\u0275property("disabled", ctx_r1.loadingProject || ctx_r1.projectForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingProject ? "Update Project & Case Study" : "Create Project", " ");
  }
}
function ControllerDashboardComponent_tr_184_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 180);
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r11.main_image_url || p_r11.image, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_tr_184_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 176);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, ControllerDashboardComponent_tr_184_img_4_Template, 1, 1, "img", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 140);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 178);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_184_Template_button_click_14_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editProject(p_r11));
    });
    \u0275\u0275element(15, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 179);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_184_Template_button_click_16_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteProject(p_r11.id));
    });
    \u0275\u0275element(17, "i", 144);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(p_r11.emoji || "fa-solid fa-rocket");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r11.main_image_url || p_r11.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r11.title_en || (p_r11.title == null ? null : p_r11.title.en) || p_r11.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((p_r11.category == null ? null : p_r11.category.name_en) || (p_r11.category == null ? null : p_r11.category.name == null ? null : p_r11.category.name.en) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.client || "N/A");
  }
}
function ControllerDashboardComponent_tr_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 181);
    \u0275\u0275text(2, "No projects found.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_187_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275element(1, "img", 186);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.categoryImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_div_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 121);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_187_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditCategory());
    });
    \u0275\u0275element(5, "i", 122);
    \u0275\u0275text(6, " Cancel Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "form", 74);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_187_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCategory());
    });
    \u0275\u0275elementStart(9, "div", 75)(10, "div", 76)(11, "label", 77);
    \u0275\u0275text(12, "Category Name (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 76)(15, "label", 77);
    \u0275\u0275text(16, "Category Name (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 82)(19, "label", 77);
    \u0275\u0275text(20, "Description (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 82)(23, "label", 77);
    \u0275\u0275text(24, "Description (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 82)(27, "label", 77);
    \u0275\u0275text(28, "Category Thumbnail / Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 158);
    \u0275\u0275listener("change", function ControllerDashboardComponent_div_187_Template_input_change_29_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ControllerDashboardComponent_div_187_div_30_Template, 2, 1, "div", 159);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 138)(32, "button", 86);
    \u0275\u0275element(33, "i", 87);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingCategory ? "Edit Category" : "Add New Category");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.categoryForm);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngIf", ctx_r1.categoryImagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loadingCategory || ctx_r1.categoryForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingCategory ? "Update Category" : "Create Category", " ");
  }
}
function ControllerDashboardComponent_tr_213_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 191);
  }
  if (rf & 2) {
    const cat_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", cat_r14.image_url || cat_r14.image, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_tr_213_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, ControllerDashboardComponent_tr_213_img_2_Template, 1, 1, "img", 187);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 188);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "button", 189);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_213_Template_button_click_11_listener() {
      const cat_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCategory(cat_r14));
    });
    \u0275\u0275element(12, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 190);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_213_Template_button_click_13_listener() {
      const cat_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteCategory(cat_r14.id));
    });
    \u0275\u0275element(14, "i", 144);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cat_r14.image_url || cat_r14.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r14.name_en || (cat_r14.name == null ? null : cat_r14.name.en) || cat_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r14.name_ar || (cat_r14.name == null ? null : cat_r14.name.ar));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r14.description_en || (cat_r14.description == null ? null : cat_r14.description.en) || "N/A");
  }
}
function ControllerDashboardComponent_tr_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145);
    \u0275\u0275text(2, "No categories found.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_216_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275element(1, "img", 186);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.blogImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_div_216_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 121);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_216_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditBlog());
    });
    \u0275\u0275element(5, "i", 122);
    \u0275\u0275text(6, " Cancel Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "form", 74);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_216_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBlog());
    });
    \u0275\u0275elementStart(9, "div", 75)(10, "div", 76)(11, "label", 77);
    \u0275\u0275text(12, "Article Title (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 192);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 76)(15, "label", 77);
    \u0275\u0275text(16, "Article Title (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 82)(19, "label", 77);
    \u0275\u0275text(20, "Content (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 194);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 82)(23, "label", 77);
    \u0275\u0275text(24, "Content (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 195);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 76)(27, "label", 77);
    \u0275\u0275text(28, "Image Alternate Text (SEO)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 196);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 76)(31, "label", 77);
    \u0275\u0275text(32, "Media File (Image or Video)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 197);
    \u0275\u0275listener("change", function ControllerDashboardComponent_div_216_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlogImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ControllerDashboardComponent_div_216_div_34_Template, 2, 1, "div", 159);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 138)(36, "button", 86);
    \u0275\u0275element(37, "i", 198);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingBlog ? "Edit Blog Article" : "Write New Blog Article");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.blogForm);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngIf", ctx_r1.blogImagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loadingBlog || ctx_r1.blogForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingBlog ? "Update Article" : "Publish Article", " ");
  }
}
function ControllerDashboardComponent_tr_242_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 180);
  }
  if (rf & 2) {
    const b_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", b_r17.media_url || b_r17.image, \u0275\u0275sanitizeUrl);
  }
}
function ControllerDashboardComponent_tr_242_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, ControllerDashboardComponent_tr_242_img_2_Template, 1, 1, "img", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 199)(9, "span", 140);
    \u0275\u0275text(10);
    \u0275\u0275element(11, "i", 200);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "button", 201);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_242_Template_button_click_13_listener() {
      const b_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editBlog(b_r17));
    });
    \u0275\u0275element(14, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 202);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_242_Template_button_click_15_listener() {
      const b_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteBlog(b_r17.id));
    });
    \u0275\u0275element(16, "i", 144);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", b_r17.media_url || b_r17.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r17.title_en || (b_r17.title == null ? null : b_r17.title.en) || b_r17.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r17.title_ar || (b_r17.title == null ? null : b_r17.title.ar));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", b_r17.likes || 0, " ");
  }
}
function ControllerDashboardComponent_tr_243_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145);
    \u0275\u0275text(2, "No articles found.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_245_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 121);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_245_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditTestimonial());
    });
    \u0275\u0275element(5, "i", 122);
    \u0275\u0275text(6, " Cancel Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "form", 74);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_245_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveTestimonial());
    });
    \u0275\u0275elementStart(9, "div", 75)(10, "div", 76)(11, "label", 77);
    \u0275\u0275text(12, "Client Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 203);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 76)(15, "label", 77);
    \u0275\u0275text(16, "Job Title / Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 76)(19, "label", 77);
    \u0275\u0275text(20, "Company Name (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 205);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 76)(23, "label", 77);
    \u0275\u0275text(24, "Rating (1 to 5 Stars)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 206)(26, "option", 207);
    \u0275\u0275text(27, "\u2605\u2605\u2605\u2605\u2605 (5 Stars)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 208);
    \u0275\u0275text(29, "\u2605\u2605\u2605\u2605 (4 Stars)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 209);
    \u0275\u0275text(31, "\u2605\u2605\u2605 (3 Stars)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 210);
    \u0275\u0275text(33, "\u2605\u2605 (2 Stars)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 211);
    \u0275\u0275text(35, "\u2605 (1 Star)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 76)(37, "label", 77);
    \u0275\u0275text(38, "Avatar Circle Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 154);
    \u0275\u0275element(40, "input", 212)(41, "input", 213);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "div");
    \u0275\u0275elementStart(43, "div", 82)(44, "label", 77);
    \u0275\u0275text(45, "Feedback Description (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "textarea", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 82)(48, "label", 77);
    \u0275\u0275text(49, "Feedback Description (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 215);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 138)(52, "button", 86);
    \u0275\u0275element(53, "i", 87);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingTestimonial ? "Edit Testimonial" : "Add New Testimonial");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.testimonialForm);
    \u0275\u0275advance(44);
    \u0275\u0275property("disabled", ctx_r1.loadingTestimonial || ctx_r1.testimonialForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingTestimonial ? "Update Testimonial" : "Create Testimonial", " ");
  }
}
function ControllerDashboardComponent_tr_273_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 216);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 217);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 218);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 219);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_273_Template_button_click_14_listener() {
      const t_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editTestimonial(t_r20));
    });
    \u0275\u0275element(15, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 220);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_273_Template_button_click_16_listener() {
      const t_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteTestimonial(t_r20.id));
    });
    \u0275\u0275element(17, "i", 144);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", t_r20.avatar_color || "#e8620a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r20.client_name == null ? null : t_r20.client_name.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r20.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r20.job_title, " ", t_r20.company_name ? "@ " + t_r20.company_name : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r20.feedback_en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("\u2605".repeat(t_r20.rating || 5));
  }
}
function ControllerDashboardComponent_tr_274_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 221);
    \u0275\u0275text(2, "No testimonials found.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_276_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 121);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_276_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEditFaq());
    });
    \u0275\u0275element(5, "i", 122);
    \u0275\u0275text(6, " Cancel Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "form", 74);
    \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_div_276_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveFaq());
    });
    \u0275\u0275elementStart(9, "div", 75)(10, "div", 76)(11, "label", 77);
    \u0275\u0275text(12, "Question (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 222);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 76)(15, "label", 77);
    \u0275\u0275text(16, "Question (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 223);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 82)(19, "label", 77);
    \u0275\u0275text(20, "Answer (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 224);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 82)(23, "label", 77);
    \u0275\u0275text(24, "Answer (Arabic)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 225);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 76)(27, "label", 77);
    \u0275\u0275text(28, "Sort Order");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 226);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 227)(31, "label", 228);
    \u0275\u0275element(32, "input", 229);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Active (Visible on public site)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 138)(36, "button", 86);
    \u0275\u0275element(37, "i", 87);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditingFaq ? "Edit FAQ" : "Add New FAQ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.faqForm);
    \u0275\u0275advance(28);
    \u0275\u0275property("disabled", ctx_r1.loadingFaq || ctx_r1.faqForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditingFaq ? "Update FAQ" : "Create FAQ", " ");
  }
}
function ControllerDashboardComponent_tr_302_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 199);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 199)(9, "span", 230);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "button", 231);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_302_Template_button_click_12_listener() {
      const faq_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editFaq(faq_r23));
    });
    \u0275\u0275element(13, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 232);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_302_Template_button_click_14_listener() {
      const faq_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteFaq(faq_r23.id));
    });
    \u0275\u0275element(15, "i", 144);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const faq_r23 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r23.question_en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r23.question_ar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r23.order);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-orange", faq_r23.is_active)("badge-error", !faq_r23.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r23.is_active ? "Active" : "Inactive", " ");
  }
}
function ControllerDashboardComponent_tr_303_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145);
    \u0275\u0275text(2, "No FAQs found.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_span_340_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 233);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.infoMessage, "");
  }
}
function ControllerDashboardComponent_tr_363_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small", 234);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "a", 235);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275elementStart(11, "span", 236);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 140);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "br");
    \u0275\u0275elementStart(17, "small", 237);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "button", 238);
    \u0275\u0275listener("click", function ControllerDashboardComponent_tr_363_Template_button_click_23_listener() {
      const inq_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteInquiry(inq_r25.id));
    });
    \u0275\u0275element(24, "i", 144);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inq_r25 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inq_r25.full_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inq_r25.company_name || "Individual");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("href", "mailto:", inq_r25.email, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inq_r25.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inq_r25.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inq_r25.service_needed || "General");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", inq_r25.project_details);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inq_r25.project_details);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 10, inq_r25.created_at, "short"));
  }
}
function ControllerDashboardComponent_tr_364_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145);
    \u0275\u0275text(2, "No inquiries found.");
    \u0275\u0275elementEnd()();
  }
}
function ControllerDashboardComponent_div_451_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 239)(1, "button", 240);
    \u0275\u0275listener("click", function ControllerDashboardComponent_div_451_Template_button_click_1_listener() {
      const i_r27 = \u0275\u0275restoreView(_r26).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeTimeline(i_r27));
    });
    \u0275\u0275element(2, "i", 144);
    \u0275\u0275text(3, " Remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 241)(5, "label", 77);
    \u0275\u0275text(6, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 242);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_451_Template_input_ngModelChange_7_listener($event) {
      const item_r28 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275twoWayBindingSet(item_r28.year, $event) || (item_r28.year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 75)(9, "div")(10, "label", 77);
    \u0275\u0275text(11, "Title (EN)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_451_Template_input_ngModelChange_12_listener($event) {
      const item_r28 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275twoWayBindingSet(item_r28.title.en, $event) || (item_r28.title.en = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 77);
    \u0275\u0275text(15, "Title (AR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_451_Template_input_ngModelChange_16_listener($event) {
      const item_r28 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275twoWayBindingSet(item_r28.title.ar, $event) || (item_r28.title.ar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 95)(18, "label", 77);
    \u0275\u0275text(19, "Description (EN)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 96);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_451_Template_textarea_ngModelChange_20_listener($event) {
      const item_r28 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275twoWayBindingSet(item_r28.description.en, $event) || (item_r28.description.en = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 95)(22, "label", 77);
    \u0275\u0275text(23, "Description (AR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 97);
    \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_div_451_Template_textarea_ngModelChange_24_listener($event) {
      const item_r28 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275twoWayBindingSet(item_r28.description.ar, $event) || (item_r28.description.ar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", item_r28.year);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", item_r28.title.en);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r28.title.ar);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r28.description.en);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r28.description.ar);
  }
}
function ControllerDashboardComponent_div_452_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 234);
    \u0275\u0275text(1, "No timeline events added yet.");
    \u0275\u0275elementEnd();
  }
}
var ControllerDashboardComponent = class _ControllerDashboardComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  sidebarOpen = false;
  activeTab = "overview";
  activeDropdown = null;
  websiteMenuOpen = true;
  isLightMode = false;
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
  recentProjects = [];
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
    if (confirm("Are you sure you want to delete this project?")) {
      this.apiService.deleteProject(id).subscribe(() => {
        this.loadProjects();
        this.loadOverviewData();
      });
    }
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
    if (confirm("Are you sure you want to delete this category? All projects under this category will need update.")) {
      this.apiService.deleteCategory(id).subscribe(() => {
        this.loadCategories();
      });
    }
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
    if (confirm("Are you sure you want to delete this service?")) {
      this.apiService.deleteService(id).subscribe(() => {
        this.loadServices();
        this.loadOverviewData();
      });
    }
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
    if (confirm("Are you sure you want to delete this blog article?")) {
      this.apiService.deleteBlog(id).subscribe(() => {
        this.loadBlogs();
      });
    }
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
    if (confirm("Are you sure you want to delete this testimonial?")) {
      this.apiService.deleteTestimonial(id).subscribe(() => {
        this.loadTestimonials();
        this.loadOverviewData();
      });
    }
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
    if (confirm("Are you sure you want to delete this FAQ?")) {
      this.apiService.deleteFaq(id).subscribe(() => {
        this.loadFaqs();
      });
    }
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
    if (confirm("Are you sure you want to delete this inquiry?")) {
      this.apiService.deleteInquiry(id).subscribe(() => {
        this.loadInquiries();
        this.loadOverviewData();
      });
    }
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
  }, decls: 557, vars: 135, consts: [[1, "view"], [1, "wbanner"], [1, "wb-bg"], [1, "wb-grid"], [1, "wb-overlay"], [1, "wb-inner"], [1, "wb-tag"], [1, "wb-dot"], [1, "wb-greeting"], [1, "fa-solid", "fa-bolt", 2, "font-size", "1rem"], [1, "wb-sub"], [1, "wb-actions", 2, "margin-top", "18px"], [1, "wb-btn", "wb-primary", 3, "click"], [1, "fa-solid", "fa-folder-open"], [1, "wb-btn", "wb-secondary", 3, "click"], [1, "fa-solid", "fa-inbox"], [1, "wb-quick-stats"], [1, "wb-qs", 3, "click"], [1, "wb-qs-num"], [1, "wb-qs-lbl"], [1, "wb-qs", 2, "border-color", "rgba(225,29,72,0.25)", 3, "click"], [1, "wb-qs-num", 2, "color", "var(--rose-light)"], [1, "stats-grid"], [1, "stat-card", "stat-c-violet", 3, "click"], [1, "stat-card-icon"], [1, "stat-label"], [1, "stat-value"], [1, "stat-trend", "trend-v"], [1, "fa-solid", "fa-arrow-trend-up"], [1, "stat-card", "stat-c-teal", 3, "click"], [1, "fa-solid", "fa-gears"], [1, "stat-trend", "trend-t"], [1, "fa-solid", "fa-circle-check"], [1, "stat-card", "stat-c-amber", 3, "click"], [1, "fa-solid", "fa-star"], [1, "stat-trend", "trend-a"], [1, "fa-solid", "fa-thumbs-up"], [1, "stat-card", "stat-c-rose", 3, "click"], [1, "fa-solid", "fa-envelope"], [1, "fa-solid", "fa-bell"], [1, "content-row", 2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "20px", "margin-bottom", "20px"], [1, "card", 2, "margin-bottom", "0"], [1, "card-header"], [1, "card-title"], [1, "card-title-icon", "cti-v"], [1, "fa-solid", "fa-chart-pie"], ["class", "empty-state", 4, "ngIf"], ["style", "display:flex; flex-direction:column; gap:14px;", 4, "ngIf"], [1, "card-title-icon", "cti-t"], [1, "fa-solid", "fa-chart-bar"], [1, "card"], [1, "fa-solid", "fa-rocket"], [1, "card-action", 3, "click"], [1, "fa-solid", "fa-arrow-right", 2, "font-size", "0.65rem"], [1, "table-responsive"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "card", "style", "margin-bottom: 24px;", 4, "ngIf"], [2, "display", "flex", "gap", "10px"], [1, "save-btn", "font-small", 3, "click"], [1, "fa-solid"], [1, "action-btn", "font-small", 3, "click"], [1, "fa-solid", "fa-rotate"], [2, "background", "rgba(255,255,255,0.02)"], [2, "width", "80px"], [2, "width", "140px"], [2, "width", "70px", "text-align", "center"], [2, "width", "90px"], [2, "width", "90px", "text-align", "center"], [2, "width", "70px"], [2, "width", "80px", "text-align", "center"], [2, "width", "100px", "text-align", "center"], [1, "card", 2, "margin-bottom", "24px"], [1, "cb", 2, "padding", "24px"], [3, "ngSubmit", "formGroup"], [1, "form-grid-custom"], [1, "fgroup"], [1, "s-label"], ["formControlName", "whatsapp_phone", "type", "text", "placeholder", "e.g. +966500000000", 1, "s-input"], ["formControlName", "whatsapp_desc", "type", "text", "placeholder", "e.g. Chat with Sales", 1, "s-input"], ["formControlName", "official_email", "type", "email", "placeholder", "e.g. info@mediaglow.com", 1, "s-input"], ["formControlName", "company_address", "type", "text", "placeholder", "Riyadh, Saudi Arabia", 1, "s-input"], [1, "fgroup", "full-width"], ["formControlName", "google_maps_url", "type", "text", "placeholder", "https://maps.google.com/...", 1, "s-input"], ["formControlName", "emergency_support_info", "type", "text", "placeholder", "Call +9665XXXXXXX for critical queries", 1, "s-input"], [2, "margin-top", "30px", "display", "flex", "align-items", "center"], ["type", "submit", 1, "save-btn", 3, "disabled"], [1, "fa-solid", "fa-floppy-disk"], ["style", "margin-left: 15px; color: var(--orange); font-weight:600;", 4, "ngIf"], [2, "width", "100px"], [1, "pg-head"], [1, "save-btn", 2, "margin-top", "16px", 3, "click", "disabled"], [1, "card", 2, "margin-top", "24px"], ["type", "text", 1, "s-input", 3, "ngModelChange", "ngModel"], ["type", "text", "dir", "rtl", 1, "s-input", 3, "ngModelChange", "ngModel"], [1, "full-width"], ["rows", "3", 1, "s-input", 3, "ngModelChange", "ngModel"], ["rows", "3", "dir", "rtl", 1, "s-input", 3, "ngModelChange", "ngModel"], [1, "card", 2, "margin-top", "24px", "margin-bottom", "24px"], [1, "fa-solid", "fa-plus"], ["style", "background:rgba(255,255,255,0.01); padding:20px; border-radius:12px; margin-bottom:16px; border:1px solid var(--admin-border); position:relative", 4, "ngFor", "ngForOf"], ["style", "color:rgba(255,255,255,0.5)", 4, "ngIf"], [1, "empty-state"], [2, "display", "flex", "flex-direction", "column", "gap", "14px"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "6px", "font-size", "0.82rem"], [2, "font-weight", "600", "color", "var(--text)"], [2, "font-weight", "700", "color", "var(--violet-light)"], [2, "opacity", "0.5", "font-size", "0.7rem"], [2, "width", "100%", "height", "6px", "background", "rgba(255,255,255,0.05)", "border-radius", "10px", "overflow", "hidden"], [2, "height", "100%", "background", "linear-gradient(90deg, var(--violet), var(--violet-light))", "border-radius", "10px", "transition", "width 1.2s cubic-bezier(0.16,1,0.3,1)"], [2, "font-weight", "700", "color", "var(--teal-light)"], [2, "height", "100%", "background", "linear-gradient(90deg, var(--teal), var(--teal-light))", "border-radius", "10px", "transition", "width 1.2s cubic-bezier(0.16,1,0.3,1)"], [1, "user-cell"], ["style", "width:30px;height:30px;border-radius:6px;object-fit:cover;flex-shrink:0;", 3, "src", 4, "ngIf"], ["class", "user-avatar", "style", "border-radius:6px;width:30px;height:30px;font-size:0.7rem;", 4, "ngIf"], [2, "font-weight", "600"], [1, "badge", "badge-v"], [2, "color", "var(--text-2)"], [2, "width", "30px", "height", "30px", "border-radius", "6px", "object-fit", "cover", "flex-shrink", "0", 3, "src"], [1, "user-avatar", 2, "border-radius", "6px", "width", "30px", "height", "30px", "font-size", "0.7rem"], ["colspan", "3", 2, "text-align", "center", "padding", "24px", "color", "var(--text-2)"], [1, "action-btn", 3, "click"], [1, "fa-solid", "fa-xmark"], ["formControlName", "title_en", "type", "text", "required", "", "placeholder", "e.g. Web Development", 1, "s-input"], ["formControlName", "title_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064A\u0628", "dir", "rtl", 1, "s-input"], ["formControlName", "subtitle_en", "type", "text", "required", "", "placeholder", "e.g. Technology", 1, "s-input"], ["formControlName", "subtitle_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u0627\u0644\u062A\u0642\u0646\u064A\u0629", "dir", "rtl", 1, "s-input"], ["formControlName", "description_en", "rows", "3", "required", "", 1, "s-input"], ["formControlName", "description_ar", "rows", "3", "required", "", "dir", "rtl", 1, "s-input"], ["formControlName", "icon", "type", "text", "placeholder", "e.g. fa-solid fa-laptop-code", 1, "s-input"], ["formControlName", "order", "type", "number", 1, "s-input"], ["formControlName", "features_en", "type", "text", "placeholder", "e.g. Fast Loading, Custom CMS, Responsive Design", 1, "s-input"], ["formControlName", "features_ar", "type", "text", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u062A\u062D\u0645\u064A\u0644 \u0633\u0631\u064A\u0639\u060C \u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u0645\u062E\u0635\u0635\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u0645\u062A\u062C\u0627\u0648\u0628", "dir", "rtl", 1, "s-input"], ["formControlName", "stats_str_en", "type", "text", "placeholder", "e.g. 100%:Customized:New, 24/7:Support:N/A", 1, "s-input"], ["formControlName", "stats_str_ar", "type", "text", "placeholder", "\u0645\u062B\u0644\u0627\u064B: %100:\u0645\u062E\u0635\u0635:\u062C\u062F\u064A\u062F\u060C 24/7:\u062F\u0639\u0645 \u0645\u062A\u0648\u0627\u0635\u0644", "dir", "rtl", 1, "s-input"], ["formControlName", "cta_text_en", "type", "text", 1, "s-input"], ["formControlName", "cta_text_ar", "type", "text", "dir", "rtl", 1, "s-input"], ["formControlName", "cta_url", "type", "text", "placeholder", "/contact", 1, "s-input"], [2, "margin-top", "30px", "display", "flex", "gap", "15px"], [2, "text-align", "center", "font-size", "1.2rem", "padding", "15px"], [1, "badge", "badge-blue"], ["title", "Edit Service", 1, "action-btn", 2, "background", "#e8620a10", "color", "#e8620a", "border", "1px solid #e8620a20", "margin-right", "5px", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], ["title", "Delete Service", 1, "action-btn", 2, "background", "#ff000010", "color", "#ff0000", "border", "1px solid #ff000020", 3, "click"], [1, "fa-solid", "fa-trash-can"], ["colspan", "5", 2, "text-align", "center", "padding", "20px"], [2, "margin-bottom", "15px", "border-bottom", "1px solid var(--admin-border)", "padding-bottom", "5px", "color", "var(--orange)"], ["formControlName", "title_en", "type", "text", "required", "", "placeholder", "e.g. Media Glow E-Commerce Platform", 1, "s-input"], ["formControlName", "title_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u0645\u062A\u062C\u0631 \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "dir", "rtl", 1, "s-input"], ["formControlName", "category_id", "required", "", 1, "s-input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "main_image_alt", "type", "text", "placeholder", "SEO Alt Text", 1, "s-input"], [2, "margin-top", "25px", "margin-bottom", "15px", "border-bottom", "1px solid var(--admin-border)", "padding-bottom", "5px", "color", "var(--orange)"], [2, "display", "flex", "gap", "10px", "align-items", "center"], ["type", "color", "formControlName", "color", 2, "width", "45px", "height", "45px", "border", "none", "border-radius", "8px", "cursor", "pointer", "background", "transparent"], ["formControlName", "color", "type", "text", "placeholder", "#000000", 1, "s-input", 2, "flex", "1"], ["formControlName", "emoji", "type", "text", "placeholder", "Icon class e.g. fa-solid fa-rocket or pi pi-rocket", 1, "s-input"], ["type", "file", "accept", "image/*", 1, "s-input", 2, "padding-top", "10px", 3, "change"], ["style", "margin-top: 10px;", 4, "ngIf"], ["formControlName", "client", "type", "text", "placeholder", "e.g. Aura Cosmetics", 1, "s-input"], ["formControlName", "timeline", "type", "text", "placeholder", "e.g. 3 Months", 1, "s-input"], ["formControlName", "tags", "type", "text", "placeholder", "e.g. E-Commerce, Angular, Laravel", 1, "s-input"], ["formControlName", "deliverables", "type", "text", "placeholder", "e.g. UI/UX Design, Payment Gateway, SEO", 1, "s-input"], ["formControlName", "challenge_en", "rows", "3", 1, "s-input"], ["formControlName", "challenge_ar", "rows", "3", "dir", "rtl", 1, "s-input"], ["formControlName", "solution_en", "rows", "3", 1, "s-input"], ["formControlName", "solution_ar", "rows", "3", "dir", "rtl", 1, "s-input"], ["formControlName", "results_str", "type", "text", "placeholder", "e.g. 150%:Sales Growth, 99.9%:Uptime, 3x:Recall", 1, "s-input"], ["formControlName", "testimonial_text", "rows", "2", "placeholder", "Feedback quote...", 1, "s-input"], ["formControlName", "testimonial_name", "type", "text", "placeholder", "e.g. Fahad Al-Mansoori", 1, "s-input"], ["formControlName", "testimonial_role", "type", "text", "placeholder", "e.g. CEO, Media Glow Retail", 1, "s-input"], ["formControlName", "testimonial_avatar", "type", "text", "placeholder", "HTTPS image URL", 1, "s-input"], [3, "value"], [2, "margin-top", "10px"], [2, "max-height", "120px", "border-radius", "8px", "box-shadow", "0 4px 12px rgba(0,0,0,0.3)", 3, "src"], [2, "text-align", "center", "font-size", "1.4rem"], ["style", "width: 50px; height: 50px; border-radius: 6px; object-fit: cover;", 3, "src", 4, "ngIf"], ["title", "Edit Project", 1, "action-btn", 2, "background", "#e8620a10", "color", "#e8620a", "border", "1px solid #e8620a20", "margin-right", "5px", 3, "click"], ["title", "Delete Project", 1, "action-btn", 2, "background", "#ff000010", "color", "#ff0000", "border", "1px solid #ff000020", 3, "click"], [2, "width", "50px", "height", "50px", "border-radius", "6px", "object-fit", "cover", 3, "src"], ["colspan", "6", 2, "text-align", "center", "padding", "25px"], ["formControlName", "name_en", "type", "text", "required", "", "placeholder", "e.g. Mobile Apps", 1, "s-input"], ["formControlName", "name_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u062C\u0648\u0627\u0644", "dir", "rtl", 1, "s-input"], ["formControlName", "description_en", "rows", "2", 1, "s-input"], ["formControlName", "description_ar", "rows", "2", "dir", "rtl", 1, "s-input"], [2, "max-height", "100px", "border-radius", "8px", "box-shadow", "0 4px 12px rgba(0,0,0,0.3)", 3, "src"], ["style", "width: 45px; height: 45px; border-radius: 6px; object-fit: cover;", 3, "src", 4, "ngIf"], [2, "color", "rgba(255,255,255,0.6)", "font-size", "0.9rem"], ["title", "Edit Category", 1, "action-btn", 2, "background", "#e8620a10", "color", "#e8620a", "border", "1px solid #e8620a20", "margin-right", "5px", 3, "click"], ["title", "Delete Category", 1, "action-btn", 2, "background", "#ff000010", "color", "#ff0000", "border", "1px solid #ff000020", 3, "click"], [2, "width", "45px", "height", "45px", "border-radius", "6px", "object-fit", "cover", 3, "src"], ["formControlName", "title_en", "type", "text", "required", "", "placeholder", "e.g. Modern UI Design Trends", 1, "s-input"], ["formControlName", "title_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u0627\u062A\u062C\u0627\u0647\u0627\u062A \u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062D\u062F\u064A\u062B\u0629", "dir", "rtl", 1, "s-input"], ["formControlName", "description_en", "rows", "5", "required", "", "placeholder", "Write article content here...", 1, "s-input"], ["formControlName", "description_ar", "rows", "5", "required", "", "placeholder", "\u0627\u0643\u062A\u0628 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644 \u0647\u0646\u0627...", "dir", "rtl", 1, "s-input"], ["formControlName", "img_alt", "type", "text", "placeholder", "e.g. Design Trends", 1, "s-input"], ["type", "file", "accept", "image/*,video/*", 1, "s-input", 2, "padding-top", "10px", 3, "change"], [1, "fa-solid", "fa-paper-plane"], [2, "text-align", "center"], [1, "fa-solid", "fa-heart", 2, "color", "red", "margin-left", "2px"], ["title", "Edit Article", 1, "action-btn", 2, "background", "#e8620a10", "color", "#e8620a", "border", "1px solid #e8620a20", "margin-right", "5px", 3, "click"], ["title", "Delete Article", 1, "action-btn", 2, "background", "#ff000010", "color", "#ff0000", "border", "1px solid #ff000020", 3, "click"], ["formControlName", "client_name", "type", "text", "required", "", "placeholder", "e.g. John Doe", 1, "s-input"], ["formControlName", "job_title", "type", "text", "required", "", "placeholder", "e.g. Founder & CEO", 1, "s-input"], ["formControlName", "company_name", "type", "text", "placeholder", "e.g. TechNova", 1, "s-input"], ["formControlName", "rating", "required", "", 1, "s-input"], ["value", "5"], ["value", "4"], ["value", "3"], ["value", "2"], ["value", "1"], ["type", "color", "formControlName", "avatar_color", 2, "width", "45px", "height", "45px", "border", "none", "border-radius", "8px", "cursor", "pointer", "background", "transparent"], ["formControlName", "avatar_color", "type", "text", "placeholder", "#e8620a", 1, "s-input", 2, "flex", "1"], ["formControlName", "feedback_en", "rows", "3", "required", "", "placeholder", "Client feedback in English...", 1, "s-input"], ["formControlName", "feedback_ar", "rows", "3", "required", "", "placeholder", "\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629...", "dir", "rtl", 1, "s-input"], [2, "width", "38px", "height", "38px", "border-radius", "50%", "color", "white", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "0.95rem"], [2, "color", "rgba(255,255,255,0.7)", "font-size", "0.9rem"], [2, "text-align", "center", "color", "gold", "font-size", "0.85rem"], ["title", "Edit Testimonial", 1, "action-btn", 2, "background", "#e8620a10", "color", "#e8620a", "border", "1px solid #e8620a20", "margin-right", "5px", 3, "click"], ["title", "Delete Testimonial", 1, "action-btn", 2, "background", "#ff000010", "color", "#ff0000", "border", "1px solid #ff000020", 3, "click"], ["colspan", "6", 2, "text-align", "center", "padding", "20px"], ["formControlName", "question_en", "type", "text", "required", "", "placeholder", "e.g. How long does a project take?", 1, "s-input"], ["formControlName", "question_ar", "type", "text", "required", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: \u0643\u0645 \u064A\u0633\u062A\u063A\u0631\u0642 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u064A\u061F", "dir", "rtl", 1, "s-input"], ["formControlName", "answer_en", "rows", "3", "required", "", "placeholder", "Detailed answer...", 1, "s-input"], ["formControlName", "answer_ar", "rows", "3", "required", "", "placeholder", "\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A\u0629...", "dir", "rtl", 1, "s-input"], ["formControlName", "sort_order", "type", "number", 1, "s-input"], [1, "fgroup", 2, "justify-content", "center"], [1, "s-label", 2, "display", "flex", "align-items", "center", "gap", "10px", "cursor", "pointer", "padding-top", "25px"], ["type", "checkbox", "formControlName", "is_active", 2, "width", "20px", "height", "20px", "accent-color", "#e8620a"], [1, "badge"], ["title", "Edit FAQ", 1, "action-btn", 2, "background", "#e8620a10", "color", "#e8620a", "border", "1px solid #e8620a20", "margin-right", "5px", 3, "click"], ["title", "Delete FAQ", 1, "action-btn", 2, "background", "#ff000010", "color", "#ff0000", "border", "1px solid #ff000020", 3, "click"], [2, "margin-left", "15px", "color", "var(--orange)", "font-weight", "600"], [2, "color", "rgba(255,255,255,0.5)"], [2, "color", "var(--orange)", "text-decoration", "none", 3, "href"], [2, "font-size", "0.85rem", "color", "rgba(255,255,255,0.5)"], [2, "display", "block", "margin-top", "5px", "max-width", "250px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis", 3, "title"], ["title", "Delete Lead", 1, "action-btn", 2, "background", "#ff000010", "color", "#ff0000", "border", "1px solid #ff000020", 3, "click"], [2, "background", "rgba(255,255,255,0.01)", "padding", "20px", "border-radius", "12px", "margin-bottom", "16px", "border", "1px solid var(--admin-border)", "position", "relative"], [2, "position", "absolute", "top", "15px", "right", "15px", "background", "#ef4444", "color", "white", "border", "none", "border-radius", "6px", "padding", "6px 12px", "cursor", "pointer", "font-size", "0.8rem", 3, "click"], [2, "margin-bottom", "16px"], ["type", "text", 1, "s-input", 2, "width", "120px", 3, "ngModelChange", "ngModel"]], template: function ControllerDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "div")(7, "div", 6);
      \u0275\u0275element(8, "span", 7);
      \u0275\u0275text(9, "\xA0Agency Hub \xB7 All Systems Live");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275text(11, "Welcome to ");
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Media Glow");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, "\xA0");
      \u0275\u0275element(15, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10);
      \u0275\u0275text(17, "Your agency's complete control center \u2014 manage portfolio, leads, content & CRM data in real time.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "button", 12);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_19_listener() {
        return ctx.setTab("projects");
      });
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275text(21, " Portfolio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 14);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_22_listener() {
        return ctx.setTab("contact-hub");
      });
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, " View Leads");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_26_listener() {
        return ctx.setTab("projects");
      });
      \u0275\u0275elementStart(27, "div", 18);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19);
      \u0275\u0275text(30, "Projects");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_31_listener() {
        return ctx.setTab("services");
      });
      \u0275\u0275elementStart(32, "div", 18);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 19);
      \u0275\u0275text(35, "Services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 17);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_36_listener() {
        return ctx.setTab("testimonials");
      });
      \u0275\u0275elementStart(37, "div", 18);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 19);
      \u0275\u0275text(40, "Reviews");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 20);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_41_listener() {
        return ctx.setTab("contact-hub");
      });
      \u0275\u0275elementStart(42, "div", 21);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 19);
      \u0275\u0275text(45, "Leads");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(46, "div", 22)(47, "div", 23);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_47_listener() {
        return ctx.setTab("projects");
      });
      \u0275\u0275elementStart(48, "div", 24);
      \u0275\u0275element(49, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 25);
      \u0275\u0275text(51, "Portfolio Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 26);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 27);
      \u0275\u0275element(55, "i", 28);
      \u0275\u0275text(56, " Live items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 29);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_57_listener() {
        return ctx.setTab("services");
      });
      \u0275\u0275elementStart(58, "div", 24);
      \u0275\u0275element(59, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 25);
      \u0275\u0275text(61, "Active Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 26);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 31);
      \u0275\u0275element(65, "i", 32);
      \u0275\u0275text(66, " Catalog live");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 33);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_67_listener() {
        return ctx.setTab("testimonials");
      });
      \u0275\u0275elementStart(68, "div", 24);
      \u0275\u0275element(69, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 25);
      \u0275\u0275text(71, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 26);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 35);
      \u0275\u0275element(75, "i", 36);
      \u0275\u0275text(76, " Approved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 37);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_div_click_77_listener() {
        return ctx.setTab("contact-hub");
      });
      \u0275\u0275elementStart(78, "div", 24);
      \u0275\u0275element(79, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 25);
      \u0275\u0275text(81, "Open Inquiries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 26);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 27);
      \u0275\u0275element(85, "i", 39);
      \u0275\u0275text(86, " Needs action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 40)(88, "div", 41)(89, "div", 42)(90, "div", 43)(91, "div", 44);
      \u0275\u0275element(92, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275text(93, " Projects by Category ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(94, ControllerDashboardComponent_div_94_Template, 4, 0, "div", 46)(95, ControllerDashboardComponent_div_95_Template, 2, 1, "div", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 41)(97, "div", 42)(98, "div", 43)(99, "div", 48);
      \u0275\u0275element(100, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, " Leads Distribution ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(102, ControllerDashboardComponent_div_102_Template, 4, 0, "div", 46)(103, ControllerDashboardComponent_div_103_Template, 2, 1, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 50)(105, "div", 42)(106, "div", 43)(107, "div", 44);
      \u0275\u0275element(108, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275text(109, " Recent Projects ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "a", 52);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_a_click_110_listener() {
        return ctx.setTab("projects");
      });
      \u0275\u0275element(111, "i", 53);
      \u0275\u0275text(112, " View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 54)(114, "table")(115, "thead")(116, "tr")(117, "th");
      \u0275\u0275text(118, "Project");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th");
      \u0275\u0275text(120, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th");
      \u0275\u0275text(122, "Client");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "tbody");
      \u0275\u0275template(124, ControllerDashboardComponent_tr_124_Template, 12, 5, "tr", 55)(125, ControllerDashboardComponent_tr_125_Template, 3, 0, "tr", 56);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(126, "div", 0);
      \u0275\u0275template(127, ControllerDashboardComponent_div_127_Template, 74, 4, "div", 57);
      \u0275\u0275elementStart(128, "div", 50)(129, "div", 42)(130, "div", 43);
      \u0275\u0275text(131, "All Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div", 58)(133, "button", 59);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_133_listener() {
        return ctx.showServiceForm = !ctx.showServiceForm;
      });
      \u0275\u0275element(134, "i", 60);
      \u0275\u0275text(135);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "button", 61);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_136_listener() {
        return ctx.loadServices();
      });
      \u0275\u0275element(137, "i", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "div", 54)(139, "table")(140, "thead")(141, "tr", 63)(142, "th", 64);
      \u0275\u0275text(143, "Icon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "th");
      \u0275\u0275text(145, "Service Title (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "th");
      \u0275\u0275text(147, "Category (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "th", 64);
      \u0275\u0275text(149, "Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "th", 65);
      \u0275\u0275text(151, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "tbody");
      \u0275\u0275template(153, ControllerDashboardComponent_tr_153_Template, 16, 5, "tr", 55)(154, ControllerDashboardComponent_tr_154_Template, 3, 0, "tr", 56);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(155, "div", 0);
      \u0275\u0275template(156, ControllerDashboardComponent_div_156_Template, 122, 6, "div", 57);
      \u0275\u0275elementStart(157, "div", 50)(158, "div", 42)(159, "div", 43);
      \u0275\u0275text(160, "All Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 58)(162, "button", 59);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_162_listener() {
        return ctx.showProjectForm = !ctx.showProjectForm;
      });
      \u0275\u0275element(163, "i", 60);
      \u0275\u0275text(164);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "button", 61);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_165_listener() {
        return ctx.loadProjects();
      });
      \u0275\u0275element(166, "i", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "div", 54)(168, "table")(169, "thead")(170, "tr", 63)(171, "th", 66);
      \u0275\u0275text(172, "Emoji");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "th", 67);
      \u0275\u0275text(174, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "th");
      \u0275\u0275text(176, "Project Title (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "th");
      \u0275\u0275text(178, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "th");
      \u0275\u0275text(180, "Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "th", 65);
      \u0275\u0275text(182, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "tbody");
      \u0275\u0275template(184, ControllerDashboardComponent_tr_184_Template, 18, 6, "tr", 55)(185, ControllerDashboardComponent_tr_185_Template, 3, 0, "tr", 56);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(186, "div", 0);
      \u0275\u0275template(187, ControllerDashboardComponent_div_187_Template, 35, 5, "div", 57);
      \u0275\u0275elementStart(188, "div", 50)(189, "div", 42)(190, "div", 43);
      \u0275\u0275text(191, "All Portfolio Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "div", 58)(193, "button", 59);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_193_listener() {
        return ctx.showCategoryForm = !ctx.showCategoryForm;
      });
      \u0275\u0275element(194, "i", 60);
      \u0275\u0275text(195);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "button", 61);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_196_listener() {
        return ctx.loadCategories();
      });
      \u0275\u0275element(197, "i", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "div", 54)(199, "table")(200, "thead")(201, "tr", 63)(202, "th", 67);
      \u0275\u0275text(203, "Thumbnail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "th");
      \u0275\u0275text(205, "Category Name (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "th");
      \u0275\u0275text(207, "Category Name (AR)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "th");
      \u0275\u0275text(209, "Description (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "th", 65);
      \u0275\u0275text(211, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(212, "tbody");
      \u0275\u0275template(213, ControllerDashboardComponent_tr_213_Template, 15, 4, "tr", 55)(214, ControllerDashboardComponent_tr_214_Template, 3, 0, "tr", 56);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(215, "div", 0);
      \u0275\u0275template(216, ControllerDashboardComponent_div_216_Template, 39, 5, "div", 57);
      \u0275\u0275elementStart(217, "div", 50)(218, "div", 42)(219, "div", 43);
      \u0275\u0275text(220, "Published Articles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 58)(222, "button", 59);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_222_listener() {
        return ctx.showBlogForm = !ctx.showBlogForm;
      });
      \u0275\u0275element(223, "i", 60);
      \u0275\u0275text(224);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "button", 61);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_225_listener() {
        return ctx.loadBlogs();
      });
      \u0275\u0275element(226, "i", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(227, "div", 54)(228, "table")(229, "thead")(230, "tr", 63)(231, "th", 67);
      \u0275\u0275text(232, "Cover");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "th");
      \u0275\u0275text(234, "Title (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "th");
      \u0275\u0275text(236, "Title (AR)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "th", 68);
      \u0275\u0275text(238, "Likes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "th", 65);
      \u0275\u0275text(240, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(241, "tbody");
      \u0275\u0275template(242, ControllerDashboardComponent_tr_242_Template, 17, 4, "tr", 55)(243, ControllerDashboardComponent_tr_243_Template, 3, 0, "tr", 56);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(244, "div", 0);
      \u0275\u0275template(245, ControllerDashboardComponent_div_245_Template, 55, 4, "div", 57);
      \u0275\u0275elementStart(246, "div", 50)(247, "div", 42)(248, "div", 43);
      \u0275\u0275text(249, "All Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "div", 58)(251, "button", 59);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_251_listener() {
        return ctx.showTestimonialForm = !ctx.showTestimonialForm;
      });
      \u0275\u0275element(252, "i", 60);
      \u0275\u0275text(253);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "button", 61);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_254_listener() {
        return ctx.loadTestimonials();
      });
      \u0275\u0275element(255, "i", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(256, "div", 54)(257, "table")(258, "thead")(259, "tr", 63)(260, "th", 69);
      \u0275\u0275text(261, "Avatar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "th");
      \u0275\u0275text(263, "Client Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "th");
      \u0275\u0275text(265, "Role / Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "th");
      \u0275\u0275text(267, "Feedback (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "th", 68);
      \u0275\u0275text(269, "Rating");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "th", 65);
      \u0275\u0275text(271, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(272, "tbody");
      \u0275\u0275template(273, ControllerDashboardComponent_tr_273_Template, 18, 8, "tr", 55)(274, ControllerDashboardComponent_tr_274_Template, 3, 0, "tr", 56);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(275, "div", 0);
      \u0275\u0275template(276, ControllerDashboardComponent_div_276_Template, 39, 4, "div", 57);
      \u0275\u0275elementStart(277, "div", 50)(278, "div", 42)(279, "div", 43);
      \u0275\u0275text(280, "All FAQs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "div", 58)(282, "button", 59);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_282_listener() {
        return ctx.showFaqForm = !ctx.showFaqForm;
      });
      \u0275\u0275element(283, "i", 60);
      \u0275\u0275text(284);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "button", 61);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_285_listener() {
        return ctx.loadFaqs();
      });
      \u0275\u0275element(286, "i", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(287, "div", 54)(288, "table")(289, "thead")(290, "tr", 63)(291, "th");
      \u0275\u0275text(292, "Question (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "th");
      \u0275\u0275text(294, "Question (AR)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "th", 70);
      \u0275\u0275text(296, "Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "th", 71);
      \u0275\u0275text(298, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "th", 65);
      \u0275\u0275text(300, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "tbody");
      \u0275\u0275template(302, ControllerDashboardComponent_tr_302_Template, 16, 8, "tr", 55)(303, ControllerDashboardComponent_tr_303_Template, 3, 0, "tr", 56);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(304, "div", 0)(305, "div", 72)(306, "div", 42)(307, "div", 43);
      \u0275\u0275text(308, "Edit Contact Information & Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "div", 73)(310, "form", 74);
      \u0275\u0275listener("ngSubmit", function ControllerDashboardComponent_Template_form_ngSubmit_310_listener() {
        return ctx.saveContactInfo();
      });
      \u0275\u0275elementStart(311, "div", 75)(312, "div", 76)(313, "label", 77);
      \u0275\u0275text(314, "WhatsApp Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(315, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "div", 76)(317, "label", 77);
      \u0275\u0275text(318, "WhatsApp Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(319, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 76)(321, "label", 77);
      \u0275\u0275text(322, "Official Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(323, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "div", 76)(325, "label", 77);
      \u0275\u0275text(326, "Company Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(327, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "div", 82)(329, "label", 77);
      \u0275\u0275text(330, "Google Maps URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(331, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "div", 82)(333, "label", 77);
      \u0275\u0275text(334, "Emergency Support Info");
      \u0275\u0275elementEnd();
      \u0275\u0275element(335, "input", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(336, "div", 85)(337, "button", 86);
      \u0275\u0275element(338, "i", 87);
      \u0275\u0275text(339, " Save All Changes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(340, ControllerDashboardComponent_span_340_Template, 3, 1, "span", 88);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(341, "div", 50)(342, "div", 42)(343, "div", 43);
      \u0275\u0275text(344, "Customer Inquiries (Leads)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "button", 59);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_345_listener() {
        return ctx.loadInquiries();
      });
      \u0275\u0275element(346, "i", 62);
      \u0275\u0275text(347, " Refresh Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "div", 54)(349, "table")(350, "thead")(351, "tr", 63)(352, "th");
      \u0275\u0275text(353, "Lead Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "th");
      \u0275\u0275text(355, "Contact Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "th");
      \u0275\u0275text(357, "Project & Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "th");
      \u0275\u0275text(359, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "th", 89);
      \u0275\u0275text(361, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(362, "tbody");
      \u0275\u0275template(363, ControllerDashboardComponent_tr_363_Template, 25, 13, "tr", 55)(364, ControllerDashboardComponent_tr_364_Template, 3, 0, "tr", 56);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(365, "div", 0)(366, "div", 90)(367, "h2");
      \u0275\u0275text(368, "Home Page Header Sections");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "p");
      \u0275\u0275text(370, "Edit the core textual properties of the main homepage.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "button", 91);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_371_listener() {
        return ctx.savePageData("home");
      });
      \u0275\u0275element(372, "i", 87);
      \u0275\u0275text(373);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "div", 92)(375, "div", 42)(376, "div", 43);
      \u0275\u0275text(377, "Hero Banner Section");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(378, "div", 73)(379, "div", 75)(380, "div")(381, "label", 77);
      \u0275\u0275text(382, "Tagline (English)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_383_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.tag.en, $event) || (ctx.pagesData["home"].hero.tag.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "div")(385, "label", 77);
      \u0275\u0275text(386, "Tagline (Arabic)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "input", 94);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_387_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.tag.ar, $event) || (ctx.pagesData["home"].hero.tag.ar = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(388, "div")(389, "label", 77);
      \u0275\u0275text(390, "Title Line (English)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_391_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.title1.en, $event) || (ctx.pagesData["home"].hero.title1.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(392, "div")(393, "label", 77);
      \u0275\u0275text(394, "Title Line (Arabic)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "input", 94);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_395_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.title1.ar, $event) || (ctx.pagesData["home"].hero.title1.ar = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(396, "div", 95)(397, "label", 77);
      \u0275\u0275text(398, "Subtitle Description (English)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(399, "textarea", 96);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_399_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.subtitle.en, $event) || (ctx.pagesData["home"].hero.subtitle.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "div", 95)(401, "label", 77);
      \u0275\u0275text(402, "Subtitle Description (Arabic)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "textarea", 97);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_403_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["home"].hero.subtitle.ar, $event) || (ctx.pagesData["home"].hero.subtitle.ar = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(404, "div", 0)(405, "div", 90)(406, "h2");
      \u0275\u0275text(407, "About Page Details & Timeline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "p");
      \u0275\u0275text(409, "Configure the vision statements, descriptions, and historical journey items.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "button", 91);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_410_listener() {
        return ctx.saveAboutData();
      });
      \u0275\u0275element(411, "i", 87);
      \u0275\u0275text(412);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(413, "div", 98)(414, "div", 42)(415, "div", 43);
      \u0275\u0275text(416, "About US - Banner Text");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(417, "div", 73)(418, "div", 75)(419, "div")(420, "label", 77);
      \u0275\u0275text(421, "Label (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_422_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.en.label, $event) || (ctx.aboutData.content.hero.en.label = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(423, "div")(424, "label", 77);
      \u0275\u0275text(425, "Label (AR)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "input", 94);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_426_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.ar.label, $event) || (ctx.aboutData.content.hero.ar.label = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(427, "div")(428, "label", 77);
      \u0275\u0275text(429, "Title (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_430_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.en.title1, $event) || (ctx.aboutData.content.hero.en.title1 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "div")(432, "label", 77);
      \u0275\u0275text(433, "Title (AR)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "input", 94);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_434_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.ar.title1, $event) || (ctx.aboutData.content.hero.ar.title1 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(435, "div", 95)(436, "label", 77);
      \u0275\u0275text(437, "Description Brief (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "textarea", 96);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_438_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.en.desc, $event) || (ctx.aboutData.content.hero.en.desc = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(439, "div", 95)(440, "label", 77);
      \u0275\u0275text(441, "Description Brief (AR)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "textarea", 97);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_442_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.aboutData.content.hero.ar.desc, $event) || (ctx.aboutData.content.hero.ar.desc = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(443, "div", 72)(444, "div", 42)(445, "div", 43);
      \u0275\u0275text(446, "Our History Timeline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "button", 59);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_447_listener() {
        return ctx.addTimeline();
      });
      \u0275\u0275element(448, "i", 99);
      \u0275\u0275text(449, " Add Year Event");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(450, "div", 73);
      \u0275\u0275template(451, ControllerDashboardComponent_div_451_Template, 25, 5, "div", 100)(452, ControllerDashboardComponent_div_452_Template, 2, 0, "div", 101);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(453, "div", 0)(454, "div", 90)(455, "h2");
      \u0275\u0275text(456, "Services Page Header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "p");
      \u0275\u0275text(458, "Edit services banner textual titles.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "button", 91);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_459_listener() {
        return ctx.savePageData("services");
      });
      \u0275\u0275element(460, "i", 87);
      \u0275\u0275text(461);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(462, "div", 92)(463, "div", 73)(464, "div", 75)(465, "div")(466, "label", 77);
      \u0275\u0275text(467, "Tagline (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_468_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["services"].hero.tag.en, $event) || (ctx.pagesData["services"].hero.tag.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(469, "div")(470, "label", 77);
      \u0275\u0275text(471, "Title (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_472_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["services"].hero.title.en, $event) || (ctx.pagesData["services"].hero.title.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(473, "div", 95)(474, "label", 77);
      \u0275\u0275text(475, "Description (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "textarea", 96);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_476_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["services"].hero.desc.en, $event) || (ctx.pagesData["services"].hero.desc.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(477, "div", 0)(478, "div", 90)(479, "h2");
      \u0275\u0275text(480, "Portfolio Page Header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "p");
      \u0275\u0275text(482, "Edit portfolio banner titles.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "button", 91);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_483_listener() {
        return ctx.savePageData("portfolio");
      });
      \u0275\u0275element(484, "i", 87);
      \u0275\u0275text(485);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(486, "div", 92)(487, "div", 73)(488, "div", 75)(489, "div")(490, "label", 77);
      \u0275\u0275text(491, "Tagline (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_492_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["portfolio"].hero.tag.en, $event) || (ctx.pagesData["portfolio"].hero.tag.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(493, "div")(494, "label", 77);
      \u0275\u0275text(495, "Title (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_496_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["portfolio"].hero.title.en, $event) || (ctx.pagesData["portfolio"].hero.title.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(497, "div", 95)(498, "label", 77);
      \u0275\u0275text(499, "Description (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "textarea", 96);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_500_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["portfolio"].hero.desc.en, $event) || (ctx.pagesData["portfolio"].hero.desc.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(501, "div", 0)(502, "div", 90)(503, "h2");
      \u0275\u0275text(504, "Blogs Page Header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(505, "p");
      \u0275\u0275text(506, "Edit blogs header banner textual titles.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(507, "button", 91);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_507_listener() {
        return ctx.savePageData("blogs");
      });
      \u0275\u0275element(508, "i", 87);
      \u0275\u0275text(509);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(510, "div", 92)(511, "div", 73)(512, "div", 75)(513, "div")(514, "label", 77);
      \u0275\u0275text(515, "Tagline (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_516_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["blogs"].hero.tag.en, $event) || (ctx.pagesData["blogs"].hero.tag.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(517, "div")(518, "label", 77);
      \u0275\u0275text(519, "Title (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(520, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_520_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["blogs"].hero.title.en, $event) || (ctx.pagesData["blogs"].hero.title.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(521, "div", 95)(522, "label", 77);
      \u0275\u0275text(523, "Description (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "textarea", 96);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_524_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["blogs"].hero.desc.en, $event) || (ctx.pagesData["blogs"].hero.desc.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(525, "div", 0)(526, "div", 90)(527, "h2");
      \u0275\u0275text(528, "Footer Global Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "p");
      \u0275\u0275text(530, "Edit description text and links inside the global website footer.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(531, "button", 91);
      \u0275\u0275listener("click", function ControllerDashboardComponent_Template_button_click_531_listener() {
        return ctx.savePageData("footer");
      });
      \u0275\u0275element(532, "i", 87);
      \u0275\u0275text(533);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "div", 92)(535, "div", 73)(536, "div", 75)(537, "div", 95)(538, "label", 77);
      \u0275\u0275text(539, "Company Description in Footer (EN)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "textarea", 96);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_textarea_ngModelChange_540_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].desc.en, $event) || (ctx.pagesData["footer"].desc.en = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(541, "div")(542, "label", 77);
      \u0275\u0275text(543, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(544, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_544_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].email, $event) || (ctx.pagesData["footer"].email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(545, "div")(546, "label", 77);
      \u0275\u0275text(547, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(548, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_548_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].phone, $event) || (ctx.pagesData["footer"].phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(549, "div")(550, "label", 77);
      \u0275\u0275text(551, "LinkedIn URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_552_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].socials.linkedin, $event) || (ctx.pagesData["footer"].socials.linkedin = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(553, "div")(554, "label", 77);
      \u0275\u0275text(555, "Twitter URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "input", 93);
      \u0275\u0275twoWayListener("ngModelChange", function ControllerDashboardComponent_Template_input_ngModelChange_556_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pagesData["footer"].socials.twitter, $event) || (ctx.pagesData["footer"].socials.twitter = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("active", ctx.activeTab === "overview");
      \u0275\u0275advance(28);
      \u0275\u0275textInterpolate(ctx.overviewStats.projects);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.overviewStats.services);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.overviewStats.testimonials);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.overviewStats.inquiries);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.overviewStats.projects);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.overviewStats.services);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.overviewStats.testimonials);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.overviewStats.inquiries);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.projectsChartData.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.projectsChartData.length > 0);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.inquiriesChartData.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.inquiriesChartData.length > 0);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.recentProjects);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.recentProjects.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "services");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showServiceForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("fa-plus", !ctx.showServiceForm)("fa-xmark", ctx.showServiceForm);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showServiceForm ? "Close Form" : "Add Service", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.showProjectForm ? "Close Form" : "Add Project", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.showCategoryForm ? "Close Form" : "Add Category", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.showBlogForm ? "Close Form" : "Write Article", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.showTestimonialForm ? "Close Form" : "Add Testimonial", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.showFaqForm ? "Close Form" : "Add FAQ", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["home"] ? "Saving..." : "Save All Changes", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.isSavingAbout ? "Saving..." : "Save All Changes", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["services"] ? "Saving..." : "Save All Changes", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["portfolio"] ? "Saving..." : "Save All Changes", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["blogs"] ? "Saving..." : "Save All Changes", " ");
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
      \u0275\u0275textInterpolate1(" ", ctx.isSavingPage["footer"] ? "Saving..." : "Save All Changes", " ");
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
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: [`@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";



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
  --bg: #07070f;
  --bg-2: #0c0c1a;
  --bg-3: #101024;
  --card: rgba(12, 12, 26, 0.75);
  --card-hover: rgba(18, 18, 38, 0.85);
  --sidebar: #05050b;
  --topbar: rgba(7, 7, 15, 0.85);
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
  width: 5px;
  height: 5px;
}
[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: transparent;
}
[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.25);
  border-radius: 6px;
}
[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--violet);
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
  font-family: "Inter", sans-serif;
  color: var(--text);
  direction: ltr;
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
  background:
    linear-gradient(
      90deg,
      var(--violet-soft) 0%,
      rgba(99, 102, 241, 0.03) 100%);
  border-color: var(--border-v);
  color: #fff;
  font-weight: 600;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.sb-item.active[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {
  color: #fff;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--violet-2));
  box-shadow: 0 4px 15px var(--violet-glow);
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
  color: rgba(255, 255, 255, 0.18);
  font-size: 0.9rem;
}
.tb-bc[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #fff;
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
  background: #0c0c1e;
  border: 1px solid var(--border-v);
  border-radius: var(--r-lg);
  padding: 12px;
  z-index: 250;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
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
  color: #fff;
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
  color: #fff;
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
  transform: translateY(-2px);
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
  transform: translateY(-2px);
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
  transform: translateY(-3px) scale(1.02);
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
  transform: translateY(-4px);
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
  transform: scale(1.1) rotate(5deg);
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
  transform: translateY(-2px);
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
/*# sourceMappingURL=controller-dashboard.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControllerDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-controller-dashboard", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule], template: `<!-- \u2500\u2500 OVERVIEW TAB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="view" [class.active]="activeTab === 'overview'">

      <!-- Aurora Hero Banner -->
      <div class="wbanner">
        <div class="wb-bg"></div>
        <div class="wb-grid"></div>
        <div class="wb-overlay"></div>
        <div class="wb-inner">
          <div>
            <div class="wb-tag"><span class="wb-dot"></span>&nbsp;Agency Hub \xB7 All Systems Live</div>
            <div class="wb-greeting">Welcome to <span>Media Glow</span>&nbsp;<i class="fa-solid fa-bolt" style="font-size:1rem;"></i></div>
            <div class="wb-sub">Your agency's complete control center \u2014 manage portfolio, leads, content &amp; CRM data in real time.</div>
            <div class="wb-actions" style="margin-top:18px;">
              <button class="wb-btn wb-primary" (click)="setTab('projects')"><i class="fa-solid fa-folder-open"></i> Portfolio</button>
              <button class="wb-btn wb-secondary" (click)="setTab('contact-hub')"><i class="fa-solid fa-inbox"></i> View Leads</button>
            </div>
          </div>
          <div class="wb-quick-stats">
            <div class="wb-qs" (click)="setTab('projects')">
              <div class="wb-qs-num">{{ overviewStats.projects }}</div>
              <div class="wb-qs-lbl">Projects</div>
            </div>
            <div class="wb-qs" (click)="setTab('services')">
              <div class="wb-qs-num">{{ overviewStats.services }}</div>
              <div class="wb-qs-lbl">Services</div>
            </div>
            <div class="wb-qs" (click)="setTab('testimonials')">
              <div class="wb-qs-num">{{ overviewStats.testimonials }}</div>
              <div class="wb-qs-lbl">Reviews</div>
            </div>
            <div class="wb-qs" (click)="setTab('contact-hub')" style="border-color:rgba(225,29,72,0.25);">
              <div class="wb-qs-num" style="color:var(--rose-light);">{{ overviewStats.inquiries }}</div>
              <div class="wb-qs-lbl">Leads</div>
            </div>
          </div>
        </div>
      </div>

      <!-- KPI Stat Cards -->
      <div class="stats-grid">
        <div class="stat-card stat-c-violet" (click)="setTab('projects')">
          <div class="stat-card-icon"><i class="fa-solid fa-folder-open"></i></div>
          <div class="stat-label">Portfolio Projects</div>
          <div class="stat-value">{{ overviewStats.projects }}</div>
          <div class="stat-trend trend-v"><i class="fa-solid fa-arrow-trend-up"></i> Live items</div>
        </div>
        <div class="stat-card stat-c-teal" (click)="setTab('services')">
          <div class="stat-card-icon"><i class="fa-solid fa-gears"></i></div>
          <div class="stat-label">Active Services</div>
          <div class="stat-value">{{ overviewStats.services }}</div>
          <div class="stat-trend trend-t"><i class="fa-solid fa-circle-check"></i> Catalog live</div>
        </div>
        <div class="stat-card stat-c-amber" (click)="setTab('testimonials')">
          <div class="stat-card-icon"><i class="fa-solid fa-star"></i></div>
          <div class="stat-label">Testimonials</div>
          <div class="stat-value">{{ overviewStats.testimonials }}</div>
          <div class="stat-trend trend-a"><i class="fa-solid fa-thumbs-up"></i> Approved</div>
        </div>
        <div class="stat-card stat-c-rose" (click)="setTab('contact-hub')">
          <div class="stat-card-icon"><i class="fa-solid fa-envelope"></i></div>
          <div class="stat-label">Open Inquiries</div>
          <div class="stat-value">{{ overviewStats.inquiries }}</div>
          <div class="stat-trend trend-v"><i class="fa-solid fa-bell"></i> Needs action</div>
        </div>
      </div>

      <!-- Charts Row -->
      <div class="content-row" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">

        <!-- Chart 1: Projects by Category -->
        <div class="card" style="margin-bottom:0;">
          <div class="card-header">
            <div class="card-title">
              <div class="card-title-icon cti-v"><i class="fa-solid fa-chart-pie"></i></div>
              Projects by Category
            </div>
          </div>
          <div *ngIf="projectsChartData.length === 0" class="empty-state">
            <i class="fa-solid fa-chart-pie"></i>
            <p>No category data yet</p>
          </div>
          <div *ngIf="projectsChartData.length > 0" style="display:flex; flex-direction:column; gap:14px;">
            <div *ngFor="let item of projectsChartData">
              <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.82rem;">
                <span style="font-weight:600; color:var(--text);">{{ item.name }}</span>
                <span style="font-weight:700; color:var(--violet-light);">{{ item.count }} <small style="opacity:0.5; font-size:0.7rem;">({{ (overviewStats.projects > 0 ? (item.count / overviewStats.projects * 100) : 0) | number:'1.0-0' }}%)</small></span>
              </div>
              <div style="width:100%; height:6px; background:rgba(255,255,255,0.05); border-radius:10px; overflow:hidden;">
                <div [style.width.%]="overviewStats.projects > 0 ? (item.count / overviewStats.projects * 100) : 0" style="height:100%; background:linear-gradient(90deg, var(--violet), var(--violet-light)); border-radius:10px; transition: width 1.2s cubic-bezier(0.16,1,0.3,1);"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chart 2: Leads by Service -->
        <div class="card" style="margin-bottom:0;">
          <div class="card-header">
            <div class="card-title">
              <div class="card-title-icon cti-t"><i class="fa-solid fa-chart-bar"></i></div>
              Leads Distribution
            </div>
          </div>
          <div *ngIf="inquiriesChartData.length === 0" class="empty-state">
            <i class="fa-solid fa-inbox"></i>
            <p>No leads data yet</p>
          </div>
          <div *ngIf="inquiriesChartData.length > 0" style="display:flex; flex-direction:column; gap:14px;">
            <div *ngFor="let item of inquiriesChartData">
              <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.82rem;">
                <span style="font-weight:600; color:var(--text);">{{ item.name }}</span>
                <span style="font-weight:700; color:var(--teal-light);">{{ item.count }} <small style="opacity:0.5; font-size:0.7rem;">({{ (overviewStats.inquiries > 0 ? (item.count / overviewStats.inquiries * 100) : 0) | number:'1.0-0' }}%)</small></span>
              </div>
              <div style="width:100%; height:6px; background:rgba(255,255,255,0.05); border-radius:10px; overflow:hidden;">
                <div [style.width.%]="overviewStats.inquiries > 0 ? (item.count / overviewStats.inquiries * 100) : 0" style="height:100%; background:linear-gradient(90deg, var(--teal), var(--teal-light)); border-radius:10px; transition: width 1.2s cubic-bezier(0.16,1,0.3,1);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Projects Table -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <div class="card-title-icon cti-v"><i class="fa-solid fa-rocket"></i></div>
            Recent Projects
          </div>
          <a class="card-action" (click)="setTab('projects')"><i class="fa-solid fa-arrow-right" style="font-size:0.65rem;"></i> View All</a>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Category</th>
                <th>Client</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of recentProjects">
                <td>
                  <div class="user-cell">
                    <img *ngIf="p.main_image_url || p.image" [src]="p.main_image_url || p.image" style="width:30px;height:30px;border-radius:6px;object-fit:cover;flex-shrink:0;">
                    <div *ngIf="!(p.main_image_url || p.image)" class="user-avatar" style="border-radius:6px;width:30px;height:30px;font-size:0.7rem;">{{ (p.title_en || p.title || '?')[0] }}</div>
                    <span style="font-weight:600;">{{ p.title_en || p.title }}</span>
                  </div>
                </td>
                <td><span class="badge badge-v">{{ p.category?.name_en || p.category?.name?.en || 'N/A' }}</span></td>
                <td style="color:var(--text-2);">{{ p.client || '\u2014' }}</td>
              </tr>
              <tr *ngIf="recentProjects.length === 0">
                <td colspan="3" style="text-align:center; padding:24px; color:var(--text-2);">No recent projects found.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- SERVICES TAB -->
    <div class="view" [class.active]="activeTab === 'services'">
      <div class="card" *ngIf="showServiceForm" style="margin-bottom: 24px;">
        <div class="card-header">
          <div class="card-title">{{ isEditingService ? 'Edit Service' : 'Add New Service' }}</div>
          <button class="action-btn" (click)="cancelEditService()"><i class="fa-solid fa-xmark"></i> Cancel Edit</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="serviceForm" (ngSubmit)="saveService()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">Service Title (English)</label>
                <input class="s-input" formControlName="title_en" type="text" required placeholder="e.g. Web Development" />
              </div>
              <div class="fgroup">
                <label class="s-label">Service Title (Arabic)</label>
                <input class="s-input" formControlName="title_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064A\u0628" dir="rtl" />
              </div>
              <div class="fgroup">
                <label class="s-label">Category / Badge (English)</label>
                <input class="s-input" formControlName="subtitle_en" type="text" required placeholder="e.g. Technology" />
              </div>
              <div class="fgroup">
                <label class="s-label">Category / Badge (Arabic)</label>
                <input class="s-input" formControlName="subtitle_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u0627\u0644\u062A\u0642\u0646\u064A\u0629" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Description (English)</label>
                <textarea class="s-input" formControlName="description_en" rows="3" required></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Description (Arabic)</label>
                <textarea class="s-input" formControlName="description_ar" rows="3" required dir="rtl"></textarea>
              </div>
              <div class="fgroup">
                <label class="s-label">FontAwesome Icon Class</label>
                <input class="s-input" formControlName="icon" type="text" placeholder="e.g. fa-solid fa-laptop-code" />
              </div>
              <div class="fgroup">
                <label class="s-label">Display Order</label>
                <input class="s-input" formControlName="order" type="number" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Features - English (Comma separated)</label>
                <input class="s-input" formControlName="features_en" type="text" placeholder="e.g. Fast Loading, Custom CMS, Responsive Design" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Features - Arabic (Comma separated)</label>
                <input class="s-input" formControlName="features_ar" type="text" placeholder="\u0645\u062B\u0644\u0627\u064B: \u062A\u062D\u0645\u064A\u0644 \u0633\u0631\u064A\u0639\u060C \u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u0645\u062E\u0635\u0635\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u0645\u062A\u062C\u0627\u0648\u0628" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Stats - English (Format: Label:SubText:OptionalBadge, separated by commas)</label>
                <input class="s-input" formControlName="stats_str_en" type="text" placeholder="e.g. 100%:Customized:New, 24/7:Support:N/A" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Stats - Arabic (Format: Label:SubText:OptionalBadge, separated by commas)</label>
                <input class="s-input" formControlName="stats_str_ar" type="text" placeholder="\u0645\u062B\u0644\u0627\u064B: %100:\u0645\u062E\u0635\u0635:\u062C\u062F\u064A\u062F\u060C 24/7:\u062F\u0639\u0645 \u0645\u062A\u0648\u0627\u0635\u0644" dir="rtl" />
              </div>
              <div class="fgroup">
                <label class="s-label">CTA Text (English)</label>
                <input class="s-input" formControlName="cta_text_en" type="text" />
              </div>
              <div class="fgroup">
                <label class="s-label">CTA Text (Arabic)</label>
                <input class="s-input" formControlName="cta_text_ar" type="text" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">CTA Link URL</label>
                <input class="s-input" formControlName="cta_url" type="text" placeholder="/contact" />
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingService || serviceForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingService ? 'Update Service' : 'Create Service' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">All Services</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showServiceForm = !showServiceForm">
              <i class="fa-solid" [class.fa-plus]="!showServiceForm" [class.fa-xmark]="showServiceForm"></i> 
              {{ showServiceForm ? 'Close Form' : 'Add Service' }}
            </button>
            <button class="action-btn font-small" (click)="loadServices()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 80px;">Icon</th>
                <th>Service Title (EN)</th>
                <th>Category (EN)</th>
                <th style="width: 80px;">Order</th>
                <th style="width: 140px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let s of servicesList">
                <td style="text-align: center; font-size: 1.2rem; padding: 15px;"><i [class]="s.iconClass || s.icon"></i></td>
                <td><strong>{{ s.title_en || s.title?.en || s.title }}</strong></td>
                <td><span class="badge badge-blue">{{ s.subtitle_en || s.category?.en || s.category }}</span></td>
                <td>{{ s.order }}</td>
                <td>
                  <button class="action-btn" title="Edit Service" (click)="editService(s)" style="background: #e8620a10; color: #e8620a; border: 1px solid #e8620a20; margin-right: 5px;"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button class="action-btn" title="Delete Service" (click)="deleteService(s.id)" style="background: #ff000010; color: #ff0000; border: 1px solid #ff000020;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
              <tr *ngIf="servicesList.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">No services found.</td>
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
          <div class="card-title">{{ isEditingProject ? 'Edit Project & Case Study' : 'Add New Project' }}</div>
          <button class="action-btn" (click)="cancelEditProject()"><i class="fa-solid fa-xmark"></i> Cancel Edit</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="projectForm" (ngSubmit)="saveProject()">
            
            <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">1. General Info</h3>
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">Project Title (English)</label>
                <input class="s-input" formControlName="title_en" type="text" required placeholder="e.g. Media Glow E-Commerce Platform" />
              </div>
              <div class="fgroup">
                <label class="s-label">Project Title (Arabic)</label>
                <input class="s-input" formControlName="title_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u0645\u062A\u062C\u0631 \u0645\u064A\u062F\u064A\u0627 \u062C\u0644\u0648 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" dir="rtl" />
              </div>
              <div class="fgroup">
                <label class="s-label">Category</label>
                <select class="s-input" formControlName="category_id" required>
                  <option value="">Select Category</option>
                  <option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name_en || cat.name?.en || cat.name }}</option>
                </select>
              </div>
              <div class="fgroup">
                <label class="s-label">Main Image Alt Text (SEO)</label>
                <input class="s-input" formControlName="main_image_alt" type="text" placeholder="SEO Alt Text" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Description / Brief (English)</label>
                <textarea class="s-input" formControlName="description_en" rows="3" required></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Description / Brief (Arabic)</label>
                <textarea class="s-input" formControlName="description_ar" rows="3" required dir="rtl"></textarea>
              </div>
            </div>

            <h3 style="margin-top: 25px; margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">2. Branding & Visuals</h3>
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">Case Study Accent Color</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <input type="color" formControlName="color" style="width: 45px; height: 45px; border: none; border-radius: 8px; cursor: pointer; background: transparent;" />
                  <input class="s-input" formControlName="color" type="text" placeholder="#000000" style="flex: 1;" />
                </div>
              </div>
              <div class="fgroup">
                <label class="s-label">Project Emoji Icon</label>
                <input class="s-input" formControlName="emoji" type="text" placeholder="Icon class e.g. fa-solid fa-rocket or pi pi-rocket" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Main Image File</label>
                <input class="s-input" type="file" accept="image/*" (change)="onProjectImageSelected($event)" style="padding-top: 10px;" />
                <div *ngIf="projectImagePreview" style="margin-top: 10px;">
                  <img [src]="projectImagePreview" style="max-height: 120px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                </div>
              </div>
            </div>

            <h3 style="margin-top: 25px; margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">3. Case Study Meta</h3>
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">Client Name</label>
                <input class="s-input" formControlName="client" type="text" placeholder="e.g. Aura Cosmetics" />
              </div>
              <div class="fgroup">
                <label class="s-label">Timeline</label>
                <input class="s-input" formControlName="timeline" type="text" placeholder="e.g. 3 Months" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Project Tags (Comma separated)</label>
                <input class="s-input" formControlName="tags" type="text" placeholder="e.g. E-Commerce, Angular, Laravel" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Deliverables (Comma separated)</label>
                <input class="s-input" formControlName="deliverables" type="text" placeholder="e.g. UI/UX Design, Payment Gateway, SEO" />
              </div>
            </div>

            <h3 style="margin-top: 25px; margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">4. Challenge & Solution</h3>
            <div class="form-grid-custom">
              <div class="fgroup full-width">
                <label class="s-label">Challenge (English)</label>
                <textarea class="s-input" formControlName="challenge_en" rows="3"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Challenge (Arabic)</label>
                <textarea class="s-input" formControlName="challenge_ar" rows="3" dir="rtl"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Solution (English)</label>
                <textarea class="s-input" formControlName="solution_en" rows="3"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Solution (Arabic)</label>
                <textarea class="s-input" formControlName="solution_ar" rows="3" dir="rtl"></textarea>
              </div>
            </div>

            <h3 style="margin-top: 25px; margin-bottom: 15px; border-bottom: 1px solid var(--admin-border); padding-bottom: 5px; color: var(--orange);">5. Metrics & Testimonial</h3>
            <div class="form-grid-custom">
              <div class="fgroup full-width">
                <label class="s-label">Results / Stats (Format: Value:Label, separated by commas)</label>
                <input class="s-input" formControlName="results_str" type="text" placeholder="e.g. 150%:Sales Growth, 99.9%:Uptime, 3x:Recall" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Client Quote / Testimonial Text</label>
                <textarea class="s-input" formControlName="testimonial_text" rows="2" placeholder="Feedback quote..."></textarea>
              </div>
              <div class="fgroup">
                <label class="s-label">Quote Author Name</label>
                <input class="s-input" formControlName="testimonial_name" type="text" placeholder="e.g. Fahad Al-Mansoori" />
              </div>
              <div class="fgroup">
                <label class="s-label">Quote Author Role</label>
                <input class="s-input" formControlName="testimonial_role" type="text" placeholder="e.g. CEO, Media Glow Retail" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Quote Author Avatar Image URL</label>
                <input class="s-input" formControlName="testimonial_avatar" type="text" placeholder="HTTPS image URL" />
              </div>
            </div>

            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingProject || projectForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingProject ? 'Update Project & Case Study' : 'Create Project' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">All Projects</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showProjectForm = !showProjectForm">
              <i class="fa-solid" [class.fa-plus]="!showProjectForm" [class.fa-xmark]="showProjectForm"></i> 
              {{ showProjectForm ? 'Close Form' : 'Add Project' }}
            </button>
            <button class="action-btn font-small" (click)="loadProjects()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 70px; text-align: center;">Emoji</th>
                <th style="width: 90px;">Image</th>
                <th>Project Title (EN)</th>
                <th>Category</th>
                <th>Client</th>
                <th style="width: 140px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of projects">
                <td style="text-align: center; font-size: 1.4rem;"><i [class]="p.emoji || 'fa-solid fa-rocket'"></i></td>
                <td>
                  <img *ngIf="p.main_image_url || p.image" [src]="p.main_image_url || p.image" style="width: 50px; height: 50px; border-radius: 6px; object-fit: cover;">
                </td>
                <td><strong>{{ p.title_en || p.title?.en || p.title }}</strong></td>
                <td><span class="badge badge-blue">{{ p.category?.name_en || p.category?.name?.en || 'N/A' }}</span></td>
                <td>{{ p.client || 'N/A' }}</td>
                <td>
                  <button class="action-btn" title="Edit Project" (click)="editProject(p)" style="background: #e8620a10; color: #e8620a; border: 1px solid #e8620a20; margin-right: 5px;"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button class="action-btn" title="Delete Project" (click)="deleteProject(p.id)" style="background: #ff000010; color: #ff0000; border: 1px solid #ff000020;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
              <tr *ngIf="projects.length === 0">
                <td colspan="6" style="text-align: center; padding: 25px;">No projects found.</td>
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
          <div class="card-title">{{ isEditingCategory ? 'Edit Category' : 'Add New Category' }}</div>
          <button class="action-btn" (click)="cancelEditCategory()"><i class="fa-solid fa-xmark"></i> Cancel Edit</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="categoryForm" (ngSubmit)="saveCategory()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">Category Name (English)</label>
                <input class="s-input" formControlName="name_en" type="text" required placeholder="e.g. Mobile Apps" />
              </div>
              <div class="fgroup">
                <label class="s-label">Category Name (Arabic)</label>
                <input class="s-input" formControlName="name_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u062C\u0648\u0627\u0644" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Description (English)</label>
                <textarea class="s-input" formControlName="description_en" rows="2"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Description (Arabic)</label>
                <textarea class="s-input" formControlName="description_ar" rows="2" dir="rtl"></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Category Thumbnail / Image</label>
                <input class="s-input" type="file" accept="image/*" (change)="onCategoryImageSelected($event)" style="padding-top: 10px;" />
                <div *ngIf="categoryImagePreview" style="margin-top: 10px;">
                  <img [src]="categoryImagePreview" style="max-height: 100px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                </div>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingCategory || categoryForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingCategory ? 'Update Category' : 'Create Category' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">All Portfolio Categories</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showCategoryForm = !showCategoryForm">
              <i class="fa-solid" [class.fa-plus]="!showCategoryForm" [class.fa-xmark]="showCategoryForm"></i> 
              {{ showCategoryForm ? 'Close Form' : 'Add Category' }}
            </button>
            <button class="action-btn font-small" (click)="loadCategories()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 90px;">Thumbnail</th>
                <th>Category Name (EN)</th>
                <th>Category Name (AR)</th>
                <th>Description (EN)</th>
                <th style="width: 140px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let cat of categories">
                <td>
                  <img *ngIf="cat.image_url || cat.image" [src]="cat.image_url || cat.image" style="width: 45px; height: 45px; border-radius: 6px; object-fit: cover;">
                </td>
                <td><strong>{{ cat.name_en || cat.name?.en || cat.name }}</strong></td>
                <td>{{ cat.name_ar || cat.name?.ar }}</td>
                <td style="color: rgba(255,255,255,0.6); font-size: 0.9rem;">{{ cat.description_en || cat.description?.en || 'N/A' }}</td>
                <td>
                  <button class="action-btn" title="Edit Category" (click)="editCategory(cat)" style="background: #e8620a10; color: #e8620a; border: 1px solid #e8620a20; margin-right: 5px;"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button class="action-btn" title="Delete Category" (click)="deleteCategory(cat.id)" style="background: #ff000010; color: #ff0000; border: 1px solid #ff000020;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
              <tr *ngIf="categories.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">No categories found.</td>
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
          <div class="card-title">{{ isEditingBlog ? 'Edit Blog Article' : 'Write New Blog Article' }}</div>
          <button class="action-btn" (click)="cancelEditBlog()"><i class="fa-solid fa-xmark"></i> Cancel Edit</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="blogForm" (ngSubmit)="saveBlog()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">Article Title (English)</label>
                <input class="s-input" formControlName="title_en" type="text" required placeholder="e.g. Modern UI Design Trends" />
              </div>
              <div class="fgroup">
                <label class="s-label">Article Title (Arabic)</label>
                <input class="s-input" formControlName="title_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u0627\u062A\u062C\u0627\u0647\u0627\u062A \u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062D\u062F\u064A\u062B\u0629" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Content (English)</label>
                <textarea class="s-input" formControlName="description_en" rows="5" required placeholder="Write article content here..."></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Content (Arabic)</label>
                <textarea class="s-input" formControlName="description_ar" rows="5" required placeholder="\u0627\u0643\u062A\u0628 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0627\u0644 \u0647\u0646\u0627..." dir="rtl"></textarea>
              </div>
              <div class="fgroup">
                <label class="s-label">Image Alternate Text (SEO)</label>
                <input class="s-input" formControlName="img_alt" type="text" placeholder="e.g. Design Trends" />
              </div>
              <div class="fgroup">
                <label class="s-label">Media File (Image or Video)</label>
                <input class="s-input" type="file" accept="image/*,video/*" (change)="onBlogImageSelected($event)" style="padding-top: 10px;" />
                <div *ngIf="blogImagePreview" style="margin-top: 10px;">
                  <img [src]="blogImagePreview" style="max-height: 100px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />
                </div>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingBlog || blogForm.invalid">
                <i class="fa-solid fa-paper-plane"></i> {{ isEditingBlog ? 'Update Article' : 'Publish Article' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">Published Articles</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showBlogForm = !showBlogForm">
              <i class="fa-solid" [class.fa-plus]="!showBlogForm" [class.fa-xmark]="showBlogForm"></i> 
              {{ showBlogForm ? 'Close Form' : 'Write Article' }}
            </button>
            <button class="action-btn font-small" (click)="loadBlogs()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 90px;">Cover</th>
                <th>Title (EN)</th>
                <th>Title (AR)</th>
                <th style="width: 90px; text-align: center;">Likes</th>
                <th style="width: 140px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let b of blogs">
                <td>
                  <img *ngIf="b.media_url || b.image" [src]="b.media_url || b.image" style="width: 50px; height: 50px; border-radius: 6px; object-fit: cover;">
                </td>
                <td><strong>{{ b.title_en || b.title?.en || b.title }}</strong></td>
                <td>{{ b.title_ar || b.title?.ar }}</td>
                <td style="text-align: center;">
                  <span class="badge badge-blue">{{ b.likes || 0 }} <i class="fa-solid fa-heart" style="color: red; margin-left: 2px;"></i></span>
                </td>
                <td>
                  <button class="action-btn" title="Edit Article" (click)="editBlog(b)" style="background: #e8620a10; color: #e8620a; border: 1px solid #e8620a20; margin-right: 5px;"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button class="action-btn" title="Delete Article" (click)="deleteBlog(b.id)" style="background: #ff000010; color: #ff0000; border: 1px solid #ff000020;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
              <tr *ngIf="blogs.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">No articles found.</td>
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
          <div class="card-title">{{ isEditingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial' }}</div>
          <button class="action-btn" (click)="cancelEditTestimonial()"><i class="fa-solid fa-xmark"></i> Cancel Edit</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="testimonialForm" (ngSubmit)="saveTestimonial()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">Client Name</label>
                <input class="s-input" formControlName="client_name" type="text" required placeholder="e.g. John Doe" />
              </div>
              <div class="fgroup">
                <label class="s-label">Job Title / Role</label>
                <input class="s-input" formControlName="job_title" type="text" required placeholder="e.g. Founder & CEO" />
              </div>
              <div class="fgroup">
                <label class="s-label">Company Name (Optional)</label>
                <input class="s-input" formControlName="company_name" type="text" placeholder="e.g. TechNova" />
              </div>
              <div class="fgroup">
                <label class="s-label">Rating (1 to 5 Stars)</label>
                <select class="s-input" formControlName="rating" required>
                  <option value="5">\u2605\u2605\u2605\u2605\u2605 (5 Stars)</option>
                  <option value="4">\u2605\u2605\u2605\u2605 (4 Stars)</option>
                  <option value="3">\u2605\u2605\u2605 (3 Stars)</option>
                  <option value="2">\u2605\u2605 (2 Stars)</option>
                  <option value="1">\u2605 (1 Star)</option>
                </select>
              </div>
              <div class="fgroup">
                <label class="s-label">Avatar Circle Color</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <input type="color" formControlName="avatar_color" style="width: 45px; height: 45px; border: none; border-radius: 8px; cursor: pointer; background: transparent;" />
                  <input class="s-input" formControlName="avatar_color" type="text" placeholder="#e8620a" style="flex: 1;" />
                </div>
              </div>
              <div></div> <!-- Spacer -->
              
              <div class="fgroup full-width">
                <label class="s-label">Feedback Description (English)</label>
                <textarea class="s-input" formControlName="feedback_en" rows="3" required placeholder="Client feedback in English..."></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Feedback Description (Arabic)</label>
                <textarea class="s-input" formControlName="feedback_ar" rows="3" required placeholder="\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629..." dir="rtl"></textarea>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingTestimonial || testimonialForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingTestimonial ? 'Update Testimonial' : 'Create Testimonial' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">All Testimonials</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showTestimonialForm = !showTestimonialForm">
              <i class="fa-solid" [class.fa-plus]="!showTestimonialForm" [class.fa-xmark]="showTestimonialForm"></i> 
              {{ showTestimonialForm ? 'Close Form' : 'Add Testimonial' }}
            </button>
            <button class="action-btn font-small" (click)="loadTestimonials()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th style="width: 70px;">Avatar</th>
                <th>Client Name</th>
                <th>Role / Company</th>
                <th>Feedback (EN)</th>
                <th style="width: 90px; text-align: center;">Rating</th>
                <th style="width: 140px;">Actions</th>
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
                <td style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">{{ t.feedback_en }}</td>
                <td style="text-align: center; color: gold; font-size: 0.85rem;">{{ '\u2605'.repeat(t.rating || 5) }}</td>
                <td>
                  <button class="action-btn" title="Edit Testimonial" (click)="editTestimonial(t)" style="background: #e8620a10; color: #e8620a; border: 1px solid #e8620a20; margin-right: 5px;"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button class="action-btn" title="Delete Testimonial" (click)="deleteTestimonial(t.id)" style="background: #ff000010; color: #ff0000; border: 1px solid #ff000020;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
              <tr *ngIf="testimonials.length === 0">
                <td colspan="6" style="text-align: center; padding: 20px;">No testimonials found.</td>
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
          <div class="card-title">{{ isEditingFaq ? 'Edit FAQ' : 'Add New FAQ' }}</div>
          <button class="action-btn" (click)="cancelEditFaq()"><i class="fa-solid fa-xmark"></i> Cancel Edit</button>
        </div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="faqForm" (ngSubmit)="saveFaq()">
            <div class="form-grid-custom">
              <div class="fgroup">
                <label class="s-label">Question (English)</label>
                <input class="s-input" formControlName="question_en" type="text" required placeholder="e.g. How long does a project take?" />
              </div>
              <div class="fgroup">
                <label class="s-label">Question (Arabic)</label>
                <input class="s-input" formControlName="question_ar" type="text" required placeholder="\u0645\u062B\u0644\u0627\u064B: \u0643\u0645 \u064A\u0633\u062A\u063A\u0631\u0642 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u064A\u061F" dir="rtl" />
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Answer (English)</label>
                <textarea class="s-input" formControlName="answer_en" rows="3" required placeholder="Detailed answer..."></textarea>
              </div>
              <div class="fgroup full-width">
                <label class="s-label">Answer (Arabic)</label>
                <textarea class="s-input" formControlName="answer_ar" rows="3" required placeholder="\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A\u0629..." dir="rtl"></textarea>
              </div>
              <div class="fgroup">
                <label class="s-label">Sort Order</label>
                <input class="s-input" formControlName="sort_order" type="number" />
              </div>
              <div class="fgroup" style="justify-content: center;">
                <label class="s-label" style="display: flex; align-items: center; gap: 10px; cursor: pointer; padding-top: 25px;">
                  <input type="checkbox" formControlName="is_active" style="width: 20px; height: 20px; accent-color: #e8620a;" />
                  <span>Active (Visible on public site)</span>
                </label>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
              <button type="submit" class="save-btn" [disabled]="loadingFaq || faqForm.invalid">
                <i class="fa-solid fa-floppy-disk"></i> {{ isEditingFaq ? 'Update FAQ' : 'Create FAQ' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">All FAQs</div>
          <div style="display: flex; gap: 10px;">
            <button class="save-btn font-small" (click)="showFaqForm = !showFaqForm">
              <i class="fa-solid" [class.fa-plus]="!showFaqForm" [class.fa-xmark]="showFaqForm"></i> 
              {{ showFaqForm ? 'Close Form' : 'Add FAQ' }}
            </button>
            <button class="action-btn font-small" (click)="loadFaqs()"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th>Question (EN)</th>
                <th>Question (AR)</th>
                <th style="width: 80px; text-align: center;">Order</th>
                <th style="width: 100px; text-align: center;">Status</th>
                <th style="width: 140px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let faq of faqs">
                <td><strong>{{ faq.question_en }}</strong></td>
                <td>{{ faq.question_ar }}</td>
                <td style="text-align: center;">{{ faq.order }}</td>
                <td style="text-align: center;">
                  <span class="badge" [class.badge-orange]="faq.is_active" [class.badge-error]="!faq.is_active">
                    {{ faq.is_active ? 'Active' : 'Inactive' }}
                  </span>
                </td>
                <td>
                  <button class="action-btn" title="Edit FAQ" (click)="editFaq(faq)" style="background: #e8620a10; color: #e8620a; border: 1px solid #e8620a20; margin-right: 5px;"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button class="action-btn" title="Delete FAQ" (click)="deleteFaq(faq.id)" style="background: #ff000010; color: #ff0000; border: 1px solid #ff000020;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
              <tr *ngIf="faqs.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">No FAQs found.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- CONTACT HUB TAB -->
    <div class="view" [class.active]="activeTab === 'contact-hub'">
      <div class="card" style="margin-bottom: 24px;">
        <div class="card-header"><div class="card-title">Edit Contact Information & Settings</div></div>
        <div class="cb" style="padding: 24px;">
          <form [formGroup]="contactForm" (ngSubmit)="saveContactInfo()">
            <div class="form-grid-custom">
              <div class="fgroup"><label class="s-label">WhatsApp Phone</label><input class="s-input" formControlName="whatsapp_phone" type="text" placeholder="e.g. +966500000000" /></div>
              <div class="fgroup"><label class="s-label">WhatsApp Description</label><input class="s-input" formControlName="whatsapp_desc" type="text" placeholder="e.g. Chat with Sales" /></div>
              <div class="fgroup"><label class="s-label">Official Email</label><input class="s-input" formControlName="official_email" type="email" placeholder="e.g. info@mediaglow.com" /></div>
              <div class="fgroup"><label class="s-label">Company Address</label><input class="s-input" formControlName="company_address" type="text" placeholder="Riyadh, Saudi Arabia" /></div>
              <div class="fgroup full-width"><label class="s-label">Google Maps URL</label><input class="s-input" formControlName="google_maps_url" type="text" placeholder="https://maps.google.com/..." /></div>
              <div class="fgroup full-width"><label class="s-label">Emergency Support Info</label><input class="s-input" formControlName="emergency_support_info" type="text" placeholder="Call +9665XXXXXXX for critical queries" /></div>
            </div>
            <div style="margin-top: 30px; display: flex; align-items: center;">
              <button type="submit" class="save-btn" [disabled]="loadingInfo"><i class="fa-solid fa-floppy-disk"></i> Save All Changes</button>
              <span *ngIf="infoMessage" style="margin-left: 15px; color: var(--orange); font-weight:600;"><i class="fa-solid fa-circle-check"></i> {{ infoMessage }}</span>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">Customer Inquiries (Leads)</div>
          <button class="save-btn font-small" (click)="loadInquiries()"><i class="fa-solid fa-rotate"></i> Refresh Messages</button>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr style="background: rgba(255,255,255,0.02);">
                <th>Lead Name</th>
                <th>Contact Info</th>
                <th>Project & Service</th>
                <th>Date</th>
                <th style="width: 100px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let inq of inquiries">
                <td>
                  <strong>{{ inq.full_name }}</strong><br>
                  <small style="color:rgba(255,255,255,0.5)">{{ inq.company_name || 'Individual' }}</small>
                </td>
                <td>
                  <a href="mailto:{{ inq.email }}" style="color:var(--orange); text-decoration:none">{{ inq.email }}</a><br>
                  <span style="font-size:0.85rem; color:rgba(255,255,255,0.5)">{{ inq.phone }}</span>
                </td>
                <td>
                  <span class="badge badge-blue">{{ inq.service_needed || 'General' }}</span><br>
                  <small style="display:block; margin-top:5px; max-width:250px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis" [title]="inq.project_details">{{ inq.project_details }}</small>
                </td>
                <td>{{ inq.created_at | date:'short' }}</td>
                <td>
                  <button class="action-btn" title="Delete Lead" (click)="deleteInquiry(inq.id)" style="background: #ff000010; color: #ff0000; border: 1px solid #ff000020;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
              <tr *ngIf="inquiries.length === 0">
                <td colspan="5" style="text-align: center; padding: 20px;">No inquiries found.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- HOME PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'home-page'">
      <div class="pg-head">
        <h2>Home Page Header Sections</h2>
        <p>Edit the core textual properties of the main homepage.</p>
        <button class="save-btn" (click)="savePageData('home')" [disabled]="isSavingPage['home']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['home'] ? 'Saving...' : 'Save All Changes' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="card-header"><div class="card-title">Hero Banner Section</div></div>
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">Tagline (English)</label><input type="text" [(ngModel)]="pagesData['home'].hero.tag.en" class="s-input"></div>
            <div><label class="s-label">Tagline (Arabic)</label><input type="text" [(ngModel)]="pagesData['home'].hero.tag.ar" class="s-input" dir="rtl"></div>
            <div><label class="s-label">Title Line (English)</label><input type="text" [(ngModel)]="pagesData['home'].hero.title1.en" class="s-input"></div>
            <div><label class="s-label">Title Line (Arabic)</label><input type="text" [(ngModel)]="pagesData['home'].hero.title1.ar" class="s-input" dir="rtl"></div>
            <div class="full-width"><label class="s-label">Subtitle Description (English)</label><textarea [(ngModel)]="pagesData['home'].hero.subtitle.en" rows="3" class="s-input"></textarea></div>
            <div class="full-width"><label class="s-label">Subtitle Description (Arabic)</label><textarea [(ngModel)]="pagesData['home'].hero.subtitle.ar" rows="3" class="s-input" dir="rtl"></textarea></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ABOUT PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'about-page'">
      <div class="pg-head">
        <h2>About Page Details & Timeline</h2>
        <p>Configure the vision statements, descriptions, and historical journey items.</p>
        <button class="save-btn" (click)="saveAboutData()" [disabled]="isSavingAbout" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingAbout ? 'Saving...' : 'Save All Changes' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px; margin-bottom:24px;">
        <div class="card-header"><div class="card-title">About US - Banner Text</div></div>
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">Label (EN)</label><input type="text" [(ngModel)]="aboutData.content.hero.en.label" class="s-input"></div>
            <div><label class="s-label">Label (AR)</label><input type="text" [(ngModel)]="aboutData.content.hero.ar.label" class="s-input" dir="rtl"></div>
            <div><label class="s-label">Title (EN)</label><input type="text" [(ngModel)]="aboutData.content.hero.en.title1" class="s-input"></div>
            <div><label class="s-label">Title (AR)</label><input type="text" [(ngModel)]="aboutData.content.hero.ar.title1" class="s-input" dir="rtl"></div>
            <div class="full-width"><label class="s-label">Description Brief (EN)</label><textarea [(ngModel)]="aboutData.content.hero.en.desc" rows="3" class="s-input"></textarea></div>
            <div class="full-width"><label class="s-label">Description Brief (AR)</label><textarea [(ngModel)]="aboutData.content.hero.ar.desc" rows="3" class="s-input" dir="rtl"></textarea></div>
          </div>
        </div>
      </div>

      <div class="card" style="margin-bottom:24px;">
        <div class="card-header">
          <div class="card-title">Our History Timeline</div>
          <button class="save-btn font-small" (click)="addTimeline()"><i class="fa-solid fa-plus"></i> Add Year Event</button>
        </div>
        <div class="cb" style="padding:24px;">
          <div *ngFor="let item of aboutData.timeline; let i = index" style="background:rgba(255,255,255,0.01); padding:20px; border-radius:12px; margin-bottom:16px; border:1px solid var(--admin-border); position:relative">
            <button (click)="removeTimeline(i)" style="position:absolute; top:15px; right:15px; background:#ef4444; color:white; border:none; border-radius:6px; padding:6px 12px; cursor:pointer; font-size:0.8rem;"><i class="fa-solid fa-trash-can"></i> Remove</button>
            <div style="margin-bottom:16px">
              <label class="s-label">Year</label>
              <input type="text" [(ngModel)]="item.year" class="s-input" style="width:120px;">
            </div>
            <div class="form-grid-custom">
              <div><label class="s-label">Title (EN)</label><input type="text" [(ngModel)]="item.title.en" class="s-input"></div>
              <div><label class="s-label">Title (AR)</label><input type="text" [(ngModel)]="item.title.ar" class="s-input" dir="rtl"></div>
              <div class="full-width"><label class="s-label">Description (EN)</label><textarea [(ngModel)]="item.description.en" rows="3" class="s-input"></textarea></div>
              <div class="full-width"><label class="s-label">Description (AR)</label><textarea [(ngModel)]="item.description.ar" rows="3" class="s-input" dir="rtl"></textarea></div>
            </div>
          </div>
          <div *ngIf="aboutData.timeline.length === 0" style="color:rgba(255,255,255,0.5)">No timeline events added yet.</div>
        </div>
      </div>
    </div>

    <!-- SERVICES PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'services-page'">
      <div class="pg-head">
        <h2>Services Page Header</h2>
        <p>Edit services banner textual titles.</p>
        <button class="save-btn" (click)="savePageData('services')" [disabled]="isSavingPage['services']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['services'] ? 'Saving...' : 'Save All Changes' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">Tagline (EN)</label><input type="text" [(ngModel)]="pagesData['services'].hero.tag.en" class="s-input"></div>
            <div><label class="s-label">Title (EN)</label><input type="text" [(ngModel)]="pagesData['services'].hero.title.en" class="s-input"></div>
            <div class="full-width"><label class="s-label">Description (EN)</label><textarea [(ngModel)]="pagesData['services'].hero.desc.en" rows="3" class="s-input"></textarea></div>
          </div>
        </div>
      </div>
    </div>

    <!-- PORTFOLIO PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'portfolio-page'">
      <div class="pg-head">
        <h2>Portfolio Page Header</h2>
        <p>Edit portfolio banner titles.</p>
        <button class="save-btn" (click)="savePageData('portfolio')" [disabled]="isSavingPage['portfolio']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['portfolio'] ? 'Saving...' : 'Save All Changes' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">Tagline (EN)</label><input type="text" [(ngModel)]="pagesData['portfolio'].hero.tag.en" class="s-input"></div>
            <div><label class="s-label">Title (EN)</label><input type="text" [(ngModel)]="pagesData['portfolio'].hero.title.en" class="s-input"></div>
            <div class="full-width"><label class="s-label">Description (EN)</label><textarea [(ngModel)]="pagesData['portfolio'].hero.desc.en" rows="3" class="s-input"></textarea></div>
          </div>
        </div>
      </div>
    </div>

    <!-- BLOGS PAGE SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'blogs-page'">
      <div class="pg-head">
        <h2>Blogs Page Header</h2>
        <p>Edit blogs header banner textual titles.</p>
        <button class="save-btn" (click)="savePageData('blogs')" [disabled]="isSavingPage['blogs']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['blogs'] ? 'Saving...' : 'Save All Changes' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div><label class="s-label">Tagline (EN)</label><input type="text" [(ngModel)]="pagesData['blogs'].hero.tag.en" class="s-input"></div>
            <div><label class="s-label">Title (EN)</label><input type="text" [(ngModel)]="pagesData['blogs'].hero.title.en" class="s-input"></div>
            <div class="full-width"><label class="s-label">Description (EN)</label><textarea [(ngModel)]="pagesData['blogs'].hero.desc.en" rows="3" class="s-input"></textarea></div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER CONTENT SECTION TAB -->
    <div class="view" [class.active]="activeTab === 'footer-section'">
      <div class="pg-head">
        <h2>Footer Global Content</h2>
        <p>Edit description text and links inside the global website footer.</p>
        <button class="save-btn" (click)="savePageData('footer')" [disabled]="isSavingPage['footer']" style="margin-top:16px;">
          <i class="fa-solid fa-floppy-disk"></i> {{ isSavingPage['footer'] ? 'Saving...' : 'Save All Changes' }}
        </button>
      </div>

      <div class="card" style="margin-top:24px;">
        <div class="cb" style="padding:24px;">
          <div class="form-grid-custom">
            <div class="full-width"><label class="s-label">Company Description in Footer (EN)</label><textarea [(ngModel)]="pagesData['footer'].desc.en" rows="3" class="s-input"></textarea></div>
            <div><label class="s-label">Email Address</label><input type="text" [(ngModel)]="pagesData['footer'].email" class="s-input"></div>
            <div><label class="s-label">Phone Number</label><input type="text" [(ngModel)]="pagesData['footer'].phone" class="s-input"></div>
            <div><label class="s-label">LinkedIn URL</label><input type="text" [(ngModel)]="pagesData['footer'].socials.linkedin" class="s-input"></div>
            <div><label class="s-label">Twitter URL</label><input type="text" [(ngModel)]="pagesData['footer'].socials.twitter" class="s-input"></div>
          </div>
        </div>
    </div>

`, styles: [`@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";

/* src/app/components/controller-dashboard/controller-dashboard.component.css */
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
  --bg: #07070f;
  --bg-2: #0c0c1a;
  --bg-3: #101024;
  --card: rgba(12, 12, 26, 0.75);
  --card-hover: rgba(18, 18, 38, 0.85);
  --sidebar: #05050b;
  --topbar: rgba(7, 7, 15, 0.85);
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
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.25);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--violet);
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
  font-family: "Inter", sans-serif;
  color: var(--text);
  direction: ltr;
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
  background:
    linear-gradient(
      90deg,
      var(--violet-soft) 0%,
      rgba(99, 102, 241, 0.03) 100%);
  border-color: var(--border-v);
  color: #fff;
  font-weight: 600;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.sb-item.active .sb-icon {
  color: #fff;
  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--violet-2));
  box-shadow: 0 4px 15px var(--violet-glow);
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
  color: rgba(255, 255, 255, 0.18);
  font-size: 0.9rem;
}
.tb-bc .cur {
  font-weight: 700;
  color: #fff;
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
  background: #0c0c1e;
  border: 1px solid var(--border-v);
  border-radius: var(--r-lg);
  padding: 12px;
  z-index: 250;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
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
  color: #fff;
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
  color: #fff;
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
  transform: translateY(-2px);
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
  transform: translateY(-2px);
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
  transform: translateY(-3px) scale(1.02);
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
  transform: translateY(-4px);
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
  transform: scale(1.1) rotate(5deg);
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
  transform: translateY(-2px);
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
/*# sourceMappingURL=controller-dashboard.component.css.map */
`] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControllerDashboardComponent, { className: "ControllerDashboardComponent", filePath: "src/app/components/controller-dashboard/controller-dashboard.component.ts", lineNumber: 14 });
})();
export {
  ControllerDashboardComponent
};
//# sourceMappingURL=chunk-O2EDFK5J.js.map
