import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsandpostComponent } from './blogsandpost.component';

describe('BlogsandpostComponent', () => {
  let component: BlogsandpostComponent;
  let fixture: ComponentFixture<BlogsandpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsandpostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsandpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
