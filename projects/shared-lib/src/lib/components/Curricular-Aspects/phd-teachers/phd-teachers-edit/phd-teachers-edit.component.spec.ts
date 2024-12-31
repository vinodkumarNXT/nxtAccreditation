import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdTeachersEditComponent } from './phd-teachers-edit.component';

describe('PhdTeachersEditComponent', () => {
  let component: PhdTeachersEditComponent;
  let fixture: ComponentFixture<PhdTeachersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdTeachersEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdTeachersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
