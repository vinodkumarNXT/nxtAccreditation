import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProgramViewComponent } from './special-program-view.component';

describe('SpecialProgramViewComponent', () => {
  let component: SpecialProgramViewComponent;
  let fixture: ComponentFixture<SpecialProgramViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialProgramViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialProgramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
