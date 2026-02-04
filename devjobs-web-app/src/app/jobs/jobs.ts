import { Component, OnInit } from '@angular/core';
import { Job } from './service/job';
import { Jobs } from './job.interface';
import { ThemeService } from '../shared/theme.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JobFilterService } from '../shared/job-filter';
import { JobStateService } from '../shared/jobstate';

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
  jobID!: number;

  constructor(
    private jobService: Job,
    public themeService: ThemeService,
    private router: Router,
    private filterService: JobFilterService,
    private jobState: JobStateService,
  ) {}

  ngOnInit(): void {
    this.getJobs();

    this.filterService.getFilters().subscribe((filters) => {
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

  openDetailsPage(id: any) {
    this.jobID = id;
    console.log('Selected Job ID:', this.jobID);
    this.filterService.resetFilters();
    this.jobState.setJobId(this.jobID);
    this.router.navigate(['jobs', this.jobID]);
  }
}
