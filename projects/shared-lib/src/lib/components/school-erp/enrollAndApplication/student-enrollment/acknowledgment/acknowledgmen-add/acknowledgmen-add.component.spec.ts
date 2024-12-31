import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgmenAddComponent } from './acknowledgmen-add.component';

describe('AcknowledgmenAddComponent', () => {
  let component: AcknowledgmenAddComponent;
  let fixture: ComponentFixture<AcknowledgmenAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcknowledgmenAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcknowledgmenAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
