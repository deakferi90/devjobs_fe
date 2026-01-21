import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Jobs } from './jobs/jobs';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Jobs, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('devjobs-web-app');
}
