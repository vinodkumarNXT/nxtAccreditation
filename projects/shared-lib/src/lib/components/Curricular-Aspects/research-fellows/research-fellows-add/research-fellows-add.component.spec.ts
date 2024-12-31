import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFellowsAddComponent } from './research-fellows-add.component';

describe('ResearchFellowsAddComponent', () => {
  let component: ResearchFellowsAddComponent;
  let fixture: ComponentFixture<ResearchFellowsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFellowsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFellowsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
