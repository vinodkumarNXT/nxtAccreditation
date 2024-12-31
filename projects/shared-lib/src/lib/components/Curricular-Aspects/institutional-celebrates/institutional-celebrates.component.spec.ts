import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalCelebratesComponent } from './institutional-celebrates.component';

describe('InstitutionalCelebratesComponent', () => {
  let component: InstitutionalCelebratesComponent;
  let fixture: ComponentFixture<InstitutionalCelebratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalCelebratesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalCelebratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
