import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementHigherStudiesComponent } from './placement-higher-studies.component';

describe('PlacementHigherStudiesComponent', () => {
  let component: PlacementHigherStudiesComponent;
  let fixture: ComponentFixture<PlacementHigherStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementHigherStudiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementHigherStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
