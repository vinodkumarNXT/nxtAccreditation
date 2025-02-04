import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAndConductCertificateComponent } from './study-and-conduct-certificate.component';

describe('StudyAndConductCertificateComponent', () => {
  let component: StudyAndConductCertificateComponent;
  let fixture: ComponentFixture<StudyAndConductCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyAndConductCertificateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyAndConductCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
