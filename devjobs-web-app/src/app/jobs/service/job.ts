import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jobs } from '../job.interface';

@Injectable({
  providedIn: 'root',
})
export class Job {
  private apiUrl = 'http://localhost:5000/api/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): any {
    return this.http.get<Jobs[]>(this.apiUrl);
  }

  fetchJob(id: string | number) {
    return this.http.get<Jobs>(`${this.apiUrl}/${id}`);
  }
}
