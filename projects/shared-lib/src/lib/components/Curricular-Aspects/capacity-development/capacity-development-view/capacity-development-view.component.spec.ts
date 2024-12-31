import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityDevelopmentViewComponent } from './capacity-development-view.component';

describe('CapacityDevelopmentViewComponent', () => {
  let component: CapacityDevelopmentViewComponent;
  let fixture: ComponentFixture<CapacityDevelopmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapacityDevelopmentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapacityDevelopmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
