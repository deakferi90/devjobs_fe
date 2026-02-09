import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Job } from './job';

describe('Job', () => {
  let service: Job;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting],
    });
    service = TestBed.inject(Job);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
