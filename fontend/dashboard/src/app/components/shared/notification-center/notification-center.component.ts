import { Component, OnInit, OnDestroy, inject, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-notification-center',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notification-bell-wrapper">
      <button type="button" class="bell-btn" (click)="toggleDropdown($event)" [class.has-unread]="unreadCount > 0" title="الإشعارات والتنبيهات">
        <i class="fa-solid fa-bell"></i>
        <span class="unread-badge" *ngIf="unreadCount > 0">{{ unreadCount > 99 ? '99+' : unreadCount }}</span>
      </button>

      <div class="notification-dropdown" *ngIf="isOpen">
        <div class="notification-header">
          <div class="header-title">
            <i class="fa-solid fa-bell"></i>
            <span>الإشعارات والتنبيهات</span>
            <span class="badge-count" *ngIf="unreadCount > 0">{{ unreadCount }} غير مقروء</span>
          </div>
          <button type="button" class="btn-read-all" *ngIf="unreadCount > 0" (click)="markAllRead()" title="تحديد الكل كمقروء">
            <i class="fa-solid fa-check-double"></i> قراءة الكل
          </button>
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
              <div class="notif-title">{{ notif.title || notif.data?.title || 'تنبيه جديد' }}</div>
              <div class="notif-message">{{ notif.message || notif.data?.message || notif.body }}</div>
              <div class="notif-time"><i class="fa-regular fa-clock"></i> {{ notif.created_at | date:'yyyy-MM-dd HH:mm' }}</div>
            </div>
            <button type="button" class="btn-del-notif" (click)="deleteNotif(notif, $event)" title="حذف الإشعار">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="empty-state" *ngIf="notifications.length === 0">
            <i class="fa-regular fa-bell-slash"></i>
            <p>لا توجد إشعارات جديدة حالياً</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
      position: relative;
    }

    .notification-bell-wrapper {
      position: relative;
      display: inline-flex;
      align-items: center;
    }

    .bell-btn {
      position: relative;
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-2);
      width: 40px;
      height: 40px;
      border-radius: var(--r);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.25s var(--ease);
      padding: 0;
    }

    .bell-btn:hover {
      background: var(--violet-soft);
      border-color: var(--border-v);
      color: var(--violet-light);
      transform: translateY(-1px);
    }

    .bell-btn.has-unread {
      color: var(--violet-light);
      border-color: var(--border-v);
    }

    body.light-theme .bell-btn,
    :host-context(body.light-theme) .bell-btn {
      background: #ffffff !important;
      border-color: #e2e8f0 !important;
      color: #64748b !important;
    }

    body.light-theme .bell-btn:hover,
    :host-context(body.light-theme) .bell-btn:hover {
      background: #f1f5f9 !important;
      color: #4f46e5 !important;
      border-color: #cbd5e1 !important;
    }

    .unread-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: linear-gradient(135deg, #f43f5e, #e11d48);
      color: #ffffff;
      font-size: 0.65rem;
      font-weight: 800;
      min-width: 18px;
      height: 18px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
      box-shadow: 0 2px 8px rgba(244, 63, 94, 0.4);
      border: 2px solid var(--bg);
      animation: pulse-ring 2s infinite;
    }

    @keyframes pulse-ring {
      0% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.5); }
      70% { box-shadow: 0 0 0 6px rgba(244, 63, 94, 0); }
      100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0); }
    }

    .notification-dropdown {
      position: absolute;
      top: calc(100% + 12px);
      left: 0;
      width: 360px;
      max-width: 90vw;
      background: var(--bg-card);
      border: 1px solid var(--border-v);
      border-radius: var(--r-lg);
      box-shadow: var(--shadow-lg), 0 20px 40px rgba(0, 0, 0, 0.5);
      z-index: 2100;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      animation: dropdownSlideIn 0.25s var(--ease);
      direction: rtl;
    }

    @keyframes dropdownSlideIn {
      from { opacity: 0; transform: translateY(-8px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    body.light-theme .notification-dropdown,
    :host-context(body.light-theme) .notification-dropdown {
      background: #ffffff !important;
      border-color: #e2e8f0 !important;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.15) !important;
    }

    .notification-header {
      padding: 14px 16px;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(99, 102, 241, 0.04);
    }

    body.light-theme .notification-header,
    :host-context(body.light-theme) .notification-header {
      background: #f8fafc !important;
      border-bottom-color: #e2e8f0 !important;
    }

    .header-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.88rem;
      font-weight: 800;
      color: var(--text);
    }

    body.light-theme .header-title,
    :host-context(body.light-theme) .header-title {
      color: #0f172a !important;
    }

    .header-title i {
      color: var(--violet-light);
    }

    .badge-count {
      background: var(--violet-soft);
      color: var(--violet-light);
      font-size: 0.7rem;
      padding: 2px 8px;
      border-radius: 100px;
      font-weight: 700;
    }

    .btn-read-all {
      background: transparent;
      border: none;
      color: var(--text-2);
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: color 0.2s;
      font-family: inherit;
    }

    .btn-read-all:hover {
      color: var(--violet-light);
    }

    .notification-body {
      max-height: 380px;
      overflow-y: auto;
    }

    .notification-item {
      padding: 14px 16px;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: flex-start;
      gap: 12px;
      cursor: pointer;
      transition: background 0.2s;
      position: relative;
    }

    .notification-item:last-child { border-bottom: none; }
    .notification-item:hover { background: var(--violet-soft); }
    .notification-item.unread { background: var(--violet-soft-2); }
    .notification-item.unread::before {
      content: '';
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 24px;
      background: var(--violet-light);
      border-radius: 4px;
    }

    body.light-theme .notification-item,
    :host-context(body.light-theme) .notification-item {
      border-bottom-color: #f1f5f9 !important;
    }
    body.light-theme .notification-item:hover,
    :host-context(body.light-theme) .notification-item:hover {
      background: #f8fafc !important;
    }

    .notif-icon {
      width: 34px;
      height: 34px;
      border-radius: var(--r);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      flex-shrink: 0;
      background: rgba(99, 102, 241, 0.12);
      color: var(--violet-light);
    }

    .notif-icon.assignment { background: rgba(16, 185, 129, 0.12); color: var(--emerald-light); }
    .notif-icon.status_change { background: rgba(245, 158, 11, 0.12); color: var(--amber-light); }
    .notif-icon.mention { background: rgba(236, 72, 153, 0.12); color: #ec4899; }

    .notif-content {
      flex: 1;
      min-width: 0;
    }

    .notif-title {
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    body.light-theme .notif-title,
    :host-context(body.light-theme) .notif-title {
      color: #0f172a !important;
    }

    .notif-message {
      font-size: 0.78rem;
      color: var(--text-2);
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    body.light-theme .notif-message,
    :host-context(body.light-theme) .notif-message {
      color: #64748b !important;
    }

    .notif-time {
      font-size: 0.7rem;
      color: var(--text-2);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 4px;
      opacity: 0.75;
    }

    .btn-del-notif {
      background: transparent;
      border: none;
      color: var(--text-2);
      width: 22px;
      height: 22px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      cursor: pointer;
      opacity: 0;
      transition: all 0.2s;
      flex-shrink: 0;
    }

    .notification-item:hover .btn-del-notif {
      opacity: 1;
    }

    .btn-del-notif:hover {
      color: var(--rose-light);
      background: var(--rose-soft);
    }
  `]
})
export class NotificationCenterComponent implements OnInit, OnDestroy {
  private apiService = inject(ApiService);
  private router = inject(Router);
  private elementRef = inject(ElementRef);

  notifications: any[] = [];
  unreadCount = 0;
  isOpen = false;
  private pollInterval: any = null;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
    this.loadNotifications();
    this.pollInterval = setInterval(() => {
      this.loadNotifications();
    }, 25000);
  }

  ngOnDestroy(): void {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
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

  toggleDropdown(event?: Event): void {
    if (event) event.stopPropagation();
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

    this.isOpen = false;

    const taskId = notif.notifiable_id || notif.task_id || notif.data?.task_id;
    if (taskId && (notif.notifiable_type?.includes('Task') || notif.type === 'status_change' || notif.type === 'assignment')) {
      this.router.navigate(['/tasks'], { queryParams: { taskId: taskId } });
    } else if (notif.link) {
      this.router.navigateByUrl(notif.link);
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
