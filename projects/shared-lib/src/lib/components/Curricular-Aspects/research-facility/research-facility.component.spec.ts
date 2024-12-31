import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFacilityComponent } from './research-facility.component';

describe('ResearchFacilityComponent', () => {
  let component: ResearchFacilityComponent;
  let fixture: ComponentFixture<ResearchFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFacilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
