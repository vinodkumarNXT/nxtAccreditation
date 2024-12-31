import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachProgramAddComponent } from './outreach-program-add.component';

describe('OutreachProgramAddComponent', () => {
  let component: OutreachProgramAddComponent;
  let fixture: ComponentFixture<OutreachProgramAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutreachProgramAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutreachProgramAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
