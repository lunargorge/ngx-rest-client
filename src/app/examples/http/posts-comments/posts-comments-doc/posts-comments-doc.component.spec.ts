import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCommentsDocComponent } from './posts-comments-doc.component';

describe('PostsCommentsDocComponent', () => {
  let component: PostsCommentsDocComponent;
  let fixture: ComponentFixture<PostsCommentsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCommentsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCommentsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
