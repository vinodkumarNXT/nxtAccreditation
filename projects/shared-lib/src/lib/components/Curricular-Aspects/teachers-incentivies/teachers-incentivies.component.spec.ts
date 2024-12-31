import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersIncentiviesComponent } from './teachers-incentivies.component';

describe('TeachersIncentiviesComponent', () => {
  let component: TeachersIncentiviesComponent;
  let fixture: ComponentFixture<TeachersIncentiviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersIncentiviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersIncentiviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
