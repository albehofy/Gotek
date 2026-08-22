import {
  ConfirmService
} from "./chunk-YURY4BWO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZYG2ULWX.js";

// src/app/components/portfolio/categories/portfolio-categories.component.ts
function PortfolioCategoriesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.infoMessage, " ");
  }
}
function PortfolioCategoriesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioCategoriesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0635\u0646\u064A\u0641\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function PortfolioCategoriesComponent_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModal());
    });
    \u0275\u0275element(5, "i", 7);
    \u0275\u0275text(6, " \u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F ");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioCategoriesComponent_div_13_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const cat_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", cat_r4.image, \u0275\u0275sanitizeUrl);
  }
}
function PortfolioCategoriesComponent_div_13_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275elementEnd();
  }
}
function PortfolioCategoriesComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275template(2, PortfolioCategoriesComponent_div_13_div_1_img_2_Template, 1, 1, "img", 23)(3, PortfolioCategoriesComponent_div_13_div_1_div_3_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "h3", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 29)(12, "button", 30);
    \u0275\u0275listener("click", function PortfolioCategoriesComponent_div_13_div_1_Template_button_click_12_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal(cat_r4));
    });
    \u0275\u0275element(13, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 32);
    \u0275\u0275listener("click", function PortfolioCategoriesComponent_div_13_div_1_Template_button_click_14_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteCategory(cat_r4.id));
    });
    \u0275\u0275element(15, "i", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cat_r4.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cat_r4.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getCategoryNameAr(cat_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getCategoryNameEn(cat_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getCategoryDescAr(cat_r4) || ctx_r0.getCategoryDescEn(cat_r4));
  }
}
function PortfolioCategoriesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, PortfolioCategoriesComponent_div_13_div_1_Template, 16, 5, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.categories);
  }
}
function PortfolioCategoriesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function PortfolioCategoriesComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function PortfolioCategoriesComponent_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, " \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioCategoriesComponent_div_15_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, " \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioCategoriesComponent_div_15_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0627\u0636\u063A\u0637 \u0644\u0631\u0641\u0639 \u0635\u0648\u0631\u0629");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioCategoriesComponent_div_15_img_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 62);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function PortfolioCategoriesComponent_div_15_i_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 63);
  }
}
function PortfolioCategoriesComponent_div_15_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u062D\u0641\u0638");
    \u0275\u0275elementEnd();
  }
}
function PortfolioCategoriesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function PortfolioCategoriesComponent_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275element(5, "i", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 41)(7, "form", 42);
    \u0275\u0275listener("ngSubmit", function PortfolioCategoriesComponent_div_15_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCategory());
    });
    \u0275\u0275elementStart(8, "div", 43)(9, "label");
    \u0275\u0275text(10, "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    \u0275\u0275elementStart(11, "span", 44);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 45);
    \u0275\u0275template(14, PortfolioCategoriesComponent_div_15_div_14_Template, 2, 0, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 43)(16, "label");
    \u0275\u0275text(17, "Name in English ");
    \u0275\u0275elementStart(18, "span", 44);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 47);
    \u0275\u0275template(21, PortfolioCategoriesComponent_div_15_div_21_Template, 2, 0, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 43)(23, "label");
    \u0275\u0275text(24, "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 43)(27, "label");
    \u0275\u0275text(28, "Description in English");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 43)(31, "label");
    \u0275\u0275text(32, "\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 50);
    \u0275\u0275listener("click", function PortfolioCategoriesComponent_div_15_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r6);
      const fileInput_r7 = \u0275\u0275reference(35);
      return \u0275\u0275resetView(fileInput_r7.click());
    });
    \u0275\u0275elementStart(34, "input", 51, 0);
    \u0275\u0275listener("change", function PortfolioCategoriesComponent_div_15_Template_input_change_34_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, PortfolioCategoriesComponent_div_15_div_36_Template, 4, 0, "div", 52)(37, PortfolioCategoriesComponent_div_15_img_37_Template, 1, 1, "img", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 54)(39, "button", 55);
    \u0275\u0275listener("click", function PortfolioCategoriesComponent_div_15_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(40, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 56);
    \u0275\u0275template(42, PortfolioCategoriesComponent_div_15_i_42_Template, 1, 0, "i", 57)(43, PortfolioCategoriesComponent_div_15_span_43_Template, 2, 0, "span", 58);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.editingId ? "\u062A\u0639\u062F\u064A\u0644 \u062A\u0635\u0646\u064A\u0641" : "\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.categoryForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.categoryForm.get("name_ar")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r0.categoryForm.get("name_ar")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.categoryForm.get("name_en")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r0.categoryForm.get("name_en")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", !ctx_r0.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.imagePreview);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSaving);
  }
}
var PortfolioCategoriesComponent = class _PortfolioCategoriesComponent {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);
  fb = inject(FormBuilder);
  categories = [];
  isLoading = true;
  isSaving = false;
  showModal = false;
  categoryForm;
  editingId = null;
  selectedFile = null;
  imagePreview = null;
  infoMessage = null;
  ngOnInit() {
    this.initForm();
    this.loadCategories();
  }
  initForm() {
    this.categoryForm = this.fb.group({
      name_ar: ["", Validators.required],
      name_en: ["", Validators.required],
      description_ar: [""],
      description_en: [""]
    });
  }
  loadCategories() {
    this.isLoading = true;
    this.apiService.getCategories().subscribe({
      next: (data) => {
        this.categories = data || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error loading categories", err);
        this.isLoading = false;
        this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A");
      }
    });
  }
  openModal(category) {
    this.showModal = true;
    this.selectedFile = null;
    this.imagePreview = null;
    if (category) {
      this.editingId = category.id;
      this.categoryForm.patchValue({
        name_ar: this.getCategoryNameAr(category),
        name_en: this.getCategoryNameEn(category),
        description_ar: this.getCategoryDescAr(category),
        description_en: this.getCategoryDescEn(category)
      });
      this.imagePreview = category.image || null;
    } else {
      this.editingId = null;
      this.categoryForm.reset();
    }
  }
  closeModal() {
    this.showModal = false;
    this.editingId = null;
    this.categoryForm.reset();
    this.selectedFile = null;
    this.imagePreview = null;
  }
  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  saveCategory() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = new FormData();
    const values = this.categoryForm.value;
    formData.append("name_ar", values.name_ar);
    formData.append("name_en", values.name_en);
    if (values.description_ar)
      formData.append("description_ar", values.description_ar);
    if (values.description_en)
      formData.append("description_en", values.description_en);
    if (this.selectedFile) {
      formData.append("image", this.selectedFile);
    }
    if (this.editingId) {
      this.apiService.updateCategory(String(this.editingId), formData).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0628\u0646\u062C\u0627\u062D");
          this.closeModal();
          this.loadCategories();
        },
        error: (err) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062B");
        }
      });
    } else {
      this.apiService.addCategory(formData).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage("\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0628\u0646\u062C\u0627\u062D");
          this.closeModal();
          this.loadCategories();
        },
        error: (err) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
        }
      });
    }
  }
  deleteCategory(id) {
    this.confirmService.confirm({
      title: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641",
      message: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u061F",
      confirmText: "\u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteCategory(String(id)).subscribe({
          next: () => {
            this.showMessage("\u062A\u0645 \u0627\u0644\u062D\u0630\u0641 \u0628\u0646\u062C\u0627\u062D");
            this.loadCategories();
          },
          error: (err) => {
            console.error(err);
            this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0630\u0641");
          }
        });
      }
    });
  }
  showMessage(msg) {
    this.infoMessage = msg;
    setTimeout(() => {
      this.infoMessage = null;
    }, 3e3);
  }
  getCategoryNameAr(cat) {
    return cat.name?.ar || cat.name_ar || (typeof cat.name === "string" ? cat.name : "") || "";
  }
  getCategoryNameEn(cat) {
    return cat.name?.en || cat.name_en || "";
  }
  getCategoryDescAr(cat) {
    return cat.description?.ar || cat.description_ar || (typeof cat.description === "string" ? cat.description : "") || "";
  }
  getCategoryDescEn(cat) {
    return cat.description?.en || cat.description_en || "";
  }
  static \u0275fac = function PortfolioCategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioCategoriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioCategoriesComponent, selectors: [["app-portfolio-categories"]], decls: 16, vars: 6, consts: [["fileInput", ""], ["dir", "rtl", 1, "page-container"], ["class", "toast-message", 4, "ngIf"], [1, "page-header"], [1, "header-title"], [1, "fa-solid", "fa-tags"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "card-grid", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-box", 4, "ngIf"], [1, "toast-message"], [1, "loading-state"], [1, "fa-solid", "fa-spinner", "fa-spin", "fa-3x"], [1, "empty-state"], [1, "fa-regular", "fa-folder-open"], [1, "btn", "btn-primary", "mt-3", 3, "click"], [1, "card-grid"], ["class", "category-card", 4, "ngFor", "ngForOf"], [1, "category-card"], [1, "card-image"], ["alt", "Category Image", 3, "src", 4, "ngIf"], ["class", "placeholder-img", 4, "ngIf"], [1, "card-content"], [1, "name-ar"], [1, "name-en"], [1, "description"], [1, "card-actions"], ["title", "\u062A\u0639\u062F\u064A\u0644", 1, "btn-icon", "edit", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], ["title", "\u062D\u0630\u0641", 1, "btn-icon", "delete", 3, "click"], [1, "fa-solid", "fa-trash-can"], ["alt", "Category Image", 3, "src"], [1, "placeholder-img"], [1, "modal-backdrop", 3, "click"], [1, "modal-box"], [1, "modal-header"], [1, "btn-close-custom", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "text-danger"], ["type", "text", "formControlName", "name_ar", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", 1, "form-control"], ["class", "error-msg", 4, "ngIf"], ["type", "text", "formControlName", "name_en", "placeholder", "Category Name", "dir", "ltr", 1, "form-control"], ["formControlName", "description_ar", "rows", "3", "placeholder", "\u0648\u0635\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", 1, "form-control"], ["formControlName", "description_en", "rows", "3", "placeholder", "Category Description", "dir", "ltr", 1, "form-control"], [1, "upload-zone", 3, "click"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["class", "upload-prompt", 4, "ngIf"], ["class", "img-preview", "alt", "Preview", 3, "src", 4, "ngIf"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa-solid fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [1, "error-msg"], [1, "upload-prompt"], [1, "fa-solid", "fa-cloud-arrow-up"], ["alt", "Preview", 1, "img-preview", 3, "src"], [1, "fa-solid", "fa-spinner", "fa-spin"]], template: function PortfolioCategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, PortfolioCategoriesComponent_div_1_Template, 2, 1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 | Project Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function PortfolioCategoriesComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, PortfolioCategoriesComponent_div_11_Template, 4, 0, "div", 8)(12, PortfolioCategoriesComponent_div_12_Template, 7, 0, "div", 9)(13, PortfolioCategoriesComponent_div_13_Template, 2, 1, "div", 10)(14, PortfolioCategoriesComponent_div_14_Template, 1, 0, "div", 11)(15, PortfolioCategoriesComponent_div_15_Template, 44, 9, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.infoMessage);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.categories.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.categories.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--violet);\n}\n.header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid var(--border);\n  color: var(--text);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 0;\n  color: var(--text-2);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n  color: var(--violet-light, var(--violet));\n  opacity: 0.5;\n}\n.card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 24px;\n}\n@media (min-width: 768px) {\n  .card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.category-card[_ngcontent-%COMP%] {\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n}\n.card-image[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 100%;\n  background-color: var(--bg);\n  position: relative;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.placeholder-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--bg);\n  color: var(--text-2);\n}\n.placeholder-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  flex-grow: 1;\n}\n.name-ar[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text);\n}\n.name-en[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-2);\n  font-family: "Inter", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-2);\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-actions[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-icon.edit[_ngcontent-%COMP%] {\n  background-color: rgba(var(--violet-rgb, 138, 43, 226), 0.1);\n  color: var(--violet);\n}\n.btn-icon.edit[_ngcontent-%COMP%]:hover {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-icon.delete[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: var(--red, #dc3545);\n}\n.btn-icon.delete[_ngcontent-%COMP%]:hover {\n  background-color: var(--red, #dc3545);\n  color: #fff;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 400;\n  backdrop-filter: blur(2px);\n}\n.modal-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 500px;\n  background-color: var(--bg-sidebar);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  z-index: 401;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n}\n.btn-close-custom[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: var(--text-2);\n  cursor: pointer;\n}\n.btn-close-custom[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background-color: var(--bg);\n  color: var(--text);\n  font-family: inherit;\n  transition: border-color 0.2s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--violet);\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--red, #dc3545);\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: var(--red, #dc3545);\n  font-size: 12px;\n  margin-top: 4px;\n}\n.upload-zone[_ngcontent-%COMP%] {\n  border: 2px dashed var(--border);\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  cursor: pointer;\n  background-color: var(--bg);\n  transition: all 0.2s ease;\n}\n.upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: var(--violet);\n  background-color: rgba(var(--violet-rgb, 138, 43, 226), 0.02);\n}\n.upload-prompt[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--violet);\n  margin-bottom: 8px;\n}\n.upload-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-2);\n  font-size: 14px;\n}\n.img-preview[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 8px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n}\n.toast-message[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  background-color: var(--bg-card);\n  color: var(--text);\n  padding: 12px 24px;\n  border-radius: 8px;\n  border-left: 4px solid var(--violet);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=portfolio-categories.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioCategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio-categories", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="page-container" dir="rtl">
  <!-- Toast Message -->
  <div class="toast-message" *ngIf="infoMessage">
    {{ infoMessage }}
  </div>

  <!-- Header -->
  <div class="page-header">
    <div class="header-title">
      <i class="fa-solid fa-tags"></i>
      <h2>\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 | Project Categories</h2>
    </div>
    <button class="btn btn-primary" (click)="openModal()">
      <i class="fa-solid fa-plus"></i>
      <span>\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641</span>
    </button>
  </div>

  <!-- Loading State -->
  <div class="loading-state" *ngIf="isLoading">
    <i class="fa-solid fa-spinner fa-spin fa-3x"></i>
    <p>\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
  </div>

  <!-- Empty State -->
  <div class="empty-state" *ngIf="!isLoading && categories.length === 0">
    <i class="fa-regular fa-folder-open"></i>
    <h3>\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0635\u0646\u064A\u0641\u0627\u062A</h3>
    <button class="btn btn-primary mt-3" (click)="openModal()">
      <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F
    </button>
  </div>

  <!-- Content Grid -->
  <div class="card-grid" *ngIf="!isLoading && categories.length > 0">
    <div class="category-card" *ngFor="let cat of categories">
      <div class="card-image">
        <img *ngIf="cat.image" [src]="cat.image" alt="Category Image">
        <div class="placeholder-img" *ngIf="!cat.image">
          <i class="fa-solid fa-tags"></i>
        </div>
      </div>
      <div class="card-content">
        <h3 class="name-ar">{{ getCategoryNameAr(cat) }}</h3>
        <h4 class="name-en">{{ getCategoryNameEn(cat) }}</h4>
        <p class="description">{{ getCategoryDescAr(cat) || getCategoryDescEn(cat) }}</p>
      </div>
      <div class="card-actions">
        <button class="btn-icon edit" (click)="openModal(cat)" title="\u062A\u0639\u062F\u064A\u0644">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn-icon delete" (click)="deleteCategory(cat.id)" title="\u062D\u0630\u0641">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal-backdrop" *ngIf="showModal" (click)="closeModal()"></div>
  <div class="modal-box" *ngIf="showModal">
    <div class="modal-header">
      <h3>{{ editingId ? '\u062A\u0639\u062F\u064A\u0644 \u062A\u0635\u0646\u064A\u0641' : '\u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F' }}</h3>
      <button class="btn-close-custom" (click)="closeModal()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    
    <div class="modal-body">
      <form [formGroup]="categoryForm" (ngSubmit)="saveCategory()">
        
        <div class="form-group">
          <label>\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 <span class="text-danger">*</span></label>
          <input type="text" formControlName="name_ar" class="form-control" placeholder="\u0627\u0633\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641">
          <div class="error-msg" *ngIf="categoryForm.get('name_ar')?.touched && categoryForm.get('name_ar')?.invalid">
            \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628
          </div>
        </div>

        <div class="form-group">
          <label>Name in English <span class="text-danger">*</span></label>
          <input type="text" formControlName="name_en" class="form-control" placeholder="Category Name" dir="ltr">
          <div class="error-msg" *ngIf="categoryForm.get('name_en')?.touched && categoryForm.get('name_en')?.invalid">
            \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628
          </div>
        </div>

        <div class="form-group">
          <label>\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629</label>
          <textarea formControlName="description_ar" class="form-control" rows="3" placeholder="\u0648\u0635\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641"></textarea>
        </div>

        <div class="form-group">
          <label>Description in English</label>
          <textarea formControlName="description_en" class="form-control" rows="3" placeholder="Category Description" dir="ltr"></textarea>
        </div>

        <div class="form-group">
          <label>\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641</label>
          <div class="upload-zone" (click)="fileInput.click()">
            <input type="file" #fileInput (change)="onFileChange($event)" style="display: none" accept="image/*">
            <div *ngIf="!imagePreview" class="upload-prompt">
              <i class="fa-solid fa-cloud-arrow-up"></i>
              <p>\u0627\u0636\u063A\u0637 \u0644\u0631\u0641\u0639 \u0635\u0648\u0631\u0629</p>
            </div>
            <img *ngIf="imagePreview" [src]="imagePreview" class="img-preview" alt="Preview">
          </div>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn btn-secondary" (click)="closeModal()">\u0625\u0644\u063A\u0627\u0621</button>
          <button type="submit" class="btn btn-primary" [disabled]="isSaving">
            <i class="fa-solid fa-spinner fa-spin" *ngIf="isSaving"></i>
            <span *ngIf="!isSaving">\u062D\u0641\u0638</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
`, styles: ['/* src/app/components/portfolio/categories/portfolio-categories.component.css */\n.page-container {\n  padding: 24px;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title i {\n  font-size: 24px;\n  color: var(--violet);\n}\n.header-title h2 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n.btn-primary {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-primary:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-secondary {\n  background-color: transparent;\n  border: 1px solid var(--border);\n  color: var(--text);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 0;\n  color: var(--text-2);\n}\n.empty-state i {\n  font-size: 64px;\n  margin-bottom: 16px;\n  color: var(--violet-light, var(--violet));\n  opacity: 0.5;\n}\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 24px;\n}\n@media (min-width: 768px) {\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.category-card {\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.category-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n}\n.card-image {\n  height: 160px;\n  width: 100%;\n  background-color: var(--bg);\n  position: relative;\n}\n.card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.placeholder-img {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--bg);\n  color: var(--text-2);\n}\n.placeholder-img i {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.card-content {\n  padding: 20px;\n  flex-grow: 1;\n}\n.name-ar {\n  margin: 0 0 4px 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text);\n}\n.name-en {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-2);\n  font-family: "Inter", sans-serif;\n}\n.description {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-2);\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-actions {\n  padding: 16px 20px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-icon.edit {\n  background-color: rgba(var(--violet-rgb, 138, 43, 226), 0.1);\n  color: var(--violet);\n}\n.btn-icon.edit:hover {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-icon.delete {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: var(--red, #dc3545);\n}\n.btn-icon.delete:hover {\n  background-color: var(--red, #dc3545);\n  color: #fff;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 400;\n  backdrop-filter: blur(2px);\n}\n.modal-box {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 500px;\n  background-color: var(--bg-sidebar);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  z-index: 401;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n}\n.btn-close-custom {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: var(--text-2);\n  cursor: pointer;\n}\n.btn-close-custom:hover {\n  color: var(--text);\n}\n.modal-body {\n  padding: 24px;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background-color: var(--bg);\n  color: var(--text);\n  font-family: inherit;\n  transition: border-color 0.2s ease;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--violet);\n}\n.text-danger {\n  color: var(--red, #dc3545);\n}\n.error-msg {\n  color: var(--red, #dc3545);\n  font-size: 12px;\n  margin-top: 4px;\n}\n.upload-zone {\n  border: 2px dashed var(--border);\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  cursor: pointer;\n  background-color: var(--bg);\n  transition: all 0.2s ease;\n}\n.upload-zone:hover {\n  border-color: var(--violet);\n  background-color: rgba(var(--violet-rgb, 138, 43, 226), 0.02);\n}\n.upload-prompt i {\n  font-size: 32px;\n  color: var(--violet);\n  margin-bottom: 8px;\n}\n.upload-prompt p {\n  margin: 0;\n  color: var(--text-2);\n  font-size: 14px;\n}\n.img-preview {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 8px;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n}\n.toast-message {\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  background-color: var(--bg-card);\n  color: var(--text);\n  padding: 12px 24px;\n  border-radius: 8px;\n  border-left: 4px solid var(--violet);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  animation: slideUp 0.3s ease;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=portfolio-categories.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioCategoriesComponent, { className: "PortfolioCategoriesComponent", filePath: "src/app/components/portfolio/categories/portfolio-categories.component.ts", lineNumber: 14 });
})();
export {
  PortfolioCategoriesComponent
};
//# sourceMappingURL=chunk-4X2OI35D.js.map
