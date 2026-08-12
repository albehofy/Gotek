import {
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-TRCV7UC3.js";
import {
  Component,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-CK3LQYPJ.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-H2GIFPNI.js").then((m) => m.LoginComponent)
  },
  {
    path: "",
    loadComponent: () => import("./chunk-HEP4K5SE.js").then((m) => m.MainLayoutComponent),
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-O2EDFK5J.js").then((m) => m.ControllerDashboardComponent)
      },
      {
        path: "clients",
        loadComponent: () => import("./chunk-QIBAG4D6.js").then((m) => m.ClientsListComponent)
      },
      {
        path: "clients/:id",
        loadComponent: () => import("./chunk-4YTPGKR3.js").then((m) => m.ClientDetailComponent)
      },
      {
        path: "deals",
        loadComponent: () => import("./chunk-QEWLCIVB.js").then((m) => m.DealsManagementComponent)
      },
      {
        path: "tasks",
        loadComponent: () => import("./chunk-YQMDT32L.js").then((m) => m.TasksBoardComponent)
      },
      {
        path: "departments",
        loadComponent: () => import("./chunk-AZGIJPV3.js").then((m) => m.DepartmentsSectionsComponent)
      },
      {
        path: "finance",
        loadComponent: () => import("./chunk-IQUKW2EL.js").then((m) => m.FinanceDashboardComponent)
      },
      {
        path: "client-portal",
        loadComponent: () => import("./chunk-5JOBRFSB.js").then((m) => m.ClientPortalViewComponent)
      },
      {
        path: "roles",
        loadComponent: () => import("./chunk-LDERBSHQ.js").then((m) => m.RolesManagementComponent)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "Media Glow Dashboard";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], template: "<router-outlet></router-outlet>\n", styles: ["/* src/app/app.component.css */\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
