import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRequestStatComponent } from './approval-request-stat.component';

describe('ApprovalRequestStatComponent', () => {
  let component: ApprovalRequestStatComponent;
  let fixture: ComponentFixture<ApprovalRequestStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalRequestStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalRequestStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
