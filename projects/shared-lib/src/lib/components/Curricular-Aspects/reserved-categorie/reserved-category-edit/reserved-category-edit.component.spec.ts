import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedCategoryEditComponent } from './reserved-category-edit.component';

describe('ReservedCategoryEditComponent', () => {
  let component: ReservedCategoryEditComponent;
  let fixture: ComponentFixture<ReservedCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservedCategoryEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservedCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
