import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SoundService } from './sound.service';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title?: string;
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private soundService = inject(SoundService);
  private toastsSubject = new BehaviorSubject<ToastMessage[]>([]);
  public toasts$: Observable<ToastMessage[]> = this.toastsSubject.asObservable();

  show(type: 'success' | 'error' | 'info' | 'warning', message: string, title?: string, duration: number = 4000): void {
    const id = Math.random().toString(36).substring(2, 9);
    const toast: ToastMessage = { id, type, message, title, duration };
    const current = this.toastsSubject.getValue();
    this.toastsSubject.next([...current, toast]);

    try {
      if (type === 'success') {
        this.soundService.playSuccessChime();
      } else if (type === 'error' || type === 'warning') {
        this.soundService.playNotificationChime();
      }
    } catch (e) {}

    if (duration > 0) {
      setTimeout(() => {
        this.remove(id);
      }, duration);
    }
  }

  success(message: string, title: string = 'تمت العملية بنجاح'): void {
    this.show('success', message, title);
  }

  error(message: string, title: string = 'حدث خطأ'): void {
    this.show('error', message, title, 5000);
  }

  info(message: string, title: string = 'معلومات'): void {
    this.show('info', message, title);
  }

  warning(message: string, title: string = 'تنبيه'): void {
    this.show('warning', message, title);
  }

  remove(id: string): void {
    const current = this.toastsSubject.getValue();
    this.toastsSubject.next(current.filter(t => t.id !== id));
  }

  clear(): void {
    this.toastsSubject.next([]);
  }
}
