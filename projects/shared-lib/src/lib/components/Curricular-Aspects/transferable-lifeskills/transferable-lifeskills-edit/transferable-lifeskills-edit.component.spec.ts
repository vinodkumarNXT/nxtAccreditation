import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferableLifeskillsEditComponent } from './transferable-lifeskills-edit.component';

describe('TransferableLifeskillsEditComponent', () => {
  let component: TransferableLifeskillsEditComponent;
  let fixture: ComponentFixture<TransferableLifeskillsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferableLifeskillsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferableLifeskillsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
