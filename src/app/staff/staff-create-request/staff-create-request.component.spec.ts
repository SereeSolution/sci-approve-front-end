import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCreateRequestComponent } from './staff-create-request.component';

describe('StaffCreateRequestComponent', () => {
  let component: StaffCreateRequestComponent;
  let fixture: ComponentFixture<StaffCreateRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCreateRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCreateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
