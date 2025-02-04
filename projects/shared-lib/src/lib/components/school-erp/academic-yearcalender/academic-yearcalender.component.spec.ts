import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearcalenderComponent } from './academic-yearcalender.component';

describe('AcademicYearcalenderComponent', () => {
  let component: AcademicYearcalenderComponent;
  let fixture: ComponentFixture<AcademicYearcalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicYearcalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicYearcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
