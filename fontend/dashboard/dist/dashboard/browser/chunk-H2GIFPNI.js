import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-TRCV7UC3.js";
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
} from "./chunk-6TEPOG2V.js";
import {
  ApiService
} from "./chunk-VFRQX7SG.js";
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
} from "./chunk-CK3LQYPJ.js";

// src/app/components/login/login.component.ts
function LoginComponent_button_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function LoginComponent_button_59_Template_button_click_0_listener() {
      const acc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.quickFill(acc_r2));
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const acc_r2 = ctx.$implicit;
    \u0275\u0275property("title", acc_r2.email);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", acc_r2.color);
    \u0275\u0275property("ngClass", acc_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r2.label);
  }
}
function LoginComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_span_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u062F\u062E\u0648\u0644 ");
    \u0275\u0275element(2, "i", 56);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275text(2, " \u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0648\u0627\u0644\u062F\u062E\u0648\u0644...");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  apiService = inject(ApiService);
  loginForm;
  loading = false;
  showError = false;
  showPassword = false;
  demoAccounts = [
    { role: "super_admin", label: "\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646", email: "admin@mediaglow.com", pass: "password", icon: "fa-user-shield", color: "#e8620a" },
    { role: "employee", label: "\u0635\u0627\u0646\u0639 \u0645\u062D\u062A\u0648\u0649", email: "creator@mediaglow.com", pass: "password", icon: "fa-pen-nib", color: "#10b981" },
    { role: "client", label: "\u0639\u0645\u064A\u0644 VIP", email: "client@mediaglow.com", pass: "password", icon: "fa-building", color: "#3b82f6" }
  ];
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["admin@mediaglow.com", [Validators.required, Validators.email]],
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
    if (this.loginForm.invalid)
      return;
    this.loading = true;
    this.showError = false;
    const val = this.loginForm.value;
    this.apiService.login(val.email, val.password).subscribe({
      next: (res) => {
        this.loading = false;
        if (res && res.success) {
          localStorage.setItem("mediaglow_client_token", res.token || "demo_token_123");
          if (res.user) {
            localStorage.setItem("mediaglow_user", JSON.stringify(res.user));
          }
          this.router.navigate(["/dashboard"]);
        } else {
          this.showError = true;
        }
      },
      error: () => {
        this.loading = false;
        this.showError = true;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 94, vars: 8, consts: [[1, "login-wrapper"], [1, "login-visual-panel"], [1, "glow-bg-orb"], [1, "glow-bg-orb-2"], [1, "grid-overlay"], [1, "visual-content"], ["routerLink", "/", 1, "brand-logo"], [1, "logo-badge"], [1, "fa-solid", "fa-sparkles", "text-orange"], [1, "logo-text"], [1, "hero-text-box"], [1, "badge-pill"], [1, "live-dot"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-subtitle"], [1, "stats-row"], [1, "stat-box"], [1, "stat-val"], [1, "stat-lbl"], [1, "visual-footer"], [1, "login-form-panel"], [1, "form-container", "glass-card"], [1, "form-header"], [1, "eyebrow-line"], [1, "dot"], [1, "subtitle-text"], [1, "demo-quick-section"], [1, "section-tag"], [1, "fa-solid", "fa-bolt", "text-orange"], [1, "quick-chips-grid"], ["type", "button", "class", "demo-chip", 3, "title", "click", 4, "ngFor", "ngForOf"], ["class", "error-alert-banner", 4, "ngIf"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "required"], [1, "input-wrapper"], [1, "fa-solid", "fa-envelope", "input-icon"], ["type", "email", "formControlName", "email", "placeholder", "name@mediaglow.com", "autocomplete", "email", 1, "form-control"], [1, "label-row"], [1, "fa-solid", "fa-lock", "input-icon"], ["formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "form-control", 3, "type"], ["type", "button", 1, "eye-toggle-btn", 3, "click"], [1, "fa-solid", 3, "ngClass"], [1, "remember-row"], [1, "custom-checkbox"], ["type", "checkbox", "formControlName", "rememberMe"], [1, "checkmark"], ["type", "submit", 1, "btn-submit-login", 3, "disabled"], [4, "ngIf"], [1, "form-footer-nav"], ["routerLink", "/", 1, "back-home-link"], [1, "fa-solid", "fa-house"], ["type", "button", 1, "demo-chip", 3, "click", "title"], [1, "error-alert-banner"], [1, "fa-solid", "fa-circle-exclamation"], [1, "fa-solid", "fa-arrow-left"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]], template: function LoginComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "span", 18);
      \u0275\u0275text(28, "+100%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 19);
      \u0275\u0275text(30, "\u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0648\u0645\u0631\u0628\u0648\u0637 \u0628\u0627\u0644\u0643\u0627\u0645\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "span", 18);
      \u0275\u0275text(33, "4 \u0637\u0631\u0642");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 19);
      \u0275\u0275text(35, "\u062A\u062D\u0635\u064A\u0644 \u0645\u0627\u0644\u064A \u0648\u0623\u0642\u0633\u0627\u0637");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 17)(37, "span", 18);
      \u0275\u0275text(38, "RBAC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 19);
      \u0275\u0275text(40, "\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0623\u062F\u0648\u0627\u0631 \u0645\u062D\u0643\u0645\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 20)(42, "small");
      \u0275\u0275text(43, "\xA9 2026 Media Glow Agency. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 21)(45, "div", 22)(46, "div", 23)(47, "div", 24);
      \u0275\u0275element(48, "span", 25);
      \u0275\u0275text(49, " \u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0645\u062C\u062F\u062F\u0627\u064B ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h2");
      \u0275\u0275text(51, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0646\u0638\u0627\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 26);
      \u0275\u0275text(53, "\u0623\u062F\u062E\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0623\u0648 \u0627\u062E\u062A\u0631 \u062D\u0633\u0627\u0645 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639 \u0644\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 27)(55, "span", 28);
      \u0275\u0275element(56, "i", 29);
      \u0275\u0275text(57, " \u062F\u062E\u0648\u0644 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 30);
      \u0275\u0275template(59, LoginComponent_button_59_Template, 4, 5, "button", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(60, LoginComponent_div_60_Template, 4, 0, "div", 32);
      \u0275\u0275elementStart(61, "form", 33);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_61_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(62, "div", 34)(63, "label");
      \u0275\u0275text(64, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
      \u0275\u0275elementStart(65, "span", 35);
      \u0275\u0275text(66, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 36);
      \u0275\u0275element(68, "i", 37)(69, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 34)(71, "div", 39)(72, "label");
      \u0275\u0275text(73, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 ");
      \u0275\u0275elementStart(74, "span", 35);
      \u0275\u0275text(75, "*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 36);
      \u0275\u0275element(77, "i", 40)(78, "input", 41);
      \u0275\u0275elementStart(79, "button", 42);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_79_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275element(80, "i", 43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "div", 44)(82, "label", 45);
      \u0275\u0275element(83, "input", 46)(84, "span", 47);
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "\u062A\u0630\u0643\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "button", 48);
      \u0275\u0275template(88, LoginComponent_span_88_Template, 3, 0, "span", 49)(89, LoginComponent_span_89_Template, 3, 0, "span", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 50)(91, "a", 51);
      \u0275\u0275element(92, "i", 52);
      \u0275\u0275text(93, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(59);
      \u0275\u0275property("ngForOf", ctx.demoAccounts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(17);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.showPassword ? "fa-eye-slash" : "fa-eye");
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --orange: #e8620a;\n  --orange-light: #ff7a1f;\n  --orange-glow: rgba(232, 98, 10, 0.35);\n  --bg-dark: #09090e;\n  --card-bg: rgba(18, 18, 28, 0.88);\n  --border-glass: rgba(255, 255, 255, 0.12);\n  --text-muted: #8e8e9e;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml[_ngcontent-%COMP%], \nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  background: var(--bg-dark);\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  max-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.1fr 1fr;\n  background: var(--bg-dark);\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: #ffffff;\n  overflow: hidden;\n}\n.login-visual-panel[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #06060a 0%,\n      #12101d 100%);\n  padding: 40px 48px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  border-left: 1px solid rgba(255, 255, 255, 0.08);\n}\n.glow-bg-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      var(--orange-glow) 0%,\n      transparent 70%);\n  filter: blur(50px);\n  pointer-events: none;\n}\n.glow-bg-orb-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -100px;\n  left: -80px;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.18) 0%,\n      transparent 70%);\n  filter: blur(60px);\n  pointer-events: none;\n}\n.grid-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);\n  background-size: 24px 24px;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.visual-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n}\n.logo-badge[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: rgba(232, 98, 10, 0.15);\n  border: 1px solid var(--orange);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n  box-shadow: 0 0 16px var(--orange-glow);\n}\n.logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.1;\n}\n.logo-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: var(--orange-light);\n  font-weight: 600;\n}\n.hero-text-box[_ngcontent-%COMP%] {\n  margin: auto 0;\n  max-width: 480px;\n}\n.badge-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  color: var(--orange-light);\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 8px #10b981;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 900;\n  line-height: 1.2;\n  margin-bottom: 12px;\n}\n.gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      var(--orange-light) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.stat-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 12px;\n  border-radius: 12px;\n  backdrop-filter: blur(10px);\n}\n.stat-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: var(--orange);\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.visual-footer[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.78rem;\n}\n.login-form-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 32px;\n  height: 100vh;\n  overflow: hidden;\n}\n.glass-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-glass);\n  border-radius: 20px;\n  padding: 32px 36px;\n  backdrop-filter: blur(16px);\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5);\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.eyebrow-line[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--orange-light);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.eyebrow-line[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--orange);\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.subtitle-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n.demo-quick-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px dashed rgba(232, 98, 10, 0.28);\n  border-radius: 12px;\n  padding: 10px 12px;\n  margin-bottom: 18px;\n}\n.section-tag[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.quick-chips-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n.demo-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 6px 8px;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 0.74rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.2s;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.demo-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(232, 98, 10, 0.18);\n  border-color: var(--orange);\n  transform: translateY(-1px);\n}\n.error-alert-banner[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid #ef4444;\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 0.88rem;\n  pointer-events: none;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 40px 11px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 10px;\n  color: #fff;\n  font-size: 0.86rem;\n  outline: none;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--orange);\n  background: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 0 0 3px var(--orange-glow);\n}\n.eye-toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 0.88rem;\n}\n.eye-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: var(--orange);\n}\n.remember-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -2px;\n}\n.custom-checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checkmark[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.05);\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background: var(--orange);\n  border-color: var(--orange);\n}\n.btn-submit-login[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange) 0%,\n      var(--orange-light) 100%);\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 6px 20px var(--orange-glow);\n  transition: all 0.2s;\n  margin-top: 4px;\n}\n.btn-submit-login[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 24px var(--orange-glow);\n}\n.form-footer-nav[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 14px;\n}\n.back-home-link[_ngcontent-%COMP%] {\n  color: var(--orange-light);\n  text-decoration: none;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.text-orange[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n@media (max-width: 992px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .login-visual-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-form-panel[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow-y: auto;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, RouterModule, ReactiveFormsModule], template: `<div class="login-wrapper">
  
  <!-- LEFT: CINEMATIC VISUAL PANEL -->
  <div class="login-visual-panel">
    <div class="glow-bg-orb"></div>
    <div class="glow-bg-orb-2"></div>
    <div class="grid-overlay"></div>

    <div class="visual-content">
      <!-- Top Brand Logo -->
      <a routerLink="/" class="brand-logo">
        <div class="logo-badge">
          <i class="fa-solid fa-sparkles text-orange"></i>
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

        <!-- Stats Chips -->
        <div class="stats-row">
          <div class="stat-box">
            <span class="stat-val">+100%</span>
            <span class="stat-lbl">\u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0648\u0645\u0631\u0628\u0648\u0637 \u0628\u0627\u0644\u0643\u0627\u0645\u0644</span>
          </div>
          <div class="stat-box">
            <span class="stat-val">4 \u0637\u0631\u0642</span>
            <span class="stat-lbl">\u062A\u062D\u0635\u064A\u0644 \u0645\u0627\u0644\u064A \u0648\u0623\u0642\u0633\u0627\u0637</span>
          </div>
          <div class="stat-box">
            <span class="stat-val">RBAC</span>
            <span class="stat-lbl">\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0623\u062F\u0648\u0627\u0631 \u0645\u062D\u0643\u0645\u0629</span>
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
        <p class="subtitle-text">\u0623\u062F\u062E\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0623\u0648 \u0627\u062E\u062A\u0631 \u062D\u0633\u0627\u0645 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639 \u0644\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629</p>
      </div>

      <!-- Quick Fill Demo Accounts -->
      <div class="demo-quick-section">
        <span class="section-tag"><i class="fa-solid fa-bolt text-orange"></i> \u062F\u062E\u0648\u0644 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629:</span>
        <div class="quick-chips-grid">
          <button 
            type="button" 
            class="demo-chip" 
            *ngFor="let acc of demoAccounts" 
            (click)="quickFill(acc)"
            [title]="acc.email"
          >
            <i class="fa-solid" [ngClass]="acc.icon" [style.color]="acc.color"></i>
            <span>{{ acc.label }}</span>
          </button>
        </div>
      </div>

      <!-- Error Alert Banner -->
      <div class="error-alert-banner" *ngIf="showError">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.</span>
      </div>

      <!-- Login Form -->
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
        
        <div class="form-group">
          <label>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A <span class="required">*</span></label>
          <div class="input-wrapper">
            <i class="fa-solid fa-envelope input-icon"></i>
            <input 
              type="email" 
              formControlName="email" 
              placeholder="name@mediaglow.com" 
              class="form-control"
              autocomplete="email"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="label-row">
            <label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 <span class="required">*</span></label>
          </div>
          <div class="input-wrapper">
            <i class="fa-solid fa-lock input-icon"></i>
            <input 
              [type]="showPassword ? 'text' : 'password'" 
              formControlName="password" 
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" 
              class="form-control"
              autocomplete="current-password"
            />
            <button type="button" class="eye-toggle-btn" (click)="togglePassword()">
              <i class="fa-solid" [ngClass]="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
            </button>
          </div>
        </div>

        <div class="remember-row">
          <label class="custom-checkbox">
            <input type="checkbox" formControlName="rememberMe" />
            <span class="checkmark"></span>
            <span>\u062A\u0630\u0643\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644</span>
          </label>
        </div>

        <button type="submit" class="btn-submit-login" [disabled]="loginForm.invalid || loading">
          <span *ngIf="!loading">\u062A\u0623\u0643\u064A\u062F \u0648\u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u062F\u062E\u0648\u0644 <i class="fa-solid fa-arrow-left"></i></span>
          <span *ngIf="loading"><i class="fa-solid fa-circle-notch fa-spin"></i> \u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0648\u0627\u0644\u062F\u062E\u0648\u0644...</span>
        </button>

      </form>

      <div class="form-footer-nav">
        <a routerLink="/" class="back-home-link"><i class="fa-solid fa-house"></i> \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</a>
      </div>

    </div>
  </div>

</div>
`, styles: ['/* src/app/components/login/login.component.css */\n:root {\n  --orange: #e8620a;\n  --orange-light: #ff7a1f;\n  --orange-glow: rgba(232, 98, 10, 0.35);\n  --bg-dark: #09090e;\n  --card-bg: rgba(18, 18, 28, 0.88);\n  --border-glass: rgba(255, 255, 255, 0.12);\n  --text-muted: #8e8e9e;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  height: 100vh;\n  overflow: hidden;\n  background: var(--bg-dark);\n}\n.login-wrapper {\n  height: 100vh;\n  max-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.1fr 1fr;\n  background: var(--bg-dark);\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: #ffffff;\n  overflow: hidden;\n}\n.login-visual-panel {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #06060a 0%,\n      #12101d 100%);\n  padding: 40px 48px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  border-left: 1px solid rgba(255, 255, 255, 0.08);\n}\n.glow-bg-orb {\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      var(--orange-glow) 0%,\n      transparent 70%);\n  filter: blur(50px);\n  pointer-events: none;\n}\n.glow-bg-orb-2 {\n  position: absolute;\n  bottom: -100px;\n  left: -80px;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.18) 0%,\n      transparent 70%);\n  filter: blur(60px);\n  pointer-events: none;\n}\n.grid-overlay {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);\n  background-size: 24px 24px;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.visual-content {\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.brand-logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n}\n.logo-badge {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: rgba(232, 98, 10, 0.15);\n  border: 1px solid var(--orange);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n  box-shadow: 0 0 16px var(--orange-glow);\n}\n.logo-text span {\n  display: block;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.1;\n}\n.logo-text small {\n  font-size: 0.74rem;\n  color: var(--orange-light);\n  font-weight: 600;\n}\n.hero-text-box {\n  margin: auto 0;\n  max-width: 480px;\n}\n.badge-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  color: var(--orange-light);\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.live-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 8px #10b981;\n}\n.hero-title {\n  font-size: 2.2rem;\n  font-weight: 900;\n  line-height: 1.2;\n  margin-bottom: 12px;\n}\n.gradient-text {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      var(--orange-light) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-subtitle {\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.stats-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.stat-box {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 12px;\n  border-radius: 12px;\n  backdrop-filter: blur(10px);\n}\n.stat-val {\n  display: block;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: var(--orange);\n}\n.stat-lbl {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.visual-footer {\n  color: var(--text-muted);\n  font-size: 0.78rem;\n}\n.login-form-panel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 32px;\n  height: 100vh;\n  overflow: hidden;\n}\n.glass-card {\n  width: 100%;\n  max-width: 440px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-glass);\n  border-radius: 20px;\n  padding: 32px 36px;\n  backdrop-filter: blur(16px);\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5);\n}\n.form-header {\n  margin-bottom: 20px;\n}\n.eyebrow-line {\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--orange-light);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.eyebrow-line .dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--orange);\n}\n.form-header h2 {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.subtitle-text {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n.demo-quick-section {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px dashed rgba(232, 98, 10, 0.28);\n  border-radius: 12px;\n  padding: 10px 12px;\n  margin-bottom: 18px;\n}\n.section-tag {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.quick-chips-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n.demo-chip {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 6px 8px;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 0.74rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.2s;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.demo-chip:hover {\n  background: rgba(232, 98, 10, 0.18);\n  border-color: var(--orange);\n  transform: translateY(-1px);\n}\n.error-alert-banner {\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid #ef4444;\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-group label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.required {\n  color: var(--orange);\n}\n.input-wrapper {\n  position: relative;\n}\n.input-icon {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 0.88rem;\n  pointer-events: none;\n}\n.form-control {\n  width: 100%;\n  padding: 11px 40px 11px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 10px;\n  color: #fff;\n  font-size: 0.86rem;\n  outline: none;\n  transition: all 0.2s;\n}\n.form-control:focus {\n  border-color: var(--orange);\n  background: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 0 0 3px var(--orange-glow);\n}\n.eye-toggle-btn {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 0.88rem;\n}\n.eye-toggle-btn:hover {\n  color: var(--orange);\n}\n.remember-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -2px;\n}\n.custom-checkbox {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.custom-checkbox input {\n  display: none;\n}\n.checkmark {\n  width: 16px;\n  height: 16px;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.05);\n}\n.custom-checkbox input:checked ~ .checkmark {\n  background: var(--orange);\n  border-color: var(--orange);\n}\n.btn-submit-login {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange) 0%,\n      var(--orange-light) 100%);\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 6px 20px var(--orange-glow);\n  transition: all 0.2s;\n  margin-top: 4px;\n}\n.btn-submit-login:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 24px var(--orange-glow);\n}\n.form-footer-nav {\n  margin-top: 16px;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 14px;\n}\n.back-home-link {\n  color: var(--orange-light);\n  text-decoration: none;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.text-orange {\n  color: var(--orange);\n}\n@media (max-width: 992px) {\n  .login-wrapper {\n    grid-template-columns: 1fr;\n  }\n  .login-visual-panel {\n    display: none;\n  }\n  .login-form-panel {\n    height: 100vh;\n    overflow-y: auto;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-H2GIFPNI.js.map
