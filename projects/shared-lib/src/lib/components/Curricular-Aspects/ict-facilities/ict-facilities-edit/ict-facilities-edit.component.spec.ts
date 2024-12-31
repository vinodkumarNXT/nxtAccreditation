import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICTFacilitiesEditComponent } from './ict-facilities-edit.component';

describe('ICTFacilitiesEditComponent', () => {
  let component: ICTFacilitiesEditComponent;
  let fixture: ComponentFixture<ICTFacilitiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ICTFacilitiesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ICTFacilitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
