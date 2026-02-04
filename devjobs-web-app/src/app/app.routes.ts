import { Routes } from '@angular/router';
import { JobsListComponent } from './jobs/jobs';
import { JobsDetailsComponent } from './jobs/jobsdetails/jobsdetails';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobsListComponent },
  { path: 'jobs/:id', component: JobsDetailsComponent },
];
