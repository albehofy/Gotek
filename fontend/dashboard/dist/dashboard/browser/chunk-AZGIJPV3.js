import {
  PrimePickerSelectComponent
} from "./chunk-XDDYZAH2.js";
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
} from "./chunk-6TEPOG2V.js";
import {
  ApiService
} from "./chunk-VFRQX7SG.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CK3LQYPJ.js";

// src/app/components/departments/departments-sections.component.ts
function DepartmentsSectionsComponent_div_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Joint Venture: ", dept_r2.partner_percentage, "% Company / ", 100 - dept_r2.partner_percentage, "% Partner ");
  }
}
function DepartmentsSectionsComponent_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "small");
    \u0275\u0275text(2, "Department Lead:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275element(4, "i", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dept_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", dept_r2.manager.name, "");
  }
}
function DepartmentsSectionsComponent_div_12_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sub_r4.name_en || sub_r4.name_ar, " ");
  }
}
function DepartmentsSectionsComponent_div_12_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "No sub-categories yet");
    \u0275\u0275elementEnd();
  }
}
function DepartmentsSectionsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DepartmentsSectionsComponent_div_12_span_4_Template, 3, 2, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DepartmentsSectionsComponent_div_12_div_7_Template, 6, 1, "div", 13);
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "span");
    \u0275\u0275text(11, "Sub-categories:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 16);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_12_Template_button_click_12_listener() {
      const dept_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openSubCategoryModal(dept_r2));
    });
    \u0275\u0275text(13, "+ Add Sub-category");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275template(15, DepartmentsSectionsComponent_div_12_span_15_Template, 2, 1, "span", 18)(16, DepartmentsSectionsComponent_div_12_span_16_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dept_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dept_r2.has_partner);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dept_r2.manager);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", dept_r2.sub_categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dept_r2.sub_categories || dept_r2.sub_categories.length === 0);
  }
}
function DepartmentsSectionsComponent_div_13_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 34)(2, "label");
    \u0275\u0275text(3, "External Partner Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "label");
    \u0275\u0275text(7, "Company Profit Share (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 48);
    \u0275\u0275elementStart(9, "small", 49);
    \u0275\u0275text(10, "Department profits are split according to this percentage.");
    \u0275\u0275elementEnd()()();
  }
}
function DepartmentsSectionsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "h3");
    \u0275\u0275element(4, "i", 2);
    \u0275\u0275text(5, " Create Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddModal = false);
    });
    \u0275\u0275element(7, "i", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 32);
    \u0275\u0275listener("ngSubmit", function DepartmentsSectionsComponent_div_13_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDepartment());
    });
    \u0275\u0275elementStart(9, "div", 33)(10, "div", 34)(11, "label");
    \u0275\u0275text(12, "Department Name ");
    \u0275\u0275elementStart(13, "span", 35);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 34)(17, "label");
    \u0275\u0275text(18, "Department Lead / Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "app-prime-picker-select", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 38)(21, "label", 39)(22, "input", 40);
    \u0275\u0275listener("change", function DepartmentsSectionsComponent_div_13_Template_input_change_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePartnerFields());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " External Joint Venture Partner (Section Partnership) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, DepartmentsSectionsComponent_div_13_div_24_Template, 11, 0, "div", 41);
    \u0275\u0275elementStart(25, "div", 34)(26, "label");
    \u0275\u0275text(27, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "textarea", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 43)(30, "button", 44);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_13_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddModal = false);
    });
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 45);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r2.deptForm);
    \u0275\u0275advance(11);
    \u0275\u0275property("items", ctx_r2.employees);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.deptForm.value.has_partner);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r2.deptForm.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "Saving..." : "Save Department", " ");
  }
}
function DepartmentsSectionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showSubModal = false);
    });
    \u0275\u0275element(6, "i", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 32);
    \u0275\u0275listener("ngSubmit", function DepartmentsSectionsComponent_div_14_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveSubCategory());
    });
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 34)(10, "label");
    \u0275\u0275text(11, "Sub-category Name (Arabic) ");
    \u0275\u0275elementStart(12, "span", 35);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 34)(16, "label");
    \u0275\u0275text(17, "Sub-category Name (English)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 43)(20, "button", 44);
    \u0275\u0275listener("click", function DepartmentsSectionsComponent_div_14_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showSubModal = false);
    });
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 45);
    \u0275\u0275text(23, "Add Sub-category");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Add Sub-category to: ", ctx_r2.selectedDept.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.subForm);
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r2.subForm.invalid || ctx_r2.loading);
  }
}
var DepartmentsSectionsComponent = class _DepartmentsSectionsComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  departments = [];
  employees = [];
  showAddModal = false;
  showSubModal = false;
  selectedDept = null;
  loading = false;
  deptForm;
  subForm;
  ngOnInit() {
    this.initForms();
    this.loadData();
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
  }
  loadData() {
    this.apiService.getDepartments().subscribe((res) => this.departments = res || []);
    this.apiService.getUsers().subscribe((res) => this.employees = res.data || []);
  }
  togglePartnerFields() {
    if (!this.deptForm.value.has_partner) {
      this.deptForm.patchValue({ partner_name: "", partner_percentage: 50 });
    }
  }
  openAddModal() {
    this.deptForm.reset({ has_partner: false, partner_percentage: 50 });
    this.showAddModal = true;
  }
  saveDepartment() {
    if (this.deptForm.invalid)
      return;
    this.loading = true;
    this.apiService.createDepartment(this.deptForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.showAddModal = false;
        this.loadData();
      },
      error: () => this.loading = false
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
  static \u0275fac = function DepartmentsSectionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsSectionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentsSectionsComponent, selectors: [["app-departments-sections"]], decls: 15, vars: 3, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-sitemap", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "depts-grid"], ["class", "dept-card glass-panel", 4, "ngFor", "ngForOf"], ["class", "crm-modal-backdrop", 4, "ngIf"], [1, "dept-card", "glass-panel"], [1, "card-header"], ["class", "partner-badge", 4, "ngIf"], [1, "desc"], ["class", "manager-row", 4, "ngIf"], [1, "subcategories-section"], [1, "sub-header"], [1, "btn-sm-add", 3, "click"], [1, "sub-chips"], ["class", "sub-chip", 4, "ngFor", "ngForOf"], ["style", "color:var(--text-3); font-size:0.75rem;", 4, "ngIf"], [1, "partner-badge"], [1, "fa-solid", "fa-handshake"], [1, "manager-row"], [2, "font-weight", "700", "color", "#fff"], [1, "fa-solid", "fa-user-shield", 2, "color", "var(--violet-light)", "margin-right", "4px"], [1, "sub-chip"], [2, "color", "var(--text-3)", "font-size", "0.75rem"], [1, "crm-modal-backdrop"], [1, "crm-modal-card", "glass-panel"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [3, "ngSubmit", "formGroup"], [2, "padding", "20px 24px", "display", "flex", "flex-direction", "column", "gap", "14px"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "name", "placeholder", "e.g. Video Production Department"], ["formControlName", "manager_id", "optionLabel", "name", "optionValue", "id", "placeholder", "Select manager...", 3, "items"], [1, "form-group", "checkbox-group"], [2, "display", "flex", "align-items", "center", "gap", "8px", "cursor", "pointer", "font-size", "0.86rem", "color", "#fff"], ["type", "checkbox", "formControlName", "has_partner", 3, "change"], ["class", "partner-fields-box", "style", "background:rgba(217,119,6,0.06); padding:14px; border-radius:12px; border:1px dashed rgba(217,119,6,0.3); display:flex; flex-direction:column; gap:12px;", 4, "ngIf"], ["formControlName", "description", "rows", "2", "placeholder", "Department description..."], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-glass", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "partner-fields-box", 2, "background", "rgba(217,119,6,0.06)", "padding", "14px", "border-radius", "12px", "border", "1px dashed rgba(217,119,6,0.3)", "display", "flex", "flex-direction", "column", "gap", "12px"], ["type", "text", "formControlName", "partner_name", "placeholder", "e.g. ProTech Production Co."], ["type", "number", "formControlName", "partner_percentage", "placeholder", "50"], [2, "color", "var(--text-2)"], ["type", "text", "formControlName", "name_ar", "placeholder", "\u0645\u062B\u0627\u0644: \u0641\u064A\u062F\u064A\u0648 \u0631\u064A\u0644\u0632 / Reels"], ["type", "text", "formControlName", "name_en", "placeholder", "Reels Video"]], template: function DepartmentsSectionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Departments & Sections");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Dynamic department management, sub-categories & joint venture partner profit sharing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function DepartmentsSectionsComponent_Template_button_click_8_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " Add Department ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275template(12, DepartmentsSectionsComponent_div_12_Template, 17, 6, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, DepartmentsSectionsComponent_div_13_Template, 34, 5, "div", 8)(14, DepartmentsSectionsComponent_div_14_Template, 24, 3, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.departments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSubModal && ctx.selectedDept);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, PrimePickerSelectComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.depts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 18px;\n}\n.dept-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 22px;\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: all 0.25s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.dept-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet),\n      var(--teal));\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n}\n.dept-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.partner-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  background: var(--amber-soft);\n  color: var(--amber-light);\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-weight: 700;\n}\n.desc[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.manager-row[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  border: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--text-2);\n}\n.subcategories-section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n.sub-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 8px;\n}\n.btn-sm-add[_ngcontent-%COMP%] {\n  background: var(--violet-soft);\n  border: 1px solid rgba(124, 58, 237, 0.25);\n  color: var(--violet-light);\n  padding: 3px 9px;\n  border-radius: 8px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-sm-add[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.sub-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sub-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 4px 10px;\n  border-radius: 100px;\n  font-size: 0.72rem;\n  color: var(--text-2);\n  font-weight: 600;\n}\n.crm-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: _ngcontent-%COMP%_modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=departments-sections.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsSectionsComponent, [{
    type: Component,
    args: [{ selector: "app-departments-sections", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimePickerSelectComponent], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-sitemap" style="color:var(--violet-light);"></i> Departments &amp; Sections</h2>
          <p class="subtitle">Dynamic department management, sub-categories &amp; joint venture partner profit sharing</p>
        </div>
        <button class="btn btn-primary" (click)="openAddModal()">
          <i class="fa-solid fa-plus"></i> Add Department
        </button>
      </div>

      <!-- Departments Cards Grid -->
      <div class="depts-grid">
        <div class="dept-card glass-panel" *ngFor="let dept of departments">
          <div class="card-header">
            <h3>{{ dept.name }}</h3>
            <span class="partner-badge" *ngIf="dept.has_partner">
              <i class="fa-solid fa-handshake"></i> Joint Venture: {{ dept.partner_percentage }}% Company / {{ 100 - dept.partner_percentage }}% Partner
            </span>
          </div>
          <p class="desc">{{ dept.description }}</p>

          <div class="manager-row" *ngIf="dept.manager">
            <small>Department Lead:</small>
            <span style="font-weight:700; color:#fff;"><i class="fa-solid fa-user-shield" style="color:var(--violet-light); margin-right:4px;"></i> {{ dept.manager.name }}</span>
          </div>

          <!-- Subcategories list -->
          <div class="subcategories-section">
            <div class="sub-header">
              <span>Sub-categories:</span>
              <button class="btn-sm-add" (click)="openSubCategoryModal(dept)">+ Add Sub-category</button>
            </div>
            <div class="sub-chips">
              <span *ngFor="let sub of dept.sub_categories" class="sub-chip">
                {{ sub.name_en || sub.name_ar }}
              </span>
              <span *ngIf="!dept.sub_categories || dept.sub_categories.length === 0" style="color:var(--text-3); font-size:0.75rem;">No sub-categories yet</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Add Department Modal -->
      <div class="crm-modal-backdrop" *ngIf="showAddModal">
        <div class="crm-modal-card glass-panel">
          <div class="modal-header">
            <h3><i class="fa-solid fa-sitemap" style="color:var(--violet-light);"></i> Create Department</h3>
            <button class="close-btn" (click)="showAddModal = false"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="deptForm" (ngSubmit)="saveDepartment()">
            <div style="padding:20px 24px; display:flex; flex-direction:column; gap:14px;">
              <div class="form-group">
                <label>Department Name <span class="required">*</span></label>
                <input type="text" formControlName="name" placeholder="e.g. Video Production Department" />
              </div>
              <div class="form-group">
                <label>Department Lead / Manager</label>
                <app-prime-picker-select
                  formControlName="manager_id"
                  [items]="employees"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select manager..."
                ></app-prime-picker-select>
              </div>
              <!-- Partnerships on Sections -->
              <div class="form-group checkbox-group">
                <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.86rem; color:#fff;">
                  <input type="checkbox" formControlName="has_partner" (change)="togglePartnerFields()" />
                  External Joint Venture Partner (Section Partnership)
                </label>
              </div>
              <div *ngIf="deptForm.value.has_partner" class="partner-fields-box" style="background:rgba(217,119,6,0.06); padding:14px; border-radius:12px; border:1px dashed rgba(217,119,6,0.3); display:flex; flex-direction:column; gap:12px;">
                <div class="form-group">
                  <label>External Partner Name</label>
                  <input type="text" formControlName="partner_name" placeholder="e.g. ProTech Production Co." />
                </div>
                <div class="form-group">
                  <label>Company Profit Share (%)</label>
                  <input type="number" formControlName="partner_percentage" placeholder="50" />
                  <small style="color:var(--text-2);">Department profits are split according to this percentage.</small>
                </div>
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea formControlName="description" rows="2" placeholder="Department description..."></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="showAddModal = false">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="deptForm.invalid || loading">
                {{ loading ? 'Saving...' : 'Save Department' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Add Sub-category Modal -->
      <div class="crm-modal-backdrop" *ngIf="showSubModal && selectedDept">
        <div class="crm-modal-card glass-panel">
          <div class="modal-header">
            <h3>Add Sub-category to: {{ selectedDept.name }}</h3>
            <button class="close-btn" (click)="showSubModal = false"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <form [formGroup]="subForm" (ngSubmit)="saveSubCategory()">
            <div style="padding:20px 24px; display:flex; flex-direction:column; gap:14px;">
              <div class="form-group">
                <label>Sub-category Name (Arabic) <span class="required">*</span></label>
                <input type="text" formControlName="name_ar" placeholder="\u0645\u062B\u0627\u0644: \u0641\u064A\u062F\u064A\u0648 \u0631\u064A\u0644\u0632 / Reels" />
              </div>
              <div class="form-group">
                <label>Sub-category Name (English)</label>
                <input type="text" formControlName="name_en" placeholder="Reels Video" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-glass" (click)="showSubModal = false">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="subForm.invalid || loading">Add Sub-category</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;3b634dddb8876937f61745035ad94fc04247cc103395c2bbce3822ab32b5ced1;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/departments/departments-sections.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.depts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 18px;\n}\n.dept-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 22px;\n  border-radius: var(--r-lg);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: all 0.25s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.dept-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet),\n      var(--teal));\n  border-radius: var(--r-lg) var(--r-lg) 0 0;\n}\n.dept-card:hover {\n  border-color: var(--border-v);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-sm);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n.card-header h3 {\n  color: #fff;\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.partner-badge {\n  font-size: 0.68rem;\n  background: var(--amber-soft);\n  color: var(--amber-light);\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  padding: 3px 9px;\n  border-radius: 100px;\n  font-weight: 700;\n}\n.desc {\n  color: var(--text-2);\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.manager-row {\n  background: rgba(0, 0, 0, 0.3);\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  border: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--text-2);\n}\n.subcategories-section {\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n.sub-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 8px;\n}\n.btn-sm-add {\n  background: var(--violet-soft);\n  border: 1px solid rgba(124, 58, 237, 0.25);\n  color: var(--violet-light);\n  padding: 3px 9px;\n  border-radius: 8px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-sm-add:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.sub-chips {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sub-chip {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  padding: 4px 10px;\n  border-radius: 100px;\n  font-size: 0.72rem;\n  color: var(--text-2);\n  font-weight: 600;\n}\n.crm-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 500px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: modalIn 0.22s var(--ease);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h3 {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group input:focus,\n.form-group textarea:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=departments-sections.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentsSectionsComponent, { className: "DepartmentsSectionsComponent", filePath: "src/app/components/departments/departments-sections.component.ts", lineNumber: 174 });
})();
export {
  DepartmentsSectionsComponent
};
//# sourceMappingURL=chunk-AZGIJPV3.js.map
