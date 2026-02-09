import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { JobsDetailsComponent } from './jobsdetails';

describe('Jobsdetails', () => {
  let component: JobsDetailsComponent;
  let fixture: ComponentFixture<JobsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsDetailsComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JobsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
