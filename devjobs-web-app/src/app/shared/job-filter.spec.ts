import { TestBed } from '@angular/core/testing';

import { JobFilterService } from './job-filter';

describe('JobFilter', () => {
  let service: JobFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
