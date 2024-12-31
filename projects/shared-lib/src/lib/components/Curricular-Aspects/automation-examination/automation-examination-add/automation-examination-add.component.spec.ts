import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationExaminationAddComponent } from './automation-examination-add.component';

describe('AutomationExaminationAddComponent', () => {
  let component: AutomationExaminationAddComponent;
  let fixture: ComponentFixture<AutomationExaminationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationExaminationAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationExaminationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
