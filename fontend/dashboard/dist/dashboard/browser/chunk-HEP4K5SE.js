import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-TRCV7UC3.js";
import {
  ApiService
} from "./chunk-VFRQX7SG.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  TitleCasePipe,
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
  ɵɵpipeBind1,
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
} from "./chunk-CK3LQYPJ.js";

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
    \u0275\u0275text(4, "\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A");
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
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ["\n\n.notification-bell-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.bell-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border-light, rgba(255, 255, 255, 0.1));\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s;\n}\n.bell-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(232, 98, 10, 0.2);\n  border-color: var(--orange, #e8620a);\n  transform: scale(1.05);\n}\n.bell-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  background: var(--status-danger, #ef4444);\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: bold;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);\n}\n.notification-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 12px);\n  left: 0;\n  width: 360px;\n  background: #12121e;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.7);\n  z-index: 1100;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.notification-header[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.count-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  background: rgba(232, 98, 10, 0.2);\n  color: var(--orange-light, #ff7a1f);\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.btn-mark-all[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--orange, #e8620a);\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.notification-body[_ngcontent-%COMP%] {\n  max-height: 380px;\n  overflow-y: auto;\n}\n.notification-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  transition: background 0.2s;\n  position: relative;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(232, 98, 10, 0.08);\n}\n.notif-icon-col[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.notif-icon-col.assignment[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.2);\n  color: #3b82f6;\n}\n.notif-icon-col.mention[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.2);\n  color: #a855f7;\n}\n.notif-icon-col.status_change[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #10b981;\n}\n.notif-icon-col.client_note[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n}\n.notif-content-col[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  font-weight: 700;\n  color: #fff;\n}\n.notif-message[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary, #a0a0ab);\n  margin-top: 2px;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted, #6b6b78);\n  margin-top: 4px;\n  display: block;\n}\n.btn-del-notif[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-muted, #6b6b78);\n  cursor: pointer;\n  padding: 4px;\n  opacity: 0.6;\n}\n.btn-del-notif[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  opacity: 1;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 30px 16px;\n  text-align: center;\n  color: var(--text-muted, #6b6b78);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=notification-center.component.css.map */"] });
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
            <span>\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A</span>
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
  `, styles: ["/* angular:styles/component:css;3e53ee10bfacdde66cccf0812f3c99c2f12e62fbfd3da995aa102c4a59fd904a;/run/media/devoryx/Storage/Media Glow CRM/fontend/dashboard/src/app/components/shared/notification-center/notification-center.component.ts */\n.notification-bell-wrapper {\n  position: relative;\n}\n.bell-btn {\n  position: relative;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--border-light, rgba(255, 255, 255, 0.1));\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s;\n}\n.bell-btn:hover {\n  background: rgba(232, 98, 10, 0.2);\n  border-color: var(--orange, #e8620a);\n  transform: scale(1.05);\n}\n.bell-icon {\n  font-size: 1.1rem;\n}\n.unread-badge {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  background: var(--status-danger, #ef4444);\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: bold;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);\n}\n.notification-dropdown {\n  position: absolute;\n  top: calc(100% + 12px);\n  left: 0;\n  width: 360px;\n  background: #12121e;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.7);\n  z-index: 1100;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.notification-header {\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-title {\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.count-pill {\n  font-size: 0.72rem;\n  background: rgba(232, 98, 10, 0.2);\n  color: var(--orange-light, #ff7a1f);\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.btn-mark-all {\n  background: transparent;\n  border: none;\n  color: var(--orange, #e8620a);\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.notification-body {\n  max-height: 380px;\n  overflow-y: auto;\n}\n.notification-item {\n  padding: 12px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  transition: background 0.2s;\n  position: relative;\n}\n.notification-item:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.notification-item.unread {\n  background: rgba(232, 98, 10, 0.08);\n}\n.notif-icon-col {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.notif-icon-col.assignment {\n  background: rgba(59, 130, 246, 0.2);\n  color: #3b82f6;\n}\n.notif-icon-col.mention {\n  background: rgba(168, 85, 247, 0.2);\n  color: #a855f7;\n}\n.notif-icon-col.status_change {\n  background: rgba(16, 185, 129, 0.2);\n  color: #10b981;\n}\n.notif-icon-col.client_note {\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n}\n.notif-content-col {\n  flex: 1;\n}\n.notif-title {\n  font-size: 0.86rem;\n  font-weight: 700;\n  color: #fff;\n}\n.notif-message {\n  font-size: 0.8rem;\n  color: var(--text-secondary, #a0a0ab);\n  margin-top: 2px;\n}\n.notif-time {\n  font-size: 0.7rem;\n  color: var(--text-muted, #6b6b78);\n  margin-top: 4px;\n  display: block;\n}\n.btn-del-notif {\n  background: transparent;\n  border: none;\n  color: var(--text-muted, #6b6b78);\n  cursor: pointer;\n  padding: 4px;\n  opacity: 0.6;\n}\n.btn-del-notif:hover {\n  color: #ef4444;\n  opacity: 1;\n}\n.empty-state {\n  padding: 30px 16px;\n  text-align: center;\n  color: var(--text-muted, #6b6b78);\n}\n.empty-state i {\n  font-size: 1.8rem;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=notification-center.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationCenterComponent, { className: "NotificationCenterComponent", filePath: "src/app/components/shared/notification-center/notification-center.component.ts", lineNumber: 219 });
})();

// src/app/components/layout/main-layout.component.ts
var _c0 = () => ["/dashboard"];
function MainLayoutComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
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
  websiteMenuOpen = true;
  activeDropdown = null;
  isLightMode = false;
  currentTab = "overview";
  currentPath = "";
  overviewStats = {
    inquiries: 0
  };
  ngOnInit() {
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
    this.sidebarOpen = !this.sidebarOpen;
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
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 202, vars: 45, consts: [[1, "crm-shell"], [1, "sb-overlay", 3, "click"], [1, "sb"], [1, "sb-content"], [1, "sb-logo", 3, "routerLink"], [1, "sb-logo-badge"], [1, "fa-solid", "fa-bolt"], [1, "sb-logo-text"], [1, "sb-logo-sub"], [1, "sb-nav"], [1, "sb-section"], ["routerLink", "/clients", "routerLinkActive", "active", 1, "sb-item"], [1, "sb-icon"], [1, "fa-solid", "fa-users"], ["routerLink", "/deals", "routerLinkActive", "active", 1, "sb-item"], [1, "fa-solid", "fa-handshake"], ["routerLink", "/tasks", "routerLinkActive", "active", 1, "sb-item"], [1, "fa-solid", "fa-list-check"], ["routerLink", "/departments", "routerLinkActive", "active", 1, "sb-item"], [1, "fa-solid", "fa-sitemap"], ["routerLink", "/finance", "routerLinkActive", "active", 1, "sb-item"], [1, "fa-solid", "fa-chart-line"], ["routerLink", "/client-portal", "routerLinkActive", "active", 1, "sb-item"], [1, "fa-solid", "fa-id-card"], ["routerLink", "/roles", "routerLinkActive", "active", 1, "sb-item"], [1, "fa-solid", "fa-shield-halved"], [1, "sb-item", 3, "click"], [1, "fa-solid", "fa-gauge-high"], [1, "fa-solid", "fa-inbox"], ["class", "sb-badge", 4, "ngIf"], [1, "nav-dropdown"], [1, "sb-item", 2, "cursor", "pointer", 3, "click"], [1, "fa-solid", "fa-globe"], [1, "fa-solid", "fa-chevron-down", "arrow-icon"], [1, "dropdown-menu-list"], [1, "sb-item", "nav-sub-item", 3, "click"], [1, "fa-solid", "fa-folder-open"], [1, "fa-solid", "fa-tags"], [1, "fa-solid", "fa-gears"], [1, "fa-solid", "fa-newspaper"], [1, "fa-solid", "fa-comments"], [1, "fa-solid", "fa-circle-question"], [1, "fa-solid", "fa-house"], [1, "fa-solid", "fa-circle-info"], [1, "fa-solid", "fa-briefcase"], [1, "fa-solid", "fa-images"], [1, "fa-solid", "fa-blog"], [1, "fa-solid", "fa-sliders"], ["routerLink", "/", 1, "sb-item"], [1, "fa-solid", "fa-arrow-up-right-from-square"], [1, "sb-item", "danger", 2, "cursor", "pointer", 3, "click"], [1, "fa-solid", "fa-right-from-bracket"], [1, "sb-foot"], [1, "sb-user", 3, "click"], [1, "sb-av"], [1, "fa-solid", "fa-user-shield"], [1, "sb-uinfo"], [1, "sb-uname"], [1, "sb-urole"], [1, "sb-ucaret"], [1, "main-container"], [1, "tb"], [1, "tb-l"], [1, "tb-menu", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "tb-bc"], [2, "color", "rgba(255,255,255,0.3)", "font-size", "0.78rem"], [1, "sep", 2, "color", "rgba(255,255,255,0.12)", "margin", "0 5px"], [1, "cur"], [1, "tb-r"], ["title", "Toggle Theme", 1, "tb-btn", 3, "click"], [1, "fa-solid", 3, "ngClass"], [1, "tb-user", 3, "click"], [1, "tb-av"], [1, "tb-uname"], [1, "tb-caret"], [1, "dropdown", "dd-user"], [1, "ud-top"], [1, "ud-name"], [1, "ud-role"], [1, "ud-email"], [1, "ud-row", 3, "click"], [1, "fa-solid", "fa-inbox", 2, "color", "var(--teal-2)"], ["routerLink", "/", 1, "ud-row"], [1, "fa-solid", "fa-globe", 2, "color", "var(--teal-2)"], [1, "ud-divider"], [1, "ud-row", "danger", 3, "click"], [1, "pc"], [1, "sb-badge"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_1_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "div", 7);
      \u0275\u0275text(9, "Media");
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "Glow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275text(13, "Agency Control Hub");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "nav", 9)(15, "div", 10);
      \u0275\u0275text(16, "Agency CRM & ERP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 11)(18, "span", 12);
      \u0275\u0275element(19, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Clients");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "a", 14)(23, "span", 12);
      \u0275\u0275element(24, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Deals & Sales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "a", 16)(28, "span", 12);
      \u0275\u0275element(29, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Task Board");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "a", 18)(33, "span", 12);
      \u0275\u0275element(34, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Departments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "a", 20)(38, "span", 12);
      \u0275\u0275element(39, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span");
      \u0275\u0275text(41, "Finance & Ledger");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "a", 22)(43, "span", 12);
      \u0275\u0275element(44, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46, "Client Portal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "a", 24)(48, "span", 12);
      \u0275\u0275element(49, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "Roles & Permissions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 10);
      \u0275\u0275text(53, "Main Console");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "a", 26);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_54_listener() {
        return ctx.navigateToTab("overview");
      });
      \u0275\u0275elementStart(55, "span", 12);
      \u0275\u0275element(56, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Dashboard Overview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "a", 26);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_59_listener() {
        return ctx.navigateToTab("contact-hub");
      });
      \u0275\u0275elementStart(60, "span", 12);
      \u0275\u0275element(61, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "Contact Hub & Leads");
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, MainLayoutComponent_span_64_Template, 2, 1, "span", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 30)(66, "div", 31);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_66_listener() {
        return ctx.toggleWebsiteMenu();
      });
      \u0275\u0275elementStart(67, "span", 12);
      \u0275\u0275element(68, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Website Content");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 34)(73, "a", 35);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_73_listener() {
        return ctx.navigateToTab("projects");
      });
      \u0275\u0275elementStart(74, "span", 12);
      \u0275\u0275element(75, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span");
      \u0275\u0275text(77, "Projects / Portfolio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "a", 35);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_78_listener() {
        return ctx.navigateToTab("categories");
      });
      \u0275\u0275elementStart(79, "span", 12);
      \u0275\u0275element(80, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "a", 35);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_83_listener() {
        return ctx.navigateToTab("services");
      });
      \u0275\u0275elementStart(84, "span", 12);
      \u0275\u0275element(85, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, "Services Catalog");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "a", 35);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_88_listener() {
        return ctx.navigateToTab("blogs");
      });
      \u0275\u0275elementStart(89, "span", 12);
      \u0275\u0275element(90, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "Blog Articles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "a", 35);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_93_listener() {
        return ctx.navigateToTab("testimonials");
      });
      \u0275\u0275elementStart(94, "span", 12);
      \u0275\u0275element(95, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97, "Testimonials");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "a", 35);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_98_listener() {
        return ctx.navigateToTab("faqs");
      });
      \u0275\u0275elementStart(99, "span", 12);
      \u0275\u0275element(100, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "span");
      \u0275\u0275text(102, "FAQs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 10);
      \u0275\u0275text(104, "Page Editors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "a", 26);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_105_listener() {
        return ctx.navigateToTab("home-page");
      });
      \u0275\u0275elementStart(106, "span", 12);
      \u0275\u0275element(107, "i", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span");
      \u0275\u0275text(109, "Home Page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "a", 26);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_110_listener() {
        return ctx.navigateToTab("about-page");
      });
      \u0275\u0275elementStart(111, "span", 12);
      \u0275\u0275element(112, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "span");
      \u0275\u0275text(114, "About Page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "a", 26);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_115_listener() {
        return ctx.navigateToTab("services-page");
      });
      \u0275\u0275elementStart(116, "span", 12);
      \u0275\u0275element(117, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "span");
      \u0275\u0275text(119, "Services Page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "a", 26);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_120_listener() {
        return ctx.navigateToTab("portfolio-page");
      });
      \u0275\u0275elementStart(121, "span", 12);
      \u0275\u0275element(122, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Portfolio Page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "a", 26);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_125_listener() {
        return ctx.navigateToTab("blogs-page");
      });
      \u0275\u0275elementStart(126, "span", 12);
      \u0275\u0275element(127, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "span");
      \u0275\u0275text(129, "Blogs Page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "a", 26);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_130_listener() {
        return ctx.navigateToTab("footer-section");
      });
      \u0275\u0275elementStart(131, "span", 12);
      \u0275\u0275element(132, "i", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "Footer Content");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 10);
      \u0275\u0275text(136, "System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "a", 48)(138, "span", 12);
      \u0275\u0275element(139, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "Visit Website");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "a", 50);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_142_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(143, "span", 12);
      \u0275\u0275element(144, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "span");
      \u0275\u0275text(146, "Sign Out");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 52)(148, "div", 53);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_148_listener() {
        return ctx.toggleDropdown("user");
      });
      \u0275\u0275elementStart(149, "div", 54);
      \u0275\u0275element(150, "i", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div", 56)(152, "div", 57);
      \u0275\u0275text(153, "Media Glow Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 58);
      \u0275\u0275text(155, "Super Administrator");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "span", 59);
      \u0275\u0275text(157, "\u25BE");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(158, "div", 60)(159, "header", 61)(160, "div", 62)(161, "button", 63);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_161_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(162, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 65)(164, "span", 66);
      \u0275\u0275text(165, "Control Hub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "span", 67);
      \u0275\u0275text(167, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "span", 68);
      \u0275\u0275text(169);
      \u0275\u0275pipe(170, "titlecase");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 69);
      \u0275\u0275element(172, "app-notification-center");
      \u0275\u0275elementStart(173, "button", 70);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_173_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275element(174, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 72);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_175_listener() {
        return ctx.toggleDropdown("user");
      });
      \u0275\u0275elementStart(176, "div", 73);
      \u0275\u0275element(177, "i", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "span", 74);
      \u0275\u0275text(179, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "span", 75);
      \u0275\u0275text(181, "\u25BE");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(182, "div", 76)(183, "div", 77)(184, "div", 78);
      \u0275\u0275text(185, "Media Glow Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 79);
      \u0275\u0275text(187, "Super Administrator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 80);
      \u0275\u0275text(189, "admin@mediaglow.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "a", 81);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_190_listener() {
        return ctx.navigateToTab("contact-hub");
      });
      \u0275\u0275element(191, "i", 82);
      \u0275\u0275text(192, "\xA0\xA0Manage Leads");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "a", 83);
      \u0275\u0275element(194, "i", 84);
      \u0275\u0275text(195, "\xA0\xA0Visit Website");
      \u0275\u0275elementEnd();
      \u0275\u0275element(196, "div", 85);
      \u0275\u0275elementStart(197, "a", 86);
      \u0275\u0275listener("click", function MainLayoutComponent_Template_a_click_197_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(198, "i", 51);
      \u0275\u0275text(199, "\xA0\xA0Sign Out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "main", 87);
      \u0275\u0275element(201, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.sidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(44, _c0));
      \u0275\u0275advance(50);
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
      \u0275\u0275advance(7);
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
      \u0275\u0275advance(39);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(170, 42, ctx.currentPath || "dashboard"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", ctx.isLightMode ? "fa-moon" : "fa-sun");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("show", ctx.activeDropdown === "user");
    }
  }, dependencies: [CommonModule, NgClass, NgIf, TitleCasePipe, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, NotificationCenterComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image:\n    radial-gradient(\n      ellipse 100% 60% at 0% 0%,\n      rgba(99, 102, 241, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 100% 100%,\n      rgba(6, 182, 212, 0.07) 0%,\n      transparent 50%);\n  background-attachment: fixed;\n  font-family: "Inter", sans-serif;\n  color: var(--text);\n  direction: ltr;\n}\n.sb[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 300;\n  background: var(--bg-sidebar);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.35s var(--ease);\n  will-change: transform;\n  box-shadow: 6px 0 45px rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(25px);\n}\n.sb-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(8px);\n  z-index: 290;\n}\n.sb-overlay.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.sb-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 20px;\n  border-bottom: 1px solid var(--border);\n  text-decoration: none;\n  flex-shrink: 0;\n  position: relative;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.06) 0%,\n      transparent 100%);\n}\n.sb-logo-badge[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #fff;\n  box-shadow: 0 0 25px var(--violet-glow);\n  flex-shrink: 0;\n  transition: transform 0.3s var(--ease);\n}\n.sb-logo[_ngcontent-%COMP%]:hover   .sb-logo-badge[_ngcontent-%COMP%] {\n  transform: rotate(10deg) scale(1.05);\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.4px;\n  white-space: nowrap;\n}\n.sb-logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--teal-light);\n}\n.sb-logo-sub[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: var(--text-2);\n  font-weight: 600;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  display: block;\n  margin-top: 2px;\n}\n.sb-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 12px;\n}\n.sb-section[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.25);\n  padding: 18px 10px 8px;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  cursor: pointer;\n  text-decoration: none;\n  border: 1px solid transparent;\n  width: 100%;\n  color: var(--text-2);\n  font-size: 0.86rem;\n  font-weight: 500;\n  white-space: nowrap;\n  transition: all 0.25s var(--ease);\n  margin-bottom: 3px;\n  position: relative;\n  text-align: left;\n  background: transparent;\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: var(--border);\n  color: var(--text);\n  transform: translateX(3px);\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet-soft) 0%,\n      rgba(99, 102, 241, 0.03) 100%);\n  border-color: var(--border-v);\n  color: #fff;\n  font-weight: 600;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.sb-item.active[_ngcontent-%COMP%]   .sb-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--violet-2));\n  box-shadow: 0 4px 15px var(--violet-glow);\n}\n.sb-item.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: -12px;\n  top: 15%;\n  bottom: 15%;\n  width: 4px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--violet),\n      var(--teal));\n  border-radius: 0 4px 4px 0;\n  box-shadow: 0 0 12px var(--violet);\n}\n.sb-item.danger[_ngcontent-%COMP%] {\n  color: rgba(244, 63, 94, 0.8);\n}\n.sb-item.danger[_ngcontent-%COMP%]:hover {\n  color: var(--rose-light);\n  background: var(--rose-soft);\n  border-color: rgba(244, 63, 94, 0.3);\n}\n.sb-icon[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.25s var(--ease);\n  color: var(--text-2);\n}\n.sb-item[_ngcontent-%COMP%]:hover   .sb-icon[_ngcontent-%COMP%] {\n  color: var(--teal-light);\n  background: rgba(6, 182, 212, 0.1);\n}\n.sb-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background:\n    linear-gradient(\n      135deg,\n      var(--rose),\n      #e11d48);\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 800;\n  padding: 3px 8px;\n  border-radius: 100px;\n  flex-shrink: 0;\n  box-shadow: 0 2px 10px rgba(244, 63, 94, 0.4);\n}\n.sb-foot[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  padding: 14px 12px;\n  flex-shrink: 0;\n  background: rgba(0, 0, 0, 0.2);\n}\n.sb-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.02);\n  transition: all 0.25s var(--ease);\n  text-decoration: none;\n}\n.sb-user[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: var(--border-v);\n}\n.sb-av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  color: #fff;\n  box-shadow: 0 0 15px var(--violet-glow);\n}\n.sb-uinfo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sb-uname[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sb-urole[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-2);\n  margin-top: 1px;\n}\n.sb-ucaret[_ngcontent-%COMP%] {\n  color: var(--text-3);\n  font-size: 0.7rem;\n}\n.nav-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dropdown-menu-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.35s ease-in-out;\n  padding-left: 14px;\n  border-left: 1px solid rgba(99, 102, 241, 0.2);\n  margin-left: 24px;\n  margin-top: 4px;\n  margin-bottom: 6px;\n}\n.nav-dropdown.open[_ngcontent-%COMP%]   .dropdown-menu-list[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n.nav-sub-item[_ngcontent-%COMP%] {\n  padding: 8px 12px !important;\n  font-size: 0.8rem !important;\n  border-radius: 10px !important;\n  color: var(--text-2) !important;\n}\n.nav-sub-item[_ngcontent-%COMP%]:hover {\n  color: var(--text) !important;\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.nav-sub-item.active[_ngcontent-%COMP%] {\n  color: var(--teal-light) !important;\n  background: var(--teal-soft) !important;\n  border-color: var(--border-t) !important;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.72rem;\n  transition: transform 0.3s;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w);\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n  color: var(--text);\n  min-height: 100vh;\n  transition: margin-left 0.35s var(--ease);\n}\n.tb[_ngcontent-%COMP%] {\n  height: var(--nav-h);\n  background: var(--bg-topbar);\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  gap: 20px;\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  flex-shrink: 0;\n}\n.tb-l[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.tb-menu[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.tb-menu[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-bc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n  color: var(--text-2);\n}\n.tb-bc[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n  font-size: 0.9rem;\n}\n.tb-bc[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tb-r[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.tb-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n}\n.tb-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 4px 14px 4px 4px;\n  border-radius: 100px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  transition: all 0.2s;\n}\n.tb-user[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-v);\n  background: var(--violet-soft);\n}\n.tb-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.tb-uname[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text);\n  white-space: nowrap;\n}\n.tb-caret[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-2);\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 70px;\n  right: 32px;\n  width: 260px;\n  background: #0c0c1e;\n  border: 1px solid var(--border-v);\n  border-radius: var(--r-lg);\n  padding: 12px;\n  z-index: 250;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  display: none;\n  animation: _ngcontent-%COMP%_fadeInDown 0.25s var(--ease);\n}\n.dropdown.show[_ngcontent-%COMP%] {\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ud-top[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 8px;\n}\n.ud-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #fff;\n}\n.ud-role[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--teal-light);\n  margin-top: 2px;\n}\n.ud-email[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.ud-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n  margin: 8px 0;\n}\n.ud-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  color: var(--text);\n  font-size: 0.84rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ud-row[_ngcontent-%COMP%]:hover {\n  background: var(--violet-soft);\n  color: #fff;\n}\n.ud-row.danger[_ngcontent-%COMP%] {\n  color: var(--rose-light);\n}\n.ud-row.danger[_ngcontent-%COMP%]:hover {\n  background: var(--rose-soft);\n}\n.pc[_ngcontent-%COMP%] {\n  padding: 32px;\n  flex: 1;\n}\n@media (max-width: 992px) {\n  .sb[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .sb.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .main-container[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .pc[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media (max-width: 640px) {\n  .tb[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .tb-bc[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [CommonModule, RouterModule, NotificationCenterComponent], template: `<div class="crm-shell">
  <!-- Mobile sidebar overlay -->
  <div class="sb-overlay" [class.active]="sidebarOpen" (click)="toggleSidebar()"></div>

  <!-- SIDEBAR -->
  <aside class="sb" [class.open]="sidebarOpen">
    <div class="sb-content">
      <!-- Logo -->
      <a [routerLink]="['/dashboard']" class="sb-logo">
        <div class="sb-logo-badge"><i class="fa-solid fa-bolt"></i></div>
        <div>
          <div class="sb-logo-text">Media<span>Glow</span></div>
          <div class="sb-logo-sub">Agency Control Hub</div>
        </div>
      </a>

      <nav class="sb-nav">
        <!-- CRM Section -->
        <div class="sb-section">Agency CRM &amp; ERP</div>
        <a class="sb-item" routerLink="/clients" routerLinkActive="active">
          <span class="sb-icon"><i class="fa-solid fa-users"></i></span><span>Clients</span>
        </a>
        <a class="sb-item" routerLink="/deals" routerLinkActive="active">
          <span class="sb-icon"><i class="fa-solid fa-handshake"></i></span><span>Deals &amp; Sales</span>
        </a>
        <a class="sb-item" routerLink="/tasks" routerLinkActive="active">
          <span class="sb-icon"><i class="fa-solid fa-list-check"></i></span><span>Task Board</span>
        </a>
        <a class="sb-item" routerLink="/departments" routerLinkActive="active">
          <span class="sb-icon"><i class="fa-solid fa-sitemap"></i></span><span>Departments</span>
        </a>
        <a class="sb-item" routerLink="/finance" routerLinkActive="active">
          <span class="sb-icon"><i class="fa-solid fa-chart-line"></i></span><span>Finance &amp; Ledger</span>
        </a>
        <a class="sb-item" routerLink="/client-portal" routerLinkActive="active">
          <span class="sb-icon"><i class="fa-solid fa-id-card"></i></span><span>Client Portal</span>
        </a>
        <a class="sb-item" routerLink="/roles" routerLinkActive="active">
          <span class="sb-icon"><i class="fa-solid fa-shield-halved"></i></span><span>Roles &amp; Permissions</span>
        </a>

        <!-- Console Section -->
        <div class="sb-section">Main Console</div>
        <a class="sb-item" [class.active]="isDashboardTabActive('overview')" (click)="navigateToTab('overview')">
          <span class="sb-icon"><i class="fa-solid fa-gauge-high"></i></span><span>Dashboard Overview</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('contact-hub')" (click)="navigateToTab('contact-hub')">
          <span class="sb-icon"><i class="fa-solid fa-inbox"></i></span><span>Contact Hub &amp; Leads</span>
          <span class="sb-badge" *ngIf="overviewStats.inquiries > 0">{{ overviewStats.inquiries }}</span>
        </a>

        <!-- Website Content Dropdown -->
        <div class="nav-dropdown" [class.open]="websiteMenuOpen">
          <div class="sb-item" (click)="toggleWebsiteMenu()" style="cursor:pointer;">
            <span class="sb-icon"><i class="fa-solid fa-globe"></i></span>
            <span>Website Content</span>
            <i class="fa-solid fa-chevron-down arrow-icon" [style.transform]="websiteMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'"></i>
          </div>
          <div class="dropdown-menu-list">
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('projects')" (click)="navigateToTab('projects')">
              <span class="sb-icon"><i class="fa-solid fa-folder-open"></i></span><span>Projects / Portfolio</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('categories')" (click)="navigateToTab('categories')">
              <span class="sb-icon"><i class="fa-solid fa-tags"></i></span><span>Categories</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('services')" (click)="navigateToTab('services')">
              <span class="sb-icon"><i class="fa-solid fa-gears"></i></span><span>Services Catalog</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('blogs')" (click)="navigateToTab('blogs')">
              <span class="sb-icon"><i class="fa-solid fa-newspaper"></i></span><span>Blog Articles</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('testimonials')" (click)="navigateToTab('testimonials')">
              <span class="sb-icon"><i class="fa-solid fa-comments"></i></span><span>Testimonials</span>
            </a>
            <a class="sb-item nav-sub-item" [class.active]="isDashboardTabActive('faqs')" (click)="navigateToTab('faqs')">
              <span class="sb-icon"><i class="fa-solid fa-circle-question"></i></span><span>FAQs</span>
            </a>
          </div>
        </div>

        <!-- Page Editors -->
        <div class="sb-section">Page Editors</div>
        <a class="sb-item" [class.active]="isDashboardTabActive('home-page')" (click)="navigateToTab('home-page')">
          <span class="sb-icon"><i class="fa-solid fa-house"></i></span><span>Home Page</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('about-page')" (click)="navigateToTab('about-page')">
          <span class="sb-icon"><i class="fa-solid fa-circle-info"></i></span><span>About Page</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('services-page')" (click)="navigateToTab('services-page')">
          <span class="sb-icon"><i class="fa-solid fa-briefcase"></i></span><span>Services Page</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('portfolio-page')" (click)="navigateToTab('portfolio-page')">
          <span class="sb-icon"><i class="fa-solid fa-images"></i></span><span>Portfolio Page</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('blogs-page')" (click)="navigateToTab('blogs-page')">
          <span class="sb-icon"><i class="fa-solid fa-blog"></i></span><span>Blogs Page</span>
        </a>
        <a class="sb-item" [class.active]="isDashboardTabActive('footer-section')" (click)="navigateToTab('footer-section')">
          <span class="sb-icon"><i class="fa-solid fa-sliders"></i></span><span>Footer Content</span>
        </a>

        <div class="sb-section">System</div>
        <a class="sb-item" routerLink="/">
          <span class="sb-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><span>Visit Website</span>
        </a>
        <a class="sb-item danger" (click)="logout()" style="cursor:pointer;">
          <span class="sb-icon"><i class="fa-solid fa-right-from-bracket"></i></span><span>Sign Out</span>
        </a>
      </nav>

      <div class="sb-foot">
        <div class="sb-user" (click)="toggleDropdown('user')">
          <div class="sb-av"><i class="fa-solid fa-user-shield"></i></div>
          <div class="sb-uinfo">
            <div class="sb-uname">Media Glow Admin</div>
            <div class="sb-urole">Super Administrator</div>
          </div>
          <span class="sb-ucaret">\u25BE</span>
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
          <span style="color:rgba(255,255,255,0.3); font-size:0.78rem;">Control Hub</span>
          <span class="sep" style="color:rgba(255,255,255,0.12); margin:0 5px;">\u203A</span>
          <span class="cur">{{ (currentPath || 'dashboard') | titlecase }}</span>
        </div>
      </div>
      <div class="tb-r">
        <app-notification-center></app-notification-center>
        <button class="tb-btn" (click)="toggleTheme()" title="Toggle Theme">
          <i class="fa-solid" [ngClass]="isLightMode ? 'fa-moon' : 'fa-sun'"></i>
        </button>
        <div class="tb-user" (click)="toggleDropdown('user')">
          <div class="tb-av"><i class="fa-solid fa-user-shield"></i></div>
          <span class="tb-uname">Admin</span>
          <span class="tb-caret">\u25BE</span>
        </div>
      </div>
    </header>

    <!-- Dropdown menu -->
    <div class="dropdown dd-user" [class.show]="activeDropdown === 'user'">
      <div class="ud-top">
        <div class="ud-name">Media Glow Admin</div>
        <div class="ud-role">Super Administrator</div>
        <div class="ud-email">admin&#64;mediaglow.com</div>
      </div>
      <a class="ud-row" (click)="navigateToTab('contact-hub')"><i class="fa-solid fa-inbox" style="color:var(--teal-2)"></i>&nbsp;&nbsp;Manage Leads</a>
      <a class="ud-row" routerLink="/"><i class="fa-solid fa-globe" style="color:var(--teal-2)"></i>&nbsp;&nbsp;Visit Website</a>
      <div class="ud-divider"></div>
      <a class="ud-row danger" (click)="logout()"><i class="fa-solid fa-right-from-bracket"></i>&nbsp;&nbsp;Sign Out</a>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 CONTENT PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <main class="pc">
      <router-outlet></router-outlet>
    </main>
  </div>
