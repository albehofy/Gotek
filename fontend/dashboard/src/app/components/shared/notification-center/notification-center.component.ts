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
            <span>التنبيهات الإشعارات</span>
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
    .notification-bell-wrapper {
      position: relative;
    }
    .bell-btn {
      position: relative;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-light, rgba(255, 255, 255, 0.1));
      width: 42px;
      height: 42px;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.25s;
    }
    .bell-btn:hover {
      background: rgba(232, 98, 10, 0.2);
      border-color: var(--orange, #e8620a);
      transform: scale(1.05);
    }
    .bell-icon {
      font-size: 1.1rem;
    }
    .unread-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      background: var(--status-danger, #ef4444);
      color: #fff;
      font-size: 0.7rem;
      font-weight: bold;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);
    }
    .notification-dropdown {
      position: absolute;
      top: calc(100% + 12px);
      left: 0;
      width: 360px;
      background: #12121e;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      box-shadow: 0 20px 48px rgba(0,0,0,0.7);
      z-index: 1100;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .notification-header {
      padding: 14px 16px;
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-title {
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .count-pill {
      font-size: 0.72rem;
      background: rgba(232, 98, 10, 0.2);
      color: var(--orange-light, #ff7a1f);
      padding: 2px 8px;
      border-radius: 12px;
    }
    .btn-mark-all {
      background: transparent;
      border: none;
      color: var(--orange, #e8620a);
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
    }
    .notification-body {
      max-height: 380px;
      overflow-y: auto;
    }
    .notification-item {
      padding: 12px 16px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      cursor: pointer;
      transition: background 0.2s;
      position: relative;
    }
    .notification-item:hover {
      background: rgba(255, 255, 255, 0.04);
    }
    .notification-item.unread {
      background: rgba(232, 98, 10, 0.08);
    }
    .notif-icon-col {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      flex-shrink: 0;
      background: rgba(255,255,255,0.1);
      color: #fff;
    }
    .notif-icon-col.assignment { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
    .notif-icon-col.mention { background: rgba(168, 85, 247, 0.2); color: #a855f7; }
    .notif-icon-col.status_change { background: rgba(16, 185, 129, 0.2); color: #10b981; }
    .notif-icon-col.client_note { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
    .notif-content-col {
      flex: 1;
    }
    .notif-title {
      font-size: 0.86rem;
      font-weight: 700;
      color: #fff;

    }
    .notif-message {
      font-size: 0.8rem;
      color: var(--text-secondary, #a0a0ab);
      margin-top: 2px;
    }
    .notif-time {
      font-size: 0.7rem;
      color: var(--text-muted, #6b6b78);
      margin-top: 4px;
      display: block;
    }
    .btn-del-notif {
      background: transparent;
      border: none;
      color: var(--text-muted, #6b6b78);
      cursor: pointer;
      padding: 4px;
      opacity: 0.6;
    }
    .btn-del-notif:hover {
      color: #ef4444;
      opacity: 1;
    }
    .empty-state {
      padding: 30px 16px;
      text-align: center;
      color: var(--text-muted, #6b6b78);
    }
    .empty-state i {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }
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
      this.unreadCount = res.unread_count || 0;
      this.notifications = res.data?.data || res.data || [];
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
