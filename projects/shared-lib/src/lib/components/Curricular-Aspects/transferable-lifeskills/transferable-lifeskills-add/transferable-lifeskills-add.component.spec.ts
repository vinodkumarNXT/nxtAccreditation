import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferableLifeskillsAddComponent } from './transferable-lifeskills-add.component';

describe('TransferableLifeskillsAddComponent', () => {
  let component: TransferableLifeskillsAddComponent;
  let fixture: ComponentFixture<TransferableLifeskillsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferableLifeskillsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferableLifeskillsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
