import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZYG2ULWX.js";

// src/app/services/confirm.service.ts
var ConfirmService = class _ConfirmService {
  confirmSubject = new BehaviorSubject(null);
  confirm$ = this.confirmSubject.asObservable();
  confirm(config) {
    this.confirmSubject.next({
      title: config.title || "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0625\u062C\u0631\u0627\u0621",
      message: config.message,
      icon: config.icon || (config.type === "danger" ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-circle-question"),
      confirmText: config.confirmText || "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0625\u062C\u0631\u0627\u0621",
      cancelText: config.cancelText || "\u0625\u0644\u063A\u0627\u0621",
      type: config.type || "danger",
      accept: config.accept,
      reject: config.reject
    });
  }
  accept() {
    const current = this.confirmSubject.getValue();
    if (current && current.accept) {
      current.accept();
    }
    this.confirmSubject.next(null);
  }
  reject() {
    const current = this.confirmSubject.getValue();
    if (current && current.reject) {
      current.reject();
    }
    this.confirmSubject.next(null);
  }
  close() {
    this.confirmSubject.next(null);
  }
  static \u0275fac = function ConfirmService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmService, factory: _ConfirmService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ConfirmService
};
//# sourceMappingURL=chunk-YURY4BWO.js.map
