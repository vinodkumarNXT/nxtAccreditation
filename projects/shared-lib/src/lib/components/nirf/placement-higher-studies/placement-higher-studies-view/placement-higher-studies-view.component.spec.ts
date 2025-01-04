import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementHigherStudiesViewComponent } from './placement-higher-studies-view.component';

describe('PlacementHigherStudiesViewComponent', () => {
  let component: PlacementHigherStudiesViewComponent;
  let fixture: ComponentFixture<PlacementHigherStudiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementHigherStudiesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementHigherStudiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
