import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAddComponent } from './building-add.component';

describe('BuildingAddComponent', () => {
  let component: BuildingAddComponent;
  let fixture: ComponentFixture<BuildingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
