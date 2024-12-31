import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICTFacilitiesViewComponent } from './ict-facilities-view.component';

describe('ICTFacilitiesViewComponent', () => {
  let component: ICTFacilitiesViewComponent;
  let fixture: ComponentFixture<ICTFacilitiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ICTFacilitiesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ICTFacilitiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
