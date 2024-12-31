import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCampusEditComponent } from './green-campus-edit.component';

describe('GreenCampusEditComponent', () => {
  let component: GreenCampusEditComponent;
  let fixture: ComponentFixture<GreenCampusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenCampusEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenCampusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
