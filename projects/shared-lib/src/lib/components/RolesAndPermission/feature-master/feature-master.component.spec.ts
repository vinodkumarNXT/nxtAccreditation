import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMasterComponent } from './feature-master.component';

describe('FeatureMasterComponent', () => {
  let component: FeatureMasterComponent;
  let fixture: ComponentFixture<FeatureMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
