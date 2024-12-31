import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAndProcedureComponent } from './system-and-procedure.component';

describe('SystemAndProcedureComponent', () => {
  let component: SystemAndProcedureComponent;
  let fixture: ComponentFixture<SystemAndProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemAndProcedureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemAndProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
