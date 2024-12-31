import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGrantViewComponent } from './project-grant-view.component';

describe('ProjectGrantViewComponent', () => {
  let component: ProjectGrantViewComponent;
  let fixture: ComponentFixture<ProjectGrantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGrantViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectGrantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
