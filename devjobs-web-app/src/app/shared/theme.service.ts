import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<Theme>('light');

  constructor() {
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme === 'true') {
      this.theme.set('dark');
    } else {
      this.theme.set('light');
    }
  }

  toggle() {
    this.theme.update((current) => {
      const newTheme = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('darkMode', newTheme === 'dark' ? 'true' : 'false');
      return newTheme;
    });
  }
}
