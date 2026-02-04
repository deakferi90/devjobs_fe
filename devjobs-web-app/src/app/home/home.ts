import { Component } from '@angular/core';
import { FilterComponent } from '../filter-component/filter-component';
import { JobsListComponent } from '../jobs/jobs';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [FilterComponent, JobsListComponent],
  template: `
    <app-filter-component (searchChange)="jobs.applyFilter($event)" />
    <app-jobs #jobs />
  `,
})
export class HomeComponent {}
