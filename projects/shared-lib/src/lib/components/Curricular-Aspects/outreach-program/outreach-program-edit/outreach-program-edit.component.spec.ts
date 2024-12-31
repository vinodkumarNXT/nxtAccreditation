import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachProgramEditComponent } from './outreach-program-edit.component';

describe('OutreachProgramEditComponent', () => {
  let component: OutreachProgramEditComponent;
  let fixture: ComponentFixture<OutreachProgramEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutreachProgramEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutreachProgramEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
