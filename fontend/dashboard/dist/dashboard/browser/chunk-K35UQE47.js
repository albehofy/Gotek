import {
  ConfirmService
} from "./chunk-YURY4BWO.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZYG2ULWX.js";

// src/app/components/portfolio/faqs/portfolio-faqs.component.ts
function PortfolioFaqsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.infoMessage, " ");
  }
}
function PortfolioFaqsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioFaqsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0633\u0626\u0644\u0629 \u0628\u0639\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function PortfolioFaqsComponent_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModal());
    });
    \u0275\u0275element(5, "i", 6);
    \u0275\u0275text(6, " \u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644 \u062C\u062F\u064A\u062F ");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioFaqsComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275listener("click", function PortfolioFaqsComponent_div_13_div_1_Template_div_click_1_listener() {
      const faq_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleExpand(faq_r4.id));
    });
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275element(3, "i", 23);
    \u0275\u0275elementStart(4, "div", 24)(5, "h4", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 27)(10, "span", 28);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 29)(13, "button", 30);
    \u0275\u0275listener("click", function PortfolioFaqsComponent_div_13_div_1_Template_button_click_13_listener($event) {
      const faq_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal(faq_r4, $event));
    });
    \u0275\u0275element(14, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 32);
    \u0275\u0275listener("click", function PortfolioFaqsComponent_div_13_div_1_Template_button_click_15_listener($event) {
      const faq_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteFaq(faq_r4.id, $event));
    });
    \u0275\u0275element(16, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 35)(19, "div", 36)(20, "div", 37)(21, "label");
    \u0275\u0275text(22, "\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 38)(26, "label");
    \u0275\u0275text(27, "Answer in English:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("expanded", ctx_r0.expandedFaqId === faq_r4.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(faq_r4.question_ar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r4.question_en);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-active", faq_r4.is_active)("badge-inactive", !faq_r4.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r4.is_active ? "\u0645\u0641\u0639\u0644" : "\u0645\u0639\u0637\u0644", " ");
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("max-height", ctx_r0.expandedFaqId === faq_r4.id ? "500px" : "0");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(faq_r4.answer_ar);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(faq_r4.answer_en);
  }
}
function PortfolioFaqsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, PortfolioFaqsComponent_div_13_div_1_Template, 30, 13, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.faqs);
  }
}
function PortfolioFaqsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function PortfolioFaqsComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function PortfolioFaqsComponent_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, " \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioFaqsComponent_div_15_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, " \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioFaqsComponent_div_15_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, " \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioFaqsComponent_div_15_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, " \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioFaqsComponent_div_15_i_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 67);
  }
}
function PortfolioFaqsComponent_div_15_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u062D\u0641\u0638");
    \u0275\u0275elementEnd();
  }
}
function PortfolioFaqsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function PortfolioFaqsComponent_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275element(5, "i", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 44)(7, "form", 45);
    \u0275\u0275listener("ngSubmit", function PortfolioFaqsComponent_div_15_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveFaq());
    });
    \u0275\u0275elementStart(8, "div", 46)(9, "label");
    \u0275\u0275text(10, "\u0627\u0644\u0633\u0624\u0627\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    \u0275\u0275elementStart(11, "span", 47);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 48);
    \u0275\u0275template(14, PortfolioFaqsComponent_div_15_div_14_Template, 2, 0, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 46)(16, "label");
    \u0275\u0275text(17, "Question in English ");
    \u0275\u0275elementStart(18, "span", 47);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 50);
    \u0275\u0275template(21, PortfolioFaqsComponent_div_15_div_21_Template, 2, 0, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 46)(23, "label");
    \u0275\u0275text(24, "\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    \u0275\u0275elementStart(25, "span", 47);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "textarea", 51);
    \u0275\u0275template(28, PortfolioFaqsComponent_div_15_div_28_Template, 2, 0, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 46)(30, "label");
    \u0275\u0275text(31, "Answer in English ");
    \u0275\u0275elementStart(32, "span", 47);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "textarea", 52);
    \u0275\u0275template(35, PortfolioFaqsComponent_div_15_div_35_Template, 2, 0, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 53)(37, "div", 54)(38, "label");
    \u0275\u0275text(39, "\u0627\u0644\u062A\u0631\u062A\u064A\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 56)(42, "label");
    \u0275\u0275text(43, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0641\u0639\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "label", 57);
    \u0275\u0275element(45, "input", 58)(46, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 60);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 61)(50, "button", 62);
    \u0275\u0275listener("click", function PortfolioFaqsComponent_div_15_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(51, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 63);
    \u0275\u0275template(53, PortfolioFaqsComponent_div_15_i_53_Template, 1, 0, "i", 64)(54, PortfolioFaqsComponent_div_15_span_54_Template, 2, 0, "span", 65);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.editingId ? "\u062A\u0639\u062F\u064A\u0644 \u0633\u0624\u0627\u0644" : "\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644 \u062C\u062F\u064A\u062F");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.faqForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.faqForm.get("question_ar")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r0.faqForm.get("question_ar")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.faqForm.get("question_en")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r0.faqForm.get("question_en")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.faqForm.get("answer_ar")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r0.faqForm.get("answer_ar")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.faqForm.get("answer_en")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r0.faqForm.get("answer_en")) == null ? null : tmp_6_0.invalid));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r0.faqForm.get("is_active")) == null ? null : tmp_7_0.value) ? "\u0641\u0639\u0627\u0644" : "\u0645\u0639\u0637\u0644");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSaving);
  }
}
var PortfolioFaqsComponent = class _PortfolioFaqsComponent {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);
  fb = inject(FormBuilder);
  faqs = [];
  isLoading = true;
  isSaving = false;
  showModal = false;
  faqForm;
  editingId = null;
  expandedFaqId = null;
  infoMessage = null;
  ngOnInit() {
    this.initForm();
    this.loadFaqs();
  }
  initForm() {
    this.faqForm = this.fb.group({
      question_ar: ["", Validators.required],
      question_en: ["", Validators.required],
      answer_ar: ["", Validators.required],
      answer_en: ["", Validators.required],
      sort_order: [0],
      is_active: [true]
    });
  }
  loadFaqs() {
    this.isLoading = true;
    this.apiService.getFaqs().subscribe({
      next: (data) => {
        this.faqs = data || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error loading FAQs", err);
        this.isLoading = false;
        this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629");
      }
    });
  }
  toggleExpand(id) {
    this.expandedFaqId = this.expandedFaqId === id ? null : id;
  }
  openModal(faq, event) {
    if (event) {
      event.stopPropagation();
    }
    this.showModal = true;
    if (faq) {
      this.editingId = faq.id;
      this.faqForm.patchValue({
        question_ar: faq.question_ar,
        question_en: faq.question_en,
        answer_ar: faq.answer_ar,
        answer_en: faq.answer_en,
        sort_order: faq.sort_order || 0,
        is_active: faq.is_active !== void 0 ? faq.is_active : true
      });
    } else {
      this.editingId = null;
      this.faqForm.reset({ sort_order: 0, is_active: true });
    }
  }
  closeModal() {
    this.showModal = false;
    this.editingId = null;
    this.faqForm.reset();
  }
  saveFaq() {
    if (this.faqForm.invalid) {
      this.faqForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const payload = this.faqForm.value;
    if (this.editingId) {
      this.apiService.updateFaq(String(this.editingId), payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0633\u0624\u0627\u0644 \u0628\u0646\u062C\u0627\u062D");
          this.closeModal();
          this.loadFaqs();
        },
        error: (err) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062B");
        }
      });
    } else {
      this.apiService.addFaq(payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage("\u062A\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062C\u0627\u062D");
          this.closeModal();
          this.loadFaqs();
        },
        error: (err) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
        }
      });
    }
  }
  deleteFaq(id, event) {
    if (event) {
      event.stopPropagation();
    }
    this.confirmService.confirm({
      title: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641",
      message: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0633\u0624\u0627\u0644\u061F",
      confirmText: "\u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteFaq(String(id)).subscribe({
          next: () => {
            this.showMessage("\u062A\u0645 \u0627\u0644\u062D\u0630\u0641 \u0628\u0646\u062C\u0627\u062D");
            this.loadFaqs();
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
  static \u0275fac = function PortfolioFaqsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioFaqsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioFaqsComponent, selectors: [["app-portfolio-faqs"]], decls: 16, vars: 6, consts: [["dir", "rtl", 1, "page-container"], ["class", "toast-message", 4, "ngIf"], [1, "page-header"], [1, "header-title"], [1, "fa-solid", "fa-circle-question"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "accordion-list", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-box", 4, "ngIf"], [1, "toast-message"], [1, "loading-state"], [1, "fa-solid", "fa-spinner", "fa-spin", "fa-3x"], [1, "empty-state"], [1, "fa-regular", "fa-folder-open"], [1, "btn", "btn-primary", "mt-3", 3, "click"], [1, "accordion-list"], ["class", "faq-item", 3, "expanded", 4, "ngFor", "ngForOf"], [1, "faq-item"], [1, "faq-header", 3, "click"], [1, "faq-title-area"], [1, "fa-solid", "fa-circle-question", "faq-icon"], [1, "faq-questions"], [1, "question-ar"], [1, "question-en"], [1, "faq-actions-area"], [1, "badge"], [1, "actions"], ["title", "\u062A\u0639\u062F\u064A\u0644", 1, "btn-icon", "edit", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], ["title", "\u062D\u0630\u0641", 1, "btn-icon", "delete", 3, "click"], [1, "fa-solid", "fa-trash-can"], [1, "fa-solid", "fa-chevron-down", "expand-icon"], [1, "faq-body"], [1, "faq-content"], [1, "answer-block", "ar-block"], ["dir", "ltr", 1, "answer-block", "en-block"], [1, "modal-backdrop", 3, "click"], [1, "modal-box"], [1, "modal-header"], [1, "btn-close-custom", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "text-danger"], ["type", "text", "formControlName", "question_ar", 1, "form-control"], ["class", "error-msg", 4, "ngIf"], ["type", "text", "formControlName", "question_en", "dir", "ltr", 1, "form-control"], ["formControlName", "answer_ar", "rows", "3", 1, "form-control"], ["formControlName", "answer_en", "rows", "3", "dir", "ltr", 1, "form-control"], [1, "row"], [1, "col", "form-group"], ["type", "number", "formControlName", "sort_order", 1, "form-control"], [1, "col", "form-group", "toggle-group"], [1, "switch"], ["type", "checkbox", "formControlName", "is_active"], [1, "slider", "round"], [1, "status-text"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa-solid fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [1, "error-msg"], [1, "fa-solid", "fa-spinner", "fa-spin"]], template: function PortfolioFaqsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PortfolioFaqsComponent_div_1_Template, 2, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 | FAQs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function PortfolioFaqsComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, PortfolioFaqsComponent_div_11_Template, 4, 0, "div", 7)(12, PortfolioFaqsComponent_div_12_Template, 7, 0, "div", 8)(13, PortfolioFaqsComponent_div_13_Template, 2, 1, "div", 9)(14, PortfolioFaqsComponent_div_14_Template, 1, 0, "div", 10)(15, PortfolioFaqsComponent_div_15_Template, 55, 10, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.infoMessage);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.faqs.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.faqs.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--violet);\n}\n.header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid var(--border);\n  color: var(--text);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 0;\n  color: var(--text-2);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n  color: var(--violet-light, var(--violet));\n  opacity: 0.5;\n}\n.accordion-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.faq-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.faq-item.expanded[_ngcontent-%COMP%] {\n  border-color: var(--violet);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.faq-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.faq-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.faq-title-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  flex: 1;\n}\n.faq-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--violet);\n  margin-top: 4px;\n}\n.faq-questions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.question-ar[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text);\n}\n.question-en[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-2);\n  font-family: "Inter", sans-serif;\n}\n.faq-actions-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background-color: rgba(40, 167, 69, 0.1);\n  color: var(--green, #28a745);\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: var(--red, #dc3545);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-icon.edit[_ngcontent-%COMP%] {\n  background-color: rgba(var(--violet-rgb, 138, 43, 226), 0.1);\n  color: var(--violet);\n}\n.btn-icon.edit[_ngcontent-%COMP%]:hover {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-icon.delete[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: var(--red, #dc3545);\n}\n.btn-icon.delete[_ngcontent-%COMP%]:hover {\n  background-color: var(--red, #dc3545);\n  color: #fff;\n}\n.expand-icon[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  transition: transform 0.3s ease;\n  margin-right: 8px;\n}\n.faq-item.expanded[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.faq-body[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: var(--bg);\n}\n.faq-content[_ngcontent-%COMP%] {\n  padding: 0 24px 24px 64px;\n  border-top: 1px solid var(--border);\n  margin-top: -1px;\n}\n.answer-block[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.answer-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--violet);\n  margin-bottom: 4px;\n}\n.answer-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text);\n  line-height: 1.6;\n}\n.en-block[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 400;\n  backdrop-filter: blur(2px);\n}\n.modal-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 580px;\n  background-color: var(--bg-sidebar);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  z-index: 401;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n}\n.btn-close-custom[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: var(--text-2);\n  cursor: pointer;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.col[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background-color: var(--bg);\n  color: var(--text);\n  font-family: inherit;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--violet);\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--red, #dc3545);\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: var(--red, #dc3545);\n  font-size: 12px;\n  margin-top: 4px;\n}\n.toggle-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin-top: 8px;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--border);\n  transition: .4s;\n}\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: .4s;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: var(--green, #28a745);\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 24px;\n}\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n.status-text[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n}\n.toast-message[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  background-color: var(--bg-card);\n  color: var(--text);\n  padding: 12px 24px;\n  border-radius: 8px;\n  border-left: 4px solid var(--violet);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=portfolio-faqs.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioFaqsComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio-faqs", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="page-container" dir="rtl">
  <!-- Toast Message -->
  <div class="toast-message" *ngIf="infoMessage">
    {{ infoMessage }}
  </div>

  <!-- Header -->
  <div class="page-header">
    <div class="header-title">
      <i class="fa-solid fa-circle-question"></i>
      <h2>\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 | FAQs</h2>
    </div>
    <button class="btn btn-primary" (click)="openModal()">
      <i class="fa-solid fa-plus"></i>
      <span>\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644</span>
    </button>
  </div>

  <!-- Loading State -->
  <div class="loading-state" *ngIf="isLoading">
    <i class="fa-solid fa-spinner fa-spin fa-3x"></i>
    <p>\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
  </div>

  <!-- Empty State -->
  <div class="empty-state" *ngIf="!isLoading && faqs.length === 0">
    <i class="fa-regular fa-folder-open"></i>
    <h3>\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0633\u0626\u0644\u0629 \u0628\u0639\u062F</h3>
    <button class="btn btn-primary mt-3" (click)="openModal()">
      <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644 \u062C\u062F\u064A\u062F
    </button>
  </div>

  <!-- Accordion List -->
  <div class="accordion-list" *ngIf="!isLoading && faqs.length > 0">
    <div class="faq-item" *ngFor="let faq of faqs" [class.expanded]="expandedFaqId === faq.id">
      
      <div class="faq-header" (click)="toggleExpand(faq.id)">
        <div class="faq-title-area">
          <i class="fa-solid fa-circle-question faq-icon"></i>
          <div class="faq-questions">
            <h4 class="question-ar">{{ faq.question_ar }}</h4>
            <span class="question-en">{{ faq.question_en }}</span>
          </div>
        </div>
        
        <div class="faq-actions-area">
          <span class="badge" [class.badge-active]="faq.is_active" [class.badge-inactive]="!faq.is_active">
            {{ faq.is_active ? '\u0645\u0641\u0639\u0644' : '\u0645\u0639\u0637\u0644' }}
          </span>
          <div class="actions">
            <button class="btn-icon edit" (click)="openModal(faq, $event)" title="\u062A\u0639\u062F\u064A\u0644">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn-icon delete" (click)="deleteFaq(faq.id, $event)" title="\u062D\u0630\u0641">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <i class="fa-solid fa-chevron-down expand-icon"></i>
        </div>
      </div>

      <div class="faq-body" [style.maxHeight]="expandedFaqId === faq.id ? '500px' : '0'">
        <div class="faq-content">
          <div class="answer-block ar-block">
            <label>\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629:</label>
            <p>{{ faq.answer_ar }}</p>
          </div>
          <div class="answer-block en-block" dir="ltr">
            <label>Answer in English:</label>
            <p>{{ faq.answer_en }}</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <!-- Modal -->
  <div class="modal-backdrop" *ngIf="showModal" (click)="closeModal()"></div>
  <div class="modal-box" *ngIf="showModal">
    <div class="modal-header">
      <h3>{{ editingId ? '\u062A\u0639\u062F\u064A\u0644 \u0633\u0624\u0627\u0644' : '\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644 \u062C\u062F\u064A\u062F' }}</h3>
      <button class="btn-close-custom" (click)="closeModal()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    
    <div class="modal-body">
      <form [formGroup]="faqForm" (ngSubmit)="saveFaq()">
        
        <div class="form-group">
          <label>\u0627\u0644\u0633\u0624\u0627\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 <span class="text-danger">*</span></label>
          <input type="text" formControlName="question_ar" class="form-control">
          <div class="error-msg" *ngIf="faqForm.get('question_ar')?.touched && faqForm.get('question_ar')?.invalid">
            \u0645\u0637\u0644\u0648\u0628
          </div>
        </div>

        <div class="form-group">
          <label>Question in English <span class="text-danger">*</span></label>
          <input type="text" formControlName="question_en" class="form-control" dir="ltr">
          <div class="error-msg" *ngIf="faqForm.get('question_en')?.touched && faqForm.get('question_en')?.invalid">
            \u0645\u0637\u0644\u0648\u0628
          </div>
        </div>

        <div class="form-group">
          <label>\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 <span class="text-danger">*</span></label>
          <textarea formControlName="answer_ar" class="form-control" rows="3"></textarea>
          <div class="error-msg" *ngIf="faqForm.get('answer_ar')?.touched && faqForm.get('answer_ar')?.invalid">
            \u0645\u0637\u0644\u0648\u0628
          </div>
        </div>

        <div class="form-group">
          <label>Answer in English <span class="text-danger">*</span></label>
          <textarea formControlName="answer_en" class="form-control" rows="3" dir="ltr"></textarea>
          <div class="error-msg" *ngIf="faqForm.get('answer_en')?.touched && faqForm.get('answer_en')?.invalid">
            \u0645\u0637\u0644\u0648\u0628
          </div>
        </div>

        <div class="row">
          <div class="col form-group">
            <label>\u0627\u0644\u062A\u0631\u062A\u064A\u0628</label>
            <input type="number" formControlName="sort_order" class="form-control">
          </div>
          <div class="col form-group toggle-group">
            <label>\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0641\u0639\u064A\u0644</label>
            <label class="switch">
              <input type="checkbox" formControlName="is_active">
              <span class="slider round"></span>
            </label>
            <span class="status-text">{{ faqForm.get('is_active')?.value ? '\u0641\u0639\u0627\u0644' : '\u0645\u0639\u0637\u0644' }}</span>
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
`, styles: ['/* src/app/components/portfolio/faqs/portfolio-faqs.component.css */\n.page-container {\n  padding: 24px;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title i {\n  font-size: 24px;\n  color: var(--violet);\n}\n.header-title h2 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n.btn-primary {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-primary:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-secondary {\n  background-color: transparent;\n  border: 1px solid var(--border);\n  color: var(--text);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 0;\n  color: var(--text-2);\n}\n.empty-state i {\n  font-size: 64px;\n  margin-bottom: 16px;\n  color: var(--violet-light, var(--violet));\n  opacity: 0.5;\n}\n.accordion-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.faq-item {\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.faq-item.expanded {\n  border-color: var(--violet);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.faq-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.faq-header:hover {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.faq-title-area {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  flex: 1;\n}\n.faq-icon {\n  font-size: 24px;\n  color: var(--violet);\n  margin-top: 4px;\n}\n.faq-questions {\n  display: flex;\n  flex-direction: column;\n}\n.question-ar {\n  margin: 0 0 4px 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text);\n}\n.question-en {\n  font-size: 14px;\n  color: var(--text-2);\n  font-family: "Inter", sans-serif;\n}\n.faq-actions-area {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.badge {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-active {\n  background-color: rgba(40, 167, 69, 0.1);\n  color: var(--green, #28a745);\n}\n.badge-inactive {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: var(--red, #dc3545);\n}\n.actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-icon.edit {\n  background-color: rgba(var(--violet-rgb, 138, 43, 226), 0.1);\n  color: var(--violet);\n}\n.btn-icon.edit:hover {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-icon.delete {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: var(--red, #dc3545);\n}\n.btn-icon.delete:hover {\n  background-color: var(--red, #dc3545);\n  color: #fff;\n}\n.expand-icon {\n  color: var(--text-2);\n  transition: transform 0.3s ease;\n  margin-right: 8px;\n}\n.faq-item.expanded .expand-icon {\n  transform: rotate(180deg);\n}\n.faq-body {\n  overflow: hidden;\n  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: var(--bg);\n}\n.faq-content {\n  padding: 0 24px 24px 64px;\n  border-top: 1px solid var(--border);\n  margin-top: -1px;\n}\n.answer-block {\n  margin-top: 16px;\n}\n.answer-block label {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--violet);\n  margin-bottom: 4px;\n}\n.answer-block p {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text);\n  line-height: 1.6;\n}\n.en-block {\n  font-family: "Inter", sans-serif;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 400;\n  backdrop-filter: blur(2px);\n}\n.modal-box {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 580px;\n  background-color: var(--bg-sidebar);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  z-index: 401;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n}\n.btn-close-custom {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: var(--text-2);\n  cursor: pointer;\n}\n.modal-body {\n  padding: 24px;\n}\n.row {\n  display: flex;\n  gap: 16px;\n}\n.col {\n  flex: 1;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background-color: var(--bg);\n  color: var(--text);\n  font-family: inherit;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--violet);\n}\n.text-danger {\n  color: var(--red, #dc3545);\n}\n.error-msg {\n  color: var(--red, #dc3545);\n  font-size: 12px;\n  margin-top: 4px;\n}\n.toggle-group {\n  display: flex;\n  flex-direction: column;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin-top: 8px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--border);\n  transition: .4s;\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: .4s;\n}\ninput:checked + .slider {\n  background-color: var(--green, #28a745);\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n.slider.round {\n  border-radius: 24px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.status-text {\n  margin-top: 8px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n}\n.toast-message {\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  background-color: var(--bg-card);\n  color: var(--text);\n  padding: 12px 24px;\n  border-radius: 8px;\n  border-left: 4px solid var(--violet);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  animation: slideUp 0.3s ease;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=portfolio-faqs.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioFaqsComponent, { className: "PortfolioFaqsComponent", filePath: "src/app/components/portfolio/faqs/portfolio-faqs.component.ts", lineNumber: 14 });
})();
export {
  PortfolioFaqsComponent
};
//# sourceMappingURL=chunk-K35UQE47.js.map
