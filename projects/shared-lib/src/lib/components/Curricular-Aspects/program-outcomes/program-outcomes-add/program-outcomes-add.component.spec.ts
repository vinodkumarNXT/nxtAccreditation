import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramOutcomesAddComponent } from './program-outcomes-add.component';

describe('ProgramOutcomesAddComponent', () => {
  let component: ProgramOutcomesAddComponent;
  let fixture: ComponentFixture<ProgramOutcomesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramOutcomesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramOutcomesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
