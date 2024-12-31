import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGovtGrantsComponent } from './non-govt-grants.component';

describe('NonGovtGrantsComponent', () => {
  let component: NonGovtGrantsComponent;
  let fixture: ComponentFixture<NonGovtGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonGovtGrantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonGovtGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
