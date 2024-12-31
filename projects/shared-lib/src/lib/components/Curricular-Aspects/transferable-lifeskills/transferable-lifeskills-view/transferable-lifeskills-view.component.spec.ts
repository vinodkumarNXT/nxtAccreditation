import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferableLifeskillsViewComponent } from './transferable-lifeskills-view.component';

describe('TransferableLifeskillsViewComponent', () => {
  let component: TransferableLifeskillsViewComponent;
  let fixture: ComponentFixture<TransferableLifeskillsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferableLifeskillsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferableLifeskillsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
