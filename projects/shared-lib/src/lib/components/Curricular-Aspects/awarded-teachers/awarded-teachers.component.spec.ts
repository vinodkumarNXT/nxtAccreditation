import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardedTeachersComponent } from './awarded-teachers.component';

describe('AwardedTeachersComponent', () => {
  let component: AwardedTeachersComponent;
  let fixture: ComponentFixture<AwardedTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardedTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardedTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
