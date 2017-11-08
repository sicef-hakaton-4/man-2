import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesViewComponent } from './candidates-view.component';

describe('CandidatesViewComponent', () => {
  let component: CandidatesViewComponent;
  let fixture: ComponentFixture<CandidatesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
