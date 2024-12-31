import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSlabAddComponent } from './tax-slab-add.component';

describe('TaxSlabAddComponent', () => {
  let component: TaxSlabAddComponent;
  let fixture: ComponentFixture<TaxSlabAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxSlabAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxSlabAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
