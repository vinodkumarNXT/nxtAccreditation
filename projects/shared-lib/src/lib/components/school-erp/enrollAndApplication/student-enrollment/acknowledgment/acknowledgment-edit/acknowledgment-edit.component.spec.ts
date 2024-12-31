import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgmentEditComponent } from './acknowledgment-edit.component';

describe('AcknowledgmentEditComponent', () => {
  let component: AcknowledgmentEditComponent;
  let fixture: ComponentFixture<AcknowledgmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcknowledgmentEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcknowledgmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
