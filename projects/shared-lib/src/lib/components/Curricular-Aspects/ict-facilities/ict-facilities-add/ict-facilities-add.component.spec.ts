import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICTFacilitiesAddComponent } from './ict-facilities-add.component';

describe('ICTFacilitiesAddComponent', () => {
  let component: ICTFacilitiesAddComponent;
  let fixture: ComponentFixture<ICTFacilitiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ICTFacilitiesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ICTFacilitiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
