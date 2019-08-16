import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRequestStatusComponent } from './staff-request-status.component';

describe('StaffRequestStatusComponent', () => {
  let component: StaffRequestStatusComponent;
  let fixture: ComponentFixture<StaffRequestStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffRequestStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
