import { TestBed } from '@angular/core/testing';

import { JobFilter } from './job-filter';

describe('JobFilter', () => {
  let service: JobFilter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobFilter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
