import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationLoginComponent } from './accreditation-login.component';

describe('AccreditationLoginComponent', () => {
  let component: AccreditationLoginComponent;
  let fixture: ComponentFixture<AccreditationLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccreditationLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccreditationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
