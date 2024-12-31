import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFellowsEditComponent } from './research-fellows-edit.component';

describe('ResearchFellowsEditComponent', () => {
  let component: ResearchFellowsEditComponent;
  let fixture: ComponentFixture<ResearchFellowsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFellowsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFellowsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
