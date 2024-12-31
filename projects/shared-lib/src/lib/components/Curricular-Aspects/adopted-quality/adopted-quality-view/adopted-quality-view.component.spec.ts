import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedQualityViewComponent } from './adopted-quality-view.component';

describe('AdoptedQualityViewComponent', () => {
  let component: AdoptedQualityViewComponent;
  let fixture: ComponentFixture<AdoptedQualityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptedQualityViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptedQualityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
