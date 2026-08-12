import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-notification-center',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notification-bell-wrapper">
      <button class="bell-btn" (click)="toggleDropdown()">
        <i class="fa-solid fa-bell bell-icon"></i>
        <span class="unread-badge" *ngIf="unreadCount > 0">{{ unreadCount }}</span>
      </button>

      <div class="notification-dropdown" *ngIf="isOpen">
        <div class="notification-header">
          <div class="header-title">
            <span>الإشعارات والتنبيهات</span>
            <span class="count-pill" *ngIf="unreadCount > 0">{{ unreadCount }} غير مقروء</span>
          </div>
          <button class="btn-mark-all" (click)="markAllRead()" *ngIf="unreadCount > 0">
            تحديد الكل كـ مقروء
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
            <p>لا توجد تنبيهات حالياً</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      position: relative;
    }

    /* ─── Bell Button ─────────────────────────────────────────── */
    .bell-btn {
      position: relative;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      border: 1px solid var(--border);
      background: rgba(255, 255, 255, 0.04);
      color: var(--text-2);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.25s;
      font-size: 0.95rem;
    }
    .bell-btn:hover {
      border-color: var(--border-v, rgba(99,102,241,0.4));
      color: var(--violet-light, #a5b4fc);
      background: var(--violet-soft, rgba(99,102,241,0.12));
      transform: scale(1.05);
    }

    /* light mode bell */
    :host-context(body.light-theme) .bell-btn {
      background: rgba(99, 102, 241, 0.06);
      border-color: rgba(99, 102, 241, 0.15);
      color: #4a4a6a;
    }
    :host-context(body.light-theme) .bell-btn:hover {
      background: rgba(99, 102, 241, 0.12);
      border-color: rgba(99, 102, 241, 0.35);
      color: var(--violet-2, #4f46e5);
    }

    /* ─── Unread Badge ─────────────────────────────────────────── */
    .unread-badge {
      position: absolute;
      top: -4px; right: -4px;
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: #fff;
      font-size: 0.62rem;
      font-weight: 800;
      min-width: 18px; height: 18px;
      padding: 0 4px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(239,68,68,0.55);
      border: 2px solid var(--bg, #07070f);
    }
    :host-context(body.light-theme) .unread-badge {
      border-color: #f0f0f8;
    }

    /* ─── Dropdown Panel ───────────────────────────────────────── */
    .notification-dropdown {
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      right: auto;
      width: 360px;
      direction: rtl;
      text-align: right;
      background: #111128;
      border: 1px solid rgba(99, 102, 241, 0.25);
      border-radius: 18px;
      box-shadow:
        0 24px 60px rgba(0, 0, 0, 0.75),
        0 0 0 1px rgba(99,102,241,0.08),
        inset 0 1px 0 rgba(255,255,255,0.06);
      z-index: 1100;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      animation: notifSlideIn 0.22s cubic-bezier(0.16,1,0.3,1);
    }

    @keyframes notifSlideIn {
      from { opacity: 0; transform: translateY(-8px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0)    scale(1); }
    }

    /* light mode dropdown */
    :host-context(body.light-theme) .notification-dropdown {
      background: #ffffff;
      border-color: rgba(99, 102, 241, 0.2);
      box-shadow:
        0 20px 50px rgba(99, 102, 241, 0.14),
        0 4px 16px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(99, 102, 241, 0.06);
    }

    /* ─── Header ───────────────────────────────────────────────── */
    .notification-header {
      padding: 16px 18px;
      background: rgba(99, 102, 241, 0.06);
      border-bottom: 1px solid rgba(255,255,255,0.07);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    :host-context(body.light-theme) .notification-header {
      background: rgba(99, 102, 241, 0.05);
      border-bottom-color: rgba(99, 102, 241, 0.1);
    }

    .header-title {
      font-weight: 700;
      font-size: 0.9rem;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    :host-context(body.light-theme) .header-title {
      color: #1a1a3a;
    }

    .count-pill {
      font-size: 0.68rem;
      font-weight: 700;
      background: rgba(99,102,241,0.18);
      color: #a5b4fc;
      padding: 2px 9px;
      border-radius: 100px;
      border: 1px solid rgba(99,102,241,0.3);
    }
    :host-context(body.light-theme) .count-pill {
      background: rgba(99,102,241,0.1);
      color: #4f46e5;
      border-color: rgba(99,102,241,0.2);
    }

    .btn-mark-all {
      background: transparent;
      border: none;
      color: #a5b4fc;
      font-size: 0.76rem;
      font-weight: 600;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 6px;
      transition: background 0.2s;
      white-space: nowrap;
    }
    .btn-mark-all:hover { background: rgba(99,102,241,0.12); }
    :host-context(body.light-theme) .btn-mark-all { color: #4f46e5; }

    /* ─── Body / Items ─────────────────────────────────────────── */
    .notification-body {
      max-height: 380px;
      overflow-y: auto;
    }
    .notification-body::-webkit-scrollbar { width: 3px; }
    .notification-body::-webkit-scrollbar-track { background: transparent; }
    .notification-body::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 4px; }

    .notification-item {
      padding: 13px 16px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      border-bottom: 1px solid rgba(255,255,255,0.045);
      cursor: pointer;
      transition: background 0.2s;
      position: relative;
    }
    .notification-item:last-child { border-bottom: none; }
    .notification-item:hover { background: rgba(99,102,241,0.08); }
    .notification-item.unread { background: rgba(99,102,241,0.07); }
    .notification-item.unread::before {
      content: '';
      position: absolute;
      left: 0; top: 20%; bottom: 20%;
      width: 3px;
      background: linear-gradient(to bottom, #6366f1, #06b6d4);
      border-radius: 0 4px 4px 0;
    }

    :host-context(body.light-theme) .notification-item {
      border-bottom-color: rgba(99,102,241,0.08);
    }
    :host-context(body.light-theme) .notification-item:hover {
      background: rgba(99,102,241,0.06);
    }
    :host-context(body.light-theme) .notification-item.unread {
      background: rgba(99,102,241,0.05);
    }

    /* ─── Notification Icon ────────────────────────────────────── */
    .notif-icon-col {
      width: 36px; height: 36px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
      flex-shrink: 0;
      background: rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.6);
    }
    .notif-icon-col.assignment { background: rgba(59,130,246,0.18); color: #60a5fa; }
    .notif-icon-col.mention    { background: rgba(168,85,247,0.18); color: #c084fc; }
    .notif-icon-col.status_change { background: rgba(16,185,129,0.18); color: #34d399; }
    .notif-icon-col.client_note  { background: rgba(245,158,11,0.18); color: #fbbf24; }

    :host-context(body.light-theme) .notif-icon-col {
      background: rgba(99,102,241,0.08);
      color: #4a4a6a;
    }
    :host-context(body.light-theme) .notif-icon-col.assignment { background: rgba(59,130,246,0.1); color: #2563eb; }
    :host-context(body.light-theme) .notif-icon-col.mention    { background: rgba(168,85,247,0.1); color: #7c3aed; }
    :host-context(body.light-theme) .notif-icon-col.status_change { background: rgba(16,185,129,0.1); color: #059669; }
    :host-context(body.light-theme) .notif-icon-col.client_note  { background: rgba(245,158,11,0.1); color: #d97706; }

    /* ─── Notification Text ────────────────────────────────────── */
    .notif-content-col { flex: 1; min-width: 0; }

    .notif-title {
      font-size: 0.84rem;
      font-weight: 700;
      color: #e8e8f8;
      line-height: 1.3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    :host-context(body.light-theme) .notif-title { color: #1a1a3a; }

    .notif-message {
      font-size: 0.78rem;
      color: rgba(180,180,210,0.8);
      margin-top: 2px;
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    :host-context(body.light-theme) .notif-message { color: #4a4a6a; }

    .notif-time {
      font-size: 0.68rem;
      color: rgba(140,140,180,0.7);
      margin-top: 4px;
      display: block;
    }
    :host-context(body.light-theme) .notif-time { color: #7a7a9a; }

    /* ─── Delete Button ────────────────────────────────────────── */
    .btn-del-notif {
      background: transparent;
      border: none;
      color: rgba(150,150,190,0.5);
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 6px;
      font-size: 0.78rem;
      transition: all 0.2s;
      flex-shrink: 0;
    }
    .btn-del-notif:hover {
      color: #f87171;
      background: rgba(239,68,68,0.12);
    }
    :host-context(body.light-theme) .btn-del-notif { color: #9a9ab0; }
    :host-context(body.light-theme) .btn-del-notif:hover {
      color: #dc2626;
      background: rgba(239,68,68,0.08);
    }

    /* ─── Empty State ──────────────────────────────────────────── */
    .empty-state {
      padding: 36px 16px;
      text-align: center;
      color: rgba(140,140,180,0.7);
    }
    .empty-state i {
      font-size: 2rem;
      margin-bottom: 10px;
      display: block;
      opacity: 0.35;
    }
    .empty-state p {
      font-size: 0.82rem;
      margin: 0;
    }
    :host-context(body.light-theme) .empty-state { color: #7a7a9a; }
  `]
})
export class NotificationCenterComponent implements OnInit {
  private apiService = inject(ApiService);

  notifications: any[] = [];
  unreadCount = 0;
  isOpen = false;

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.apiService.getNotifications().subscribe(res => {
      if (res) {
        this.unreadCount = res.unread_count || 0;
        this.notifications = res.data?.data || res.data || [];
      } else {
        this.unreadCount = 0;
        this.notifications = [];
      }
    });
  }


  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.loadNotifications();
    }
  }

  markAsRead(notif: any): void {
    if (!notif.is_read) {
      notif.is_read = true;
      if (this.unreadCount > 0) this.unreadCount--;
      this.apiService.markNotificationAsRead(notif.id).subscribe();
    }
  }

  markAllRead(): void {
    this.notifications.forEach(n => n.is_read = true);
    this.unreadCount = 0;
    this.apiService.markAllNotificationsAsRead().subscribe();
  }

  deleteNotif(notif: any, event: Event): void {
    event.stopPropagation();
    this.notifications = this.notifications.filter(n => n.id !== notif.id);
    if (!notif.is_read && this.unreadCount > 0) this.unreadCount--;
    this.apiService.deleteNotification(notif.id).subscribe();
  }

  getNotifIcon(type: string): string {
    switch (type) {
      case 'assignment': return 'fa-solid fa-user-plus';
      case 'mention': return 'fa-solid fa-at';
      case 'status_change': return 'fa-solid fa-rotate';
      case 'client_note': return 'fa-solid fa-comment-dots';
      default: return 'fa-solid fa-bell';
    }
  }
}
