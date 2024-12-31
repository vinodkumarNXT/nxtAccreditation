import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalEffortsAddComponent } from './institutional-efforts-add.component';

describe('InstitutionalEffortsAddComponent', () => {
  let component: InstitutionalEffortsAddComponent;
  let fixture: ComponentFixture<InstitutionalEffortsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalEffortsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalEffortsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
