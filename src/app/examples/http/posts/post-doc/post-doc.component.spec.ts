import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDocComponent } from './post-doc.component';

describe('PostDocComponent', () => {
  let component: PostDocComponent;
  let fixture: ComponentFixture<PostDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
