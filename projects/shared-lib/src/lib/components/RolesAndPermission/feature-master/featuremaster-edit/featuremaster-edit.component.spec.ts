import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturemasterEditComponent } from './featuremaster-edit.component';

describe('FeaturemasterEditComponent', () => {
  let component: FeaturemasterEditComponent;
  let fixture: ComponentFixture<FeaturemasterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturemasterEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturemasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
