import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardedTeachersEditComponent } from './awarded-teachers-edit.component';

describe('AwardedTeachersEditComponent', () => {
  let component: AwardedTeachersEditComponent;
  let fixture: ComponentFixture<AwardedTeachersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardedTeachersEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardedTeachersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
