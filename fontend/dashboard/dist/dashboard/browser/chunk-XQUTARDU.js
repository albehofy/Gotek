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
  NgStyle,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZYG2ULWX.js";

// src/app/components/portfolio/testimonials/portfolio-testimonials.component.ts
var _c0 = (a0) => ({ "background-color": a0 });
var _c1 = () => [1, 2, 3, 4, 5];
function PortfolioTestimonialsComponent_div_1_Template(rf, ctx) {
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
function PortfolioTestimonialsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioTestimonialsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0622\u0631\u0627\u0621 \u0639\u0645\u0644\u0627\u0621 \u0628\u0639\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function PortfolioTestimonialsComponent_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModal());
    });
    \u0275\u0275element(5, "i", 6);
    \u0275\u0275text(6, " \u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A \u062C\u062F\u064A\u062F ");
    \u0275\u0275elementEnd()();
  }
}
function PortfolioTestimonialsComponent_div_13_div_1_ng_container_8_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 40);
  }
}
function PortfolioTestimonialsComponent_div_13_div_1_ng_container_8_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
  }
}
function PortfolioTestimonialsComponent_div_13_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PortfolioTestimonialsComponent_div_13_div_1_ng_container_8_i_1_Template, 1, 0, "i", 38)(2, PortfolioTestimonialsComponent_div_13_div_1_ng_container_8_i_2_Template, 1, 0, "i", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const isFilled_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", isFilled_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !isFilled_r4);
  }
}
function PortfolioTestimonialsComponent_div_13_div_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5.company_name);
  }
}
function PortfolioTestimonialsComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "p", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275template(8, PortfolioTestimonialsComponent_div_13_div_1_ng_container_8_Template, 3, 2, "ng-container", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 27)(10, "div", 28)(11, "div", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 30)(14, "h4");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 31);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, PortfolioTestimonialsComponent_div_13_div_1_span_18_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "button", 34);
    \u0275\u0275listener("click", function PortfolioTestimonialsComponent_div_13_div_1_Template_button_click_20_listener() {
      const t_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal(t_r5));
    });
    \u0275\u0275element(21, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 36);
    \u0275\u0275listener("click", function PortfolioTestimonialsComponent_div_13_div_1_Template_button_click_22_listener() {
      const t_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteTestimonial(t_r5.id));
    });
    \u0275\u0275element(23, "i", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getFeedbackAr(t_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getFeedbackEn(t_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getStarArray(t_r5.rating));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(8, _c0, t_r5.avatar_color || "#8a2be2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5.client_name ? t_r5.client_name.charAt(0).toUpperCase() : "U", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.job_title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r5.company_name);
  }
}
function PortfolioTestimonialsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, PortfolioTestimonialsComponent_div_13_div_1_Template, 24, 10, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.testimonials);
  }
}
function PortfolioTestimonialsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function PortfolioTestimonialsComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function PortfolioTestimonialsComponent_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioTestimonialsComponent_div_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioTestimonialsComponent_div_15_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioTestimonialsComponent_div_15_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function PortfolioTestimonialsComponent_div_15_i_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 69);
    \u0275\u0275listener("click", function PortfolioTestimonialsComponent_div_15_i_46_Template_i_click_0_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setRating(i_r9));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const i_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("fa-solid", i_r9 <= ((tmp_3_0 = ctx_r0.testimonialForm.get("rating")) == null ? null : tmp_3_0.value))("fa-regular", i_r9 > ((tmp_4_0 = ctx_r0.testimonialForm.get("rating")) == null ? null : tmp_4_0.value));
  }
}
function PortfolioTestimonialsComponent_div_15_i_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 70);
  }
}
function PortfolioTestimonialsComponent_div_15_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u062D\u0641\u0638");
    \u0275\u0275elementEnd();
  }
}
function PortfolioTestimonialsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function PortfolioTestimonialsComponent_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275element(5, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48)(7, "form", 49);
    \u0275\u0275listener("ngSubmit", function PortfolioTestimonialsComponent_div_15_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveTestimonial());
    });
    \u0275\u0275elementStart(8, "div", 50)(9, "div", 51)(10, "label");
    \u0275\u0275text(11, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 ");
    \u0275\u0275elementStart(12, "span", 52);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 53);
    \u0275\u0275template(15, PortfolioTestimonialsComponent_div_15_div_15_Template, 2, 0, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 51)(17, "label");
    \u0275\u0275text(18, "\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A ");
    \u0275\u0275elementStart(19, "span", 52);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 55);
    \u0275\u0275template(22, PortfolioTestimonialsComponent_div_15_div_22_Template, 2, 0, "div", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 56)(24, "label");
    \u0275\u0275text(25, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 56)(28, "label");
    \u0275\u0275text(29, "\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    \u0275\u0275elementStart(30, "span", 52);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "textarea", 58);
    \u0275\u0275template(33, PortfolioTestimonialsComponent_div_15_div_33_Template, 2, 0, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 56)(35, "label");
    \u0275\u0275text(36, "Feedback in English ");
    \u0275\u0275elementStart(37, "span", 52);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "textarea", 59);
    \u0275\u0275template(40, PortfolioTestimonialsComponent_div_15_div_40_Template, 2, 0, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 50)(42, "div", 51)(43, "label");
    \u0275\u0275text(44, "\u0627\u0644\u062A\u0642\u064A\u064A\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 60);
    \u0275\u0275template(46, PortfolioTestimonialsComponent_div_15_i_46_Template, 1, 4, "i", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 51)(48, "label");
    \u0275\u0275text(49, "\u0644\u0648\u0646 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0645\u0632\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 63)(52, "button", 64);
    \u0275\u0275listener("click", function PortfolioTestimonialsComponent_div_15_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(53, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 65);
    \u0275\u0275template(55, PortfolioTestimonialsComponent_div_15_i_55_Template, 1, 0, "i", 66)(56, PortfolioTestimonialsComponent_div_15_span_56_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.editingId ? "\u062A\u0639\u062F\u064A\u0644 \u0631\u0623\u064A" : "\u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A \u062C\u062F\u064A\u062F");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.testimonialForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.testimonialForm.get("client_name")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r0.testimonialForm.get("client_name")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.testimonialForm.get("job_title")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r0.testimonialForm.get("job_title")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.testimonialForm.get("feedback_ar")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r0.testimonialForm.get("feedback_ar")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.testimonialForm.get("feedback_en")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r0.testimonialForm.get("feedback_en")) == null ? null : tmp_6_0.invalid));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSaving);
  }
}
var PortfolioTestimonialsComponent = class _PortfolioTestimonialsComponent {
  apiService = inject(ApiService);
  confirmService = inject(ConfirmService);
  fb = inject(FormBuilder);
  testimonials = [];
  isLoading = true;
  isSaving = false;
  showModal = false;
  testimonialForm;
  editingId = null;
  infoMessage = null;
  ngOnInit() {
    this.initForm();
    this.loadTestimonials();
  }
  initForm() {
    this.testimonialForm = this.fb.group({
      client_name: ["", Validators.required],
      job_title: ["", Validators.required],
      company_name: [""],
      feedback_ar: ["", Validators.required],
      feedback_en: ["", Validators.required],
      rating: [5],
      avatar_color: ["#8a2be2"]
      // default violet
    });
  }
  loadTestimonials() {
    this.isLoading = true;
    this.apiService.getTestimonials().subscribe({
      next: (data) => {
        this.testimonials = data || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error loading testimonials", err);
        this.isLoading = false;
        this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      }
    });
  }
  openModal(testimonial) {
    this.showModal = true;
    if (testimonial) {
      this.editingId = testimonial.id;
      this.testimonialForm.patchValue({
        client_name: testimonial.client_name,
        job_title: testimonial.job_title,
        company_name: testimonial.company_name,
        feedback_ar: this.getFeedbackAr(testimonial),
        feedback_en: this.getFeedbackEn(testimonial),
        rating: testimonial.rating || 5,
        avatar_color: testimonial.avatar_color || "#8a2be2"
      });
    } else {
      this.editingId = null;
      this.testimonialForm.reset({ rating: 5, avatar_color: "#8a2be2" });
    }
  }
  closeModal() {
    this.showModal = false;
    this.editingId = null;
    this.testimonialForm.reset();
  }
  setRating(rating) {
    this.testimonialForm.patchValue({ rating });
  }
  saveTestimonial() {
    if (this.testimonialForm.invalid) {
      this.testimonialForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const values = this.testimonialForm.value;
    const payload = {
      client_name: values.client_name,
      job_title: values.job_title,
      company_name: values.company_name,
      feedback: {
        ar: values.feedback_ar,
        en: values.feedback_en
      },
      rating: values.rating,
      avatar_color: values.avatar_color
    };
    if (this.editingId) {
      this.apiService.updateTestimonial(String(this.editingId), payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0631\u0623\u064A \u0628\u0646\u062C\u0627\u062D");
          this.closeModal();
          this.loadTestimonials();
        },
        error: (err) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062B");
        }
      });
    } else {
      this.apiService.addTestimonial(payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.showMessage("\u062A\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062C\u0627\u062D");
          this.closeModal();
          this.loadTestimonials();
        },
        error: (err) => {
          console.error(err);
          this.isSaving = false;
          this.showMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
        }
      });
    }
  }
  deleteTestimonial(id) {
    this.confirmService.confirm({
      title: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641",
      message: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644 \u0647\u0630\u0627\u061F",
      confirmText: "\u062D\u0630\u0641",
      cancelText: "\u0625\u0644\u063A\u0627\u0621",
      type: "danger",
      accept: () => {
        this.apiService.deleteTestimonial(String(id)).subscribe({
          next: () => {
            this.showMessage("\u062A\u0645 \u0627\u0644\u062D\u0630\u0641 \u0628\u0646\u062C\u0627\u062D");
            this.loadTestimonials();
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
  getFeedbackAr(t) {
    return t.feedback?.ar || (typeof t.feedback === "string" ? t.feedback : "") || "";
  }
  getFeedbackEn(t) {
    return t.feedback?.en || "";
  }
  getStarArray(rating) {
    const num = Math.min(Math.max(rating || 0, 0), 5);
    return Array(5).fill(false).map((_, i) => i < num);
  }
  static \u0275fac = function PortfolioTestimonialsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioTestimonialsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioTestimonialsComponent, selectors: [["app-portfolio-testimonials"]], decls: 16, vars: 6, consts: [["dir", "rtl", 1, "page-container"], ["class", "toast-message", 4, "ngIf"], [1, "page-header"], [1, "header-title"], [1, "fa-solid", "fa-quote-left"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "card-grid", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-box", 4, "ngIf"], [1, "toast-message"], [1, "loading-state"], [1, "fa-solid", "fa-spinner", "fa-spin", "fa-3x"], [1, "empty-state"], [1, "fa-regular", "fa-folder-open"], [1, "btn", "btn-primary", "mt-3", 3, "click"], [1, "card-grid"], ["class", "testimonial-card", 4, "ngFor", "ngForOf"], [1, "testimonial-card"], [1, "fa-solid", "fa-quote-left", "watermark"], [1, "card-content"], [1, "feedback-ar"], [1, "feedback-en"], [1, "rating-stars"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "client-info"], [1, "avatar", 3, "ngStyle"], [1, "client-details"], [1, "job-title"], ["class", "company", 4, "ngIf"], [1, "card-actions"], ["title", "\u062A\u0639\u062F\u064A\u0644", 1, "btn-icon", "edit", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], ["title", "\u062D\u0630\u0641", 1, "btn-icon", "delete", 3, "click"], [1, "fa-solid", "fa-trash-can"], ["class", "fa-solid fa-star", 4, "ngIf"], ["class", "fa-regular fa-star", 4, "ngIf"], [1, "fa-solid", "fa-star"], [1, "fa-regular", "fa-star"], [1, "company"], [1, "modal-backdrop", 3, "click"], [1, "modal-box"], [1, "modal-header"], [1, "btn-close-custom", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col", "form-group"], [1, "text-danger"], ["type", "text", "formControlName", "client_name", 1, "form-control"], ["class", "error-msg", 4, "ngIf"], ["type", "text", "formControlName", "job_title", 1, "form-control"], [1, "form-group"], ["type", "text", "formControlName", "company_name", 1, "form-control"], ["formControlName", "feedback_ar", "rows", "3", 1, "form-control"], ["formControlName", "feedback_en", "rows", "3", "dir", "ltr", 1, "form-control"], [1, "star-selector"], ["class", "fa-star", 3, "fa-solid", "fa-regular", "click", 4, "ngFor", "ngForOf"], ["type", "color", "formControlName", "avatar_color", 1, "form-control", "color-picker"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa-solid fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [1, "error-msg"], [1, "fa-star", 3, "click"], [1, "fa-solid", "fa-spinner", "fa-spin"]], template: function PortfolioTestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PortfolioTestimonialsComponent_div_1_Template, 2, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 | Client Testimonials");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function PortfolioTestimonialsComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "\u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, PortfolioTestimonialsComponent_div_11_Template, 4, 0, "div", 7)(12, PortfolioTestimonialsComponent_div_12_Template, 7, 0, "div", 8)(13, PortfolioTestimonialsComponent_div_13_Template, 2, 1, "div", 9)(14, PortfolioTestimonialsComponent_div_14_Template, 1, 0, "div", 10)(15, PortfolioTestimonialsComponent_div_15_Template, 57, 11, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.infoMessage);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.testimonials.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.testimonials.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--violet);\n}\n.header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid var(--border);\n  color: var(--text);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 0;\n  color: var(--text-2);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n  color: var(--violet-light, var(--violet));\n  opacity: 0.5;\n}\n.card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 24px;\n}\n@media (min-width: 768px) {\n  .card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 24px;\n  position: relative;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.testimonial-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n}\n.watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  font-size: 4rem;\n  opacity: 0.08;\n  color: var(--violet);\n  z-index: 0;\n}\n.card-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  flex-grow: 1;\n  margin-bottom: 24px;\n}\n.feedback-ar[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text);\n  line-height: 1.6;\n  margin-bottom: 8px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.feedback-en[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-2);\n  font-family: "Inter", sans-serif;\n  margin-bottom: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.rating-stars[_ngcontent-%COMP%] {\n  color: var(--amber, #ffc107);\n  display: flex;\n  gap: 4px;\n  font-size: 14px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid var(--border);\n  padding-top: 16px;\n  position: relative;\n  z-index: 1;\n}\n.client-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 20px;\n}\n.client-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.client-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.job-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-2);\n}\n.company[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-2);\n  opacity: 0.8;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-icon.edit[_ngcontent-%COMP%] {\n  background-color: rgba(var(--violet-rgb, 138, 43, 226), 0.1);\n  color: var(--violet);\n}\n.btn-icon.edit[_ngcontent-%COMP%]:hover {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-icon.delete[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: var(--red, #dc3545);\n}\n.btn-icon.delete[_ngcontent-%COMP%]:hover {\n  background-color: var(--red, #dc3545);\n  color: #fff;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 400;\n  backdrop-filter: blur(2px);\n}\n.modal-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 540px;\n  background-color: var(--bg-sidebar);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  z-index: 401;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n}\n.btn-close-custom[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: var(--text-2);\n  cursor: pointer;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.col[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background-color: var(--bg);\n  color: var(--text);\n  font-family: inherit;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--violet);\n}\n.form-control.color-picker[_ngcontent-%COMP%] {\n  padding: 4px;\n  height: 42px;\n  cursor: pointer;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--red, #dc3545);\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: var(--red, #dc3545);\n  font-size: 12px;\n  margin-top: 4px;\n}\n.star-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 24px;\n  color: var(--amber, #ffc107);\n  cursor: pointer;\n  padding: 4px 0;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n}\n.toast-message[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  background-color: var(--bg-card);\n  color: var(--text);\n  padding: 12px 24px;\n  border-radius: 8px;\n  border-left: 4px solid var(--violet);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=portfolio-testimonials.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioTestimonialsComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio-testimonials", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="page-container" dir="rtl">
  <!-- Toast Message -->
  <div class="toast-message" *ngIf="infoMessage">
    {{ infoMessage }}
  </div>

  <!-- Header -->
  <div class="page-header">
    <div class="header-title">
      <i class="fa-solid fa-quote-left"></i>
      <h2>\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 | Client Testimonials</h2>
    </div>
    <button class="btn btn-primary" (click)="openModal()">
      <i class="fa-solid fa-plus"></i>
      <span>\u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A</span>
    </button>
  </div>

  <!-- Loading State -->
  <div class="loading-state" *ngIf="isLoading">
    <i class="fa-solid fa-spinner fa-spin fa-3x"></i>
    <p>\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
  </div>

  <!-- Empty State -->
  <div class="empty-state" *ngIf="!isLoading && testimonials.length === 0">
    <i class="fa-regular fa-folder-open"></i>
    <h3>\u0644\u0627 \u062A\u0648\u062C\u062F \u0622\u0631\u0627\u0621 \u0639\u0645\u0644\u0627\u0621 \u0628\u0639\u062F</h3>
    <button class="btn btn-primary mt-3" (click)="openModal()">
      <i class="fa-solid fa-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A \u062C\u062F\u064A\u062F
    </button>
  </div>

  <!-- Content Grid -->
  <div class="card-grid" *ngIf="!isLoading && testimonials.length > 0">
    <div class="testimonial-card" *ngFor="let t of testimonials">
      <i class="fa-solid fa-quote-left watermark"></i>
      
      <div class="card-content">
        <p class="feedback-ar">{{ getFeedbackAr(t) }}</p>
        <p class="feedback-en">{{ getFeedbackEn(t) }}</p>
        
        <div class="rating-stars">
          <ng-container *ngFor="let isFilled of getStarArray(t.rating)">
            <i class="fa-solid fa-star" *ngIf="isFilled"></i>
            <i class="fa-regular fa-star" *ngIf="!isFilled"></i>
          </ng-container>
        </div>
      </div>

      <div class="card-footer">
        <div class="client-info">
          <div class="avatar" [ngStyle]="{'background-color': t.avatar_color || '#8a2be2'}">
            {{ t.client_name ? t.client_name.charAt(0).toUpperCase() : 'U' }}
          </div>
          <div class="client-details">
            <h4>{{ t.client_name }}</h4>
            <span class="job-title">{{ t.job_title }}</span>
            <span class="company" *ngIf="t.company_name">{{ t.company_name }}</span>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn-icon edit" (click)="openModal(t)" title="\u062A\u0639\u062F\u064A\u0644">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="btn-icon delete" (click)="deleteTestimonial(t.id)" title="\u062D\u0630\u0641">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal-backdrop" *ngIf="showModal" (click)="closeModal()"></div>
  <div class="modal-box" *ngIf="showModal">
    <div class="modal-header">
      <h3>{{ editingId ? '\u062A\u0639\u062F\u064A\u0644 \u0631\u0623\u064A' : '\u0625\u0636\u0627\u0641\u0629 \u0631\u0623\u064A \u062C\u062F\u064A\u062F' }}</h3>
      <button class="btn-close-custom" (click)="closeModal()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    
    <div class="modal-body">
      <form [formGroup]="testimonialForm" (ngSubmit)="saveTestimonial()">
        
        <div class="row">
          <div class="col form-group">
            <label>\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 <span class="text-danger">*</span></label>
            <input type="text" formControlName="client_name" class="form-control">
            <div class="error-msg" *ngIf="testimonialForm.get('client_name')?.touched && testimonialForm.get('client_name')?.invalid">
              \u0645\u0637\u0644\u0648\u0628
            </div>
          </div>
          <div class="col form-group">
            <label>\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A <span class="text-danger">*</span></label>
            <input type="text" formControlName="job_title" class="form-control">
            <div class="error-msg" *ngIf="testimonialForm.get('job_title')?.touched && testimonialForm.get('job_title')?.invalid">
              \u0645\u0637\u0644\u0648\u0628
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629</label>
          <input type="text" formControlName="company_name" class="form-control">
        </div>

        <div class="form-group">
          <label>\u0631\u0623\u064A \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 <span class="text-danger">*</span></label>
          <textarea formControlName="feedback_ar" class="form-control" rows="3"></textarea>
          <div class="error-msg" *ngIf="testimonialForm.get('feedback_ar')?.touched && testimonialForm.get('feedback_ar')?.invalid">
            \u0645\u0637\u0644\u0648\u0628
          </div>
        </div>

        <div class="form-group">
          <label>Feedback in English <span class="text-danger">*</span></label>
          <textarea formControlName="feedback_en" class="form-control" rows="3" dir="ltr"></textarea>
          <div class="error-msg" *ngIf="testimonialForm.get('feedback_en')?.touched && testimonialForm.get('feedback_en')?.invalid">
            \u0645\u0637\u0644\u0648\u0628
          </div>
        </div>

        <div class="row">
          <div class="col form-group">
            <label>\u0627\u0644\u062A\u0642\u064A\u064A\u0645</label>
            <div class="star-selector">
              <i *ngFor="let i of [1,2,3,4,5]" 
                 [class.fa-solid]="i <= testimonialForm.get('rating')?.value"
                 [class.fa-regular]="i > testimonialForm.get('rating')?.value"
                 class="fa-star"
                 (click)="setRating(i)">
              </i>
            </div>
          </div>
          <div class="col form-group">
            <label>\u0644\u0648\u0646 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0645\u0632\u064A\u0629</label>
            <input type="color" formControlName="avatar_color" class="form-control color-picker">
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
`, styles: ['/* src/app/components/portfolio/testimonials/portfolio-testimonials.component.css */\n.page-container {\n  padding: 24px;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-title i {\n  font-size: 24px;\n  color: var(--violet);\n}\n.header-title h2 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n.btn-primary {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-primary:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-secondary {\n  background-color: transparent;\n  border: 1px solid var(--border);\n  color: var(--text);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 0;\n  color: var(--text-2);\n}\n.empty-state i {\n  font-size: 64px;\n  margin-bottom: 16px;\n  color: var(--violet-light, var(--violet));\n  opacity: 0.5;\n}\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 24px;\n}\n@media (min-width: 768px) {\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.testimonial-card {\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 24px;\n  position: relative;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.testimonial-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n}\n.watermark {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  font-size: 4rem;\n  opacity: 0.08;\n  color: var(--violet);\n  z-index: 0;\n}\n.card-content {\n  position: relative;\n  z-index: 1;\n  flex-grow: 1;\n  margin-bottom: 24px;\n}\n.feedback-ar {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text);\n  line-height: 1.6;\n  margin-bottom: 8px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.feedback-en {\n  font-size: 14px;\n  color: var(--text-2);\n  font-family: "Inter", sans-serif;\n  margin-bottom: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.rating-stars {\n  color: var(--amber, #ffc107);\n  display: flex;\n  gap: 4px;\n  font-size: 14px;\n}\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid var(--border);\n  padding-top: 16px;\n  position: relative;\n  z-index: 1;\n}\n.client-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 20px;\n}\n.client-details {\n  display: flex;\n  flex-direction: column;\n}\n.client-details h4 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.job-title {\n  font-size: 13px;\n  color: var(--text-2);\n}\n.company {\n  font-size: 12px;\n  color: var(--text-2);\n  opacity: 0.8;\n}\n.card-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-icon.edit {\n  background-color: rgba(var(--violet-rgb, 138, 43, 226), 0.1);\n  color: var(--violet);\n}\n.btn-icon.edit:hover {\n  background-color: var(--violet);\n  color: #fff;\n}\n.btn-icon.delete {\n  background-color: rgba(220, 53, 69, 0.1);\n  color: var(--red, #dc3545);\n}\n.btn-icon.delete:hover {\n  background-color: var(--red, #dc3545);\n  color: #fff;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 400;\n  backdrop-filter: blur(2px);\n}\n.modal-box {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 540px;\n  background-color: var(--bg-sidebar);\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  z-index: 401;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n}\n.btn-close-custom {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: var(--text-2);\n  cursor: pointer;\n}\n.modal-body {\n  padding: 24px;\n}\n.row {\n  display: flex;\n  gap: 16px;\n}\n.col {\n  flex: 1;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background-color: var(--bg);\n  color: var(--text);\n  font-family: inherit;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--violet);\n}\n.form-control.color-picker {\n  padding: 4px;\n  height: 42px;\n  cursor: pointer;\n}\n.text-danger {\n  color: var(--red, #dc3545);\n}\n.error-msg {\n  color: var(--red, #dc3545);\n  font-size: 12px;\n  margin-top: 4px;\n}\n.star-selector {\n  display: flex;\n  gap: 8px;\n  font-size: 24px;\n  color: var(--amber, #ffc107);\n  cursor: pointer;\n  padding: 4px 0;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n}\n.toast-message {\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  background-color: var(--bg-card);\n  color: var(--text);\n  padding: 12px 24px;\n  border-radius: 8px;\n  border-left: 4px solid var(--violet);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  animation: slideUp 0.3s ease;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=portfolio-testimonials.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioTestimonialsComponent, { className: "PortfolioTestimonialsComponent", filePath: "src/app/components/portfolio/testimonials/portfolio-testimonials.component.ts", lineNumber: 14 });
})();
export {
  PortfolioTestimonialsComponent
};
//# sourceMappingURL=chunk-XQUTARDU.js.map
