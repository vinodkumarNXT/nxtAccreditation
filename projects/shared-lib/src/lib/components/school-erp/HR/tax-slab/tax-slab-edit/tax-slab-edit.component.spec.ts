import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSlabEditComponent } from './tax-slab-edit.component';

describe('TaxSlabEditComponent', () => {
  let component: TaxSlabEditComponent;
  let fixture: ComponentFixture<TaxSlabEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxSlabEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxSlabEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