</div>
`, styles: ['/* src/app/components/layout/main-layout.component.css */\n:host {\n  display: block;\n  width: 100%;\n  font-family:\n    "Inter",\n    "Cairo",\n    sans-serif;\n}\n.crm-shell {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg);\n  background-image:\n    radial-gradient(\n      ellipse 100% 60% at 0% 0%,\n      rgba(99, 102, 241, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse 70% 50% at 100% 100%,\n      rgba(6, 182, 212, 0.07) 0%,\n      transparent 50%);\n  background-attachment: fixed;\n  font-family: "Inter", sans-serif;\n  color: var(--text);\n  direction: ltr;\n}\n.sb {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 300;\n  background: var(--bg-sidebar);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.35s var(--ease);\n  will-change: transform;\n  box-shadow: 6px 0 45px rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(25px);\n}\n.sb-overlay {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(8px);\n  z-index: 290;\n}\n.sb-overlay.active {\n  display: block;\n}\n.sb-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 20px;\n  border-bottom: 1px solid var(--border);\n  text-decoration: none;\n  flex-shrink: 0;\n  position: relative;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(99, 102, 241, 0.06) 0%,\n      transparent 100%);\n}\n.sb-logo-badge {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #fff;\n  box-shadow: 0 0 25px var(--violet-glow);\n  flex-shrink: 0;\n  transition: transform 0.3s var(--ease);\n}\n.sb-logo:hover .sb-logo-badge {\n  transform: rotate(10deg) scale(1.05);\n}\n.sb-logo-text {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.4px;\n  white-space: nowrap;\n}\n.sb-logo-text span {\n  color: var(--teal-light);\n}\n.sb-logo-sub {\n  font-size: 0.62rem;\n  color: var(--text-2);\n  font-weight: 600;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  display: block;\n  margin-top: 2px;\n}\n.sb-nav {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 12px;\n}\n.sb-section {\n  font-size: 0.6rem;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.25);\n  padding: 18px 10px 8px;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  cursor: pointer;\n  text-decoration: none;\n  border: 1px solid transparent;\n  width: 100%;\n  color: var(--text-2);\n  font-size: 0.86rem;\n  font-weight: 500;\n  white-space: nowrap;\n  transition: all 0.25s var(--ease);\n  margin-bottom: 3px;\n  position: relative;\n  text-align: left;\n  background: transparent;\n}\n.sb-item:hover {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: var(--border);\n  color: var(--text);\n  transform: translateX(3px);\n}\n.sb-item.active {\n  background:\n    linear-gradient(\n      90deg,\n      var(--violet-soft) 0%,\n      rgba(99, 102, 241, 0.03) 100%);\n  border-color: var(--border-v);\n  color: #fff;\n  font-weight: 600;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.sb-item.active .sb-icon {\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--violet-2));\n  box-shadow: 0 4px 15px var(--violet-glow);\n}\n.sb-item.active::after {\n  content: "";\n  position: absolute;\n  left: -12px;\n  top: 15%;\n  bottom: 15%;\n  width: 4px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--violet),\n      var(--teal));\n  border-radius: 0 4px 4px 0;\n  box-shadow: 0 0 12px var(--violet);\n}\n.sb-item.danger {\n  color: rgba(244, 63, 94, 0.8);\n}\n.sb-item.danger:hover {\n  color: var(--rose-light);\n  background: var(--rose-soft);\n  border-color: rgba(244, 63, 94, 0.3);\n}\n.sb-icon {\n  font-size: 0.88rem;\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.25s var(--ease);\n  color: var(--text-2);\n}\n.sb-item:hover .sb-icon {\n  color: var(--teal-light);\n  background: rgba(6, 182, 212, 0.1);\n}\n.sb-badge {\n  margin-left: auto;\n  background:\n    linear-gradient(\n      135deg,\n      var(--rose),\n      #e11d48);\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 800;\n  padding: 3px 8px;\n  border-radius: 100px;\n  flex-shrink: 0;\n  box-shadow: 0 2px 10px rgba(244, 63, 94, 0.4);\n}\n.sb-foot {\n  border-top: 1px solid var(--border);\n  padding: 14px 12px;\n  flex-shrink: 0;\n  background: rgba(0, 0, 0, 0.2);\n}\n.sb-user {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.02);\n  transition: all 0.25s var(--ease);\n  text-decoration: none;\n}\n.sb-user:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: var(--border-v);\n}\n.sb-av {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  color: #fff;\n  box-shadow: 0 0 15px var(--violet-glow);\n}\n.sb-uinfo {\n  flex: 1;\n  min-width: 0;\n}\n.sb-uname {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sb-urole {\n  font-size: 0.65rem;\n  color: var(--text-2);\n  margin-top: 1px;\n}\n.sb-ucaret {\n  color: var(--text-3);\n  font-size: 0.7rem;\n}\n.nav-dropdown {\n  width: 100%;\n}\n.dropdown-menu-list {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.35s ease-in-out;\n  padding-left: 14px;\n  border-left: 1px solid rgba(99, 102, 241, 0.2);\n  margin-left: 24px;\n  margin-top: 4px;\n  margin-bottom: 6px;\n}\n.nav-dropdown.open .dropdown-menu-list {\n  max-height: 600px;\n}\n.nav-sub-item {\n  padding: 8px 12px !important;\n  font-size: 0.8rem !important;\n  border-radius: 10px !important;\n  color: var(--text-2) !important;\n}\n.nav-sub-item:hover {\n  color: var(--text) !important;\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.nav-sub-item.active {\n  color: var(--teal-light) !important;\n  background: var(--teal-soft) !important;\n  border-color: var(--border-t) !important;\n}\n.arrow-icon {\n  margin-left: auto;\n  font-size: 0.72rem;\n  transition: transform 0.3s;\n}\n.main-container {\n  margin-left: var(--sidebar-w);\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n  color: var(--text);\n  min-height: 100vh;\n  transition: margin-left 0.35s var(--ease);\n}\n.tb {\n  height: var(--nav-h);\n  background: var(--bg-topbar);\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  gap: 20px;\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  flex-shrink: 0;\n}\n.tb-l {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.tb-menu {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.tb-menu:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-bc {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n  color: var(--text-2);\n}\n.tb-bc .sep {\n  color: rgba(255, 255, 255, 0.18);\n  font-size: 0.9rem;\n}\n.tb-bc .cur {\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tb-r {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.tb-btn {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  color: var(--text-2);\n  transition: all 0.2s;\n}\n.tb-btn:hover {\n  border-color: var(--border-v);\n  color: var(--violet-light);\n  background: var(--violet-soft);\n}\n.tb-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 4px 14px 4px 4px;\n  border-radius: 100px;\n  border: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.03);\n  transition: all 0.2s;\n}\n.tb-user:hover {\n  border-color: var(--border-v);\n  background: var(--violet-soft);\n}\n.tb-av {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--violet),\n      var(--teal));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  box-shadow: 0 0 10px var(--violet-glow);\n}\n.tb-uname {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text);\n  white-space: nowrap;\n}\n.tb-caret {\n  font-size: 0.7rem;\n  color: var(--text-2);\n}\n.dropdown {\n  position: absolute;\n  top: 70px;\n  right: 32px;\n  width: 260px;\n  background: #0c0c1e;\n  border: 1px solid var(--border-v);\n  border-radius: var(--r-lg);\n  padding: 12px;\n  z-index: 250;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  display: none;\n  animation: fadeInDown 0.25s var(--ease);\n}\n.dropdown.show {\n  display: block;\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ud-top {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 8px;\n}\n.ud-name {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #fff;\n}\n.ud-role {\n  font-size: 0.72rem;\n  color: var(--teal-light);\n  margin-top: 2px;\n}\n.ud-email {\n  font-size: 0.72rem;\n  color: var(--text-2);\n  margin-top: 2px;\n}\n.ud-divider {\n  height: 1px;\n  background: var(--border);\n  margin: 8px 0;\n}\n.ud-row {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  color: var(--text);\n  font-size: 0.84rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ud-row:hover {\n  background: var(--violet-soft);\n  color: #fff;\n}\n.ud-row.danger {\n  color: var(--rose-light);\n}\n.ud-row.danger:hover {\n  background: var(--rose-soft);\n}\n.pc {\n  padding: 32px;\n  flex: 1;\n}\n@media (max-width: 992px) {\n  .sb {\n    transform: translateX(-100%);\n  }\n  .sb.open {\n    transform: translateX(0);\n  }\n  .main-container {\n    margin-left: 0;\n  }\n  .pc {\n    padding: 20px;\n  }\n}\n@media (max-width: 640px) {\n  .tb {\n    padding: 0 16px;\n  }\n  .tb-bc {\n    display: none;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/components/layout/main-layout.component.ts", lineNumber: 15 });
})();
export {
  MainLayoutComponent
};
//# sourceMappingURL=chunk-HEP4K5SE.js.map
