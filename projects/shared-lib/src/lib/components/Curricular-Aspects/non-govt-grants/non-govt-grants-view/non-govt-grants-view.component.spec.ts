import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGovtGrantsViewComponent } from './non-govt-grants-view.component';

describe('NonGovtGrantsViewComponent', () => {
  let component: NonGovtGrantsViewComponent;
  let fixture: ComponentFixture<NonGovtGrantsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonGovtGrantsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonGovtGrantsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
