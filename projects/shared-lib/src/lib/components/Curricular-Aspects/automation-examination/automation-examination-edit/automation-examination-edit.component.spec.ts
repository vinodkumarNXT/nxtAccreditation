import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationExaminationEditComponent } from './automation-examination-edit.component';

describe('AutomationExaminationEditComponent', () => {
  let component: AutomationExaminationEditComponent;
  let fixture: ComponentFixture<AutomationExaminationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationExaminationEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationExaminationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
