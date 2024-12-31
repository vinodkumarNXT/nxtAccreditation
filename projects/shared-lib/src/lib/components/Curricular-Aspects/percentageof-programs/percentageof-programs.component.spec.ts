import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageofProgramsComponent } from './percentageof-programs.component';

describe('PercentageofProgramsComponent', () => {
  let component: PercentageofProgramsComponent;
  let fixture: ComponentFixture<PercentageofProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageofProgramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageofProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
