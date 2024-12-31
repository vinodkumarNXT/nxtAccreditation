import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAndReviewViewComponent } from './design-and-review-view.component';

describe('DesignAndReviewViewComponent', () => {
  let component: DesignAndReviewViewComponent;
  let fixture: ComponentFixture<DesignAndReviewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAndReviewViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignAndReviewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
