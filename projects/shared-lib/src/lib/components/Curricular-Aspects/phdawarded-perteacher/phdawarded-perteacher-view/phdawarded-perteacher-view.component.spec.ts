import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdawardedPerteacherViewComponent } from './phdawarded-perteacher-view.component';

describe('PhdawardedPerteacherViewComponent', () => {
  let component: PhdawardedPerteacherViewComponent;
  let fixture: ComponentFixture<PhdawardedPerteacherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdawardedPerteacherViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdawardedPerteacherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
