import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRequestApproveComponent } from './approval-request-approve.component';

describe('ApprovalRequestApproveComponent', () => {
  let component: ApprovalRequestApproveComponent;
  let fixture: ComponentFixture<ApprovalRequestApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalRequestApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalRequestApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
