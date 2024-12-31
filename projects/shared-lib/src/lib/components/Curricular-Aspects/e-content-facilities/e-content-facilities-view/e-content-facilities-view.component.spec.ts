import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EContentFacilitiesViewComponent } from './e-content-facilities-view.component';

describe('EContentFacilitiesViewComponent', () => {
  let component: EContentFacilitiesViewComponent;
  let fixture: ComponentFixture<EContentFacilitiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EContentFacilitiesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EContentFacilitiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
