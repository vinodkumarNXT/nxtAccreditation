import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationLoginComponent } from './examination-login.component';

describe('ExaminationLoginComponent', () => {
  let component: ExaminationLoginComponent;
  let fixture: ComponentFixture<ExaminationLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExaminationLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExaminationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
