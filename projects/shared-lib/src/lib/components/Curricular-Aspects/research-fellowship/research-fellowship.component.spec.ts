import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFellowshipComponent } from './research-fellowship.component';

describe('ResearchFellowshipComponent', () => {
  let component: ResearchFellowshipComponent;
  let fixture: ComponentFixture<ResearchFellowshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFellowshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFellowshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
