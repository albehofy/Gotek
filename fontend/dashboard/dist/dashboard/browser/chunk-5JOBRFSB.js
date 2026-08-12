import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-6TEPOG2V.js";
import {
  ApiService
} from "./chunk-VFRQX7SG.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CK3LQYPJ.js";

// src/app/components/client-portal/client-portal-view.component.ts
function ClientPortalViewComponent_div_0_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 23);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 24);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "div", 25);
    \u0275\u0275element(14, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "small", 27);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "span", 28);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deal_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(deal_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 8, deal_r1.calculated_total, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 11, deal_r1.calculated_paid, "1.2-2"), " EGP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 14, deal_r1.remaining_balance, "1.2-2"), " EGP");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", deal_r1.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", deal_r1.progress, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(deal_r1.status);
  }
}
function ClientPortalViewComponent_div_0_div_54_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r3.scope);
  }
}
function ClientPortalViewComponent_div_0_div_54_div_7_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 45);
  }
  if (rf & 2) {
    const att_r4 = ctx.$implicit;
    \u0275\u0275property("src", att_r4.file_url, \u0275\u0275sanitizeUrl);
  }
}
function ClientPortalViewComponent_div_0_div_54_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "small", 27);
    \u0275\u0275text(2, "Deliverables & Attachments:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43);
    \u0275\u0275template(4, ClientPortalViewComponent_div_0_div_54_div_7_img_4_Template, 1, 1, "img", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", task_r3.attachments);
  }
}
function ClientPortalViewComponent_div_0_div_54_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", note_r5.user == null ? null : note_r5.user.name, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", note_r5.note, " ");
  }
}
function ClientPortalViewComponent_div_0_div_54_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ClientPortalViewComponent_div_0_div_54_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const task_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.approveTask(task_r3));
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " Approve Deliverable ");
    \u0275\u0275elementEnd();
  }
}
function ClientPortalViewComponent_div_0_div_54_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ClientPortalViewComponent_div_0_div_54_div_15_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const task_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(task_r3.tempNoteText, $event) || (task_r3.tempNoteText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275listener("click", function ClientPortalViewComponent_div_0_div_54_div_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const task_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.submitNote(task_r3));
    });
    \u0275\u0275text(3, "Submit Feedback");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", task_r3.tempNoteText);
  }
}
function ClientPortalViewComponent_div_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "h4", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ClientPortalViewComponent_div_0_div_54_p_6_Template, 2, 1, "p", 32)(7, ClientPortalViewComponent_div_0_div_54_div_7_Template, 5, 1, "div", 33);
    \u0275\u0275elementStart(8, "div", 34);
    \u0275\u0275template(9, ClientPortalViewComponent_div_0_div_54_div_9_Template, 4, 2, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 36);
    \u0275\u0275template(11, ClientPortalViewComponent_div_0_div_54_button_11_Template, 3, 0, "button", 37);
    \u0275\u0275elementStart(12, "button", 38);
    \u0275\u0275listener("click", function ClientPortalViewComponent_div_0_div_54_Template_button_click_12_listener() {
      const task_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.openNoteInput(task_r3));
    });
    \u0275\u0275element(13, "i", 39);
    \u0275\u0275text(14, " Add Revision Notes ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ClientPortalViewComponent_div_0_div_54_div_15_Template, 4, 1, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r3.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r3.scope);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r3.attachments && task_r3.attachments.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", task_r3.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", task_r3.status !== "approved" && task_r3.status !== "done");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", task_r3.showNoteInput);
  }
}
function ClientPortalViewComponent_div_0_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " No active deliverables currently assigned to your account. ");
    \u0275\u0275elementEnd();
  }
}
function ClientPortalViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2");
    \u0275\u0275element(4, "i", 3);
    \u0275\u0275text(5, " Client Portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "span", 7);
    \u0275\u0275text(11, "Total Billed & Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h3", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 6)(16, "span", 7);
    \u0275\u0275text(17, "Total Paid Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 6)(22, "span", 7);
    \u0275\u0275text(23, "Outstanding Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h3", 10);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "h3", 12);
    \u0275\u0275element(29, "i", 13);
    \u0275\u0275text(30, " Your Active Contracts & Deals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 14)(32, "table", 15)(33, "thead")(34, "tr")(35, "th");
    \u0275\u0275text(36, "Deal Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Paid Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "tbody");
    \u0275\u0275template(48, ClientPortalViewComponent_div_0_tr_48_Template, 20, 17, "tr", 16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 11)(50, "h3", 12);
    \u0275\u0275element(51, "i", 17);
    \u0275\u0275text(52, " Deliverables & Task Approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 18);
    \u0275\u0275template(54, ClientPortalViewComponent_div_0_div_54_Template, 16, 7, "div", 19)(55, ClientPortalViewComponent_div_0_div_55_Template, 2, 0, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Welcome ", ctx_r6.portalData.client_name, " \u2014 Track contracts, financial balances & approve deliverables");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 7, ctx_r6.portalData.financial_summary.total_billed, "1.2-2"), " EGP");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 10, ctx_r6.portalData.financial_summary.total_paid, "1.2-2"), " EGP");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 13, ctx_r6.portalData.financial_summary.remaining_balance, "1.2-2"), " EGP");
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r6.portalData.deals);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r6.portalData.tasks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r6.portalData.tasks || ctx_r6.portalData.tasks.length === 0);
  }
}
var ClientPortalViewComponent = class _ClientPortalViewComponent {
  apiService = inject(ApiService);
  portalData = null;
  ngOnInit() {
    this.loadPortalData();
  }
  loadPortalData() {
    this.apiService.getClientPortalDashboard().subscribe((res) => {
      this.portalData = res.data || res;
    });
  }
  approveTask(task) {
    this.apiService.approveClientTask(task.id).subscribe(() => {
      task.status = "approved";
    });
  }
  openNoteInput(task) {
    task.showNoteInput = !task.showNoteInput;
  }
  submitNote(task) {
    if (!task.tempNoteText || !task.tempNoteText.trim())
      return;
    this.apiService.addClientTaskNote(task.id, task.tempNoteText).subscribe((res) => {
      if (res.data) {
        if (!task.notes)
          task.notes = [];
        task.notes.push(res.data);
        task.status = "client_feedback";
        task.tempNoteText = "";
        task.showNoteInput = false;
      }
    });
  }
  static \u0275fac = function ClientPortalViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientPortalViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientPortalViewComponent, selectors: [["app-client-portal-view"]], decls: 1, vars: 1, consts: [["class", "client-portal-container", 4, "ngIf"], [1, "client-portal-container"], [1, "portal-header"], [1, "fa-solid", "fa-id-card", 2, "color", "var(--violet-light)"], [1, "subtitle"], [1, "metrics-grid"], [1, "metric-card", "glass-panel"], [1, "label"], [1, "value", 2, "color", "#fff"], [1, "value", 2, "color", "var(--emerald-light)"], [1, "value", 2, "color", "var(--rose-light)"], [1, "section-card", "glass-panel", "margin-top"], [2, "font-size", "1rem", "font-weight", "700", "color", "#fff", "display", "flex", "align-items", "center", "gap", "8px"], [1, "fa-solid", "fa-file-contract", 2, "color", "var(--violet-light)"], [1, "table-responsive", "margin-top"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-list-check", 2, "color", "var(--teal-light)"], [1, "tasks-portal-list", "margin-top", 2, "display", "flex", "flex-direction", "column", "gap", "14px"], ["class", "task-portal-card glass-panel", "style", "background:var(--bg-card); border:1px solid var(--border); border-radius:var(--r-lg); padding:20px;", 4, "ngFor", "ngForOf"], ["style", "text-align:center; padding:32px; color:var(--text-2);", 4, "ngIf"], [2, "font-weight", "700", "color", "#fff"], [2, "color", "#fff"], [2, "color", "var(--emerald-light)", "font-weight", "700"], [2, "color", "var(--rose-light)", "font-weight", "700"], [1, "progress-bar-bg", 2, "background", "rgba(255,255,255,0.06)", "height", "6px", "border-radius", "10px", "overflow", "hidden", "width", "100px", "display", "inline-block", "vertical-align", "middle", "margin-right", "6px"], [1, "progress-bar-fill", 2, "height", "100%", "background", "linear-gradient(90deg, var(--violet), var(--teal))", "border-radius", "10px"], [2, "color", "var(--text-2)", "font-size", "0.75rem"], [1, "badge", "badge-v"], [1, "task-portal-card", "glass-panel", 2, "background", "var(--bg-card)", "border", "1px solid var(--border)", "border-radius", "var(--r-lg)", "padding", "20px"], [1, "card-header", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "10px"], [2, "color", "#fff", "font-size", "1rem", "font-weight", "700"], ["class", "task-scope", "style", "font-size:0.86rem; color:var(--text-2); margin-bottom:12px;", 4, "ngIf"], ["class", "deliverables-preview", "style", "margin-bottom:12px;", 4, "ngIf"], [1, "notes-section", 2, "margin", "12px 0", "display", "flex", "flex-direction", "column", "gap", "6px"], ["class", "note-bubble", "style", "background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:8px; font-size:0.84rem; color:var(--text-2); border:1px solid var(--border);", 4, "ngFor", "ngForOf"], [1, "card-actions", 2, "display", "flex", "gap", "10px", "margin-top", "12px", "flex-wrap", "wrap"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-glass", 3, "click"], [1, "fa-solid", "fa-comment"], ["class", "note-input-box", "style", "margin-top:12px;", 4, "ngIf"], [1, "task-scope", 2, "font-size", "0.86rem", "color", "var(--text-2)", "margin-bottom", "12px"], [1, "deliverables-preview", 2, "margin-bottom", "12px"], [1, "attachments-grid", 2, "display", "flex", "gap", "8px", "margin-top", "6px"], ["class", "thumb-img", "style", "width:64px; height:64px; object-fit:cover; border-radius:8px; border:1px solid var(--border);", 3, "src", 4, "ngFor", "ngForOf"], [1, "thumb-img", 2, "width", "64px", "height", "64px", "object-fit", "cover", "border-radius", "8px", "border", "1px solid var(--border)", 3, "src"], [1, "note-bubble", 2, "background", "rgba(255,255,255,0.03)", "padding", "8px 12px", "border-radius", "8px", "font-size", "0.84rem", "color", "var(--text-2)", "border", "1px solid var(--border)"], [1, "author", "font-bold", 2, "color", "#fff", "font-weight", "700"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-check-double"], [1, "note-input-box", 2, "margin-top", "12px"], ["placeholder", "Type your feedback / revision notes...", "rows", "2", 2, "width", "100%", "padding", "10px", "background", "var(--bg-input)", "border", "1px solid var(--border)", "border-radius", "8px", "color", "#fff", "font-family", "inherit", "outline", "none", "margin-bottom", "8px", 3, "ngModelChange", "ngModel"], [2, "text-align", "center", "padding", "32px", "color", "var(--text-2)"]], template: function ClientPortalViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ClientPortalViewComponent_div_0_Template, 56, 16, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.portalData);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.client-portal-container[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.portal-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.portal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  padding: 22px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  position: relative;\n  overflow: hidden;\n}\n.metric-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 8px;\n}\n.metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 900;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.crm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  direction: ltr;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n}\n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.crm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.015);\n}\n/*# sourceMappingURL=client-portal-view.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientPortalViewComponent, [{
    type: Component,
    args: [{ selector: "app-client-portal-view", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="client-portal-container" *ngIf="portalData">
      <div class="portal-header">
        <div>
          <h2><i class="fa-solid fa-id-card" style="color:var(--violet-light);"></i> Client Portal</h2>
          <p class="subtitle">Welcome {{ portalData.client_name }} \u2014 Track contracts, financial balances &amp; approve deliverables</p>
        </div>
      </div>

      <!-- Financial Account Summary -->
      <div class="metrics-grid">
        <div class="metric-card glass-panel">
          <span class="label">Total Billed &amp; Services</span>
          <h3 class="value" style="color:#fff;">{{ portalData.financial_summary.total_billed | number:'1.2-2' }} EGP</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">Total Paid Amount</span>
          <h3 class="value" style="color:var(--emerald-light);">{{ portalData.financial_summary.total_paid | number:'1.2-2' }} EGP</h3>
        </div>

        <div class="metric-card glass-panel">
          <span class="label">Outstanding Balance</span>
          <h3 class="value" style="color:var(--rose-light);">{{ portalData.financial_summary.remaining_balance | number:'1.2-2' }} EGP</h3>
        </div>
      </div>

      <!-- Contracts & Deals Section -->
      <div class="section-card glass-panel margin-top">
        <h3 style="font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-file-contract" style="color:var(--violet-light);"></i> Your Active Contracts &amp; Deals</h3>
        <div class="table-responsive margin-top">
          <table class="crm-table">
            <thead>
              <tr>
                <th>Deal Title</th>
                <th>Total Value</th>
                <th>Paid Amount</th>
                <th>Balance</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let deal of portalData.deals">
                <td style="font-weight:700; color:#fff;">{{ deal.title }}</td>
                <td style="color:#fff;">{{ deal.calculated_total | number:'1.2-2' }} EGP</td>
                <td style="color:var(--emerald-light); font-weight:700;">{{ deal.calculated_paid | number:'1.2-2' }} EGP</td>
                <td style="color:var(--rose-light); font-weight:700;">{{ deal.remaining_balance | number:'1.2-2' }} EGP</td>
                <td>
                  <div class="progress-bar-bg" style="background:rgba(255,255,255,0.06); height:6px; border-radius:10px; overflow:hidden; width:100px; display:inline-block; vertical-align:middle; margin-right:6px;">
                    <div class="progress-bar-fill" [style.width.%]="deal.progress" style="height:100%; background:linear-gradient(90deg, var(--violet), var(--teal)); border-radius:10px;"></div>
                  </div>
                  <small style="color:var(--text-2); font-size:0.75rem;">{{ deal.progress }}%</small>
                </td>
                <td><span class="badge badge-v">{{ deal.status }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Client Tasks List (Completed & In-Progress) -->
      <div class="section-card glass-panel margin-top">
        <h3 style="font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-list-check" style="color:var(--teal-light);"></i> Deliverables &amp; Task Approvals</h3>
        <div class="tasks-portal-list margin-top" style="display:flex; flex-direction:column; gap:14px;">
          <div class="task-portal-card glass-panel" *ngFor="let task of portalData.tasks" style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--r-lg); padding:20px;">
            <div class="card-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h4 style="color:#fff; font-size:1rem; font-weight:700;">{{ task.title }}</h4>
              <span class="badge badge-v">{{ task.status }}</span>
            </div>
            <p class="task-scope" *ngIf="task.scope" style="font-size:0.86rem; color:var(--text-2); margin-bottom:12px;">{{ task.scope }}</p>

            <!-- Attachments / Deliverables -->
            <div class="deliverables-preview" *ngIf="task.attachments && task.attachments.length > 0" style="margin-bottom:12px;">
              <small style="color:var(--text-2); font-size:0.75rem;">Deliverables &amp; Attachments:</small>
              <div class="attachments-grid" style="display:flex; gap:8px; margin-top:6px;">
                <img *ngFor="let att of task.attachments" [src]="att.file_url" class="thumb-img" style="width:64px; height:64px; object-fit:cover; border-radius:8px; border:1px solid var(--border);" />
              </div>
            </div>

            <!-- Notes & Feedback Thread -->
            <div class="notes-section" style="margin:12px 0; display:flex; flex-direction:column; gap:6px;">
              <div class="note-bubble" *ngFor="let note of task.notes" style="background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:8px; font-size:0.84rem; color:var(--text-2); border:1px solid var(--border);">
                <span class="author font-bold" style="color:#fff; font-weight:700;">{{ note.user?.name }}:</span> {{ note.note }}
              </div>
            </div>

            <!-- Client Action Buttons (Approve / Leave Note) -->
            <div class="card-actions" style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap;">
              <button class="btn btn-primary" (click)="approveTask(task)" *ngIf="task.status !== 'approved' && task.status !== 'done'">
                <i class="fa-solid fa-check-double"></i> Approve Deliverable
              </button>
              <button class="btn btn-glass" (click)="openNoteInput(task)">
                <i class="fa-solid fa-comment"></i> Add Revision Notes
              </button>
            </div>

            <div class="note-input-box" *ngIf="task.showNoteInput" style="margin-top:12px;">
              <textarea [(ngModel)]="task.tempNoteText" placeholder="Type your feedback / revision notes..." rows="2" style="width:100%; padding:10px; background:var(--bg-input); border:1px solid var(--border); border-radius:8px; color:#fff; font-family:inherit; outline:none; margin-bottom:8px;"></textarea>
              <button class="btn btn-primary" (click)="submitNote(task)">Submit Feedback</button>
            </div>
          </div>

          <div *ngIf="!portalData.tasks || portalData.tasks.length === 0" style="text-align:center; padding:32px; color:var(--text-2);">
            No active deliverables currently assigned to your account.
          </div>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;b2e45e50700441bf5ecf854eb8262cf0413ba7a5b58307f5963dbe938fc33ce9;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/client-portal/client-portal-view.component.ts */\n:host {\n  display: block;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.client-portal-container {\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image: var(--bg-gradient);\n  background-attachment: fixed;\n}\n.portal-header {\n  margin-bottom: 24px;\n}\n.portal-header h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.subtitle {\n  color: var(--text-2);\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.metric-card {\n  padding: 22px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  position: relative;\n  overflow: hidden;\n}\n.metric-card .label {\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: block;\n  margin-bottom: 8px;\n}\n.metric-card .value {\n  font-size: 1.8rem;\n  font-weight: 900;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n.section-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 24px;\n}\n.margin-top {\n  margin-top: 20px;\n}\n.crm-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  direction: ltr;\n}\n.crm-table th {\n  text-align: left;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-2);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n}\n.crm-table td {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  font-size: 0.86rem;\n  color: #fff;\n  vertical-align: middle;\n}\n.crm-table tr:last-child td {\n  border-bottom: none;\n}\n.crm-table tr:hover td {\n  background: rgba(255, 255, 255, 0.015);\n}\n/*# sourceMappingURL=client-portal-view.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientPortalViewComponent, { className: "ClientPortalViewComponent", filePath: "src/app/components/client-portal/client-portal-view.component.ts", lineNumber: 139 });
})();
export {
  ClientPortalViewComponent
};
//# sourceMappingURL=chunk-5JOBRFSB.js.map
