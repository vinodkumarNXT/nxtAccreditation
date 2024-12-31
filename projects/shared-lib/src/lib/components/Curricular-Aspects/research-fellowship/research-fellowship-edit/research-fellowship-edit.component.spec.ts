import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFellowshipEditComponent } from './research-fellowship-edit.component';

describe('ResearchFellowshipEditComponent', () => {
  let component: ResearchFellowshipEditComponent;
  let fixture: ComponentFixture<ResearchFellowshipEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFellowshipEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFellowshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
