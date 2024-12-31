import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdTeachersAddComponent } from './phd-teachers-add.component';

describe('PhdTeachersAddComponent', () => {
  let component: PhdTeachersAddComponent;
  let fixture: ComponentFixture<PhdTeachersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdTeachersAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdTeachersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
