import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersIncentiviesViewComponent } from './teachers-incentivies-view.component';

describe('TeachersIncentiviesViewComponent', () => {
  let component: TeachersIncentiviesViewComponent;
  let fixture: ComponentFixture<TeachersIncentiviesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersIncentiviesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersIncentiviesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
