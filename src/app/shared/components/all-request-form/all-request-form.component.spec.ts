import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestFormComponent } from './all-request-form.component';

describe('AllRequestFormComponent', () => {
  let component: AllRequestFormComponent;
  let fixture: ComponentFixture<AllRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
