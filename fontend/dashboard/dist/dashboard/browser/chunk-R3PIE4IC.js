import {
  ConfirmService
} from "./chunk-YURY4BWO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-KWEQLBRN.js";
import {
  ApiService
} from "./chunk-HE5SAGTC.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
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
  ɵɵproperty,
  ɵɵreference,
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

// src/app/components/portfolio/services/portfolio-services.component.ts
function PortfolioServicesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioServicesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u062F\u0645\u0627\u062A \u0628\u0639\u062F");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioServicesComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 50)(12, "button", 51);
    \u0275\u0275listener("click", function PortfolioServicesComponent_div_11_div_1_Template_button_click_12_listener() {
      const service_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openDrawer(service_r3));
    });
    \u0275\u0275element(13, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 53);
    \u0275\u0275listener("click", function PortfolioServicesComponent_div_11_div_1_Template_button_click_14_listener() {
      const service_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteService(service_r3));
    });
    \u0275\u0275element(15, "i", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", service_r3.order, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(service_r3.icon || "fa-solid fa-star");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getServiceTitle(service_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getServiceTitleEn(service_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getServiceDesc(service_r3));
  }
}
function PortfolioServicesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, PortfolioServicesComponent_div_11_div_1_Template, 16, 6, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.services);
  }
}
function PortfolioServicesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function PortfolioServicesComponent_div_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDrawer());
    });
    \u0275\u0275elementEnd();
  }
}
function PortfolioServicesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function PortfolioServicesComponent_div_26_Template_div_click_0_listener() {
      const opt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectIcon(opt_r7.icon));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r3.formData.icon === opt_r7.icon);
    \u0275\u0275advance();
    \u0275\u0275classMap(opt_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r7.label);
  }
}
var ICON_OPTIONS = [
  { icon: "fa-solid fa-palette", label: "Design / Branding" },
  { icon: "fa-solid fa-code", label: "Development" },
  { icon: "fa-solid fa-bullhorn", label: "Marketing" },
  { icon: "fa-solid fa-camera", label: "Photography" },
  { icon: "fa-solid fa-video", label: "Video Production" },
  { icon: "fa-solid fa-wand-magic-sparkles", label: "Creative" },
  { icon: "fa-solid fa-chart-line", label: "Analytics" },
  { icon: "fa-solid fa-mobile-screen", label: "Mobile App" },
  { icon: "fa-solid fa-globe", label: "Web" },
  { icon: "fa-solid fa-megaphone", label: "Advertising" },
  { icon: "fa-solid fa-pen-nib", label: "Copywriting" },
  { icon: "fa-solid fa-photo-film", label: "Media" },
  { icon: "fa-solid fa-share-nodes", label: "Social Media" },
  { icon: "fa-solid fa-envelope", label: "Email Marketing" },
  { icon: "fa-solid fa-magnifying-glass", label: "SEO" },
  { icon: "fa-solid fa-robot", label: "Automation" },
  { icon: "fa-solid fa-print", label: "Printing" },
  { icon: "fa-solid fa-star", label: "Premium" },
  { icon: "fa-solid fa-handshake", label: "Consulting" },
  { icon: "fa-solid fa-gears", label: "Technical" }
];
var PortfolioServicesComponent = class _PortfolioServicesComponent {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);
  services = [];
  isLoading = false;
  isDrawerOpen = false;
  isEditMode = false;
  editingId = null;
  icons = ICON_OPTIONS;
  formData = {
    icon: "",
    title_ar: "",
    title_en: "",
    subtitle_ar: "",
    subtitle_en: "",
    description_ar: "",
    description_en: "",
    features_ar: "",
    features_en: "",
    cta_text_ar: "",
    cta_text_en: "",
    cta_url: "",
    order: 0
  };
  ngOnInit() {
    this.loadServices();
  }
  loadServices() {
    this.isLoading = true;
    this.apiService.getServices().subscribe({
      next: (res) => {
        this.services = res.data || res || [];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  openDrawer(service) {
    if (service) {
      this.isEditMode = true;
      this.editingId = service.id;
      this.formData = {
        icon: service.icon || "",
        title_ar: service.title?.ar || service.title_ar || "",
        title_en: service.title?.en || service.title_en || "",
        subtitle_ar: service.subtitle?.ar || service.subtitle_ar || "",
        subtitle_en: service.subtitle?.en || service.subtitle_en || "",
        description_ar: service.description?.ar || service.description_ar || "",
        description_en: service.description?.en || service.description_en || "",
        features_ar: Array.isArray(service.features?.ar || service.features_ar) ? (service.features?.ar || service.features_ar).join("\n") : "",
        features_en: Array.isArray(service.features?.en || service.features_en) ? (service.features?.en || service.features_en).join("\n") : "",
        cta_text_ar: service.cta_text_ar || "",
        cta_text_en: service.cta_text_en || "",
        cta_url: service.cta_url || "",
        order: service.order || 0
      };
    } else {
      this.isEditMode = false;
      this.editingId = null;
      this.formData = {
        icon: "fa-solid fa-star",
        title_ar: "",
        title_en: "",
        subtitle_ar: "",
        subtitle_en: "",
        description_ar: "",
        description_en: "",
        features_ar: "",
        features_en: "",
        cta_text_ar: "",
        cta_text_en: "",
        cta_url: "",
        order: this.services.length + 1
      };
    }
    this.isDrawerOpen = true;
  }
  closeDrawer() {
    this.isDrawerOpen = false;
  }
  selectIcon(iconStr) {
    this.formData.icon = iconStr;
  }
  saveService() {
    const fd = new FormData();
    fd.append("icon", this.formData.icon);
    fd.append("title_ar", this.formData.title_ar);
    fd.append("title_en", this.formData.title_en);
    fd.append("subtitle_ar", this.formData.subtitle_ar);
    fd.append("subtitle_en", this.formData.subtitle_en);
    fd.append("description_ar", this.formData.description_ar);
    fd.append("description_en", this.formData.description_en);
    fd.append("cta_text_ar", this.formData.cta_text_ar);
    fd.append("cta_text_en", this.formData.cta_text_en);
    fd.append("cta_url", this.formData.cta_url);
    fd.append("order", this.formData.order.toString());
    const featAr = this.formData.features_ar ? this.formData.features_ar.split("\n").map((f) => f.trim()).filter((f) => f) : [];
    const featEn = this.formData.features_en ? this.formData.features_en.split("\n").map((f) => f.trim()).filter((f) => f) : [];
    fd.append("features_ar", JSON.stringify(featAr));
    fd.append("features_en", JSON.stringify(featEn));
    if (this.isEditMode && this.editingId) {
      this.apiService.updateService(String(this.editingId), fd).subscribe({
        next: () => {
          this.closeDrawer();
          this.loadServices();
        }
      });
    } else {
      this.apiService.addService(fd).subscribe({
        next: () => {
          this.closeDrawer();
          this.loadServices();
        }
      });
    }
  }
  deleteService(service) {
    this.confirmService.confirm({
      title: "\u062D\u0630\u0641 \u0627\u0644\u062E\u062F\u0645\u0629",
      message: `\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u062E\u062F\u0645\u0629 "${this.getServiceTitle(service)}"\u061F`,
      confirmText: "\u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteService(String(service.id)).subscribe(() => this.loadServices());
      }
    });
  }
  getServiceTitle(s) {
    return s.title?.ar || s.title_ar || "";
  }
  getServiceTitleEn(s) {
    return s.title?.en || s.title_en || "";
  }
  getServiceDesc(s) {
    return s.description?.ar || s.description_ar || "";
  }
  static \u0275fac = function PortfolioServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioServicesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioServicesComponent, selectors: [["app-portfolio-services"]], decls: 85, vars: 21, consts: [["serviceForm", "ngForm"], [1, "page-container"], [1, "page-header"], [1, "header-title"], [1, "fa-solid", "fa-toolbox"], [1, "btn", "btn-primary", "add-btn", 3, "click"], [1, "fa-solid", "fa-plus"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "services-grid", 4, "ngIf"], ["class", "drawer-overlay", 3, "click", 4, "ngIf"], [1, "drawer"], [1, "drawer-header"], [1, "close-btn", 3, "click"], [1, "fa-solid", "fa-times"], [1, "drawer-body"], [3, "ngSubmit"], [1, "form-group"], [1, "icon-picker"], ["class", "icon-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "number", "name", "order", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "text", "name", "title_ar", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "title_en", "required", "", "dir", "ltr", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "subtitle_ar", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "subtitle_en", "dir", "ltr", 3, "ngModelChange", "ngModel"], ["name", "description_ar", "rows", "3", "required", "", 3, "ngModelChange", "ngModel"], ["name", "description_en", "rows", "3", "required", "", "dir", "ltr", 3, "ngModelChange", "ngModel"], ["name", "features_ar", "rows", "4", 3, "ngModelChange", "ngModel"], ["name", "features_en", "rows", "4", "dir", "ltr", 3, "ngModelChange", "ngModel"], [1, "form-row", "three-cols"], ["type", "text", "name", "cta_text_ar", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "cta_text_en", "dir", "ltr", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "cta_url", "dir", "ltr", 3, "ngModelChange", "ngModel"], [1, "drawer-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fa-solid", "fa-check"], [1, "loading-state"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "empty-state"], [1, "fa-regular", "fa-folder-open"], [1, "services-grid"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "service-card"], [1, "card-order-badge"], [1, "card-icon"], [1, "card-title-ar"], [1, "card-title-en"], [1, "card-desc"], [1, "card-actions"], [1, "btn-action", "edit", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], [1, "btn-action", "delete", 3, "click"], [1, "fa-solid", "fa-trash-can"], [1, "drawer-overlay", 3, "click"], [1, "icon-option", 3, "click"]], template: function PortfolioServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275element(3, "i", 4);
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5, "\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0648\u0643\u0627\u0644\u0629 | Agency Services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function PortfolioServicesComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openDrawer());
      });
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275text(8, " \u0625\u0636\u0627\u0641\u0629 \u062E\u062F\u0645\u0629 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, PortfolioServicesComponent_div_9_Template, 4, 0, "div", 7)(10, PortfolioServicesComponent_div_10_Template, 4, 0, "div", 8)(11, PortfolioServicesComponent_div_11_Template, 2, 1, "div", 9)(12, PortfolioServicesComponent_div_12_Template, 1, 0, "div", 10);
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "h3");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 13);
      \u0275\u0275listener("click", function PortfolioServicesComponent_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDrawer());
      });
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 15)(20, "form", 16, 0);
      \u0275\u0275listener("ngSubmit", function PortfolioServicesComponent_Template_form_ngSubmit_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveService());
      });
      \u0275\u0275elementStart(22, "div", 17)(23, "label");
      \u0275\u0275text(24, "\u0627\u062E\u062A\u0631 \u0623\u064A\u0642\u0648\u0646\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 18);
      \u0275\u0275template(26, PortfolioServicesComponent_div_26_Template, 4, 5, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 17)(28, "label");
      \u0275\u0275text(29, "\u0627\u0644\u062A\u0631\u062A\u064A\u0628 (Order)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.order, $event) || (ctx.formData.order = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 21)(32, "div", 17)(33, "label");
      \u0275\u0275text(34, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.title_ar, $event) || (ctx.formData.title_ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 17)(37, "label");
      \u0275\u0275text(38, "Title in English *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.title_en, $event) || (ctx.formData.title_en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 21)(41, "div", 17)(42, "label");
      \u0275\u0275text(43, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0631\u0639\u064A \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.subtitle_ar, $event) || (ctx.formData.subtitle_ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 17)(46, "label");
      \u0275\u0275text(47, "Subtitle in English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.subtitle_en, $event) || (ctx.formData.subtitle_en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 17)(50, "label");
      \u0275\u0275text(51, "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "textarea", 26);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_textarea_ngModelChange_52_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.description_ar, $event) || (ctx.formData.description_ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 17)(54, "label");
      \u0275\u0275text(55, "Description in English *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "textarea", 27);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_textarea_ngModelChange_56_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.description_en, $event) || (ctx.formData.description_en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 21)(58, "div", 17)(59, "label");
      \u0275\u0275text(60, "\u0645\u0632\u0627\u064A\u0627 \u0627\u0644\u062E\u062F\u0645\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0643\u0644 \u0645\u064A\u0632\u0629 \u0641\u064A \u0633\u0637\u0631)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "textarea", 28);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_textarea_ngModelChange_61_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.features_ar, $event) || (ctx.formData.features_ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 17)(63, "label");
      \u0275\u0275text(64, "Service Features in English (one per line)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "textarea", 29);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_textarea_ngModelChange_65_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.features_en, $event) || (ctx.formData.features_en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 30)(67, "div", 17)(68, "label");
      \u0275\u0275text(69, "CTA Text AR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.cta_text_ar, $event) || (ctx.formData.cta_text_ar = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 17)(72, "label");
      \u0275\u0275text(73, "CTA Text EN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_input_ngModelChange_74_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.cta_text_en, $event) || (ctx.formData.cta_text_en = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 17)(76, "label");
      \u0275\u0275text(77, "CTA URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function PortfolioServicesComponent_Template_input_ngModelChange_78_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.cta_url, $event) || (ctx.formData.cta_url = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(79, "div", 34)(80, "button", 35);
      \u0275\u0275listener("click", function PortfolioServicesComponent_Template_button_click_80_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDrawer());
      });
      \u0275\u0275text(81, "\u0625\u0644\u063A\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "button", 36);
      \u0275\u0275listener("click", function PortfolioServicesComponent_Template_button_click_82_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveService());
      });
      \u0275\u0275element(83, "i", 37);
      \u0275\u0275text(84, " \u062D\u0641\u0638 ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const serviceForm_r8 = \u0275\u0275reference(21);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.services.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.services.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isDrawerOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isDrawerOpen);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629" : "\u0625\u0636\u0627\u0641\u0629 \u062E\u062F\u0645\u0629 \u062C\u062F\u064A\u062F\u0629");
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.icons);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.order);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.title_ar);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.title_en);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.subtitle_ar);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.subtitle_en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.description_ar);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.description_en);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.features_ar);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.features_en);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.cta_text_ar);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.cta_text_en);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.cta_url);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !serviceForm_r8.valid);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  direction: rtl;\n}\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--violet, #6366f1);\n}\n.header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text, #1f2937);\n  font-weight: 700;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--violet, #6366f1);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-sidebar, #f3f4f6);\n  color: var(--text, #1f2937);\n  border: 1px solid var(--border, #e5e7eb);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--border, #e5e7eb);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-2, #6b7280);\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n@media (max-width: 992px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 576px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.service-card[_ngcontent-%COMP%] {\n  background: var(--bg-card, #ffffff);\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 16px;\n  padding: 24px;\n  text-align: center;\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n.card-order-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: var(--violet-light, #e0e7ff);\n  color: var(--violet, #6366f1);\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.card-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--violet, #6366f1);\n}\n.card-title-ar[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text, #1f2937);\n  margin-bottom: 4px;\n}\n.card-title-en[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-2, #6b7280);\n  margin-bottom: 12px;\n  font-family: "Inter", sans-serif;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-2, #6b7280);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: var(--bg-sidebar, #f3f4f6);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-2, #6b7280);\n  transition: all 0.2s;\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: var(--violet-light, #e0e7ff);\n  color: var(--violet, #6366f1);\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: var(--red, #ef4444);\n}\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: -540px;\n  width: 540px;\n  max-width: 100%;\n  background: var(--bg-card, #ffffff);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  transition: right 0.3s ease;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n}\n.drawer.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border, #e5e7eb);\n}\n.drawer-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: var(--text-2, #6b7280);\n  cursor: pointer;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-top: 1px solid var(--border, #e5e7eb);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.three-cols[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: var(--text, #1f2937);\n  font-size: 0.9rem;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  background: var(--bg, #f9fafb);\n  border: 1px solid var(--border, #e5e7eb);\n  color: var(--text, #1f2937);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--violet, #6366f1);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\ninput[dir=ltr][_ngcontent-%COMP%], \ntextarea[dir=ltr][_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n.icon-picker[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 4px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n}\n.icon-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition: all 0.2s;\n  text-align: center;\n}\n.icon-option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--text-2, #6b7280);\n}\n.icon-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-2, #6b7280);\n}\n.icon-option[_ngcontent-%COMP%]:hover {\n  background: var(--bg-sidebar, #f3f4f6);\n}\n.icon-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--violet, #6366f1);\n  background: var(--violet-light, #e0e7ff);\n}\n.icon-option.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.icon-option.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--violet, #6366f1);\n}\n/*# sourceMappingURL=portfolio-services.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioServicesComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio-services", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-title">
      <i class="fa-solid fa-toolbox"></i>
      <h2>\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0648\u0643\u0627\u0644\u0629 | Agency Services</h2>
    </div>
    <button class="btn btn-primary add-btn" (click)="openDrawer()">
      <i class="fa-solid fa-plus"></i>
      \u0625\u0636\u0627\u0641\u0629 \u062E\u062F\u0645\u0629
    </button>
  </div>

  <div class="loading-state" *ngIf="isLoading">
    <i class="fa-solid fa-spinner fa-spin"></i>
    <p>\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
  </div>

  <div class="empty-state" *ngIf="!isLoading && services.length === 0">
    <i class="fa-regular fa-folder-open"></i>
    <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u062F\u0645\u0627\u062A \u0628\u0639\u062F</p>
  </div>

  <div class="services-grid" *ngIf="!isLoading && services.length > 0">
    <div class="service-card" *ngFor="let service of services">
      <div class="card-order-badge">#{{ service.order }}</div>
      <div class="card-icon">
        <i [class]="service.icon || 'fa-solid fa-star'"></i>
      </div>
      <h3 class="card-title-ar">{{ getServiceTitle(service) }}</h3>
      <h4 class="card-title-en">{{ getServiceTitleEn(service) }}</h4>
      <p class="card-desc">{{ getServiceDesc(service) }}</p>
      
      <div class="card-actions">
        <button class="btn-action edit" (click)="openDrawer(service)">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn-action delete" (click)="deleteService(service)">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Drawer -->
  <div class="drawer-overlay" *ngIf="isDrawerOpen" (click)="closeDrawer()"></div>
  <div class="drawer" [class.open]="isDrawerOpen">
    <div class="drawer-header">
      <h3>{{ isEditMode ? '\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629' : '\u0625\u0636\u0627\u0641\u0629 \u062E\u062F\u0645\u0629 \u062C\u062F\u064A\u062F\u0629' }}</h3>
      <button class="close-btn" (click)="closeDrawer()">
        <i class="fa-solid fa-times"></i>
      </button>
    </div>
    
    <div class="drawer-body">
      <form (ngSubmit)="saveService()" #serviceForm="ngForm">
        
        <div class="form-group">
          <label>\u0627\u062E\u062A\u0631 \u0623\u064A\u0642\u0648\u0646\u0629</label>
          <div class="icon-picker">
            <div class="icon-option" 
                 *ngFor="let opt of icons"
                 [class.selected]="formData.icon === opt.icon"
                 (click)="selectIcon(opt.icon)">
              <i [class]="opt.icon"></i>
              <span>{{ opt.label }}</span>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>\u0627\u0644\u062A\u0631\u062A\u064A\u0628 (Order)</label>
          <input type="number" name="order" [(ngModel)]="formData.order" required>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *</label>
            <input type="text" name="title_ar" [(ngModel)]="formData.title_ar" required>
          </div>
          <div class="form-group">
            <label>Title in English *</label>
            <input type="text" name="title_en" [(ngModel)]="formData.title_en" required dir="ltr">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0631\u0639\u064A \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629</label>
            <input type="text" name="subtitle_ar" [(ngModel)]="formData.subtitle_ar">
          </div>
          <div class="form-group">
            <label>Subtitle in English</label>
            <input type="text" name="subtitle_en" [(ngModel)]="formData.subtitle_en" dir="ltr">
          </div>
        </div>

        <div class="form-group">
          <label>\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *</label>
          <textarea name="description_ar" [(ngModel)]="formData.description_ar" rows="3" required></textarea>
        </div>

        <div class="form-group">
          <label>Description in English *</label>
          <textarea name="description_en" [(ngModel)]="formData.description_en" rows="3" required dir="ltr"></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>\u0645\u0632\u0627\u064A\u0627 \u0627\u0644\u062E\u062F\u0645\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0643\u0644 \u0645\u064A\u0632\u0629 \u0641\u064A \u0633\u0637\u0631)</label>
            <textarea name="features_ar" [(ngModel)]="formData.features_ar" rows="4"></textarea>
          </div>
          <div class="form-group">
            <label>Service Features in English (one per line)</label>
            <textarea name="features_en" [(ngModel)]="formData.features_en" rows="4" dir="ltr"></textarea>
          </div>
        </div>

        <div class="form-row three-cols">
          <div class="form-group">
            <label>CTA Text AR</label>
            <input type="text" name="cta_text_ar" [(ngModel)]="formData.cta_text_ar">
          </div>
          <div class="form-group">
            <label>CTA Text EN</label>
            <input type="text" name="cta_text_en" [(ngModel)]="formData.cta_text_en" dir="ltr">
          </div>
          <div class="form-group">
            <label>CTA URL</label>
            <input type="text" name="cta_url" [(ngModel)]="formData.cta_url" dir="ltr">
          </div>
        </div>

      </form>
    </div>

    <div class="drawer-footer">
      <button class="btn btn-secondary" (click)="closeDrawer()">\u0625\u0644\u063A\u0627\u0621</button>
      <button class="btn btn-primary" (click)="saveService()" [disabled]="!serviceForm.valid">
        <i class="fa-solid fa-check"></i> \u062D\u0641\u0638
      </button>
    </div>
  </div>
