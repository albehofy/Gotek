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
          <div class="header-actions-right" style="display:flex; gap:6px; align-items:center;">
            <button type="button" class="btn-test-sound" (click)="playNotificationSound()" title="تجربة صوت الإشعارات">
              <i class="fa-solid fa-volume-high"></i> تجربة الصوت
            </button>
            <button type="button" class="btn-read-all" *ngIf="unreadCount > 0" (click)="markAllRead()" title="تحديد الكل كمقروء">
              <i class="fa-solid fa-check-double"></i> قراءة الكل
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
      color: #38bdf8;
    }

    .unread-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: #ef4444;
      color: #ffffff;
      font-size: 0.68rem;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 100px;
      border: 2px solid var(--bg);
      min-width: 18px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);
    }

    .notification-dropdown {
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      width: 380px;
      max-width: 90vw;
      background: rgba(17, 24, 39, 0.96);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(16px);
      z-index: 999999;
      overflow: hidden;
      animation: fadeInDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .notification-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      background: rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .header-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.92rem;
      font-weight: 800;
      color: var(--text);
    }

    .header-title i {
      color: #6366f1;
    }

    .badge-count {
      font-size: 0.7rem;
      background: rgba(99, 102, 241, 0.2);
      color: #818cf8;
      padding: 2px 8px;
      border-radius: 100px;
      border: 1px solid rgba(99, 102, 241, 0.3);
    }

    .btn-test-sound {
      background: rgba(99, 102, 241, 0.15);
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: #a5b4fc;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .btn-test-sound:hover {
      background: #6366f1;
      color: #ffffff;
      border-color: #6366f1;
    }

    .btn-read-all {
      background: transparent;
      border: none;
      color: var(--text-2);
      font-size: 0.76rem;
      font-weight: 700;
      cursor: pointer;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0;
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
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      cursor: pointer;
      transition: background 0.2s;
      position: relative;
    }

    .notification-item:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .notification-item.unread {
      background: rgba(99, 102, 241, 0.08);
    }

    .notification-item.unread::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: #6366f1;
    }

    .notif-icon {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
      flex-shrink: 0;
      background: rgba(255, 255, 255, 0.06);
      color: var(--text-2);
    }

    .notif-icon.assignment { background: rgba(99, 102, 241, 0.15); color: #818cf8; }
    .notif-icon.mention { background: rgba(14, 165, 233, 0.15); color: #38bdf8; }
    .notif-icon.status_change { background: rgba(16, 185, 129, 0.15); color: #34d399; }
    .notif-icon.client_note { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }

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

    .notif-message {
      font-size: 0.78rem;
      color: var(--text-2);
      margin-bottom: 4px;
      line-height: 1.35;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .notif-time {
      font-size: 0.7rem;
      color: var(--text-3, #64748b);
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .btn-del-notif {
      background: transparent;
      border: none;
      color: var(--text-3);
      padding: 4px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
      font-size: 0.78rem;
    }

    .btn-del-notif:hover {
      color: #ef4444;
      background: rgba(239, 68, 68, 0.15);
    }

    .empty-state {
      padding: 32px 16px;
      text-align: center;
      color: var(--text-2);
    }

    .empty-state i {
      font-size: 2rem;
      margin-bottom: 8px;
      color: var(--text-3);
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

  private previousUnreadCount = -1;
  private previousFirstNotifId: any = null;

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
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
  }

  playNotificationSound(): void {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.9, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Tone 1 - Loud High Chime (1046.5 Hz - C6)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1046.5, ctx.currentTime);
      gain1.gain.setValueAtTime(0.9, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      osc1.connect(gain1);
      gain1.connect(masterGain);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.45);

      // Tone 2 - Loud Harmonious High Chime (1567.98 Hz - G6)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1567.98, ctx.currentTime + 0.12);
      gain2.gain.setValueAtTime(0.001, ctx.currentTime);
      gain2.gain.setValueAtTime(1.0, ctx.currentTime + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.75);
      osc2.connect(gain2);
      gain2.connect(masterGain);
      osc2.start(ctx.currentTime + 0.12);
      osc2.stop(ctx.currentTime + 0.75);

      // Tone 3 - Bright Resonant Bell (2093 Hz - C7)
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(2093, ctx.currentTime + 0.24);
      gain3.gain.setValueAtTime(0.001, ctx.currentTime);
      gain3.gain.setValueAtTime(0.85, ctx.currentTime + 0.24);
      gain3.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.95);
      osc3.connect(gain3);
      gain3.connect(masterGain);
      osc3.start(ctx.currentTime + 0.24);
      osc3.stop(ctx.currentTime + 0.95);

    } catch (err) {
      console.warn('Could not play notification sound:', err);
    }
  }

  loadNotifications(): void {
    this.apiService.getNotifications().subscribe(res => {
      if (res) {
        const newUnreadCount = res.unread_count || 0;
        const newNotifications = res.data?.data || res.data || [];
        const newFirstNotifId = newNotifications.length > 0 ? newNotifications[0].id : null;

        // Play loud sound if new unread notification arrived
        if (this.previousUnreadCount >= 0) {
          if (newUnreadCount > this.previousUnreadCount || (newFirstNotifId && newFirstNotifId !== this.previousFirstNotifId && newUnreadCount > 0)) {
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
