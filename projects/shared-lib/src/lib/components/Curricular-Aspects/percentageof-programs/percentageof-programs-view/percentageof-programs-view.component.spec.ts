import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageofProgramsViewComponent } from './percentageof-programs-view.component';

describe('PercentageofProgramsViewComponent', () => {
  let component: PercentageofProgramsViewComponent;
  let fixture: ComponentFixture<PercentageofProgramsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageofProgramsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageofProgramsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
