import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAndReviewEditComponent } from './design-and-review-edit.component';

describe('DesignAndReviewEditComponent', () => {
  let component: DesignAndReviewEditComponent;
  let fixture: ComponentFixture<DesignAndReviewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAndReviewEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignAndReviewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
