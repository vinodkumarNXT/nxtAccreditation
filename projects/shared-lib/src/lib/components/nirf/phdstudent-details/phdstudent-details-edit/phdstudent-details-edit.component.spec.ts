import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdstudentDetailsEditComponent } from './phdstudent-details-edit.component';

describe('PhdstudentDetailsEditComponent', () => {
  let component: PhdstudentDetailsEditComponent;
  let fixture: ComponentFixture<PhdstudentDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdstudentDetailsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdstudentDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
