import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EContentFacilitiesAddComponent } from './e-content-facilities-add.component';

describe('EContentFacilitiesAddComponent', () => {
  let component: EContentFacilitiesAddComponent;
  let fixture: ComponentFixture<EContentFacilitiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EContentFacilitiesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EContentFacilitiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
