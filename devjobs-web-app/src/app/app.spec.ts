import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { Job } from './jobs/service/job';
describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideHttpClientTesting(),
        provideRouter([]),
        {
          provide: Job,
          useValue: {
            getJobs: () => of([]),
            getJobById: () => of(null),
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have the correct title signal', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance.title()).toBe('devjobs-web-app');
  });
});
