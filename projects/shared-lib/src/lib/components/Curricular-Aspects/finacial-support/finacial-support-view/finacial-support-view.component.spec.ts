import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialSupportViewComponent } from './finacial-support-view.component';

describe('FinacialSupportViewComponent', () => {
  let component: FinacialSupportViewComponent;
  let fixture: ComponentFixture<FinacialSupportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinacialSupportViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinacialSupportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
