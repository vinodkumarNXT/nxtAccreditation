import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdawardedPerteacherAddComponent } from './phdawarded-perteacher-add.component';

describe('PhdawardedPerteacherAddComponent', () => {
  let component: PhdawardedPerteacherAddComponent;
  let fixture: ComponentFixture<PhdawardedPerteacherAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdawardedPerteacherAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdawardedPerteacherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
