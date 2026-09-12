import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from '../../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container" *ngIf="(toastService.toasts$ | async) as toasts">
      <div 
        *ngFor="let toast of toasts" 
        class="toast-item" 
        [ngClass]="'toast-' + toast.type"
      >
        <div class="toast-icon">
          <i *ngIf="toast.type === 'success'" class="fa-solid fa-circle-check"></i>
          <i *ngIf="toast.type === 'error'" class="fa-solid fa-circle-xmark"></i>
          <i *ngIf="toast.type === 'warning'" class="fa-solid fa-triangle-exclamation"></i>
          <i *ngIf="toast.type === 'info'" class="fa-solid fa-circle-info"></i>
        </div>
        
        <div class="toast-content">
          <div class="toast-title" *ngIf="toast.title">{{ toast.title }}</div>
          <div class="toast-message">{{ toast.message }}</div>
        </div>

        <button type="button" class="toast-close-btn" (click)="toastService.remove(toast.id)">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 24px;
      left: 24px;
      z-index: 999999999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 420px;
      width: calc(100vw - 48px);
      pointer-events: none;
      direction: rtl;
    }

    .toast-item {
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 8px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #ffffff;
      animation: slideInToast 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      transition: all 0.25s ease;
    }

    @keyframes slideInToast {
      from {
        opacity: 0;
        transform: translateX(-30px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }

    .toast-success {
      background: rgba(16, 185, 129, 0.92);
      border-color: rgba(52, 211, 153, 0.5);
    }

    .toast-error {
      background: rgba(239, 68, 68, 0.92);
      border-color: rgba(248, 113, 113, 0.5);
    }

    .toast-warning {
      background: rgba(245, 158, 11, 0.92);
      border-color: rgba(251, 191, 36, 0.5);
    }

    .toast-info {
      background: rgba(99, 102, 241, 0.92);
      border-color: rgba(129, 140, 248, 0.5);
    }

    .toast-icon {
      font-size: 1.25rem;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .toast-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .toast-title {
      font-weight: 800;
      font-size: 0.9rem;
      letter-spacing: -0.2px;
    }

    .toast-message {
      font-size: 0.84rem;
      opacity: 0.95;
      line-height: 1.4;
    }

    .toast-close-btn {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      padding: 4px;
      font-size: 0.9rem;
      transition: color 0.15s;
    }

    .toast-close-btn:hover {
      color: #ffffff;
    }

    :host-context(body.light-theme) .toast-success {
      background: #059669 !important;
    }
    :host-context(body.light-theme) .toast-error {
      background: #dc2626 !important;
    }
    :host-context(body.light-theme) .toast-warning {
      background: #d97706 !important;
    }
    :host-context(body.light-theme) .toast-info {
      background: #4f46e5 !important;
    }
  `]
})
export class ToastComponent {
  public toastService = inject(ToastService);
}
