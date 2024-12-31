import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialSupportEditComponent } from './finacial-support-edit.component';

describe('FinacialSupportEditComponent', () => {
  let component: FinacialSupportEditComponent;
  let fixture: ComponentFixture<FinacialSupportEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinacialSupportEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinacialSupportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
