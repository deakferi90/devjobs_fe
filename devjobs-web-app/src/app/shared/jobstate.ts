import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobStateService {
  private jobId$ = new BehaviorSubject<number | null>(null);

  setJobId(id: number) {
    this.jobId$.next(id);
  }

  getJobId() {
    return this.jobId$.asObservable();
  }

  currentJobId(): number | null {
    return this.jobId$.value;
  }
}
