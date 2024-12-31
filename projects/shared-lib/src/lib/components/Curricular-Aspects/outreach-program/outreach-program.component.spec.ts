import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachProgramComponent } from './outreach-program.component';

describe('OutreachProgramComponent', () => {
  let component: OutreachProgramComponent;
  let fixture: ComponentFixture<OutreachProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutreachProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutreachProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
