import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private audioCtx: any = null;
  private isMuted = false;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        this.isMuted = localStorage.getItem('mg_sound_muted') === '1';
      } catch (e) {}
    }
    this.initInteractionUnlock();
  }

  /**
   * Unlock AudioContext on user interaction to comply with browser autoplay policies
   */
  private initInteractionUnlock(): void {
    if (typeof window === 'undefined') return;

    const unlock = () => {
      this.ensureAudioContextActive();
      ['click', 'keydown', 'touchstart', 'pointerdown'].forEach(e => {
        window.removeEventListener(e, unlock);
      });
    };

    ['click', 'keydown', 'touchstart', 'pointerdown'].forEach(e => {
      window.addEventListener(e, unlock, { once: true, passive: true });
    });
  }

  private getAudioContext(): any {
    if (typeof window === 'undefined') return null;
    try {
      if (!this.audioCtx) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          this.audioCtx = new AudioCtx();
        }
      }
      return this.audioCtx;
    } catch (e) {
      return null;
    }
  }

  private ensureAudioContextActive(): Promise<any> {
    const ctx = this.getAudioContext();
    if (!ctx) return Promise.resolve(null);
    if (ctx.state === 'suspended') {
      return ctx.resume().then(() => ctx).catch(() => ctx);
    }
    return Promise.resolve(ctx);
  }

  public get muted(): boolean {
    return this.isMuted;
  }

  public set muted(val: boolean) {
    this.isMuted = val;
    try {
      localStorage.setItem('mg_sound_muted', val ? '1' : '0');
    } catch (e) {}
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    return this.muted;
  }

  /**
   * Main notification ringtone / chime:
   * Bright, elegant triple-bell chord (High C, High G, High C)
   * Designed to be loud, clear, crisp, and pleasant.
   */
  public playNotificationChime(): void {
    if (this.isMuted) return;

    this.ensureAudioContextActive().then(ctx => {
      if (ctx && ctx.state !== 'closed') {
        this.synthesizeChime(ctx);
      } else {
        this.playFallbackBeep();
      }
    }).catch(() => {
      this.playFallbackBeep();
    });
  }

  /**
   * Short pleasant success chime
   */
  public playSuccessChime(): void {
    if (this.isMuted) return;

    this.ensureAudioContextActive().then(ctx => {
      if (!ctx || ctx.state === 'closed') return;
      try {
        const now = ctx.currentTime;
        const master = ctx.createGain();
        master.gain.setValueAtTime(0.7, now);
        master.connect(ctx.destination);

        // Tone 1 - 659.25 Hz (E5)
        const osc1 = ctx.createOscillator();
        const g1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(659.25, now);
        g1.gain.setValueAtTime(0.6, now);
        g1.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc1.connect(g1);
        g1.connect(master);
        osc1.start(now);
        osc1.stop(now + 0.25);

        // Tone 2 - 1046.5 Hz (C6)
        const osc2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1046.5, now + 0.1);
        g2.gain.setValueAtTime(0.001, now);
        g2.gain.setValueAtTime(0.75, now + 0.1);
        g2.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc2.connect(g2);
        g2.connect(master);
        osc2.start(now + 0.1);
        osc2.stop(now + 0.5);
      } catch (e) {}
    });
  }

  private synthesizeChime(ctx: any): void {
    try {
      const now = ctx.currentTime;
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.95, now);
      master.connect(ctx.destination);

      // Bell Note 1: 1046.5 Hz (C6) - Bell attack
      const osc1 = ctx.createOscillator();
      const g1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1046.5, now);
      g1.gain.setValueAtTime(0.9, now);
      g1.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc1.connect(g1);
      g1.connect(master);
      osc1.start(now);
      osc1.stop(now + 0.5);

      // Bell Note 2: 1567.98 Hz (G6) - Harmonic lift
      const osc2 = ctx.createOscillator();
      const g2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1567.98, now + 0.12);
      g2.gain.setValueAtTime(0.001, now);
      g2.gain.setValueAtTime(1.0, now + 0.12);
      g2.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc2.connect(g2);
      g2.connect(master);
      osc2.start(now + 0.12);
      osc2.stop(now + 0.8);

      // Bell Note 3: 2093.0 Hz (C7) - Crystal shimmer
      const osc3 = ctx.createOscillator();
      const g3 = ctx.createGain();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(2093.0, now + 0.24);
      g3.gain.setValueAtTime(0.001, now);
      g3.gain.setValueAtTime(0.85, now + 0.24);
      g3.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
      osc3.connect(g3);
      g3.connect(master);
      osc3.start(now + 0.24);
      osc3.stop(now + 1.1);

    } catch (err) {
      console.warn('synthesizeChime failed:', err);
      this.playFallbackBeep();
    }
  }

  private playFallbackBeep(): void {
    try {
      // Create an inline audio tone via Data URL PCM WAV as a 100% reliable fallback
      const sampleRate = 8000;
      const duration = 0.4;
      const numSamples = Math.floor(sampleRate * duration);
      const buffer = new Uint8Array(44 + numSamples);

      // WAV Header
      const writeString = (offset: number, str: string) => {
        for (let i = 0; i < str.length; i++) buffer[offset + i] = str.charCodeAt(i);
      };
      const writeUint32 = (offset: number, val: number) => {
        buffer[offset] = val & 0xff;
        buffer[offset + 1] = (val >> 8) & 0xff;
        buffer[offset + 2] = (val >> 16) & 0xff;
        buffer[offset + 3] = (val >> 24) & 0xff;
      };
      const writeUint16 = (offset: number, val: number) => {
        buffer[offset] = val & 0xff;
        buffer[offset + 1] = (val >> 8) & 0xff;
      };

      writeString(0, 'RIFF');
      writeUint32(4, 36 + numSamples);
      writeString(8, 'WAVE');
      writeString(12, 'fmt ');
      writeUint32(16, 16);
      writeUint16(20, 1); // PCM
      writeUint16(22, 1); // Mono
      writeUint32(24, sampleRate);
      writeUint32(28, sampleRate);
      writeUint16(32, 1);
      writeUint16(34, 8); // 8-bit
      writeString(36, 'data');
      writeUint32(40, numSamples);

      // Generate 1200Hz tone with decaying envelope
      for (let i = 0; i < numSamples; i++) {
        const t = i / sampleRate;
        const decay = Math.exp(-6 * t);
        const sample = Math.sin(2 * Math.PI * 1200 * t) * decay;
        buffer[44 + i] = Math.floor((sample * 0.7 + 1) * 127.5);
      }

      let binary = '';
      for (let i = 0; i < buffer.length; i++) {
        binary += String.fromCharCode(buffer[i]);
      }
      const base64 = btoa(binary);
      const audio = new Audio('data:audio/wav;base64,' + base64);
      audio.volume = 0.85;
      audio.play().catch(() => {});
    } catch (e) {}
  }
}
