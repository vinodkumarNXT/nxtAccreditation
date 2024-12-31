import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardedTeachersViewComponent } from './awarded-teachers-view.component';

describe('AwardedTeachersViewComponent', () => {
  let component: AwardedTeachersViewComponent;
  let fixture: ComponentFixture<AwardedTeachersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardedTeachersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardedTeachersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
