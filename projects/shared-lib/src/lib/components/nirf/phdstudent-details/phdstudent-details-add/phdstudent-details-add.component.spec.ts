import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdstudentDetailsAddComponent } from './phdstudent-details-add.component';

describe('PhdstudentDetailsAddComponent', () => {
  let component: PhdstudentDetailsAddComponent;
  let fixture: ComponentFixture<PhdstudentDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdstudentDetailsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdstudentDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
