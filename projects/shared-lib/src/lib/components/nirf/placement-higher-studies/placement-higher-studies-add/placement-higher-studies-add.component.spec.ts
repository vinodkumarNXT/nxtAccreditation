import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementHigherStudiesAddComponent } from './placement-higher-studies-add.component';

describe('PlacementHigherStudiesAddComponent', () => {
  let component: PlacementHigherStudiesAddComponent;
  let fixture: ComponentFixture<PlacementHigherStudiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementHigherStudiesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementHigherStudiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
