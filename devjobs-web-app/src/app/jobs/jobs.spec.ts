import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { JobsListComponent } from './jobs';

describe('Jobs', () => {
  let component: JobsListComponent;
  let fixture: ComponentFixture<JobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsListComponent],
      providers: [provideHttpClient(), provideHttpClientTesting],
    }).compileComponents();

    fixture = TestBed.createComponent(JobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
