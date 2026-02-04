import { TestBed } from '@angular/core/testing';

import { Jobstate } from './jobstate';

describe('Jobstate', () => {
  let service: Jobstate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jobstate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
