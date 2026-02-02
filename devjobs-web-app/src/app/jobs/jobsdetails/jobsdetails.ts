import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Jobs } from '../job.interface';

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
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    // Get the id from the route
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchJob(id);
  }

  fetchJob(id: number) {
    this.http.get<Jobs>(`http://localhost:5000/api/jobs/${id}`).subscribe({
      next: (data) => (this.job = data),
      error: (err) => console.error('Failed to fetch job', err),
    });
  }
}
