import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementHigherStudiesEditComponent } from './placement-higher-studies-edit.component';

describe('PlacementHigherStudiesEditComponent', () => {
  let component: PlacementHigherStudiesEditComponent;
  let fixture: ComponentFixture<PlacementHigherStudiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementHigherStudiesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementHigherStudiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
