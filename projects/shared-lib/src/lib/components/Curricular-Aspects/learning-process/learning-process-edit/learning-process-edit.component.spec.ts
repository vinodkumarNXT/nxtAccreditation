import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningProcessEditComponent } from './learning-process-edit.component';

describe('LearningProcessEditComponent', () => {
  let component: LearningProcessEditComponent;
  let fixture: ComponentFixture<LearningProcessEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningProcessEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningProcessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
