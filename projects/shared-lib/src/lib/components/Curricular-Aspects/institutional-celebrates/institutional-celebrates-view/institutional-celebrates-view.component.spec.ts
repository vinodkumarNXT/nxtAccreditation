import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalCelebratesViewComponent } from './institutional-celebrates-view.component';

describe('InstitutionalCelebratesViewComponent', () => {
  let component: InstitutionalCelebratesViewComponent;
  let fixture: ComponentFixture<InstitutionalCelebratesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalCelebratesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalCelebratesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
