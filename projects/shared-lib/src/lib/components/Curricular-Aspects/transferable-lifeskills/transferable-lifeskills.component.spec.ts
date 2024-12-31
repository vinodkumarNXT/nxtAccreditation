import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferableLifeskillsComponent } from './transferable-lifeskills.component';

describe('TransferableLifeskillsComponent', () => {
  let component: TransferableLifeskillsComponent;
  let fixture: ComponentFixture<TransferableLifeskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferableLifeskillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferableLifeskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
