import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFellowsViewComponent } from './research-fellows-view.component';

describe('ResearchFellowsViewComponent', () => {
  let component: ResearchFellowsViewComponent;
  let fixture: ComponentFixture<ResearchFellowsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFellowsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFellowsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
