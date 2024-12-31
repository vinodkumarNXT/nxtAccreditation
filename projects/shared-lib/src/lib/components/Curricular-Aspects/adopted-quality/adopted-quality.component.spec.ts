import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedQualityComponent } from './adopted-quality.component';

describe('AdoptedQualityComponent', () => {
  let component: AdoptedQualityComponent;
  let fixture: ComponentFixture<AdoptedQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptedQualityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptedQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
