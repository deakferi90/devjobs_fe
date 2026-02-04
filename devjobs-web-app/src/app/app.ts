import { Component, signal, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { JobsListComponent } from './jobs/jobs';
import { Header } from './header/header';
import { JobFilters } from './filter-component/Job-filters';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('devjobs-web-app');
  showHeader = true;
  @ViewChild(JobsListComponent)
  jobsComponent!: JobsListComponent;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showHeader =
          !event.urlAfterRedirects.startsWith('/jobs/') ||
          event.urlAfterRedirects === '/jobs';
      });
  }

  onFilter(filters: JobFilters) {
    this.jobsComponent?.applyFilter(filters);
  }
}
