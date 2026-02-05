import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Jobs } from '../job.interface';
import { Job } from '../service/job';
import { JobStateService } from '../../shared/jobstate';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobsdetails.html',
  styleUrls: ['./jobsdetails.scss'],
})
export class JobsDetailsComponent implements OnInit {
  job: Jobs | null = null;

  constructor(
    private route: ActivatedRoute,
    private jobService: Job,
    private jobState: JobStateService,
    public themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Details page Job ID:', id);
    this.fetchJob(id);
  }

  fetchJob(id: number) {
    this.jobService.fetchJob(id).subscribe({
      next: (data) => {
        this.job = data;
        this.jobState.setJobId(id);
      },
      error: (err) => console.error('Failed to fetch job', err),
    });
  }

  applyToJob(website: string) {
    const url = website.startsWith('http') ? website : `https://${website}`;
    window.open(url, '_blank');
  }
}
