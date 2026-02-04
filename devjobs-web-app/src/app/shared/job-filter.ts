import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JobFilters } from '../filter-component/Job-filters';

@Injectable({ providedIn: 'root' })
export class JobFilterService {
  private filters$ = new BehaviorSubject<JobFilters>({
    title: '',
    location: '',
    fullTime: false,
  });

  setFilters(filters: JobFilters) {
    this.filters$.next(filters);
  }

  getFilters() {
    return this.filters$.asObservable();
  }

  resetFilters() {
    this.filters$.next({
      title: '',
      location: '',
      fullTime: false,
    });
  }
}
