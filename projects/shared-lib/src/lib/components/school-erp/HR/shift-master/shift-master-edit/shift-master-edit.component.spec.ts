import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftMasterEditComponent } from './shift-master-edit.component';

describe('ShiftMasterEditComponent', () => {
  let component: ShiftMasterEditComponent;
  let fixture: ComponentFixture<ShiftMasterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftMasterEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
