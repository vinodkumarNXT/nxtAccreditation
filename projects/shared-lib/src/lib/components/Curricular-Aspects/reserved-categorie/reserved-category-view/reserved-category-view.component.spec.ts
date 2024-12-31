import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedCategoryViewComponent } from './reserved-category-view.component';

describe('ReservedCategoryViewComponent', () => {
  let component: ReservedCategoryViewComponent;
  let fixture: ComponentFixture<ReservedCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservedCategoryViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservedCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
