import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-JBOK22UG.js";
import {
  CommonModule,
  Component,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZYG2ULWX.js";

// src/app/components/portfolio/portfolio-management.component.ts
function PortfolioManagementComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", tab_r1.route);
    \u0275\u0275advance();
    \u0275\u0275classMap(tab_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r1.labelAr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r1.labelEn);
  }
}
var PortfolioManagementComponent = class _PortfolioManagementComponent {
  tabs = [
    { route: "/portfolio/projects", icon: "fa-solid fa-diagram-project", labelAr: "\u0645\u0634\u0627\u0631\u064A\u0639", labelEn: "Projects" },
    { route: "/portfolio/categories", icon: "fa-solid fa-tags", labelAr: "\u062A\u0635\u0646\u064A\u0641\u0627\u062A", labelEn: "Categories" },
    { route: "/portfolio/services", icon: "fa-solid fa-toolbox", labelAr: "\u062E\u062F\u0645\u0627\u062A", labelEn: "Services" },
    { route: "/portfolio/blogs", icon: "fa-solid fa-newspaper", labelAr: "\u0645\u0642\u0627\u0644\u0627\u062A", labelEn: "Blogs" },
    { route: "/portfolio/testimonials", icon: "fa-solid fa-quote-left", labelAr: "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621", labelEn: "Testimonials" },
    { route: "/portfolio/faqs", icon: "fa-solid fa-circle-question", labelAr: "\u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629", labelEn: "FAQs" },
    { route: "/portfolio/about", icon: "fa-solid fa-building-user", labelAr: "\u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629", labelEn: "About" }
  ];
  static \u0275fac = function PortfolioManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioManagementComponent, selectors: [["app-portfolio-management"]], decls: 13, vars: 1, consts: [[1, "portfolio-shell"], [1, "portfolio-header"], [1, "header-title"], [1, "fa-solid", "fa-briefcase", "header-icon"], [1, "subtitle"], [1, "portfolio-tabs"], ["routerLinkActive", "active", "class", "tab-link", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "portfolio-content"], ["routerLinkActive", "active", 1, "tab-link", 3, "routerLink"], [1, "tab-label-ar"], [1, "tab-label-en"]], template: function PortfolioManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "div")(5, "h1");
      \u0275\u0275text(6, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0631\u0642\u0645\u064A | Portfolio Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "\u0625\u062F\u0627\u0631\u0629 \u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "nav", 5);
      \u0275\u0275template(10, PortfolioManagementComponent_a_10_Template, 6, 5, "a", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "main", 7);
      \u0275\u0275element(12, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.tabs);
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.portfolio-shell[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: var(--bg);\n  direction: rtl;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n}\n.portfolio-header[_ngcontent-%COMP%] {\n  padding: 28px 32px 20px;\n  border-bottom: 1px solid var(--border);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.06) 0%,\n      rgba(6, 182, 212, 0.04) 100%);\n  position: relative;\n  overflow: hidden;\n}\n.portfolio-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -40px;\n  left: -40px;\n  width: 180px;\n  height: 180px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.12) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--violet);\n  background: rgba(99, 102, 241, 0.12);\n  border-radius: 14px;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.portfolio-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0 0 4px;\n  line-height: 1.3;\n}\n.portfolio-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-2);\n  margin: 0;\n}\n.portfolio-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-sidebar);\n  overflow-x: auto;\n  scrollbar-width: none;\n  gap: 4px;\n}\n.portfolio-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tab-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  padding: 14px 20px;\n  text-decoration: none;\n  border-bottom: 3px solid transparent;\n  color: var(--text-2);\n  transition: color 0.2s, border-color 0.2s;\n  white-space: nowrap;\n  flex-shrink: 0;\n  position: relative;\n}\n.tab-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  transition: color 0.2s;\n}\n.tab-link[_ngcontent-%COMP%]   .tab-label-ar[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.tab-link[_ngcontent-%COMP%]   .tab-label-en[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 500;\n  opacity: 0.7;\n  line-height: 1;\n}\n.tab-link[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n  background: rgba(255, 255, 255, 0.03);\n}\n.tab-link.active[_ngcontent-%COMP%] {\n  color: var(--violet);\n  border-bottom-color: var(--violet);\n}\n.tab-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--violet);\n}\n.portfolio-content[_ngcontent-%COMP%] {\n  padding: 0;\n  min-height: calc(100vh - 160px);\n}\n@media (max-width: 768px) {\n  .portfolio-header[_ngcontent-%COMP%] {\n    padding: 20px 16px 14px;\n  }\n  .portfolio-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .header-icon[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    font-size: 1.4rem;\n    border-radius: 10px;\n  }\n  .portfolio-tabs[_ngcontent-%COMP%] {\n    padding: 0 8px;\n  }\n  .tab-link[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n  }\n  .tab-link[_ngcontent-%COMP%]   .tab-label-en[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=portfolio-management.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioManagementComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio-management", standalone: true, imports: [CommonModule, RouterModule], template: '<div class="portfolio-shell">\n  <header class="portfolio-header">\n    <div class="header-title">\n      <i class="fa-solid fa-briefcase header-icon"></i>\n      <div>\n        <h1>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0631\u0642\u0645\u064A | Portfolio Management</h1>\n        <p class="subtitle">\u0625\u062F\u0627\u0631\u0629 \u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</p>\n      </div>\n    </div>\n  </header>\n\n  <nav class="portfolio-tabs">\n    <a *ngFor="let tab of tabs" \n       [routerLink]="tab.route" \n       routerLinkActive="active" \n       class="tab-link">\n      <i [class]="tab.icon"></i>\n      <span class="tab-label-ar">{{ tab.labelAr }}</span>\n      <span class="tab-label-en">{{ tab.labelEn }}</span>\n    </a>\n  </nav>\n\n  <main class="portfolio-content">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n', styles: ['/* src/app/components/portfolio/portfolio-management.component.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.portfolio-shell {\n  min-height: 100%;\n  background: var(--bg);\n  direction: rtl;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n}\n.portfolio-header {\n  padding: 28px 32px 20px;\n  border-bottom: 1px solid var(--border);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.06) 0%,\n      rgba(6, 182, 212, 0.04) 100%);\n  position: relative;\n  overflow: hidden;\n}\n.portfolio-header::before {\n  content: "";\n  position: absolute;\n  top: -40px;\n  left: -40px;\n  width: 180px;\n  height: 180px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.12) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.header-icon {\n  font-size: 2rem;\n  color: var(--violet);\n  background: rgba(99, 102, 241, 0.12);\n  border-radius: 14px;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.portfolio-header h1 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0 0 4px;\n  line-height: 1.3;\n}\n.portfolio-header .subtitle {\n  font-size: 0.85rem;\n  color: var(--text-2);\n  margin: 0;\n}\n.portfolio-tabs {\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-sidebar);\n  overflow-x: auto;\n  scrollbar-width: none;\n  gap: 4px;\n}\n.portfolio-tabs::-webkit-scrollbar {\n  display: none;\n}\n.tab-link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  padding: 14px 20px;\n  text-decoration: none;\n  border-bottom: 3px solid transparent;\n  color: var(--text-2);\n  transition: color 0.2s, border-color 0.2s;\n  white-space: nowrap;\n  flex-shrink: 0;\n  position: relative;\n}\n.tab-link i {\n  font-size: 1.1rem;\n  transition: color 0.2s;\n}\n.tab-link .tab-label-ar {\n  font-size: 0.82rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.tab-link .tab-label-en {\n  font-size: 0.62rem;\n  font-weight: 500;\n  opacity: 0.7;\n  line-height: 1;\n}\n.tab-link:hover {\n  color: var(--text);\n  background: rgba(255, 255, 255, 0.03);\n}\n.tab-link.active {\n  color: var(--violet);\n  border-bottom-color: var(--violet);\n}\n.tab-link.active i {\n  color: var(--violet);\n}\n.portfolio-content {\n  padding: 0;\n  min-height: calc(100vh - 160px);\n}\n@media (max-width: 768px) {\n  .portfolio-header {\n    padding: 20px 16px 14px;\n  }\n  .portfolio-header h1 {\n    font-size: 1.1rem;\n  }\n  .header-icon {\n    width: 48px;\n    height: 48px;\n    font-size: 1.4rem;\n    border-radius: 10px;\n  }\n  .portfolio-tabs {\n    padding: 0 8px;\n  }\n  .tab-link {\n    padding: 12px 14px;\n  }\n  .tab-link .tab-label-en {\n    display: none;\n  }\n}\n/*# sourceMappingURL=portfolio-management.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioManagementComponent, { className: "PortfolioManagementComponent", filePath: "src/app/components/portfolio/portfolio-management.component.ts", lineNumber: 12 });
})();
export {
  PortfolioManagementComponent
};
//# sourceMappingURL=chunk-37ON67WV.js.map
