import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedQualityAddComponent } from './adopted-quality-add.component';

describe('AdoptedQualityAddComponent', () => {
  let component: AdoptedQualityAddComponent;
  let fixture: ComponentFixture<AdoptedQualityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptedQualityAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptedQualityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
