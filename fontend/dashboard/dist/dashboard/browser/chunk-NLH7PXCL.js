import {
  ToastService
} from "./chunk-ERZASVQQ.js";
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
  Router,
  RouterLink,
  RouterModule
} from "./chunk-JBOK22UG.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZYG2ULWX.js";

// src/app/components/login/login.component.ts
function LoginComponent_button_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function LoginComponent_button_68_Template_button_click_0_listener() {
      const acc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.quickFill(acc_r2));
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const acc_r2 = ctx.$implicit;
    \u0275\u0275property("title", acc_r2.email);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", acc_r2.color + "20")("color", acc_r2.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", acc_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(acc_r2.label);
  }
}
function LoginComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F/\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_small_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 69);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628 ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_small_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 69);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2, " \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629 ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u062F\u062E\u0648\u0644 ");
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2, " \u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0648\u0627\u0644\u062F\u062E\u0648\u0644...");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  apiService = inject(ApiService);
  toastService = inject(ToastService);
  loginForm;
  loading = false;
  showError = false;
  showPassword = false;
  demoAccounts = [
    { role: "super_admin", label: "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645 (\u0623\u062F\u0645\u0646)", email: "admin@mediaglow.com", pass: "password", icon: "fa-user-shield", color: "#818cf8", badge: "Super Admin" },
    { role: "employee", label: "\u0635\u0627\u0646\u0639 \u0645\u062D\u062A\u0648\u0649", email: "creator@mediaglow.com", pass: "password", icon: "fa-pen-nib", color: "#34d399", badge: "Creator" },
    { role: "client", label: "\u0639\u0645\u064A\u0644 VIP", email: "client@mediaglow.com", pass: "password", icon: "fa-building", color: "#38bdf8", badge: "Client" }
  ];
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["admin@mediaglow.com", Validators.required],
      password: ["password", Validators.required],
      rememberMe: [true]
    });
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  quickFill(acc) {
    this.loginForm.patchValue({
      email: acc.email,
      password: acc.pass
    });
    this.onSubmit();
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.toastService.warning("\u064A\u0631\u062C\u0649 \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      return;
    }
    this.loading = true;
    this.showError = false;
    const val = this.loginForm.value;
    this.apiService.login(val.email, val.password).subscribe({
      next: (res) => {
        this.loading = false;
        if (res && res.success) {
          this.toastService.success(`\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0645\u062C\u062F\u062F\u0627\u064B ${res.user?.name || ""}!`, "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D");
          localStorage.setItem("mediaglow_client_token", res.token || "demo_token_123");
          const user = res.user;
          if (user) {
            localStorage.setItem("mediaglow_user", JSON.stringify(user));
          }
          if (user && user.role === "client") {
            this.router.navigate(["/client-portal"]);
          } else if (user && user.role === "employee") {
            this.router.navigate(["/tasks"]);
          } else {
            this.router.navigate(["/dashboard"]);
          }
        } else {
          this.showError = true;
          this.toastService.error("\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
        }
      },
      error: (err) => {
        this.loading = false;
        this.showError = true;
        this.toastService.error(err.error?.message || "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 105, vars: 15, consts: [["dir", "rtl", 1, "login-wrapper"], [1, "login-visual-panel"], [1, "glow-bg-orb"], [1, "glow-bg-orb-2"], [1, "grid-overlay"], [1, "visual-content"], ["routerLink", "/", 1, "brand-logo"], [1, "logo-badge"], [1, "fa-solid", "fa-sparkles", "text-brand-gradient"], [1, "logo-text"], [1, "hero-text-box"], [1, "badge-pill"], [1, "live-dot"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-subtitle"], [1, "stats-row"], [1, "stat-box"], [1, "stat-icon-wrap", "violet"], [1, "fa-solid", "fa-bolt"], [1, "stat-val"], [1, "stat-lbl"], [1, "stat-icon-wrap", "cyan"], [1, "fa-solid", "fa-credit-card"], [1, "stat-icon-wrap", "emerald"], [1, "fa-solid", "fa-shield-halved"], [1, "visual-footer"], [1, "login-form-panel"], [1, "form-container", "glass-card"], [1, "form-header"], [1, "eyebrow-line"], [1, "dot"], [1, "subtitle-text"], [1, "demo-quick-section"], [1, "section-tag"], [1, "fa-solid", "fa-bolt", "text-brand"], [1, "quick-chips-grid"], ["type", "button", "class", "demo-chip", 3, "title", "click", 4, "ngFor", "ngForOf"], ["class", "error-alert-banner", 4, "ngIf"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "emailInput"], [1, "required"], [1, "input-wrapper"], [1, "fa-solid", "fa-user", "input-icon"], ["id", "emailInput", "type", "text", "pInputText", "", "formControlName", "email", "placeholder", "010xxxxxxx \u0623\u0648 name@mediaglow.com", "autocomplete", "username", 1, "form-control"], ["class", "field-error-msg", 4, "ngIf"], [1, "label-row"], ["for", "passwordInput"], [1, "input-wrapper", "password-input"], [1, "fa-solid", "fa-lock", "input-icon"], ["id", "passwordInput", "pInputText", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "form-control", 3, "type"], ["type", "button", 1, "eye-toggle-btn", 3, "click", "title"], [1, "fa-solid", 3, "ngClass"], [1, "remember-row"], [1, "custom-checkbox"], ["type", "checkbox", "formControlName", "rememberMe"], [1, "checkmark"], ["type", "submit", 1, "btn-submit-login", 3, "disabled"], [4, "ngIf"], [1, "form-footer-nav"], ["routerLink", "/", 1, "back-home-link"], [1, "fa-solid", "fa-house"], ["type", "button", 1, "demo-chip", 3, "click", "title"], [1, "demo-chip-icon"], [1, "demo-chip-text"], [1, "demo-chip-label"], [1, "error-alert-banner"], [1, "fa-solid", "fa-circle-exclamation"], [1, "field-error-msg"], [1, "fa-solid", "fa-arrow-left", "icon-arrow"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "a", 6)(7, "div", 7);
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "span");
      \u0275\u0275text(11, "Media Glow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "small");
      \u0275\u0275text(13, "Agency CRM & ERP");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
      \u0275\u0275element(16, "span", 12);
      \u0275\u0275text(17, " \u0645\u0646\u0635\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629 2.0 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h1", 13);
      \u0275\u0275text(19, " \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0625\u062F\u0627\u0631\u064A ");
      \u0275\u0275element(20, "br");
      \u0275\u0275elementStart(21, "span", 14);
      \u0275\u0275text(22, "\u0648\u0627\u0644\u0631\u0628\u0637 \u0627\u0644\u0645\u0627\u0644\u064A \u0627\u0644\u0634\u0627\u0645\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p", 15);
      \u0275\u0275text(24, " \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0635\u0641\u0642\u0627\u062A\u060C \u0627\u0644\u0645\u0647\u0627\u0645\u060C \u0627\u0644\u0645\u0631\u0627\u0643\u0632\u060C \u0627\u0644\u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u064A\u0643\u0629\u060C \u0648\u0628\u0646\u0648\u062F \u0627\u0644\u0639\u0647\u062F\u0629 \u0641\u064A \u0628\u064A\u0626\u0629 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0629 \u0645\u0648\u062D\u062F\u0629. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18);
      \u0275\u0275element(28, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "span", 20);
      \u0275\u0275text(31, "+100%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 21);
      \u0275\u0275text(33, "\u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0648\u0645\u0631\u0628\u0648\u0637 \u0628\u0627\u0644\u0643\u0627\u0645\u0644");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 17)(35, "div", 22);
      \u0275\u0275element(36, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div")(38, "span", 20);
      \u0275\u0275text(39, "4 \u0637\u0631\u0642");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 21);
      \u0275\u0275text(41, "\u062A\u062D\u0635\u064A\u0644 \u0645\u0627\u0644\u064A \u0648\u0623\u0642\u0633\u0627\u0637");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 17)(43, "div", 24);
      \u0275\u0275element(44, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div")(46, "span", 20);
      \u0275\u0275text(47, "RBAC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 21);
      \u0275\u0275text(49, "\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0623\u062F\u0648\u0627\u0631 \u0645\u062D\u0643\u0645\u0629");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 26)(51, "small");
      \u0275\u0275text(52, "\xA9 2026 Media Glow Agency. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 27)(54, "div", 28)(55, "div", 29)(56, "div", 30);
      \u0275\u0275element(57, "span", 31);
      \u0275\u0275text(58, " \u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0645\u062C\u062F\u062F\u0627\u064B ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h2");
      \u0275\u0275text(60, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0646\u0638\u0627\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p", 32);
      \u0275\u0275text(62, "\u0623\u062F\u062E\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0623\u0648 \u0627\u062E\u062A\u0631 \u062D\u0633\u0627\u0628 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639 \u0644\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 33)(64, "span", 34);
      \u0275\u0275element(65, "i", 35);
      \u0275\u0275text(66, " \u062F\u062E\u0648\u0644 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 36);
      \u0275\u0275template(68, LoginComponent_button_68_Template, 6, 7, "button", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(69, LoginComponent_div_69_Template, 4, 0, "div", 38);
      \u0275\u0275elementStart(70, "form", 39);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_70_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(71, "div", 40)(72, "label", 41);
      \u0275\u0275text(73, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 ");
      \u0275\u0275elementStart(74, "span", 42);
      \u0275\u0275text(75, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 43);
      \u0275\u0275element(77, "i", 44)(78, "input", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, LoginComponent_small_79_Template, 3, 0, "small", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 40)(81, "div", 47)(82, "label", 48);
      \u0275\u0275text(83, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 ");
      \u0275\u0275elementStart(84, "span", 42);
      \u0275\u0275text(85, "*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 49);
      \u0275\u0275element(87, "i", 50)(88, "input", 51);
      \u0275\u0275elementStart(89, "button", 52);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_89_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275element(90, "i", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(91, LoginComponent_small_91_Template, 3, 0, "small", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 54)(93, "label", 55);
      \u0275\u0275element(94, "input", 56)(95, "span", 57);
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97, "\u062A\u0630\u0643\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "button", 58);
      \u0275\u0275template(99, LoginComponent_span_99_Template, 3, 0, "span", 59)(100, LoginComponent_span_100_Template, 3, 0, "span", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 60)(102, "a", 61);
      \u0275\u0275element(103, "i", 62);
      \u0275\u0275text(104, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_9_0;
      \u0275\u0275advance(68);
      \u0275\u0275property("ngForOf", ctx.demoAccounts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.touched) || ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.dirty)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.touched) || ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.dirty)));
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched) || ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.dirty)));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.showPassword ? "\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.showPassword ? "fa-eye-slash" : "fa-eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.touched) || ((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.dirty)));
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, InputTextModule, InputText], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  --brand-violet: #6366f1;\n  --brand-purple: #7c3aed;\n  --brand-cyan: #06b6d4;\n  --brand-teal: #0891b2;\n  --brand-emerald: #10b981;\n  --bg-dark: #080914;\n  --card-bg: rgba(14, 16, 32, 0.82);\n  --border-glass: rgba(255, 255, 255, 0.12);\n  --text-muted: #94a3b8;\n  height: 100vh;\n  max-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.1fr 1fr;\n  background: var(--bg-dark);\n  font-family:\n    "Cairo",\n    "Inter",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  color: #ffffff;\n  overflow: hidden;\n  position: relative;\n}\n.login-visual-panel[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(99, 102, 241, 0.18) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 90% 80%,\n      rgba(6, 182, 212, 0.15) 0%,\n      transparent 50%),\n    linear-gradient(\n      155deg,\n      #05060f 0%,\n      #0d0f22 100%);\n  padding: 44px 52px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  border-left: 1px solid rgba(255, 255, 255, 0.08);\n}\n.glow-bg-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n  right: -100px;\n  width: 460px;\n  height: 460px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.3) 0%,\n      transparent 70%);\n  filter: blur(60px);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_floatOrb 8s infinite alternate ease-in-out;\n}\n.glow-bg-orb-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -120px;\n  left: -100px;\n  width: 460px;\n  height: 460px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(6, 182, 212, 0.22) 0%,\n      transparent 70%);\n  filter: blur(70px);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_floatOrb 10s infinite alternate-reverse ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_floatOrb {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  100% {\n    transform: translate(20px, 30px) scale(1.08);\n  }\n}\n.grid-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);\n  background-size: 28px 28px;\n  pointer-events: none;\n  opacity: 0.6;\n}\n.visual-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  text-decoration: none;\n  width: fit-content;\n}\n.logo-badge[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.2),\n      rgba(6, 182, 212, 0.2));\n  border: 1px solid rgba(99, 102, 241, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);\n  backdrop-filter: blur(8px);\n}\n.text-brand-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a5b4fc,\n      #67e8f9);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #ffffff;\n  line-height: 1.1;\n  letter-spacing: -0.4px;\n}\n.logo-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #818cf8;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.hero-text-box[_ngcontent-%COMP%] {\n  margin: auto 0;\n  max-width: 500px;\n}\n.badge-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px solid rgba(99, 102, 241, 0.28);\n  padding: 6px 16px;\n  border-radius: 100px;\n  font-size: 0.78rem;\n  color: #a5b4fc;\n  font-weight: 700;\n  margin-bottom: 20px;\n  backdrop-filter: blur(10px);\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #34d399;\n  box-shadow: 0 0 10px #34d399;\n  animation: _ngcontent-%COMP%_pulseDot 2s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_pulseDot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.4;\n    transform: scale(0.85);\n  }\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.35rem;\n  font-weight: 900;\n  line-height: 1.25;\n  margin-bottom: 14px;\n  letter-spacing: -0.8px;\n  color: #ffffff;\n}\n.gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #a5b4fc 50%,\n      #67e8f9 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  line-height: 1.65;\n  margin-bottom: 28px;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.stat-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.035);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 14px 12px;\n  border-radius: 14px;\n  backdrop-filter: blur(12px);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  transition: all 0.25s ease;\n}\n.stat-box[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateY(-2px);\n}\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.stat-icon-wrap.violet[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.18);\n  color: #a5b4fc;\n}\n.stat-icon-wrap.cyan[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.18);\n  color: #67e8f9;\n}\n.stat-icon-wrap.emerald[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.18);\n  color: #6ee7b7;\n}\n.stat-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1.2;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n  line-height: 1.2;\n}\n.visual-footer[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.78rem;\n}\n.login-form-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 28px 36px;\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n}\n.glass-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-glass);\n  border-radius: 24px;\n  padding: 34px 38px;\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;\n  position: relative;\n  z-index: 2;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.eyebrow-line[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #818cf8;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 6px;\n}\n.eyebrow-line[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #6366f1;\n  box-shadow: 0 0 8px #6366f1;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n  font-weight: 900;\n  color: #ffffff;\n  margin-bottom: 6px;\n  letter-spacing: -0.4px;\n}\n.subtitle-text[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n.demo-quick-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.025);\n  border: 1px dashed rgba(99, 102, 241, 0.35);\n  border-radius: 14px;\n  padding: 12px 14px;\n  margin-bottom: 20px;\n}\n.section-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 10px;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #818cf8;\n}\n.quick-chips-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.demo-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 8px 10px;\n  border-radius: 10px;\n  color: #ffffff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.22s ease;\n  outline: none;\n  font-family: inherit;\n}\n.demo-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.4);\n  transform: translateY(-1.5px);\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.2);\n}\n.demo-chip-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  flex-shrink: 0;\n}\n.demo-chip-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.demo-chip-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #f1f5f9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.error-alert-banner[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  color: #f87171;\n  padding: 11px 16px;\n  border-radius: 12px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n  animation: _ngcontent-%COMP%_shakeAlert 0.3s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_shakeAlert {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(4px);\n  }\n  75% {\n    transform: translateX(-4px);\n  }\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin-bottom: 7px;\n}\n.required[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n  font-size: 0.95rem;\n  pointer-events: none;\n  z-index: 3;\n  transition: color 0.2s ease;\n}\n.login-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%], \n.login-wrapper[_ngcontent-%COMP%]   input.form-control.p-inputtext[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 46px !important;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  padding-right: 44px !important;\n  padding-left: 14px !important;\n  background: rgba(255, 255, 255, 0.04) !important;\n  border: 1px solid rgba(255, 255, 255, 0.12) !important;\n  border-radius: 12px !important;\n  color: #ffffff !important;\n  font-size: 0.88rem !important;\n  font-family: inherit !important;\n  outline: none !important;\n  transition: all 0.22s ease !important;\n}\n.login-wrapper[_ngcontent-%COMP%]   .input-wrapper.password-input[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%], \n.login-wrapper[_ngcontent-%COMP%]   .input-wrapper.password-input[_ngcontent-%COMP%]   input.form-control.p-inputtext[_ngcontent-%COMP%] {\n  padding-left: 44px !important;\n}\n.login-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:focus, \n.login-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input.form-control.p-inputtext[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1 !important;\n  background: rgba(99, 102, 241, 0.08) !important;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25) !important;\n}\n.login-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]:focus-within   .input-icon[_ngcontent-%COMP%] {\n  color: #818cf8;\n}\n.eye-toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 0.92rem;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 3;\n  transition: color 0.2s ease;\n}\n.eye-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #a5b4fc;\n}\n.remember-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -2px;\n}\n.custom-checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checkmark[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.checkmark[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 4px;\n  height: 8px;\n  border: solid #ffffff;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg) translate(-0.5px, -0.5px);\n  display: none;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background: #6366f1;\n  border-color: #6366f1;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.4);\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]::after {\n  display: block;\n}\n.btn-submit-login[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  border: none;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 50%,\n      #06b6d4 100%);\n  color: #ffffff;\n  font-size: 0.92rem;\n  font-weight: 800;\n  font-family: inherit;\n  cursor: pointer;\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.35);\n  transition: all 0.25s ease;\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.btn-submit-login[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 32px rgba(99, 102, 241, 0.5);\n  filter: brightness(1.08);\n}\n.btn-submit-login[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.icon-arrow[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  transition: transform 0.2s ease;\n}\n.btn-submit-login[_ngcontent-%COMP%]:hover   .icon-arrow[_ngcontent-%COMP%] {\n  transform: translateX(-4px);\n}\n.form-footer-nav[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 14px;\n}\n.back-home-link[_ngcontent-%COMP%] {\n  color: #818cf8;\n  text-decoration: none;\n  font-size: 0.82rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  transition: color 0.2s ease;\n}\n.back-home-link[_ngcontent-%COMP%]:hover {\n  color: #a5b4fc;\n}\n@media (max-width: 992px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .login-visual-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-form-panel[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow-y: auto;\n    padding: 20px;\n  }\n  .glass-card[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, RouterModule, ReactiveFormsModule, InputTextModule], template: `<div class="login-wrapper" dir="rtl">
  
  <!-- LEFT: CINEMATIC VISUAL PANEL -->
  <div class="login-visual-panel">
    <div class="glow-bg-orb"></div>
    <div class="glow-bg-orb-2"></div>
    <div class="grid-overlay"></div>

    <div class="visual-content">
      <!-- Top Brand Logo -->
      <a routerLink="/" class="brand-logo">
        <div class="logo-badge">
          <i class="fa-solid fa-sparkles text-brand-gradient"></i>
        </div>
        <div class="logo-text">
          <span>Media Glow</span>
          <small>Agency CRM & ERP</small>
        </div>
      </a>

      <!-- Center Hero Message -->
      <div class="hero-text-box">
        <div class="badge-pill">
          <span class="live-dot"></span> \u0645\u0646\u0635\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629 2.0
        </div>
        <h1 class="hero-title">
          \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0625\u062F\u0627\u0631\u064A <br />
          <span class="gradient-text">\u0648\u0627\u0644\u0631\u0628\u0637 \u0627\u0644\u0645\u0627\u0644\u064A \u0627\u0644\u0634\u0627\u0645\u0644</span>
        </h1>
        <p class="hero-subtitle">
          \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0635\u0641\u0642\u0627\u062A\u060C \u0627\u0644\u0645\u0647\u0627\u0645\u060C \u0627\u0644\u0645\u0631\u0627\u0643\u0632\u060C \u0627\u0644\u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0631\u064A\u0643\u0629\u060C \u0648\u0628\u0646\u0648\u062F \u0627\u0644\u0639\u0647\u062F\u0629 \u0641\u064A \u0628\u064A\u0626\u0629 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0629 \u0645\u0648\u062D\u062F\u0629.
        </p>

        <!-- Feature Metric Chips -->
        <div class="stats-row">
          <div class="stat-box">
            <div class="stat-icon-wrap violet"><i class="fa-solid fa-bolt"></i></div>
            <div>
              <span class="stat-val">+100%</span>
              <span class="stat-lbl">\u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0648\u0645\u0631\u0628\u0648\u0637 \u0628\u0627\u0644\u0643\u0627\u0645\u0644</span>
            </div>
          </div>
          <div class="stat-box">
            <div class="stat-icon-wrap cyan"><i class="fa-solid fa-credit-card"></i></div>
            <div>
              <span class="stat-val">4 \u0637\u0631\u0642</span>
              <span class="stat-lbl">\u062A\u062D\u0635\u064A\u0644 \u0645\u0627\u0644\u064A \u0648\u0623\u0642\u0633\u0627\u0637</span>
            </div>
          </div>
          <div class="stat-box">
            <div class="stat-icon-wrap emerald"><i class="fa-solid fa-shield-halved"></i></div>
            <div>
              <span class="stat-val">RBAC</span>
              <span class="stat-lbl">\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0623\u062F\u0648\u0627\u0631 \u0645\u062D\u0643\u0645\u0629</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="visual-footer">
        <small>\xA9 2026 Media Glow Agency. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.</small>
      </div>
    </div>
  </div>

  <!-- RIGHT: PREMIUM GLASS FORM PANEL -->
  <div class="login-form-panel">
    <div class="form-container glass-card">

      <!-- Form Header -->
      <div class="form-header">
        <div class="eyebrow-line">
          <span class="dot"></span> \u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0645\u062C\u062F\u062F\u0627\u064B
        </div>
        <h2>\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0646\u0638\u0627\u0645</h2>
        <p class="subtitle-text">\u0623\u062F\u062E\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0623\u0648 \u0627\u062E\u062A\u0631 \u062D\u0633\u0627\u0628 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639 \u0644\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629</p>
      </div>

      <!-- Quick Fill Demo Accounts -->
      <div class="demo-quick-section">
        <span class="section-tag">
          <i class="fa-solid fa-bolt text-brand"></i> \u062F\u062E\u0648\u0644 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629:
        </span>
        <div class="quick-chips-grid">
          <button 
            type="button" 
            class="demo-chip" 
            *ngFor="let acc of demoAccounts" 
            (click)="quickFill(acc)"
            [title]="acc.email"
          >
            <div class="demo-chip-icon" [style.background]="acc.color + '20'" [style.color]="acc.color">
              <i class="fa-solid" [ngClass]="acc.icon"></i>
            </div>
            <div class="demo-chip-text">
              <span class="demo-chip-label">{{ acc.label }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Error Alert Banner -->
      <div class="error-alert-banner" *ngIf="showError">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F/\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.</span>
      </div>

      <!-- Login Form -->
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
        
        <!-- Email or Phone Input -->
        <div class="form-group">
          <label for="emailInput">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 <span class="required">*</span></label>
          <div class="input-wrapper">
            <i class="fa-solid fa-user input-icon"></i>
            <input 
              id="emailInput"
              type="text" 
              pInputText
              formControlName="email" 
              placeholder="010xxxxxxx \u0623\u0648 name@mediaglow.com" 
              class="form-control"
              [class.is-invalid]="loginForm.get('email')?.invalid && (loginForm.get('email')?.touched || loginForm.get('email')?.dirty)"
              autocomplete="username"
            />
          </div>
          <small class="field-error-msg" *ngIf="loginForm.get('email')?.invalid && (loginForm.get('email')?.touched || loginForm.get('email')?.dirty)">
            <i class="fa-solid fa-circle-exclamation"></i> \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628
          </small>
        </div>

        <!-- Password Input -->
        <div class="form-group">
          <div class="label-row">
            <label for="passwordInput">\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 <span class="required">*</span></label>
          </div>
          <div class="input-wrapper password-input">
            <i class="fa-solid fa-lock input-icon"></i>
            <input 
              id="passwordInput"
              [type]="showPassword ? 'text' : 'password'" 
              pInputText
              formControlName="password" 
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" 
              class="form-control"
              [class.is-invalid]="loginForm.get('password')?.invalid && (loginForm.get('password')?.touched || loginForm.get('password')?.dirty)"
              autocomplete="current-password"
            />
            <button type="button" class="eye-toggle-btn" (click)="togglePassword()" [title]="showPassword ? '\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631' : '\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631'">
              <i class="fa-solid" [ngClass]="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
            </button>
          </div>
          <small class="field-error-msg" *ngIf="loginForm.get('password')?.invalid && (loginForm.get('password')?.touched || loginForm.get('password')?.dirty)">
            <i class="fa-solid fa-circle-exclamation"></i> \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629
          </small>
        </div>

        <!-- Remember Me & Options -->
        <div class="remember-row">
          <label class="custom-checkbox">
            <input type="checkbox" formControlName="rememberMe" />
            <span class="checkmark"></span>
            <span>\u062A\u0630\u0643\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644</span>
          </label>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn-submit-login" [disabled]="loginForm.invalid || loading">
          <span *ngIf="!loading">\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u062F\u062E\u0648\u0644 <i class="fa-solid fa-arrow-left icon-arrow"></i></span>
          <span *ngIf="loading"><i class="fa-solid fa-circle-notch fa-spin"></i> \u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0648\u0627\u0644\u062F\u062E\u0648\u0644...</span>
        </button>

      </form>

      <div class="form-footer-nav">
        <a routerLink="/" class="back-home-link"><i class="fa-solid fa-house"></i> \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</a>
      </div>

    </div>
  </div>

</div>

`, styles: ['/* src/app/components/login/login.component.css */\n:host {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n}\n.login-wrapper {\n  --brand-violet: #6366f1;\n  --brand-purple: #7c3aed;\n  --brand-cyan: #06b6d4;\n  --brand-teal: #0891b2;\n  --brand-emerald: #10b981;\n  --bg-dark: #080914;\n  --card-bg: rgba(14, 16, 32, 0.82);\n  --border-glass: rgba(255, 255, 255, 0.12);\n  --text-muted: #94a3b8;\n  height: 100vh;\n  max-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.1fr 1fr;\n  background: var(--bg-dark);\n  font-family:\n    "Cairo",\n    "Inter",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  color: #ffffff;\n  overflow: hidden;\n  position: relative;\n}\n.login-visual-panel {\n  position: relative;\n  background:\n    radial-gradient(\n      circle at 10% 20%,\n      rgba(99, 102, 241, 0.18) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 90% 80%,\n      rgba(6, 182, 212, 0.15) 0%,\n      transparent 50%),\n    linear-gradient(\n      155deg,\n      #05060f 0%,\n      #0d0f22 100%);\n  padding: 44px 52px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  border-left: 1px solid rgba(255, 255, 255, 0.08);\n}\n.glow-bg-orb {\n  position: absolute;\n  top: -100px;\n  right: -100px;\n  width: 460px;\n  height: 460px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.3) 0%,\n      transparent 70%);\n  filter: blur(60px);\n  pointer-events: none;\n  animation: floatOrb 8s infinite alternate ease-in-out;\n}\n.glow-bg-orb-2 {\n  position: absolute;\n  bottom: -120px;\n  left: -100px;\n  width: 460px;\n  height: 460px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(6, 182, 212, 0.22) 0%,\n      transparent 70%);\n  filter: blur(70px);\n  pointer-events: none;\n  animation: floatOrb 10s infinite alternate-reverse ease-in-out;\n}\n@keyframes floatOrb {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  100% {\n    transform: translate(20px, 30px) scale(1.08);\n  }\n}\n.grid-overlay {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);\n  background-size: 28px 28px;\n  pointer-events: none;\n  opacity: 0.6;\n}\n.visual-content {\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.brand-logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  text-decoration: none;\n  width: fit-content;\n}\n.logo-badge {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.2),\n      rgba(6, 182, 212, 0.2));\n  border: 1px solid rgba(99, 102, 241, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);\n  backdrop-filter: blur(8px);\n}\n.text-brand-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #a5b4fc,\n      #67e8f9);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.logo-text span {\n  display: block;\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #ffffff;\n  line-height: 1.1;\n  letter-spacing: -0.4px;\n}\n.logo-text small {\n  font-size: 0.74rem;\n  color: #818cf8;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.hero-text-box {\n  margin: auto 0;\n  max-width: 500px;\n}\n.badge-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px solid rgba(99, 102, 241, 0.28);\n  padding: 6px 16px;\n  border-radius: 100px;\n  font-size: 0.78rem;\n  color: #a5b4fc;\n  font-weight: 700;\n  margin-bottom: 20px;\n  backdrop-filter: blur(10px);\n}\n.live-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #34d399;\n  box-shadow: 0 0 10px #34d399;\n  animation: pulseDot 2s infinite ease-in-out;\n}\n@keyframes pulseDot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.4;\n    transform: scale(0.85);\n  }\n}\n.hero-title {\n  font-size: 2.35rem;\n  font-weight: 900;\n  line-height: 1.25;\n  margin-bottom: 14px;\n  letter-spacing: -0.8px;\n  color: #ffffff;\n}\n.gradient-text {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #a5b4fc 50%,\n      #67e8f9 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-subtitle {\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  line-height: 1.65;\n  margin-bottom: 28px;\n}\n.stats-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.stat-box {\n  background: rgba(255, 255, 255, 0.035);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 14px 12px;\n  border-radius: 14px;\n  backdrop-filter: blur(12px);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  transition: all 0.25s ease;\n}\n.stat-box:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(99, 102, 241, 0.3);\n  transform: translateY(-2px);\n}\n.stat-icon-wrap {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.stat-icon-wrap.violet {\n  background: rgba(99, 102, 241, 0.18);\n  color: #a5b4fc;\n}\n.stat-icon-wrap.cyan {\n  background: rgba(6, 182, 212, 0.18);\n  color: #67e8f9;\n}\n.stat-icon-wrap.emerald {\n  background: rgba(16, 185, 129, 0.18);\n  color: #6ee7b7;\n}\n.stat-val {\n  display: block;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1.2;\n}\n.stat-lbl {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n  line-height: 1.2;\n}\n.visual-footer {\n  color: #64748b;\n  font-size: 0.78rem;\n}\n.login-form-panel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 28px 36px;\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n}\n.glass-card {\n  width: 100%;\n  max-width: 450px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-glass);\n  border-radius: 24px;\n  padding: 34px 38px;\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;\n  position: relative;\n  z-index: 2;\n}\n.form-header {\n  margin-bottom: 22px;\n}\n.eyebrow-line {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #818cf8;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 6px;\n}\n.eyebrow-line .dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #6366f1;\n  box-shadow: 0 0 8px #6366f1;\n}\n.form-header h2 {\n  font-size: 1.65rem;\n  font-weight: 900;\n  color: #ffffff;\n  margin-bottom: 6px;\n  letter-spacing: -0.4px;\n}\n.subtitle-text {\n  font-size: 0.83rem;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n.demo-quick-section {\n  background: rgba(255, 255, 255, 0.025);\n  border: 1px dashed rgba(99, 102, 241, 0.35);\n  border-radius: 14px;\n  padding: 12px 14px;\n  margin-bottom: 20px;\n}\n.section-tag {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 10px;\n}\n.text-brand {\n  color: #818cf8;\n}\n.quick-chips-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.demo-chip {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 8px 10px;\n  border-radius: 10px;\n  color: #ffffff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.22s ease;\n  outline: none;\n  font-family: inherit;\n}\n.demo-chip:hover {\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.4);\n  transform: translateY(-1.5px);\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.2);\n}\n.demo-chip-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  flex-shrink: 0;\n}\n.demo-chip-text {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.demo-chip-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #f1f5f9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.error-alert-banner {\n  background: rgba(239, 68, 68, 0.12);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  color: #f87171;\n  padding: 11px 16px;\n  border-radius: 12px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n  animation: shakeAlert 0.3s ease-in-out;\n}\n@keyframes shakeAlert {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(4px);\n  }\n  75% {\n    transform: translateX(-4px);\n  }\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-group label {\n  display: block;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin-bottom: 7px;\n}\n.required {\n  color: #f87171;\n}\n.input-wrapper {\n  position: relative;\n  width: 100%;\n}\n.input-icon {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n  font-size: 0.95rem;\n  pointer-events: none;\n  z-index: 3;\n  transition: color 0.2s ease;\n}\n.login-wrapper .input-wrapper input.form-control,\n.login-wrapper input.form-control.p-inputtext {\n  width: 100% !important;\n  height: 46px !important;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  padding-right: 44px !important;\n  padding-left: 14px !important;\n  background: rgba(255, 255, 255, 0.04) !important;\n  border: 1px solid rgba(255, 255, 255, 0.12) !important;\n  border-radius: 12px !important;\n  color: #ffffff !important;\n  font-size: 0.88rem !important;\n  font-family: inherit !important;\n  outline: none !important;\n  transition: all 0.22s ease !important;\n}\n.login-wrapper .input-wrapper.password-input input.form-control,\n.login-wrapper .input-wrapper.password-input input.form-control.p-inputtext {\n  padding-left: 44px !important;\n}\n.login-wrapper .input-wrapper input.form-control:focus,\n.login-wrapper .input-wrapper input.form-control.p-inputtext:focus {\n  border-color: #6366f1 !important;\n  background: rgba(99, 102, 241, 0.08) !important;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25) !important;\n}\n.login-wrapper .input-wrapper:focus-within .input-icon {\n  color: #818cf8;\n}\n.eye-toggle-btn {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 0.92rem;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 3;\n  transition: color 0.2s ease;\n}\n.eye-toggle-btn:hover {\n  color: #a5b4fc;\n}\n.remember-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -2px;\n}\n.custom-checkbox {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.custom-checkbox input {\n  display: none;\n}\n.checkmark {\n  width: 17px;\n  height: 17px;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.checkmark::after {\n  content: "";\n  width: 4px;\n  height: 8px;\n  border: solid #ffffff;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg) translate(-0.5px, -0.5px);\n  display: none;\n}\n.custom-checkbox input:checked ~ .checkmark {\n  background: #6366f1;\n  border-color: #6366f1;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.4);\n}\n.custom-checkbox input:checked ~ .checkmark::after {\n  display: block;\n}\n.btn-submit-login {\n  width: 100%;\n  height: 48px;\n  border: none;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 50%,\n      #06b6d4 100%);\n  color: #ffffff;\n  font-size: 0.92rem;\n  font-weight: 800;\n  font-family: inherit;\n  cursor: pointer;\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.35);\n  transition: all 0.25s ease;\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.btn-submit-login:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 32px rgba(99, 102, 241, 0.5);\n  filter: brightness(1.08);\n}\n.btn-submit-login:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.icon-arrow {\n  font-size: 0.85rem;\n  transition: transform 0.2s ease;\n}\n.btn-submit-login:hover .icon-arrow {\n  transform: translateX(-4px);\n}\n.form-footer-nav {\n  margin-top: 18px;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 14px;\n}\n.back-home-link {\n  color: #818cf8;\n  text-decoration: none;\n  font-size: 0.82rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  transition: color 0.2s ease;\n}\n.back-home-link:hover {\n  color: #a5b4fc;\n}\n@media (max-width: 992px) {\n  .login-wrapper {\n    grid-template-columns: 1fr;\n  }\n  .login-visual-panel {\n    display: none;\n  }\n  .login-form-panel {\n    height: 100vh;\n    overflow-y: auto;\n    padding: 20px;\n  }\n  .glass-card {\n    padding: 28px 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/login/login.component.ts", lineNumber: 16 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-NLH7PXCL.js.map
