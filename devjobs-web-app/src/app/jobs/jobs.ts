import { Component, OnInit } from '@angular/core';
import { Job } from './service/job';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [],
  templateUrl: './jobs.html',
  styleUrl: './jobs.scss',
})
export class Jobs implements OnInit {
  constructor(private jobService: Job) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs().subscribe({
      next: (list: any) => {
        console.log('Jobs fetched:', list);
      },
      error: (err: any) => console.error('Failed to fetch jobs', err),
    });
  }
}
