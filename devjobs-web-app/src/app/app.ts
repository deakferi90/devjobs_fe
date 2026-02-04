import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsListComponent } from './jobs/jobs';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('devjobs-web-app');
}
