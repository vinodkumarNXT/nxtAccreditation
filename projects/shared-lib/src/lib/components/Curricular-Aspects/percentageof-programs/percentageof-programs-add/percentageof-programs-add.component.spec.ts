import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageofProgramsAddComponent } from './percentageof-programs-add.component';

describe('PercentageofProgramsAddComponent', () => {
  let component: PercentageofProgramsAddComponent;
  let fixture: ComponentFixture<PercentageofProgramsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageofProgramsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageofProgramsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
