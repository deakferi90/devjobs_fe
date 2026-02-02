import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobsdetails } from './jobsdetails';

describe('Jobsdetails', () => {
  let component: Jobsdetails;
  let fixture: ComponentFixture<Jobsdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jobsdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobsdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
