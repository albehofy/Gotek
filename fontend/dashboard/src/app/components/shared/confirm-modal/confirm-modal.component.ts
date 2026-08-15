import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="confirm-backdrop" *ngIf="(confirmService.confirm$ | async) as config" (click)="confirmService.reject()">
      <div class="confirm-modal-card" (click)="$event.stopPropagation()">
        
        <div class="confirm-icon-badge" [ngClass]="'badge-' + config.type">
          <i [class]="config.icon"></i>
        </div>

        <div class="confirm-body">
          <h3 class="confirm-title">{{ config.title }}</h3>
          <p class="confirm-message">{{ config.message }}</p>
        </div>

        <div class="confirm-actions">
          <button type="button" class="btn-confirm-cancel" (click)="confirmService.reject()">
            {{ config.cancelText }}
          </button>
          <button type="button" class="btn-confirm-accept" [ngClass]="'btn-' + config.type" (click)="confirmService.accept()">
            {{ config.confirmText }}
          </button>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      z-index: 99999999;
      background: rgba(15, 17, 35, 0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      direction: rtl;
      animation: fadeInBackdrop 0.2s ease-out;
    }

    @keyframes fadeInBackdrop {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .confirm-modal-card {
      width: 100%;
      max-width: 440px;
      background: #111228;
      border: 1px solid rgba(99, 102, 241, 0.25);
      border-radius: 20px;
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.7);
      animation: modalScaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes modalScaleIn {
      from { opacity: 0; transform: scale(0.9) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }

    .confirm-icon-badge {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.7rem;
      margin-bottom: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }

    .badge-danger {
      background: rgba(244, 63, 94, 0.15);
      border: 1px solid rgba(244, 63, 94, 0.35);
      color: #fb7185;
    }

    .badge-warning {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.35);
      color: #fbbf24;
    }

    .badge-info {
      background: rgba(99, 102, 241, 0.15);
      border: 1px solid rgba(99, 102, 241, 0.35);
      color: #818cf8;
    }

    .confirm-body {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 24px;
    }

    .confirm-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0;
    }

    .confirm-message {
      font-size: 0.9rem;
      color: #94a3b8;
      line-height: 1.5;
      margin: 0;
    }

    .confirm-actions {
      display: flex;
      gap: 12px;
      width: 100%;
    }

    .btn-confirm-cancel {
      flex: 1;
      padding: 12px 18px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
      font-weight: 700;
      font-size: 0.88rem;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-confirm-cancel:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #ffffff;
    }

    .btn-confirm-accept {
      flex: 1.2;
      padding: 12px 18px;
      border-radius: 12px;
      border: none;
      color: #ffffff;
      font-weight: 800;
      font-size: 0.88rem;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-danger {
      background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);
      box-shadow: 0 4px 18px rgba(244, 63, 94, 0.4);
    }
    .btn-danger:hover {
      box-shadow: 0 6px 24px rgba(244, 63, 94, 0.6);
      transform: translateY(-1px);
    }

    .btn-warning {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      box-shadow: 0 4px 18px rgba(245, 158, 11, 0.4);
    }
    .btn-warning:hover {
      box-shadow: 0 6px 24px rgba(245, 158, 11, 0.6);
      transform: translateY(-1px);
    }

    .btn-info {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      box-shadow: 0 4px 18px rgba(99, 102, 241, 0.4);
    }
    .btn-info:hover {
      box-shadow: 0 6px 24px rgba(99, 102, 241, 0.6);
      transform: translateY(-1px);
    }

    /* Light Theme Overrides */
    :host-context(body.light-theme) .confirm-modal-card {
      background: #ffffff !important;
      border-color: #cbd5e1 !important;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.18) !important;
    }
    :host-context(body.light-theme) .confirm-title {
      color: #0f172a !important;
    }
    :host-context(body.light-theme) .confirm-message {
      color: #475569 !important;
    }
    :host-context(body.light-theme) .btn-confirm-cancel {
      background: #f1f5f9 !important;
      border-color: #cbd5e1 !important;
      color: #334155 !important;
    }
    :host-context(body.light-theme) .btn-confirm-cancel:hover {
      background: #e2e8f0 !important;
      color: #0f172a !important;
    }
  `]
})
export class ConfirmModalComponent {
  public confirmService = inject(ConfirmService);
}
