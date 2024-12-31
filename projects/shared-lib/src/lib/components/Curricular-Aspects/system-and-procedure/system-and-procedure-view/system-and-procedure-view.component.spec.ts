import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAndProcedureViewComponent } from './system-and-procedure-view.component';

describe('SystemAndProcedureViewComponent', () => {
  let component: SystemAndProcedureViewComponent;
  let fixture: ComponentFixture<SystemAndProcedureViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemAndProcedureViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemAndProcedureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
