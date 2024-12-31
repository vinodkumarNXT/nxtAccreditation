import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAndProcedureAddComponent } from './system-and-procedure-add.component';

describe('SystemAndProcedureAddComponent', () => {
  let component: SystemAndProcedureAddComponent;
  let fixture: ComponentFixture<SystemAndProcedureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemAndProcedureAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemAndProcedureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
