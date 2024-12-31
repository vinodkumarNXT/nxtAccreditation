import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesEditComponent } from './leaves-edit.component';

describe('LeavesEditComponent', () => {
  let component: LeavesEditComponent;
  let fixture: ComponentFixture<LeavesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeavesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeavesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
