import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-TRCV7UC3.js";
import {
  ApiService
} from "./chunk-VFRQX7SG.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CK3LQYPJ.js";

// src/app/components/clients/client-detail.component.ts
function ClientDetailComponent_div_0_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 19);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 20);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 21);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deal_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(deal_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((deal_r1.department == null ? null : deal_r1.department.name) || "General");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 7, deal_r1.calculated_total, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 10, deal_r1.calculated_paid, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 13, deal_r1.remaining_balance, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", deal_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(deal_r1.status);
  }
}
function ClientDetailComponent_div_0_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailComponent_div_0_tr_67_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.name);
  }
}
function ClientDetailComponent_div_0_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, ClientDetailComponent_div_0_tr_67_span_6_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((task_r3.subCategory == null ? null : task_r3.subCategory.name_ar) || (task_r3.department == null ? null : task_r3.department.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", task_r3.users);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 6, task_r3.client_price, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", task_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r3.status);
  }
}
function ClientDetailComponent_div_0_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u062D\u0627\u0644\u064A\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
    \u0275\u0275element(3, "i", 4);
    \u0275\u0275text(4, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275element(6, "i", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "span", 8);
    \u0275\u0275text(11, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062A\u0639\u0627\u0642\u062F \u0639\u0644\u064A\u0647\u0627");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h3", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 7)(16, "span", 8);
    \u0275\u0275text(17, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062F\u062F\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3", 10);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 7)(22, "span", 8);
    \u0275\u0275text(23, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 (\u0627\u0644\u0645\u0633\u062A\u062D\u0642)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h3", 11);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 12)(28, "h3");
    \u0275\u0275element(29, "i", 13);
    \u0275\u0275text(30, " \u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0623\u0642\u0633\u0627\u0637");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "table", 14)(32, "thead")(33, "tr")(34, "th");
    \u0275\u0275text(35, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0635\u0641\u0642\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0635\u0641\u0642\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "tbody");
    \u0275\u0275template(47, ClientDetailComponent_div_0_tr_47_Template, 17, 16, "tr", 15)(48, ClientDetailComponent_div_0_tr_48_Template, 3, 0, "tr", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 12)(50, "h3");
    \u0275\u0275element(51, "i", 17);
    \u0275\u0275text(52, " \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0639\u0642\u0648\u062F \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "table", 14)(54, "thead")(55, "tr")(56, "th");
    \u0275\u0275text(57, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "\u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0641\u0631\u0639\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th");
    \u0275\u0275text(61, "\u0627\u0644\u0645\u0648\u0638\u0641\u0648\u0646 \u0627\u0644\u0645\u0646\u0641\u0630\u0648\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th");
    \u0275\u0275text(63, "\u0627\u0644\u0633\u0639\u0631 \u0644\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th");
    \u0275\u0275text(65, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "tbody");
    \u0275\u0275template(67, ClientDetailComponent_div_0_tr_67_Template, 13, 9, "tr", 15)(68, ClientDetailComponent_div_0_tr_68_Template, 3, 0, "tr", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" \u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u064A\u0644: ", ctx_r3.client.name, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 8, ctx_r3.totalBilled, "1.2-2"), " EGP");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 11, ctx_r3.totalPaid, "1.2-2"), " EGP");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 14, ctx_r3.remainingBalance, "1.2-2"), " EGP");
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r3.deals);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.deals.length === 0);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r3.tasks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.tasks.length === 0);
  }
}
var ClientDetailComponent = class _ClientDetailComponent {
  route = inject(ActivatedRoute);
  apiService = inject(ApiService);
  clientId = null;
  client = null;
  deals = [];
  tasks = [];
  totalBilled = 0;
  totalPaid = 0;
  remainingBalance = 0;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clientId = +params["id"];
      if (this.clientId) {
        this.loadClientData();
      }
    });
  }
  loadClientData() {
    this.apiService.getUsers("client").subscribe((res) => {
      const allClients = res.data || [];
      this.client = allClients.find((c) => c.id === this.clientId) || { id: this.clientId, name: "\u0627\u0644\u0639\u0645\u064A\u0644 " + this.clientId };
    });
    this.apiService.getDeals().subscribe((allDeals) => {
      this.deals = (Array.isArray(allDeals) ? allDeals : []).filter((d) => d.client_id === this.clientId);
      this.totalBilled = this.deals.reduce((acc, d) => acc + (d.calculated_total || 0), 0);
      this.totalPaid = this.deals.reduce((acc, d) => acc + (d.calculated_paid || 0), 0);
      this.remainingBalance = max(0, this.totalBilled - this.totalPaid);
    });
    this.apiService.getTasks().subscribe((allTasks) => {
      const dealIds = this.deals.map((d) => d.id);
      this.tasks = (Array.isArray(allTasks) ? allTasks : []).filter((t) => dealIds.includes(t.deal_id));
    });
  }
  static \u0275fac = function ClientDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailComponent, selectors: [["app-client-detail"]], decls: 1, vars: 1, consts: [["class", "client-detail-container", 4, "ngIf"], [1, "client-detail-container"], [1, "header-nav"], ["routerLink", "/clients", 1, "back-link"], [1, "fa-solid", "fa-arrow-right"], [1, "fa-solid", "fa-user-tie", "text-orange"], [1, "metrics-grid"], [1, "metric-card", "glass-panel"], [1, "label"], [1, "value", "text-white"], [1, "value", "text-success"], [1, "value", "text-danger"], [1, "section-card", "glass-panel", "margin-top"], [1, "fa-solid", "fa-file-contract", "text-orange"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "fa-solid", "fa-list-check", "text-orange"], [1, "font-bold", "text-white"], [1, "text-success"], [1, "text-danger"], [1, "badge", 3, "ngClass"], ["colspan", "6", 1, "text-center", "text-muted"], ["class", "user-chip", 4, "ngFor", "ngForOf"], [1, "user-chip"], ["colspan", "5", 1, "text-center", "text-muted"]], template: function ClientDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ClientDetailComponent_div_0_Template, 69, 17, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.client);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink], styles: ["\n\n.client-detail-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.header-nav[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: var(--orange-light);\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: right;\n}\n.metric-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n}\n.section-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: 16px;\n}\n.section-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  font-size: 1.1rem;\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: right;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  color: #fff;\n}\n.user-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.78rem;\n  margin-left: 4px;\n  display: inline-block;\n}\n.text-orange[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n/*# sourceMappingURL=client-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDetailComponent, [{
    type: Component,
    args: [{ selector: "app-client-detail", standalone: true, imports: [CommonModule, RouterModule], template: `
    <div class="client-detail-container" *ngIf="client">
      <div class="header-nav">
        <a routerLink="/clients" class="back-link"><i class="fa-solid fa-arrow-right"></i> \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621</a>
        <h2><i class="fa-solid fa-user-tie text-orange"></i> \u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u064A\u0644: {{ client.name }}</h2>
      </div>

      <!-- Financial Metrics Summary -->
      <div class="metrics-grid">
        <div class="metric-card glass-panel">
          <span class="label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062A\u0639\u0627\u0642\u062F \u0639\u0644\u064A\u0647\u0627</span>
          <h3 class="value text-white">{{ totalBilled | number:'1.2-2' }} EGP</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062F\u062F\u0629</span>
          <h3 class="value text-success">{{ totalPaid | number:'1.2-2' }} EGP</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0641\u064A \u0630\u0645\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 (\u0627\u0644\u0645\u0633\u062A\u062D\u0642)</span>
          <h3 class="value text-danger">{{ remainingBalance | number:'1.2-2' }} EGP</h3>
        </div>
      </div>

      <!-- Deals & Installments Section -->
      <div class="section-card glass-panel margin-top">
        <h3><i class="fa-solid fa-file-contract text-orange"></i> \u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0623\u0642\u0633\u0627\u0637</h3>
        <table class="crm-table">
          <thead>
            <tr>
              <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629</th>
              <th>\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</th>
              <th>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0635\u0641\u0642\u0629</th>
              <th>\u0627\u0644\u0645\u062F\u0641\u0648\u0639</th>
              <th>\u0627\u0644\u0645\u062A\u0628\u0642\u064A</th>
              <th>\u062D\u0627\u0644\u0629 \u0627\u0644\u0635\u0641\u0642\u0629</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let deal of deals">
              <td class="font-bold text-white">{{ deal.title }}</td>
              <td>{{ deal.department?.name || 'General' }}</td>
              <td>{{ deal.calculated_total | number:'1.2-2' }} EGP</td>
              <td class="text-success">{{ deal.calculated_paid | number:'1.2-2' }} EGP</td>
              <td class="text-danger">{{ deal.remaining_balance | number:'1.2-2' }} EGP</td>
              <td><span class="badge" [ngClass]="deal.status">{{ deal.status }}</span></td>
            </tr>
            <tr *ngIf="deals.length === 0">
              <td colspan="6" class="text-center text-muted">\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Tasks Executed for Client -->
      <div class="section-card glass-panel margin-top">
        <h3><i class="fa-solid fa-list-check text-orange"></i> \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0639\u0642\u0648\u062F \u0627\u0644\u0639\u0645\u064A\u0644</h3>
        <table class="crm-table">
          <thead>
            <tr>
              <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629</th>
              <th>\u0627\u0644\u0642\u0633\u0645 / \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0641\u0631\u0639\u064A\u0629</th>
              <th>\u0627\u0644\u0645\u0648\u0638\u0641\u0648\u0646 \u0627\u0644\u0645\u0646\u0641\u0630\u0648\u0646</th>
              <th>\u0627\u0644\u0633\u0639\u0631 \u0644\u0644\u0639\u0645\u064A\u0644</th>
              <th>\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let task of tasks">
              <td class="font-bold text-white">{{ task.title }}</td>
              <td>{{ task.subCategory?.name_ar || task.department?.name || '-' }}</td>
              <td>
                <span *ngFor="let u of task.users" class="user-chip">{{ u.name }}</span>
              </td>
              <td>{{ task.client_price | number:'1.2-2' }} EGP</td>
              <td><span class="badge" [ngClass]="task.status">{{ task.status }}</span></td>
            </tr>
            <tr *ngIf="tasks.length === 0">
              <td colspan="5" class="text-center text-muted">\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u062D\u0627\u0644\u064A\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;91a33462ad124b342c98c1783a64ffc56f5d6cba2ecc597bc8f1176de1461750;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/clients/client-detail.component.ts */\n.client-detail-container {\n  padding: 24px;\n}\n.header-nav {\n  margin-bottom: 24px;\n}\n.back-link {\n  color: var(--orange-light);\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n}\n.metric-card {\n  padding: 20px;\n  text-align: right;\n}\n.metric-card .label {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.metric-card .value {\n  font-size: 1.6rem;\n  font-weight: 800;\n}\n.section-card {\n  padding: 24px;\n  border-radius: 16px;\n}\n.section-card h3 {\n  margin-bottom: 16px;\n  font-size: 1.1rem;\n}\n.margin-top {\n  margin-top: 24px;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: right;\n}\n.crm-table th,\n.crm-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.9rem;\n}\n.crm-table th {\n  background: rgba(255, 255, 255, 0.03);\n  color: #fff;\n}\n.user-chip {\n  background: rgba(255, 255, 255, 0.08);\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.78rem;\n  margin-left: 4px;\n  display: inline-block;\n}\n.text-orange {\n  color: var(--orange);\n}\n.text-success {\n  color: #10b981;\n}\n.text-danger {\n  color: #ef4444;\n}\n/*# sourceMappingURL=client-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailComponent, { className: "ClientDetailComponent", filePath: "src/app/components/clients/client-detail.component.ts", lineNumber: 116 });
})();
function max(a, b) {
  return a > b ? a : b;
}
export {
  ClientDetailComponent
};
//# sourceMappingURL=chunk-4YTPGKR3.js.map
