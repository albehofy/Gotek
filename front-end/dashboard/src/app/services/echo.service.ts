import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class EchoService {
  private echoInstance: any = null;

  init() {
    const token = localStorage.getItem('gotek_token') || sessionStorage.getItem('gotek_token');
    if (!token) return;

    (window as any).Pusher = Pusher;

    this.echoInstance = new Echo({
      broadcaster: 'reverb',
      key: 'hkkcbzonfjaypwy3cxna', // matches REVERB_APP_KEY in .env
      wsHost: 'localhost',
      wsPort: 8080,
      wssPort: 8080,
      forceTLS: false,
      enabledTransports: ['ws', 'wss'],
      authEndpoint: 'http://localhost:8000/api/broadcasting/auth',
      auth: {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    });
  }

  getEcho() {
    if (!this.echoInstance) {
      this.init();
    }
    return this.echoInstance;
  }

  listenPrivate(channel: string, event: string, callback: (data: any) => void) {
    const echo = this.getEcho();
    if (!echo) return;
    echo.private(channel).listen(event, callback);
  }

  leaveChannel(channel: string) {
    const echo = this.getEcho();
    if (!echo) return;
    echo.leave(channel);
  }
}
