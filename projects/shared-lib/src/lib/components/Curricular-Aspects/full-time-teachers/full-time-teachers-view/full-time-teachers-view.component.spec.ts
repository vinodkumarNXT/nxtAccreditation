import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimeTeachersViewComponent } from './full-time-teachers-view.component';

describe('FullTimeTeachersViewComponent', () => {
  let component: FullTimeTeachersViewComponent;
  let fixture: ComponentFixture<FullTimeTeachersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullTimeTeachersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullTimeTeachersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
