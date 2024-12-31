import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedQualityEditComponent } from './adopted-quality-edit.component';

describe('AdoptedQualityEditComponent', () => {
  let component: AdoptedQualityEditComponent;
  let fixture: ComponentFixture<AdoptedQualityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptedQualityEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptedQualityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
