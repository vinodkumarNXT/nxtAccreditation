import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalCelebratesAddComponent } from './institutional-celebrates-add.component';

describe('InstitutionalCelebratesAddComponent', () => {
  let component: InstitutionalCelebratesAddComponent;
  let fixture: ComponentFixture<InstitutionalCelebratesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalCelebratesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalCelebratesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
