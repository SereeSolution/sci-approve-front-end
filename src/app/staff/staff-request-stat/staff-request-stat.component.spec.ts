import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRequestStatComponent } from './staff-request-stat.component';

describe('StaffRequestStatComponent', () => {
  let component: StaffRequestStatComponent;
  let fixture: ComponentFixture<StaffRequestStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffRequestStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffRequestStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
