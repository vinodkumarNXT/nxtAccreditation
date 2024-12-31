import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGovtGrantsAddComponent } from './non-govt-grants-add.component';

describe('NonGovtGrantsAddComponent', () => {
  let component: NonGovtGrantsAddComponent;
  let fixture: ComponentFixture<NonGovtGrantsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonGovtGrantsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonGovtGrantsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
