import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProgramAddComponent } from './special-program-add.component';

describe('SpecialProgramAddComponent', () => {
  let component: SpecialProgramAddComponent;
  let fixture: ComponentFixture<SpecialProgramAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialProgramAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialProgramAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
