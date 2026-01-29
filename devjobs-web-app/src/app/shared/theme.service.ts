import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<Theme>('light');

  toggle() {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }
}
