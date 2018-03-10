import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryCriteriaComponent } from './query-criteria.component';

describe('QueryCriteriaComponent', () => {
  let component: QueryCriteriaComponent;
  let fixture: ComponentFixture<QueryCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
