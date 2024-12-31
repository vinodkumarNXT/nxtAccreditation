import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProgramComponent } from './special-program.component';

describe('SpecialProgramComponent', () => {
  let component: SpecialProgramComponent;
  let fixture: ComponentFixture<SpecialProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
