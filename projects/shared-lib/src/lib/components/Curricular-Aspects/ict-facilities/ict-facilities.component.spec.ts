import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICTFacilitiesComponent } from './ict-facilities.component';

describe('ICTFacilitiesComponent', () => {
  let component: ICTFacilitiesComponent;
  let fixture: ComponentFixture<ICTFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ICTFacilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ICTFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
