import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramOutcomesEditComponent } from './program-outcomes-edit.component';

describe('ProgramOutcomesEditComponent', () => {
  let component: ProgramOutcomesEditComponent;
  let fixture: ComponentFixture<ProgramOutcomesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramOutcomesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramOutcomesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
