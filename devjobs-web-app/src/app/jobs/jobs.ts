import { Component, OnInit } from '@angular/core';
import { Job } from './service/job';
import { Jobs } from './job.interface';
import { ThemeService } from '../shared/theme.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JobFilterService } from '../shared/job-filter';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.html',
  styleUrls: ['./jobs.scss'],
})
export class JobsListComponent implements OnInit {
  jobList: Jobs[] = [];
  filteredJobsList: Jobs[] = [];

  constructor(
    private jobService: Job,
    public themeService: ThemeService,
    private router: Router,
    private filterService: JobFilterService,
  ) {}

  ngOnInit(): void {
    this.getJobs();

    this.filterService.getFilters().subscribe((filters) => {
      console.log('JOBS RECEIVED FILTERS', filters);
      this.applyFilter(filters);
    });
  }

  getJobs() {
    this.jobService.getJobs().subscribe({
      next: (list: Jobs[]) => {
        this.jobList = list;
        this.filteredJobsList = list;
      },
      error: (err: any) => console.error('Failed to fetch jobs', err),
    });
  }

  applyFilter(filters: any) {
    console.log('JOBS RECEIVED FILTERS', filters);
    const titleTerm = filters.title?.toLowerCase().trim() || '';
    const locationTerm = filters.location?.toLowerCase().trim() || '';
    const fullTimeFilter = filters.fullTime;

    this.filteredJobsList = this.jobList.filter((job) => {
      const matchesTitle = titleTerm
        ? job.position.toLowerCase().includes(titleTerm)
        : true;

      const matchesLocation = locationTerm
        ? job.location?.toLowerCase().includes(locationTerm)
        : true;

      const matchesFullTime = fullTimeFilter
        ? job.contract === 'Full Time'
        : true;

      return matchesTitle && matchesLocation && matchesFullTime;
    });
  }

  trackByJobId(index: number, job: Jobs) {
    return job.id;
  }

  openDetailsPage(id: string) {
    this.router.navigate(['jobs', id]);
  }
}
