import {
  ConfirmService
} from "./chunk-YURY4BWO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-KWEQLBRN.js";
import {
  ApiService
} from "./chunk-HE5SAGTC.js";
import {
  CommonModule,
  Component,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZYG2ULWX.js";

// src/app/components/portfolio/about/portfolio-about.component.ts
function PortfolioAboutComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.saveMessage);
  }
}
function PortfolioAboutComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "label");
    \u0275\u0275text(3, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_5_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const section_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.aboutData.content[section_r4.id].ar.label, $event) || (ctx_r0.aboutData.content[section_r4.id].ar.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 23)(6, "label");
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_5_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const section_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.aboutData.content[section_r4.id].ar.title1, $event) || (ctx_r0.aboutData.content[section_r4.id].ar.title1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.aboutData.content[section_r4.id].ar.label);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.aboutData.content[section_r4.id].ar.title1);
  }
}
function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "label");
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const section_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.aboutData.content[section_r4.id].ar.title, $event) || (ctx_r0.aboutData.content[section_r4.id].ar.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.aboutData.content[section_r4.id].ar.title);
  }
}
function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "label");
    \u0275\u0275text(3, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_14_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const section_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.aboutData.content[section_r4.id].en.label, $event) || (ctx_r0.aboutData.content[section_r4.id].en.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 23)(6, "label");
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_14_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const section_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.aboutData.content[section_r4.id].en.title1, $event) || (ctx_r0.aboutData.content[section_r4.id].en.title1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.aboutData.content[section_r4.id].en.label);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.aboutData.content[section_r4.id].en.title1);
  }
}
function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "label");
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_div_1_div_5_ng_container_15_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const section_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.aboutData.content[section_r4.id].en.title, $event) || (ctx_r0.aboutData.content[section_r4.id].en.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.aboutData.content[section_r4.id].en.title);
  }
}
function PortfolioAboutComponent_div_12_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h4", 35);
    \u0275\u0275text(4, "\u0639\u0631\u0628\u064A (AR)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PortfolioAboutComponent_div_12_div_1_div_5_ng_container_5_Template, 9, 2, "ng-container", 36)(6, PortfolioAboutComponent_div_12_div_1_div_5_ng_container_6_Template, 5, 1, "ng-container", 36);
    \u0275\u0275elementStart(7, "div", 23)(8, "label");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_div_1_div_5_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const section_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.aboutData.content[section_r4.id].ar.desc, $event) || (ctx_r0.aboutData.content[section_r4.id].ar.desc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 38)(12, "h4", 35);
    \u0275\u0275text(13, "English (EN)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PortfolioAboutComponent_div_12_div_1_div_5_ng_container_14_Template, 9, 2, "ng-container", 36)(15, PortfolioAboutComponent_div_12_div_1_div_5_ng_container_15_Template, 5, 1, "ng-container", 36);
    \u0275\u0275elementStart(16, "div", 23)(17, "label");
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_div_1_div_5_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const section_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.aboutData.content[section_r4.id].en.desc, $event) || (ctx_r0.aboutData.content[section_r4.id].en.desc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", section_r4.id === "hero");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r4.id !== "hero");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.aboutData.content[section_r4.id].ar.desc);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", section_r4.id === "hero");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r4.id !== "hero");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.aboutData.content[section_r4.id].en.desc);
  }
}
function PortfolioAboutComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275listener("click", function PortfolioAboutComponent_div_12_div_1_Template_div_click_1_listener() {
      const section_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleSection(section_r4.id));
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PortfolioAboutComponent_div_12_div_1_div_5_Template, 20, 6, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r4.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-chevron-down", ctx_r0.expandedSection !== section_r4.id)("fa-chevron-up", ctx_r0.expandedSection === section_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.expandedSection === section_r4.id);
  }
}
function PortfolioAboutComponent_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "div", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45)(7, "div")(8, "strong");
    \u0275\u0275text(9, "AR:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275element(11, "br");
    \u0275\u0275elementStart(12, "span", 46);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 47)(15, "strong");
    \u0275\u0275text(16, "EN:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275element(18, "br");
    \u0275\u0275elementStart(19, "span", 46);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "button", 48);
    \u0275\u0275listener("click", function PortfolioAboutComponent_div_12_div_7_Template_button_click_21_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteTimelineEntry(i_r11));
    });
    \u0275\u0275element(22, "i", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r12.year);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (item_r12.title == null ? null : item_r12.title.ar) || item_r12.title_ar, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r12.description == null ? null : item_r12.description.ar) || item_r12.desc_ar);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (item_r12.title == null ? null : item_r12.title.en) || item_r12.title_en, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r12.description == null ? null : item_r12.description.en) || item_r12.desc_en);
  }
}
function PortfolioAboutComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, PortfolioAboutComponent_div_12_div_1_Template, 6, 6, "div", 14);
    \u0275\u0275elementStart(2, "div", 15)(3, "div", 16)(4, "h3");
    \u0275\u0275text(5, "\u0645\u062D\u0637\u0627\u062A \u0627\u0644\u0648\u0643\u0627\u0644\u0629 | Agency Timeline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275template(7, PortfolioAboutComponent_div_12_div_7_Template, 23, 5, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19)(9, "h4");
    \u0275\u0275text(10, "\u0625\u0636\u0627\u0641\u0629 \u0645\u062D\u0637\u0629 \u062C\u062F\u064A\u062F\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20)(12, "div", 21)(13, "label");
    \u0275\u0275text(14, "Year *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newTimelineEntry.year, $event) || (ctx_r0.newTimelineEntry.year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 23)(17, "label");
    \u0275\u0275text(18, "Title AR *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newTimelineEntry.title_ar, $event) || (ctx_r0.newTimelineEntry.title_ar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 23)(21, "label");
    \u0275\u0275text(22, "Title EN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newTimelineEntry.title_en, $event) || (ctx_r0.newTimelineEntry.title_en = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 20)(25, "div", 23)(26, "label");
    \u0275\u0275text(27, "Desc AR *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "textarea", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_Template_textarea_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newTimelineEntry.desc_ar, $event) || (ctx_r0.newTimelineEntry.desc_ar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 23)(30, "label");
    \u0275\u0275text(31, "Desc EN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "textarea", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioAboutComponent_div_12_Template_textarea_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newTimelineEntry.desc_en, $event) || (ctx_r0.newTimelineEntry.desc_en = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 27);
    \u0275\u0275listener("click", function PortfolioAboutComponent_div_12_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addTimelineEntry());
    });
    \u0275\u0275element(34, "i", 28);
    \u0275\u0275text(35, " \u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0645\u062D\u0637\u0627\u062A ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sections);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.aboutData.timeline);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newTimelineEntry.year);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newTimelineEntry.title_ar);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newTimelineEntry.title_en);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newTimelineEntry.desc_ar);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newTimelineEntry.desc_en);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.newTimelineEntry.year || !ctx_r0.newTimelineEntry.title_ar || !ctx_r0.newTimelineEntry.desc_ar);
  }
}
var PortfolioAboutComponent = class _PortfolioAboutComponent {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);
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
  newTimelineEntry = { year: "", title_ar: "", title_en: "", desc_ar: "", desc_en: "" };
  isLoading = false;
  isSaving = false;
  saveMessage = "";
  expandedSection = "hero";
  sections = [
    { id: "hero", title: "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 (Hero)" },
    { id: "story", title: "\u0642\u0635\u062A\u0646\u0627 (Our Story)" },
    { id: "vision", title: "\u0631\u0624\u064A\u062A\u0646\u0627 (Our Vision)" },
    { id: "mission", title: "\u0645\u0647\u0645\u062A\u0646\u0627 (Our Mission)" },
    { id: "values", title: "\u0642\u064A\u0645\u0646\u0627 (Our Values)" },
    { id: "team_text", title: "\u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644 (Team Text)" }
  ];
  ngOnInit() {
    this.loadAbout();
  }
  loadAbout() {
    this.isLoading = true;
    this.apiService.getAbout().subscribe({
      next: (res) => {
        if (res?.data) {
          const d = res.data;
          this.aboutData.content = d.content || this.aboutData.content;
          this.aboutData.timeline = d.timeline || [];
          ["hero", "story", "vision", "mission", "values", "team_text"].forEach((k) => {
            if (!this.aboutData.content[k])
              this.aboutData.content[k] = { en: {}, ar: {} };
            if (!this.aboutData.content[k].en)
              this.aboutData.content[k].en = {};
            if (!this.aboutData.content[k].ar)
              this.aboutData.content[k].ar = {};
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  toggleSection(sectionId) {
    if (this.expandedSection === sectionId) {
      this.expandedSection = null;
    } else {
      this.expandedSection = sectionId;
    }
  }
  addTimelineEntry() {
    if (!this.newTimelineEntry.year || !this.newTimelineEntry.title_ar || !this.newTimelineEntry.desc_ar)
      return;
    this.aboutData.timeline.push(__spreadProps(__spreadValues({}, this.newTimelineEntry), {
      title: { ar: this.newTimelineEntry.title_ar, en: this.newTimelineEntry.title_en },
      description: { ar: this.newTimelineEntry.desc_ar, en: this.newTimelineEntry.desc_en },
      order_index: this.aboutData.timeline.length
    }));
    this.newTimelineEntry = { year: "", title_ar: "", title_en: "", desc_ar: "", desc_en: "" };
  }
  deleteTimelineEntry(index) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u0645\u062D\u0637\u0629",
      message: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0647\u0630\u0647 \u0627\u0644\u0645\u062D\u0637\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629\u061F",
      confirmText: "\u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.aboutData.timeline.splice(index, 1);
      }
    });
  }
  saveAbout() {
    this.isSaving = true;
    this.apiService.updateAbout(this.aboutData).subscribe({
      next: () => {
        this.isSaving = false;
        this.saveMessage = "\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0628\u0646\u062C\u0627\u062D!";
        setTimeout(() => this.saveMessage = "", 3e3);
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
  static \u0275fac = function PortfolioAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioAboutComponent, selectors: [["app-portfolio-about"]], decls: 13, vars: 11, consts: [[1, "page-container"], [1, "page-header"], [1, "header-title"], [1, "fa-solid", "fa-building-user"], [1, "header-actions"], ["class", "success-msg", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fa-solid"], ["class", "loading-state", 4, "ngIf"], ["class", "editor-content", 4, "ngIf"], [1, "success-msg"], [1, "loading-state"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "editor-content"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "timeline-section"], [1, "timeline-header"], [1, "timeline-list"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-form"], [1, "form-row"], [1, "form-group", 2, "flex", "0 0 100px"], ["type", "text", "dir", "ltr", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["type", "text", 3, "ngModelChange", "ngModel"], ["rows", "2", 3, "ngModelChange", "ngModel"], ["rows", "2", "dir", "ltr", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "fa-solid", "fa-plus"], [1, "accordion-item"], [1, "accordion-header", 3, "click"], ["class", "accordion-body", 4, "ngIf"], [1, "accordion-body"], [1, "form-grid"], [1, "form-col"], [1, "col-title"], [4, "ngIf"], ["rows", "4", 3, "ngModelChange", "ngModel"], [1, "form-col", "ltr-col"], ["rows", "4", "dir", "ltr", 3, "ngModelChange", "ngModel"], [1, "timeline-item"], [1, "timeline-icon"], [1, "fa-solid", "fa-circle-dot"], [1, "timeline-content"], [1, "tl-year"], [1, "tl-details"], [1, "text-muted"], ["dir", "ltr"], [1, "btn-action", "delete", 3, "click"], [1, "fa-solid", "fa-trash-can"]], template: function PortfolioAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5, "\u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 | About Page Editor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275template(7, PortfolioAboutComponent_span_7_Template, 2, 1, "span", 5);
      \u0275\u0275elementStart(8, "button", 6);
      \u0275\u0275listener("click", function PortfolioAboutComponent_Template_button_click_8_listener() {
        return ctx.saveAbout();
      });
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, PortfolioAboutComponent_div_11_Template, 4, 0, "div", 8)(12, PortfolioAboutComponent_div_12_Template, 36, 8, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.saveMessage);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSaving || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-spinner", ctx.isSaving)("fa-spin", ctx.isSaving)("fa-check", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSaving ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A | Save All Changes", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  direction: rtl;\n}\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--violet, #6366f1);\n}\n.header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text, #1f2937);\n  font-weight: 700;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.success-msg[_ngcontent-%COMP%] {\n  color: var(--green, #10b981);\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--violet, #6366f1);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-sidebar, #f3f4f6);\n  color: var(--text, #1f2937);\n  border: 1px solid var(--border, #e5e7eb);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-2, #6b7280);\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.accordion-item[_ngcontent-%COMP%] {\n  background: var(--bg-card, #ffffff);\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 12px;\n  margin-bottom: 16px;\n  overflow: hidden;\n}\n.accordion-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  cursor: pointer;\n  background: var(--bg-sidebar, #f3f4f6);\n  border-right: 4px solid var(--violet, #6366f1);\n  transition: background 0.2s;\n}\n.accordion-header[_ngcontent-%COMP%]:hover {\n  background: var(--border, #e5e7eb);\n}\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text, #1f2937);\n}\n.accordion-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-2, #6b7280);\n}\n.accordion-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-top: 1px solid var(--border, #e5e7eb);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.col-title[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 1.1rem;\n  color: var(--violet, #6366f1);\n  border-bottom: 1px solid var(--border, #e5e7eb);\n  padding-bottom: 8px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 6px;\n  color: var(--text, #1f2937);\n  font-size: 0.85rem;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  background: var(--bg, #f9fafb);\n  border: 1px solid var(--border, #e5e7eb);\n  color: var(--text, #1f2937);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--violet, #6366f1);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\ninput[dir=ltr][_ngcontent-%COMP%], \ntextarea[dir=ltr][_ngcontent-%COMP%], \n.ltr-col[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n.ltr-col[_ngcontent-%COMP%] {\n  direction: ltr;\n  text-align: left;\n}\n.timeline-section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  background: var(--bg-card, #ffffff);\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 12px;\n  padding: 24px;\n}\n.timeline-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  font-size: 1.25rem;\n  color: var(--text, #1f2937);\n  border-bottom: 1px solid var(--border, #e5e7eb);\n  padding-bottom: 12px;\n}\n.timeline-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  padding: 16px;\n  background: var(--bg-sidebar, #f3f4f6);\n  border-radius: 8px;\n  position: relative;\n}\n.timeline-icon[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--violet, #6366f1);\n  font-size: 1.2rem;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tl-year[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  color: var(--violet, #6366f1);\n  font-family: "Inter", sans-serif;\n}\n.tl-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .tl-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-2, #6b7280);\n}\n.btn-action.delete[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-2, #6b7280);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.2s;\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: var(--red, #ef4444);\n}\n.timeline-form[_ngcontent-%COMP%] {\n  background: var(--bg, #f9fafb);\n  border: 1px dashed var(--border, #e5e7eb);\n  padding: 20px;\n  border-radius: 8px;\n}\n.timeline-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: var(--text, #1f2937);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=portfolio-about.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioAboutComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio-about", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-title">
      <i class="fa-solid fa-building-user"></i>
      <h2>\u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 | About Page Editor</h2>
    </div>
    
    <div class="header-actions">
      <span class="success-msg" *ngIf="saveMessage">{{ saveMessage }}</span>
      <button class="btn btn-primary" (click)="saveAbout()" [disabled]="isSaving || isLoading">
        <i class="fa-solid" [class.fa-spinner]="isSaving" [class.fa-spin]="isSaving" [class.fa-check]="!isSaving"></i>
        {{ isSaving ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A | Save All Changes' }}
      </button>
    </div>
  </div>

  <div class="loading-state" *ngIf="isLoading">
    <i class="fa-solid fa-spinner fa-spin"></i>
    <p>\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
  </div>

  <div class="editor-content" *ngIf="!isLoading">
    <!-- Accordions -->
    <div class="accordion-item" *ngFor="let section of sections">
      <div class="accordion-header" (click)="toggleSection(section.id)">
        <h3>{{ section.title }}</h3>
        <i class="fa-solid" [class.fa-chevron-down]="expandedSection !== section.id" [class.fa-chevron-up]="expandedSection === section.id"></i>
      </div>
      
      <div class="accordion-body" *ngIf="expandedSection === section.id">
        <div class="form-grid">
          <!-- Arabic Side -->
          <div class="form-col">
            <h4 class="col-title">\u0639\u0631\u0628\u064A (AR)</h4>
            
            <ng-container *ngIf="section.id === 'hero'">
              <div class="form-group">
                <label>Label</label>
                <input type="text" [(ngModel)]="aboutData.content[section.id].ar.label">
              </div>
              <div class="form-group">
                <label>Title</label>
                <input type="text" [(ngModel)]="aboutData.content[section.id].ar.title1">
              </div>
            </ng-container>
            
            <ng-container *ngIf="section.id !== 'hero'">
              <div class="form-group">
                <label>Title</label>
                <input type="text" [(ngModel)]="aboutData.content[section.id].ar.title">
              </div>
            </ng-container>
            
            <div class="form-group">
              <label>Description</label>
              <textarea [(ngModel)]="aboutData.content[section.id].ar.desc" rows="4"></textarea>
            </div>
          </div>
          
          <!-- English Side -->
          <div class="form-col ltr-col">
            <h4 class="col-title">English (EN)</h4>
            
            <ng-container *ngIf="section.id === 'hero'">
              <div class="form-group">
                <label>Label</label>
                <input type="text" [(ngModel)]="aboutData.content[section.id].en.label" dir="ltr">
              </div>
              <div class="form-group">
                <label>Title</label>
                <input type="text" [(ngModel)]="aboutData.content[section.id].en.title1" dir="ltr">
              </div>
            </ng-container>
            
            <ng-container *ngIf="section.id !== 'hero'">
              <div class="form-group">
                <label>Title</label>
                <input type="text" [(ngModel)]="aboutData.content[section.id].en.title" dir="ltr">
              </div>
            </ng-container>
            
            <div class="form-group">
              <label>Description</label>
              <textarea [(ngModel)]="aboutData.content[section.id].en.desc" rows="4" dir="ltr"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline -->
    <div class="timeline-section">
      <div class="timeline-header">
        <h3>\u0645\u062D\u0637\u0627\u062A \u0627\u0644\u0648\u0643\u0627\u0644\u0629 | Agency Timeline</h3>
      </div>
      
      <div class="timeline-list">
        <div class="timeline-item" *ngFor="let item of aboutData.timeline; let i = index">
          <div class="timeline-icon">
            <i class="fa-solid fa-circle-dot"></i>
          </div>
          <div class="timeline-content">
            <div class="tl-year">{{ item.year }}</div>
            <div class="tl-details">
              <div>
                <strong>AR:</strong> {{ item.title?.ar || item.title_ar }} <br>
                <span class="text-muted">{{ item.description?.ar || item.desc_ar }}</span>
              </div>
              <div dir="ltr">
                <strong>EN:</strong> {{ item.title?.en || item.title_en }} <br>
                <span class="text-muted">{{ item.description?.en || item.desc_en }}</span>
              </div>
            </div>
          </div>
          <button class="btn-action delete" (click)="deleteTimelineEntry(i)">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      
      <!-- Add New Timeline Entry -->
      <div class="timeline-form">
        <h4>\u0625\u0636\u0627\u0641\u0629 \u0645\u062D\u0637\u0629 \u062C\u062F\u064A\u062F\u0629</h4>
        <div class="form-row">
          <div class="form-group" style="flex: 0 0 100px;">
            <label>Year *</label>
            <input type="text" [(ngModel)]="newTimelineEntry.year" dir="ltr">
          </div>
          <div class="form-group">
            <label>Title AR *</label>
            <input type="text" [(ngModel)]="newTimelineEntry.title_ar">
          </div>
          <div class="form-group">
            <label>Title EN</label>
            <input type="text" [(ngModel)]="newTimelineEntry.title_en" dir="ltr">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Desc AR *</label>
            <textarea [(ngModel)]="newTimelineEntry.desc_ar" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label>Desc EN</label>
            <textarea [(ngModel)]="newTimelineEntry.desc_en" rows="2" dir="ltr"></textarea>
          </div>
        </div>
        <button class="btn btn-secondary" (click)="addTimelineEntry()" [disabled]="!newTimelineEntry.year || !newTimelineEntry.title_ar || !newTimelineEntry.desc_ar">
          <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0645\u062D\u0637\u0627\u062A
        </button>
      </div>
      
    </div>
  </div>
</div>
`, styles: ['/* src/app/components/portfolio/about/portfolio-about.component.css */\n:host {\n  display: block;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  direction: rtl;\n}\n.page-container {\n  padding: 24px;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title i {\n  font-size: 2rem;\n  color: var(--violet, #6366f1);\n}\n.header-title h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text, #1f2937);\n  font-weight: 700;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.success-msg {\n  color: var(--green, #10b981);\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.btn-primary {\n  background: var(--violet, #6366f1);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.btn-secondary {\n  background: var(--bg-sidebar, #f3f4f6);\n  color: var(--text, #1f2937);\n  border: 1px solid var(--border, #e5e7eb);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-2, #6b7280);\n}\n.loading-state i {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.accordion-item {\n  background: var(--bg-card, #ffffff);\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 12px;\n  margin-bottom: 16px;\n  overflow: hidden;\n}\n.accordion-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  cursor: pointer;\n  background: var(--bg-sidebar, #f3f4f6);\n  border-right: 4px solid var(--violet, #6366f1);\n  transition: background 0.2s;\n}\n.accordion-header:hover {\n  background: var(--border, #e5e7eb);\n}\n.accordion-header h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text, #1f2937);\n}\n.accordion-header i {\n  color: var(--text-2, #6b7280);\n}\n.accordion-body {\n  padding: 24px;\n  border-top: 1px solid var(--border, #e5e7eb);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.col-title {\n  margin: 0 0 16px 0;\n  font-size: 1.1rem;\n  color: var(--violet, #6366f1);\n  border-bottom: 1px solid var(--border, #e5e7eb);\n  padding-bottom: 8px;\n}\n.form-group {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  font-weight: 600;\n  margin-bottom: 6px;\n  color: var(--text, #1f2937);\n  font-size: 0.85rem;\n}\ninput,\ntextarea {\n  background: var(--bg, #f9fafb);\n  border: 1px solid var(--border, #e5e7eb);\n  color: var(--text, #1f2937);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border-color: var(--violet, #6366f1);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\ninput[dir=ltr],\ntextarea[dir=ltr],\n.ltr-col label {\n  font-family: "Inter", sans-serif;\n}\n.ltr-col {\n  direction: ltr;\n  text-align: left;\n}\n.timeline-section {\n  margin-top: 32px;\n  background: var(--bg-card, #ffffff);\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 12px;\n  padding: 24px;\n}\n.timeline-header h3 {\n  margin: 0 0 24px 0;\n  font-size: 1.25rem;\n  color: var(--text, #1f2937);\n  border-bottom: 1px solid var(--border, #e5e7eb);\n  padding-bottom: 12px;\n}\n.timeline-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.timeline-item {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  padding: 16px;\n  background: var(--bg-sidebar, #f3f4f6);\n  border-radius: 8px;\n  position: relative;\n}\n.timeline-icon {\n  margin-top: 4px;\n  color: var(--violet, #6366f1);\n  font-size: 1.2rem;\n}\n.timeline-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tl-year {\n  font-weight: 800;\n  font-size: 1.1rem;\n  color: var(--violet, #6366f1);\n  font-family: "Inter", sans-serif;\n}\n.tl-details {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .tl-details {\n    grid-template-columns: 1fr;\n  }\n}\n.text-muted {\n  color: var(--text-2, #6b7280);\n}\n.btn-action.delete {\n  background: none;\n  border: none;\n  color: var(--text-2, #6b7280);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.2s;\n}\n.btn-action.delete:hover {\n  background: #fee2e2;\n  color: var(--red, #ef4444);\n}\n.timeline-form {\n  background: var(--bg, #f9fafb);\n  border: 1px dashed var(--border, #e5e7eb);\n  padding: 20px;\n  border-radius: 8px;\n}\n.timeline-form h4 {\n  margin: 0 0 16px 0;\n  color: var(--text, #1f2937);\n}\n.form-row {\n  display: flex;\n  gap: 16px;\n}\n.form-row .form-group {\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .form-row {\n    flex-direction: column;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=portfolio-about.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioAboutComponent, { className: "PortfolioAboutComponent", filePath: "src/app/components/portfolio/about/portfolio-about.component.ts", lineNumber: 14 });
})();
export {
  PortfolioAboutComponent
};
//# sourceMappingURL=chunk-QDKWCRD3.js.map
