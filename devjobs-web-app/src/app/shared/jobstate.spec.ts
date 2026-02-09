import { TestBed } from '@angular/core/testing';

import { JobStateService } from './jobstate';

describe('Jobstate', () => {
  let service: JobStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
