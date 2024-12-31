import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFacilityEditComponent } from './research-facility-edit.component';

describe('ResearchFacilityEditComponent', () => {
  let component: ResearchFacilityEditComponent;
  let fixture: ComponentFixture<ResearchFacilityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFacilityEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFacilityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
