import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedCategorieComponent } from './reserved-categorie.component';

describe('ReservedCategorieComponent', () => {
  let component: ReservedCategorieComponent;
  let fixture: ComponentFixture<ReservedCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservedCategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservedCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
