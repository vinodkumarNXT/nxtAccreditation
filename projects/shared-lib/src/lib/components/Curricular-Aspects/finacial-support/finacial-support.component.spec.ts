import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialSupportComponent } from './finacial-support.component';

describe('FinacialSupportComponent', () => {
  let component: FinacialSupportComponent;
  let fixture: ComponentFixture<FinacialSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinacialSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinacialSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
