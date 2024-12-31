import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersIncentiviesAddComponent } from './teachers-incentivies-add.component';

describe('TeachersIncentiviesAddComponent', () => {
  let component: TeachersIncentiviesAddComponent;
  let fixture: ComponentFixture<TeachersIncentiviesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersIncentiviesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersIncentiviesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
