import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdstudentDetailsComponent } from './phdstudent-details.component';

describe('PhdstudentDetailsComponent', () => {
  let component: PhdstudentDetailsComponent;
  let fixture: ComponentFixture<PhdstudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdstudentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdstudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
