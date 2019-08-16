import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalNavComponent } from './approval-nav.component';

describe('ApprovalNavComponent', () => {
  let component: ApprovalNavComponent;
  let fixture: ComponentFixture<ApprovalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
