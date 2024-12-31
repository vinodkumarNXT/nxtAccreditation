import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersIncentiviesEditComponent } from './teachers-incentivies-edit.component';

describe('TeachersIncentiviesEditComponent', () => {
  let component: TeachersIncentiviesEditComponent;
  let fixture: ComponentFixture<TeachersIncentiviesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersIncentiviesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersIncentiviesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
