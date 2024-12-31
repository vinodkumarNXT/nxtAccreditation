import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFellowsComponent } from './research-fellows.component';

describe('ResearchFellowsComponent', () => {
  let component: ResearchFellowsComponent;
  let fixture: ComponentFixture<ResearchFellowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFellowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFellowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
