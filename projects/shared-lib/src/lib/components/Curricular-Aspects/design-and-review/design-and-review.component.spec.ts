import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAndReviewComponent } from './design-and-review.component';

describe('DesignAndReviewComponent', () => {
  let component: DesignAndReviewComponent;
  let fixture: ComponentFixture<DesignAndReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAndReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignAndReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
