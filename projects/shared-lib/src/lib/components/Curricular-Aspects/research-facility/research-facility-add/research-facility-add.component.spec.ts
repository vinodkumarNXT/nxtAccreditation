import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFacilityAddComponent } from './research-facility-add.component';

describe('ResearchFacilityAddComponent', () => {
  let component: ResearchFacilityAddComponent;
  let fixture: ComponentFixture<ResearchFacilityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFacilityAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFacilityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
