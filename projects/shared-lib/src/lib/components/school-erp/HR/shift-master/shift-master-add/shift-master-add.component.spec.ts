import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftMasterAddComponent } from './shift-master-add.component';

describe('ShiftMasterAddComponent', () => {
  let component: ShiftMasterAddComponent;
  let fixture: ComponentFixture<ShiftMasterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftMasterAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
