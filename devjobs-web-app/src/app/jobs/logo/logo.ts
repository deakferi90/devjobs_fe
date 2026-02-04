import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../service/job';
import { Jobs } from '../job.interface';
import { JobStateService } from '../../shared/jobstate';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo implements OnInit {
  job: Jobs | null = null;
  private lastFetchedId: number | null = null;

  constructor(
    private jobService: Job,
    private jobState: JobStateService,
  ) {}

  ngOnInit() {
    this.jobState.getJobId().subscribe((id) => {
      if (id !== null) {
        this.fetchJob(id);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const newId = changes['jobId']?.currentValue;

    if (newId !== null && newId !== this.lastFetchedId) {
      console.log('Logo detected new Job ID:', newId);
      this.lastFetchedId = newId;
      this.fetchJob(newId);
    }
  }

  private fetchJob(id: number) {
    this.job = null;
    this.jobService.fetchJob(id).subscribe({
      next: (data) => {
        console.log('Fetched job in Logo:', data);
        this.job = data;
      },
      error: (err) => console.error('Failed to fetch job', err),
    });
  }
}
