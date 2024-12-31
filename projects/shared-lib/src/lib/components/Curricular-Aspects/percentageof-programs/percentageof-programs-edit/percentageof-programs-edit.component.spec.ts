import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageofProgramsEditComponent } from './percentageof-programs-edit.component';

describe('PercentageofProgramsEditComponent', () => {
  let component: PercentageofProgramsEditComponent;
  let fixture: ComponentFixture<PercentageofProgramsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageofProgramsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageofProgramsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
