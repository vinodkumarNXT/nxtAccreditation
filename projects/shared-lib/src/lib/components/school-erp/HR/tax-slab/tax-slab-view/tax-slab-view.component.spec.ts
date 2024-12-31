import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSlabViewComponent } from './tax-slab-view.component';

describe('TaxSlabViewComponent', () => {
  let component: TaxSlabViewComponent;
  let fixture: ComponentFixture<TaxSlabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxSlabViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxSlabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
