import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationExaminationComponent } from './automation-examination.component';

describe('AutomationExaminationComponent', () => {
  let component: AutomationExaminationComponent;
  let fixture: ComponentFixture<AutomationExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationExaminationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
