import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdawardedPerteacherEditComponent } from './phdawarded-perteacher-edit.component';

describe('PhdawardedPerteacherEditComponent', () => {
  let component: PhdawardedPerteacherEditComponent;
  let fixture: ComponentFixture<PhdawardedPerteacherEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdawardedPerteacherEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdawardedPerteacherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
