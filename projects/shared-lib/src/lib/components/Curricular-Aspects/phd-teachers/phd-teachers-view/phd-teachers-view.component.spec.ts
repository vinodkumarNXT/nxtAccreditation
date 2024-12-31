import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdTeachersViewComponent } from './phd-teachers-view.component';

describe('PhdTeachersViewComponent', () => {
  let component: PhdTeachersViewComponent;
  let fixture: ComponentFixture<PhdTeachersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdTeachersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdTeachersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
