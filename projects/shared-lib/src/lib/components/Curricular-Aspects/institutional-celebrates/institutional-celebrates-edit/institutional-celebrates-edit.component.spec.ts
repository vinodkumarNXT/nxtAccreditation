import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalCelebratesEditComponent } from './institutional-celebrates-edit.component';

describe('InstitutionalCelebratesEditComponent', () => {
  let component: InstitutionalCelebratesEditComponent;
  let fixture: ComponentFixture<InstitutionalCelebratesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalCelebratesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalCelebratesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
