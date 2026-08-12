import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-RDXGLVA6.js";
import {
  ApiService
} from "./chunk-DCUGWKDF.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  filter,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TC7O2TE3.js";

// src/app/components/shared/notification-center/notification-center.component.ts
function NotificationCenterComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
  }
}
function NotificationCenterComponent_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.unreadCount, " \u063A\u064A\u0631 \u0645\u0642\u0631\u0648\u0621");
  }
}
function NotificationCenterComponent_div_4_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NotificationCenterComponent_div_4_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275text(1, " \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644 \u0643\u0640 \u0645\u0642\u0631\u0648\u0621 ");
    \u0275\u0275elementEnd();
  }
}
function NotificationCenterComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function NotificationCenterComponent_div_4_div_8_Template_div_click_0_listener() {
      const notif_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsRead(notif_r4));
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 22);
    \u0275\u0275listener("click", function NotificationCenterComponent_div_4_div_8_Template_button_click_11_listener($event) {
      const notif_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteNotif(notif_r4, $event));
    });
    \u0275\u0275element(12, "i", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !notif_r4.is_read);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", notif_r4.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getNotifIcon(notif_r4.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, notif_r4.created_at, "short"));
  }
}
function NotificationCenterComponent_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0646\u0628\u064A\u0647\u0627\u062A \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd()();
  }
}
function NotificationCenterComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "span");
    \u0275\u0275text(4, "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, NotificationCenterComponent_div_4_span_5_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, NotificationCenterComponent_div_4_button_6_Template, 2, 0, "button", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275template(8, NotificationCenterComponent_div_4_div_8_Template, 13, 11, "div", 12)(9, NotificationCenterComponent_div_4_div_9_Template, 4, 0, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.unreadCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.unreadCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length === 0);
  }
}
var NotificationCenterComponent = class _NotificationCenterComponent {
  apiService = inject(ApiService);
  notifications = [];
  unreadCount = 0;
  isOpen = false;
  ngOnInit() {
    this.loadNotifications();
  }
  loadNotifications() {
    this.apiService.getNotifications().subscribe((res) => {
      if (res) {
        this.unreadCount = res.unread_count || 0;
        this.notifications = res.data?.data || res.data || [];
      } else {
        this.unreadCount = 0;
        this.notifications = [];
      }
    });
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.loadNotifications();
    }
  }
  markAsRead(notif) {
    if (!notif.is_read) {
      notif.is_read = true;
      if (this.unreadCount > 0)
        this.unreadCount--;
      this.apiService.markNotificationAsRead(notif.id).subscribe();
    }
  }
  markAllRead() {
    this.notifications.forEach((n) => n.is_read = true);
    this.unreadCount = 0;
    this.apiService.markAllNotificationsAsRead().subscribe();
  }
  deleteNotif(notif, event) {
    event.stopPropagation();
    this.notifications = this.notifications.filter((n) => n.id !== notif.id);
    if (!notif.is_read && this.unreadCount > 0)
      this.unreadCount--;
    this.apiService.deleteNotification(notif.id).subscribe();
  }
  getNotifIcon(type) {
    switch (type) {
      case "assignment":
        return "fa-solid fa-user-plus";
      case "mention":
        return "fa-solid fa-at";
      case "status_change":
        return "fa-solid fa-rotate";
      case "client_note":
        return "fa-solid fa-comment-dots";
      default:
        return "fa-solid fa-bell";
    }
  }
  static \u0275fac = function NotificationCenterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationCenterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationCenterComponent, selectors: [["app-notification-center"]], decls: 5, vars: 2, consts: [[1, "notification-bell-wrapper"], [1, "bell-btn", 3, "click"], [1, "fa-solid", "fa-bell", "bell-icon"], ["class", "unread-badge", 4, "ngIf"], ["class", "notification-dropdown", 4, "ngIf"], [1, "unread-badge"], [1, "notification-dropdown"], [1, "notification-header"], [1, "header-title"], ["class", "count-pill", 4, "ngIf"], ["class", "btn-mark-all", 3, "click", 4, "ngIf"], [1, "notification-body"], ["class", "notification-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "count-pill"], [1, "btn-mark-all", 3, "click"], [1, "notification-item", 3, "click"], [1, "notif-icon-col", 3, "ngClass"], [1, "notif-content-col"], [1, "notif-title"], [1, "notif-message"], [1, "notif-time"], [1, "btn-del-notif", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "empty-state"], [1, "fa-solid", "fa-bell-slash"]], template: function NotificationCenterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function NotificationCenterComponent_Template_button_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275template(3, NotificationCenterComponent_span_3_Template, 2, 1, "span", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, NotificationCenterComponent_div_4_Template, 10, 4, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n.bell-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s;\n  font-size: 0.95rem;\n}\n.bell-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v, rgba(99,102,241,0.4));\n  color: var(--violet-light, #a5b4fc);\n  background: var(--violet-soft, rgba(99,102,241,0.12));\n  transform: scale(1.05);\n}\nbody.light-theme[_nghost-%COMP%]   .bell-btn[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .bell-btn[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.06);\n  border-color: rgba(99, 102, 241, 0.15);\n  color: #4a4a6a;\n}\nbody.light-theme[_nghost-%COMP%]   .bell-btn[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .bell-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n  border-color: rgba(99, 102, 241, 0.35);\n  color: var(--violet-2, #4f46e5);\n}\n.unread-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 800;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.55);\n  border: 2px solid var(--bg, #07070f);\n}\nbody.light-theme[_nghost-%COMP%]   .unread-badge[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .unread-badge[_ngcontent-%COMP%] {\n  border-color: #f0f0f8;\n}\n.notification-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  right: auto;\n  width: 360px;\n  direction: rtl;\n  text-align: right;\n  background: #111128;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 18px;\n  box-shadow:\n    0 24px 60px rgba(0, 0, 0, 0.75),\n    0 0 0 1px rgba(99, 102, 241, 0.08),\n    inset 0 1px 0 rgba(255, 255, 255, 0.06);\n  z-index: 1100;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  animation: _ngcontent-%COMP%_notifSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_notifSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\nbody.light-theme[_nghost-%COMP%]   .notification-dropdown[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notification-dropdown[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: rgba(99, 102, 241, 0.2);\n  box-shadow:\n    0 20px 50px rgba(99, 102, 241, 0.14),\n    0 4px 16px rgba(0, 0, 0, 0.08),\n    0 0 0 1px rgba(99, 102, 241, 0.06);\n}\n.notification-header[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  background: rgba(99, 102, 241, 0.06);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\nbody.light-theme[_nghost-%COMP%]   .notification-header[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.05);\n  border-bottom-color: rgba(99, 102, 241, 0.1);\n}\n.header-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nbody.light-theme[_nghost-%COMP%]   .header-title[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  color: #1a1a3a;\n}\n.count-pill[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.18);\n  color: #a5b4fc;\n  padding: 2px 9px;\n  border-radius: 100px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\nbody.light-theme[_nghost-%COMP%]   .count-pill[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .count-pill[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #4f46e5;\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.btn-mark-all[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #a5b4fc;\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.btn-mark-all[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n}\nbody.light-theme[_nghost-%COMP%]   .btn-mark-all[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-mark-all[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.notification-body[_ngcontent-%COMP%] {\n  max-height: 380px;\n  overflow-y: auto;\n}\n.notification-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.notification-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.notification-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.3);\n  border-radius: 4px;\n}\n.notification-item[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.045);\n  cursor: pointer;\n  transition: background 0.2s;\n  position: relative;\n}\n.notification-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.07);\n}\n.notification-item.unread[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 20%;\n  bottom: 20%;\n  width: 3px;\n  background:\n    linear-gradient(\n      to bottom,\n      #6366f1,\n      #06b6d4);\n  border-radius: 0 4px 4px 0;\n}\nbody.light-theme[_nghost-%COMP%]   .notification-item[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(99, 102, 241, 0.08);\n}\nbody.light-theme[_nghost-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.06);\n}\nbody.light-theme[_nghost-%COMP%]   .notification-item.unread[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.05);\n}\n.notif-icon-col[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.88rem;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.6);\n}\n.notif-icon-col.assignment[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.18);\n  color: #60a5fa;\n}\n.notif-icon-col.mention[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.18);\n  color: #c084fc;\n}\n.notif-icon-col.status_change[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.18);\n  color: #34d399;\n}\n.notif-icon-col.client_note[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n}\nbody.light-theme[_nghost-%COMP%]   .notif-icon-col[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notif-icon-col[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  color: #4a4a6a;\n}\nbody.light-theme[_nghost-%COMP%]   .notif-icon-col.assignment[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notif-icon-col.assignment[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\nbody.light-theme[_nghost-%COMP%]   .notif-icon-col.mention[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notif-icon-col.mention[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.1);\n  color: #7c3aed;\n}\nbody.light-theme[_nghost-%COMP%]   .notif-icon-col.status_change[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notif-icon-col.status_change[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #059669;\n}\nbody.light-theme[_nghost-%COMP%]   .notif-icon-col.client_note[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notif-icon-col.client_note[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #d97706;\n}\n.notif-content-col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #e8e8f8;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\nbody.light-theme[_nghost-%COMP%]   .notif-title[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notif-title[_ngcontent-%COMP%] {\n  color: #1a1a3a;\n}\n.notif-message[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(180, 180, 210, 0.8);\n  margin-top: 2px;\n  line-height: 1.4;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\nbody.light-theme[_nghost-%COMP%]   .notif-message[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notif-message[_ngcontent-%COMP%] {\n  color: #4a4a6a;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: rgba(140, 140, 180, 0.7);\n  margin-top: 4px;\n  display: block;\n}\nbody.light-theme[_nghost-%COMP%]   .notif-time[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .notif-time[_ngcontent-%COMP%] {\n  color: #7a7a9a;\n}\n.btn-del-notif[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: rgba(150, 150, 190, 0.5);\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.btn-del-notif[_ngcontent-%COMP%]:hover {\n  color: #f87171;\n  background: rgba(239, 68, 68, 0.12);\n}\nbody.light-theme[_nghost-%COMP%]   .btn-del-notif[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .btn-del-notif[_ngcontent-%COMP%] {\n  color: #9a9ab0;\n}\nbody.light-theme[_nghost-%COMP%]   .btn-del-notif[_ngcontent-%COMP%]:hover, body.light-theme   [_nghost-%COMP%]   .btn-del-notif[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n  background: rgba(239, 68, 68, 0.08);\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 36px 16px;\n  text-align: center;\n  color: rgba(140, 140, 180, 0.7);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 10px;\n  display: block;\n  opacity: 0.35;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  margin: 0;\n}\nbody.light-theme[_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%], body.light-theme   [_nghost-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  color: #7a7a9a;\n}\n/*# sourceMappingURL=notification-center.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationCenterComponent, [{
    type: Component,
    args: [{ selector: "app-notification-center", standalone: true, imports: [CommonModule], template: `
    <div class="notification-bell-wrapper">
      <button class="bell-btn" (click)="toggleDropdown()">
        <i class="fa-solid fa-bell bell-icon"></i>
        <span class="unread-badge" *ngIf="unreadCount > 0">{{ unreadCount }}</span>
      </button>

      <div class="notification-dropdown" *ngIf="isOpen">
        <div class="notification-header">
          <div class="header-title">
            <span>\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A</span>
            <span class="count-pill" *ngIf="unreadCount > 0">{{ unreadCount }} \u063A\u064A\u0631 \u0645\u0642\u0631\u0648\u0621</span>
          </div>
          <button class="btn-mark-all" (click)="markAllRead()" *ngIf="unreadCount > 0">
            \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644 \u0643\u0640 \u0645\u0642\u0631\u0648\u0621
          </button>
        </div>

        <div class="notification-body">
          <div class="notification-item" 
            *ngFor="let notif of notifications" 
            [class.unread]="!notif.is_read"
            (click)="markAsRead(notif)"
          >
            <div class="notif-icon-col" [ngClass]="notif.type">
              <i [class]="getNotifIcon(notif.type)"></i>
            </div>
            <div class="notif-content-col">
              <div class="notif-title">{{ notif.title }}</div>
              <div class="notif-message">{{ notif.message }}</div>
              <small class="notif-time">{{ notif.created_at | date:'short' }}</small>
            </div>
            <button class="btn-del-notif" (click)="deleteNotif(notif, $event)">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="empty-state" *ngIf="notifications.length === 0">
            <i class="fa-solid fa-bell-slash"></i>
            <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0646\u0628\u064A\u0647\u0627\u062A \u062D\u0627\u0644\u064A\u0627\u064B</p>
          </div>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;24409545ba666dd7602669694e6c932ccb6c08866a3b728c44ba4c0d34b1b6c6;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/shared/notification-center/notification-center.component.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n.bell-btn {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s;\n  font-size: 0.95rem;\n}\n.bell-btn:hover {\n  border-color: var(--border-v, rgba(99,102,241,0.4));\n  color: var(--violet-light, #a5b4fc);\n  background: var(--violet-soft, rgba(99,102,241,0.12));\n  transform: scale(1.05);\n}\n:host-context(body.light-theme) .bell-btn {\n  background: rgba(99, 102, 241, 0.06);\n  border-color: rgba(99, 102, 241, 0.15);\n  color: #4a4a6a;\n}\n:host-context(body.light-theme) .bell-btn:hover {\n  background: rgba(99, 102, 241, 0.12);\n  border-color: rgba(99, 102, 241, 0.35);\n  color: var(--violet-2, #4f46e5);\n}\n.unread-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 800;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.55);\n  border: 2px solid var(--bg, #07070f);\n}\n:host-context(body.light-theme) .unread-badge {\n  border-color: #f0f0f8;\n}\n.notification-dropdown {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  right: auto;\n  width: 360px;\n  direction: rtl;\n  text-align: right;\n  background: #111128;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 18px;\n  box-shadow:\n    0 24px 60px rgba(0, 0, 0, 0.75),\n    0 0 0 1px rgba(99, 102, 241, 0.08),\n    inset 0 1px 0 rgba(255, 255, 255, 0.06);\n  z-index: 1100;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  animation: notifSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes notifSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n:host-context(body.light-theme) .notification-dropdown {\n  background: #ffffff;\n  border-color: rgba(99, 102, 241, 0.2);\n  box-shadow:\n    0 20px 50px rgba(99, 102, 241, 0.14),\n    0 4px 16px rgba(0, 0, 0, 0.08),\n    0 0 0 1px rgba(99, 102, 241, 0.06);\n}\n.notification-header {\n  padding: 16px 18px;\n  background: rgba(99, 102, 241, 0.06);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n:host-context(body.light-theme) .notification-header {\n  background: rgba(99, 102, 241, 0.05);\n  border-bottom-color: rgba(99, 102, 241, 0.1);\n}\n.header-title {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n:host-context(body.light-theme) .header-title {\n  color: #1a1a3a;\n}\n.count-pill {\n  font-size: 0.68rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.18);\n  color: #a5b4fc;\n  padding: 2px 9px;\n  border-radius: 100px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n:host-context(body.light-theme) .count-pill {\n  background: rgba(99, 102, 241, 0.1);\n  color: #4f46e5;\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.btn-mark-all {\n  background: transparent;\n  border: none;\n  color: #a5b4fc;\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.btn-mark-all:hover {\n  background: rgba(99, 102, 241, 0.12);\n}\n:host-context(body.light-theme) .btn-mark-all {\n  color: #4f46e5;\n}\n.notification-body {\n  max-height: 380px;\n  overflow-y: auto;\n}\n.notification-body::-webkit-scrollbar {\n  width: 3px;\n}\n.notification-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.notification-body::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.3);\n  border-radius: 4px;\n}\n.notification-item {\n  padding: 13px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.045);\n  cursor: pointer;\n  transition: background 0.2s;\n  position: relative;\n}\n.notification-item:last-child {\n  border-bottom: none;\n}\n.notification-item:hover {\n  background: rgba(99, 102, 241, 0.08);\n}\n.notification-item.unread {\n  background: rgba(99, 102, 241, 0.07);\n}\n.notification-item.unread::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 20%;\n  bottom: 20%;\n  width: 3px;\n  background:\n    linear-gradient(\n      to bottom,\n      #6366f1,\n      #06b6d4);\n  border-radius: 0 4px 4px 0;\n}\n:host-context(body.light-theme) .notification-item {\n  border-bottom-color: rgba(99, 102, 241, 0.08);\n}\n:host-context(body.light-theme) .notification-item:hover {\n  background: rgba(99, 102, 241, 0.06);\n}\n:host-context(body.light-theme) .notification-item.unread {\n  background: rgba(99, 102, 241, 0.05);\n}\n.notif-icon-col {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.88rem;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.6);\n}\n.notif-icon-col.assignment {\n  background: rgba(59, 130, 246, 0.18);\n  color: #60a5fa;\n}\n.notif-icon-col.mention {\n  background: rgba(168, 85, 247, 0.18);\n  color: #c084fc;\n}\n.notif-icon-col.status_change {\n  background: rgba(16, 185, 129, 0.18);\n  color: #34d399;\n}\n.notif-icon-col.client_note {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n}\n:host-context(body.light-theme) .notif-icon-col {\n  background: rgba(99, 102, 241, 0.08);\n  color: #4a4a6a;\n}\n:host-context(body.light-theme) .notif-icon-col.assignment {\n  background: rgba(59, 130, 246, 0.1);\n  color: #2563eb;\n}\n:host-context(body.light-theme) .notif-icon-col.mention {\n  background: rgba(168, 85, 247, 0.1);\n  color: #7c3aed;\n}\n:host-context(body.light-theme) .notif-icon-col.status_change {\n  background: rgba(16, 185, 129, 0.1);\n  color: #059669;\n}\n:host-context(body.light-theme) .notif-icon-col.client_note {\n  background: rgba(245, 158, 11, 0.1);\n  color: #d97706;\n}\n.notif-content-col {\n  flex: 1;\n  min-width: 0;\n}\n.notif-title {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #e8e8f8;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n:host-context(body.light-theme) .notif-title {\n  color: #1a1a3a;\n}\n.notif-message {\n  font-size: 0.78rem;\n  color: rgba(180, 180, 210, 0.8);\n  margin-top: 2px;\n  line-height: 1.4;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n:host-context(body.light-theme) .notif-message {\n  color: #4a4a6a;\n}\n.notif-time {\n  font-size: 0.68rem;\n  color: rgba(140, 140, 180, 0.7);\n  margin-top: 4px;\n  display: block;\n}\n:host-context(body.light-theme) .notif-time {\n  color: #7a7a9a;\n}\n.btn-del-notif {\n  background: transparent;\n  border: none;\n  color: rgba(150, 150, 190, 0.5);\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.btn-del-notif:hover {\n  color: #f87171;\n  background: rgba(239, 68, 68, 0.12);\n}\n:host-context(body.light-theme) .btn-del-notif {\n  color: #9a9ab0;\n}\n:host-context(body.light-theme) .btn-del-notif:hover {\n  color: #dc2626;\n  background: rgba(239, 68, 68, 0.08);\n}\n.empty-state {\n  padding: 36px 16px;\n  text-align: center;\n  color: rgba(140, 140, 180, 0.7);\n}\n.empty-state i {\n  font-size: 2rem;\n  margin-bottom: 10px;\n  display: block;\n  opacity: 0.35;\n}\n.empty-state p {\n  font-size: 0.82rem;\n  margin: 0;\n}\n:host-context(body.light-theme) .empty-state {\n  color: #7a7a9a;\n}\n/*# sourceMappingURL=notification-center.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationCenterComponent, { className: "NotificationCenterComponent", filePath: "src/app/components/shared/notification-center/notification-center.component.ts", lineNumber: 355 });
})();

// src/app/components/layout/main-layout.component.ts
var _c0 = () => ["/dashboard"];
function MainLayoutComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.overviewStats.inquiries);
  }
}
var MainLayoutComponent = class _MainLayoutComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  apiService = inject(ApiService);
  sidebarOpen = false;
  sidebarCollapsed = false;
  websiteMenuOpen = true;
  activeDropdown = null;
  isLightMode = false;
  currentTab = "overview";
  currentPath = "";
  overviewStats = {
    inquiries: 0
  };
  ngOnInit() {
    const savedTheme = localStorage.getItem("mediaglow_theme");
    if (savedTheme === "light") {
      this.isLightMode = true;
      document.body.classList.add("light-theme");
    } else {
      this.isLightMode = false;
      document.body.classList.remove("light-theme");
    }
    this.updateActiveTabAndPath();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateActiveTabAndPath();
    });
    this.loadStats();
  }
  updateActiveTabAndPath() {
    const urlTree = this.router.parseUrl(this.router.url);
    this.currentPath = urlTree.root.children["primary"] ? urlTree.root.children["primary"].segments.map((s) => s.path).join("/") : "";
    this.currentTab = urlTree.queryParams["tab"] || "overview";
  }
  loadStats() {
    this.apiService.getInquiries().subscribe({
      next: (res) => {
        const list = Array.isArray(res) ? res : res?.data || [];
        this.overviewStats.inquiries = list.filter((i) => i.status !== "resolved" && i.status !== "closed").length;
      },
      error: () => {
      }
    });
  }
  toggleSidebar() {
    if (window.innerWidth <= 992) {
      this.sidebarOpen = !this.sidebarOpen;
    } else {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    }
  }
  toggleWebsiteMenu() {
    this.websiteMenuOpen = !this.websiteMenuOpen;
  }
  toggleDropdown(name) {
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }
  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    document.body.classList.toggle("light-theme", this.isLightMode);
    localStorage.setItem("mediaglow_theme", this.isLightMode ? "light" : "dark");
  }
  logout() {
    localStorage.removeItem("mediaglow_client_token");
    localStorage.removeItem("mediaglow_user");
    this.router.navigate(["/login"]);
  }
  navigateToTab(tab) {
    this.sidebarOpen = false;
    this.router.navigate(["/dashboard"], { queryParams: { tab } });
  }
  isDashboardTabActive(tabName) {
    return (this.currentPath === "dashboard" || this.currentPath === "") && this.currentTab === tabName;
  }
  getArabicPathLabel(path) {
    if (!path || path === "dashboard")
      return "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645";
    if (path.startsWith("clients"))
      return "\u0627\u0644\u0639\u0645\u0644\u0627\u0621";
    if (path.startsWith("deals"))
      return "\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F";
    if (path.startsWith("tasks"))
      return "\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645";
    if (path.startsWith("departments"))
      return "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632";
    if (path.startsWith("finance"))
      return "\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629";
    if (path.startsWith("client-portal"))
      return "\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621";
    if (path.startsWith("roles"))
      return "\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A";
    return path;
  }
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 214, vars: 49, consts: [[1, "crm-shell"], [1, "sb-overlay", 3, "click"], [1, "sb"], [1, "sb-content"], [1, "sb-logo-wrapper"], [1, "sb-logo", 3, "routerLink"], [1, "sb-logo-badge"], [1, "fa-solid", "fa-bolt"], [1, "sb-logo-details"], [1, "sb-logo-text"], [1, "sb-logo-sub"], [1, "sb-collapse-btn", 3, "click", "title"], [1, "fa-solid", 3, "ngClass"], [1, "sb-nav"], [1, "sb-section"], [1, "fa-solid", "fa-layer-group"], ["routerLink", "/clients", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0639\u0645\u0644\u0627\u0621", 1, "sb-item"], [1, "sb-icon"], [1, "fa-solid", "fa-users"], [1, "sb-text"], ["routerLink", "/deals", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F", 1, "sb-item"], [1, "fa-solid", "fa-handshake"], ["routerLink", "/tasks", "routerLinkActive", "active", "data-tooltip", "\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645", 1, "sb-item"], [1, "fa-solid", "fa-list-check"], ["routerLink", "/departments", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632", 1, "sb-item"], [1, "fa-solid", "fa-sitemap"], ["routerLink", "/finance", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629", 1, "sb-item"], [1, "fa-solid", "fa-chart-line"], ["routerLink", "/client-portal", "routerLinkActive", "active", "data-tooltip", "\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621", 1, "sb-item"], [1, "fa-solid", "fa-id-card"], ["routerLink", "/roles", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A", 1, "sb-item"], [1, "fa-solid", "fa-shield-halved"], [1, "fa-solid", "fa-sliders"], ["data-tooltip", "\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-gauge-high"], ["data-tooltip", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-inbox"], ["class", "sb-badge", 4, "ngIf"], [1, "nav-dropdown"], ["data-tooltip", "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0648\u0642\u0639", 1, "sb-item", 2, "cursor", "pointer", 3, "click"], [1, "fa-solid", "fa-globe"], [1, "fa-solid", "fa-chevron-down", "arrow-icon"], [1, "dropdown-menu-list"], ["data-tooltip", "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-folder-open"], ["data-tooltip", "\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-tags"], ["data-tooltip", "\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-gears"], ["data-tooltip", "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u062F\u0648\u0646\u0629", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-newspaper"], ["data-tooltip", "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-comments"], ["data-tooltip", "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-circle-question"], [1, "fa-solid", "fa-pen-to-square"], ["data-tooltip", "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-house"], ["data-tooltip", "\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-circle-info"], ["data-tooltip", "\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-briefcase"], ["data-tooltip", "\u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-images"], ["data-tooltip", "\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-blog"], ["data-tooltip", "\u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-gear"], ["routerLink", "/", "data-tooltip", "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A", 1, "sb-item"], [1, "fa-solid", "fa-arrow-up-right-from-square"], ["data-tooltip", "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C", 1, "sb-item", "danger", 2, "cursor", "pointer", 3, "click"], [1, "fa-solid", "fa-right-from-bracket"], [1, "sb-foot"], [1, "sb-user-card", 3, "click"], [1, "sb-av"], [1, "fa-solid", "fa-user-shield"], [1, "user-status-dot"], [1, "sb-uinfo"], [1, "sb-uname"], [1, "sb-urole"], [1, "sb-ucaret"], [1, "fa-solid", "fa-ellipsis-vertical"], [1, "main-container"], [1, "tb"], [1, "tb-l"], [1, "tb-menu", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "tb-bc"], [2, "color", "rgba(255,255,255,0.3)", "font-size", "0.78rem"], [1, "sep", 2, "color", "rgba(255,255,255,0.2)", "margin", "0 6px"], [1, "cur"], [1, "tb-r"], ["title", "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062B\u064A\u0645", 1, "tb-btn", 3, "click"], [1, "tb-user-wrap"], [1, "tb-user", 3, "click"], [1, "tb-av"], [1, "tb-uname"], [1, "tb-caret"], [1, "dropdown", "dd-user"], [1, "ud-top"], [1, "ud-name"], [1, "ud-role"], [1, "ud-email"], [1, "ud-row", 3, "click"], [1, "fa-solid", "fa-inbox", 2, "color", "var(--teal-2)"], ["routerLink", "/", 1, "ud-row"], [1, "fa-solid", "fa-globe", 2, "color", "var(--teal-2)"], [1, "ud-divider"], [1, "ud-row", "danger", 3, "click"], [1, "pc"], [1, "sb-badge"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_1_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5)(6, "div", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
      \u0275\u0275text(10, "Media");
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Glow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275text(14, "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062D\u0643\u0645 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "button", 11);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_15_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "nav", 13)(18, "div", 14);
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0627\u0644\u064A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "a", 16)(23, "span", 17);
      \u0275\u0275element(24, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 19);
      \u0275\u0275text(26, "\u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "a", 20)(28, "span", 17);
      \u0275\u0275element(29, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275text(31, "\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "a", 22)(33, "span", 17);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 19);
      \u0275\u0275text(36, "\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "a", 24)(38, "span", 17);
      \u0275\u0275element(39, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 19);
      \u0275\u0275text(41, "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "a", 26)(43, "span", 17);
      \u0275\u0275element(44, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 19);
      \u0275\u0275text(46, "\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "a", 28)(48, "span", 17);
      \u0275\u0275element(49, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 19);
      \u0275\u0275text(51, "\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "a", 30)(53, "span", 17);
      \u0275\u0275element(54, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 19);
      \u0275\u0275text(56, "\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 14);
      \u0275\u0275element(58, "i", 32);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "a", 33);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_61_listener() {
        return ctx.navigateToTab("overview");
      });
      \u0275\u0275elementStart(62, "span", 17);
      \u0275\u0275element(63, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span", 19);
      \u0275\u0275text(65, "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "a", 35);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_66_listener() {
        return ctx.navigateToTab("contact-hub");
      });
      \u0275\u0275elementStart(67, "span", 17);
      \u0275\u0275element(68, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span", 19);
      \u0275\u0275text(70, "\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275template(71, MainLayoutComponent_span_71_Template, 2, 1, "span", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 38)(73, "div", 39);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_73_listener() {
        return ctx.toggleWebsiteMenu();
      });
      \u0275\u0275elementStart(74, "span", 17);
      \u0275\u0275element(75, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 19);
      \u0275\u0275text(77, "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 42)(80, "a", 43);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_80_listener() {
        return ctx.navigateToTab("projects");
      });
      \u0275\u0275elementStart(81, "span", 17);
      \u0275\u0275element(82, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 19);
      \u0275\u0275text(84, "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "a", 45);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_85_listener() {
        return ctx.navigateToTab("categories");
      });
      \u0275\u0275elementStart(86, "span", 17);
      \u0275\u0275element(87, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "span", 19);
      \u0275\u0275text(89, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "a", 47);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_90_listener() {
        return ctx.navigateToTab("services");
      });
      \u0275\u0275elementStart(91, "span", 17);
      \u0275\u0275element(92, "i", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span", 19);
      \u0275\u0275text(94, "\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "a", 49);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_95_listener() {
        return ctx.navigateToTab("blogs");
      });
      \u0275\u0275elementStart(96, "span", 17);
      \u0275\u0275element(97, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span", 19);
      \u0275\u0275text(99, "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u062F\u0648\u0646\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "a", 51);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_100_listener() {
        return ctx.navigateToTab("testimonials");
      });
      \u0275\u0275elementStart(101, "span", 17);
      \u0275\u0275element(102, "i", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span", 19);
      \u0275\u0275text(104, "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "a", 53);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_105_listener() {
        return ctx.navigateToTab("faqs");
      });
      \u0275\u0275elementStart(106, "span", 17);
      \u0275\u0275element(107, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span", 19);
      \u0275\u0275text(109, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(110, "div", 14);
      \u0275\u0275element(111, "i", 55);
      \u0275\u0275elementStart(112, "span");
      \u0275\u0275text(113, "\u0645\u062D\u0631\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "a", 56);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_114_listener() {
        return ctx.navigateToTab("home-page");
      });
      \u0275\u0275elementStart(115, "span", 17);
      \u0275\u0275element(116, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "span", 19);
      \u0275\u0275text(118, "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "a", 58);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_119_listener() {
        return ctx.navigateToTab("about-page");
      });
      \u0275\u0275elementStart(120, "span", 17);
      \u0275\u0275element(121, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span", 19);
      \u0275\u0275text(123, "\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "a", 60);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_124_listener() {
        return ctx.navigateToTab("services-page");
      });
      \u0275\u0275elementStart(125, "span", 17);
      \u0275\u0275element(126, "i", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "span", 19);
      \u0275\u0275text(128, "\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "a", 62);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_129_listener() {
        return ctx.navigateToTab("portfolio-page");
      });
      \u0275\u0275elementStart(130, "span", 17);
      \u0275\u0275element(131, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "span", 19);
      \u0275\u0275text(133, "\u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "a", 64);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_134_listener() {
        return ctx.navigateToTab("blogs-page");
      });
      \u0275\u0275elementStart(135, "span", 17);
      \u0275\u0275element(136, "i", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "span", 19);
      \u0275\u0275text(138, "\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "a", 66);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_139_listener() {
        return ctx.navigateToTab("footer-section");
      });
      \u0275\u0275elementStart(140, "span", 17);
      \u0275\u0275element(141, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "span", 19);
      \u0275\u0275text(143, "\u0645\u062D\u062A\u0648\u0649 \u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 14);
      \u0275\u0275element(145, "i", 67);
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, "\u0627\u0644\u0646\u0638\u0627\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "a", 68)(149, "span", 17);
      \u0275\u0275element(150, "i", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "span", 19);
      \u0275\u0275text(152, "\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "a", 70);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_153_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(154, "span", 17);
      \u0275\u0275element(155, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "span", 19);
      \u0275\u0275text(157, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "div", 72)(159, "div", 73);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_159_listener() {
        return ctx.toggleDropdown("user");
      });
      \u0275\u0275elementStart(160, "div", 74);
      \u0275\u0275element(161, "i", 75)(162, "span", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 77)(164, "div", 78);
      \u0275\u0275text(165, "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 79);
      \u0275\u0275text(167, "\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "span", 80);
      \u0275\u0275element(169, "i", 81);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(170, "div", 82)(171, "header", 83)(172, "div", 84)(173, "button", 85);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_173_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(174, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 87)(176, "span", 88);
      \u0275\u0275text(177, "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062D\u0643\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "span", 89);
      \u0275\u0275text(179, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "span", 90);
      \u0275\u0275text(181);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "div", 91);
      \u0275\u0275element(183, "app-notification-center");
      \u0275\u0275elementStart(184, "button", 92);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_184_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275element(185, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 93)(187, "div", 94);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_187_listener() {
        return ctx.toggleDropdown("user");
      });
      \u0275\u0275elementStart(188, "div", 95);
      \u0275\u0275element(189, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "span", 96);
      \u0275\u0275text(191, "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "span", 97);
      \u0275\u0275text(193, "\u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "div", 98)(195, "div", 99)(196, "div", 100);
      \u0275\u0275text(197, "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 101);
      \u0275\u0275text(199, "\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 102);
      \u0275\u0275text(201, "admin@mediaglow.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "a", 103);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_202_listener() {
        return ctx.navigateToTab("contact-hub");
      });
      \u0275\u0275element(203, "i", 104);
      \u0275\u0275text(204, "\xA0\xA0\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "a", 105);
      \u0275\u0275element(206, "i", 106);
      \u0275\u0275text(207, "\xA0\xA0\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(208, "div", 107);
      \u0275\u0275elementStart(209, "a", 108);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_209_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(210, "i", 71);
      \u0275\u0275text(211, "\xA0\xA0\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(212, "main", 109);
      \u0275\u0275element(213, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed-sidebar", ctx.sidebarCollapsed);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.sidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen)("collapsed", ctx.sidebarCollapsed);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(48, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("title", ctx.sidebarCollapsed ? "\u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u0642\u0627\u0626\u0645\u0629" : "\u0637\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.sidebarCollapsed ? "fa-indent" : "fa-outdent");
      \u0275\u0275advance(45);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("overview"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("contact-hub"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.overviewStats.inquiries > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.websiteMenuOpen);
      \u0275\u0275advance(6);
      \u0275\u0275styleProp("transform", ctx.websiteMenuOpen ? "rotate(180deg)" : "rotate(0deg)");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("projects"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("categories"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("services"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("blogs"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("testimonials"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("faqs"));
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("home-page"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("about-page"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("services-page"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("portfolio-page"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("blogs-page"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDashboardTabActive("footer-section"));
      \u0275\u0275advance(42);
      \u0275\u0275textInterpolate(ctx.getArabicPathLabel(ctx.currentPath));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.isLightMode ? "fa-moon" : "fa-sun");
      \u0275\u0275advance(9);
      \u0275\u0275classProp("show", ctx.activeDropdown === "user");
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, NotificationCenterComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image:\n    radial-gradient(\n      ellipse 100% 60% at 100% 0%,\n      rgba(99, 102, 241, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 0% 100%,\n      rgba(6, 182, 212, 0.07) 0%,\n      transparent 50%);\n  background-attachment: fixed;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n  direction: rtl;\n}\n.sb[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: auto;\n  bottom: 0;\n  z-index: 300;\n  background: var(--bg-sidebar);\n  border-left: 1px solid var(--border);\n  border-right: none;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.35s var(--ease), transform 0.35s var(--ease);\n  will-change: transform, width;\n  box-shadow: -8px 0 50px rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(25px);\n}\n.crm-shell.collapsed-sidebar[_ngcontent-%COMP%]   .sb[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%] {\n  width: 76px;\n}\n.crm-shell.collapsed-sidebar[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  margin-right: 76px;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-logo-details[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-badge[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .dropdown-menu-list[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-uinfo[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-ucaret[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-logo-wrapper[_ngcontent-%COMP%] {\n  padding: 16px 8px;\n  justify-content: center;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-logo[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-collapse-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-section[_ngcontent-%COMP%] {\n  padding: 12px 0 4px;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 11px 0;\n  gap: 0;\n  border-radius: 12px;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-user-card[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 10px 0;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) scale(0.92);\n  background: #111128;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 500;\n  font-family: "Cairo", sans-serif;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transform: translateY(-50%) scale(1);\n}\n.sb-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(8px);\n  z-index: 290;\n}\n.sb-overlay.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.sb-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sb-logo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  transition: all 0.25s var(--ease);\n}\n.sb-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.sb-logo-badge[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #fff;\n  box-shadow: 0 0 20px var(--violet-glow);\n  flex-shrink: 0;\n  transition: transform 0.3s var(--ease);\n}\n.sb-logo[_ngcontent-%COMP%]:hover   .sb-logo-badge[_ngcontent-%COMP%] {\n  transform: rotate(12deg) scale(1.05);\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -0.4px;\n  line-height: 1.1;\n}\n.sb-logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--teal-light);\n}\n.sb-logo-sub[_ngcontent-%COMP%] {\n  font-size: 0.64rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.sb-collapse-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: all 0.2s;\n}\n.sb-collapse-btn[_ngcontent-%COMP%]:hover {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border-color: var(--border-v);\n  transform: scale(1.06);\n}\n.sb-nav[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.sb-section[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--violet-light);\n  padding: 16px 12px 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  opacity: 0.85;\n}\n.sb-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 9px 12px;\n  border-radius: 12px;\n  color: var(--text-2);\n  font-size: 0.86rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.22s var(--ease);\n  position: relative;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n  transform: translateX(-2px);\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(99, 102, 241, 0.2),\n      rgba(6, 182, 212, 0.1));\n  border-color: var(--border-v);\n  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.15);\n}\n.sb-item.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 18%;\n  bottom: 18%;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--violet),\n      var(--teal));\n  border-radius: 3px 0 0 3px;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.sb-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.92rem;\n  color: var(--text-2);\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  transition: all 0.22s var(--ease);\n  flex-shrink: 0;\n}\n.sb-item[_ngcontent-%COMP%]:hover   .sb-icon[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.25);\n  transform: scale(1.05);\n}\n.sb-item.active[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  color: var(--teal-light);\n  background: var(--violet-soft);\n  border-color: var(--border-v);\n}\n.sb-badge[_ngcontent-%COMP%] {\n  margin-right: auto;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      #4f46e5);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 100px;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.45);\n}\n.sb-item.danger[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(244, 63, 94, 0.2);\n}\n.sb-item.danger[_ngcontent-%COMP%]:hover   .sb-icon[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n  background: rgba(244, 63, 94, 0.15);\n}\n.dropdown-menu-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.35s ease-in-out;\n  padding-right: 12px;\n  border-right: 2px solid rgba(99, 102, 241, 0.22);\n  margin-right: 20px;\n  margin-top: 4px;\n  margin-bottom: 6px;\n  padding-left: 0;\n  border-left: none;\n  margin-left: 0;\n}\n.nav-dropdown.open[_ngcontent-%COMP%]   .dropdown-menu-list[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n.nav-sub-item[_ngcontent-%COMP%] {\n  padding: 7px 10px !important;\n  font-size: 0.82rem !important;\n  border-radius: 9px !important;\n  color: var(--text-2) !important;\n}\n.nav-sub-item[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.nav-sub-item.active[_ngcontent-%COMP%] {\n  color: var(--teal-light) !important;\n  background: var(--teal-soft) !important;\n  border-color: var(--border-t) !important;\n}\n.sb-foot[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  border-top: 1px solid var(--border);\n  background: rgba(0, 0, 0, 0.12);\n}\n.sb-user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: all 0.22s var(--ease);\n}\n.sb-user-card[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: var(--border-v);\n}\n.sb-av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.92rem;\n  color: #fff;\n  position: relative;\n  flex-shrink: 0;\n  box-shadow: 0 0 12px rgba(99, 102, 241, 0.3);\n}\n.user-status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  left: -2px;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--emerald-light);\n  border: 2px solid #111128;\n  box-shadow: 0 0 6px var(--emerald-light);\n}\n.sb-uinfo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sb-uname[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sb-urole[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--teal-light);\n  font-weight: 700;\n  margin-top: 2px;\n}\n.sb-ucaret[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.8rem;\n  transition: color 0.2s;\n}\n.sb-user-card[_ngcontent-%COMP%]:hover   .sb-ucaret[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: 0;\n  font-size: 0.72rem;\n  transition: transform 0.3s;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin-right: var(--sidebar-w);\n  margin-left: 0;\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n  color: var(--text);\n  min-height: 100vh;\n  transition: margin-right 0.35s var(--ease);\n}\n.tb[_ngcontent-%COMP%] {\n  height: var(--nav-h);\n  background: var(--bg-topbar);\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  gap: 20px;\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  flex-shrink: 0;\n}\n.tb-l[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.tb-menu[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.tb-menu[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-bc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n  color: var(--text-2);\n}\n.tb-bc[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n  font-size: 0.9rem;\n}\n.tb-bc[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tb-r[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.tb-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n}\n.tb-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-user-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tb-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 4px 14px 4px 4px;\n  border-radius: 100px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  transition: all 0.2s;\n}\n.tb-user[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  background: var(--violet-soft);\n}\n.tb-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.tb-uname[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text);\n  white-space: nowrap;\n}\n.tb-caret[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-2);\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  right: auto;\n  width: 260px;\n  background: #0c0c1e;\n  border: 1px solid var(--border-v);\n  border-radius: var(--r-lg);\n  padding: 12px;\n  z-index: 1000;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  display: none;\n  animation: _ngcontent-%COMP%_fadeInDown 0.25s var(--ease);\n}\n.dropdown.show[_ngcontent-%COMP%] {\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ud-top[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 8px;\n}\n.ud-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #fff;\n}\n.ud-role[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--teal-light);\n  margin-top: 2px;\n}\n.ud-email[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.ud-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n  margin: 8px 0;\n}\n.ud-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  color: var(--text);\n  font-size: 0.84rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ud-row[_ngcontent-%COMP%]:hover {\n  background: var(--violet-soft);\n  color: #fff;\n}\n.ud-row.danger[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.ud-row.danger[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n}\n.pc[_ngcontent-%COMP%] {\n  padding: 32px;\n  flex: 1;\n}\n@media (max-width: 992px) {\n  .sb[_ngcontent-%COMP%] {\n    transform: translateX(100%);\n  }\n  .sb.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .main-container[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .pc[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media (max-width: 640px) {\n  .tb[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .tb-bc[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [CommonModule, RouterModule, NotificationCenterComponent], template: `<div class="crm-shell" [class.collapsed-sidebar]="sidebarCollapsed">
  <!-- Mobile sidebar overlay -->
  <div class="sb-overlay" [class.active]="sidebarOpen" (click)="toggleSidebar()"></div>

  <!-- SIDEBAR -->
  <aside class="sb" [class.open]="sidebarOpen" [class.collapsed]="sidebarCollapsed">
    <div class="sb-content">
      <!-- Logo & Desktop Toggle -->
      <div class="sb-logo-wrapper">
        <a [routerLink]="['/dashboard']" class="sb-logo">
          <div class="sb-logo-badge"><i class="fa-solid fa-bolt"></i></div>
          <div class="sb-logo-details">
            <div class="sb-logo-text">Media<span>Glow</span></div>
            <div class="sb-logo-sub">\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062D\u0643\u0645 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629</div>
          </div>
        </a>
        <button class="sb-collapse-btn" (click)="toggleSidebar()" [title]="sidebarCollapsed ? '\u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u0642\u0627\u0626\u0645\u0629' : '\u0637\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629'">
          <i class="fa-solid" [ngClass]="sidebarCollapsed ? 'fa-indent' : 'fa-outdent'"></i>
        </button>
      </div>

      <nav class="sb-nav">
        <!-- CRM Section -->
        <div class="sb-section">
          <i class="fa-solid fa-layer-group"></i>
          <span>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0627\u0644\u064A</span>
        </div>
        <a class="sb-item" routerLink="/clients" routerLinkActive="active" data-tooltip="\u0627\u0644\u0639\u0645\u0644\u0627\u0621">
          <span class="sb-icon"><i class="fa-solid fa-users"></i></span>
          <span class="sb-text">\u0627\u0644\u0639\u0645\u0644\u0627\u0621</span>
        </a>
        <a class="sb-item" routerLink="/deals" routerLinkActive="active" data-tooltip="\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F">
          <span class="sb-icon"><i class="fa-solid fa-handshake"></i></span>
          <span class="sb-text">\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F</span>
        </a>
        <a class="sb-item" routerLink="/tasks" routerLinkActive="active" data-tooltip="\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645">
          <span class="sb-icon"><i class="fa-solid fa-list-check"></i></span>
          <span class="sb-text">\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645</span>
        </a>
        <a class="sb-item" routerLink="/departments" routerLinkActive="active" data-tooltip="\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632">
          <span class="sb-icon"><i class="fa-solid fa-sitemap"></i></span>
          <span class="sb-text">\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632</span>
        </a>
        <a class="sb-item" routerLink="/finance" routerLinkActive="active" data-tooltip="\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629">
          <span class="sb-icon"><i class="fa-solid fa-chart-line"></i></span>
          <span class="sb-text">\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629</span>
        </a>
        <a class="sb-item" routerLink="/client-portal" routerLinkActive="active" data-tooltip="\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621">
          <span class="sb-icon"><i class="fa-solid fa-id-card"></i></span>
          <span class="sb-text">\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621</span>
        </a>
        <a class="sb-item" routerLink="/roles" routerLinkActive="active" data-tooltip="\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A">
          <span class="sb-icon"><i class="fa-solid fa-shield-halved"></i></span>
          <span class="sb-text">\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A</span>
        </a>

        <!-- Console Section -->
        <div class="sb-section">
          <i class="fa-solid fa-sliders"></i>
          <span>\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</span>
        </div>
        <a class="sb-item" [class.active]="isDashboardTabActive('overview')" (click)="navigateToTab('overview')" data-tooltip="\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629">
          <span class="sb-icon"><i class="fa-solid fa-gauge-high"></i></span>
          <span class="sb-text">\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('contact-hub')" (click)="navigateToTab('contact-hub')" data-tooltip="\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A">
          <span class="sb-icon"><i class="fa-solid fa-inbox"></i></span>
          <span class="sb-text">\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A</span>
          <span class="sb-badge" *ngIf="overviewStats.inquiries > 0">{{ overviewStats.inquiries }}</span>
        </a>

        <!-- Website Content Dropdown -->
        <div class="nav-dropdown" [class.open]="websiteMenuOpen">
          <div class="sb-item" (click)="toggleWebsiteMenu()" style="cursor:pointer;" data-tooltip="\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0648\u0642\u0639">
            <span class="sb-icon"><i class="fa-solid fa-globe"></i></span>
            <span class="sb-text">\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</span>
            <i class="fa-solid fa-chevron-down arrow-icon" [style.transform]="websiteMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'"></i>
          </div>
          <div class="dropdown-menu-list">
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('projects')" (click)="navigateToTab('projects')" data-tooltip="\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644">
              <span class="sb-icon"><i class="fa-solid fa-folder-open"></i></span>
              <span class="sb-text">\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('categories')" (click)="navigateToTab('categories')" data-tooltip="\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A">
              <span class="sb-icon"><i class="fa-solid fa-tags"></i></span>
              <span class="sb-text">\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('services')" (click)="navigateToTab('services')" data-tooltip="\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A">
              <span class="sb-icon"><i class="fa-solid fa-gears"></i></span>
              <span class="sb-text">\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('blogs')" (click)="navigateToTab('blogs')" data-tooltip="\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u062F\u0648\u0646\u0629">
              <span class="sb-icon"><i class="fa-solid fa-newspaper"></i></span>
              <span class="sb-text">\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u062F\u0648\u0646\u0629</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('testimonials')" (click)="navigateToTab('testimonials')" data-tooltip="\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621">
              <span class="sb-icon"><i class="fa-solid fa-comments"></i></span>
              <span class="sb-text">\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('faqs')" (click)="navigateToTab('faqs')" data-tooltip="\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629">
              <span class="sb-icon"><i class="fa-solid fa-circle-question"></i></span>
              <span class="sb-text">\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629</span>
            </a>
          </div>
        </div>

        <!-- Page Editors -->
        <div class="sb-section">
          <i class="fa-solid fa-pen-to-square"></i>
          <span>\u0645\u062D\u0631\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639</span>
        </div>
        <a class="sb-item" [class.active]="isDashboardTabActive('home-page')" (click)="navigateToTab('home-page')" data-tooltip="\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629">
          <span class="sb-icon"><i class="fa-solid fa-house"></i></span>
          <span class="sb-text">\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('about-page')" (click)="navigateToTab('about-page')" data-tooltip="\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629">
          <span class="sb-icon"><i class="fa-solid fa-circle-info"></i></span>
          <span class="sb-text">\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('services-page')" (click)="navigateToTab('services-page')" data-tooltip="\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A">
          <span class="sb-icon"><i class="fa-solid fa-briefcase"></i></span>
          <span class="sb-text">\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('portfolio-page')" (click)="navigateToTab('portfolio-page')" data-tooltip="\u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644">
          <span class="sb-icon"><i class="fa-solid fa-images"></i></span>
          <span class="sb-text">\u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('blogs-page')" (click)="navigateToTab('blogs-page')" data-tooltip="\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629">
          <span class="sb-icon"><i class="fa-solid fa-blog"></i></span>
          <span class="sb-text">\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('footer-section')" (click)="navigateToTab('footer-section')" data-tooltip="\u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639">
          <span class="sb-icon"><i class="fa-solid fa-sliders"></i></span>
          <span class="sb-text">\u0645\u062D\u062A\u0648\u0649 \u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639</span>
        </a>

        <div class="sb-section">
          <i class="fa-solid fa-gear"></i>
          <span>\u0627\u0644\u0646\u0638\u0627\u0645</span>
        </div>
        <a class="sb-item" routerLink="/" data-tooltip="\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A">
          <span class="sb-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
          <span class="sb-text">\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</span>
        </a>
        <a class="sb-item danger" (click)="logout()" style="cursor:pointer;" data-tooltip="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C">
          <span class="sb-icon"><i class="fa-solid fa-right-from-bracket"></i></span>
          <span class="sb-text">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C</span>
        </a>
      </nav>

      <div class="sb-foot">
        <div class="sb-user-card" (click)="toggleDropdown('user')">
          <div class="sb-av">
            <i class="fa-solid fa-user-shield"></i>
            <span class="user-status-dot"></span>
          </div>
          <div class="sb-uinfo">
            <div class="sb-uname">\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645</div>
            <div class="sb-urole">\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646</div>
          </div>
          <span class="sb-ucaret"><i class="fa-solid fa-ellipsis-vertical"></i></span>
        </div>
      </div>
    </div>
  </aside>

  <!-- MAIN WRAPPER -->
  <div class="main-container">
    <!-- TOPBAR -->
    <header class="tb">
      <div class="tb-l">
        <button class="tb-menu" (click)="toggleSidebar()"><i class="fa-solid fa-bars"></i></button>
        <div class="tb-bc">
          <span style="color:rgba(255,255,255,0.3); font-size:0.78rem;">\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062D\u0643\u0645</span>
          <span class="sep" style="color:rgba(255,255,255,0.2); margin:0 6px;">\u203A</span>
          <span class="cur">{{ getArabicPathLabel(currentPath) }}</span>
        </div>
      </div>
      <div class="tb-r">
        <app-notification-center></app-notification-center>
        <button class="tb-btn" (click)="toggleTheme()" title="\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062B\u064A\u0645">
          <i class="fa-solid" [ngClass]="isLightMode ? 'fa-moon' : 'fa-sun'"></i>
        </button>
        <div class="tb-user-wrap">
          <div class="tb-user" (click)="toggleDropdown('user')">
            <div class="tb-av"><i class="fa-solid fa-user-shield"></i></div>
            <span class="tb-uname">\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645</span>
            <span class="tb-caret">\u25BE</span>
          </div>

          <!-- Dropdown menu -->
          <div class="dropdown dd-user" [class.show]="activeDropdown === 'user'">
            <div class="ud-top">
              <div class="ud-name">\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645</div>
              <div class="ud-role">\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646</div>
              <div class="ud-email">admin&#64;mediaglow.com</div>
            </div>
            <a class="ud-row" (click)="navigateToTab('contact-hub')"><i class="fa-solid fa-inbox" style="color:var(--teal-2)"></i>&nbsp;&nbsp;\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A</a>
            <a class="ud-row" routerLink="/"><i class="fa-solid fa-globe" style="color:var(--teal-2)"></i>&nbsp;&nbsp;\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</a>
            <div class="ud-divider"></div>
            <a class="ud-row danger" (click)="logout()"><i class="fa-solid fa-right-from-bracket"></i>&nbsp;&nbsp;\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C</a>
          </div>
        </div>
      </div>
    </header>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 CONTENT PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <main class="pc">
      <router-outlet></router-outlet>
    </main>
  </div>
</div>
`, styles: ['/* src/app/components/layout/main-layout.component.css */\n:host {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-shell {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image:\n    radial-gradient(\n      ellipse 100% 60% at 100% 0%,\n      rgba(99, 102, 241, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 0% 100%,\n      rgba(6, 182, 212, 0.07) 0%,\n      transparent 50%);\n  background-attachment: fixed;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n  direction: rtl;\n}\n.sb {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: auto;\n  bottom: 0;\n  z-index: 300;\n  background: var(--bg-sidebar);\n  border-left: 1px solid var(--border);\n  border-right: none;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.35s var(--ease), transform 0.35s var(--ease);\n  will-change: transform, width;\n  box-shadow: -8px 0 50px rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(25px);\n}\n.crm-shell.collapsed-sidebar .sb,\n.sb.collapsed {\n  width: 76px;\n}\n.crm-shell.collapsed-sidebar .main-container {\n  margin-right: 76px;\n}\n.sb.collapsed .sb-logo-details,\n.sb.collapsed .sb-section span,\n.sb.collapsed .sb-section i,\n.sb.collapsed .sb-text,\n.sb.collapsed .sb-badge,\n.sb.collapsed .arrow-icon,\n.sb.collapsed .dropdown-menu-list,\n.sb.collapsed .sb-uinfo,\n.sb.collapsed .sb-ucaret {\n  display: none !important;\n}\n.sb.collapsed .sb-logo-wrapper {\n  padding: 16px 8px;\n  justify-content: center;\n}\n.sb.collapsed .sb-logo {\n  justify-content: center;\n}\n.sb.collapsed .sb-collapse-btn {\n  display: none;\n}\n.sb.collapsed .sb-section {\n  padding: 12px 0 4px;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n}\n.sb.collapsed .sb-item {\n  justify-content: center;\n  padding: 11px 0;\n  gap: 0;\n  border-radius: 12px;\n}\n.sb.collapsed .sb-icon {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.sb.collapsed .sb-user-card {\n  justify-content: center;\n  padding: 10px 0;\n}\n.sb.collapsed .sb-item {\n  position: relative;\n}\n.sb.collapsed .sb-item::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) scale(0.92);\n  background: #111128;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 500;\n  font-family: "Cairo", sans-serif;\n}\n.sb.collapsed .sb-item:hover::after {\n  opacity: 1;\n  transform: translateY(-50%) scale(1);\n}\n.sb-overlay {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(8px);\n  z-index: 290;\n}\n.sb-overlay.active {\n  display: block;\n}\n.sb-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sb-logo-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  transition: all 0.25s var(--ease);\n}\n.sb-logo:hover {\n  opacity: 0.9;\n}\n.sb-logo-badge {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #fff;\n  box-shadow: 0 0 20px var(--violet-glow);\n  flex-shrink: 0;\n  transition: transform 0.3s var(--ease);\n}\n.sb-logo:hover .sb-logo-badge {\n  transform: rotate(12deg) scale(1.05);\n}\n.sb-logo-text {\n  font-size: 1.15rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -0.4px;\n  line-height: 1.1;\n}\n.sb-logo-text span {\n  color: var(--teal-light);\n}\n.sb-logo-sub {\n  font-size: 0.64rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.sb-collapse-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: all 0.2s;\n}\n.sb-collapse-btn:hover {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border-color: var(--border-v);\n  transform: scale(1.06);\n}\n.sb-nav {\n  padding: 16px 12px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.sb-section {\n  font-size: 0.66rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--violet-light);\n  padding: 16px 12px 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  opacity: 0.85;\n}\n.sb-section i {\n  font-size: 0.72rem;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 9px 12px;\n  border-radius: 12px;\n  color: var(--text-2);\n  font-size: 0.86rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.22s var(--ease);\n  position: relative;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.sb-item:hover {\n  color: #fff;\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n  transform: translateX(-2px);\n}\n.sb-item.active {\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(99, 102, 241, 0.2),\n      rgba(6, 182, 212, 0.1));\n  border-color: var(--border-v);\n  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.15);\n}\n.sb-item.active::before {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 18%;\n  bottom: 18%;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--violet),\n      var(--teal));\n  border-radius: 3px 0 0 3px;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.sb-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.92rem;\n  color: var(--text-2);\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  transition: all 0.22s var(--ease);\n  flex-shrink: 0;\n}\n.sb-item:hover .sb-icon {\n  color: var(--violet-light);\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.25);\n  transform: scale(1.05);\n}\n.sb-item.active .sb-icon {\n  color: var(--teal-light);\n  background: var(--violet-soft);\n  border-color: var(--border-v);\n}\n.sb-badge {\n  margin-right: auto;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      #4f46e5);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 100px;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.45);\n}\n.sb-item.danger:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(244, 63, 94, 0.2);\n}\n.sb-item.danger:hover .sb-icon {\n  color: var(--rose-light);\n  background: rgba(244, 63, 94, 0.15);\n}\n.dropdown-menu-list {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.35s ease-in-out;\n  padding-right: 12px;\n  border-right: 2px solid rgba(99, 102, 241, 0.22);\n  margin-right: 20px;\n  margin-top: 4px;\n  margin-bottom: 6px;\n  padding-left: 0;\n  border-left: none;\n  margin-left: 0;\n}\n.nav-dropdown.open .dropdown-menu-list {\n  max-height: 600px;\n}\n.nav-sub-item {\n  padding: 7px 10px !important;\n  font-size: 0.82rem !important;\n  border-radius: 9px !important;\n  color: var(--text-2) !important;\n}\n.nav-sub-item:hover {\n  color: #fff !important;\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.nav-sub-item.active {\n  color: var(--teal-light) !important;\n  background: var(--teal-soft) !important;\n  border-color: var(--border-t) !important;\n}\n.sb-foot {\n  padding: 14px 12px;\n  border-top: 1px solid var(--border);\n  background: rgba(0, 0, 0, 0.12);\n}\n.sb-user-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: all 0.22s var(--ease);\n}\n.sb-user-card:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: var(--border-v);\n}\n.sb-av {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.92rem;\n  color: #fff;\n  position: relative;\n  flex-shrink: 0;\n  box-shadow: 0 0 12px rgba(99, 102, 241, 0.3);\n}\n.user-status-dot {\n  position: absolute;\n  bottom: -2px;\n  left: -2px;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--emerald-light);\n  border: 2px solid #111128;\n  box-shadow: 0 0 6px var(--emerald-light);\n}\n.sb-uinfo {\n  flex: 1;\n  min-width: 0;\n}\n.sb-uname {\n  font-size: 0.84rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sb-urole {\n  font-size: 0.68rem;\n  color: var(--teal-light);\n  font-weight: 700;\n  margin-top: 2px;\n}\n.sb-ucaret {\n  color: var(--text-2);\n  font-size: 0.8rem;\n  transition: color 0.2s;\n}\n.sb-user-card:hover .sb-ucaret {\n  color: #fff;\n}\n.arrow-icon {\n  margin-right: auto;\n  margin-left: 0;\n  font-size: 0.72rem;\n  transition: transform 0.3s;\n}\n.main-container {\n  margin-right: var(--sidebar-w);\n  margin-left: 0;\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n  color: var(--text);\n  min-height: 100vh;\n  transition: margin-right 0.35s var(--ease);\n}\n.tb {\n  height: var(--nav-h);\n  background: var(--bg-topbar);\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  gap: 20px;\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  flex-shrink: 0;\n}\n.tb-l {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.tb-menu {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.tb-menu:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-bc {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n  color: var(--text-2);\n}\n.tb-bc .sep {\n  color: rgba(255, 255, 255, 0.18);\n  font-size: 0.9rem;\n}\n.tb-bc .cur {\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tb-r {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.tb-btn {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n}\n.tb-btn:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-user-wrap {\n  position: relative;\n}\n.tb-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 4px 14px 4px 4px;\n  border-radius: 100px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  transition: all 0.2s;\n}\n.tb-user:hover {\n  border-color: var(--border-v);\n  background: var(--violet-soft);\n}\n.tb-av {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.tb-uname {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text);\n  white-space: nowrap;\n}\n.tb-caret {\n  font-size: 0.7rem;\n  color: var(--text-2);\n}\n.dropdown {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  right: auto;\n  width: 260px;\n  background: #0c0c1e;\n  border: 1px solid var(--border-v);\n  border-radius: var(--r-lg);\n  padding: 12px;\n  z-index: 1000;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  display: none;\n  animation: fadeInDown 0.25s var(--ease);\n}\n.dropdown.show {\n  display: block;\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ud-top {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 8px;\n}\n.ud-name {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #fff;\n}\n.ud-role {\n  font-size: 0.72rem;\n  color: var(--teal-light);\n  margin-top: 2px;\n}\n.ud-email {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.ud-divider {\n  height: 1px;\n  background: var(--border);\n  margin: 8px 0;\n}\n.ud-row {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  color: var(--text);\n  font-size: 0.84rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ud-row:hover {\n  background: var(--violet-soft);\n  color: #fff;\n}\n.ud-row.danger {\n  color: var(--rose-light);\n}\n.ud-row.danger:hover {\n  background: var(--rose-soft);\n}\n.pc {\n  padding: 32px;\n  flex: 1;\n}\n@media (max-width: 992px) {\n  .sb {\n    transform: translateX(100%);\n  }\n  .sb.open {\n    transform: translateX(0);\n  }\n  .main-container {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .pc {\n    padding: 20px;\n  }\n}\n@media (max-width: 640px) {\n  .tb {\n    padding: 0 16px;\n  }\n  .tb-bc {\n    display: none;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/components/layout/main-layout.component.ts", lineNumber: 15 });
})();
export {
  MainLayoutComponent
};
//# sourceMappingURL=chunk-TGQDM7GV.js.map
