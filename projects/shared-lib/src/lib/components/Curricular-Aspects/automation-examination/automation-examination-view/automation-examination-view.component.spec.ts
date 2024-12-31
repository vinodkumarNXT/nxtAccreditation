import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationExaminationViewComponent } from './automation-examination-view.component';

describe('AutomationExaminationViewComponent', () => {
  let component: AutomationExaminationViewComponent;
  let fixture: ComponentFixture<AutomationExaminationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationExaminationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationExaminationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
