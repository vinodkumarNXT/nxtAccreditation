import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFellowshipAddComponent } from './research-fellowship-add.component';

describe('ResearchFellowshipAddComponent', () => {
  let component: ResearchFellowshipAddComponent;
  let fixture: ComponentFixture<ResearchFellowshipAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchFellowshipAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchFellowshipAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
