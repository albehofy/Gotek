import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ConfirmConfig {
  title?: string;
  message: string;
  icon?: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
  accept?: () => void;
  reject?: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  private confirmSubject = new BehaviorSubject<ConfirmConfig | null>(null);
  public confirm$: Observable<ConfirmConfig | null> = this.confirmSubject.asObservable();

  confirm(config: ConfirmConfig): void {
    this.confirmSubject.next({
      title: config.title || 'تأكيد الإجراء',
      message: config.message,
      icon: config.icon || (config.type === 'danger' ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-circle-question'),
      confirmText: config.confirmText || 'تأكيد الإجراء',
      cancelText: config.cancelText || 'إلغاء',
      type: config.type || 'danger',
      accept: config.accept,
      reject: config.reject
    });
  }

  accept(): void {
    const current = this.confirmSubject.getValue();
    if (current && current.accept) {
      current.accept();
    }
    this.confirmSubject.next(null);
  }

  reject(): void {
    const current = this.confirmSubject.getValue();
    if (current && current.reject) {
      current.reject();
    }
    this.confirmSubject.next(null);
  }

  close(): void {
    this.confirmSubject.next(null);
  }
}
