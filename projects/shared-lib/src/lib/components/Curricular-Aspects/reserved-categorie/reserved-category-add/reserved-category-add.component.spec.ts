import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedCategoryAddComponent } from './reserved-category-add.component';

describe('ReservedCategoryAddComponent', () => {
  let component: ReservedCategoryAddComponent;
  let fixture: ComponentFixture<ReservedCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservedCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservedCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
