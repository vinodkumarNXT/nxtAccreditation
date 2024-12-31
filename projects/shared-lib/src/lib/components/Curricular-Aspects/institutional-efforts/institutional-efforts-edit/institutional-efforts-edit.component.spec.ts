import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalEffortsEditComponent } from './institutional-efforts-edit.component';

describe('InstitutionalEffortsEditComponent', () => {
  let component: InstitutionalEffortsEditComponent;
  let fixture: ComponentFixture<InstitutionalEffortsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalEffortsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalEffortsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