</div>
`, styles: ['/* src/app/components/portfolio/services/portfolio-services.component.css */\n:host {\n  display: block;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  direction: rtl;\n}\n.page-container {\n  padding: 24px;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title i {\n  font-size: 2rem;\n  color: var(--violet, #6366f1);\n}\n.header-title h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text, #1f2937);\n  font-weight: 700;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.btn-primary {\n  background: var(--violet, #6366f1);\n  color: white;\n}\n.btn-primary:hover {\n  opacity: 0.9;\n}\n.btn-secondary {\n  background: var(--bg-sidebar, #f3f4f6);\n  color: var(--text, #1f2937);\n  border: 1px solid var(--border, #e5e7eb);\n}\n.btn-secondary:hover {\n  background: var(--border, #e5e7eb);\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.loading-state,\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-2, #6b7280);\n}\n.loading-state i,\n.empty-state i {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n@media (max-width: 992px) {\n  .services-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 576px) {\n  .services-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.service-card {\n  background: var(--bg-card, #ffffff);\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 16px;\n  padding: 24px;\n  text-align: center;\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.service-card:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n.card-order-badge {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: var(--violet-light, #e0e7ff);\n  color: var(--violet, #6366f1);\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.card-icon {\n  margin-bottom: 16px;\n}\n.card-icon i {\n  font-size: 2.5rem;\n  color: var(--violet, #6366f1);\n}\n.card-title-ar {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text, #1f2937);\n  margin-bottom: 4px;\n}\n.card-title-en {\n  font-size: 0.9rem;\n  color: var(--text-2, #6b7280);\n  margin-bottom: 12px;\n  font-family: "Inter", sans-serif;\n}\n.card-desc {\n  font-size: 0.9rem;\n  color: var(--text-2, #6b7280);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.card-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}\n.btn-action {\n  background: var(--bg-sidebar, #f3f4f6);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-2, #6b7280);\n  transition: all 0.2s;\n}\n.btn-action.edit:hover {\n  background: var(--violet-light, #e0e7ff);\n  color: var(--violet, #6366f1);\n}\n.btn-action.delete:hover {\n  background: #fee2e2;\n  color: var(--red, #ef4444);\n}\n.drawer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.drawer {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: -540px;\n  width: 540px;\n  max-width: 100%;\n  background: var(--bg-card, #ffffff);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  transition: right 0.3s ease;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n}\n.drawer.open {\n  right: 0;\n}\n.drawer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border, #e5e7eb);\n}\n.drawer-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: var(--text-2, #6b7280);\n  cursor: pointer;\n}\n.drawer-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.drawer-footer {\n  padding: 20px 24px;\n  border-top: 1px solid var(--border, #e5e7eb);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.form-group {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.form-row {\n  display: flex;\n  gap: 16px;\n}\n.form-row .form-group {\n  flex: 1;\n}\n.three-cols .form-group {\n  flex: 1;\n}\nlabel {\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: var(--text, #1f2937);\n  font-size: 0.9rem;\n}\ninput,\ntextarea {\n  background: var(--bg, #f9fafb);\n  border: 1px solid var(--border, #e5e7eb);\n  color: var(--text, #1f2937);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border-color: var(--violet, #6366f1);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\ninput[dir=ltr],\ntextarea[dir=ltr] {\n  font-family: "Inter", sans-serif;\n}\n.icon-picker {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 4px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n}\n.icon-option {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition: all 0.2s;\n  text-align: center;\n}\n.icon-option i {\n  font-size: 1.5rem;\n  color: var(--text-2, #6b7280);\n}\n.icon-option span {\n  font-size: 0.7rem;\n  color: var(--text-2, #6b7280);\n}\n.icon-option:hover {\n  background: var(--bg-sidebar, #f3f4f6);\n}\n.icon-option.selected {\n  border-color: var(--violet, #6366f1);\n  background: var(--violet-light, #e0e7ff);\n}\n.icon-option.selected i,\n.icon-option.selected span {\n  color: var(--violet, #6366f1);\n}\n/*# sourceMappingURL=portfolio-services.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioServicesComponent, { className: "PortfolioServicesComponent", filePath: "src/app/components/portfolio/services/portfolio-services.component.ts", lineNumber: 37 });
})();
export {
  PortfolioServicesComponent
};
//# sourceMappingURL=chunk-R3PIE4IC.js.map
