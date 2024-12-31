import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProgramEditComponent } from './special-program-edit.component';

describe('SpecialProgramEditComponent', () => {
  let component: SpecialProgramEditComponent;
  let fixture: ComponentFixture<SpecialProgramEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialProgramEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialProgramEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
