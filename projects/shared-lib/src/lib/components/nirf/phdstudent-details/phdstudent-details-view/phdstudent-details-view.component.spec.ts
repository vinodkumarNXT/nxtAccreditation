import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdstudentDetailsViewComponent } from './phdstudent-details-view.component';

describe('PhdstudentDetailsViewComponent', () => {
  let component: PhdstudentDetailsViewComponent;
  let fixture: ComponentFixture<PhdstudentDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdstudentDetailsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdstudentDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
