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
  jobList: any = [];
  constructor(private jobService: Job) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs().subscribe({
      next: (list: any) => {
        this.jobList = list;
        console.log('Jobs fetched:', this.jobList);
      },
      error: (err: any) => console.error('Failed to fetch jobs', err),
    });
  }
}
