import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFellowshipViewComponent } from './research-fellowship-view.component';

describe('ResearchFellowshipViewComponent', () => {
  let component: ResearchFellowshipViewComponent;
  let fixture: ComponentFixture<ResearchFellowshipViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFellowshipViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFellowshipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
