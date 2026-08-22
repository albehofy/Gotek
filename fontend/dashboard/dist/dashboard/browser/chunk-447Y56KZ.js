import {
  ApiService
} from "./chunk-HE5SAGTC.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-JBOK22UG.js";
import {
  CommonModule,
  Component,
  DatePipe,
  ElementRef,
  HostListener,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZYG2ULWX.js";

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
    \u0275\u0275textInterpolate(ctx_r0.unreadCount > 99 ? "99+" : ctx_r0.unreadCount);
  }
}
function NotificationCenterComponent_div_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.unreadCount, " \u063A\u064A\u0631 \u0645\u0642\u0631\u0648\u0621");
  }
}
function NotificationCenterComponent_div_4_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function NotificationCenterComponent_div_4_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0643\u0644 ");
    \u0275\u0275elementEnd();
  }
}
function NotificationCenterComponent_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function NotificationCenterComponent_div_4_div_13_Template_div_click_0_listener() {
      const notif_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsRead(notif_r5));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275element(9, "i", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 27);
    \u0275\u0275listener("click", function NotificationCenterComponent_div_4_div_13_Template_button_click_12_listener($event) {
      const notif_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteNotif(notif_r5, $event));
    });
    \u0275\u0275element(13, "i", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !notif_r5.is_read);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", notif_r5.type || "info");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getNotifIcon(notif_r5.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r5.title || (notif_r5.data == null ? null : notif_r5.data.title) || "\u062A\u0646\u0628\u064A\u0647 \u062C\u062F\u064A\u062F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r5.message || (notif_r5.data == null ? null : notif_r5.data.message) || notif_r5.body);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 8, notif_r5.created_at, "yyyy-MM-dd HH:mm"), "");
  }
}
function NotificationCenterComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u062C\u062F\u064A\u062F\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd()();
  }
}
function NotificationCenterComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275element(3, "i", 2);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, NotificationCenterComponent_div_4_span_6_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "button", 11);
    \u0275\u0275listener("click", function NotificationCenterComponent_div_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.playNotificationSound());
    });
    \u0275\u0275element(9, "i", 12);
    \u0275\u0275text(10, " \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0635\u0648\u062A ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, NotificationCenterComponent_div_4_button_11_Template, 3, 0, "button", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275template(13, NotificationCenterComponent_div_4_div_13_Template, 14, 11, "div", 15)(14, NotificationCenterComponent_div_4_div_14_Template, 4, 0, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.unreadCount > 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.unreadCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length === 0);
  }
}
var NotificationCenterComponent = class _NotificationCenterComponent {
  apiService = inject(ApiService);
  router = inject(Router);
  elementRef = inject(ElementRef);
  notifications = [];
  unreadCount = 0;
  isOpen = false;
  pollInterval = null;
  previousUnreadCount = -1;
  previousFirstNotifId = null;
  onDocumentClick(event) {
    if (this.isOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
  ngOnInit() {
    this.loadNotifications();
    this.pollInterval = setInterval(() => {
      this.loadNotifications();
    }, 1e4);
  }
  ngOnDestroy() {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
  }
  playNotificationSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx)
        return;
      const ctx = new AudioCtx();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.9, ctx.currentTime);
      masterGain.connect(ctx.destination);
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(1046.5, ctx.currentTime);
      gain1.gain.setValueAtTime(0.9, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.45);
      osc1.connect(gain1);
      gain1.connect(masterGain);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.45);
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(1567.98, ctx.currentTime + 0.12);
      gain2.gain.setValueAtTime(1e-3, ctx.currentTime);
      gain2.gain.setValueAtTime(1, ctx.currentTime + 0.12);
      gain2.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.75);
      osc2.connect(gain2);
      gain2.connect(masterGain);
      osc2.start(ctx.currentTime + 0.12);
      osc2.stop(ctx.currentTime + 0.75);
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = "triangle";
      osc3.frequency.setValueAtTime(2093, ctx.currentTime + 0.24);
      gain3.gain.setValueAtTime(1e-3, ctx.currentTime);
      gain3.gain.setValueAtTime(0.85, ctx.currentTime + 0.24);
      gain3.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.95);
      osc3.connect(gain3);
      gain3.connect(masterGain);
      osc3.start(ctx.currentTime + 0.24);
      osc3.stop(ctx.currentTime + 0.95);
    } catch (err) {
      console.warn("Could not play notification sound:", err);
    }
  }
  loadNotifications() {
    this.apiService.getNotifications().subscribe((res) => {
      if (res) {
        const newUnreadCount = res.unread_count || 0;
        const newNotifications = res.data?.data || res.data || [];
        const newFirstNotifId = newNotifications.length > 0 ? newNotifications[0].id : null;
        if (this.previousUnreadCount >= 0) {
          if (newUnreadCount > this.previousUnreadCount || newFirstNotifId && newFirstNotifId !== this.previousFirstNotifId && newUnreadCount > 0) {
            this.playNotificationSound();
          }
        }
        this.previousUnreadCount = newUnreadCount;
        this.previousFirstNotifId = newFirstNotifId;
        this.unreadCount = newUnreadCount;
        this.notifications = newNotifications;
      } else {
        this.unreadCount = 0;
        this.notifications = [];
      }
    });
  }
  toggleDropdown(event) {
    if (event)
      event.stopPropagation();
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
    this.isOpen = false;
    const taskId = notif.notifiable_id || notif.task_id || notif.data?.task_id;
    if (taskId && (notif.notifiable_type?.includes("Task") || notif.type === "status_change" || notif.type === "assignment")) {
      this.router.navigate(["/tasks"], { queryParams: { taskId } });
    } else if (notif.link) {
      this.router.navigateByUrl(notif.link);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationCenterComponent, selectors: [["app-notification-center"]], hostBindings: function NotificationCenterComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NotificationCenterComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 5, vars: 4, consts: [[1, "notification-bell-wrapper"], ["type", "button", "title", "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A", 1, "bell-btn", 3, "click"], [1, "fa-solid", "fa-bell"], ["class", "unread-badge", 4, "ngIf"], ["class", "notification-dropdown", 4, "ngIf"], [1, "unread-badge"], [1, "notification-dropdown"], [1, "notification-header"], [1, "header-title"], ["class", "badge-count", 4, "ngIf"], [1, "header-actions-right", 2, "display", "flex", "gap", "6px", "align-items", "center"], ["type", "button", "title", "\u062A\u062C\u0631\u0628\u0629 \u0635\u0648\u062A \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A", 1, "btn-test-sound", 3, "click"], [1, "fa-solid", "fa-volume-high"], ["type", "button", "class", "btn-read-all", "title", "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621", 3, "click", 4, "ngIf"], [1, "notification-body"], ["class", "notification-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "badge-count"], ["type", "button", "title", "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621", 1, "btn-read-all", 3, "click"], [1, "fa-solid", "fa-check-double"], [1, "notification-item", 3, "click"], [1, "notif-icon", 3, "ngClass"], [1, "notif-content"], [1, "notif-title"], [1, "notif-message"], [1, "notif-time"], [1, "fa-regular", "fa-clock"], ["type", "button", "title", "\u062D\u0630\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631", 1, "btn-del-notif", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "empty-state"], [1, "fa-regular", "fa-bell-slash"]], template: function NotificationCenterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function NotificationCenterComponent_Template_button_click_1_listener($event) {
        return ctx.toggleDropdown($event);
      });
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275template(3, NotificationCenterComponent_span_3_Template, 2, 1, "span", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, NotificationCenterComponent_div_4_Template, 15, 4, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("has-unread", ctx.unreadCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  position: relative;\n}\n.notification-bell-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.bell-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  width: 40px;\n  height: 40px;\n  border-radius: var(--r);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.25s var(--ease);\n  padding: 0;\n}\n.bell-btn[_ngcontent-%COMP%]:hover {\n  background: var(--violet-soft);\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  transform: translateY(-1px);\n}\n.bell-btn.has-unread[_ngcontent-%COMP%] {\n  color: #38bdf8;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background: #ef4444;\n  color: #ffffff;\n  font-size: 0.68rem;\n  font-weight: 800;\n  padding: 2px 6px;\n  border-radius: 100px;\n  border: 2px solid var(--bg);\n  min-width: 18px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);\n}\n.notification-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  width: 380px;\n  max-width: 90vw;\n  background: rgba(17, 24, 39, 0.96);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 16px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(16px);\n  z-index: 999999;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: var(--text);\n}\n.header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.badge-count[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  background: rgba(99, 102, 241, 0.2);\n  color: #818cf8;\n  padding: 2px 8px;\n  border-radius: 100px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.btn-test-sound[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  color: #a5b4fc;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.btn-test-sound[_ngcontent-%COMP%]:hover {\n  background: #6366f1;\n  color: #ffffff;\n  border-color: #6366f1;\n}\n.btn-read-all[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-2);\n  font-size: 0.76rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: color 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0;\n  font-family: inherit;\n}\n.btn-read-all[_ngcontent-%COMP%]:hover {\n  color: var(--violet-light);\n}\n.notification-body[_ngcontent-%COMP%] {\n  max-height: 380px;\n  overflow-y: auto;\n}\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  transition: background 0.2s;\n  position: relative;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n}\n.notification-item.unread[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: #6366f1;\n}\n.notif-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.88rem;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--text-2);\n}\n.notif-icon.assignment[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: #818cf8;\n}\n.notif-icon.mention[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.15);\n  color: #38bdf8;\n}\n.notif-icon.status_change[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.notif-icon.client_note[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n}\n.notif-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.notif-message[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-2);\n  margin-bottom: 4px;\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-3, #64748b);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.btn-del-notif[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-3);\n  padding: 4px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.2s;\n  font-size: 0.78rem;\n}\n.btn-del-notif[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.15);\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n  text-align: center;\n  color: var(--text-2);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 8px;\n  color: var(--text-3);\n}\n/*# sourceMappingURL=notification-center.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationCenterComponent, [{
    type: Component,
    args: [{ selector: "app-notification-center", standalone: true, imports: [CommonModule], template: `
    <div class="notification-bell-wrapper">
      <button type="button" class="bell-btn" (click)="toggleDropdown($event)" [class.has-unread]="unreadCount > 0" title="\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A">
        <i class="fa-solid fa-bell"></i>
        <span class="unread-badge" *ngIf="unreadCount > 0">{{ unreadCount > 99 ? '99+' : unreadCount }}</span>
      </button>

      <div class="notification-dropdown" *ngIf="isOpen">
        <div class="notification-header">
          <div class="header-title">
            <i class="fa-solid fa-bell"></i>
            <span>\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A</span>
            <span class="badge-count" *ngIf="unreadCount > 0">{{ unreadCount }} \u063A\u064A\u0631 \u0645\u0642\u0631\u0648\u0621</span>
          </div>
          <div class="header-actions-right" style="display:flex; gap:6px; align-items:center;">
            <button type="button" class="btn-test-sound" (click)="playNotificationSound()" title="\u062A\u062C\u0631\u0628\u0629 \u0635\u0648\u062A \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A">
              <i class="fa-solid fa-volume-high"></i> \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0635\u0648\u062A
            </button>
            <button type="button" class="btn-read-all" *ngIf="unreadCount > 0" (click)="markAllRead()" title="\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621">
              <i class="fa-solid fa-check-double"></i> \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0643\u0644
            </button>
          </div>
        </div>

        <div class="notification-body">
          <div class="notification-item" 
            *ngFor="let notif of notifications" 
            [class.unread]="!notif.is_read"
            (click)="markAsRead(notif)"
          >
            <div class="notif-icon" [ngClass]="notif.type || 'info'">
              <i [class]="getNotifIcon(notif.type)"></i>
            </div>
            <div class="notif-content">
              <div class="notif-title">{{ notif.title || notif.data?.title || '\u062A\u0646\u0628\u064A\u0647 \u062C\u062F\u064A\u062F' }}</div>
              <div class="notif-message">{{ notif.message || notif.data?.message || notif.body }}</div>
              <div class="notif-time"><i class="fa-regular fa-clock"></i> {{ notif.created_at | date:'yyyy-MM-dd HH:mm' }}</div>
            </div>
            <button type="button" class="btn-del-notif" (click)="deleteNotif(notif, $event)" title="\u062D\u0630\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="empty-state" *ngIf="notifications.length === 0">
            <i class="fa-regular fa-bell-slash"></i>
            <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u062C\u062F\u064A\u062F\u0629 \u062D\u0627\u0644\u064A\u0627\u064B</p>
          </div>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;71d7a39a07cedeb53514df3a39441fe68b2af562fa1a7b9a625ca4af90b8c992;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/shared/notification-center/notification-center.component.ts */\n:host {\n  display: inline-block;\n  position: relative;\n}\n.notification-bell-wrapper {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.bell-btn {\n  position: relative;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  color: var(--text-2);\n  width: 40px;\n  height: 40px;\n  border-radius: var(--r);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.25s var(--ease);\n  padding: 0;\n}\n.bell-btn:hover {\n  background: var(--violet-soft);\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  transform: translateY(-1px);\n}\n.bell-btn.has-unread {\n  color: #38bdf8;\n}\n.unread-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background: #ef4444;\n  color: #ffffff;\n  font-size: 0.68rem;\n  font-weight: 800;\n  padding: 2px 6px;\n  border-radius: 100px;\n  border: 2px solid var(--bg);\n  min-width: 18px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);\n}\n.notification-dropdown {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  width: 380px;\n  max-width: 90vw;\n  background: rgba(17, 24, 39, 0.96);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 16px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(16px);\n  z-index: 999999;\n  overflow: hidden;\n  animation: fadeInDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.notification-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: var(--text);\n}\n.header-title i {\n  color: #6366f1;\n}\n.badge-count {\n  font-size: 0.7rem;\n  background: rgba(99, 102, 241, 0.2);\n  color: #818cf8;\n  padding: 2px 8px;\n  border-radius: 100px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.btn-test-sound {\n  background: rgba(99, 102, 241, 0.15);\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  color: #a5b4fc;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.btn-test-sound:hover {\n  background: #6366f1;\n  color: #ffffff;\n  border-color: #6366f1;\n}\n.btn-read-all {\n  background: transparent;\n  border: none;\n  color: var(--text-2);\n  font-size: 0.76rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: color 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0;\n  font-family: inherit;\n}\n.btn-read-all:hover {\n  color: var(--violet-light);\n}\n.notification-body {\n  max-height: 380px;\n  overflow-y: auto;\n}\n.notification-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  transition: background 0.2s;\n  position: relative;\n}\n.notification-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.notification-item.unread {\n  background: rgba(99, 102, 241, 0.08);\n}\n.notification-item.unread::before {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: #6366f1;\n}\n.notif-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.88rem;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--text-2);\n}\n.notif-icon.assignment {\n  background: rgba(99, 102, 241, 0.15);\n  color: #818cf8;\n}\n.notif-icon.mention {\n  background: rgba(14, 165, 233, 0.15);\n  color: #38bdf8;\n}\n.notif-icon.status_change {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.notif-icon.client_note {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n}\n.notif-content {\n  flex: 1;\n  min-width: 0;\n}\n.notif-title {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.notif-message {\n  font-size: 0.78rem;\n  color: var(--text-2);\n  margin-bottom: 4px;\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notif-time {\n  font-size: 0.7rem;\n  color: var(--text-3, #64748b);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.btn-del-notif {\n  background: transparent;\n  border: none;\n  color: var(--text-3);\n  padding: 4px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.2s;\n  font-size: 0.78rem;\n}\n.btn-del-notif:hover {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.15);\n}\n.empty-state {\n  padding: 32px 16px;\n  text-align: center;\n  color: var(--text-2);\n}\n.empty-state i {\n  font-size: 2rem;\n  margin-bottom: 8px;\n  color: var(--text-3);\n}\n/*# sourceMappingURL=notification-center.component.css.map */\n'] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationCenterComponent, { className: "NotificationCenterComponent", filePath: "src/app/components/shared/notification-center/notification-center.component.ts", lineNumber: 325 });
})();

// src/app/components/layout/main-layout.component.ts
var _c0 = () => ["/dashboard"];
var _c1 = () => ({ exact: false });
function MainLayoutComponent_a_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 59)(1, "span", 19);
    \u0275\u0275element(2, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "\u0628\u0648\u0627\u0628\u0629 \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0634\u0631\u0648\u0639");
    \u0275\u0275elementEnd()();
  }
}
function MainLayoutComponent_a_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275listener("click", function MainLayoutComponent_a_21_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToTab("crm-overview"));
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275element(2, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 CRM");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.isDashboardTabActive("crm-overview") || ctx_r1.isDashboardTabActive("overview"));
  }
}
function MainLayoutComponent_a_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 63)(1, "span", 19);
    \u0275\u0275element(2, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "\u0627\u0644\u0639\u0645\u0644\u0627\u0621");
    \u0275\u0275elementEnd()();
  }
}
function MainLayoutComponent_a_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 65)(1, "span", 19);
    \u0275\u0275element(2, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F");
    \u0275\u0275elementEnd()();
  }
}
function MainLayoutComponent_a_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 67)(1, "span", 19);
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632");
    \u0275\u0275elementEnd()();
  }
}
function MainLayoutComponent_a_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69)(1, "span", 19);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629");
    \u0275\u0275elementEnd()();
  }
}
function MainLayoutComponent_a_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 71)(1, "span", 19);
    \u0275\u0275element(2, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function MainLayoutComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0648\u0627\u0644\u0631\u0633\u0627\u0626\u0644");
    \u0275\u0275elementEnd()();
  }
}
function MainLayoutComponent_a_33_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.overviewStats.inquiries);
  }
}
function MainLayoutComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 74);
    \u0275\u0275listener("click", function MainLayoutComponent_a_33_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToTab("contact-hub"));
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275element(2, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MainLayoutComponent_a_33_span_5_Template, 2, 1, "span", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.isDashboardTabActive("contact-hub"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.overviewStats.inquiries > 0);
  }
}
function MainLayoutComponent_a_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 78)(1, "span", 19);
    \u0275\u0275element(2, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u0645\u0648\u0642\u0639");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c1));
  }
}
function MainLayoutComponent_div_35_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 99);
    \u0275\u0275elementStart(2, "a", 113)(3, "span", 19);
    \u0275\u0275element(4, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6, "\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function MainLayoutComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275listener("click", function MainLayoutComponent_div_35_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleWebsiteMenu());
    });
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275element(3, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 84)(8, "a", 85);
    \u0275\u0275listener("click", function MainLayoutComponent_div_35_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToTab("website-overview"));
    });
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275element(10, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 21);
    \u0275\u0275text(12, "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 87)(14, "span", 19);
    \u0275\u0275element(15, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 21);
    \u0275\u0275text(17, "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "a", 89)(19, "span", 19);
    \u0275\u0275element(20, "i", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 21);
    \u0275\u0275text(22, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "a", 91)(24, "span", 19);
    \u0275\u0275element(25, "i", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 21);
    \u0275\u0275text(27, "\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "a", 93)(29, "span", 19);
    \u0275\u0275element(30, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 21);
    \u0275\u0275text(32, "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u062F\u0648\u0646\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "a", 95)(34, "span", 19);
    \u0275\u0275element(35, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 21);
    \u0275\u0275text(37, "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "a", 97)(39, "span", 19);
    \u0275\u0275element(40, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 21);
    \u0275\u0275text(42, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "div", 99);
    \u0275\u0275elementStart(44, "div", 100);
    \u0275\u0275element(45, "i", 101);
    \u0275\u0275text(46, " \u0645\u062D\u0631\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "a", 102);
    \u0275\u0275listener("click", function MainLayoutComponent_div_35_Template_a_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToTab("home-page"));
    });
    \u0275\u0275elementStart(48, "span", 19);
    \u0275\u0275element(49, "i", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 21);
    \u0275\u0275text(51, "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "a", 104)(53, "span", 19);
    \u0275\u0275element(54, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 21);
    \u0275\u0275text(56, "\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "a", 106);
    \u0275\u0275listener("click", function MainLayoutComponent_div_35_Template_a_click_57_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToTab("services-page"));
    });
    \u0275\u0275elementStart(58, "span", 19);
    \u0275\u0275element(59, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 21);
    \u0275\u0275text(61, "\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "a", 107);
    \u0275\u0275listener("click", function MainLayoutComponent_div_35_Template_a_click_62_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToTab("portfolio-page"));
    });
    \u0275\u0275elementStart(63, "span", 19);
    \u0275\u0275element(64, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 21);
    \u0275\u0275text(66, "\u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "a", 109);
    \u0275\u0275listener("click", function MainLayoutComponent_div_35_Template_a_click_67_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToTab("blogs-page"));
    });
    \u0275\u0275elementStart(68, "span", 19);
    \u0275\u0275element(69, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 21);
    \u0275\u0275text(71, "\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "a", 111);
    \u0275\u0275listener("click", function MainLayoutComponent_div_35_Template_a_click_72_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToTab("footer-section"));
    });
    \u0275\u0275elementStart(73, "span", 19);
    \u0275\u0275element(74, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 21);
    \u0275\u0275text(76, "\u0645\u062D\u062A\u0648\u0649 \u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(77, MainLayoutComponent_div_35_ng_container_77_Template, 7, 0, "ng-container", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r1.websiteMenuOpen);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("transform", ctx_r1.websiteMenuOpen ? "rotate(180deg)" : "rotate(0deg)");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.isDashboardTabActive("website-overview"));
    \u0275\u0275advance(39);
    \u0275\u0275classProp("active", ctx_r1.isDashboardTabActive("home-page"));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("active", ctx_r1.isDashboardTabActive("services-page"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.isDashboardTabActive("portfolio-page"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.isDashboardTabActive("blogs-page"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.isDashboardTabActive("footer-section"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin());
  }
}
function MainLayoutComponent_a_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 115);
    \u0275\u0275listener("click", function MainLayoutComponent_a_77_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToTab("contact-hub"));
    });
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275text(2, "\xA0\xA0\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A");
    \u0275\u0275elementEnd();
  }
}
function MainLayoutComponent_a_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 117);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2, "\xA0\xA0\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
    \u0275\u0275elementEnd();
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
  currentUser = null;
  ngOnInit() {
    try {
      const uStr = localStorage.getItem("mediaglow_user");
      if (uStr)
        this.currentUser = JSON.parse(uStr);
    } catch (e) {
    }
    if (!this.currentUser) {
      this.currentUser = { name: "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645", role: "super_admin", email: "admin@mediaglow.com" };
    }
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
  isSuperAdmin() {
    return this.currentUser?.role === "super_admin";
  }
  isAdmin() {
    return ["super_admin", "admin"].includes(this.currentUser?.role);
  }
  isDepartmentManager() {
    return this.currentUser?.role === "department_manager";
  }
  isEmployee() {
    return this.currentUser?.role === "employee";
  }
  isClient() {
    return this.currentUser?.role === "client";
  }
  getRoleBadgeLabel() {
    const role = this.currentUser?.role;
    if (role === "super_admin")
      return "\u0633\u0648\u0628\u0631 \u0623\u062F\u0645\u0646";
    if (role === "admin")
      return "\u0623\u062F\u0645\u0646";
    if (role === "department_manager")
      return "\u0645\u062F\u064A\u0631 \u0642\u0633\u0645";
    if (role === "employee")
      return "\u0645\u0648\u0638\u0641 / \u0635\u0627\u0646\u0639 \u0645\u062D\u062A\u0648\u0649";
    if (role === "client")
      return "\u0639\u0645\u064A\u0644 VIP";
    return "\u0645\u0633\u062A\u062E\u062F\u0645";
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
    if (path.startsWith("portfolio"))
      return "\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u0645\u0648\u0642\u0639";
    return path;
  }
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 85, vars: 34, consts: [[1, "crm-shell"], [1, "sb-overlay", 3, "click"], [1, "sb"], [1, "sb-content"], [1, "sb-logo-wrapper"], [1, "sb-logo", 3, "routerLink"], [1, "sb-logo-badge"], [1, "fa-solid", "fa-bolt"], [1, "sb-logo-details"], [1, "sb-logo-text"], [1, "sb-logo-sub"], [1, "sb-nav"], [1, "sb-section"], [1, "fa-solid", "fa-layer-group"], ["class", "sb-item", "routerLink", "/client-portal", "routerLinkActive", "active", "data-tooltip", "\u0628\u0648\u0627\u0628\u0629 \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0634\u0631\u0648\u0639", 4, "ngIf"], ["class", "sb-item", "data-tooltip", "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 CRM \u0627\u0644\u0648\u0643\u0627\u0644\u0629", 3, "active", "click", 4, "ngIf"], ["class", "sb-item", "routerLink", "/clients", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0639\u0645\u0644\u0627\u0621", 4, "ngIf"], ["class", "sb-item", "routerLink", "/deals", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F", 4, "ngIf"], ["routerLink", "/tasks", "routerLinkActive", "active", "data-tooltip", "\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645", 1, "sb-item"], [1, "sb-icon"], [1, "fa-solid", "fa-list-check"], [1, "sb-text"], ["class", "sb-item", "routerLink", "/departments", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632", 4, "ngIf"], ["class", "sb-item", "routerLink", "/finance", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629", 4, "ngIf"], ["class", "sb-item", "routerLink", "/roles", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A", 4, "ngIf"], ["class", "sb-section", 4, "ngIf"], ["class", "sb-item", "data-tooltip", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A", 3, "active", "click", 4, "ngIf"], ["class", "sb-item", "routerLink", "/portfolio", "routerLinkActive", "active", "data-tooltip", "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639", 3, "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-dropdown", 3, "open", 4, "ngIf"], [1, "fa-solid", "fa-gear"], ["data-tooltip", "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C", 1, "sb-item", "danger", 2, "cursor", "pointer", 3, "click"], [1, "fa-solid", "fa-right-from-bracket"], [1, "main-container"], [1, "tb"], [1, "tb-l"], [1, "tb-menu", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "tb-bc"], [2, "color", "var(--text-2)", "font-size", "0.78rem"], [1, "sep", 2, "margin", "0 6px"], [1, "cur"], [1, "tb-r"], ["title", "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062B\u064A\u0645", 1, "tb-btn", 3, "click"], [1, "fa-solid", 3, "ngClass"], [1, "tb-user-wrap"], [1, "tb-user", 3, "click"], [1, "tb-av"], [1, "tb-uname"], [1, "tb-caret"], [1, "dropdown", "dd-user"], [1, "ud-top"], [1, "ud-name"], [1, "ud-role"], [1, "ud-email"], ["class", "ud-row", 3, "click", 4, "ngIf"], ["class", "ud-row", "routerLink", "/", 4, "ngIf"], [1, "ud-divider"], [1, "ud-row", "danger", 3, "click"], [1, "pc"], ["routerLink", "/client-portal", "routerLinkActive", "active", "data-tooltip", "\u0628\u0648\u0627\u0628\u0629 \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0634\u0631\u0648\u0639", 1, "sb-item"], [1, "fa-solid", "fa-gauge-high"], ["data-tooltip", "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 CRM \u0627\u0644\u0648\u0643\u0627\u0644\u0629", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-chart-line"], ["routerLink", "/clients", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0639\u0645\u0644\u0627\u0621", 1, "sb-item"], [1, "fa-solid", "fa-users"], ["routerLink", "/deals", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F", 1, "sb-item"], [1, "fa-solid", "fa-handshake"], ["routerLink", "/departments", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632", 1, "sb-item"], [1, "fa-solid", "fa-sitemap"], ["routerLink", "/finance", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629", 1, "sb-item"], [1, "fa-solid", "fa-coins"], ["routerLink", "/roles", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A", 1, "sb-item"], [1, "fa-solid", "fa-shield-halved"], [1, "fa-solid", "fa-sliders"], ["data-tooltip", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A", 1, "sb-item", 3, "click"], [1, "fa-solid", "fa-inbox"], ["class", "sb-badge", 4, "ngIf"], [1, "sb-badge"], ["routerLink", "/portfolio", "routerLinkActive", "active", "data-tooltip", "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639", 1, "sb-item", 3, "routerLinkActiveOptions"], [1, "fa-solid", "fa-briefcase"], [1, "nav-dropdown"], ["data-tooltip", "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", 1, "sb-item", 2, "cursor", "pointer", 3, "click"], [1, "fa-solid", "fa-globe"], [1, "fa-solid", "fa-chevron-down", "arrow-icon"], [1, "dropdown-menu-list"], ["data-tooltip", "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-chart-pie"], ["routerLink", "/portfolio/projects", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644", 1, "sb-item", "nav-sub-item"], [1, "fa-solid", "fa-diagram-project"], ["routerLink", "/portfolio/categories", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A", 1, "sb-item", "nav-sub-item"], [1, "fa-solid", "fa-tags"], ["routerLink", "/portfolio/services", "routerLinkActive", "active", "data-tooltip", "\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A", 1, "sb-item", "nav-sub-item"], [1, "fa-solid", "fa-toolbox"], ["routerLink", "/portfolio/blogs", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u062F\u0648\u0646\u0629", 1, "sb-item", "nav-sub-item"], [1, "fa-solid", "fa-newspaper"], ["routerLink", "/portfolio/testimonials", "routerLinkActive", "active", "data-tooltip", "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621", 1, "sb-item", "nav-sub-item"], [1, "fa-solid", "fa-quote-left"], ["routerLink", "/portfolio/faqs", "routerLinkActive", "active", "data-tooltip", "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629", 1, "sb-item", "nav-sub-item"], [1, "fa-solid", "fa-circle-question"], [2, "border-top", "1px solid rgba(255, 255, 255, 0.08)", "margin", "6px 12px"], [2, "font-size", "0.7rem", "font-weight", "800", "color", "var(--violet-light, #818cf8)", "padding", "4px 14px", "text-transform", "uppercase"], [1, "fa-solid", "fa-pen-to-square"], ["data-tooltip", "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-house"], ["routerLink", "/portfolio/about", "routerLinkActive", "active", "data-tooltip", "\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629", 1, "sb-item", "nav-sub-item"], [1, "fa-solid", "fa-building-user"], ["data-tooltip", "\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A", 1, "sb-item", "nav-sub-item", 3, "click"], ["data-tooltip", "\u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-images"], ["data-tooltip", "\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629", 1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-blog"], ["data-tooltip", "\u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639", 1, "sb-item", "nav-sub-item", 3, "click"], [4, "ngIf"], ["routerLink", "/", "data-tooltip", "\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A", 1, "sb-item", "nav-sub-item"], [1, "fa-solid", "fa-arrow-up-right-from-square"], [1, "ud-row", 3, "click"], [1, "fa-solid", "fa-inbox", 2, "color", "var(--teal-2)"], ["routerLink", "/", 1, "ud-row"], [1, "fa-solid", "fa-globe", 2, "color", "var(--teal-2)"]], template: function MainLayoutComponent_Template(rf, ctx) {
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
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "nav", 11)(16, "div", 12);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, MainLayoutComponent_a_20_Template, 5, 0, "a", 14)(21, MainLayoutComponent_a_21_Template, 5, 2, "a", 15)(22, MainLayoutComponent_a_22_Template, 5, 0, "a", 16)(23, MainLayoutComponent_a_23_Template, 5, 0, "a", 17);
      \u0275\u0275elementStart(24, "a", 18)(25, "span", 19);
      \u0275\u0275element(26, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 21);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(29, MainLayoutComponent_a_29_Template, 5, 0, "a", 22)(30, MainLayoutComponent_a_30_Template, 5, 0, "a", 23)(31, MainLayoutComponent_a_31_Template, 5, 0, "a", 24)(32, MainLayoutComponent_div_32_Template, 4, 0, "div", 25)(33, MainLayoutComponent_a_33_Template, 6, 3, "a", 26)(34, MainLayoutComponent_a_34_Template, 5, 2, "a", 27)(35, MainLayoutComponent_div_35_Template, 78, 17, "div", 28);
      \u0275\u0275elementStart(36, "div", 12);
      \u0275\u0275element(37, "i", 29);
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "\u0627\u0644\u0646\u0638\u0627\u0645");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "a", 30);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_40_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(41, "span", 19);
      \u0275\u0275element(42, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 21);
      \u0275\u0275text(44, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 32)(46, "header", 33)(47, "div", 34)(48, "button", 35);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_48_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(49, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 37)(51, "span", 38);
      \u0275\u0275text(52, "\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062D\u0643\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 39);
      \u0275\u0275text(54, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 40);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 41);
      \u0275\u0275element(58, "app-notification-center");
      \u0275\u0275elementStart(59, "button", 42);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_59_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275element(60, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 44)(62, "div", 45);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_62_listener() {
        return ctx.toggleDropdown("user");
      });
      \u0275\u0275elementStart(63, "div", 46);
      \u0275\u0275element(64, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 47);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span", 48);
      \u0275\u0275text(68, "\u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 49)(70, "div", 50)(71, "div", 51);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 52);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 53);
      \u0275\u0275text(76);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(77, MainLayoutComponent_a_77_Template, 3, 0, "a", 54)(78, MainLayoutComponent_a_78_Template, 3, 0, "a", 55);
      \u0275\u0275element(79, "div", 56);
      \u0275\u0275elementStart(80, "a", 57);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_80_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(81, "i", 31);
      \u0275\u0275text(82, "\xA0\xA0\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(83, "main", 58);
      \u0275\u0275element(84, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed-sidebar", ctx.sidebarCollapsed);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.sidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen)("collapsed", ctx.sidebarCollapsed);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(33, _c0));
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.isClient() ? "\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644" : "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u0627\u0644\u0646\u0638\u0627\u0645");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isClient());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin() || ctx.isDepartmentManager());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin() || ctx.isDepartmentManager());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.isClient() ? "\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0648\u0627\u0644\u0645\u0647\u0627\u0645" : "\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin() || ctx.isDepartmentManager());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEmployee() && !ctx.isClient());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEmployee() && !ctx.isClient());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate(ctx.getArabicPathLabel(ctx.currentPath));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.isLightMode ? "fa-moon" : "fa-sun");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.isClient() ? "fa-building" : ctx.isEmployee() ? "fa-laptop-code" : "fa-user-shield");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.name) || "\u0645\u0633\u062A\u062E\u062F\u0645");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("show", ctx.activeDropdown === "user");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.name) || "\u0645\u0633\u062A\u062E\u062F\u0645");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getRoleBadgeLabel());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.email) || "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, NotificationCenterComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image:\n    radial-gradient(\n      ellipse 100% 60% at 100% 0%,\n      rgba(99, 102, 241, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 0% 100%,\n      rgba(6, 182, 212, 0.07) 0%,\n      transparent 50%);\n  background-attachment: fixed;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n  direction: rtl;\n}\n.sb[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: auto;\n  bottom: 0;\n  z-index: 300;\n  background: var(--bg-sidebar);\n  border-left: 1px solid var(--border);\n  border-right: none;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.35s var(--ease), transform 0.35s var(--ease);\n  will-change: transform, width;\n  box-shadow: none !important;\n  backdrop-filter: blur(25px);\n}\n.crm-shell.collapsed-sidebar[_ngcontent-%COMP%]   .sb[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%] {\n  width: 76px;\n}\n.crm-shell.collapsed-sidebar[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  margin-right: 76px;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-logo-details[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-badge[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .dropdown-menu-list[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-uinfo[_ngcontent-%COMP%], \n.sb.collapsed[_ngcontent-%COMP%]   .sb-ucaret[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-logo-wrapper[_ngcontent-%COMP%] {\n  padding: 16px 8px;\n  justify-content: center;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-logo[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-collapse-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-section[_ngcontent-%COMP%] {\n  padding: 12px 0 4px;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 11px 0;\n  gap: 0;\n  border-radius: 12px;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-user-card[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 10px 0;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) scale(0.92);\n  background: #111128;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 500;\n  font-family: "Cairo", sans-serif;\n}\n.sb.collapsed[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transform: translateY(-50%) scale(1);\n}\n.sb-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(8px);\n  z-index: 290;\n}\n.sb-overlay.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.sb-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sb-logo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  transition: all 0.25s var(--ease);\n}\n.sb-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.sb-logo-badge[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #fff;\n  box-shadow: 0 0 20px var(--violet-glow);\n  flex-shrink: 0;\n  transition: transform 0.3s var(--ease);\n}\n.sb-logo[_ngcontent-%COMP%]:hover   .sb-logo-badge[_ngcontent-%COMP%] {\n  transform: rotate(12deg) scale(1.05);\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -0.4px;\n  line-height: 1.1;\n}\n.sb-logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--teal-light);\n}\n.sb-logo-sub[_ngcontent-%COMP%] {\n  font-size: 0.64rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.sb-collapse-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: all 0.2s;\n}\n.sb-collapse-btn[_ngcontent-%COMP%]:hover {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border-color: var(--border-v);\n  transform: scale(1.06);\n}\n.sb-nav[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.sb-section[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--violet-light);\n  padding: 16px 12px 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  opacity: 0.85;\n}\n.sb-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 9px 12px;\n  border-radius: 12px;\n  color: var(--text-2);\n  font-size: 0.86rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.22s var(--ease);\n  position: relative;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n  transform: translateX(-2px);\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n.sb-item.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 18%;\n  bottom: 18%;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--violet),\n      var(--teal));\n  border-radius: 3px 0 0 3px;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.sb-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.92rem;\n  color: var(--text-2);\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  transition: all 0.22s var(--ease);\n  flex-shrink: 0;\n}\n.sb-item[_ngcontent-%COMP%]:hover   .sb-icon[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.25);\n  transform: scale(1.05);\n}\n.sb-item.active[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  color: var(--violet-light);\n  background: rgba(99, 102, 241, 0.12);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.sb-badge[_ngcontent-%COMP%] {\n  margin-right: auto;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      #4f46e5);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 100px;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.45);\n}\n.sb-item.danger[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(244, 63, 94, 0.2);\n}\n.sb-item.danger[_ngcontent-%COMP%]:hover   .sb-icon[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n  background: rgba(244, 63, 94, 0.15);\n}\n.dropdown-menu-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.35s ease-in-out;\n  padding-right: 12px;\n  border-right: 2px solid rgba(99, 102, 241, 0.22);\n  margin-right: 20px;\n  margin-top: 4px;\n  margin-bottom: 6px;\n  padding-left: 0;\n  border-left: none;\n  margin-left: 0;\n}\n.nav-dropdown.open[_ngcontent-%COMP%]   .dropdown-menu-list[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n.nav-sub-item[_ngcontent-%COMP%] {\n  padding: 7px 10px !important;\n  font-size: 0.82rem !important;\n  border-radius: 9px !important;\n  color: var(--text-2) !important;\n}\n.nav-sub-item[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.nav-sub-item.active[_ngcontent-%COMP%] {\n  color: var(--teal-light) !important;\n  background: transparent !important;\n  border-color: transparent !important;\n  font-weight: 600 !important;\n}\n.sb-foot[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  border-top: 1px solid var(--border);\n  background: rgba(0, 0, 0, 0.12);\n}\n.sb-user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: all 0.22s var(--ease);\n}\n.sb-user-card[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: var(--border-v);\n}\n.sb-av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.92rem;\n  color: #fff;\n  position: relative;\n  flex-shrink: 0;\n  box-shadow: 0 0 12px rgba(99, 102, 241, 0.3);\n}\n.user-status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  left: -2px;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--emerald-light);\n  border: 2px solid #111128;\n  box-shadow: 0 0 6px var(--emerald-light);\n}\n.sb-uinfo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sb-uname[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sb-urole[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--teal-light);\n  font-weight: 700;\n  margin-top: 2px;\n}\n.sb-ucaret[_ngcontent-%COMP%] {\n  color: var(--text-2);\n  font-size: 0.8rem;\n  transition: color 0.2s;\n}\n.sb-user-card[_ngcontent-%COMP%]:hover   .sb-ucaret[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: 0;\n  font-size: 0.72rem;\n  transition: transform 0.3s;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin-right: var(--sidebar-w);\n  margin-left: 0;\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n  color: var(--text);\n  min-height: 100vh;\n  transition: margin-right 0.35s var(--ease);\n}\n.tb[_ngcontent-%COMP%] {\n  height: var(--nav-h);\n  background: var(--bg-topbar);\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  gap: 20px;\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  flex-shrink: 0;\n}\n.tb-l[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.tb-menu[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.tb-menu[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-bc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n  color: var(--text-2);\n}\n.tb-bc[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n  font-size: 0.9rem;\n}\n.tb-bc[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tb-r[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.tb-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n}\n.tb-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-user-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tb-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 4px 14px 4px 4px;\n  border-radius: 100px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  transition: all 0.2s;\n}\n.tb-user[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  background: var(--violet-soft);\n}\n.tb-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.tb-uname[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text);\n  white-space: nowrap;\n}\n.tb-caret[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-2);\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  right: auto;\n  width: 260px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(9, 9, 24, 0.95) 0%,\n      rgba(9, 9, 24, 0.7) 60%,\n      rgba(9, 9, 24, 0.9) 100%);\n  border: 1px solid var(--border-v);\n  border-radius: var(--r-lg);\n  padding: 12px;\n  z-index: 1000;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  display: none;\n  animation: _ngcontent-%COMP%_fadeInDown 0.25s var(--ease);\n}\n.dropdown.show[_ngcontent-%COMP%] {\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ud-top[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 8px;\n}\n.ud-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #fff;\n}\n.ud-role[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--teal-light);\n  margin-top: 2px;\n}\n.ud-email[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.ud-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n  margin: 8px 0;\n}\n.ud-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  color: var(--text);\n  font-size: 0.84rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ud-row[_ngcontent-%COMP%]:hover {\n  background: var(--violet-soft);\n  color: #fff;\n}\n.ud-row.danger[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.ud-row.danger[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n}\n.pc[_ngcontent-%COMP%] {\n  padding: 32px;\n  flex: 1;\n}\n@media (max-width: 992px) {\n  .sb[_ngcontent-%COMP%] {\n    transform: translateX(100%);\n  }\n  .sb.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .main-container[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .pc[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media (max-width: 640px) {\n  .tb[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .tb-bc[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%) !important;\n  border-left: 1px solid rgba(99, 102, 241, 0.18) !important;\n  box-shadow: none !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-logo-wrapper[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(99, 102, 241, 0.12) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-logo-text[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0284c7 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-logo-sub[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-collapse-btn[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.06) !important;\n  border-color: rgba(99, 102, 241, 0.18) !important;\n  color: #475569 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-collapse-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12) !important;\n  color: #4f46e5 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-section[_ngcontent-%COMP%] {\n  color: #4f46e5 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .sb-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f46e5 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item[_ngcontent-%COMP%] {\n  color: #1e293b !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n  color: #1e293b !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:hover, \nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item[_ngcontent-%COMP%]:hover {\n  color: #4f46e5 !important;\n  background: rgba(99, 102, 241, 0.1) !important;\n  border-color: rgba(99, 102, 241, 0.22) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:hover   .sb-text[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item[_ngcontent-%COMP%]:hover   .sb-text[_ngcontent-%COMP%] {\n  color: #4f46e5 !important;\n  font-weight: 700 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-item.active[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item.active[_ngcontent-%COMP%] {\n  color: #4338ca !important;\n  background: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-item.active[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item.active[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n  color: #4338ca !important;\n  font-weight: 800 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  color: #4f46e5 !important;\n  background: rgba(99, 102, 241, 0.08) !important;\n  border-color: rgba(99, 102, 241, 0.15) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:hover   .sb-icon[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item[_ngcontent-%COMP%]:hover   .sb-icon[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  background: #6366f1 !important;\n  border-color: #4f46e5 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-item.active[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%], \nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item.active[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  color: #4f46e5 !important;\n  background: rgba(99, 102, 241, 0.12) !important;\n  border-color: rgba(99, 102, 241, 0.25) !important;\n  box-shadow: none !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .dropdown-menu-list[_ngcontent-%COMP%] {\n  border-right-color: rgba(99, 102, 241, 0.25) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item[_ngcontent-%COMP%]:hover   .sb-text[_ngcontent-%COMP%] {\n  color: #4f46e5 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item.active[_ngcontent-%COMP%] {\n  color: #0284c7 !important;\n  background: transparent !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .nav-sub-item.active[_ngcontent-%COMP%]   .sb-text[_ngcontent-%COMP%] {\n  color: #0284c7 !important;\n  font-weight: 800 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-foot[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-top-color: rgba(99, 102, 241, 0.12) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-user-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: rgba(99, 102, 241, 0.2) !important;\n  box-shadow: none !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-user-card[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.06) !important;\n  border-color: rgba(99, 102, 241, 0.3) !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-uname[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-urole[_ngcontent-%COMP%] {\n  color: #0284c7 !important;\n}\nbody.light-theme[_ngcontent-%COMP%]   .sb-ucaret[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n/*# sourceMappingURL=main-layout.component.css.map */'] });
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
      </div>

      <nav class="sb-nav">
        <!-- CRM Section -->
        <div class="sb-section">
          <i class="fa-solid fa-layer-group"></i>
          <span>{{ isClient() ? '\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644' : '\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u0627\u0644\u0646\u0638\u0627\u0645' }}</span>
        </div>

        <a class="sb-item" *ngIf="isClient()" routerLink="/client-portal" routerLinkActive="active" data-tooltip="\u0628\u0648\u0627\u0628\u0629 \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0634\u0631\u0648\u0639">
          <span class="sb-icon"><i class="fa-solid fa-gauge-high"></i></span>
          <span class="sb-text">\u0628\u0648\u0627\u0628\u0629 \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0634\u0631\u0648\u0639</span>
        </a>

        <a class="sb-item" *ngIf="isAdmin()" [class.active]="isDashboardTabActive('crm-overview') || isDashboardTabActive('overview')" (click)="navigateToTab('crm-overview')" data-tooltip="\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 CRM \u0627\u0644\u0648\u0643\u0627\u0644\u0629">
          <span class="sb-icon"><i class="fa-solid fa-chart-line"></i></span>
          <span class="sb-text">\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 CRM</span>
        </a>

        <a class="sb-item" *ngIf="isAdmin() || isDepartmentManager()" routerLink="/clients" routerLinkActive="active" data-tooltip="\u0627\u0644\u0639\u0645\u0644\u0627\u0621">
          <span class="sb-icon"><i class="fa-solid fa-users"></i></span>
          <span class="sb-text">\u0627\u0644\u0639\u0645\u0644\u0627\u0621</span>
        </a>

        <a class="sb-item" *ngIf="isAdmin() || isDepartmentManager()" routerLink="/deals" routerLinkActive="active" data-tooltip="\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F">
          <span class="sb-icon"><i class="fa-solid fa-handshake"></i></span>
          <span class="sb-text">\u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0648\u062F</span>
        </a>

        <a class="sb-item" routerLink="/tasks" routerLinkActive="active" data-tooltip="\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645">
          <span class="sb-icon"><i class="fa-solid fa-list-check"></i></span>
          <span class="sb-text">{{ isClient() ? '\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0648\u0627\u0644\u0645\u0647\u0627\u0645' : '\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0647\u0627\u0645' }}</span>
        </a>

        <a class="sb-item" *ngIf="isAdmin() || isDepartmentManager()" routerLink="/departments" routerLinkActive="active" data-tooltip="\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632">
          <span class="sb-icon"><i class="fa-solid fa-sitemap"></i></span>
          <span class="sb-text">\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632</span>
        </a>

        <a class="sb-item" *ngIf="isAdmin()" routerLink="/finance" routerLinkActive="active" data-tooltip="\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629">
          <span class="sb-icon"><i class="fa-solid fa-coins"></i></span>
          <span class="sb-text">\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0632\u064A\u0646\u0629</span>
        </a>

        <a class="sb-item" *ngIf="isAdmin()" routerLink="/roles" routerLinkActive="active" data-tooltip="\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A">
          <span class="sb-icon"><i class="fa-solid fa-shield-halved"></i></span>
          <span class="sb-text">\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A</span>
        </a>

        <!-- Console Section -->
        <div class="sb-section" *ngIf="!isEmployee() && !isClient()">
          <i class="fa-solid fa-sliders"></i>
          <span>\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0648\u0627\u0644\u0631\u0633\u0627\u0626\u0644</span>
        </div>

        <a class="sb-item" *ngIf="!isEmployee() && !isClient()" [class.active]="isDashboardTabActive('contact-hub')" (click)="navigateToTab('contact-hub')" data-tooltip="\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A">
          <span class="sb-icon"><i class="fa-solid fa-inbox"></i></span>
          <span class="sb-text">\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A</span>
          <span class="sb-badge" *ngIf="overviewStats.inquiries > 0">{{ overviewStats.inquiries }}</span>
        </a>

        <!-- Portfolio Management (Top-Level, Admins only) -->
        <a class="sb-item" *ngIf="isAdmin()" routerLink="/portfolio" routerLinkActive="active" [routerLinkActiveOptions]="{exact: false}" data-tooltip="\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639">
          <span class="sb-icon"><i class="fa-solid fa-briefcase"></i></span>
          <span class="sb-text">\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u0645\u0648\u0642\u0639</span>
        </a>

        <!-- Website Section Dropdown (Admins only) -->
        <div class="nav-dropdown" [class.open]="websiteMenuOpen" *ngIf="isAdmin()">
          <div class="sb-item" (click)="toggleWebsiteMenu()" style="cursor:pointer;" data-tooltip="\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A">
            <span class="sb-icon"><i class="fa-solid fa-globe"></i></span>
            <span class="sb-text">\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</span>
            <i class="fa-solid fa-chevron-down arrow-icon" [style.transform]="websiteMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'"></i>
          </div>
          <div class="dropdown-menu-list">
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('website-overview')" (click)="navigateToTab('website-overview')" data-tooltip="\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639">
              <span class="sb-icon"><i class="fa-solid fa-chart-pie"></i></span>
              <span class="sb-text">\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639</span>
            </a>

            <!-- Portfolio Management Links \u2192 dedicated /portfolio/* routes -->
            <a class="sb-item nav-sub-item" routerLink="/portfolio/projects" routerLinkActive="active" data-tooltip="\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644">
              <span class="sb-icon"><i class="fa-solid fa-diagram-project"></i></span>
              <span class="sb-text">\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644</span>
            </a>
            <a class="sb-item nav-sub-item" routerLink="/portfolio/categories" routerLinkActive="active" data-tooltip="\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A">
              <span class="sb-icon"><i class="fa-solid fa-tags"></i></span>
              <span class="sb-text">\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A</span>
            </a>
            <a class="sb-item nav-sub-item" routerLink="/portfolio/services" routerLinkActive="active" data-tooltip="\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A">
              <span class="sb-icon"><i class="fa-solid fa-toolbox"></i></span>
              <span class="sb-text">\u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A</span>
            </a>
            <a class="sb-item nav-sub-item" routerLink="/portfolio/blogs" routerLinkActive="active" data-tooltip="\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u062F\u0648\u0646\u0629">
              <span class="sb-icon"><i class="fa-solid fa-newspaper"></i></span>
              <span class="sb-text">\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u062F\u0648\u0646\u0629</span>
            </a>
            <a class="sb-item nav-sub-item" routerLink="/portfolio/testimonials" routerLinkActive="active" data-tooltip="\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621">
              <span class="sb-icon"><i class="fa-solid fa-quote-left"></i></span>
              <span class="sb-text">\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621</span>
            </a>
            <a class="sb-item nav-sub-item" routerLink="/portfolio/faqs" routerLinkActive="active" data-tooltip="\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629">
              <span class="sb-icon"><i class="fa-solid fa-circle-question"></i></span>
              <span class="sb-text">\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629</span>
            </a>

            <!-- Page Editors Header Divider -->
            <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 6px 12px;"></div>
            <div style="font-size: 0.7rem; font-weight: 800; color: var(--violet-light, #818cf8); padding: 4px 14px; text-transform: uppercase;">
              <i class="fa-solid fa-pen-to-square"></i> \u0645\u062D\u0631\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639
            </div>

            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('home-page')" (click)="navigateToTab('home-page')" data-tooltip="\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629">
              <span class="sb-icon"><i class="fa-solid fa-house"></i></span>
              <span class="sb-text">\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</span>
            </a>
            <a class="sb-item nav-sub-item" routerLink="/portfolio/about" routerLinkActive="active" data-tooltip="\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629">
              <span class="sb-icon"><i class="fa-solid fa-building-user"></i></span>
              <span class="sb-text">\u0635\u0641\u062D\u0629 \u0639\u0646 \u0627\u0644\u0648\u0643\u0627\u0644\u0629</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('services-page')" (click)="navigateToTab('services-page')" data-tooltip="\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A">
              <span class="sb-icon"><i class="fa-solid fa-briefcase"></i></span>
              <span class="sb-text">\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('portfolio-page')" (click)="navigateToTab('portfolio-page')" data-tooltip="\u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644">
              <span class="sb-icon"><i class="fa-solid fa-images"></i></span>
              <span class="sb-text">\u0635\u0641\u062D\u0629 \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('blogs-page')" (click)="navigateToTab('blogs-page')" data-tooltip="\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629">
              <span class="sb-icon"><i class="fa-solid fa-blog"></i></span>
              <span class="sb-text">\u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062F\u0648\u0646\u0629</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('footer-section')" (click)="navigateToTab('footer-section')" data-tooltip="\u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639">
              <span class="sb-icon"><i class="fa-solid fa-sliders"></i></span>
              <span class="sb-text">\u0645\u062D\u062A\u0648\u0649 \u062A\u0630\u064A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639</span>
            </a>

            <!-- Visit Main Site -->
            <ng-container *ngIf="isAdmin()">
              <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); margin: 6px 12px;"></div>
              <a class="sb-item nav-sub-item" routerLink="/" data-tooltip="\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A">
                <span class="sb-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                <span class="sb-text">\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</span>
              </a>
            </ng-container>
          </div>
        </div>

        <div class="sb-section">
          <i class="fa-solid fa-gear"></i>
          <span>\u0627\u0644\u0646\u0638\u0627\u0645</span>
        </div>
        <a class="sb-item danger" (click)="logout()" style="cursor:pointer;" data-tooltip="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C">
          <span class="sb-icon"><i class="fa-solid fa-right-from-bracket"></i></span>
          <span class="sb-text">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C</span>
        </a>
      </nav>
    </div>
  </aside>

  <!-- MAIN WRAPPER -->
  <div class="main-container">
    <!-- TOPBAR -->
    <header class="tb">
      <div class="tb-l">
        <button class="tb-menu" (click)="toggleSidebar()"><i class="fa-solid fa-bars"></i></button>
        <div class="tb-bc">
          <span style="color:var(--text-2); font-size:0.78rem;">\u0645\u0631\u0643\u0632 \u0627\u0644\u062A\u062D\u0643\u0645</span>
          <span class="sep" style="margin:0 6px;">\u203A</span>
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
            <div class="tb-av"><i class="fa-solid" [ngClass]="isClient() ? 'fa-building' : (isEmployee() ? 'fa-laptop-code' : 'fa-user-shield')"></i></div>
            <span class="tb-uname">{{ currentUser?.name || '\u0645\u0633\u062A\u062E\u062F\u0645' }}</span>
            <span class="tb-caret">\u25BE</span>
          </div>

          <!-- Dropdown menu -->
          <div class="dropdown dd-user" [class.show]="activeDropdown === 'user'">
            <div class="ud-top">
              <div class="ud-name">{{ currentUser?.name || '\u0645\u0633\u062A\u062E\u062F\u0645' }}</div>
              <div class="ud-role">{{ getRoleBadgeLabel() }}</div>
              <div class="ud-email">{{ currentUser?.email || '' }}</div>
            </div>
            <a class="ud-row" *ngIf="isAdmin()" (click)="navigateToTab('contact-hub')"><i class="fa-solid fa-inbox" style="color:var(--teal-2)"></i>&nbsp;&nbsp;\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062A</a>
            <a class="ud-row" *ngIf="isAdmin()" routerLink="/"><i class="fa-solid fa-globe" style="color:var(--teal-2)"></i>&nbsp;&nbsp;\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</a>
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
`, styles: ['/* src/app/components/layout/main-layout.component.css */\n:host {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-shell {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image:\n    radial-gradient(\n      ellipse 100% 60% at 100% 0%,\n      rgba(99, 102, 241, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 0% 100%,\n      rgba(6, 182, 212, 0.07) 0%,\n      transparent 50%);\n  background-attachment: fixed;\n  font-family:\n    "Cairo",\n    "Inter",\n    sans-serif;\n  color: var(--text);\n  direction: rtl;\n}\n.sb {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: auto;\n  bottom: 0;\n  z-index: 300;\n  background: var(--bg-sidebar);\n  border-left: 1px solid var(--border);\n  border-right: none;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.35s var(--ease), transform 0.35s var(--ease);\n  will-change: transform, width;\n  box-shadow: none !important;\n  backdrop-filter: blur(25px);\n}\n.crm-shell.collapsed-sidebar .sb,\n.sb.collapsed {\n  width: 76px;\n}\n.crm-shell.collapsed-sidebar .main-container {\n  margin-right: 76px;\n}\n.sb.collapsed .sb-logo-details,\n.sb.collapsed .sb-section span,\n.sb.collapsed .sb-section i,\n.sb.collapsed .sb-text,\n.sb.collapsed .sb-badge,\n.sb.collapsed .arrow-icon,\n.sb.collapsed .dropdown-menu-list,\n.sb.collapsed .sb-uinfo,\n.sb.collapsed .sb-ucaret {\n  display: none !important;\n}\n.sb.collapsed .sb-logo-wrapper {\n  padding: 16px 8px;\n  justify-content: center;\n}\n.sb.collapsed .sb-logo {\n  justify-content: center;\n}\n.sb.collapsed .sb-collapse-btn {\n  display: none;\n}\n.sb.collapsed .sb-section {\n  padding: 12px 0 4px;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n}\n.sb.collapsed .sb-item {\n  justify-content: center;\n  padding: 11px 0;\n  gap: 0;\n  border-radius: 12px;\n}\n.sb.collapsed .sb-icon {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.sb.collapsed .sb-user-card {\n  justify-content: center;\n  padding: 10px 0;\n}\n.sb.collapsed .sb-item {\n  position: relative;\n}\n.sb.collapsed .sb-item::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) scale(0.92);\n  background: #111128;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 500;\n  font-family: "Cairo", sans-serif;\n}\n.sb.collapsed .sb-item:hover::after {\n  opacity: 1;\n  transform: translateY(-50%) scale(1);\n}\n.sb-overlay {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(8px);\n  z-index: 290;\n}\n.sb-overlay.active {\n  display: block;\n}\n.sb-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sb-logo-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  transition: all 0.25s var(--ease);\n}\n.sb-logo:hover {\n  opacity: 0.9;\n}\n.sb-logo-badge {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #fff;\n  box-shadow: 0 0 20px var(--violet-glow);\n  flex-shrink: 0;\n  transition: transform 0.3s var(--ease);\n}\n.sb-logo:hover .sb-logo-badge {\n  transform: rotate(12deg) scale(1.05);\n}\n.sb-logo-text {\n  font-size: 1.15rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -0.4px;\n  line-height: 1.1;\n}\n.sb-logo-text span {\n  color: var(--teal-light);\n}\n.sb-logo-sub {\n  font-size: 0.64rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.sb-collapse-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: all 0.2s;\n}\n.sb-collapse-btn:hover {\n  background: var(--violet-soft);\n  color: var(--violet-light);\n  border-color: var(--border-v);\n  transform: scale(1.06);\n}\n.sb-nav {\n  padding: 16px 12px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.sb-section {\n  font-size: 0.66rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--violet-light);\n  padding: 16px 12px 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  opacity: 0.85;\n}\n.sb-section i {\n  font-size: 0.72rem;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 9px 12px;\n  border-radius: 12px;\n  color: var(--text-2);\n  font-size: 0.86rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.22s var(--ease);\n  position: relative;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.sb-item:hover {\n  color: #fff;\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n  transform: translateX(-2px);\n}\n.sb-item.active {\n  color: #fff;\n  background: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n.sb-item.active::before {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 18%;\n  bottom: 18%;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--violet),\n      var(--teal));\n  border-radius: 3px 0 0 3px;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.sb-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.92rem;\n  color: var(--text-2);\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  transition: all 0.22s var(--ease);\n  flex-shrink: 0;\n}\n.sb-item:hover .sb-icon {\n  color: var(--violet-light);\n  background: rgba(99, 102, 241, 0.15);\n  border-color: rgba(99, 102, 241, 0.25);\n  transform: scale(1.05);\n}\n.sb-item.active .sb-icon {\n  color: var(--violet-light);\n  background: rgba(99, 102, 241, 0.12);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.sb-badge {\n  margin-right: auto;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      #4f46e5);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 100px;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.45);\n}\n.sb-item.danger:hover {\n  background: var(--rose-soft);\n  color: var(--rose-light);\n  border-color: rgba(244, 63, 94, 0.2);\n}\n.sb-item.danger:hover .sb-icon {\n  color: var(--rose-light);\n  background: rgba(244, 63, 94, 0.15);\n}\n.dropdown-menu-list {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.35s ease-in-out;\n  padding-right: 12px;\n  border-right: 2px solid rgba(99, 102, 241, 0.22);\n  margin-right: 20px;\n  margin-top: 4px;\n  margin-bottom: 6px;\n  padding-left: 0;\n  border-left: none;\n  margin-left: 0;\n}\n.nav-dropdown.open .dropdown-menu-list {\n  max-height: 600px;\n}\n.nav-sub-item {\n  padding: 7px 10px !important;\n  font-size: 0.82rem !important;\n  border-radius: 9px !important;\n  color: var(--text-2) !important;\n}\n.nav-sub-item:hover {\n  color: #fff !important;\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.nav-sub-item.active {\n  color: var(--teal-light) !important;\n  background: transparent !important;\n  border-color: transparent !important;\n  font-weight: 600 !important;\n}\n.sb-foot {\n  padding: 14px 12px;\n  border-top: 1px solid var(--border);\n  background: rgba(0, 0, 0, 0.12);\n}\n.sb-user-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: all 0.22s var(--ease);\n}\n.sb-user-card:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: var(--border-v);\n}\n.sb-av {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.92rem;\n  color: #fff;\n  position: relative;\n  flex-shrink: 0;\n  box-shadow: 0 0 12px rgba(99, 102, 241, 0.3);\n}\n.user-status-dot {\n  position: absolute;\n  bottom: -2px;\n  left: -2px;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--emerald-light);\n  border: 2px solid #111128;\n  box-shadow: 0 0 6px var(--emerald-light);\n}\n.sb-uinfo {\n  flex: 1;\n  min-width: 0;\n}\n.sb-uname {\n  font-size: 0.84rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sb-urole {\n  font-size: 0.68rem;\n  color: var(--teal-light);\n  font-weight: 700;\n  margin-top: 2px;\n}\n.sb-ucaret {\n  color: var(--text-2);\n  font-size: 0.8rem;\n  transition: color 0.2s;\n}\n.sb-user-card:hover .sb-ucaret {\n  color: #fff;\n}\n.arrow-icon {\n  margin-right: auto;\n  margin-left: 0;\n  font-size: 0.72rem;\n  transition: transform 0.3s;\n}\n.main-container {\n  margin-right: var(--sidebar-w);\n  margin-left: 0;\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n  color: var(--text);\n  min-height: 100vh;\n  transition: margin-right 0.35s var(--ease);\n}\n.tb {\n  height: var(--nav-h);\n  background: var(--bg-topbar);\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  gap: 20px;\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  flex-shrink: 0;\n}\n.tb-l {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.tb-menu {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.tb-menu:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-bc {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n  color: var(--text-2);\n}\n.tb-bc .sep {\n  color: rgba(255, 255, 255, 0.18);\n  font-size: 0.9rem;\n}\n.tb-bc .cur {\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tb-r {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.tb-btn {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n}\n.tb-btn:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-user-wrap {\n  position: relative;\n}\n.tb-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 4px 14px 4px 4px;\n  border-radius: 100px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  transition: all 0.2s;\n}\n.tb-user:hover {\n  border-color: var(--border-v);\n  background: var(--violet-soft);\n}\n.tb-av {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.tb-uname {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text);\n  white-space: nowrap;\n}\n.tb-caret {\n  font-size: 0.7rem;\n  color: var(--text-2);\n}\n.dropdown {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  right: auto;\n  width: 260px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(9, 9, 24, 0.95) 0%,\n      rgba(9, 9, 24, 0.7) 60%,\n      rgba(9, 9, 24, 0.9) 100%);\n  border: 1px solid var(--border-v);\n  border-radius: var(--r-lg);\n  padding: 12px;\n  z-index: 1000;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  display: none;\n  animation: fadeInDown 0.25s var(--ease);\n}\n.dropdown.show {\n  display: block;\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ud-top {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 8px;\n}\n.ud-name {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #fff;\n}\n.ud-role {\n  font-size: 0.72rem;\n  color: var(--teal-light);\n  margin-top: 2px;\n}\n.ud-email {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.ud-divider {\n  height: 1px;\n  background: var(--border);\n  margin: 8px 0;\n}\n.ud-row {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  color: var(--text);\n  font-size: 0.84rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ud-row:hover {\n  background: var(--violet-soft);\n  color: #fff;\n}\n.ud-row.danger {\n  color: var(--rose-light);\n}\n.ud-row.danger:hover {\n  background: var(--rose-soft);\n}\n.pc {\n  padding: 32px;\n  flex: 1;\n}\n@media (max-width: 992px) {\n  .sb {\n    transform: translateX(100%);\n  }\n  .sb.open {\n    transform: translateX(0);\n  }\n  .main-container {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .pc {\n    padding: 20px;\n  }\n}\n@media (max-width: 640px) {\n  .tb {\n    padding: 0 16px;\n  }\n  .tb-bc {\n    display: none;\n  }\n}\nbody.light-theme .sb {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 100%) !important;\n  border-left: 1px solid rgba(99, 102, 241, 0.18) !important;\n  box-shadow: none !important;\n}\nbody.light-theme .sb-logo-wrapper {\n  border-bottom-color: rgba(99, 102, 241, 0.12) !important;\n}\nbody.light-theme .sb-logo-text {\n  color: #0f172a !important;\n}\nbody.light-theme .sb-logo-text span {\n  color: #0284c7 !important;\n}\nbody.light-theme .sb-logo-sub {\n  color: #64748b !important;\n}\nbody.light-theme .sb-collapse-btn {\n  background: rgba(99, 102, 241, 0.06) !important;\n  border-color: rgba(99, 102, 241, 0.18) !important;\n  color: #475569 !important;\n}\nbody.light-theme .sb-collapse-btn:hover {\n  background: rgba(99, 102, 241, 0.12) !important;\n  color: #4f46e5 !important;\n}\nbody.light-theme .sb-section {\n  color: #4f46e5 !important;\n}\nbody.light-theme .sb-section span,\nbody.light-theme .sb-section i {\n  color: #4f46e5 !important;\n}\nbody.light-theme .sb-item,\nbody.light-theme .nav-sub-item {\n  color: #1e293b !important;\n}\nbody.light-theme .sb-item .sb-text,\nbody.light-theme .nav-sub-item .sb-text {\n  color: #1e293b !important;\n}\nbody.light-theme .sb-item:hover,\nbody.light-theme .nav-sub-item:hover {\n  color: #4f46e5 !important;\n  background: rgba(99, 102, 241, 0.1) !important;\n  border-color: rgba(99, 102, 241, 0.22) !important;\n}\nbody.light-theme .sb-item:hover .sb-text,\nbody.light-theme .nav-sub-item:hover .sb-text {\n  color: #4f46e5 !important;\n  font-weight: 700 !important;\n}\nbody.light-theme .sb-item.active,\nbody.light-theme .nav-sub-item.active {\n  color: #4338ca !important;\n  background: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\nbody.light-theme .sb-item.active .sb-text,\nbody.light-theme .nav-sub-item.active .sb-text {\n  color: #4338ca !important;\n  font-weight: 800 !important;\n}\nbody.light-theme .sb-icon {\n  color: #4f46e5 !important;\n  background: rgba(99, 102, 241, 0.08) !important;\n  border-color: rgba(99, 102, 241, 0.15) !important;\n}\nbody.light-theme .sb-item:hover .sb-icon,\nbody.light-theme .nav-sub-item:hover .sb-icon {\n  color: #ffffff !important;\n  background: #6366f1 !important;\n  border-color: #4f46e5 !important;\n}\nbody.light-theme .sb-item.active .sb-icon,\nbody.light-theme .nav-sub-item.active .sb-icon {\n  color: #4f46e5 !important;\n  background: rgba(99, 102, 241, 0.12) !important;\n  border-color: rgba(99, 102, 241, 0.25) !important;\n  box-shadow: none !important;\n}\nbody.light-theme .dropdown-menu-list {\n  border-right-color: rgba(99, 102, 241, 0.25) !important;\n}\nbody.light-theme .nav-sub-item:hover .sb-text {\n  color: #4f46e5 !important;\n}\nbody.light-theme .nav-sub-item.active {\n  color: #0284c7 !important;\n  background: transparent !important;\n}\nbody.light-theme .nav-sub-item.active .sb-text {\n  color: #0284c7 !important;\n  font-weight: 800 !important;\n}\nbody.light-theme .sb-foot {\n  background: #f8fafc !important;\n  border-top-color: rgba(99, 102, 241, 0.12) !important;\n}\nbody.light-theme .sb-user-card {\n  background: #ffffff !important;\n  border-color: rgba(99, 102, 241, 0.2) !important;\n  box-shadow: none !important;\n}\nbody.light-theme .sb-user-card:hover {\n  background: rgba(99, 102, 241, 0.06) !important;\n  border-color: rgba(99, 102, 241, 0.3) !important;\n}\nbody.light-theme .sb-uname {\n  color: #0f172a !important;\n}\nbody.light-theme .sb-urole {\n  color: #0284c7 !important;\n}\nbody.light-theme .sb-ucaret {\n  color: #64748b !important;\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/components/layout/main-layout.component.ts", lineNumber: 15 });
})();
export {
  MainLayoutComponent
};
//# sourceMappingURL=chunk-447Y56KZ.js.map
