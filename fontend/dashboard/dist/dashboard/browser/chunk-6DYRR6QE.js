import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-RDXGLVA6.js";
import {
  ApiService
} from "./chunk-DCUGWKDF.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TC7O2TE3.js";

// src/app/components/clients/client-detail.component.ts
function ClientDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644...");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 7);
    \u0275\u0275element(7, "i", 8);
    \u0275\u0275text(8, " \u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0644\u0639\u0645\u0644\u0627\u0621 ");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailComponent_div_2_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 43);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 44);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 45);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deal_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(deal_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((deal_r1.department == null ? null : deal_r1.department.name) || "\u0639\u0627\u0645");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 7, deal_r1.calculated_total || 0, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 10, deal_r1.calculated_paid || 0, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 13, deal_r1.remaining_balance || 0, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", deal_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(deal_r1.status);
  }
}
function ClientDetailComponent_div_2_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46)(2, "div", 47);
    \u0275\u0275element(3, "i", 48);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644.");
    \u0275\u0275elementEnd()()()();
  }
}
function ClientDetailComponent_div_2_tr_106_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.name);
  }
}
function ClientDetailComponent_div_2_tr_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, ClientDetailComponent_div_2_tr_106_span_6_Template, 2, 1, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 45);
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
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 6, task_r3.client_price || 0, "1.2-2"), " \u062C.\u0645");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", task_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r3.status);
  }
}
function ClientDetailComponent_div_2_tr_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51)(2, "div", 47);
    \u0275\u0275element(3, "i", 52);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644.");
    \u0275\u0275elementEnd()()()();
  }
}
function ClientDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "button", 11);
    \u0275\u0275element(3, "i", 8);
    \u0275\u0275text(4, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12)(6, "div", 13)(7, "div", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "h2");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275element(13, "i", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "span", 18);
    \u0275\u0275element(16, "span", 19);
    \u0275\u0275text(17, " \u0639\u0645\u064A\u0644 \u0646\u0634\u0637 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 20)(19, "div", 21)(20, "div", 22);
    \u0275\u0275element(21, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 24);
    \u0275\u0275text(23, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 25);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 26);
    \u0275\u0275text(28, "\u062C.\u0645 \u0645\u062A\u0639\u0627\u0642\u062F \u0639\u0644\u064A\u0647\u0627");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 27)(30, "div", 22);
    \u0275\u0275element(31, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 24);
    \u0275\u0275text(33, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 25);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 26);
    \u0275\u0275text(38, "\u062C.\u0645 \u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645\u0647\u0627");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 29)(40, "div", 22);
    \u0275\u0275element(41, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 24);
    \u0275\u0275text(43, "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 25);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 26);
    \u0275\u0275text(48, "\u062C.\u0645 \u0645\u0639\u0644\u0642\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 31)(50, "div", 22);
    \u0275\u0275element(51, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 24);
    \u0275\u0275text(53, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 25);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 26);
    \u0275\u0275text(57, "\u0639\u0642\u0648\u062F \u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 33)(59, "div", 34)(60, "h3");
    \u0275\u0275element(61, "i", 35);
    \u0275\u0275text(62, " \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 36);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 37)(66, "table")(67, "thead")(68, "tr")(69, "th");
    \u0275\u0275text(70, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th");
    \u0275\u0275text(72, "\u0627\u0644\u0642\u0633\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th");
    \u0275\u0275text(74, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "th");
    \u0275\u0275text(76, "\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th");
    \u0275\u0275text(78, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th");
    \u0275\u0275text(80, "\u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "tbody");
    \u0275\u0275template(82, ClientDetailComponent_div_2_tr_82_Template, 17, 16, "tr", 38)(83, ClientDetailComponent_div_2_tr_83_Template, 6, 0, "tr", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(84, "div", 33)(85, "div", 34)(86, "h3");
    \u0275\u0275element(87, "i", 40);
    \u0275\u0275text(88, " \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 41);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 37)(92, "table")(93, "thead")(94, "tr")(95, "th");
    \u0275\u0275text(96, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "th");
    \u0275\u0275text(98, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 / \u0627\u0644\u0642\u0633\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "th");
    \u0275\u0275text(100, "\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u0648\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "th");
    \u0275\u0275text(102, "\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "th");
    \u0275\u0275text(104, "\u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "tbody");
    \u0275\u0275template(106, ClientDetailComponent_div_2_tr_106_Template, 13, 9, "tr", 38)(107, ClientDetailComponent_div_2_tr_107_Template, 6, 0, "tr", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.getInitial());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.client.name || ctx_r3.client.client_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.client.email || ctx_r3.client.client_email, "");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 13, ctx_r3.totalBilled, "1.2-2"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 16, ctx_r3.totalPaid, "1.2-2"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 19, ctx_r3.remainingBalance, "1.2-2"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r3.deals.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r3.deals.length, " \u0635\u0641\u0642\u0627\u062A");
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r3.deals);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.deals.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r3.tasks.length, " \u0645\u0647\u0627\u0645");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r3.tasks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.tasks.length === 0);
  }
}
var ClientDetailComponent = class _ClientDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  apiService = inject(ApiService);
  clientId = null;
  client = null;
  deals = [];
  tasks = [];
  loading = true;
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
  getInitial() {
    const name = this.client?.name || this.client?.client_name || "";
    return name ? name[0].toUpperCase() : "C";
  }
  loadClientData() {
    this.loading = true;
    this.apiService.getClientBalances().subscribe({
      next: (res) => {
        const all = res.data || [];
        const found = all.find((c) => c.id === this.clientId || c.client_id === this.clientId || c.user_id === this.clientId);
        if (found) {
          this.client = __spreadProps(__spreadValues({}, found), {
            name: found.client_name || found.name || "Client #" + this.clientId,
            email: found.client_email || found.email || ""
          });
          this.totalPaid = found.total_paid || 0;
          this.remainingBalance = found.outstanding_balance || 0;
        } else {
          this.apiService.getUsers("client").subscribe((r) => {
            const users = r.data || [];
            const u = users.find((x) => x.id === this.clientId);
            if (u) {
              this.client = __spreadProps(__spreadValues({}, u), { name: u.name || u.username, email: u.email });
            }
          });
        }
        this.loading = false;
      },
      error: () => {
        this.apiService.getUsers("client").subscribe((r) => {
          const users = r.data || [];
          const u = users.find((x) => x.id === this.clientId);
          this.client = u ? __spreadProps(__spreadValues({}, u), { name: u.name || u.username, email: u.email }) : null;
          this.loading = false;
        });
      }
    });
    this.apiService.getDeals().subscribe((allDeals) => {
      this.deals = (Array.isArray(allDeals) ? allDeals : []).filter((d) => d.client_id === this.clientId);
      this.totalBilled = this.deals.reduce((acc, d) => acc + (d.calculated_total || 0), 0);
      if (!this.totalPaid) {
        this.totalPaid = this.deals.reduce((acc, d) => acc + (d.calculated_paid || 0), 0);
      }
      this.remainingBalance = Math.max(0, this.totalBilled - this.totalPaid);
    });
    this.apiService.getTasks().subscribe((allTasks) => {
      const dealIds = this.deals.map((d) => d.id);
      this.tasks = (Array.isArray(allTasks) ? allTasks : []).filter((t) => dealIds.includes(t.deal_id));
    });
  }
  static \u0275fac = function ClientDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailComponent, selectors: [["app-client-detail"]], decls: 3, vars: 3, consts: [["class", "loading-shell", 4, "ngIf"], ["class", "error-shell", 4, "ngIf"], ["class", "client-detail-container", 4, "ngIf"], [1, "loading-shell"], [1, "spinner"], [1, "error-shell"], [1, "fa-solid", "fa-circle-exclamation"], ["routerLink", "/clients", 1, "btn", "btn-primary"], [1, "fa-solid", "fa-arrow-right"], [1, "client-detail-container"], [1, "top-nav-bar"], ["routerLink", "/clients", 1, "back-btn"], [1, "detail-header", "glass-panel", "margin-top"], [1, "header-main-info"], [1, "client-av-lg"], [1, "client-titles"], [1, "client-email"], [1, "fa-solid", "fa-envelope", 2, "margin-left", "4px", "opacity", "0.6"], [1, "client-badge"], [1, "pulse-dot"], [1, "metrics-grid", "margin-top"], [1, "metric-card", "kpi-card", "kpi-t"], [1, "kpi-icon"], [1, "fa-solid", "fa-file-invoice-dollar"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-sub"], [1, "metric-card", "kpi-card", "kpi-e"], [1, "fa-solid", "fa-circle-check"], [1, "metric-card", "kpi-card", "kpi-r"], [1, "fa-solid", "fa-clock"], [1, "metric-card", "kpi-card", "kpi-v"], [1, "fa-solid", "fa-handshake"], [1, "section-card", "glass-panel", "margin-top"], [1, "section-head"], [1, "fa-solid", "fa-file-contract", 2, "color", "var(--violet-light)"], [1, "badge", "badge-v"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "fa-solid", "fa-list-check", 2, "color", "var(--teal-light)"], [1, "badge", "badge-t"], [2, "font-weight", "700", "color", "#fff"], [2, "color", "var(--emerald-light)", "font-weight", "600"], [2, "color", "var(--rose-light)", "font-weight", "600"], [1, "badge", 3, "ngClass"], ["colspan", "6"], [1, "empty-state"], [1, "fa-solid", "fa-file-circle-xmark"], ["class", "user-chip", 4, "ngFor", "ngForOf"], [1, "user-chip"], ["colspan", "5"], [1, "fa-solid", "fa-clipboard-check"]], template: function ClientDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ClientDetailComponent_div_0_Template, 4, 0, "div", 0)(1, ClientDetailComponent_div_1_Template, 9, 0, "div", 1)(2, ClientDetailComponent_div_2_Template, 108, 22, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.client);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.client);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  direction: rtl;\n  text-align: right;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n}\n.loading-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: var(--text-2);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--violet-soft);\n  border-top-color: var(--violet);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 12px;\n  text-align: center;\n  color: var(--text-2);\n}\n.error-shell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--rose-light);\n  opacity: 0.6;\n}\n.error-shell[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.2rem;\n}\n.client-detail-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  direction: rtl;\n  text-align: right;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.top-nav-bar[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 8px 16px;\n  border-radius: var(--r);\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-family: inherit;\n  text-decoration: none;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border-color: var(--border-v);\n  transform: translateX(-2px);\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 28px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  gap: 16px;\n  flex-wrap: wrap;\n  direction: rtl;\n  text-align: right;\n}\n.header-main-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.client-av-lg[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #fff;\n  box-shadow: 0 0 24px var(--violet-glow);\n  flex-shrink: 0;\n}\n.client-titles[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: #fff;\n  margin: 0 0 4px 0;\n  letter-spacing: -0.3px;\n}\n.client-email[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n}\n.client-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 16px;\n  border-radius: var(--r-full);\n  background: var(--emerald-soft);\n  color: var(--emerald-light);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--emerald-light);\n  box-shadow: 0 0 10px var(--emerald-light);\n  animation: _ngcontent-%COMP%_pulse 1.8s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.3);\n  }\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n  gap: 16px;\n  direction: rtl;\n}\n.section-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  border-radius: var(--r-lg);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  direction: rtl;\n  text-align: right;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: rgba(99, 102, 241, 0.05);\n}\n.section-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  direction: rtl;\n  text-align: right;\n}\nth[_ngcontent-%COMP%] {\n  padding: 13px 18px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n  text-align: right;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n  text-align: right;\n}\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n.user-chip[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  color: var(--violet-light);\n  padding: 2px 8px;\n  border-radius: 100px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  margin-left: 4px;\n  display: inline-block;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: var(--text-2);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  margin-bottom: 8px;\n  opacity: 0.4;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .client-detail-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=client-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDetailComponent, [{
    type: Component,
    args: [{ selector: "app-client-detail", standalone: true, imports: [CommonModule, RouterModule], template: `
    <!-- Loading State -->
    <div class="loading-shell" *ngIf="loading">
      <div class="spinner"></div>
      <p>\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644...</p>
    </div>

    <!-- Error State -->
    <div class="error-shell" *ngIf="!loading && !client">
      <i class="fa-solid fa-circle-exclamation"></i>
      <h3>\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u064A\u0644</h3>
      <p>\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644.</p>
      <button class="btn btn-primary" routerLink="/clients">
        <i class="fa-solid fa-arrow-right"></i> \u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0644\u0639\u0645\u0644\u0627\u0621
      </button>
    </div>

    <!-- Main Content -->
    <div class="client-detail-container" *ngIf="!loading && client">
      <!-- Back Navigation Bar -->
      <div class="top-nav-bar">
        <button class="back-btn" routerLink="/clients">
          <i class="fa-solid fa-arrow-right"></i> \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621
        </button>
      </div>

      <!-- Hero Client Profile Header Card -->
      <div class="detail-header glass-panel margin-top">
        <div class="header-main-info">
          <div class="client-av-lg">{{ getInitial() }}</div>
          <div class="client-titles">
            <h2>{{ client.name || client.client_name }}</h2>
            <span class="client-email"><i class="fa-solid fa-envelope" style="margin-left:4px; opacity:0.6;"></i> {{ client.email || client.client_email }}</span>
          </div>
        </div>
        <span class="client-badge">
          <span class="pulse-dot"></span> \u0639\u0645\u064A\u0644 \u0646\u0634\u0637
        </span>
      </div>

      <!-- KPI Cards -->
      <div class="metrics-grid margin-top">
        <div class="metric-card kpi-card kpi-t">
          <div class="kpi-icon"><i class="fa-solid fa-file-invoice-dollar"></i></div>
          <div class="kpi-label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631</div>
          <div class="kpi-value">{{ totalBilled | number:'1.2-2' }}</div>
          <div class="kpi-sub">\u062C.\u0645 \u0645\u062A\u0639\u0627\u0642\u062F \u0639\u0644\u064A\u0647\u0627</div>
        </div>
        <div class="metric-card kpi-card kpi-e">
          <div class="kpi-icon"><i class="fa-solid fa-circle-check"></i></div>
          <div class="kpi-label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639</div>
          <div class="kpi-value">{{ totalPaid | number:'1.2-2' }}</div>
          <div class="kpi-sub">\u062C.\u0645 \u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645\u0647\u0627</div>
        </div>
        <div class="metric-card kpi-card kpi-r">
          <div class="kpi-icon"><i class="fa-solid fa-clock"></i></div>
          <div class="kpi-label">\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A</div>
          <div class="kpi-value">{{ remainingBalance | number:'1.2-2' }}</div>
          <div class="kpi-sub">\u062C.\u0645 \u0645\u0639\u0644\u0642\u0629</div>
        </div>
        <div class="metric-card kpi-card kpi-v">
          <div class="kpi-icon"><i class="fa-solid fa-handshake"></i></div>
          <div class="kpi-label">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0635\u0641\u0642\u0627\u062A</div>
          <div class="kpi-value">{{ deals.length }}</div>
          <div class="kpi-sub">\u0639\u0642\u0648\u062F \u0635\u0641\u0642\u0627\u062A</div>
        </div>
      </div>

      <!-- Deals Table -->
      <div class="section-card glass-panel margin-top">
        <div class="section-head">
          <h3><i class="fa-solid fa-file-contract" style="color:var(--violet-light)"></i> \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F</h3>
          <span class="badge badge-v">{{ deals.length }} \u0635\u0641\u0642\u0627\u062A</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629</th>
                <th>\u0627\u0644\u0642\u0633\u0645</th>
                <th>\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629</th>
                <th>\u0627\u0644\u0645\u062F\u0641\u0648\u0639</th>
                <th>\u0627\u0644\u0645\u062A\u0628\u0642\u064A</th>
                <th>\u0627\u0644\u062D\u0627\u0644\u0629</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let deal of deals">
                <td style="font-weight:700; color:#fff">{{ deal.title }}</td>
                <td>{{ deal.department?.name || '\u0639\u0627\u0645' }}</td>
                <td>{{ (deal.calculated_total || 0) | number:'1.2-2' }} \u062C.\u0645</td>
                <td style="color:var(--emerald-light); font-weight:600">{{ (deal.calculated_paid || 0) | number:'1.2-2' }} \u062C.\u0645</td>
                <td style="color:var(--rose-light); font-weight:600">{{ (deal.remaining_balance || 0) | number:'1.2-2' }} \u062C.\u0645</td>
                <td><span class="badge" [ngClass]="deal.status">{{ deal.status }}</span></td>
              </tr>
              <tr *ngIf="deals.length === 0">
                <td colspan="6">
                  <div class="empty-state">
                    <i class="fa-solid fa-file-circle-xmark"></i>
                    <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0642\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tasks Table -->
      <div class="section-card glass-panel margin-top">
        <div class="section-head">
          <h3><i class="fa-solid fa-list-check" style="color:var(--teal-light)"></i> \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629</h3>
          <span class="badge badge-t">{{ tasks.length }} \u0645\u0647\u0627\u0645</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629</th>
                <th>\u0627\u0644\u062A\u0635\u0646\u064A\u0641 / \u0627\u0644\u0642\u0633\u0645</th>
                <th>\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u0648\u0646</th>
                <th>\u0633\u0639\u0631 \u0627\u0644\u0639\u0645\u064A\u0644</th>
                <th>\u0627\u0644\u062D\u0627\u0644\u0629</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let task of tasks">
                <td style="font-weight:700; color:#fff">{{ task.title }}</td>
                <td>{{ task.subCategory?.name_ar || task.department?.name || '-' }}</td>
                <td>
                  <span *ngFor="let u of task.users" class="user-chip">{{ u.name }}</span>
                </td>
                <td>{{ (task.client_price || 0) | number:'1.2-2' }} \u062C.\u0645</td>
                <td><span class="badge" [ngClass]="task.status">{{ task.status }}</span></td>
              </tr>
              <tr *ngIf="tasks.length === 0">
                <td colspan="5">
                  <div class="empty-state">
                    <i class="fa-solid fa-clipboard-check"></i>
                    <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;7d93ea7b8d9a9de58c0d35ffc2669208623691ebade8df742bf7b9c71730dd12;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/clients/client-detail.component.ts */\n:host {\n  display: block;\n  direction: rtl;\n  text-align: right;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n}\n.loading-shell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: var(--text-2);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--violet-soft);\n  border-top-color: var(--violet);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-shell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 12px;\n  text-align: center;\n  color: var(--text-2);\n}\n.error-shell i {\n  font-size: 3rem;\n  color: var(--rose-light);\n  opacity: 0.6;\n}\n.error-shell h3 {\n  color: #fff;\n  font-size: 1.2rem;\n}\n.client-detail-container {\n  padding: 28px 32px;\n  direction: rtl;\n  text-align: right;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.top-nav-bar {\n  margin-bottom: 18px;\n}\n.margin-top {\n  margin-top: 20px;\n}\n.back-btn {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  padding: 8px 16px;\n  border-radius: var(--r);\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-family: inherit;\n  text-decoration: none;\n}\n.back-btn:hover {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border-color: var(--border-v);\n  transform: translateX(-2px);\n}\n.detail-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 28px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  gap: 16px;\n  flex-wrap: wrap;\n  direction: rtl;\n  text-align: right;\n}\n.header-main-info {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.client-av-lg {\n  width: 58px;\n  height: 58px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #fff;\n  box-shadow: 0 0 24px var(--violet-glow);\n  flex-shrink: 0;\n}\n.client-titles h2 {\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: #fff;\n  margin: 0 0 4px 0;\n  letter-spacing: -0.3px;\n}\n.client-email {\n  font-size: 0.85rem;\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n}\n.client-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 16px;\n  border-radius: var(--r-full);\n  background: var(--emerald-soft);\n  color: var(--emerald-light);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.pulse-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--emerald-light);\n  box-shadow: 0 0 10px var(--emerald-light);\n  animation: pulse 1.8s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.3);\n  }\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n  gap: 16px;\n  direction: rtl;\n}\n.section-card {\n  padding: 0;\n  overflow: hidden;\n  border-radius: var(--r-lg);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  direction: rtl;\n  text-align: right;\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n  background: rgba(99, 102, 241, 0.05);\n}\n.section-head h3 {\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n}\n.table-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  direction: rtl;\n  text-align: right;\n}\nth {\n  padding: 13px 18px;\n  border-bottom: 1px solid rgba(99, 102, 241, 0.18);\n  color: var(--violet-light);\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(99, 102, 241, 0.05);\n  white-space: nowrap;\n  text-align: right;\n}\ntd {\n  padding: 14px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n  text-align: right;\n}\ntr:last-child td {\n  border-bottom: none;\n}\ntr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n.user-chip {\n  background: rgba(99, 102, 241, 0.12);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  color: var(--violet-light);\n  padding: 2px 8px;\n  border-radius: 100px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  margin-left: 4px;\n  display: inline-block;\n}\n.empty-state {\n  text-align: center;\n  padding: 32px 16px;\n  color: var(--text-2);\n}\n.empty-state i {\n  font-size: 2.2rem;\n  margin-bottom: 8px;\n  opacity: 0.4;\n  display: block;\n}\n.empty-state p {\n  font-size: 0.86rem;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .client-detail-container {\n    padding: 16px;\n  }\n  .metrics-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=client-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailComponent, { className: "ClientDetailComponent", filePath: "src/app/components/clients/client-detail.component.ts", lineNumber: 264 });
})();
export {
  ClientDetailComponent
};
//# sourceMappingURL=chunk-6DYRR6QE.js.map
