import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZYG2ULWX.js";

// src/app/services/toast.service.ts
var ToastService = class _ToastService {
  toastsSubject = new BehaviorSubject([]);
  toasts$ = this.toastsSubject.asObservable();
  show(type, message, title, duration = 4e3) {
    const id = Math.random().toString(36).substring(2, 9);
    const toast = { id, type, message, title, duration };
    const current = this.toastsSubject.getValue();
    this.toastsSubject.next([...current, toast]);
    if (duration > 0) {
      setTimeout(() => {
        this.remove(id);
      }, duration);
    }
  }
  success(message, title = "\u062A\u0645\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0628\u0646\u062C\u0627\u062D") {
    this.show("success", message, title);
  }
  error(message, title = "\u062D\u062F\u062B \u062E\u0637\u0623") {
    this.show("error", message, title, 5e3);
  }
  info(message, title = "\u0645\u0639\u0644\u0648\u0645\u0627\u062A") {
    this.show("info", message, title);
  }
  warning(message, title = "\u062A\u0646\u0628\u064A\u0647") {
    this.show("warning", message, title);
  }
  remove(id) {
    const current = this.toastsSubject.getValue();
    this.toastsSubject.next(current.filter((t) => t.id !== id));
  }
  clear() {
    this.toastsSubject.next([]);
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-ERZASVQQ.js.map
