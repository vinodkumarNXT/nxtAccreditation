import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFacilityViewComponent } from './research-facility-view.component';

describe('ResearchFacilityViewComponent', () => {
  let component: ResearchFacilityViewComponent;
  let fixture: ComponentFixture<ResearchFacilityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFacilityViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFacilityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
