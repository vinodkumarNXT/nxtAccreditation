import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGovtGrantsEditComponent } from './non-govt-grants-edit.component';

describe('NonGovtGrantsEditComponent', () => {
  let component: NonGovtGrantsEditComponent;
  let fixture: ComponentFixture<NonGovtGrantsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonGovtGrantsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonGovtGrantsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
