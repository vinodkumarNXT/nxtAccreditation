import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectsViewComponent } from './research-projects-view.component';

describe('ResearchProjectsViewComponent', () => {
  let component: ResearchProjectsViewComponent;
  let fixture: ComponentFixture<ResearchProjectsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchProjectsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
