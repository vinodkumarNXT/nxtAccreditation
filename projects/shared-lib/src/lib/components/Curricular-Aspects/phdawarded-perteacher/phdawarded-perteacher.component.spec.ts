import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdawardedPerteacherComponent } from './phdawarded-perteacher.component';

describe('PhdawardedPerteacherComponent', () => {
  let component: PhdawardedPerteacherComponent;
  let fixture: ComponentFixture<PhdawardedPerteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdawardedPerteacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdawardedPerteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
