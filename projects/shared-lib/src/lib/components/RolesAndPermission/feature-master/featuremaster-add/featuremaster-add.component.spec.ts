import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturemasterAddComponent } from './featuremaster-add.component';

describe('FeaturemasterAddComponent', () => {
  let component: FeaturemasterAddComponent;
  let fixture: ComponentFixture<FeaturemasterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturemasterAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturemasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
