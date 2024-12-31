import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningProcessAddComponent } from './learning-process-add.component';

describe('LearningProcessAddComponent', () => {
  let component: LearningProcessAddComponent;
  let fixture: ComponentFixture<LearningProcessAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningProcessAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningProcessAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
