import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdTeachersComponent } from './phd-teachers.component';

describe('PhdTeachersComponent', () => {
  let component: PhdTeachersComponent;
  let fixture: ComponentFixture<PhdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
