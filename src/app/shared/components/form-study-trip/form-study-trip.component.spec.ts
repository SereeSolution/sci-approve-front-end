import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudyTripComponent } from './form-study-trip.component';

describe('FormStudyTripComponent', () => {
  let component: FormStudyTripComponent;
  let fixture: ComponentFixture<FormStudyTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStudyTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStudyTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
