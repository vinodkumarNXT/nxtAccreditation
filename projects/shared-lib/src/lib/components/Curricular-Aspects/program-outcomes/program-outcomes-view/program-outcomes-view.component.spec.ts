import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramOutcomesViewComponent } from './program-outcomes-view.component';

describe('ProgramOutcomesViewComponent', () => {
  let component: ProgramOutcomesViewComponent;
  let fixture: ComponentFixture<ProgramOutcomesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramOutcomesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramOutcomesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
