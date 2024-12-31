import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardedTeachersAddComponent } from './awarded-teachers-add.component';

describe('AwardedTeachersAddComponent', () => {
  let component: AwardedTeachersAddComponent;
  let fixture: ComponentFixture<AwardedTeachersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardedTeachersAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardedTeachersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
