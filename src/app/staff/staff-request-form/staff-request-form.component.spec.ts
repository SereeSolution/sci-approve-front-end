import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRequestFormComponent } from './staff-request-form.component';

describe('StaffRequestFormComponent', () => {
  let component: StaffRequestFormComponent;
  let fixture: ComponentFixture<StaffRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
