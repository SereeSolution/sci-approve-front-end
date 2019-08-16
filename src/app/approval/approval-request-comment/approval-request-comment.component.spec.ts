import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRequestCommentComponent } from './approval-request-comment.component';

describe('ApprovalRequestCommentComponent', () => {
  let component: ApprovalRequestCommentComponent;
  let fixture: ComponentFixture<ApprovalRequestCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalRequestCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalRequestCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
