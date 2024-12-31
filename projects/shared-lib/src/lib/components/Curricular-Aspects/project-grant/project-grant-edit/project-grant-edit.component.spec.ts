import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGrantEditComponent } from './project-grant-edit.component';

describe('ProjectGrantEditComponent', () => {
  let component: ProjectGrantEditComponent;
  let fixture: ComponentFixture<ProjectGrantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGrantEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectGrantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
