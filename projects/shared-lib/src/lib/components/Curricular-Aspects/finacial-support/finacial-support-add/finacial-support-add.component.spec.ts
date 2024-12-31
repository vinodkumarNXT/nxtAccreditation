import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialSupportAddComponent } from './finacial-support-add.component';

describe('FinacialSupportAddComponent', () => {
  let component: FinacialSupportAddComponent;
  let fixture: ComponentFixture<FinacialSupportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinacialSupportAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinacialSupportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
