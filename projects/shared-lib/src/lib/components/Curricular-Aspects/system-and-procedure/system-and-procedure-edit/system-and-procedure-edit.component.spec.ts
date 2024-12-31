import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAndProcedureEditComponent } from './system-and-procedure-edit.component';

describe('SystemAndProcedureEditComponent', () => {
  let component: SystemAndProcedureEditComponent;
  let fixture: ComponentFixture<SystemAndProcedureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemAndProcedureEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemAndProcedureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
