import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../service/job';
import { Jobs } from '../job.interface';
import { JobStateService } from '../../shared/jobstate';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.html',
  styleUrls: ['./logo.scss'],
})
export class Logo implements OnInit {
  job: Jobs | null = null;
  private lastFetchedId: number | null = null;

  constructor(
    private jobService: Job,
    private jobState: JobStateService,
    public themeService: ThemeService,
  ) {}

  ngOnInit() {
    this.jobState.getJobId().subscribe((id) => {
      if (id !== null && id !== this.lastFetchedId) {
        this.lastFetchedId = id;

        if (!this.job) {
          this.fetchJob(id);
        }
      }
    });
  }

  private fetchJob(id: number) {
    this.jobService.fetchJob(id).subscribe({
      next: (data) => {
        this.job = data;
      },
      error: (err) => console.error('Failed to fetch job', err),
    });
  }

  openPage(website: string) {
    const url = website.startsWith('http') ? website : `https://${website}`;
    window.open(url, '_blank');
  }
}
