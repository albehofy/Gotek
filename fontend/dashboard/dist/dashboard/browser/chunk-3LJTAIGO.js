import {
  Router,
  RouterModule
} from "./chunk-RDXGLVA6.js";
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
  DecimalPipe,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TC7O2TE3.js";

// src/app/components/clients/clients-list.component.ts
var _c0 = () => ({ width: "480px" });
function ClientsListComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 24)(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 29);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 30);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "button", 31);
    \u0275\u0275listener("click", function ClientsListComponent_tr_35_Template_button_click_22_listener() {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToClientDetails(client_r2));
    });
    \u0275\u0275element(23, "i", 32);
    \u0275\u0275text(24, " \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0643\u0627\u0645\u0644 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const client_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getInitial(client_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r2.client_name || client_r2.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r2.client_email || client_r2.email || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", client_r2.deals_count || 0, " \u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 7, client_r2.total_paid || 0, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 10, client_r2.outstanding_balance || 0, "1.2-2"), " \u062C.\u0645");
  }
}
function ClientsListComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33)(2, "div", 34)(3, "div", 35);
    \u0275\u0275element(4, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0639\u0645\u0644\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 38);
    \u0275\u0275text(8, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0639\u0645\u0644\u0627\u0621 \u064A\u0637\u0627\u0628\u0642\u0648\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0628\u062D\u062B.");
    \u0275\u0275elementEnd()()()();
  }
}
function ClientsListComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ClientsListComponent_ng_template_58_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275text(1, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.clientForm.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638 \u0627\u0644\u0639\u0645\u064A\u0644", " ");
  }
}
var ClientsListComponent = class _ClientsListComponent {
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  router = inject(Router);
  clients = [];
  searchQuery = "";
  showAddModal = false;
  loading = false;
  clientForm;
  ngOnInit() {
    this.initForm();
    this.loadClients();
  }
  initForm() {
    this.clientForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["password123", Validators.required]
    });
  }
  loadClients() {
    this.apiService.getClientBalances().subscribe((res) => {
      const raw = res.data || [];
      this.clients = raw.map((c) => __spreadProps(__spreadValues({}, c), {
        name: c.client_name || c.name || "",
        email: c.client_email || c.email || ""
      }));
    });
  }
  filteredClients() {
    if (!this.searchQuery.trim())
      return this.clients;
    const q = this.searchQuery.toLowerCase();
    return this.clients.filter((c) => (c.client_name || c.name || "").toLowerCase().includes(q) || (c.client_email || c.email || "").toLowerCase().includes(q));
  }
  openAddModal() {
    this.clientForm.reset({ password: "password123" });
    this.showAddModal = true;
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  saveClient() {
    if (this.clientForm.invalid)
      return;
    this.loading = true;
    const payload = __spreadProps(__spreadValues({}, this.clientForm.value), {
      role: "client"
    });
    this.apiService.createUser(payload).subscribe({
      next: () => {
        this.loading = false;
        this.closeAddModal();
        this.loadClients();
      },
      error: () => this.loading = false
    });
  }
  goToClientDetails(client) {
    const id = client.id || client.client_id;
    if (id) {
      this.router.navigate(["/clients", id]);
    }
  }
  getInitial(client) {
    const name = client.name || client.client_name || "";
    return name ? name[0].toUpperCase() : "C";
  }
  static \u0275fac = function ClientsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsListComponent, selectors: [["app-clients-list"]], decls: 59, vars: 11, consts: [[1, "crm-module-container"], [1, "module-header"], [1, "fa-solid", "fa-users", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-user-plus"], [1, "filters-bar", "glass-panel"], [1, "search-field"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "pInputText", "", "placeholder", "\u0627\u0644\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A...", 3, "ngModelChange", "ngModel"], [1, "table-card", "glass-panel"], [1, "table-responsive"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["header", "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F", 3, "visibleChange", "visible", "modal", "dismissableMask", "appendTo"], [3, "ngSubmit", "formGroup"], [2, "padding", "10px 0", "display", "flex", "flex-direction", "column", "gap", "16px"], [1, "form-group"], [1, "required"], ["type", "text", "pInputText", "", "formControlName", "name", "placeholder", "\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0648\u0631 \u0644\u0644\u062A\u062C\u0627\u0631\u0629"], ["type", "email", "pInputText", "", "formControlName", "email", "placeholder", "client@example.com"], ["type", "password", "pInputText", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["pTemplate", "footer"], [1, "client-cell"], [1, "client-av"], [1, "client-name"], [2, "color", "var(--text-2)"], [1, "badge", "badge-v"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], ["title", "\u0641\u062A\u062D \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644", 1, "btn-action", "primary", 3, "click"], [1, "fa-solid", "fa-arrow-up-right-from-square"], ["colspan", "7"], [1, "empty-state"], [1, "empty-state-icon"], [1, "fa-solid", "fa-users-slash"], [1, "empty-state-title"], [1, "empty-state-desc"], ["type", "button", 1, "btn", "btn-glass", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function ClientsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " \u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "\u0639\u0631\u0636 \u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0648\u0643\u0627\u0644\u0629\u060C \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0646\u0634\u0637\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ClientsListComponent_Template_button_click_8_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " \u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ClientsListComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "table", 12)(18, "thead")(19, "tr")(20, "th");
      \u0275\u0275text(21, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0642\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A (\u0627\u0644\u0645\u0633\u062A\u062D\u0642)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, ClientsListComponent_tr_35_Template, 25, 13, "tr", 13)(36, ClientsListComponent_tr_36_Template, 9, 0, "tr", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "p-dialog", 15);
      \u0275\u0275twoWayListener("visibleChange", function ClientsListComponent_Template_p_dialog_visibleChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showAddModal, $event) || (ctx.showAddModal = $event);
        return $event;
      });
      \u0275\u0275elementStart(38, "form", 16);
      \u0275\u0275listener("ngSubmit", function ClientsListComponent_Template_form_ngSubmit_38_listener() {
        return ctx.saveClient();
      });
      \u0275\u0275elementStart(39, "div", 17)(40, "div", 18)(41, "label");
      \u0275\u0275text(42, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 ");
      \u0275\u0275elementStart(43, "span", 19);
      \u0275\u0275text(44, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(45, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 18)(47, "label");
      \u0275\u0275text(48, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
      \u0275\u0275elementStart(49, "span", 19);
      \u0275\u0275text(50, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 18)(53, "label");
      \u0275\u0275text(54, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 ");
      \u0275\u0275elementStart(55, "span", 19);
      \u0275\u0275text(56, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(57, "input", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(58, ClientsListComponent_ng_template_58_Template, 4, 2, "ng-template", 23);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.filteredClients());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredClients().length === 0);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showAddModal);
      \u0275\u0275property("modal", true)("dismissableMask", true)("appendTo", "body");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.clientForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DialogModule, Dialog, PrimeTemplate, InputTextModule, InputText], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-input);\n  padding: 9px 14px;\n  border-radius: var(--r);\n  border: 1px solid var(--border);\n  min-width: 260px;\n  flex: 1;\n  max-width: 400px;\n  transition: border-color 0.2s;\n}\n.search-field[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.search-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.9rem;\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  width: 100%;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-3);\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  border-radius: var(--r-lg);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.client-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.client-av[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.client-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #fff;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.crm-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: _ngcontent-%COMP%_modalIn 0.22s var(--ease);\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=clients-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientsListComponent, [{
    type: Component,
    args: [{ selector: "app-clients-list", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, DialogModule, InputTextModule], template: `
    <div class="crm-module-container">
      <div class="module-header">
        <div>
          <h2><i class="fa-solid fa-users" style="color:var(--violet-light);"></i> \u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621</h2>
          <p class="subtitle">\u0639\u0631\u0636 \u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0648\u0643\u0627\u0644\u0629\u060C \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0648\u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0646\u0634\u0637\u0629</p>
        </div>
        <button class="btn btn-primary" (click)="openAddModal()">
          <i class="fa-solid fa-user-plus"></i> \u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F
        </button>
      </div>

      <!-- Search -->
      <div class="filters-bar glass-panel">
        <div class="search-field">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" pInputText [(ngModel)]="searchQuery" placeholder="\u0627\u0644\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A..." />
        </div>
      </div>

      <!-- Clients Data Grid -->
      <div class="table-card glass-panel">
        <div class="table-responsive">
          <table class="crm-table">
            <thead>
              <tr>
                <th>#</th>
                <th>\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644</th>
                <th>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</th>
                <th>\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0642\u0627\u062A</th>
                <th>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A</th>
                <th>\u0627\u0644\u0645\u062A\u0628\u0642\u064A (\u0627\u0644\u0645\u0633\u062A\u062D\u0642)</th>
                <th>\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let client of filteredClients(); let i = index">
                <td>{{ i + 1 }}</td>
                <td>
                  <div class="client-cell">
                    <div class="client-av">{{ getInitial(client) }}</div>
                    <div>
                      <div class="client-name">{{ client.client_name || client.name || '\u2014' }}</div>
                    </div>
                  </div>
                </td>
                <td style="color:var(--text-2);">{{ client.client_email || client.email || '\u2014' }}</td>
                <td><span class="badge badge-v">{{ client.deals_count || 0 }} \u0635\u0641\u0642\u0627\u062A</span></td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ (client.total_paid || 0) | number:'1.2-2' }} \u062C.\u0645</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ (client.outstanding_balance || 0) | number:'1.2-2' }} \u062C.\u0645</td>
                <td>
                  <button class="btn-action primary" (click)="goToClientDetails(client)" title="\u0641\u062A\u062D \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0643\u0627\u0645\u0644
                  </button>
                </td>
              </tr>
              <tr *ngIf="filteredClients().length === 0">
                <td colspan="7">
                  <div class="empty-state">
                    <div class="empty-state-icon"><i class="fa-solid fa-users-slash"></i></div>
                    <div class="empty-state-title">\u0644\u0627 \u064A\u0648\u062C\u062F \u0639\u0645\u0644\u0627\u0621</div>
                    <div class="empty-state-desc">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0639\u0645\u0644\u0627\u0621 \u064A\u0637\u0627\u0628\u0642\u0648\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0628\u062D\u062B.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- PrimeNG Dialog: Add New Client -->
      <p-dialog [(visible)]="showAddModal" [modal]="true" [dismissableMask]="true" [appendTo]="'body'" header="\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F" [style]="{ width: '480px' }">
        <form [formGroup]="clientForm" (ngSubmit)="saveClient()">
          <div style="padding:10px 0; display:flex; flex-direction:column; gap:16px;">
            <div class="form-group">
              <label>\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 <span class="required">*</span></label>
              <input type="text" pInputText formControlName="name" placeholder="\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0648\u0631 \u0644\u0644\u062A\u062C\u0627\u0631\u0629" />
            </div>

            <div class="form-group">
              <label>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A <span class="required">*</span></label>
              <input type="email" pInputText formControlName="email" placeholder="client@example.com" />
            </div>

            <div class="form-group">
              <label>\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 <span class="required">*</span></label>
              <input type="password" pInputText formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
            </div>
          </div>

          <ng-template pTemplate="footer">
            <button type="button" class="btn btn-glass" (click)="closeAddModal()">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="submit" class="btn btn-primary" [disabled]="clientForm.invalid || loading">
              {{ loading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...' : '\u062D\u0641\u0638 \u0627\u0644\u0639\u0645\u064A\u0644' }}
            </button>
          </ng-template>
        </form>
      </p-dialog>
    </div>
  `, styles: ['/* angular:styles/component:css;7fbb05013b489d562815735442bef8dd0ded6a6012b0cef153519079e08bad24;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/clients/clients-list.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-module-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.module-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.filters-bar {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-field {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-input);\n  padding: 9px 14px;\n  border-radius: var(--r);\n  border: 1px solid var(--border);\n  min-width: 260px;\n  flex: 1;\n  max-width: 400px;\n  transition: border-color 0.2s;\n}\n.search-field:focus-within {\n  border-color: var(--violet);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.search-field i {\n  color: var(--text-2);\n  font-size: 0.9rem;\n}\n.search-field input {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  width: 100%;\n  font-family: inherit;\n  font-size: 0.88rem;\n}\n.search-field input::placeholder {\n  color: var(--text-3);\n}\n.table-card {\n  padding: 0;\n  overflow: hidden;\n  border-radius: var(--r-lg);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: right;\n  direction: rtl;\n}\n.crm-table th {\n  text-align: right;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.client-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.client-av {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.client-name {\n  font-weight: 700;\n  color: #fff;\n}\n.btn-action {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 6px 12px;\n  border-radius: var(--r);\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-action:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.btn-action.primary {\n  color: var(--violet-light);\n  background: var(--violet-soft);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.btn-action.primary:hover {\n  background: rgba(124, 58, 237, 0.22);\n}\n.crm-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n.crm-modal-card {\n  width: 100%;\n  max-width: 480px;\n  background: #10101e;\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);\n  animation: modalIn 0.22s var(--ease);\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h3 {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.9rem;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(225, 29, 72, 0.2);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.form-group input {\n  width: 100%;\n  padding: 10px 13px;\n  background: var(--bg-input);\n  border: 1px solid var(--border);\n  border-radius: var(--r);\n  color: #fff;\n  outline: none;\n  font-family: inherit;\n  font-size: 0.88rem;\n  transition: all 0.2s;\n}\n.form-group input:focus {\n  border-color: var(--violet);\n  background: rgba(124, 58, 237, 0.06);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.required {\n  color: var(--rose-light);\n}\n/*# sourceMappingURL=clients-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsListComponent, { className: "ClientsListComponent", filePath: "src/app/components/clients/clients-list.component.ts", lineNumber: 153 });
})();
export {
  ClientsListComponent
};
//# sourceMappingURL=chunk-3LJTAIGO.js.map
