import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachProgramViewComponent } from './outreach-program-view.component';

describe('OutreachProgramViewComponent', () => {
  let component: OutreachProgramViewComponent;
  let fixture: ComponentFixture<OutreachProgramViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutreachProgramViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutreachProgramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
