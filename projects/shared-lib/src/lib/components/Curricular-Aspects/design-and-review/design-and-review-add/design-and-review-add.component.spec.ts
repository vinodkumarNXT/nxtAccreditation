import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAndReviewAddComponent } from './design-and-review-add.component';

describe('DesignAndReviewAddComponent', () => {
  let component: DesignAndReviewAddComponent;
  let fixture: ComponentFixture<DesignAndReviewAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAndReviewAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignAndReviewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
